import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Factory,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema, createFaqSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { PRODUCT_FAMILIES } from '../data/productFamilies';
import { MASTER_FAQS } from '../data/faqData';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const IndustryDetailPage: React.FC = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const { language, isArabic } = useLanguage();
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const industry = INDUSTRIES_DATA.find((i) => i.slug === industrySlug);

  if (!industry) {
    return <Navigate to={`/industries?lang=${language}`} replace />;
  }

  const matchingFamilies = PRODUCT_FAMILIES.filter((p) =>
    industry.matchingProductFamilies.includes(p.id)
  );

  const industryFaqs = MASTER_FAQS.filter(
    (f) =>
      f.category === industry.slug ||
      f.relatedPages.some((p) => p.includes(industry.slug))
  );

  const breadcrumbs = [
    { label: isArabic ? 'القطاعات الصناعية' : 'SECTORS', url: '/industries' },
    { label: isArabic ? industry.nameAr : industry.name },
  ];

  return (
    <>
      <MetaHead
        title={`${isArabic ? industry.nameAr : industry.name} | Morganite Knowledge Center`}
        description={isArabic ? industry.aiSummaryAr : industry.aiSummaryEn}
        canonicalPath={`/industries/${industry.slug}`}
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Industries', url: '/industries' },
            { name: industry.name, url: `/industries/${industry.slug}` },
          ]),
          createFaqSchema(
            industryFaqs.map((f) => ({
              question: isArabic ? f.question.ar : f.question.en,
              answer: isArabic ? f.answer.ar : f.answer.en,
            }))
          ),
        ]}
        id={`ind-schema-${industry.slug}`}
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                SECTOR DOSSIER // {industry.name}
              </span>
              <VerificationBadge status="VERIFIED" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? industry.nameAr : industry.name}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic ? industry.heroTaglineAr : industry.heroTaglineEn}
            </p>

            <p className="text-xs sm:text-sm text-white/70 max-w-3xl leading-relaxed font-light">
              {isArabic ? industry.overviewAr : industry.overviewEn}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn={industry.aiSummaryEn}
            summaryAr={industry.aiSummaryAr}
            entityType={`${industry.name} Solution Fact`}
            entityTypeAr={`حقيقة حلول قطاع ${industry.nameAr}`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Col (8 cols): Challenges & Key Solutions */}
            <div className="lg:col-span-8 space-y-8">
              {/* Challenges Solved */}
              <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-4">
                <div className="border-b border-black/10 pb-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'تحديات الإنتاج' : 'Technical Bottlenecks'}
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'تحديات التصنيع والإنتاج التي تعالجها منتجات مورجانيت' : 'Commercial Challenges Resolved'}
                  </h2>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-black/80">
                  {(isArabic ? industry.challengesSolvedAr : industry.challengesSolvedEn).map((ch, idx) => (
                    <li key={idx} className="p-4 bg-[#FAF7F2] border border-black/5 flex items-start gap-3">
                      <span className="text-sm font-editorial-serif italic text-black/40">0{idx + 1}</span>
                      <span className="leading-relaxed font-medium">{ch}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Key Solutions */}
              <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-4">
                <div className="border-b border-black/10 pb-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'المنظومات المعتمدة' : 'Engineered Solutions'}
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'الحلول المعتمدة ومنظومات المكونات' : 'Engineered Solution Systems'}
                  </h2>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-black/80">
                  {(isArabic ? industry.keySolutionsAr : industry.keySolutionsEn).map((sol, idx) => (
                    <li key={idx} className="p-4 bg-[#FAF7F2] border border-black/10 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#2D3A31] mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed font-editorial-serif italic text-base">"{sol}"</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Relevant FAQs */}
              {industryFaqs.length > 0 && (
                <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-4">
                  <div className="border-b border-black/10 pb-3">
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                      {isArabic ? 'الأسئلة الشائعة' : 'Sector Inquiries'}
                    </div>
                    <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                      {isArabic ? 'الأسئلة الشائعة الخاصة بهذا القطاع' : 'Sector-Specific Verified Questions'}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {industryFaqs.map((faq) => (
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

            {/* Right Col (4 cols): Matching Products & Inquiries */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C5835] border-b border-black/10 pb-2">
                  {isArabic ? 'عائلات المنتجات المتوافقة' : 'Matching Product Systems'}
                </div>

                <div className="space-y-2">
                  {matchingFamilies.map((fam) => (
                    <Link
                      key={fam.slug}
                      to={`/products/${fam.slug}?lang=${language}`}
                      className="p-3 border border-black/10 hover:border-black bg-[#FAF7F2] transition-colors flex items-center justify-between block text-xs"
                    >
                      <div>
                        <div className="font-bold text-black">{fam.name}</div>
                        <div className="text-[10px] font-editorial-serif italic text-black/50 line-clamp-1">
                          {isArabic ? fam.taglineAr : fam.taglineEn}
                        </div>
                      </div>
                      <Chevron className="w-3.5 h-3.5 text-black/40" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Consultation Card */}
              <div className="bg-[#1C241F] text-white p-6 border border-white/10 space-y-3 text-xs">
                <div className="text-[#C99A6B] font-bold uppercase tracking-[0.25em] text-[10px]">
                  {isArabic ? 'طلب استشارة صناعية' : 'Industrial Technical Inquiry'}
                </div>
                <p className="text-white/70 leading-relaxed font-editorial-serif italic">
                  {isArabic
                    ? 'يقوم مهندسو مورجانيت بزيارة المصانع الشريكة أو استقبال العينات لضبط نسب الخلطات وتجارب الطهي.'
                    : 'Our technical specialists assist with pilot formulation, batch sizing, and line optimization.'}
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
