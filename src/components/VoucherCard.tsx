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
    <div className={`group relative flex flex-col bg-white dark:bg-[#0B1220] rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none hover:dark:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 border border-slate-200 dark:border-blue-900/30 overflow-hidden ${voucher.soldOut ? 'opacity-75 grayscale-[0.5]' : ''}`}>

      <div className="p-6 flex-1 flex flex-col relative z-0">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 w-fit">
                <Tag className="w-3.5 h-3.5" />
                {voucher.category}
              </span>
              {voucher.soldOut && (
                <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800/50 w-fit">
                  Sold Out
                </span>
              )}
            </div>
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
          {voucher.soldOut ? (
            <button
              disabled
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 rounded-xl cursor-not-allowed shadow-sm border border-transparent dark:border-slate-700"
            >
              Currently Unavailable
            </button>
          ) : (
            <Link
              to={`/voucher/${voucher.id}`}
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold text-white bg-brand-gradient hover:brightness-110 rounded-xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 shadow-sm border border-transparent dark:border-blue-500/30"
            >
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
