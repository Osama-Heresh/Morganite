import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  FileCode,
  Network,
  Cpu,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_ENTITY } from '../../data/companyEntity';
import { PRODUCT_FAMILIES } from '../../data/productFamilies';

export const Footer: React.FC = () => {
  const { language, isArabic } = useLanguage();

  const educationalLinks = [
    { slug: 'morganite-jordan', labelEn: 'Morganite Jordan Overview', labelAr: 'مورجانيت الأردن - نظرة شاملة' },
    { slug: 'meat-processing-solutions', labelEn: 'Meat Processing Solutions', labelAr: 'حلول مصانع اللحوم' },
    { slug: 'spice-blends-jordan', labelEn: 'Specialized Spice Blends', labelAr: 'خلطات البهارات المتخصصة' },
    { slug: 'food-flavors-jordan', labelEn: 'Food Flavors (FLAVEX)', labelAr: 'النكهات الغذائية (فلافيكس)' },
    { slug: 'horeca-food-solutions', labelEn: 'HORECA & Restaurant Systems', labelAr: 'حلول المطاعم وهوريكا' },
    { slug: 'custom-food-blends', labelEn: 'Custom Blends & R&D', labelAr: 'الخلطات المخصصة والبحث' },
  ];

  return (
    <footer className="bg-[#141A16] text-[#E5E0D8] pt-14 pb-10 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Curated Editorial Sub-header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C99A6B]">
              {isArabic ? 'الأرشيف المعرفي المؤسسي' : 'Institutional Knowledge Monograph'}
            </div>
            <div className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mt-1">
              MORGANITE FOR FOOD TECHNOLOGY.
            </div>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse text-[10px] uppercase tracking-[0.25em] font-bold text-white/50">
            <span>Amman // 31.95° N</span>
            <div className="h-3 w-[1px] bg-white/20"></div>
            <span>Vol. 2026</span>
          </div>
        </div>

        {/* 5-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Col 1 (4 cols): Corporate Entity & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/brand/Logo-Black-new.png"
                alt="Morganite for Food Technology Official Logo"
                className="h-9 sm:h-10 w-auto max-w-[160px] object-contain brightness-0 invert opacity-95"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-bold text-white text-sm tracking-wide block">
                  {isArabic ? COMPANY_ENTITY.legalNameAr : COMPANY_ENTITY.legalName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C99A6B]">
                  {isArabic ? 'تأسست 2013 // الأردن' : 'Est. 2013 // Jordan'}
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-editorial-serif italic text-sm">
              "{isArabic ? COMPANY_ENTITY.summaryAr : COMPANY_ENTITY.summaryEn}"
            </p>

            {/* Verified Address & Contact */}
            <div className="space-y-2 text-xs pt-1 text-white/80 border-t border-white/5 pt-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C99A6B] flex-shrink-0 mt-0.5" />
                <span className="text-[11px]">
                  {isArabic
                    ? `${COMPANY_ENTITY.location.streetAddressAr}، ${COMPANY_ENTITY.location.industrialAreaAr}، ${COMPANY_ENTITY.location.cityAr}`
                    : `${COMPANY_ENTITY.location.streetAddress}, ${COMPANY_ENTITY.location.industrialArea}, ${COMPANY_ENTITY.location.city}`}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <a href={`tel:${COMPANY_ENTITY.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#E8C5A0] transition-colors flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#C99A6B]" />
                  <span>{COMPANY_ENTITY.contact.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_ENTITY.contact.email}`} className="hover:text-[#E8C5A0] transition-colors flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-[#C99A6B]" />
                  <span>{COMPANY_ENTITY.contact.email}</span>
                </a>
              </div>
            </div>

            {/* ISO Certification Box */}
            <div className="p-3 border border-white/10 bg-[#1D2520] text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>ISO 14001:2015 Registered</span>
              </div>
              <div className="text-[10px] text-white/60">
                {isArabic ? 'إنتاج وتعبئة النكهات والزعتر والخلطات (سارية حتى 2028)' : 'Flavors, Thyme & Blends Manufacture (Valid 2028)'}
              </div>
            </div>
          </div>

          {/* Col 2 (3 cols): Product Portfolios */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#C99A6B] border-b border-white/10 pb-1">
              {isArabic ? 'عائلات المنتجات' : 'Product Portfolios'}
            </div>
            <ul className="space-y-1.5 text-xs">
              {PRODUCT_FAMILIES.map((p, idx) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}?lang=${language}`}
                    className="hover:text-[#E8C5A0] transition-colors flex items-center justify-between py-1 border-b border-white/5"
                  >
                    <span className="font-medium">{p.name}</span>
                    <span className="text-[10px] font-editorial-serif italic text-white/40">0{idx + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (3 cols): Knowledge Hubs & Intent Pages */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#C99A6B] border-b border-white/10 pb-1">
              {isArabic ? 'الأدلة والقطاعات' : 'Curated Research'}
            </div>
            <ul className="space-y-1.5 text-xs">
              {educationalLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    to={`/${link.slug}?lang=${language}`}
                    className="hover:text-[#E8C5A0] transition-colors py-1 block border-b border-white/5 text-white/80"
                  >
                    {isArabic ? link.labelAr : link.labelEn}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to={`/faq?lang=${language}`}
                  className="text-[#E8C5A0] hover:underline font-bold text-[11px] uppercase tracking-wider flex items-center gap-1"
                >
                  <span>{isArabic ? 'دليل الأسئلة الشامل (190+)' : 'Master FAQ Hub (190+)'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (2 cols): Machine-Readable & Audit Layer */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#C99A6B] border-b border-white/10 pb-1">
              {isArabic ? 'الطبقة الدلالية' : 'AI Schema'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/80 hover:text-[#E8C5A0] transition-colors"
                >
                  <FileCode className="w-3 h-3 text-[#C99A6B]" />
                  <span>/llms.txt</span>
                </a>
              </li>
              <li>
                <a
                  href="/data/morganite-knowledge.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/80 hover:text-[#E8C5A0] transition-colors"
                >
                  <FileCode className="w-3 h-3 text-[#C99A6B]" />
                  <span>Knowledge JSON</span>
                </a>
              </li>
              <li>
                <Link
                  to={`/entity-graph?lang=${language}`}
                  className="flex items-center gap-1.5 text-white/80 hover:text-[#E8C5A0] transition-colors"
                >
                  <Network className="w-3 h-3 text-[#C99A6B]" />
                  <span>{isArabic ? 'خريطة الكيانات' : 'Entity Graph'}</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/knowledge-assistant?lang=${language}`}
                  className="flex items-center gap-1.5 text-white/80 hover:text-[#E8C5A0] transition-colors"
                >
                  <Cpu className="w-3 h-3 text-[#C99A6B]" />
                  <span>{isArabic ? 'المساعد المعرفي' : 'Query Engine'}</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/ai-visibility?lang=${language}`}
                  className="flex items-center gap-1.5 text-white/80 hover:text-[#E8C5A0] transition-colors"
                >
                  <ShieldCheck className="w-3 h-3 text-[#C99A6B]" />
                  <span>{isArabic ? 'مركز التدقيق' : 'AI Audit'}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Curated Editorial Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-white/60 font-bold">
              © {new Date().getFullYear()} MORGANITE FOOD TECHNOLOGY
            </span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="https://www.morganitegroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>{isArabic ? 'الموقع الرسمي' : 'Official Site'}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/morganitegroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <a
              href="https://www.google.com/maps/place/Morganite+for+Food+Technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Maps</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
