
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Science", href: "/science" },
    { name: "For Therapists", href: "/for-therapists" },
    { name: "For Organizations", href: "/for-organizations" },
    { name: "Get Trained", href: "/get-trained" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "bg-brand-black shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className={cn(
            "text-2xl font-bold transition-colors",
            scrolled ? "text-white" : "text-brand-black"
          )}>
            aaiena.ai
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-medium transition-colors",
                scrolled 
                  ? "text-white hover:text-brand-sage" 
                  : "text-gray-700 hover:text-brand-green"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-brand-green hover:bg-opacity-90">Book a Call</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className={cn(
              "transition-colors",
              scrolled ? "text-white" : "text-gray-700"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-black">aaiena.ai</span>
          </Link>
          <button
            type="button"
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="space-y-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-base font-medium text-gray-900 hover:text-brand-green"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="w-full bg-brand-green hover:bg-opacity-90 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
