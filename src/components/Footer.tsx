
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-display text-accent">
              IndiaRide
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              India's most trusted ride-hailing service. Safe, affordable, and comfortable rides across 100+ cities.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Driver Partner</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Newsroom</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Support</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Lost Items</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Contact Info</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span>123 Business District, Sector 44, Gurgaon, Haryana 122003</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span>+91-9876-543-210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span>support@indiaride.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Get Updates</h5>
              <div className="flex">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="ml-2 bg-accent hover:bg-accent-light text-secondary-dark">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 IndiaRide. All rights reserved. | Made with ❤️ in India
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
