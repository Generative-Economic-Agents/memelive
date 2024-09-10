System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _XmlNode, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var escapeAttribute = require('./escape-attribute').escapeAttribute;
        /**
         * Represents an XML node.
         * @api private
         */


        function XmlNode(name, children) {
          if (children === void 0) {
            children = [];
          }

          this.name = name;
          this.children = children;
          this.attributes = {};
        }

        XmlNode.prototype.addAttribute = function (name, value) {
          this.attributes[name] = value;
          return this;
        };

        XmlNode.prototype.addChildNode = function (child) {
          this.children.push(child);
          return this;
        };

        XmlNode.prototype.removeAttribute = function (name) {
          delete this.attributes[name];
          return this;
        };

        XmlNode.prototype.toString = function () {
          var hasChildren = Boolean(this.children.length);
          var xmlText = '<' + this.name; // add attributes

          var attributes = this.attributes;

          for (var i = 0, attributeNames = Object.keys(attributes); i < attributeNames.length; i++) {
            var attributeName = attributeNames[i];
            var attribute = attributes[attributeName];

            if (typeof attribute !== 'undefined' && attribute !== null) {
              xmlText += ' ' + attributeName + '=\"' + escapeAttribute('' + attribute) + '\"';
            }
          }

          return xmlText += !hasChildren ? '/>' : '>' + this.children.map(function (c) {
            return c.toString();
          }).join('') + '</' + this.name + '>';
        };
        /**
         * @api private
         */


        module.exports = {
          XmlNode: XmlNode
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _XmlNode = module.exports.XmlNode;
      }, () => ({
        './escape-attribute': _req
      }));
    }
  };
});
//# sourceMappingURL=14cf08caff0ee7b317a4c6e0dfff81bc8d77894e.js.map