System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, Node, modelMgr, GlobalConfig, _crd;

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatCfgD(extras) {
    _reporterNs.report("catCfgD", "./DataStruct", _context.meta, extras);
  }

  _export("GlobalConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7235CkZStE4J3tAa5yt45W", "GlobalConfig", undefined);

      __checkObsolete__(['log', 'Node']);

      _export("GlobalConfig", GlobalConfig = class GlobalConfig {
        constructor() {
          /**
           * 保存项目运行时状态
           */
          this.isProduction = false;
          this.jsonData = void 0;
          this.hasLogin = false;
          this.hasInitGame = false;
          this.LoginData = void 0;
          this.hasJsonsLoad = false;
          this.haSelect = void 0;
          this.currentChatTimes = 0;
          // curSelCat: network.SelectCatResponse;//首次登录使用
          this.nickName = "";
          this.playername = "";
          this.userId = "";
          this.curCatData = void 0;
          this.catInRange = true;
          this.catRootNode = new Node();
          this.testTools = false;
          this.currentNpcIndex = 0;
          this.curViewNpcY = void 0;
          this.curViewNpcX = void 0;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new GlobalConfig();

          this._instance.start();

          this._instance.nickName = this._instance.playername = this._instance.userId = "jack13";
          return this._instance;
        }

        start() {
          this.jsonData = {
            "userId": ""
          };
        }

        getGlobalData(key) {
          return this.jsonData[key];
        }

        setGlobalData(key, value) {
          this.jsonData[key] = value;
        }

        getCurCatId() {
          var _GlobalConfig$instanc;

          if (!((_GlobalConfig$instanc = GlobalConfig.instance.LoginData) != null && (_GlobalConfig$instanc = _GlobalConfig$instanc.data) != null && (_GlobalConfig$instanc = _GlobalConfig$instanc.player) != null && _GlobalConfig$instanc.catId)) {
            return 0;
          } else {
            return GlobalConfig.instance.LoginData.data.player.catId;
          }
        }

        setCurCatId(catid) {
          var _GlobalConfig$instanc2;

          if ((_GlobalConfig$instanc2 = GlobalConfig.instance.LoginData) != null && _GlobalConfig$instanc2.data) {
            GlobalConfig.instance.LoginData.data.player.catId = catid;
            this.curCatData = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getCatDataById(catid);
          } else {
            log("没有登录信息");
          }
        }

      });

      GlobalConfig._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=03144249343acfd8ba19a5de7559c88c7f506b82.js.map