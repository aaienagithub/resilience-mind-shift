
import { Brain, Calendar, Check } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BenefitCard from "@/components/BenefitCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  const benefits = [
    {
      icon: <Brain size={32} />,
      title: "Regulate emotions more effectively",
      description: "Learn science-based techniques to manage your emotional responses in any situation."
    },
    {
      icon: <Check size={32} />,
      title: "Enhance neural flexibility",
      description: "Build new mental pathways that support healthier responses to stress and challenges."
    },
    {
      icon: <Calendar size={32} />,
      title: "Reduce stress reactivity",
      description: "Develop skills to break the cycle of automatic stress responses and build sustainable calm."
    },
    {
      icon: <Check size={32} />,
      title: "Improve therapeutic outcomes",
      description: "For practitioners, gain tools to help your clients achieve breakthrough results faster."
    }
  ];

  const testimonials = [
    {
      quote: "Aaiena helped my clients transform emotional reactivity into grounded resilience. The science is real, and the results speak for themselves.",
      name: "Dr. Priya Anand",
      title: "Clinical Psychologist"
    },
    {
      quote: "Implementing Aaiena's program in our organization has led to measurable improvements in employee well-being and productivity.",
      name: "Michael Chen",
      title: "HR Director"
    },
    {
      quote: "The neuroscience-backed approach makes all the difference. I've tried many resilience programs, but this is the first one that created lasting change.",
      name: "Sarah Johnson",
      title: "Program Participant"
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="Rewire Your Mind. Reclaim Your Life."
        subtitle="Aaiena is the next-gen resilience training program powered by neuroscience and tailored for modern mental health."
        primaryCTA="Book a Call"
        primaryLink="/contact"
        secondaryCTA="Explore the Program"
        secondaryLink="/science"
      />

      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Science Meets Transformation</h2>
            <p className="section-subtitle mx-auto">
              Our evidence-based methods train the brain to respond with resilience. 
              Whether you're a therapist, healthcare provider, or just seeking personal growth, 
              Aaiena gives you tools to shift patterns, restore balance, and unlock potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Community Says</h2>
            <p className="section-subtitle mx-auto">
              See how Aaiena has transformed lives and practices with our science-backed approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Transform the Way You Heal?"
        subtitle="Join our community of practitioners and individuals building emotional resilience through neuroscience."
        primaryButtonText="Get Certified"
        primaryButtonLink="/get-trained"
        secondaryButtonText="Book a Call"
        secondaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default Index;
