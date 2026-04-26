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

export const getCategoryLogo = (category: string) => {
  const domain = categoryDomains[category];
  // Using icon.horse which is more reliable and doesn't require auth
  // Fallback to Google favicons if needed, but icon.horse provides larger icons
  return domain ? `https://icon.horse/icon/${domain}` : null;
};
