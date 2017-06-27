/*!
 * GhostImage v1.1
 * MIT License
 * https://operat.github.io/ghostimage
 */

var ghostimage = (function () {
   "use strict";

   /*
    * General variables
    */

   var options;
   var standard = {
      trigger: 'ghostimage__trigger'
   };

   /*
    * Public functions
    */

   var init = function (input) {
      options = input;

      if (typeof options == 'undefined') {
         options = standard;
      } else {
         options.trigger = options.trigger ? options.trigger : standard.trigger;
      }

      _createGhosts();
      _listenGhosts();
      _listenWindowResize();
   };

   /*
    * Private functions
    */

   var _createGhosts = function () {
      var trigger,
         ghosts;

      document.body.innerHTML += '<div id="ghostimage" class="ghostimage ghostimage--closed"><img src="" id="ghostimage-image" class="ghostimage__image"></div><div id="ghostimage-ghosts"></div>';

      trigger = document.getElementsByClassName(options.trigger);
      ghosts = document.getElementById('ghostimage-ghosts');

      ghosts.innerHTML = '';

      if (trigger) {
         for (var i = 0, x = trigger.length; i < x; i++) {
            var el = {};

            el.bounding = trigger[i].getBoundingClientRect();
            el.top = el.bounding.top + window.scrollY;
            el.left = el.bounding.left;
            el.height = el.bounding.height;
            el.width = el.bounding.width;

            ghosts.innerHTML += '<div class="ghostimage__ghost" style="position: absolute; top: ' + el.top + 'px; left: ' + el.left + 'px; width: ' + el.width + 'px; height: ' + el.height + 'px;" data-image="' + trigger[i].dataset.image + '"></div>';
         }
      }
   };

   var _listenGhosts = function () {
      var container = document.getElementById('ghostimage'),
         image = document.getElementById('ghostimage-image'),
         ghost = document.getElementsByClassName('ghostimage__ghost');

      if (ghost) {
         for (var i = 0, x = ghost.length; i < x; i++) {
            ghost[i].addEventListener('mouseover', function (e) {
               image.src = e.target.dataset.image;
               container.classList.toggle('ghostimage--closed');
            });

            ghost[i].addEventListener('mouseout', function (e) {
               image.src = '';
               container.classList.toggle('ghostimage--closed');
            });
         }
      }
   };

   var _listenWindowResize = function () {
      window.addEventListener('resize', function(event) {
         clearTimeout(resizeTimeout);
         var resizeTimeout = setTimeout(function() {
            _createGhosts();
            _listenGhosts();
         }, 500);
      });
   };

   /*
    * Public pointers
    */

   return {
      init: init
   };
})();
