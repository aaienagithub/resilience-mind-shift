
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import CallToAction from "@/components/CallToAction";
import { Check } from "lucide-react";

const ForOrganizations = () => {
  const benefits = [
    "Reduced employee burnout and stress-related absences",
    "Improved team communication and conflict resolution",
    "Enhanced focus, creativity, and problem-solving",
    "Stronger employee engagement and retention",
    "Measurable improvements in workplace well-being",
    "Greater organizational resilience during change"
  ];

  return (
    <Layout>
      <HeroSection 
        title="Mental Wellness That Works at Scale"
        subtitle="Support your teams with resilience training proven to reduce burnout, improve focus, and enhance psychological safety in high-performance environments."
        primaryCTA="Book a Consultation"
        primaryLink="/contact"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Resilient Teams Perform Better</h2>
            <p className="section-subtitle mx-auto">
              In today's high-pressure work environments, mental wellness isn't just about employee satisfaction—it's a critical business advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-4 text-brand-darkText">The Challenge</h3>
              <p className="text-gray-600">
                Organizations face unprecedented levels of employee burnout, disengagement, and turnover. Traditional wellness programs often fail to address the neurobiological roots of stress and resilience.
              </p>
            </Card>
            
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-4 text-brand-darkText">Our Approach</h3>
              <p className="text-gray-600">
                Aaiena brings neuroscience-backed resilience training to your teams through scalable workshops, digital tools, and ongoing support systems designed for the modern workplace.
              </p>
            </Card>
            
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-4 text-brand-darkText">The Results</h3>
              <p className="text-gray-600">
                Organizations implementing Aaiena's resilience program report significant improvements in employee well-being metrics, reduced turnover, and enhanced team performance under pressure.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title">Measurable Business Impact</h2>
              <p className="text-lg text-gray-600 mb-8">
                Aaiena's corporate resilience program delivers tangible results that affect your bottom line. Our approach combines neuroscience education, practical skills training, and sustainable implementation support.
              </p>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-brand-darkText">Program Benefits:</h3>
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
              <Card className="overflow-hidden">
                <img 
                  src="placeholder.svg" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">How We Work With Organizations</h2>
            <p className="section-subtitle mx-auto">
              Our flexible implementation models are designed to integrate with your existing culture and wellness initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-brand-softBlue h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Assessment & Strategy</h3>
              <p className="text-gray-700">
                We begin with a comprehensive assessment of your organization's current resilience profile and develop a targeted implementation strategy.
              </p>
            </Card>
            
            <Card className="p-6 bg-brand-softBlue h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Training & Integration</h3>
              <p className="text-gray-700">
                Our expert facilitators deliver engaging workshops and digital learning experiences tailored to your team's specific challenges.
              </p>
            </Card>
            
            <Card className="p-6 bg-brand-softBlue h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Measurement & Support</h3>
              <p className="text-gray-700">
                We provide ongoing support and measurement tools to track progress and ensure sustainable improvements in team resilience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Build a More Resilient Organization"
        subtitle="Schedule a consultation to learn how our neuroscience-backed approach can transform your team's performance and well-being."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default ForOrganizations;
