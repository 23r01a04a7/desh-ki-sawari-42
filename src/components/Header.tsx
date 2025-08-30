
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-display text-gradient">
              IndiaRide
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Support
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              +91-9876-543-210
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Support
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-gradient-primary hover:opacity-90 justify-start">
                  Sign Up
                </Button>
                <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  +91-9876-543-210
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
