System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, _buildRequest, _extractError, _extractData, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var AWS = require('../core');

        var util = require('../util');

        var Rest = require('./rest');

        function populateBody(req) {
          var input = req.service.api.operations[req.operation].input;
          var builder = new AWS.XML.Builder();
          var params = req.params;
          var payload = input.payload;

          if (payload) {
            var payloadMember = input.members[payload];
            params = params[payload];
            if (params === undefined) return;

            if (payloadMember.type === 'structure') {
              var rootElement = payloadMember.name;
              req.httpRequest.body = builder.toXML(params, payloadMember, rootElement, true);
            } else {
              // non-xml payload
              req.httpRequest.body = params;
            }
          } else {
            req.httpRequest.body = builder.toXML(params, input, input.name || input.shape || util.string.upperFirst(req.operation) + 'Request');
          }
        }

        function buildRequest(req) {
          Rest.buildRequest(req); // never send body payload on GET/HEAD

          if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
            populateBody(req);
          }
        }

        function extractError(resp) {
          Rest.extractError(resp);
          var data;

          try {
            data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
          } catch (e) {
            data = {
              Code: resp.httpResponse.statusCode,
              Message: resp.httpResponse.statusMessage
            };
          }

          if (data.Errors) data = data.Errors;
          if (data.Error) data = data.Error;

          if (data.Code) {
            resp.error = util.error(new Error(), {
              code: data.Code,
              message: data.Message
            });
          } else {
            resp.error = util.error(new Error(), {
              code: resp.httpResponse.statusCode,
              message: null
            });
          }
        }

        function extractData(resp) {
          Rest.extractData(resp);
          var parser;
          var req = resp.request;
          var body = resp.httpResponse.body;
          var operation = req.service.api.operations[req.operation];
          var output = operation.output;
          var hasEventOutput = operation.hasEventOutput;
          var payload = output.payload;

          if (payload) {
            var payloadMember = output.members[payload];

            if (payloadMember.isEventStream) {
              parser = new AWS.XML.Parser();
              resp.data[payload] = util.createEventStream(AWS.HttpClient.streamsApiVersion === 2 ? resp.httpResponse.stream : resp.httpResponse.body, parser, payloadMember);
            } else if (payloadMember.type === 'structure') {
              parser = new AWS.XML.Parser();
              resp.data[payload] = parser.parse(body.toString(), payloadMember);
            } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
              resp.data[payload] = body;
            } else {
              resp.data[payload] = payloadMember.toType(body);
            }
          } else if (body.length > 0) {
            parser = new AWS.XML.Parser();
            var data = parser.parse(body.toString(), output);
            util.update(resp.data, data);
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
        '../core': _req,
        '../util': _req0,
        './rest': _req1
      }));
    }
  };
});
//# sourceMappingURL=86be333aa13932ab8fcfe2461cbb1c638dc1903f.js.map