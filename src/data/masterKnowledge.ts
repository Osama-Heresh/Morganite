import { COMPANY_ENTITY, FOUNDER_ENTITY, CERTIFICATIONS_LIST, BRAND_ASSETS } from './companyEntity';
import { PRODUCT_FAMILIES } from './productFamilies';
import { INDUSTRIES_DATA } from './industriesData';
import { SEARCH_INTENT_PAGES } from './searchIntentPages';
import { OFFICIAL_SOURCES } from './officialSources';
import { MASTER_FAQS, FAQ_CATEGORIES } from './faqData';

export const MASTER_KNOWLEDGE = {
  version: '2026.1',
  generatedDate: '2026-08-23',
  entity: COMPANY_ENTITY,
  founder: FOUNDER_ENTITY,
  brandAssets: BRAND_ASSETS,
  certifications: CERTIFICATIONS_LIST,
  productFamilies: PRODUCT_FAMILIES,
  industries: INDUSTRIES_DATA,
  searchIntentPages: SEARCH_INTENT_PAGES,
  officialSources: OFFICIAL_SOURCES,
  faqCategories: FAQ_CATEGORIES,
  faqs: MASTER_FAQS,
  stats: {
    totalFaqs: MASTER_FAQS.length,
    totalProductFamilies: PRODUCT_FAMILIES.length,
    totalIndustries: INDUSTRIES_DATA.length,
    totalEducationalPages: SEARCH_INTENT_PAGES.length,
    totalOfficialSources: OFFICIAL_SOURCES.length,
    totalCertifications: CERTIFICATIONS_LIST.length,
  },
};
