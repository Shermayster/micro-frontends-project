export function unmount() {
  const app = document.querySelector("micro-app");
  app?.delete();
}
