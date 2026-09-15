self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    self.clients.claim().then(function () {
      return self.registration.unregister();
    })
  );
});
