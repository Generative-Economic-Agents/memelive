System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Request, _crd, baseUrl, postShare, getIslogin;

  function _reportPossibleCrUseOfRequest(extras) {
    _reporterNs.report("Request", "../utils/Request", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Request = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da76de0K5NCUIX62KbXv229", "RequestManager", undefined);

      // const currentURL = window.location.href;
      baseUrl = `https://api.baochuangames.com`; // const baseUrlyh = `http://api2.test.nesh`;
      // if (currentURL.indexOf("localhost") != -1||currentURL.indexOf("192.168") != -1) {
      //     baseUrl = "http://192.168.254.88:8080/";//192.168.254.44
      // } else {
      //     baseUrl = "http://13.214.33.171:8080"; 
      // }

      _export("postShare", postShare = () => (_crd && Request === void 0 ? (_reportPossibleCrUseOfRequest({
        error: Error()
      }), Request) : Request).post(`api/v1/upload`));

      _export("getIslogin", getIslogin = () => (_crd && Request === void 0 ? (_reportPossibleCrUseOfRequest({
        error: Error()
      }), Request) : Request).get(baseUrl)); // export const testrequest = ()=>Request.get(`${baseUrl}/wt-gac/user/getHomeUserInfo`);
      // export const getmusicList = (param)=>Request.get(`${baseUrl}/wt-gac/music/getMusicPassList?activityId=${param.activityId}&userId=${param.userId}`);
      // export const getuserInfo = ()=>Request.post(`${baseUrl}/wt-cpc/authorized/getUserInfo`);
      // export const postCheckLogin = ()=>Request.post(`${baseUrl}wt-cpc/login/checkLogin`);
      // export const posttoken = (data)=>Request.post(`${baseUrlyh}/oauth2/health/test`,data,{isForm:true});


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3466ee0b8192ac7db627ff981b474788394c3dda.js.map