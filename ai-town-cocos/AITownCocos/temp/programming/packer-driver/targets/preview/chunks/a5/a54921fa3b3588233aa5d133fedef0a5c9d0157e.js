System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, EditBox, Label, Material, Node, Sprite, UITransform, TabGroup, modelMgr, observer, GlobalConfig, EventType, showMsg2, showMsgWithMask, ActionType, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, TAG, BottomTapsComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTabGroup(extras) {
    _reporterNs.report("TabGroup", "./TabGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsgWithMask(extras) {
    _reporterNs.report("showMsgWithMask", "../../core/message/MaskToastManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatActionInfo(extras) {
    _reporterNs.report("CatActionInfo", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../manager/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Material = _cc.Material;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      TabGroup = _unresolved_2.TabGroup;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
      observer = _unresolved_3.observer;
    }, function (_unresolved_4) {
      GlobalConfig = _unresolved_4.GlobalConfig;
    }, function (_unresolved_5) {
      EventType = _unresolved_5.EventType;
    }, function (_unresolved_6) {
      showMsg2 = _unresolved_6.showMsg2;
    }, function (_unresolved_7) {
      showMsgWithMask = _unresolved_7.showMsgWithMask;
    }, function (_unresolved_8) {
      ActionType = _unresolved_8.ActionType;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2994f0e0PBFNISurIrblcl/", "BottomTapsComponent", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationClip', 'Color', 'Component', 'director', 'EditBox', 'HorizontalTextAlignment', 'Label', 'Material', 'Node', 'RichText', 'Sprite', 'tween', 'UITransform', 'Vec3', 'VerticalTextAlignment']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'BottomTapsComponent';

      _export("BottomTapsComponent", BottomTapsComponent = (_dec = ccclass('BottomTapsComponent'), _dec2 = property({
        type: [Node]
      }), _dec3 = property({
        type: [Node]
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: [Node]
      }), _dec6 = property({
        type: [EditBox]
      }), _dec7 = property({
        type: [EditBox]
      }), _dec8 = property({
        type: [Label]
      }), _dec9 = property({
        type: [Sprite]
      }), _dec10 = property({
        type: [Sprite]
      }), _dec11 = property(Material), _dec12 = property(Sprite), _dec(_class = (_class2 = class BottomTapsComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mask", _descriptor, this);

          _initializerDefineProperty(this, "node_qipao", _descriptor2, this);

          _initializerDefineProperty(this, "txt_qipao", _descriptor3, this);

          _initializerDefineProperty(this, "node_content", _descriptor4, this);

          _initializerDefineProperty(this, "editBoxNode", _descriptor5, this);

          _initializerDefineProperty(this, "editBoxNode2", _descriptor6, this);

          _initializerDefineProperty(this, "tempLabel", _descriptor7, this);

          _initializerDefineProperty(this, "chtbg1", _descriptor8, this);

          _initializerDefineProperty(this, "chtbg2", _descriptor9, this);

          _initializerDefineProperty(this, "mat", _descriptor10, this);

          _initializerDefineProperty(this, "transitionNode", _descriptor11, this);

          this._editing = false;
          this.dotInterval = 0.5;
          // 每个点之间的时间间隔，单位是秒  
          this.dotsCount = 3;
          // 要输入的点的数量  
          this.currentDotIndex = 0;
        }

        start() {
          this.getComponent(_crd && TabGroup === void 0 ? (_reportPossibleCrUseOfTabGroup({
            error: Error()
          }), TabGroup) : TabGroup).node.on("update_tab_content", this.upatetabHandler, this);
          this.editBoxNode.node.on(EditBox.EventType.TEXT_CHANGED, this.onTextChanged, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHAT, this.chatresponse, this);
          this.txt_qipao.string = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getStrById(10012);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ZHAOHU, this.zhaohuRepHandler, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGE_CATS, this.changeCatsHandler, this);
        }

        onTextChanged(event) {
          // 获取文本内容  
          if (this.isOnlyNewLines(this.editBoxNode.string)) {
            this.editBoxNode.string = "";
          }

          var text = this.editBoxNode.string;
          this.tempLabel.string = text; // 测量文本高度  

          var textHeight = this.tempLabel.node.getComponent(UITransform).height;

          if (textHeight < 38) {
            //一样文本的高度
            textHeight = 38;
          } // 根据文本高度调整 EditBox 的高度（可能还需要考虑一些额外的边距）  


          this.editBoxNode.node.getComponent(UITransform).height = textHeight;
          this.chtbg1.getComponent(UITransform).height = textHeight + 353;
          this.chtbg2.getComponent(UITransform).height = textHeight + 45;
        }

        upatetabHandler(e, index) {// this.node_content.on(Node.EventType.TOUCH_END, this.resetbottomtabsClick, this);
        }

        update(deltaTime) {}

        btnclickHandler(e, index) {
          switch (index) {
            case "jiaoyu1":
              this.node_qipao.active = true;
              this.txt_qipao.string = "<color=#00ff00>普通教育</color>";
              break;

            case "jiaoyu2":
              this.node_qipao.active = true;
              this.txt_qipao.string = "<color=#00ff00>家庭教育</color>";
              break;

            case "touwei1":
              this.node_qipao.active = true;
              this.txt_qipao.string = "<color=#00ff00>普通猫粮</color>";
              break;

            case "touwei2":
              this.node_qipao.active = true;
              this.txt_qipao.string = "<color=#00ff00>金色小鱼干</color>";
              break;
          }

          this.scheduleOnce(() => {
            this.node_qipao.active = false;
          }, 3);
        }

        isOnlyNewLines(str) {
          // 这个正则表达式匹配任意数量的换行符
          // ^ 表示字符串开始，$ 表示字符串结束
          // [\r\n] 匹配任何一个换行符或回车符
          // * 表示匹配前面的子表达式零次或多次
          return /^[\r\n]*$/.test(str);
        }

        chatBubbleVisible(show) {
          var aniName = show ? 'bubbleShow' : 'bubbleHide';
          this.mask.getComponent(Animation).play(aniName); // this.node_qipao.getChildByName('Label_title').active = show
          // let start = show ? {num:0} : {num:255};
          // let end = show ? {num:255} : {num:0};
          // const sp = this.transitionNode;
          // const color = new Color(255,255,255);
          // sp.color = color;
          // const mat = this.mat;
          // sp.material = mat;
          // tween(start).delay(0.0016).to(0.3,end, {
          //     onUpdate(target:any, ratio: number) {
          //         color.r = target.num;
          //         sp.color = color;
          //     },
          // }).start();
        }

        chatBubbleHide() {}

        checkCatActionState() {}
        /**
         * 回车响应
         */


        inputReturnHandler() {
          this.inputokClickHandler();
          this.editBoxNode.blur();
        }

        inputokClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if ((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.chatIsediting) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)("chat is editing");
            return;
          }

          if (!(_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.playAniComplete) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)("Cat has Action now!");
            return;
          }

          var actionData = {
            type: (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).TALK,
            text: '',
            //谈话的动作气泡词由websocket推送提供
            duringTime: 5
          };
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SEND_CAT_ACTION, actionData);
          this.resetQipao();
          var tili = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101002);

          if (!tili) {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)("Insufficient AP value");
            return;
          }

          if (this.isOnlyNewLines(this.editBoxNode.string)) {
            this.editBoxNode.string = "";
          }

          if (!this.editBoxNode.string) {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getStrById(10010));
            return;
          }

          if (this._editing) {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getStrById(10012));
            return;
          }

          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.chatReq((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId(), this.editBoxNode.string);
          this._editing = true;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.chatIsediting = true;
          this.node_qipao.active = true;
          this.chatBubbleVisible(true);
          this.schedule(this.startTypingDots, this.dotInterval); // 安排下一次输入点的回调  

          this.editBoxNode.string = "";
          this.onTextChanged(null); // this.unschedule(this.resetQipao);
        }

        // 当前点的索引  
        startTypingDots() {
          if (this.currentDotIndex < this.dotsCount) {
            this.txt_qipao.string += '.'; // 在文本框末尾添加点  

            this.currentDotIndex++; // 递增点的索引  
          } else {
            this.currentDotIndex = 0; // 重置点的索引，如果需要的话  
            // 可以在这里添加额外的逻辑，比如重置文本框内容或停止输入等  
            // this.txt_qipao.string = "正在生成中"

            this.txt_qipao.string = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getStrById(10012);
          }
        }

        // 如果需要停止输入点，可以调用这个函数  
        stopTypingDots() {
          this._editing = false;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.chatIsediting = false;
          this.unschedule(this.startTypingDots); // 取消所有安排的回调  
        }

        /***
         * 气泡自适应
         */
        setNodeWidth() {
          this.unschedule(this.resetQipao);
          this.stopTypingDots();
          var txt = this.node_qipao.getChildByName("Label_title");
          var bg = this.node_qipao.getChildByName("Sprite");
          var height = txt.getComponent(UITransform).height;

          if (height < 55) {
            height = 70;
          }

          bg.getComponent(UITransform).height = height + 30; //this.mask.getComponent(UITransform).height = height + 180;

          this.node_qipao.getComponent(UITransform).height = height + 30;
        } //切换猫咪清除掉开场白


        changeCatsHandler() {
          this.resetQipao();
        }

        resetQipao() {
          if (!this.mask.getComponent(UITransform).width) {
            return;
          }

          var bg = this.node_qipao.getChildByName("Sprite"); //this.node_qipao.active = false;

          this.chatBubbleVisible(false); // this.txt_qipao.string = "正在生成中";

          this.txt_qipao.string = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getStrById(10012);
          bg.getComponent(UITransform).height = 98;
          this.node_qipao.getComponent(UITransform).height = 98;
        }

        chatresponse(da) {
          var data = da.data;

          if (!data.data.message.length) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_catChat");
          var duringTime = data.data.message.length ? 20 : 0; //之前写死的7

          this.node_qipao.active = true;
          this.chatBubbleVisible(true);
          this.txt_qipao.string = "" + data.data.message;
          this.editBoxNode.node.getComponent(UITransform).height = 38;
          this.tempLabel.string = "";
          this.editBoxNode.string = "";
          this.chtbg1.getComponent(UITransform).height = 353;
          this.chtbg2.getComponent(UITransform).height = 81;
          this.scheduleOnce(() => {
            this.setNodeWidth();
            this.scheduleOnce(this.resetQipao, duringTime);
          }, 0);
        }

        closeinputClickHandler() {
          this.getComponent(_crd && TabGroup === void 0 ? (_reportPossibleCrUseOfTabGroup({
            error: Error()
          }), TabGroup) : TabGroup).resetAllTabs();
        }

        resetbottomtabsClick() {
          this.node_content.off(Node.EventType.TOUCH_END, this.resetbottomtabsClick, this);
          this.getComponent(_crd && TabGroup === void 0 ? (_reportPossibleCrUseOfTabGroup({
            error: Error()
          }), TabGroup) : TabGroup).resetAllTabs();
        }
        /**
         * 打招呼响应
         * @param da 
         */


        zhaohuRepHandler(da) {
          if ((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.hasToySpine) {
            return;
          }

          var data = da.data;
          this.node_qipao.active = true;
          this.chatBubbleVisible(true);
          this.txt_qipao.string = "" + data.data.msg;
          this.editBoxNode.node.getComponent(UITransform).height = 38;
          this.tempLabel.string = "";
          this.editBoxNode.string = "";
          this.chtbg1.getComponent(UITransform).height = 353;
          this.chtbg2.getComponent(UITransform).height = 81;
          this.scheduleOnce(() => {
            this.setNodeWidth();
            this.scheduleOnce(this.resetQipao, 20);
          }, 0);
        }

        onDestroy() {
          //    if(this.node_content) this.node_content.off(Node.EventType.MOUSE_DOWN, this.resetbottomtabsClick, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHAT, this.chatresponse, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_qipao", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_qipao", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "editBoxNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "editBoxNode2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tempLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "chtbg1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "chtbg2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "mat", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "transitionNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a54921fa3b3588233aa5d133fedef0a5c9d0157e.js.map