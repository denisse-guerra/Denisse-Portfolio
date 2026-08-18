import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const experiences = [
    {
      title: "Network Security Engineer & AI Engineer",
      company: "Aeonic AI",
      location: "Remote",
      period: "January 2026 - Present",
      description: [
        "Eliminated unauthorized access risk to PHI data by architecting zero-trust three-tier VLAN network with air-gapped LUKS-encrypted vault via OPNsense and MikroTik",
        "Built internal PKI from scratch by establishing Certificate Authority on Ubuntu to sign and deploy SSL/TLS certificates for secure application hosting",
        "Protected RAG embedding servers from prompt injection by engineering SGID-enforced file permissions on untrusted edge-layer data ingestion pipeline",
        "Achieved 10GbE inference throughput while eliminating external exposure by designing host-only 'Private Hallway' bridge isolating NVIDIA nodes within hypervisor"
      ]
    },
    {
      title: "Lead XR Developer",
      company: "Aeonic AI",
      location: "Remote",
      period: "January 2026 - Present",
      description: [
        "Delivered state-wide media coverage by spearheading pioneer XR implementation of Biosphere 2 using Unreal Engine 5 real-time spatial rendering",
        "Achieved 88-130 fps performance on massive point cloud datasets by optimizing E57 geospatial data through Octree-based budgeting and clipping volumes",
        "Trained humanoid robot for physical deployment by building sim-to-real AI environment in NVIDIA Isaac Sim integrating Biosphere 2 terrain",
        "Scaled digital twin concept into commercial product by co-authoring Biosphere 3 technical framework and proposal"
      ]
    },
    {
      title: "XR Development Lead",
      company: "UArizona ICDI — AI Core",
      location: "Tucson, AZ",
      period: "June 2025 - December 2025",
      description: [
        "Directed all XR project lifecycles at AI Core by coordinating cross-functional requirements between engineering, research, and academic stakeholders",
        "Established technical foundation for Biosphere 3 by initiating Biosphere 2 Digital Twin scope, architecture, and pipeline development",
        "Delivered immersive regional tourism VR for Pima County by developing stereoscopic experiences of Air & Space Museum and landmarks",
        "Accelerated product pipelines by researching and implementing Gaussian Splatting and photogrammetric workflows across active projects"
      ]
    },
    {
      title: "XR Developer & AI Instructor",
      company: "UArizona ICDI — AI Core",
      location: "Tucson, AZ",
      period: "October 2024 - June 2025",
      description: [
        "Upskilled 15+ students and faculty in production GenAI workflows by designing AI & XR curriculum covering LLM integration and 3D scanning from scratch",
        "Enabled independent feature ownership by leading weekly knowledge-transfer sessions training 3 graduate students in XR, RAG pipelines, and rapid prototyping",
        "Delivered full digital twin of Lundgren Consumer Sciences Lab by serving as primary technical liaison to College of Human Ecology",
        "Demonstrated C-suite communication capability by presenting live platform demo to former Macy's CEO Terry Lundgren under high-stakes conditions"
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "UArizona AI Core / ICDI",
      location: "Tucson, AZ",
      period: "May 2024 - September 2024",
      description: [
        "Shipped 4 production digital twin environments to 50+ collaborators by integrating generative AI, photogrammetry, and LiDAR in agile cycles",
        "Delivered custom AI solutions across research contexts by implementing GPTs and agent architectures via OpenAI API with prompt engineering",
        "Presented project outcomes at Westmont College 2024 Impact Conference in Santa Barbara, CA"
      ]
    },
    {
      title: "Podcast Host & Producer",
      company: "En la Nube",
      location: "Independent / Bilingual",
      period: "2024 - Present",
      description: [
        "Bridged technical literacy gaps for underserved audiences by producing bilingual AI/cybersecurity podcast using AI dubbing for simultaneous Spanish-English delivery",
        "Focused content on direct societal impact of emerging technology on Hispanic and border region communities"
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle gradient overlay for top edge blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Subtle gradient overlay for bottom edge blending to white divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;