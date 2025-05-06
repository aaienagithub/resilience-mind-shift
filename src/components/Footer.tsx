
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // In a real implementation, this would connect to an email service
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-brand-sage">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-brand-black">aaiena.ai</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Build emotional resilience with science-backed precision. Transform the way you heal.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-brand-textGray">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/science" className="text-gray-600 hover:text-brand-green transition-colors">Science</Link></li>
              <li><Link to="/for-therapists" className="text-gray-600 hover:text-brand-green transition-colors">For Therapists</Link></li>
              <li><Link to="/for-organizations" className="text-gray-600 hover:text-brand-green transition-colors">For Organizations</Link></li>
              <li><Link to="/get-trained" className="text-gray-600 hover:text-brand-green transition-colors">Get Trained</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brand-green transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-brand-textGray">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Stay updated on neuroscience-based training and tools.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
                required
              />
              <Button type="submit" className="bg-brand-green hover:bg-opacity-90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} aaiena.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
