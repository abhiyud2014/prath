import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('v');
          entry.target.parentElement
            ?.querySelectorAll('.fu,.fl')
            .forEach((el, i) => {
              setTimeout(() => el.classList.add('v'), i * 85);
            });
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fu,.fl');
    elements.forEach((el) => observer.observe(el));

    setTimeout(() => {
      document.querySelectorAll('.hero .fu,.sc').forEach((el, i) => {
        setTimeout(() => el.classList.add('v'), 200 + i * 90);
      });
    }, 150);

    return () => observer.disconnect();
  }, []);
};
