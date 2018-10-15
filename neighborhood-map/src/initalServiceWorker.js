//  Code for initalizing/starting service worker.
export default function initalServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function (reg) {
        console.log('Service worker registration worked!', reg);
      })
      .catch(function (error) {
        console.log('Service worker registration failed with the following error:' + error);
      });
  }
}