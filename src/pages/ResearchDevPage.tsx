import React from 'react';
import { Link } from 'react-router-dom';
import {
  FlaskConical,
  Sparkles,
  Lock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';

export const ResearchDevPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'البحث والتطوير والحلول المخصصة' : 'RESEARCH & DEVELOPMENT' },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'البحث والتطوير والحلول الغذائية المخصصة | مورجانيت' : 'Research & Development & Custom Food Solutions | Morganite'}
        description={isArabic
          ? 'استكشف قدرات البحث والتطوير والتقييم الحسي وتصميم الخلطات المخصصة والسرية لمصانع الأغذية وسلاسل المطاعم من شركة مورجانيت في الأردن.'
          : 'Discover Morganite’s R&D, formulation engineering, sensory analysis, and confidential custom food blend development for industrial food processors and restaurant chains.'}
        canonicalPath="/research-development"
      />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Research & Development', url: '/research-development' },
        ])}
        id="rd-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                APPLIED FOOD SCIENCE // R&D
              </span>
              <VerificationBadge status="VERIFIED" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic
                ? 'البحث والتطوير'
                : 'Research & Development'}
            </h1>

            <p className="text-base sm:text-lg text-[#E8C5A0] font-editorial-serif italic max-w-3xl">
              {isArabic
                ? 'الهندسة الغذائية، التقييم الحسي، وتطوير الخلطات والتركيبات المخصصة لمصانع الأغذية وسلاسل المطاعم.'
                : 'Applied food engineering, sensory evaluation science, and custom dry-mix formulation for food manufacturers.'}
            </p>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed font-editorial-serif italic text-lg">
              "{isArabic
                ? 'يمثل البحث والتطوير (R&D) ركيزة أساسية في نشاط مورجانيت؛ حيث تركز الشركة على تطوير الخلطات الجافة، ومعايرة النكهات، وحل التحديات التقنية لمصانع اللحوم والأغذية عبر المنهجيات العلمية والتقييم الحسي.'
                : 'Research & Development forms a core foundation of Morganite’s continuous operations, focusing on custom formulation, sensory calibration, yield enhancement, and proprietary recipe creation under confidentiality protocols.'}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology provides R&D, custom formulation, texture modification, and confidential proprietary blending for food processors and HORECA clients in Jordan. The company leverages sensory evaluation practices to optimize taste, aroma, and industrial process stability."
            summaryAr="توفر شركة مورجانيت لتكنولوجيا الأغذية خدمات البحث والتطوير، والتركيبات المخصصة، وتعديل القوام، والخلطات الحصرية السرية لمصانع الأغذية وقطاع هوريكا في الأردن، معتمدة على ممارسات التقييم الحسي العلمي لضبط المذاق والرائحة وثبات العمليات الإنتاجية."
            entityType="R&D Capability Fact"
            entityTypeAr="حقيقة قدرات البحث والتطوير"
          />

          {/* R&D PILLARS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-7 border border-black/10 shadow-xs space-y-3">
              <div className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em] border-b border-black/10 pb-2">
                01 // ENGINEERING
              </div>
              <h3 className="font-black text-lg uppercase tracking-tight text-[#1A1A1A]">
                {isArabic ? 'التطوير والتركيب المخصص' : 'Custom Formulation'}
              </h3>
              <p className="text-xs text-black/75 leading-relaxed font-editorial-serif italic text-sm">
                "{isArabic
                  ? 'تصميم خلطات توابل وأنظمة نكهات وبقسماط مخصصة تطابق المواصفات التقنية والمذاق المستهدف للمصنع أو المطعم.'
                  : 'Designing tailored spice blends, flavor systems, and coatings engineered to match precise client sensory and processing targets.'}"
              </p>
            </div>

            <div className="bg-white p-7 border border-black/10 shadow-xs space-y-3">
              <div className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em] border-b border-black/10 pb-2">
                02 // SENSORY
              </div>
              <h3 className="font-black text-lg uppercase tracking-tight text-[#1A1A1A]">
                {isArabic ? 'التقييم الحسي وضبط التذوق' : 'Sensory Profiling'}
              </h3>
              <p className="text-xs text-black/75 leading-relaxed font-editorial-serif italic text-sm">
                "{isArabic
                  ? 'اختبار وتحليل الخصائص الحسية (الرائحة، القوام، الطعم، الملمس الفموي) لضمان تجربة استهلاكية متفوقة وثابتة.'
                  : 'Sensory screening covering aroma, mouthfeel, chewiness, and flavor persistence prior to commercial scaling.'}"
              </p>
            </div>

            <div className="bg-white p-7 border border-black/10 shadow-xs space-y-3">
              <div className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em] border-b border-black/10 pb-2">
                03 // CONFIDENTIALITY
              </div>
              <h3 className="font-black text-lg uppercase tracking-tight text-[#1A1A1A]">
                {isArabic ? 'الخلطات الحصرية والسرية' : 'Proprietary IP'}
              </h3>
              <p className="text-xs text-black/75 leading-relaxed font-editorial-serif italic text-sm">
                "{isArabic
                  ? 'حماية تامة للملكية الفكرية والوصفات السرية الخاصة بكبرى العلامات التجارية وسلاسل المطاعم بموجب اتفاقيات سرية صارمة.'
                  : 'Strict non-disclosure protocols protecting proprietary seasoning formulas developed for private labels and restaurant chains.'}"
              </p>
            </div>
          </div>

          {/* PROCESS WALKTHROUGH */}
          <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-6">
            <div className="border-b border-black/10 pb-3">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                {isArabic ? 'دورة التطوير' : 'R&D Protocol'}
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                {isArabic ? 'منهجية تطوير وتطويع المنتجات الغذائية' : 'R&D Product Development Stages'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                <span className="font-mono text-[#8C5835] font-bold text-xs">01. TECHNICAL SCOPE</span>
                <h4 className="font-bold text-[#1A1A1A] text-sm">{isArabic ? 'تحديد المتطلبات التقنية' : 'Technical Scoping'}</h4>
                <p className="text-black/70 leading-relaxed font-editorial-serif italic">
                  "{isArabic
                    ? 'تحليل نوع اللحم أو الغذاء، وطرق الطهي والحرارة، والمستهدف السعري والحسي.'
                    : 'Analyzing raw protein substrates, processing thermal profile, shelf targets, and flavor direction.'}"
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                <span className="font-mono text-[#8C5835] font-bold text-xs">02. PROTOTYPING</span>
                <h4 className="font-bold text-[#1A1A1A] text-sm">{isArabic ? 'النمذجة المخبرية' : 'Lab Prototyping'}</h4>
                <p className="text-black/70 leading-relaxed font-editorial-serif italic">
                  "{isArabic
                    ? 'ابتكار خلطات تجريبية ومعايرة التوابل والنكهات والروابط الوظيفية في المختبر.'
                    : 'Formulating pilot dry blend batches and testing binding capacity, solubility, and dispersion.'}"
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                <span className="font-mono text-[#8C5835] font-bold text-xs">03. SENSORY AUDIT</span>
                <h4 className="font-bold text-[#1A1A1A] text-sm">{isArabic ? 'التقييم الحسي التجريبي' : 'Sensory & Cook Testing'}</h4>
                <p className="text-black/70 leading-relaxed font-editorial-serif italic">
                  "{isArabic
                    ? 'اختبار العينات بعد الطهي والقلي وتدوين ملاحظات التذوق وثبات القشرة أو العصارة.'
                    : 'Sensory profiling on cooked items checking juiciness, flavor release, and crunch durability.'}"
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] border border-black/10 space-y-2">
                <span className="font-mono text-[#8C5835] font-bold text-xs">04. BATCH STANDARDS</span>
                <h4 className="font-bold text-[#1A1A1A] text-sm">{isArabic ? 'الإنتاج الصناعي المعياري' : 'Scale-Up & Batching'}</h4>
                <p className="text-black/70 leading-relaxed font-editorial-serif italic">
                  "{isArabic
                    ? 'نقل التركيبة للإنتاج الصناعي وتعبئتها بعبوات تناسب سعة خلاطات العميل في المصنع.'
                    : 'Standardizing production recipes into pre-weighed packaging tailored to client batch sizes.'}"
                </p>
              </div>
            </div>
          </section>

          {/* CTA LINK */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to={`/custom-food-solutions?lang=${language}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#8C5835] hover:bg-[#A36840] text-white transition-colors"
            >
              <span>{isArabic ? 'استكشف الحلول والخلطات المخصصة' : 'Explore Custom Food Solutions'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </Link>
            <Link
              to={`/products?lang=${language}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#1A1A1A] hover:bg-black text-white transition-colors"
            >
              <span>{isArabic ? 'دليل المنتجات والمكونات' : 'Browse Product Directory'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
