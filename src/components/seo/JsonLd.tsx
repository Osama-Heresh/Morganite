import React, { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>;
  id?: string;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data, id = 'json-ld-schema' }) => {
  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }
    };
  }, [data, id]);

  return null;
};

// Canonical Constants
export const MORGANITE_ORG_ID = 'https://www.morganitegroup.com/#organization';
export const SALAH_ALHERESH_PERSON_ID = 'https://www.morganitegroup.com/founder/salah-alheresh#person';

// Standard Schema Generator Helpers
export const createWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.morganitegroup.com/#website',
  url: 'https://www.morganitegroup.com/',
  name: 'Morganite Knowledge Center',
  alternateName: ['مركز المعرفة لشركة مورجانيت', 'Morganite for Food Technology Knowledge Base'],
  publisher: {
    '@id': MORGANITE_ORG_ID,
  },
  inLanguage: ['en', 'ar'],
});

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': MORGANITE_ORG_ID,
  name: 'Morganite for Food Technology',
  alternateName: ['مورجانيت لتكنولوجيا الأغذية', 'Morganite', 'Morganite Group'],
  url: 'https://www.morganitegroup.com/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.morganitegroup.com/brand/Logo-Black-new.png',
    caption: 'Morganite for Food Technology Official Logo',
  },
  image: 'https://www.morganitegroup.com/brand/Logo-Black-new.png',
  description:
    'Morganite for Food Technology is a Jordanian food technology and food manufacturing company established in 2013 in Abu Alanda, Amman, Jordan. Specializing in dry food mixes, flavors, spice blends, sauces, coatings, functional ingredients and specialized food solutions.',
  foundingDate: '2013',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Abdul Razzaq Al Rabih Street, Abu Alanda Industrial Area',
    addressLocality: 'Amman',
    addressRegion: 'Amman Governorate',
    addressCountry: 'JO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+962-77-6-777720',
    contactType: 'customer service',
    email: 'info@morganitegroup.com',
    availableLanguage: ['English', 'Arabic'],
  },
  founder: {
    '@type': 'Person',
    '@id': SALAH_ALHERESH_PERSON_ID,
    name: 'Eng. Salah Alheresh',
    alternateName: 'المهندس صلاح الهرش',
    jobTitle: 'Founder and Owner',
    sameAs: ['https://www.linkedin.com/in/salah-alheresh-6b173334/'],
    affiliation: {
      '@type': 'Organization',
      name: 'Jordanian Society for Sensory Evaluation of Food',
      alternateName: 'الجمعية الأردنية للتقييم الحسي للأغذية',
      url: 'https://jssef.org/',
    },
  },
  sameAs: [
    'https://www.linkedin.com/company/morganitegroup/',
    'https://web.facebook.com/morganitegroup/',
    'https://www.google.com/maps/place/Morganite+for+Food+Technology/',
  ],
  knowsAbout: [
    'Dry Food Mixes',
    'Food Flavors',
    'Industrial Spice Blends',
    'Meat Processing Formulations',
    'Functional Ingredients',
    'Industrial Coatings & Breadings',
    'Jordanian Zaatar & Duqqa',
    'Gluten-Free Food Products',
  ],
});

export const createPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': SALAH_ALHERESH_PERSON_ID,
  name: 'Eng. Salah Alheresh',
  alternateName: 'المهندس صلاح الهرش',
  description:
    'Founder and Owner of Morganite for Food Technology (established 2013 in Amman, Jordan). Food engineer with expertise in spice formulation, flavor profiles, and sensory evaluation.',
  url: 'https://www.morganitegroup.com/founder/salah-alheresh',
  sameAs: ['https://www.linkedin.com/in/salah-alheresh-6b173334/'],
  founderOf: {
    '@type': 'Organization',
    '@id': MORGANITE_ORG_ID,
    name: 'Morganite for Food Technology',
    url: 'https://www.morganitegroup.com/',
  },
  affiliation: [
    {
      '@type': 'Organization',
      name: 'Jordanian Society for Sensory Evaluation of Food',
      alternateName: 'الجمعية الأردنية للتقييم الحسي للأغذية',
      url: 'https://jssef.org/',
    },
  ],
});

export const createProductGroupSchema = (family: any, isArabic: boolean) => ({
  '@context': 'https://schema.org',
  '@type': 'ProductGroup',
  '@id': `https://www.morganitegroup.com/products/${family.slug}#productgroup`,
  name: isArabic ? family.nameAr : `Morganite ${family.name}`,
  alternateName: isArabic ? `Morganite ${family.name}` : family.nameAr,
  description: isArabic ? family.aiSummaryAr : family.aiSummaryEn,
  brand: {
    '@type': 'Brand',
    name: 'Morganite',
  },
  manufacturer: {
    '@type': 'Organization',
    '@id': MORGANITE_ORG_ID,
    name: 'Morganite for Food Technology',
  },
  hasVariant: (family.productExamples || []).map((p: any) => ({
    '@type': 'Product',
    name: isArabic ? p.nameAr : p.name,
    description: isArabic ? p.descriptionAr : p.description,
    brand: {
      '@type': 'Brand',
      name: 'Morganite',
    },
    manufacturer: {
      '@id': MORGANITE_ORG_ID,
    },
  })),
});

export const createFaqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `https://www.morganitegroup.com${item.url}`,
  })),
});
