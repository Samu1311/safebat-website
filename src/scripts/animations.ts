import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimateType =
  | "fade-in"
  | "fade-up"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-up";

export function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // 1. Standard Scroll Animations
  const animatedElements = document.querySelectorAll<HTMLElement>("[data-animate]");
  
  animatedElements.forEach((el) => {
    // If element is part of a stagger group, skip individual init
    if (el.closest('[data-stagger-container]')) return;

    const type = (el.dataset.animate as AnimateType) || "fade-up";
    const delay = parseFloat(el.dataset.delay || "0");
    const duration = parseFloat(el.dataset.duration || "0.8");

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0, x: 0 });
      return;
    }

    const vars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    };

    switch (type) {
      case "fade-up": vars.y = 40; break;
      case "slide-in-left": vars.x = -40; break;
      case "slide-in-right": vars.x = 40; break;
      case "scale-up": vars.scale = 0.9; break;
      case "fade-in": break; // just opacity
    }

    gsap.from(el, vars);
  });

  // 2. Staggered Grid Animations (New)
  const staggerContainers = document.querySelectorAll<HTMLElement>("[data-stagger-container]");
  
  staggerContainers.forEach((container) => {
    if (prefersReducedMotion) return;
    
    const children = container.querySelectorAll<HTMLElement>("[data-animate]");
    
    gsap.from(children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // 3. Floating/Hover Elements
  const floatElements = document.querySelectorAll<HTMLElement>("[data-float]");
  floatElements.forEach((el) => {
    const intensity = parseFloat(el.dataset.float || "1");
    if (prefersReducedMotion) return;

    gsap.to(el, {
      y: 6 * intensity,
      duration: 3 + intensity,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
}