System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, _buildRequest, _extractError, _extractData, _unsetContentLength, __cjsMetaURL;

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
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req4 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var AWS = require('../core');

        var util = require('../util');

        var Rest = require('./rest');

        var Json = require('./json');

        var JsonBuilder = require('../json/builder');

        var JsonParser = require('../json/parser');

        var METHODS_WITHOUT_BODY = ['GET', 'HEAD', 'DELETE'];

        function unsetContentLength(req) {
          var payloadMember = util.getRequestPayloadShape(req);

          if (payloadMember === undefined && METHODS_WITHOUT_BODY.indexOf(req.httpRequest.method) >= 0) {
            delete req.httpRequest.headers['Content-Length'];
          }
        }

        function populateBody(req) {
          var builder = new JsonBuilder();
          var input = req.service.api.operations[req.operation].input;

          if (input.payload) {
            var params = {};
            var payloadShape = input.members[input.payload];
            params = req.params[input.payload];

            if (payloadShape.type === 'structure') {
              req.httpRequest.body = builder.build(params || {}, payloadShape);
              applyContentTypeHeader(req);
            } else if (params !== undefined) {
              // non-JSON payload
              req.httpRequest.body = params;

              if (payloadShape.type === 'binary' || payloadShape.isStreaming) {
                applyContentTypeHeader(req, true);
              }
            }
          } else {
            req.httpRequest.body = builder.build(req.params, input);
            applyContentTypeHeader(req);
          }
        }

        function applyContentTypeHeader(req, isBinary) {
          if (!req.httpRequest.headers['Content-Type']) {
            var type = isBinary ? 'binary/octet-stream' : 'application/json';
            req.httpRequest.headers['Content-Type'] = type;
          }
        }

        function buildRequest(req) {
          Rest.buildRequest(req); // never send body payload on GET/HEAD/DELETE

          if (METHODS_WITHOUT_BODY.indexOf(req.httpRequest.method) < 0) {
            populateBody(req);
          }
        }

        function extractError(resp) {
          Json.extractError(resp);
        }

        function extractData(resp) {
          Rest.extractData(resp);
          var req = resp.request;
          var operation = req.service.api.operations[req.operation];
          var rules = req.service.api.operations[req.operation].output || {};
          var parser;
          var hasEventOutput = operation.hasEventOutput;

          if (rules.payload) {
            var payloadMember = rules.members[rules.payload];
            var body = resp.httpResponse.body;

            if (payloadMember.isEventStream) {
              parser = new JsonParser();
              resp.data[rules.payload] = util.createEventStream(AWS.HttpClient.streamsApiVersion === 2 ? resp.httpResponse.stream : body, parser, payloadMember);
            } else if (payloadMember.type === 'structure' || payloadMember.type === 'list') {
              var parser = new JsonParser();
              resp.data[rules.payload] = parser.parse(body, payloadMember);
            } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
              resp.data[rules.payload] = body;
            } else {
              resp.data[rules.payload] = payloadMember.toType(body);
            }
          } else {
            var data = resp.data;
            Json.extractData(resp);
            resp.data = util.merge(data, resp.data);
          }
        }
        /**
         * @api private
         */


        module.exports = {
          buildRequest: buildRequest,
          extractError: extractError,
          extractData: extractData,
          unsetContentLength: unsetContentLength
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _buildRequest = module.exports.buildRequest;
        _extractError = module.exports.extractError;
        _extractData = module.exports.extractData;
        _unsetContentLength = module.exports.unsetContentLength;
      }, () => ({
        '../core': _req,
        '../util': _req0,
        './rest': _req1,
        './json': _req2,
        '../json/builder': _req3,
        '../json/parser': _req4
      }));
    }
  };
});
//# sourceMappingURL=fc710098c3de6bdf3f142e4d131432940dd4a042.js.map