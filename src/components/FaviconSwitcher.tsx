import { useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const FAVICON_SIZES = [32, 48, 192, 512] as const;

type FaviconSize = (typeof FAVICON_SIZES)[number];

function pickFaviconSize(): FaviconSize {
  const dpr = window.devicePixelRatio || 1;
  if (dpr >= 2) return 192;
  if (dpr >= 1.25) return 48;
  return 48;
}

function faviconHref(size: FaviconSize, theme: 'day' | 'night'): string {
  return `${import.meta.env.BASE_URL}favicons/favicon-${size}x${size}-${theme}.png?v=3`;
}

function upsertIconLink(id: string, attrs: Record<string, string>) {
  let link = document.head.querySelector<HTMLLinkElement>(`link#${id}`);
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    document.head.appendChild(link);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    link!.setAttribute(key, value);
  });
}

const FaviconSwitcher = () => {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const apply = () => {
      const theme: 'day' | 'night' = isDarkMode ? 'night' : 'day';
      const size = pickFaviconSize();

      upsertIconLink('app-favicon', {
        rel: 'icon',
        type: 'image/png',
        sizes: `${size}x${size}`,
        href: faviconHref(size, theme),
      });

      upsertIconLink('apple-touch-icon', {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `${import.meta.env.BASE_URL}favicons/apple-touch-icon.png?v=3`,
      });

      document.head
        .querySelectorAll('link[rel="icon"][media], link[rel="icon"]:not([id])')
        .forEach((node) => node.remove());
    };

    apply();

    const media = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    const onChange = () => apply();
    media.addEventListener('change', onChange);
    window.addEventListener('resize', onChange);

    return () => {
      media.removeEventListener('change', onChange);
      window.removeEventListener('resize', onChange);
    };
  }, [isDarkMode]);

  return null;
};

export default FaviconSwitcher;
