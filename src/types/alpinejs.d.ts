declare module "alpinejs" {
  interface AlpineInstance {
    data(name: string, value: any): void;
    start(): void;
  }
  const Alpine: AlpineInstance;
  export default Alpine;
}
