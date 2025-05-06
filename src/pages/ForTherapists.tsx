
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const ForTherapists = () => {
  const benefits = [
    "Enhanced client outcomes through neuroscience-backed techniques",
    "Practical tools that clients can use between sessions",
    "Specialized training in nervous system regulation",
    "Resources to help clients manage emotional reactivity",
    "Integration with existing therapeutic modalities",
    "Community of practitioners for ongoing support"
  ];

  return (
    <Layout>
      <HeroSection 
        title="Empower Your Clients with Neuroscience"
        subtitle="Aaiena equips therapists with the tools to teach clients how to self-regulate and build lasting resilience — in and outside the therapy room."
        primaryCTA="Get Certified"
        primaryLink="/get-trained"
        secondaryCTA="Book a Call"
        secondaryLink="/contact"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="section-title">Transform Your Practice</h2>
              <p className="text-lg text-gray-600 mb-8">
                Integrate cutting-edge neuroscience into your therapeutic toolkit. Aaiena's 
                methodology complements your existing approach, whether you practice CBT, 
                psychodynamic therapy, somatic experiencing, or other modalities.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our certification program gives you practical, evidence-based techniques 
                that you can start using with clients immediately, helping them build 
                emotional resilience both within and between sessions.
              </p>
              
              <div className="bg-brand-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-darkText">What You'll Gain:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
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
                  alt="Therapist working with client" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Client Success Story</h3>
                  <p className="text-gray-600 mb-4">
                    "After incorporating Aaiena's techniques into my practice, I've seen clients make breakthroughs 
                    in weeks that would have previously taken months. The neuroscience-based approach gives clients 
                    a framework for understanding their reactions and practical tools to change them."
                  </p>
                  <p className="font-medium text-brand-darkText">— Dr. Rebecca Torres, Clinical Psychologist</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works For Therapists</h2>
            <p className="section-subtitle mx-auto">
              Our program is designed to integrate seamlessly with your existing practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white h-full">
              <div className="bg-brand-softBlue h-12 w-12 flex items-center justify-center rounded-full mb-4">
                <span className="text-brand-blue font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Get Certified</h3>
              <p className="text-gray-600">
                Complete our comprehensive training program to master the neuroscience of resilience and practical techniques.
              </p>
            </Card>
            
            <Card className="p-6 bg-white h-full">
              <div className="bg-brand-softBlue h-12 w-12 flex items-center justify-center rounded-full mb-4">
                <span className="text-brand-blue font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Integrate Tools</h3>
              <p className="text-gray-600">
                Begin using Aaiena's techniques alongside your existing therapeutic approaches to enhance client outcomes.
              </p>
            </Card>
            
            <Card className="p-6 bg-white h-full">
              <div className="bg-brand-softBlue h-12 w-12 flex items-center justify-center rounded-full mb-4">
                <span className="text-brand-blue font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Transform Results</h3>
              <p className="text-gray-600">
                See improved client outcomes and build a reputation as a provider of cutting-edge, effective therapeutic services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Join Our Community of Forward-Thinking Therapists"
        subtitle="Take your practice to the next level with neuroscience-backed resilience training."
        primaryButtonText="Get Certified"
        primaryButtonLink="/get-trained"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default ForTherapists;
