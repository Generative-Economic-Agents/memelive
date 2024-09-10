System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ScrollingText, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GundongTxtComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftaskcell(extras) {
    _reporterNs.report("taskcell", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScrollingText(extras) {
    _reporterNs.report("ScrollingText", "./ScrollingText", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ScrollingText = _unresolved_2.ScrollingText;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e2a98uu05EpZGKqWZDtXI4", "GundongTxtComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GundongTxtComponent", GundongTxtComponent = (_dec = ccclass('GundongTxtComponent'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = class GundongTxtComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Sprite_bg", _descriptor, this);

          _initializerDefineProperty(this, "Label_tishi", _descriptor2, this);
        }

        start() {}

        onDestroy() {// observer.on(EventType.SOCKET_TASK_CHANGE, this.taskchangeHandler,this);
        }

        update(deltaTime) {}

        finishHandler() {
          this.Sprite_bg.active = false;
        }

        taskchangeHandler(da) {
          var last = da.data.last;
          var cur = da.data.cur;

          if (last.status != 2 && cur.status == 2) {
            var sct = this.Label_tishi.getComponent(_crd && ScrollingText === void 0 ? (_reportPossibleCrUseOfScrollingText({
              error: Error()
            }), ScrollingText) : ScrollingText); // let txt = modelMgr.configModel.getconfigByGrpAId(StaticConfigModel.TaskCfg,cur.taskId);
            // sct.startScroll(txt);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_tishi", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f00a5ea3d16c4a5b6ca8fa675ec64d9841cfdd5.js.map