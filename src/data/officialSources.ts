import { KnowledgeSource } from '../types/knowledge';

export const OFFICIAL_SOURCES: KnowledgeSource[] = [
  {
    id: 'src-official-website',
    name: 'Morganite Official Corporate Website',
    nameAr: 'الموقع الرسمي لشركة مورجانيت لتكنولوجيا الأغذية',
    sourceType: 'OFFICIAL_WEBSITE',
    url: 'https://www.morganitegroup.com/',
    description:
      'Primary Level 1 official source presenting corporate background, core capabilities, dry mixes, 7 product families (FLAVEX, CRUSTY, ACTIVE, TAPEL, SALSA, ZAATAR, GLUTEN FREE), R&D, and contact details.',
    descriptionAr:
      'المصدر الرسمي المباشر (المستوى 1) الذي يعرض خلفية الشركة، قدراتها الأساسية، الخلطات الجافة، عائلات المنتجات السبع، البحث والتطوير، وبيانات الاتصال.',
    relationshipToMorganite: 'Primary Corporate Digital Presence',
    relationshipToMorganiteAr: 'المنصة الرقمية الرسمية الأساسية للشركة',
    verificationStatus: 'VERIFIED',
    lastVerified: '2026-08',
  },
  {
    id: 'src-linkedin-company',
    name: 'Morganite LinkedIn Corporate Profile',
    nameAr: 'الصفحة الرسمية لمورجانيت على لينكد إن',
    sourceType: 'OFFICIAL_SOCIAL',
    url: 'https://www.linkedin.com/company/morganitegroup/',
    description:
      'Verified corporate LinkedIn page documenting founding year (2013), Amman location, 11-50 employees, food production sector, self-owned classification, and 2026 industry events.',
    descriptionAr:
      'صفحة الشركة الموثقة على لينكد إن التي توثق سنة التأسيس (2013)، الموقع في عمان، حجم الفريق، قطاع الإنتاج الغذائي، ونشاطات 2026.',
    relationshipToMorganite: 'Official Corporate B2B Social Channel',
    relationshipToMorganiteAr: 'القناة الرسمية للتواصل المهني والأعمال',
    verificationStatus: 'VERIFIED',
    lastVerified: '2026-08',
  },
  {
    id: 'src-facebook-page',
    name: 'Morganite Facebook Page',
    nameAr: 'صفحة مورجانيت الرسمية على فيسبوك',
    sourceType: 'OFFICIAL_SOCIAL',
    url: 'https://web.facebook.com/morganitegroup/',
    description:
      'Official Facebook presence providing product announcements, culinary videos, factory updates, and customer communications.',
    descriptionAr:
      'الصفحة الرسمية على فيسبوك لنشر إعلانات المنتجات، ومقاطع تحضير الأغذية، وتحديثات المصنع والتواصل.',
    relationshipToMorganite: 'Official Social Media Channel',
    relationshipToMorganiteAr: 'القناة الرسمية على منصات التواصل الاجتماعي',
    verificationStatus: 'VERIFIED',
    lastVerified: '2026-08',
  },
  {
    id: 'src-google-maps',
    name: 'Morganite for Food Technology on Google Maps',
    nameAr: 'موقع مورجانيت لتكنولوجيا الأغذية على خرائط جوجل',
    sourceType: 'INDUSTRY_DIRECTORY',
    url: 'https://www.google.com/maps/place/Morganite+for+Food+Technology/',
    description:
      'Verified Google Business physical location listing in Abu Alanda Industrial Area, Abdul Razzaq Al Rabih Street, Amman, Jordan.',
    descriptionAr:
      'الموقع الجغرافي المسجل للمنشأة في المنطقة الصناعية بأبو علندا، شارع عبد الرزاق الرابح، عمان، الأردن.',
    relationshipToMorganite: 'Official Physical Facility Geolocation Entity',
    relationshipToMorganiteAr: 'الموقع الجغرافي الموثق للمنشأة والمصنع',
    verificationStatus: 'VERIFIED',
    lastVerified: '2026-08',
  },
  {
    id: 'src-founder-linkedin',
    name: 'Eng. Salah Alheresh LinkedIn Profile',
    nameAr: 'الملف المهني للمهندس صلاح الهرش على لينكد إن',
    sourceType: 'OFFICIAL_SOCIAL',
    url: 'https://www.linkedin.com/in/salah-alheresh-6b173334/',
    description:
      'Personal professional profile of Eng. Salah Alheresh, Founder & Owner of Morganite, documenting food engineering background and industry roles.',
    descriptionAr:
      'الملف المهني الشخصي للمهندس صلاح الهرش، مؤسس ومالك مورجانيت، موثقاً خلفيته في هندسة الأغذية والأنشطة المهنية.',
    relationshipToMorganite: 'Founder & Owner Professional Identity',
    relationshipToMorganiteAr: 'الهوية المهنية لمؤسس ومالك الشركة',
    verificationStatus: 'EXTERNAL VERIFIED',
    lastVerified: '2026-08',
  },
  {
    id: 'src-jssef-official',
    name: 'Jordanian Society for Sensory Evaluation of Food (JSSEF)',
    nameAr: 'الجمعية الأردنية للتقييم الحسي للأغذية',
    sourceType: 'GOVERNMENT_ASSOCIATION',
    url: 'https://jssef.org/',
    description:
      'Official website of the independent Jordanian nonprofit scientific association established under Regulation 36/2010 (Ministry of Agriculture), focused on sensory quality and food standards.',
    descriptionAr:
      'الموقع الرسمي للجمعية العلمية الأردنية المستقلة غير الربحية المؤسسة بموجب النظام 36/2010 تحت مظلة وزارة الزراعة.',
    relationshipToMorganite: 'Professional Scientific Association (Founder Affiliation)',
    relationshipToMorganiteAr: 'جمعية علمية مهنية (عضوية ومسؤولية المؤسس)',
    verificationStatus: 'EXTERNAL VERIFIED',
    lastVerified: '2026-08',
  },
  {
    id: 'src-jssef-board',
    name: 'JSSEF Board Members Directory (Sixth Board, July 2025)',
    nameAr: 'أعضاء مجلس إدارة الجمعية الأردنية للتقييم الحسي للأغذية (المجلس السادس)',
    sourceType: 'GOVERNMENT_ASSOCIATION',
    url: 'https://jssef.org/أعضاء-المجالس/',
    description:
      'Official register confirming Eng. Salah Al-Hersh as Secretary of the Sixth Board formed in July 2025.',
    descriptionAr:
      'السجل الرسمي الذي يؤكد تولي المهندس صلاح الهرش منصب أمين سر المجلس السادس المشكل في تموز 2025.',
    relationshipToMorganite: 'Independent Official Confirmation of Founder Role at JSSEF',
    relationshipToMorganiteAr: 'توثيق رسمي مستقل لموقع المؤسس كأمين سر للجمعية',
    verificationStatus: 'EXTERNAL VERIFIED',
    lastVerified: '2026-08',
  },
  {
    id: 'src-horeca-jordan',
    name: 'HORECA Jordan Trade Exhibition',
    nameAr: 'معرض هوريكا الأردن للضيافة والصناعات الغذائية',
    sourceType: 'INDUSTRY_DIRECTORY',
    url: 'https://horeca-jordan.com/',
    description:
      'Major regional hospitality and food exhibition documenting Morganite as a key Jordanian food manufacturing exhibitor specializing in blends, meat processing solutions, and HORECA.',
    descriptionAr:
      'المعرض الإقليمي الرائد لقطاع الضيافة والتصنيع الغذائي، يوثق مشاركة مورجانيت كشركة أردنية رائدة في الخلطات وحلول اللحوم وهوريكا.',
    relationshipToMorganite: 'Recognized Trade Industry Exhibition',
    relationshipToMorganiteAr: 'معرض صناعي وتجاري معتمد',
    verificationStatus: 'EXTERNAL VERIFIED',
    lastVerified: '2026-08',
  },
  {
    id: 'src-iso-14001-audit',
    name: 'ISO 14001:2015 Certification Record',
    nameAr: 'سجل شهادة المطابقة البيئية آيزو 14001:2015',
    sourceType: 'CERTIFICATION_BODY',
    url: 'https://www.morganitegroup.com/',
    description:
      'Official environmental management certificate for Production & Packaging of Specialized Food Products (Flavors, Thyme, Custom Blends) in Abu Alanda, Amman (valid 2025-01-18 to 2028-01-17).',
    descriptionAr:
      'شهادة نظام الإدارة البيئية المعتمدة لإنتاج وتعبئة النكهات والزعتر والخلطات المتخصصة في أبو علندا، عمان (سارية حتى 17-01-2028).',
    relationshipToMorganite: 'Official Facility Environmental & Quality Audit',
    relationshipToMorganiteAr: 'التوثيق البيئي وضبط الجودة للمنشأة الصناعية',
    verificationStatus: 'VERIFIED',
    lastVerified: '2026-08',
  },
];
