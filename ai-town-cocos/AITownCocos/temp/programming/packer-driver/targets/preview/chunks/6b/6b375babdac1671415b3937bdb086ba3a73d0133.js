System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, network;

  function _reportPossibleCrUseOfcatServerD(extras) {
    _reporterNs.report("catServerD", "../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfitemServerD(extras) {
    _reporterNs.report("itemServerD", "../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOftaskcell(extras) {
    _reporterNs.report("taskcell", "../game/config/DataStruct", _context.meta, extras);
  }

  _export("network", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "932c2IgEtpIxKjn3sdULKdI", "RequestData", undefined);

      (function (_network) {
        //=========//GM add item
        {}

        class CmdRequest {
          constructor() {
            this["requestId"] = 1111110;
            this["type"] = 1;
            this["command"] = 10023;
            this["data"] = void 0;
            this.data = {
              "cmd": "additem 10101000 100"
            };
          }

        }

        _network.CmdRequest = CmdRequest;

        class GetWorkReward {
          constructor() {
            this["requestId"] = 1111110;
            this["type"] = 1;
            this["command"] = 10029;
            this["data"] = void 0;
            this.data = {
              "workId": '0'
            };
          }

        }

        _network.GetWorkReward = GetWorkReward;

        class CreateCatWorkCatRequest {
          constructor() {
            this["requestId"] = 1111110;
            this["type"] = 1;
            this["command"] = 10028;
            this["data"] = void 0;
            this.data = {
              "catIds": [0],
              "items": ["ddd"]
            };
          }

        }

        _network.CreateCatWorkCatRequest = CreateCatWorkCatRequest;

        class TouchCatRequest {
          constructor() {
            this["requestId"] = 1111110;
            this["type"] = 1;
            this["command"] = 10026;
            this["data"] = void 0;
            this.data = {
              "catId": 1
            };
          }

        }

        _network.TouchCatRequest = TouchCatRequest;

        class PlayWithCatRequest {
          constructor() {
            this["requestId"] = 1111110;
            this["type"] = 1;
            this["command"] = 10027;
            this["data"] = void 0;
            this.data = {
              "catId": 0,
              "goodsId": 0,
              "count": 0
            };
          }

        }

        _network.PlayWithCatRequest = PlayWithCatRequest;

        class BuyShopRequest {
          constructor() {
            this["requestId"] = 1111110;
            this["type"] = 1;
            this["command"] = 10025;
            this["data"] = void 0;
            this.data = {
              "shopId": 1,
              "count": 10
            };
          }

        }

        _network.BuyShopRequest = BuyShopRequest;

        class LoginRequest {
          constructor() {
            this["requestId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this.data = void 0;
            this.data = {
              "loginType": 1,
              "name": "loginName",
              "password": "",
              "nickName": "nickName",
              "avatar": "",
              "sex": 0,
              "timeZone": 0,
              "clientOs": "",
              userId: "aaa",
              inviteCode: "",
              invite: ""
            };
          }

        }

        _network.LoginRequest = LoginRequest;

        class LoginResponse //返回报文
        {
          constructor() {
            this["requestId"] = void 0;
            this["playerId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.LoginResponse = LoginResponse;

        class SelectCatRequst {
          constructor() {
            this["requestId"] = 0;
            this["type"] = 1;
            this["command"] = 10007;
            this["data"] = void 0;
            this.data = {
              "catId": 0
            };
          }

        }

        _network.SelectCatRequst = SelectCatRequst;

        class SelectCatResponse {
          constructor() {
            this["requestId"] = 0;
            this["playerId"] = 0;
            this["type"] = 1;
            this["command"] = 10007;
            this["code"] = 0;
            this["message"] = "";
            this["data"] = void 0;
          }

        }

        _network.SelectCatResponse = SelectCatResponse;

        class CheckCatsRequest {
          constructor() {
            this["requestId"] = 0;
            this["type"] = 1;
            this["command"] = 10005;
            this["data"] = void 0;
            this.data = {
              "playerId": 0,
              "catIds": []
            };
          }

        }

        _network.CheckCatsRequest = CheckCatsRequest;

        class CheckCatsResponse {
          constructor() {
            this["requestId"] = void 0;
            this["playerId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.CheckCatsResponse = CheckCatsResponse;

        class ChangeCatsRequest {
          constructor() {
            this["requestId"] = 0;
            this["playerId"] = 0;
            this["type"] = 0;
            this["command"] = 10019;
            this["data"] = void 0;
            this.data = {
              "catId": 0
            };
          }

        }

        _network.ChangeCatsRequest = ChangeCatsRequest;

        class ChangeCatsResponse {
          constructor() {
            this["requestId"] = 0;
            this["playerId"] = 0;
            this["type"] = 1;
            this["command"] = 10019;
            this["code"] = 0;
            this["message"] = "";
            this["data"] = void 0;
          }

        }

        _network.ChangeCatsResponse = ChangeCatsResponse;

        class checkPlayerItemsRequest {
          constructor() {
            this["requestId"] = 0;
            this["type"] = 1;
            this["command"] = 10008;
            this["data"] = void 0;
            this.data = {
              "playerId": 0,
              "ids": []
            };
          }

        }

        _network.checkPlayerItemsRequest = checkPlayerItemsRequest;

        class checkPlayerItemsResponse {
          constructor() {
            this["requestId"] = void 0;
            this["playerId"] = void 0;
            this["type"] = void 0;
            this["command"] = 10008;
            this["code"] = 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.checkPlayerItemsResponse = checkPlayerItemsResponse;

        class chatRequest {
          constructor() {
            this["requestId"] = 111110;
            this["type"] = 1;
            this["command"] = 10016;
            this["data"] = void 0;
            this.data = {
              "context": "",
              "catId": 0
            };
          }

        }

        _network.chatRequest = chatRequest;

        class chatResponse {
          constructor() {
            this["requestId"] = void 0;
            this["playerId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.chatResponse = chatResponse;

        class chatListRequest {
          constructor() {
            this["requestId"] = 111110;
            this["type"] = 2;
            this["command"] = 10017;
            this["data"] = void 0;
            this.data = {
              "pageNum": 0,
              "catId": 0
            };
          }

        }

        _network.chatListRequest = chatListRequest;

        class chatListResponse {
          constructor() {
            this["requestId"] = void 0;
            this["type"] = void 0;
            this["command"] = 10017;
            this["code"] = void 0;
            this.message = void 0;
            this["data"] = void 0;
          }

        }

        _network.chatListResponse = chatListResponse;

        class taskListRequest {
          constructor() {
            this["requestId"] = 0;
            this["type"] = 1;
            this["command"] = 10012;
            this["data"] = void 0;
            this.data = {
              "playerId": 0,
              "type": -1 //-1获取所有数据，对应表格postion

            };
          }

        }

        _network.taskListRequest = taskListRequest;

        class taskListResponse {
          constructor() {
            this["requestId"] = void 0;
            this["playerId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.taskListResponse = taskListResponse;

        class taskChangeResponse {
          constructor() {
            this["requestId"] = void 0;
            this["type"] = 1;
            this["command"] = 10010;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.taskChangeResponse = taskChangeResponse;

        class taskgetRequest {
          constructor() {
            this["requestId"] = 0;
            this["type"] = 1;
            this["command"] = 10013;
            this["data"] = {
              "taskId": 0
            };
          }

        }

        _network.taskgetRequest = taskgetRequest;

        class taskgetResponse {
          constructor() {
            this["requestId"] = void 0;
            this["playerId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.taskgetResponse = taskgetResponse;

        class qiandaoRequest {
          constructor() {
            this["requestId"] = 0;
            this["type"] = 1;
            this["command"] = 10014;
          }

        }

        _network.qiandaoRequest = qiandaoRequest;

        class qiandaoResponse {
          constructor() {
            this["requestId"] = void 0;
            this["playerId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.qiandaoResponse = qiandaoResponse;

        class shareRequest {
          constructor() {
            this["requestId"] = 111110;
            this["type"] = 1;
            this["command"] = 10015;
          }

        }

        _network.shareRequest = shareRequest;

        class shareResponse {
          constructor() {
            this.message = void 0;
            this["requestId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.shareResponse = shareResponse;

        class itemUpdateResponse {
          constructor() {
            this["requestId"] = void 0;
            this["type"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.itemUpdateResponse = itemUpdateResponse;

        class changeCatInfoRequest {
          constructor() {
            this["requestId"] = 0;
            this["type"] = 1;
            this["command"] = 10006;
            this["data"] = void 0;
            this.data = {
              "catId": 10001,
              "name": "猫的名字",
              "userName": "代理猫院长名字",
              "career": "teacher"
            };
          }

        }

        _network.changeCatInfoRequest = changeCatInfoRequest;

        class changeCatInfoResponse {
          constructor() {
            this["requestId"] = void 0;
            this["playerId"] = void 0;
            this["type"] = void 0;
            this["command"] = 10006;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.changeCatInfoResponse = changeCatInfoResponse;

        class yindaoRequest {
          constructor() {
            this.requestId = 1111110;
            this.type = 1;
            this.command = 10021;
            this.data = void 0;
            this.data = {
              guide: 0
            };
          }

        }

        _network.yindaoRequest = yindaoRequest;

        class zhaohuRequest {
          constructor() {
            this["requestId"] = 1111110;
            this["type"] = 1;
            this["command"] = 10022;
          }

        }

        _network.zhaohuRequest = zhaohuRequest;

        class zhaohuResponse {
          constructor() {
            this.type = void 0;
            this["requestId"] = void 0;
            this["command"] = void 0;
            this["code"] = void 0;
            this["message"] = void 0;
            this["data"] = void 0;
          }

        }

        _network.zhaohuResponse = zhaohuResponse;

        class shopListRequest {
          constructor() {
            this["requestId"] = 1111110;
            this["type"] = 1;
            this["command"] = 10024;
          }

        }

        _network.shopListRequest = shopListRequest;
      })(network || _export("network", network = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b375babdac1671415b3937bdb086ba3a73d0133.js.map