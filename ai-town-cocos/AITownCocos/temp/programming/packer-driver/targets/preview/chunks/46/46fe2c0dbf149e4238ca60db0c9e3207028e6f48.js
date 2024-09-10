System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, api, LensApm, h5utils;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function send(data, source, subSource) {
    var sender = new Image();
    data.map(item => {
      item.sub_product = subSource;
      return item;
    });
    data.sub_product = subSource;
    sender.src = api + "source=" + source + "&log=" + encodeURIComponent(JSON.stringify(data));
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba61cSvRs5JZ6V9YVGRlEuK", "LensApm", undefined);

      api = '//api.baidu.com/open/monitor/report?';
      LensApm = window["LensApm"];
      h5utils = null;

      _export("default", {
        lens: {},
        send: apmParams => {},
        sendSystem: apmParams => {
          var {
            game = 'starpartyinggame',
            page
          } = apmParams;
          console.log('getsystem----');
        },
        logger: function () {
          var _logger = _asyncToGenerator(function* (params) {
            //北极星埋点
            console.log(params);
            LensApm.track.report(params.logger, params.extra);
          });

          function logger(_x) {
            return _logger.apply(this, arguments);
          }

          return logger;
        }()
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46fe2c0dbf149e4238ca60db0c9e3207028e6f48.js.map