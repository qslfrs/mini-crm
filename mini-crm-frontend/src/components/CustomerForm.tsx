import { useState } from 'react';
import api from '../api/api';

export default function CustomerForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/customers', form);
      alert('Customer ditambahkan!');
      setForm({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error(err);
      alert('Gagal menambahkan customer');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded shadow bg-white dark:bg-gray-900">
      <input placeholder="Name" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500" required />
      <input placeholder="Email" value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500" required />
      <input placeholder="Phone" value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500" required />
      <button type="submit"
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">Tambah Customer</button>
    </form>
  );
}
