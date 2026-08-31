import React from 'react';
import { Link } from 'react-router-dom';
import {
  Beaker,
  Lock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Factory,
  Layers,
  Scale,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema, createServiceSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { COMPANY_ENTITY } from '../data/companyEntity';

export const CustomFoodSolutionsPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  const developmentSteps = [
    {
      step: '01',
      titleEn: 'Technical Consultation & Briefing',
      titleAr: 'الاستشارة الفنية وتحديد المتطلبات',
      descEn: 'Understanding target taste profile, cost parameters, processing line constraints, and shelf-life expectations under strict mutual NDA.',
      descAr: 'فهم بروفايل النكهة المستهدف، التكلفة المستهدفة، قيود خط الإنتاج، ومتطلبات الصلاحية تحت اتفاقية سرية تامة (NDA).',
    },
    {
      step: '02',
      titleEn: 'Laboratory Formulation & Bench Prototyping',
      titleAr: 'التطوير المخبري وإعداد العينات الأولية',
      descEn: 'Morganite food scientists balance spice fractions, savory aromatics, and functional binders in the Amman application lab.',
      descAr: 'يقوم مهندسو الأغذية في مورجانيت بموازنة نسب التوابل والمواد العطرية والروابط الوظيفية في مختبر التطبيقات في عمان.',
    },
    {
      step: '03',
      titleEn: 'Sensory Evaluation & Profile Matching',
      titleAr: 'التقييم الحسي ومطابقة الخصائص',
      descEn: 'Led by Eng. Salah Alheresh (Sensory Evaluation Specialist), formulations undergo rigorous triangular and descriptive sensory panels.',
      descAr: 'بإشراف المهندس صلاح الهرش (خبير التقييم الحسي للأغذية)، تخضع التركيبات لاختبارات حسية دقيقة للمطابقة والتذوق.',
    },
    {
      step: '04',
      titleEn: 'Pilot Batch & Factory Line Trials',
      titleAr: 'التشغيل التجريبي على خطوط المصنع',
      descEn: 'Small-scale commercial validation in the client facility to verify machine flowability, fry stability, and thermal resilience.',
      descAr: 'تطبيق تجريبي على خط إنتاج العميل للتحقق من انسيابية المسحوق، ثبات القلي، وتحمل درجات الحرارة.',
    },
    {
      step: '05',
      titleEn: 'Industrial Production & Batch-Pack Delivery',
      titleAr: 'الإنتاج الصناعي والتعبئة المعيارية',
      descEn: 'Full-scale manufacturing under ISO 14001:2015 environmental standards, packaged in pre-weighed batch bags to eliminate mixing errors.',
      descAr: 'الإنتاج الصناعي الكامل وفق معايير الجودة والبيئة، وتعبئة أكياس معيارية بأوزان تناسب خلاطات مصنع العميل بدقة.',
    },
  ];

  const capabilityPillars = [
    {
      titleEn: 'Proprietary Seasoning & Marinades',
      titleAr: 'خلطات بهارات وتتبيلات حصرية',
      descEn: 'Developing unique flavor identities for fast-food chains and meat processors that cannot be reverse-engineered by competitors.',
      descAr: 'تطوير نكهات مميزة لسلاسل المطاعم ومصانع اللحوم تمنح العلامة التجارية تميزاً يصعب تقليده.',
      icon: Sparkles,
    },
    {
      titleEn: 'Yield Optimization & Texture Binders',
      titleAr: 'تحسين الإنتاجية وتعديل القوام',
      descEn: 'Formulating functional injection brines and binders that maximize cook yield, reduce patty shrinkage, and maintain slice cohesion.',
      descAr: 'تصميم محاليل حقن وروابط وظيفية ترفع نسبة الإنتاجية بعد الطهي، وتقلل انكماش البرغر، وتحافظ على تماسك الشرائح.',
      icon: Scale,
    },
    {
      titleEn: 'Clean-Label & Cost Re-Engineering',
      titleAr: 'تعديل التكلفة والبدائل النظيفة',
      descEn: 'Re-engineering existing recipe costs while preserving sensory acceptability, or formulating clean-label alternatives.',
      descAr: 'إعادة هندسة تكلفة الوصفات الحالية مع الحفاظ على القبول الحسي، أو استبدال المكونات ببدائل طبيعية.',
      icon: Beaker,
    },
    {
      titleEn: 'Confidentiality & Intellectual Property',
      titleAr: 'السرية التامة وحماية الوصفات',
      descEn: 'Morganite guarantees strict recipe confidentiality, exclusive client exclusivity agreements, and coded batch packaging.',
      descAr: 'تضمن مورجانيت سرية تامة لتركيبات العملاء مع عقود حصرية وتعبئة تشغيلية مشفرة لحماية الملكية الفكرية.',
      icon: Lock,
    },
  ];

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', url: '/' },
    { label: isArabic ? 'الحلول المخصصة' : 'Custom Food Solutions' },
  ];

  return (
    <>
      <MetaHead
        title={
          isArabic
            ? 'الحلول والخلطات الغذائية المخصصة وتطوير المنتجات | شركة مورجانيت'
            : 'Custom Food Solutions & Formulation | Morganite for Food Technology'
        }
        description={
          isArabic
            ? 'خدمة تطوير خلطات التوابل الحصرية، تتبيلات المطاعم السرية، تحسين إنتاجية اللحوم، وتطوير المنتجات الغذائية المخصصة مع ضمان السرية التامة من مورجانيت (عمان، الأردن).'
            : 'Custom food formulation, proprietary spice blending, yield optimization, and confidential recipe development services by Morganite for Food Technology in Amman, Jordan.'
        }
        canonicalPath="/custom-food-solutions"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Custom Food Solutions', url: '/custom-food-solutions' },
          ]),
          createServiceSchema(
            {
              name: 'Custom Food Solutions & Formulation',
              nameAr: 'الحلول والخلطات الغذائية المخصصة وتطوير المنتجات',
              description:
                'Custom food formulation, proprietary spice blending, yield optimization brines, and confidential recipe development.',
              descriptionAr:
                'تطوير خلطات غذائية مخصصة، خلط بهارات حصري، محاليل تحسين إنتاجية، وتطوير وصفات سرية للمصانع والمطاعم.',
              url: '/custom-food-solutions',
            },
            isArabic
          ),
        ]}
        id="custom-solutions-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                PROPRIETARY R&D // CUSTOM FORMULATION
              </span>
              <VerificationBadge status="VERIFIED" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {isArabic ? 'سرية تامة وحماية للملكية الفكرية' : 'Strict Non-Disclosure & IP Protection'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic
                ? 'الحلول والخلطات الغذائية المخصصة وتطوير المنتجات'
                : 'Custom Food Solutions & Formulation'}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic
                ? 'تصميم خلطات توابل حصرية، تطوير تتبيلات سرية، ومطابقة النكهات وتحسين الإنتاجية لمصانع الأغذية وسلاسل المطاعم.'
                : 'Engineering bespoke seasonings, proprietary restaurant flavor profiles, yield optimization binders, and confidential food formulations.'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology offers custom B2B food formulation and dry mix blending services. Capabilities include proprietary spice blend development, yield optimization brines, texture modification, sensory profile matching, and pre-weighed batch-pack delivery under strict confidentiality (NDA) agreements."
            summaryAr="تقدم شركة مورجانيت لتكنولوجيا الأغذية خدمات التطوير المخصص والخلط الجاف لقطاع الأعمال B2B. تشمل القدرات تطوير خلطات بهارات حصرية، محاليل تحسين إنتاجية اللحوم، تعديل القوام، مطابقة البروفايل الحسي، والتعبئة المعيارية بأوزان الخلطات تحت اتفاقيات سرية تامة (NDA)."
            entityType="Custom Food Formulation Services"
            entityTypeAr="خدمات تطوير وتركيب الخلطات الغذائية المخصصة"
          />

          {/* 4 CORE CAPABILITIES */}
          <div className="my-10 space-y-6">
            <div className="border-b border-black/10 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                {isArabic ? 'مجالات التطوير المخصص' : 'Custom Engineering Capabilities'}
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A]">
                {isArabic ? 'ركائز خدمة التطوير المخصص في مورجانيت' : 'Custom Formulation Pillars'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilityPillars.map((cap, idx) => {
                const IconComponent = cap.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-3"
                  >
                    <div className="w-10 h-10 bg-[#FAF7F2] border border-black/10 flex items-center justify-center text-[#8C5835]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A]">
                      {isArabic ? cap.titleAr : cap.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-black/80 font-editorial-serif italic leading-relaxed">
                      "{isArabic ? cap.descAr : cap.descEn}"
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5-STEP DEVELOPMENT PIPELINE */}
          <div className="my-12 bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-8">
            <div className="border-b border-black/10 pb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                {isArabic ? 'منهجية التطوير الصناعي' : 'Formulation Lifecycle'}
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                {isArabic ? 'مراحل تطوير الخلطة المخصصة (من الفكرة إلى خط الإنتاج)' : 'The 5-Stage Custom Formulation Process'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {developmentSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 bg-[#FAF7F2] border border-black/10 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="text-xl font-mono font-black text-[#8C5835]">
                      {step.step}
                    </span>
                    <h3 className="font-bold text-sm text-[#1A1A1A]">
                      {isArabic ? step.titleAr : step.titleEn}
                    </h3>
                    <p className="text-xs text-black/75 font-editorial-serif italic leading-relaxed">
                      "{isArabic ? step.descAr : step.descEn}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONFIDENTIALITY & DIRECT INQUIRY CTA */}
          <div className="bg-[#1C241F] text-white p-8 border border-white/10 my-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#C99A6B]" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#E8C5A0]">
                  {isArabic ? 'اتفاقية سرية وحماية الوصفات' : 'Confidential NDA Protocol'}
                </span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                {isArabic
                  ? 'ابدأ تطوير وصفتك الحصرية مع مهندسي مورجانيت'
                  : 'Initiate Your Proprietary Formulation Project'}
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-editorial-serif italic">
                {isArabic
                  ? 'تواصل مع الإدارة الفنية لمناقشة متطلبات منتجك وتوقيع اتفاقية الحفاظ على السرية والبدء بتجهيز العينات المخبرية.'
                  : 'Contact Morganite technical management to execute a bilateral Non-Disclosure Agreement and schedule initial benchtop prototyping.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href={`mailto:${COMPANY_ENTITY.contact.email}?subject=Custom%20Formulation%20Inquiry`}
                className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider bg-[#8C5835] hover:bg-[#A36840] text-white text-center transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{isArabic ? 'مراسلة الإدارة الفنية' : 'Email Technical Team'}</span>
              </a>
              <a
                href={`tel:${COMPANY_ENTITY.contact.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_ENTITY.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
