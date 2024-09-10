System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, observer, socket, WorkCatModel, WebUtils, network, WorkState, showMsgWithMask, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, shareTGPostCard, WorkPostCardShow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorkCatModel(extras) {
    _reporterNs.report("WorkCatModel", "../../../model/WorkCatModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorkState(extras) {
    _reporterNs.report("WorkState", "../../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsgWithMask(extras) {
    _reporterNs.report("showMsgWithMask", "../../../core/message/MaskToastManager", _context.meta, extras);
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
      observer = _unresolved_2.observer;
      socket = _unresolved_2.socket;
    }, function (_unresolved_3) {
      WorkCatModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      WebUtils = _unresolved_4.default;
    }, function (_unresolved_5) {
      network = _unresolved_5.network;
    }, function (_unresolved_6) {
      WorkState = _unresolved_6.WorkState;
    }, function (_unresolved_7) {
      showMsgWithMask = _unresolved_7.showMsgWithMask;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b8f33wsUJDQoBAtZWQw0bE", "WorkPostCardShow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("shareTGPostCard", shareTGPostCard = 'shareTGPostCard');

      _export("WorkPostCardShow", WorkPostCardShow = (_dec = ccclass('WorkPostCardShow'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class WorkPostCardShow extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "storyTxt", _descriptor, this);

          _initializerDefineProperty(this, "storyImg", _descriptor2, this);

          _initializerDefineProperty(this, "finalEarn", _descriptor3, this);

          _initializerDefineProperty(this, "btn", _descriptor4, this);
        }

        start() {//this.updateWorkInfo()
        }

        updateWorkInfo() {
          this.storyTxt.string = (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).currentStory;
          this.finalEarn.string = "Final Earning  = " + (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).finalEarn;
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getRemoteImg((_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).currentWorkResultImg, this.storyImg, () => {
            this.node.setScale(1, 1);
          });
        }

        update(deltaTime) {}

        closePostCard() {
          if (!(_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).shareDone) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)('sharing picture!');
            return;
          } //uiMgr.removeParent("prefabs/pre_post_card");


          if ((_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).state === (_crd && WorkState === void 0 ? (_reportPossibleCrUseOfWorkState({
            error: Error()
          }), WorkState) : WorkState).WORK_DONE_REWARDING) {
            var catWorkData = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).GetWorkReward();
            catWorkData.data.workId = (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
              error: Error()
            }), WorkCatModel) : WorkCatModel).currentWorkId;
            (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
              error: Error()
            }), socket) : socket).sendWebSocketBinary(catWorkData);
          }

          (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).resetWorkInfo();
          this.btn.active = false;
          this.node.active = false;
        }

        sharePostCard() {
          (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).shareDone = false;
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post(shareTGPostCard); //this.closePostCard()
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "storyTxt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "storyImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "finalEarn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec5], {
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
//# sourceMappingURL=b421d461ab6f19ddb659538027554941153fa5fa.js.map