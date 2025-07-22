import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customerRoutes';
import orderRoutes from './routes/orderRoutes';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

export default app;
