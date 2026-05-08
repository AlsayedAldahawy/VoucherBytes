import { Shield, FileText, AlertTriangle, RefreshCw, Lock, Scale } from 'lucide-react';
import { useState } from 'react';

type SectionId = 'terms' | 'privacy' | 'refund' | 'usage' | 'disclaimer' | 'liability';

interface PolicySection {
  id: SectionId;
  icon: React.ElementType;
  title: string;
  content: string[];
}

const policySections: PolicySection[] = [
  {
    id: 'terms',
    icon: FileText,
    title: 'Terms of Service',
    content: [
      'By accessing and using VoucherBytes, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our platform.',
      'VoucherBytes provides a marketplace for purchasing discounted IT certification exam vouchers. All vouchers are sourced through authorized channels and are guaranteed to be valid at the time of purchase.',
      'You must be at least 18 years of age or have the legal consent of a parent or guardian to use our services. You are responsible for maintaining the confidentiality of your account information.',
      'We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes your acceptance of the updated terms.',
    ],
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'Privacy Policy',
    content: [
      'Your privacy is important to us. VoucherBytes collects only the minimum information necessary to process your orders and provide customer support.',
      'Personal information we may collect includes: your name, email address, phone number, and payment details. This information is used solely for order processing, communication, and improving our services.',
      'We do not sell, trade, or share your personal information with third parties except as required to complete transactions (e.g., payment processors) or as required by law.',
      'We use industry-standard security measures including SSL encryption to protect your personal data. However, no method of electronic transmission is 100% secure, and we cannot guarantee absolute security.',
      'You have the right to request access to, correction of, or deletion of your personal data at any time by contacting our support team.',
    ],
  },
  {
    id: 'refund',
    icon: RefreshCw,
    title: 'Refund & Cancellation Policy',
    content: [
      'Due to the digital nature of our products, all sales are final once a voucher code has been delivered and revealed to the customer.',
      'Refunds may be considered in the following circumstances: if the voucher code is invalid or expired at the time of delivery, if a duplicate voucher was mistakenly sent, or if the order was not fulfilled within the promised delivery timeframe.',
      'Refund requests must be submitted within 48 hours of purchase. To request a refund, please contact our support team via WhatsApp or email with your order details and reason for the request.',
      'If a refund is approved, it will be processed within 5-7 business days using the original payment method. VoucherBytes reserves the right to deny refund requests that do not meet the stated criteria.',
    ],
  },
  {
    id: 'usage',
    icon: Shield,
    title: 'Acceptable Use Policy',
    content: [
      'Vouchers purchased from VoucherBytes are for personal use only and must not be resold, redistributed, or transferred without explicit permission.',
      'You agree not to use our platform for any illegal, fraudulent, or unauthorized purposes. Any attempt to manipulate, exploit, or abuse our systems or promotions will result in immediate account termination.',
      'Sharing, publishing, or distributing voucher codes on public forums, social media, or any other channels is strictly prohibited.',
      'We reserve the right to refuse service or cancel orders if we suspect fraudulent activity or violation of these terms.',
    ],
  },
  {
    id: 'disclaimer',
    icon: AlertTriangle,
    title: 'Disclaimers',
    content: [
      "VoucherBytes acts as a reseller of certification exam vouchers and is not affiliated with, endorsed by, or an official representative of any certification body (e.g., Microsoft, AWS, CompTIA, Cisco, etc.).",
      "Exam voucher availability, pricing, and validity periods are subject to change based on the certification provider\u0027s policies. VoucherBytes is not responsible for changes made by certification providers after a voucher has been purchased.",
      "The platform and its content are provided as-is without warranties of any kind, either express or implied. VoucherBytes does not guarantee exam pass rates or specific outcomes from using our vouchers.",
      'All trademarks, logos, and brand names mentioned on VoucherBytes are the property of their respective owners and are used for identification purposes only.',
    ],
  },
  {
    id: 'liability',
    icon: Scale,
    title: 'Limitation of Liability',
    content: [
      'To the maximum extent permitted by applicable law, VoucherBytes and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.',
      'Our total liability for any claim arising from or related to these terms shall not exceed the amount paid by you for the specific voucher in question.',
      'VoucherBytes shall not be liable for any losses caused by events beyond our reasonable control, including but not limited to internet outages, server failures, or actions of third-party certification providers.',
      'By using our services, you agree to indemnify and hold harmless VoucherBytes, its operators, and affiliates from any claims, damages, or expenses arising from your use of the platform or violation of these terms.',
    ],
  },
];

export default function PolicyAgreements() {
  const [activeSection, setActiveSection] = useState<SectionId>('terms');

  const currentSection = policySections.find((s) => s.id === activeSection)!;

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-gradient pt-16 pb-20 space-y-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            Policy & Agreements
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto drop-shadow-sm">
            Transparency and trust are at the core of everything we do.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="sticky top-24 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 px-3">
                Sections
              </p>
              {policySections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#111827] hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <section.icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                    <span className="truncate">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.08)] p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <currentSection.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {currentSection.title}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    Last updated: May 2026
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {currentSection.content.map((paragraph, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{index + 1}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{paragraph}</p>
                  </div>
                ))}
              </div>

              {/* Navigation between sections */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-blue-900/30 flex justify-between">
                {(() => {
                  const currentIndex = policySections.findIndex((s) => s.id === activeSection);
                  const prev = currentIndex > 0 ? policySections[currentIndex - 1] : null;
                  const next = currentIndex < policySections.length - 1 ? policySections[currentIndex + 1] : null;

                  return (
                    <>
                      {prev ? (
                        <button
                          onClick={() => setActiveSection(prev.id)}
                          className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                          {prev.title}
                        </button>
                      ) : <div />}
                      {next ? (
                        <button
                          onClick={() => setActiveSection(next.id)}
                          className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
                        >
                          {next.title}
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                      ) : null}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
