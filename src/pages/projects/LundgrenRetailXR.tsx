import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import { ShoppingCart, Users, Calendar, Presentation, Zap, Award } from 'lucide-react';
import { LundgrenRetailXR } from '../../assets/project_icons';

const LundgrenRetailXRPage = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Virtual Retail Environment',
      description: 'Immersive shopping experience prototyping for next-generation retail research'
    },
    {
      icon: Users,
      title: 'Client Relationship Management',
      description: 'Direct coordination with University of Arizona College of Human Ecology stakeholders'
    },
    {
      icon: Calendar,
      title: 'Project Timeline Execution',
      description: 'Agile sprint management delivering iterative milestones aligned with academic schedules'
    },
    {
      icon: Presentation,
      title: 'Executive Demonstrations',
      description: 'Live presentations to Terry Lundgren, former CEO of Macy\'s Inc.'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Flexible development workflow enabling quick iteration on user feedback'
    },
    {
      icon: Award,
      title: 'Academic Alignment',
      description: 'Features designed to support rigorous research methodologies and data collection'
    }
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={LundgrenRetailXR}
        title="Lundgren Retail XR Lab"
        subtitle="State-of-the-Art Virtual Reality Platform for Retail Experience Research"
        features={features}
      />

      <ProjectOverview
        paragraphs={[
          "The Lundgren Retail XR Lab project delivered a cutting-edge research platform for studying consumer behavior and retail design in virtual environments. Named in honor of Terry Lundgren, the legendary CEO who transformed Macy's into a retail powerhouse, the lab provides researchers with unprecedented control over environmental variables that are impossible to manipulate in physical retail spaces.",
          "This project demanded balancing technical innovation with academic rigor. Researchers needed the flexibility to rapidly prototype different store layouts, product placements, and visual merchandising strategies while maintaining precise control over experimental conditions and data collection. The platform's design enables A/B testing of retail concepts at scales and speeds impossible in physical environments.",
          "Beyond technical development, the project required sophisticated stakeholder management. Serving as primary technical liaison to the University of Arizona's College of Human Ecology, the role involved translating academic research requirements into concrete software features, managing sprint timelines aligned with academic calendars, and delivering regular milestone demonstrations that balanced technical capabilities with research objectives.",
          "The project's impact extended beyond the lab itself. Live demonstrations to Terry Lundgren showcased how extended reality technology could transform retail education and industry research, helping secure ongoing support for spatial computing initiatives within the university's retail and consumer sciences programs."
        ]}
      />

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Architecture & Design</h2>
        
        <div className="space-y-6">
          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Modular Environment System</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The platform architecture enables researchers to quickly reconfigure store layouts through a modular design system, swapping fixtures, signage, and product arrangements without requiring engineering support, accelerating experimental iteration cycles.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Behavioral Analytics Integration</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Comprehensive telemetry systems capture participant gaze patterns, navigation paths, product interaction timing, and decision-making behaviors, automatically generating quantitative datasets that integrate seamlessly with academic research workflows and statistical analysis tools.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Agile Development Process</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Sprint-based development cycles synchronized with academic semester schedules delivered regular feature updates and incorporated researcher feedback rapidly, maintaining project momentum while ensuring system capabilities evolved with emerging research questions.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Stakeholder Communication Framework</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Structured communication protocols balanced technical progress updates with demonstration sessions, ensuring research faculty understood system capabilities while collecting actionable feedback that informed prioritization of subsequent development sprints.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Technologies & Frameworks</h2>
        <TechStack
          technologies={[
            'Unreal Engine 5',
            'VR Development',
            'C++',
            'Blueprint Scripting',
            'Analytics Systems',
            'Data Export Tools',
            'Agile/Scrum',
            'Stakeholder Management'
          ]}
        />
      </div>

      <div className="mt-8 p-6 rounded-lg shadow-md bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700">
        <h3 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">Impact & Significance</h3>
        <p className="text-gray-800 dark:text-gray-200 mb-3">
          This project demonstrates the intersection of technical development and academic research support. By delivering a platform that serves both as cutting-edge research infrastructure and as a showcase of extended reality's potential for industry innovation, it bridges the gap between academic exploration and commercial application.
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          The successful execution of client relationship management, timeline coordination, and high-stakes demonstrations to industry leaders like Terry Lundgren showcases professional skills that extend beyond pure engineering—the ability to translate complex technology into accessible narratives and maintain stakeholder confidence through transparent, milestone-driven delivery.
        </p>
      </div>
    </ProjectLayout>
  );
};

export default LundgrenRetailXRPage;
