import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import promotions from '../config/promotions';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed the announcement
    const dismissed = localStorage.getItem('announcement-dismissed');
    if (!dismissed && promotions.showGlobalAnnouncement) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-dismissed', 'true');
  };

  const handleScrollToVouchers = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    // Or if we want to scroll to a specific section, we can implement that. 
    // Usually for Home it makes sense to just scroll a bit down or to the provider list.
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-brand-gradient text-white px-4 py-3 sm:px-6 lg:px-8 z-50">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto relative z-10">
        <div className="flex-1 flex justify-center items-center gap-x-4 gap-y-2 flex-wrap text-sm font-medium">
          <p className="flex items-center gap-1.5 drop-shadow-sm font-semibold text-center">
            {promotions.announcementMessage}
          </p>
          <button
            onClick={handleScrollToVouchers}
            className="flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-sm font-semibold hover:bg-white/30 transition-all backdrop-blur-sm"
          >
            {promotions.announcementButtonText}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-1 justify-end shrink-0">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px] rounded-full hover:bg-white/10 transition-colors"
            onClick={handleDismiss}
          >
            <span className="sr-only">Dismiss</span>
            <X className="h-5 w-5 text-white/90" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
