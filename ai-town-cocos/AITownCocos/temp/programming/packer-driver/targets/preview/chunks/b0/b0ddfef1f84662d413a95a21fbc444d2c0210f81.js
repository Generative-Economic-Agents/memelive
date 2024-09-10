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

        /**
         * What is necessary to create an event stream in node?
         *  - http response stream
         *  - parser
         *  - event stream model
         */
        var EventMessageChunkerStream = require('../event-stream/event-message-chunker-stream').EventMessageChunkerStream;

        var EventUnmarshallerStream = require('../event-stream/event-message-unmarshaller-stream').EventUnmarshallerStream;

        function createEventStream(stream, parser, model) {
          var eventStream = new EventUnmarshallerStream({
            parser: parser,
            eventStreamModel: model
          });
          var eventMessageChunker = new EventMessageChunkerStream();
          stream.pipe(eventMessageChunker).pipe(eventStream);
          stream.on('error', function (err) {
            eventMessageChunker.emit('error', err);
          });
          eventMessageChunker.on('error', function (err) {
            eventStream.emit('error', err);
          });
          return eventStream;
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
        '../event-stream/event-message-chunker-stream': _req,
        '../event-stream/event-message-unmarshaller-stream': _req0
      }));
    }
  };
});
//# sourceMappingURL=b0ddfef1f84662d413a95a21fbc444d2c0210f81.js.map