
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. Dr. Derese will respond shortly.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="animate-in">
      <PageHeader
        title="Contact"
        description="Get in touch with Dr. Solomon Assefa Derese for research collaborations, speaking engagements, or general inquiries"
      />
      
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-sage-700 mt-0.5 mr-3" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:derese@ukzn.ac.za" className="text-sm text-sage-700 hover:underline">
                          derese@ukzn.ac.za
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-sage-700 mt-0.5 mr-3" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:+27123456789" className="text-sm text-sage-700 hover:underline">
                          +27 12 345 6789
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-sage-700 mt-0.5 mr-3" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-sm text-muted-foreground">
                          School of Agricultural, Earth and Environmental Sciences<br />
                          University of KwaZulu-Natal<br />
                          Pietermaritzburg Campus<br />
                          Private Bag X01, Scottsville 3209<br />
                          South Africa
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-sage-700 mt-0.5 mr-3" />
                      <div>
                        <div className="font-medium">YouTube Channel</div>
                        <a href="#" className="text-sm text-sage-700 hover:underline">
                          Let's Learn Agriculture Together
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday - Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    Please email to schedule an appointment in advance.
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Message subject"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={6}
                        required
                      />
                    </div>
                    
                    <div>
                      <Button type="submit" className="bg-sage-700 hover:bg-sage-800">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Research Collaboration</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Derese is open to research collaborations in the following areas:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Plant breeding for climate resilience and drought tolerance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Sustainable agricultural systems for smallholder farmers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Conservation and utilization of crop genetic resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Participatory plant breeding and variety selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Agricultural education and knowledge dissemination</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Please include details about potential collaboration opportunities in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
