import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import CategoryRepository from '../repositories/CategoryRepository';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categoryEntity = await categoryRepository.createOrFindCategory({
      category,
    });

    const transactions = await transactionRepository.find();

    const balance = await transactionRepository.getBalance(transactions);

    if (type === 'outcome' && balance.total < value) {
      throw new AppError('Value exceeding the balance');
    }

    const transaction = await transactionRepository.save({
      title,
      value,
      type,
      category_id: categoryEntity.id,
    });

    return transaction;
  }
}

export default CreateTransactionService;
