System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _LRUCache, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var LinkedListNode =
        /** @class */
        function () {
          function LinkedListNode(key, value) {
            this.key = key;
            this.value = value;
          }

          return LinkedListNode;
        }();

        var LRUCache =
        /** @class */
        function () {
          function LRUCache(size) {
            this.nodeMap = {};
            this.size = 0;

            if (typeof size !== 'number' || size < 1) {
              throw new Error('Cache size can only be positive number');
            }

            this.sizeLimit = size;
          }

          Object.defineProperty(LRUCache.prototype, "length", {
            get: function get() {
              return this.size;
            },
            enumerable: true,
            configurable: true
          });

          LRUCache.prototype.prependToList = function (node) {
            if (!this.headerNode) {
              this.tailNode = node;
            } else {
              this.headerNode.prev = node;
              node.next = this.headerNode;
            }

            this.headerNode = node;
            this.size++;
          };

          LRUCache.prototype.removeFromTail = function () {
            if (!this.tailNode) {
              return undefined;
            }

            var node = this.tailNode;
            var prevNode = node.prev;

            if (prevNode) {
              prevNode.next = undefined;
            }

            node.prev = undefined;
            this.tailNode = prevNode;
            this.size--;
            return node;
          };

          LRUCache.prototype.detachFromList = function (node) {
            if (this.headerNode === node) {
              this.headerNode = node.next;
            }

            if (this.tailNode === node) {
              this.tailNode = node.prev;
            }

            if (node.prev) {
              node.prev.next = node.next;
            }

            if (node.next) {
              node.next.prev = node.prev;
            }

            node.next = undefined;
            node.prev = undefined;
            this.size--;
          };

          LRUCache.prototype.get = function (key) {
            if (this.nodeMap[key]) {
              var node = this.nodeMap[key];
              this.detachFromList(node);
              this.prependToList(node);
              return node.value;
            }
          };

          LRUCache.prototype.remove = function (key) {
            if (this.nodeMap[key]) {
              var node = this.nodeMap[key];
              this.detachFromList(node);
              delete this.nodeMap[key];
            }
          };

          LRUCache.prototype.put = function (key, value) {
            if (this.nodeMap[key]) {
              this.remove(key);
            } else if (this.size === this.sizeLimit) {
              var tailNode = this.removeFromTail();
              var key_1 = tailNode.key;
              delete this.nodeMap[key_1];
            }

            var newNode = new LinkedListNode(key, value);
            this.nodeMap[key] = newNode;
            this.prependToList(newNode);
          };

          LRUCache.prototype.empty = function () {
            var keys = Object.keys(this.nodeMap);

            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              var node = this.nodeMap[key];
              this.detachFromList(node);
              delete this.nodeMap[key];
            }
          };

          return LRUCache;
        }();

        exports.LRUCache = LRUCache; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _LRUCache = module.exports.LRUCache;
      }, {});
    }
  };
});
//# sourceMappingURL=e9e3cdccc90c0f2f6f4defecf9090cfca2eea27b.js.map