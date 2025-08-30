
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Clock, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Indian-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-bounce-subtle" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-success/20 rounded-full blur-lg animate-bounce-subtle delay-1000" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">
              India's Most <span className="text-gradient bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Trusted</span> Ride
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Safe, affordable, and comfortable rides across India. Book in seconds, ride in minutes.
            </p>
          </div>

          {/* Booking Form */}
          <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-muted focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <Navigation className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-muted focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    Book Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 h-14 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Schedule Later
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="animate-fade-in delay-200">
              <div className="text-3xl md:text-4xl font-bold text-accent">50L+</div>
              <div className="text-sm md:text-base opacity-90">Happy Customers</div>
            </div>
            <div className="animate-fade-in delay-300">
              <div className="text-3xl md:text-4xl font-bold text-accent">100+</div>
              <div className="text-sm md:text-base opacity-90">Cities</div>
            </div>
            <div className="animate-fade-in delay-400">
              <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
              <div className="text-sm md:text-base opacity-90">Available</div>
            </div>
            <div className="animate-fade-in delay-500">
              <div className="text-3xl md:text-4xl font-bold text-accent">5★</div>
              <div className="text-sm md:text-base opacity-90">Rated Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
