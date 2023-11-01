'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "21be940d7d015a0ff148d7ee9cb3c0d6",
".git/config": "085b42a5f82d6eee60275930b54e5151",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82d3fcf95ab94feda680bd33c27d83f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f700c2e94d4b8024d1d28e3bea5bac7",
".git/logs/refs/heads/master": "1f700c2e94d4b8024d1d28e3bea5bac7",
".git/logs/refs/remotes/origin/master": "49b2f41e4651ae5dc070ae2c64a11002",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0b/55e9b6803652940048709e4fda52b0ee83a4b4": "1d11cceeca1fabf4dd8f5caedced5461",
".git/objects/0f/997506a01886018e51d265bddc359210cdc47a": "b1fce85adfb32702fe393f52db364493",
".git/objects/11/ecea93989faa274c2ead6c52318fd584088ff6": "abd509b6a0b9334845a2f5fc1cb91a7a",
".git/objects/29/f1e32372faa8f80729bfaf60c1936741f836fe": "66c5b4a2d86a35b0e3a228f2a9d0f2fd",
".git/objects/2a/101da5903a940f2a8ea9b80d242352dc632c73": "69f5f19b8037c076bb225b031e713087",
".git/objects/2b/33e2fe67b215027991225b2119b0ddff2bb80d": "3c7fb76bc9d08dca699faa91306f3d02",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3f/6bb11a1a51bbbd6ca604d5b156cdd74b60f32a": "475ea4fa41e48fb57a7f2df7862803eb",
".git/objects/4a/66f596c03808ca8971906ff86561f2fb458fbb": "2ea87d9a614d52580448eaa39ae937c8",
".git/objects/4b/64efe06e72234358ddacd17cb843e75a0e0a8b": "cad60b2a904ad926f1c614cc5bac5bbe",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/600c51abdb804fe986a196163f72a179ee2b95": "079b72ea3ba647f601a39cf146c09886",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/e9d497db31f42eb5aa9647e7eccf95d15ffce8": "4fec04351bc510558db9d18ef81c7365",
".git/objects/5b/fedbbb47992af60322d8b6ca762b932f0ee11e": "b6547ce3f37b6589bd80e176feac7c5a",
".git/objects/5d/3139d58094bf5f8bc3da905c585470cf1d388a": "ef205476164089850dda72e233a0f5f0",
".git/objects/67/9cad8d3df77d63c5e73437d6bb8541f42bc6e6": "2d5cc4c9495be8ea91bfaecb500168d1",
".git/objects/6d/c616bae26b0c301cbe40ae1f33e2e771591df8": "24be0704912f25467b2675d904760e03",
".git/objects/6e/d5666625ef01763e7d6519f390089456aff9d2": "35f98756e217703c2617a0d8e71e6fd4",
".git/objects/70/c9ee319e1a0ae80e0427ba0b3cb3e16e2f09aa": "536370a4febc8e3c27f13def374c407f",
".git/objects/76/8cc4a2417c91702390e2c37628e46907cf3452": "f96458eef560b6a823dc31efbe313160",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/6e1b6cc460797b8af9e1b97eac064afef1baa7": "ca96defdb672e742946d0474170eabe0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/4e6fc130773e1fb1663d64a7a34fa87b6ad17f": "9ced9b0c4cb7002a3bb5ca16d124b104",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/ea6270efe43554327408d50bf0fd1b1040c35e": "946041656b53140a35b2768836145d3d",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9d/2c7366f9fb2ee9846ae4e5965f893b58ecaec6": "1483f22fb5602346399e7c0195bb255e",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/f2b245393de7b1d428b08fb3258d3f21adebee": "65de2492a16a5c9a83ab7eb47b51c0dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/037772e261024fec6fb9885de2886558387e88": "54966847ae9d8446cd530e3518719f08",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ce/ba082a2e34547a64b3009bbc05c520e9cbeb86": "2f352c3267f449b2803ba1128c189679",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e3ea0b3f6f61eb98e7a5e2fcb4fbf6f8efccf5": "5eea4cfe776bedc0661aa64f0c756a5e",
".git/objects/f7/86090c07c6c75e5e478f5bcdb245ea0acd4923": "959636008fefc04ca8997cfebf4bdc31",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/d4807e9950227223be5451defe01e31c843db6": "f73261255cc2a2e7f65367e7a801a86c",
".git/refs/heads/master": "8bfd4a4b0f54270dd36f4fc509a3d3c0",
".git/refs/remotes/origin/master": "8bfd4a4b0f54270dd36f4fc509a3d3c0",
"assets/AssetManifest.bin": "2b834aae0f6c772214a2d41094450dc4",
"assets/AssetManifest.json": "182306a797332d286a29b57dd82587e8",
"assets/assets/buildings_background.png": "482fe970177f5faa1f06e447d190ed00",
"assets/assets/cars.png": "513dcb262992d8b7dbe5c5fb8d8bb5db",
"assets/assets/contact_us.png": "a69b9f173fb311faa472b1a548f74833",
"assets/assets/email.png": "899baf7b009b6d9db373121cd7bd4c89",
"assets/assets/garage1.jpg": "4a83beefcd8c1bc99e0699ea076f0c7c",
"assets/assets/garage2.jpg": "649799f1eade2efdb3a4b96eaa3cfe83",
"assets/assets/location.png": "74adc2b5f33907a8a3184c2e2fe892c1",
"assets/assets/logo2.png": "9b0024cd5b9d36507bb0ffc9c9760e44",
"assets/assets/ls_logo.png": "179825836cb664587da12c0c55ffc302",
"assets/assets/person_pointing.png": "71cebe97fbbf2fee42edf984a5f7632f",
"assets/assets/phone.png": "06d120a87a4b8359ce72297068544b66",
"assets/assets/side_car.png": "802ba91933ca8988b6642f9e29413d83",
"assets/assets/tire.png": "bb9ec1060a9130eecb9ee7b052b721b1",
"assets/assets/world_map.png": "b16cb6c65d981e7b2fcf16a0b8ede579",
"assets/FontManifest.json": "3d3bbd93c030401194cf4ceedbeee9e8",
"assets/fonts/MaterialIcons-Regular.otf": "e9b9dbd49f3a46f9a48f8891ef1b3064",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "87076421adf42152ad573b9f6ea8c8a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "05045b44973ec6f895ccf765ae8a9127",
"/": "05045b44973ec6f895ccf765ae8a9127",
"main.dart.js": "92857ac96118d80fd3d812286fbca7fb",
"manifest.json": "0a4355de5b3c2b25a328278d29713d44",
"version.json": "57dce8a23fbebbe9d76f5f8df60753ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
