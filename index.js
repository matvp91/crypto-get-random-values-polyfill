(function (global) {
  if (!global) {
    return;
  }
  if (!global.crypto) {
    global.crypto = {};
  }
  if (!global.crypto.getRandomValues) {
    global.crypto.getRandomValues = function (/* {ArrayBufferView} */ abv) {
      var l = abv.length;
      while (l--) {
        var r = Math.random() * Number.MAX_SAFE_INTEGER;
        abv[l] = Math.floor(r * 256);
      }
      return abv;
    };
  }
})(window);
