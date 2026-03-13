
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";

const navigation = [{
  name: "HOME",
  href: "/"
}, {
  name: "ABOUT US",
  href: "/about"
}, {
  name: "COURSES",
  href: "/courses"
}, {
  name: "CURRICULUM",
  href: "/curriculum"
}, {
  name: "FEATURES",
  href: "/features"
}, {
  name: "PLACEMENT",
  href: "/placement"
}, {
  name: "CONTACT",
  href: "/contact"
}];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({
  children
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in your accounting courses. Please provide more information.");
    window.open(`https://wa.me/919946524366?text=${message}`, '_blank');
  };

  const handleTalkToUs = () => {
    const message = encodeURIComponent("Hi, I would like to talk to someone about your courses.");
    window.open(`https://wa.me/919946524366?text=${message}`, '_blank');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - positioned at the absolute left */}
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center">
                <img 
                  src="/acoundz360-logo.png" 
                  alt="Acoundz 360 Logo" 
                  className="h-12 w-auto"
                  loading="eager"
                  decoding="async"
                />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigation.map(item => (
                <NavLink 
                  key={item.name} 
                  to={item.href} 
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? "text-primary border-b-2 border-primary" 
                        : "text-foreground hover:text-primary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right side buttons */}
            <div className="hidden md:flex space-x-3">
              <Button className="bg-black text-white hover:bg-gray-800" asChild>
                <NavLink to="/training-portal">
                  Training Portal
                </NavLink>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800" asChild>
                <NavLink to="/placement-portal">
                  Placement Portal
                </NavLink>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg border-t z-40">
            <div className="px-4 py-6 space-y-4">
              {/* Navigation Items */}
              <nav className="space-y-3">
                {navigation.map(item => (
                  <NavLink 
                    key={item.name} 
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={({ isActive }) => 
                      `block text-base font-medium transition-colors duration-200 py-2 px-3 rounded-md ${
                        isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              {/* Portal Buttons */}
              <div className="space-y-3 pt-4 border-t">
                <Button className="w-full bg-black text-white hover:bg-gray-800" asChild>
                  <NavLink to="/training-portal" onClick={closeMobileMenu}>
                    Training Portal
                  </NavLink>
                </Button>
                <Button className="w-full bg-black text-white hover:bg-gray-800" asChild>
                  <NavLink to="/placement-portal" onClick={closeMobileMenu}>
                    Placement Portal
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={closeMobileMenu}
        />
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Acoundz 360</h3>
              <p className="text-primary-foreground/80 mb-4">
                AI-enabled accounting training with real-time tools and 100% placement assistance.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>9946524366</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@acoundz360.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>TC 29/4615, Central Plaza, Vazhuthacaud, Thiruvananthapuram, Kerala 695014</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/courses" className="hover:text-primary-light">Courses</NavLink></li>
                <li><NavLink to="/placement" className="hover:text-primary-light">Placement</NavLink></li>
                <li><NavLink to="/placement-portal" className="hover:text-primary-light">Portal</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-primary-light">Contact</NavLink></li>
                <li><NavLink to="/features" className="hover:text-primary-light">Features</NavLink></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.facebook.com/share/151vkdbf11/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary-light transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/acoundz360_dbiz?utm_source=qr&igsh=MTQ1cnRqdGRidjE1ag==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary-light transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary-light transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <Button 
                  onClick={handleTalkToUs}
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary-foreground text-zinc-950 bg-zinc-50 mt-4 hover:bg-green-500 hover:text-white hover:border-green-500"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Talk to Us
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm">
            <p>&copy; 2025 Acoundz 360 – All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <NavLink to="/privacy-policy" className="hover:text-primary-light">Privacy Policy</NavLink>
              <NavLink to="/terms-conditions" className="hover:text-primary-light">Terms & Conditions</NavLink>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={handleWhatsApp}
          size="lg" 
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
