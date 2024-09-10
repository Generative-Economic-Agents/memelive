System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, modelMgr, AxiosManager, TrackManager, _crd, trackMgr;

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAxiosManager(extras) {
    _reporterNs.report("AxiosManager", "./AxiosManager", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
    }, function (_unresolved_3) {
      AxiosManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3821bF47ZlABpzDTZLbK1Hg", "TrackManager", undefined);

      _export("default", TrackManager = class TrackManager {
        constructor() {
          /**
           * 1.接入文档文档请参见，https://docs.popo.netease.com/ofedit/096b65ea9fd44cc4a46c23b5a311f3a7； 
              2.相关参数：
              token所需app：garden
              测试服game_key：54utzeoo  查询game_name：GARDEN_TEST
              正式服game_key：oer34yks  查询game_name：GARDEN 
           * 
           * 
           */
          this.BaseUrl = true ? 'https://wtgame-api-live.baochuangame.com:10443/' : 'https://apitest2.baochuangames.com/';
          this.navigator = window.navigator;
          this.isAndroid = /(Android)/i.test(navigator.userAgent);
          this.isIos = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
          this.isApp = /(NeteaseMusic)/i.test(navigator.userAgent);
          this.BCAPPID = "CloudFlower";
          this.device = {
            brand: 'gamesdk',
            channel: 'gamesdk',
            deviceId: 0,
            deviceType: -1,
            //-2:机器人 -1:未知 0:iOS 1:安卓 2:PC
            appVer: 0,
            os: 0,
            osVer: 0,
            model: 0,
            clientIp: 0
          };
          this.track_base_info = {};
          this.UrlSource = "";
        }

        getdeviceType() {
          let num = -1;

          if (this.isIos) {
            num = 0;
          } else if (this.isAndroid) {
            num = 1;
          }

          return num;
        }
        /**
         * 登录成功,并获取userinfo后 init
         */


        init(trackParams = {}) {
          if ((_crd && AxiosManager === void 0 ? (_reportPossibleCrUseOfAxiosManager({
            error: Error()
          }), AxiosManager) : AxiosManager).BaseUrl == "https://flower.qa.web.netease.com") {
            this.BaseUrl = 'https://apitest2.baochuangames.com/';
          } else {
            this.BaseUrl = 'https://wtgame-api-live.baochuangame.com:10443/';
          }

          this.device.deviceType = this.getdeviceType();
          this.UrlSource = this.getParameter('source') || this.getParameter('source_channel');
          this.track_base_info = {
            platform: this.device.deviceType,
            playerId: (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.userinfo.uid,
            playerName: "",
            app: this.BCAPPID
          };

          try {} catch (e) {
            console.warn('log exception:', e);
          }

          this.track({
            //example ...
            eventId: 100024,
            // 事件点击
            clickName: '页面曝光',
            clickType: '主页',
            sourceChannel: this.UrlSource,
            subChannel: 0
          });
        }

        track(params) {
          const data = { ...this.track_base_info,
            eventValue: { ...params,
              playerId: this.track_base_info.playerId,
              playerName: this.track_base_info.playerName
            }
          };

          try {
            (_crd && AxiosManager === void 0 ? (_reportPossibleCrUseOfAxiosManager({
              error: Error()
            }), AxiosManager) : AxiosManager).instance.post(this.BaseUrl + 'oauth2/anchor/bi/report', data).catch(err => {
              console.log("track err::", err);
            });
          } catch (err) {
            console.log(err);
          }
        }

        clickTrack(clickName, clickType, sourceChannel) {
          const params = {
            eventId: 100024,
            clickName,
            clickType,
            sourceChannel: this.UrlSource,
            subChannel: 0
          };
          return this.track(params);
        }

        encode(str) {
          // first we use encodeURIComponent to get percent-encoded UTF-8,
          // then we convert the percent encodings into raw bytes which
          // can be fed into btoa.
          return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number('0x' + p1));
          }));
        }

        getParameter(param) {
          let re = new RegExp(param + '=([^&]*)', 'i');
          let a = re.exec(document.location.search);
          if (a == null) return null;
          return a[1];
        }

      });

      _export("trackMgr", trackMgr = new TrackManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92171b3e4e4178049db31ae9e1f573a260de4619.js.map