import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertTriangle,
  Building,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema, createServiceSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { ALL_PRODUCTS } from '../data/productsTaxonomy';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const MeatProcessingSolutionPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const meatProducts = ALL_PRODUCTS.filter((p) =>
    p.suitableIndustriesEn.includes('Meat Processing')
  );

  const meatFamilies = [
    {
      name: 'TAPEL',
      nameAr: 'تابل',
      slug: 'tapel',
      roleEn: 'Industrial spice blends for mortadella, luncheon, sausages, salami, burger, kebab, and pepperoni.',
      roleAr: 'خلطات بهارات صناعية للمرتديلا واللانشون والنقانق والسلامي والبرغر والكباب والبيبروني.',
    },
    {
      name: 'ACTIVE',
      nameAr: 'أكتيف',
      slug: 'active',
      roleEn: 'Functional brine mixes, burger enhancers, MDM fighters, and moisture binding systems.',
      roleAr: 'محاليل النقع والحقن، محسنات البرغر، معالجات لحوم MDM، وأنظمة ربط السوائل.',
    },
    {
      name: 'FLAVEX',
      nameAr: 'فلافيكس',
      slug: 'flavex',
      roleEn: 'Thermal-stable savory beef, chicken, turkey, smoke, grill, and spicy food flavors.',
      roleAr: 'نكهات اللحم والدجاج والحبش والتدخين والشواء الحارة المقاومة لحرارة التصنيع.',
    },
    {
      name: 'CRUSTY',
      nameAr: 'كروستي',
      slug: 'crusty',
      roleEn: 'Pre-dust, batter mixes, flour breadings, and breadcrumbs for nuggets, tenders, and escalopes.',
      roleAr: 'خلطات البريدست والباتر وطحين التغطية والبقسماط للناغتس والستربس والاسكالوب.',
    },
  ];

  const applications = [
    {
      titleEn: 'Emulsified & Cooked Sausages (Mortadella, Frankfurters, Luncheon)',
      titleAr: 'اللحوم المستحلبة والمطهوة (المرتديلا، النقانق، اللانشون)',
      descEn:
        'Uniform spice integration, color stability, water-binding retention, and fat emulsion optimization using TAPEL seasonings and ACTIVE functional binders.',
      descAr:
        'تجانس توزيع البهارات، ثبات اللون الوردي، احتباس السوائل، وتثبيت استحلاب الدهون باستخدام بهارات تابل وروابط أكتيف الوظيفية.',
    },
    {
      titleEn: 'Burger & Patty Manufacturing',
      titleAr: 'تصنيع وتشكيل أقراص البرغر',
      descEn:
        'Minimizing cook shrinkage, maintaining center juiciness, and delivering authentic flame-grilled or roasted notes with ACTIVE Burger Enhancer and FLAVEX Grill/Beef flavors.',
      descAr:
        'تقليل انكماش القرص أثناء القلي والشواء، حفظ العصارة الداخلية، ومنح نكهة الشواء الغنية بمحسن البرغر ونكهات فلافيكس.',
    },
    {
      titleEn: 'Poultry Further-Processing & Breaded Meats',
      titleAr: 'تصنيع الدواجن واللحوم المغطاة (Further Processing)',
      descEn:
        'Complete 3-step coating architecture (Pre-dust -> Batter -> Flour Breading / Bread Crumbs) combined with internal injection brines for juicy fried chicken and nuggets.',
      descAr:
        'منظومة التغطية الثلاثية المتكاملة (بريدست -> باتر -> طحين تغطية / بقسماط) مع محاليل الحقن الداخلية لضمان قرمشة خارجية وعصارة داخلية.',
    },
    {
      titleEn: 'MDM Recipe Optimization (Mechanically Deboned Meat)',
      titleAr: 'تحسين وتطوير وصفات لحوم MDM',
      descEn:
        'Resolving textural softness and metallic oxidation notes in cost-effective processed meat formulations using ACTIVE MDM Fighter.',
      descAr:
        'معالجة رخاوة القوام ونفحات الأكسدة في الوصفات الاقتصادية لتعزيز تماسك المنتج النهائي باستخدام معالج MDM Fighter.',
    },
  ];

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', url: '/' },
    { label: isArabic ? 'حلول تكنولوجيا الأغذية' : 'Food Technology Solutions', url: '/solutions' },
    { label: isArabic ? 'حلول مصانع ومعالجة اللحوم' : 'Meat Processing Solutions' },
  ];

  return (
    <>
      <MetaHead
        title={
          isArabic
            ? 'حلول مصانع ومعالجة اللحوم | شركة مورجانيت لتكنولوجيا الأغذية (عمان)'
            : 'Morganite Solutions for Meat Processing | Industrial Meat Formulations'
        }
        description={
          isArabic
            ? 'حلول متكاملة لمصانع اللحوم من مورجانيت: بهارات المرتديلا والسجق والبرغر (TAPEL)، محسنات القوام ومحاليل الحقن (ACTIVE)، نكهات اللحم والدجاج (FLAVEX)، وخلطات البريدست والباتر (CRUSTY).'
            : 'Comprehensive industrial formulations for meat processors by Morganite for Food Technology (Amman, Jordan): TAPEL spices, ACTIVE binders & brines, FLAVEX flavors, and CRUSTY coating systems.'
        }
        canonicalPath="/solutions/meat-processing"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Meat Processing', url: '/solutions/meat-processing' },
          ]),
          createServiceSchema(
            {
              name: 'Meat Processing Solutions',
              nameAr: 'حلول مصانع ومعالجة اللحوم',
              description:
                'Custom spice blends, functional binders, injection brines, and coating systems for industrial meat and poultry processors.',
              descriptionAr:
                'خلطات بهارات مخصصة، روابط وظيفية، محاليل حقن ونقع، وأنظمة تغطية لمصانع اللحوم والدواجن.',
              url: '/solutions/meat-processing',
            },
            isArabic
          ),
        ]}
        id="meat-processing-solution-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                SECTOR // MEAT PROCESSING
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'هندسة منتجات اللحوم المصنعة' : 'Processed Meat Formulation Engineering'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? 'حلول مورجانيت لمصانع ومعالجة اللحوم' : 'Morganite Solutions for Meat Processing'}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic
                ? 'خلطات بهارات معيارية، محاليل حقن ونقع، روابط وظيفية، وأنظمة تغطية متكاملة لمصانع اللحوم والدواجن.'
                : 'Advanced dry mixes, custom seasoning blends, functional water-binding complexes, and crunchy coating systems for meat manufacturers.'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI READABLE SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology is a specialized developer and manufacturer of dry mixes and functional ingredients for the meat processing sector. Morganite supplies industrial producers with TAPEL spice blends (mortadella, sausages, burgers, salami, zinger), ACTIVE functional ingredients (brine mixes, burger enhancers, MDM fighters), FLAVEX savory flavors, and CRUSTY coating systems (pre-dust, batter, breading)."
            summaryAr="تعد شركة مورجانيت لتكنولوجيا الأغذية جهة تصنيع وتطوير رائدة للخلطات الجافة والمكونات الوظيفية لقطاع معالجة اللحوم. تزود مورجانيت المصانع ببهارات تابل TAPEL (المرتديلا، السجق، البرغر، السلامي، الزنجر)، ومكونات أكتيف ACTIVE الوظيفية (محاليل الحقن، محسنات البرغر، معالجات MDM)، ونكهات فلافيكس FLAVEX، وأنظمة كروستي CRUSTY للتغطية."
            entityType="Meat Processing Industrial Solutions"
            entityTypeAr="حلول قطاع تصنيع ومعالجة اللحوم"
          />

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Core Application Modules */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'مجالات المعالجة الصناعية' : 'Processing Line Areas'}
                  </span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'تطبيقات مورجانيت في خطوط تصنيع اللحوم' : 'Manufacturing Line Applications'}
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

              {/* Integrated Product Families for Meat */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'عائلات المنتجات المستخدمة' : 'Product Integration'}
                  </span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'منظومة منتجات مورجانيت لقطاع اللحوم' : 'Integrated Product Families for Meat Plants'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {meatFamilies.map((fam) => (
                    <div key={fam.slug} className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-black text-lg text-black">{fam.name}</span>
                          <span className="text-xs font-bold text-black/50">{fam.nameAr}</span>
                        </div>
                        <p className="text-xs text-black/75 font-editorial-serif italic mt-2">
                          "{isArabic ? fam.roleAr : fam.roleEn}"
                        </p>
                      </div>
                      <div className="pt-3 border-t border-black/10">
                        <Link
                          to={`/products/${fam.slug}?lang=${language}`}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-black hover:text-[#8C5835]"
                        >
                          <span>{isArabic ? 'استعراض منتجات العائلة' : 'View Portfolio'}</span>
                          <Arrow className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Verified Meat Products Grid */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'قائمة المنتجات المعتمدة' : 'Verified Formulations'}
                  </span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'أصناف مورجانيت المخصصة لمصانع اللحوم' : 'Available Meat Processing Products'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {meatProducts.map((prod) => (
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

            {/* Right Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Technical Consultation CTA Plate */}
              <div className="bg-[#1C241F] text-white p-6 border border-white/10 space-y-4">
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#C99A6B]">
                  {isArabic ? 'دعم فني وتجارب مصنعية' : 'Factory Trials // Meat Formulation'}
                </div>
                <h3 className="font-bold text-base text-white">
                  {isArabic ? 'طلب استشارة لمصنع اللحوم لديكم' : 'Consult with Meat Processing Engineers'}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-editorial-serif italic">
                  {isArabic
                    ? 'يقوم مهندسو الأغذية في مورجانيت بزيارة المصانع وتقديم استشارات لضبط نسب الحقن، تماسك القوام، ومطابقة النكهات.'
                    : 'Morganite food technologists assist meat plants with trial batches, yield calculations, and flavor profile matching.'}
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
                    <span>{isArabic ? 'طلب تطوير خلطة مخصصة' : 'Custom Formulation Request'}</span>
                  </Link>
                  <Link
                    to={`/research-development?lang=${language}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  >
                    <span>{isArabic ? 'قدرات مختبر R&D' : 'R&D Capabilities'}</span>
                  </Link>
                </div>
              </div>

              {/* Quality & Traceability Card */}
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-3">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'معايير الإنتاج والجودة' : 'Manufacturing Standards'}
                </div>
                <ul className="space-y-2 text-xs text-black/80">
                  <li className="flex items-start gap-2 border-b border-black/5 pb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5835] flex-shrink-0 mt-0.5" />
                    <span>{isArabic ? 'نظام إدارة بيئي معتمد ISO 14001:2015' : 'ISO 14001:2015 Environmental System'}</span>
                  </li>
                  <li className="flex items-start gap-2 border-b border-black/5 pb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5835] flex-shrink-0 mt-0.5" />
                    <span>{isArabic ? 'تحكم دقيق في نسب الخلط والتجانس الدفعي' : 'Precise dry batch blending & traceability'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5835] flex-shrink-0 mt-0.5" />
                    <span>{isArabic ? 'تعبئة صناعية مخصصة لأحجام التشغيل' : 'Custom industrial batch packaging sizes'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
