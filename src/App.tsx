import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductFamilyPage } from './pages/ProductFamilyPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { MeatProcessingSolutionPage } from './pages/MeatProcessingSolutionPage';
import { FoodManufacturingSolutionPage } from './pages/FoodManufacturingSolutionPage';
import { HorecaSolutionPage } from './pages/HorecaSolutionPage';
import { CustomFoodSolutionsPage } from './pages/CustomFoodSolutionsPage';
import { AboutMorganitePage } from './pages/AboutMorganitePage';
import { FactoryPage } from './pages/FactoryPage';
import { ResearchDevPage } from './pages/ResearchDevPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { FounderPage } from './pages/FounderPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { OfficialSourcesPage } from './pages/OfficialSourcesPage';
import { FaqHubPage } from './pages/FaqHubPage';
import { SearchIntentPage } from './pages/SearchIntentPage';
import { EntityGraphPage } from './pages/EntityGraphPage';
import { KnowledgeAssistantPage } from './pages/KnowledgeAssistantPage';
import { AiVisibilityPage } from './pages/AiVisibilityPage';
import { AdminKnowledgePage } from './pages/AdminKnowledgePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">
        <ScrollToTop />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMorganitePage />} />
            <Route path="/about-morganite" element={<AboutMorganitePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:familySlug" element={<ProductFamilyPage />} />
            <Route path="/products/:familySlug/:productSlug" element={<ProductDetailPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/meat-processing" element={<MeatProcessingSolutionPage />} />
            <Route path="/solutions/food-manufacturing" element={<FoodManufacturingSolutionPage />} />
            <Route path="/solutions/horeca" element={<HorecaSolutionPage />} />
            <Route path="/custom-food-solutions" element={<CustomFoodSolutionsPage />} />
            <Route path="/factory" element={<FactoryPage />} />
            <Route path="/research-development" element={<ResearchDevPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:industrySlug" element={<IndustryDetailPage />} />
            <Route path="/founder/salah-alheresh" element={<FounderPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/official-sources" element={<OfficialSourcesPage />} />
            <Route path="/faq" element={<FaqHubPage />} />
            <Route path="/faq/:categorySlug" element={<FaqHubPage />} />
            <Route path="/entity-graph" element={<EntityGraphPage />} />
            <Route path="/knowledge-assistant" element={<KnowledgeAssistantPage />} />
            <Route path="/ai-visibility" element={<AiVisibilityPage />} />
            <Route path="/admin/knowledge" element={<AdminKnowledgePage />} />

            {/* Dedicated Educational Intent Pages */}
            <Route path="/morganite-jordan" element={<SearchIntentPage forcedSlug="morganite-jordan" />} />
            <Route path="/food-technology-jordan" element={<SearchIntentPage forcedSlug="food-technology-jordan" />} />
            <Route path="/food-manufacturing-jordan" element={<SearchIntentPage forcedSlug="food-manufacturing-jordan" />} />
            <Route path="/spice-blends-jordan" element={<SearchIntentPage forcedSlug="spice-blends-jordan" />} />
            <Route path="/food-flavors-jordan" element={<SearchIntentPage forcedSlug="food-flavors-jordan" />} />
            <Route path="/meat-processing-solutions" element={<SearchIntentPage forcedSlug="meat-processing-solutions" />} />
            <Route path="/horeca-food-solutions" element={<SearchIntentPage forcedSlug="horeca-food-solutions" />} />
            <Route path="/custom-food-blends" element={<SearchIntentPage forcedSlug="custom-food-blends" />} />

            {/* Dynamic slug route fallback */}
            <Route path="/:intentSlug" element={<SearchIntentPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
