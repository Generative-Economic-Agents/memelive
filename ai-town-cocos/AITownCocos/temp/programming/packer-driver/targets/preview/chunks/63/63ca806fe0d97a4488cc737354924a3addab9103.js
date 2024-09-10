System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _parseEvent, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var parseMessage = require('./parse-message').parseMessage;
        /**
         *
         * @param {*} parser
         * @param {Buffer} message
         * @param {*} shape
         * @api private
         */


        function parseEvent(parser, message, shape) {
          var parsedMessage = parseMessage(message); // check if message is an event or error

          var messageType = parsedMessage.headers[':message-type'];

          if (messageType) {
            if (messageType.value === 'error') {
              throw parseError(parsedMessage);
            } else if (messageType.value !== 'event') {
              // not sure how to parse non-events/non-errors, ignore for now
              return;
            }
          } // determine event type


          var eventType = parsedMessage.headers[':event-type']; // check that the event type is modeled

          var eventModel = shape.members[eventType.value];

          if (!eventModel) {
            return;
          }

          var result = {}; // check if an event payload exists

          var eventPayloadMemberName = eventModel.eventPayloadMemberName;

          if (eventPayloadMemberName) {
            var payloadShape = eventModel.members[eventPayloadMemberName]; // if the shape is binary, return the byte array

            if (payloadShape.type === 'binary') {
              result[eventPayloadMemberName] = parsedMessage.body;
            } else {
              result[eventPayloadMemberName] = parser.parse(parsedMessage.body.toString(), payloadShape);
            }
          } // read event headers


          var eventHeaderNames = eventModel.eventHeaderMemberNames;

          for (var i = 0; i < eventHeaderNames.length; i++) {
            var name = eventHeaderNames[i];

            if (parsedMessage.headers[name]) {
              // parse the header!
              result[name] = eventModel.members[name].toType(parsedMessage.headers[name].value);
            }
          }

          var output = {};
          output[eventType.value] = result;
          return output;
        }

        function parseError(message) {
          var errorCode = message.headers[':error-code'];
          var errorMessage = message.headers[':error-message'];
          var error = new Error(errorMessage.value || errorMessage);
          error.code = error.name = errorCode.value || errorCode;
          return error;
        }
        /**
         * @api private
         */


        module.exports = {
          parseEvent: parseEvent
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _parseEvent = module.exports.parseEvent;
      }, () => ({
        './parse-message': _req
      }));
    }
  };
});
//# sourceMappingURL=63ca806fe0d97a4488cc737354924a3addab9103.js.map