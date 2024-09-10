System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, observer, RedManager, _crd;

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../game/App", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      observer = _unresolved_2.observer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81908yrUc1OfpJSWjzVoc2N", "RedManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      _export("default", RedManager = class RedManager {
        constructor() {
          this.keystate = {};
          this.redpoint = {};
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new RedManager();
          return this._instance;
        }

        registRedPoint(key, rednode, childkey) {
          if (childkey === void 0) {
            childkey = null;
          }

          this.redpoint[key] = rednode;
        }

        changeState(key, state) {
          var node = this.redpoint[key];

          if (node) {
            node.active = state;
          } // if(this.redpoint[key].childkey){
          //     for (let index = 0; index < this.redpoint[key].childkey.length; index++) {
          //         const element = this.redpoint[key].childkey[index];
          //         if(element == key){
          //             node.active = state;
          //             break;
          //         }
          //     }
          // }

        }

        setkeyState(arg0, tasklist) {
          var state = false;

          if (arg0 == RedManager.KEY.renwutabred) {
            //任务列表数据刷新
            var da = tasklist.data;

            for (var index = 0; index < da.length; index++) {
              var element = da[index];

              if (element.status == 2) {
                state = true;
                break;
              }
            }

            this.keystate[RedManager.KEY.renwutabred_main] = state;
          }

          this.keystate[arg0] = state;
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post("keychange", arg0);
        }

        getKeyState(key) {
          return this.keystate[key];
        }

      });

      RedManager._instance = void 0;
      RedManager.KEY = {
        renwutabred: "renwutabred",
        renwutabred_main: "renwutabred_main"
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ca9dc03e158b330854471f2d2ca0a279183e27a.js.map