import { useState, useEffect } from 'react';
import api from '../api/api';

export default function OrderForm() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    customer_id: '',
    items: '',
    total_price: 0,
  });

  useEffect(() => {
    api.get('/customers').then(res => setCustomers(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/orders', {
        ...form,
        items: form.items.split(',').map(i => i.trim()),
        total_price: Number(form.total_price),
      });
      alert('Order berhasil ditambahkan!');
      setForm({ customer_id: '', items: '', total_price: 0 });
    } catch {
      alert('Gagal tambah order');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <select value={form.customer_id}
        onChange={e => setForm({ ...form, customer_id: e.target.value })}
        className="border px-2 py-1 w-full" required>
        <option value="">Pilih Customer</option>
        {customers.map((c: any) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <input placeholder="Items (pisah dengan koma)" value={form.items}
        onChange={e => setForm({ ...form, items: e.target.value })}
        className="border px-2 py-1 w-full" required />
      <input type="number" placeholder="Total Price" value={form.total_price}
        onChange={e => setForm({ ...form, total_price: +e.target.value })}
        className="border px-2 py-1 w-full" required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Tambah Order</button>
    </form>
  );
}
