System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EventType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "026c9eYI4RGI5pBUJBGk+yB", "EventType", undefined);

      _export("EventType", EventType = {
        SEND_CAT_ACTION: "SEND_CAT_ACTION",
        //猫咪动作的事件
        SEND_BUY_SHOP_ITEM_SUCCESS_INFO: "SEND_BUY_SHOP_ITEM_INFO",
        //购买成功后的消息
        LOGIN_COMPELETED: "LOGIN_COMPELETED",
        PLAYER_KUANG_SELECT: "PLAYER_KUANG_SELECT",
        UPDTAE_PLAYER_KUANG: "UPDTAE_PLAYER_INFO",
        //更换刷新头像框
        UPDATE_SHOP_INDEX: "UPDATE_SHOP_INDEX",
        //显示对话记录按钮
        SHOW_CHAT_LOG_BUTTON: "UPDATE_GUIDE_INFO_WORK_PAGE",
        //显示打工按钮
        SHOW_WORK_BUTTON: "SHOW_WORK_BUTTON",
        //更新打工页引导信息
        UPDATE_GUIDE_INFO_WORK_PAGE: "UPDATE_GUIDE_INFO_WORK_PAGE",
        //更新首页引导信息
        UPDATE_GUIDE_INFO_MAIN_VIEW: "UPDATE_GUIDE_INFO_MAIN_VIEW",
        //更新好感度
        UPDATE_CAT_CV: "UPDATE_CAT_CV",
        //开始打工
        START_CAT_WORK: "START_CAT_WORK",
        //打工结果
        WORK_STATE_INFO: "WORK_STATE_INFO",
        //打工失败
        WORK_DEFAULT: "WORK_DEFAULT",
        FRESH_GAMELOCKED: "FRESH_GAMELOCKED",
        //锁定游戏
        FRESH_RENWU_REGE: "FRESH_RENWU_REGE",
        FRESH_CHUANDI_ZS: "FRESH_CHUANDI_ZS",
        //=============socket===============
        SOCKET_ONOPEN: "SOCKET_ONOPEN",
        SOCKET_ONMESSAGE: "SOCKET_ONMESSAGE",
        SOCKET_ONCLOSE: "SOCKET_ONCLOSE",
        SOCKET_ONERROR: "SOCKET_ONERROR",
        SOCKET_GETALL_CATS: "SOCKET_GETALL_CATS",
        //查询所有猫咪
        SOCKET_SELECT_CATS: "SOCKET_SELECT_CATS",
        SOCKET_CHANGE_CATS: "SOCKET_CHANGE_CATS",
        SOCKET_CHANGEINFO_CATS: "SOCKET_CHANGEINFO_CATS10004",
        SOCKET_CHECK_PLAYERITEMS: "SOCKET_CHECK_PLAYERITEMS",
        SOCKET_CHAT: "SOCKET_CHAT",
        SOCKET_CHATLIST: "SOCKET_CHATLIST",
        SOCKET_TASKLIST: "SOCKET_TASKLIST",
        SOCKET_TASK_CHANGE: "SOCKET_TASK_CHANGE",
        SOCKET_TASK_GET: "SOCKET_TASK_GET",
        SOCKET_SHARE: "SOCKET_SHARE",
        SOCKET_QIANDAO: "SOCKET_QISNANDAO",
        SOCKET_ITEMUPDATE: "SOCKET_ITEMUPDATE_10009",
        SOCKET_CHANGE_CATSDATA: "SOCKET_CHANGE_CATSDATA",
        SOCKET_ZHAOHU: "SOCKET_ZHAOHU",
        //=============shop=========================
        SOCKET_SHOP_ITEM_LIST: "SOCKET_SHOP_ITEM_LIST",
        //玩具列表
        SOCKET_TOY_LIST: "SOCKET_TOY_LIST"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=898c3cbee3779ed5b9fad248e50fe68d9cce49b1.js.map