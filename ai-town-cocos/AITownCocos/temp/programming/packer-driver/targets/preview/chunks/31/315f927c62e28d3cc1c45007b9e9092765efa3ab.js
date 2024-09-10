System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _createEventStream, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var eventMessageChunker = require('../event-stream/event-message-chunker').eventMessageChunker;

        var parseEvent = require('./parse-event').parseEvent;

        function createEventStream(body, parser, model) {
          var eventMessages = eventMessageChunker(body);
          var events = [];

          for (var i = 0; i < eventMessages.length; i++) {
            events.push(parseEvent(parser, eventMessages[i], model));
          }

          return events;
        }
        /**
         * @api private
         */


        module.exports = {
          createEventStream: createEventStream
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _createEventStream = module.exports.createEventStream;
      }, () => ({
        '../event-stream/event-message-chunker': _req,
        './parse-event': _req0
      }));
    }
  };
});
//# sourceMappingURL=315f927c62e28d3cc1c45007b9e9092765efa3ab.js.map