import React from 'react';
import { Link } from 'react-router-dom';
import {
  Utensils,
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

export const HorecaSolutionPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const horecaProducts = ALL_PRODUCTS.filter((p) =>
    p.suitableIndustriesEn.includes('HORECA')
  );

  const applications = [
    {
      titleEn: 'Quick-Service Fried Chicken & Burgers (QSR)',
      titleAr: 'سلاسل مطاعم الدجاج المقلي والبرغر السريعة',
      descEn:
        'Standardized Zinger & Broasted marinades, high-crunch Flour Breading, Batter Mix, Burger Seasoning, and ready dipping sauces ensuring identical taste across multiple restaurant branches.',
      descAr:
        'تتبيلات زنجر وبروستد معيارية، طحين تغطية فائق القرمشة، خلطات باتر، بهارات برغر، وصلصات تغميس تضمن تطابق المذاق عبر جميع فروع السلسلة.',
    },
    {
      titleEn: 'Central Commissary Kitchens & Meal Assembly',
      titleAr: 'المطابخ المركزية وسلاسل التوريد الداخلية',
      descEn:
        'Labor-saving dry mix bases for marinades, gravies, dressings, and skewered meats that reduce culinary prep time and eliminate measuring variances.',
      descAr:
        'خلطات جافة موفرة للجهد والعمالة لتتبيل اللحوم، تحضير المرق، وإعداد الصلصات، تقلل زمن التجهيز وتلغي تباين الطعم.',
    },
    {
      titleEn: 'Hotel Breakfast Buffets & Hospitality Heritage',
      titleAr: 'بوفيهات الإفطار الفندقية والمأكولات التراثية',
      descEn:
        'Authentic Jordanian Zaatar, heritage Duqqa, and ready Zaatar with Olive Oil presentations for 5-star hotel breakfast displays and artisanal dining tables.',
      descAr:
        'الزعتر الأردني الأصيل، الدقة التراثية، وخلطات الزعتر بزيت الزيتون الجاهزة لبوفيهات الفنادق العالمية وطاولات الضيافة الراقية.',
    },
    {
      titleEn: 'Signature Dipping & Table Sauces',
      titleAr: 'صلصات التغميس والمائدة الحصرية للمطاعم',
      descEn:
        'Stable Mayonnaise bases, Garlic toum sauce, smoky BBQ, fiery Buffalo, tangy Mustard, and Honey Mustard formulated for high-turnover foodservice dispensers and portion cups.',
      descAr:
        'قواعد مايونيز ثابتة، صلصة ثومية شامية، باربكيو مدخن، بافلو حار، وصلصة خردل بالعسل مخصصة لموزعات المطاعم وعبوات التقديم.',
    },
  ];

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', url: '/' },
    { label: isArabic ? 'حلول تكنولوجيا الأغذية' : 'Food Technology Solutions', url: '/solutions' },
    { label: isArabic ? 'حلول قطاع الضيافة والمطاعم' : 'HORECA Solutions' },
  ];

  return (
    <>
      <MetaHead
        title={
          isArabic
            ? 'حلول قطاع الضيافة والمطاعم (هوريكا) | شركة مورجانيت للأغذية (عمان)'
            : 'Morganite Solutions for HORECA | Foodservice & Restaurant Ingredients'
        }
        description={
          isArabic
            ? 'حلول توريد للمطابخ المركزية وسلاسل المطاعم والفنادق: تتبيلات البروستد والزنجر، طحين التغطية المقرمش، بهارات الشاورما والكباب، صلصات المايونيز والثومية والباربكيو، والزعتر الأردني الأصيل.'
            : 'HORECA food technology and ingredient solutions by Morganite (Amman, Jordan): QSR fried chicken coatings, signature burger & kebab seasonings, foodservice sauces, and heritage Zaatar.'
        }
        canonicalPath="/solutions/horeca"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'HORECA', url: '/solutions/horeca' },
          ]),
          createServiceSchema(
            {
              name: 'HORECA Foodservice Solutions',
              nameAr: 'حلول قطاع الضيافة والمطاعم هوريكا',
              description:
                'Standardized marinades, crunchy coating systems, foodservice sauces, and heritage breakfast blends for restaurant chains and hotels.',
              descriptionAr:
                'تتبيلات معيارية، أنظمة تغطية مقرمشة، صلصات طعام، وخلطات إفطار تراثية لسلاسل المطاعم والفنادق.',
              url: '/solutions/horeca',
            },
            isArabic
          ),
        ]}
        id="horeca-solution-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                SECTOR // HORECA & FOODSERVICE
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'حلول المطاعم والفنادق' : 'Restaurant & Hospitality Grade'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? 'حلول مورجانيت لقطاع الضيافة والمطاعم (هوريكا)' : 'Morganite Solutions for HORECA'}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic
                ? 'تتبيلات معيارية عالية الثبات، طحين تغطية فائق القرمشة، صلصات جاهزة، وزعتر أردني أصيل لسلاسل المطاعم والفنادق.'
                : 'Labor-saving dry mix marinades, crunchy coating flours, commercial dipping sauces, and authentic Zaatar for QSRs and hotels.'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology serves hotels, restaurants, and catering operators (HORECA) with CRUSTY coating systems (Zinger/Broasted breadings, tempura), TAPEL restaurant seasonings (kebab, burger, fajita, kofta, Italian), SALSA commercial sauces (mayo, garlic toum, BBQ, buffalo), and authentic ZAATAR blends for breakfast buffets."
            summaryAr="تخدم شركة مورجانيت لتكنولوجيا الأغذية الفنادق والمطاعم وشركات الإعاشة (هوريكا) بأنظمة تغطية كروستي CRUSTY (طحين زنجر وبروستد، تمبورا)، وبهارات تابل TAPEL للمطاعم (كباب، برغر، فاهيتا، كفتة، خلطة إيطالية)، وصلصات صلصة SALSA (مايونيز، ثومية، باربكيو، بافلو)، ومنتجات زعتر ZAATAR الأردنية الأصيلة لبوفيهات الإفطار."
            entityType="HORECA Solutions Record"
            entityTypeAr="سجل حلول قطاع الضيافة والمطاعم"
          />

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
            <div className="lg:col-span-8 space-y-10">
              {/* Application Areas */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'تطبيقات الخدمة الغذائية' : 'Foodservice Use Cases'}
                  </span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'حلول المطابخ المركزية وسلاسل المطاعم' : 'Restaurant & Commissary Applications'}
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
                    {isArabic ? 'أصناف هوريكا المعتمدة' : 'Verified Products'}
                  </span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'المنتجات المخصصة للمطاعم والفنادق' : 'Products for HORECA & Foodservice'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {horecaProducts.map((prod) => (
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
                  {isArabic ? 'استشارات المطابخ والمطاعم' : 'Culinary Consultation'}
                </div>
                <h3 className="font-bold text-base text-white">
                  {isArabic ? 'تطوير نكهات حصرية لسلسلة مطاعمك' : 'Custom Profiles for Restaurant Chains'}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-editorial-serif italic">
                  {isArabic
                    ? 'نقدم لسلاسل المطاعم والمطابخ المركزية خلطات توابل حصرية وتتبيلات سرية تحمي هوية علامتك التجارية مع عقود سرية تامة.'
                    : 'We engineer proprietary spice blends and secret-recipe marinades for restaurant brands under complete non-disclosure agreements.'}
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
                    <span>{isArabic ? 'تطوير وصفة حصرية' : 'Custom Recipe Development'}</span>
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
