import { useEffect, useState } from 'react';
import api from '../api/api';

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Daftar Order</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">ID</th>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Customer ID</th>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Items</th>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o: any) => (
              <tr key={o.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">{o.id}</td>
                <td className="border px-4 py-2">{o.customer_id}</td>
                <td className="border px-4 py-2">{o.items.join(', ')}</td>
                <td className="border px-4 py-2">Rp{o.total_price.toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
