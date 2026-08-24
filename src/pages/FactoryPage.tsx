import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const FactoryPage: React.FC = () => {
  const { language, isArabic } = useLanguage();

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'المنشأة الصناعية والتصنيع' : 'MANUFACTURING FACILITY' },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'منشأة ومصنع مورجانيت | أبو علندا، عمان، الأردن' : 'Morganite Factory & Manufacturing Facility | Abu Alanda, Amman'}
        description={isArabic
          ? 'تعرف على المنشأة الإنتاجية لشركة مورجانيت لتكنولوجيا الأغذية في المنطقة الصناعية بأبو علندا بعمان، والمخصصة لإنتاج الخلطات الجافة والنكهات وفق معايير ISO 14001:2015.'
          : 'Explore Morganite for Food Technology’s manufacturing facility in Abu Alanda Industrial Area, Amman, Jordan. Specializing in dry food mixes, flavors, seasonings, and ISO 14001:2015 environmental standards.'}
        canonicalPath="/factory"
      />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Factory', url: '/factory' },
        ])}
        id="factory-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                {isArabic ? 'المنشأة الصناعية' : 'INDUSTRIAL INFRASTRUCTURE'}
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#86EFAC] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                ISO 14001:2015
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic
                ? 'منشأة ومصنع مورجانيت لتكنولوجيا الأغذية'
                : 'Manufacturing Facility & Operations'}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed font-editorial-serif italic text-lg">
              "{isArabic
                ? 'تقع المنشأة الإنتاجية المركزية لشركة مورجانيت في المنطقة الصناعية بأبو علندا على شارع عبد الرزاق الرابح في العاصمة الأردنية عمان، حيث تُجرى عمليات خلط وطحن وتعبئة الخلطات الجافة والنكهات والزعتر وحلول التصنيع الغذائي.'
                : 'Located in the Abu Alanda Industrial Area on Abdul Razzaq Al Rabih Street in Amman, Jordan, Morganite’s facility houses dry food mixing, milling, flavor preparation, quality control, and specialized packaging operations.'}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology operates an industrial dry food manufacturing facility in Abu Alanda Industrial Area, Amman, Jordan (established 2013). The plant holds ISO 14001:2015 certification for the production and packaging of specialized food products (food flavors, thyme, and custom blends)."
            summaryAr="تدير شركة مورجانيت لتكنولوجيا الأغذية منشأة تصنيع غذائي جاف في المنطقة الصناعية بأبو علندا بعمان، الأردن (تأسست عام 2013). المنشأة حاصلة على شهادة ISO 14001:2015 لإنتاج وتعبئة المنتجات الغذائية المتخصصة (النكهات، الزعتر، والخلطات المخصصة)."
            entityType="Facility & Manufacturing Fact"
            entityTypeAr="حقيقة المنشأة والتصنيع"
          />

          {/* VERIFIED MANUFACTURING CAPABILITIES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'القدرات الإنتاجية' : 'Processing Lines'}
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'العمليات التصنيعية والإنتاجية الموثقة' : 'Verified Production Operations'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                    <div className="font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2D3A31]" />
                      <span>{isArabic ? 'خلط ومزج المكونات الجافة' : 'Dry Food Blending & Mixing'}</span>
                    </div>
                    <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic">
                      "{isArabic
                        ? 'مزج دقيق ومتجانس لمساحيق التوابل، الأعشاب، والأملاح، والمكونات الوظيفية لضمان تطابق النسب في كل دفعة.'
                        : 'Precision homogenous blending of spice powders, herbs, salts, and functional compounds ensuring zero batch-to-batch variation.'}"
                    </p>
                  </div>

                  <div className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                    <div className="font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2D3A31]" />
                      <span>{isArabic ? 'إنتاج وتعبئة النكهات الغذائية' : 'Food Flavor Formulations'}</span>
                    </div>
                    <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic">
                      "{isArabic
                        ? 'تجهيز نكهات غذائية متخصصة (لحم بقري، دجاج، حبش، مدخن، مشوي) مقاومة لحرارة الطهي الصناعي.'
                        : 'Preparation of thermal-stable food flavors (Beef, Chicken, Turkey, Smoke, Grill) for savory processing.'}"
                    </p>
                  </div>

                  <div className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                    <div className="font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2D3A31]" />
                      <span>{isArabic ? 'معالجة وتعبئة الزعتر والدقة' : 'Thyme & Duqqa Processing'}</span>
                    </div>
                    <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic">
                      "{isArabic
                        ? 'فرز وتنقية وخلط أوراق الزعتر البري، السمسم المحمص، السماق البلدي والملح، مع خطوط تعبئة بزيت الزيتون.'
                        : 'Sorting, cleaning, and blending wild thyme, toasted sesame, sumac, and salt, with dedicated olive oil packaging.'}"
                    </p>
                  </div>

                  <div className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                    <div className="font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2D3A31]" />
                      <span>{isArabic ? 'بيئة المنتجات الخالية من الغلوتين' : 'Dedicated Gluten-Free Lines'}</span>
                    </div>
                    <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic">
                      "{isArabic
                        ? 'معالجة مخصصة لطحين الأرز والذرة وتوابل وبقسماط خالية من القمح لمنع التلوث التبادلي.'
                        : 'Segregated processing for rice/corn flours and wheat-free breadings to control allergen cross-contact.'}"
                    </p>
                  </div>
                </div>
              </section>

              {/* FACTORY LOCATION DETAILS */}
              <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-4">
                <div className="border-b border-black/10 pb-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'الموقع اللوجستي' : 'Geographic Anchor'}
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'الموقع الجغرافي والبيانات الموثقة' : 'Facility Location & Logistics'}
                  </h2>
                </div>

                <div className="p-5 bg-[#FAF7F2] border border-black/10 text-xs sm:text-sm space-y-2 text-black/80">
                  <div>
                    <span className="font-bold text-black">{isArabic ? 'العنوان الصناعي:' : 'Industrial Address:'}</span>{' '}
                    {COMPANY_ENTITY.location.streetAddress}, {COMPANY_ENTITY.location.industrialArea}, Amman, Jordan
                  </div>
                  <div>
                    <span className="font-bold text-black">{isArabic ? 'المنطقة:' : 'Region:'}</span>{' '}
                    Abu Alanda Industrial Cluster (Amman, Jordan)
                  </div>
                  <div className="pt-2">
                    <a
                      href={COMPANY_ENTITY.location.googleMapsUri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8C5835] hover:underline inline-flex items-center gap-1 font-bold text-xs uppercase tracking-wider"
                    >
                      <span>Google Maps Listing</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Col: ISO Certificate & Policy */}
            <div className="lg:col-span-4 space-y-6">
              {/* ISO Environmental Badge Card */}
              <div className="bg-[#1C241F] text-white p-7 border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C99A6B]">
                    {isArabic ? 'نظام الإدارة البيئية' : 'Environmental Standard'}
                  </span>
                  <VerificationBadge status="VERIFIED" size="sm" />
                </div>

                <h3 className="text-xl font-black uppercase text-white">
                  ISO 14001:2015
                </h3>

                <div className="text-xs text-white/80 space-y-2.5">
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">{isArabic ? 'النطاق المسجل:' : 'Registered Scope:'}</span>
                    <p className="font-editorial-serif italic text-sm text-white/90 mt-0.5">
                      "Production & Packaging of Specialized Food Products (Food Flavors, Thyme, and Custom Food Blends)"
                    </p>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">{isArabic ? 'العنوان على الشهادة:' : 'Registered Address:'}</span>
                    <p className="font-mono text-xs text-white/80">Jordan – Amman – Industrial Area – Abu Alanda</p>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">{isArabic ? 'صلاحية الشهادة:' : 'Validity Period:'}</span>
                    <p className="text-[#86EFAC] font-mono font-bold">18-01-2025 → 17-01-2028</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <Link
                    to={`/certifications?lang=${language}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C99A6B] hover:underline block"
                  >
                    {isArabic ? 'عرض صفحة الشهادات والاعتمادات ←' : 'View Full Registry →'}
                  </Link>
                </div>
              </div>

              {/* Verified Information Notice */}
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-2">
                <div className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em]">
                  {isArabic ? 'سياسة توثيق البيانات' : 'Neutrality Standard'}
                </div>
                <p className="text-xs text-black/70 leading-relaxed font-editorial-serif italic">
                  "{isArabic
                    ? 'تعرض هذه المنصة المعلومات التصنيعية المؤكدة عبر الوثائق الرسمية والتراخيص وسجلات شهادة الآيزو فقط، دون إضافة أرقام غير منشورة حول سعة الآلات أو المساحات غير الموثقة.'
                    : 'This Knowledge Center presents only factory details verifiable through official documentation and ISO registries, omitting speculative claims.'}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
