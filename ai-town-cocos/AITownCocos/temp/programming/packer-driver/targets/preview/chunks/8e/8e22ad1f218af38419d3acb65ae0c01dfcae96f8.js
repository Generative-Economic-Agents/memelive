System.register(["__unresolved_0", "url", "qs", "caseless", "uuid/v4", "oauth-sign", "crypto", "safe-buffer"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, _OAuth, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_url) {
      _req = _url.__cjsMetaURL;
    }, function (_qs) {
      _req0 = _qs.__cjsMetaURL;
    }, function (_caseless) {
      _req1 = _caseless.__cjsMetaURL;
    }, function (_uuidV) {
      _req2 = _uuidV.__cjsMetaURL;
    }, function (_oauthSign) {
      _req3 = _oauthSign.__cjsMetaURL;
    }, function (_crypto) {
      _req4 = _crypto.__cjsMetaURL;
    }, function (_safeBuffer) {
      _req5 = _safeBuffer.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var url = require('url');

        var qs = require('qs');

        var caseless = require('caseless');

        var uuid = require('uuid/v4');

        var oauth = require('oauth-sign');

        var crypto = require('crypto');

        var Buffer = require('safe-buffer').Buffer;

        function OAuth(request) {
          this.request = request;
          this.params = null;
        }

        OAuth.prototype.buildParams = function (_oauth, uri, method, query, form, qsLib) {
          var oa = {};

          for (var i in _oauth) {
            oa['oauth_' + i] = _oauth[i];
          }

          if (!oa.oauth_version) {
            oa.oauth_version = '1.0';
          }

          if (!oa.oauth_timestamp) {
            oa.oauth_timestamp = Math.floor(Date.now() / 1000).toString();
          }

          if (!oa.oauth_nonce) {
            oa.oauth_nonce = uuid().replace(/-/g, '');
          }

          if (!oa.oauth_signature_method) {
            oa.oauth_signature_method = 'HMAC-SHA1';
          }

          var consumer_secret_or_private_key = oa.oauth_consumer_secret || oa.oauth_private_key; // eslint-disable-line camelcase

          delete oa.oauth_consumer_secret;
          delete oa.oauth_private_key;
          var token_secret = oa.oauth_token_secret; // eslint-disable-line camelcase

          delete oa.oauth_token_secret;
          var realm = oa.oauth_realm;
          delete oa.oauth_realm;
          delete oa.oauth_transport_method;
          var baseurl = uri.protocol + '//' + uri.host + uri.pathname;
          var params = qsLib.parse([].concat(query, form, qsLib.stringify(oa)).join('&'));
          oa.oauth_signature = oauth.sign(oa.oauth_signature_method, method, baseurl, params, consumer_secret_or_private_key, // eslint-disable-line camelcase
          token_secret // eslint-disable-line camelcase
          );

          if (realm) {
            oa.realm = realm;
          }

          return oa;
        };

        OAuth.prototype.buildBodyHash = function (_oauth, body) {
          if (['HMAC-SHA1', 'RSA-SHA1'].indexOf(_oauth.signature_method || 'HMAC-SHA1') < 0) {
            this.request.emit('error', new Error('oauth: ' + _oauth.signature_method + ' signature_method not supported with body_hash signing.'));
          }

          var shasum = crypto.createHash('sha1');
          shasum.update(body || '');
          var sha1 = shasum.digest('hex');
          return Buffer.from(sha1, 'hex').toString('base64');
        };

        OAuth.prototype.concatParams = function (oa, sep, wrap) {
          wrap = wrap || '';
          var params = Object.keys(oa).filter(function (i) {
            return i !== 'realm' && i !== 'oauth_signature';
          }).sort();

          if (oa.realm) {
            params.splice(0, 0, 'realm');
          }

          params.push('oauth_signature');
          return params.map(function (i) {
            return i + '=' + wrap + oauth.rfc3986(oa[i]) + wrap;
          }).join(sep);
        };

        OAuth.prototype.onRequest = function (_oauth) {
          var self = this;
          self.params = _oauth;
          var uri = self.request.uri || {};
          var method = self.request.method || '';
          var headers = caseless(self.request.headers);
          var body = self.request.body || '';
          var qsLib = self.request.qsLib || qs;
          var form;
          var query;
          var contentType = headers.get('content-type') || '';
          var formContentType = 'application/x-www-form-urlencoded';
          var transport = _oauth.transport_method || 'header';

          if (contentType.slice(0, formContentType.length) === formContentType) {
            contentType = formContentType;
            form = body;
          }

          if (uri.query) {
            query = uri.query;
          }

          if (transport === 'body' && (method !== 'POST' || contentType !== formContentType)) {
            self.request.emit('error', new Error('oauth: transport_method of body requires POST ' + 'and content-type ' + formContentType));
          }

          if (!form && typeof _oauth.body_hash === 'boolean') {
            _oauth.body_hash = self.buildBodyHash(_oauth, self.request.body.toString());
          }

          var oa = self.buildParams(_oauth, uri, method, query, form, qsLib);

          switch (transport) {
            case 'header':
              self.request.setHeader('Authorization', 'OAuth ' + self.concatParams(oa, ',', '"'));
              break;

            case 'query':
              var href = self.request.uri.href += (query ? '&' : '?') + self.concatParams(oa, '&');
              self.request.uri = url.parse(href);
              self.request.path = self.request.uri.path;
              break;

            case 'body':
              self.request.body = (form ? form + '&' : '') + self.concatParams(oa, '&');
              break;

            default:
              self.request.emit('error', new Error('oauth: transport_method invalid'));
          }
        };

        exports.OAuth = OAuth; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _OAuth = module.exports.OAuth;
      }, () => ({
        'url': _req,
        'qs': _req0,
        'caseless': _req1,
        'uuid/v4': _req2,
        'oauth-sign': _req3,
        'crypto': _req4,
        'safe-buffer': _req5
      }));
    }
  };
});
//# sourceMappingURL=8e22ad1f218af38419d3acb65ae0c01dfcae96f8.js.map