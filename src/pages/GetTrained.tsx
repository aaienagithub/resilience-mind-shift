
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Link } from "react-router-dom";
import { Brain, Check } from "lucide-react";

const GetTrained = () => {
  const certificationBenefits = [
    "Complete neuroscience-backed resilience training methodology",
    "Practical tools and exercises to use with clients immediately",
    "Certification as an official Aaiena practitioner",
    "Marketing materials to promote your new expertise",
    "Access to the Aaiena practitioner community",
    "Ongoing professional development and advanced training"
  ];

  const certificationOptions = [
    {
      title: "Basic Certification",
      description: "For individuals seeking to enhance their personal resilience or add basic tools to their professional toolkit.",
      features: [
        "Self-paced online learning",
        "Core resilience techniques",
        "Basic practitioner certificate",
        "Digital resource library"
      ],
      cta: "Learn More"
    },
    {
      title: "Professional Certification",
      description: "Comprehensive training for therapists, coaches, and wellness professionals who want to integrate Aaiena fully into their practice.",
      features: [
        "Guided online learning with live sessions",
        "Advanced intervention techniques",
        "Professional practitioner certificate",
        "Client resources and materials",
        "Case consultation sessions"
      ],
      cta: "Learn More",
      highlighted: true
    },
    {
      title: "Organizational Training",
      description: "For HR professionals, managers, and corporate wellness specialists seeking to bring resilience training in-house.",
      features: [
        "Custom training programs",
        "Train-the-trainer options",
        "Organizational implementation support",
        "Measurement and evaluation tools"
      ],
      cta: "Learn More"
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="Get Certified. Make an Impact."
        subtitle="Become an Aaiena-certified practitioner and bring transformative tools to your practice or organization."
        primaryCTA="Book a Call"
        primaryLink="/contact"
        secondaryCTA="Get Started"
        secondaryLink="/get-trained"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center p-2 bg-brand-softBlue rounded-full mb-4">
                <Brain size={24} className="text-brand-blue" />
              </div>
              <h2 className="section-title">Why Get Certified?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Aaiena certification equips you with a unique set of neuroscience-based tools to transform how you work with clients or colleagues. Our comprehensive training program combines cutting-edge brain science with practical application.
              </p>
              
              <div className="bg-brand-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-darkText">Certification Benefits:</h3>
                <ul className="space-y-3">
                  {certificationBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-1/2">
              <Card className="overflow-hidden h-full">
                <img 
                  src="placeholder.svg" 
                  alt="Aaiena training session" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Certification Overview</h3>
                  <p className="text-gray-600 mb-4">
                    Our certification program combines online learning, live practice sessions, and ongoing support to ensure you master both the theory and practical application of Aaiena's resilience methodology.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Whether you're a therapist, coach, HR professional, or wellness practitioner, our program adapts to your specific context and client needs.
                  </p>
                  <Button asChild className="bg-brand-blue hover:bg-opacity-90">
                    <Link to="/contact">Request Syllabus</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Certification Options</h2>
            <p className="section-subtitle mx-auto">
              Choose the certification path that best fits your professional goals and practice needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certificationOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden h-full ${option.highlighted ? 'ring-2 ring-brand-blue' : ''}`}
              >
                <div className={`p-6 ${option.highlighted ? 'bg-brand-blue text-white' : 'bg-white'}`}>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className={`mb-4 ${option.highlighted ? 'text-white text-opacity-90' : 'text-gray-600'}`}>
                    {option.description}
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <h4 className="font-semibold mb-3 text-brand-darkText">Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className={option.highlighted ? 'bg-brand-coral w-full' : 'bg-brand-blue w-full'}
                  >
                    <Link to="/contact">{option.cta}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToAction 
        title="Start Your Certification Journey"
        subtitle="Join our community of practitioners bringing neuroscience-backed resilience training to clients worldwide."
        primaryButtonText="Book a Call"
        primaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default GetTrained;
