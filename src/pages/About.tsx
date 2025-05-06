
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import CallToAction from "@/components/CallToAction";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Founder & Chief Science Officer",
      bio: "Neuroscientist with 15 years of research experience in brain plasticity and emotional regulation. Dr. Chen founded Aaiena to bridge the gap between lab research and real-world application.",
      image: "placeholder.svg"
    },
    {
      name: "Michael Rodriguez",
      title: "Clinical Director",
      bio: "Licensed psychologist specializing in trauma-informed care and resilience training. Michael oversees the clinical application and training programs at Aaiena.",
      image: "placeholder.svg"
    },
    {
      name: "Priya Sharma",
      title: "Head of Organizational Programs",
      bio: "With a background in organizational psychology and corporate wellness, Priya develops and implements Aaiena's solutions for workplace resilience and team performance.",
      image: "placeholder.svg"
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="Founded by Experts. Driven by Science."
        subtitle="Aaiena was developed by leading neuroscientists and mental health experts to bridge the gap between theory and real-world transformation."
        primaryCTA="Our Approach"
        primaryLink="/science"
        secondaryCTA="Contact Us"
        secondaryLink="/contact"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Aaiena was born from a simple observation: despite tremendous advances in neuroscience, there remained a significant gap between laboratory research and practical tools for building emotional resilience in everyday life.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of neuroscientists, psychologists, and wellness experts set out to create a methodology that translates cutting-edge brain science into accessible techniques that create measurable improvements in emotional well-being.
              </p>
              <p className="text-lg text-gray-600">
                Today, Aaiena's programs serve therapists, organizations, and individuals worldwide, providing science-backed tools that create lasting change in how people respond to life's challenges.
              </p>
            </div>

            <div className="md:w-1/2">
              <Card className="overflow-hidden">
                <img 
                  src="placeholder.svg" 
                  alt="Aaiena team" 
                  className="w-full h-64 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle mx-auto">
              To transform how people respond to life's challenges by making neuroscience-backed resilience training accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Science-First Approach</h3>
              <p className="text-gray-600">
                We believe in the power of neuroscience to transform mental well-being. Every technique we teach is grounded in rigorous research and evidence.
              </p>
            </Card>
            
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Accessible to All</h3>
              <p className="text-gray-600">
                We're committed to making resilience training accessible across different contexts—from therapy rooms to corporate boardrooms to everyday life.
              </p>
            </Card>
            
            <Card className="p-6 bg-white h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Measurable Impact</h3>
              <p className="text-gray-600">
                We prioritize techniques that create measurable, sustainable improvements in emotional regulation and resilience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              Our interdisciplinary team brings together expertise in neuroscience, psychology, and organizational development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-brand-darkText">{member.name}</h3>
                  <p className="text-brand-blue font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToAction 
        title="Join Us in Transforming Mental Well-Being"
        subtitle="Learn how our science-backed approach can help you, your clients, or your organization."
        primaryButtonText="Get Started"
        primaryButtonLink="/get-trained"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default About;
