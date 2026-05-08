import { Shield, Zap, Heart, Target, Users, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-transparent transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-gradient pt-16 pb-20 space-y-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto drop-shadow-sm">
            Empowering IT professionals with affordable certification vouchers since day one.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800/40">
              <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Making IT Certifications{' '}
              <span className="text-brand-gradient">Accessible to Everyone</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              At VoucherBytes, we believe that cost should never be a barrier to career growth. 
              We partner directly with leading tech certification providers to bring you verified, 
              discounted exam vouchers — helping thousands of IT professionals worldwide achieve 
              their certification goals.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you're a fresh graduate starting your career or an experienced professional 
              adding new credentials, we're here to support your journey with genuine vouchers 
              at the best possible prices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '5,000+', label: 'Vouchers Sold', icon: Award },
              { number: '50+', label: 'Exam Types', icon: Shield },
              { number: '98%', label: 'Satisfaction Rate', icon: Heart },
              { number: '24/7', label: 'Support Available', icon: Zap },
            ].map((stat) => (
              <div
                key={stat.label}
                className="relative group p-6 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-sm hover:shadow-lg dark:shadow-[0_0_15px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-50 dark:bg-[#0A0F1F] py-20 border-y border-slate-200 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800/40 mb-4">
              <Heart className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trust & Authenticity',
                description:
                  'Every voucher we sell is 100% genuine and verified. We maintain direct partnerships with certification providers to guarantee authenticity.',
              },
              {
                icon: Users,
                title: 'Community First',
                description:
                  'We are driven by our community of IT professionals. Your success is our success, and we constantly evolve based on your feedback.',
              },
              {
                icon: Zap,
                title: 'Speed & Convenience',
                description:
                  'From browsing to checkout, we ensure a seamless experience. Instant delivery and responsive support keep you moving forward.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group p-8 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-sm hover:shadow-lg dark:shadow-[0_0_15px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose VoucherBytes?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We go beyond just selling vouchers — we invest in your career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: 'Verified Vouchers Only',
              description: 'We never sell expired or invalid codes. Each voucher is verified before listing.',
            },
            {
              title: 'Best Market Prices',
              description: 'Our direct partnerships allow us to offer the most competitive pricing available.',
            },
            {
              title: 'Instant Delivery',
              description: 'Receive your voucher code immediately after purchase via WhatsApp or email.',
            },
            {
              title: 'Dedicated Support',
              description: 'Our support team is available around the clock to assist with any questions or issues.',
            },
          ].map((item, index) => (
            <div key={item.title} className="flex gap-4 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-[#111827] transition-colors duration-300">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
