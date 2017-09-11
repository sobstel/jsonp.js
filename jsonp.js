/* jsonp.js, (c) Przemek Sobstel 2012, License: MIT */

// Uses CommonJS, AMD or browser globals to create a module.
// @see https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory);
  } else if (
    typeof exports === 'object' &&
    typeof exports.nodeName !== 'string'
  ) {
    // CommonJS
    factory(exports);
  } else {
    // Browser globals
    factory((root.PCACapturePlus = {}));
  }
})(this, function(exports) {

  exports.jsonp = (function () {
    var that = {};

    that.send = function(src, options) {
      var options = options || {},
      callback_name = options.callbackName || 'callback',
      on_success = options.onSuccess || function () {},
      on_timeout = options.onTimeout || function () {},
      timeout = options.timeout || 10;

      var timeout_trigger = window.setTimeout(function () {
        window[callback_name] = function () {};
        on_timeout();
      }, timeout * 1000);

      window[callback_name] = function (data) {
        window.clearTimeout(timeout_trigger);
        on_success(data);
      };

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = src;

      document.getElementsByTagName('head')[0].appendChild(script);
    };

    return that;
  })();

  // retain backwards-compatible name
  exports.$jsonp = exports.jsonp;

});
