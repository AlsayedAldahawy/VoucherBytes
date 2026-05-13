import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import VoucherCard from '../components/VoucherCard';
import Filters from '../components/Filters';
import LogoMarquee from '../components/LogoMarquee';
import data from '../data/vouchers.json';
import { categorySlugs, getCategoryLogo } from '../utils/logos';

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

  const providerEntries = Object.entries(categorySlugs);

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

      {/* Browse by Provider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Browse by Provider
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Find discounted exam vouchers from leading certification providers.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {providerEntries.map(([name, slug]) => {
            const logoUrl = getCategoryLogo(name);
            return (
              <Link
                key={slug}
                to={`/${slug}`}
                className="group flex items-center gap-3 p-4 bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-blue-900/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {logoUrl && (
                  <div className="w-9 h-9 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center p-1.5 flex-shrink-0">
                    <img
                      src={logoUrl}
                      alt={`${name} logo`}
                      className="h-6 w-auto object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                )}
                <span className="font-semibold text-sm text-slate-800 dark:text-white truncate flex-1">{name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>

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
