System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Generated by CoffeeScript 1.12.7
        (function () {
          var NodeType,
              XMLAttribute,
              XMLElement,
              XMLNamedNodeMap,
              XMLNode,
              getValue,
              isFunction,
              isObject,
              ref,
              extend = function extend(child, parent) {
            for (var key in parent) {
              if (hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
              this.constructor = child;
            }

            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
          },
              hasProp = {}.hasOwnProperty;

          ref = require('./Utility'), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
          XMLNode = require('./XMLNode');
          NodeType = require('./NodeType');
          XMLAttribute = require('./XMLAttribute');
          XMLNamedNodeMap = require('./XMLNamedNodeMap');

          module.exports = XMLElement = function (superClass) {
            extend(XMLElement, superClass);

            function XMLElement(parent, name, attributes) {
              var child, j, len, ref1;

              XMLElement.__super__.constructor.call(this, parent);

              if (name == null) {
                throw new Error("Missing element name. " + this.debugInfo());
              }

              this.name = this.stringify.name(name);
              this.type = NodeType.Element;
              this.attribs = {};
              this.schemaTypeInfo = null;

              if (attributes != null) {
                this.attribute(attributes);
              }

              if (parent.type === NodeType.Document) {
                this.isRoot = true;
                this.documentObject = parent;
                parent.rootObject = this;

                if (parent.children) {
                  ref1 = parent.children;

                  for (j = 0, len = ref1.length; j < len; j++) {
                    child = ref1[j];

                    if (child.type === NodeType.DocType) {
                      child.name = this.name;
                      break;
                    }
                  }
                }
              }
            }

            Object.defineProperty(XMLElement.prototype, 'tagName', {
              get: function get() {
                return this.name;
              }
            });
            Object.defineProperty(XMLElement.prototype, 'namespaceURI', {
              get: function get() {
                return '';
              }
            });
            Object.defineProperty(XMLElement.prototype, 'prefix', {
              get: function get() {
                return '';
              }
            });
            Object.defineProperty(XMLElement.prototype, 'localName', {
              get: function get() {
                return this.name;
              }
            });
            Object.defineProperty(XMLElement.prototype, 'id', {
              get: function get() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
              }
            });
            Object.defineProperty(XMLElement.prototype, 'className', {
              get: function get() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
              }
            });
            Object.defineProperty(XMLElement.prototype, 'classList', {
              get: function get() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
              }
            });
            Object.defineProperty(XMLElement.prototype, 'attributes', {
              get: function get() {
                if (!this.attributeMap || !this.attributeMap.nodes) {
                  this.attributeMap = new XMLNamedNodeMap(this.attribs);
                }

                return this.attributeMap;
              }
            });

            XMLElement.prototype.clone = function () {
              var att, attName, clonedSelf, ref1;
              clonedSelf = Object.create(this);

              if (clonedSelf.isRoot) {
                clonedSelf.documentObject = null;
              }

              clonedSelf.attribs = {};
              ref1 = this.attribs;

              for (attName in ref1) {
                if (!hasProp.call(ref1, attName)) continue;
                att = ref1[attName];
                clonedSelf.attribs[attName] = att.clone();
              }

              clonedSelf.children = [];
              this.children.forEach(function (child) {
                var clonedChild;
                clonedChild = child.clone();
                clonedChild.parent = clonedSelf;
                return clonedSelf.children.push(clonedChild);
              });
              return clonedSelf;
            };

            XMLElement.prototype.attribute = function (name, value) {
              var attName, attValue;

              if (name != null) {
                name = getValue(name);
              }

              if (isObject(name)) {
                for (attName in name) {
                  if (!hasProp.call(name, attName)) continue;
                  attValue = name[attName];
                  this.attribute(attName, attValue);
                }
              } else {
                if (isFunction(value)) {
                  value = value.apply();
                }

                if (this.options.keepNullAttributes && value == null) {
                  this.attribs[name] = new XMLAttribute(this, name, "");
                } else if (value != null) {
                  this.attribs[name] = new XMLAttribute(this, name, value);
                }
              }

              return this;
            };

            XMLElement.prototype.removeAttribute = function (name) {
              var attName, j, len;

              if (name == null) {
                throw new Error("Missing attribute name. " + this.debugInfo());
              }

              name = getValue(name);

              if (Array.isArray(name)) {
                for (j = 0, len = name.length; j < len; j++) {
                  attName = name[j];
                  delete this.attribs[attName];
                }
              } else {
                delete this.attribs[name];
              }

              return this;
            };

            XMLElement.prototype.toString = function (options) {
              return this.options.writer.element(this, this.options.writer.filterOptions(options));
            };

            XMLElement.prototype.att = function (name, value) {
              return this.attribute(name, value);
            };

            XMLElement.prototype.a = function (name, value) {
              return this.attribute(name, value);
            };

            XMLElement.prototype.getAttribute = function (name) {
              if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name].value;
              } else {
                return null;
              }
            };

            XMLElement.prototype.setAttribute = function (name, value) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.getAttributeNode = function (name) {
              if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name];
              } else {
                return null;
              }
            };

            XMLElement.prototype.setAttributeNode = function (newAttr) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.removeAttributeNode = function (oldAttr) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.getElementsByTagName = function (name) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.getAttributeNS = function (namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.setAttributeNS = function (namespaceURI, qualifiedName, value) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.removeAttributeNS = function (namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.getAttributeNodeNS = function (namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.setAttributeNodeNS = function (newAttr) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.getElementsByTagNameNS = function (namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.hasAttribute = function (name) {
              return this.attribs.hasOwnProperty(name);
            };

            XMLElement.prototype.hasAttributeNS = function (namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.setIdAttribute = function (name, isId) {
              if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name].isId;
              } else {
                return isId;
              }
            };

            XMLElement.prototype.setIdAttributeNS = function (namespaceURI, localName, isId) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.setIdAttributeNode = function (idAttr, isId) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.getElementsByTagName = function (tagname) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.getElementsByTagNameNS = function (namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.getElementsByClassName = function (classNames) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            };

            XMLElement.prototype.isEqualNode = function (node) {
              var i, j, ref1;

              if (!XMLElement.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
                return false;
              }

              if (node.namespaceURI !== this.namespaceURI) {
                return false;
              }

              if (node.prefix !== this.prefix) {
                return false;
              }

              if (node.localName !== this.localName) {
                return false;
              }

              if (node.attribs.length !== this.attribs.length) {
                return false;
              }

              for (i = j = 0, ref1 = this.attribs.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
                if (!this.attribs[i].isEqualNode(node.attribs[i])) {
                  return false;
                }
              }

              return true;
            };

            return XMLElement;
          }(XMLNode);
        }).call(this); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './Utility': _req,
        './XMLNode': _req0,
        './NodeType': _req1,
        './XMLAttribute': _req2,
        './XMLNamedNodeMap': _req3
      }));
    }
  };
});
//# sourceMappingURL=1d68e42e04a1d1330f23a7d151d0e235ca84e8c9.js.map