System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, Observer, mduManger, ViewMediatorBase, _crd;

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "../../utils/Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleBase(extras) {
    _reporterNs.report("ModuleBase", "./ModuleBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmduManger(extras) {
    _reporterNs.report("mduManger", "../../game/App", _context.meta, extras);
  }

  _export("ViewMediatorBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }, function (_unresolved_2) {
      Observer = _unresolved_2.Observer;
    }, function (_unresolved_3) {
      mduManger = _unresolved_3.mduManger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03cd0lISj5HkLyqET2uAN92", "ViewMediatorBase", undefined);

      __checkObsolete__(['Component', 'director', 'Scene']);

      _export("ViewMediatorBase", ViewMediatorBase = class ViewMediatorBase extends (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
        error: Error()
      }), Observer) : Observer) {
        constructor(modu) {
          super();
          this.modu = void 0;
          this.tabBar = void 0;
          this._openData = void 0;
          this._defaultView = "";

          /**
           * 记录此mediator是否处于活动状态
           * 若处于活动状态,则后台继续执行其业务逻辑
           */
          this.weeked = false;
          this.modu = modu;
        }
        /**
         * 执行mediator入口
         * @param openData 
         */


        open(openData) {
          var self = this; //是否需要预先load 场景资源

          self.onOpen(openData);
        }

        /**
         * .scene or .json 皮肤 加载完毕，
         * @param openData
         */
        onOpen(openData) {
          if (openData === void 0) {
            openData = null;
          }

          var self = this;
          self.weeked = true;
          self.ons();
          self.onWeekup(openData);
        }
        /**
         * 每次med打开完成时调用
         * 处理模块及其场景打开前执行的逻辑
         */


        onWeekup(openData) {
          if (openData === void 0) {
            openData = null;
          }

          console.log("打开view:" + openData.view);
          /**
           * 调用cocos 场景打开的逻辑,
           * 成功打开后直接替换上一场景,展示到舞台上
           */

          var load = director.loadScene(openData.view, (error, scene) => {
            console.log(error, scene);
          });

          if (load) {
            console.log(this._defaultView + "sss");
            (_crd && mduManger === void 0 ? (_reportPossibleCrUseOfmduManger({
              error: Error()
            }), mduManger) : mduManger).currentMduId = this.modu.moduleId;
          }
        }
        /**面板关闭 */


        close() {
          var s = this;
        }
        /**每次med关闭所有界面 */


        sleep() {
          var self = this;
          self.weeked = false;
          self.offs();
        }
        /** 销毁 */


        dispose() {
          var self = this;
          this.sleep();
        }
        /** 开启侦听 */


        ons() {}
        /** 关闭侦听 */


        offs() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82082641291e2f02d115ded50a53144f51359d1a.js.map