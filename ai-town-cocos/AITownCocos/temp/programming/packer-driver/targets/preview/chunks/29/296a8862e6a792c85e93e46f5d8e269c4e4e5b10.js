System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, _buildRequest, _extractError, _extractData, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var AWS = require('../core');

        var util = require('../util');

        var QueryParamSerializer = require('../query/query_param_serializer');

        var Shape = require('../model/shape');

        var populateHostPrefix = require('./helpers').populateHostPrefix;

        function buildRequest(req) {
          var operation = req.service.api.operations[req.operation];
          var httpRequest = req.httpRequest;
          httpRequest.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
          httpRequest.params = {
            Version: req.service.api.apiVersion,
            Action: operation.name
          }; // convert the request parameters into a list of query params,
          // e.g. Deeply.NestedParam.0.Name=value

          var builder = new QueryParamSerializer();
          builder.serialize(req.params, operation.input, function (name, value) {
            httpRequest.params[name] = value;
          });
          httpRequest.body = util.queryParamsToString(httpRequest.params);
          populateHostPrefix(req);
        }

        function extractError(resp) {
          var data,
              body = resp.httpResponse.body.toString();

          if (body.match('<UnknownOperationException')) {
            data = {
              Code: 'UnknownOperation',
              Message: 'Unknown operation ' + resp.request.operation
            };
          } else {
            try {
              data = new AWS.XML.Parser().parse(body);
            } catch (e) {
              data = {
                Code: resp.httpResponse.statusCode,
                Message: resp.httpResponse.statusMessage
              };
            }
          }

          if (data.requestId && !resp.requestId) resp.requestId = data.requestId;
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
          var req = resp.request;
          var operation = req.service.api.operations[req.operation];
          var shape = operation.output || {};
          var origRules = shape;

          if (origRules.resultWrapper) {
            var tmp = Shape.create({
              type: 'structure'
            });
            tmp.members[origRules.resultWrapper] = shape;
            tmp.memberNames = [origRules.resultWrapper];
            util.property(shape, 'name', shape.resultWrapper);
            shape = tmp;
          }

          var parser = new AWS.XML.Parser(); // TODO: Refactor XML Parser to parse RequestId from response.

          if (shape && shape.members && !shape.members._XAMZRequestId) {
            var requestIdShape = Shape.create({
              type: 'string'
            }, {
              api: {
                protocol: 'query'
              }
            }, 'requestId');
            shape.members._XAMZRequestId = requestIdShape;
          }

          var data = parser.parse(resp.httpResponse.body.toString(), shape);
          resp.requestId = data._XAMZRequestId || data.requestId;
          if (data._XAMZRequestId) delete data._XAMZRequestId;

          if (origRules.resultWrapper) {
            if (data[origRules.resultWrapper]) {
              util.update(data, data[origRules.resultWrapper]);
              delete data[origRules.resultWrapper];
            }
          }

          resp.data = data;
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
        '../query/query_param_serializer': _req1,
        '../model/shape': _req2,
        './helpers': _req3
      }));
    }
  };
});
//# sourceMappingURL=296a8862e6a792c85e93e46f5d8e269c4e4e5b10.js.map