import "@styles/style.css";

import Alpine from "alpinejs";
import { initAlpineComponents } from "@scripts/alpine-components";
import { initScrollAnimations } from "@scripts/animations";

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

/**
 * Standardized App Initialization
 */
const initApp = async () => {
  // 1. Alpine Setup
  window.Alpine = Alpine;
  initAlpineComponents();
  Alpine.start();

  // 2. Animations Setup
  // We use DOMContentLoaded to ensure elements are available for GSAP
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", () => initScrollAnimations());
  } else {
    initScrollAnimations();
  }
};

initApp().catch(console.error);