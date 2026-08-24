import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { isArabic, language } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="my-3">
      <ol className="flex items-center flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-black/50 dark:text-white/60">
        <li>
          <Link
            to={`/?lang=${language}`}
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {isArabic ? 'الرئيسية' : 'INDEX'}
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <span className="opacity-40">/</span>
              {item.url && !isLast ? (
                <Link
                  to={`${item.url}${item.url.includes('?') ? '&' : '?'}lang=${language}`}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-black dark:text-white font-black" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
