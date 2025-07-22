import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CustomerForm from './components/CustomerForm';
import OrderForm from './components/OrderForm';
import CustomerList from './components/CustomerList';
import OrderList from './components/OrderList';
import CustomerDetail from './pages/CustomerDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-6 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-customer" element={<CustomerForm />} />
          <Route path="/add-order" element={<OrderForm />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/customer/:id" element={<CustomerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
