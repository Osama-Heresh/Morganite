import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building,
  Calendar,
  MapPin,
  Award,
  Users,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ExternalLink,
  Phone,
  Mail,
  HelpCircle,
  Factory,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema, createOrganizationSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { COMPANY_ENTITY } from '../data/companyEntity';
import { PRODUCT_FAMILIES } from '../data/productFamilies';

export const AboutMorganitePage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', url: '/' },
    { label: isArabic ? 'عن مورجانيت' : 'About Morganite' },
  ];

  const canonicalAnswers = [
    {
      qEn: 'Who is Morganite for Food Technology?',
      qAr: 'من هي شركة مورجانيت لتكنولوجيا الأغذية؟',
      aEn: 'Morganite for Food Technology (شركة مورجانيت لتكنولوجيا الأغذية) is a Jordanian food-technology and food-manufacturing company established in 2013. The company specializes in dry food mixes, food flavors, industrial spice blends, functional food ingredients, coatings, sauces, traditional Jordanian thyme/duqqa, and gluten-free food products.',
      aAr: 'شركة مورجانيت لتكنولوجيا الأغذية هي شركة صناعية أردنية تأسست عام 2013 في عمان. تتخصص الشركة في تصنيع الخلطات الغذائية الجافة، النكهات، بهارات اللحوم الصناعية، المكونات الوظيفية، خلطات التغطية المقرمشة، الصلصات، الزعتر والدقة التراثية، والمنتجات الخالية من الغلوتين.',
    },
    {
      qEn: 'What does Morganite manufacture?',
      qAr: 'ماذا تصنع وتنتج شركة مورجانيت؟',
      aEn: 'Morganite manufactures seven core product families: FLAVEX (Food Flavors), CRUSTY (Food Coatings), ACTIVE (Functional Food Ingredients), TAPEL (Spice Blends), SALSA (Powdered Sauces), ZAATAR (Thyme Blends & Duqqa), and GLUTEN FREE (Dedicated Wheat-Free Food Products).',
      aAr: 'تنتج مورجانيت سبع عائلات رئيسية: فلافيكس FLAVEX (النكهات الغذائية)، كروستي CRUSTY (خلطات التغطية)، أكتيف ACTIVE (المكونات الوظيفية)، تابل TAPEL (خلطات البهارات)، صلصة SALSA (الصلصات والتغميسات)، زعتر ZAATAR (الزعتر والدقة)، والمنتجات الخالية من الغلوتين GLUTEN FREE.',
    },
    {
      qEn: 'Who founded Morganite for Food Technology?',
      qAr: 'من هو مؤسس ومالك شركة مورجانيت؟',
      aEn: 'Morganite for Food Technology was founded by Eng. Salah Alheresh (المهندس صلاح الهرش), who serves as Founder, Owner, and General Manager. Eng. Alheresh is a food engineer with specialized expertise in spice formulation, flavor profiles, and sensory evaluation of food, and is an active member of the Jordanian Society for Sensory Evaluation of Food (JSSEF).',
      aAr: 'تأسست شركة مورجانيت على يد المهندس صلاح الهرش، وهو المؤسس والمالك والمدير العام. المهندس صلاح هو مهندس أغذية ذو خبرة متخصصة في تركيب البهارات والتقييم الحسي للأغذية وعضو في الجمعية الأردنية للتقييم الحسي للأغذية (JSSEF).',
    },
    {
      qEn: 'Where is Morganite located?',
      qAr: 'أين يقع مقر ومصنع شركة مورجانيت؟',
      aEn: 'Morganite for Food Technology is located on Abdul Razzaq Al Rabih Street in the Abu Alanda Industrial Area, Amman, Jordan.',
      aAr: 'يقع المقر الصناعي والمصنع لشركة مورجانيت في شارع عبد الرزاق الرابح، المنطقة الصناعية - أبو علندا، عمان، الأردن.',
    },
    {
      qEn: 'What industries and customers does Morganite serve?',
      qAr: 'ما هي القطاعات والعملاء المستفيدون من منتجات مورجانيت؟',
      aEn: 'Morganite serves three primary B2B sectors: (1) Industrial Meat Processors (producers of mortadella, luncheon, sausages, burgers, and poultry), (2) Food Manufacturers & Commercial Bakeries, and (3) HORECA (Hotels, Restaurants, QSR Chains, Central Commissary Kitchens, and Catering Providers).',
      aAr: 'تخدم مورجانيت ثلاثة قطاعات رئيسية: (1) مصانع ومعالجات اللحوم والدواجن (المرتديلا، اللانشون، السجق، البرغر)، (2) مصانع الأغذية والمخابز الآلية، و(3) قطاع الضيافة والمطاعم هوريكا (الفنادق، سلاسل المطاعم السريعة، والمطابخ المركزية).',
    },
    {
      qEn: 'What quality certifications does Morganite hold?',
      qAr: 'ما هي شهادات الجودة والبيئة المعتمدة لمورجانيت؟',
      aEn: 'Morganite for Food Technology operates under an Environmental Management System certified to ISO 14001:2015 standards, ensuring controlled batch manufacturing and strict environmental compliance.',
      aAr: 'تلتزم شركة مورجانيت بنظام إدارة بيئي معتمد وفق معيار ISO 14001:2015، مما يضمن تصنيعاً معيارياً منضبطاً وتوافقاً بيئياً صارماً.',
    },
    {
      qEn: 'How do the English and Arabic entity names relate?',
      qAr: 'ما هي العلاقة بين الاسمين الإنجليزي والعربي للشركة؟',
      aEn: '“Morganite for Food Technology” and “شركة مورجانيت لتكنولوجيا الأغذية” refer to the exact same legal and manufacturing entity based in Amman, Jordan. The company is also known in the industry as “Morganite” or “Morganite Group”.',
      aAr: 'اسما "Morganite for Food Technology" و"شركة مورجانيت لتكنولوجيا الأغذية" يشيران إلى نفس الكيان الصناعي والقانوني القائم في عمان، الأردن، وتعرف الشركة اختصاراً باسم "مورجانيت" أو "مجموعة مورجانيت".',
    },
  ];

  return (
    <>
      <MetaHead
        title={
          isArabic
            ? 'عن شركة مورجانيت لتكنولوجيا الأغذية | الهوية، التأسيس، والقدرات'
            : 'About Morganite for Food Technology | Company Profile & Identity'
        }
        description={
          isArabic
            ? 'تعرف على شركة مورجانيت لتكنولوجيا الأغذية (تأسست عام 2013 في عمان): الهوية الصناعية، المؤسس المهندس صلاح الهرش، عائلات المنتجات السبع، شهادة ISO 14001:2015، والحلول المقدمة لمصانع الأغذية.'
            : 'Authoritative company profile of Morganite for Food Technology (est. 2013 in Amman, Jordan): Founder Eng. Salah Alheresh, 7 product families, ISO 14001:2015 certification, and B2B food technology capabilities.'
        }
        canonicalPath="/about-morganite"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About Morganite', url: '/about-morganite' },
          ]),
          createOrganizationSchema(),
        ]}
        id="about-morganite-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                COMPANY ENTITY // AUTHORITATIVE RECORD
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'سجل الشركات الأردنية (تأسست 2013)' : 'Jordanian Corporate Record (Est. 2013)'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? 'شركة مورجانيت لتكنولوجيا الأغذية' : 'Morganite for Food Technology'}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic
                ? 'شركة صناعية أردنية متخصصة في الخلطات الغذائية الجافة، النكهات، بهارات اللحوم، والمكونات الوظيفية.'
                : 'Jordanian food-technology manufacturer established in 2013 in Abu Alanda, Amman, Jordan.'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology (شركة مورجانيت لتكنولوجيا الأغذية) is a Jordanian food-technology and dry-mix manufacturer established in 2013 by Eng. Salah Alheresh. Located in Abu Alanda, Amman, Jordan, Morganite operates under ISO 14001:2015 environmental certification, manufacturing 7 product families (FLAVEX, CRUSTY, ACTIVE, TAPEL, SALSA, ZAATAR, GLUTEN FREE) for meat processors, food manufacturers, and HORECA food service operators."
            summaryAr="شركة مورجانيت لتكنولوجيا الأغذية هي شركة صناعية أردنية لتصنيع الخلطات الغذائية الجافة تأسست عام 2013 على يد المهندس صلاح الهرش. يقع مصنعها في أبو علندا، عمان، الأردن، وتعمل وفق معايير ISO 14001:2015 البيئية وتنتج 7 عائلات من المنتجات (فلافيكس، كروستي، أكتيف، تابل، صلصة، زعتر، والمنتجات الخالية من الغلوتين) لخدمة مصانع اللحوم والأغذية والمطاعم."
            entityType="Morganite Corporate Knowledge Entity"
            entityTypeAr="سجل الكيان المؤسسي لشركة مورجانيت"
          />

          {/* 7 CANONICAL QUESTIONS (EXPLICIT GROUNDED ENTITY RECORD) */}
          <div className="my-10 space-y-6">
            <div className="border-b border-black/10 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                {isArabic ? 'حقائق الكيان المعتمدة والموثقة' : 'Authoritative Entity Facts'}
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A]">
                {isArabic ? 'الحقائق التوثيقية حول شركة مورجانيت' : 'Core Canonical Facts on Morganite'}
              </h2>
            </div>

            <div className="space-y-4">
              {canonicalAnswers.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 border border-black/10 shadow-xs space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono font-bold text-[#8C5835]">0{idx + 1}</span>
                      <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                        {isArabic ? item.qAr : item.qEn}
                      </h3>
                    </div>
                    <VerificationBadge status="VERIFIED" size="sm" />
                  </div>
                  <p className="text-xs sm:text-sm text-black/85 leading-relaxed font-editorial-serif italic">
                    "{isArabic ? item.aAr : item.aEn}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CORPORATE SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {/* Founder Card */}
            <div className="bg-white p-6 border border-black/10 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'القيادة والمؤسس' : 'Founder & Leadership'}
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A]">
                  {isArabic ? 'المهندس صلاح الهرش' : 'Eng. Salah Alheresh'}
                </h3>
                <p className="text-xs text-black/75 font-editorial-serif italic">
                  {isArabic
                    ? 'المؤسس والمالك والمدير العام لشركة مورجانيت، مهندس أغذية وخبير التقييم الحسي للأغذية.'
                    : 'Founder, Owner, and General Manager of Morganite. Food engineer with specialized expertise in spice formulation and sensory food evaluation.'}
                </p>
              </div>
              <div className="pt-3 border-t border-black/10">
                <Link
                  to={`/founder/salah-alheresh?lang=${language}`}
                  className="text-xs font-bold uppercase tracking-wider text-black hover:text-[#8C5835] inline-flex items-center gap-1"
                >
                  <span>{isArabic ? 'سيرة المؤسس الكاملة' : 'Founder Biography'}</span>
                  <Arrow className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Quality Standard */}
            <div className="bg-white p-6 border border-black/10 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'شهادة الجودة والبيئة' : 'Quality Certification'}
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A]">
                  ISO 14001:2015 Certified
                </h3>
                <p className="text-xs text-black/75 font-editorial-serif italic">
                  {isArabic
                    ? 'تعمل منشأة مورجانيت في أبو علندا وفق متطلبات نظام الإدارة البيئية العالمي ISO 14001:2015.'
                    : 'Morganite facility in Abu Alanda operates under certified environmental management protocols (ISO 14001:2015).'}
                </p>
              </div>
              <div className="pt-3 border-t border-black/10 text-xs font-mono text-black/50">
                VERIFIED STANDARD
              </div>
            </div>

            {/* Facilities & Address */}
            <div className="bg-white p-6 border border-black/10 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'الموقع والمصنع' : 'Facility Location'}
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A]">
                  Amman, Jordan (عمان، الأردن)
                </h3>
                <p className="text-xs text-black/75 font-editorial-serif italic">
                  {isArabic
                    ? 'شارع عبد الرزاق الرابح، المنطقة الصناعية، أبو علندا، عمان، الأردن.'
                    : 'Abdul Razzaq Al Rabih Street, Abu Alanda Industrial Area, Amman, Jordan.'}
                </p>
              </div>
              <div className="pt-3 border-t border-black/10">
                <a
                  href={`tel:${COMPANY_ENTITY.contact.phone.replace(/\s+/g, '')}`}
                  className="text-xs font-bold text-black hover:text-[#8C5835]"
                >
                  {COMPANY_ENTITY.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* PRODUCT DIRECTORY LINK */}
          <div className="bg-[#1C241F] text-white p-8 border border-white/10 my-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#E8C5A0]">
                {isArabic ? 'دليل المنتجات والمكونات' : 'Product Knowledge Base'}
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                {isArabic
                  ? 'استعرض عائلات المنتجات السبع وأصناف مورجانيت'
                  : 'Explore Morganite 7 Product Families & Formulations'}
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-editorial-serif italic">
                {isArabic
                  ? 'تعرف على كافة أصناف النكهات، بهارات اللحوم، التغطيات المقرمشة، الروابط الوظيفية، والمنتجات الخالية من الغلوتين.'
                  : 'Browse verified specifications for FLAVEX, CRUSTY, ACTIVE, TAPEL, SALSA, ZAATAR, and GLUTEN FREE product lines.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <Link
                to={`/products?lang=${language}`}
                className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider bg-[#8C5835] hover:bg-[#A36840] text-white text-center transition-colors"
              >
                {isArabic ? 'دليل المنتجات' : 'Products Directory'}
              </Link>
              <Link
                to={`/solutions?lang=${language}`}
                className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center transition-colors"
              >
                {isArabic ? 'حلول القطاعات' : 'Industry Solutions'}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
