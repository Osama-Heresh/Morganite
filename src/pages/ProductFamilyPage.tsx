import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Layers,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Building,
  Phone,
  Mail,
  ExternalLink,
  Package,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createFaqSchema, createBreadcrumbSchema, createProductGroupSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { PRODUCT_FAMILIES } from '../data/productFamilies';
import { MASTER_FAQS } from '../data/faqData';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const ProductFamilyPage: React.FC = () => {
  const { familySlug } = useParams<{ familySlug: string }>();
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const productFamily = PRODUCT_FAMILIES.find((p) => p.slug === familySlug);

  if (!productFamily) {
    return <Navigate to={`/?lang=${language}`} replace />;
  }

  // Filter relevant FAQs for this product family
  const familyFaqs = MASTER_FAQS.filter(
    (faq) =>
      faq.category === productFamily.slug ||
      faq.relatedPages.some((p) => p.includes(productFamily.slug))
  );

  // Fallback to general product FAQs if none
  const displayFaqs = familyFaqs.length > 0 ? familyFaqs : MASTER_FAQS.filter((f) => f.category === 'products');

  const faqSchemaData = displayFaqs.map((f) => ({
    question: isArabic ? f.question.ar : f.question.en,
    answer: isArabic ? f.answer.ar : f.answer.en,
  }));

  const breadcrumbs = [
    { label: isArabic ? 'عائلات المنتجات' : 'PORTFOLIOS', url: '/' },
    { label: isArabic ? productFamily.nameAr : productFamily.name },
  ];

  const relatedFamilies = PRODUCT_FAMILIES.filter((p) =>
    productFamily.relatedProductFamilyIds.includes(p.id)
  );

  return (
    <>
      <MetaHead
        title={`${isArabic ? productFamily.nameAr : productFamily.name} | Morganite Knowledge Center`}
        description={isArabic ? productFamily.aiSummaryAr : productFamily.aiSummaryEn}
        canonicalPath={`/products/${productFamily.slug}`}
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: productFamily.name, url: `/products/${productFamily.slug}` },
          ]),
          createProductGroupSchema(productFamily, isArabic),
          createFaqSchema(faqSchemaData),
        ]}
        id={`product-schema-${productFamily.slug}`}
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP EDITORIAL BANNER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                PORTFOLIO // {productFamily.name}
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'إنتاج: شركة مورجانيت لتكنولوجيا الأغذية (عمان)' : 'Mfg by Morganite Food Tech (Amman, Jordan)'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? productFamily.nameAr : productFamily.name}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic ? productFamily.taglineAr : productFamily.taglineEn}
            </p>

            <p className="text-xs sm:text-sm text-white/70 max-w-3xl leading-relaxed font-light">
              {isArabic ? productFamily.overviewAr : productFamily.overviewEn}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI-READABLE SUMMARY CARD */}
          <AiReadableSummary
            summaryEn={productFamily.aiSummaryEn}
            summaryAr={productFamily.aiSummaryAr}
            entityType={`${productFamily.name} Product Family Record`}
            entityTypeAr={`سجل عائلة منتجات ${productFamily.name}`}
          />

          {/* SPECIAL COMPLIANCE / INGREDIENT NOTICE (E.g. Zaatar / Gluten-Free) */}
          {(productFamily.specialNoticeEn || productFamily.specialNoticeAr) && (
            <div className="my-6 p-5 bg-[#FAF7F2] border border-[#8C5835]/40 text-[#1A1A1A] flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-[#8C5835] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm space-y-1">
                <span className="font-bold uppercase tracking-wider text-[10px] text-[#8C5835] block">
                  {isArabic ? 'إشعار توثيقي ومعياري هام:' : 'Important Regulatory & Formulation Monograph:'}
                </span>
                <p className="leading-relaxed font-editorial-serif italic text-sm text-[#1A1A1A]">
                  "{isArabic ? productFamily.specialNoticeAr : productFamily.specialNoticeEn}"
                </p>
              </div>
            </div>
          )}

          {/* MAIN GRID: PRODUCTS & APPLICATIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
            {/* Left Col (8 cols): Product items & Applications */}
            <div className="lg:col-span-8 space-y-10">
              {/* Product Examples List */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                      {isArabic ? 'المواصفات والأصناف' : 'Formulation Specifications'}
                    </div>
                    <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                      {isArabic ? 'أصناف المنتجات الموثقة ضمن هذه العائلة' : 'Verified Commercial Formulations'}
                    </h2>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-mono text-black/50 bg-[#F5F2ED] px-2.5 py-1 border border-black/10">
                    {productFamily.productExamples.length} {isArabic ? 'أصناف' : 'Items'}
                  </span>
                </div>

                <div className="space-y-4">
                  {productFamily.productExamples.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#FAF7F2] border border-black/10 hover:border-black transition-all space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-3 border-b border-black/5 pb-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-editorial-serif italic text-black/40">0{idx + 1}</span>
                          <h3 className="font-bold text-[#1A1A1A] text-base">
                            {isArabic ? item.nameAr : item.name}
                          </h3>
                        </div>
                        <VerificationBadge status={item.verificationStatus} size="sm" />
                      </div>

                      <p className="text-xs sm:text-sm text-black/75 leading-relaxed font-editorial-serif italic">
                        "{isArabic ? item.descriptionAr : item.description}"
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/50">
                          {isArabic ? 'التطبيقات:' : 'Applications:'}
                        </span>
                        {(isArabic ? item.applicationsAr : item.applications).map((app, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-white border border-black/10 text-[10px] font-mono text-black font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Applications Section */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-4">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'الاستخدام الصناعي' : 'Industrial & Commercial Deployment'}
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                  {isArabic ? 'تطبيقات الاستخدام في خطوط الإنتاج والمطابخ' : 'Processing Line & Culinary Applications'}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-black/80 pt-2">
                  {(isArabic ? productFamily.applicationsAr : productFamily.applicationsEn).map(
                    (app, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] border border-black/5">
                        <div className="w-1.5 h-1.5 bg-[#8C5835] mt-1.5 flex-shrink-0" />
                        <span className="font-medium">{app}</span>
                      </li>
                    )
                  )}
                </ul>
              </section>

              {/* FAQs for this Product Family */}
              <section className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="flex items-baseline justify-between border-b border-black/10 pb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                      {isArabic ? 'الأسئلة التقنية الموثقة' : 'Grounded Questions'}
                    </div>
                    <h2 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                      {isArabic
                        ? `أسئلة حول ${productFamily.name}`
                        : `Questions Regarding ${productFamily.name}`}
                    </h2>
                  </div>
                  <Link
                    to={`/faq/${productFamily.slug}?lang=${language}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:underline"
                  >
                    {isArabic ? 'عرض الفئة كاملة' : 'View Hub →'}
                  </Link>
                </div>

                <div className="space-y-4">
                  {displayFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="p-4 bg-[#FAF7F2] border border-black/10 space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-black/5 pb-1.5">
                        <h3 className="font-bold text-xs sm:text-sm text-[#1A1A1A]">
                          {isArabic ? faq.question.ar : faq.question.en}
                        </h3>
                        <VerificationBadge status={faq.verificationStatus} size="sm" />
                      </div>
                      <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic">
                        "{isArabic ? faq.answer.ar : faq.answer.en}"
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Col (4 cols): Target Users, Industries, Related, Contact */}
            <div className="lg:col-span-4 space-y-6">
              {/* Target Business Users Card */}
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-3">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'المستخدمون المستهدفون' : 'Target Operators'}
                </div>
                <ul className="space-y-2 text-xs text-black/80">
                  {(isArabic ? productFamily.targetUsersAr : productFamily.targetUsersEn).map(
                    (user, idx) => (
                      <li key={idx} className="flex items-center gap-2 border-b border-black/5 pb-1.5 last:border-0">
                        <span className="w-1 h-1 bg-black"></span>
                        <span>{user}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Related Industries */}
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-3">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'القطاعات الصناعية' : 'Relevant Sectors'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {productFamily.relatedIndustries.map((ind, i) => (
                    <Link
                      key={i}
                      to={`/industries?lang=${language}`}
                      className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-black hover:text-white text-black border border-black/15 text-[10px] uppercase tracking-wider font-mono font-medium transition-all"
                    >
                      {isArabic ? productFamily.relatedIndustriesAr[i] || ind : ind}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Product Families */}
              {relatedFamilies.length > 0 && (
                <div className="bg-white p-6 border border-black/10 shadow-xs space-y-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'عائلات مكملة' : 'Complementary Systems'}
                  </div>
                  <div className="space-y-2">
                    {relatedFamilies.map((rel) => (
                      <Link
                        key={rel.slug}
                        to={`/products/${rel.slug}?lang=${language}`}
                        className="p-3 border border-black/10 hover:border-black bg-[#FAF7F2] flex items-center justify-between transition-colors block text-xs"
                      >
                        <div>
                          <div className="font-bold text-black">{rel.name}</div>
                          <div className="text-[10px] font-editorial-serif italic text-black/50 line-clamp-1">
                            {isArabic ? rel.taglineAr : rel.taglineEn}
                          </div>
                        </div>
                        <Chevron className="w-3.5 h-3.5 text-black/40" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Consultation CTA Plate */}
              <div className="bg-[#1C241F] text-white p-6 border border-white/10 space-y-4">
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#C99A6B]">
                  {isArabic ? 'طلب عينات ودعم فني' : 'Technical Consultation // Samples'}
                </div>
                <h3 className="font-bold text-base text-white">
                  {isArabic
                    ? `استشر مهندسي مورجانيت حول ${productFamily.name}`
                    : `Technical Inquiries for ${productFamily.name}`}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-editorial-serif italic">
                  {isArabic
                    ? 'يقدم فريق البحث والتطوير استشارات مخصصة لمطابقة النكهات وتعديل القوام لتناسب خطوط الإنتاج لديكم.'
                    : 'Contact Morganite food scientists for formulation trials, dosing recommendations, and custom batch packaging.'}
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
