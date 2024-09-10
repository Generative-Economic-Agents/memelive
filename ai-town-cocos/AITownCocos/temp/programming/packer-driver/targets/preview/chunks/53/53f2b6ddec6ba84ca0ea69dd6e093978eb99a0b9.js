System.register(["__unresolved_0", "ajv", "__unresolved_1", "har-schema", "ajv/lib/refs/json-schema-draft-06.json"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, _afterRequest, _beforeRequest, _browser, _cache, _content, _cookie, _creator, _entry, _har, _header, _log, _page, _pageTimings, _postData, _query, _request, _response, _timings, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_ajv) {
      _req = _ajv.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }, function (_harSchema) {
      _req1 = _harSchema.__cjsMetaURL;
    }, function (_ajvLibRefsJsonSchemaDraft06Json) {
      _req2 = _ajvLibRefsJsonSchemaDraft06Json.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var Ajv = require('ajv');

        var HARError = require('./error');

        var schemas = require('har-schema');

        var ajv;

        function createAjvInstance() {
          var ajv = new Ajv({
            allErrors: true
          });
          ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
          ajv.addSchema(schemas);
          return ajv;
        }

        function validate(name, data) {
          data = data || {}; // validator config

          ajv = ajv || createAjvInstance();
          var validate = ajv.getSchema(name + '.json');
          return new Promise(function (resolve, reject) {
            var valid = validate(data);
            !valid ? reject(new HARError(validate.errors)) : resolve(data);
          });
        }

        exports.afterRequest = function (data) {
          return validate('afterRequest', data);
        };

        exports.beforeRequest = function (data) {
          return validate('beforeRequest', data);
        };

        exports.browser = function (data) {
          return validate('browser', data);
        };

        exports.cache = function (data) {
          return validate('cache', data);
        };

        exports.content = function (data) {
          return validate('content', data);
        };

        exports.cookie = function (data) {
          return validate('cookie', data);
        };

        exports.creator = function (data) {
          return validate('creator', data);
        };

        exports.entry = function (data) {
          return validate('entry', data);
        };

        exports.har = function (data) {
          return validate('har', data);
        };

        exports.header = function (data) {
          return validate('header', data);
        };

        exports.log = function (data) {
          return validate('log', data);
        };

        exports.page = function (data) {
          return validate('page', data);
        };

        exports.pageTimings = function (data) {
          return validate('pageTimings', data);
        };

        exports.postData = function (data) {
          return validate('postData', data);
        };

        exports.query = function (data) {
          return validate('query', data);
        };

        exports.request = function (data) {
          return validate('request', data);
        };

        exports.response = function (data) {
          return validate('response', data);
        };

        exports.timings = function (data) {
          return validate('timings', data);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _afterRequest = module.exports.afterRequest;
        _beforeRequest = module.exports.beforeRequest;
        _browser = module.exports.browser;
        _cache = module.exports.cache;
        _content = module.exports.content;
        _cookie = module.exports.cookie;
        _creator = module.exports.creator;
        _entry = module.exports.entry;
        _har = module.exports.har;
        _header = module.exports.header;
        _log = module.exports.log;
        _page = module.exports.page;
        _pageTimings = module.exports.pageTimings;
        _postData = module.exports.postData;
        _query = module.exports.query;
        _request = module.exports.request;
        _response = module.exports.response;
        _timings = module.exports.timings;
      }, () => ({
        'ajv': _req,
        './error': _req0,
        'har-schema': _req1,
        'ajv/lib/refs/json-schema-draft-06.json': _req2
      }));
    }
  };
});
//# sourceMappingURL=53f2b6ddec6ba84ca0ea69dd6e093978eb99a0b9.js.map