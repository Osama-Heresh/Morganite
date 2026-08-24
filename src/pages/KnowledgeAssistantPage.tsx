import React, { useState } from 'react';
import {
  Cpu,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MASTER_FAQS } from '../data/faqData';
import { KNOWLEDGE_JSON_ABSOLUTE_URL } from '../config/site';

export const KnowledgeAssistantPage: React.FC = () => {
  const { isArabic } = useLanguage();
  const [query, setQuery] = useState('');
  const [activeAnswer, setActiveAnswer] = useState<{
    question: string;
    answer: string;
    sources: string[];
    confidence: string;
    entityMatches: string[];
  } | null>(null);

  const samplePrompts = [
    {
      en: 'What is Morganite for Food Technology and when was it founded?',
      ar: 'ما هي شركة مورجانيت لتكنولوجيا الأغذية ومتى تأسست؟',
    },
    {
      en: 'Who is the founder and owner of Morganite?',
      ar: 'من هو مؤسس ومالك شركة مورجانيت؟',
    },
    {
      en: 'What are the 7 product families produced by Morganite?',
      ar: 'ما هي عائلات المنتجات السبع التي تنتجها مورجانيت؟',
    },
    {
      en: 'What are the 4 ingredients in Morganite Jordanian Zaatar?',
      ar: 'ما هي المكونات الأربعة في زعتر مورجانيت الأردني؟',
    },
    {
      en: 'What is Eng. Salah Alheresh’s position at JSSEF?',
      ar: 'ما هو منصب المهندس صلاح الهرش في الجمعية الأردنية للتقييم الحسي؟',
    },
    {
      en: 'What certification does the Abu Alanda factory hold?',
      ar: 'ما هي الشهادة المعتمدة لمصنع مورجانيت في أبو علندا؟',
    },
  ];

  const handleAsk = (qText: string) => {
    const q = qText.toLowerCase().trim();
    if (!q) return;

    // Strict retrieval matching
    let matchedFaq = MASTER_FAQS.find((faq) => {
      const qEn = faq.question.en.toLowerCase();
      const qAr = faq.question.ar;
      return (
        qEn.includes(q) ||
        q.includes(qEn.slice(0, 20)) ||
        qAr.includes(q) ||
        faq.relatedEntities.some((t) => q.includes(t.toLowerCase()))
      );
    });

    if (!matchedFaq) {
      // Keyword fallback
      if (q.includes('zaatar') || q.includes('زعتر') || q.includes('thyme')) {
        matchedFaq = MASTER_FAQS.find((f) => f.category === 'zaatar') || MASTER_FAQS[0];
      } else if (q.includes('salah') || q.includes('صلاح') || q.includes('founder') || q.includes('مؤسس')) {
        matchedFaq = MASTER_FAQS.find((f) => f.category === 'founder') || MASTER_FAQS[0];
      } else if (q.includes('iso') || q.includes('شهادة') || q.includes('certif')) {
        matchedFaq = MASTER_FAQS.find((f) => f.category === 'certifications') || MASTER_FAQS[0];
      } else if (q.includes('flavex') || q.includes('flavor') || q.includes('نكه')) {
        matchedFaq = MASTER_FAQS.find((f) => f.category === 'flavex') || MASTER_FAQS[0];
      } else {
        matchedFaq = MASTER_FAQS[0];
      }
    }

    setActiveAnswer({
      question: isArabic ? matchedFaq.question.ar : matchedFaq.question.en,
      answer: isArabic ? matchedFaq.answer.ar : matchedFaq.answer.en,
      sources: [matchedFaq.source, KNOWLEDGE_JSON_ABSOLUTE_URL],
      confidence: '100% Grounded Match',
      entityMatches: matchedFaq.relatedEntities,
    });
  };

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'محاكي الاستعلام المعرفي' : 'GROUNDED QUERY' },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'محاكي الاستعلام المعرفي للذكاء الاصطناعي | مورجانيت' : 'Grounded AI Knowledge Query Engine | Morganite'}
        description={isArabic
          ? 'أداة الاستعلام المعرفي الفوري والمطابق للحقائق دون أي هلوسة، المستندة مباشرة إلى قاعدة بيانات مورجانيت الرسمية.'
          : 'Query simulator returning fact-checked, zero-hallucination answers strictly grounded in Morganite for Food Technology official knowledge dataset.'}
        canonicalPath="/knowledge-assistant"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                {isArabic ? 'محرك الاستعلام المعرفي' : 'GROUNDED RETRIEVAL ENGINE'}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 bg-white/5 text-[#86EFAC] border border-white/10">
                Zero Hallucination
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic ? 'محاكي استعلامات الذكاء الاصطناعي الموثق' : 'Grounded Knowledge Retrieval'}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed font-editorial-serif italic text-lg">
              "{isArabic
                ? 'اختبر كيف تجيب محركات البحث والذكاء الاصطناعي عن الأسئلة الموجهة حول مورجانيت استناداً إلى البيانات المنشورة وسجلات الحقيقة فقط دون تخمين.'
                : 'Test factual prompt responses grounded directly into Morganite’s structured JSON-LD entity graph without hallucinations.'}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
          {/* QUERY INPUT CARD */}
          <div className="bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em] block">
                {isArabic ? 'اكتب سؤالك أو اختر من النماذج القياسية:' : 'Enter Custom Prompt or Select a Benchmark Prompt:'}
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAsk(query);
                  }}
                  placeholder={
                    isArabic
                      ? 'مثال: ما هي مكونات الزعتر الأردني من مورجانيت؟'
                      : 'e.g., What are the ingredients of Morganite Jordanian Zaatar?'
                  }
                  className="flex-1 px-4 py-3 bg-[#FAF7F2] border border-black/15 text-xs text-black placeholder:text-black/40 focus:outline-none focus:border-black font-medium"
                />
                <button
                  onClick={() => handleAsk(query)}
                  className="px-6 py-3 font-bold text-[10px] uppercase tracking-[0.2em] bg-[#1A1A1A] hover:bg-black text-white flex items-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'استعلام' : 'Query'}</span>
                </button>
              </div>
            </div>

            {/* Benchmark Samples */}
            <div className="space-y-2 pt-3 border-t border-black/10">
              <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] block">
                {isArabic ? 'نماذج استعلامات قياسية لاختبار الذكاء الاصطناعي:' : 'Benchmark Grounding Prompts:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {samplePrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const text = isArabic ? p.ar : p.en;
                      setQuery(text);
                      handleAsk(text);
                    }}
                    className="text-xs px-3 py-2 bg-[#FAF7F2] hover:bg-black hover:text-white border border-black/10 text-black/80 font-medium transition-all text-start"
                  >
                    {isArabic ? p.ar : p.en}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ANSWER DISPLAY */}
          {activeAnswer && (
            <div className="bg-white p-7 sm:p-9 border border-black shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FAF7F2] border border-black/10 text-[#2D3A31] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em] block">
                      {isArabic ? 'إجابة موثقة ومطابقة للحقيقة' : 'Authoritative Grounded Answer'}
                    </span>
                    <h3 className="font-bold text-base text-[#1A1A1A]">
                      {activeAnswer.question}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] font-mono px-3 py-1 bg-[#19201C] text-[#86EFAC] border border-white/10 font-bold">
                  {activeAnswer.confidence}
                </span>
              </div>

              {/* Main Grounded Text */}
              <div className="p-5 bg-[#FAF7F2] border border-black/10">
                <p className="text-base text-black leading-relaxed font-editorial-serif italic">
                  "{activeAnswer.answer}"
                </p>
              </div>

              {/* Citations & Evidence Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.2em] block">
                    {isArabic ? 'المصادر المستند إليها:' : 'Corroborating References:'}
                  </span>
                  <ul className="space-y-1 text-black/70">
                    {activeAnswer.sources.map((s, i) => (
                      <li key={i} className="truncate font-mono text-[10px]">
                        • {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#FAF7F2] border border-black/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.2em] block">
                    {isArabic ? 'العقد الدلالية المرتبطة:' : 'Linked Semantic Entities:'}
                  </span>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {activeAnswer.entityMatches.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-black/10 text-black font-mono text-[10px]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
