import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
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
  Layers,
  Package,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema, createProductSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { ALL_PRODUCTS } from '../data/productsTaxonomy';
import { PRODUCT_FAMILIES } from '../data/productFamilies';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const ProductDetailPage: React.FC = () => {
  const { familySlug, productSlug } = useParams<{ familySlug: string; productSlug: string }>();
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const product = ALL_PRODUCTS.find(
    (p) => p.slug === productSlug && p.familySlug === familySlug
  );

  const productFamily = PRODUCT_FAMILIES.find((f) => f.slug === familySlug);

  if (!product || !productFamily) {
    return <Navigate to={`/products?lang=${language}`} replace />;
  }

  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => product.relatedProductSlugs.includes(p.slug) || (p.familySlug === product.familySlug && p.id !== product.id)
  ).slice(0, 4);

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', url: '/' },
    { label: isArabic ? 'المنتجات والمكونات' : 'Products & Ingredients', url: '/products' },
    { label: isArabic ? productFamily.nameAr : productFamily.name, url: `/products/${productFamily.slug}` },
    { label: isArabic ? product.nameAr : product.name },
  ];

  return (
    <>
      <MetaHead
        title={`${isArabic ? product.nameAr : product.name} | ${productFamily.name} | Morganite for Food Technology`}
        description={isArabic ? product.shortDescriptionAr : product.shortDescriptionEn}
        canonicalPath={`/products/${product.familySlug}/${product.slug}`}
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
            { name: productFamily.name, url: `/products/${productFamily.slug}` },
            { name: product.name, url: `/products/${product.familySlug}/${product.slug}` },
          ]),
          createProductSchema(product, isArabic),
        ]}
        id={`product-schema-${product.slug}`}
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* HEADER SECTION */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={`/products/${productFamily.slug}?lang=${language}`}
                className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 hover:bg-white/20 text-[#E8C5A0] border border-white/20 transition-colors"
              >
                FAMILY // {productFamily.name}
              </Link>
              <VerificationBadge status={product.verificationStatus} />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'صنع شركة مورجانيت (عمان، الأردن)' : 'Mfg by Morganite Food Tech (Amman, Jordan)'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? product.nameAr : product.name}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic ? product.shortDescriptionAr : product.shortDescriptionEn}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI-READABLE SUMMARY */}
          <AiReadableSummary
            summaryEn={`${product.name} is a verified commercial food formulation manufactured by Morganite for Food Technology (Amman, Jordan) under the ${productFamily.name} portfolio. Applications include: ${product.applicationsEn.join(', ')}. Suitable for ${product.suitableIndustriesEn.join(', ')}.`}
            summaryAr={`صنف ${product.nameAr} هو منتج غذائي موثق تصنعه شركة مورجانيت لتكنولوجيا الأغذية (عمان، الأردن) ضمن عائلة ${productFamily.nameAr}. تشمل التطبيقات: ${product.applicationsAr.join('، ')}. ومناسب لقطاعات ${product.suitableIndustriesAr.join('، ')}.`}
            entityType={`${product.name} Product Monograph`}
            entityTypeAr={`توثيق مواصفات منتج ${product.nameAr}`}
          />

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
            {/* Left Column (8 cols): Description, Applications, Technical Specs Notice */}
            <div className="lg:col-span-8 space-y-8">
              {/* Product Overview & Description */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-4">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'التوصيف الصناعي' : 'Formulation Monograph'}
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                  {isArabic ? 'نظرة عامة على الصنف والمواصفات' : 'Product Profile & Engineering Overview'}
                </h2>
                <p className="text-sm sm:text-base text-black/80 leading-relaxed font-editorial-serif italic">
                  "{isArabic ? product.fullDescriptionAr : product.fullDescriptionEn}"
                </p>
              </section>

              {/* Verified Applications */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-4">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'تطبيقات خطوط الإنتاج' : 'Verified Industrial Applications'}
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                  {isArabic ? 'الاستخدامات وتطبيقات التحضير' : 'Processing Lines & Commercial Use Cases'}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-black/80 pt-2">
                  {(isArabic ? product.applicationsAr : product.applicationsEn).map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3.5 bg-[#FAF7F2] border border-black/5">
                      <div className="w-2 h-2 bg-[#8C5835] mt-1.5 flex-shrink-0" />
                      <span className="font-medium text-black">{app}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Technical Specs Notice (Grounded policy: no fabricated numbers) */}
              <div className="p-6 bg-[#FAF7F2] border border-[#8C5835]/40 text-[#1A1A1A] space-y-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#8C5835]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C5835]">
                    {isArabic ? 'سياسة المواصفات الفنية المعتمدة' : 'Technical Specifications & Certificate of Analysis'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed font-editorial-serif italic">
                  "{isArabic ? product.technicalSpecsNoticeAr : product.technicalSpecsNoticeEn}"
                </p>
                <p className="text-[11px] text-black/60 pt-1">
                  {isArabic
                    ? 'توفر مورجانيت أوراق البيانات الفنية (TDS) وشهادات التحليل (COA) وإرشادات نسب الإضافة الموصى بها مباشرة للمصانع الغذائية وعملاء B2B عند الطلب.'
                    : 'Morganite provides Technical Data Sheets (TDS), Certificates of Analysis (COA), and dosage guidelines directly to verified B2B processors upon consultation.'}
                </p>
              </div>

              {/* Related Products in the same ecosystem */}
              {relatedProducts.length > 0 && (
                <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'أصناف مكملة وذات صلة' : 'Complementary Formulations'}
                  </div>
                  <h2 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A]">
                    {isArabic ? 'منتجات تستخدم مع هذا الصنف' : 'Related Products in the Morganite Ecosystem'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {relatedProducts.map((rel) => (
                      <Link
                        key={rel.slug}
                        to={`/products/${rel.familySlug}/${rel.slug}?lang=${language}`}
                        className="p-4 bg-[#FAF7F2] border border-black/10 hover:border-black transition-all flex flex-col justify-between space-y-2 block"
                      >
                        <div>
                          <span className="text-[9px] font-mono uppercase font-bold text-[#8C5835]">
                            {rel.familyName}
                          </span>
                          <h3 className="font-bold text-sm text-[#1A1A1A] mt-0.5">
                            {isArabic ? rel.nameAr : rel.name}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-black pt-2 border-t border-black/5">
                          <span>{isArabic ? 'عرض المواصفة' : 'View Monograph'}</span>
                          <Chevron className="w-3 h-3 text-black/40" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column (4 cols): Meta box, Industries, Consultation CTA */}
            <div className="lg:col-span-4 space-y-6">
              {/* Product Metadata Card */}
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-4">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'بطاقة التعريف الفني' : 'Formulation Metadata'}
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-black/50">{isArabic ? 'عائلة المنتج:' : 'Family:'}</span>
                    <Link
                      to={`/products/${productFamily.slug}?lang=${language}`}
                      className="font-bold text-black hover:underline"
                    >
                      {productFamily.name} ({isArabic ? productFamily.nameAr : productFamily.name})
                    </Link>
                  </div>

                  <div className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-black/50">{isArabic ? 'التصنيف:' : 'Category:'}</span>
                    <span className="font-bold text-black">{isArabic ? product.categoryAr : product.category}</span>
                  </div>

                  <div className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-black/50">{isArabic ? 'الجهة المصنعة:' : 'Manufacturer:'}</span>
                    <span className="font-bold text-black">Morganite for Food Tech</span>
                  </div>

                  <div className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-black/50">{isArabic ? 'المقر الصناعي:' : 'Facility:'}</span>
                    <span className="font-bold text-black">Abu Alanda, Amman, Jordan</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-black/50">{isArabic ? 'نظام الجودة والبيئة:' : 'Standard:'}</span>
                    <span className="font-bold text-black">ISO 14001:2015</span>
                  </div>
                </div>
              </div>

              {/* Target Sectors Card */}
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-3">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'القطاعات الصناعية المستفيدة' : 'Suitable Sectors'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(isArabic ? product.suitableIndustriesAr : product.suitableIndustriesEn).map((ind, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#FAF7F2] text-black border border-black/15 text-[10px] uppercase tracking-wider font-mono font-medium"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Consultation CTA Plate */}
              <div className="bg-[#1C241F] text-white p-6 border border-white/10 space-y-4">
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#C99A6B]">
                  {isArabic ? 'طلب عينات وتجارب مصنعية' : 'Sample Trials // Consultation'}
                </div>
                <h3 className="font-bold text-base text-white">
                  {isArabic
                    ? `طلب عينة من ${product.nameAr}`
                    : `Request Trial Sample for ${product.name}`}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-editorial-serif italic">
                  {isArabic
                    ? 'يقدم فريق الدعم الفني في مورجانيت عينات تجريبية واستشارات لتعديل التركيبة بما يتطابق مع متطلبات خط إنتاجك.'
                    : 'Request factory trial samples and consult with Morganite food engineers on formulation tuning and batch pack sizes.'}
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

                <div className="pt-2">
                  <a
                    href={COMPANY_ENTITY.contact.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#C99A6B] hover:bg-[#D8AC7F] text-[#141A16] transition-colors"
                  >
                    <span>{isArabic ? 'الموقع الرسمي' : 'Official Portal'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
