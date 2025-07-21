import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

export default function CustomerDetail() {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get(`/orders?customer_id=${id}`).then(res => setOrders(res.data));
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Order Customer #{id}</h2>
      <ul>
        {orders.map((o: any) => (
          <li key={o.id}>
            Total: Rp{o.total_price}, Items: {o.items.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
