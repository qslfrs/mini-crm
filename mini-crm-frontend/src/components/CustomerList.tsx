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
      <h2 className="text-xl font-bold mb-2">Daftar Customer</h2>
      <ul>
        {customers.map((c: any) => (
          <li key={c.id}>
            <Link to={`/customer/${c.id}`} className="text-blue-600 underline">{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
