import { Link } from 'react-router-dom';
import { categoryDomains, getDomainSlug } from '../utils/logos';

export default function LogoMarquee() {
  // Build entries with unique domains but keep category info for linking
  const entries = Object.entries(categoryDomains).reduce<{ domain: string; category: string }[]>((acc, [category, domain]) => {
    if (!acc.find((e) => e.domain === domain)) {
      acc.push({ domain, category });
    }
    return acc;
  }, []);

  const renderLogos = () => (
    <>
      {entries.map((entry, idx) => {
        const slug = getDomainSlug(entry.domain);
        const logoContent = (
          <img
            src={`https://icon.horse/icon/${entry.domain}`}
            alt={`${entry.category} certification vouchers`}
            className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            onError={(e) => {
              if (e.currentTarget.src.includes('icon.horse')) {
                e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${entry.domain}&sz=128`;
              } else {
                e.currentTarget.style.display = 'none';
              }
            }}
          />
        );

        return slug ? (
          <Link
            key={`${entry.domain}-${idx}`}
            to={`/${slug}`}
            className="flex items-center justify-center shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300"
            title={`${entry.category} Certification Vouchers`}
            aria-label={`Browse ${entry.category} certification vouchers`}
          >
            {logoContent}
          </Link>
        ) : (
          <div key={`${entry.domain}-${idx}`} className="flex items-center justify-center shrink-0">
            {logoContent}
          </div>
        );
      })}
    </>
  );

  return (
    <div className="w-full bg-white dark:bg-slate-900 py-10 border-b border-slate-200 dark:border-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          Trusted Vouchers for Top Tech Providers
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden group">
        {/* We use a mask to fade out the edges for a smoother look */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white dark:from-slate-900 dark:via-transparent dark:to-slate-900 w-full h-full"></div>
        
        <div className="animate-marquee flex items-center shrink-0 gap-16 md:gap-24 px-8 md:px-12 min-w-full group-hover:[animation-play-state:paused]">
          {renderLogos()}
        </div>
        
        <div aria-hidden="true" className="animate-marquee flex items-center shrink-0 gap-16 md:gap-24 px-8 md:px-12 min-w-full group-hover:[animation-play-state:paused]">
          {renderLogos()}
        </div>
      </div>
    </div>
  );
}
