import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import { Lock, Server, Shield, Key, FileText, Layers } from 'lucide-react';
import { AvantSecureDashboard } from '../../assets/project_icons';

const AvantSecureDashboardPage = () => {
  const features = [
    {
      icon: Server,
      title: 'Custom Web Hosting',
      description: 'Apache2 virtual host configuration with ASP.NET Core integration'
    },
    {
      icon: Key,
      title: 'Internal PKI Architecture',
      description: 'Private Certificate Authority for custom SSL/TLS certificate generation and signing'
    },
    {
      icon: Shield,
      title: 'Secure File Processing',
      description: 'Sandboxed ingestion pipeline with privilege isolation and threat prevention'
    },
    {
      icon: Lock,
      title: 'SGID Bit Protection',
      description: 'Linux permission engineering to prevent horizontal privilege escalation'
    },
    {
      icon: FileText,
      title: 'Document Intelligence',
      description: 'Automated parsing and indexing of analytical research documents'
    },
    {
      icon: Layers,
      title: 'Multi-Layer Security',
      description: 'Defense-in-depth approach protecting sensitive research data throughout pipeline'
    }
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={AvantSecureDashboard}
        title="Avant Secure Dashboard"
        subtitle="Enterprise-Grade Internal Web Application with PKI and Secure Data Processing"
        features={features}
      />

      <ProjectOverview
        paragraphs={[
          "The Avant Secure Dashboard project delivered a comprehensive internal platform for managing and processing sensitive analytical research data. Unlike public-facing applications that can rely on commercial certificate authorities and standard security models, this internal system required custom infrastructure to establish trust and enforce security boundaries appropriate for proprietary research environments.",
          "The project's most technically sophisticated component was the implementation of an internal Public Key Infrastructure (PKI). Rather than purchasing certificates from external authorities, the system deploys a private Certificate Authority running on Ubuntu that generates, signs, and manages SSL/TLS certificates for internal services. This architecture provides cryptographic assurance for internal communications while maintaining complete control over the trust chain.",
          "Beyond web hosting security, the platform incorporates a secure document ingestion pipeline that treats untrusted file uploads as potential attack vectors. Files dropped into processing folders undergo automated scanning and validation before being passed to embedding systems. The pipeline uses specialized Linux group permissions and SGID bit enforcement to ensure processes run with minimal privileges, preventing compromised files from escalating access or pivoting to other systems.",
          "This defense-in-depth approach reflects mature understanding of operational security in AI-powered systems. Rather than assuming uploaded documents are safe, the architecture treats the ingestion boundary as a critical control point where threats must be identified and neutralized before they can reach sensitive internal infrastructure or trained models."
        ]}
      />

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Architecture & Design</h2>
        
        <div className="space-y-6">
          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Web Application Infrastructure</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The dashboard runs on Apache2 with custom virtual host configurations supporting ASP.NET Core applications, providing a familiar web interface for internal users while maintaining enterprise-grade reliability and performance under concurrent access patterns.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Internal Certificate Authority</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A dedicated Ubuntu-based Certificate Authority generates and signs SSL/TLS certificates for internal services, establishing encrypted communication channels without relying on external trust anchors, ensuring cryptographic protection remains under organizational control.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Secure Ingestion Pipeline</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Document processing workflows implement least-privilege principles through carefully configured Linux group permissions and SGID bits, ensuring file handlers operate in sandboxed contexts that prevent malicious content from gaining unauthorized access to backend systems.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Threat Prevention Framework</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The architecture treats document uploads as untrusted input requiring validation before downstream processing, implementing scanning mechanisms that identify potentially malicious content patterns and block them from reaching AI embedding systems or research databases.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Technologies & Frameworks</h2>
        <TechStack
          technologies={[
            'Apache2',
            'ASP.NET Core',
            'C#',
            'Ubuntu Linux',
            'OpenSSL',
            'Private CA',
            'systemd',
            'Linux Permissions (SGID)',
            'File System Security'
          ]}
        />
      </div>

      <div className="mt-8 p-6 rounded-lg shadow-md bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700">
        <h3 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">Impact & Significance</h3>
        <p className="text-gray-800 dark:text-gray-200 mb-3">
          This project demonstrates sophisticated understanding of enterprise security architecture beyond surface-level implementations. By building an internal PKI rather than relying on external certificate authorities, it showcases the ability to evaluate security requirements and implement custom solutions appropriate for organizational constraints.
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          The secure ingestion pipeline's emphasis on privilege isolation and threat prevention reflects mature security thinking—recognizing that AI systems require the same rigorous input validation as traditional applications, and that defense-in-depth principles apply equally to document processing workflows as they do to network boundaries.
        </p>
      </div>
    </ProjectLayout>
  );
};

export default AvantSecureDashboardPage;
