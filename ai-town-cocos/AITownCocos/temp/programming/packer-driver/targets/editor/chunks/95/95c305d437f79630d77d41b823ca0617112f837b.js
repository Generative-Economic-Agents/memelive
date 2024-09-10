System.register(["__unresolved_0", "__unresolved_1", "stream"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _EventMessageChunkerStream, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_stream) {
      _req0 = _stream.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var util = require('../core').util;

        var Transform = require('stream').Transform;

        var allocBuffer = util.buffer.alloc;
        /** @type {Transform} */

        function EventMessageChunkerStream(options) {
          Transform.call(this, options);
          this.currentMessageTotalLength = 0;
          this.currentMessagePendingLength = 0;
          /** @type {Buffer} */

          this.currentMessage = null;
          /** @type {Buffer} */

          this.messageLengthBuffer = null;
        }

        EventMessageChunkerStream.prototype = Object.create(Transform.prototype);
        /**
         *
         * @param {Buffer} chunk
         * @param {string} encoding
         * @param {*} callback
         */

        EventMessageChunkerStream.prototype._transform = function (chunk, encoding, callback) {
          var chunkLength = chunk.length;
          var currentOffset = 0;

          while (currentOffset < chunkLength) {
            // create new message if necessary
            if (!this.currentMessage) {
              // working on a new message, determine total length
              var bytesRemaining = chunkLength - currentOffset; // prevent edge case where total length spans 2 chunks

              if (!this.messageLengthBuffer) {
                this.messageLengthBuffer = allocBuffer(4);
              }

              var numBytesForTotal = Math.min(4 - this.currentMessagePendingLength, // remaining bytes to fill the messageLengthBuffer
              bytesRemaining // bytes left in chunk
              );
              chunk.copy(this.messageLengthBuffer, this.currentMessagePendingLength, currentOffset, currentOffset + numBytesForTotal);
              this.currentMessagePendingLength += numBytesForTotal;
              currentOffset += numBytesForTotal;

              if (this.currentMessagePendingLength < 4) {
                // not enough information to create the current message
                break;
              }

              this.allocateMessage(this.messageLengthBuffer.readUInt32BE(0));
              this.messageLengthBuffer = null;
            } // write data into current message


            var numBytesToWrite = Math.min(this.currentMessageTotalLength - this.currentMessagePendingLength, // number of bytes left to complete message
            chunkLength - currentOffset // number of bytes left in the original chunk
            );
            chunk.copy(this.currentMessage, // target buffer
            this.currentMessagePendingLength, // target offset
            currentOffset, // chunk offset
            currentOffset + numBytesToWrite // chunk end to write
            );
            this.currentMessagePendingLength += numBytesToWrite;
            currentOffset += numBytesToWrite; // check if a message is ready to be pushed

            if (this.currentMessageTotalLength && this.currentMessageTotalLength === this.currentMessagePendingLength) {
              // push out the message
              this.push(this.currentMessage); // cleanup

              this.currentMessage = null;
              this.currentMessageTotalLength = 0;
              this.currentMessagePendingLength = 0;
            }
          }

          callback();
        };

        EventMessageChunkerStream.prototype._flush = function (callback) {
          if (this.currentMessageTotalLength) {
            if (this.currentMessageTotalLength === this.currentMessagePendingLength) {
              callback(null, this.currentMessage);
            } else {
              callback(new Error('Truncated event message received.'));
            }
          } else {
            callback();
          }
        };
        /**
         * @param {number} size Size of the message to be allocated.
         * @api private
         */


        EventMessageChunkerStream.prototype.allocateMessage = function (size) {
          if (typeof size !== 'number') {
            throw new Error('Attempted to allocate an event message where size was not a number: ' + size);
          }

          this.currentMessageTotalLength = size;
          this.currentMessagePendingLength = 4;
          this.currentMessage = allocBuffer(size);
          this.currentMessage.writeUInt32BE(size, 0);
        };
        /**
         * @api private
         */


        module.exports = {
          EventMessageChunkerStream: EventMessageChunkerStream
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _EventMessageChunkerStream = module.exports.EventMessageChunkerStream;
      }, () => ({
        '../core': _req,
        'stream': _req0
      }));
    }
  };
});
//# sourceMappingURL=95c305d437f79630d77d41b823ca0617112f837b.js.map