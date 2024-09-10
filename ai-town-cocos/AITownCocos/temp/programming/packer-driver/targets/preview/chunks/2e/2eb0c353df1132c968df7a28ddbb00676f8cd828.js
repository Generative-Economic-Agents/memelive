System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, instantiate, Prefab, resources, showMsg2, Log, UIManager, _crd, TAG;

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      showMsg2 = _unresolved_2.showMsg2;
    }, function (_unresolved_3) {
      Log = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46289TeELVDo4zYMGEY+7sL", "UIManager", undefined);

      __checkObsolete__(['director', 'instantiate', 'Node', 'Prefab', 'resources', 'size']);

      TAG = 'UIManager';

      _export("default", UIManager = class UIManager {
        constructor() {
          /**
           * 当前显示节点;
           */
          this._curPar = void 0;
          this._isloadingArr = [];
        }

        /**
         *
         * @param ctrl
         * @param par
         * @param isOnResize
         * @param isEff
         */
        popToParent(child, par) {
          if (par === void 0) {
            par = null;
          }

          var s = this;

          if (!par) {
            var scen = director.getScene().getChildByName("Canvas");
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, "uimanager::poptoparent", scen);
            par = scen;
          }

          s._curPar = par;
          var name;

          if (child.includes("/")) {
            var strarr = child.split("/");
            name = strarr[strarr.length - 1];
          } else {
            name = child;
          }

          if (s._curPar.getChildByName(name)) {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, "已经添加child:" + name);
            return;
          } // s._curPar.addChild(child);


          if (s._isloadingArr.indexOf(name) != -1) {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, "正在加载" + name);
            return;
          } else {
            s._isloadingArr.push(name);
          }

          resources.load(child, Prefab, (err, data) => {
            var ind = s._isloadingArr.indexOf(name);

            s._isloadingArr.splice(ind, 1);

            if (!err && data) {
              var n = instantiate(data);

              if (child.includes("/")) {
                var _strarr = child.split("/");

                n.name = _strarr[_strarr.length - 1];
              } else {
                n.name = child;
              }

              try {
                s._curPar.addChild(n);
              } catch (error) {}
            } else {
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log(TAG, "预制体资源加载失败::" + err);
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)("Load resources failed!");
            }
          });
        }

        removeParent(child) {
          var s = this;

          if (!s._curPar) {
            return;
          }

          var name;

          if (child.includes("/")) {
            var strarr = child.split("/");
            name = strarr[strarr.length - 1];
          } else {
            name = child;
          }

          var c = s._curPar.getChildByName(name);

          if (c) {
            c.name = "";
            c.destroy();
          } else {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, "不存在弹窗" + child);
          }
        }
        /**
         * @param ctrl 显示对象
         * @param layerIdx 层级
         * @param isShapeClose 是否点击空白关闭
         * @param isShowShape 是否有遮罩
         * @param fun 点击空白关闭后回调
         * @param isEff:是否缩放动画
         */


        popParentShape(ctrl, layerIdx, isShapeClose, isShowShape, fun, isEff) {
          if (isShapeClose === void 0) {
            isShapeClose = true;
          }

          if (isShowShape === void 0) {
            isShowShape = true;
          }

          if (isEff === void 0) {
            isEff = false;
          }
        }

        removeParentShape(ctrl, isEff) {
          if (isEff === void 0) {
            isEff = false;
          }
        }

      }); // const uiMgr:UIManager = new UIManager();
      // export default uiMgr;


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2eb0c353df1132c968df7a28ddbb00676f8cd828.js.map