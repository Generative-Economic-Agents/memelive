System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, KeyCode, _crd, RolePartIcon, NPCPartDisplay, NpcIndex, NPCPartDisplayInfo, NPC_BASE_EG, EventNpcInfoMap, ProductsItemUrl, BubbleImgUrl, NpcEventType, SleepHeadDirect;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      KeyCode = _cc.KeyCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ea04krpgRD3JkiVd5oGAzF", "NPCConfig", undefined);

      __checkObsolete__(['KeyCode']);

      _export("RolePartIcon", RolePartIcon = {
        body: ["character/character_body"],
        hair: {
          man: ["character/IconHair/man/0", "character/IconHair/man/1"],
          woman: ["character/IconHair/woman/0", "character/IconHair/woman/1"]
        },
        pants: ["character/IconPants/0", "character/IconPants/1"],
        shirt: ["character/IconShirt/0", "character/IconShirt/1"]
      });

      _export("NPCPartDisplay", NPCPartDisplay = {
        body: ["character/character_body"],
        hair: {
          man: ["character/hair/man_0", "character/hair/man_1"],
          woman: ["character/hair/woman_0", "character/hair/woman_1"]
        },
        pants: ["character/pants/pants_0", "character/pants/pants_1"],
        shirt: ["character/shirt/shirt_0", "character/shirt/shirt_1"]
      });

      _export("NpcIndex", NpcIndex = {
        10002: 0,
        10003: 1,
        10005: 2,
        10004: 4
      });

      _export("NPCPartDisplayInfo", NPCPartDisplayInfo = {
        body: [{
          id: 900,
          icon_path: "character/character_body",
          frame_path: "character/character_body",
          name: "body"
        }, {
          id: 10002,
          icon_path: "character/npc/farmer",
          frame_path: "character/npc/farmer",
          name: "body"
        }, {
          id: 10003,
          icon_path: "character/npc/grocer",
          frame_path: "character/npc/grocer",
          name: "body"
        }, {
          id: 10004,
          icon_path: "character/npc/herdman",
          frame_path: "character/npc/herdman",
          name: "body"
        }, {
          id: 10005,
          icon_path: "character/npc/baker",
          frame_path: "character/npc/baker",
          name: "body"
        }],
        hair: [{
          id: 100,
          icon_path: "character/IconHair/man/0",
          frame_path: "character/hair/man_0",
          name: "hair"
        }, {
          id: 101,
          icon_path: "character/IconHair/man/1",
          frame_path: "character/hair/man_1",
          name: "hair"
        }, {
          id: 102,
          icon_path: "character/IconHair/woman/0",
          frame_path: "character/hair/woman_0",
          name: "hair"
        }, {
          id: 103,
          icon_path: "character/IconHair/woman/1",
          frame_path: "character/hair/woman_1",
          name: "hair"
        }],
        pants: [{
          id: 300,
          icon_path: "character/IconPants/0",
          frame_path: "character/pants/pants_0",
          key: "pants"
        }, {
          id: 301,
          icon_path: "character/IconPants/1",
          frame_path: "character/pants/pants_1",
          key: "pants"
        }],
        shirt: [{
          id: 200,
          icon_path: "character/IconShirt/0",
          frame_path: "character/shirt/shirt_0",
          name: "pants"
        }, {
          id: 201,
          icon_path: "character/IconShirt/1",
          frame_path: "character/shirt/shirt_1",
          name: "pants"
        }]
      });

      _export("NPC_BASE_EG", NPC_BASE_EG = {
        body: 0,
        hair: {
          sexy: "man",
          index: 0
        },
        pants: 0,
        shirt: 0
      });

      _export("EventNpcInfoMap", EventNpcInfoMap = {
        10002: {
          sleepHeadDirect: KeyCode.KEY_D,
          diningHeadDirect: KeyCode.KEY_S,
          cookHeadDirect: KeyCode.KEY_W
        },
        10004: {
          sleepHeadDirect: KeyCode.KEY_D,
          diningHeadDirect: KeyCode.KEY_S,
          cookHeadDirect: KeyCode.KEY_W
        },
        10005: {
          sleepHeadDirect: KeyCode.KEY_D,
          diningHeadDirect: KeyCode.KEY_A,
          cookHeadDirect: KeyCode.KEY_W
        },
        10003: {
          sleepHeadDirect: KeyCode.KEY_W,
          diningHeadDirect: KeyCode.KEY_D,
          cookHeadDirect: KeyCode.KEY_W
        }
      });

      _export("ProductsItemUrl", ProductsItemUrl = {
        "ItemCfg": [{
          "Column1": "y",
          "id": 10101000,
          "备注说明": "代币(储蓄\/交易）",
          "描述": "NPC用于日常交易。通过工作赚钱，花在食物等必需品上",
          "道具类型": 1,
          "子类型": 1,
          "url": "action/bubble/sale/money",
          "是否进入背包": 1
        }, {
          "Column1": "y",
          "id": 10101001,
          "备注说明": "大麦",
          "描述": "大麦[农夫]",
          "道具类型": 2,
          "子类型": 1,
          "url": "action/bubble/farm/wheat",
          "是否进入背包": 1,
          "fieldName": "fieldWheat"
        }, {
          "Column1": "y",
          "id": 10101002,
          "备注说明": "玉米",
          "描述": "玉米[农夫]",
          "道具类型": 2,
          "子类型": 1,
          "图标": "action/bubble/farm/corn",
          "是否进入背包": 1,
          "fieldName": "fieldCorn"
        }, {
          "Column1": "y",
          "id": 10101003,
          "备注说明": "蔬菜",
          "描述": "蔬菜[农夫]",
          "道具类型": 2,
          "子类型": 1,
          "url": "action/bubble/farm/cabbage",
          "是否进入背包": 1,
          "fieldName": "fieldCabbage"
        }, {
          "Column1": "y",
          "id": 10101004,
          "备注说明": "牛奶",
          "描述": "牛奶[牧民]",
          "道具类型": 2,
          "子类型": 1,
          "url": "",
          "是否进入背包": 1
        }, {
          "Column1": "y",
          "id": 10101005,
          "备注说明": "牛肉",
          "描述": "牛肉[牧民]",
          "道具类型": 2,
          "子类型": 1,
          "url": "action/bubble/cook/hock",
          "是否进入背包": 1
        }, {
          "Column1": "y",
          "id": 10101006,
          "备注说明": "面包",
          "描述": "面包[面包师]",
          "道具类型": 2,
          "子类型": 1,
          "url": "action/bubble/cook/bread",
          "是否进入背包": 1
        }, {
          "Column1": "y",
          "id": 10101007,
          "备注说明": "糕点",
          "描述": "糕点[面包师]",
          "道具类型": 2,
          "子类型": 1,
          "url": "",
          "是否进入背包": 1
        }]
      });

      _export("BubbleImgUrl", BubbleImgUrl = {
        sleep: 'action/bubble/sleep/sleep',
        cook: 'action/bubble/cook/boiling',
        dinning: 'action/bubble/eat/doing',
        afterDinner: 'action/bubble/eat/done',
        eating: 'action/bubble/eat/eating',
        eat: 'action/bubble/eat/eat',
        //农民
        farmerHoe: 'action/bubble/farm/hoe',
        farmerWater: 'action/bubble/farm/water',
        farmerSickle: 'action/bubble/farm/sickle',
        //牧民
        knife: 'action/bubble/butcher/knife',
        clean: 'action/bubble/butcher/clean',
        100: {},
        101: {},
        102: {},
        103: {},
        104: {},
        105: {}
      });

      _export("NpcEventType", NpcEventType = /*#__PURE__*/function (NpcEventType) {
        NpcEventType[NpcEventType["farming"] = 100] = "farming";
        NpcEventType[NpcEventType["harvest"] = 101] = "harvest";
        NpcEventType[NpcEventType["sale"] = 102] = "sale";
        NpcEventType[NpcEventType["buy"] = 103] = "buy";
        NpcEventType[NpcEventType["cook"] = 104] = "cook";
        NpcEventType[NpcEventType["dinning"] = 105] = "dinning";
        NpcEventType[NpcEventType["sleep"] = 106] = "sleep";
        NpcEventType[NpcEventType["feeding"] = 107] = "feeding";
        NpcEventType[NpcEventType["slaughter"] = 108] = "slaughter";
        NpcEventType[NpcEventType["make"] = 109] = "make";
        NpcEventType[NpcEventType["speak"] = 110] = "speak";
        NpcEventType[NpcEventType["getup"] = 111] = "getup";
        NpcEventType[NpcEventType["move"] = 112] = "move";
        return NpcEventType;
      }({}));

      _export("SleepHeadDirect", SleepHeadDirect = /*#__PURE__*/function (SleepHeadDirect) {
        return SleepHeadDirect;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6310ffb15723c7d14e82f160ec40fe0e69df92e7.js.map