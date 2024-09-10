System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ShopPicMap, ToysInfo, TouchCatTips, tipNumber, catName, message, ActionType;

  function getTouchCatTip(tipNumber, catName) {
    var baseTip = TouchCatTips[tipNumber];
    return "" + baseTip + (catName ? " feel very comfortable" : '');
  } // 使用示例


  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fedd5IXrMFA46U2u/I6S4XQ", "StaticLocalIconUrlMap", undefined);

      /**商品pic路径 */
      _export("ShopPicMap", ShopPicMap = {
        1: 'shopGoodsPic/shopItem_1',
        2: 'shopGoodsPic/shopItem_2',
        3: 'shopGoodsPic/shopItem_3',
        4: 'shopGoodsPic/shopItem_4',
        5: 'shopGoodsPic/shopItem_5',
        6: 'shopGoodsPic/shopItem_6',
        7: 'shopGoodsPic/shopItem_7',
        8: 'shopGoodsPic/shopItem_8'
      });

      _export("ToysInfo", ToysInfo = {
        10101003: {
          id: 1,
          store_id: 1,
          cName: "猫罐头",
          eName: "Cat Cans",
          cDes: "“我想一天吃八顿！”",
          eDes: "I want to eat eight cans a day.",
          picUrl: "shopGoodsPic/1_shopItem_1"
        },
        10101004: {
          id: 2,
          store_id: 1,
          cName: "猫条",
          eName: "Cat Treats",
          cDes: "我吸我吸我吸吸吸！！",
          eDes: "I'm addicted! I can't get enough",
          picUrl: "shopGoodsPic/1_shopItem_2"
        },
        10101005: {
          id: 3,
          store_id: 1,
          cName: "沐浴海绵",
          eName: "Bath Sponge",
          cDes: "我的心情取决于你的手法",
          eDes: "My mood depends on your technique",
          picUrl: "shopGoodsPic/1_shopItem_3"
        },
        10101006: {
          id: 4,
          store_id: 1,
          cName: "逗猫棒",
          eName: "Cat Wand",
          cDes: "减肥利器？",
          eDes: "Weight Loss Tool？",
          picUrl: "shopGoodsPic/1_shopItem_4"
        },
        10101007: {
          id: 5,
          store_id: 1,
          cName: "猫抓板",
          eName: "Scratching Board",
          cDes: "这个指甲刀还不错！",
          eDes: "This nail clipper is pretty good！",
          picUrl: "shopGoodsPic/1_shopItem_5"
        },
        10101008: {
          id: 6,
          store_id: 1,
          cName: "老鼠玩具",
          eName: "Mouse Toy",
          cDes: "臣服吧，Jerry们",
          eDes: "Submit, Jerrys！",
          picUrl: "shopGoodsPic/1_shopItem_6"
        },
        10101009: {
          id: 7,
          store_id: 1,
          cName: "猫窝",
          eName: "Cat Bed",
          cDes: "一个窝只能住一只猫，不然要打架！",
          eDes: "Only one cat per bed, or there will be fights!",
          picUrl: "shopGoodsPic/1_shopItem_7"
        },
        101010010: {
          id: 8,
          store_id: 1,
          cName: "猫蛋",
          eName: "Cat Egg",
          cDes: "你想要什么样的小猫呢？",
          eDes: "What kind of kitten do you want?",
          picUrl: "shopGoodsPic/1_shopItem_8"
        }
      });

      _export("TouchCatTips", TouchCatTips = {
        1: 'Meow~meow~',
        2: '',
        3: 'Will you stay with me forever?',
        4: 'Bring me a mouse to practice with!'
      });

      tipNumber = 2;
      catName = 'Tom'; // 假设猫咪昵称为Tom

      message = getTouchCatTip(tipNumber, catName);
      console.log(message); // 输出: Tom feel very comfortable

      /**互动道具pic 路径 */

      _export("ActionType", ActionType = /*#__PURE__*/function (ActionType) {
        ActionType[ActionType["TALK"] = 1] = "TALK";
        ActionType[ActionType["TOY_PLAY"] = 2] = "TOY_PLAY";
        ActionType[ActionType["TOUCH"] = 3] = "TOUCH";
        return ActionType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc4072581041dcc72f4d945a92f2ae87602e4ceb.js.map