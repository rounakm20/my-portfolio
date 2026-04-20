import { useEffect, useRef } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full ${itemClassName}`.trim()}
    style={{
      transformOrigin: 'top center',
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 48,
  itemScale = 0.035,
  itemStackDistance = 14,
  stackPosition = '10%',
  baseScale = 0.88,
  blurAmount = 0.7,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.scroll-stack-card'));
    if (!cards.length) return;

    cards.forEach((card, i) => {
      card.style.zIndex = i + 1;
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
    });

    let cardTops = [];
    let rafId = null;
    let lastScrollY = -1;

    // Measure natural positions WITHOUT resetting transforms mid-scroll
    // We do this only once at start and on resize (with a flag to skip if animating)
    const cachePositions = () => {
      // Temporarily remove transforms to get accurate measurements
      const saved = cards.map(c => c.style.transform);
      cards.forEach(c => { c.style.transform = 'none'; });

      // Force reflow once
      void container.offsetHeight;

      cardTops = cards.map(card => {
        let top = 0;
        let el = card;
        while (el && el !== document.documentElement) {
          top += el.offsetTop;
          el = el.offsetParent;
        }
        return top;
      });

      // Restore transforms immediately so no visual flash
      cards.forEach((c, i) => { c.style.transform = saved[i] || ''; });

      lastScrollY = -1; // force redraw
      scheduleUpdate();
    };

    const compute = () => {
      if (!cardTops.length) return;

      const scrollTop = window.scrollY;
      if (scrollTop === lastScrollY) return;
      lastScrollY = scrollTop;

      const viewportH = window.innerHeight;
      const stackPx = (parseFloat(stackPosition) / 100) * viewportH;
      const lastIdx = cards.length - 1;
      const lastPinStart = cardTops[lastIdx] - stackPx - itemStackDistance * lastIdx;
      const pinEnd = lastPinStart + viewportH * 0.6;

      cards.forEach((card, i) => {
        const naturalTop = cardTops[i];
        const pinStart = naturalTop - stackPx - itemStackDistance * i;

        // ── translateY ──
        let ty = 0;
        if (scrollTop >= pinStart && scrollTop <= pinEnd) {
          ty = scrollTop - naturalTop + stackPx + itemStackDistance * i;
        } else if (scrollTop > pinEnd) {
          ty = pinEnd - naturalTop + stackPx + itemStackDistance * i;
        }

        // ── scale: use a wider easing window to avoid abrupt jumps ──
        const nextPinStart = i < lastIdx
          ? cardTops[i + 1] - stackPx - itemStackDistance * (i + 1)
          : Infinity;

        let scaleProgress = 0;
        if (scrollTop > nextPinStart) {
          // Increased window from 0.18 → 0.45 for much smoother scale transition
          scaleProgress = Math.min(1, (scrollTop - nextPinStart) / Math.max(1, viewportH * 0.45));
        }

        // Ease-out cubic for smooth deceleration
        const eased = 1 - Math.pow(1 - scaleProgress, 3);
        const targetScale = baseScale + i * itemScale;
        const scale = 1 - eased * (1 - targetScale);

        // ── blur ──
        let blur = 0;
        if (blurAmount) {
          let above = 0;
          for (let j = i + 1; j <= lastIdx; j++) {
            const jStart = cardTops[j] - stackPx - itemStackDistance * j;
            if (scrollTop >= jStart) above++;
          }
          blur = above * blurAmount;
        }

        card.style.transform = `translate3d(0, ${ty}px, 0) scale(${scale})`;
        card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
      });
    };

    const scheduleUpdate = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(compute);
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(cachePositions, 200);
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Initial measurement after layout settles
    requestAnimationFrame(() => {
      requestAnimationFrame(cachePositions);
    });

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [itemDistance, itemScale, itemStackDistance, stackPosition, baseScale, blurAmount]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`.trim()}
      style={{ paddingBottom: '70vh' }}
    >
      <div className="px-4 md:px-10 lg:px-16">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;