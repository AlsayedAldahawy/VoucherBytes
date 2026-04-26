import { Link } from 'react-router-dom';
import type { Voucher } from '../types/voucher';
import { ArrowRight, Tag } from 'lucide-react';
import { getCategoryLogo, categoryDomains } from '../utils/logos';

interface VoucherCardProps {
  voucher: Voucher;
}

export default function VoucherCard({ voucher }: VoucherCardProps) {
  const logoUrl = getCategoryLogo(voucher.category);
  const domain = categoryDomains[voucher.category];

  return (
    <div className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit">
              <Tag className="w-3.5 h-3.5" />
              {voucher.category}
            </span>
            {logoUrl && (
              <img 
                src={logoUrl} 
                alt={`${voucher.category} logo`} 
                className="h-8 w-auto object-contain mt-2"
                onError={(e) => { 
                  if (domain && e.currentTarget.src.includes('icon.horse')) {
                    e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                  } else {
                    e.currentTarget.style.display = 'none';
                  }
                }}
              />
            )}
          </div>
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            ${voucher.price}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {voucher.name}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
          {voucher.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
          <Link
            to={`/voucher/${voucher.id}`}
            className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-sm"
          >
            View Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
