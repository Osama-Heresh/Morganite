/**
 * Site Configuration & URL Management
 * Central source of truth for Knowledge Center hosting URLs and assets.
 */

// Fallback to window.location.origin in browser, or empty string during SSR/build
const getBrowserOrigin = (): string => {
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    return window.location.origin;
  }
  return '';
};

// Configurable base URL from environment or current runtime origin
export const SITE_URL: string = (
  import.meta.env.VITE_SITE_URL ||
  getBrowserOrigin() ||
  'https://knowledge.morganitegroup.com'
).replace(/\/+$/, '');

// Official company website (External Reference Only)
export const MORGANITE_OFFICIAL_WEBSITE = 'https://www.morganitegroup.com/';

// Knowledge Center Local Brand & Asset Paths (Served by this application)
export const SITE_LOGO_PATH = '/brand/Logo-Black-new.png';
export const SITE_LOGO_ABSOLUTE_URL = `${SITE_URL}${SITE_LOGO_PATH}`;
export const KNOWLEDGE_JSON_ABSOLUTE_URL = `${SITE_URL}/data/morganite-knowledge.json`;

/**
 * Returns an absolute URL within the Knowledge Center application
 */
export const getAbsoluteUrl = (path: string = ''): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
};
