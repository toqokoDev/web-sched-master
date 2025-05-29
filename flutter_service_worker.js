'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f30a36fb1b703489666e9bd0b9615a92",
".git/config": "02f98efd5763834148b865997d4d843b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7405367dedbd3fbc94d432d34490f3fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "572896c13c37cbbc9d93bdb1517c3a69",
".git/logs/refs/heads/main": "1a8ffc8688de40cf30f3674d17b5ef48",
".git/logs/refs/remotes/origin/main": "77951b86aa1c1e1d8d228b1853390c3c",
".git/objects/03/34ba93dc455fc566ba1b42fd8dd00a0873beef": "ebbbda56d88c135ee37ea9450b209b0c",
".git/objects/04/adbfe2a2c2f385fe88afe68776b31139a50fb0": "4b94490afc77797226e4899415245bf3",
".git/objects/08/d54414ab86e6dddf7cb3b8b37f7905ad594cbe": "917ec194b04e10c7294986a30bb24775",
".git/objects/0b/cb7042a8d82b163d3d1d773294953d8155c4a1": "763944150262455fae2234d531e83404",
".git/objects/0f/5bf53c7d30326822df3fb7576ce79c1999dab6": "75a3ad2ae63d2092c9673b550b802f69",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/34/9b9c5c51d20030b679bc346e845541a1fda3f0": "f268293503f68b2d063f78a534190ddf",
".git/objects/3a/1fd18167064c3fcb16aa2ec6f2ad9a0da222cf": "e0e354630ad1ac6e51e5e31f89017843",
".git/objects/41/aac6b896555c557cf0575969a67b726ecdc6f9": "64ac920155b256c09df1b53f81b20fa2",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/4e/c7dba0f00bf7db0b7897d27de04ae4898bd731": "a156c561217835240eec3af0e8c98c16",
".git/objects/4f/588f30a6b44b9780f273a4b1c52b6b308e3281": "c812657873bba79b5d2a6c6d40836c7e",
".git/objects/50/f37a3bd708445e1798762ca3b60343d8d22d9e": "184f280e1577b897c84043925013fe7e",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/5b/6e100dc7653d8098e8a59ff1d16d7b211310eb": "2cbbc2018f0ce000c253acdcccc0a8b8",
".git/objects/5d/19ff7fc4666003c26bdd8ddd689ffe0d5f89a5": "365fa1b4e2f3a8bcf4df4e71a6166ee9",
".git/objects/5d/6259f3c0f5556946d51f17a35d9c0ba4fd8b51": "f1a034a8197c74108d4ca6165442d8e1",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/12eae54ba84efb9978516a6bc86e654207c0db": "2c64caf2f222188ad12093064e5b38e4",
".git/objects/61/07d29bf52d8fa35034b6feb6a44b19800d47c8": "7be6b6ed51e4460f22a7b9a1246b134b",
".git/objects/69/f1d06758073ccc495d40dd5f76ecea5081546f": "588f39b89c0c6f1105301e0cd10663ca",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/e17c7ca094df3770e9d0d9e2161ffa3fccf440": "4bde6913da05d967341ae2aa6e16cc61",
".git/objects/74/1971fa0a474e17aa7ef19fff7aa6b713f1aebe": "bf9fd6c0648376a886388a95d6e1f5b9",
".git/objects/75/8862130ffd3c5b7fb043b0421ff05444a6a38f": "7f00e4292f905243898d8f060b99fa4b",
".git/objects/75/d7472e01fef2c89c4d7c88daab2a8ca000d75e": "92d5efee573d830dffbab235b4d13215",
".git/objects/76/a467b22a578d7751750ad73cef8b2e922d95d5": "816f6c710a66441bdc66c667c5ff45c3",
".git/objects/78/7454d4ea41968607d4614cad0cff6d72f742de": "b2285f83782d64b1d5549873ca08df6f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5fc021d10f3311db622be40b1927ba56980f45": "5684c727749d22cc1d8e78ecbdcccef1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4b1e78951dddbc9892e5e4844b7572eac6d0c1": "5381df7c8bf10f3a68072d5e6ece15bd",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/9166e1204ae6e7f0566836b7d259226e452f07": "ed80bb937c67f0498c68b51f4e54e5b4",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/e19183638a2d4a9a7a711b45a57f9eec6a9abf": "13b75be614b624f4627d6eb61b32e240",
".git/objects/ab/8c72afa14e582cd6c5a006e65042e9f37e538d": "61d58bad016509c01f17021e93babcd4",
".git/objects/ad/f8d8e81bac78da145b4cd15a5fb7f2c21b0ad5": "4b937e6694a686f5eeb9ffdad30838da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b5e223368180a42737ec586f162ee9cf0c1983": "4e9f461bf55991723b1864e4e7707e3b",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/b49028947160b24f684fe9bc446edf0020c808": "1c87f85c8676bd06f5035402e0cd96fe",
".git/objects/c8/367ab216d528a329cf14e39d61917198535edf": "2ef99689c2ec7262b043a06639145823",
".git/objects/cd/6eb6198b6b91d7a4b49386b6a2d846449527c6": "e38814a36287f670b09bed57ba4e4184",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3d055abf17a1f8f8ef6cd9266e58869c860401": "f37ab44c3cf8f28468dcaf0aefa862f1",
".git/objects/da/0963eb934fe421a549bfd12c0430105216a223": "a5c3e01725bb80a2fe1c1ea5513c4004",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/de/77124194e39cd42d648a5566fd596d01ccdaed": "991c11136a036829fea532a646e297a6",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e5/3fa0a7fbb2b80f79987f5e1049b023fa51183b": "2201607fefafa8bafe5e91a9611184a6",
".git/objects/e9/a7f9059fa864caae035df98b1e3e7a5de10e15": "5859a6a61ff23d6a2eac5316549fc89e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/39228f24d9217a97d799276c856167ea62e908": "9cf4ad7c4ce84693336b15812299bdb7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/eaaeab285d5e9d40a82dbc457a1a875bcbd7b8": "c91241f06b95b9e8a575455c1e9f3d30",
".git/objects/fa/f417afd4cd01d1f3253befd52dbd57f1944168": "b737cc7ddd2a23cc92681820d6153424",
".git/objects/fc/391a33fb8e0b4b4c5ea23a45f424d197280e29": "b6c71a1517615a47aa1850781c147913",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/refs/heads/main": "cc1995f7c9391d8ae2de123956ee9ad3",
".git/refs/remotes/origin/main": "cc1995f7c9391d8ae2de123956ee9ad3",
"assets/AssetManifest.bin": "0fe96f326b8e59ac68d3dcd321a40258",
"assets/AssetManifest.bin.json": "3f516bcc6c4fdb8e7329353215d30e4e",
"assets/AssetManifest.json": "1daeb64e3367edf65cfb1f4f3ff6677e",
"assets/assets/error/black.png": "9e0e6fbacc5b43356f8fbb1e0ad0be95",
"assets/assets/error/white.png": "a837622553f72b923e46932801fd083d",
"assets/assets/icons/active/favorite.png": "5843f1d665e8ce27b8320c7ec911b86d",
"assets/assets/icons/active/settings.png": "35c279ef9c74ceccda6a819f54a32969",
"assets/assets/icons/active/student.png": "5a610bddd3f11340f2910c1db7459f04",
"assets/assets/icons/active/teacher.png": "7d434137fa46c1dd159a1cbab858094a",
"assets/assets/icons/state/favorite.png": "44c36ca20431a8922187507fab798bd6",
"assets/assets/icons/state/settings.png": "4037882e92276ea270c66a54dd1de088",
"assets/assets/icons/state/student.png": "ac5ebe6c7311338c2e44054500493912",
"assets/assets/icons/state/teacher.png": "a2de5f9a4b93dcc985dfcaa1a3febc27",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "feb9f8d36f352e632f8b91981497f0d0",
"assets/NOTICES": "c49e4a120fbe427019b6694440cf7abe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ec1034f9de2bd40a63027d61874ba56c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "64de2934b3dacc734516f081b458c53f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon.png": "9d099c83bd57cdf1292d14e46f83f8f5",
"index.html": "b02915f4a51bd86762bf1a4cc4f5d1a8",
"/": "b02915f4a51bd86762bf1a4cc4f5d1a8",
"main.dart.js": "5c50b51e643d6dd377dd036d83156b0e",
"manifest.json": "cbe0f3005a0bf9c6bb098a5d4ab7facf",
"README.md": "1e01da540eb6e951bedd01440d689e14",
"version.json": "01748e5555bb0ad7719b4feada3625aa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
