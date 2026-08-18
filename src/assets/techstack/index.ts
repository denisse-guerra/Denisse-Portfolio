// Tech stack assets module - consolidates all tech stack icons
// SVG Icons
import AWSLight from './AWS-Light.svg';
import CPP from './CPP.svg';
import CSS from './CSS.svg';
import Docker from './Docker.svg';
import FlutterLight from './Flutter-Light.svg';
import GithubLight from './Github-Light.svg';
import HTML from './HTML.svg';
import JavaScript from './JavaScript.svg';
import MaterialUILight from './MaterialUI-Light.svg';
import NotionLight from './Notion-Light.svg';
import NpmLight from './Npm-Light.svg';
import ReactLight from './React-Light.svg';
import StackOverflowLight from './StackOverflow-Light.svg';
import TypeScript from './TypeScript.svg';
import VercelLight from './Vercel-Light.svg';
import ViteLight from './Vite-Light.svg';

// PNG/WEBP/JPG Icons
import Proxmox from './proxmox-logo-color-stacked.png';
import VMware from './243-2432376_vmware-workstation-pro-15.png';
import SOCRadar from './socradar-extended-threat-intelligence.webp';
import Gitea from './Gitea-Logo-2048x1365.png';
import Suricata from './OIP.jpg';
import OPNsense from './OIP (1).webp';
import CloudCompare from './OIP (2).webp';
import Slack from './SDDw7CnuoUGax6x9mTo7dd.jpg';
import Wireshark from './103606-603c53167495b.jpg';
import Tailscale from './1200x630bb.png';
import UnrealEngine from './Logo_oqLlxdo.webp';
import GithubMark from './github-mark-57519b92ca4e.png';
import Python from './python-logo.png';
import N8n from './n8n-logo.webp';
import Cursor from './cursor-logo-png_seeklogo-611587.png';
import GnuPG from './GPG_logo-300x126.png';
import Debian from './ico-debian.png';
import Ubuntu from './Ubuntu-Emblema.png';
import Claude from './cc.png';
import Posit from './posit.png';
import LumaAI from './luma-ai-logo.jpg';
import Polycam from './1200x630wa-removebg-preview.png';

export const techStackIcons = {
  // SVG Icons
  AWSLight,
  CPP,
  CSS,
  Docker,
  FlutterLight,
  GithubLight,
  HTML,
  JavaScript,
  MaterialUILight,
  NotionLight,
  NpmLight,
  ReactLight,
  StackOverflowLight,
  TypeScript,
  VercelLight,
  ViteLight,

  // PNG/WEBP/JPG Icons
  Proxmox,
  VMware,
  SOCRadar,
  Gitea,
  Suricata,
  OPNsense,
  CloudCompare,
  Slack,
  Wireshark,
  Tailscale,
  UnrealEngine,
  GithubMark,
  Python,
  N8n,
  Cursor,
  GnuPG,
  Debian,
  Ubuntu,
  Claude,
  Posit,
  LumaAI,
  Polycam,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;
