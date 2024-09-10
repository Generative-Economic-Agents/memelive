System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Label, modelMgr, _dec, _class, _class2, _crd, ccclass, property, LoadingController;

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../App", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7748DL5T1CfZUSIMNfn9o3", "LoadingController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingController", LoadingController = (_dec = ccclass('LoadingController'), _dec(_class = (_class2 = class LoadingController extends Component {
        constructor() {
          super(...arguments);
          this._templetDic = void 0;
          this.time = void 0;
        }

        start() {
          this._templetDic = {};
        }

        update(deltaTime) {}

        static get ins() {
          var self = this;

          if (self._ins == null) {
            self._ins = new LoadingController();
          }

          return self._ins;
        }

        showLoading(timeoutCall) {
          if (timeoutCall === void 0) {
            timeoutCall = null;
          }

          var scene = director.getScene().getChildByName("Canvas");

          if (scene && scene.getChildByName('loadingNode')) {
            var loadingnode = scene.getChildByName('loadingNode');
            var txt = loadingnode.getChildByName("Label");

            if (txt) {
              txt.getComponent(Label).string = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.getStrById(10015);
            }

            loadingnode.setSiblingIndex(999);
            scene.getChildByName('loadingNode').active = true;
            clearTimeout(this.time);
            this.time = setTimeout(() => {
              timeoutCall && timeoutCall();
              this.hideLoading();
            }, 10000);
          }
        }

        hideLoading() {
          var scene = director.getScene().getChildByName("Canvas");

          if (scene && scene.getChildByName('loadingNode')) {
            scene.getChildByName('loadingNode').active = false;
            clearTimeout(this.time);
          }
        }

      }, _class2._ins = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ea93008f68a34b69f0a540f50eb1b7da23e03da.js.map