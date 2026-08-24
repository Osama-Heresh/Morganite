import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { SITE_URL, SITE_LOGO_ABSOLUTE_URL } from '../../config/site';

interface MetaHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
}

export const MetaHead: React.FC<MetaHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  ogImage = SITE_LOGO_ABSOLUTE_URL,
}) => {
  const location = useLocation();
  const { language, isArabic } = useLanguage();

  const currentPath = canonicalPath || location.pathname;
  const baseUrl = SITE_URL;
  const cleanPath = currentPath === '/' ? '' : currentPath;
  const canonicalUrl = `${baseUrl}${cleanPath}${language === 'ar' ? '?lang=ar' : ''}`;
  const enAlternateUrl = `${baseUrl}${cleanPath}?lang=en`;
  const arAlternateUrl = `${baseUrl}${cleanPath}?lang=ar`;
  const xDefaultUrl = `${baseUrl}${cleanPath}`;

  useEffect(() => {
    // Set document title
    document.title = `${title} | Morganite Knowledge Center`;

    // Helper to update meta tag
    const updateTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        el.setAttribute(attrName, attrVal.replace(/['"]/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const updateLinkTag = (rel: string, hreflang: string | null, href: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let el = document.querySelector(selector) as HTMLLinkElement;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (hreflang) el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    updateTag('meta[name="description"]', 'content', description);
    updateTag('meta[property="og:title"]', 'content', title);
    updateTag('meta[property="og:description"]', 'content', description);
    updateTag('meta[property="og:url"]', 'content', canonicalUrl);
    updateTag('meta[property="og:type"]', 'content', ogType);
    updateTag('meta[property="og:image"]', 'content', ogImage);
    updateTag('meta[property="og:locale"]', 'content', isArabic ? 'ar_JO' : 'en_US');
    updateTag('meta[name="twitter:title"]', 'content', title);
    updateTag('meta[name="twitter:description"]', 'content', description);
    updateTag('meta[name="twitter:image"]', 'content', ogImage);

    // Canonical link
    updateLinkTag('canonical', null, canonicalUrl);

    // Hreflang alternate links
    updateLinkTag('alternate', 'en', enAlternateUrl);
    updateLinkTag('alternate', 'ar', arAlternateUrl);
    updateLinkTag('alternate', 'x-default', xDefaultUrl);
  }, [title, description, canonicalUrl, enAlternateUrl, arAlternateUrl, xDefaultUrl, ogType, isArabic]);

  return null;
};
