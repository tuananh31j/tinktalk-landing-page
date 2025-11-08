"use client";

import React, { useEffect, useRef } from "react";
import styles from "./SVGBackground.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * SVGBackground
 * - Wraps children with an animated SVG background and scroll-driven card animations.
 * - Children will be wrapped into `.stack-cards__item` elements automatically.
 */
const SVGBackground: React.FC<Props> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    const itemClass = styles["stack-cards__item"]!;
    const slideUpClass = styles["slide-up"]!;
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = Array.from(container.querySelectorAll(`.${itemClass}`));
      if (!cards.length) return;

      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight + 300;
      const scrollPosition = window.scrollY;
      const scrollDown = scrollPosition > lastScrollTop.current;
      lastScrollTop.current = scrollPosition <= 0 ? 0 : scrollPosition;

      const progress = Math.max(
        0,
        (scrollPosition - containerRect.top + windowHeight) / (windowHeight * 2)
      );

      const numCards = cards.length;
      for (let index = numCards - 1; index >= 0; index--) {
        const card = cards[index] as HTMLElement;
        if (index === numCards - 1) {
          if (scrollPosition > containerRect.top - windowHeight * 0.2) {
            card.classList.add(slideUpClass);
          } else {
            card.classList.remove(slideUpClass);
          }
        } else {
          if (scrollDown) {
            if (index >= numCards - progress && index !== numCards - 1) {
              card.classList.add(slideUpClass);
            } else {
              card.classList.remove(slideUpClass);
            }
          } else {
            if (index > numCards - progress - 1 && index !== numCards - 1) {
              card.classList.add(slideUpClass);
            } else {
              card.classList.remove(slideUpClass);
            }
          }
        }
      }
    };

    const rafScroll = () => {
      onScroll();
      requestAnimationFrame(rafScroll);
    };

    // run on mount to set initial state
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Wrap children into stack-cards__item elements if they aren't already
  const items = React.Children.toArray(children).map((child, i) => (
    <div key={i} className={styles["stack-cards__item"]}>
      <div className={styles.inner}>{child}</div>
      <div className={styles.shadow} />
    </div>
  ));

  return (
    <div
      className={`${styles["stack-cards-container"]} ${className || ""}`}
      ref={containerRef}
    >
      <div className={styles.s__rays} aria-hidden>
        {/* simplified SVG background - keep markup lightweight */}
        <svg
          className={styles.a__scene}
          viewBox="0 0 400 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00F8F1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00F8F1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FFBD1E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFBD1E" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="g3" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FE848F" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FE848F" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={10 + i * 18}
              x2={10 + i * 18}
              y1={0}
              y2={600}
              stroke={
                i % 3 === 0 ? "url(#g1)" : i % 3 === 1 ? "url(#g2)" : "url(#g3)"
              }
              className={styles["animated-path"]}
              style={{ ["--duration" as any]: `${40 + i * 4}s` }}
            />
          ))}
        </svg>
      </div>

      <div className={styles["stack-cards"]}>{items}</div>
    </div>
  );
};

export default SVGBackground;
