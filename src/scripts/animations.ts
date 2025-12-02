import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimateType =
  | "fade-in"
  | "fade-up"
  | "slide-in-left"
  | "slide-in-right";

export function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const animatedElements = document.querySelectorAll<HTMLElement>("[data-animate]");
  const floatElements = document.querySelectorAll<HTMLElement>("[data-float]");

  animatedElements.forEach((el) => {
    const type = el.dataset.animate as AnimateType | undefined;
    const delay = parseFloat(el.dataset.delay || "0");
    const duration = parseFloat(el.dataset.duration || "0.8");

    const fromVars: gsap.TweenVars = prefersReducedMotion
      ? {}
      : { opacity: 0 };
    const toVars: gsap.TweenVars = prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          clearProps: "all"
        };

    if (!prefersReducedMotion) {
      switch (type) {
        case "fade-up":
          fromVars.y = 40;
          toVars.y = 0;
          break;
        case "slide-in-left":
          fromVars.x = -40;
          toVars.x = 0;
          break;
        case "slide-in-right":
          fromVars.x = 40;
          toVars.x = 0;
          break;
        default:
          break;
      }
    }

    gsap.fromTo(
      el,
      fromVars,
      {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  floatElements.forEach((el) => {
    const intensity = parseFloat(el.dataset.float || "1");
    const distance = 6 * intensity;

    if (prefersReducedMotion) return;

    gsap.to(el, {
      y: distance,
      duration: 3 + intensity,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
}
