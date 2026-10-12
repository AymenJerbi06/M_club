"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "weekly classes" },
  { value: 12, suffix: "+", label: "coach specialties" },
  { value: 3, suffix: "+", label: "kids academy age" },
  { value: 630, suffix: " AM", label: "morning fitness" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        const start = performance.now();
        const duration = 1500;

        const tick = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const rendered = suffix === " AM" && count >= value ? "6:30" : count.toLocaleString("en-US");

  return (
    <span ref={ref}>
      {rendered}
      {suffix === " AM" ? " AM" : suffix}
    </span>
  );
}

export default function MClubStats() {
  return (
    <section className="stats-bar">
      <div className="stats-grid">
        {stats.map((stat) => (
          <article key={stat.label}>
            <strong>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
