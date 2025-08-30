
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Clock, IndianRupee } from 'lucide-react';

const rideTypes = [
  {
    id: 'auto',
    name: 'Auto',
    description: 'Affordable 3-wheeler rides',
    capacity: '3 seats',
    eta: '2-5 min',
    fare: '₹45-65',
    features: ['Budget friendly', 'Quick rides'],
    popular: false
  },
  {
    id: 'bike',
    name: 'Bike',
    description: 'Fastest way to beat traffic',
    capacity: '1 seat',
    eta: '1-3 min',
    fare: '₹25-40',
    features: ['Fastest', 'Traffic free'],
    popular: true
  },
  {
    id: 'mini',
    name: 'Mini',
    description: 'Compact and economical',
    capacity: '4 seats',
    eta: '3-7 min',
    fare: '₹65-85',
    features: ['AC Available', 'Comfortable'],
    popular: true
  },
  {
    id: 'sedan',
    name: 'Sedan',
    description: 'Premium comfort rides',
    capacity: '4 seats',
    eta: '5-10 min',
    fare: '₹120-180',
    features: ['Premium', 'Spacious', 'AC'],
    popular: false
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Large groups and families',
    capacity: '6-7 seats',
    eta: '8-15 min',
    fare: '₹200-300',
    features: ['Large group', 'Extra space', 'Premium'],
    popular: false
  }
];

const RideTypes = () => {
  const [selectedRide, setSelectedRide] = useState('mini');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Choose Your <span className="text-gradient">Perfect Ride</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From quick bike rides to spacious SUVs, we have the right vehicle for every journey across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {rideTypes.map((ride) => (
            <Card 
              key={ride.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                selectedRide === ride.id 
                  ? 'ring-2 ring-primary shadow-xl bg-gradient-to-br from-primary/5 to-accent/5' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedRide(ride.id)}
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <h3 className="text-xl font-bold mb-2 font-display">{ride.name}</h3>
                  {ride.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-gradient-success text-white">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm">{ride.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>{ride.capacity}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>{ride.eta}</span>
                  </div>
                  <div className="flex items-center text-sm font-semibold">
                    <IndianRupee className="w-4 h-4 mr-2 text-success" />
                    <span className="text-success">{ride.fare}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {ride.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs mr-1">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant={selectedRide === ride.id ? "default" : "outline"}
                  size="sm" 
                  className="w-full"
                >
                  {selectedRide === ride.id ? 'Selected' : 'Select'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Ride Summary */}
        {selectedRide && (
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 font-display">
                  {rideTypes.find(r => r.id === selectedRide)?.name} Selected
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estimated fare: <span className="font-bold text-success text-lg">
                    {rideTypes.find(r => r.id === selectedRide)?.fare}
                  </span>
                </p>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8">
                  Book {rideTypes.find(r => r.id === selectedRide)?.name} Now
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default RideTypes;
