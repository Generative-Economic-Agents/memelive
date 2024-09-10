System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ObjDictionary, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21eedqlBl5JFp4vLAo8k4sk", "ObjDictionary", undefined);

      _export("default", ObjDictionary = class ObjDictionary {
        get container() {
          return this._container;
        }

        get length() {
          return this._length;
        }

        constructor(strongType) {
          if (strongType === void 0) {
            strongType = null;
          }

          this._strongType = void 0;
          //要求存储对象为强类型
          this._container = void 0;
          this._length = 0;
          this._strongType = strongType;
          this._container = new Object();
        }
        /**
         * 添加元素 
         * @param key
         * @param value
         * 
         */


        add(key, value) {
          if (this._strongType && !(value instanceof this._strongType)) {
            throw new Error("Obj Dictionary [add] Type Check Error, Need" + this._strongType); //return;
          } //如果是新添加才增加length


          if (!this.containsKey(key)) this._length++;
          this._container[key] = value;
        }
        /**
         * 根据键值获取对象 
         * @param key
         * @return 
         * 
         */


        get(key) {
          return this._container[key];
        }
        /**
         * 重新设置 
         * @param key
         * @param value
         * 
         */


        reset(key, value) {
          if (this._strongType && !(value instanceof this._strongType)) {
            throw new Error("Obj Dictionary [add] Type Check Error, Need" + this._strongType);
          }

          if (this.containsKey(key)) {
            this._container[key] = value;
          } else {
            console.log("ObjDictionary: warning you reset a not exist key");
          }
        }
        /**
         * 是否包含键 
         * @param key
         * @return 
         * 
         */


        containsKey(key) {
          return this._container.hasOwnProperty(key);
        }
        /**
         * 移除键 
         * @param key
         * 
         */


        remove(key) {
          if (this._container.hasOwnProperty(key)) {
            this._container[key] = null;
            delete this._container[key];
            this._length--;
          }
        }
        /**
         *清除操作 
         * 
         */


        clear() {
          this._length = 0;
          this._container = null;
          this._container = new Object();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbc971b4afb100cdcb88881421b6b6a2726f1842.js.map