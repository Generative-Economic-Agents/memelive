System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, appBuild, u, isiOS, isAndroid, isBiliApp, appVersion, isiOSBiliBlue, isBeforeIos519, isH5Pay, deviceType, isWeiXin, isQQ, isWeibo, isMissevanWebview, pathname, isChannelComic, isChannel, isBiliMallSdk, isSupportNA, mallSdkVersion, isH5, isMini, device;

  function getAppVersion() {
    const agent = navigator.userAgent.toLowerCase();
    const regStr = /biliapp\/[\d.]+/gi;
    return isBiliApp ? `${agent.match(regStr)}`.replace(/[^0-9.]/ig, '') : 0;
  }

  // 获取外渠使用的SDK版本号
  function getMallSdkVersion() {
    const agent = navigator.userAgent.toLowerCase();
    const regStr = /mallSdkVersion\/([0-9]+)/i;
    const m = agent.match(regStr);

    if (isBiliMallSdk && m && m[1]) {
      return m[1];
    }

    return isBiliMallSdk ? `${agent.match(regStr)}` : 0;
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70428cPFD1KS4JD/TObGJi3", "device", undefined);

      appBuild = {
        ios519: 6220,
        couponIosBuild: 6500,
        couponAndroidBuild: 519010,
        merchantIosBuild: 6510,
        merchantAndroidBuild: 5200020,
        ios522: 6520,
        android522: 5219000,
        ios523: 6570,
        android523: 5220010,
        ios524: 6620,
        android524: 5240000,
        ios525: 6680,
        android525: 5250000,
        ios526: 6710,
        android526: 5250009,
        ios529: 6831,
        android529: 5285001,
        ios548: 8821,
        android548: 5480000,
        ios549: 8930,
        android549: 5490000,
        ios550: 8931,
        android550: 5500000
      };
      u = navigator.userAgent;
      isiOS = /iPad|iPhone|iPod/i.test(u);
      isAndroid = !isiOS;
      isBiliApp = /BiliApp/i.test(u);
      appVersion = Number(getAppVersion());
      isiOSBiliBlue = appVersion >= 7000 && appVersion < 8000;
      isBeforeIos519 = isiOS && isBiliApp && appVersion < 6220;
      isH5Pay = isiOS && isBiliApp && Number(getAppVersion()) < appBuild.ios522;
      deviceType = isiOS ? 'ios' : 'android';
      isWeiXin = /MicroMessenger/i.test(u) && u.toLowerCase().indexOf('wxwork') === -1;
      isQQ = u.match(/\sQQ/i) !== null;
      isWeibo = u.indexOf('Weibo') > -1;
      isMissevanWebview = false; // 猫耳渠道

      pathname = ""; //window.location.pathname;

      isChannelComic = pathname.indexOf('/channelcomic') > -1 || pathname.indexOf('/comic') > -1;
      isChannel = isMissevanWebview || isChannelComic; // 是否sdk容器

      isBiliMallSdk = /mallSdkVersion/i.test(u);
      isSupportNA = isBiliApp || isBiliMallSdk;
      mallSdkVersion = getMallSdkVersion();
      isH5 = true;
      isMini = false;
      device = {
        isAlipay: false,
        isWeiXin,
        isQQ,
        isWeibo,
        isBiliMini: false,
        isBiliApp,
        isiOSBiliBlue,
        isiOS,
        isBeforeIos519,
        isH5Pay,
        isAndroid,
        appVersion,
        appBuild,
        isMissevanWebview,
        platform: deviceType,
        isChannelComic,
        isBiliMallSdk,
        mallSdkVersion,
        isChannel,
        isSupportNA,
        isH5,
        isMini,
        version: {
          is(version) {
            return isBiliApp && appVersion === appBuild[deviceType + version];
          },

          gt(version) {
            return isBiliApp && appVersion > appBuild[deviceType + version];
          },

          gte(version) {
            return isBiliApp && appVersion >= appBuild[deviceType + version];
          },

          lt(version) {
            return isBiliApp && appVersion < appBuild[deviceType + version];
          },

          lte(version) {
            return isBiliApp && appVersion <= appBuild[deviceType + version];
          }

        }
      };

      _export("default", device);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0443ef18ab12fabe1c6aaec0e3680cdacd36d4be.js.map