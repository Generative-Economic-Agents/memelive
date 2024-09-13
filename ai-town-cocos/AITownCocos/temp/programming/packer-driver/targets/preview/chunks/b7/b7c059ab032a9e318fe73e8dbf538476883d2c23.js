System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Component, KeyCode, Node, TiledLayer, TiledMap, tween, Vec2, Vec3, view, NPCDirect, AStar, hight, GlobalConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, distance, spriteFrame, originRootX, frameSpeed, NPCControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNPCDirect(extras) {
    _reporterNs.report("NPCDirect", "../StaticUtils/KeyCodeUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNPCDisplayInfo(extras) {
    _reporterNs.report("NPCDisplayInfo", "../StaticUtils/KeyCodeUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAStar(extras) {
    _reporterNs.report("AStar", "./AStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhight(extras) {
    _reporterNs.report("hight", "../town/TownView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../game/config/GlobalConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      KeyCode = _cc.KeyCode;
      Node = _cc.Node;
      TiledLayer = _cc.TiledLayer;
      TiledMap = _cc.TiledMap;
      tween = _cc.tween;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      NPCDirect = _unresolved_2.NPCDirect;
    }, function (_unresolved_3) {
      AStar = _unresolved_3.AStar;
    }, function (_unresolved_4) {
      hight = _unresolved_4.hight;
    }, function (_unresolved_5) {
      GlobalConfig = _unresolved_5.GlobalConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7904dYEWZhA+od05T6U8oca", "NPCControl", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'Event', 'EventKeyboard', 'input', 'Input', 'js', 'KeyCode', 'macro', 'Node', 'sys', 'System', 'SystemEvent', 'TiledLayer', 'TiledMap', 'Tween', 'tween', 'Vec2', 'Vec3', 'view', 'View']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("distance", distance = -256); //每一组人物组成部分的间隔


      _export("spriteFrame", spriteFrame = 32); //每一帧的距离


      _export("originRootX", originRootX = -5.463);

      _export("frameSpeed", frameSpeed = 0.05);

      _export("NPCControl", NPCControl = (_dec = ccclass('NPCControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Camera), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = class NPCControl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "npcRoot", _descriptor, this);

          _initializerDefineProperty(this, "npc", _descriptor2, this);

          _initializerDefineProperty(this, "hair", _descriptor3, this);

          _initializerDefineProperty(this, "pants", _descriptor4, this);

          _initializerDefineProperty(this, "shirt", _descriptor5, this);

          _initializerDefineProperty(this, "body", _descriptor6, this);

          _initializerDefineProperty(this, "camera", _descriptor7, this);

          _initializerDefineProperty(this, "building", _descriptor8, this);

          _initializerDefineProperty(this, "bubble", _descriptor9, this);

          _initializerDefineProperty(this, "canvas", _descriptor10, this);

          _initializerDefineProperty(this, "mark", _descriptor11, this);

          _initializerDefineProperty(this, "tileMap", _descriptor12, this);

          _initializerDefineProperty(this, "front", _descriptor13, this);

          this.keyDown = false;
          //是否处于按下状态
          this.currentDirectKey = void 0;
          //当前按下的按键是那个
          this.stepIndex = 0;
          this.frameAdd = 0;
          this.aStarPath = [];
          this.rightPos = new Vec2();
          this.rightDirect = void 0;
          this.NpcID = void 0;
          this._curTile = new Vec2();
          //npc外形部分
          this.npcBasePartInfo = {
            body: 0,
            hair: {
              sexy: 'man',
              index: 0
            },
            pants: 0,
            shirt: 0
          };
          //当前选择的人物的服装信息
          this.npcDisplayInfo = {
            body: 0,
            hair: 0,
            pants: 0,
            shirt: 0
          };
          this.npcIndex = void 0;
        }

        start() {
          //View.instance.setOrientation(macro.ORIENTATION_LANDSCAPE)
          this.setNPCDisplayColor();
          this.setNPCDisplayBase();
        }

        update(deltaTime) {
          if (this.npcIndex === (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex) {
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.curViewNpcX = this.npc.getPosition().x;
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.curViewNpcX = this.npc.getPosition().y;

            if (this.canvas.getScale().x === 2) {
              var gameView = view.getVisibleSize();
              this.camera.node.setPosition(this.npc.getPosition().x - gameView.width / 2, this.tileMap.getPosition().y - ((_crd && hight === void 0 ? (_reportPossibleCrUseOfhight({
                error: Error()
              }), hight) : hight) - this.npc.getPosition().y));
              this.front.setPosition(this.camera.node.getPosition().x * 2, this.camera.node.getPosition().y * 2);
            } //console.log('======', this.camera.node.getPosition())

          }

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex === this.npcIndex) {
            this.mark.active = true;
          } else {
            this.mark.active = false;
          }

          this.frameAdd = this.frameAdd + deltaTime;

          if (this.keyDown && this.frameAdd > frameSpeed) {
            this.setMoveSprite(this.currentDirectKey);
            this.frameAdd = 0;
          }
        }

        setNPCDisplayBase(partBaseInfo) {
          if (partBaseInfo === void 0) {
            partBaseInfo = {
              body: 0,
              hair: {
                sexy: 'man',
                index: 0
              },
              pants: 0,
              shirt: 1
            };
          }

          this.npcBasePartInfo = partBaseInfo; //WebUtils.getResouceImg(NPCPartDisplay.body[this.npcBasePartInfo.body], this.body)
          // WebUtils.getResouceImg(NPCPartDisplay.hair[this.npcBasePartInfo.hair.sexy][this.npcBasePartInfo.hair.index], this.hair)
          // WebUtils.getResouceImg(NPCPartDisplay.shirt[this.npcBasePartInfo.shirt], this.shirt)
          // WebUtils.getResouceImg(NPCPartDisplay.pants[this.npcBasePartInfo.pants], this.pants)
        }

        setNPCDisplayColor(npcDisplayInfo) {
          if (npcDisplayInfo === void 0) {
            npcDisplayInfo = {
              body: 0,
              hair: 0,
              pants: 0,
              shirt: 0
            };
          }

          this.npcDisplayInfo = npcDisplayInfo;
          this.body.setPosition(this.npcDisplayInfo.body * distance, 0);
          this.hair.setPosition(this.npcDisplayInfo.hair * distance, 0);
          this.pants.setPosition(this.npcDisplayInfo.pants * distance, 0);
          this.shirt.setPosition(this.npcDisplayInfo.shirt * distance, 0);
        }

        setNPCMoveDirect(key) {
          this.npcRoot.setPosition(this.npcRoot.getPosition().x, (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
            error: Error()
          }), NPCDirect) : NPCDirect)[key].directPos);
        }

        setNPCPosition(key) {
          try {
            var _this$building;

            var block = this == null || (_this$building = this.building) == null || (_this$building = _this$building.getComponent(TiledLayer)) == null ? void 0 : _this$building.getTileGIDAt(this._curTile.x + (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
              error: Error()
            }), NPCDirect) : NPCDirect)[key].offsetX, this._curTile.y - (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
              error: Error()
            }), NPCDirect) : NPCDirect)[key].offsetY);

            if (block) {
              return;
            }

            var gameView = view.getVisibleSize();
            this._curTile.x = this._curTile.x + (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
              error: Error()
            }), NPCDirect) : NPCDirect)[key].offsetX;
            this._curTile.y = this._curTile.y - (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
              error: Error()
            }), NPCDirect) : NPCDirect)[key].offsetY;
            var pos = this.building.getComponent(TiledLayer).getPositionAt(this._curTile);
            (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
              error: Error()
            }), NPCDirect) : NPCDirect)[key];
            var originPos = this.npc.getPosition(); //this.npc.setPosition(originPos.x + NPCDirect[key].offsetX, originPos.y + NPCDirect[key].offsetY)

            this.npc.setPosition(pos.x, pos.y);

            if (this.npcIndex === (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex && this.canvas.getScale().x === 2) {
              //this.camera.node.setPosition(this.npc.getPosition().x - gameView.width / 2,  ((this.npc.getPosition().y - hight)))
              //this.camera.node.setPosition(new Vec3(512, 736, 0))
              this.camera.node.setPosition(this.npc.getPosition().x - gameView.width / 2, this.tileMap.getPosition().y - ((_crd && hight === void 0 ? (_reportPossibleCrUseOfhight({
                error: Error()
              }), hight) : hight) - this.npc.getPosition().y));
              this.front.setPosition(this.camera.node.getPosition()); // if((this.npc.getPosition().x > view.getVisibleSize().x && this.npc.getPosition().x < wight - view.getVisibleSize().x)){
              //     this.camera.node.setPosition(this.npc.getPosition().x, this.camera.node.getPosition().y)
              // }
              // if((this.npc.getPosition().y > view.getVisibleSize().y && this.npc.getPosition().y < hight - view.getVisibleSize().y)){
              //     this.camera.node.setPosition(this.camera.node.getPosition().x, this.npc.getPosition().y)
              // }
            } // if(this.camera){
            //     if((this.npc.getPosition().x > view.getVisibleSize().x && this.npc.getPosition().x < hight - view.getVisibleSize().x)){
            //         this.camera.node.setPosition(this.npc.getPosition().x, this.camera.node.getPosition().y)
            //     }
            //     if((this.npc.getPosition().y > view.getVisibleSize().y && this.npc.getPosition().y < hight - view.getVisibleSize().y)){
            //         this.camera.node.setPosition(this.camera.node.getPosition().x, this.npc.getPosition().y)
            //     }
            //     let json = new network.NPCMoveRequest();
            //     json.data.npcId = this.NpcID
            //     json.data.x = this.npc.getPosition().x,
            //     json.data.y = this.npc.getPosition().y,
            //     json.command = 10006;
            //     json.type = 1;
            //     socket.sendWebSocketBinary(json);
            // }

          } catch (error) {}
        }

        setMoveSprite(key) {
          if (this.stepIndex++ > 6) {
            this.stepIndex = 0;
            this.npcRoot.setPosition(originRootX, this.npcRoot.getPosition().y);
          } else {
            this.stepIndex = this.stepIndex++;
            this.npcRoot.setPosition(this.npcRoot.getPosition().x - spriteFrame, this.npcRoot.getPosition().y);
          }

          if (this.camera) {
            this.setNPCPosition(key);
          }
        }

        _getTilePos(posInPixel) {
          var mapSize = {
            height: _crd && hight === void 0 ? (_reportPossibleCrUseOfhight({
              error: Error()
            }), hight) : hight
          };
          var x = Math.floor(posInPixel.x / 32);
          var y = Math.floor((mapSize.height - posInPixel.y) / 32);
          return new Vec2(x, y - 1);
        }

        aStartMove(start, finish, cb) {
          var _this = this;

          this.aStarPath = this.node.getComponent(_crd && AStar === void 0 ? (_reportPossibleCrUseOfAStar({
            error: Error()
          }), AStar) : AStar).moveToward(start, finish);

          if (this.aStarPath.length <= 1) {
            cb && cb();
            return;
          } // for (let i = 0; i < this._paths.length; ++i) {
          //     this._debugDraw(this._paths[i], this._debugTileColor, i);
          // }


          var sequence = [];
          var prePos = this.npc.getPosition();
          var tileSize = this.building.parent.getComponent(TiledMap).getTileSize();

          var _loop = function _loop() {
            var actionPosition = _this.building.getComponent(TiledLayer).getPositionAt(_this.aStarPath[i]); // actionPosition.x += tileSize.width / 2;
            // actionPosition.y += tileSize.width / 2;


            sequence.push(tween(_this.npc).to(0.1, {
              position: new Vec3(actionPosition.x, actionPosition.y)
            }).call(() => {
              var steepKey;

              if (prePos.x < actionPosition.x) {
                steepKey = KeyCode.KEY_D;
              }

              if (prePos.x > actionPosition.x) {
                steepKey = KeyCode.KEY_A;
              }

              if (prePos.y < actionPosition.y) {
                steepKey = KeyCode.KEY_W;
              }

              if (prePos.y > actionPosition.y) {
                steepKey = KeyCode.KEY_S;
              }

              _this.setNPCMoveDirect(steepKey);

              _this.setMoveSprite(steepKey);

              _this._curTile = _this._getTilePos(_this.node.parent.getPosition());
              prePos.x = actionPosition.x;
              prePos.y = actionPosition.y;
            }));
          };

          for (var i = 1; i < this.aStarPath.length; ++i) {
            _loop();
          }

          tween(this.npc).sequence(...sequence).call(() => {
            cb && cb();
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "npcRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "npc", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hair", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pants", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shirt", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "body", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "building", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bubble", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "mark", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "tileMap", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "front", [_dec14], {
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
//# sourceMappingURL=b7c059ab032a9e318fe73e8dbf538476883d2c23.js.map