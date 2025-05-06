
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const Science = () => {
  const scienceSections = [
    {
      title: "The Polyvagal Theory",
      description: "Understanding how our autonomic nervous system responds to stress and safety is key to building resilience. The polyvagal theory explains our three-part response system and how we can learn to regulate it.",
      image: "placeholder.svg"
    },
    {
      title: "Neuroplasticity & Resilience",
      description: "Our brains can change throughout our lives. Through targeted exercises, we can build new neural pathways that support healthier emotional responses and greater psychological flexibility.",
      image: "placeholder.svg"
    },
    {
      title: "Vagus Nerve Regulation",
      description: "The vagus nerve is central to our parasympathetic nervous system - the part that helps us calm down and restore. Learn techniques to tone this critical pathway for better stress management.",
      image: "placeholder.svg"
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="The Brain-First Approach to Healing"
        subtitle="Learn the neuroscience that powers Aaiena's transformative resilience training program."
        primaryCTA="Book a Call"
        primaryLink="/contact"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center p-3 bg-brand-softBlue rounded-full mb-4">
              <Brain size={32} className="text-brand-blue" />
            </div>
            <h2 className="section-title">How Neuroscience Powers Resilience</h2>
            <p className="section-subtitle mx-auto">
              Aaiena's methodology is grounded in cutting-edge brain science, translating complex neurological 
              principles into practical techniques you can apply immediately.
            </p>
          </div>

          <div className="space-y-16">
            {scienceSections.map((section, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-darkText">{section.title}</h3>
                  <p className="text-gray-600 text-lg">{section.description}</p>
                </div>
                <div className="md:w-1/2">
                  <Card className="overflow-hidden">
                    <img 
                      src={section.image} 
                      alt={section.title} 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Research Foundation</h2>
            <p className="section-subtitle mx-auto">
              Aaiena's methodology is built on decades of research in neuroscience, trauma psychology, and resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Evidence-Based Practice</h3>
              <p className="text-gray-600">
                Our techniques are drawn from peer-reviewed studies and clinical trials, ensuring that every exercise has demonstrated effectiveness.
              </p>
            </Card>
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Measurable Results</h3>
              <p className="text-gray-600">
                Aaiena's protocols have been tested and refined to provide consistent, measurable improvements in psychological flexibility and emotional regulation.
              </p>
            </Card>
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Ongoing Innovation</h3>
              <p className="text-gray-600">
                Our research team continuously integrates new findings from neuroscience and clinical psychology to refine our resilience training approach.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Experience the Science in Action"
        subtitle="Book a call to learn how our neuroscience-backed approach can help you or your clients build lasting resilience."
        primaryButtonText="Book a Call"
        primaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default Science;
