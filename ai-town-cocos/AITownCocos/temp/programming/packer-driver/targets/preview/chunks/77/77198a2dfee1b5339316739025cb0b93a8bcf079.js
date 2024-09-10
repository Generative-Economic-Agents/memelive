System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, sys, showMsg2, modelMgr, BoswerUtils, _crd;

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../game/App", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      showMsg2 = _unresolved_2.showMsg2;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89c8fS9nFJMDZ/04zJnj3Q5", "BoswerUtils", undefined);

      __checkObsolete__(['log', 'sys']);

      _export("default", BoswerUtils = class BoswerUtils {
        //复制到系统剪切板
        static webCopyString(str, cb) {
          var input = str + '';
          var el = document.createElement('textarea');
          el.value = input;
          el.setAttribute('readonly', ''); // el.style.contain = 'strict';

          el.style.position = 'absolute';
          el.style.left = '-9999px';
          el.style.fontSize = '12pt'; // Prevent zooming on iOS

          var selection = getSelection();
          var originalRange = null;

          if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
          }

          document.body.appendChild(el);
          el.select();
          el.selectionStart = 0;
          el.selectionEnd = input.length;
          var success = false;

          try {
            success = document.execCommand('copy');
          } catch (err) {}

          document.body.removeChild(el);

          if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
          }

          cb && cb(success);
          return success;
        }
        /**
         *
         * @param variable
         */


        static getQueryVariable(variable) {
          var query = window.location.search.substring(1);
          var vars = query.split("&");

          for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");

            if (pair[0] == variable) {
              return pair[1];
            }
          }

          return false;
        }

        static getLocalStorage(key, type) {
          if (type === void 0) {
            type = "object";
          }

          var str = window.localStorage.getItem(key);

          if (type == "string") {
            return str;
          } else if (type == "object") {
            if (!str) return null;
            return JSON.parse(str);
          }

          return;
        }

        static setLocalData(key, str) {
          window.localStorage.setItem(key, str);
        }

        static removeLocalData(key) {
          window.localStorage.removeItem(key);
        }
        /**
         * 获取url中的变量列表
         */


        static getParam() {
          var outputParam = {};
          var mapurl = location.href; //"https://mall.baidu.com/warrior/?taskId=bt2020-chip&singleTop=1&byRouter=1&noTitleBar=1";

          if (mapurl.length > 1) {
            var params = location.search.substr(1).split("&"); // mapurl.split('?')[1].split("&");

            params.forEach(item => {
              var keyValue = item.split("=");

              if (keyValue.length === 2) {
                outputParam[keyValue[0]] = keyValue[1];
              }
            });
            return outputParam;
          }
        }

        static myBrowser() {
          var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

          if (userAgent.indexOf("OPR") > -1) {
            return "Opera";
          } //判断是否Opera浏览器 OPR/43.0.2442.991


          if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
          } //判断是否Firefox浏览器  Firefox/51.0


          if (userAgent.indexOf("Trident") > -1) {
            return "IE";
          } //判断是否IE浏览器  Trident/7.0; rv:11.0


          if (userAgent.indexOf("Edge") > -1) {
            return "Edge";
          } //判断是否Edge浏览器  Edge/14.14393


          if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
          } // Chrome/56.0.2924.87


          if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
          } //判断是否Safari浏览器 AppleWebKit/534.57.2 Version/5.1.7 Safari/534.57.2


          if (userAgent.indexOf("MicroMessenger") > -1) {
            return "MicroMessenger";
          } //微信User-Agent


          if (userAgent.indexOf("MicroMessenger") > -1) {
            return "MicroMessenger";
          } //微信User-Agent


          if (userAgent.indexOf("QQ/") > -1) {
            return "PA QQ";
          } //qq


          return null;
        }

        static isWeixin() {
          var u = navigator.appVersion;
          var wx = u.match(/MicroMessenger/i) && u.match(/MicroMessenger/i).toString().toLowerCase() == "micromessenger";
          return wx;
        }

        static isIOS15() {
          var str = navigator.userAgent.toLowerCase();
          var ver = str.match(/cpu iphone os (.*?) like mac os/);

          if (!ver) {
            return false;
          } else {
            if (ver[1].indexOf("15") != -1) return true;
          }
        }

        static is_qq() {
          var sUserAgent = navigator.userAgent;
          return /QQ\/([\d.]+) /i.test(sUserAgent) && !/miniprogram/i.test(sUserAgent); // if (sUserAgent.match(/QQ/i) == 'qq') {
          //         return true
          // } else {
          //         return false
          // }
        }
        /**
         * 判断手机型号
         * @returns string "andriod"||"ios"
         */


        static getPhoneSys() {
          var u = navigator.userAgent,
              app = navigator.appVersion;
          var isXiaomi = u.indexOf("XiaoMi") > -1; // 小米手机

          var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; // 其它安卓

          var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios

          if (isAndroid) {
            return "android";
          } else if (isIOS) {
            if (isXiaomi) {
              return "android";
            } else {
              return "ios";
            }
          }
        }
        /**
         *
         * @param obj
         */


        static getParamStr(obj) {
          var searchstr = "";

          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              var element = obj[key];
              searchstr += key + "=" + element + "&";
            }
          }

          searchstr = searchstr.substring(0, searchstr.length - 1);
          return searchstr;
        }
        /**
         *从url地址中获取根据参数名获取值
         * @param url url字符串
         * @param key 参数名
         * @returns
         * @author xingtong
         */


        static getParamByUrl(url, key) {
          var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");

          if (url.indexOf("?") != -1) {
            url = url.split("?")[1];
          }

          console.log(url);
          var r = url.match(reg);
          if (r != null) return unescape(r[2]);
          return null;
        }

        static parseTime(time, cFormat) {
          if (arguments.length === 0 || !time) {
            return null;
          }

          var format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
          var date;

          if (typeof time === "object") {
            date = time;
          } else {
            if (typeof time === "string") {
              if (/^[0-9]+$/.test(time)) {
                // support "1548221490638"
                time = parseInt(time);
              } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), "/");
              }
            }

            if (typeof time === "number" && time.toString().length === 10) {
              time = time * 1000;
            }

            date = new Date(time);
          }

          var formatObj = {
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
          };
          var time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
            var value = formatObj[key]; // Note: getDay() returns 0 on Sunday

            if (key === "a") {
              return ["日", "一", "二", "三", "四", "五", "六"][value];
            }

            return value.toString().padStart(2, "0");
          });
          return time_str;
        }

        static copystring(textToCopy) {
          if (sys.isBrowser) {
            // 在 Web 平台上，使用 document.execCommand('copy') 方法将文本复制到剪贴板
            if (navigator.clipboard) {
              navigator.clipboard.writeText(textToCopy).then(() => {
                log("Copied text: " + textToCopy);
                (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                  error: Error()
                }), showMsg2) : showMsg2)("Link Copied!  Quick, share it with your friends to join in the fun.");
              }).catch(error => {
                // error(`Failed to copy text: ${error}`);
                // showMsg2("权限不足，请手动输入:" + textToCopy);
                (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                  error: Error()
                }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                  error: Error()
                }), modelMgr) : modelMgr).configModel.getStrById(10006) + textToCopy);
              });
            } else if (document.execCommand) {
              // 创建一个临时的 textarea 元素，并设置其内容为需要复制的文本
              var textarea = document.createElement('textarea');
              textarea.value = textToCopy; // 将 textarea 元素添加到文档中

              document.body.appendChild(textarea); // 选中 textarea 元素中的文本

              textarea.select(); // 将文本复制到剪贴板中

              document.execCommand('copy'); // 将 textarea 元素从文档中移除

              document.body.removeChild(textarea);
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.getStrById(10014)); // showMsg2("Link Copied!  Quick, share it with your friends to join in the fun.");

              log("Copied text: " + textToCopy);
            }
          } else if (sys.isNative) {
            // 在原生平台上，使用平台提供的 API 实现复制功能
            // 调用平台提供的 API 将文本复制到剪贴板
            // systemEvent.emit(Input.EventType.CLIPBOARD, textToCopy);
            log("Copied text: " + textToCopy);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77198a2dfee1b5339316739025cb0b93a8bcf079.js.map