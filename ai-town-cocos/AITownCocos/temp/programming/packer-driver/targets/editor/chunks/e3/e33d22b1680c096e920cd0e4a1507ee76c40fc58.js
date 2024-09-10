System.register(["__unresolved_0", "uuid/v4", "combined-stream", "isstream", "safe-buffer"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, _Multipart, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_uuidV) {
      _req = _uuidV.__cjsMetaURL;
    }, function (_combinedStream) {
      _req0 = _combinedStream.__cjsMetaURL;
    }, function (_isstream) {
      _req1 = _isstream.__cjsMetaURL;
    }, function (_safeBuffer) {
      _req2 = _safeBuffer.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var uuid = require('uuid/v4');

        var CombinedStream = require('combined-stream');

        var isstream = require('isstream');

        var Buffer = require('safe-buffer').Buffer;

        function Multipart(request) {
          this.request = request;
          this.boundary = uuid();
          this.chunked = false;
          this.body = null;
        }

        Multipart.prototype.isChunked = function (options) {
          var self = this;
          var chunked = false;
          var parts = options.data || options;

          if (!parts.forEach) {
            self.request.emit('error', new Error('Argument error, options.multipart.'));
          }

          if (options.chunked !== undefined) {
            chunked = options.chunked;
          }

          if (self.request.getHeader('transfer-encoding') === 'chunked') {
            chunked = true;
          }

          if (!chunked) {
            parts.forEach(function (part) {
              if (typeof part.body === 'undefined') {
                self.request.emit('error', new Error('Body attribute missing in multipart.'));
              }

              if (isstream(part.body)) {
                chunked = true;
              }
            });
          }

          return chunked;
        };

        Multipart.prototype.setHeaders = function (chunked) {
          var self = this;

          if (chunked && !self.request.hasHeader('transfer-encoding')) {
            self.request.setHeader('transfer-encoding', 'chunked');
          }

          var header = self.request.getHeader('content-type');

          if (!header || header.indexOf('multipart') === -1) {
            self.request.setHeader('content-type', 'multipart/related; boundary=' + self.boundary);
          } else {
            if (header.indexOf('boundary') !== -1) {
              self.boundary = header.replace(/.*boundary=([^\s;]+).*/, '$1');
            } else {
              self.request.setHeader('content-type', header + '; boundary=' + self.boundary);
            }
          }
        };

        Multipart.prototype.build = function (parts, chunked) {
          var self = this;
          var body = chunked ? new CombinedStream() : [];

          function add(part) {
            if (typeof part === 'number') {
              part = part.toString();
            }

            return chunked ? body.append(part) : body.push(Buffer.from(part));
          }

          if (self.request.preambleCRLF) {
            add('\r\n');
          }

          parts.forEach(function (part) {
            var preamble = '--' + self.boundary + '\r\n';
            Object.keys(part).forEach(function (key) {
              if (key === 'body') {
                return;
              }

              preamble += key + ': ' + part[key] + '\r\n';
            });
            preamble += '\r\n';
            add(preamble);
            add(part.body);
            add('\r\n');
          });
          add('--' + self.boundary + '--');

          if (self.request.postambleCRLF) {
            add('\r\n');
          }

          return body;
        };

        Multipart.prototype.onRequest = function (options) {
          var self = this;
          var chunked = self.isChunked(options);
          var parts = options.data || options;
          self.setHeaders(chunked);
          self.chunked = chunked;
          self.body = self.build(parts, chunked);
        };

        exports.Multipart = Multipart; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _Multipart = module.exports.Multipart;
      }, () => ({
        'uuid/v4': _req,
        'combined-stream': _req0,
        'isstream': _req1,
        'safe-buffer': _req2
      }));
    }
  };
});
//# sourceMappingURL=e33d22b1680c096e920cd0e4a1507ee76c40fc58.js.map