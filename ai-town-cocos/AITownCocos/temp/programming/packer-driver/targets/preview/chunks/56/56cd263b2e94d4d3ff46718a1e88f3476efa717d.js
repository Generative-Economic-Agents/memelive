System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, StringUtils, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ae8biaiRtGkI52FDXvDW2B", "StringUtils", undefined);

      __checkObsolete__(['Sprite']);

      _export("default", StringUtils = class StringUtils {
        static setTxtBylength(txt, maxlength, appendstr) {
          if (txt === void 0) {
            txt = "";
          }

          if (appendstr === void 0) {
            appendstr = "...";
          }

          var len = StringUtils.countnums(txt);

          if (len > maxlength) {
            txt = txt.substr(0, maxlength / 2) + appendstr;
          }

          return txt;
        }

        static copyObject(orig) {
          var copy = Object.create(Object.getPrototypeOf(orig));
          this.copyOwnPropertiesFrom(copy, orig);
          return copy;
        }

        static copyOwnPropertiesFrom(target, source) {
          Object.getOwnPropertyNames(source).forEach(function (propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
          });
          return target;
        }
        /**
        * 数字转整数 如 100000 转为10万
        * @param {需要转化的数} num
        * @param {需要保留的小数位数} point
        */


        static tranNumber(num, point) {
          var numStr = num.toString(); // 十万以内直接返回

          if (numStr.length < 6) {
            return numStr;
          } //大于8位数是亿
          else if (numStr.length > 8) {
            var decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
            return parseFloat(parseInt(num / 100000000 + "") + '.' + decimal) + '亿';
          } //大于6位数是十万 (以10W分割 10W以下全部显示)
          else if (numStr.length > 5) {
            var _decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point);

            return parseFloat(parseInt(num / 10000 + "") + '.' + _decimal) + '万';
          }
        }

        static setGray(node, state) {
          var s = node.getComponentsInChildren(Sprite);

          for (var i = 0; i < s.length; i++) {
            s[i].grayscale = state;
          }
        }

      });

      StringUtils.countnums = function () {
        var trim = function trim(strings) {
          return (strings || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, ""); //+表示匹配一次或多次，|表示或者，\s和\u00A0匹配空白字符，/^以……开头，$以……结尾，/g全局匹配,/i忽略大小写
        };

        return function (_str) {
          _str = trim(_str); //去除字符串的左右两边空格

          var strlength = _str.length;

          if (!strlength) {
            //如果字符串长度为零，返回零
            return 0;
          }

          var chinese = _str.match(/[\u4e00-\u9fa5]/g); //匹配中文，match返回包含中文的数组


          return strlength + (chinese ? chinese.length : 0); //计算字符个数
        };
      }();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56cd263b2e94d4d3ff46718a1e88f3476efa717d.js.map