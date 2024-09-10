System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _eventMessageChunker, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /**
         * Takes in a buffer of event messages and splits them into individual messages.
         * @param {Buffer} buffer
         * @api private
         */
        function eventMessageChunker(buffer) {
          /** @type Buffer[] */
          var messages = [];
          var offset = 0;

          while (offset < buffer.length) {
            var totalLength = buffer.readInt32BE(offset); // create new buffer for individual message (shares memory with original)

            var message = buffer.slice(offset, totalLength + offset); // increment offset to it starts at the next message

            offset += totalLength;
            messages.push(message);
          }

          return messages;
        }
        /**
         * @api private
         */


        module.exports = {
          eventMessageChunker: eventMessageChunker
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _eventMessageChunker = module.exports.eventMessageChunker;
      }, {});
    }
  };
});
//# sourceMappingURL=0dcc1a201d3b5976c9b6b4e2f666cc7da9d6ee38.js.map