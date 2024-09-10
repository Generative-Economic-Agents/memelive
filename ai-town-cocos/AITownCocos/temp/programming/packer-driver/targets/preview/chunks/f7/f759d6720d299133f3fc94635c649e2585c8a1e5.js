System.register(["__unresolved_0", "cc", "lodash-es", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, assetManager, JsonAsset, error, log, _, BaseModel, GlobalConfig, Log, StaticConfigModel, _crd, TAG;

  function _reportPossibleCrUseOfBaseModel(extras) {
    _reporterNs.report("BaseModel", "../../core/base/BaseModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemCData(extras) {
    _reporterNs.report("ItemCData", "./ItemCData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatCfgD(extras) {
    _reporterNs.report("catCfgD", "../../game/config/DataStruct", _context.meta, extras);
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
      resources = _cc.resources;
      assetManager = _cc.assetManager;
      JsonAsset = _cc.JsonAsset;
      error = _cc.error;
      log = _cc.log;
    }, function (_lodashEs) {
      _ = _lodashEs;
    }, function (_unresolved_2) {
      BaseModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      GlobalConfig = _unresolved_3.GlobalConfig;
    }, function (_unresolved_4) {
      Log = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33c9bW68TxBHbtt1kicxqua", "StaticConfigModel", undefined);

      __checkObsolete__(['resources', 'assetManager', 'JsonAsset', 'error', 'log']);

      TAG = 'StaticConfigModel';

      _export("default", StaticConfigModel = class StaticConfigModel extends (_crd && BaseModel === void 0 ? (_reportPossibleCrUseOfBaseModel({
        error: Error()
      }), BaseModel) : BaseModel) {
        constructor() {
          super(...arguments);
          // private _commonconfig = "http://192.168.95.67:8000/config.json";
          // private _commonconfig = "https://web-static.baochuangames.com/nos/image/plantflowergames/config.json";
          this._commonconfig = "https://d1.music.126.net/dmusic/obj/w5zCg8OAw6HDjzjDgMK_/24055495632/2cdc/6e09/89e9/e9f5817449174b3672862dc3bd1dfb7d.json?download=config.json";
          this._commonConfigArr = {
            Cat: [],
            TaskCfg: [],
            DropsCfg: [],
            ItemCfg: [],
            SysParameter: [],
            ConstCfg: []
          };

          /**
           * id:key
           */
          this._commonConfigJson = {
            Cat: Object,
            TaskCfg: Object,
            DropsCfg: Object,
            ItemCfg: Object,
            SysParameter: Object,
            ConstCfg: Object
          };
        }

        get commonConfigJson() {
          return this._commonConfigArr;
        }

        getCatDataById(catid) {
          var arr = this.commonConfigJson.Cat;

          for (var index = 0; index < arr.length; index++) {
            var element = arr[index];

            if (element.id == catid) {
              return element;
            }
          }

          return null;
        }

        getDropConfigById(dropid) {
          var arr = this.commonConfigJson.DropsCfg;

          for (var index = 0; index < arr.length; index++) {
            var element = arr[index];

            if (element.id == dropid) {
              return element;
            }
          }

          return null;
        }

        getConfigById(configname, id) {
          var arr = this.commonConfigJson[configname];

          for (var index = 0; index < arr.length; index++) {
            var element = arr[index];

            if (element.id == id) {
              return element;
            }
          }

          return null;
        }
        /**
         * 远程加载
         * @param name 
         * @param callback 
         */


        loadconfig(name, callback) {
          if (name === void 0) {
            name = null;
          }

          if (!name) {
            name = this._commonconfig;
          }

          assetManager.loadRemote(name, (err, res) => {
            if (err) {
              error(err.message || err);
              return;
            } // 获取到 Json 数据


            this._commonConfigArr = res.json;

            if (callback) {
              callback();
            }
          }); // resources.load('gameGiftJson', (err: any, res: JsonAsset) => {
          //     if (err) {
          //         error(err.message || err);
          //         return;
          //     }
          //     // 获取到 Json 数据
          //     const jsonData: object = res.json!;
          // })
        }
        /**
         *  用于管理所有在 assets/resources 下的资源。
         * @param name 
         * @param callback 
         */


        loadconfiglocal(name, callback) {
          if (name === void 0) {
            name = null;
          }

          if (!name) {
            name = this._commonconfig;
          }

          resources.load(name, (err, res) => {
            if (err) {
              error(err.message || err);
              return;
            } // 获取到 Json 数据


            this._commonConfigArr = res.json;

            if (callback) {
              callback();
            }
          }); // resources.load('gameGiftJson', (err: any, res: JsonAsset) => {
          //     if (err) {
          //         error(err.message || err);
          //         return;
          //     }
          //     // 获取到 Json 数据
          //     const jsonData: object = res.json!;
          // })
        }
        /**
         * 加载指定目录里的json配置
         */


        loadResDir() {
          resources.loadDir('jsons', JsonAsset, (err, assets) => {
            if (err) {
              error(err.message || err);
              return;
            }

            for (var i = 0; i < assets.length; ++i) {
              var asset = assets[i];
              this._commonConfigArr[asset.name] = asset.json;
              this._commonConfigJson[asset.name] = _.keyBy(asset.json, "id");
              log(asset.name + ' loaded', asset); // 处理加载的 JSON 文件
            }

            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.hasJsonsLoad = true;
          });
        }

        getItemByid(id) {
          var item = this._commonConfigArr.items[id + ""];

          if (!item) {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log("没有找到道具itemid:" + id);
          }

          return item;
        }
        /**
         * 
         * @param obj 
         * @returns 
         */


        objtoArr(obj) {
          var arr = _.values(obj);

          return arr;
        }
        /**
         * 获取系列
         * @param id 
         * @returns 
         */


        getseriesConfigById(id) {
          var item = this._commonConfigArr.series[id + ""];

          if (!item) {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log("没有找到系列:" + id);
            item = {};
          }

          return item;
        }

        getGrpsByName(name) {
          var grps = this._commonConfigArr[name];

          if (!grps) {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log("没有找到组:" + name);
            grps = [];
          }

          return grps;
        }
        /**
         * 
         * @param name 
         * @param id 
         * @returns 
         */


        getconfigByGrpAId(name, id) {
          //id==key
          var grps = this._commonConfigJson[name];

          if (!grps) {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log("没有找到组", name);
            return;
          }

          var item = this._commonConfigJson[name][id];

          if (!item) {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log("没有找到系列:" + id);
            item = {};
          }

          return item;
        }

        getStrById(id) {
          var strobj = this._commonConfigJson[StaticConfigModel.ConstCfg][id];

          if (strobj && strobj.en_str) {
            return strobj.en_str;
          } else {
            return "未获取到配置：" + id;
          }
        }

      }); //item
      // {
      //     "id": 110011,
      //     "season": 1,
      //     "type": 1,
      //     "name": "普通种子",
      //     "icon": "https://web-static.baochuangames.com/nos/image/plantflowergames/zzbg.png",
      //     "description": "可以种出普通级的花朵"
      // }


      StaticConfigModel.Cat = "Cat";
      StaticConfigModel.TaskCfg = "TaskCfg";
      StaticConfigModel.DropsCfg = "DropsCfg";
      StaticConfigModel.ItemCfg = "ItemCfg";
      StaticConfigModel.ConstCfg = "ConstCfg";
      StaticConfigModel.SysParameter = "SysParameter";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f759d6720d299133f3fc94635c649e2585c8a1e5.js.map