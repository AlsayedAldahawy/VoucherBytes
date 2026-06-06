export interface ProviderCertification {
  name: string;
  description: string;
}

export interface ProviderFAQ {
  question: string;
  answer: string;
}

export interface ProviderPageData {
  slug: string;
  providerName: string;
  category: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    heading: string;
    subheading: string;
    ctaText: string;
  };
  certifications: ProviderCertification[];
  faqs: ProviderFAQ[];
  relatedProviders: string[];
}

const providerPages: ProviderPageData[] = [
  {
    slug: 'aws-certification-vouchers',
    providerName: 'AWS',
    category: 'AWS',
    seo: {
      title: 'AWS Certification Vouchers & Exam Discounts | Voucher Bytes',
      description: 'Save on AWS certification exams with verified vouchers and exclusive exam discounts from Voucher Bytes. Get Cloud Practitioner, Solutions Architect & more.',
      keywords: 'AWS certification vouchers, AWS exam discount, AWS Cloud Practitioner voucher, AWS Solutions Architect voucher, cheap AWS exam',
    },
    hero: {
      heading: 'AWS Certification Exam Vouchers',
      subheading: 'Advance your cloud career with discounted AWS certification exam vouchers. Verified, affordable, and delivered instantly.',
      ctaText: 'Get Your AWS Voucher',
    },
    certifications: [
      { name: 'Cloud Practitioner', description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.' },
      { name: 'Solutions Architect – Associate', description: 'Design distributed systems and architectures on AWS.' },
      { name: 'Developer – Associate', description: 'Develop, deploy, and debug cloud-based applications on AWS.' },
      { name: 'SysOps Administrator', description: 'Deploy, manage, and operate scalable systems on AWS.' },
      { name: 'DevOps Engineer – Professional', description: 'Provision, operate, and manage distributed application systems on AWS.' },
      { name: 'Solutions Architect – Professional', description: 'Advanced skills in designing complex AWS architectures.' },
    ],
    faqs: [
      { question: 'How do AWS exam vouchers work?', answer: 'After purchase, you receive a voucher code that you apply during checkout on the AWS certification scheduling portal. The voucher covers the full exam fee.' },
      { question: 'Are these official AWS vouchers?', answer: 'Yes, all our AWS vouchers are sourced through authorized channels and are valid for scheduling exams through the official AWS certification portal.' },
      { question: 'How long are AWS vouchers valid?', answer: 'AWS vouchers typically remain valid for 12 months from the date of issue. We always provide vouchers with maximum remaining validity.' },
      { question: 'Can I use one voucher for any AWS exam?', answer: 'Our vouchers are categorized by exam level (Practitioner, Associate, Professional). Please check the voucher details to ensure it covers your target exam.' },
    ],
    relatedProviders: ['google-cloud-certification-vouchers', 'microsoft-certification-vouchers'],
  },
  {
    slug: 'cisco-exam-vouchers',
    providerName: 'Cisco',
    category: 'Cisco',
    seo: {
      title: 'Cisco Exam Vouchers & CCNA/CCNP Discounts | Voucher Bytes',
      description: 'Get discounted Cisco exam vouchers for CCNA, CCNP, and CyberOps certifications. Verified vouchers with instant delivery from Voucher Bytes.',
      keywords: 'Cisco exam vouchers, CCNA voucher, CCNP discount, Cisco certification discount, CyberOps voucher',
    },
    hero: {
      heading: 'Cisco Certification Exam Vouchers',
      subheading: 'Earn your CCNA, CCNP, or specialist Cisco certifications with discounted, verified exam vouchers.',
      ctaText: 'Get Your Cisco Voucher',
    },
    certifications: [
      { name: 'CCNA (200-301)', description: 'Cisco Certified Network Associate — networking fundamentals, IP services, and security.' },
      { name: 'CCNP Enterprise', description: 'Advanced enterprise networking including infrastructure and design.' },
      { name: 'CCNP Security', description: 'Advanced security technologies and solutions for Cisco networks.' },
      { name: 'CyberOps Associate', description: 'Security operations center concepts and skills.' },
      { name: 'DevNet Associate', description: 'Software development and design for Cisco platforms.' },
      { name: 'CCIE Enterprise', description: 'Expert-level certification for complex enterprise networks.' },
    ],
    faqs: [
      { question: 'How do Cisco exam vouchers work?', answer: 'You receive a voucher code after purchase that can be redeemed on the Pearson VUE website when scheduling your Cisco exam.' },
      { question: 'Are these official Cisco vouchers?', answer: 'Yes, all vouchers are sourced through authorized channels and are fully valid for Cisco certification exams via Pearson VUE.' },
      { question: 'How long are Cisco vouchers valid?', answer: 'Cisco vouchers are typically valid for 6–12 months. We ensure maximum validity on every voucher sold.' },
      { question: 'Can I use one voucher for multiple exams?', answer: 'Each voucher is valid for one exam attempt. Different exam tiers (Associate, Professional, Expert) may require specific voucher types.' },
    ],
    relatedProviders: ['fortinet-certification-vouchers', 'checkpoint-exam-vouchers'],
  },
  {
    slug: 'comptia-certification-vouchers',
    providerName: 'CompTIA',
    category: 'CompTIA',
    seo: {
      title: 'CompTIA Certification Vouchers & Exam Discounts | Voucher Bytes',
      description: 'Save on CompTIA exams including Security+, Network+, A+, and more. Verified vouchers at the best prices from Voucher Bytes.',
      keywords: 'CompTIA vouchers, Security+ voucher, Network+ discount, A+ exam voucher, CompTIA certification discount',
    },
    hero: {
      heading: 'CompTIA Certification Exam Vouchers',
      subheading: 'Kickstart or advance your IT career with affordable CompTIA exam vouchers. From A+ to CASP+, we have you covered.',
      ctaText: 'Get Your CompTIA Voucher',
    },
    certifications: [
      { name: 'A+', description: 'Foundation-level certification for IT operational roles.' },
      { name: 'Network+', description: 'Validate skills in networking concepts and infrastructure.' },
      { name: 'Security+', description: 'Baseline certification for cybersecurity professionals worldwide.' },
      { name: 'CySA+', description: 'Cybersecurity analyst skills for threat detection and response.' },
      { name: 'PenTest+', description: 'Penetration testing and vulnerability management skills.' },
      { name: 'CASP+', description: 'Advanced-level cybersecurity practitioner certification.' },
      { name: 'Cloud+', description: 'Cloud computing and virtualization certification.' },
      { name: 'Linux+', description: 'Linux system administration and management.' },
    ],
    faqs: [
      { question: 'How do CompTIA vouchers work?', answer: 'After purchase, you receive a voucher code to use on the Pearson VUE scheduling portal when booking your CompTIA exam.' },
      { question: 'Are these official CompTIA vouchers?', answer: 'Yes, all our CompTIA vouchers are 100% authentic and valid for use on the official Pearson VUE testing platform.' },
      { question: 'How long are CompTIA vouchers valid?', answer: 'CompTIA vouchers are generally valid for 12 months from the date of purchase. We always supply vouchers with full validity.' },
      { question: 'Do you offer bundle discounts?', answer: 'Yes, contact us via WhatsApp for special pricing on multiple CompTIA voucher purchases.' },
    ],
    relatedProviders: ['microsoft-certification-vouchers', 'cisco-exam-vouchers'],
  },
  {
    slug: 'microsoft-certification-vouchers',
    providerName: 'Microsoft',
    category: 'Microsoft',
    seo: {
      title: 'Microsoft Certification Vouchers & Azure Exam Discounts | Voucher Bytes',
      description: 'Get discounted Microsoft and Azure certification exam vouchers. AZ, SC, AI, PL, and MS exam series at the best prices from Voucher Bytes.',
      keywords: 'Microsoft certification vouchers, Azure exam discount, AZ-900 voucher, Microsoft exam voucher, Azure certification',
    },
    hero: {
      heading: 'Microsoft Certification Exam Vouchers',
      subheading: 'Save on Azure, Microsoft 365, Power Platform, and Security exams with verified Microsoft certification vouchers.',
      ctaText: 'Get Your Microsoft Voucher',
    },
    certifications: [
      { name: 'AZ-900: Azure Fundamentals', description: 'Foundational knowledge of cloud services and Azure.' },
      { name: 'AZ-104: Azure Administrator', description: 'Implement, manage, and monitor Azure environments.' },
      { name: 'AZ-204: Azure Developer', description: 'Design, build, test, and maintain cloud applications on Azure.' },
      { name: 'AZ-305: Azure Solutions Architect', description: 'Design solutions that run on Azure infrastructure.' },
      { name: 'SC-200: Security Operations Analyst', description: 'Investigate and respond to threats using Microsoft security solutions.' },
      { name: 'AI-102: AI Engineer', description: 'Design and implement AI solutions using Azure services.' },
    ],
    faqs: [
      { question: 'How do Microsoft exam vouchers work?', answer: 'You receive a voucher code to apply at checkout when scheduling your exam through the Microsoft certification dashboard or Pearson VUE.' },
      { question: 'Are these official Microsoft vouchers?', answer: 'Yes, all vouchers are sourced through authorized channels and are valid for use on the official Microsoft certification platform.' },
      { question: 'Can I use one voucher for any Microsoft exam?', answer: 'Our Microsoft vouchers are generic and cover standard AZ, SC, AI, PL, MS, MD, and MB series exams.' },
      { question: 'How long are Microsoft vouchers valid?', answer: 'Microsoft vouchers typically remain valid for 12 months from purchase. We provide maximum-validity vouchers.' },
    ],
    relatedProviders: ['aws-certification-vouchers', 'google-cloud-certification-vouchers'],
  },
  {
    slug: 'dell-emc-certification-vouchers',
    providerName: 'Dell EMC',
    category: 'Dell EMC',
    seo: {
      title: 'Dell EMC Certification Vouchers & Exam Discounts | Voucher Bytes',
      description: 'Save on Dell EMC Proven Professional certification exams with verified, discounted vouchers from Voucher Bytes.',
      keywords: 'Dell EMC vouchers, Dell EMC certification discount, Proven Professional voucher, Dell EMC exam',
    },
    hero: {
      heading: 'Dell EMC Certification Exam Vouchers',
      subheading: 'Achieve Dell EMC Proven Professional certifications at reduced prices with our verified exam vouchers.',
      ctaText: 'Get Your Dell EMC Voucher',
    },
    certifications: [
      { name: 'Data Storage Associate', description: 'Foundational knowledge of Dell EMC storage solutions.' },
      { name: 'Implementation Engineer', description: 'Deploy and manage Dell EMC infrastructure solutions.' },
      { name: 'Data Protection Specialist', description: 'Design and deploy data protection solutions.' },
      { name: 'Cloud Architect', description: 'Design cloud infrastructure using Dell EMC technologies.' },
    ],
    faqs: [
      { question: 'How do Dell EMC vouchers work?', answer: 'After purchase, use the voucher code to schedule your exam through the Pearson VUE testing portal.' },
      { question: 'Are these official Dell EMC vouchers?', answer: 'Yes, all vouchers are genuine and valid for Dell EMC Proven Professional certification exams.' },
      { question: 'How long are Dell EMC vouchers valid?', answer: 'Dell EMC vouchers are typically valid for 12 months. We guarantee maximum remaining validity.' },
    ],
    relatedProviders: ['oracle-certification-vouchers', 'microsoft-certification-vouchers'],
  },
  {
    slug: 'checkpoint-exam-vouchers',
    providerName: 'Check Point',
    category: 'Check Point',
    seo: {
      title: 'Check Point Exam Vouchers & CCSA/CCSE Discounts | Voucher Bytes',
      description: 'Get discounted Check Point CCSA and CCSE exam vouchers. Verified and delivered instantly from Voucher Bytes.',
      keywords: 'Check Point vouchers, CCSA voucher, CCSE discount, Check Point certification, security exam voucher',
    },
    hero: {
      heading: 'Check Point Certification Exam Vouchers',
      subheading: 'Earn your CCSA or CCSE certification with discounted Check Point exam vouchers from Voucher Bytes.',
      ctaText: 'Get Your Check Point Voucher',
    },
    certifications: [
      { name: 'CCSA (156-215)', description: 'Check Point Certified Security Administrator — manage daily security operations.' },
      { name: 'CCSE (156-315)', description: 'Check Point Certified Security Expert — advanced firewall management.' },
      { name: 'CCSM (156-410)', description: 'Check Point Certified Security Master — expert-level troubleshooting.' },
    ],
    faqs: [
      { question: 'How do Check Point vouchers work?', answer: 'You receive a voucher code to redeem when scheduling your exam through the Pearson VUE platform.' },
      { question: 'Are these official Check Point vouchers?', answer: 'Yes, all vouchers are authentic and valid for Check Point certification exams via Pearson VUE.' },
      { question: 'How long are Check Point vouchers valid?', answer: 'Vouchers are typically valid for 12 months from the date of issue.' },
    ],
    relatedProviders: ['fortinet-certification-vouchers', 'cisco-exam-vouchers'],
  },
  {
    slug: 'oracle-certification-vouchers',
    providerName: 'Oracle',
    category: 'Oracle',
    seo: {
      title: 'Oracle Certification Vouchers & Exam Discounts | Voucher Bytes',
      description: 'Save on Oracle certification exams with verified vouchers from Voucher Bytes. Java, Database, Cloud, and more.',
      keywords: 'Oracle certification vouchers, Oracle exam discount, Java certification voucher, Oracle Cloud voucher',
    },
    hero: {
      heading: 'Oracle Certification Exam Vouchers',
      subheading: 'Get certified in Oracle technologies at a fraction of the cost with our verified exam vouchers.',
      ctaText: 'Get Your Oracle Voucher',
    },
    certifications: [
      { name: 'Oracle Cloud Infrastructure Foundations', description: 'Foundational knowledge of Oracle Cloud services.' },
      { name: 'Oracle Cloud Infrastructure Architect', description: 'Design and implement OCI solutions.' },
      { name: 'Java SE Programmer', description: 'Validate Java programming skills and knowledge.' },
      { name: 'Oracle Database SQL Certified', description: 'SQL and database management skills certification.' },
      { name: 'MySQL Database Administrator', description: 'Administration and management of MySQL databases.' },
    ],
    faqs: [
      { question: 'How do Oracle vouchers work?', answer: 'After purchase, use the voucher code when registering for your exam on the Oracle certification portal or Pearson VUE.' },
      { question: 'Are these official Oracle vouchers?', answer: 'Yes, all Oracle vouchers are sourced through authorized channels and are valid for the official Oracle certification exams.' },
      { question: 'How long are Oracle vouchers valid?', answer: 'Oracle vouchers are generally valid for 6–12 months. We provide vouchers with maximum validity.' },
    ],
    relatedProviders: ['microsoft-certification-vouchers', 'dell-emc-certification-vouchers'],
  },
  {
    slug: 'fortinet-certification-vouchers',
    providerName: 'Fortinet',
    category: 'Fortinet',
    seo: {
      title: 'Fortinet Certification Vouchers & NSE Exam Discounts | Voucher Bytes',
      description: 'Get discounted Fortinet NSE 4, 5, 6, 7, and 8 exam vouchers from Voucher Bytes. Verified and instant delivery.',
      keywords: 'Fortinet vouchers, NSE exam voucher, Fortinet certification discount, NSE 4 voucher, network security exam',
    },
    hero: {
      heading: 'Fortinet Certification Exam Vouchers',
      subheading: 'Achieve Fortinet NSE certifications with verified, affordable exam vouchers. From NSE 4 to NSE 8.',
      ctaText: 'Get Your Fortinet Voucher',
    },
    certifications: [
      { name: 'NSE 4 — FortiOS', description: 'Network Security Professional — FortiGate security configuration.' },
      { name: 'NSE 5 — FortiManager / FortiAnalyzer', description: 'Centralized network security management and analytics.' },
      { name: 'NSE 6 — Specialist', description: 'Advanced product specialization in Fortinet security solutions.' },
      { name: 'NSE 7 — Enterprise Firewall', description: 'Expert-level firewall design and troubleshooting.' },
      { name: 'NSE 8 — Expert', description: 'Highest-level Fortinet certification — complex security solutions.' },
    ],
    faqs: [
      { question: 'How do Fortinet vouchers work?', answer: 'After purchase, apply the voucher code when scheduling your NSE exam through the Pearson VUE portal.' },
      { question: 'Are these official Fortinet vouchers?', answer: 'Yes, all Fortinet vouchers are authentic and valid for official NSE certification exams.' },
      { question: 'Can I use one voucher for any NSE level?', answer: 'Our Fortinet vouchers cover NSE 4 through NSE 8 exams. Check voucher details for specific exam compatibility.' },
    ],
    relatedProviders: ['checkpoint-exam-vouchers', 'cisco-exam-vouchers'],
  },
  {
    slug: 'google-cloud-certification-vouchers',
    providerName: 'Google Cloud',
    category: 'Google Cloud',
    seo: {
      title: 'Google Cloud Certification Vouchers & GCP Exam Discounts | Voucher Bytes',
      description: 'Save on Google Cloud Professional and Associate certification exams with verified discount vouchers from Voucher Bytes.',
      keywords: 'Google Cloud vouchers, GCP certification discount, Google Cloud exam voucher, cloud engineer voucher',
    },
    hero: {
      heading: 'Google Cloud Certification Exam Vouchers',
      subheading: 'Get Google Cloud certified at a lower cost with our verified GCP exam vouchers. Associate and Professional levels available.',
      ctaText: 'Get Your GCP Voucher',
    },
    certifications: [
      { name: 'Cloud Digital Leader', description: 'Foundational understanding of Google Cloud capabilities.' },
      { name: 'Associate Cloud Engineer', description: 'Deploy and manage applications on Google Cloud.' },
      { name: 'Professional Cloud Architect', description: 'Design and plan cloud solution architectures on GCP.' },
      { name: 'Professional Data Engineer', description: 'Design and build data processing systems on GCP.' },
      { name: 'Professional Cloud Security Engineer', description: 'Configure security in Google Cloud environments.' },
    ],
    faqs: [
      { question: 'How do Google Cloud vouchers work?', answer: 'After purchase, apply the voucher code when registering for your exam on the Google Cloud certification portal.' },
      { question: 'Are these official Google Cloud vouchers?', answer: 'Yes, all vouchers are sourced through authorized channels and are valid for scheduling GCP exams.' },
      { question: 'How long are GCP vouchers valid?', answer: 'Google Cloud vouchers are typically valid for 12 months from the date of issue.' },
    ],
    relatedProviders: ['aws-certification-vouchers', 'microsoft-certification-vouchers'],
  },
  {
    slug: 'prince2-certification-vouchers',
    providerName: 'PRINCE2',
    category: 'PRINCE2',
    seo: {
      title: 'PRINCE2 Certification Vouchers & Exam Discounts | Voucher Bytes',
      description: 'Save on PRINCE2 7 and PRINCE2 Agile certification exam vouchers with exclusive discounts from Voucher Bytes.',
      keywords: 'PRINCE2 vouchers, PRINCE2 exam discount, PRINCE2 7 voucher, PRINCE2 Agile voucher, project management certification',
    },
    hero: {
      heading: 'PRINCE2 Certification Exam Vouchers',
      subheading: 'Advance your project management career with discounted PRINCE2 certification exam vouchers.',
      ctaText: 'Get Your PRINCE2 Voucher',
    },
    certifications: [
      { name: 'PRINCE2 7 Foundation', description: 'Foundational project management methodology and principles.' },
      { name: 'PRINCE2 7 Practitioner', description: 'Apply PRINCE2 methodology to real-world project scenarios.' },
      { name: 'PRINCE2 Agile Foundation', description: 'Combine PRINCE2 governance with agile delivery methods.' },
      { name: 'PRINCE2 Agile Practitioner', description: 'Advanced agile project management with PRINCE2 framework.' },
    ],
    faqs: [
      { question: 'How do PRINCE2 vouchers work?', answer: 'After purchase, you receive a voucher code to schedule your PRINCE2 exam through the PeopleCert portal.' },
      { question: 'Are these official PRINCE2 vouchers?', answer: 'Yes, all PRINCE2 vouchers are authentic and valid for official PeopleCert-administered exams.' },
      { question: 'Can I take the exam online?', answer: 'Yes, PRINCE2 exams can be taken online with proctoring through the PeopleCert platform.' },
    ],
    relatedProviders: ['itil-certification-vouchers', 'comptia-certification-vouchers'],
  },
  {
    slug: 'itil-certification-vouchers',
    providerName: 'ITIL',
    category: 'ITIL',
    seo: {
      title: 'ITIL Certification Vouchers & ITIL 4 Exam Discounts | Voucher Bytes',
      description: 'Get discounted ITIL 4 Foundation and advanced certification exam vouchers from Voucher Bytes. Verified and instant.',
      keywords: 'ITIL vouchers, ITIL 4 Foundation voucher, ITIL exam discount, IT service management certification',
    },
    hero: {
      heading: 'ITIL Certification Exam Vouchers',
      subheading: 'Master IT service management with discounted ITIL 4 certification exam vouchers from Voucher Bytes.',
      ctaText: 'Get Your ITIL Voucher',
    },
    certifications: [
      { name: 'ITIL 4 Foundation', description: 'Core concepts and principles of IT service management.' },
      { name: 'ITIL 4 Managing Professional (MP)', description: 'Practical and technical knowledge for running IT services.' },
      { name: 'ITIL 4 Strategic Leader (SL)', description: 'How IT influences and directs business strategy.' },
      { name: 'ITIL 4 Master', description: 'Highest level — demonstrate deep ITIL expertise.' },
      { name: 'ITIL v5 Foundation', description: 'Next-generation framework and principles of IT service management.' },
    ],
    faqs: [
      { question: 'How do ITIL vouchers work?', answer: 'After purchase, use the voucher code to schedule your ITIL exam through the PeopleCert portal.' },
      { question: 'Are these official ITIL vouchers?', answer: 'Yes, all ITIL vouchers are sourced through authorized channels and valid for PeopleCert-administered exams.' },
      { question: 'Can I take the ITIL exam online?', answer: 'Yes, ITIL exams are available online with proctoring through PeopleCert.' },
      { question: 'How long are ITIL vouchers valid?', answer: 'ITIL vouchers are typically valid for 12 months from the date of issue.' },
    ],
    relatedProviders: ['prince2-certification-vouchers', 'comptia-certification-vouchers'],
  },
];

export default providerPages;
