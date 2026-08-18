// BACKUP: Original Stickers Animation Code
// This code was removed from About.tsx on 2026-07-20
// Can be restored if needed in the future

// Import from original component
import { stickers as stickerImages } from '../../assets';

// State needed for stickers
const [scrollProgress, setScrollProgress] = useState(0);
const sectionRef = useRef<HTMLDivElement>(null);

// Scroll progress tracking effect
useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (!sectionRef.current) {
          ticking = false;
          return;
        }

        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate how much of the section is in view
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(sectionHeight, windowHeight - rect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        const progress = visibleHeight / windowHeight;
        setScrollProgress(Math.min(1, Math.max(0, progress)));
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial call

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Stickers data
const stickers = [
  { id: 1, image: stickerImages[0], initialX: -180, initialY: -80, finalX: -550, finalY: -100, mobileInitialX: -120, mobileInitialY: -60, mobileFinalX: -250, mobileFinalY: -80 },
  { id: 2, image: stickerImages[1], initialX: 180, initialY: -60, finalX: 600, finalY: -250, mobileInitialX: 120, mobileInitialY: -40, mobileFinalX: 200, mobileFinalY: -120 },
  { id: 3, image: stickerImages[2], initialX: -160, initialY: 240, finalX: -200, finalY: 380, mobileInitialX: -100, mobileInitialY: 160, mobileFinalX: -120, mobileFinalY: 220 },
  { id: 4, image: stickerImages[3], initialX: 190, initialY: 260, finalX: 500, finalY: 150, mobileInitialX: 110, mobileInitialY: 180, mobileFinalX: 180, mobileFinalY: 120 },
  { id: 5, image: stickerImages[4], initialX: -200, initialY: 120, finalX: -200, finalY: -380, mobileInitialX: -130, mobileInitialY: 80, mobileFinalX: -130, mobileFinalY: -180 },
  { id: 6, image: stickerImages[5], initialX: 170, initialY: 100, finalX: 150, finalY: -360, mobileInitialX: 110, mobileInitialY: 70, mobileFinalX: 100, mobileFinalY: -160 },
  { id: 7, image: stickerImages[6], initialX: -130, initialY: -130, finalX: -450, finalY: -380, mobileInitialX: -90, mobileInitialY: -90, mobileFinalX: -200, mobileFinalY: -200 },
  { id: 8, image: stickerImages[7], initialX: 150, initialY: 200, finalX: 200, finalY: 350, mobileInitialX: 100, mobileInitialY: 140, mobileFinalX: 130, mobileFinalY: 200 },
  { id: 9, image: stickerImages[8], initialX: -140, initialY: 300, finalX: -500, finalY: 200, mobileInitialX: -90, mobileInitialY: 200, mobileFinalX: -180, mobileFinalY: 160 },
  { id: 10, image: stickerImages[9], initialX: 200, initialY: 120, finalX: 500, finalY: -380, mobileInitialX: 130, mobileInitialY: 80, mobileFinalX: 200, mobileFinalY: -180 },
  { id: 11, image: stickerImages[10], initialX: -220, initialY: -40, finalX: 600, finalY: 10, mobileInitialX: -140, mobileInitialY: -30, mobileFinalX: 220, mobileFinalY: 10 },
  { id: 12, image: stickerImages[11], initialX: 110, initialY: -180, finalX: 500, finalY: 300, mobileInitialX: 80, mobileInitialY: -120, mobileFinalX: 180, mobileFinalY: 180 },
  { id: 13, image: stickerImages[12], initialX: -120, initialY: 360, finalX: 500, finalY: -100, mobileInitialX: -80, mobileInitialY: 240, mobileFinalX: 180, mobileFinalY: -80 },
  { id: 14, image: stickerImages[13], initialX: 210, initialY: 40, finalX: -640, finalY: -220, mobileInitialX: 140, mobileInitialY: 30, mobileFinalX: -220, mobileFinalY: -140 },
  { id: 15, image: stickerImages[14], initialX: -100, initialY: 160, finalX: -400, finalY: 320, mobileInitialX: -70, mobileInitialY: 110, mobileFinalX: -150, mobileFinalY: 200 },
  { id: 16, image: stickerImages[15], initialX: 130, initialY: -100, finalX: -600, finalY: 100, mobileInitialX: 90, mobileInitialY: -70, mobileFinalX: -200, mobileFinalY: 80 },
];

// Sticker animation style function
const getStickerStyle = (sticker: typeof stickers[0]) => {
  const progress = scrollProgress; // Direct progress for spreading effect when closer
  const isMobile = window.innerWidth < 768;
  const isVerySmall = window.innerWidth < 375; // iPhone SE and similar

  // Use mobile positioning on smaller screens
  const initialX = isMobile ? sticker.mobileInitialX : sticker.initialX;
  const initialY = isMobile ? sticker.mobileInitialY : sticker.initialY;
  const finalX = isMobile ? sticker.mobileFinalX : sticker.finalX;
  const finalY = isMobile ? sticker.mobileFinalY : sticker.finalY;

  // Further constrain for very small screens to prevent ANY horizontal overflow
  const constrainedFinalX = isVerySmall
    ? Math.max(-100, Math.min(100, finalX * 0.3))
    : isMobile
      ? Math.max(-150, Math.min(150, finalX * 0.5))
      : finalX;
  const constrainedFinalY = isVerySmall ? finalY * 0.6 : finalY * 0.8;

  const x = initialX + (constrainedFinalX - initialX) * progress;
  const y = initialY + (constrainedFinalY - initialY) * progress;
  const scale = isVerySmall ? 0.4 + (0.15 * progress) : isMobile ? 0.6 + (0.2 * progress) : 0.8 + (0.4 * progress);
  const opacity = 0.9 + (0.1 * progress);
  const rotation = progress * 20; // Add slight rotation

  return {
    transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`,
    opacity,
    transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
    willChange: 'transform, opacity',
    width: isVerySmall ? '50px' : isMobile ? '60px' : '80px',
    height: isVerySmall ? '50px' : isMobile ? '60px' : '80px',
    filter: `drop-shadow(0 4px 8px ${themeColors.effects.dropShadow})`
  };
};

// JSX for stickers section
<div className="py-8 md:py-12" style={{
  background: isDarkMode
    ? 'transparent'
    : `linear-gradient(180deg, transparent 0%, ${withAlpha(themeColors.colors.pink[50], 0.5)} 50%, ${themeColors.colors.pink[25]} 100%)`
}}>
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex items-center justify-center relative" style={{ minHeight: '500px' }}>
      {/* Animated Stickers */}
      <div className="absolute inset-0 flex items-center justify-center">
        {stickers.map((sticker) => {
          const isVerySmall = window.innerWidth < 375;
          const isMobile = window.innerWidth < 768;
          return (
            <img
              key={sticker.id}
              src={sticker.image}
              alt=""
              className="absolute z-10 pointer-events-none select-none"
              style={getStickerStyle(sticker)}
              loading={sticker.id <= 4 ? "eager" : "lazy"}
              decoding="async"
              width={isVerySmall ? "50" : isMobile ? "60" : "80"}
              height={isVerySmall ? "50" : isMobile ? "60" : "80"}
            />
          );
        })}
      </div>

      {/* Content would go here */}
    </div>
  </div>
</div>
