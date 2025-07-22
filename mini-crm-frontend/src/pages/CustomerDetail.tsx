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
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Order Customer #{id}
      </h2>
      {orders.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Belum ada order.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">ID Order</th>
                <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Items</th>
                <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any) => (
                <tr key={order.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.items.join(', ')}</td>
                  <td className="border px-4 py-2">Rp{order.total_price.toLocaleString('id-ID')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
