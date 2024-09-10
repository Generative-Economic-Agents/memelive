System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CallbackInfo, Observer, _crd;

  _export({
    CallbackInfo: void 0,
    Observer: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09a91VTFsRFMoOzazx5eGeo", "Observer", undefined);

      _export("CallbackInfo", CallbackInfo = class CallbackInfo {
        constructor() {
          this.callback = void 0;
          this.thisObj = void 0;
          this.once = void 0;
        }

        static create() {
          if (CallbackInfo.pool.length > 0) {
            return CallbackInfo.pool.pop();
          }

          return new CallbackInfo();
        }

        recycle() {
          let s = this;
          s.callback = undefined;
          s.thisObj = undefined;
          s.once = false;
          CallbackInfo.pool.push(s);
        }

        removeAll() {
          CallbackInfo.pool = [];
        }

      });

      CallbackInfo.pool = [];

      _export("Observer", Observer = class Observer extends Object {
        constructor() {
          super();
          this._callbackMap = {};
        }

        on(name, callback, thisObj, once = false) {
          let s = this;
          let n = String(name);

          if (!s._callbackMap.hasOwnProperty(n)) {
            s._callbackMap[n] = [];
          }

          let list = s._callbackMap[n];

          for (let i = 0, len = list.length; i < len; i++) {
            let info = list[i];

            if (info && info.callback == callback && info.thisObj == thisObj) {
              return;
            }
          }

          let cb = CallbackInfo.create();
          cb.callback = callback;
          cb.thisObj = thisObj;
          cb.once = once;
          list[list.length] = cb;
          return true;
        }

        once(name, callback, thisObj) {
          return this.on(name, callback, thisObj, true);
        }

        off(name, callback, thisObj) {
          let n = String(name);

          if (this._callbackMap.hasOwnProperty(n)) {
            let list = this._callbackMap[n];

            for (let i = 0, len = list.length; i < len; i++) {
              let info = list[i];

              if (info && info.callback == callback && info.thisObj == thisObj) {
                info.recycle();
                list[i] = undefined;
                break;
              }
            }
          }
        }

        post(name, data) {
          let s = this;
          let n = String(name);

          if (s._callbackMap.hasOwnProperty(n)) {
            let list = s._callbackMap[n];
            let length = list.length;

            if (length == 0) {
              return;
            }

            let currentIndex = 0;

            for (var i = 0; i < length; i++) {
              let info = list[i];

              if (info) {
                let callback = info.callback;
                let thisObj = info.thisObj;

                if (info.once) {
                  info.recycle();
                  list[i] = undefined;
                } else {
                  if (currentIndex != i) {
                    list[currentIndex] = info;
                    list[i] = undefined;
                  }

                  currentIndex++;
                }

                callback.call(thisObj, {
                  data: data,
                  target: self
                });
              }
            }

            if (currentIndex != i) {
              length = list.length;

              while (i < length) {
                list[currentIndex++] = list[i++];
              }

              list.length = currentIndex;
            }
          }
        }

        rmvAll() {
          this._callbackMap = {};
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58e951af09e69b739ab78c3fa0dd0ce8df1f92d6.js.map