import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  ArrowLeft,
  Search,
  CheckCircle2,
  Package,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  Building,
  Phone,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { PRODUCT_FAMILIES } from '../data/productFamilies';
import { ALL_PRODUCTS } from '../data/productsTaxonomy';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const ProductsPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');

  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const filteredProducts = ALL_PRODUCTS.filter((prod) => {
    const matchesFamily = selectedFamily === 'all' || prod.familySlug === selectedFamily;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesFamily;

    const matchesName =
      prod.name.toLowerCase().includes(q) ||
      prod.nameAr.toLowerCase().includes(q) ||
      prod.familyName.toLowerCase().includes(q) ||
      prod.shortDescriptionEn.toLowerCase().includes(q) ||
      prod.shortDescriptionAr.toLowerCase().includes(q);

    return matchesFamily && matchesName;
  });

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', url: '/' },
    { label: isArabic ? 'المنتجات والمكونات' : 'Products & Ingredients' },
  ];

  return (
    <>
      <MetaHead
        title={
          isArabic
            ? 'منتجات ومكونات الأغذية | شركة مورجانيت لتكنولوجيا الأغذية (عمان، الأردن)'
            : 'Morganite Food Products & Ingredients | Commercial Food Formulation Catalog'
        }
        description={
          isArabic
            ? 'دليل المنتجات الشامل لشركة مورجانيت: النكهات الغذائية FLAVEX، خلطات التغطية CRUSTY، المكونات الوظيفية ACTIVE، بهارات اللحوم TAPEL، الصلصات SALSA، الزعتر والدقة ZAATAR، والمنتجات الخالية من الغلوتين.'
            : 'Comprehensive commercial product catalog of Morganite for Food Technology (Amman, Jordan): FLAVEX flavors, CRUSTY coatings, ACTIVE functional ingredients, TAPEL spices, SALSA sauces, ZAATAR blends, and GLUTEN FREE range.'
        }
        canonicalPath="/products"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
          ]),
        ]}
        id="products-directory-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* HEADER SECTION */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                OFFICIAL PRODUCT CATALOG // 7 FAMILIES
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'صُنّع في عمان - الأردن' : 'Manufactured in Amman, Jordan'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? 'منتجات ومكونات مورجانيت للأغذية' : 'Morganite Food Products & Ingredients'}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic
                ? 'سبع عائلات رئيسية من الخلطات الجافة، النكهات، بهارات اللحوم، والتغطيات المقرمشة والمنتجات الوظيفية.'
                : 'Seven primary product families engineered for industrial meat processing, commercial food manufacturing, and HORECA food service.'}
            </p>

            <p className="text-xs sm:text-sm text-white/70 max-w-3xl leading-relaxed font-light">
              {isArabic
                ? 'تنتج شركة مورجانيت لتكنولوجيا الأغذية (تأسست عام 2013 في أبو علندا، عمان) خلطات غذائية جافة ومكونات متخصصة مصممة لتلبية متطلبات خطوط الإنتاج والمطابخ المركزية مع معايير جودة وبيئة موثقة (ISO 14001:2015).'
                : 'Morganite for Food Technology (established 2013 in Abu Alanda, Amman) manufactures certified dry food blends, functional binders, spice mixes, sauces, and gluten-free solutions tailored for B2B processors.'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI-READABLE SUMMARY CARD */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology manufactures 7 primary product families: FLAVEX (Food Flavors), CRUSTY (Food Coatings), ACTIVE (Functional Food Ingredients), TAPEL (Spice Blends), SALSA (Powdered Sauces), ZAATAR (Heritage Thyme & Duqqa), and GLUTEN FREE (Wheat-Free Specialty Products). All formulations are manufactured in Amman, Jordan for B2B industrial meat processors, food manufacturers, and HORECA kitchens."
            summaryAr="تنتج شركة مورجانيت لتكنولوجيا الأغذية 7 عائلات رئيسية من المنتجات: فلافيكس FLAVEX (النكهات الغذائية)، كروستي CRUSTY (خلطات التغطية)، أكتيف ACTIVE (المكونات الوظيفية)، تابل TAPEL (خلطات التوابل والبهارات)، صلصة SALSA (الصلصات والتغميسات)، زعتر ZAATAR (الزعتر والدقة الأردنية)، والمنتجات الخالية من الغلوتين GLUTEN FREE. تُصنع كافة التركيبات في عمان - الأردن لخدمة مصانع اللحوم، المصانع الغذائية، وقطاع الضيافة والمطاعم."
            entityType="Morganite Complete Product Taxonomy"
            entityTypeAr="سجل تصنيف منتجات مورجانيت الكامل"
          />

          {/* PRODUCT FAMILIES DIRECTORY (7 PILLARS) */}
          <div className="my-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'الهيكل التصنيفي المعتمد' : 'Primary Architecture'}
                </span>
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A]">
                  {isArabic ? 'عائلات المنتجات السبع (7 Families)' : 'The 7 Morganite Product Families'}
                </h2>
              </div>
              <span className="text-xs font-mono text-black/60">
                {isArabic ? '7 عائلات / 50+ صنفاً معتمداً' : '7 Portfolios // 50+ Monitored Items'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRODUCT_FAMILIES.map((family, idx) => (
                <div
                  key={family.slug}
                  className="bg-white p-6 border border-black/10 hover:border-black transition-all flex flex-col justify-between space-y-4 shadow-xs"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#8C5835] bg-[#FAF7F2] px-2 py-0.5 border border-black/10">
                        FAMILY 0{idx + 1}
                      </span>
                      <VerificationBadge status="VERIFIED" size="sm" />
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                      <Link
                        to={`/products/${family.slug}?lang=${language}`}
                        className="hover:text-[#8C5835] transition-colors"
                      >
                        {family.name}
                      </Link>
                    </h3>
                    <div className="text-xs font-bold text-black/60">{family.nameAr}</div>

                    <p className="text-xs text-black/70 font-editorial-serif italic line-clamp-2">
                      "{isArabic ? family.taglineAr : family.taglineEn}"
                    </p>

                    <p className="text-xs text-black/80 leading-relaxed line-clamp-3">
                      {isArabic ? family.overviewAr : family.overviewEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-black/50">
                      {family.productExamples.length} {isArabic ? 'أصناف موثقة' : 'Verified Items'}
                    </span>
                    <Link
                      to={`/products/${family.slug}?lang=${language}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-[#8C5835] transition-colors"
                    >
                      <span>{isArabic ? 'استعراض العائلة' : 'View Family'}</span>
                      <Arrow className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INDIVIDUAL PRODUCTS SEARCH & CATALOG */}
          <div className="my-12 bg-white p-6 sm:p-8 border border-black/10 space-y-8 shadow-xs">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'فهرس الأصناف الفردية' : 'Item-Level Directory'}
                  </span>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A]">
                    {isArabic ? 'دليل المنتجات والأصناف الفردية' : 'Individual Product Specifications'}
                  </h2>
                </div>

                {/* Filter / Search Bar */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative min-w-[240px]">
                    <Search className="w-4 h-4 text-black/40 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={isArabic ? 'ابحث عن صنف أو بهار...' : 'Search product or spice...'}
                      className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 bg-[#FAF7F2] border border-black/15 text-xs focus:outline-none focus:border-black"
                    />
                  </div>

                  <select
                    value={selectedFamily}
                    onChange={(e) => setSelectedFamily(e.target.value)}
                    className="py-2 px-3 bg-[#FAF7F2] border border-black/15 text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-black cursor-pointer"
                  >
                    <option value="all">{isArabic ? 'كافة العائلات (All)' : 'All Product Families'}</option>
                    {PRODUCT_FAMILIES.map((f) => (
                      <option key={f.slug} value={f.slug}>
                        {f.name} ({isArabic ? f.nameAr : f.name})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-xs text-black/60">
                {isArabic
                  ? `عرض ${filteredProducts.length} من أصل ${ALL_PRODUCTS.length} منتجاً موثقاً`
                  : `Showing ${filteredProducts.length} of ${ALL_PRODUCTS.length} verified commercial formulations`}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="p-5 bg-[#FAF7F2] border border-black/10 hover:border-black transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C5835] bg-white px-2 py-0.5 border border-black/10">
                        {prod.familyName}
                      </span>
                      <VerificationBadge status={prod.verificationStatus} size="sm" />
                    </div>

                    <h3 className="font-bold text-base text-[#1A1A1A]">
                      <Link
                        to={`/products/${prod.familySlug}/${prod.slug}?lang=${language}`}
                        className="hover:text-[#8C5835] transition-colors"
                      >
                        {isArabic ? prod.nameAr : prod.name}
                      </Link>
                    </h3>

                    <p className="text-xs text-black/75 font-editorial-serif italic leading-relaxed line-clamp-2">
                      "{isArabic ? prod.shortDescriptionAr : prod.shortDescriptionEn}"
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1">
                      {(isArabic ? prod.applicationsAr : prod.applicationsEn).slice(0, 2).map((app, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-white border border-black/10 text-[10px] font-mono text-black"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-black/40">
                      {isArabic ? prod.categoryAr : prod.category}
                    </span>
                    <Link
                      to={`/products/${prod.familySlug}/${prod.slug}?lang=${language}`}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-black hover:text-[#8C5835] transition-colors"
                    >
                      <span>{isArabic ? 'التفاصيل' : 'Details'}</span>
                      <Arrow className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMMERCIAL INQUIRY / SAMPLES CALLOUT */}
          <div className="bg-[#1C241F] text-white p-8 border border-white/10 my-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#E8C5A0]">
                {isArabic ? 'طلبات العينات الصناعية والتطوير الخاص' : 'Commercial Trials // Custom Formulation'}
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                {isArabic
                  ? 'هل تحتاج إلى وصفة مخصصة أو عينة تجريبية لخط إنتاجك؟'
                  : 'Need Custom Recipe Balancing or Factory Sample Trials?'}
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-editorial-serif italic">
                {isArabic
                  ? 'يقدم قسم البحث والتطوير في مورجانيت استشارات هندسية غذائية لتطوير الخلطات وتعديل نسب التغطية ونكهات اللحوم حسب مواصفات مصنعكم.'
                  : 'Morganite R&D food scientists work directly with processors to adapt flavor intensity, functional binding, and batch pack sizes.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <Link
                to={`/custom-food-solutions?lang=${language}`}
                className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider bg-[#8C5835] hover:bg-[#A36840] text-white text-center transition-colors"
              >
                {isArabic ? 'الحلول المخصصة' : 'Custom Solutions'}
              </Link>
              <Link
                to={`/research-development?lang=${language}`}
                className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center transition-colors"
              >
                {isArabic ? 'مختبر R&D' : 'R&D Capabilities'}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
