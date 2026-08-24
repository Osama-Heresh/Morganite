import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Network,
  Database,
  Copy,
  Check,
  Code,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MetaHead } from '../components/seo/MetaHead';
import { JsonLd, createBreadcrumbSchema } from '../components/seo/JsonLd';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AiReadableSummary } from '../components/common/AiReadableSummary';
import { MASTER_KNOWLEDGE } from '../data/masterKnowledge';
import { SITE_URL } from '../config/site';

export const EntityGraphPage: React.FC = () => {
  const { language, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const [selectedNode, setSelectedNode] = useState<string>('org-morganite');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'visual' | 'raw'>('visual');

  const nodes = [
    {
      id: 'org-morganite',
      type: 'Organization',
      nameEn: 'Morganite for Food Technology',
      nameAr: 'مورجانيت لتكنولوجيا الأغذية',
      category: 'Primary Corporate Entity',
      color: 'bg-[#19201C] text-white border-black',
      detailsEn: 'Established 2013 in Abu Alanda, Amman, Jordan. Dry food mixes, food flavors, spice blends, coatings, and sauces.',
      detailsAr: 'تأسست عام 2013 في أبو علندا، عمان، الأردن. متخصصة في الخلطات الجافة والنكهات والبهارات والبقسماط والصلصات.',
      schemaId: `${SITE_URL}/#organization`,
      targetUrl: '/',
    },
    {
      id: 'person-salah',
      type: 'Person',
      nameEn: 'Eng. Salah Alheresh',
      nameAr: 'المهندس صلاح الهرش',
      category: 'Founder & Owner',
      color: 'bg-[#8C5835] text-white border-[#8C5835]',
      detailsEn: 'Founder & Owner of Morganite. Secretary of the 6th Board (July 2025) of JSSEF under Ministry of Agriculture.',
      detailsAr: 'مؤسس ومالك مورجانيت. أمين سر مجلس الإدارة السادس (تموز 2025) في الجمعية الأردنية للتقييم الحسي للأغذية.',
      schemaId: `${SITE_URL}/founder/salah-alheresh#person`,
      targetUrl: '/founder/salah-alheresh',
    },
    {
      id: 'facility-abualanda',
      type: 'Factory Facility',
      nameEn: 'Abu Alanda Production Facility',
      nameAr: 'مصنع ومنشأة أبو علندا الصناعية',
      category: 'Industrial Manufacturing Plant',
      color: 'bg-[#2D3A31] text-white border-[#2D3A31]',
      detailsEn: 'Dedicated blending and packaging facility located on Abdul Razzaq Al Rabih Street, Abu Alanda Industrial Area, Amman, Jordan.',
      detailsAr: 'منشأة التصنيع والخلط والتعبئة الواقعة في شارع عبد الرزاق الرابح بالمنطقة الصناعية في أبو علندا بعمان.',
      schemaId: `${SITE_URL}/factory#facility`,
      targetUrl: '/factory',
    },
    {
      id: 'loc-amman',
      type: 'Location',
      nameEn: 'Amman, Jordan',
      nameAr: 'عمان، المملكة الأردنية الهاشمية',
      category: 'Geographic Headquarters',
      color: 'bg-[#1C241F] text-white border-black',
      detailsEn: 'Capital city of Jordan, central industrial hub for food manufacturing and regional Levant distribution.',
      detailsAr: 'العاصمة الأردنية، المركز الصناعي الرئيسي لتصنيع الأغذية والتوزيع الإقليمي.',
      schemaId: `${SITE_URL}/morganite-jordan`,
      targetUrl: '/morganite-jordan',
    },
    {
      id: 'rd-sensory',
      type: 'Research & Innovation',
      nameEn: 'R&D & Sensory Formulation Lab',
      nameAr: 'مختبر البحث والتطوير والتقييم الحسي',
      category: 'Formulation & Innovation',
      color: 'bg-[#8C5835] text-white border-[#8C5835]',
      detailsEn: 'Custom proprietary flavor creation, thermal stability testing, texture optimization, and sensory analysis.',
      detailsAr: 'تطوير النكهات الحصرية، اختبارات الثبات الحراري، تحسين القوام، والتقييم الحسي.',
      schemaId: `${SITE_URL}/research-development`,
      targetUrl: '/research-development',
    },
    {
      id: 'org-jssef',
      type: 'Affiliated Scientific Org',
      nameEn: 'JSSEF (Sensory Evaluation)',
      nameAr: 'الجمعية الأردنية للتقييم الحسي للأغذية',
      category: 'External Association',
      color: 'bg-[#2D3A31] text-white border-[#2D3A31]',
      detailsEn: 'Independent scientific nonprofit (Regulation 36/2010, Ministry of Agriculture). Promotes sensory science in food manufacturing.',
      detailsAr: 'جمعية علمية مستقلة (نظام 36/2010، وزارة الزراعة). تعنى بالتقييم الحسي وتطوير جودة المنتجات الوطنية.',
      schemaId: 'https://jssef.org/',
      targetUrl: '/official-sources',
    },
    {
      id: 'cert-iso14001',
      type: 'Certification',
      nameEn: 'ISO 14001:2015 Certification',
      nameAr: 'شهادة الآيزو 14001:2015',
      category: 'Environmental Management',
      color: 'bg-[#2D3A31] text-white border-[#2D3A31]',
      detailsEn: 'Scope: Production & Packaging of Specialized Food Products (Flavors, Thyme, Custom Blends). Valid to Jan 17, 2028.',
      detailsAr: 'النطاق: إنتاج وتعبئة النكهات والزعتر والخلطات المخصصة في أبو علندا (سارية حتى 2028).',
      schemaId: `${SITE_URL}/certifications`,
      targetUrl: '/certifications',
    },
    {
      id: 'src-official-sources',
      type: 'Evidence Directory',
      nameEn: 'Official Corroborating Sources',
      nameAr: 'المصادر والوثائق المرجعية الرسمية',
      category: 'Grounding Directory',
      color: 'bg-[#19201C] text-white border-black',
      detailsEn: 'Directory of primary Level 1 & Level 2 sources including Website, LinkedIn, JSSEF, and Maps.',
      detailsAr: 'دليل المصادر والوثائق الرسمية للمستوى الأول والثاني للتحقق والإسناد.',
      schemaId: `${SITE_URL}/official-sources`,
      targetUrl: '/official-sources',
    },
    {
      id: 'prod-flavex',
      type: 'ProductFamily',
      nameEn: 'FLAVEX (Food Flavors)',
      nameAr: 'فلافيكس (النكهات المركزة)',
      category: 'Product Family',
      color: 'bg-[#1C241F] text-white border-black',
      detailsEn: 'Concentrated savory food flavors (Beef, Chicken, Turkey, Smoke, Grill).',
      detailsAr: 'نكهات غذائية مركزة للحوم والدواجن والشوربات والصلصات.',
      schemaId: `${SITE_URL}/products/flavex`,
      targetUrl: '/products/flavex',
    },
    {
      id: 'prod-crusty',
      type: 'ProductFamily',
      nameEn: 'CRUSTY (Coatings & Breading)',
      nameAr: 'كروستي (أنظمة التغطية والبقسماط)',
      category: 'Product Family',
      color: 'bg-[#1C241F] text-white border-black',
      detailsEn: 'Pre-dust, Batter Mix, Flour Breading, Tempura, Bread Crumbs.',
      detailsAr: 'أنظمة التغطية المقرمشة، الباتر، البريدينج، والتمبورا لمصانع المقليات والمطاعم.',
      schemaId: `${SITE_URL}/products/crusty`,
      targetUrl: '/products/crusty',
    },
    {
      id: 'prod-active',
      type: 'ProductFamily',
      nameEn: 'ACTIVE (Functional Ingredients)',
      nameAr: 'أكتيف (المكونات الوظيفية)',
      category: 'Product Family',
      color: 'bg-[#1C241F] text-white border-black',
      detailsEn: 'Brine mix, Burger Enhancer, MDM Fighter, Plant Base Enhancer, Bread Improver.',
      detailsAr: 'روابط حقن اللحوم، تحسين القوام، روابط البروتين النباتي، ومحسنات المخابز.',
      schemaId: `${SITE_URL}/products/active`,
      targetUrl: '/products/active',
    },
    {
      id: 'prod-tapel',
      type: 'ProductFamily',
      nameEn: 'TAPEL (Master Spice Blends)',
      nameAr: 'تابل (خلطات البهارات المتخصصة)',
      category: 'Product Family',
      color: 'bg-[#1C241F] text-white border-black',
      detailsEn: 'Spice formulations for Mortadella, Sausage, Burger, Zinger, Shawarma, Kofta.',
      detailsAr: 'خلطات بهارات متخصصة لمصانع المرتديلا، السجق، الشاورما، البرغر والزنجر.',
      schemaId: `${SITE_URL}/products/tapel`,
      targetUrl: '/products/tapel',
    },
    {
      id: 'prod-salsa',
      type: 'ProductFamily',
      nameEn: 'SALSA (Ready Sauces)',
      nameAr: 'صلصة (الصلصات الجاهزة)',
      category: 'Product Family',
      color: 'bg-[#1C241F] text-white border-black',
      detailsEn: 'Commercial sauces: Mayonnaise, Mustard, Italian, Garlic, BBQ, Buffalo, Honey Mustard.',
      detailsAr: 'صلصات تجارية جاهزة للمطاعم والفنادق بعبوات اقتصادية.',
      schemaId: `${SITE_URL}/products/salsa`,
      targetUrl: '/products/salsa',
    },
    {
      id: 'prod-zaatar',
      type: 'ProductFamily',
      nameEn: 'ZAATAR (Jordanian Thyme & Duqqa)',
      nameAr: 'زعتر (الزعتر الأردني والدقة)',
      category: 'Product Family',
      color: 'bg-[#1C241F] text-white border-black',
      detailsEn: 'Authentic Jordanian Thyme (Thyme herb, toasted sesame, salt, sumac) + olive oil mixes.',
      detailsAr: 'زعتر أردني أصيل (زعتر بري، سمسم محمص، ملح، سماق) مع خلطات زيت الزيتون.',
      schemaId: `${SITE_URL}/products/zaatar`,
      targetUrl: '/products/zaatar',
    },
    {
      id: 'prod-gluten-free',
      type: 'ProductFamily',
      nameEn: 'GLUTEN FREE (Flours & Mixes)',
      nameAr: 'خالي من الجلوتين (طحين وخلطات)',
      category: 'Product Family',
      color: 'bg-[#1C241F] text-white border-black',
      detailsEn: 'Rice flour, corn flour, gluten-free zaatar, bouillon, and gluten-free breadings.',
      detailsAr: 'طحين الأرز، طحين الذرة، زعتر وماجي وبقسماط خالي من الجلوتين.',
      schemaId: `${SITE_URL}/products/gluten-free`,
      targetUrl: '/products/gluten-free',
    },
    {
      id: 'ind-meat',
      type: 'TargetIndustry',
      nameEn: 'Meat Processing Industry',
      nameAr: 'قطاع مصانع اللحوم',
      category: 'Target Industry',
      color: 'bg-[#8C5835] text-white border-[#8C5835]',
      detailsEn: 'Mortadella, sausage, burger, shawarma further processing plants.',
      detailsAr: 'مصانع مصنعات اللحوم الحمراء والدواجن ومنتجات الشاورما والمقليات.',
      schemaId: `${SITE_URL}/industries/meat-processing`,
      targetUrl: '/industries/meat-processing',
    },
    {
      id: 'ind-horeca',
      type: 'TargetIndustry',
      nameEn: 'HORECA & Commercial Kitchens',
      nameAr: 'قطاع الضيافة والمطاعم (هوريكا)',
      category: 'Target Industry',
      color: 'bg-[#8C5835] text-white border-[#8C5835]',
      detailsEn: 'Hotels, restaurant chains, catering services, and institutional food service.',
      detailsAr: 'الفنادق، سلاسل المطاعم، شركات الإعاشة، ومطابخ التجهيز المركزية.',
      schemaId: `${SITE_URL}/industries/horeca`,
      targetUrl: '/industries/horeca',
    },
  ];

  const currentNode = nodes.find((n) => n.id === selectedNode) || nodes[0];

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(MASTER_KNOWLEDGE, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'INDEX', url: '/' },
    { label: isArabic ? 'خريطة الكيانات والعلاقات' : 'ENTITY GRAPH' },
  ];

  return (
    <>
      <MetaHead
        title={isArabic ? 'خريطة الكيانات الدلالية والمعرفية | مورجانيت' : 'Semantic Entity Graph & Knowledge Matrix | Morganite'}
        description={isArabic
          ? 'المخطط الدلالي التفاعلي للعلاقات بين كيان شركة مورجانيت والمؤسس ومصنع أبو علندا وعائلات المنتجات السبع والجمعية الأردنية للتقييم الحسي للأغذية.'
          : 'Interactive semantic entity graph illustrating ontological relationships between Morganite for Food Technology, founder Eng. Salah Alheresh, Abu Alanda factory, 7 product families, and JSSEF.'}
        canonicalPath="/entity-graph"
      />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Entity Graph', url: '/entity-graph' },
        ])}
        id="entity-graph-schema"
      />

      <main className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] pb-16">
        {/* TOP HEADER */}
        <div className="bg-[#19201C] text-[#F5F2ED] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] px-2.5 py-1 bg-white/10 text-[#E8C5A0] border border-white/20">
                    {isArabic ? 'الرسم البياني الدلالي' : 'ONTOLOGICAL GRAPH // RDF'}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/50">Schema.org 2026</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  {isArabic ? 'خريطة الكيانات الدلالية والمصفوفة المعرفية' : 'Semantic Entity Graph & Matrix'}
                </h1>
              </div>

              {/* Toggle Visual / Raw */}
              <div className="flex items-center border border-white/20 bg-white/5 p-1">
                <button
                  onClick={() => setViewMode('visual')}
                  className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'visual' ? 'bg-[#C99A6B] text-[#141A16]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'المخطط التفاعلي' : 'Interactive'}</span>
                </button>
                <button
                  onClick={() => setViewMode('raw')}
                  className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'raw' ? 'bg-[#C99A6B] text-[#141A16]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'بيانات JSON' : 'Raw JSON'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
          <AiReadableSummary
            summaryEn="The Morganite Entity Graph defines explicit semantic links: Morganite for Food Technology (Organization, 2013 Amman) is owned by Eng. Salah Alheresh (Person, JSSEF Secretary), operates its factory in Abu Alanda, produces 7 distinct ProductFamilies (FLAVEX, CRUSTY, ACTIVE, TAPEL, SALSA, ZAATAR, GLUTEN FREE), holds ISO 14001:2015 certification, conducts custom R&D, and supplies Meat Processing, Food Manufacturing, and HORECA."
            summaryAr="يحدد المخطط الدلالي لمورجانيت الروابط الصريحة: شركة مورجانيت (مؤسسة، 2013 عمان) مملوكة للمهندس صلاح الهرش (شخص، أمين سر JSSEF)، وتدير مصنعها بأبو علندا، وتنتج 7 عائلات منتجات، وتحمل شهادة ISO 14001:2015، وتجري البحث والتطوير، وتخدم مصانع اللحوم، والتصنيع الغذائي، وهوريكا."
            entityType="Ontological Entity Graph Fact"
            entityTypeAr="حقيقة خريطة الكيانات الدلالية"
          />

          {viewMode === 'visual' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Nodes Cloud & Matrix */}
              <div className="lg:col-span-8 bg-white p-7 sm:p-9 border border-black/10 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5835]">
                      {isArabic ? 'عقد الشبكة المعرفية' : 'Graph Nodes & Triples'}
                    </div>
                    <h2 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mt-1">
                      {isArabic ? 'عقد الكيانات في الرسم المعرفي' : 'Ontological Knowledge Nodes'}
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/50 bg-[#FAF7F2] px-2.5 py-1 border border-black/10">
                    {nodes.length} Nodes
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {nodes.map((node) => {
                    const isSelected = node.id === selectedNode;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setSelectedNode(node.id)}
                        className={`p-3.5 border text-start transition-all cursor-pointer ${
                          isSelected
                            ? 'border-black ' + node.color + ' shadow-sm scale-105'
                            : 'bg-[#FAF7F2] border-black/10 hover:border-black text-black'
                        }`}
                      >
                        <div className="text-[9px] font-mono opacity-80 uppercase tracking-widest">
                          {node.type}
                        </div>
                        <div className="font-bold text-xs mt-0.5 font-sans">
                          {isArabic ? node.nameAr : node.nameEn}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Semantic Relationship Graph Summary */}
                <div className="pt-6 border-t border-black/10 space-y-3">
                  <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8C5835]">
                    {isArabic ? 'العلاقات الدلالية الرئيسية (RDF Triple Map):' : 'Key RDF Triples & Ontology Map:'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-[#19201C] text-[#E8C5A0] p-5 border border-white/10">
                    <div>[Morganite Org] → foundedBy → [Eng. Salah Alheresh]</div>
                    <div>[Eng. Salah Alheresh] → secretaryOf → [JSSEF Board 6]</div>
                    <div>[Morganite Org] → operatesPlantIn → [Abu Alanda, Amman]</div>
                    <div>[Morganite Org] → locatedIn → [Amman, Jordan]</div>
                    <div>[Morganite Org] → operatesLab → [R&D & Sensory Formulation]</div>
                    <div>[Morganite Org] → certifiedBy → [ISO 14001:2015]</div>
                    <div>[Morganite Org] → manufactures → [7 Product Families]</div>
                    <div>[Morganite Org] → documentedBy → [Official Sources Directory]</div>
                    <div>[Morganite Org] → supplies → [Meat, Food Mfg, HORECA]</div>
                  </div>
                </div>
              </div>

              {/* Node Inspector Panel */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-7 border border-black/10 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="text-[10px] uppercase font-bold text-[#8C5835] tracking-[0.25em]">
                      {isArabic ? 'مفتش العقدة' : 'Node Inspector'}
                    </span>
                    <span className="text-[10px] font-mono bg-[#FAF7F2] border border-black/10 px-2 py-0.5 text-black">
                      {currentNode.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A]">
                      {isArabic ? currentNode.nameAr : currentNode.nameEn}
                    </h3>
                    <p className="text-xs text-[#8C5835] font-semibold mt-0.5">
                      {currentNode.category}
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF7F2] border border-black/10 text-xs text-black/80 leading-relaxed font-editorial-serif italic text-sm">
                    "{isArabic ? currentNode.detailsAr : currentNode.detailsEn}"
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold block">{isArabic ? 'المعرف الدلالي (@id):' : 'Canonical Schema @id:'}</span>
                    <span className="font-mono text-black break-all text-[10px] bg-[#FAF7F2] p-2 block border border-black/10">
                      {currentNode.schemaId}
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`${currentNode.targetUrl}?lang=${language}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#1A1A1A] hover:bg-black text-white transition-colors"
                    >
                      <span>{isArabic ? 'الانتقال إلى صفحة الكيان' : 'Inspect Record Details'}</span>
                      <Arrow className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* RAW JSON VIEW */
            <div className="bg-[#19201C] p-7 border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono text-[#86EFAC] font-bold uppercase tracking-[0.2em]">
                  MASTER KNOWLEDGE GRAPH (JSON-LD COMPLIANT)
                </span>
                <button
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold bg-white/10 hover:bg-white/20 text-[#E8C5A0] border border-white/20 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#86EFAC]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                </button>
              </div>

              <pre className="text-xs font-mono text-white/80 bg-[#121614] p-5 overflow-x-auto max-h-[600px] leading-relaxed border border-white/5">
                {JSON.stringify(MASTER_KNOWLEDGE, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
