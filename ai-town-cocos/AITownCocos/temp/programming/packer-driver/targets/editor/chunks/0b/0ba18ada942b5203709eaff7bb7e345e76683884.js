System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, api, LensApm, h5utils;

  function send(data, source, subSource) {
    const sender = new Image();
    data.map(item => {
      item.sub_product = subSource;
      return item;
    });
    data.sub_product = subSource;
    sender.src = `${api}source=${source}&log=${encodeURIComponent(JSON.stringify(data))}`;
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
          const {
            game = 'starpartyinggame',
            page
          } = apmParams;
          console.log('getsystem----');
        },
        logger: async params => {
          //北极星埋点
          console.log(params);
          LensApm.track.report(params.logger, params.extra);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ba18ada942b5203709eaff7bb7e345e76683884.js.map