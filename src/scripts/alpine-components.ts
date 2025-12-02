export function initAlpineComponents() {
  document.addEventListener("alpine:init", () => {
    window.Alpine.data("nav", () => ({
      open: false,
      toggle() {
        this.open = !this.open;
        document.body.classList.toggle("overflow-hidden", this.open);
      },
      close() {
        this.open = false;
        document.body.classList.remove("overflow-hidden");
      }
    }));
  });
}
