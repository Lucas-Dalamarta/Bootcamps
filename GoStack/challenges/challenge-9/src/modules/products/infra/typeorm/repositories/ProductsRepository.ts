import { getRepository, Repository } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductsQuantityDTO from '@modules/products/dtos/IUpdateProductsQuantityDTO';
import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const product = await this.ormRepository.create({
      name,
      price,
      quantity,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return product;
  }

  public async findAllById(products: IFindProducts[]): Promise<Product[]> {
    const productsList = await this.ormRepository.findByIds(products);

    return productsList;
  }

  public async updateQuantity(
    products: IUpdateProductsQuantityDTO[],
  ): Promise<Product[]> {
    const productsToUpdate = await this.ormRepository.findByIds(
      products.map(p => {
        return p.id;
      }),
    );
    const productsQuantityToUpdate: Product[] = productsToUpdate.map(pu => {
      const quantity = products.find(p => p.id === pu.id)?.quantity;

      if (quantity) {
        return { ...pu, quantity };
      }
      return pu;
    });

    const updatedProducts = await this.ormRepository.save(
      productsQuantityToUpdate,
    );

    return updatedProducts;
  }
}

export default ProductsRepository;
