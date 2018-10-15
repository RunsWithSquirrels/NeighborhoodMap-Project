const cacheVersion = 1;
const cacheStatic = `static-cache-v${cacheVersion}`;
const cacheImages = `cache-of-images-v`;
const cacheAssorted = `assorted-cache-v`;
const allCaches = [
    cacheStatic,
    cacheImages,
    cacheAssorted
];


function imagesURLS(url) {
    let img_types = ["jpg", "jpeg", "png", "gif"];
    var images = false;
    for (let type of img_types) {
        if (url.endsWith(type)) { images = true; break; }
    }
    return images;
}

function cacheKeep(nameOfCache, cloneForRequest, cloneForResponse) {
    return caches.open(nameOfCache).then((cache) => {
        return cache.put(cloneForRequest, cloneForResponse)
    });
}


function outsideSources(url) {
   return url.startsWith('http');
}



self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheStatic).then((cache) => {
            console.log("Current Cache: ", cacheStatic);
            return cache.addAll([
                "/",
                "/index.html"
            ]);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((nameOfCaches) => {
            console.log("Clearing Old Caches...");
            Promise.all(
                nameOfCaches.map((nameOfCache) => {
                    if (!allCaches.includes(nameOfCache)) {
                        console.log(`Deleting: ${nameOfCache}`);
                        return caches.delete(nameOfCache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.method === "GET") {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) { return result; }
                // var url = new URL(event.request.url);
                try {
                    return fetch(event.request).then((response) => {
                        let cacheUse = imagesURLS(event.request.url) ? cacheImages : cacheStatic;
                        // if(url.origin !== location.origin) { cacheUse = cacheAssorted; }
                        // else { cacheUse = imagesURLS(event.request.url) ? cacheImages : cacheStatic; }
                        cacheKeep(cacheUse, event.request.clone(), response.clone());
                        return response;
                    });
                }
                catch (error) {
                    console.log(error);
                }
            })
        );
    }
    else {
        event.respondWith(fetch(event.request));
    }
});
