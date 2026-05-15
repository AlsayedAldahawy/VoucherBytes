import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Tag, MessageCircle, Clock, Globe, Award, Zap, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import data from '../data/vouchers.json';
import providerPages from '../data/providerPages';
import type { ProviderPageData } from '../data/providerPages';
import type { Voucher } from '../types/voucher';
import { getCategoryLogo, categoryDomains, categorySlugs } from '../utils/logos';

export default function VoucherDetails() {
  const { slug } = useParams<{ slug: string }>();
  const voucher = data.vouchers.find((v) => v.slug === slug) as Voucher | undefined;
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const logoUrl = voucher ? getCategoryLogo(voucher.category) : null;
  const domain = voucher ? categoryDomains[voucher.category] : null;
  
  const providerSlug = voucher ? categorySlugs[voucher.category] : null;
  const providerData = providerPages.find((p: ProviderPageData) => p.slug === providerSlug);

  const hasDiscount = (voucher?.discount ?? 0) > 0;
  const discountedPrice = hasDiscount && voucher ? Math.round(voucher.price * (1 - voucher.discount!)) : voucher?.price;
  const savings = hasDiscount && voucher ? Math.round(voucher.price * voucher.discount!) : 0;

  // Fallback generic FAQs if provider data is missing
  const faqs = providerData?.faqs || [
    { question: 'How do certification vouchers work?', answer: 'After purchase, you receive an alphanumeric voucher code via email. You can enter this code during the checkout process on the official testing provider\'s website (like Pearson VUE) to cover the cost of the exam.' },
    { question: 'Are these vouchers official and valid globally?', answer: 'Yes, all our vouchers are 100% official and valid globally unless specified otherwise. They are sourced from authorized partners.' },
    { question: 'How long is the voucher valid for?', answer: 'Vouchers generally have a validity of up to 12 months from the date of issue. We always provide vouchers with maximum possible validity.' },
    { question: 'How quickly will I receive my voucher?', answer: 'Delivery is typically within a few hours during business days, securely delivered directly to your email or via WhatsApp.' }
  ];

  // Fallback generic related providers
  const relatedProviders = providerData?.relatedProviders || ['aws-certification-vouchers', 'comptia-certification-vouchers'];

  useEffect(() => {
    if (voucher) {
      const title = `${voucher.name} Voucher | Discount Exam Code | Voucher Bytes`;
      const description = `Get your discounted ${voucher.name} exam voucher. 100% genuine, officially verified ${voucher.category} certification voucher. Save money on your IT certification today.`;
      const keywords = `${voucher.name} voucher, ${voucher.category} exam discount, ${voucher.name} certification cost, buy ${voucher.name} voucher, cheap IT exam vouchers`;

      document.title = title;

      const metaTags: Record<string, string> = {
        'description': description,
        'keywords': keywords,
        'og:title': title,
        'og:description': description,
        'og:url': window.location.href,
        'twitter:title': title,
        'twitter:description': description,
      };

      Object.entries(metaTags).forEach(([name, content]) => {
        // Handle name= attributes (standard meta)
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
          // Handle property= attributes (Open Graph)
          element = document.querySelector(`meta[property="${name}"]`);
        }
        
        if (element) {
          element.setAttribute('content', content);
        } else {
          const newMeta = document.createElement('meta');
          if (name.startsWith('og:')) {
            newMeta.setAttribute('property', name);
          } else {
            newMeta.setAttribute('name', name);
          }
          newMeta.setAttribute('content', content);
          document.head.appendChild(newMeta);
        }
      });

      // Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', window.location.href);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', window.location.href);
        document.head.appendChild(link);
      }
    }
  }, [voucher]);

  if (!voucher) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Voucher Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-center max-w-md">
          The voucher you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-gradient rounded-xl hover:brightness-110 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Vouchers
        </Link>

        {/* Top Section: The Voucher Card Header & Pricing */}
        <div className="bg-white dark:bg-[#0B1220] rounded-3xl shadow-xl dark:shadow-[0_0_20px_rgba(59,130,246,0.1)] border border-slate-200 dark:border-blue-900/30 overflow-hidden mb-12">
          {/* Header */}
          <div className="bg-brand-gradient p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-6">
              <div className="flex flex-col gap-4">
                <Link
                  to={`/${providerSlug}`}
                  className="inline-flex items-center self-start gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors"
                  title={`View all ${voucher.category} vouchers`}
                >
                  <Tag className="w-3.5 h-3.5" />
                  {voucher.category}
                </Link>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {voucher.name}
                </h1>
                <p className="text-blue-100 text-lg max-w-2xl mt-2">
                  {voucher.description}
                </p>
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

          {/* Pricing & Quick Included */}
          <div className="p-8 sm:p-10">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
              <div className="flex-1 w-full flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Quick Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="font-medium text-sm">100% Genuine Code</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="font-medium text-sm">1 Year Validity</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="font-medium text-sm">Secure Email Delivery</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <Globe className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="font-medium text-sm">Valid Globally</span>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="w-full md:w-80 bg-slate-50 dark:bg-[#0B1220] p-6 rounded-2xl border border-slate-200 dark:border-blue-900/50 text-center dark:shadow-[0_0_15px_rgba(59,130,246,0.05)] shrink-0">
                {hasDiscount && (
                  <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-sm font-bold animate-pulse">
                    <Zap className="w-4 h-4" />
                    Save ${savings}
                  </div>
                )}
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                  {hasDiscount ? 'Special Discounted Price' : 'Current Price'}
                </div>
                {hasDiscount && (
                  <div className="text-xl font-medium text-slate-400 dark:text-slate-500 line-through mb-1">
                    ${voucher.price}
                  </div>
                )}
                <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                  ${discountedPrice}
                </div>
                {voucher.soldOut ? (
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 dark:text-slate-400 rounded-xl cursor-not-allowed shadow-none"
                  >
                    Out of Stock
                  </button>
                ) : (
                  <a
                    href={`https://wa.link/5hj3kj?text=Hi! I am interested in purchasing the ${encodeURIComponent(voucher.name)} (${voucher.category}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-[#25D366] rounded-xl hover:bg-[#20bd5a] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-emerald-200/50 dark:shadow-[0_0_15px_rgba(37,211,102,0.15)]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Buy via WhatsApp
                  </a>
                )}
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                  Secure checkout. Instant delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Landing Page Sections */}
        <div className="space-y-12 bg-white dark:bg-[#0B1220] p-8 sm:p-12 rounded-3xl shadow-xl dark:shadow-[0_0_20px_rgba(59,130,246,0.1)] border border-slate-200 dark:border-blue-900/30">
          
          {/* Section 1: Overview */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="text-blue-500 w-6 h-6" />
              What is the {voucher.name}?
            </h2>
            <article className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
              <p>
                The <strong>{voucher.name}</strong> is a highly sought-after credential for IT professionals looking to validate their expertise in {voucher.category} technologies. Achieving this certification demonstrates your capability to industry standards and can significantly enhance your career prospects, opening doors to new opportunities and higher salary brackets.
              </p>
              <p>
                By utilizing this official exam voucher, you secure a discounted rate for your test while ensuring 100% compatibility with official testing centers like Pearson VUE. Whether you are kickstarting your IT journey or advancing to a senior role, this voucher is your cost-effective gateway to becoming certified.
              </p>
            </article>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Section 2: Exam Details */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Exam & Voucher Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Voucher Validity</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Our vouchers are valid for up to 12 months from the date of purchase. We highly recommend scheduling your exam well in advance to secure your preferred date and time.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Global Acceptance</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  This {voucher.category} voucher can be redeemed internationally. You can use it to book either an online proctored exam from home or an in-person test at a local testing center.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Official Redemption</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  The alphanumeric code you receive operates exactly like cash on the official vendor's portal. Simply apply it at checkout to bring your exam fee down to $0.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Target Audience</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ideal for students, professionals, and corporate teams looking to minimize out-of-pocket expenses for their mandatory or career-enhancing technical certifications.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Section 3: Benefits of buying here */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Zap className="text-blue-500 w-6 h-6" />
              Why Buy From Voucher Bytes?
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Significant Cost Savings</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Certification exams are expensive. We source official vouchers in bulk, passing the discount directly to you, making professional growth affordable.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">100% Authentic & Verified</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Every voucher is verified and guaranteed to work on official portals. Never worry about invalid codes or fraudulent sellers.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Fast, Secure Delivery</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Skip the wait. Complete your purchase securely via WhatsApp and receive your digital voucher code promptly, ready for immediate redemption.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Section 4: FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq: { question: string, answer: string }, index: number) => (
                <div 
                  key={index}
                  className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors text-left"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="font-semibold text-slate-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                      <div className="mt-2 border-t border-slate-200 dark:border-slate-700/50 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Section 5: Related Providers Internal Links */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Explore Related Certifications
            </h2>
            <div className="flex flex-wrap gap-4">
              {relatedProviders.map((slug: string) => {
                const provider = providerPages.find((p: ProviderPageData) => p.slug === slug);
                if (!provider) return null;
                const relLogoUrl = getCategoryLogo(provider.providerName);
                
                return (
                  <Link 
                    key={slug}
                    to={`/${slug}`}
                    className="group flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all pr-5"
                  >
                    {relLogoUrl && (
                      <div className="w-8 h-8 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center p-1 shrink-0">
                        <img 
                          src={relLogoUrl} 
                          alt={`${provider.providerName} logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                    )}
                    <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                      {provider.providerName} Vouchers
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
