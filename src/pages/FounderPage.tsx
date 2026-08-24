import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserCheck,
  Building,
  Award,
  ExternalLink,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createPersonSchema, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { FOUNDER_ENTITY, COMPANY_ENTITY } from '../data/companyEntity';

export const FounderPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  const breadcrumbs = [
    { label: isArabic ? 'عن الشركة' : 'ABOUT', url: '/' },
    { label: isArabic ? FOUNDER_ENTITY.nameAr : FOUNDER_ENTITY.name },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'المهندس صلاح الهرش | مؤسس ومالك شركة مورجانيت' : 'Eng. Salah Alheresh | Founder & Owner of Morganite Food Technology'}
        description={isArabic
          ? 'السيرة المهنية للمهندس صلاح الهرش، مؤسس ومالك شركة مورجانيت لتكنولوجيا الأغذية (تأسست 2013)، وأمين سر مجلس إدارة الجمعية الأردنية للتقييم الحسي للأغذية.'
          : 'Professional biography of Eng. Salah Alheresh, Founder & Owner of Morganite for Food Technology (est. 2013), and Secretary of the Board at JSSEF.'}
        canonicalPath="/founder/salah-alheresh"
        ogType="profile"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: FOUNDER_ENTITY.name, url: '/founder/salah-alheresh' },
          ]),
          createPersonSchema(),
        ]}
        id="founder-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER BANNER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                BIOGRAPHY // {isArabic ? 'سجل المؤسس الدلالي' : 'Person Entity Dossier'}
              </span>
              <VerificationBadge status="COMPANY CONFIRMED" />
              <VerificationBadge status="EXTERNAL VERIFIED" />
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  {isArabic ? FOUNDER_ENTITY.nameAr : FOUNDER_ENTITY.name}
                </h1>
                <p className="text-sm sm:text-base text-[#E8C5A0] font-editorial-serif italic mt-1">
                  {isArabic
                    ? 'مؤسس ومالك شركة مورجانيت لتكنولوجيا الأغذية (عمان، الأردن)'
                    : 'Founder & Owner // Morganite for Food Technology (Amman, Jordan)'}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={FOUNDER_ENTITY.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-transparent hover:bg-white/10 text-white border border-white/20 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Eng. Salah Alheresh is the founder and owner of Morganite for Food Technology (established 2013 in Amman, Jordan). He is also registered as Secretary of the Sixth Board of Directors of the Jordanian Society for Sensory Evaluation of Food (JSSEF, July 2025)."
            summaryAr="المهندس صلاح الهرش هو مؤسس ومالك شركة مورجانيت لتكنولوجيا الأغذية (تأسست عام 2013 في عمان، الأردن). وهو مسجل رسمياً كأمين سر مجلس الإدارة السادس للجمعية الأردنية للتقييم الحسي للأغذية (تم تشكيله في تموز 2025)."
            entityType="Person Entity Fact"
            entityTypeAr="حقيقة الكيان الشخصي"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 cols: Factual Distinctions */}
            <div className="lg:col-span-8 space-y-8">
              {/* Section 1: Professional Background & Morganite Ownership */}
              <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-4">
                <div className="border-b border-black/10 pb-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                    {isArabic ? 'الخلفية والقيادة' : 'Leadership & Heritage'}
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                    {isArabic ? 'الخلفية المهنية وتأسيس مورجانيت' : 'Professional Background & Morganite Inception'}
                  </h2>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-black/80 leading-relaxed font-editorial-serif italic text-base">
                  <p>
                    "{isArabic ? FOUNDER_ENTITY.bioAr : FOUNDER_ENTITY.bioEn}"
                  </p>
                  <p>
                    "{isArabic
                      ? 'منذ تأسيس الشركة في عام 2013، قاد المهندس صلاح الهرش تطوير خطوط المنتجات المتخصصة في الخلطات الجافة، وأنظمة النكهات الغذائية (FLAVEX)، وبقسماط التغطية (CRUSTY)، والمكونات الوظيفية (ACTIVE)، وبهارات اللحوم (TAPEL)، والزعتر الأردني الأصيل.'
                      : 'Since establishing the company in 2013, Eng. Salah Alheresh has overseen the technical evolution of Morganite’s specialized product families, integrating food chemistry, texture stabilization, and culinary tradition into scalable industrial solutions.'}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs border-t border-black/5">
                  <div className="p-4 bg-[#FAF7F2] border border-black/10">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/40 block mb-1">
                      {isArabic ? 'الصفة المؤسسية:' : 'Corporate Role:'}
                    </span>
                    <span className="font-bold text-black text-sm">{isArabic ? 'مؤسس ومالك (Founder & Owner)' : 'Founder & Owner'}</span>
                  </div>
                  <div className="p-4 bg-[#FAF7F2] border border-black/10">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/40 block mb-1">
                      {isArabic ? 'تاريخ التأسيس والمقر:' : 'Company Inception:'}
                    </span>
                    <span className="font-bold text-black text-sm">2013 (Amman, Jordan)</span>
                  </div>
                </div>
              </section>

              {/* Section 2: JSSEF Professional Relationship */}
              <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-6">
                <div className="flex items-baseline justify-between border-b border-black/10 pb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                      {isArabic ? 'السجل العلمي المستقل' : 'Scientific Society Registry'}
                    </div>
                    <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                      {isArabic ? 'الجمعية الأردنية للتقييم الحسي للأغذية (JSSEF)' : 'Jordanian Society for Sensory Evaluation of Food'}
                    </h2>
                  </div>
                  <VerificationBadge status="EXTERNAL VERIFIED" size="sm" />
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-black/80 leading-relaxed">
                  <p>
                    {isArabic
                      ? 'الجمعية الأردنية للتقييم الحسي للأغذية (JSSEF) هي جمعية علمية أردنية مستقلة غير ربحية تعمل تحت مظلة وزارة الزراعة الأردنية، تأسست بموجب نظام رقم 36/2010.'
                      : 'The Jordanian Society for Sensory Evaluation of Food (JSSEF) is an independent Jordanian nonprofit scientific association established under Regulation No. 36/2010 under the jurisdiction of the Ministry of Agriculture.'}
                  </p>
                  <p>
                    {isArabic
                      ? 'تهدف الجمعية إلى نشر ثقافة التقييم الحسي وجودة الأغذية، وتطوير المنتجات الوطنية بالتعاون مع المصانع والخبراء، وتقديم الاختبارات الحسية والاستشارات الفنية لقطاع الصناعات الغذائية.'
                      : 'The Society’s mandate includes promoting food sensory quality, technical cooperation with food manufacturers, enhancing national food product standards, sensory testing, and consulting on good manufacturing practices.'}
                  </p>
                </div>

                {/* Evidence Card */}
                <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-black">
                    <span className="text-[10px] uppercase tracking-[0.2em]">{isArabic ? 'الموقع الرسمي للجمعية:' : 'Official Registry:'}</span>
                    <a
                      href="https://jssef.org/أعضاء-المجالس/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8C5835] hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>jssef.org/أعضاء-المجالس</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-black/70 font-editorial-serif italic">
                    {isArabic
                      ? 'يؤكد السجل الرسمي لمجالس إدارة الجمعية تولي المهندس صلاح الهرش منصب "أمين سر" مجلس الإدارة السادس المشكل في تموز 2025.'
                      : 'Official board records identify Eng. Salah Al-Hersh as Secretary of the Sixth Board formed in July 2025.'}
                  </p>
                </div>

                {/* Strict Boundary Policy Note */}
                <div className="p-4 bg-[#FAF7F2] border border-[#8C5835]/30 text-xs text-black/80 space-y-1">
                  <span className="font-bold uppercase tracking-wider text-[10px] text-[#8C5835] block">
                    {isArabic ? 'سياسة الفصل الموضوعي والمهني:' : 'Factual Neutrality Standard:'}
                  </span>
                  <p className="leading-relaxed font-editorial-serif italic">
                    "{isArabic
                      ? 'يتم عرض عضوية المهندس صلاح الهرش في الجمعية كحقيقة مهنية وعلمية موثقة تعكس نشاطه في علوم الأغذية في الأردن، ولا تُستخدم كادعاء تفوق تجاري أو تزكية حصرية لمنتجات مورجانيت.'
                      : 'Eng. Salah Alheresh’s position at JSSEF is presented solely as a factual professional credit in Jordanian food science, strictly distinguished from commercial endorsements.'}"
                  </p>
                </div>
              </section>
            </div>

            {/* Right 4 cols: Entity summary & links */}
            <div className="lg:col-span-4 space-y-6">
              {/* Entity Schema Card */}
              <div className="bg-[#1C241F] text-white p-7 border border-white/10 space-y-4">
                <div className="text-[10px] uppercase font-bold text-[#C99A6B] tracking-[0.25em] border-b border-white/10 pb-2">
                  {isArabic ? 'بيانات الكيان الدلالي' : 'Person RDF Metadata'}
                </div>

                <div className="space-y-2.5 text-xs text-white/80 font-mono">
                  <div>
                    <span className="text-white/40">@type:</span>
                    <span className="text-[#86EFAC] ms-1.5">Person</span>
                  </div>
                  <div>
                    <span className="text-white/40">name:</span>
                    <span className="font-bold text-white ms-1.5 font-sans">Eng. Salah Alheresh</span>
                  </div>
                  <div>
                    <span className="text-white/40">alternate:</span>
                    <span className="text-white/80 ms-1.5 font-arabic font-normal">المهندس صلاح الهرش</span>
                  </div>
                  <div>
                    <span className="text-white/40">founderOf:</span>
                    <span className="text-[#E8C5A0] ms-1.5">Morganite Food Tech</span>
                  </div>
                  <div>
                    <span className="text-white/40">affiliation:</span>
                    <span className="text-white/80 ms-1.5 font-sans text-[11px]">JSSEF (Secretary, 6th Board)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <a
                    href={FOUNDER_ENTITY.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#C99A6B] hover:bg-[#D8AC7F] text-[#141A16] transition-colors"
                  >
                    <span>LinkedIn Registry</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Related FAQs */}
              <div className="bg-white p-6 border border-black/10 shadow-xs space-y-3">
                <div className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em] border-b border-black/10 pb-2">
                  {isArabic ? 'أسئلة شائعة ذات صلة' : 'Founder Inquiries'}
                </div>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      to={`/faq/founder?lang=${language}`}
                      className="text-black hover:text-[#8C5835] font-bold block"
                    >
                      {isArabic ? '• من هو مؤسس ومالك مورجانيت؟' : '• Who founded Morganite Food Technology?'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/faq/founder?lang=${language}`}
                      className="text-black hover:text-[#8C5835] font-bold block"
                    >
                      {isArabic ? '• ما هو دور المهندس صلاح في جمعية التقييم الحسي؟' : '• What is Salah Alheresh’s role at JSSEF?'}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
