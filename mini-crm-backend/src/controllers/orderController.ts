import { Request, Response } from 'express';
import { readDB, writeDB } from '../utils/db';

export const addOrder = (req: Request, res: Response) => {
  const { customer_id, items, total_price } = req.body;
  if (!customer_id || !Array.isArray(items) || typeof total_price !== 'number') {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const db = readDB();
  const customer = db.customers.find((c: any) => c.id === customer_id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });

  const newOrder = { id: Date.now(), customer_id, items, total_price };
  db.orders.push(newOrder);
  writeDB(db);

  res.status(201).json(newOrder);
};

export const getOrders = (req: Request, res: Response) => {
  const { customer_id } = req.query;
  const db = readDB();

  if (customer_id) {
    const orders = db.orders.filter((o: any) => o.customer_id == customer_id);
    return res.json(orders);
  }

  res.json(db.orders);
};
