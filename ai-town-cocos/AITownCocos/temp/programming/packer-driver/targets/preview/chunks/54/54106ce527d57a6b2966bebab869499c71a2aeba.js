System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, randomRangeInt, PromiseUtils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, offsetX, offsetY, AnimalsControl;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPromiseUtils(extras) {
    _reporterNs.report("PromiseUtils", "../StaticUtils/PromiseUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      PromiseUtils = _unresolved_2.PromiseUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de0adaH1+ZGiauaEYvNj29i", "AnimalsControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'randomRange', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);
      offsetX = -70.5;
      offsetY = 70;

      _export("AnimalsControl", AnimalsControl = (_dec = ccclass("AnimalsControl"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Number), _dec5 = property(Number), _dec6 = property(Number), _dec7 = property(Number), _dec8 = property(Number), _dec9 = property(Number), _dec10 = property(Number), _dec11 = property(Number), _dec(_class = (_class2 = class AnimalsControl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animal", _descriptor, this);

          _initializerDefineProperty(this, "animalFrame", _descriptor2, this);

          _initializerDefineProperty(this, "maxX", _descriptor3, this);

          _initializerDefineProperty(this, "minX", _descriptor4, this);

          _initializerDefineProperty(this, "maxY", _descriptor5, this);

          _initializerDefineProperty(this, "minY", _descriptor6, this);

          _initializerDefineProperty(this, "upIndex", _descriptor7, this);

          _initializerDefineProperty(this, "downIndex", _descriptor8, this);

          _initializerDefineProperty(this, "leftIndex", _descriptor9, this);

          _initializerDefineProperty(this, "rightIndex", _descriptor10, this);

          this.frameTime = 0;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(250);
            yield _this.frameSprite(0, 0, -10);
          })();
        }

        frameSprite(indexY, moveOffsetX, moveOffsetY) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (moveOffsetX === void 0) {
              moveOffsetX = 0;
            }

            if (moveOffsetY === void 0) {
              moveOffsetY = 0;
            }

            for (var index of [0, 1, 2, 3]) {
              yield _this2.setFrameMove(_this2.animalFrame, index, indexY, moveOffsetX, moveOffsetY);
            }

            yield _this2.randomAction();
          })();
        }

        setFrameMove(node, indexX, indexY, moveOffsetX, moveOffsetY) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (moveOffsetX === void 0) {
              moveOffsetX = 0;
            }

            if (moveOffsetY === void 0) {
              moveOffsetY = 0;
            }

            _this3.judgeRange();

            _this3.animalFrame.setPosition(indexX * offsetX, offsetY * indexY);

            _this3.animal.setPosition(_this3.animal.getPosition().x + moveOffsetX, _this3.animal.getPosition().y + moveOffsetY);

            yield (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(250);
          })();
        }

        randomAction() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var type = randomRangeInt(0, 5);

            switch (type) {
              case 0:
                yield _this4.frameSprite(Number(_this4.upIndex), 0, 10);
                break;

              case 1:
                yield _this4.frameSprite(Number(_this4.downIndex), 0, -10);
                break;

              case 2:
                yield _this4.frameSprite(Number(_this4.leftIndex), -10, 0);
                break;

              case 3:
                yield _this4.frameSprite(Number(_this4.rightIndex), 10, 0);
                break;

              case 4:
                yield _this4.frameSprite(4, 0, 0);
                break;

              default:
                break;
            }
          })();
        }

        judgeRange() {
          var pos = this.animal.getPosition();

          if (pos.x >= Number(this.maxX)) {
            this.animal.setPosition(Number(this.maxX), pos.y);
          }

          if (pos.y >= Number(this.maxY)) {
            this.animal.setPosition(pos.x, Number(this.maxY));
          }

          if (pos.x <= Number(this.minX)) {
            this.animal.setPosition(Number(this.minX), pos.y);
          }

          if (pos.y <= Number(this.minY)) {
            this.animal.setPosition(pos.x, Number(this.minY));
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animalFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxX", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minX", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxY", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "minY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "upIndex", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "downIndex", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "leftIndex", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rightIndex", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54106ce527d57a6b2966bebab869499c71a2aeba.js.map