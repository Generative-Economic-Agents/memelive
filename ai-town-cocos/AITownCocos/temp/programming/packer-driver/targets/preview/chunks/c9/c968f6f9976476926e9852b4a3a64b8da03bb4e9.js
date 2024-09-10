System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var escape, reEscape, reEvaluate, reInterpolate, templateSettings;
  return {
    setters: [function (_unresolved_) {
      escape = _unresolved_.default;
    }, function (_unresolved_2) {
      reEscape = _unresolved_2.default;
    }, function (_unresolved_3) {
      reEvaluate = _unresolved_3.default;
    }, function (_unresolved_4) {
      reInterpolate = _unresolved_4.default;
    }],
    execute: function () {
      /**
       * By default, the template delimiters used by lodash are like those in
       * embedded Ruby (ERB) as well as ES2015 template strings. Change the
       * following template settings to use alternative delimiters.
       *
       * @static
       * @memberOf _
       * @type {Object}
       */
      templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        'escape': reEscape,

        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        'evaluate': reEvaluate,

        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        'interpolate': reInterpolate,

        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        'variable': '',

        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        'imports': {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          '_': {
            'escape': escape
          }
        }
      };

      _export("default", templateSettings);
    }
  };
});
//# sourceMappingURL=c968f6f9976476926e9852b4a3a64b8da03bb4e9.js.map