System.register(["__unresolved_0", "assert", "safer-buffer", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_assert) {
      _req = _assert.__cjsMetaURL;
    }, function (_saferBuffer) {
      _req0 = _saferBuffer.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
        var assert = require('assert');

        var Buffer = require('safer-buffer').Buffer;

        var ASN1 = require('./types');

        var errors = require('./errors'); // --- Globals


        var newInvalidAsn1Error = errors.newInvalidAsn1Error; // --- API

        function Reader(data) {
          if (!data || !Buffer.isBuffer(data)) throw new TypeError('data must be a node Buffer');
          this._buf = data;
          this._size = data.length; // These hold the "current" state

          this._len = 0;
          this._offset = 0;
        }

        Object.defineProperty(Reader.prototype, 'length', {
          enumerable: true,
          get: function get() {
            return this._len;
          }
        });
        Object.defineProperty(Reader.prototype, 'offset', {
          enumerable: true,
          get: function get() {
            return this._offset;
          }
        });
        Object.defineProperty(Reader.prototype, 'remain', {
          get: function get() {
            return this._size - this._offset;
          }
        });
        Object.defineProperty(Reader.prototype, 'buffer', {
          get: function get() {
            return this._buf.slice(this._offset);
          }
        });
        /**
         * Reads a single byte and advances offset; you can pass in `true` to make this
         * a "peek" operation (i.e., get the byte, but don't advance the offset).
         *
         * @param {Boolean} peek true means don't move offset.
         * @return {Number} the next byte, null if not enough data.
         */

        Reader.prototype.readByte = function (peek) {
          if (this._size - this._offset < 1) return null;
          var b = this._buf[this._offset] & 0xff;
          if (!peek) this._offset += 1;
          return b;
        };

        Reader.prototype.peek = function () {
          return this.readByte(true);
        };
        /**
         * Reads a (potentially) variable length off the BER buffer.  This call is
         * not really meant to be called directly, as callers have to manipulate
         * the internal buffer afterwards.
         *
         * As a result of this call, you can call `Reader.length`, until the
         * next thing called that does a readLength.
         *
         * @return {Number} the amount of offset to advance the buffer.
         * @throws {InvalidAsn1Error} on bad ASN.1
         */


        Reader.prototype.readLength = function (offset) {
          if (offset === undefined) offset = this._offset;
          if (offset >= this._size) return null;
          var lenB = this._buf[offset++] & 0xff;
          if (lenB === null) return null;

          if ((lenB & 0x80) === 0x80) {
            lenB &= 0x7f;
            if (lenB === 0) throw newInvalidAsn1Error('Indefinite length not supported');
            if (lenB > 4) throw newInvalidAsn1Error('encoding too long');
            if (this._size - offset < lenB) return null;
            this._len = 0;

            for (var i = 0; i < lenB; i++) this._len = (this._len << 8) + (this._buf[offset++] & 0xff);
          } else {
            // Wasn't a variable length
            this._len = lenB;
          }

          return offset;
        };
        /**
         * Parses the next sequence in this BER buffer.
         *
         * To get the length of the sequence, call `Reader.length`.
         *
         * @return {Number} the sequence's tag.
         */


        Reader.prototype.readSequence = function (tag) {
          var seq = this.peek();
          if (seq === null) return null;
          if (tag !== undefined && tag !== seq) throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) + ': got 0x' + seq.toString(16));
          var o = this.readLength(this._offset + 1); // stored in `length`

          if (o === null) return null;
          this._offset = o;
          return seq;
        };

        Reader.prototype.readInt = function () {
          return this._readTag(ASN1.Integer);
        };

        Reader.prototype.readBoolean = function () {
          return this._readTag(ASN1.Boolean) === 0 ? false : true;
        };

        Reader.prototype.readEnumeration = function () {
          return this._readTag(ASN1.Enumeration);
        };

        Reader.prototype.readString = function (tag, retbuf) {
          if (!tag) tag = ASN1.OctetString;
          var b = this.peek();
          if (b === null) return null;
          if (b !== tag) throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) + ': got 0x' + b.toString(16));
          var o = this.readLength(this._offset + 1); // stored in `length`

          if (o === null) return null;
          if (this.length > this._size - o) return null;
          this._offset = o;
          if (this.length === 0) return retbuf ? Buffer.alloc(0) : '';

          var str = this._buf.slice(this._offset, this._offset + this.length);

          this._offset += this.length;
          return retbuf ? str : str.toString('utf8');
        };

        Reader.prototype.readOID = function (tag) {
          if (!tag) tag = ASN1.OID;
          var b = this.readString(tag, true);
          if (b === null) return null;
          var values = [];
          var value = 0;

          for (var i = 0; i < b.length; i++) {
            var byte = b[i] & 0xff;
            value <<= 7;
            value += byte & 0x7f;

            if ((byte & 0x80) === 0) {
              values.push(value);
              value = 0;
            }
          }

          value = values.shift();
          values.unshift(value % 40);
          values.unshift(value / 40 >> 0);
          return values.join('.');
        };

        Reader.prototype._readTag = function (tag) {
          assert.ok(tag !== undefined);
          var b = this.peek();
          if (b === null) return null;
          if (b !== tag) throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) + ': got 0x' + b.toString(16));
          var o = this.readLength(this._offset + 1); // stored in `length`

          if (o === null) return null;
          if (this.length > 4) throw newInvalidAsn1Error('Integer too long: ' + this.length);
          if (this.length > this._size - o) return null;
          this._offset = o;
          var fb = this._buf[this._offset];
          var value = 0;

          for (var i = 0; i < this.length; i++) {
            value <<= 8;
            value |= this._buf[this._offset++] & 0xff;
          }

          if ((fb & 0x80) === 0x80 && i !== 4) value -= 1 << i * 8;
          return value >> 0;
        }; // --- Exported API


        module.exports = Reader; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'assert': _req,
        'safer-buffer': _req0,
        './types': _req1,
        './errors': _req2
      }));
    }
  };
});
//# sourceMappingURL=638d38bb5410a7ad66ee69cc7f6bcf7bd06e673b.js.map