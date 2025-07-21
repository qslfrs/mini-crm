import CustomerForm from '../components/CustomerForm';
import OrderForm from '../components/OrderForm';
import CustomerList from '../components/CustomerList';
import OrderList from '../components/OrderList';
import { useTheme } from '../context/ThemeContext';

export default function Home() {

    const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Mini CRM Warung Kuliner</h1>
        <button onClick={toggleTheme} className="px-3 py-1 border rounded">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* <h1 className="text-2xl font-bold text-center mb-4">Mini CRM Warung Kuliner</h1> */}
      <CustomerForm />
      <OrderForm />
      <CustomerList />
      <OrderList />

    </div>
  );

//   return (
//     <div className="p-4 max-w-3xl mx-auto space-y-6">
//       <h1 className="text-2xl font-bold text-center mb-4">Mini CRM Warung Kuliner</h1>
//       <CustomerForm />
//       <OrderForm />
//       <CustomerList />
//       <OrderList />
//     </div>
//   );
}
