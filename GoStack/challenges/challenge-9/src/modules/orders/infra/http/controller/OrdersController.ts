import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';
import ordersRouter from '../routes/orders.routes';

interface IProduct {
  id: number;
  quantity: number;
}

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findOrder = container.resolve(FindOrderService);

    const order = await findOrder.execute({ id });

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({ customer_id, products });

    // delete order.id;
    delete order.customer_id;
    delete order.created_at;
    delete order.updated_at;
    delete order.customer.created_at;
    delete order.customer.updated_at;

    return response.status(201).json(order);
  }
}
