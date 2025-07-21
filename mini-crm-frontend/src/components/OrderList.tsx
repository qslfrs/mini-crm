import { useEffect, useState } from 'react';
import api from '../api/api';

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Daftar Order</h2>
      <ul>
        {orders.map((o: any) => (
          <li key={o.id}>
            Customer ID: {o.customer_id}, Total: Rp{o.total_price}, Items: {o.items.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
