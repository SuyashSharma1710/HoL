import { useEffect, useState, RefObject } from 'react';

export function useFloatingTheme(ref: RefObject<HTMLElement | null>) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkTheme = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      const elementsUnder = document.elementsFromPoint(x, y);
      const overDark = elementsUnder.some(el => el.getAttribute('data-theme') === 'dark');
      
      setIsDark(overDark);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkTheme);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(checkTheme, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return isDark;
}
