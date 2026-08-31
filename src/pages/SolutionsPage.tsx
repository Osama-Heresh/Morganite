import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Building,
  Utensils,
  Factory,
  Beaker,
  ShieldCheck,
  Phone,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema, createServiceSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const SolutionsPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const solutions = [
    {
      slug: 'meat-processing',
      titleEn: 'Meat Processing Solutions',
      titleAr: 'حلول مصانع ومعالجة اللحوم',
      taglineEn: 'Custom seasonings, functional binders, injection brines, and coating systems for commercial meat processors.',
      taglineAr: 'خلطات بهارات متخصصة، محسنات وظيفية، محاليل حقن ونقع، وأنظمة تغطية متكاملة لمصانع اللحوم والدواجن.',
      descriptionEn:
        'Engineered for industrial producers of mortadella, luncheon, sausages, burgers, and poultry further-processing. Solutions include TAPEL spice blends, ACTIVE functional binders and MDM modifiers, FLAVEX savory flavors, and CRUSTY coating lines.',
      descriptionAr:
        'مصممة لمنتجي المرتديلا، اللانشون، السجق، أقراص البرغر، ومصنعات الدواجن. تشمل الحلول بهارات تابل، ومحسنات أكتيف الوظيفية، ونكهات فلافيكس، وأنظمة كروستي للتغطية.',
      icon: Factory,
      families: ['TAPEL', 'ACTIVE', 'FLAVEX', 'CRUSTY'],
      url: '/solutions/meat-processing',
    },
    {
      slug: 'food-manufacturing',
      titleEn: 'Food Manufacturing Solutions',
      titleAr: 'حلول مصانع الأغذية',
      taglineEn: 'Industrial dry mixes, standardized seasoning batches, functional starches, and bulk ingredients for commercial food plants.',
      taglineAr: 'خلطات جافة صناعية، بهارات معيارية للتشغيلات الكبيرة، نشويات وظيفية، ومكونات سائبة لمصانع الأغذية والمخابز.',
      descriptionEn:
        'Serving industrial bakeries, ready-meal manufacturers, snack producers, and dry mix packagers with batch-scaled dry blends, bread conditioning improvers, and allergen-controlled gluten-free raw materials.',
      descriptionAr:
        'خدمة المخابز الصناعية، مصانع الوجبات الجاهزة، مصنعي المقرمشات، وشركات تعبئة الخلطات الجافة بخلطات معيارية موزونة ومحسنات خبز ومواد خام خالية من الغلوتين.',
      icon: Building,
      families: ['ACTIVE', 'FLAVEX', 'SALSA', 'GLUTEN FREE'],
      url: '/solutions/food-manufacturing',
    },
    {
      slug: 'horeca',
      titleEn: 'HORECA & Foodservice Solutions',
      titleAr: 'حلول قطاع الضيافة والمطاعم (هوريكا)',
      taglineEn: 'High-yield marinades, crispy breadings, signature sauces, and heritage blends for hotels, restaurants, and catering.',
      taglineAr: 'تتبيلات عالية النكهة، طحين تغطية وبقسماط مقرمش، صلصات جاهزة، وزعتر ودقة أصيلة للفنادق والمطاعم وشركات الإعاشة.',
      descriptionEn:
        'Supporting multi-unit quick service restaurant chains, central commissary kitchens, hotel culinary operations, and institutional catering with consistent, labor-saving dry mixes, sauces, and breadings.',
      descriptionAr:
        'دعم سلاسل مطاعم الخدمة السريعة، المطابخ المركزية، الفنادق، وشركات الإعاشة بخلطات جاهزة توفر العمالة وتضمن ثبات الطعم وجودة التقديم.',
      icon: Utensils,
      families: ['CRUSTY', 'SALSA', 'TAPEL', 'ZAATAR'],
      url: '/solutions/horeca',
    },
  ];

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', url: '/' },
    { label: isArabic ? 'حلول تكنولوجيا الأغذية' : 'Food Technology Solutions' },
  ];

  return (
    <>
      <MetaHead
        title={
          isArabic
            ? 'حلول تكنولوجيا الأغذية | شركة مورجانيت لتكنولوجيا الأغذية'
            : 'Food Technology Solutions | Morganite for Food Technology'
        }
        description={
          isArabic
            ? 'حلول صناعية متكاملة من شركة مورجانيت: حلول مصانع اللحوم، حلول التصنيع الغذائي، وحلول قطاع الضيافة والمطاعم (هوريكا). خلطات جافة، بهارات، وتغطيات مخصصة.'
            : 'Morganite Food Technology Solutions: Industrial Meat Processing, Commercial Food Manufacturing, and HORECA food service solutions engineered in Amman, Jordan.'
        }
        canonicalPath="/solutions"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
          ]),
          createServiceSchema(
            {
              name: 'Food Technology Solutions',
              nameAr: 'حلول تكنولوجيا الأغذية',
              description:
                'Industrial meat processing solutions, commercial food manufacturing formulations, and HORECA foodservice systems.',
              descriptionAr:
                'حلول تصنيع ومعالجة اللحوم، تركيبات التصنيع الغذائي التجاري، وأنظمة توريد قطاع الضيافة والمطاعم.',
              url: '/solutions',
            },
            isArabic
          ),
        ]}
        id="solutions-directory-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                INDUSTRIAL CAPABILITIES // SOLUTIONS
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'هندسة غذائية متقدمة' : 'Applied Food Engineering'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? 'حلول تكنولوجيا الأغذية' : 'Food Technology Solutions'}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic
                ? 'حلول تصنيعية وتطويرية مصممة خصيصاً لمصانع اللحوم، المعامل الغذائية، وشبكات المطاعم والإعاشة.'
                : 'Custom-engineered formulation, texture, seasoning, and functional ingredient systems across core food manufacturing sectors.'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI READABLE SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology provides three core industrial solution pillars: (1) Meat Processing Solutions (seasonings, functional brines, binders, and coatings for mortadella, burgers, sausages, and poultry), (2) Food Manufacturing Solutions (custom dry mixes, bakery improvers, gluten-free starches for food plants), and (3) HORECA Solutions (commercial marinades, breadings, sauces, and heritage blends for restaurants and hotels)."
            summaryAr="تقدم شركة مورجانيت لتكنولوجيا الأغذية ثلاثة ركائز أساسية للحلول الصناعية: (1) حلول مصانع ومعالجة اللحوم (بهارات، محاليل حقن، روابط وظيفية، وتغطيات للمرتديلا والبرغر والسجق والدواجن)، (2) حلول مصانع الأغذية (خلطات جافة مخصصة، محسنات مخابز، ونشويات خالية من الغلوتين)، و(3) حلول قطاع الضيافة والمطاعم هوريكا (تتبيلات، طحين تغطية، صلصات، وزعتر ودقة للمطاعم والفنادق)."
            entityType="Morganite Solutions Architecture"
            entityTypeAr="هيكل حلول شركة مورجانيت"
          />

          {/* THREE CORE SOLUTION TILES */}
          <div className="my-10 space-y-6">
            <div className="flex items-baseline justify-between border-b border-black/10 pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'القطاعات الصناعية الرئيسية' : 'Industry Sectors'}
                </span>
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A]">
                  {isArabic ? 'محاور الحلول الصناعية لمورجانيت' : 'Core Solution Sectors'}
                </h2>
              </div>
              <span className="text-xs font-mono text-black/60">
                {isArabic ? '3 قطاعات صناعية' : '3 Verified Sectors'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {solutions.map((sol, idx) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.slug}
                    className="bg-white p-6 sm:p-8 border border-black/10 hover:border-black transition-all flex flex-col justify-between space-y-6 shadow-xs"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 bg-[#FAF7F2] border border-black/10 flex items-center justify-center text-[#8C5835]">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-black/50">
                          SECTOR 0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                          <Link to={`${sol.url}?lang=${language}`} className="hover:text-[#8C5835] transition-colors">
                            {isArabic ? sol.titleAr : sol.titleEn}
                          </Link>
                        </h3>
                        <p className="text-xs text-[#8C5835] font-editorial-serif italic mt-1">
                          {isArabic ? sol.taglineAr : sol.taglineEn}
                        </p>
                      </div>

                      <p className="text-xs text-black/80 leading-relaxed">
                        {isArabic ? sol.descriptionAr : sol.descriptionEn}
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-black/50 block mb-1.5">
                          {isArabic ? 'عائلات المنتجات المرتبطة:' : 'Integrated Product Families:'}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {sol.families.map((fam) => (
                            <span
                              key={fam}
                              className="px-2 py-0.5 bg-[#FAF7F2] border border-black/10 text-[10px] font-mono font-bold text-black"
                            >
                              {fam}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/10">
                      <Link
                        to={`${sol.url}?lang=${language}`}
                        className="inline-flex items-center justify-between w-full p-2.5 bg-[#FAF7F2] hover:bg-black hover:text-white border border-black/15 text-xs font-bold uppercase tracking-wider transition-all"
                      >
                        <span>{isArabic ? 'استعراض الحل التفصيلي' : 'Explore Sector Solution'}</span>
                        <Arrow className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CUSTOM FOOD SOLUTIONS & R&D PROMO TILES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 border border-black/10 space-y-4">
              <div className="flex items-center gap-2">
                <Beaker className="w-5 h-5 text-[#8C5835]" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'التطوير الحصري' : 'Proprietary Development'}
                </span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                {isArabic ? 'الحلول والخلطات الغذائية المخصصة' : 'Custom Food Solutions & Formulation'}
              </h3>
              <p className="text-xs sm:text-sm text-black/80 font-editorial-serif italic leading-relaxed">
                {isArabic
                  ? 'تصميم خلطات توابل حصرية، وتطوير تتبيلات سرية لسلاسل المطابخ، ومطابقة النكهات مع الحفاظ على سرية التركيبات وحماية الملكية الفكرية لعملائنا.'
                  : 'Tailored spice blends, proprietary restaurant flavor profiles, yield optimization brines, and confidential recipe development for food enterprises.'}
              </p>
              <Link
                to={`/custom-food-solutions?lang=${language}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5835] hover:underline"
              >
                <span>{isArabic ? 'تعرف على خدمة التطوير المخصص' : 'Explore Custom Formulation →'}</span>
              </Link>
            </div>

            <div className="bg-[#FAF7F2] p-6 sm:p-8 border border-black/10 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#8C5835]" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'مختبر الأبحاث' : 'Applied Science'}
                </span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                {isArabic ? 'البحث والتطوير والتقييم الحسي' : 'Research & Development (R&D)'}
              </h3>
              <p className="text-xs sm:text-sm text-black/80 font-editorial-serif italic leading-relaxed">
                {isArabic
                  ? 'بقيادة المهندس صلاح الهرش (خبير التقييم الحسي للأغذية)، يقدم مختبر مورجانيت اختبارات تجريبية، ومطابقة قوام، وضبط استقرار التخزين لجميع المنتجات.'
                  : 'Led by Eng. Salah Alheresh (Sensory Evaluation Specialist), Morganite R&D conducts sensory matching, texture rheology testing, and pilot batch validation.'}
              </p>
              <Link
                to={`/research-development?lang=${language}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5835] hover:underline"
              >
                <span>{isArabic ? 'استكشف قدرات البحث والتطوير' : 'Explore R&D Capabilities →'}</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
