
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RideTypes from '@/components/RideTypes';
import PopularRoutes from '@/components/PopularRoutes';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <RideTypes />
        <PopularRoutes />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
