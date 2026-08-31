import React, { useEffect } from 'react';
import {
  SITE_URL,
  SITE_LOGO_ABSOLUTE_URL,
  MORGANITE_OFFICIAL_WEBSITE,
  getAbsoluteUrl,
} from '../../config/site';

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

// Canonical Schema Constants for this Knowledge Center
export const MORGANITE_ORG_ID = `${SITE_URL}/#organization`;
export const SALAH_ALHERESH_PERSON_ID = `${SITE_URL}/founder/salah-alheresh#person`;

// Standard Schema Generator Helpers
export const createWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
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
  url: MORGANITE_OFFICIAL_WEBSITE,
  logo: {
    '@type': 'ImageObject',
    url: SITE_LOGO_ABSOLUTE_URL,
    caption: 'Morganite for Food Technology Official Logo',
  },
  image: SITE_LOGO_ABSOLUTE_URL,
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
    jobTitle: 'Founder, Owner and General Manager',
    sameAs: [
      'https://www.linkedin.com/in/salah-alheresh-037089166/',
      'https://www.linkedin.com/in/salah-alheresh-6b173334/',
    ],
    affiliation: {
      '@type': 'Organization',
      name: 'Jordanian Society for Sensory Evaluation of Food',
      alternateName: 'الجمعية الأردنية للتقييم الحسي للأغذية',
      url: 'https://jssef.org/',
    },
  },
  sameAs: [
    MORGANITE_OFFICIAL_WEBSITE,
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
  jobTitle: 'Founder, Owner and General Manager',
  description:
    'Founder, Owner and General Manager of Morganite for Food Technology (established 2013 in Amman, Jordan). Food engineer with expertise in spice formulation, flavor profiles, and sensory evaluation.',
  url: `${SITE_URL}/founder/salah-alheresh`,
  sameAs: [
    'https://www.linkedin.com/in/salah-alheresh-037089166/',
    'https://www.linkedin.com/in/salah-alheresh-6b173334/',
  ],
  worksFor: {
    '@type': 'Organization',
    '@id': MORGANITE_ORG_ID,
    name: 'Morganite for Food Technology',
    url: MORGANITE_OFFICIAL_WEBSITE,
  },
  founderOf: {
    '@type': 'Organization',
    '@id': MORGANITE_ORG_ID,
    name: 'Morganite for Food Technology',
    url: MORGANITE_OFFICIAL_WEBSITE,
  },
  affiliation: [
    {
      '@type': 'Organization',
      name: 'Jordanian Society for Sensory Evaluation of Food',
      alternateName: 'الجمعية الأردنية للتقييم الحسي للأغذية',
      url: 'https://jssef.org/',
    },
  ],
  knowsAbout: [
    'Food Technology',
    'Industrial Spice Blends',
    'Food Flavors Formulation',
    'Sensory Evaluation of Food',
    'Meat Processing Seasonings',
    'Functional Dry Mix Systems',
  ],
});

export const createProductGroupSchema = (family: any, isArabic: boolean) => ({
  '@context': 'https://schema.org',
  '@type': 'ProductGroup',
  '@id': `${SITE_URL}/products/${family.slug}#productgroup`,
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

export const createProductSchema = (product: any, isArabic: boolean) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${SITE_URL}/products/${product.familySlug}/${product.slug}#product`,
  name: isArabic ? product.nameAr : product.name,
  alternateName: isArabic ? product.name : product.nameAr,
  description: isArabic ? product.fullDescriptionAr : product.fullDescriptionEn,
  category: isArabic ? product.categoryAr : product.category,
  brand: {
    '@type': 'Brand',
    name: 'Morganite',
  },
  manufacturer: {
    '@type': 'Organization',
    '@id': MORGANITE_ORG_ID,
    name: 'Morganite for Food Technology',
  },
  isRelatedTo: {
    '@type': 'ProductGroup',
    '@id': `${SITE_URL}/products/${product.familySlug}#productgroup`,
    name: product.familyName,
  },
});

export const createServiceSchema = (service: { name: string; nameAr: string; description: string; descriptionAr: string; url: string }, isArabic: boolean) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${getAbsoluteUrl(service.url)}#service`,
  name: isArabic ? service.nameAr : service.name,
  description: isArabic ? service.descriptionAr : service.description,
  provider: {
    '@type': 'Organization',
    '@id': MORGANITE_ORG_ID,
    name: 'Morganite for Food Technology',
  },
  serviceType: 'Food Technology Manufacturing & Formulation Solutions',
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : getAbsoluteUrl(item.url),
  })),
});

