import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  FileText,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  Check,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema, createFaqSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { SEARCH_INTENT_PAGES } from '../data/searchIntentPages';
import { MASTER_FAQS } from '../data/faqData';
import { COMPANY_ENTITY } from '../data/companyEntity';

interface SearchIntentPageProps {
  forcedSlug?: string;
}

export const SearchIntentPage: React.FC<SearchIntentPageProps> = ({ forcedSlug }) => {
  const params = useParams<{ intentSlug?: string }>();
  const slug = forcedSlug || params.intentSlug;
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const pageData = SEARCH_INTENT_PAGES.find((p) => p.slug === slug);

  if (!pageData) {
    return <Navigate to={`/?lang=${language}`} replace />;
  }

  const relevantFaqs = MASTER_FAQS.filter((f) =>
    f.relatedPages.some((p) => p.includes(pageData.slug)) ||
    f.relatedEntities.some((e) => pageData.relatedEntities.includes(e))
  );

  const breadcrumbs = [
    { label: isArabic ? 'الأدلة المعرفية' : 'DOSSIERS', url: '/faq' },
    { label: isArabic ? pageData.titleAr : pageData.titleEn },
  ];

  const contentSections = isArabic ? pageData.mainContentAr : pageData.mainContentEn;

  return (
    <>
      <MetaHead
        title={`${isArabic ? pageData.titleAr : pageData.titleEn} | Morganite`}
        description={isArabic ? pageData.metaDescriptionAr : pageData.metaDescriptionEn}
        canonicalPath={`/${pageData.slug}`}
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: pageData.titleEn, url: `/${pageData.slug}` },
          ]),
          createFaqSchema(
            relevantFaqs.slice(0, 10).map((f) => ({
              question: isArabic ? f.question.ar : f.question.en,
              answer: isArabic ? f.answer.ar : f.answer.en,
            }))
          ),
        ]}
        id={`intent-schema-${pageData.slug}`}
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER BANNER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                {pageData.topicCategory}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 bg-white/5 text-white/70 border border-white/10">
                {pageData.intentType}
              </span>
              <VerificationBadge status="VERIFIED" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white max-w-4xl leading-tight">
              {isArabic ? pageData.titleAr : pageData.titleEn}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed font-editorial-serif italic text-lg">
              "{isArabic ? pageData.metaDescriptionAr : pageData.metaDescriptionEn}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn={pageData.aiSummaryEn}
            summaryAr={pageData.aiSummaryAr}
            entityType={`${pageData.intentType} Record`}
            entityTypeAr="سجل معرفي تعليمي موثق"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Col (8 cols): Content Sections & FAQs */}
            <div className="lg:col-span-8 space-y-8">
              {/* Sections */}
              {contentSections.map((section, idx) => (
                <section
                  key={idx}
                  className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-4"
                >
                  <div className="flex items-center gap-2 border-b border-black/10 pb-3">
                    <span className="text-sm font-editorial-serif italic text-black/30">0{idx + 1}</span>
                    <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                      {section.heading}
                    </h2>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-black/80 leading-relaxed">
                    {section.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Key Takeaways Box */}
                  {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                    <div className="mt-4 p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em] block">
                        {isArabic ? 'النقاط الجوهرية المؤكدة:' : 'Key Grounded Principles:'}
                      </span>
                      <ul className="space-y-2 text-xs text-black/80">
                        {section.keyTakeaways.map((takeaway, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-[#2D3A31] mt-1.5 flex-shrink-0" />
                            <span className="font-medium">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}

              {/* Related FAQs */}
              {relevantFaqs.length > 0 && (
                <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-4">
                  <div className="border-b border-black/10 pb-3">
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                      {isArabic ? 'الأسئلة الشائعة' : 'Related Questions'}
                    </div>
                    <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                      {isArabic ? 'الأسئلة الشائعة ذات الصلة بهذا المحور' : 'Topic-Related Verified Questions'}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {relevantFaqs.slice(0, 6).map((faq) => (
                      <div key={faq.id} className="p-4 border border-black/10 bg-[#FAF7F2] space-y-1.5">
                        <h3 className="font-bold text-xs sm:text-sm text-[#1A1A1A]">
                          {isArabic ? faq.question.ar : faq.question.en}
                        </h3>
                        <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic">
                          "{isArabic ? faq.answer.ar : faq.answer.en}"
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Col (4 cols): Quick Links & Contact */}
            <div className="lg:col-span-4 space-y-6">
              {/* Other Intent Hubs */}
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C5835] border-b border-black/10 pb-2">
                  {isArabic ? 'أدلة ومحاور معرفية أخرى' : 'Other Dossiers'}
                </div>
                <div className="space-y-1.5">
                  {SEARCH_INTENT_PAGES.filter((p) => p.slug !== pageData.slug).map((item) => (
                    <Link
                      key={item.slug}
                      to={`/${item.slug}?lang=${language}`}
                      className="p-2.5 border border-black/5 hover:border-black hover:bg-[#FAF7F2] text-xs font-bold text-black transition-colors block"
                    >
                      {isArabic ? item.titleAr : item.titleEn}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Verified Contact Card */}
              <div className="bg-[#1C241F] text-white p-6 border border-white/10 space-y-3 text-xs">
                <div className="text-[#C99A6B] font-bold uppercase tracking-[0.25em] text-[10px]">
                  {isArabic ? 'استفسارات مصانع الأغذية' : 'Industrial Supply Inquiries'}
                </div>
                <p className="text-white/70 leading-relaxed font-editorial-serif italic">
                  {isArabic
                    ? 'فريق مورجانيت جاهز لتزويدكم بالمواصفات الفنية للخلطات والنكهات وتقديم الدعم في خطوط الإنتاج.'
                    : 'Contact Morganite technical sales for formulation trials and batch supply in Jordan & export markets.'}
                </p>
                <div className="pt-2 space-y-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C99A6B]" />
                    <span>{COMPANY_ENTITY.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#C99A6B]" />
                    <span>{COMPANY_ENTITY.contact.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
