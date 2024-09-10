System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, instantiate, isValid, Label, Prefab, resources, uiMgr, ShowMsgPanelComponent, MessageManager, _crd, _showMsg;

  /**
   * 累加消息样式
   * @param msg 
   */

  /**
   * 覆盖提示消息样式
   * @param msg 
   */
  function showMsg(msg, _par) {
    if (!_showMsg) _showMsg = new MessageManager();

    _showMsg.showMassage(msg, "add", _par);
  }

  function showMsg2(msg, _par) {
    if (_par === void 0) {
      _par = null;
    }

    if (!_showMsg) _showMsg = new MessageManager();

    _showMsg.showMassage(msg, "recover", _par);
  }

  function delMsg(msg) {
    if (!_showMsg) _showMsg = new MessageManager(); // _showMsg.deletemsg(msg);
  }

  function showMsgPanel(msg, _par) {
    if (_par === void 0) {
      _par = null;
    }

    if (!_showMsg) _showMsg = new MessageManager();

    _showMsg.showMsgPanel(msg, _par);
  }
  /**
   * MessageManager 
   * @usage 通用提示框
   */


  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowMsgPanelComponent(extras) {
    _reporterNs.report("ShowMsgPanelComponent", "../../game/components/ShowMsgPanelComponent", _context.meta, extras);
  }

  _export({
    showMsg: showMsg,
    showMsg2: showMsg2,
    delMsg: delMsg,
    showMsgPanel: showMsgPanel,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      uiMgr = _unresolved_2.uiMgr;
    }, function (_unresolved_3) {
      ShowMsgPanelComponent = _unresolved_3.ShowMsgPanelComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63a3bpdBk5LYr2IRZ9lANkz", "MessageManager", undefined);

      __checkObsolete__(['director', 'instantiate', 'isValid', 'Label', 'Node', 'Prefab', 'resources', 'Script']);

      _export("default", MessageManager = class MessageManager {
        constructor() {
          this.showGroup = void 0;
          this._recovertest = "";
          this._msgpanel = null;
          this.recovMessage = void 0;
          var self = this;
        }

        /**显示提示文本*/
        showMassage(str, type, _par) {
          if (type === void 0) {
            type = "add";
          }

          var s = this;
          s._recovertest = str;
          s.showGroup = _par;

          switch (type) {
            case "add":
              break;

            case "recover":
              if (s.recovMessage && isValid(s.recovMessage)) {
                s.recovMessage.removeFromParent();
              }

              s.loadtoast();
              break;
          }
        }

        /**
         * 
         * @param str 
         */
        showMsgPanel(str, _par) {
          var s = this;
          (_crd && ShowMsgPanelComponent === void 0 ? (_reportPossibleCrUseOfShowMsgPanelComponent({
            error: Error()
          }), ShowMsgPanelComponent) : ShowMsgPanelComponent).CONTENT = str;
          s.showGroup = director.getScene().getChildByName('Canvas');
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/rewards/pre_showMsg", s.showGroup);
        }

        loadtoast() {
          // director.loadScene("sign");
          var s = this;

          if (!s.recovMessage) {
            resources.load("prefabs/pre_toast", Prefab, s.loadcom.bind(s));
          } else {
            s.addmmessage();
          }
        }

        loadcom(err, prefab) {
          var s = this;
          s.recovMessage = instantiate(prefab);
          s.addmmessage();
        }

        addmmessage() {
          var s = this;

          try {
            var lab = s.recovMessage.getChildByName("spr_bg").getChildByName("label_desc");
            lab.getComponent(Label).string = s._recovertest;

            if (!s.showGroup || !s.showGroup.isValid) {
              s.showGroup = director.getScene().getChildByName('Canvas');
              s.showGroup.addChild(s.recovMessage);
            } else {
              s.showGroup.addChild(s.recovMessage);
            }
          } catch (err) {
            console.log(err);
          }
        } // private addMessage2(str: string): void {
        //     let s = this;
        //     if(s.recovMessage){
        //         TweenMax.killTweensOf(s.recovMessage);
        //     }else{
        //         s.recovMessage = new SingleMessage2(s.showGroup, s.wordGroup);
        //     }
        //     s.recovMessage.messageStr = str;
        //     s.recovMessage.x = (Laya.stage.width - s.recovMessage.img_bg.width) / 2;
        //     s.recovMessage.y = Laya.stage.height / 2 - s.recovMessage.img_bg.height ;
        //     TweenMax.to(s.recovMessage,0.1,{delay:1.4,onComplete:()=>{
        //         TweenMax.killTweensOf(s.recovMessage);
        //         s.recovMessage.remove();
        //         s.recovMessage = null;
        //     }})
        // }
        // private _timer: Laya.Timer;
        // /**添加提示信息 */
        // private addMessage(str: string): void {
        //     let self = this;
        //     let len = self._msgs.length + self._msgArr.length;
        //     if (len >= self.max_num) {
        //         self._msgs.shift();
        //         self._msgs.push(str);
        //     } else {
        //         self._msgs.push(str);
        //     }
        //     loopMgr.addToFrame(self.doNextFrame, self);
        // }
        // private doNextFrame() {
        //     let self = this;
        //     if (self._msgs.length == 0) {
        //         loopMgr.removeFromFrame(self.doNextFrame, self);
        //         return;
        //     }
        //     if (self._msgArr.length > self.max_num) {
        //         self._msgs.shift();
        //         return;
        //     }
        //     let str = self._msgs.shift();
        //     let message = self.getSingleMessage();
        //     self._msgArr.push(message);
        //     message.messageStr = str;
        //     message.x = (Laya.stage.width - message.img_bg.width) / 2;
        //     message.y = (Laya.stage.height) / 2;
        //     message.startTweenAlpha();
        //     self.refreshShow();
        // }
        // private refreshShow(): void {
        //     let self = this;
        //     let len = self._msgArr.length;
        //     for (let i: number = 0; i < len; i++) {
        //         let per = self._msgArr[i];
        //         let moveY = Laya.stage.height / 2 - per.img_bg.height * (len - i);
        //        TweenMax.killTweensOf(per);
        //         if (per.y > moveY) {
        //             TweenMax.to(per,0.4,{ y: moveY });
        //         }
        //     }
        // }
        // public deletemsg(msg: SingleMessage): void {
        //     let self = this;
        //     let dex = self._msgArr.indexOf(msg);
        //     TweenMax.killTweensOf(msg);
        //     if (dex != -1) {
        //         self._msgArr.splice(dex, 1);
        //     }
        //     self._pools.push(msg);
        // }
        // private _msgs: string[] = [];
        // private _msgArr: SingleMessage[] = [];
        // private _pools: SingleMessage[] = [];
        // private max_num: number = 5;
        // /**获取单个消息显示对象 */
        // private getSingleMessage(): SingleMessage {
        //     let self = this;
        //     let message: SingleMessage;
        //     if (self._pools.length > 0) {
        //         let replace = self._pools.shift();
        //         message = replace;
        //     }
        //     else {
        //         message = new SingleMessage(self.showGroup, self.wordGroup);
        //     }
        //     return message;
        // }


      });

      MessageManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e653736f2241e9e5eeb22c4a93335b2202f0f5f.js.map