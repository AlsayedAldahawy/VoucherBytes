import { Link } from 'react-router-dom';
import { Moon, Sun, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/voucherBytesLogo.png';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-[#0B1220]/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="VoucherBytes Logo" className="h-8 w-auto object-contain" />
            <span className="hidden sm:inline-block font-bold text-xl tracking-tight">
              <span className="text-[#1E3A8A] dark:text-blue-400">Voucher</span>
              <span className="text-[#3B82F6]">Bytes</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-sm font-semibold leading-6 text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>

            <Link
              to="/policy"
              className="text-sm font-semibold leading-6 text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Policy
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-1.5 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contact
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
