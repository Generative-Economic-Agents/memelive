System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, key, crtptos;

  // key 加密了16进制
  // import { decrypt, encrypt } from "../../../../../libs/xxtea";
  // function s2h(str) {
  //   if (str == "") return "";
  //   let hex = [];
  //   for (var i = 0; i < str.length; i++) {
  //     hex.push(str.charCodeAt(i).toString(16));
  //   }
  //   return hex.join("");
  // }
  //转16进制
  function h2s(str) {
    if (str.length % 2 != 0) {
      console.log('fail');
      return '';
    }

    var a;
    var string = [];

    for (var i = 0; i < str.length; i = i + 2) {
      a = parseInt(str.substr(i, 2), 16);
      string.push(String.fromCharCode(a));
    }

    return string.join('');
  } //key:qlycjXnrKwT1vNFq  转了16进制


  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd92cMriINGubecINUY64+F", "cryptos", undefined);

      key = h2s('716c79636a586e724b775431764e4671');
      crtptos = {};

      crtptos.encrypt = data => {
        return window["encryptToString"](data, key);
      };

      crtptos.decrypt = data => {
        return window["decryptToString"](data, key);
      };

      _export("default", crtptos);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a59acff3b0acf44d6002ca3d7348efa56816ef8.js.map