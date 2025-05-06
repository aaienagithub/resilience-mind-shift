
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTAProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgClassName?: string;
}

const CallToAction = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  bgClassName = "bg-brand-black",
}: CTAProps) => {
  return (
    <section className={`${bgClassName} py-12 md:py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        {subtitle && <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-brand-green hover:bg-opacity-90 font-semibold text-lg px-8 py-6">
            <Link to={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button asChild variant="outline" className="bg-white text-brand-black border-white hover:bg-transparent hover:text-white font-semibold text-lg px-8 py-6">
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
