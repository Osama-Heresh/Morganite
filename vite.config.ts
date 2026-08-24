import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { generateSeoFiles } from './scripts/generateSeo';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = env.VITE_SITE_URL || 'https://knowledge.morganitegroup.com';

  // Also write to public/ for dev and direct previews
  generateSeoFiles(siteUrl, path.resolve(__dirname, 'public'));

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'vite-plugin-generate-seo',
        closeBundle() {
          const distDir = path.resolve(__dirname, 'dist');
          generateSeoFiles(siteUrl, distDir);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
