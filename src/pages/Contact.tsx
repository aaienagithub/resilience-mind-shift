
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-darkText">Let's Connect</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to learn more about our programs or to schedule a consultation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <Card className="p-6 md:p-8 bg-white">
                <h2 className="text-2xl font-bold mb-6 text-brand-darkText">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-brand-blue hover:bg-opacity-90 w-full sm:w-auto px-8 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
            
            <div className="lg:w-1/3">
              <Card className="p-6 md:p-8 bg-brand-blue text-white h-full">
                <h2 className="text-2xl font-bold mb-6">Book a Call</h2>
                <p className="mb-6">
                  Schedule a call with our team to discuss how Aaiena can help you, your practice, or your organization.
                </p>
                
                <div className="mb-8">
                  <h3 className="font-semibold mb-2 text-lg">Available for:</h3>
                  <ul className="space-y-2">
                    <li>• Individual consultations</li>
                    <li>• Practitioner certification inquiries</li>
                    <li>• Organizational program discussions</li>
                    <li>• Partnership opportunities</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-8">
                  <p className="text-white text-opacity-90">
                    Our calendar system would integrate here, allowing visitors to select a date and time for a call.
                  </p>
                </div>
                
                <Button className="w-full bg-brand-coral hover:bg-opacity-90">
                  Book Your Call
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Email</h3>
              <p className="text-gray-600">info@aaiena.ai</p>
            </Card>
            
            <Card className="p-6 text-center h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </Card>
            
            <Card className="p-6 text-center h-full">
              <h3 className="text-xl font-semibold mb-3 text-brand-darkText">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-brand-blue">LinkedIn</a>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Twitter</a>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Instagram</a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
