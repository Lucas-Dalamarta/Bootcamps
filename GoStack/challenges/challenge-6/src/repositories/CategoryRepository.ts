import { EntityRepository, Repository, getManager } from 'typeorm';

import Category from '../models/Category';

interface Request {
  category: string;
}

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {
  public async createOrFindCategory({ category }: Request): Promise<Category> {
    const categoryAlreadyExists = await this.findOne({
      where: { title: category },
    });

    if (categoryAlreadyExists) {
      return categoryAlreadyExists;
    }

    const newCategory = await this.create({ title: category });

    await this.save(newCategory);

    return newCategory;
  }
}

export default CategoryRepository;
