import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import { Shield, Network, Lock, Server, Database, Zap } from 'lucide-react';
import { ZeroTrustInfrastructure } from '../../assets/project_icons';

const ZeroTrustInfrastructurePage = () => {
  const features = [
    {
      icon: Network,
      title: 'Microsegmentation Architecture',
      description: 'Three-tier network isolation separating DMZ, air-gapped data vaults, and user access zones'
    },
    {
      icon: Shield,
      title: 'Stateful Firewall Boundaries',
      description: 'OPNsense-based traffic inspection enforcing strict inter-network access policies'
    },
    {
      icon: Lock,
      title: 'Air-Gapped Data Vaults',
      description: 'Internet-blocked network segments protecting sensitive PHI and compliance data'
    },
    {
      icon: Server,
      title: 'Private Hallway Protocol',
      description: 'Hypervisor-level virtual bridge for 10GbE inter-VM communication isolated from external networks'
    },
    {
      icon: Database,
      title: 'Zero-Trust AI Deployment',
      description: 'Local LLM inference nodes segmented from sensitive databases via firewall aliases'
    },
    {
      icon: Zap,
      title: 'High-Performance Isolation',
      description: 'Host-only networking achieving low-latency AI workloads without internet exposure'
    }
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={ZeroTrustInfrastructure}
        title="Zero-Trust Infrastructure"
        subtitle="Enterprise-Grade Network Segmentation for AI Research & Compliance Data"
        features={features}
      />

      <ProjectOverview
        paragraphs={[
          "The Zero-Trust Infrastructure project transformed a legacy flat network topology into a rigorously segmented environment designed to protect sensitive research data and ensure compliance with healthcare privacy regulations. Traditional flat networks treat all internal traffic as equally trusted, creating catastrophic risk when a single compromised system can access everything. This architecture rejects that assumption entirely.",
          "The design implements three distinct network segments with carefully controlled boundaries. Network 10 serves as a DMZ hosting internet-facing AI inference nodes, Network 20 functions as a completely air-gapped vault for PostgreSQL databases containing Protected Health Information, and Network 30 provides restricted user access to internal dashboards. Traffic between these zones flows exclusively through stateful firewall rules defined in firewall aliases—no direct routing exists.",
          "What distinguishes this project is the 'Private Hallway' protocol: a hypervisor-level virtual bridge (vmbr1) that enables high-speed communication between frontend applications and AI inference hardware while remaining completely isolated from physical network interfaces. This architecture achieves the seemingly contradictory goals of low-latency GPU passthrough for intensive AI workloads and absolute internet isolation, ensuring data sovereignty even during compute-intensive operations.",
          "The migration from an unsegmented topology required not just technical reconfiguration but careful threat modeling. Each firewall rule represents a deliberate decision about which data flows are operationally necessary and which represent unacceptable risk. The air-gapped database segment's explicit egress block ensures that even if application code were compromised, exfiltration of sensitive data would be impossible without physical access to the infrastructure."
        ]}
      />

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Architecture & Design</h2>
        
        <div className="space-y-6">
          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Three-Tier Segmentation Model</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The network architecture separates concerns into isolated broadcast domains: an internet-facing DMZ for AI inference, a completely air-gapped vault for compliance-sensitive databases, and a restricted access zone for internal users, with OPNsense firewall enforcing all inter-zone traffic policies through explicit allow rules.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Private Hallway Protocol</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A host-only virtual bridge within Proxmox hypervisors enables direct memory-speed communication between VMs running user interfaces and GPU-accelerated AI inference nodes, achieving 10GbE performance while remaining completely invisible to external networks, ensuring data never traverses internet-routable interfaces during processing.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Air-Gapped Data Vaults</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Network 20 implements complete internet isolation through explicit egress blocking at the firewall level, ensuring PostgreSQL databases containing Protected Health Information cannot initiate outbound connections under any circumstances, with all legitimate access forced through application-layer proxies running in approved network zones.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Stateful Firewall Policy Enforcement</h3>
            <p className="text-gray-700 dark:text-gray-300">
              OPNsense firewall with MikroTik switch fabric provides hardware-accelerated packet inspection, enforcing microsegmentation boundaries through firewall aliases that explicitly define which services can communicate across network zones, with comprehensive logging for security audit and compliance verification.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Technologies & Frameworks</h2>
        <TechStack
          technologies={[
            'OPNsense',
            'MikroTik SwOS/RouterOS',
            'Proxmox VE',
            'Linux Networking',
            'PostgreSQL',
            'NVIDIA GPU Passthrough',
            'Virtual Bridge (vmbr1)',
            'Stateful Firewalls',
            'Network Segmentation'
          ]}
        />
      </div>

      <div className="mt-8 p-6 rounded-lg shadow-md bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700">
        <h3 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">Impact & Significance</h3>
        <p className="text-gray-800 dark:text-gray-200 mb-3">
          This project demonstrates enterprise-level network security architecture typically found in large organizations, implemented at research scale. By rejecting implicit trust and enforcing explicit verification at every network boundary, it establishes a security posture appropriate for handling regulated healthcare data and sensitive AI research.
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          The Private Hallway protocol's achievement of high-performance AI workloads within air-gapped boundaries solves a fundamental challenge in modern AI infrastructure: maintaining data sovereignty without sacrificing computational capabilities. This architecture provides a blueprint for organizations requiring both compliance rigor and cutting-edge AI capabilities.
        </p>
      </div>
    </ProjectLayout>
  );
};

export default ZeroTrustInfrastructurePage;
