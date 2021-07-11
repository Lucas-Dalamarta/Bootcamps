import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const foundProduct = await this.productsRepository.findByName(name);

    if (foundProduct) {
      throw new AppError(
        'Product with the same name already exists in the database',
      );
    }

    const newProduct = this.productsRepository.create({
      name,
      price,
      quantity,
    });

    return newProduct;
  }
}

export default CreateProductService;
