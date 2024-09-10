System.register(["__unresolved_0", "cc", "lodash-es", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _, EventType, BaseModel, showMsg2, mduManger, modelMgr, observer, socket, GlobalConfig, RedManager, network, StaticConfigModel, ModuleID, director, WorkCatModel, GuideIndex, Log, MainModel, _crd, TAG;

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseModel(extras) {
    _reporterNs.report("BaseModel", "../../core/base/BaseModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmduManger(extras) {
    _reporterNs.report("mduManger", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatServerD(extras) {
    _reporterNs.report("catServerD", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfitemServerD(extras) {
    _reporterNs.report("itemServerD", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOftaskcell(extras) {
    _reporterNs.report("taskcell", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedManager(extras) {
    _reporterNs.report("RedManager", "../../manager/RedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStaticConfigModel(extras) {
    _reporterNs.report("StaticConfigModel", "../StaticConfig/StaticConfigModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlantData(extras) {
    _reporterNs.report("PlantData", "./PlantData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleID(extras) {
    _reporterNs.report("ModuleID", "../../game/config/ModuleID", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorkCatModel(extras) {
    _reporterNs.report("WorkCatModel", "../WorkCatModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideIndex(extras) {
    _reporterNs.report("GuideIndex", "../StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../../assets/src/utils/LogUtils", _context.meta, extras);
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
    }, function (_lodashEs) {
      _ = _lodashEs;
    }, function (_unresolved_2) {
      EventType = _unresolved_2.EventType;
    }, function (_unresolved_3) {
      BaseModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      showMsg2 = _unresolved_4.showMsg2;
    }, function (_unresolved_5) {
      mduManger = _unresolved_5.mduManger;
      modelMgr = _unresolved_5.modelMgr;
      observer = _unresolved_5.observer;
      socket = _unresolved_5.socket;
    }, function (_unresolved_6) {
      GlobalConfig = _unresolved_6.GlobalConfig;
    }, function (_unresolved_7) {
      RedManager = _unresolved_7.default;
    }, function (_unresolved_8) {
      network = _unresolved_8.network;
    }, function (_unresolved_9) {
      StaticConfigModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      ModuleID = _unresolved_10.ModuleID;
    }, function (_unresolved_11) {
      WorkCatModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      GuideIndex = _unresolved_12.GuideIndex;
    }, function (_unresolved_13) {
      Log = _unresolved_13.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3378e+7fBNwIVPn5+OoE21", "MainModel", undefined);

      __checkObsolete__(['director']);

      TAG = 'MainModel';

      _export("default", MainModel = class MainModel extends (_crd && BaseModel === void 0 ? (_reportPossibleCrUseOfBaseModel({
        error: Error()
      }), BaseModel) : BaseModel) {
        constructor() {
          super();
          this.plantDataArr = [];
          this.playAniComplete = true;
          this.taskmaodan = void 0;
          this.chatIsediting = false;
          this.hasToySpine = false;
          this.firstIn = false;

          /**
           * tab 当前页提示
           */
          this.currentTapIndex = {
            "mainbottom": 2,
            "gedantab": 0,
            "jishi": 0,
            "jishi_goumai": 0,
            "jishi_chushou": 0,
            "renwuab": 0,
            "pre_renwutab": 0,
            "pre_tujiantab": 0,
            "pre_tujianrwdtab": 0,
            "qingdantab": 0,
            "tujianrdtab": 0,
            "pre_Tujianrand": 0,
            "pre_emailtab": 0,
            "pre_dongtaitab": 0,
            "tujian_pets": 0,
            "shop": 0
          };
          this.goumaitishi = void 0;

          /**
           * frameId:头像框
           * uid:用户uid,
           * done:登录奖励是否领取
           * level:等级
           * redVipLevel: 会员等级
           * done: 是否已领取登录奖励
           * gold: 云贝数量
           * avatarUrl 用户头像 
           * redVipExpire:用户会员到期时间
           */
          this.userinfo = {
            frameId: "dff",
            uid: 121,
            done: false,
            level: 11,
            redVipLevel: 1,
            gold: 10,
            avatarUrl: "",
            redVipExpire: 11
          };
          this._catsSeverData = void 0;
          this.playerItems = void 0;
          this.tasklist = void 0;
          this.qiandaoResp = void 0;
        }

        init() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ONMESSAGE, this.onMessage, this);
        }
        /**
         * 获取cats server data
         * @param id 
         * @returns 
         */


        getServerCatsData(id) {
          var _this$_catsSeverData;

          if ((_this$_catsSeverData = this._catsSeverData) != null && _this$_catsSeverData.data) {
            var da = this._catsSeverData.data;

            for (var index = 0; index < da.length; index++) {
              var element = da[index];

              if (element.id == id) {
                return element;
              }
            }
          }

          return null;
        }
        /**
         * 添加新猫咪
         */


        chgServerCatsData(cat) {
          var _this$_catsSeverData2;

          if ((_this$_catsSeverData2 = this._catsSeverData) != null && _this$_catsSeverData2.data) {
            var curCats = this.getServerCatsData(cat.id);

            if (curCats) {
              for (var key in curCats) {
                if (Object.prototype.hasOwnProperty.call(curCats, key)) {
                  curCats[key] = cat[key];
                }
              }
            } else {
              var _this$_catsSeverData3;

              (_this$_catsSeverData3 = this._catsSeverData) == null ? void 0 : _this$_catsSeverData3.data.push(cat);
            }
          }
        }

        /**
         * 根据道具id获取道具数量
         * @param id 
         * @returns 
         */
        getserItemCountById(id) {
          var _this$playerItems;

          var da = (_this$playerItems = this.playerItems) == null ? void 0 : _this$playerItems.data;

          if (da && da.length > 0) {
            for (var index = 0; index < da.length; index++) {
              var element = da[index];

              if (element.goodsId == id) {
                return element.count;
              }
            }
          } else {
            return 0;
          }

          return 0;
        }
        /**
            * 根据道具id获取道具
            * @param id 
            * @returns 
            */


        getserItemById(id) {
          var _this$playerItems2;

          var da = (_this$playerItems2 = this.playerItems) == null ? void 0 : _this$playerItems2.data;

          if (da && da.length > 0) {
            for (var index = 0; index < da.length; index++) {
              var element = da[index];

              if (element.goodsId == id) {
                return element;
              }
            }
          } else {
            return null;
          }

          return null;
        }

        updateTasklist(da) {
          var _this$tasklist;

          if (this != null && (_this$tasklist = this.tasklist) != null && _this$tasklist.data) {
            for (var index = 0; index < (this == null || (_this$tasklist2 = this.tasklist) == null ? void 0 : _this$tasklist2.data.length); index++) {
              var _this$tasklist2, _this$tasklist3;

              var element = this == null || (_this$tasklist3 = this.tasklist) == null ? void 0 : _this$tasklist3.data[index];

              if (element.taskId == da.taskId) {
                element.status = da.status;
              }
            }

            (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
              error: Error()
            }), RedManager) : RedManager).instance.setkeyState("renwutabred", this.tasklist);
          }
        }

        getTaskserById(taskid) {
          var _this$tasklist4;

          if (this != null && (_this$tasklist4 = this.tasklist) != null && _this$tasklist4.data) {
            for (var index = 0; index < (this == null || (_this$tasklist5 = this.tasklist) == null ? void 0 : _this$tasklist5.data.length); index++) {
              var _this$tasklist5, _this$tasklist6;

              var element = this == null || (_this$tasklist6 = this.tasklist) == null ? void 0 : _this$tasklist6.data[index];

              if (element.taskId == taskid) {
                return element;
              }
            }
          }

          return null;
        } //======================================


        checkcatReq() {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).CheckCatsRequest();
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        changecatInfoReq(catId, name, userName, career) {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).changeCatInfoRequest();
          json.data.catId = catId;
          json.data.name = name;
          json.data.userName = userName;
          json.data.career = career;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        changecatReq(catid) {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).ChangeCatsRequest();
          json.data.catId = catid;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        checkplayerItems() {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).checkPlayerItemsRequest();
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        chatReq(catid, str) {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).chatRequest();
          json.data.catId = catid;
          json.data.context = str;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        chatlistReq(catid, pageNum) {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).chatListRequest();
          json.data.catId = catid;
          json.data.pageNum = pageNum;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        tasklistReq() {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).taskListRequest();
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        taskgetReq(taskid) {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).taskgetRequest();
          json.data.taskId = taskid;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        shareReq() {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).shareRequest();
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        qiandaoReq() {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).qiandaoRequest();
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        yindaoReq(guideid) {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).yindaoRequest();
          json.data.guide = guideid;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        zhaohuReq() {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).zhaohuRequest();
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
        }

        getShopList() {
          var shopListParameter = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).shopListRequest();
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(shopListParameter);
        }

        playWithCat(catId, goodsId, count) {
          var playWithCat = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).PlayWithCatRequest();
          playWithCat.data.catId = catId;
          playWithCat.data.count = count;
          playWithCat.data.goodsId = goodsId;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(playWithCat);
        }

        touchCat() {
          var touchWithCat = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).TouchCatRequest();
          touchWithCat.data.catId = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId();
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(touchWithCat);
        }

        onMessage(da) {
          var repData = da.data;

          if (repData.command == 99998) {
            (_crd && mduManger === void 0 ? (_reportPossibleCrUseOfmduManger({
              error: Error()
            }), mduManger) : mduManger).closeModu((_crd && ModuleID === void 0 ? (_reportPossibleCrUseOfModuleID({
              error: Error()
            }), ModuleID) : ModuleID).MAIN);
            var load = director.loadScene("index", (error, scene) => {
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log(TAG, error, scene);
            });

            if (load) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.getStrById(99998));
            }

            return;
          }

          if (repData.command == 10005) {
            //查询猫咪信息
            this._catsSeverData = da.data;
            (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
              error: Error()
            }), WorkCatModel) : WorkCatModel).catsInfo = da.data.data;
            var guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;

            if (da.data.data.length >= 2 && !(guideInfo != null && guideInfo.find != null && guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
              error: Error()
            }), GuideIndex) : GuideIndex).START_GUIDE_STATE4.end))) {
              //触发第四阶段引导
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).UPDATE_GUIDE_INFO_MAIN_VIEW, (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
                error: Error()
              }), GuideIndex) : GuideIndex).START_GUIDE_STATE4);
            }

            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_GETALL_CATS);
          } else if (repData.command == 10006) {
            //修改猫咪信息
            var catinfo = this.getServerCatsData(da.data.data.cat.id);

            for (var key in catinfo) {
              if (Object.prototype.hasOwnProperty.call(catinfo, key)) {
                var _da$data$data$cat;

                catinfo[key] = da.data.data.cat[key];
                catinfo.career = (_da$data$data$cat = da.data.data.cat) == null ? void 0 : _da$data$data$cat.career;
              }
            }

            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_CHANGE_CATSDATA);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_CHANGEINFO_CATS);
          } else if (repData.command == 10004) {
            //猫咪信息推送
            var cati = da.data.data[0]; // let curCats = this.getServerCatsData(cati.id);
            // if (curCats) {
            //     for (const key in curCats) {
            //         if (Object.prototype.hasOwnProperty.call(curCats, key)) {
            //             curCats[key] = cati[key];
            //         }
            //     }
            //     // curCats = {...cati};//会返回一个新的对象；
            // }

            this.chgServerCatsData(cati);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_CHANGEINFO_CATS, cati);
          } else if (repData.command == 10007) {
            //猫咪选角
            // GlobalConfig.instance.curSelCat = da.data;
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.setCurCatId(da.data.data.cat.id);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_SELECT_CATS);
          } else if (repData.command == 10008) {
            //选择道具,查询玩家信息；
            this.playerItems = da.data;
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_CHECK_PLAYERITEMS, da.data.data);
          } else if (repData.command == 10019) {
            //切换猫咪
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.setCurCatId(Number(da.data.data.catId));
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_CHANGE_CATS);
          } else if (repData.command == 10016) {
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.chatNum = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.chatNum + 1;
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_CHAT, da.data);
            var _guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;

            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.chatNum >= 1 && !(_guideInfo != null && _guideInfo.find != null && _guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
              error: Error()
            }), GuideIndex) : GuideIndex).START_GUIDE_STATE2.end - 1))) {
              //触发第二、三阶段引导
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).UPDATE_GUIDE_INFO_MAIN_VIEW, (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
                error: Error()
              }), GuideIndex) : GuideIndex).START_GUIDE_STATE2);
            }

            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.chatNum >= 3 && !(_guideInfo != null && _guideInfo.find != null && _guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
              error: Error()
            }), GuideIndex) : GuideIndex).START_GUIDE_STATE5.end))) {
              //触发第五阶段引导
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).UPDATE_GUIDE_INFO_MAIN_VIEW, (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
                error: Error()
              }), GuideIndex) : GuideIndex).START_GUIDE_STATE5);
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).SHOW_CHAT_LOG_BUTTON);
            }

            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.chatNum >= 20 && !(_guideInfo != null && _guideInfo.find != null && _guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
              error: Error()
            }), GuideIndex) : GuideIndex).START_GUIDE_STATE6.end))) {
              //触发第六阶段引导
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).UPDATE_GUIDE_INFO_MAIN_VIEW, (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
                error: Error()
              }), GuideIndex) : GuideIndex).START_GUIDE_STATE6);
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).SHOW_WORK_BUTTON);
            } //modelMgr.mainModel.chatlistReq(GlobalConfig.instance.getCurCatId(), 1);

          } else if (repData.command == 10017) {
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_CHATLIST, da.data); //GlobalConfig.instance.currentChatTimes = da.data.data.chats.filter(obj => obj.to === GlobalConfig.instance.getCurCatId()).length
          } else if (repData.command == 10012) {
            this.tasklist = da.data;
            (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
              error: Error()
            }), RedManager) : RedManager).instance.setkeyState("renwutabred", this.tasklist);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_TASKLIST, da.data);
          } else if (repData.command == 10010) {
            //任务状态改变
            var lasttask = _.clone(this.getTaskserById(da.data.data[0].taskId));

            this.updateTasklist(da.data.data[0]);
            var obserdata = {
              last: lasttask,
              cur: da.data.data[0]
            };
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_TASK_CHANGE, obserdata);
          } else if (repData.command == 10013) {
            //任务领取
            var task = this.getTaskserById(da.data.data.taskIdList[0]);
            task.status = 3; // this.updateTasklist();

            (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
              error: Error()
            }), RedManager) : RedManager).instance.setkeyState("renwutabred", this.tasklist);
            var taskconf = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getConfigById((_crd && StaticConfigModel === void 0 ? (_reportPossibleCrUseOfStaticConfigModel({
              error: Error()
            }), StaticConfigModel) : StaticConfigModel).TaskCfg, task.taskId);
            var dropconfig = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getConfigById((_crd && StaticConfigModel === void 0 ? (_reportPossibleCrUseOfStaticConfigModel({
              error: Error()
            }), StaticConfigModel) : StaticConfigModel).DropsCfg, taskconf.taskReward);

            if (task.taskId == 10003 || task.taskId == 10005 || task.taskId == 30001) {
              var catids = da.data.data.catIds;

              if (catids && catids[0]) {
                this.taskmaodan = catids[0];
                (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                  error: Error()
                }), observer) : observer).post("showcategg", catids[0]);
              } else {
                //猫蛋转金币是10个金币；
                (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                  error: Error()
                }), showMsg2) : showMsg2)("Congratulations on receiving 10 Cat Coins.");
              }
            } else {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)(dropconfig.showmsg);
            } // if (da.data.goodsDataList && da.data.goodsDataList.length) {
            //     for (let index = 0; index < da.data.goodsDataList.length; index++) {
            //         const element: itemServerD = da.data.goodsDataList[index];
            //         let goods = this.getserItemById(element.goodsId);
            //         if (goods) {
            //             goods = { ...element };
            //         }
            //     }
            // }
            //猫蛋特殊处理


            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_TASK_GET, da.data);
          } else if (repData.command == 10015) {
            //分享
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_SHARE, da.data);
          } else if (repData.command == 10014) {
            //签到
            this.qiandaoResp = da.data;
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_QIANDAO, da.data);
          } else if (repData.command == 10009) {
            //道具更新
            if (da.data.data && da.data.data.length) {
              for (var index = 0; index < da.data.data.length; index++) {
                //goodsId":10101000,"count":70
                var element = da.data.data[index];
                var goods = this.getserItemById(element.goodsId);

                if (goods) {
                  goods.count = element.count;
                }
              }
            }

            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_ITEMUPDATE, da.data);
          } else if (repData.command == 10022) {
            //打招呼
            // const guideInfo = GlobalConfig.instance.LoginData.data.player.guide
            // if(GlobalConfig.instance.LoginData.data.player.chatNum >= 3 && !guideInfo?.find?.(element => element === GuideIndex.START_GUIDE_STATE5.end)){
            //     //触发第五阶段引导
            //     observer.post(EventType.UPDATE_GUIDE_INFO_MAIN_VIEW, GuideIndex.START_GUIDE_STATE5)
            //     observer.post(EventType.SHOW_CHAT_LOG_BUTTON)
            // }
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_ZHAOHU, da.data);
          } else if (repData.command == 10024) {
            //商店列表
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_SHOP_ITEM_LIST, da.data);
          } else if (repData.command == 10025) {
            //商店列表
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SEND_BUY_SHOP_ITEM_SUCCESS_INFO, da.data);
            this.checkplayerItems();
          } else if (repData.command == 10027) {
            //使用逗猫玩具
            //observer.post(EventType.SEND_BUY_SHOP_ITEM_SUCCESS_INFO, da.data)
            //this.checkplayerItems()
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, da.data);
          } else if (repData.command == 10026) {
            //抚摸猫
            //observer.post(EventType.SEND_BUY_SHOP_ITEM_SUCCESS_INFO, da.data)
            //this.checkplayerItems()
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, 'play with cat', da.data);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UPDATE_CAT_CV, da.data);
          } else if (repData.command == 10028) {
            //创建打工活动
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, 'create work active', da.data);

            if (da.data.code !== 0) {
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).WORK_DEFAULT);
            } //WorkCatModel.currentWorkId = da?.data?.data?.workId

          } else if (repData.command == 10029) {
            //领取打工奖励
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, 'work reward', da.data);
          } else if (repData.command == 10030) {
            //打工数据推送
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, 'work result', da.data);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).WORK_STATE_INFO, da.data);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a477f73c05cb33cbd9bfec7b8ab4cfbca620bb8.js.map