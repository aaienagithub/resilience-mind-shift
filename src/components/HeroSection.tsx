
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  primaryLink: string;
  secondaryCTA?: string;
  secondaryLink?: string;
  image?: string;
}

const HeroSection = ({
  title,
  subtitle,
  primaryCTA,
  primaryLink,
  secondaryCTA,
  secondaryLink,
  image,
}: HeroProps) => {
  return (
    <section className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              {title}
            </h1>
            <p className="text-xl mb-8 text-white text-opacity-90 max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-brand-green hover:bg-opacity-90 text-white font-semibold text-lg px-8 py-6"
              >
                <Link to={primaryLink}>{primaryCTA}</Link>
              </Button>
              
              {secondaryCTA && secondaryLink && (
                <Button 
                  asChild
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-brand-black font-semibold text-lg px-8 py-6"
                >
                  <Link to={secondaryLink}>{secondaryCTA}</Link>
                </Button>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {image ? (
              <img 
                src={image} 
                alt="Aaiena emotional resilience training" 
                className="rounded-lg shadow-lg max-w-full h-auto" 
              />
            ) : (
              <div className="bg-white bg-opacity-10 rounded-lg p-8 w-full max-w-md aspect-video flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
