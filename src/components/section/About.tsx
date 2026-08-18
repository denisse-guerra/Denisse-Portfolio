import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AsciiMorphText from '../AsciiMorphText';
import TypewriterCarousel from '../TypewriterCarousel';
import VRHeadset from '../VRHeadset';
import VRMuseumExperience from '../VRMuseumExperience';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';


const About = () => {
  const [asciiText, setAsciiText] = useState('');
  const [showMuseum, setShowMuseum] = useState(false);
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const roles = [
    'XR Developer',
    'Network Security Engineer',
    'AI Operations Specialist',
    'Trusted Partner in Building Out Of This REALITY Tech!',
  ];

  const fullAsciiArt = `⠀⠀⠀⠀⢀⢠⠴⠖⠉⠉⠉⠢⡀⢢⠉⠃⠶⣤⣀⢤⣄⣠⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣠⠞⠋⠒⠒⠀⠤⣀⠀⠀⠱⡈⡄⠀⠀⢠⡟⠁⠘⣦⠀⢰⢠⢊⠕⣵⠀⢀⡠⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⡼⠇⠀⠀⠀⠐⠂⠠⠄⡈⠂⣄⡥⠓⠀⠀⠜⠀⠀⠁⠸⡄⢸⢁⠆⠀⠀⢠⠟⠁⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡜⠁⠀⡠⠄⠲⠤⣄⡀⠀⣨⠟⠁⠀⠀⠀⠀⠀⠀⠀⡀⢀⡟⣎⠘⠀⠀⠠⡏⠀⠀⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠁⠀⢸⠁⠀⠀⠀⣟⣭⠲⠃⠀⣴⠶⢦⡀⠀⠀⠀⠀⠁⣸⠁⢸⡆⠀⠀⠘⠀⠀⣸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡀⠀⢸⠀⠀⠀⢤⡾⣌⠀⠀⢸⣓⡰⢦⡙⢦⠤⠀⠀⠐⡇⠀⢀⡃⠀⠀⠀⠀⠰⡿⠔⠶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢹⡄⠈⣆⠀⠚⠋⣷⣸⠀⠀⢸⣿⣇⠀⣷⢈⠛⠯⠔⢰⠃⠀⢸⡿⠙⡆⠀⢀⠏⠀⠀⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢻⢄⠈⢆⠀⠀⣹⠟⠀⠀⠀⠻⣿⣿⣼⢺⡒⠀⢀⡞⠀⢀⢧⡁⠀⠇⣠⢤⡀⢀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠙⢦⡀⠑⣌⢧⡐⣠⠀⠀⠀⠀⠁⠀⢁⠀⣠⠎⠀⢀⠎⢎⡏⠀⡶⠁⢀⣧⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠙⢦⡈⠳⣍⠓⠒⠀⠠⣦⢴⡏⢁⡴⠃⠀⢀⠎⡜⢸⠁⠀⠁⢀⡾⠋⠂⠀⣀⡀⠠⠄⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠻⣄⠈⢢⡀⠀⠀⢹⢸⣧⠏⠀⠀⡰⠃⡜⠀⣏⠇⠀⠴⢫⣀⣴⡿⠛⠉⠀⠀⠀⠈⠉⠋⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⡀⠄⣀⠀⠱⣣⠀⠱⡀⠀⣾⢸⡏⠀⢀⠞⠀⡜⠀⣸⠁⠀⠀⡠⠜⠛⠻⣄⠒⠒⠒⠢⢄⡀⠀⠀⠀⠫⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠛⢡⡶⠒⠵⢀⠿⡆⠀⢣⢠⡿⢌⠀⠀⡎⠀⡸⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⡎⠿⠳⣦⡀⠀⠈⠢⡀⠀⠀⢩⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢷⡈⠳⠆⠀⠞⠁⡇⠀⢸⡞⠀⢸⡀⢸⠀⢠⠃⢀⡏⡀⠀⠀⠀⠀⠀⠀⡄⠹⣼⠆⠈⢓⡄⠀⠀⠐⡄⠀⠀⠾⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠙⠶⣤⡄⠀⢀⣧⠶⡏⠀⠀⢰⣧⢸⠀⢸⠀⢸⠁⡇⠀⠀⠀⣠⠀⠀⠀⠘⣶⢀⡀⠈⣶⠀⠀⠀⢱⠀⠀⢈⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⢻⣾⡀⢸⠀⠸⣼⣝⣞⡆⠁⠘⠄⠀⠀⠘⠁⠀⣿⠀⠙⠀⠀⠀⢸⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⢠⠋⠳⣄⣣⠀⠙⠺⢣⡯⠀⠀⠈⠒⡄⠀⠀⠀⡟⠀⣿⠀⠀⠀⡘⠀⢠⠃⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡧⡀⢠⡇⠀⠀⠀⠙⢃⡆⠴⡏⠁⠀⠀⠀⢰⠀⠀⠀⠀⣧⡰⠆⠀⠀⡰⠁⡠⠃⢰⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠉⢰⡆⠀⠀⠀⢈⡇⢰⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡍⠀⠀⡰⢁⠔⠁⠀⣼⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢖⡀⠀⠀⣜⠃⠘⣃⡀⠀⠀⣄⣵⠀⠀⠀⠀⣸⠀⢀⠜⡰⠁⠀⢀⡼⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠶⠞⠃⠀⠀⠈⠁⠀⠉⠀⠐⢦⣤⢰⠞⠁⠀⠎⡌⢀⣴⠞⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⠀⢸⢸⠀⠻⣥⣀⣀⣀⢀⡀⠀⣀⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣢⣸⡈⢄⠀⠀⠉⠀⢀⡀⠀⡀⠈⣉⠓⠢⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠘⠋⠁⠀⠀⠛⠈⠁⠀⠀⠀⠉⠫⡎⢰
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣦⣤⣇⣰`;

  // Fade-in effect for ASCII art (instant display, no typewriter)
  useEffect(() => {
    // Show ASCII art immediately on mount
    setAsciiText(fullAsciiArt);
  }, []); // Only run once on mount

  return (
    <section id="about" className="min-h-screen" style={{
      background: themeColors.background.sections?.about || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out',
      width: '100%',
      maxWidth: '100vw',
      contain: 'layout style'
    }}>
      {/* Hero Section */}
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-8">
            <div className="text-left w-full md:w-auto">
              <div className="ascii-container justify-start text-3xl md:text-4xl lg:text-5xl">
                <AsciiMorphText text="Hi, I'm Denisse" />
              </div>
              <div className="hero-subtitle justify-start text-base md:text-lg lg:text-xl mt-2">
                <div className="flex flex-wrap items-center justify-start">
                  <span className={isDarkMode ? 'hero-subtitle-dark' : 'hero-subtitle-light'}>I am a&nbsp;</span>
                  <TypewriterCarousel roles={roles} className={isDarkMode ? 'hero-subtitle-dark' : 'hero-subtitle-light'} />
                </div>
              </div>
              <div className="hero-buttons flex justify-start gap-3 mt-4">
                <button
                  className="hero-action-btn text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
                  onClick={() => {
                    window.open('/resume.pdf', '_blank');
                  }}
                >
                  Resume →
                </button>
                <Link
                  to="/contact"
                  className="hero-action-btn text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
                >
                  Contact →
                </Link>
              </div>
            </div>
            <div className="hidden md:block" style={{ 
              fontSize: '0.8rem', 
              lineHeight: '1', 
              fontFamily: 'monospace', 
              minHeight: '150px', 
              color: isDarkMode ? themeColors.primary : themeColors.colors.pink[500],
              animation: 'fadeIn 1s ease-in',
              opacity: asciiText ? 1 : 0
            }}>
              <pre style={{ margin: 0 }}>{asciiText}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* VR Headset Section - Interactive 3D Experience */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center">
            <div className="w-full md:max-w-3xl lg:max-w-5xl">
              <VRHeadset key={showMuseum ? 'headset-museum' : 'headset-idle'} onHeadsetActivated={() => setShowMuseum(true)} />
            </div>
          </div>
        </div>
      </div>

      {/* Immersive XR Gallery - "About Myself" Museum Experience */}
      {showMuseum && (
        <VRMuseumExperience onExit={() => setShowMuseum(false)} />
      )}
    </section>
  );
};

export default About;