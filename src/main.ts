import "./styles/main.css";

import Alpine from "alpinejs";
import { initAlpineComponents } from "@scripts/alpine-components";
import { initScrollAnimations } from "@scripts/animations";

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

// Alpine init
window.Alpine = Alpine;
initAlpineComponents();
Alpine.start();

// Init scroll animations when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
});
