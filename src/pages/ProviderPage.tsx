import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { ChevronDown, CheckCircle2, ArrowRight, Award, ShieldCheck, Zap, Star, MessageCircle } from 'lucide-react';
import providerPages from '../data/providerPages';
import voucherData from '../data/vouchers.json';
import VoucherCard from '../components/VoucherCard';
import Contacts from '../data/contacts';
import { getCategoryLogo } from '../utils/logos';
import promotions from '../config/promotions';

export default function ProviderPage() {
  const { providerSlug } = useParams<{ providerSlug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const provider = useMemo(
    () => providerPages.find((p) => p.slug === providerSlug),
    [providerSlug]
  );

  const providerVouchers = useMemo(() => {
    if (!provider) return [];
    return voucherData.vouchers.filter((v) => v.category === provider.category);
  }, [provider]);

  const relatedProviderData = useMemo(() => {
    if (!provider) return [];
    return provider.relatedProviders
      .map((slug) => providerPages.find((p) => p.slug === slug))
      .filter(Boolean) as typeof providerPages;
  }, [provider]);

  const logoUrl = provider ? getCategoryLogo(provider.category) : null;

  // SEO: set document title and meta tags
  useEffect(() => {
    if (!provider) return;
    document.title = provider.seo.title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', provider.seo.description);
    setMeta('keywords', provider.seo.keywords);
    setMeta('og:title', provider.seo.title, 'property');
    setMeta('og:description', provider.seo.description, 'property');
    setMeta('og:url', `https://voucherbytes.com/${provider.slug}`, 'property');

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = 'VoucherBytes | Save on Tech Exam Vouchers';
    };
  }, [provider]);

  if (!provider) {
    return <Navigate to="/" replace />;
  }

  const benefits = [
    { icon: ShieldCheck, title: 'Verified Vouchers', description: 'Every voucher is authenticated and sourced through authorized channels.' },
    { icon: Star, title: 'Competitive Pricing', description: 'We offer the best market prices through our direct partnerships.' },
    { icon: Zap, title: 'Instant Delivery', description: 'Receive your voucher code immediately after purchase via WhatsApp or email.' },
    { icon: Award, title: 'Trusted Platform', description: 'Thousands of IT professionals trust us for their certification needs.' },
  ];

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-gradient pt-16 pb-20 space-y-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {logoUrl && (
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center p-3 border border-white/20">
                <img
                  src={logoUrl}
                  alt={`${provider.providerName} logo`}
                  className={`h-10 w-auto object-contain brightness-0 invert`}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          )}
          {promotions.showHeroBadge && (
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-semibold shadow-lg animate-fade-in-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              🔥 25% OFF All {provider.providerName} Vouchers
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            {provider.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-sm mb-8">
            {provider.hero.subheading}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            {provider.hero.ctaText.replace('on WhatsApp', '')}
          </Link>
        </div>
      </div>

      {/* Popular Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800/40 mb-4">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Popular Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {provider.providerName} Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {provider.certifications.map((cert) => (
            <div
              key={cert.name}
              className="group p-6 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-sm hover:shadow-lg dark:shadow-[0_0_15px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{cert.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Vouchers */}
      {providerVouchers.length > 0 && (
        <div className="bg-slate-50 dark:bg-[#0A0F1F] py-20 border-y border-slate-200 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800/40 mb-4">
                <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Available Now</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                {provider.providerName} Exam Vouchers
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mt-3 max-w-2xl mx-auto">
                Browse our current {provider.providerName} voucher inventory. All vouchers are verified and ready for use.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {providerVouchers.map((voucher) => (
                <VoucherCard key={voucher.id} voucher={voucher} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Buy {provider.providerName} Vouchers from Us?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We go beyond just selling vouchers — we invest in your certification success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="flex gap-4 p-6 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-blue-900/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-50 dark:bg-[#0A0F1F] py-20 border-y border-slate-200 dark:border-blue-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Common questions about {provider.providerName} certification vouchers.
            </p>
          </div>

          <div className="space-y-4">
            {provider.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 dark:text-slate-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Providers */}
      {relatedProviderData.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Explore Other Certifications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Looking for more? Check out vouchers from these related providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {relatedProviderData.map((related) => {
              const relatedLogo = getCategoryLogo(related.category);
              return (
                <Link
                  key={related.slug}
                  to={`/${related.slug}`}
                  className="group flex items-center gap-4 p-6 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {relatedLogo && (
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src={relatedLogo}
                        alt={`${related.providerName} logo`}
                        className="h-8 w-auto object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 dark:text-white">{related.providerName} Vouchers</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{related.seo.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Final CTA */}
      <div className="bg-brand-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-md">
            Ready to Get {provider.providerName} Certified?
          </h2>
          <p className="text-xl text-blue-100 mb-8 drop-shadow-sm">
            Contact us now for the best prices on {provider.providerName} certification exam vouchers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
