# Denisse Guerra — Master Resume
**Source document for all tailored versions. Do not submit directly.**

Imperial Valley, CA (Open to Relocate) | denisse02dy@gmail.com | +1 (760) 554 0192
linkedin.com/in/denisse-guerra-xr | github.com/denisse-guerra | Podcast: En la Nube

---

## Professional Identity

Bilingual (EN/ES) software engineer and technical AI educator operating at the intersection of cybersecurity infrastructure, spatial computing, and generative AI. Experienced designing and deploying zero-trust network architectures, training cross-functional teams on GenAI platforms, leading XR digital twin projects from concept to production, and building sim-to-real AI pipelines for physical environments. Proven communicator across technical and executive audiences; client-facing, field-deployable, and compliance-minded. Podcast host bridging AI and cybersecurity literacy for Spanish and English-speaking non-expert audiences.

---

## Education

### B.A.S. Applied Computing Engineering — The University of Arizona
**Graduated December 2025 | Tucson, AZ**
- Emphasis: Cloud Computing Engineering · Minor / Undergraduate Certification: Cyber Defense
- Relevant Coursework: Cyber Threat Intelligence, Active Cyber Defense, Statistics in the Information Age, Advanced Cloud Computing, Cloud Security, Virtualization: Applications and Best Practices, Principles of Zero Trust Infrastructure, Windows and Linux Security
- Award: College of Applied Science and Technology Dean's List

### A.S. Computer Science — Imperial Valley College
**2021 – 2023 | Imperial Valley, CA**
- Relevant Coursework: Programming in C++, Data Structures, OOP, Mechanics & Electromagnetism Physics, Thermodynamics
- Awards: President's Honor List, Dean's List, IME Scholarship, Border Region Talent Pipeline Scholarship

### A.S. Computer Science — Laney College
**2022 – 2023 | Oakland, CA**
- Coursework: Structure and Interpretation of Computer Programs, Calculus I & II, Multivariable Calculus

---

## Professional Experience

### Network Security Engineer & AI Engineer — Aeonic AI (Contractor)
**January 2026 – Present | Remote**
*Context: Startup building AI-powered health data analytics systems requiring HIPAA/PHI compliance and sovereign local AI infrastructure.*

- **Designed and deployed a tiered VLAN network architecture** separating an internet-facing DMZ (VLAN 10, local Gemma LLM node), an air-gapped LUKS-encrypted PostgreSQL data vault (VLAN 20, PHI), and a dashboard access layer (VLAN 30) via OPNsense firewall and MikroTik switch fabric.
- **Architected a zero-trust internal network** migrating from a flat topology to a stateful, multi-VLAN isolated model; enforced egress block rules on the database segment and restricted all app-layer transactions via strict Firewall Aliases.
- **Built and deployed an internal PKI** by establishing a standalone Certificate Authority (CA) within Ubuntu to sign and deploy custom SSL/TLS certificates for enterprise application security.
- **Engineered a secure AI ingestion pipeline** using RAG and Anonymizer/DeAnonymizer systems; applied SGID bit enforcement and Linux group permissions on untrusted .txt edge-layer data to eliminate prompt injection risks and protect embedding servers.
- **Designed a 'Private Hallway' virtual bridge (vmbr1)** inside Proxmox hypervisor clusters to force all 10GbE data flows between frontend and local NVIDIA Blackwell/RTX Pro 6000 inference nodes to remain entirely within hypervisor memory; eliminating external exposure.
- **Deployed a secure web dashboard** using Apache2 Virtual Hosts and ASP.NET; integrated Cursor and n8n agent automation for pre-deployment security audits and AI-assisted development workflows.
- **Delivered internal GenAI training** on Cursor, n8n, and LLM toolchains to non-technical stakeholders; enabling independent prototyping and deployment of AI-assisted workflows.

### Lead XR Developer — Aeonic AI (Contractor)
**January 2026 – Present | Remote**
*Concurrent role with Network Security Engineer position above. Oversaw all XR initiatives under Aeonic's applied AI research arm.*

- **Spearheaded the pioneer XR implementation of Biosphere 2** establishing the technical baseline for real-time spatial rendering of complex living research environments using Unreal Engine 5.
- **Processed and optimized massive point cloud and E57 geospatial datasets** using RealityScan, Litchfeld Studio, and CloudCompare; achieved 88–130 fps frame rates on target hardware through aggressive clipping volumes, destructive cropping, and Octree-based point budgeting (r.LidarPointBudget).
- **Built and configured a sim-to-real AI training environment** using NVIDIA Isaac Sim and Omniverse; trained a humanoid robot to navigate Biosphere 2 terrain, integrating simulated environment data with physical deployment targets.
- **Co-authored the Biosphere 3 technical framework and proposal** scaling the digital twin concept into a standalone commercial and research product; the project attracted state-wide media and public coverage.

### XR Development Lead — UArizona ICDI — AI Core
**June 2025 – December 2025 | Tucson, AZ**
*Context: Oversaw all XR projects across AI Core; directed developers, researched and developed new 3D scanning techniques and modeled products.*

- **Directed end-to-end software development lifecycles** across all XR projects at AI Core; coordinating requirements between engineering teams, researchers, and the University of Arizona College of Human Ecology.
- **Initiated and led the XR Digital Twin of Biosphere 2** establishing the scope, technical architecture, and pipeline that would later evolve into the full Biosphere 3 proposal.
- **Developed VR products for the Pima County Visitor's Center** delivering an immersive stereoscopic experience of the Tucson Air & Space Museum and other regional tourist landmarks; combining 3D scanning, spatial audio, and real-time rendering.
- **Researched and implemented emerging 3D scanning techniques** including Gaussian Splatting and photogrammetric workflows; applied findings directly to product pipelines across active XR projects.
- **Gave technical direction to a team of XR developers** establishing development standards, reviewing output, and unblocking technical challenges across concurrent project streams.
- **Conducted performance debugging and analytical trade-offs** to translate academic and research use cases into specific, low-latency deployments on target VR hardware.

### XR Developer & AI Instructor — UArizona ICDI — AI Core
**October 2024 – June 2025 | Tucson, AZ**
*Context: Dual-function role combining hands-on XR development with formal AI instruction and team training at the university institute.*

- **Designed and delivered an AI & XR curriculum from scratch** to 15+ UA students and faculty; covered LLM integration, 3D scanning, and generative AI application development with no pre-existing course materials.
- **Led weekly GenAI knowledge-transfer sessions** for a team of 3 graduate students; upskilled them in XR development, LLM workflows, RAG pipelines, and rapid prototyping until they independently owned product features.
- **Delivered the Lundgren XR Retail Lab** — a full digital twin of the Lundgren Consumer Sciences Lab at the University of Arizona; served as primary liaison to the College of Human Ecology, translating academic research requirements into deployable VR software.
- **Presented live platform capabilities** to billionaire executive and former Macy's CEO Terry Lundgren; demonstrated C-suite technical communication under high-stakes conditions.
- **Engineered RAG-powered AI NPC assistants** across Retail, History, and Tech Support knowledge domains using OpenAI API, agent architecture design, and prompt engineering.
- **Implemented advanced Gaussian Splatting 3D rendering** for Digital Twin and Augmented Reality experiences.

### Artificial Intelligence Intern — UArizona AI Core / ICDI
**May 2024 – September 2024 | Tucson, AZ**

- **Shipped 4 production digital twin environments** using generative AI, photogrammetry, and LiDAR scanning; collaborated with 50+ students and professionals across ICDI in an agile, iterative development cycle.
- **Designed and implemented custom GPTs, agent architectures, and generative AI models** via OpenAI API; applied prompt engineering, API integration, and rapid prototyping to deliver AI solutions across research and enterprise contexts.
- **Presented research and project outcomes** at the Westmont College 2024 Impact Conference in Santa Barbara, CA.

### Podcast Host & Producer — En la Nube
**2024 – Present | Independent / Bilingual**
*Solo-hosted Spanish-language podcast dubbed to English using AI; covers AI, XR, cybersecurity, and emerging tech for non-expert Hispanic and English-speaking audiences.*

- **Produces and hosts bilingual episodes** explaining AI, cybersecurity, and XR developments in accessible language; uses an AI dubbing pipeline to deliver simultaneous Spanish and English content.
- **Focuses on the direct societal impact of emerging technology** on Hispanic and border region communities; bridges technical literacy gaps for underserved, non-expert audiences.

### Social Media Strategist — Political Campaign (Anonymous)
**June 2020 – October 2023 | Baja California, MX**

- **Grew candidate Facebook audience from 550 to 7,200+ followers** through organic A/B testing, content strategy, and social analytics; increased weekly traffic by 22%+ consistently.
- **Collaborated with Google Licensed Media Service Team** to establish candidate as a recognized public figure across Google products.
- **Served as key media liaison** coordinating with newscasts, journalists, and organizations; managed candidate schedule and interview preparation as virtual assistant.

### Content Creator & Brand Collaborator — Independent (Instagram / TikTok)
**March 2020 – Present**

- **Built a bilingual personal audience of 33K+ followers on Instagram** with a peak single-post reach of 350K+.
- **Collaborated with 20+ national and international brands** on advertising and partnership campaigns; worked alongside Meta's Media Gestion Department achieving 12% monthly engagement.
- **Featured in Único BC magazine** for youth success and self-taught education.

---

## Key Projects

### Biosphere 2 Digital Twin & Biosphere 3 Proposal
*UArizona ICDI / Aeonic AI · 2025–Present*
Pioneer XR/AI implementation of Biosphere 2; attracted state-wide media coverage; co-authored Biosphere 3 commercial proposal. Integrated Isaac Sim humanoid robot sim-to-real training on Biosphere 2 terrain.

### Pima County Visitor's Center VR Experience
*UArizona ICDI — AI Core · 2025*
Stereoscopic immersive VR experience of the Tucson Air & Space Museum and regional tourist landmarks; developed during XR Development Lead tenure using 3D scanning and real-time rendering pipelines.

### Lundgren Consumer Sciences XR Retail Lab
*UArizona ICDI · 2024–2025*
End-to-end VR digital twin of retail learning environment; presented live to former Macy's CEO Terry Lundgren and University of Arizona College of Human Ecology stakeholders. Delivered May 2025.

### Avant Secure Web Dashboard & AI Ingestion Pipeline
*Aeonic AI · 2026–Present*
HIPAA-compliant internal dashboard with Apache2 / ASP.NET hosting, internal PKI, zero-trust ingestion pipeline, SGID-hardened file permissions, and RAG-based anonymization system.

### Zero-Trust Research Infrastructure — 'Private Hallway'
*Aeonic AI · 2026–Present*
Three-tier VLAN network (DMZ / Air-gapped PHI Vault / Dashboard) on OPNsense + MikroTik; host-only virtual bridge inside Proxmox isolating NVIDIA Blackwell inference nodes from external internet.

### Cyber Defense XR Training Environment
*UArizona Capstone · 2025*
XR training pipeline aligning digital twin fidelity with real-time AI guidance frameworks; analyzed end-to-end dataflows and system constraints for cyber defense education contexts.

### Premier League Data Analysis Research Article
*2023*
Predictive analysis of 2022–23 Premier League season using R, Quarto, HTML/CSS and 2021–22 dataset. Published publicly.

### Twitter Trends Geographic Visualization
*2023*
Geographic sentiment visualization of US Twitter data using Python dictionaries, data abstraction, and modular program architecture. Published on GitHub.

---

## Technical Skills

| Category | Skills |
|---|---|
| **GenAI Platforms** | OpenAI API, Anthropic Claude, Google Gemini, GitHub Copilot, Cursor, n8n Agent Automation, RAG Systems, Prompt Engineering, Custom GPT Architecture |
| **Programming Languages** | Python, C#, .NET, Node.js, C++, PostgreSQL / SQL, Bash Scripting, R, HTML, CSS, PHP, JavaScript |
| **Cybersecurity** | Zero-Trust Architecture, OPNsense Firewall, MikroTik RouterOS / SwOS, PKI / CA, SSL/TLS, LUKS Encryption, GPG / GnuPG, SGID Hardening, HIPAA / PHI / CCPA Compliance, Wireshark, Tailscale, Authentik IdP |
| **Infrastructure & Systems** | Proxmox VE, Linux (Ubuntu / Debian), Netplan / NetworkManager, systemd, Apache2 Virtual Hosts, Docker, VLAN Configuration, PCIe GPU Passthrough (NVIDIA Blackwell / RTX Pro 6000), PBS |
| **Cloud** | AWS (hands-on deployment), Azure (academic / project exposure) |
| **Spatial Computing & XR** | Unreal Engine 5, LiDAR Point Clouds (E57), Photogrammetry, Gaussian Splatting, CloudCompare, RealityScan, Litchfeld Studio, Octree Data Management, Digital Twins, Stereoscopic VR |
| **Robotics / Sim-to-Real** | NVIDIA Isaac Sim, NVIDIA Omniverse, Humanoid Robot Training, Sim-to-Real Integration |
| **AI / ML Infrastructure** | Local LLM Inference, GPU Passthrough for AI Workloads, Sovereign AI Infrastructure, Embedding Servers, Vector Databases |
| **Development Tools** | Git, GnuPG / Kleopatra, Trello, Slack, Posit Cloud, Google Workspace, Microsoft Office Suite, Active Directory |
| **Languages** | English (Native) · Spanish (Native) · French (Basic) |

---

## Professional Aptitudes

- Technical instruction & curriculum design — built AI/XR programs from scratch for multi-level academic and professional audiences
- C-suite & executive communication — presented live to Fortune 500 executives, university leadership, and conference audiences
- Cross-functional team leadership — led graduate student teams, coordinated with researchers, engineers, designers, and product managers
- Documentation-driven development — anchors system truth in living documentation for business continuity, compliance, and recovery
- Strategic troubleshooting — diagnosed and resolved complex network anomalies, Layer 2 conflicts, MAC mismatches, and infrastructure failures
- Compliance-minded system design — deep understanding of HIPAA, CCPA, zero-trust, and privacy-first architectural frameworks
- Bilingual technical communication — delivers complex technical content to Spanish and English-speaking non-expert audiences
- Rapid prototyping & iteration — consistently compresses delivery timelines through structured, fail-fast prototyping methodology
- Field deployment readiness — experienced adapting software to real-world constraints under time pressure outside controlled environments

---

## Certifications & Continuing Education

- **ChatGPT Prompt Engineering for Developers** — DeepLearning.AI
- **Writing Efficient Python Code** — DataCamp
- **Intermediate JavaScript** — Codecademy
- **PHP 8 and MySQL: The Full Guide** — Udemy
- **Digital Marketing Certification** — Ascenso
- *In progress / planned: CompTIA Security+ (target Q3 2026)*

---

## Competitive Differentiators (Recruiter Notes)
*Use this section when tailoring resumes to identify which angles to lead with.*

- **Biosphere 2** — headline-worthy, publicly covered project; opens conversations immediately in academic, government, and research contexts
- **Isaac Sim / Omniverse humanoid robot sim-to-real** — rare credential; directly relevant to aerospace, defense, and physical AI roles
- **Pima County VR / stereoscopic experience** — tangible public-sector deliverable; relevant for government, tourism, and heritage tech roles
- **HIPAA / PHI zero-trust infrastructure** — rare outside healthcare IT; highly transferable to defense, government, and regulated industries
- **Bilingual (EN/ES) + border region background** — unique value for binational programs, Latin American markets, AEM partnerships, and San Diego / border clients
- **En la Nube podcast** — signals technical communication depth, public presence, and commitment to democratizing AI literacy
- **Tri-skills intersection (cybersecurity + spatial computing + GenAI instruction)** — rare in any single candidate profile
- **UA coursework directly maps to government/defense**: Cyber Threat Intelligence, Active Cyber Defense, Zero Trust, Cloud Security, Windows and Linux Security

---

*Master Resume compiled June 2026 · Last updated: June 12, 2026 · Do not submit directly — use as source for tailored versions*
