System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, _buildRequest, _extractError, _extractData, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var util = require('../util');

        var JsonBuilder = require('../json/builder');

        var JsonParser = require('../json/parser');

        var populateHostPrefix = require('./helpers').populateHostPrefix;

        function buildRequest(req) {
          var httpRequest = req.httpRequest;
          var api = req.service.api;
          var target = api.targetPrefix + '.' + api.operations[req.operation].name;
          var version = api.jsonVersion || '1.0';
          var input = api.operations[req.operation].input;
          var builder = new JsonBuilder();
          if (version === 1) version = '1.0';

          if (api.awsQueryCompatible) {
            if (!httpRequest.params) {
              httpRequest.params = {};
            } // because Query protocol does this.


            Object.assign(httpRequest.params, req.params);
          }

          httpRequest.body = builder.build(req.params || {}, input);
          httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
          httpRequest.headers['X-Amz-Target'] = target;
          populateHostPrefix(req);
        }

        function extractError(resp) {
          var error = {};
          var httpResponse = resp.httpResponse;
          error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';

          if (typeof error.code === 'string') {
            error.code = error.code.split(':')[0];
          }

          if (httpResponse.body.length > 0) {
            try {
              var e = JSON.parse(httpResponse.body.toString());
              var code = e.__type || e.code || e.Code;

              if (code) {
                error.code = code.split('#').pop();
              }

              if (error.code === 'RequestEntityTooLarge') {
                error.message = 'Request body must be less than 1 MB';
              } else {
                error.message = e.message || e.Message || null;
              } // The minimized models do not have error shapes, so
              // without expanding the model size, it's not possible
              // to validate the response shape (members) or
              // check if any are sensitive to logging.
              // Assign the fields as non-enumerable, allowing specific access only.


              for (var key in e || {}) {
                if (key === 'code' || key === 'message') {
                  continue;
                }

                error['[' + key + ']'] = 'See error.' + key + ' for details.';
                Object.defineProperty(error, key, {
                  value: e[key],
                  enumerable: false,
                  writable: true
                });
              }
            } catch (e) {
              error.statusCode = httpResponse.statusCode;
              error.message = httpResponse.statusMessage;
            }
          } else {
            error.statusCode = httpResponse.statusCode;
            error.message = httpResponse.statusCode.toString();
          }

          resp.error = util.error(new Error(), error);
        }

        function extractData(resp) {
          var body = resp.httpResponse.body.toString() || '{}';

          if (resp.request.service.config.convertResponseTypes === false) {
            resp.data = JSON.parse(body);
          } else {
            var operation = resp.request.service.api.operations[resp.request.operation];
            var shape = operation.output || {};
            var parser = new JsonParser();
            resp.data = parser.parse(body, shape);
          }
        }
        /**
         * @api private
         */


        module.exports = {
          buildRequest: buildRequest,
          extractError: extractError,
          extractData: extractData
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _buildRequest = module.exports.buildRequest;
        _extractError = module.exports.extractError;
        _extractData = module.exports.extractData;
      }, () => ({
        '../util': _req,
        '../json/builder': _req0,
        '../json/parser': _req1,
        './helpers': _req2
      }));
    }
  };
});
//# sourceMappingURL=0ab2b705064b0b32b583ef6344d9b60c26e8a664.js.map