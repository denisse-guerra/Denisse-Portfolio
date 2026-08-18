# Professional Technical Profile & Portfolio for Denisse Guerra

## 🛠️ Technical Skill Summary

### Programming Languages & Frameworks
* **C# / .NET & ASP.NET**: Backend application development, web application hosting, component and feature engineering.
* **Python**: Automated scripting, data pipeline construction, and AI integrations.
* **Node.js**: Server-side runtime application engineering.
* **C++**: High-performance systems programming.
* **SQL & PostgreSQL**: Advanced relational database design, data schema architecture, and secure management of Patient Health Information (PHI).
* **Bash Scripting**: Infrastructure automation and deployment scripting.

### Infrastructure & System Administration
* **Proxmox VE (Hypervisor Specialist)**: Linux Bridge configuration (`vmbr0`, `vmbr1`), microsegmentation-aware networking, hardware cluster virtualization, and high-availability VM governance.
* **Advanced GPU Passthrough**: Deep technical execution of PCIe passthrough for intensive AI inference workloads (including NVIDIA Blackwell/RTX Pro 6000 hardware architectures).
* **Linux System Administration**: Enterprise Ubuntu/Debian deployment, `systemd` service management, static networking configuration via Netplan and NetworkManager.
* **Web Server Orchestration**: Comprehensive Apache2 Virtual Host management and configuration.
* **Disaster Recovery (DR)**: Enterprise backup orchestration using Proxmox Backup Server (PBS), automated rolling `vzdump` setups, and rapid-restoration protocols following high-stakes hardware failures.

### Cyber Defense & Network Security
* **Zero-Trust Network Architecture**: Migration from unsegmented flat topologies to stateful, microsegmented isolated models (OPNsense Firewalls & MikroTik SwOS/RouterOS switch fabrics).
* **Tiered Logical Segmentation**: Enforcing strict firewall boundaries—Network 10 (DMZ for isolated AI environments), Network 20 (Air-gapped, internet-blocked cryptographic Data Vaults for PHI), and Network 30 (Dashboard user access).
* **Internal Public Key Infrastructure (PKI)**: Establishing standalone Certificate Authorities (CA) within Ubuntu environments to sign and deploy custom SSL/TLS certificates for enterprise applications.
* **Privilege & System Hardening**: Advanced Linux permissions engineering using SGID bit enforcement models to secure ingestion pipelines; implementation of LUKS full-disk encryption.
* **Secure Data Retrieval**: Engineering AI Security (AISec) pipelines utilizing Retrieval-Augmented Generation (RAG) and specialized Anonymizer/DeAnonymizer systems to completely eliminate Prompt Injection risks and safeguard data sovereignty.
* **Centralized Access Control**: Shifting infrastructure away from high-overhead overlay networks into integrated Tailscale + Authentik identity environments.

### Spatial Computing & Geospatial Data Engineering
* **Unreal Engine 5 (UE5)**: Advanced implementation of LiDAR Point Cloud plugins, Octree data management, and real-time immersive spatial rendering.
* **Point Cloud Data Budgeting**: Performance optimization using non-destructive Clipping Volumes and viewport density constraints (`r.LidarPointBudget`).
* **External Geometric Processing**: Utilizing professional data segmentation tools such as CloudCompare to clean, register, and slice massive E57 geospatial datasets.

---

## 💡 Professional Aptitudes (Soft Skills)

* **Strategic Troubleshooting**: Expert ability to diagnose and neutralize complex "Network Ghost" anomalies, Layer 2 conflicts, MAC mismatches, and software overrides.
* **Cross-Functional Collaboration**: Accomplished in working alongside multi-disciplinary stakeholders, researchers, and core software engineering teams to translate raw technical or scientific requirements into scalable software architecture.
* **C-Suite & Executive Presentation**: Proven capacity to articulate complex, bleeding-edge technological concepts into clear business objectives for executive stakeholders, university heads, and industry icons.
* **Documentation-Driven Development**: Firm commitment to anchoring exact system truth in living documentation to preserve business continuity, maintain structural compliance, and provide reliable recovery paths.
* **Compliance-Minded System Design**: Deep understanding of privacy-first frameworks (such as HIPAA and CCPA compliance), structuring architectures intentionally around data vault isolation, strict Access Control Lists (ACLs), and rigorous audit trails.

---

## 📁 Key Projects Portfolio

### 1. Biosphere 2 Digital Twin & Biosphere 3 Proposal
* **Role:** Lead XR Developer
* **Context & Scope:** Directed the pioneer extended reality (XR) implementation of the renowned Biosphere 2 environmental research facility.
* **Key Achievements:** * Successfully transformed massive volumes of complex, high-density environmental and scientific data into a highly immersive, interactive real-time spatial model.
  * Authored the comprehensive technical framework and strategic vision that directly evolved the twin model into its own massive, standalone "Biosphere 3" project proposal, scaling spatial digital twinning concepts for much wider commercial and research applications.
  * Attracted extensive, state-wide media and public coverage highlighting the scientific and technical innovations of the system.

### 2. Lundgren Retail XR Lab
* **Role:** Lead Developer & Project Manager
* **Context & Scope:** Spearheaded the end-to-end technical roadmap, timeline execution, and client management for a state-of-the-art retail visualization laboratory.
* **Key Achievements:**
  * Acted as the primary technical liaison coordinating directly with the project’s client, the University of Arizona College of Human Ecology, ensuring the software features directly aligned with rigorous academic and research guidelines.
  * Successfully conducted live milestone demonstrations and presented core XR system capabilities to billionaire executive Terry Lundgren (former CEO of Macy's).

### 3. Avant Secure Web Dashboard & Data Ingestion Pipeline
* **Role:** Infrastructure & AI Operations Engineer / Full-Stack Developer
* **Context & Scope:** Developed a secure internal dashboard application and file processing sandbox designed to ingest and parse analytical research data.
* **Key Achievements:**
  * Hosted the web application using Apache2 Virtual Hosts and customized ASP.NET structures.
  * Architected an internal Public Key Infrastructure (PKI) by building a private Certificate Authority (CA) inside Ubuntu to sign and secure the web application dashboard with custom SSL/TLS certificates.
  * Programmed a secure drop-folder knowledge ingestion agent that scans untrusted incoming `.txt` data at the edge layer, enforcing specialized Linux group permissions and SGID bits to block horizontal privilege escalation risks and protect internal embedding servers from prompt injection.

### 4. Zero-Trust Research Infrastructure & "Private Hallway" Environment
* **Role:** Security & Network Architect
* **Context & Scope:** Transitioned a legacy flat infrastructure into an airtight, three-tiered network architecture designed to isolate sovereign local AI nodes and sensitive research databases.
* **Key Achievements:**
  * Configured stateful cross-network boundaries via an OPNsense firewall and MikroTik switch fabric, separating an internet-facing DMZ (Network 10 hosting a local Gemma LLM model) from an air-gapped PostgreSQL Data Vault (Network 20) holding sensitive compliance data.
  * Implemented an unrouted "Egress Block" rule on the database segment and forced all application-layer transactions to move via strict Firewall Aliases.
  * Designed an air-gapped, host-only virtual bridge (`vmbr1`) inside Proxmox hardware clusters (the "Private Hallway" protocol). This forced all low-latency, 10GbE data flows between the frontend and local inference machines (NVIDIA Blackwell/Argon nodes) to stay entirely inside hypervisor memory, keeping data perfectly protected from external internet exposure.
