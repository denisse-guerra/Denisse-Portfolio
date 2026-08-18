import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import uaLogo from '../../assets/badges/164-1641140_university-of-arizona-logo-png-removebg-preview (1).png';
import caeCdBadge from '../../assets/badges/cae-cd-removebg-preview.png';
import deepLearningAiLogo from '../../assets/badges/R.png';
import dataCampLogo from '../../assets/badges/DataCamp - Grafika_0.png';
import codecademyLogo from '../../assets/badges/codecademy-1024.webp';
import udemyLogo from '../../assets/badges/udemy_logo-de3e05e43e6a42b0bb1744adb6415d20-removebg-preview.png';
import comptiaSecurityPlus from '../../assets/badges/comptia-security-plus.png';

type CredentialImage = {
  src: string;
  alt: string;
};

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const credentials: Array<{
    id: string;
    images: CredentialImage[];
    title: string;
    subtitle: string;
    credentialUrl: string;
    status: string;
  }> = [
    {
      id: 'cyber-defense-cert',
      images: [
        { src: uaLogo, alt: 'University of Arizona' },
        { src: caeCdBadge, alt: 'NSA CAE-CD Centers of Academic Excellence' },
      ],
      title: 'Cyber Defense Certification',
      subtitle: 'NSA CAE-CD Designation · University of Arizona',
      credentialUrl: '',
      status: 'completed',
    },
    {
      id: 'chatgpt-prompt-engineering',
      images: [{ src: deepLearningAiLogo, alt: 'DeepLearning.AI' }],
      title: 'ChatGPT Prompt Engineering for Developers',
      subtitle: 'DeepLearning.AI',
      credentialUrl: '',
      status: 'completed',
    },
    {
      id: 'python-datacamp',
      images: [{ src: dataCampLogo, alt: 'DataCamp' }],
      title: 'Writing Efficient Python Code',
      subtitle: 'DataCamp',
      credentialUrl: '',
      status: 'completed',
    },
    {
      id: 'javascript-codecademy',
      images: [{ src: codecademyLogo, alt: 'Codecademy' }],
      title: 'Intermediate JavaScript',
      subtitle: 'Codecademy',
      credentialUrl: '',
      status: 'completed',
    },
    {
      id: 'php-mysql-udemy',
      images: [{ src: udemyLogo, alt: 'Udemy' }],
      title: 'PHP 8 and MySQL: The Full Guide',
      subtitle: 'Udemy',
      credentialUrl: '',
      status: 'completed',
    },
    {
      id: 'digital-marketing',
      images: [{ src: udemyLogo, alt: 'Udemy' }],
      title: 'Digital Marketing Certification',
      subtitle: 'Ascenso',
      credentialUrl: '',
      status: 'completed',
    },
    {
      id: 'security-plus',
      images: [{ src: comptiaSecurityPlus, alt: 'CompTIA Security+' }],
      title: 'CompTIA Security+',
      subtitle: 'In Progress (Target Q3 2026)',
      credentialUrl: '',
      status: 'in-progress',
    },
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4 flex items-center justify-center gap-2">
                    {credential.images.map((image) => (
                      <img
                        key={image.alt}
                        src={image.src}
                        alt={image.alt}
                        className={`${
                          credential.images.length > 1
                            ? 'w-20 h-20 md:w-24 md:h-24'
                            : 'w-32 h-32 md:w-40 md:h-40'
                        } object-contain transition-transform duration-300 group-hover:scale-105`}
                        loading="lazy"
                        width={credential.images.length > 1 ? 96 : 160}
                        height={credential.images.length > 1 ? 96 : 160}
                        sizes={credential.images.length > 1 ? '(max-width: 768px) 80px, 96px' : '(max-width: 768px) 128px, 160px'}
                      />
                    ))}
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {credential.subtitle || (credential.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${credential.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;
