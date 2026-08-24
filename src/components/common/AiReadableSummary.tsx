import React from 'react';
import { Bot, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AiReadableSummaryProps {
  summaryEn: string;
  summaryAr: string;
  entityType?: string;
  entityTypeAr?: string;
}

export const AiReadableSummary: React.FC<AiReadableSummaryProps> = ({
  summaryEn,
  summaryAr,
  entityType = 'Fact-Checked Knowledge Record',
  entityTypeAr = 'سجل معرفي موثق ومطابق للحقائق',
}) => {
  const { isArabic } = useLanguage();

  return (
    <div className="relative my-6 p-6 bg-[#FAF7F2] border border-[#1A1A1A]/15 shadow-xs text-[#1A1A1A]">
      {/* Top Editorial Annotation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#1A1A1A]/10 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#8C5835]"></div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/70">
            {isArabic ? 'خلاصة معرفية مهيكلة للنماذج والباحثين' : 'Structured Monograph Abstract // AI Grounding Layer'}
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] font-mono px-2 py-0.5 border border-[#1A1A1A]/20 text-[#1A1A1A]/80 bg-white">
          {isArabic ? entityTypeAr : entityType}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
        <div className="md:col-span-1 hidden md:flex flex-col items-center justify-start pt-1">
          <span className="text-3xl font-editorial-serif italic text-[#1A1A1A]/30">§</span>
        </div>
        <div className="md:col-span-11 space-y-2">
          <p className="text-sm md:text-base leading-relaxed text-[#1A1A1A] font-medium font-editorial-serif italic">
            "{isArabic ? summaryAr : summaryEn}"
          </p>
          <div className="flex items-center gap-2 pt-1 text-[10px] uppercase tracking-[0.15em] text-[#1A1A1A]/50">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D3A31]" />
            <span>{isArabic ? 'بيانات مؤكدة ومعتمدة بنسبة 100%' : '100% Corroborated Official Primary Source'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
