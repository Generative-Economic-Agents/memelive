System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var util = require('../util');

        var XmlNode = require('./xml-node').XmlNode;

        var XmlText = require('./xml-text').XmlText;

        function XmlBuilder() {}

        XmlBuilder.prototype.toXML = function (params, shape, rootElement, noEmpty) {
          var xml = new XmlNode(rootElement);
          applyNamespaces(xml, shape, true);
          serialize(xml, params, shape);
          return xml.children.length > 0 || noEmpty ? xml.toString() : '';
        };

        function serialize(xml, value, shape) {
          switch (shape.type) {
            case 'structure':
              return serializeStructure(xml, value, shape);

            case 'map':
              return serializeMap(xml, value, shape);

            case 'list':
              return serializeList(xml, value, shape);

            default:
              return serializeScalar(xml, value, shape);
          }
        }

        function serializeStructure(xml, params, shape) {
          util.arrayEach(shape.memberNames, function (memberName) {
            var memberShape = shape.members[memberName];
            if (memberShape.location !== 'body') return;
            var value = params[memberName];
            var name = memberShape.name;

            if (value !== undefined && value !== null) {
              if (memberShape.isXmlAttribute) {
                xml.addAttribute(name, value);
              } else if (memberShape.flattened) {
                serialize(xml, value, memberShape);
              } else {
                var element = new XmlNode(name);
                xml.addChildNode(element);
                applyNamespaces(element, memberShape);
                serialize(element, value, memberShape);
              }
            }
          });
        }

        function serializeMap(xml, map, shape) {
          var xmlKey = shape.key.name || 'key';
          var xmlValue = shape.value.name || 'value';
          util.each(map, function (key, value) {
            var entry = new XmlNode(shape.flattened ? shape.name : 'entry');
            xml.addChildNode(entry);
            var entryKey = new XmlNode(xmlKey);
            var entryValue = new XmlNode(xmlValue);
            entry.addChildNode(entryKey);
            entry.addChildNode(entryValue);
            serialize(entryKey, key, shape.key);
            serialize(entryValue, value, shape.value);
          });
        }

        function serializeList(xml, list, shape) {
          if (shape.flattened) {
            util.arrayEach(list, function (value) {
              var name = shape.member.name || shape.name;
              var element = new XmlNode(name);
              xml.addChildNode(element);
              serialize(element, value, shape.member);
            });
          } else {
            util.arrayEach(list, function (value) {
              var name = shape.member.name || 'member';
              var element = new XmlNode(name);
              xml.addChildNode(element);
              serialize(element, value, shape.member);
            });
          }
        }

        function serializeScalar(xml, value, shape) {
          xml.addChildNode(new XmlText(shape.toWireFormat(value)));
        }

        function applyNamespaces(xml, shape, isRoot) {
          var uri,
              prefix = 'xmlns';

          if (shape.xmlNamespaceUri) {
            uri = shape.xmlNamespaceUri;
            if (shape.xmlNamespacePrefix) prefix += ':' + shape.xmlNamespacePrefix;
          } else if (isRoot && shape.api.xmlNamespaceUri) {
            uri = shape.api.xmlNamespaceUri;
          }

          if (uri) xml.addAttribute(prefix, uri);
        }
        /**
         * @api private
         */


        module.exports = XmlBuilder; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../util': _req,
        './xml-node': _req0,
        './xml-text': _req1
      }));
    }
  };
});
//# sourceMappingURL=26e761d78bdb2578a3b67832774358031e4ebcbb.js.map