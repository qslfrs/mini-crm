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
      alert('Gagal menambahkan customer');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <input placeholder="Name" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        className="border px-2 py-1 w-full" required />
      <input placeholder="Email" value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        className="border px-2 py-1 w-full" required />
      <input placeholder="Phone" value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        className="border px-2 py-1 w-full" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Tambah Customer</button>
    </form>
  );
}
