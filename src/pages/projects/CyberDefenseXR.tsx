import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import { Shield, Target, Brain, Users, BookOpen, Zap } from 'lucide-react';
import { CyberDefenseXR } from '../../assets/project_icons';

const CyberDefenseXRPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Realistic Threat Scenarios',
      description: 'Immersive simulations of real-world cyber attacks mapped to MITRE ATT&CK framework'
    },
    {
      icon: Target,
      title: 'Interactive Training',
      description: 'Hands-on practice in virtual environments that mirror actual security operations centers'
    },
    {
      icon: Brain,
      title: 'Adaptive Learning',
      description: 'Progressive difficulty levels that adjust to trainee performance and knowledge retention'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Multi-user scenarios that develop incident response communication and collaboration skills'
    },
    {
      icon: BookOpen,
      title: 'MITRE ATT&CK Integration',
      description: 'Training modules aligned with industry-standard attack techniques and defense strategies'
    },
    {
      icon: Zap,
      title: 'Performance Analytics',
      description: 'Real-time metrics and post-exercise analysis to track improvement and identify knowledge gaps'
    }
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={CyberDefenseXR}
        title="Cyber Defense XR Training"
        subtitle="Immersive Extended Reality Platform for Cybersecurity Education"
        features={features}
      />

      <ProjectOverview
        paragraphs={[
          "The Cyber Defense XR Training platform represents a paradigm shift in cybersecurity education, transforming abstract security concepts into tangible, interactive experiences. Traditional cybersecurity training often relies on theoretical lectures and flat-screen simulations that fail to capture the urgency and complexity of real incident response scenarios.",
          "This project leverages extended reality technology to create fully immersive training environments where security professionals can practice identifying threats, analyzing attack patterns, and coordinating defensive responses in realistic virtual security operations centers. By spatializing security data and threat intelligence, trainees develop intuitive understanding of attack progression that translates directly to improved real-world performance.",
          "The platform's integration with the MITRE ATT&CK framework ensures training exercises map directly to documented adversary tactics and techniques. Each simulation presents realistic attack scenarios—from initial reconnaissance through lateral movement and data exfiltration—allowing defenders to practice the entire incident response lifecycle in a consequence-free environment.",
          "What distinguishes this project is its focus on team coordination and communication under pressure. Multi-user scenarios require trainees to coordinate roles, share intelligence, and make time-critical decisions as a cohesive unit, developing the soft skills that are just as critical as technical knowledge in real security operations."
        ]}
      />

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Architecture & Design</h2>
        
        <div className="space-y-6">
          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Immersive Environment Design</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The platform utilizes Unreal Engine 5 to create photorealistic security operations centers with interactive displays, network topology visualizations, and spatial threat intelligence dashboards that respond dynamically to simulated attacks in progress.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">MITRE ATT&CK Integration</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Training scenarios are systematically structured around MITRE ATT&CK techniques, with each exercise focusing on specific tactics such as credential dumping, privilege escalation, or persistence mechanisms, ensuring comprehensive coverage of real-world threat landscapes.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Multi-User Collaboration</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The system supports simultaneous participation from multiple trainees in specialized roles—threat analysts, incident responders, and security engineers—each with unique perspectives and responsibilities that must be coordinated to successfully contain threats.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Performance Measurement</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Comprehensive telemetry captures trainee actions, decision timing, and communication patterns, generating detailed analytics that identify strengths and improvement areas while tracking skill development across multiple training sessions.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Technologies & Frameworks</h2>
        <TechStack
          technologies={[
            'Unreal Engine 5',
            'C++',
            'Blueprint Visual Scripting',
            'MITRE ATT&CK',
            'VR Hardware (Meta Quest)',
            'Multiplayer Networking',
            'Real-time Analytics',
            'PostgreSQL'
          ]}
        />
      </div>

      <div className="mt-8 p-6 rounded-lg shadow-md bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700">
        <h3 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">Impact & Significance</h3>
        <p className="text-gray-800 dark:text-gray-200 mb-3">
          This project demonstrates how extended reality can transform professional training in high-stakes domains. By creating immersive environments that engage multiple senses and spatial cognition, it achieves learning outcomes that traditional methods cannot match—improved retention, faster skill development, and better transfer to real-world scenarios.
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          The platform's grounding in MITRE ATT&CK ensures training remains current with evolving threat landscapes, while its emphasis on team dynamics addresses the often-overlooked human factors that determine success or failure in real incident response situations.
        </p>
      </div>
    </ProjectLayout>
  );
};

export default CyberDefenseXRPage;
