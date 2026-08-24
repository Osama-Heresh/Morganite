export type VerificationStatus =
  | 'VERIFIED'
  | 'COMPANY CONFIRMED'
  | 'EXTERNAL VERIFIED'
  | 'PENDING VERIFICATION'
  | 'DO NOT PUBLISH';

export type SourceType =
  | 'OFFICIAL_WEBSITE'
  | 'OFFICIAL_SOCIAL'
  | 'GOVERNMENT_ASSOCIATION'
  | 'CERTIFICATION_BODY'
  | 'INDUSTRY_DIRECTORY'
  | 'COMPANY_COMMUNICATION';

export type QuestionType =
  | 'TYPE_A_DIRECT_ENTITY'
  | 'TYPE_B_PRODUCT_APPLICATION'
  | 'TYPE_C_PROBLEM_SOLVING_B2B';

export interface KnowledgeSource {
  id: string;
  name: string;
  nameAr: string;
  sourceType: SourceType;
  url: string;
  description: string;
  descriptionAr: string;
  relationshipToMorganite: string;
  relationshipToMorganiteAr: string;
  verificationStatus: VerificationStatus;
  lastVerified: string;
}

export interface KnowledgeFAQ {
  id: string;
  category: string;
  categoryNameEn: string;
  categoryNameAr: string;
  questionType: QuestionType;
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
  source: string;
  sourceType: SourceType;
  verificationStatus: VerificationStatus;
  lastVerified: string;
  relatedEntities: string[];
  relatedPages: string[];
}

export interface ProductItem {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  applications: string[];
  applicationsAr: string[];
  verificationStatus: VerificationStatus;
}

export interface ProductFamily {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  overviewEn: string;
  overviewAr: string;
  aiSummaryEn: string;
  aiSummaryAr: string;
  applicationsEn: string[];
  applicationsAr: string[];
  productExamples: ProductItem[];
  targetUsersEn: string[];
  targetUsersAr: string[];
  relatedIndustries: string[];
  relatedIndustriesAr: string[];
  relatedProductFamilyIds: string[];
  faqIds: string[];
  sourceReference: string;
  specialNoticeEn?: string;
  specialNoticeAr?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  nameAr: string;
  standard: string;
  scopeEn: string;
  scopeAr: string;
  issuingBody: string;
  certificateNumber?: string;
  issueDate: string;
  expiryDate: string;
  facilityAddressEn: string;
  facilityAddressAr: string;
  verificationStatus: VerificationStatus;
  sourceUrl: string;
  notesEn?: string;
  notesAr?: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  heroTaglineEn: string;
  heroTaglineAr: string;
  overviewEn: string;
  overviewAr: string;
  aiSummaryEn: string;
  aiSummaryAr: string;
  challengesSolvedEn: string[];
  challengesSolvedAr: string[];
  keySolutionsEn: string[];
  keySolutionsAr: string[];
  matchingProductFamilies: string[];
  sourceReference: string;
}

export interface SearchIntentPage {
  slug: string;
  titleEn: string;
  titleAr: string;
  metaDescriptionEn: string;
  metaDescriptionAr: string;
  aiSummaryEn: string;
  aiSummaryAr: string;
  topicCategory: string;
  intentType: 'Educational' | 'Commercial Research' | 'Entity Definition' | 'Technical Application';
  mainContentEn: {
    heading: string;
    body: string[];
    keyTakeaways: string[];
  }[];
  mainContentAr: {
    heading: string;
    body: string[];
    keyTakeaways: string[];
  }[];
  relatedEntities: string[];
  relatedProducts: string[];
  relatedIndustries: string[];
}
