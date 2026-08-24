import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { INDUSTRIES_DATA } from '../data/industriesData';

export const IndustriesPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'القطاعات الصناعية والتجارية' : 'B2B INDUSTRIES' },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'القطاعات الصناعية والتجارية | مورجانيت لتكنولوجيا الأغذية' : 'B2B Target Industries & Food Solutions | Morganite Jordan'}
        description={isArabic
          ? 'استكشف حلول المكونات والخلطات الغذائية المقدمة لمصانع اللحوم، قطاع التصنيع الغذائي، وقطاع الضيافة والمطاعم (هوريكا) من مورجانيت.'
          : 'Discover how Morganite for Food Technology provides engineered seasonings, functional binders, coatings, and flavors to meat processors, food manufacturers, and HORECA.'}
        canonicalPath="/industries"
      />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
        ])}
        id="industries-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP BANNER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                {isArabic ? 'حلول القطاعات الصناعية' : 'B2B SECTOR MATRIX'}
              </span>
              <VerificationBadge status="VERIFIED" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic
                ? 'القطاعات الصناعية والتجارية المستهدفة'
                : 'B2B Target Commercial Sectors'}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed font-editorial-serif italic text-lg">
              "{isArabic
                ? 'تقدم مورجانيت حلولاً متكاملة لمعالجة تحديات الإنتاج والجودة في ثلاثة قطاعات صناعية رئيسية: مصانع اللحوم والمصنعات، منشآت التصنيع الغذائي العام، وقطاع الضيافة والمطاعم (هوريكا).'
                : 'Morganite delivers integrated dry blends, specialized seasonings, functional ingredients, and coatings across three primary commercial sectors.'}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology formulates specialized dry mixes, spice systems (TAPEL), flavors (FLAVEX), coatings (CRUSTY), and binders (ACTIVE) specifically tailored to Meat Processors, Industrial Food Manufacturers, and HORECA operators in Jordan and export markets."
            summaryAr="تبتكر مورجانيت لتكنولوجيا الأغذية الخلطات الجافة المتخصصة، وأنظمة البهارات (تابل)، والنكهات (فلافيكس)، والتغطية (كروستي)، والروابط الوظيفية (أكتيف) المصممة خصيصاً لمصانع اللحوم، ومنشآت التصنيع الغذائي، وسلاسل المطاعم والضيافة في الأردن وأسواق التصدير."
            entityType="Industry Solutions Fact"
            entityTypeAr="حقيقة حلول القطاعات الصناعية"
          />

          {/* 3 INDUSTRIES DETAILED CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <div
                key={ind.slug}
                className="bg-white border border-black/10 shadow-xs p-7 sm:p-9 flex flex-col justify-between space-y-6 hover:border-black transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="text-sm font-editorial-serif italic text-black/40">SECTOR 0{idx + 1}</span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#8C5835] font-bold">
                      {ind.matchingProductFamilies.length} SYSTEMS
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A]">
                      {isArabic ? ind.nameAr : ind.name}
                    </h2>
                    <p className="text-xs font-editorial-serif italic text-[#8C5835] mt-1 font-semibold">
                      "{isArabic ? ind.heroTaglineAr : ind.heroTaglineEn}"
                    </p>
                  </div>

                  <p className="text-xs text-black/75 leading-relaxed">
                    {isArabic ? ind.overviewAr : ind.overviewEn}
                  </p>

                  {/* Solved Challenges */}
                  <div className="space-y-2 pt-3 border-t border-black/5">
                    <div className="text-[10px] uppercase font-bold text-black/40 tracking-[0.2em]">
                      {isArabic ? 'أبرز التحديات التي تحلها مورجانيت:' : 'Formulation Challenges Solved:'}
                    </div>
                    <ul className="space-y-2 text-xs text-black/80">
                      {(isArabic ? ind.challengesSolvedAr : ind.challengesSolvedEn).slice(0, 3).map((ch, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-[#2D3A31] mt-1.5 flex-shrink-0" />
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <Link
                    to={`/industries/${ind.slug}?lang=${language}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#8C5835] inline-flex items-center gap-1.5"
                  >
                    <span>{isArabic ? 'عرض صفحة القطاع' : 'Inspect Sector Dossier'}</span>
                    <Chevron className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
