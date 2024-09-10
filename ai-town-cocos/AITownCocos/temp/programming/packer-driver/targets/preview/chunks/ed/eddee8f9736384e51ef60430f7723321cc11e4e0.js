System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _req23, _req24, _req25, _cjsExports, __cjsMetaURL;

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
    }, function (_unresolved_8) {
      _req5 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req6 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req7 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req8 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req9 = _unresolved_12.__cjsMetaURL;
    }, function (_unresolved_13) {
      _req10 = _unresolved_13.__cjsMetaURL;
    }, function (_unresolved_14) {
      _req11 = _unresolved_14.__cjsMetaURL;
    }, function (_unresolved_15) {
      _req12 = _unresolved_15.__cjsMetaURL;
    }, function (_unresolved_16) {
      _req13 = _unresolved_16.__cjsMetaURL;
    }, function (_unresolved_17) {
      _req14 = _unresolved_17.__cjsMetaURL;
    }, function (_unresolved_18) {
      _req15 = _unresolved_18.__cjsMetaURL;
    }, function (_unresolved_19) {
      _req16 = _unresolved_19.__cjsMetaURL;
    }, function (_unresolved_20) {
      _req17 = _unresolved_20.__cjsMetaURL;
    }, function (_unresolved_21) {
      _req18 = _unresolved_21.__cjsMetaURL;
    }, function (_unresolved_22) {
      _req19 = _unresolved_22.__cjsMetaURL;
    }, function (_unresolved_23) {
      _req20 = _unresolved_23.__cjsMetaURL;
    }, function (_unresolved_24) {
      _req21 = _unresolved_24.__cjsMetaURL;
    }, function (_unresolved_25) {
      _req22 = _unresolved_25.__cjsMetaURL;
    }, function (_unresolved_26) {
      _req23 = _unresolved_26.__cjsMetaURL;
    }, function (_unresolved_27) {
      _req24 = _unresolved_27.__cjsMetaURL;
    }, function (_unresolved_28) {
      _req25 = _unresolved_28.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /**
         * The main AWS namespace
         */
        var AWS = {
          util: require('./util')
        };
        /**
         * @api private
         * @!macro [new] nobrowser
         *   @note This feature is not supported in the browser environment of the SDK.
         */

        var _hidden = {};

        _hidden.toString(); // hack to parse macro

        /**
         * @api private
         */


        module.exports = AWS;
        AWS.util.update(AWS, {
          /**
           * @constant
           */
          VERSION: '2.1637.0',

          /**
           * @api private
           */
          Signers: {},

          /**
           * @api private
           */
          Protocol: {
            Json: require('./protocol/json'),
            Query: require('./protocol/query'),
            Rest: require('./protocol/rest'),
            RestJson: require('./protocol/rest_json'),
            RestXml: require('./protocol/rest_xml')
          },

          /**
           * @api private
           */
          XML: {
            Builder: require('./xml/builder'),
            Parser: null // conditionally set based on environment

          },

          /**
           * @api private
           */
          JSON: {
            Builder: require('./json/builder'),
            Parser: require('./json/parser')
          },

          /**
           * @api private
           */
          Model: {
            Api: require('./model/api'),
            Operation: require('./model/operation'),
            Shape: require('./model/shape'),
            Paginator: require('./model/paginator'),
            ResourceWaiter: require('./model/resource_waiter')
          },

          /**
           * @api private
           */
          apiLoader: require('./api_loader'),

          /**
           * @api private
           */
          EndpointCache: require('../vendor/endpoint-cache').EndpointCache
        });

        require('./sequential_executor');

        require('./service');

        require('./config');

        require('./http');

        require('./event_listeners');

        require('./request');

        require('./response');

        require('./resource_waiter');

        require('./signers/request_signer');

        require('./param_validator');

        require('./maintenance_mode_message');
        /**
         * @readonly
         * @return [AWS.SequentialExecutor] a collection of global event listeners that
         *   are attached to every sent request.
         * @see AWS.Request AWS.Request for a list of events to listen for
         * @example Logging the time taken to send a request
         *   AWS.events.on('send', function startSend(resp) {
         *     resp.startTime = new Date().getTime();
         *   }).on('complete', function calculateTime(resp) {
         *     var time = (new Date().getTime() - resp.startTime) / 1000;
         *     console.log('Request took ' + time + ' seconds');
         *   });
         *
         *   new AWS.S3().listBuckets(); // prints 'Request took 0.285 seconds'
         */


        AWS.events = new AWS.SequentialExecutor(); //create endpoint cache lazily

        AWS.util.memoizedProperty(AWS, 'endpointCache', function () {
          return new AWS.EndpointCache(AWS.config.endpointCacheSize);
        }, true); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './util': _req,
        './protocol/json': _req0,
        './protocol/query': _req1,
        './protocol/rest': _req2,
        './protocol/rest_json': _req3,
        './protocol/rest_xml': _req4,
        './xml/builder': _req5,
        './json/builder': _req6,
        './json/parser': _req7,
        './model/api': _req8,
        './model/operation': _req9,
        './model/shape': _req10,
        './model/paginator': _req11,
        './model/resource_waiter': _req12,
        './api_loader': _req13,
        '../vendor/endpoint-cache': _req14,
        './sequential_executor': _req15,
        './service': _req16,
        './config': _req17,
        './http': _req18,
        './event_listeners': _req19,
        './request': _req20,
        './response': _req21,
        './resource_waiter': _req22,
        './signers/request_signer': _req23,
        './param_validator': _req24,
        './maintenance_mode_message': _req25
      }));
    }
  };
});
//# sourceMappingURL=eddee8f9736384e51ef60430f7723321cc11e4e0.js.map