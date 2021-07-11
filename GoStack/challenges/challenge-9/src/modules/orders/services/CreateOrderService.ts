import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import { throws } from 'assert';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IFindProducts {
  id: string;
}

interface IProduct {
  id: string;
  quantity: number;
}

interface IOrderProduct {
  product_id: string;
  price: number;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer not found');
    }

    const productsIds: IFindProducts[] = products.map(product => {
      return { id: product.id };
    });

    const foundProducts = await this.productsRepository.findAllById(
      productsIds,
    );

    if (!foundProducts || foundProducts.length === 0) {
      throw new AppError('There is no product with the given id');
    }

    const updateQuantityProducts: IProduct[] = [];
    const orderProducts: IOrderProduct[] = products.map(product => {
      const foundProduct = foundProducts.find(p => p.id === product.id);

      if (foundProduct) {
        const currentQuantity = foundProduct?.quantity;
        const { price } = foundProduct;

        if (currentQuantity && product.quantity > currentQuantity) {
          throw new AppError(
            'This Product has insufficient quantity to be ordered',
          );
        }
        const newQuantity = foundProduct.quantity - product.quantity;
        updateQuantityProducts.push({ ...product, quantity: newQuantity });
        return {
          product_id: product.id,
          quantity: product.quantity,
          price,
        } as IOrderProduct;
      }
      throw new AppError('Product not found');
    });

    const newOrder = await this.ordersRepository.create({
      customer,
      products: orderProducts,
    });

    await this.productsRepository.updateQuantity(updateQuantityProducts);

    return newOrder;
  }
}

export default CreateOrderService;
