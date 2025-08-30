
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Clock, IndianRupee } from 'lucide-react';

const popularRoutes = [
  {
    city: 'Delhi NCR',
    routes: [
      { from: 'IGI Airport', to: 'Connaught Place', fare: '₹280-350', time: '45-60 min' },
      { from: 'Gurgaon', to: 'Noida', fare: '₹320-420', time: '50-70 min' },
      { from: 'Delhi Cantt', to: 'Karol Bagh', fare: '₹180-240', time: '30-45 min' }
    ]
  },
  {
    city: 'Mumbai',
    routes: [
      { from: 'Mumbai Airport', to: 'Bandra', fare: '₹150-200', time: '20-30 min' },
      { from: 'Andheri', to: 'Colaba', fare: '₹280-350', time: '45-60 min' },
      { from: 'Powai', to: 'Lower Parel', fare: '₹220-280', time: '35-50 min' }
    ]
  },
  {
    city: 'Bangalore',
    routes: [
      { from: 'KIA Airport', to: 'Koramangala', fare: '₹450-550', time: '60-80 min' },
      { from: 'Electronic City', to: 'MG Road', fare: '₹280-350', time: '45-60 min' },
      { from: 'Whitefield', to: 'Brigade Road', fare: '₹320-400', time: '50-70 min' }
    ]
  },
  {
    city: 'Hyderabad',
    routes: [
      { from: 'RGIA Airport', to: 'Banjara Hills', fare: '₹350-450', time: '50-70 min' },
      { from: 'Hitec City', to: 'Secunderabad', fare: '₹250-320', time: '40-55 min' },
      { from: 'Gachibowli', to: 'Abids', fare: '₹280-350', time: '45-60 min' }
    ]
  },
  {
    city: 'Chennai',
    routes: [
      { from: 'Chennai Airport', to: 'T. Nagar', fare: '₹200-280', time: '35-50 min' },
      { from: 'OMR', to: 'Central', fare: '₹320-400', time: '50-70 min' },
      { from: 'Anna Nagar', to: 'Marina Beach', fare: '₹180-240', time: '30-45 min' }
    ]
  },
  {
    city: 'Pune',
    routes: [
      { from: 'Pune Airport', to: 'Koregaon Park', fare: '₹180-240', time: '30-45 min' },
      { from: 'Hinjewadi', to: 'FC Road', fare: '₹250-320', time: '40-55 min' },
      { from: 'Wakad', to: 'Camp', fare: '₹280-350', time: '45-60 min' }
    ]
  }
];

const PopularRoutes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Popular <span className="text-gradient">Routes</span> Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Frequently traveled routes in major Indian cities with estimated fares and travel times
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {popularRoutes.map((cityData, index) => (
            <Card key={cityData.city} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold font-display">{cityData.city}</h3>
                  <Badge className="bg-gradient-primary text-white">
                    Hot Routes
                  </Badge>
                </div>

                <div className="space-y-4">
                  {cityData.routes.map((route, routeIndex) => (
                    <div key={routeIndex} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>{route.from}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary my-1 ml-1" />
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>{route.to}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs mb-3">
                        <div className="flex items-center text-success font-semibold">
                          <IndianRupee className="w-3 h-3 mr-1" />
                          {route.fare}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {route.time}
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full text-xs">
                        Book This Route
                      </Button>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90">
                  View All {cityData.city} Routes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Can't find your route? We cover 100+ cities across India
          </p>
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
            Explore All Cities
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
