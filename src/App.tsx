import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VoucherDetails from './pages/VoucherDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-500 font-sans text-slate-900 dark:text-slate-50">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/voucher/:id" element={<VoucherDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
