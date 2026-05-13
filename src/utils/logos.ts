export const categoryDomains: Record<string, string> = {
  'CompTIA': 'comptia.org',
  'Microsoft': 'microsoft.com',
  'ITIL': 'axelos.com',
  'PRINCE2': 'axelos.com',
  'Google Cloud': 'cloud.google.com',
  'Fortinet': 'fortinet.com',
  'AWS': 'aws.amazon.com',
  'Oracle': 'oracle.com',
  'Check Point': 'checkpoint.com',
  'Dell EMC': 'dell.com',
  'Cisco': 'cisco.com'
};

export const categorySlugs: Record<string, string> = {
  'CompTIA': 'comptia-certification-vouchers',
  'Microsoft': 'microsoft-certification-vouchers',
  'ITIL': 'itil-certification-vouchers',
  'PRINCE2': 'prince2-certification-vouchers',
  'Google Cloud': 'google-cloud-certification-vouchers',
  'Fortinet': 'fortinet-certification-vouchers',
  'AWS': 'aws-certification-vouchers',
  'Oracle': 'oracle-certification-vouchers',
  'Check Point': 'checkpoint-exam-vouchers',
  'Dell EMC': 'dell-emc-certification-vouchers',
  'Cisco': 'cisco-exam-vouchers',
};

export const getCategoryLogo = (category: string) => {
  const domain = categoryDomains[category];
  // Using icon.horse which is more reliable and doesn't require auth
  // Fallback to Google favicons if needed, but icon.horse provides larger icons
  return domain ? `https://icon.horse/icon/${domain}` : null;
};

export const getProviderSlug = (category: string): string | null => {
  return categorySlugs[category] || null;
};

export const getDomainSlug = (domain: string): string | null => {
  const entry = Object.entries(categoryDomains).find(([, d]) => d === domain);
  return entry ? categorySlugs[entry[0]] || null : null;
};
