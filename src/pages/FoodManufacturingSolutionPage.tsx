import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Package,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema, createServiceSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { ALL_PRODUCTS } from '../data/productsTaxonomy';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const FoodManufacturingSolutionPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const manufacturingProducts = ALL_PRODUCTS.filter((p) =>
    p.suitableIndustriesEn.includes('Food Manufacturing')
  );

  const applications = [
    {
      titleEn: 'Industrial Bakery Conditioning & Volume Control',
      titleAr: 'تحسين العجين والتحكم بالحجم في المخابز الصناعية',
      descEn:
        'Improving dough elasticity, oven spring, and shelf freshness in commercial burger buns, flatbreads, and toast loaves using ACTIVE Bread Improver.',
      descAr:
        'تحسين مرونة العجين، زيادة حجم الرغيف في الفرن، وإطالة فترة الطراوة في خبز البرغر والخبز العربي والتوست باستخدام محسن الخبز (أكتيف).',
    },
    {
      titleEn: 'Plant-Based & Vegetarian Meat Structuring',
      titleAr: 'هيكلة وتثبيت بدائل اللحوم والمنتجات النباتية',
      descEn:
        'Providing chewable texture, moisture retention, and balanced savory flavor in soy, pea, and wheat protein bases using ACTIVE Plant Base Enhancer and FLAVEX Vegetable/Beef flavors.',
      descAr:
        'منح قوام متماسك وملمس فموي ونكهة متوازنة في بروتينات الصويا والبازلاء والقمح بمحسن المنتجات النباتية ونكهات فلافيكس.',
    },
    {
      titleEn: 'Allergen-Controlled Gluten-Free Starches & Flours',
      titleAr: 'النشويات والطحين الخالي من الغلوتين الآمن للحساسية',
      descEn:
        'High-purity milled Rice Flour and Corn Flour for gluten-free bakeries, sauce thickening plants, and wheat-free dry mix packaging lines.',
      descAr:
        'طحين أرز وطحين ذرة عالي النقاوة للمخابز الخالية من الغلوتين ومصانع تكثيف الصلصات وخطوط تعبئة الخلطات الجافة.',
    },
    {
      titleEn: 'Bulk Dry Mix Blending & Custom Seasoning Packs',
      titleAr: 'خلط وتعبئة المساحيق والبهارات المعيارية للمصانع',
      descEn:
        'Batch-scaled unit packaging matching factory kettle or mixer capacities (e.g. 5kg, 10kg, 25kg) to eliminate shopfloor weighing errors and ensure cross-batch consistency.',
      descAr:
        'تعبئة خلطات موزونة مسبقاً تطابق سعة خلاطات المصنع (مثل 5 كغم، 10 كغم، 25 كغم) لإلغاء أخطاء الوزن البشري وضمان تجانس دفعات الإنتاج.',
    },
  ];

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', url: '/' },
    { label: isArabic ? 'حلول تكنولوجيا الأغذية' : 'Food Technology Solutions', url: '/solutions' },
    { label: isArabic ? 'حلول التصنيع الغذائي' : 'Food Manufacturing Solutions' },
  ];

  return (
    <>
      <MetaHead
        title={
          isArabic
            ? 'حلول مصانع الأغذية والتصنيع الغذائي | شركة مورجانيت (عمان، الأردن)'
            : 'Morganite Solutions for Food Manufacturing | Industrial Food Ingredients'
        }
        description={
          isArabic
            ? 'حلول توريد وتطوير لمصانع الأغذية من مورجانيت: خلطات جافة معيارية، محسنات مخابز، بدائل نباتية، نشويات خالية من الغلوتين، ونكهات غذائية مصنعة في عمان وفق معايير ISO 14001:2015.'
            : 'Industrial food ingredient manufacturing solutions by Morganite for Food Technology (Amman, Jordan): standardized dry blends, bakery improvers, gluten-free starches, and bulk savory flavors.'
        }
        canonicalPath="/solutions/food-manufacturing"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Food Manufacturing', url: '/solutions/food-manufacturing' },
          ]),
          createServiceSchema(
            {
              name: 'Food Manufacturing Solutions',
              nameAr: 'حلول التصنيع الغذائي',
              description:
                'Standardized industrial dry mixes, bakery conditioning improvers, gluten-free ingredients, and bulk savory seasonings.',
              descriptionAr:
                'خلطات جافة صناعية معيارية، محسنات عجين للمخابز، مكونات خالية من الغلوتين، ونكهات غذائية سائبة.',
              url: '/solutions/food-manufacturing',
            },
            isArabic
          ),
        ]}
        id="food-mfg-solution-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                SECTOR // FOOD MANUFACTURING
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'إنتاج صناعي للمصانع' : 'Industrial Plant Scale Supply'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? 'حلول مورجانيت لمصانع الأغذية' : 'Morganite Solutions for Food Manufacturing'}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic
                ? 'خلطات جافة صناعية، محسنات مخابز، بدائل نباتية، ومكونات خالية من الغلوتين للمصانع الكبرى.'
                : 'Standardized industrial dry mixes, bakery improvers, plant-based structuring agents, and gluten-free raw materials.'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology provides food manufacturing plants with batch-scaled dry mixes, ACTIVE Bread Improver for commercial bakeries, ACTIVE Plant Base Enhancer for vegan food lines, pure Rice & Corn Flours for gluten-free manufacturing, and FLAVEX savory flavors for snack and ready-meal processors."
            summaryAr="تزود شركة مورجانيت لتكنولوجيا الأغذية المصانع الغذائية بخلطات جافة معيارية موزونة، ومحسن الخبز ACTIVE للمخابز الآلية، ومحسن المنتجات النباتية ACTIVE للأغذية النباتية، وطحين الأرز والذرة النقي لخطوط الإنتاج الخالية من الغلوتين، ونكهات فلافيكس FLAVEX لمصانع الوجبات والمقرمشات."
            entityType="Food Manufacturing Solutions Record"
            entityTypeAr="سجل حلول قطاع التصنيع الغذائي"
          />

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
            <div className="lg:col-span-8 space-y-10">
              {/* Application Areas */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'القدرات الصناعية لمصانع الأغذية' : 'Plant Capabilities'}
                  </span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'تطبيقات خطوط الإنتاج الغذائي' : 'Industrial Production Applications'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {applications.map((app, idx) => (
                    <div key={idx} className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#8C5835]">0{idx + 1}</span>
                        <h3 className="font-bold text-base text-[#1A1A1A]">
                          {isArabic ? app.titleAr : app.titleEn}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black/80 font-editorial-serif italic leading-relaxed">
                        "{isArabic ? app.descAr : app.descEn}"
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Products List */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'أصناف التصنيع المعتمدة' : 'Verified Products'}
                  </span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'المنتجات المخصصة للتصنيع الغذائي' : 'Products for Food Manufacturing'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {manufacturingProducts.map((prod) => (
                    <Link
                      key={prod.id}
                      to={`/products/${prod.familySlug}/${prod.slug}?lang=${language}`}
                      className="p-3.5 bg-[#FAF7F2] border border-black/10 hover:border-black transition-all flex items-center justify-between block"
                    >
                      <div>
                        <span className="text-[9px] font-mono font-bold text-[#8C5835] block">
                          {prod.familyName}
                        </span>
                        <div className="font-bold text-sm text-[#1A1A1A]">{isArabic ? prod.nameAr : prod.name}</div>
                      </div>
                      <Chevron className="w-4 h-4 text-black/40" />
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#1C241F] text-white p-6 border border-white/10 space-y-4">
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#C99A6B]">
                  {isArabic ? 'استشارات المصانع الغذائية' : 'Food Plant Consultation'}
                </div>
                <h3 className="font-bold text-base text-white">
                  {isArabic ? 'توريد خلطات معيارية لمصنعك' : 'Batch Supply for Your Factory'}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-editorial-serif italic">
                  {isArabic
                    ? 'تواصل مع مورجانيت لمناقشة مواصفات التعبئة، شهادات التحليل، وتطوير خلطات خاصة بخطوط إنتاجكم.'
                    : 'Contact Morganite to discuss custom pack sizes, Certificates of Analysis, and dedicated recipe development.'}
                </p>

                <div className="space-y-2 pt-1 text-xs">
                  <a
                    href={`tel:${COMPANY_ENTITY.contact.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-white/80 hover:text-[#E8C5A0] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C99A6B]" />
                    <span>{COMPANY_ENTITY.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_ENTITY.contact.email}`}
                    className="flex items-center gap-2 text-white/80 hover:text-[#E8C5A0] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C99A6B]" />
                    <span>{COMPANY_ENTITY.contact.email}</span>
                  </a>
                </div>

                <div className="pt-2 space-y-2">
                  <Link
                    to={`/custom-food-solutions?lang=${language}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#C99A6B] hover:bg-[#D8AC7F] text-[#141A16] transition-colors"
                  >
                    <span>{isArabic ? 'طلب تطوير خلطة' : 'Custom Formulation'}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
