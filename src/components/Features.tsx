
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, CreditCard, MapPin, Headphones, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Verified drivers, GPS tracking, and 24/7 safety support for peace of mind',
    color: 'text-success'
  },
  {
    icon: Clock,
    title: 'Quick Booking',
    description: 'Book in seconds, get rides in minutes. No waiting, no hassle',
    color: 'text-primary'
  },
  {
    icon: CreditCard,
    title: 'Multiple Payments',
    description: 'UPI, Paytm, PhonePe, cards, or cash - pay your way',
    color: 'text-accent'
  },
  {
    icon: MapPin,
    title: 'Live Tracking',
    description: 'Real-time GPS tracking and ETA updates for every ride',
    color: 'text-secondary'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support in Hindi, English, and regional languages',
    color: 'text-success'
  },
  {
    icon: Star,
    title: 'Rated Drivers',
    description: 'All drivers are background verified and customer-rated for quality',
    color: 'text-primary'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Why Choose <span className="text-gradient">Our Service</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the best ride-hailing service in India with features designed for your convenience and safety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-6 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display">
                Ready to Experience the Best Rides in India?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join millions of satisfied customers who trust us for their daily commute, airport transfers, and city travels
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Download App
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Book on Web
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
