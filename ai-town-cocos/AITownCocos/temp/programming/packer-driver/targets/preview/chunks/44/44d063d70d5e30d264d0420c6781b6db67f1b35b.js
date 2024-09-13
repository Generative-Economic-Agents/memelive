System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "lodash", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, KeyCode, Label, Node, TiledLayer, TiledMap, TiledObjectGroup, tween, UITransform, Vec2, Vec3, view, modelMgr, observer, socket, EventType, network, WebUtils, BubbleImgUrl, EventNpcInfoMap, NpcEventType, NpcIndex, NPCPartDisplayInfo, ProductsItemUrl, NPCControl, _, PromiseUtils, GlobalConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _crd, ccclass, property, sleepFramePosX, sleepFrameTime, bubbleTime, hight, wight, PosAdapt, TownView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNPCServerD(extras) {
    _reporterNs.report("NPCServerD", "../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBubbleImgUrl(extras) {
    _reporterNs.report("BubbleImgUrl", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventNpcInfoMap(extras) {
    _reporterNs.report("EventNpcInfoMap", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNpcEventType(extras) {
    _reporterNs.report("NpcEventType", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNpcIndex(extras) {
    _reporterNs.report("NpcIndex", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNPCPartDisplayInfo(extras) {
    _reporterNs.report("NPCPartDisplayInfo", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProductsItemUrl(extras) {
    _reporterNs.report("ProductsItemUrl", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNPCControl(extras) {
    _reporterNs.report("NPCControl", "../NPC/NPCControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOf_(extras) {
    _reporterNs.report("_", "lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataEvents(extras) {
    _reporterNs.report("DataEvents", "../model/DataEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataFarmEvent(extras) {
    _reporterNs.report("DataFarmEvent", "../model/DataEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPromiseUtils(extras) {
    _reporterNs.report("PromiseUtils", "../StaticUtils/PromiseUtils", _context.meta, extras);
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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      KeyCode = _cc.KeyCode;
      Label = _cc.Label;
      Node = _cc.Node;
      TiledLayer = _cc.TiledLayer;
      TiledMap = _cc.TiledMap;
      TiledObjectGroup = _cc.TiledObjectGroup;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
      socket = _unresolved_2.socket;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }, function (_unresolved_4) {
      network = _unresolved_4.network;
    }, function (_unresolved_5) {
      WebUtils = _unresolved_5.default;
    }, function (_unresolved_6) {
      BubbleImgUrl = _unresolved_6.BubbleImgUrl;
      EventNpcInfoMap = _unresolved_6.EventNpcInfoMap;
      NpcEventType = _unresolved_6.NpcEventType;
      NpcIndex = _unresolved_6.NpcIndex;
      NPCPartDisplayInfo = _unresolved_6.NPCPartDisplayInfo;
      ProductsItemUrl = _unresolved_6.ProductsItemUrl;
    }, function (_unresolved_7) {
      NPCControl = _unresolved_7.NPCControl;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_unresolved_8) {
      PromiseUtils = _unresolved_8.PromiseUtils;
    }, function (_unresolved_9) {
      GlobalConfig = _unresolved_9.GlobalConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a641fPR0UVMybO2y7rFHhqC", "TownView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'KeyCode', 'Label', 'Node', 'TiledLayer', 'TiledMap', 'TiledObjectGroup', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sleepFramePosX", sleepFramePosX = [40, -61]);

      _export("sleepFrameTime", sleepFrameTime = 0.45);

      _export("bubbleTime", bubbleTime = 0.7);

      _export("hight", hight = 6720);

      _export("wight", wight = 640); // 434, 820


      PosAdapt = 1;

      _export("TownView", TownView = (_dec = ccclass("TownView"), _dec2 = property({
        type: [Node]
      }), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property({
        type: TiledObjectGroup
      }), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec(_class = (_class2 = class TownView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "otherNPCarr", _descriptor, this);

          _initializerDefineProperty(this, "player", _descriptor2, this);

          _initializerDefineProperty(this, "playerInstantiate", _descriptor3, this);

          _initializerDefineProperty(this, "playerLayer", _descriptor4, this);

          _initializerDefineProperty(this, "playerNode", _descriptor5, this);

          _initializerDefineProperty(this, "tileObject", _descriptor6, this);

          _initializerDefineProperty(this, "loading", _descriptor7, this);

          _initializerDefineProperty(this, "farmHomeBedHead", _descriptor8, this);

          _initializerDefineProperty(this, "farmHomeBedBubble", _descriptor9, this);

          _initializerDefineProperty(this, "farmDinning", _descriptor10, this);

          _initializerDefineProperty(this, "fieldWheat", _descriptor11, this);

          _initializerDefineProperty(this, "fieldCorn", _descriptor12, this);

          _initializerDefineProperty(this, "fieldCabbage", _descriptor13, this);

          _initializerDefineProperty(this, "farmland1", _descriptor14, this);

          _initializerDefineProperty(this, "farmland2", _descriptor15, this);

          _initializerDefineProperty(this, "farmland3", _descriptor16, this);

          _initializerDefineProperty(this, "farmland4", _descriptor17, this);

          _initializerDefineProperty(this, "herdmanHomeBedHead", _descriptor18, this);

          _initializerDefineProperty(this, "herdmanBedBubble", _descriptor19, this);

          _initializerDefineProperty(this, "herdDinning", _descriptor20, this);

          _initializerDefineProperty(this, "bakerHomeBedHead", _descriptor21, this);

          _initializerDefineProperty(this, "bakerBedBubble", _descriptor22, this);

          _initializerDefineProperty(this, "bakerDinning", _descriptor23, this);

          _initializerDefineProperty(this, "grocerHomeBedHead", _descriptor24, this);

          _initializerDefineProperty(this, "grocerBedBubble", _descriptor25, this);

          _initializerDefineProperty(this, "grocerDinning", _descriptor26, this);

          this._curPlayerTile = new Vec2();
          this._npcTileArray = [];
          this.sleepFrameAdd = 0;
          this.homeBedFrameIndex = 0;
          this.info_farmland1 = {
            farmland: "farmland1",
            fieldNode: null
          };
          this.info_farmland2 = {
            farmland: "farmland2",
            fieldNode: null
          };
          this.info_farmland3 = {
            farmland: "farmland3",
            fieldNode: null
          };
          this.info_farmland4 = {
            farmland: "farmland4",
            fieldNode: null
          };
          // farmland4 = [];
          // farmland3 = [];
          // farmland1 = [];
          this.testFrameIndex = 0;
          this.testbakerIndex = 0;
          this._layerFloor = null;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).GetAllNPCRequest();
            json.command = 10002;
            json.type = 1;
            (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
              error: Error()
            }), socket) : socket).sendWebSocketBinary(json);
            (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).townModel.refreshItemDate();
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_GETALL_NPCS, _this.setNPCPos, _this);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_ONLINE_NPCS, _this.initOtherNPCByData, _this);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_OFFLINE_NPCS, _this.removeNPC, _this); //observer.on(EventType.SOCKET_NPC_MOVE, this.updateOtherPlayerInfo, this);

            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_NPC_ACTION, _this.playNPCAction, _this);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_ITEM_STATE_CHANGE, _this.objectStateChange, _this);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_ITEMUPDATE, _this.updateObjectStateChange, _this);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_ITEMUPDATE, _this.updateObjectStateChange, _this);
            _this._layerFloor = _this.node.getComponent(TiledMap).getLayer("building"); // this.farmland4 = [...this.farmFieldWheat.children];
            // this.farmland3 = [...this.farmFieldCorn.children];
            // this.farmland1 = [...this.farmFieldCabbage.children];
            //!herd

            window.herdSleep = () => {
              _this.playNPCAction({
                data: {
                  data: {
                    bid: 10,
                    actionId: 106,
                    npcId: 10004,
                    params: {
                      oid: "breedingBed"
                    }
                  }
                }
              });
            };

            window.herdCook = () => {
              _this.playNPCAction({
                data: {
                  data: {
                    bid: 11,
                    actionId: 104,
                    npcId: 10004,
                    params: {
                      oid: "breedingCook",
                      items: [{
                        itemId: 10101006,
                        count: 1
                      }, {
                        itemId: 10101003,
                        count: 1
                      }, {
                        itemId: 10101005,
                        count: 1
                      }]
                    }
                  }
                }
              });
            };

            window.herdDinning = () => {
              _this.playNPCAction({
                bid: 12,
                actionId: 105,
                npcId: 10004,
                params: {
                  oid: "breedingTable"
                }
              });
            }; //!farmer


            window.farm = /*#__PURE__*/_asyncToGenerator(function* () {
              yield _this.playNPCAction({
                data: {
                  data: {
                    bid: 13,
                    actionId: 100,
                    npcId: 10002,
                    params: {
                      oid: "farmland4",
                      itemId: 10101001
                    }
                  }
                }
              });
            });

            window.farmHarvest = () => {
              _this.playNPCAction({
                data: {
                  data: {
                    bid: 14,
                    actionId: 101,
                    npcId: 10002,
                    params: {
                      oid: "farmland4",
                      items: [{
                        itemId: 10101001,
                        count: 1
                      }]
                    }
                  }
                }
              });
            };

            window.farmGoSleep = () => {
              _this.playNPCAction({
                data: {
                  data: {
                    bid: 15,
                    actionId: 106,
                    npcId: 10002,
                    params: {
                      oid: "farmerBed"
                    }
                  }
                }
              });
            };

            window.farmStopSleep = () => {
              _this.playNPCAction({
                data: {
                  data: {
                    bid: 15,
                    actionId: 111,
                    npcId: 10002,
                    params: {
                      oid: "farmerBed"
                    }
                  }
                }
              });
            };

            window.farmcook = () => {
              _this.playNPCAction({
                bid: 16,
                actionId: 104,
                npcId: 10002,
                params: {
                  oid: "farmerCook",
                  items: [{
                    itemId: 10101006,
                    count: 1
                  }, {
                    itemId: 10101003,
                    count: 1
                  }, {
                    itemId: 10101005,
                    count: 1
                  }]
                }
              });
            };

            window.farmeat = () => {
              _this.playNPCAction({
                bid: 17,
                actionId: 105,
                npcId: 10002,
                params: {
                  oid: "farmerTable"
                }
              });
            };

            window.fieldReady = () => {
              _this.setFieldReady({
                bid: 18,
                actionId: 105,
                npcId: 10002,
                params: {
                  oid: "farmland4"
                }
              });
            }; //!baker


            window.bakerSleep = () => {
              _this.playNPCAction({
                bid: 18,
                actionId: 106,
                npcId: 10005,
                params: {
                  oid: "bakerBed"
                }
              });
            };

            window.bakerCook = () => {
              _this.playNPCAction({
                bid: 19,
                actionId: 104,
                npcId: 10005,
                params: {
                  oid: "bakerCook",
                  items: [{
                    itemId: 10101006,
                    count: 1
                  }, {
                    itemId: 10101003,
                    count: 1
                  }, {
                    itemId: 10101005,
                    count: 1
                  }]
                }
              });
            };

            window.bakerDinning = () => {
              _this.playNPCAction({
                bid: 20,
                actionId: 105,
                npcId: 10005,
                params: {
                  oid: "bakerTable"
                }
              });
            }; //!baker


            window.GrocerSleep = () => {
              _this.playNPCAction({
                bid: 21,
                actionId: 106,
                npcId: 10003,
                params: {
                  oid: "salerBed"
                }
              });
            };

            window.GrocerCook = () => {
              _this.playNPCAction({
                bid: 22,
                actionId: 104,
                npcId: 10003,
                params: {
                  oid: "salerCook",
                  items: [{
                    itemId: 10101006,
                    count: 1
                  }, {
                    itemId: 10101003,
                    count: 1
                  }, {
                    itemId: 10101005,
                    count: 1
                  }]
                }
              });
            };

            window.GrocerDinning = () => {
              _this.playNPCAction({
                bid: 23,
                actionId: 105,
                npcId: 10003,
                params: {
                  oid: "salerTable"
                }
              });
            }; //await this.testFarmRound()
            //await this.testBakerRound()
            //this.tiledLayer.addUserNode(this.playerNode)

          })();
        }

        setNPCPos(NPCs) {
          var _NPCs$data;

          if (!NPCs) {
            return;
          }

          this.initPlayerNPC(NPCs.data.data.myNpc);
          (NPCs == null || (_NPCs$data = NPCs.data) == null || (_NPCs$data = _NPCs$data.data) == null ? void 0 : _NPCs$data.otherNpc) && this.initOtherNPCs(NPCs.data.data.otherNpc);
        }

        checkPlayerId(actionData) {
          return _asyncToGenerator(function* () {
            var _actionData$users;

            var item = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
              error: Error()
            }), _) : _).find(actionData.users, item => {
              return item === (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.playerId;
            });

            if (item || !(actionData != null && (_actionData$users = actionData.users) != null && _actionData$users.length)) {
              return true;
            } else {
              return false;
            }
          })();
        }

        setNpcHomeBed(currentIndex) {
          this.farmHomeBedHead.setPosition(sleepFramePosX[currentIndex], this.farmHomeBedHead.getPosition().y);
          this.herdmanHomeBedHead.setPosition(sleepFramePosX[currentIndex], this.herdmanHomeBedHead.getPosition().y);
          this.bakerHomeBedHead.setPosition(sleepFramePosX[currentIndex], this.bakerHomeBedHead.getPosition().y);
          this.grocerHomeBedHead.setPosition(sleepFramePosX[currentIndex], this.grocerHomeBedHead.getPosition().y);
        }

        getPartInfo(label, id) {
          var _label$find, _label;

          return (_label$find = (_label = (_crd && NPCPartDisplayInfo === void 0 ? (_reportPossibleCrUseOfNPCPartDisplayInfo({
            error: Error()
          }), NPCPartDisplayInfo) : NPCPartDisplayInfo)[label]) == null ? void 0 : _label.find(part => part.id === id)) != null ? _label$find : null;
        } //!npc睡觉相关


        getSleepNode(npcId) {
          switch (npcId) {
            case 10002:
              return {
                head: this.farmHomeBedHead,
                bubble: this.farmHomeBedBubble
              };

            case 10004:
              return {
                head: this.herdmanHomeBedHead,
                bubble: this.herdmanBedBubble
              };

            case 10005:
              return {
                head: this.bakerHomeBedHead,
                bubble: this.bakerBedBubble
              };

            case 10003:
              return {
                head: this.grocerHomeBedHead,
                bubble: this.grocerBedBubble
              }; //按照id分别返回对应的node

              break;

            default:
              return {
                head: this.farmHomeBedHead,
                bubble: this.farmHomeBedBubble
              };
              break;
          }
        }

        stopNpcSleep(npc, actionData, cb) {
          switch (actionData.npcId) {
            case 10002:
              this.farmHomeBedHead.active = false;
              this.farmHomeBedBubble.active = false;
              npc.active = true;
              break;

            case 10004:
              this.herdmanHomeBedHead.active = false;
              this.herdmanBedBubble.active = false;
              npc.active = true;
              break;

            case 10005:
              this.bakerHomeBedHead.active = false;
              this.bakerBedBubble.active = false;
              npc.active = true;
              break;

            case 10003:
              this.grocerHomeBedHead.active = false;
              this.grocerBedBubble.active = false;
              npc.active = true;
              break; //按照id分别返回对应的node

              break;

            default:
              break;
          }
        }

        npcSleep(npc, head, bubble, cb) {
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
            error: Error()
          }), BubbleImgUrl) : BubbleImgUrl).sleep, npc.getChildByName("bubble"), () => {
            npc.getChildByName("bubble").active = true;
          });
          this.scheduleOnce(() => {
            cb();
            head.active = true;
            bubble.active = true;
          }, bubbleTime);
        }

        sendEventOver(actionData, npc) {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).NpcActionDone();
          json.command = 10008;
          json.type = 1;
          json.data.bid = actionData.bid;
          json.data.npcId = actionData.npcId;
          json.data.objId = actionData.params.oid;
          json.data.x = npc.getPosition().x;
          json.data.y = hight - npc.getPosition().y;
          json.data.isFinish = 1;
          json.data.state = 1;
          json.data.params = {
            oid: actionData.params.oid,
            itemId: actionData.params.itemId,
            count: 1
          };
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        } //!npc做饭相关


        npcCook(npc, actionData, cb) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _loop = function* _loop(foodItem) {
              var food = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
                error: Error()
              }), _) : _).find((_crd && ProductsItemUrl === void 0 ? (_reportPossibleCrUseOfProductsItemUrl({
                error: Error()
              }), ProductsItemUrl) : ProductsItemUrl).ItemCfg, item => {
                return item.id === foodItem.itemId;
              });
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg(food.url, npc.getChildByName("bubble"), () => {
                npc.getChildByName("bubble").active = true;
              });
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
                error: Error()
              }), BubbleImgUrl) : BubbleImgUrl).cook, npc.getChildByName("bubble"));
              var shouldSend = yield _this2.checkPlayerId(actionData);

              if (shouldSend) {
                var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                  error: Error()
                }), network) : network).NpcActionDone();
                json.command = 10008;
                json.type = 1;
                json.data.bid = actionData.bid;
                json.data.npcId = actionData.npcId;
                json.data.objId = actionData.params.oid;
                json.data.x = npc.getPosition().x;
                json.data.y = hight - npc.getPosition().y;
                json.data.isFinish = 1;
                json.data.state = 1;
                json.data.params = {
                  oid: actionData.params.oid,
                  itemId: actionData.params.itemId,
                  count: 1
                };
                (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                  error: Error()
                }), socket) : socket).sendWebSocketBinary(json);
                yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                  error: Error()
                }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
              }
            };

            for (var foodItem of actionData.params.items) {
              yield* _loop(foodItem);
            }
          })();
        }

        stopCook(npc, cb) {
          npc.getChildByName("bubble").active = false;
        } //!吃饭相关


        npcDinning(npc, actionData) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
              error: Error()
            }), BubbleImgUrl) : BubbleImgUrl).eating, npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });

            var dinning = _this3.getDinning(actionData.npcId);

            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
              error: Error()
            }), BubbleImgUrl) : BubbleImgUrl).dinning, dinning.dinning, () => {
              dinning.dinning.active = true;
            });
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 4000);
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
              error: Error()
            }), BubbleImgUrl) : BubbleImgUrl).afterDinner, dinning.dinning, () => {
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
                error: Error()
              }), BubbleImgUrl) : BubbleImgUrl).eat, npc.getChildByName("bubble"), () => {});
            });
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
          })();
        }

        getDinning(npcId) {
          switch (npcId) {
            case 10002:
              return {
                dinning: this.farmDinning
              };

            case 10004:
              return {
                dinning: this.herdDinning
              };

            case 10005:
              return {
                dinning: this.bakerDinning
              };

            case 10003:
              return {
                dinning: this.grocerDinning
              }; //按照id分别返回对应的node

              break;

            default:
              return {
                dinning: this.farmDinning
              };
              break;
          }
        }

        stopDinning(npc, cb) {
          npc.getChildByName("bubble").active = false;
        }

        stopActionNormal(npc, actionData, cb) {
          this.stopNpcSleep(npc, actionData, cb);
          npc.getChildByName("bubble").active = false;
        }

        setItemCountChange() {} //!农夫种地


        npcFarming(npc, actionData) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (!_this4[actionData.params.oid]) {
              return;
            }

            var farmItem = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
              error: Error()
            }), _) : _).find((_crd && ProductsItemUrl === void 0 ? (_reportPossibleCrUseOfProductsItemUrl({
              error: Error()
            }), ProductsItemUrl) : ProductsItemUrl).ItemCfg, item => {
              return item.id === actionData.params.itemId;
            });
            var item = instantiate(_this4[farmItem.fieldName]);
            item.setParent(_this4[actionData.params.oid]);
            _this4["info_" + actionData.params.oid].fieldNode = item;
            item.setPosition(new Vec3(0, 0, 0));
            var fieldArr = [...item.children];
            actionData.params.itemId;
            var fieldIndexX = 1;
            var adaptX;
            var adaptY;

            for (var field of fieldArr) {
              if (fieldIndexX % 3 === 0) {
                adaptX = -1;
                adaptY = 0;
              } else {
                adaptX = 0;
                adaptY = fieldIndexX === 4 || fieldIndexX === 5 ? -1 : 1;
              } //?锄头气泡


              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
                error: Error()
              }), BubbleImgUrl) : BubbleImgUrl).farmerHoe, npc.getChildByName("bubble"), () => {
                npc.getChildByName("bubble").active = true;
              });
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000); //?幼苗🌱出现

              field.active = true;
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000); //?浇水气泡

              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
                error: Error()
              }), BubbleImgUrl) : BubbleImgUrl).farmerWater, npc.getChildByName("bubble"));
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);

              var startTile = _this4._getTilePos(new Vec2(npc.getPosition().x, npc.getPosition().y));

              var finishTile = _this4._getTilePos(new Vec2(npc.getPosition().x + adaptX * 32, npc.getPosition().y + adaptY * 32));

              npc.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
                error: Error()
              }), NPCControl) : NPCControl).aStartMove(new Vec2(startTile.x, startTile.y), new Vec2(finishTile.x, finishTile.y), () => {
                npc.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
                  error: Error()
                }), NPCControl) : NPCControl).setNPCMoveDirect(KeyCode.KEY_A);
              });
              fieldIndexX = fieldIndexX + 1;
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            }
          })();
        } //!农夫收


        npcHarvest(npc, actionData) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var farmItem = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
              error: Error()
            }), _) : _).find((_crd && ProductsItemUrl === void 0 ? (_reportPossibleCrUseOfProductsItemUrl({
              error: Error()
            }), ProductsItemUrl) : ProductsItemUrl).ItemCfg, item => {
              return item.id === actionData.params.itemId;
            });
            var item = _this5["info_" + actionData.params.oid].fieldNode;
            var fieldArr = [...item.children];
            var fieldIndexX = 1;
            var adaptX;
            var adaptY;

            for (var field of fieldArr) {
              if (fieldIndexX % 3 === 0) {
                adaptX = -2;
                adaptY = 0;
              } else {
                adaptX = 0;
                adaptY = fieldIndexX === 4 || fieldIndexX === 5 ? -2 : 2;
              } //?锄头气泡


              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
                error: Error()
              }), BubbleImgUrl) : BubbleImgUrl).farmerSickle, npc.getChildByName("bubble"), () => {
                npc.getChildByName("bubble").active = true;
              });
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000); //作物

              field.active = false;
              field.getChildByName("farm_wheat_l").active = false;
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000); //出现作物收获图标

              var food = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
                error: Error()
              }), _) : _).find((_crd && ProductsItemUrl === void 0 ? (_reportPossibleCrUseOfProductsItemUrl({
                error: Error()
              }), ProductsItemUrl) : ProductsItemUrl).ItemCfg, item => {
                return item.id === actionData.params.itemId;
              });
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg(food.url, npc.getChildByName("bubble"));
              npc.getChildByName("count").active = true;
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
              npc.getChildByName("count").active = false;
              npc.getChildByName("bubble").active = false;

              var startTile = _this5._getTilePos(new Vec2(npc.getPosition().x, npc.getPosition().y));

              var finishTile = _this5._getTilePos(new Vec2(npc.getPosition().x + adaptX * 32, npc.getPosition().y + adaptY * 32));

              npc.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
                error: Error()
              }), NPCControl) : NPCControl).aStartMove(new Vec2(startTile.x, startTile.y), new Vec2(finishTile.x, finishTile.y), () => {
                npc.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
                  error: Error()
                }), NPCControl) : NPCControl).setNPCMoveDirect(KeyCode.KEY_A);
              });
              fieldIndexX = fieldIndexX + 1;

              if (fieldIndexX >= 9) {// let json = new network.NpcActionDone();
                // json.command = 10008;
                // json.type = 1;
                // json.data.bid = actionData.bid
                // json.data.npcId = actionData.npcId
                // json.data.objId = actionData.params.oid
                // socket.sendWebSocketBinary(json);
              }

              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            }

            item.removeFromParent();
            _this5["info_" + actionData.params.oid].fieldNode = null;
          })();
        } //!牧民喂养


        butcherFeeding(npc, actionData) {
          return _asyncToGenerator(function* () {
            var img = "action/bubble/farm/wheat";
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg(img, npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            npc.getChildByName("count").getComponent(Label).string = "-" + actionData.params.count;
            npc.getChildByName("count").active = true;
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            npc.getChildByName("count").active = false;
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
              error: Error()
            }), BubbleImgUrl) : BubbleImgUrl).clean, npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            }); //npc.getChildByName('count').active = true

            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000); //npc.getChildByName('count').active = false

            npc.getChildByName("bubble").active = false;
          })();
        }

        butcherSkill(npc, actionData) {
          return _asyncToGenerator(function* () {
            var img = "action/bubble/farm/wheat";
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg((_crd && BubbleImgUrl === void 0 ? (_reportPossibleCrUseOfBubbleImgUrl({
              error: Error()
            }), BubbleImgUrl) : BubbleImgUrl).knife, npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("action/bubble/cook/hock", npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            npc.getChildByName("count").active = true;
            npc.getChildByName("count").getComponent(Label).string = "+" + actionData.params.count;
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            npc.getChildByName("count").active = false;
            npc.getChildByName("bubble").active = false;
          })();
        }

        breadMake(npc, actionData) {
          return _asyncToGenerator(function* () {
            var img = "action/bubble/farm/wheat";
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("action/bubble/farm/wheat", npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            npc.getChildByName("count").getComponent(Label).string = "-" + actionData.params.items[0].count;
            npc.getChildByName("count").active = true;
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            npc.getChildByName("count").active = false;
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("action/bubble/cook/bread", npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            npc.getChildByName("count").getComponent(Label).string = "+" + actionData.params.items[0].count;
            npc.getChildByName("count").active = true;
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            npc.getChildByName("count").active = false;
            npc.getChildByName("bubble").active = false;
          })();
        } //售货员


        sale(npc, actionData) {
          return _asyncToGenerator(function* () {
            var item = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
              error: Error()
            }), _) : _).find((_crd && ProductsItemUrl === void 0 ? (_reportPossibleCrUseOfProductsItemUrl({
              error: Error()
            }), ProductsItemUrl) : ProductsItemUrl).ItemCfg, item => {
              return item.id === actionData.params.itemId;
            });
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg(item.url, npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            npc.getChildByName("count").getComponent(Label).string = "-" + actionData.params.count;
            npc.getChildByName("count").active = true;
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            npc.getChildByName("count").active = false;
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("action/bubble/sale/money", npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            npc.getChildByName("count").getComponent(Label).string = "+" + actionData.params.count * actionData.params.price;
            npc.getChildByName("count").active = true;
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            npc.getChildByName("count").active = false;
            npc.getChildByName("bubble").active = false;
          })();
        }

        buy(npc, actionData) {
          return _asyncToGenerator(function* () {
            var item = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
              error: Error()
            }), _) : _).find((_crd && ProductsItemUrl === void 0 ? (_reportPossibleCrUseOfProductsItemUrl({
              error: Error()
            }), ProductsItemUrl) : ProductsItemUrl).ItemCfg, item => {
              return item.id === actionData.params.itemId;
            });
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("action/bubble/sale/money", npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            npc.getChildByName("count").getComponent(Label).string = "-" + actionData.params.count * actionData.params.price;
            npc.getChildByName("count").active = true;
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            npc.getChildByName("count").active = false;
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg(item.url, npc.getChildByName("bubble"), () => {
              npc.getChildByName("bubble").active = true;
            });
            npc.getChildByName("count").getComponent(Label).string = "+" + actionData.params.count;
            npc.getChildByName("count").active = true;
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
            npc.getChildByName("count").active = false;
            npc.getChildByName("bubble").active = false;
          })();
        }

        speak(npc, actionData) {
          npc.getChildByName("speakContentUp").getChildByName('Label').getComponent(Label).string = actionData.params.content;
          npc.getChildByName("speakContentUp").active = true;
          this.scheduleOnce(() => {
            npc.getChildByName("speakContentUp").active = false;
          }, 4);
        }

        stopFarming(npc, cb) {
          npc.getChildByName("bubble").active = false;
        } //?接收行为数据


        playNPCAction(actions) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            //!先移动到位置
            var actionData = actions.data.data;
            var npc = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
              error: Error()
            }), _) : _).find(_this6.otherNPCarr, item => {
              return item.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
                error: Error()
              }), NPCControl) : NPCControl).NpcID === actionData.npcId;
            });
            var eventPox;
            var finishTile;

            var startTile = _this6._getTilePos(new Vec2(npc.getPosition().x, npc.getPosition().y));

            try {
              if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
                error: Error()
              }), NpcEventType) : NpcEventType).speak) {
                var _this6$_layerFloor, _this6$_layerFloor2, _this6$_layerFloor3, _this6$_layerFloor4;

                var toNpc = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
                  error: Error()
                }), _) : _).find(_this6.otherNPCarr, item => {
                  return item.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
                    error: Error()
                  }), NPCControl) : NPCControl).NpcID === actionData.params.npcId;
                });

                var toPos = _this6._getTilePos(new Vec2(toNpc.getPosition().x, toNpc.getPosition().y));

                var moveToPos;

                if (!((_this6$_layerFloor = _this6._layerFloor) != null && (_this6$_layerFloor = _this6$_layerFloor.getComponent(TiledLayer)) != null && _this6$_layerFloor.getTileGIDAt(toPos.x + 1, toPos.y + 1))) {
                  moveToPos = new Vec2(toPos.x + 1, toPos.y + 1);
                }

                if (!((_this6$_layerFloor2 = _this6._layerFloor) != null && (_this6$_layerFloor2 = _this6$_layerFloor2.getComponent(TiledLayer)) != null && _this6$_layerFloor2.getTileGIDAt(toPos.x - 1, toPos.y - 1))) {
                  moveToPos = new Vec2(toPos.x - 1, toPos.y - 1);
                }

                if (!((_this6$_layerFloor3 = _this6._layerFloor) != null && (_this6$_layerFloor3 = _this6$_layerFloor3.getComponent(TiledLayer)) != null && _this6$_layerFloor3.getTileGIDAt(toPos.x + 1, toPos.y - 1))) {
                  moveToPos = new Vec2(toPos.x + 1, toPos.y - 1);
                }

                if (!((_this6$_layerFloor4 = _this6._layerFloor) != null && (_this6$_layerFloor4 = _this6$_layerFloor4.getComponent(TiledLayer)) != null && _this6$_layerFloor4.getTileGIDAt(toPos.x - 1, toPos.y + 1))) {
                  moveToPos = new Vec2(toPos.x - 1, toPos.y + 1);
                }

                eventPox = toNpc.getPosition();
                finishTile = moveToPos;
              } else {
                eventPox = new Vec2(_this6.tileObject.getObject(actionData.params.oid).x, _this6.tileObject.getObject(actionData.params.oid).y);
                finishTile = _this6._getTilePos(new Vec2(_this6.tileObject.getObject(actionData.params.oid).x, _this6.tileObject.getObject(actionData.params.oid).y));
              }
            } catch (error) {}

            var cb; //!然后出发事件气泡

            if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).sleep) {
              cb = () => {
                var nodes = _this6.getSleepNode(actionData.npcId);

                _this6.setNpcDirect(npc, actionData, "sleepHeadDirect");

                _this6.npcSleep(npc, nodes.head, nodes.bubble, /*#__PURE__*/_asyncToGenerator(function* () {
                  npc.getChildByName("bubble").active = false;
                  npc.active = false;
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  json.data.params = {
                    oid: actionData.params.oid
                  };
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                }));
              };
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).cook) {
              cb = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(function* () {
                  _this6.setNpcDirect(npc, actionData, "cookHeadDirect");

                  yield _this6.npcCook(npc, actionData);
                });

                return function cb() {
                  return _ref3.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).dinning) {
              cb = /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(function* () {
                  _this6.setNpcDirect(npc, actionData, "diningHeadDirect");

                  yield _this6.npcDinning(npc, actionData);
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  json.data.params = {
                    oid: actionData.params.oid,
                    itemId: actionData.params.itemId,
                    count: 1
                  };
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref4.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).farming) {
              cb = /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(function* () {
                  npc.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
                    error: Error()
                  }), NPCControl) : NPCControl).setNPCMoveDirect(KeyCode.KEY_A);
                  yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                    error: Error()
                  }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
                  yield _this6.npcFarming(npc, actionData);
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  json.data.params = {
                    oid: actionData.params.oid,
                    itemId: actionData.params.itemId,
                    count: 9
                  };
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref5.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).harvest) {
              cb = /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator(function* () {
                  npc.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
                    error: Error()
                  }), NPCControl) : NPCControl).setNPCMoveDirect(KeyCode.KEY_A);
                  yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                    error: Error()
                  }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
                  yield _this6.npcHarvest(npc, actionData);
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  json.data.params = {
                    oid: actionData.params.oid
                  };
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref6.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).getup) {
              cb = /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator(function* () {
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  json.data.params = {
                    oid: actionData.params.oid
                  };
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref7.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).move) {
              cb = /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator(function* () {
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.npcId = actionData.npcId;
                  json.data.actionId = 112;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  json.data.bid = actionData.bid;
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref8.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).move) {
              cb = /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator(function* () {
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.npcId = actionData.npcId;
                  json.data.actionId = 112;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  json.data.bid = actionData.bid;
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref9.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).speak) {
              cb = /*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator(function* () {
                  _this6.speak(npc, actionData);

                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref10.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).buy) {
              cb = /*#__PURE__*/function () {
                var _ref11 = _asyncToGenerator(function* () {
                  yield _this6.buy(npc, actionData);
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref11.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).sale) {
              cb = /*#__PURE__*/function () {
                var _ref12 = _asyncToGenerator(function* () {
                  yield _this6.sale(npc, actionData);
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref12.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).slaughter) {
              cb = /*#__PURE__*/function () {
                var _ref13 = _asyncToGenerator(function* () {
                  yield _this6.butcherSkill(npc, actionData);
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref13.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).make) {
              cb = /*#__PURE__*/function () {
                var _ref14 = _asyncToGenerator(function* () {
                  yield _this6.breadMake(npc, actionData);
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref14.apply(this, arguments);
                };
              }();
            } else if (actionData.actionId === (_crd && NpcEventType === void 0 ? (_reportPossibleCrUseOfNpcEventType({
              error: Error()
            }), NpcEventType) : NpcEventType).feeding) {
              cb = /*#__PURE__*/function () {
                var _ref15 = _asyncToGenerator(function* () {
                  yield _this6.butcherFeeding(npc, actionData);
                  var shouldSend = yield _this6.checkPlayerId(actionData);

                  if (!shouldSend) {
                    return;
                  }

                  var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                    error: Error()
                  }), network) : network).NpcActionDone();
                  json.command = 10008;
                  json.type = 1;
                  json.data.bid = actionData.bid;
                  json.data.npcId = actionData.npcId;
                  json.data.objId = actionData.params.oid;
                  json.data.x = eventPox.x;
                  json.data.y = hight - eventPox.y;
                  json.data.isFinish = 1;
                  json.data.state = 1;
                  (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                    error: Error()
                  }), socket) : socket).sendWebSocketBinary(json);
                });

                return function cb() {
                  return _ref15.apply(this, arguments);
                };
              }();
            } // if(startTile.x === finishTile.x && startTile.y === finishTile.y){
            //     return
            // }


            _this6.stopActionNormal(npc, actionData);

            npc.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).aStartMove(new Vec2(startTile.x, startTile.y), new Vec2(finishTile.x, finishTile.y), cb);
          })();
        }

        setFieldReady(actionData) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var farmItem = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
              error: Error()
            }), _) : _).find((_crd && ProductsItemUrl === void 0 ? (_reportPossibleCrUseOfProductsItemUrl({
              error: Error()
            }), ProductsItemUrl) : ProductsItemUrl).ItemCfg, item => {
              return item.id === actionData.params.itemId;
            });
            var item = instantiate(_this7[farmItem.fieldName]);
            item.setParent(_this7[actionData.params.oid]);
            _this7["info_" + actionData.params.oid].fieldNode = item;
            item.setPosition(new Vec3(0, 0, 0));
            var fieldArr = [...item.children];

            if (!fieldArr) {
              return;
            }

            var fieldIndexX = 1;
            var adaptX;
            var adaptY;

            for (var field of fieldArr) {
              field.active = true;
              yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
                error: Error()
              }), PromiseUtils) : PromiseUtils).wait(bubbleTime * 2000);
              field.getChildByName("farm_wheat_l").active = true;
            }
          })();
        }

        setNpcDirect(npc, actionData, directType) {
          var direct = (_crd && EventNpcInfoMap === void 0 ? (_reportPossibleCrUseOfEventNpcInfoMap({
            error: Error()
          }), EventNpcInfoMap) : EventNpcInfoMap)[actionData.npcId][directType];
          npc.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).setNPCMoveDirect(direct);
        } //?完成行为


        finishNPCAction(farmAction) {}

        initPlayerNPC(myNPC) {
          this._curPlayerTile = this._getTilePos(new Vec2(9, 11)); //this.player.parent.getComponent(NPCControl).NpcID = myNPC.id;

          this.player.parent.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl)._curTile = new Vec2(9, 11);

          var pos = this._layerFloor.getPositionAt(this._curPlayerTile);

          this.player.parent.parent.setPosition(300, 1000);

          if (this.player.parent.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).camera) {
            var gameView = view.getVisibleSize();
            var mainCamera = this.player.parent.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).camera.node;
            mainCamera.setPosition(pos.x, pos.y); // if (pos.x < gameView.x) {
            //   mainCamera.setPosition(gameView.x, mainCamera.getPosition().y);
            // } else if (pos.x > hight - gameView.x) {
            //   mainCamera.setPosition(hight - gameView.x, mainCamera.getPosition().y);
            // } else {
            //   mainCamera.setPosition(pos.x, mainCamera.getPosition().y);
            // }
            // if (pos.y < gameView.y) {
            //   mainCamera.setPosition(mainCamera.getPosition().x, gameView.y);
            // } else if (pos.y > hight - gameView.y) {
            //   mainCamera.setPosition(mainCamera.getPosition().x, hight - gameView.y);
            // } else {
            //   mainCamera.setPosition(mainCamera.getPosition().x, pos.y);
            // }
          } //this.player.parent.getComponent(NPCControl).camera.node.setPosition(myNPC.x, myNPC.y)
          // 使用函数获取标签为 'hair'，id 为 100 的对象信息
          //const hairPartInfo = getPartInfo('hair', myNPC.hair);
          // WebUtils.getResouceImg(
          //   this.getPartInfo("hair", myNPC.hair).frame_path,
          //   this.player.getChildByName("hair")
          // );
          // WebUtils.getResouceImg(
          //   this.getPartInfo("shirt", myNPC.top).frame_path,
          //   this.player.getChildByName("shirt")
          // );
          // WebUtils.getResouceImg(
          //   this.getPartInfo("pants", myNPC.bottoms).frame_path,
          //   this.player.getChildByName("pants")
          // );


          this.loading.active = false;
        }

        initOtherNPCs(myNPC) {
          myNPC.forEach(NPC => {
            this.initOtherNPC(NPC);
          });
        }

        initOtherNPC(NPC) {
          var item = instantiate(this.playerInstantiate);
          item.active = true;
          this.playerLayer.addChild(item); //this.tiledLayer.addUserNode(item)

          item.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).NpcID = NPC.id;
          this.otherNPCarr.push(item);
          var npcTile = new Vec2();
          var isValueIncluded = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
            error: Error()
          }), _) : _).includes([10002, 10003, 10004, 10005], NPC.id);

          if (isValueIncluded) {
            npcTile = this._getTilePos(new Vec2(NPC.x * PosAdapt, hight - NPC.y * PosAdapt));
          }

          var pos = this._layerFloor.getPositionAt(npcTile);

          this._npcTileArray.push(npcTile);

          item.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl)._curTile = npcTile;
          item.setPosition(pos.x, pos.y);

          if (NPC.id === 10002) {
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.curViewNpcX = pos.x;
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.curViewNpcY = pos.y;
          }

          item.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).npcIndex = (_crd && NpcIndex === void 0 ? (_reportPossibleCrUseOfNpcIndex({
            error: Error()
          }), NpcIndex) : NpcIndex)[NPC.id];
          this.scheduleOnce(() => {
            var _this$getPartInfo;

            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg((_this$getPartInfo = this.getPartInfo("body", NPC.model)) == null ? void 0 : _this$getPartInfo.frame_path, item.getChildByName("NPCinstantiate").getChildByName("npc_root").getChildByName("body"));
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("", item.getChildByName("NPCinstantiate").getChildByName("npc_root").getChildByName("hair"));
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("", item.getChildByName("NPCinstantiate").getChildByName("npc_root").getChildByName("shirt"));
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("", item.getChildByName("NPCinstantiate").getChildByName("npc_root").getChildByName("pants"));

            if (NPC.model <= 10001) {
              var _this$getPartInfo2, _this$getPartInfo3, _this$getPartInfo4, _this$getPartInfo5, _this$getPartInfo6, _this$getPartInfo7;

              ((_this$getPartInfo2 = this.getPartInfo("hair", NPC.hair)) == null ? void 0 : _this$getPartInfo2.frame_path) && (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg((_this$getPartInfo3 = this.getPartInfo("hair", NPC.hair)) == null ? void 0 : _this$getPartInfo3.frame_path, item.getChildByName("NPCinstantiate").getChildByName("npc_root").getChildByName("hair"));
              ((_this$getPartInfo4 = this.getPartInfo("shirt", NPC.top)) == null ? void 0 : _this$getPartInfo4.frame_path) && (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg((_this$getPartInfo5 = this.getPartInfo("shirt", NPC.top)) == null ? void 0 : _this$getPartInfo5.frame_path, item.getChildByName("NPCinstantiate").getChildByName("npc_root").getChildByName("shirt"));
              ((_this$getPartInfo6 = this.getPartInfo("pants", NPC.bottoms)) == null ? void 0 : _this$getPartInfo6.frame_path) && (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg((_this$getPartInfo7 = this.getPartInfo("pants", NPC.bottoms)) == null ? void 0 : _this$getPartInfo7.frame_path, item.getChildByName("NPCinstantiate").getChildByName("npc_root").getChildByName("pants"));
            }
          }, 0);
        }

        initOtherNPCByData(data) {
          this.initOtherNPC(data.data.myNpc);
        }

        removeNPC(data) {
          var offLineNPC = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
            error: Error()
          }), _) : _).find(this.otherNPCarr, item => {
            var _item$getComponent, _data$data;

            return (item == null || (_item$getComponent = item.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl)) == null ? void 0 : _item$getComponent.NpcID) === (data == null || (_data$data = data.data) == null ? void 0 : _data$data.npcIds[0]);
          });
          offLineNPC == null || offLineNPC.removeFromParent();
          this.otherNPCarr = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
            error: Error()
          }), _) : _).remove(this.otherNPCarr, item => {
            var _item$getComponent2, _data$data2;

            return (item == null || (_item$getComponent2 = item.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl)) == null ? void 0 : _item$getComponent2.NpcID) !== (data == null || (_data$data2 = data.data) == null ? void 0 : _data$data2.npcIds[0]);
          });
        }

        updateOtherPlayerInfo(data) {
          if (this.player.parent.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).NpcID === data.data.npcId) {
            return;
          }

          var moveNPC = (_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
            error: Error()
          }), _) : _).find(this.otherNPCarr, item => item.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).NpcID === data.data.npcId);
          var steepKey;

          if (data.data.x > moveNPC.getPosition().x) {
            steepKey = KeyCode.KEY_D;
          }

          if (data.data.x < moveNPC.getPosition().x) {
            steepKey = KeyCode.KEY_A;
          }

          if (data.data.y < moveNPC.getPosition().y) {
            steepKey = KeyCode.KEY_S;
          }

          if (data.data.y > moveNPC.getPosition().y) {
            steepKey = KeyCode.KEY_W;
          }

          moveNPC.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).setNPCMoveDirect(steepKey);
          moveNPC.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).setMoveSprite(steepKey);
          moveNPC.getChildByName("NPCinstantiate").getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
            error: Error()
          }), NPCControl) : NPCControl).setNPCPosition(steepKey);
          tween(moveNPC).to(0.05, {
            position: new Vec3(data.data.x, data.data.y, 0)
          }, {
            onComplete: () => {//this.ClientPlayerMoveCallBack(tilePos, pid);
              // let json = new network.NpcActionDone();
              // json.command = 10008;
              // json.type = 1;
              // json.data.actionId = 112
              // json.data.npcId = data.data.npcId
              // json.data.x = moveNPC.getPosition().x
              // json.data.y = hight - moveNPC.getPosition().y
              // json.data.isFinish = 1
              // json.data.state = 1
              // socket.sendWebSocketBinary(json);
            }
          }).start();
        }

        _getTilePos(posInPixel) {
          var mapSize = this.node.getComponent(UITransform).contentSize;
          var tileSize = this.getComponent(TiledMap).getTileSize();
          var x = Math.floor(posInPixel.x / tileSize.width);
          var y = Math.floor((mapSize.height - posInPixel.y) / tileSize.height);
          return new Vec2(x, y - 1);
        }

        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_GETALL_NPCS, this.setNPCPos, this); // observer.off(EventType.SOCKET_ONLINE_NPCS, this.initOtherNPC, this)
          // observer.off(EventType.SOCKET_OFFLINE_NPCS, this.removeNPC, this)
        }

        testFarmRound() {// await PromiseUtils.wait(bubbleTime * 1000);
          // window.farmcook()
          // await PromiseUtils.wait(bubbleTime * 20000);
          // window.farmeat()
          // await PromiseUtils.wait(bubbleTime * 10000);
          // window.farm()
          // await PromiseUtils.wait(bubbleTime * 80000);
          // window.farmGoSleep()
          // await PromiseUtils.wait(bubbleTime * 80000);
          // window.fieldReady()
          // await PromiseUtils.wait(bubbleTime * 10000);
          // window.farmHarvest()
          // await PromiseUtils.wait(bubbleTime * 80000);
          // this.testFrameIndex = 0

          return _asyncToGenerator(function* () {})();
        }

        testBakerRound() {// await PromiseUtils.wait(bubbleTime * 1000);
          // window.bakerCook()
          // await PromiseUtils.wait(bubbleTime * 60000);
          // window.bakerDinning()
          // await PromiseUtils.wait(bubbleTime * 10000);
          // window.bakerSleep()
          // await PromiseUtils.wait(bubbleTime * 40000);
          // this.testbakerIndex = 0

          return _asyncToGenerator(function* () {})();
        }

        updateObjectStateChange(data) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            (data == null ? void 0 : data.data) && data.data.forEach( /*#__PURE__*/_asyncToGenerator(function* (object) {
              if (object.objId === "farmland1" || object.objId === "farmland2" || object.objId === "farmland3" || object.objId === "farmland4") {
                if (object.state === "2") {
                  yield _this8.setFieldReady({
                    params: {
                      oid: object.objId,
                      itemId: object.params.itemId
                    }
                  });
                }
              }
            }));
          })();
        }

        objectStateChange(data) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            if (data.data.oid === "farmland1" || data.data.oid === "farmland3" || data.data.oid === "farmland4") {
              if (data.data.state === "2") {
                yield _this9.setFieldReady({
                  params: {
                    oid: data.oid,
                    itemId: data.params.itemId
                  }
                });
              }
            }
          })();
        }

        update(deltaTime) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            _this10.sleepFrameAdd = _this10.sleepFrameAdd + deltaTime;

            if (_this10.sleepFrameAdd > sleepFrameTime) {
              _this10.setNpcHomeBed(_this10.homeBedFrameIndex);

              _this10.homeBedFrameIndex = ++_this10.homeBedFrameIndex > 1 ? 0 : 1;
              _this10.sleepFrameAdd = 0;
            }

            if (_this10.testbakerIndex === 0) {
              _this10.testbakerIndex = _this10.testbakerIndex + deltaTime;

              _this10.testBakerRound();
            }

            if (_this10.testFrameIndex === 0) {
              _this10.testFrameIndex = _this10.testFrameIndex + deltaTime;
              yield _this10.testFarmRound();
            }
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "otherNPCarr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerInstantiate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playerNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tileObject", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "farmHomeBedHead", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "farmHomeBedBubble", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "farmDinning", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "fieldWheat", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "fieldCorn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "fieldCabbage", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "farmland1", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "farmland2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "farmland3", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "farmland4", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "herdmanHomeBedHead", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "herdmanBedBubble", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "herdDinning", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "bakerHomeBedHead", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "bakerBedBubble", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bakerDinning", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "grocerHomeBedHead", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "grocerBedBubble", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "grocerDinning", [_dec27], {
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
//# sourceMappingURL=44d063d70d5e30d264d0420c6781b6db67f1b35b.js.map