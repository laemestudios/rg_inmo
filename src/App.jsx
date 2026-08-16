import React, { useState } from 'react';
import AccessGate from './components/AccessGate';
import PitchBanner from './components/PitchBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCatalog from './components/PropertyCatalog';
import ValuationWizard from './components/ValuationWizard';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

export default function App() {
  const [filters, setFilters] = useState({
    transaction: 'comprar',
    type: 'todos',
    zone: 'Todas las zonas',
    maxPrice: ''
  });

  const handleSearchClick = () => {
    const catalogElem = document.getElementById('catalogo');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AccessGate>
      <div className="min-h-screen flex flex-col font-sans bg-slate-50 selection:bg-red-100 selection:text-red-900">
        
        {/* 1. Commercial Pitch Header Bar */}
        <PitchBanner />

        {/* 2. Clean Navbar with Official Logo */}
        <Navbar />

        {/* 3. Hero Section with Prominent White & Red Searcher */}
        <Hero
          filters={filters}
          setFilters={setFilters}
          onSearch={handleSearchClick}
        />

        {/* 4. Simple & Modern Property Catalog Grid */}
        <PropertyCatalog
          filters={filters}
          setFilters={setFilters}
        />

        {/* 5. Instant Home Valuation Wizard */}
        <ValuationWizard />

        {/* 6. Clean Mobile-Friendly Footer */}
        <Footer />

        {/* 7. RGPD Cookie Banner */}
        <CookieConsent />

      </div>
    </AccessGate>
  );
}
