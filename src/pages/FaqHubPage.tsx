import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createFaqSchema, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { VerificationBadge } from '../components/common/VerificationBadge';
import { MASTER_FAQS, FAQ_CATEGORIES } from '../data/faqData';

export const FaqHubPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const { isArabic } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categorySlug || 'all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [copiedFaqId, setCopiedFaqId] = useState<string | null>(null);
  const [expandedFaqIds, setExpandedFaqIds] = useState<Set<string>>(
    () => new Set(MASTER_FAQS.slice(0, 10).map((f) => f.id))
  );

  // Sync category if URL param changes
  React.useEffect(() => {
    if (categorySlug) {
      setSelectedCategory(categorySlug);
    }
  }, [categorySlug]);

  const toggleExpand = (id: string) => {
    const next = new Set(expandedFaqIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpandedFaqIds(next);
  };

  const copyCitation = (faqId: string) => {
    const url = `${window.location.origin}/faq?q=${faqId}#${faqId}`;
    navigator.clipboard.writeText(url);
    setCopiedFaqId(faqId);
    setTimeout(() => setCopiedFaqId(null), 2000);
  };

  const filteredFaqs = useMemo(() => {
    return MASTER_FAQS.filter((faq) => {
      // Exclude internal pending/unapproved records from public listing
      if (faq.verificationStatus === 'PENDING VERIFICATION' || faq.verificationStatus === 'DO NOT PUBLISH') {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && faq.category !== selectedCategory) {
        return false;
      }
      // Type filter
      if (selectedType !== 'all' && faq.questionType !== selectedType) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchEn =
          faq.question.en.toLowerCase().includes(q) ||
          faq.answer.en.toLowerCase().includes(q) ||
          faq.relatedEntities.some((t) => t.toLowerCase().includes(q));
        const matchAr =
          faq.question.ar.includes(q) ||
          faq.answer.ar.includes(q) ||
          faq.relatedEntities.some((t) => t.includes(q));
        return matchEn || matchAr;
      }
      return true;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'دليل الأسئلة الشامل (160+)' : 'MASTER FAQ HUB' },
  ];

  const faqSchemaData = filteredFaqs.slice(0, 30).map((f) => ({
    question: isArabic ? f.question.ar : f.question.en,
    answer: isArabic ? f.answer.ar : f.answer.en,
  }));

  return (
    <>
      <MetaHead
        title={isArabic ? 'دليل الأسئلة والأجوبة الموثقة (160+ سؤال) | مورجانيت' : 'Master Verified FAQ Hub (160+ Q&As) | Morganite Food Technology'}
        description={isArabic
          ? 'قاعدة المعرفة التوثيقية الشاملة لشركة مورجانيت لتكنولوجيا الأغذية (عمان، الأردن)، والمؤسس، والمنتجات السبعة، والقطاعات الصناعية، وشهادات الجودة.'
          : 'Comprehensive verified FAQ database for Morganite for Food Technology (Amman, Jordan), founder Eng. Salah Alheresh, 7 product families, and ISO 14001:2015 certifications.'}
        canonicalPath="/faq"
      />
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'FAQ Hub', url: '/faq' },
          ]),
          createFaqSchema(faqSchemaData),
        ]}
        id="master-faq-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP BANNER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                MASTER REPOSITORY // {MASTER_FAQS.length} ENTRIES
              </span>
              <VerificationBadge status="VERIFIED" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isArabic
                ? 'مركز الأسئلة والأجوبة الموثقة (Master FAQ)'
                : 'Master Knowledge FAQ Center'}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed font-editorial-serif italic text-lg">
              "{isArabic
                ? 'دليل معرفي متكامل مصمم للإجابة الصريحة والدقيقة والمطابقة للحقائق حول شركة مورجانيت، منتجاتها، قطاعاتها، والشهادات والحدود التوثيقية.'
                : 'A complete, machine-readable repository of authoritative answers covering company identity, 7 product families, industrial sectors, and boundary-checked verifications.'}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
          {/* AI SUMMARY */}
          <AiReadableSummary
            summaryEn="This Master FAQ Hub compiles 160+ structured, verified questions and answers covering Morganite for Food Technology (Amman, 2013), founder Eng. Salah Alheresh (JSSEF Board Secretary), 7 product families (FLAVEX, CRUSTY, ACTIVE, TAPEL, SALSA, ZAATAR, GLUTEN FREE), target industries, and ISO 14001:2015 standards."
            summaryAr="يجمع مركز الأسئلة الشامل أكثر من 160 سؤالاً وجواباً موثقاً يغطي شركة مورجانيت لتكنولوجيا الأغذية (عمان، 2013)، والمؤسس المهندس صلاح الهرش (أمين سر مجلس إدارة JSSEF)، وعائلات المنتجات السبع، والقطاعات الصناعية، وشهادات ISO 14001:2015."
            entityType="Master FAQ Repository Fact"
            entityTypeAr="حقيقة مجمع الأسئلة الشامل"
          />

          {/* SEARCH & FILTERS CONTROLS */}
          <div className="bg-white p-6 sm:p-8 border border-black/10 shadow-xs space-y-5">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-black/40 absolute start-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isArabic
                    ? 'ابحث في الأسئلة أو الإجابات أو الكلمات المفتاحية (مثل: زعتر، فلافيكس، صلاح الهرش، آيزو)...'
                    : 'Search questions, answers, ingredients or keywords (e.g., Zaatar, Flavex, Salah, ISO)...'
                }
                className="w-full ps-11 pe-4 py-3 bg-[#FAF7F2] border border-black/15 text-xs text-black placeholder:text-black/40 focus:outline-none focus:border-black font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute end-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider font-bold text-black/50 hover:text-black"
                >
                  {isArabic ? 'مسح' : 'Clear'}
                </button>
              )}
            </div>

            {/* Question Type Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/10">
              <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] me-2">
                {isArabic ? 'نوع السؤال:' : 'Type:'}
              </span>
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-bold transition-all border ${
                  selectedType === 'all'
                    ? 'bg-[#1A1A1A] text-white border-black'
                    : 'bg-[#FAF7F2] text-black/70 border-black/10 hover:border-black'
                }`}
              >
                {isArabic ? 'الكل' : 'All Types'}
              </button>
              <button
                onClick={() => setSelectedType('TYPE_A_DIRECT_ENTITY')}
                className={`px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-bold transition-all border ${
                  selectedType === 'TYPE_A_DIRECT_ENTITY'
                    ? 'bg-[#8C5835] text-white border-[#8C5835]'
                    : 'bg-[#FAF7F2] text-black/70 border-black/10 hover:border-black'
                }`}
              >
                {isArabic ? 'Type A: الهوية والمؤسس' : 'Type A: Identity & Leadership'}
              </button>
              <button
                onClick={() => setSelectedType('TYPE_B_PRODUCT_APPLICATION')}
                className={`px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-bold transition-all border ${
                  selectedType === 'TYPE_B_PRODUCT_APPLICATION'
                    ? 'bg-[#2D3A31] text-white border-[#2D3A31]'
                    : 'bg-[#FAF7F2] text-black/70 border-black/10 hover:border-black'
                }`}
              >
                {isArabic ? 'Type B: المنتجات والتصنيع' : 'Type B: Formulations & Tech'}
              </button>
              <button
                onClick={() => setSelectedType('TYPE_C_PROBLEM_SOLVING_B2B')}
                className={`px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-bold transition-all border ${
                  selectedType === 'TYPE_C_PROBLEM_SOLVING_B2B'
                    ? 'bg-[#1F2722] text-white border-black'
                    : 'bg-[#FAF7F2] text-black/70 border-black/10 hover:border-black'
                }`}
              >
                {isArabic ? 'Type C: التوثيق وحلول القطاعات' : 'Type C: Sector Solutions'}
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] me-2">
                {isArabic ? 'الفئة:' : 'Topic:'}
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-mono font-medium transition-all border ${
                  selectedCategory === 'all'
                    ? 'bg-[#1A1A1A] text-white border-black'
                    : 'bg-[#FAF7F2] text-black/80 border-black/10 hover:border-black'
                }`}
              >
                {isArabic ? 'كافة الفئات' : 'All'} ({MASTER_FAQS.length})
              </button>
              {FAQ_CATEGORIES.map((cat) => {
                const count = MASTER_FAQS.filter((f) => f.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-mono font-medium transition-all border ${
                      selectedCategory === cat.id
                        ? 'bg-[#8C5835] text-white border-[#8C5835]'
                        : 'bg-[#FAF7F2] text-black/80 border-black/10 hover:border-black'
                    }`}
                  >
                    <span>{isArabic ? cat.nameAr : cat.nameEn}</span>
                    <span className="ms-1 opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RESULTS COUNT & STATUS */}
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-black/50 px-1 border-b border-black/10 pb-2">
            <span>
              {isArabic
                ? `عرض ${filteredFaqs.length} من أصل ${MASTER_FAQS.length} سؤالاً موثقاً`
                : `Showing ${filteredFaqs.length} of ${MASTER_FAQS.length} verified records`}
            </span>
            <button
              onClick={() => {
                if (expandedFaqIds.size === filteredFaqs.length) {
                  setExpandedFaqIds(new Set());
                } else {
                  setExpandedFaqIds(new Set(filteredFaqs.map((f) => f.id)));
                }
              }}
              className="text-black hover:underline"
            >
              {expandedFaqIds.size === filteredFaqs.length
                ? isArabic
                  ? 'طي الكل'
                  : 'Collapse All'
                : isArabic
                ? 'توسيع الكل'
                : 'Expand All'}
            </button>
          </div>

          {/* FAQS ACCORDION LIST */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 bg-white border border-black/10 space-y-3">
                <HelpCircle className="w-8 h-8 text-black/30 mx-auto" />
                <p className="text-black/70 font-medium text-xs">
                  {isArabic ? 'لم يتم العثور على أسئلة تطابق بحثك.' : 'No questions matched your search criteria.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedType('all');
                  }}
                  className="text-xs text-[#8C5835] hover:underline font-bold uppercase tracking-wider"
                >
                  {isArabic ? 'إعادة ضبط الفلاتر' : 'Reset filters'}
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isExpanded = expandedFaqIds.has(faq.id);
                return (
                  <div
                    key={faq.id}
                    id={faq.id}
                    className={`bg-white border transition-all duration-150 ${
                      isExpanded ? 'border-black shadow-xs' : 'border-black/10 hover:border-black/30'
                    }`}
                  >
                    {/* Header Button */}
                    <div
                      onClick={() => toggleExpand(faq.id)}
                      className="p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-mono text-[10px] text-black/40 font-bold">
                            #{faq.id}
                          </span>
                          <span className="px-2 py-0.5 bg-[#F5F2ED] text-black text-[10px] font-mono border border-black/10">
                            {isArabic ? faq.categoryNameAr : faq.categoryNameEn}
                          </span>
                          <span className="px-2 py-0.5 bg-[#FAF7F2] text-[#8C5835] text-[10px] font-mono border border-[#8C5835]/30">
                            {faq.questionType.replace('TYPE_', '').replace('_', ' ')}
                          </span>
                          <VerificationBadge status={faq.verificationStatus} size="sm" />
                        </div>

                        <h2 className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                          {isArabic ? faq.question.ar : faq.question.en}
                        </h2>
                      </div>

                      <div className="flex-shrink-0 flex items-center gap-2 pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyCitation(faq.id);
                          }}
                          className="p-1.5 border border-black/10 hover:border-black text-black/60 hover:text-black transition-colors"
                          title={isArabic ? 'نسخ رابط الاستشهاد المباشر' : 'Copy Direct Citation URL'}
                        >
                          {copiedFaqId === faq.id ? (
                            <Check className="w-3.5 h-3.5 text-[#2D3A31]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <div className="p-1.5 text-black/60">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>

                    {/* Answer Expanded Body */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 border-t border-black/5 space-y-3 bg-[#FAF7F2]">
                        <p className="text-sm text-black leading-relaxed font-editorial-serif italic text-base">
                          "{isArabic ? faq.answer.ar : faq.answer.en}"
                        </p>

                        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-wider text-black/50 border-t border-black/5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-black/70">
                              {isArabic ? 'المرجع الرسمي:' : 'Official Reference:'}
                            </span>
                            <span>{faq.source}</span>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {faq.relatedEntities.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-1.5 py-0.5 bg-white border border-black/10 text-black/60 font-mono"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
};
