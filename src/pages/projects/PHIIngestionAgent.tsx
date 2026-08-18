import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import { Shield, Brain, AlertTriangle, Database, Search, Lock } from 'lucide-react';
import { PHIIngestionAgent } from '../../assets/project_icons';

const PHIIngestionAgentPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Defense-in-Depth Security',
      description: 'Multi-layered protection combining YARA pattern matching with AI semantic analysis'
    },
    {
      icon: Brain,
      title: 'Local AI Enforcement',
      description: 'Gemma 4B SLM deployed via llama.cpp for prompt injection detection without external API calls'
    },
    {
      icon: AlertTriangle,
      title: 'MITRE ATLAS Mapping',
      description: 'Threat detection aligned with AML.T0051 indirect prompt injection frameworks'
    },
    {
      icon: Database,
      title: 'Fail-Closed Architecture',
      description: 'Automatic quarantine on timeout, malformed responses, or suspicious verdicts'
    },
    {
      icon: Search,
      title: 'Semantic Threat Analysis',
      description: 'AI-powered detection of obfuscated injection attempts beyond simple pattern matching'
    },
    {
      icon: Lock,
      title: 'PHI-Safe Pipeline',
      description: 'HIPAA-aware design ensuring sensitive health data never reaches untrusted systems'
    }
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={PHIIngestionAgent}
        title="PHI Ingestion Agent"
        subtitle="AI-Powered Security Pipeline for Protected Health Information"
        features={features}
      />

      <ProjectOverview
        paragraphs={[
          "The PHI Ingestion Agent represents a sophisticated approach to securing AI-powered knowledge systems against emerging threats. As organizations increasingly rely on large language models for processing sensitive healthcare data, the risk of prompt injection attacks—where malicious instructions embedded in documents can compromise the AI system—has become a critical concern.",
          "This project addresses that challenge through a defense-in-depth architecture that treats document ingestion as a security control point. Rather than simply uploading files to a database, the pipeline implements two complementary security layers: deterministic pattern matching for known attack signatures, followed by semantic AI analysis for obfuscated or novel threats.",
          "The system's design reflects deep understanding of AI security principles. By deploying a local small language model (Gemma 4B) as a policy enforcer rather than a general-purpose chatbot, it achieves the critical balance between security effectiveness and operational constraints—no external API calls, predictable resource usage, and complete audit trails for compliance with healthcare data regulations.",
          "What makes this project particularly impactful is its operationalization of academic threat frameworks. By mapping detection capabilities to MITRE ATLAS techniques and building regression test fixtures, it transforms abstract security concepts into verifiable, production-ready controls that can be continuously validated as threat landscapes evolve."
        ]}
      />

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Architecture & Design</h2>
        
        <div className="space-y-6">
          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Stage 1: Deterministic Scanning</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The first security layer employs pattern matching and signature-based detection to identify known malicious payloads at high speed, catching obvious attack patterns before invoking more resource-intensive analysis.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Stage 2: Semantic AI Review</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Documents passing initial screening undergo semantic analysis by a locally-deployed language model that evaluates contextual indicators of malicious intent, detecting obfuscation techniques and sophisticated attacks that simple pattern matching cannot identify.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Network Segmentation</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The pipeline implements strict network isolation, with user-facing upload interfaces separated from internal processing systems. Only documents that pass all security gates are transferred to downstream systems for further processing.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Fail-Closed Architecture</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The system implements fail-closed behavior where any anomaly triggers automatic quarantine. Security teams receive structured alert metadata for investigation, ensuring complete visibility into potential threats without exposing sensitive content.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Technologies & Frameworks</h2>
        <TechStack
          technologies={[
            'Python',
            'Gemma 4B',
            'llama.cpp',
            'YARA',
            'MITRE ATLAS',
            'Streamlit',
            'systemd',
            'Pytest',
            'rsync',
            'SSH'
          ]}
        />
      </div>

      <div className="mt-8 p-6 rounded-lg shadow-md bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700">
        <h3 className="text-2xl font-semibold mb-4 text-pink-700 dark:text-pink-300">Impact & Significance</h3>
        <p className="text-gray-800 dark:text-gray-200 mb-3">
          This project demonstrates advanced understanding of AI security beyond basic prompt engineering. By operationalizing defense-in-depth principles, implementing MITRE ATLAS frameworks, and deploying local AI inference as a security control, it bridges the gap between academic threat research and production-ready systems.
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          The architecture serves as a blueprint for organizations seeking to adopt RAG systems while maintaining strict security and compliance requirements—proving that AI-powered document processing can be both powerful and trustworthy when proper controls are engineered into the foundation.
        </p>
      </div>
    </ProjectLayout>
  );
};

export default PHIIngestionAgentPage;
