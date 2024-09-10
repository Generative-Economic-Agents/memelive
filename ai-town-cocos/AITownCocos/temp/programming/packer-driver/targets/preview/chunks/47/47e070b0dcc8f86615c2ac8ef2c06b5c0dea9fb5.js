System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, PageView, Node, Vec3, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, menu, PageViewCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      PageView = _cc.PageView;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4dd10my3HJLmq+6wgDfrpLr", "PageViewCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Label', 'PageView', 'Color', 'Node', 'Vec3', 'Sprite', 'instantiate']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("PageViewCtrl", PageViewCtrl = (_dec = ccclass("PageViewCtrl"), _dec2 = menu('UI/PageViewCtrl'), _dec3 = property(Node), _dec4 = property(PageView), _dec5 = property(Label), _dec6 = property({
        type: PageView.Direction
      }), _dec(_class = _dec2(_class = (_class2 = (_class3 = class PageViewCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "curNum", _descriptor, this);

          _initializerDefineProperty(this, "curTotal", _descriptor2, this);

          _initializerDefineProperty(this, "pageTeample", _descriptor3, this);

          _initializerDefineProperty(this, "target", _descriptor4, this);

          _initializerDefineProperty(this, "label", _descriptor5, this);

          _initializerDefineProperty(this, "direction", _descriptor6, this);
        }

        _createPage() {
          var page = instantiate(this.pageTeample);
          page.name = "page_" + this.curNum;
          page.setPosition(new Vec3());
          return page;
        }

        onLoad() {
          // 设置的当前页面为 1
          this.target.setCurrentPageIndex(0);
        }

        update() {
          // 当前页面索引
          var extra = this.direction === PageView.Direction.Vertical ? '\n' : '';
          if (this.label) this.label.string = "\u7B2C" + extra + (this.target.getCurrentPageIndex() + 1) + (extra + "\u9875");
        } // 返回首页


        onJumpHome() {
          // 第二个参数为滚动所需时间，默认值为 0.3 秒
          this.target.scrollToPage(0);
        } // 添加页面


        plusPage(callback) {
          if (this.curNum >= this.curTotal) {
            return;
          }

          this.curNum++;

          if (callback) {
            callback();
          }
        } // 减少页面


        lessPageNum(callback) {
          if (this.curNum <= 0) {
            return;
          }

          this.curNum--;

          if (callback) {
            callback();
          }
        } // 添加页面


        onAddPage() {
          var createpage;
          this.plusPage(() => {
            createpage = this._createPage();
            this.target.addPage(createpage);
          });
          return createpage;
        } // 插入当前页面


        onInsertPage() {
          this.plusPage(() => {
            this.target.insertPage(this._createPage(), this.target.getCurrentPageIndex());
          });
        } // 移除最后一个页面


        onRemovePage() {
          this.lessPageNum(() => {
            var pages = this.target.getPages();
            this.target.removePage(pages[pages.length - 1]);

            if (this.curNum === 0) {
              this.onAddPage();
            }
          });
        } // 移除当前页面


        onRemovePageAtIndex() {
          this.lessPageNum(() => {
            this.target.removePageAtIndex(this.target.getCurrentPageIndex());

            if (this.curNum === 0) {
              this.onAddPage();
            }
          });
        } // 移除所有页面


        onRemoveAllPage() {
          this.target.removeAllPages();
          this.curNum = 0; // this.onAddPage();
        } // 监听事件


        onPageEvent(sender, eventType) {
          // // 翻页事件
          // if (eventType !== PageView.EventType.PAGE_TURNING) {
          //     return;
          // }
          console.log("当前所在的页面索引:" + sender.getCurrentPageIndex());
        }

      }, _class3.Direction = PageView.Direction, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "curNum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "curTotal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageTeample", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PageView.Direction.Horizontal;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=47e070b0dcc8f86615c2ac8ef2c06b5c0dea9fb5.js.map