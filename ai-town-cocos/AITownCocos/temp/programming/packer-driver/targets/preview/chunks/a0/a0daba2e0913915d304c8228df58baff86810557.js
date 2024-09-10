System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Sprite, ComponentsUtils, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "780e49w0C9IsJhg4m4w+5ZN", "ComponentsUtils", undefined);

      __checkObsolete__(['Button', 'Sprite']);

      _export("default", ComponentsUtils = class ComponentsUtils {
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

        static setGray(node, state) {
          var btn = node.getComponent(Button);

          if (btn) {
            btn.enabled = !state;
          }

          var s = node.getComponentsInChildren(Sprite);

          for (var i = 0; i < s.length; i++) {
            s[i].grayscale = state;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0daba2e0913915d304c8228df58baff86810557.js.map