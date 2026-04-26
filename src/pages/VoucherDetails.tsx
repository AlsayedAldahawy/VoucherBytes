import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Tag, MessageCircle } from 'lucide-react';
import data from '../data/vouchers.json';
import type { Voucher } from '../types/voucher';
import { getCategoryLogo, categoryDomains } from '../utils/logos';

export default function VoucherDetails() {
  const { id } = useParams<{ id: string }>();
  const voucher = data.vouchers.find((v) => v.id === Number(id)) as Voucher | undefined;
  
  const logoUrl = voucher ? getCategoryLogo(voucher.category) : null;
  const domain = voucher ? categoryDomains[voucher.category] : null;

  if (!voucher) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Voucher Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-center max-w-md">
          The voucher you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Vouchers
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 dark:bg-indigo-900 p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-6">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center self-start gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
                  <Tag className="w-3.5 h-3.5" />
                  {voucher.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {voucher.name}
                </h1>
              </div>
              {logoUrl && (
                <div className="bg-white/90 p-3 rounded-2xl shrink-0">
                  <img 
                    src={logoUrl} 
                    alt={`${voucher.category} logo`} 
                    className="h-16 w-16 object-contain"
                    onError={(e) => { 
                      if (domain && e.currentTarget.src.includes('icon.horse')) {
                        e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                      } else {
                        e.currentTarget.style.display = 'none';
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-8 justify-between items-start">
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {voucher.description}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                    This is a globally valid exam voucher. Once purchased, you will receive an alphanumeric code that can be redeemed on the official testing provider's platform to schedule your exam. The voucher is valid for 12 months from the date of purchase.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      100% Genuine Exam Voucher Code
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      1 Year Validity
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                      <ShieldCheck className="w-5 h-5 text-blue-500" />
                      Secure Delivery via Email
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="w-full sm:w-72 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                  Price
                </div>
                <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                  ${voucher.price}
                </div>
                <a
                  href={`https://wa.link/5hj3kj?text=Hi! I am interested in purchasing the ${encodeURIComponent(voucher.name)} (${voucher.category}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-[#25D366] rounded-xl hover:bg-[#20bd5a] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-emerald-200 dark:shadow-none"
                >
                  <MessageCircle className="w-5 h-5" />
                  Buy via WhatsApp
                </a>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                  Secure checkout. Instant delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
