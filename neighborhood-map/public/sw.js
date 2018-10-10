const cacheVersion = 1;
const cacheStatic = `static-cache-v${cacheVersion}`;
const cacheImages = `cache-of-images-v`;
const cacheAssorted = `assorited-cache-v`;
const allCaches = [
    cacheStatic,
    cacheImages,
    cacheAssorted
];


function imagesURLs(url) {
    let img_types = ["jpg", "jpeg", "png", "gif"];
    var images = false;
    for (let type of img_types) {
        if (url.endsWith(type)) { images = true; break; }
    }
    return images;
}

function storeInCache(cacheName, requestClone, responseClone) {
    return caches.open(cacheName).then(function (cache) {
        return cache.put(requestClone, responseClone)
    });
}

function isExternalResources(url) {
    return url.startsWith('http');
}



self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheStatic).then(function (cache) {
            console.log("Current Cache: ", cacheStatic);
            return cache.addAll([
                "/",
                "/index.html"
            ]);
        })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            console.log("Clearing Old Caches...");
            Promise.all(
                cacheNames.map(function (cacheName) {
                    if (!allCaches.includes(cacheName)) {
                        console.log(`Deleting: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", function (event) {
    if (event.request.method === "GET") {
        event.respondWith(
            caches.match(event.request).then(function (result) {
                if (result) { return result; }
                var url = new URL(event.request.url);
                try {
                    return fetch(event.request).then(function (response) {
                        // if(url.origin !== location.origin) { useCache = cacheAssorted; }
                        // else { useCache = isImageURL(event.request.url) ? cacheImages : cacheStatic; }
                        let useCache = imagesURLs(event.request.url) ? cacheImages : cacheStatic;
                        storeInCache(useCache, event.request.clone(), response.clone());
                        return response;
                    });
                }
                catch (e) {
                    console.log(e);
                }
            })
        );
    }
    else {
        event.respondWith(fetch(event.request));
    }
});
