import React from 'react';
import {
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { OFFICIAL_SOURCES } from '../data/officialSources';

export const OfficialSourcesPage: React.FC = () => {
  const { isArabic } = useLanguage();

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'خريطة المصادر الرسمية' : 'OFFICIAL SOURCES' },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'خريطة المصادر الرسمية والمراجع | مورجانيت' : 'Official Sources Map & Entity Verification | Morganite'}
        description={isArabic
          ? 'دليل المصادر والمراجع الرسمية الموثقة لشركة مورجانيت لتكنولوجيا الأغذية والمؤسس والجمعية الأردنية للتقييم الحسي للأغذية.'
          : 'Authoritative source map and independent corroborating registries for Morganite for Food Technology, Eng. Salah Alheresh, and JSSEF.'}
        canonicalPath="/official-sources"
      />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Official Sources', url: '/official-sources' },
        ])}
        id="sources-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                CORROBORATING DIRECTORY
              </span>
              <VerificationBadge status="VERIFIED" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic
                ? 'خريطة المصادر الرسمية وسجل التحقق والمطابقة'
                : 'Official Sources Map & Corroboration'}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed font-editorial-serif italic text-lg">
              "{isArabic
                ? 'تستند جميع البيانات المنشورة في هذا المركز المعرفي إلى مصادر رسمية وموثقة وفق هرمية إثبات دقيقة تشمل الموقع الرسمي للشركة، القنوات المهنية، وسجلات الجمعيات الرسمية والمطابقة البيئية.'
                : 'All facts published in this Knowledge Center are strictly derived from verified corporate channels, government and scientific associations, and official auditing bodies.'}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="The Morganite Knowledge Center indexes authoritative Level 1 through Level 4 sources, including the official corporate website (morganitegroup.com), LinkedIn corporate and founder profiles, Google Maps geolocation in Abu Alanda Amman, the Jordanian Society for Sensory Evaluation of Food (jssef.org), and ISO 14001:2015 registries."
            summaryAr="يوثق مركز مورجانيت المعرفي مصادر المستويات من 1 إلى 4، بما في ذلك الموقع الرسمي للشركة (morganitegroup.com)، وصفحات لينكد إن للشركة والمؤسس، وموقع خرائط جوجل في أبو علندا بعمان، والجمعية الأردنية للتقييم الحسي للأغذية (jssef.org)، وسجلات شهادة ISO 14001:2015."
            entityType="Source Registry Fact"
            entityTypeAr="حقيقة سجل المصادر"
          />

          {/* 5-LEVEL HIERARCHY NOTICE */}
          <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-4">
            <div className="border-b border-black/10 pb-3">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                {isArabic ? 'هرمية الإثبات' : 'Evidence Framework'}
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                {isArabic ? 'هرمية مصادر الحقيقة والتوثيق (Source-of-Truth Hierarchy)' : 'Source-of-Truth Hierarchy Standard'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-1">
                <span className="font-bold text-[#1A1A1A] block uppercase font-mono text-[10px] tracking-wider">LEVEL 01 // OFFICIAL</span>
                <p className="text-black/70 font-editorial-serif italic">{isArabic ? 'موقع مورجانيت الرسمي المباشر' : 'Morganite official domain'}</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-1">
                <span className="font-bold text-[#1A1A1A] block uppercase font-mono text-[10px] tracking-wider">LEVEL 02 // CHANNELS</span>
                <p className="text-black/70 font-editorial-serif italic">{isArabic ? 'لينكد إن وفيسبوك وخرائط جوجل' : 'LinkedIn, Maps & Profiles'}</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-1">
                <span className="font-bold text-[#1A1A1A] block uppercase font-mono text-[10px] tracking-wider">LEVEL 03 // SCIENTIFIC</span>
                <p className="text-black/70 font-editorial-serif italic">{isArabic ? 'الجمعية الأردنية للتقييم الحسي' : 'JSSEF & Agriculture Ministry'}</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-1">
                <span className="font-bold text-[#1A1A1A] block uppercase font-mono text-[10px] tracking-wider">LEVEL 04 // EXPOS</span>
                <p className="text-black/70 font-editorial-serif italic">{isArabic ? 'معرض هوريكا الأردن المسجل' : 'HORECA Jordan Trade Expo'}</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-1">
                <span className="font-bold text-[#1A1A1A] block uppercase font-mono text-[10px] tracking-wider">LEVEL 05 // PUBLIC</span>
                <p className="text-black/70 font-editorial-serif italic">{isArabic ? 'الدلائل المهنية المحققة' : 'Audited trade directories'}</p>
              </div>
            </div>
          </section>

          {/* SOURCES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICIAL_SOURCES.map((source) => (
              <div
                key={source.id}
                className="bg-white border border-black/10 shadow-xs p-7 flex flex-col justify-between space-y-4 hover:border-black transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2 border-b border-black/5 pb-2">
                    <span className="text-[10px] font-mono font-bold text-black/50 uppercase tracking-widest">
                      {source.sourceType}
                    </span>
                    <VerificationBadge status={source.verificationStatus} size="sm" />
                  </div>

                  <h3 className="font-black text-base uppercase tracking-tight text-[#1A1A1A]">
                    {isArabic ? source.nameAr : source.name}
                  </h3>

                  <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic text-sm">
                    "{isArabic ? source.descriptionAr : source.description}"
                  </p>

                  <div className="p-3 bg-[#FAF7F2] border border-black/10 text-[11px] space-y-1">
                    <span className="font-bold text-[#8C5835] block text-[9px] uppercase tracking-wider">
                      {isArabic ? 'العلاقة بكيان مورجانيت:' : 'Entity Relationship:'}
                    </span>
                    <span className="text-black/80 font-medium">
                      {isArabic ? source.relationshipToMorganiteAr : source.relationshipToMorganite}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-black/40 text-[10px]">
                    Verified: {source.lastVerified}
                  </span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-black hover:text-[#8C5835] text-[10px] uppercase tracking-wider"
                  >
                    <span>{isArabic ? 'المصدر' : 'Inspect Source'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* OFFICIAL BRAND ASSET DOSSIER */}
          <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between border-b border-black/10 pb-4 gap-2">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                  {isArabic ? 'سجل الهوية البصرية الرسمية' : 'Brand Identity Asset Record'}
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                  {isArabic ? 'الشعار الرسمي المعتمد (غير قابل للتعديل)' : 'Official Immutable Brand Asset'}
                </h2>
              </div>
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.2em] px-2.5 py-1 bg-[#2D3A31] text-white">
                STATUS: OFFICIAL / IMMUTABLE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 bg-[#FAF7F2] p-6 border border-black/15 flex flex-col items-center justify-center space-y-3 text-center">
                <img
                  src="/brand/Logo-Black-new.png"
                  alt="Morganite Official Logo"
                  className="max-h-20 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="text-[10px] uppercase font-mono text-black/50 tracking-wider">
                  /brand/Logo-Black-new.png
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#FAF7F2] border border-black/10">
                    <span className="text-[9px] uppercase tracking-wider text-black/50 block font-mono">
                      Asset Name
                    </span>
                    <span className="font-bold text-black text-sm">Morganite Official Logo</span>
                  </div>
                  <div className="p-3 bg-[#FAF7F2] border border-black/10">
                    <span className="text-[9px] uppercase tracking-wider text-black/50 block font-mono">
                      Origin / Source
                    </span>
                    <span className="font-bold text-black text-sm">Official Morganite website</span>
                  </div>
                  <div className="p-3 bg-[#FAF7F2] border border-black/10">
                    <span className="text-[9px] uppercase tracking-wider text-black/50 block font-mono">
                      Native Resolution
                    </span>
                    <span className="font-mono font-bold text-black">5868 x 2067 px (2.84:1)</span>
                  </div>
                  <div className="p-3 bg-[#FAF7F2] border border-black/10">
                    <span className="text-[9px] uppercase tracking-wider text-black/50 block font-mono">
                      Asset Immutability
                    </span>
                    <span className="font-bold text-[#2D3A31]">Strictly Preserved (Bit-for-Bit)</span>
                  </div>
                </div>

                <div className="p-3 bg-[#19201C] text-[#E0DCD3] border border-white/10 font-mono text-[11px] space-y-1">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#C99A6B]">
                    SHA-256 Checksum Verification
                  </div>
                  <div className="break-all text-white/90">
                    d43a941eb01033108d8a59a0a9564666762774a89612c73f23839a7c6cb321a8
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
