System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, PromiseUtils, _crd;

  _export("PromiseUtils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af328KvvH1FJqz0ccMjmAZT", "PromiseUtils", undefined);

      _export("PromiseUtils", PromiseUtils = class PromiseUtils {
        static parallel(promises) {
          return Promise.all(promises);
        }

        static race(promises) {
          return Promise.race(promises);
        }

        static wait(time) {
          return new Promise((resolve, _) => {
            setTimeout(resolve, time);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aac84b309141dffafb2dd391e03972d38796ef7f.js.map