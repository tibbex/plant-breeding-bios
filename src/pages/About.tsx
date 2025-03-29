
import PageHeader from "@/components/PageHeader";

const About = () => {
  return (
    <div className="animate-in">
      <PageHeader 
        title="About Dr. Solomon Assefa Derese" 
        description="Lecturer | Plant Breeding Scientist | Agricultural Educator"
      />
      
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-sage-800 mb-4">Biography</h2>
                <p>
                  Dr. Solomon Assefa Derese is a dedicated Lecturer specializing in Plant Breeding at Woldia University in Ethiopia. 
                  He earned his Ph.D. in Plant Breeding from the University of KwaZulu-Natal (UKZN) in 2018, graduating with distinction. His doctoral research focused on the 
                  agro-morphological characterization and selection of sorghum landraces, aiming to identify farmer-preferred, medium-maturing 
                  genotypes suitable for both rainfed and irrigated conditions.
                </p>
                
                <h3 className="text-xl font-semibold text-sage-800 mt-8 mb-4">Professional Experience</h3>
                <p>
                  Dr. Derese currently serves as a Lecturer at Woldia University in Ethiopia, where he contributes to agricultural development through research, teaching, and mentorship.
                  Previously, he worked as a researcher and breeder at the Sirinka Agricultural Research Center in Ethiopia, 
                  concentrating on developing drought-resistant and high-yielding crop varieties to enhance food security in the region. 
                </p>
                
                <h3 className="text-xl font-semibold text-sage-800 mt-8 mb-4">Research Contributions</h3>
                <p>
                  Dr. Derese has authored numerous publications in reputable journals, reflecting his commitment to advancing plant breeding and sustainable agriculture. 
                  His research encompasses genotype selection, yield optimization in sorghum, and the impact of drought on sorghum production. Notably, his work on the 
                  agro-morphological characterization of sorghum landraces has provided valuable insights into selecting genotypes that meet farmers' preferences under 
                  varying environmental conditions.
                </p>
                
                <h3 className="text-xl font-semibold text-sage-800 mt-8 mb-4">International Collaborations</h3>
                <p>
                  Dr. Derese actively collaborates with international agricultural research institutions, such as the International Crops Research Institute for the 
                  Semi-Arid Tropics (ICRISAT). Through these partnerships, he contributes to the development and adaptation of crop varieties like sorghum, chickpea, 
                  and finger millet in Ethiopia, enhancing resilience to climate variability and improving agricultural productivity.
                </p>
                
                <h3 className="text-xl font-semibold text-sage-800 mt-8 mb-4">Educational Outreach</h3>
                <p>
                  Beyond his research and teaching responsibilities, Dr. Derese is dedicated to disseminating agricultural knowledge to a broader audience. He manages 
                  a YouTube channel titled "Let's Learn Agriculture Together," where he shares insights on plant breeding, sustainable farming practices, and Ethiopia's 
                  agricultural landscape. This platform serves as an educational resource for farmers, students, and professionals in the agricultural sector.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">Ph.D. in Plant Breeding</div>
                    <div className="text-muted-foreground">University of KwaZulu-Natal, 2018</div>
                    <div className="text-sm text-muted-foreground">Graduated with Distinction</div>
                  </li>
                  <li>
                    <div className="font-medium">M.Sc. in Agriculture</div>
                    <div className="text-muted-foreground">Haramaya University, Ethiopia</div>
                  </li>
                  <li>
                    <div className="font-medium">B.Sc. in Plant Sciences</div>
                    <div className="text-muted-foreground">Haramaya University, Ethiopia</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-sage-50 p-6 rounded-lg shadow-sm mt-6">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Affiliations</h3>
                <ul className="space-y-3">
                  <li>
                    <div className="font-medium">Woldia University, Ethiopia</div>
                    <div className="text-sm text-muted-foreground">Lecturer, Department of Plant Sciences</div>
                  </li>
                  <li>
                    <div className="font-medium">Sirinka Agricultural Research Center</div>
                    <div className="text-sm text-muted-foreground">Former Researcher and Plant Breeder</div>
                  </li>
                  <li>
                    <div className="font-medium">International Crops Research Institute for the Semi-Arid Tropics (ICRISAT)</div>
                    <div className="text-sm text-muted-foreground">Research Collaborator</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-sage-50 p-6 rounded-lg shadow-sm mt-6">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Research Focus</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-sage-200 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Sorghum landraces characterization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-200 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Drought-resistant crop varieties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-200 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Yield optimization in sorghum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-200 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Climate-resilient agriculture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-200 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Farmer-preferred crop varieties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-sage-200 h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>Sustainable farming practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
