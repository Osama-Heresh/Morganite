import React from 'react';
import {
  Award,
  ShieldCheck,
  Calendar,
  MapPin,
  FileCheck,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { CERTIFICATIONS_LIST } from '../data/companyEntity';

export const CertificationsPage: React.FC = () => {
  const { isArabic } = useLanguage();

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'الشهادات والاعتمادات الرسمية' : 'OFFICIAL CERTIFICATIONS' },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'الشهادات والاعتمادات الرسمية | مورجانيت لتكنولوجيا الأغذية' : 'Official Certifications & ISO Standards | Morganite Food Technology'}
        description={isArabic
          ? 'سجل الشهادات الرسمية السارية لشركة مورجانيت لتكنولوجيا الأغذية، بما في ذلك شهادة ISO 14001:2015 لنظام الإدارة البيئية ومعايير الحلال.'
          : 'Official valid certification registry for Morganite for Food Technology, including ISO 14001:2015 Environmental Management System and Halal food production standards.'}
        canonicalPath="/certifications"
      />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Certifications', url: '/certifications' },
        ])}
        id="certifications-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                {isArabic ? 'الاعتمادات الموثقة' : 'CERTIFIED REGISTRY'}
              </span>
              <VerificationBadge status="VERIFIED" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic
                ? 'الشهادات والاعتمادات والمعايير الصناعية'
                : 'Official Certifications & Environmental Standards'}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed font-editorial-serif italic text-lg">
              "{isArabic
                ? 'تلتزم شركة مورجانيت لتكنولوجيا الأغذية بأعلى معايير السلامة الغذائية والإدارة البيئية في مصنعها بأبو علندا بعمان. يعرض هذا السجل الشهادات السارية والموثقة رسمياً فقط.'
                : 'Morganite for Food Technology adheres to rigorous international food safety and environmental management standards at its Amman facility. This registry presents active, documented certifications.'}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="Morganite for Food Technology holds active ISO 14001:2015 certification for the production and packaging of specialized food products (Food Flavors, Thyme, and Custom Food Blends) in Abu Alanda, Amman, Jordan (valid from January 18, 2025 through January 17, 2028)."
            summaryAr="تحمل شركة مورجانيت لتكنولوجيا الأغذية شهادة سارية لمعيار ISO 14001:2015 لنظام الإدارة البيئية لإنتاج وتعبئة المنتجات الغذائية المتخصصة (النكهات، الزعتر، والخلطات المخصصة) في أبو علندا، عمان، الأردن (سارية من 18 كانون الثاني 2025 حتى 17 كانون الثاني 2028)."
            entityType="Certification Registry Fact"
            entityTypeAr="حقيقة سجل الشهادات والاعتمادات"
          />

          {/* CERTIFICATES CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CERTIFICATIONS_LIST.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border border-black/10 shadow-xs p-7 sm:p-9 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3 border-b border-black/10 pb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#8C5835] uppercase tracking-[0.25em]">
                        {cert.standard}
                      </span>
                      <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                        {isArabic ? cert.nameAr : cert.name}
                      </h2>
                    </div>
                    <VerificationBadge status={cert.verificationStatus} size="sm" />
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-black/80">
                    <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.2em] block">
                        {isArabic ? 'النطاق المسجل المعتمد:' : 'Certified Registered Scope:'}
                      </span>
                      <p className="text-black/80 font-editorial-serif italic text-sm leading-relaxed">
                        "{isArabic ? cert.scopeAr : cert.scopeEn}"
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-[#FAF7F2] border border-black/10">
                        <span className="text-[9px] uppercase tracking-widest text-black/40 block mb-1">
                          {isArabic ? 'تاريخ الإصدار / السريان' : 'Issue Date'}
                        </span>
                        <span className="font-mono font-bold text-black">{cert.issueDate}</span>
                      </div>

                      <div className="p-3 bg-[#FAF7F2] border border-black/10">
                        <span className="text-[9px] uppercase tracking-widest text-black/40 block mb-1">
                          {isArabic ? 'تاريخ الانتهاء' : 'Expiry Date'}
                        </span>
                        <span className="font-mono font-bold text-[#2D3A31]">{cert.expiryDate}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-black/70 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#8C5835] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-black">{isArabic ? 'عنوان المنشأة:' : 'Facility Address:'}</span>{' '}
                        {isArabic ? cert.facilityAddressAr : cert.facilityAddressEn}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs text-black/60 font-mono">
                  <span>{isArabic ? cert.notesAr : cert.notesEn}</span>
                  <a
                    href={cert.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#8C5835] font-bold inline-flex items-center gap-1 uppercase tracking-wider text-[10px]"
                  >
                    <span>{isArabic ? 'المرجع الرسمي' : 'Official Registry'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* STRICT VERIFICATION POLICY */}
          <section className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-3">
            <div className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em]">
              {isArabic ? 'الشفافية' : 'Audit Protocol'}
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A]">
              {isArabic ? 'معايير وسياسة التوثيق والشفافية للشهادات' : 'Strict Audit & Verification Policy'}
            </h3>
            <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-editorial-serif italic text-base">
              "{isArabic
                ? 'تحرص هذه المنصة على عرض الشهادات السارية والموثقة تاريخياً ونطاقياً فقط. يتم إدراج اسم الشهادة، النطاق الدقيق، الجهة المصدرة، تاريخ السريان وتاريخ الانتهاء، ولا يتم عرض أي شهادة منتهية أو ادعاءات غير مدعومة بوثائق رسمية سارية.'
                : 'This Knowledge Center adheres to strict anti-fabrication standards. Every displayed certification includes the verified standard, registered scope, facility address, issue date, and expiry date. Expired or unverified credentials are never displayed as active.'}"
            </p>
          </section>
        </div>
      </main>
    </>
  );
};
