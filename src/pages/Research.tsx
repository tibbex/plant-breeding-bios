
import PageHeader from "@/components/PageHeader";
import ResearchCard from "@/components/ResearchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Research = () => {
  return (
    <div className="animate-in">
      <PageHeader
        title="Research"
        description="Dr. Derese's scholarly publications and research contributions to plant breeding and sustainable agriculture"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <Tabs defaultValue="publications" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="projects">Research Projects</TabsTrigger>
            </TabsList>
            
            <TabsContent value="publications" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResearchCard
                  title="Agro-morphological Characterization and Selection of Sorghum Landraces"
                  year="2018"
                  journal="Journal of Plant Breeding and Crop Science"
                  description="Identifying farmer-preferred, medium-maturing sorghum genotypes suitable for both rainfed and irrigated conditions through comprehensive characterization of landraces."
                />
                
                <ResearchCard
                  title="Drought Tolerance and Yield Stability in Sorghum Varieties"
                  year="2017"
                  journal="African Journal of Agricultural Research"
                  description="Evaluation of drought tolerance mechanisms and yield stability in various sorghum varieties under water-limited conditions in Ethiopia."
                />
                
                <ResearchCard
                  title="Participatory Variety Selection of Sorghum in Ethiopian Highlands"
                  year="2016"
                  journal="Ethiopian Journal of Agricultural Sciences"
                  description="Engaging farmers in the selection process of sorghum varieties to ensure adoption of new cultivars that meet local preferences and growing conditions."
                />
                
                <ResearchCard
                  title="Climate Change Adaptation Strategies for Smallholder Farmers"
                  year="2019"
                  journal="Climate and Development"
                  description="Analysis of effective adaptation strategies for smallholder farmers in Ethiopia to mitigate the impacts of climate change on agricultural productivity."
                />
                
                <ResearchCard
                  title="Genetic Diversity Assessment of Sorghum Germplasm in Eastern Africa"
                  year="2017"
                  journal="Genetic Resources and Crop Evolution"
                  description="Characterization of genetic diversity in sorghum germplasm collections from Eastern Africa to identify valuable traits for crop improvement programs."
                />
                
                <ResearchCard
                  title="Integrated Soil Fertility Management for Sustainable Sorghum Production"
                  year="2020"
                  journal="Sustainability"
                  description="Investigating the effects of integrated soil fertility management practices on sorghum yield and soil health in semi-arid regions of Ethiopia."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="projects" className="mt-4">
              <div className="space-y-8">
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Drought-Resistant Sorghum Varieties Development</h3>
                  <div className="text-sm text-muted-foreground mb-4">2016-2020 • In collaboration with ICRISAT</div>
                  <p className="text-gray-700">
                    A comprehensive breeding program focused on developing sorghum varieties with enhanced drought resistance while maintaining high yield potential. 
                    The project included field trials across multiple agro-ecological zones in Ethiopia, combining traditional breeding methods with modern selection techniques.
                  </p>
                </div>
                
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Climate-Smart Agriculture for Smallholder Farmers</h3>
                  <div className="text-sm text-muted-foreground mb-4">2018-Present • Funded by the African Development Bank</div>
                  <p className="text-gray-700">
                    This ongoing project aims to develop and implement climate-smart agricultural practices suitable for smallholder farmers in Ethiopia. 
                    The research includes testing various cropping systems, water management techniques, and improved crop varieties to enhance resilience 
                    to climate variability while improving productivity and sustainability.
                  </p>
                </div>
                
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Conservation and Utilization of Sorghum Landraces</h3>
                  <div className="text-sm text-muted-foreground mb-4">2015-2019 • In partnership with the Ethiopian Biodiversity Institute</div>
                  <p className="text-gray-700">
                    A project focused on the collection, characterization, and conservation of indigenous sorghum landraces from different regions of Ethiopia. 
                    The research identified valuable traits in these genetic resources and incorporated them into breeding programs for improved varieties that 
                    combine traditional adaptation with enhanced productivity.
                  </p>
                </div>
                
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Participatory Variety Development for Local Farming Systems</h3>
                  <div className="text-sm text-muted-foreground mb-4">2017-2021 • Supported by the Gates Foundation</div>
                  <p className="text-gray-700">
                    This project employed a farmer-participatory approach to crop variety development, involving farmers from the early stages of selection to final 
                    variety release. The research demonstrated increased adoption rates of improved varieties when farmers' preferences and local growing conditions 
                    were prioritized in the breeding process.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-10 bg-sage-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-sage-800 mb-6">Research Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-sage-700 mb-2">15+</div>
              <p className="text-gray-700">Peer-reviewed publications in international journals</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-sage-700 mb-2">5</div>
              <p className="text-gray-700">Improved sorghum varieties released for farmer use</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-sage-700 mb-2">1000+</div>
              <p className="text-gray-700">Farmers benefiting from improved agricultural practices</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-sage-800 mb-6">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-sage-200 rounded-md p-4 hover:bg-sage-50 transition-colors">
              <h3 className="font-medium text-sage-700">Crop Improvement</h3>
              <p className="text-sm text-gray-600 mt-2">Developing improved varieties with enhanced yield, quality, and stress tolerance</p>
            </div>
            
            <div className="border border-sage-200 rounded-md p-4 hover:bg-sage-50 transition-colors">
              <h3 className="font-medium text-sage-700">Genetic Diversity</h3>
              <p className="text-sm text-gray-600 mt-2">Characterizing and conserving genetic resources for future crop improvement</p>
            </div>
            
            <div className="border border-sage-200 rounded-md p-4 hover:bg-sage-50 transition-colors">
              <h3 className="font-medium text-sage-700">Drought Resistance</h3>
              <p className="text-sm text-gray-600 mt-2">Understanding mechanisms of drought tolerance in crops for water-limited environments</p>
            </div>
            
            <div className="border border-sage-200 rounded-md p-4 hover:bg-sage-50 transition-colors">
              <h3 className="font-medium text-sage-700">Sustainable Agriculture</h3>
              <p className="text-sm text-gray-600 mt-2">Developing farming systems that are productive, profitable, and environmentally sound</p>
            </div>
            
            <div className="border border-sage-200 rounded-md p-4 hover:bg-sage-50 transition-colors">
              <h3 className="font-medium text-sage-700">Participatory Research</h3>
              <p className="text-sm text-gray-600 mt-2">Engaging farmers in the research process to ensure relevance and adoption</p>
            </div>
            
            <div className="border border-sage-200 rounded-md p-4 hover:bg-sage-50 transition-colors">
              <h3 className="font-medium text-sage-700">Climate Adaptation</h3>
              <p className="text-sm text-gray-600 mt-2">Developing strategies to help agricultural systems adapt to climate change</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
