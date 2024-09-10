System.register(["__unresolved_0", "stream", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _EventUnmarshallerStream, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_stream) {
      _req = _stream.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var Transform = require('stream').Transform;

        var parseEvent = require('./parse-event').parseEvent;
        /** @type {Transform} */


        function EventUnmarshallerStream(options) {
          options = options || {}; // set output to object mode

          options.readableObjectMode = true;
          Transform.call(this, options);
          this._readableState.objectMode = true;
          this.parser = options.parser;
          this.eventStreamModel = options.eventStreamModel;
        }

        EventUnmarshallerStream.prototype = Object.create(Transform.prototype);
        /**
         *
         * @param {Buffer} chunk
         * @param {string} encoding
         * @param {*} callback
         */

        EventUnmarshallerStream.prototype._transform = function (chunk, encoding, callback) {
          try {
            var event = parseEvent(this.parser, chunk, this.eventStreamModel);
            this.push(event);
            return callback();
          } catch (err) {
            callback(err);
          }
        };
        /**
         * @api private
         */


        module.exports = {
          EventUnmarshallerStream: EventUnmarshallerStream
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _EventUnmarshallerStream = module.exports.EventUnmarshallerStream;
      }, () => ({
        'stream': _req,
        './parse-event': _req0
      }));
    }
  };
});
//# sourceMappingURL=461be38f39cd5750e4824ca1f93300871e8505cb.js.map