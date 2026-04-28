import { useEffect, useRef } from 'react';

export const useParticleCanvas = (theme) => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let accentColor = '0,229,160';

    const updateAccentColor = () => {
      if (theme === 'light') accentColor = '0,119,204';
      else if (theme === 'cyber') accentColor = '191,0,255';
      else accentColor = '0,229,160';
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const makeParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.4 + 0.5,
      a: Math.random() * 0.4 + 0.1,
    });

    const initParticles = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 130);
      pointsRef.current = Array.from({ length: count }, makeParticle);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pointsRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentColor},${p.a})`;
        ctx.fill();
      });

      for (let i = 0; i < pointsRef.current.length; i++) {
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const dx = pointsRef.current[i].x - pointsRef.current[j].x;
          const dy = pointsRef.current[i].y - pointsRef.current[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pointsRef.current[i].x, pointsRef.current[i].y);
            ctx.lineTo(pointsRef.current[j].x, pointsRef.current[j].y);
            ctx.strokeStyle = `rgba(${accentColor},${0.07 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    updateAccentColor();
    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [theme]);

  return canvasRef;
};
