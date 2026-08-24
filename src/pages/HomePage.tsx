import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  Sparkles,
  Award,
  Layers,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Cpu,
  Search,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createOrganizationSchema, createWebSiteSchema } from '../components/seo/JsonLd';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { COMPANY_ENTITY, FOUNDER_ENTITY } from '../data/companyEntity';
import { PRODUCT_FAMILIES } from '../data/productFamilies';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { MASTER_FAQS } from '../data/faqData';

export const HomePage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const topFaqs = MASTER_FAQS.slice(0, 6);

  return (
    <>
      <MetaHead
        title={isArabic ? 'مورجانيت لتكنولوجيا الأغذية | المركز المعرفي الرقمي الموثق' : 'Morganite for Food Technology | Official Knowledge Monograph'}
        description={isArabic ? COMPANY_ENTITY.summaryAr : COMPANY_ENTITY.summaryEn}
        canonicalPath="/"
      />
      <JsonLd data={[createOrganizationSchema(), createWebSiteSchema()]} id="org-schema-home" />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A]">
        {/* HERO SECTION - RAW EDITORIAL DENSITY */}
        <section className="border-b border-black/10 pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Top Issue & Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-black/10 mb-10 text-[10px] uppercase tracking-[0.25em] font-bold text-black/50">
            <div className="flex items-center gap-3">
              <span className="text-black font-black">ARCHIVE // 2013–2026</span>
              <span>/</span>
              <span>AMMAN, JORDAN</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2D3A31] inline-block"></span>
              <span className="text-[#2D3A31] font-bold">PRIMARY GROUNDED MONOGRAPH</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (Col 1 to 8): Bold Typographic Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-mono px-2.5 py-1 bg-white border border-black/15 text-black">
                  EST. 2013 // AMMAN
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-mono px-2.5 py-1 bg-[#2D3A31]/10 border border-[#2D3A31]/25 text-[#1E2922]">
                  ISO 14001:2015 REGISTERED
                </span>
                <VerificationBadge status="VERIFIED" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#1A1A1A] leading-[1.05]">
                {isArabic ? (
                  <>
                    <span>مورجانيت لتكنولوجيا الأغذية</span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl font-normal font-arabic-serif text-black/70 mt-3 normal-case">
                      المرجع المعرفي الرقمي الموثق للخلطات والنكهات والحلول الصناعية
                    </span>
                  </>
                ) : (
                  <>
                    <span>MORGANITE</span>
                    <span className="block text-xl sm:text-2xl lg:text-3xl font-light font-editorial-serif italic text-black/70 mt-2 normal-case tracking-normal">
                      Food Technology, Specialized Blends, Flavors & Industrial Systems
                    </span>
                  </>
                )}
              </h1>

              {/* 1px Editorial Rule & Narrative */}
              <div className="flex items-center space-x-6 rtl:space-x-reverse pt-1">
                <div className="h-[1px] w-20 bg-black/40"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">
                  {isArabic ? 'دراسة مرجعية موثقة' : 'Authoritative Dossier'}
                </span>
              </div>

              <p className="text-base sm:text-lg text-black/80 leading-relaxed font-editorial-serif italic max-w-2xl">
                "{isArabic ? COMPANY_ENTITY.summaryAr : COMPANY_ENTITY.summaryEn}"
              </p>

              {/* AI-Readable Structured Fact Extract */}
              <AiReadableSummary
                summaryEn={COMPANY_ENTITY.summaryEn}
                summaryAr={COMPANY_ENTITY.summaryAr}
                entityType="Primary Organization Record"
                entityTypeAr="سجل الكيان الأساسي"
              />

              {/* Editorial CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to={`/products/zaatar?lang=${language}`}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.2em] font-bold bg-[#1A1A1A] text-[#F5F2ED] hover:bg-[#2D3A31] transition-colors border border-black"
                >
                  <span>{isArabic ? 'الزعتر الأردني الأصيل' : 'View Zaatar Monograph'}</span>
                  <Arrow className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/faq?lang=${language}`}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.2em] font-bold bg-white text-black hover:bg-black hover:text-white border border-black/20 transition-all"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'دليل الأسئلة الموثق (160+)' : 'Verified FAQ Hub (160+)'}</span>
                </Link>

                <Link
                  to={`/knowledge-assistant?lang=${language}`}
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs uppercase tracking-[0.2em] font-bold bg-[#8C5835]/15 text-[#6B3E1F] hover:bg-[#8C5835]/25 border border-[#8C5835]/40 transition-colors"
                >
                  <Cpu className="w-3.5 h-3.5 text-[#8C5835]" />
                  <span>{isArabic ? 'محاكي الاستعلام' : 'Query Engine'}</span>
                </Link>
              </div>
            </div>

            {/* Right Column (Col 9 to 12): Editorial Concrete Plate (Dark Moss Box) */}
            <div className="lg:col-span-4 bg-[#2D3A31] text-white p-7 border border-white/10 shadow-lg relative flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/70">
                  {isArabic ? 'بطاقة الكيان // 01' : 'Entity Record // 01'}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/50">
                  ID: org-morganite
                </span>
              </div>

              <div className="bg-[#FAF7F2] p-3 border border-white/20 flex items-center justify-center">
                <img
                  src="/brand/Logo-Black-new.png"
                  alt="Morganite for Food Technology Official Logo"
                  className="h-10 w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">{isArabic ? 'الاسم التجاري والقانوني' : 'Legal & Trade Entity'}:</div>
                  <div className="font-bold text-white text-sm mt-0.5">{COMPANY_ENTITY.legalName}</div>
                  <div className="text-white/70 font-arabic text-xs">{COMPANY_ENTITY.legalNameAr}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">{isArabic ? 'تأسست' : 'Founded'}:</div>
                    <div className="font-bold text-white mt-0.5">{COMPANY_ENTITY.foundingYear}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">{isArabic ? 'المقر' : 'Location'}:</div>
                    <div className="font-bold text-white mt-0.5">Amman, Jordan</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">{isArabic ? 'المؤسس' : 'Founder'}:</div>
                  <div className="font-bold text-[#E8C5A0] flex items-center justify-between mt-0.5">
                    <span>{FOUNDER_ENTITY.name}</span>
                    <Link to={`/founder/salah-alheresh?lang=${language}`} className="text-xs underline text-white/80 hover:text-white">
                      {isArabic ? 'الملف ←' : 'Bio →'}
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">{isArabic ? 'شهادة المطابقة' : 'Accreditation'}:</div>
                  <div className="text-[#86EFAC] font-bold text-xs mt-0.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ISO 14001:2015 (Valid 2028)</span>
                  </div>
                </div>
              </div>

              {/* Curated Narrative Footer on Plate */}
              <div className="pt-4 border-t border-white/15">
                <div className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/40 mb-1">
                  {isArabic ? 'الموثوقية' : 'Corroboration'}
                </div>
                <div className="text-xs font-light font-editorial-serif italic text-white/80 leading-snug">
                  Sensory science, precision food physics, and verified spice architecture.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 PRODUCT FAMILIES SHOWCASE - EDITORIAL CATALOGUE */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-black/10">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-black/10 pb-6 mb-10 gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C5835]">
                {isArabic ? 'العائلات السبع المعتمدة' : 'Portfolio // 07 Verified Systems'}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                {isArabic
                  ? 'عائلات المنتجات الغذائية المتخصصة'
                  : 'Engineered Food Systems & Formulations'}
              </h2>
            </div>
            <div className="text-xs font-editorial-serif italic text-black/60 max-w-md">
              {isArabic
                ? 'سبع عائلات رئيسية مصممة لتلبية المتطلبات الحرارية والحسية لمصانع الأغذية والمطاعم.'
                : 'Engineered across seven distinct technological families for thermal stability, sensory depth, and yield.'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_FAMILIES.map((family, idx) => (
              <div
                key={family.slug}
                className="bg-white p-7 border border-black/10 shadow-xs hover:border-black transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-black/10 pb-3">
                    <span className="text-3xl font-light font-editorial-serif italic text-black/20 group-hover:text-black transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-black/60 bg-[#F5F2ED] px-2 py-0.5 border border-black/10">
                      {family.name}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#8C5835] transition-colors">
                      {isArabic ? family.nameAr : family.name}
                    </h3>
                    <p className="text-xs font-editorial-serif italic text-black/60 mt-1">
                      {isArabic ? family.taglineAr : family.taglineEn}
                    </p>
                  </div>

                  <p className="text-xs text-black/75 leading-relaxed">
                    {isArabic ? family.overviewAr : family.overviewEn}
                  </p>

                  {/* Verified Examples */}
                  <div className="pt-2">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 mb-2">
                      {isArabic ? 'عينات من التشكيلة:' : 'Select Formulations:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {family.productExamples.slice(0, 4).map((ex, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 bg-[#F5F2ED] text-black border border-black/10 font-mono"
                        >
                          {isArabic ? ex.nameAr : ex.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-black/40">
                    {family.productExamples.length} {isArabic ? 'مستحضر موثق' : 'Items'}
                  </span>
                  <Link
                    to={`/products/${family.slug}?lang=${language}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#8C5835] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{isArabic ? 'عرض المواصفات' : 'View Monograph'}</span>
                    <Arrow className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TARGET B2B INDUSTRIES - EDITORIAL CHAPTERS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-black/10">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-black/10 pb-6 mb-10 gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C5835]">
                {isArabic ? 'القطاعات الصناعية والتجارية' : 'Industrial Sectors // B2B'}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                {isArabic ? 'القطاعات التي تخدمها مورجانيت' : 'Target Industries & Processing Plants'}
              </h2>
            </div>
            <Link
              to={`/industries?lang=${language}`}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:opacity-60 flex items-center gap-1"
            >
              <span>{isArabic ? 'استعراض كافة القطاعات' : 'Explore All Sectors'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <div key={ind.slug} className="bg-white p-7 border border-black/10 shadow-xs flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-black/40">
                      SECTOR 0{idx + 1}
                    </span>
                    <Factory className="w-4 h-4 text-[#8C5835]" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A]">
                    {isArabic ? ind.nameAr : ind.name}
                  </h3>
                  <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic text-sm">
                    "{isArabic ? ind.overviewAr : ind.overviewEn}"
                  </p>
                </div>

                <div className="pt-3 border-t border-black/10">
                  <Link
                    to={`/industries/${ind.slug}?lang=${language}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#8C5835] inline-flex items-center gap-1"
                  >
                    <span>{isArabic ? 'دراسة متطلبات القطاع' : 'Sector Technical Guide'}</span>
                    <Arrow className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOUNDER & JSSEF AFFILIATION HIGHLIGHT - MONOGRAPH PLATE */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-black/10">
          <div className="bg-[#1C241F] text-[#F5F2ED] p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[9px] uppercase tracking-[0.3em] font-bold font-mono px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                    {isArabic ? 'المؤسس والقيادة العلمية' : 'Leadership Profile // Biography'}
                  </span>
                  <VerificationBadge status="COMPANY CONFIRMED" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  {isArabic ? FOUNDER_ENTITY.nameAr : FOUNDER_ENTITY.name}
                </h2>
                <div className="text-[#C99A6B] text-xs uppercase tracking-[0.2em] font-bold">
                  {isArabic
                    ? 'مؤسس ومالك شركة مورجانيت لتكنولوجيا الأغذية (عمان، الأردن)'
                    : 'Founder & Owner // Morganite for Food Technology (Amman, Jordan)'}
                </div>

                <p className="text-sm text-white/80 leading-relaxed font-editorial-serif italic text-base">
                  "{isArabic ? FOUNDER_ENTITY.bioAr : FOUNDER_ENTITY.bioEn}"
                </p>

                {/* Professional JSSEF Relationship Fact */}
                <div className="p-5 bg-[#25302A] border border-white/15 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#86EFAC] uppercase tracking-wider text-[11px]">
                    <span>{isArabic ? 'الجمعية الأردنية للتقييم الحسي للأغذية (JSSEF)' : 'Jordanian Society for Sensory Evaluation of Food (JSSEF)'}</span>
                    <span className="text-[9px] bg-white/10 text-white px-2 py-0.5 font-mono">
                      EXTERNAL VERIFIED
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {isArabic
                      ? 'يشغل المهندس صلاح الهرش منصب أمين سر مجلس الإدارة السادس للجمعية الأردنية للتقييم الحسي للأغذية (تم تشكيله في تموز 2025 بموجب نظام رقم 36/2010 تحت مظلة وزارة الزراعة).'
                      : 'Eng. Salah Alheresh serves as Secretary of the Sixth Board of Directors (formed July 2025 under Regulation No. 36/2010, Ministry of Agriculture) of the Jordanian Society for Sensory Evaluation of Food.'}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/founder/salah-alheresh?lang=${language}`}
                    className="inline-flex items-center gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#C99A6B] hover:bg-[#D8AC7F] text-[#141A16] transition-colors"
                  >
                    <span>{isArabic ? 'عرض الملف الدلالي والسيرة' : 'View Full Monograph & Schema'}</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={FOUNDER_ENTITY.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-bold bg-transparent hover:bg-white/5 text-white border border-white/20 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* R&D & ISO Fact Card */}
              <div className="lg:col-span-4 bg-[#141A16] p-6 border border-white/10 space-y-4 text-xs">
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#C99A6B] border-b border-white/10 pb-2">
                  {isArabic ? 'معايير البحث والتطوير' : 'R&D & Compliance'}
                </div>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C99A6B] flex-shrink-0 mt-0.5" />
                    <span>
                      {isArabic
                        ? 'تطوير خلطات مخصصة وسرية وفق المواصفات القياسية'
                        : 'Confidential custom formulation & spice engineering'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Award className="w-3.5 h-3.5 text-[#86EFAC] flex-shrink-0 mt-0.5" />
                    <span>
                      {isArabic
                        ? 'شهادة ISO 14001:2015 لنظام الإدارة البيئية سارية حتى 2028'
                        : 'ISO 14001:2015 Environmental System valid to Jan 2028'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Factory className="w-3.5 h-3.5 text-[#C99A6B] flex-shrink-0 mt-0.5" />
                    <span>
                      {isArabic
                        ? 'خطوط إنتاج وتعبئة الخلطات الجافة في أبو علندا - عمان'
                        : 'Industrial blending & packaging in Abu Alanda, Amman'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <Link
                    to={`/research-development?lang=${language}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#E8C5A0] hover:underline block"
                  >
                    {isArabic ? 'استكشف قدرات البحث والتطوير ←' : 'R&D Capabilities →'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED FAQ PREVIEW SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-black/10">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-black/10 pb-6 mb-8 gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C5835]">
                {isArabic ? 'مركز الأسئلة المعرفية' : 'Knowledge Repository // 160+ Entries'}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                {isArabic
                  ? 'أسئلة موثقة حول مورجانيت ومنتجاتها'
                  : 'Verified Grounded Inquiries'}
              </h2>
            </div>
            <Link
              to={`/faq?lang=${language}`}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:opacity-60 flex items-center gap-1.5"
            >
              <span>{isArabic ? 'عرض كافة الأسئلة (160+)' : 'Browse Full FAQ (160+)'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white p-6 border border-black/10 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3 border-b border-black/5 pb-2">
                  <h3 className="text-sm font-bold text-[#1A1A1A]">
                    {isArabic ? faq.question.ar : faq.question.en}
                  </h3>
                  <VerificationBadge status={faq.verificationStatus} size="sm" />
                </div>
                <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic text-sm">
                  "{isArabic ? faq.answer.ar : faq.answer.en}"
                </p>
                <div className="pt-2 text-[10px] uppercase tracking-wider text-black/40 flex items-center justify-between border-t border-black/5">
                  <span>{isArabic ? `الفئة: ${faq.categoryNameAr}` : `Category: ${faq.categoryNameEn}`}</span>
                  <Link
                    to={`/faq/${faq.category}?lang=${language}`}
                    className="text-[#8C5835] hover:underline font-bold"
                  >
                    {isArabic ? 'المزيد' : 'Inspect'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FACTORY & CONTACT BANNER */}
        <section className="bg-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 border-b border-black/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C5835]">
                {isArabic ? 'منشأة التصنيع والاتصال' : 'Location & Factory Registry'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">
                {isArabic
                  ? 'منشأة مورجانيت لتكنولوجيا الأغذية - عمان، الأردن'
                  : 'Morganite Food Technology Facility // Amman'}
              </h2>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-editorial-serif italic">
                {isArabic
                  ? 'نرحب باستفسارات مصانع اللحوم، شركات التصنيع الغذائي، وقطاع الضيافة والمطاعم لتطوير الخلطات وتوريد المكونات الغذائية المخصصة.'
                  : 'Direct technical inquiries for commercial formulations, sample trials, and ISO-certified batch manufacturing.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-6 text-xs text-black/80 font-bold uppercase tracking-wider text-[11px]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#8C5835]" />
                  <span>{COMPANY_ENTITY.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#8C5835]" />
                  <span>{COMPANY_ENTITY.contact.email}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
              <a
                href={COMPANY_ENTITY.location.googleMapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#1A1A1A] hover:bg-[#2D3A31] text-[#F5F2ED] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E8C5A0]" />
                <span>{isArabic ? 'خرائط جوجل' : 'Google Maps Location'}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <Link
                to={`/official-sources?lang=${language}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold bg-white hover:bg-black hover:text-white text-black border border-black/20 transition-all"
              >
                <span>{isArabic ? 'خريطة المصادر الرسمية' : 'Official Sources'}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
