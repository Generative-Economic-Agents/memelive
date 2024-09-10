System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TiledMap, Vec2, AStarStep, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AStar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAStarStep(extras) {
    _reporterNs.report("AStarStep", "./AStarStep", _context.meta, extras);
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
      TiledMap = _cc.TiledMap;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      AStarStep = _unresolved_2.AStarStep;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c3884wl0lJebT2DzEens7h", "AStar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'TiledLayer', 'TiledMap', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AStar", AStar = (_dec = ccclass('AStar'), _dec2 = property(TiledMap), _dec(_class = (_class2 = class AStar extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "map", _descriptor, this);

          this._open = [];
          this._closed = [];
          this._layerBarrier = void 0;
        }

        start() {
          this._layerBarrier = this.map.getLayer('building');
        }

        update(deltaTime) {}

        _indexOfStepArray(value, stepArray) {
          for (var i = 0; i < stepArray.length; ++i) {
            if (value.equals(stepArray[i].position)) {
              return i;
            }
          }

          return -1;
        }

        _insertToOpen(step) {
          var stepF = step.f;
          var length = this._open.length;
          var i = 0;

          for (; i < length; ++i) {
            if (stepF <= this._open[i].f) {
              break;
            }
          } // insert to index i


          this._open.splice(i, 0, step);
        }

        moveToward(start, finish) {
          this._closed = [];
          this._open = [];
          var paths = []; // cc.log('find start: ' + start + ' to: ' + finish);

          this._open.push(new (_crd && AStarStep === void 0 ? (_reportPossibleCrUseOfAStarStep({
            error: Error()
          }), AStarStep) : AStarStep)(start));

          var pathFound = false;

          do {
            // cc.log('==============================================================');
            var currentStep = this._open.shift(); // cc.log('currentStep: ' + currentStep);


            this._closed.push(currentStep);

            if (currentStep.position.equals(finish)) {
              // cc.log('finish :P');
              pathFound = true;
              var tmpStep = currentStep;

              do {
                paths.unshift(tmpStep.position);
                tmpStep = tmpStep.last;
              } while (tmpStep !== null);

              this._open = [];
              this._closed = [];
              break;
            }

            var borderPositions = this._borderMovablePoints(currentStep.position);

            for (var i = 0; i < borderPositions.length; ++i) {
              var borderPosition = borderPositions[i]; // cc.log('check: ' + borderPosition);
              // Check if the step isn't already in the closed set

              if (this._indexOfStepArray(borderPosition, this._closed) != -1) {
                // cc.log('had in closed: ' + borderPosition);
                // cc.log('remove check position: ' + borderPosition);
                borderPositions.splice(i, 1);
                i--;
                continue;
              }

              var step = new (_crd && AStarStep === void 0 ? (_reportPossibleCrUseOfAStarStep({
                error: Error()
              }), AStarStep) : AStarStep)(borderPosition);

              var moveCost = this._costToMove(borderPosition, finish);

              var index = this._indexOfStepArray(borderPosition, this._open);

              if (index == -1) {
                step.last = currentStep;
                step.g = currentStep.g + moveCost;
                var distancePoint = new Vec2(borderPosition.x - finish.x, borderPosition.y - finish.y);
                step.h = Math.abs(distancePoint.x) + Math.abs(distancePoint.y);

                this._insertToOpen(step);
              } else {
                // cc.log('had in open: ' + step.toString());
                step = this._open[index];

                if (currentStep.g + moveCost < step.g) {
                  // cc.log('re insert into open: ' + step.toString());
                  step.g = currentStep.g + moveCost; // re insert

                  this._open.splice(index, 1);

                  this._insertToOpen(step);
                }
              }
            }
          } while (this._open.length > 0);

          return paths;
        }

        _costToMove(positionLeft, positionRight) {
          return 1; // if (this.moveType == AStarMoveType.EIGHT_DIRECTION) {
          //     /**
          //      * diagonal length: 1.41 ≈ Math.sqrt(x * x + y * y)
          //      * line length: 1
          //      * 
          //      * cost = length * 10
          //      * diagonal cost = 14 ≈ 14.1
          //      * cost line = 10 = 1 * 10
          //      */
          //     return (positionLeft.x != positionRight.x) && (positionLeft.y != positionRight.y) ? 14 : 10;
          // } else {
          //     return 1;
          // }
        }

        _borderMovablePoints(position) {
          var results = [];
          var hasTop = false;
          var hasBottom = false;
          var hasLeft = false;
          var hasRight = false; // top

          var top = new Vec2(position.x, position.y - 1);

          if (top.y >= 0 && this._layerBarrier.getTileGIDAt(top.x, top.y) === 0) {
            // cc.log('top: ' + top);
            results.push(top);
            hasTop = true;
          } // bottom


          var bottom = new Vec2(position.x, position.y + 1);

          if (bottom.y < this._layerBarrier.layerSize.height && this._layerBarrier.getTileGIDAt(bottom.x, bottom.y) === 0) {
            // cc.log('bottom: ' + bottom);
            results.push(bottom);
            hasBottom = true;
          } // left


          var left = new Vec2(position.x - 1, position.y);

          if (left.x >= 0 && this._layerBarrier.getTileGIDAt(left.x, left.y) === 0) {
            // cc.log('left: ' + left);
            results.push(left);
            hasLeft = true;
          } // right


          var right = new Vec2(position.x + 1, position.y);

          if (right.x < this._layerBarrier.layerSize.width && this._layerBarrier.getTileGIDAt(right.x, right.y) === 0) {
            // cc.log('right: ' + right);
            results.push(right);
            hasRight = true;
          }

          return results;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "map", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8834db5ceaa1e875a024a0f8c71f38dbc93d19e.js.map