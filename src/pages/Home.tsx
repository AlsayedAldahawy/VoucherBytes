import { useState, useMemo } from 'react';
import VoucherCard from '../components/VoucherCard';
import Filters from '../components/Filters';
import LogoMarquee from '../components/LogoMarquee';
import data from '../data/vouchers.json';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(data.vouchers.map((v) => v.category));
    return Array.from(cats).sort();
  }, []);

  const filteredVouchers = useMemo(() => {
    return data.vouchers.filter((voucher) => {
      const matchesSearch = voucher.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || voucher.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-gradient pt-16 pb-20 space-y-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            VoucherBytes
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto drop-shadow-sm">
            Affordable Tech Exam Vouchers to accelerate your IT career.
          </p>
        </div>
      </div>

      <LogoMarquee />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 pb-20">
        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filteredVouchers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVouchers.map((voucher) => (
              <VoucherCard key={voucher.id} voucher={voucher} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-[#0B1220] rounded-2xl shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-slate-200 dark:border-blue-900/30">
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              No vouchers found matching your criteria.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
