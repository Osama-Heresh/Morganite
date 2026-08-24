import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe,
  Menu,
  X,
  Layers,
  Factory,
  Sparkles,
  UserCheck,
  Award,
  HelpCircle,
  Link2,
  Cpu,
  Network,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PRODUCT_FAMILIES } from '../../data/productFamilies';

export const Navbar: React.FC = () => {
  const { language, setLanguage, isArabic } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { labelEn: 'Factory', labelAr: 'المصنع', path: '/factory', icon: Factory },
    { labelEn: 'R&D', labelAr: 'البحث والتطوير', path: '/research-development', icon: Sparkles },
    { labelEn: 'Industries', labelAr: 'القطاعات', path: '/industries', icon: Layers },
    { labelEn: 'Founder', labelAr: 'المؤسس', path: '/founder/salah-alheresh', icon: UserCheck },
    { labelEn: 'Certifications', labelAr: 'الشهادات', path: '/certifications', icon: Award },
    { labelEn: 'FAQ Hub', labelAr: 'مركز الأسئلة', path: '/faq', icon: HelpCircle },
    { labelEn: 'Sources', labelAr: 'المصادر', path: '/official-sources', icon: Link2 },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#19201C] text-[#F5F2ED] border-b border-white/10 shadow-sm">
      {/* Editorial Header Strip */}
      <div className="bg-[#121714] text-[#E0DCD3] text-[10px] uppercase tracking-[0.25em] font-medium py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C5835] inline-block"></span>
            <span>
              {isArabic
                ? 'مورجانيت لتكنولوجيا الأغذية // عمان - الأردن // تأسست 2013'
                : 'Morganite Food Tech // Amman, Jordan (31.95° N) // Est. 2013'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/50 text-[9px]">
            <span className="font-editorial-serif italic lowercase tracking-normal text-[11px] text-white/70">
              {isArabic ? 'المرجع المعرفي الرقمي الموثق' : 'Official Grounded Knowledge Monograph'}
            </span>
            <span className="hidden sm:inline">VOL. 2026 // ARCHIVE 01</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Brand Logo & Name */}
          <Link
            to={`/?lang=${language}`}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="bg-[#FAF7F2] px-2.5 py-1 border border-white/20 flex items-center justify-center shadow-xs">
              <img
                src="/brand/Logo-Black-new.png"
                alt="Morganite for Food Technology Official Logo"
                className="h-8 w-auto max-w-[130px] sm:max-w-[155px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden md:block">
              <div className="font-black text-sm tracking-tight uppercase text-white group-hover:text-[#E8C5A0] transition-colors leading-none">
                MORGANITE
              </div>
              <div className="text-[8px] uppercase tracking-[0.25em] font-bold text-[#C99A6B] mt-0.5">
                {isArabic ? 'مركز المعرفة الصناعية' : 'Knowledge Center'}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse text-[11px] uppercase tracking-[0.18em] font-bold">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 text-[11px] uppercase tracking-[0.18em] font-bold transition-all flex items-center gap-1.5 border ${
                  location.pathname.startsWith('/products')
                    ? 'text-[#E8C5A0] bg-[#2D3A31] border-white/20'
                    : 'text-white/80 hover:text-white border-transparent hover:border-white/10 hover:bg-white/5'
                }`}
              >
                <span>{isArabic ? 'عائلات المنتجات' : 'Product Families'}</span>
                <span className="text-[9px] font-editorial-serif italic font-normal text-[#E8C5A0] lowercase tracking-normal">
                  (7)
                </span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full start-0 w-80 pt-2 z-50">
                  <div className="bg-[#181F1A] border border-white/15 shadow-2xl p-2 space-y-1">
                    <div className="px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-white/40 border-b border-white/10 mb-1">
                      {isArabic ? 'العائلات السبع المعتمدة' : '7 Certified Portfolios'}
                    </div>
                    {PRODUCT_FAMILIES.map((p, idx) => (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}?lang=${language}`}
                        className="flex items-center justify-between px-3 py-2 text-xs hover:bg-[#2D3A31] text-white/90 hover:text-[#E8C5A0] transition-colors border-b border-white/5 last:border-0"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-editorial-serif italic text-white/40">0{idx + 1}</span>
                          <span className="font-bold tracking-wider">{p.name}</span>
                        </div>
                        <span className="text-[11px] text-white/50 font-editorial-serif italic font-normal">
                          {isArabic ? p.nameAr.split('-')[0].trim() : p.taglineEn.slice(0, 22)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={`${link.path}?lang=${language}`}
                  className={`px-3 py-2 transition-all border ${
                    isActive
                      ? 'text-[#E8C5A0] bg-[#2D3A31] border-white/20'
                      : 'text-white/80 hover:text-white border-transparent hover:border-white/10 hover:bg-white/5'
                  }`}
                >
                  <span>{isArabic ? link.labelAr : link.labelEn}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Tools: AI Query + Language Toggle */}
          <div className="flex items-center gap-2.5">
            <Link
              to={`/knowledge-assistant?lang=${language}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#2D3A31] hover:bg-[#39493E] text-[#E8C5A0] border border-white/20 transition-all shadow-xs"
              title={isArabic ? 'المساعد المعرفي الموثق' : 'Knowledge Query Engine'}
            >
              <Cpu className="w-3 h-3 text-[#E8C5A0]" />
              <span>{isArabic ? 'محرك الإجابات' : 'Query Engine'}</span>
            </Link>

            <Link
              to={`/entity-graph?lang=${language}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-transparent hover:bg-white/5 text-white/80 border border-white/15 transition-all"
              title={isArabic ? 'خريطة الكيانات' : 'Entity Graph'}
            >
              <Network className="w-3 h-3 text-white/60" />
              <span>{isArabic ? 'الخريطة' : 'Graph'}</span>
            </Link>

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] font-bold bg-[#8C5835]/30 hover:bg-[#8C5835]/50 text-[#F5F2ED] border border-[#C99A6B]/50 transition-colors"
              aria-label="Toggle Language"
            >
              <Globe className="w-3 h-3 text-[#E8C5A0]" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white/80 hover:text-white border border-white/15 bg-white/5 focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#161C18] border-b border-white/10 px-4 pt-3 pb-6 space-y-4">
          <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#E8C5A0] px-2">
            {isArabic ? 'عائلات المنتجات' : 'Product Families'}
          </div>
          <div className="grid grid-cols-2 gap-2 px-2">
            {PRODUCT_FAMILIES.map((p, idx) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}?lang=${language}`}
                className="p-2 border border-white/10 bg-[#222B25] text-xs font-bold text-white hover:text-[#E8C5A0]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="text-[9px] font-editorial-serif italic text-white/40">0{idx + 1}</div>
                <div>{p.name}</div>
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-3 space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={`${link.path}?lang=${language}`}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs uppercase tracking-wider text-white/90 hover:bg-[#2D3A31] hover:text-[#E8C5A0] border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-3.5 h-3.5 text-white/50" />
                  <span>{isArabic ? link.labelAr : link.labelEn}</span>
                </Link>
              );
            })}
            <Link
              to={`/knowledge-assistant?lang=${language}`}
              className="flex items-center gap-2.5 px-3 py-2 text-xs uppercase tracking-wider text-[#E8C5A0] bg-[#2D3A31]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Cpu className="w-3.5 h-3.5 text-[#E8C5A0]" />
              <span>{isArabic ? 'محرك الإجابات المعرفي' : 'Knowledge Query Engine'}</span>
            </Link>
            <Link
              to={`/ai-visibility?lang=${language}`}
              className="flex items-center gap-2.5 px-3 py-2 text-xs uppercase tracking-wider text-white/80 hover:bg-[#2D3A31]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E8C5A0]" />
              <span>{isArabic ? 'مركز تدقيق الذكاء الاصطناعي' : 'AI Visibility Audit'}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
