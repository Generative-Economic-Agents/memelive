System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _buildRequest, _extractError, _extractData, _generateURI, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var util = require('../util');

        var populateHostPrefix = require('./helpers').populateHostPrefix;

        function populateMethod(req) {
          req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
        }

        function generateURI(endpointPath, operationPath, input, params) {
          var uri = [endpointPath, operationPath].join('/');
          uri = uri.replace(/\/+/g, '/');
          var queryString = {},
              queryStringSet = false;
          util.each(input.members, function (name, member) {
            var paramValue = params[name];
            if (paramValue === null || paramValue === undefined) return;

            if (member.location === 'uri') {
              var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
              uri = uri.replace(regex, function (_, plus) {
                var fn = plus ? util.uriEscapePath : util.uriEscape;
                return fn(String(paramValue));
              });
            } else if (member.location === 'querystring') {
              queryStringSet = true;

              if (member.type === 'list') {
                queryString[member.name] = paramValue.map(function (val) {
                  return util.uriEscape(member.member.toWireFormat(val).toString());
                });
              } else if (member.type === 'map') {
                util.each(paramValue, function (key, value) {
                  if (Array.isArray(value)) {
                    queryString[key] = value.map(function (val) {
                      return util.uriEscape(String(val));
                    });
                  } else {
                    queryString[key] = util.uriEscape(String(value));
                  }
                });
              } else {
                queryString[member.name] = util.uriEscape(member.toWireFormat(paramValue).toString());
              }
            }
          });

          if (queryStringSet) {
            uri += uri.indexOf('?') >= 0 ? '&' : '?';
            var parts = [];
            util.arrayEach(Object.keys(queryString).sort(), function (key) {
              if (!Array.isArray(queryString[key])) {
                queryString[key] = [queryString[key]];
              }

              for (var i = 0; i < queryString[key].length; i++) {
                parts.push(util.uriEscape(String(key)) + '=' + queryString[key][i]);
              }
            });
            uri += parts.join('&');
          }

          return uri;
        }

        function populateURI(req) {
          var operation = req.service.api.operations[req.operation];
          var input = operation.input;
          var uri = generateURI(req.httpRequest.endpoint.path, operation.httpPath, input, req.params);
          req.httpRequest.path = uri;
        }

        function populateHeaders(req) {
          var operation = req.service.api.operations[req.operation];
          util.each(operation.input.members, function (name, member) {
            var value = req.params[name];
            if (value === null || value === undefined) return;

            if (member.location === 'headers' && member.type === 'map') {
              util.each(value, function (key, memberValue) {
                req.httpRequest.headers[member.name + key] = memberValue;
              });
            } else if (member.location === 'header') {
              value = member.toWireFormat(value).toString();

              if (member.isJsonValue) {
                value = util.base64.encode(value);
              }

              req.httpRequest.headers[member.name] = value;
            }
          });
        }

        function buildRequest(req) {
          populateMethod(req);
          populateURI(req);
          populateHeaders(req);
          populateHostPrefix(req);
        }

        function extractError() {}

        function extractData(resp) {
          var req = resp.request;
          var data = {};
          var r = resp.httpResponse;
          var operation = req.service.api.operations[req.operation];
          var output = operation.output; // normalize headers names to lower-cased keys for matching

          var headers = {};
          util.each(r.headers, function (k, v) {
            headers[k.toLowerCase()] = v;
          });
          util.each(output.members, function (name, member) {
            var header = (member.name || name).toLowerCase();

            if (member.location === 'headers' && member.type === 'map') {
              data[name] = {};
              var location = member.isLocationName ? member.name : '';
              var pattern = new RegExp('^' + location + '(.+)', 'i');
              util.each(r.headers, function (k, v) {
                var result = k.match(pattern);

                if (result !== null) {
                  data[name][result[1]] = v;
                }
              });
            } else if (member.location === 'header') {
              if (headers[header] !== undefined) {
                var value = member.isJsonValue ? util.base64.decode(headers[header]) : headers[header];
                data[name] = member.toType(value);
              }
            } else if (member.location === 'statusCode') {
              data[name] = parseInt(r.statusCode, 10);
            }
          });
          resp.data = data;
        }
        /**
         * @api private
         */


        module.exports = {
          buildRequest: buildRequest,
          extractError: extractError,
          extractData: extractData,
          generateURI: generateURI
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _buildRequest = module.exports.buildRequest;
        _extractError = module.exports.extractError;
        _extractData = module.exports.extractData;
        _generateURI = module.exports.generateURI;
      }, () => ({
        '../util': _req,
        './helpers': _req0
      }));
    }
  };
});
//# sourceMappingURL=88f7224f41a23571f86f6110ef4d3b702c16762d.js.map