import { KnowledgeFAQ } from '../types/knowledge';
import { COMPANY_FAQS } from './faqs/companyFaqs';
import { FOUNDER_FAQS } from './faqs/founderFaqs';
import { FACILITY_FAQS } from './faqs/facilityFaqs';
import { HISTORY_FAQS } from './faqs/historyFaqs';
import { PRODUCTS_OVERVIEW_FAQS } from './faqs/productsOverviewFaqs';
import { FLAVEX_FAQS } from './faqs/flavexFaqs';
import { CRUSTY_FAQS } from './faqs/crustyFaqs';
import { ACTIVE_FAQS } from './faqs/activeFaqs';
import { TAPEL_FAQS } from './faqs/tapelFaqs';
import { SALSA_FAQS } from './faqs/salsaFaqs';
import { ZAATAR_FAQS } from './faqs/zaatarFaqs';
import { GLUTEN_FREE_FAQS } from './faqs/glutenFreeFaqs';
import { HORECA_FAQS } from './faqs/horecaFaqs';
import { MEAT_PROCESSING_FAQS } from './faqs/meatProcessingFaqs';
import { FOOD_MANUFACTURING_FAQS } from './faqs/foodManufacturingFaqs';
import { RD_FAQS } from './faqs/rdFaqs';
import { QUALITY_CERT_FAQS } from './faqs/qualityCertFaqs';
import { CONTACT_FAQS } from './faqs/contactFaqs';

export const FAQ_CATEGORIES = [
  { id: 'company', nameEn: 'Company & Identity', nameAr: 'الشركة والهوية المؤسسية' },
  { id: 'founder', nameEn: 'Founder & Governance', nameAr: 'المؤسس والإدارة' },
  { id: 'manufacturing', nameEn: 'Location & Factory Facility', nameAr: 'الموقع والمنشأة الصناعية' },
  { id: 'history', nameEn: 'Company History & Evolution', nameAr: 'تاريخ الشركة والتطور الصناعي' },
  { id: 'products', nameEn: 'Product Portfolio Overview', nameAr: 'محفظة المنتجات العامة' },
  { id: 'flavex', nameEn: 'FLAVEX (Food Flavors)', nameAr: 'فلافيكس (النكهات الغذائية)' },
  { id: 'crusty', nameEn: 'CRUSTY (Coatings & Breadings)', nameAr: 'كروستي (التغطية والبقسماط)' },
  { id: 'active', nameEn: 'ACTIVE (Functional Ingredients)', nameAr: 'أكتيف (المكونات الوظيفية)' },
  { id: 'tapel', nameEn: 'TAPEL (Meat Spices & Seasonings)', nameAr: 'تابل (بهارات اللحوم والتوابل)' },
  { id: 'salsa', nameEn: 'SALSA (Commercial Sauces)', nameAr: 'صلصة (الصلصات التجارية)' },
  { id: 'zaatar', nameEn: 'ZAATAR & Duqqa (Thyme Blends)', nameAr: 'الزعتر والدقة الأردنية' },
  { id: 'gluten-free', nameEn: 'Gluten-Free Range', nameAr: 'التشكيلة الخالية من الغلوتين' },
  { id: 'horeca', nameEn: 'HORECA & Foodservice', nameAr: 'قطاع هوريكا والمطاعم' },
  { id: 'meat-processing', nameEn: 'Meat Processing Industry', nameAr: 'قطاع تصنيع ومعالجة اللحوم' },
  { id: 'food-manufacturing', nameEn: 'Food Manufacturing & Industry', nameAr: 'التصنيع الغذائي الصناعي' },
  { id: 'rd', nameEn: 'R&D & Custom Formulation', nameAr: 'البحث والتطوير والتطوير المخصص' },
  { id: 'quality', nameEn: 'Quality, Safety & Sensory', nameAr: 'الجودة والسلامة والتقييم الحسي' },
  { id: 'certifications', nameEn: 'Certifications & Audits', nameAr: 'الشهادات والاعتمادات' },
  { id: 'contact', nameEn: 'Contact & Business Cooperation', nameAr: 'التواصل والتعاون التجاري' },
];

export const MASTER_FAQS: KnowledgeFAQ[] = [
  ...COMPANY_FAQS,
  ...FOUNDER_FAQS,
  ...FACILITY_FAQS,
  ...HISTORY_FAQS,
  ...PRODUCTS_OVERVIEW_FAQS,
  ...FLAVEX_FAQS,
  ...CRUSTY_FAQS,
  ...ACTIVE_FAQS,
  ...TAPEL_FAQS,
  ...SALSA_FAQS,
  ...ZAATAR_FAQS,
  ...GLUTEN_FREE_FAQS,
  ...HORECA_FAQS,
  ...MEAT_PROCESSING_FAQS,
  ...FOOD_MANUFACTURING_FAQS,
  ...RD_FAQS,
  ...QUALITY_CERT_FAQS,
  ...CONTACT_FAQS,
];
