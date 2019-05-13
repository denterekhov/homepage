/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/avatar.svg",
    "revision": "d415b6b348f0e22561419716b570a763"
  },
  {
    "url": "assets/stylesheets/base.css",
    "revision": "a1f0212bf5b22e4ad1fed80587f222ae"
  },
  {
    "url": "assets/stylesheets/starwars-glyphicons.css",
    "revision": "9aca38825fe7465c39f8cbb56da14607"
  },
  {
    "url": "assets/stylesheets/style.css",
    "revision": "cc9cb49fcdb1859e9fda5319be8d547d"
  },
  {
    "url": "index.html",
    "revision": "4114c8d5c48fc6cfe3c4f3296fd46b62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
