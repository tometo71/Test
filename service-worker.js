self.addEventListener('install', event => {
  console.log('Service Worker installing...');
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated.');
});

self.addEventListener('fetch', event => {
  // ভবিষ্যতে ক্যাশিং বা অফলাইন সাপোর্ট যোগ করতে পারো
  event.respondWith(fetch(event.request));
});