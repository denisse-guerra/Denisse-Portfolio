import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import { Globe, Layers, Cpu, Eye, Database, TrendingUp } from 'lucide-react';
import { BiosphereDigitalTwin } from '../../assets/project_icons';

const BiosphereDigitalTwinPage = () => {
  const features = [
    {
      icon: Globe,
      title: 'Complete Environmental Model',
      description: 'High-fidelity 3D reconstruction of the entire Biosphere 2 facility using LiDAR scanning'
    },
    {
      icon: Layers,
      title: 'Point Cloud Management',
      description: 'Efficient processing and rendering of massive geospatial datasets with millions of points'
    },
    {
      icon: Cpu,
      title: 'Real-time Visualization',
      description: 'Interactive exploration of complex environmental data at research-grade performance'
    },
    {
      icon: Eye,
      title: 'Immersive Navigation',
      description: 'VR-enabled walkthrough capabilities allowing researchers to study spatial relationships'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Framework for overlaying sensor data and environmental measurements onto spatial model'
    },
    {
      icon: TrendingUp,
      title: 'Research Impact',
      description: 'Foundation for Biosphere 3 proposal, attracting state-wide media attention'
    }
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={BiosphereDigitalTwin}
        title="Biosphere 2 Digital Twin"
        subtitle="Immersive Spatial Reconstruction of World-Renowned Environmental Research Facility"
        features={features}
      />

      <ProjectOverview
        paragraphs={[
          "The Biosphere 2 Digital Twin project transformed one of the world's most complex environmental research facilities into an explorable virtual environment. Biosphere 2, the massive ecological laboratory housing multiple self-contained biomes, presents unique challenges for spatial documentation—intricate architectural features, dense vegetation, and overlapping environmental systems that traditional documentation methods struggle to capture comprehensively.",
          "This project addressed those challenges through high-resolution LiDAR scanning followed by advanced point cloud processing and optimization. The resulting digital twin enables researchers, educators, and the public to navigate the entire facility in immersive detail, examining spatial relationships and architectural features that are difficult to appreciate through conventional photography or video.",
          "Beyond visualization, the digital twin establishes a foundation for advanced environmental monitoring. By creating a precise spatial baseline, the model enables future integration of real-time sensor data—temperature, humidity, CO2 levels—mapped directly onto the 3D representation, allowing researchers to visualize environmental gradients and ecological patterns that would otherwise require abstract data analysis.",
          "The project's success led directly to the conception and proposal of Biosphere 3, a next-generation facility that would expand on the digital twin concept from inception. The technical framework and visualization approach developed here demonstrated the potential for spatial computing to revolutionize how environmental research facilities are designed, monitored, and studied."
        ]}
      />

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Architecture & Design</h2>
        
        <div className="space-y-6">
          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">LiDAR Data Acquisition</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Comprehensive scanning of the facility captured millions of spatial data points in E57 format, documenting both architectural structures and natural biome features with millimeter-level precision across the entire 3.14-acre enclosed environment.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Point Cloud Optimization</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Massive point cloud datasets were processed using CloudCompare for segmentation, registration, and cleaning, then optimized for real-time rendering through octree data structures and strategic density reduction that preserved visual fidelity while ensuring smooth navigation.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Immersive Rendering Engine</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Unreal Engine 5 with specialized LiDAR point cloud plugins enabled high-performance visualization, utilizing dynamic level-of-detail systems and viewport clipping volumes to maintain interactive frame rates even when displaying millions of data points simultaneously.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Interactive Exploration Interface</h3>
            <p className="text-gray-700 dark:text-gray-300">
              VR-enabled navigation systems allow users to walk through the virtual facility at natural scale, with measurement tools and annotation capabilities that support both public engagement and scientific analysis of spatial relationships within the complex ecosystems.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Technologies & Frameworks</h2>
        <TechStack
          technologies={[
            'Unreal Engine 5',
            'LiDAR Technology',
            'CloudCompare',
            'E57 Format',
            'Point Cloud Plugins',
            'Octree Optimization',
            'VR Integration',
            'C++'
          ]}
        />
      </div>

      <div className="mt-8 p-6 rounded-lg shadow-md bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700">
        <h3 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">Impact & Significance</h3>
        <p className="text-gray-800 dark:text-gray-200 mb-3">
          This project pioneered the application of spatial computing to environmental research facilities, demonstrating that complex ecological systems can be documented and explored in immersive detail. The technical achievements in point cloud processing and real-time rendering established new standards for digital preservation of scientific infrastructure.
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          The digital twin's evolution into the Biosphere 3 proposal showcases how technical innovation can catalyze larger research initiatives. By proving the concept's viability through working implementation, the project generated state-wide media coverage and positioned spatial computing as an essential tool for next-generation environmental science.
        </p>
      </div>
    </ProjectLayout>
  );
};

export default BiosphereDigitalTwinPage;
