System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NumberCounter, _crd;

  _export("NumberCounter", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c37541q+tNCfZ5/XssYIWbF", "NumberCounter", undefined);

      _export("NumberCounter", NumberCounter = class NumberCounter {
        constructor(config) {
          this.currentNumber = void 0;
          this.startNumber = void 0;
          this.endNumber = void 0;
          this.timer = void 0;
          this.isIncreasing = void 0;
          this.duration = void 0;
          this.onUpdate = void 0;
          this.onComplete = void 0;
          this.currentNumber = config.startNumber;
          this.startNumber = config.startNumber;
          this.endNumber = config.endNumber;
          this.timer = 0;
          this.isIncreasing = config.endNumber > config.startNumber;
          this.duration = config.duration;
          this.onUpdate = config.onUpdate;
          this.onComplete = config.onComplete;
        }

        update(dt) {
          if (this.timer < this.duration) {
            var delta = Math.abs(this.endNumber - this.startNumber) * dt / this.duration;
            this.currentNumber += this.isIncreasing ? delta : -delta;
            this.timer += dt;

            if (this.isIncreasing && this.currentNumber > this.endNumber || !this.isIncreasing && this.currentNumber < this.endNumber) {
              this.currentNumber = this.endNumber;
            }

            if (this.onUpdate) {
              this.onUpdate(this.currentNumber);
            }

            if (this.isIncreasing && this.currentNumber === this.endNumber || !this.isIncreasing && this.currentNumber === this.startNumber) {
              if (this.onComplete) {
                this.onComplete();
              }

              this.isIncreasing = !this.isIncreasing;
              this.timer = 0;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf3d7cdb28ebe71c535a900e3159e10134c24f39.js.map