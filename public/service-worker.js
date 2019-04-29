try {
  if (workbox) {
    console.log('Workbox is loaded');

    workbox.precaching.precacheAndRoute(self.__precacheManifest);
  } else {
    console.log('Workbox didn\'t loaded');
  }
}
catch(error) {
  console.log(error);
}
