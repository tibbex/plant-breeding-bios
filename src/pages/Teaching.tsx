
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Teaching = () => {
  return (
    <div className="animate-in">
      <PageHeader
        title="Teaching & Educational Outreach"
        description="Dr. Derese's academic teaching and broader educational initiatives in agricultural science"
      />
      
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <Tabs defaultValue="university" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="university">University Courses</TabsTrigger>
              <TabsTrigger value="outreach">Public Outreach</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            </TabsList>
            
            <TabsContent value="university" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Introduction to Plant Breeding</CardTitle>
                    <CardDescription>Undergraduate Course • UKZN</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      A comprehensive introduction to the principles and practices of plant breeding, covering genetic basis of 
                      plant breeding, breeding methods for self and cross-pollinated crops, and an overview of modern breeding technologies.
                    </p>
                    <div className="mt-4">
                      <div className="text-sm font-medium">Topics covered:</div>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Genetic principles in plant breeding</li>
                        <li>• Selection methods and breeding schemes</li>
                        <li>• Hybridization techniques</li>
                        <li>• Mutation breeding</li>
                        <li>• Introduction to molecular breeding</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Crop Improvement</CardTitle>
                    <CardDescription>Graduate Course • UKZN</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      An advanced course focusing on modern approaches to crop improvement, including molecular breeding, 
                      genomic selection, and biotechnological applications in plant breeding for stress tolerance and quality traits.
                    </p>
                    <div className="mt-4">
                      <div className="text-sm font-medium">Topics covered:</div>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Quantitative genetics in plant breeding</li>
                        <li>• Molecular markers and their applications</li>
                        <li>• Genomic selection strategies</li>
                        <li>• Breeding for biotic and abiotic stress resistance</li>
                        <li>• Quality trait improvement in crops</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainable Agricultural Systems</CardTitle>
                    <CardDescription>Undergraduate/Graduate Course • UKZN</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      This course examines agricultural systems from a sustainability perspective, focusing on the integration 
                      of ecological principles, economic viability, and social responsibility in modern farming practices.
                    </p>
                    <div className="mt-4">
                      <div className="text-sm font-medium">Topics covered:</div>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Principles of sustainable agriculture</li>
                        <li>• Conservation agriculture practices</li>
                        <li>• Integrated soil fertility management</li>
                        <li>• Climate-smart agricultural approaches</li>
                        <li>• Sustainable intensification strategies</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Research Methods in Plant Science</CardTitle>
                    <CardDescription>Graduate Course • UKZN</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      A methodological course designed to equip graduate students with the necessary skills to design, 
                      implement, and analyze research projects in plant breeding and agricultural sciences.
                    </p>
                    <div className="mt-4">
                      <div className="text-sm font-medium">Topics covered:</div>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Experimental design in field trials</li>
                        <li>• Data collection methods and tools</li>
                        <li>• Statistical analysis for plant breeding</li>
                        <li>• Scientific writing and publication</li>
                        <li>• Research ethics and integrity</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="outreach" className="mt-4">
              <div className="space-y-8">
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">"Let's Learn Agriculture Together" YouTube Channel</h3>
                  <p className="text-gray-700 mb-4">
                    Dr. Derese manages an educational YouTube channel where he shares insights on plant breeding, sustainable farming practices, 
                    and Ethiopia's agricultural landscape. This platform serves as an accessible resource for farmers, students, and professionals 
                    in the agricultural sector.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="border-sage-700 text-sage-700 hover:bg-sage-50">
                      <Link to="/contact">Channel Information</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Farmer Training Workshops</h3>
                  <p className="text-gray-700 mb-4">
                    Regular workshops conducted in rural communities of Ethiopia to train farmers on improved agricultural practices, 
                    crop management techniques, and the benefits of adopting improved crop varieties. These hands-on sessions focus on 
                    practical knowledge that farmers can immediately apply to their fields.
                  </p>
                </div>
                
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Agricultural Extension Programs</h3>
                  <p className="text-gray-700 mb-4">
                    Collaborative programs with local agricultural extension services to disseminate research findings and improved 
                    technologies to farming communities. These initiatives bridge the gap between academic research and practical 
                    application in farmers' fields.
                  </p>
                </div>
                
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Public Lectures and Seminars</h3>
                  <p className="text-gray-700 mb-4">
                    Regular public lectures and seminars on topics related to food security, sustainable agriculture, and the role of 
                    plant breeding in addressing agricultural challenges. These events are designed to increase public awareness and 
                    understanding of agricultural issues and innovations.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mentorship" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Graduate Student Supervision</h3>
                  <p className="text-gray-700 mb-6">
                    Dr. Derese supervises master's and doctoral students at UKZN, guiding their research in various aspects of 
                    plant breeding and sustainable agriculture. His mentorship approach emphasizes independent thinking, rigorous 
                    methodology, and practical applications of research.
                  </p>
                  
                  <div className="bg-sage-50 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-sage-700 mb-2">Recent Graduate Theses Supervised</h4>
                    <ul className="space-y-3">
                      <li className="text-sm">
                        <div className="font-medium">Genetic Diversity and Drought Tolerance in Ethiopian Sorghum Landraces</div>
                        <div className="text-muted-foreground">Ph.D. Thesis • 2021</div>
                      </li>
                      <li className="text-sm">
                        <div className="font-medium">Participatory Variety Selection for Enhanced Adoption of Improved Sorghum Varieties</div>
                        <div className="text-muted-foreground">M.Sc. Thesis • 2020</div>
                      </li>
                      <li className="text-sm">
                        <div className="font-medium">Climate Change Adaptation Strategies in Smallholder Farming Systems</div>
                        <div className="text-muted-foreground">Ph.D. Thesis • 2019</div>
                      </li>
                      <li className="text-sm">
                        <div className="font-medium">Yield Stability Analysis of Sorghum Genotypes Across Different Environments</div>
                        <div className="text-muted-foreground">M.Sc. Thesis • 2019</div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Research Mentorship Philosophy</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-sage-300 pl-4">
                      <p className="italic text-gray-700">
                        "I believe in guiding students to develop their own research identity while providing the necessary 
                        structure and support. My goal is to foster independent thinkers who can address real-world agricultural 
                        challenges with innovative yet practical solutions."
                      </p>
                      <div className="mt-2 text-sm text-sage-700">- Dr. Solomon Assefa Derese</div>
                    </div>
                    
                    <div className="bg-sage-50 p-4 rounded-lg">
                      <h4 className="font-medium text-sage-700 mb-2">Mentorship Approach</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                          <span className="text-sm">Balancing guidance with independence to foster critical thinking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                          <span className="text-sm">Emphasizing practical applications of theoretical knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                          <span className="text-sm">Encouraging publication of research findings in reputable journals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                          <span className="text-sm">Promoting engagement with farming communities to understand real needs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-sage-300 h-2 w-2 rounded-full mt-2 mr-2"></span>
                          <span className="text-sm">Supporting participation in international conferences and networking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-10 bg-sage-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-sage-800">Teaching Philosophy</h2>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
              Dr. Derese approaches teaching with a commitment to making agricultural science accessible, 
              relevant, and applicable to real-world challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-sage-700 mb-3">Connecting Theory to Practice</h3>
              <p className="text-gray-700">
                Bridging theoretical concepts with practical applications through field demonstrations, 
                case studies, and hands-on laboratory exercises to enhance understanding and retention.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-sage-700 mb-3">Problem-Based Learning</h3>
              <p className="text-gray-700">
                Engaging students with real agricultural challenges to develop critical thinking, 
                problem-solving abilities, and innovative approaches to addressing complex issues.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-sage-700 mb-3">Inclusive Agricultural Education</h3>
              <p className="text-gray-700">
                Making agricultural knowledge accessible to diverse audiences, from university students 
                to rural farmers, through appropriate communication methods and contextually relevant content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
