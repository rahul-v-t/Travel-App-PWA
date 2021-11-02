self.addEventListener("install", function (event) {
    console.log("Installed",event);
});

self.addEventListener("activate",function (event) {
    console.log("Activated",event);
    return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    console.log("Service worker fetch", event);
    event.respondwith(null);
});
