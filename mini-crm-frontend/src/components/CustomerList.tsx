import { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get('/customers').then(res => setCustomers(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Daftar Customer</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">ID</th>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Nama</th>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Email</th>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Telepon</th>
              <th className="border px-4 py-2 text-left text-gray-800 dark:text-white">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c: any) => (
              <tr key={c.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">{c.id}</td>
                <td className="border px-4 py-2">{c.name}</td>
                <td className="border px-4 py-2">{c.email}</td>
                <td className="border px-4 py-2">{c.phone}</td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/customer/${c.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Lihat Order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
