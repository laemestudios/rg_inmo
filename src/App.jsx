import React, { useState } from 'react';
import PitchBanner from './components/PitchBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketStats from './components/MarketStats';
import PropertyCatalog from './components/PropertyCatalog';
import ValuationWizard from './components/ValuationWizard';
import MortgageCalculator from './components/MortgageCalculator';
import ServicesMLS from './components/ServicesMLS';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

export default function App() {
  const [filters, setFilters] = useState({
    transaction: 'comprar',
    type: 'todos',
    zone: 'Todas las zonas',
    maxPrice: ''
  });

  const [mortgageInitialPrice, setMortgageInitialPrice] = useState(350000);

  const handleSearchClick = () => {
    const catalogElem = document.getElementById('catalogo');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMortgagePrice = (price) => {
    setMortgageInitialPrice(price);
    const hipotecaElem = document.getElementById('hipoteca');
    if (hipotecaElem) {
      hipotecaElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-sand-50 selection:bg-gold-200 selection:text-navy-950">
      
      {/* 1. Modo Presentación Commercial Pitch Header */}
      <PitchBanner />

      {/* 2. Main Navbar */}
      <Navbar />

      {/* 3. Hero Section with Search Filters */}
      <Hero
        filters={filters}
        setFilters={setFilters}
        onSearch={handleSearchClick}
      />

      {/* 4. Market Trust Metrics */}
      <MarketStats />

      {/* 5. Filterable Property Catalog */}
      <PropertyCatalog
        filters={filters}
        setFilters={setFilters}
        onSelectMortgagePrice={handleSelectMortgagePrice}
      />

      {/* 6. Instant Property Valuation Wizard */}
      <ValuationWizard />

      {/* 7. Interactive Mortgage Calculator */}
      <MortgageCalculator initialPrice={mortgageInitialPrice} />

      {/* 8. Casaoro Official Services */}
      <ServicesMLS />

      {/* 9. Contact & Office Location */}
      <ContactSection />

      {/* 10. Footer */}
      <Footer />

      {/* 11. RGPD Cookie Consent Banner */}
      <CookieConsent />

    </div>
  );
}
