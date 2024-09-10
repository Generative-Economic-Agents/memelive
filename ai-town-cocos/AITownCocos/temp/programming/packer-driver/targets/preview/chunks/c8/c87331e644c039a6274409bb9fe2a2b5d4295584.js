System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = function (size) {
          return new LruCache(size);
        };

        function LruCache(size) {
          this.capacity = size | 0;
          this.map = Object.create(null);
          this.list = new DoublyLinkedList();
        }

        LruCache.prototype.get = function (key) {
          var node = this.map[key];
          if (node == null) return undefined;
          this.used(node);
          return node.val;
        };

        LruCache.prototype.set = function (key, val) {
          var node = this.map[key];

          if (node != null) {
            node.val = val;
          } else {
            if (!this.capacity) this.prune();
            if (!this.capacity) return false;
            node = new DoublyLinkedNode(key, val);
            this.map[key] = node;
            this.capacity--;
          }

          this.used(node);
          return true;
        };

        LruCache.prototype.used = function (node) {
          this.list.moveToFront(node);
        };

        LruCache.prototype.prune = function () {
          var node = this.list.pop();

          if (node != null) {
            delete this.map[node.key];
            this.capacity++;
          }
        };

        function DoublyLinkedList() {
          this.firstNode = null;
          this.lastNode = null;
        }

        DoublyLinkedList.prototype.moveToFront = function (node) {
          if (this.firstNode == node) return;
          this.remove(node);

          if (this.firstNode == null) {
            this.firstNode = node;
            this.lastNode = node;
            node.prev = null;
            node.next = null;
          } else {
            node.prev = null;
            node.next = this.firstNode;
            node.next.prev = node;
            this.firstNode = node;
          }
        };

        DoublyLinkedList.prototype.pop = function () {
          var lastNode = this.lastNode;

          if (lastNode != null) {
            this.remove(lastNode);
          }

          return lastNode;
        };

        DoublyLinkedList.prototype.remove = function (node) {
          if (this.firstNode == node) {
            this.firstNode = node.next;
          } else if (node.prev != null) {
            node.prev.next = node.next;
          }

          if (this.lastNode == node) {
            this.lastNode = node.prev;
          } else if (node.next != null) {
            node.next.prev = node.prev;
          }
        };

        function DoublyLinkedNode(key, val) {
          this.key = key;
          this.val = val;
          this.prev = null;
          this.next = null;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=c87331e644c039a6274409bb9fe2a2b5d4295584.js.map