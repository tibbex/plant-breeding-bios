
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="relative bg-sage-50 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="mb-6 inline-block rounded-md bg-sage-100 px-3 py-1 text-sm font-medium text-sage-800">
              Plant Breeding Scientist
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-sage-900 sm:text-5xl md:text-6xl">
              Dr. Solomon Assefa Derese
            </h1>
            <p className="mb-8 text-xl text-gray-600 max-w-md">
              Lecturer at Woldia University, 
              specializing in sustainable agriculture and drought-resistant crop breeding.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-sage-700 hover:bg-sage-800">
                <Link to="/research">Research Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-sage-700 text-sage-700 hover:bg-sage-50">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="relative h-80 w-80 rounded-full bg-gradient-to-br from-sage-300 to-wheat-200 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-sage-100/40 backdrop-blur-sm"></div>
              <span className="relative text-2xl font-semibold text-sage-800">Plant Breeding &<br/>Sustainable Agriculture</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-sage-800">Areas of Expertise</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. Derese's work spans multiple disciplines within agricultural science and plant breeding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-sage-700 mb-3">Sorghum Breeding</h3>
              <p className="text-gray-600">
                Developing drought-resistant and high-yielding sorghum varieties adapted to local conditions and farmer preferences.
              </p>
            </div>
            
            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-sage-700 mb-3">Agro-morphological Characterization</h3>
              <p className="text-gray-600">
                Identifying and selecting crop genotypes with desirable traits for both rainfed and irrigated agricultural systems.
              </p>
            </div>
            
            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-sage-700 mb-3">Sustainable Agriculture</h3>
              <p className="text-gray-600">
                Promoting farming practices that enhance food security while preserving environmental resources for future generations.
              </p>
            </div>
            
            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-sage-700 mb-3">Climate Resilience</h3>
              <p className="text-gray-600">
                Researching and developing crop varieties that can withstand climate variability and extreme weather conditions.
              </p>
            </div>
            
            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-sage-700 mb-3">Agricultural Education</h3>
              <p className="text-gray-600">
                Training the next generation of plant breeders and agricultural scientists through university teaching and outreach.
              </p>
            </div>
            
            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-sage-700 mb-3">International Collaboration</h3>
              <p className="text-gray-600">
                Working with global research institutions to address challenges in agricultural productivity and food security.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Work Section */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-sage-800">Recent Work</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Highlighting Dr. Derese's significant contributions to agricultural research and education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sage-700 font-medium mb-2">Research Publication</div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">
                Agro-morphological Characterization and Selection of Sorghum Landraces
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive study identifying farmer-preferred, medium-maturing genotypes suitable for both rainfed and irrigated conditions.
              </p>
              <Button asChild variant="outline" className="text-sage-700 border-sage-700 hover:bg-sage-50">
                <Link to="/research">View Research</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sage-700 font-medium mb-2">Educational Outreach</div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">
                "Let's Learn Agriculture Together" YouTube Channel
              </h3>
              <p className="text-gray-600 mb-4">
                Educational platform sharing insights on plant breeding, sustainable farming practices, and Ethiopia's agricultural landscape.
              </p>
              <Button asChild variant="outline" className="text-sage-700 border-sage-700 hover:bg-sage-50">
                <Link to="/teaching">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage-700 to-sage-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Advancing Agricultural Science Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or agricultural education? Get in touch with Dr. Derese.
          </p>
          <Button asChild size="lg" className="bg-white text-sage-800 hover:bg-sage-100">
            <Link to="/contact">Contact Dr. Derese</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
