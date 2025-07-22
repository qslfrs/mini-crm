import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 px-4 py-3 shadow-md">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-white">
          Mini CRM Warung
        </Link>
        <div className="space-x-4 text-sm">
          <Link to="/add-customer" className="hover:underline text-gray-800 dark:text-gray-200">Tambah Customer</Link>
          <Link to="/add-order" className="hover:underline text-gray-800 dark:text-gray-200">Tambah Order</Link>
          <Link to="/customers" className="hover:underline text-gray-800 dark:text-gray-200">Daftar Customer</Link>
          <Link to="/orders" className="hover:underline text-gray-800 dark:text-gray-200">Daftar Order</Link>
          <button onClick={toggleTheme} className="ml-4 text-sm border px-2 py-1 rounded text-gray-700 dark:text-white">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}
