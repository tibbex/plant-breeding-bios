
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="animate-in">
      <PageHeader
        title="Contact"
        description="Contact information for Dr. Solomon Assefa Derese for research collaborations, speaking engagements, or general inquiries"
      />
      
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-sage-700 mt-0.5 mr-3" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:derese@wldu.edu.et" className="text-sm text-sage-700 hover:underline">
                          derese@wldu.edu.et
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
                          Department of Plant Sciences<br />
                          Woldia University<br />
                          Woldia, Ethiopia
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
            
            <div>
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
                Please reach out via email for potential collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
