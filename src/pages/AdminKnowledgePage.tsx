import React, { useState } from 'react';
import {
  Filter,
  Copy,
  Check,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { MASTER_KNOWLEDGE } from '../data/masterKnowledge';
import { MASTER_FAQS } from '../data/faqData';

export const AdminKnowledgePage: React.FC = () => {
  const { isArabic } = useLanguage();
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [copied, setCopied] = useState(false);

  const statuses: Array<{ status: string; label: string }> = [
    { status: 'ALL', label: 'All Entities (160+)' },
    { status: 'VERIFIED', label: 'Verified Sources' },
    { status: 'COMPANY CONFIRMED', label: 'Company Confirmed' },
    { status: 'EXTERNAL VERIFIED', label: 'External Corroborated' },
    { status: 'PENDING VERIFICATION', label: 'Pending Verification' },
  ];

  const filteredFaqs = MASTER_FAQS.filter((f) => {
    if (selectedStatus === 'ALL') return true;
    return f.verificationStatus === selectedStatus;
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(MASTER_KNOWLEDGE, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'مراجعة نموذج البيانات المعرفية' : 'KNOWLEDGE AUDIT' },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'إدارة ومراجعة البيانات المعرفية | مورجانيت' : 'Master Knowledge Model Review & Admin Registry | Morganite'}
        description="Master Knowledge Model review console and verified evidence audit for Morganite for Food Technology."
        canonicalPath="/admin/knowledge"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                    {isArabic ? 'سجل التدقيق والمطابقة' : 'MASTER AUDIT // JSON-LD'}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">v2026.1</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mt-2">
                  {isArabic ? 'مراجعة نموذج البيانات المعرفية والمطابقة' : 'Master Knowledge Audit Console'}
                </h1>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#C99A6B] hover:bg-[#D8AC7F] text-[#141A16] transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-[#141A16]" /> : <Copy className="w-4 h-4 text-[#141A16]" />}
                <span>{copied ? 'Copied Full Model' : 'Export JSON Model'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
          {/* STATS OVERVIEW CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-white p-5 border border-black/10 shadow-xs space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-black/40">{isArabic ? 'إجمالي الأسئلة' : 'TOTAL FAQS'}</div>
              <div className="text-2xl font-black text-[#1A1A1A] font-mono">{MASTER_FAQS.length}</div>
            </div>
            <div className="bg-white p-5 border border-black/10 shadow-xs space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-black/40">{isArabic ? 'عائلات المنتجات' : 'PRODUCT FAMILIES'}</div>
              <div className="text-2xl font-black text-[#8C5835] font-mono">7</div>
            </div>
            <div className="bg-white p-5 border border-black/10 shadow-xs space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-black/40">{isArabic ? 'القطاعات الصناعية' : 'SECTORS'}</div>
              <div className="text-2xl font-black text-[#2D3A31] font-mono">3</div>
            </div>
            <div className="bg-white p-5 border border-black/10 shadow-xs space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-black/40">{isArabic ? 'الأدلة التعليمية' : 'INTENT HUBS'}</div>
              <div className="text-2xl font-black text-black font-mono">8</div>
            </div>
            <div className="bg-white p-5 border border-black/10 shadow-xs space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-black/40">{isArabic ? 'المصادر الموثقة' : 'SOURCES'}</div>
              <div className="text-2xl font-black text-[#2D3A31] font-mono">7</div>
            </div>
            <div className="bg-white p-5 border border-black/10 shadow-xs space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-black/40">{isArabic ? 'الشهادات السارية' : 'ACTIVE CERTS'}</div>
              <div className="text-2xl font-black text-[#8C5835] font-mono">1</div>
            </div>
          </div>

          {/* VERIFICATION FILTER MATRIX */}
          <div className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em]">
                <Filter className="w-3.5 h-3.5" />
                <span>{isArabic ? 'تصفية حسب حالة التوثيق' : 'Filter by Verification Status'}</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-black/50 uppercase tracking-widest">
                {filteredFaqs.length} {isArabic ? 'عنصر' : 'Items'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {statuses.map((s) => (
                <button
                  key={s.status}
                  onClick={() => setSelectedStatus(s.status)}
                  className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold transition-all border ${
                    selectedStatus === s.status
                      ? 'bg-[#19201C] text-white border-black'
                      : 'bg-[#FAF7F2] text-black/80 border-black/10 hover:border-black'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* LIST */}
            <div className="space-y-3 pt-2">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="p-5 border border-black/10 bg-[#FAF7F2] hover:border-black transition-all space-y-2 text-xs"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-black/5 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-black/40 font-bold">{faq.id}</span>
                      <span className="font-bold text-[#1A1A1A] text-sm">
                        {isArabic ? faq.question.ar : faq.question.en}
                      </span>
                    </div>
                    <VerificationBadge status={faq.verificationStatus} size="sm" />
                  </div>

                  <p className="text-black/80 leading-relaxed font-editorial-serif italic text-sm ps-2 border-s border-[#8C5835]">
                    "{isArabic ? faq.answer.ar : faq.answer.en}"
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-black/40 font-mono pt-1">
                    <span>Source: {faq.source}</span>
                    <span className="uppercase text-black/60 font-bold">{faq.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
