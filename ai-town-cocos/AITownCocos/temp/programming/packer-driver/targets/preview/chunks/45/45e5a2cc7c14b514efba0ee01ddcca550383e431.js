System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, randomRangeInt, sp, UITransform, modelMgr, showMsgWithMask, SpineName, BottomTapsComponent, GlobalConfig, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, LeftPos, RightPos, CatState, startPosUp, endPosUp, LeftUpToDown, startPosDown, endPosDown, RightDownToUp, TAG, SpineNameType, catSpineControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsgWithMask(extras) {
    _reporterNs.report("showMsgWithMask", "../../core/message/MaskToastManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineName(extras) {
    _reporterNs.report("SpineName", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBottomTapsComponent(extras) {
    _reporterNs.report("BottomTapsComponent", "./BottomTapsComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
      randomRangeInt = _cc.randomRangeInt;
      sp = _cc.sp;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
    }, function (_unresolved_3) {
      showMsgWithMask = _unresolved_3.showMsgWithMask;
    }, function (_unresolved_4) {
      SpineName = _unresolved_4.SpineName;
    }, function (_unresolved_5) {
      BottomTapsComponent = _unresolved_5.BottomTapsComponent;
    }, function (_unresolved_6) {
      GlobalConfig = _unresolved_6.GlobalConfig;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f375/J8OhKxad+3mSl/tJ6", "catSpineControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'randomRangeInt', 'Skeleton', 'sp', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LeftPos", LeftPos = -850);

      _export("RightPos", RightPos = 360);

      _export("CatState", CatState = /*#__PURE__*/function (CatState) {
        CatState["IDLE"] = "IDLE";
        CatState["WALK"] = "WALK";
        CatState["STOP"] = "STOP";
        return CatState;
      }({}));

      startPosUp = {
        catRoot: {
          pos: {
            x: -34.821,
            y: -9
          },
          scale: {
            x: 0.7,
            y: 0.7
          }
        },
        bubble: {
          pos: {
            x: 125,
            y: 7.152857
          },
          scale: {
            x: 1.428571,
            y: 1.428571
          }
        },
        progress: {
          pos: {
            x: 235.135714,
            y: 153.344286
          },
          scale: {
            x: 1.714286,
            y: 1.714286
          }
        }
      };
      endPosUp = {
        catRoot: {
          pos: {
            x: -810.667,
            y: -9
          },
          scale: {
            x: 0.7,
            y: 0.7
          }
        },
        bubble: {
          pos: {
            x: 125,
            y: 7.152857
          },
          scale: {
            x: 1.428571,
            y: 1.428571
          }
        },
        progress: {
          pos: {
            x: 235.135714,
            y: 153.344286
          },
          scale: {
            x: 1.714286,
            y: 1.714286
          }
        }
      };
      LeftUpToDown = {
        catRoot: {
          pos: {
            x: -371.667,
            y: -191
          },
          scale: {
            x: -0.7,
            y: 0.7
          }
        },
        bubble: {
          pos: {
            x: -416.501,
            y: 7.152857
          },
          scale: {
            x: -1.428571,
            y: 1.428571
          }
        },
        progress: {
          pos: {
            x: 235.135714,
            y: 153.344286
          },
          scale: {
            x: -1.714286,
            y: 1.714286
          }
        }
      };
      startPosDown = {
        catRoot: {
          pos: {
            x: 25.668,
            y: -191
          },
          scale: {
            x: -0.7,
            y: 0.7
          }
        },
        bubble: {
          pos: {
            x: -416.501,
            y: 7.152857
          },
          scale: {
            x: -1.428571,
            y: 1.428571
          }
        },
        progress: {
          pos: {
            x: 235.135714,
            y: 153.344286
          },
          scale: {
            x: -1.714286,
            y: 1.714286
          }
        }
      };
      endPosDown = {
        catRoot: {
          pos: {
            x: 823.245,
            y: -191
          },
          scale: {
            x: -0.7,
            y: 0.7
          }
        },
        bubble: {
          pos: {
            x: -416.501,
            y: 7.152857
          },
          scale: {
            x: -1.428571,
            y: 1.428571
          }
        },
        progress: {
          pos: {
            x: 235.135714,
            y: 153.344286
          },
          scale: {
            x: -1.714286,
            y: 1.714286
          }
        }
      };
      RightDownToUp = {
        catRoot: {
          pos: {
            x: 371.667,
            y: -9
          },
          scale: {
            x: 0.7,
            y: 0.7
          }
        },
        bubble: {
          pos: {
            x: 125,
            y: 7.152857
          },
          scale: {
            x: 1.428571,
            y: 1.428571
          }
        },
        progress: {
          pos: {
            x: 235.135714,
            y: 153.344286
          },
          scale: {
            x: 1.714286,
            y: 1.714286
          }
        }
      };
      TAG = 'catSpineControl';

      _export("SpineNameType", SpineNameType = /*#__PURE__*/function (SpineNameType) {
        SpineNameType["ACTION"] = "action";
        SpineNameType["IDLE"] = "idle";
        SpineNameType["WALK"] = "walk";
        return SpineNameType;
      }({}));

      _export("catSpineControl", catSpineControl = (_dec = ccclass("catSpineControl"), _dec2 = property({
        type: [sp.Skeleton]
      }), _dec3 = property(sp.Skeleton), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class catSpineControl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "toySpineItemArr", _descriptor, this);

          _initializerDefineProperty(this, "catSpine", _descriptor2, this);

          _initializerDefineProperty(this, "chatBubble", _descriptor3, this);

          _initializerDefineProperty(this, "catRoot", _descriptor4, this);

          _initializerDefineProperty(this, "bubbleMask", _descriptor5, this);

          _initializerDefineProperty(this, "progressBar", _descriptor6, this);

          _initializerDefineProperty(this, "angle", _descriptor7, this);

          _initializerDefineProperty(this, "angleReverse", _descriptor8, this);

          this.shiftTime = 10;
          this.currentAddTime = 0;
          this.catWalkEndPosition = startPosDown.catRoot;
          this.catState = CatState.IDLE;
          this.preCatState = null;
          this.hasToy = void 0;
        }

        start() {
          this.playActionSpine(SpineNameType.IDLE, true);
          this.setSpineCompleteCb();
          (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.catRootNode = this.catRoot;
        }

        playActionSpine(aniName, loop) {
          this.catSpine.setAnimation(0, aniName, loop);
        }

        touchCat() {
          if ((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101002) <= 0) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)("Insufficient Ap!");
            return;
          }

          if (!(_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.playAniComplete) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_catAction");
          this.preCatState = this.catState;
          this.catState = CatState.STOP;
          this.chatBubble.getComponent(_crd && BottomTapsComponent === void 0 ? (_reportPossibleCrUseOfBottomTapsComponent({
            error: Error()
          }), BottomTapsComponent) : BottomTapsComponent).mask.getComponent(UITransform).width && this.chatBubble.getComponent(_crd && BottomTapsComponent === void 0 ? (_reportPossibleCrUseOfBottomTapsComponent({
            error: Error()
          }), BottomTapsComponent) : BottomTapsComponent).resetQipao();
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.touchCat();
          this.playActionSpine(SpineNameType.ACTION, false);
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.playAniComplete = false;
        }

        setSpineCompleteCb() {
          this.toySpineItemArr.forEach(toy => {
            toy.setCompleteListener(data => {
              (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).mainModel.playAniComplete = true;
              toy.node.active = false;

              if (this.preCatState === CatState.WALK) {
                this.catState = CatState.WALK;
                this.catSpine.setAnimation(0, SpineNameType.WALK, true);
              } else {
                this.catState = CatState.IDLE;
                this.catSpine.setAnimation(0, SpineNameType.IDLE, true);
              }

              this.hasToy = false;
            });
          });
          this.catSpine.setCompleteListener(data => {
            //   if(data.animation.name === SpineNameType.ACTION){
            //       modelMgr.mainModel.playAniComplete = true
            //       this.catSpine.setAnimation(0, SpineNameType.IDLE, true)
            //   }
            //   if(data.animation.name === SpineNameType.WALK && this.catState === CatState.WALK){
            //     this.catSpine.setAnimation(0, SpineNameType.ACTION, false);
            //     this.catSpine.setAnimation(1, SpineNameType.ACTION, true);
            //   }
            if (this.catState === CatState.STOP && !this.hasToy) {
              if (this.preCatState === CatState.WALK) {
                this.catState = CatState.WALK;
                this.catSpine.setAnimation(0, SpineNameType.WALK, true);
              } else {
                this.catState = CatState.IDLE;
                this.catSpine.setAnimation(0, SpineNameType.IDLE, true);
              }
            }

            if (this.catState === CatState.IDLE) {
              this.catSpine.setAnimation(0, SpineNameType.IDLE, true);
            }

            if (data.animation.name === SpineNameType.WALK) {
              this.currentAddTime = 0;
            }

            (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.playAniComplete = true;

            if (this.currentAddTime >= 10 && this.catState !== CatState.WALK) {
              var actStr = this.progressBar.getChildByName("progress_button").active === true || this.bubbleMask.getComponent(UITransform).width ? CatState.IDLE : randomRangeInt(0, 2) ? CatState.IDLE : CatState.WALK;

              if (actStr === CatState.IDLE) {
                var actIdleTypeStr = randomRangeInt(0, 2) ? (_crd && SpineName === void 0 ? (_reportPossibleCrUseOfSpineName({
                  error: Error()
                }), SpineName) : SpineName).idle : (_crd && SpineName === void 0 ? (_reportPossibleCrUseOfSpineName({
                  error: Error()
                }), SpineName) : SpineName).action;

                if (actIdleTypeStr === (_crd && SpineName === void 0 ? (_reportPossibleCrUseOfSpineName({
                  error: Error()
                }), SpineName) : SpineName).idle) {
                  this.catSpine.setAnimation(0, actIdleTypeStr, true);
                } else {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound("new_catAction");
                  this.catSpine.setAnimation(0, actIdleTypeStr, false);
                }

                this.preCatState = this.catState;
                this.catState = CatState.IDLE;
              } else {
                this.catSpine.setAnimation(0, SpineNameType.WALK, true);
                this.preCatState = this.catState;
                this.catState = CatState.WALK;
              }

              this.currentAddTime = 0;
            }
          });
        }

        startWalk() {}

        playToySpineAniByID(index) {
          this.preCatState = this.catState;
          this.catState = CatState.STOP;
          this.hasToy = true;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.playAniComplete = false;
          this.catSpine.setAnimation(0, SpineNameType.IDLE, true);
          this.toySpineItemArr[index].setAnimation(0, "action", false);
        }

        catInRange() {
          if (Math.abs(this.catRoot.position.x) > 0 && Math.abs(this.catRoot.position.x) < 450) {
            return true;
          } else {
            return false;
          }
        }

        update(deltaTime) {
          if (this.progressBar.getChildByName("progress_button").active === true || this.bubbleMask.getComponent(UITransform).width) {
            this.currentAddTime = 0;
          }

          this.currentAddTime += deltaTime;

          if (this.catState === CatState.WALK && this.catWalkEndPosition === startPosDown.catRoot) {
            this.catMoveUpToDown();
          }

          if (this.catState === CatState.WALK && this.catWalkEndPosition === startPosUp.catRoot) {
            this.catMoveDownToUp();
          }
        }

        equalCatPosition(endPosition) {
          if (Math.abs(this.catRoot.getPosition().x) <= Math.abs(endPosition.pos.x) && this.catRoot.getPosition().y === endPosition.pos.y) {
            this.preCatState = this.catState;
            this.catState = CatState.IDLE;
            this.catWalkEndPosition = this.catWalkEndPosition === startPosDown.catRoot ? startPosUp.catRoot : startPosDown.catRoot;
            this.catSpine.setAnimation(0, SpineNameType.ACTION, false);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound("new_catAction"); //return true
          } else {//return false
          }
        }

        catMoveDownToUp() {
          //移动
          //如果被其他动作打断，打断完继续移动
          //移动结束播放action
          if (this.catRoot.getScale().x < 0) {
            this.catMoveStep(startPosDown.catRoot, endPosDown.catRoot);

            if (this.catRoot.getPosition().x >= endPosDown.catRoot.pos.x) {
              this.setNodePosData(RightDownToUp.catRoot, RightDownToUp.bubble, RightDownToUp.progress);
            }
          }

          if (this.catRoot.getScale().x > 0) {
            this.catMoveStep(RightDownToUp.catRoot, startPosUp.catRoot);
          }

          this.equalCatPosition(this.catWalkEndPosition);
        }

        catMoveUpToDown() {
          //移动
          //如果被其他动作打断，打断完继续移动
          //移动结束播放action
          if (this.catRoot.getScale().x > 0) {
            this.catMoveStep(startPosUp.catRoot, endPosUp.catRoot);

            if (this.catRoot.getPosition().x <= endPosUp.catRoot.pos.x) {
              this.setNodePosData(LeftUpToDown.catRoot, LeftUpToDown.bubble, LeftUpToDown.progress);
            }
          }

          if (this.catRoot.getScale().x < 0) {
            this.catMoveStep(LeftUpToDown.catRoot, startPosDown.catRoot);
          }

          this.equalCatPosition(this.catWalkEndPosition);
        }

        catMoveStep(start, end) {
          this.catRoot.setPosition(this.catRoot.getPosition().x - (start.pos.x - end.pos.x) / 300, this.catRoot.getPosition().y);
        }

        setNodePosData(catPos, bubblePos, progressPos) {
          this.catRoot.setScale(catPos.scale.x, catPos.scale.y);
          this.catRoot.setPosition(catPos.pos.x, catPos.pos.y);
          this.bubbleMask.setScale(bubblePos.scale.x, bubblePos.scale.y);
          this.bubbleMask.setPosition(bubblePos.pos.x, bubblePos.pos.y);
          this.progressBar.setScale(progressPos.scale.x, progressPos.scale.y);
          this.progressBar.setPosition(progressPos.pos.x, progressPos.pos.y);

          if (catPos.scale.x > 0) {
            this.angle.active = true;
            this.angleReverse.active = false;
          } else {
            this.angle.active = false;
            this.angleReverse.active = true;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toySpineItemArr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "catSpine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "chatBubble", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "catRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bubbleMask", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "angle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "angleReverse", [_dec9], {
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
//# sourceMappingURL=45e5a2cc7c14b514efba0ee01ddcca550383e431.js.map