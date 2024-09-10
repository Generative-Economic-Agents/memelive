System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var MissingRefError = require('./error_classes').MissingRef;

        module.exports = compileAsync;
        /**
         * Creates validating function for passed schema with asynchronous loading of missing schemas.
         * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
         * @this  Ajv
         * @param {Object}   schema schema object
         * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
         * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
         * @return {Promise} promise that resolves with a validating function.
         */

        function compileAsync(schema, meta, callback) {
          /* eslint no-shadow: 0 */

          /* global Promise */

          /* jshint validthis: true */
          var self = this;
          if (typeof this._opts.loadSchema != 'function') throw new Error('options.loadSchema should be a function');

          if (typeof meta == 'function') {
            callback = meta;
            meta = undefined;
          }

          var p = loadMetaSchemaOf(schema).then(function () {
            var schemaObj = self._addSchema(schema, undefined, meta);

            return schemaObj.validate || _compileAsync(schemaObj);
          });

          if (callback) {
            p.then(function (v) {
              callback(null, v);
            }, callback);
          }

          return p;

          function loadMetaSchemaOf(sch) {
            var $schema = sch.$schema;
            return $schema && !self.getSchema($schema) ? compileAsync.call(self, {
              $ref: $schema
            }, true) : Promise.resolve();
          }

          function _compileAsync(schemaObj) {
            try {
              return self._compile(schemaObj);
            } catch (e) {
              if (e instanceof MissingRefError) return loadMissingSchema(e);
              throw e;
            }

            function loadMissingSchema(e) {
              var ref = e.missingSchema;
              if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');
              var schemaPromise = self._loadingSchemas[ref];

              if (!schemaPromise) {
                schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
                schemaPromise.then(removePromise, removePromise);
              }

              return schemaPromise.then(function (sch) {
                if (!added(ref)) {
                  return loadMetaSchemaOf(sch).then(function () {
                    if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
                  });
                }
              }).then(function () {
                return _compileAsync(schemaObj);
              });

              function removePromise() {
                delete self._loadingSchemas[ref];
              }

              function added(ref) {
                return self._refs[ref] || self._schemas[ref];
              }
            }
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './error_classes': _req
      }));
    }
  };
});
//# sourceMappingURL=89b2a0b0293294f98e510c0c9bfedfa527655859.js.map