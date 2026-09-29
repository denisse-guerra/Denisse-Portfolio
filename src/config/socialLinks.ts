const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/denisse-guerra';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/denisse-guerra-xr/';
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/novaletters/';
const EMAIL = import.meta.env.VITE_EMAIL || 'denisse02dy@gmail.com';

// Social Links Configuration - environment variables with production fallbacks
export const socialLinks = {
  // Main social profiles
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  instagram: INSTAGRAM_URL,
  email: EMAIL,
  
  // GitHub repository URLs
  repositories: {
    projectOne: import.meta.env.VITE_GITHUB_PROJECT1_URL,
    projectTwo: import.meta.env.VITE_GITHUB_PROJECT2_URL,
    projectThree: import.meta.env.VITE_GITHUB_PROJECT3_URL,
    projectFour: import.meta.env.VITE_GITHUB_PROJECT4_URL,
    projectFive: import.meta.env.VITE_GITHUB_PROJECT5_URL,
    projectSix: import.meta.env.VITE_GITHUB_PROJECT6_URL,
  },
  
  // Formatted display names (extracted from environment variables)
  display: {
    github: GITHUB_URL.replace(/^https?:\/\//, ''),
    linkedin: LINKEDIN_URL.replace(/^https?:\/\//, ''),
    instagram: INSTAGRAM_URL.replace(/^https?:\/\//, ''),
    email: EMAIL,
  }
};

export default socialLinks;