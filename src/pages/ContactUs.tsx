import { useEffect } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Contacts from '../data/contacts';

export default function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us | VoucherBytes';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a question about our vouchers or need support? We're here to help! Reach out to us via any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Direct Contacts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Contact Information
            </h2>
            
            <a 
              href={`mailto:${Contacts.email}`} 
              className="flex items-start gap-4 p-4 bg-white dark:bg-[#0B1220] rounded-2xl border border-slate-200 dark:border-blue-900/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Email Us</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">{Contacts.email}</p>
              </div>
            </a>

            <a 
              href={`tel:${Contacts.phone}`} 
              className="flex items-start gap-4 p-4 bg-white dark:bg-[#0B1220] rounded-2xl border border-slate-200 dark:border-blue-900/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Call Us</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">{Contacts.phoneString}</p>
              </div>
            </a>

            <a 
              href={Contacts.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 bg-white dark:bg-[#0B1220] rounded-2xl border border-slate-200 dark:border-blue-900/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">WhatsApp</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Chat with us instantly for fast support.</p>
              </div>
            </a>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Social Media
            </h2>
            
            <a 
              href={Contacts.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-[#0B1220] rounded-2xl border border-slate-200 dark:border-blue-900/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-slate-900 dark:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.15H5.078z" />
                </svg>
              </div>
              <span className="font-semibold text-slate-900 dark:text-white text-lg">X (Twitter)</span>
            </a>

            <a 
              href={Contacts.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-[#0B1220] rounded-2xl border border-slate-200 dark:border-blue-900/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-[#e8f3fb] dark:bg-[#0077b5]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-[#0077b5]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="font-semibold text-slate-900 dark:text-white text-lg">LinkedIn</span>
            </a>

            <a 
              href={Contacts.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-[#0B1220] rounded-2xl border border-slate-200 dark:border-blue-900/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-[#ebf0fa] dark:bg-[#1877f2]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-[#1877f2]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-slate-900 dark:text-white text-lg">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
