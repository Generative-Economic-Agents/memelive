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
        var AWS = require('../core');
        /**
         * Represents credentials from a JSON file on disk.
         * If the credentials expire, the SDK can {refresh} the credentials
         * from the file.
         *
         * The format of the file should be similar to the options passed to
         * {AWS.Config}:
         *
         * ```javascript
         * {accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'optional'}
         * ```
         *
         * @example Loading credentials from disk
         *   var creds = new AWS.FileSystemCredentials('./configuration.json');
         *   creds.accessKeyId == 'AKID'
         *
         * @!attribute filename
         *   @readonly
         *   @return [String] the path to the JSON file on disk containing the
         *     credentials.
         * @!macro nobrowser
         */


        AWS.FileSystemCredentials = AWS.util.inherit(AWS.Credentials, {
          /**
           * @overload AWS.FileSystemCredentials(filename)
           *   Creates a new FileSystemCredentials object from a filename
           *
           *   @param filename [String] the path on disk to the JSON file to load.
           */
          constructor: function FileSystemCredentials(filename) {
            AWS.Credentials.call(this);
            this.filename = filename;
            this.get(function () {});
          },

          /**
           * Loads the credentials from the {filename} on disk.
           *
           * @callback callback function(err)
           *   Called after the JSON file on disk is read and parsed. When this callback
           *   is called with no error, it means that the credentials information
           *   has been loaded into the object (as the `accessKeyId`, `secretAccessKey`,
           *   and `sessionToken` properties).
           *   @param err [Error] if an error occurred, this value will be filled
           * @see get
           */
          refresh: function refresh(callback) {
            if (!callback) callback = AWS.util.fn.callback;

            try {
              var creds = JSON.parse(AWS.util.readFileSync(this.filename));
              AWS.Credentials.call(this, creds);

              if (!this.accessKeyId || !this.secretAccessKey) {
                throw AWS.util.error(new Error('Credentials not set in ' + this.filename), {
                  code: 'FileSystemCredentialsProviderFailure'
                });
              }

              this.expired = false;
              callback();
            } catch (err) {
              callback(err);
            }
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=e4e8cc29010a2eb1b2842566129eb10a043c4791.js.map