import { Request, Response } from 'express';
import { readDB, writeDB } from '../utils/db';
import { validateCustomer } from '../utils/validators';

export const addCustomer = (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  if (!validateCustomer(name, email, phone)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const db = readDB();
  const newCustomer = { id: Date.now(), name, email, phone };
  db.customers.push(newCustomer);
  writeDB(db);

  res.status(201).json(newCustomer);
};

export const getCustomers = (req: Request, res: Response) => {
  const db = readDB();
  res.json(db.customers);
};
