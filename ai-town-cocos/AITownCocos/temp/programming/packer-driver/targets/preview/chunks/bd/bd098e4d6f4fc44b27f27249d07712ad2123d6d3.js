System.register(["__unresolved_0", "__unresolved_1", "dgram"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _Publisher, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_dgram) {
      _req0 = _dgram.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var util = require('../core').util;

        var dgram = require('dgram');

        var stringToBuffer = util.buffer.toBuffer;
        var MAX_MESSAGE_SIZE = 1024 * 8; // 8 KB

        /**
         * Publishes metrics via udp.
         * @param {object} options Paramters for Publisher constructor
         * @param {number} [options.port = 31000] Port number
         * @param {string} [options.clientId = ''] Client Identifier
         * @param {boolean} [options.enabled = false] enable sending metrics datagram
         * @api private
         */

        function Publisher(options) {
          // handle configuration
          options = options || {};
          this.enabled = options.enabled || false;
          this.port = options.port || 31000;
          this.clientId = options.clientId || '';
          this.address = options.host || '127.0.0.1';

          if (this.clientId.length > 255) {
            // ClientId has a max length of 255
            this.clientId = this.clientId.substr(0, 255);
          }

          this.messagesInFlight = 0;
        }

        Publisher.prototype.fieldsToTrim = {
          UserAgent: 256,
          SdkException: 128,
          SdkExceptionMessage: 512,
          AwsException: 128,
          AwsExceptionMessage: 512,
          FinalSdkException: 128,
          FinalSdkExceptionMessage: 512,
          FinalAwsException: 128,
          FinalAwsExceptionMessage: 512
        };
        /**
         * Trims fields that have a specified max length.
         * @param {object} event ApiCall or ApiCallAttempt event.
         * @returns {object}
         * @api private
         */

        Publisher.prototype.trimFields = function (event) {
          var trimmableFields = Object.keys(this.fieldsToTrim);

          for (var i = 0, iLen = trimmableFields.length; i < iLen; i++) {
            var field = trimmableFields[i];

            if (event.hasOwnProperty(field)) {
              var maxLength = this.fieldsToTrim[field];
              var value = event[field];

              if (value && value.length > maxLength) {
                event[field] = value.substr(0, maxLength);
              }
            }
          }

          return event;
        };
        /**
         * Handles ApiCall and ApiCallAttempt events.
         * @param {Object} event apiCall or apiCallAttempt event.
         * @api private
         */


        Publisher.prototype.eventHandler = function (event) {
          // set the clientId
          event.ClientId = this.clientId;
          this.trimFields(event);
          var message = stringToBuffer(JSON.stringify(event));

          if (!this.enabled || message.length > MAX_MESSAGE_SIZE) {
            // drop the message if publisher not enabled or it is too large
            return;
          }

          this.publishDatagram(message);
        };
        /**
         * Publishes message to an agent.
         * @param {Buffer} message JSON message to send to agent.
         * @api private
         */


        Publisher.prototype.publishDatagram = function (message) {
          var self = this;
          var client = this.getClient();
          this.messagesInFlight++;
          this.client.send(message, 0, message.length, this.port, this.address, function (err, bytes) {
            if (--self.messagesInFlight <= 0) {
              // destroy existing client so the event loop isn't kept open
              self.destroyClient();
            }
          });
        };
        /**
         * Returns an existing udp socket, or creates one if it doesn't already exist.
         * @api private
         */


        Publisher.prototype.getClient = function () {
          if (!this.client) {
            this.client = dgram.createSocket('udp4');
          }

          return this.client;
        };
        /**
         * Destroys the udp socket.
         * @api private
         */


        Publisher.prototype.destroyClient = function () {
          if (this.client) {
            this.client.close();
            this.client = void 0;
          }
        };

        module.exports = {
          Publisher: Publisher
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _Publisher = module.exports.Publisher;
      }, () => ({
        '../core': _req,
        'dgram': _req0
      }));
    }
  };
});
//# sourceMappingURL=bd098e4d6f4fc44b27f27249d07712ad2123d6d3.js.map