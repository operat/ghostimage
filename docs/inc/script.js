/*
 * Script
 */

var opt = {};

// ON LOAD

window.onload = function() {
   // Init GhostImage
   ghostimage.init();

   // Preload images
   opt.tools.preloadImages([
      'img/ghostimage-carina-herrmann.jpg',
      'img/ghostimage-death-to-stock-creative-03.jpg',
      'img/ghostimage-death-to-stock-lonely-commute-01.jpg',
      'img/ghostimage-death-to-stock-lonely-commute-06.jpg',
      'img/ghostimage-death-to-stock-lonely-commute-08.jpg'
   ]);
};

// MODULES

opt.tools = (function () {
   "use strict";

   var preloadImages = function (images) {
      for (var i = 0, x = images.length; i < x; i++) {
         var Preload = new Image();
         Preload.src = images[i];
      }
   };

   return {
      preloadImages: preloadImages
   };
})();
