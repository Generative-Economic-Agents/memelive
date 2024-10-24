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
        'use strict';

        module.exports = function generate_properties(it, $keyword, $ruleType) {
          var out = ' ';
          var $lvl = it.level;
          var $dataLvl = it.dataLevel;
          var $schema = it.schema[$keyword];
          var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
          var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
          var $breakOnError = !it.opts.allErrors;
          var $data = 'data' + ($dataLvl || '');
          var $errs = 'errs__' + $lvl;
          var $it = it.util.copy(it);
          var $closingBraces = '';
          $it.level++;
          var $nextValid = 'valid' + $it.level;
          var $key = 'key' + $lvl,
              $idx = 'idx' + $lvl,
              $dataNxt = $it.dataLevel = it.dataLevel + 1,
              $nextData = 'data' + $dataNxt,
              $dataProperties = 'dataProperties' + $lvl;
          var $schemaKeys = Object.keys($schema || {}).filter(notProto),
              $pProperties = it.schema.patternProperties || {},
              $pPropertyKeys = Object.keys($pProperties).filter(notProto),
              $aProperties = it.schema.additionalProperties,
              $someProperties = $schemaKeys.length || $pPropertyKeys.length,
              $noAdditional = $aProperties === false,
              $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
              $removeAdditional = it.opts.removeAdditional,
              $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
              $ownProperties = it.opts.ownProperties,
              $currentBaseId = it.baseId;
          var $required = it.schema.required;

          if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) {
            var $requiredHash = it.util.toHash($required);
          }

          function notProto(p) {
            return p !== '__proto__';
          }

          out += 'var ' + $errs + ' = errors;var ' + $nextValid + ' = true;';

          if ($ownProperties) {
            out += ' var ' + $dataProperties + ' = undefined;';
          }

          if ($checkAdditional) {
            if ($ownProperties) {
              out += ' ' + $dataProperties + ' = ' + $dataProperties + ' || Object.keys(' + $data + '); for (var ' + $idx + '=0; ' + $idx + '<' + $dataProperties + '.length; ' + $idx + '++) { var ' + $key + ' = ' + $dataProperties + '[' + $idx + ']; ';
            } else {
              out += ' for (var ' + $key + ' in ' + $data + ') { ';
            }

            if ($someProperties) {
              out += ' var isAdditional' + $lvl + ' = !(false ';

              if ($schemaKeys.length) {
                if ($schemaKeys.length > 8) {
                  out += ' || validate.schema' + $schemaPath + '.hasOwnProperty(' + $key + ') ';
                } else {
                  var arr1 = $schemaKeys;

                  if (arr1) {
                    var $propertyKey,
                        i1 = -1,
                        l1 = arr1.length - 1;

                    while (i1 < l1) {
                      $propertyKey = arr1[i1 += 1];
                      out += ' || ' + $key + ' == ' + it.util.toQuotedString($propertyKey) + ' ';
                    }
                  }
                }
              }

              if ($pPropertyKeys.length) {
                var arr2 = $pPropertyKeys;

                if (arr2) {
                  var $pProperty,
                      $i = -1,
                      l2 = arr2.length - 1;

                  while ($i < l2) {
                    $pProperty = arr2[$i += 1];
                    out += ' || ' + it.usePattern($pProperty) + '.test(' + $key + ') ';
                  }
                }
              }

              out += ' ); if (isAdditional' + $lvl + ') { ';
            }

            if ($removeAdditional == 'all') {
              out += ' delete ' + $data + '[' + $key + ']; ';
            } else {
              var $currentErrorPath = it.errorPath;
              var $additionalProperty = '\' + ' + $key + ' + \'';

              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              }

              if ($noAdditional) {
                if ($removeAdditional) {
                  out += ' delete ' + $data + '[' + $key + ']; ';
                } else {
                  out += ' ' + $nextValid + ' = false; ';
                  var $currErrSchemaPath = $errSchemaPath;
                  $errSchemaPath = it.errSchemaPath + '/additionalProperties';
                  var $$outStack = $$outStack || [];
                  $$outStack.push(out);
                  out = '';
                  /* istanbul ignore else */

                  if (it.createErrors !== false) {
                    out += ' { keyword: \'' + 'additionalProperties' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { additionalProperty: \'' + $additionalProperty + '\' } ';

                    if (it.opts.messages !== false) {
                      out += ' , message: \'';

                      if (it.opts._errorDataPathProperty) {
                        out += 'is an invalid additional property';
                      } else {
                        out += 'should NOT have additional properties';
                      }

                      out += '\' ';
                    }

                    if (it.opts.verbose) {
                      out += ' , schema: false , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
                    }

                    out += ' } ';
                  } else {
                    out += ' {} ';
                  }

                  var __err = out;
                  out = $$outStack.pop();

                  if (!it.compositeRule && $breakOnError) {
                    /* istanbul ignore if */
                    if (it.async) {
                      out += ' throw new ValidationError([' + __err + ']); ';
                    } else {
                      out += ' validate.errors = [' + __err + ']; return false; ';
                    }
                  } else {
                    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                  }

                  $errSchemaPath = $currErrSchemaPath;

                  if ($breakOnError) {
                    out += ' break; ';
                  }
                }
              } else if ($additionalIsSchema) {
                if ($removeAdditional == 'failing') {
                  out += ' var ' + $errs + ' = errors;  ';
                  var $wasComposite = it.compositeRule;
                  it.compositeRule = $it.compositeRule = true;
                  $it.schema = $aProperties;
                  $it.schemaPath = it.schemaPath + '.additionalProperties';
                  $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
                  $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
                  var $passData = $data + '[' + $key + ']';
                  $it.dataPathArr[$dataNxt] = $key;
                  var $code = it.validate($it);
                  $it.baseId = $currentBaseId;

                  if (it.util.varOccurences($code, $nextData) < 2) {
                    out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
                  } else {
                    out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
                  }

                  out += ' if (!' + $nextValid + ') { errors = ' + $errs + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + $data + '[' + $key + ']; }  ';
                  it.compositeRule = $it.compositeRule = $wasComposite;
                } else {
                  $it.schema = $aProperties;
                  $it.schemaPath = it.schemaPath + '.additionalProperties';
                  $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
                  $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
                  var $passData = $data + '[' + $key + ']';
                  $it.dataPathArr[$dataNxt] = $key;
                  var $code = it.validate($it);
                  $it.baseId = $currentBaseId;

                  if (it.util.varOccurences($code, $nextData) < 2) {
                    out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
                  } else {
                    out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
                  }

                  if ($breakOnError) {
                    out += ' if (!' + $nextValid + ') break; ';
                  }
                }
              }

              it.errorPath = $currentErrorPath;
            }

            if ($someProperties) {
              out += ' } ';
            }

            out += ' }  ';

            if ($breakOnError) {
              out += ' if (' + $nextValid + ') { ';
              $closingBraces += '}';
            }
          }

          var $useDefaults = it.opts.useDefaults && !it.compositeRule;

          if ($schemaKeys.length) {
            var arr3 = $schemaKeys;

            if (arr3) {
              var $propertyKey,
                  i3 = -1,
                  l3 = arr3.length - 1;

              while (i3 < l3) {
                $propertyKey = arr3[i3 += 1];
                var $sch = $schema[$propertyKey];

                if (it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
                  var $prop = it.util.getProperty($propertyKey),
                      $passData = $data + $prop,
                      $hasDefault = $useDefaults && $sch.default !== undefined;
                  $it.schema = $sch;
                  $it.schemaPath = $schemaPath + $prop;
                  $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
                  $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
                  $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
                  var $code = it.validate($it);
                  $it.baseId = $currentBaseId;

                  if (it.util.varOccurences($code, $nextData) < 2) {
                    $code = it.util.varReplace($code, $nextData, $passData);
                    var $useData = $passData;
                  } else {
                    var $useData = $nextData;
                    out += ' var ' + $nextData + ' = ' + $passData + '; ';
                  }

                  if ($hasDefault) {
                    out += ' ' + $code + ' ';
                  } else {
                    if ($requiredHash && $requiredHash[$propertyKey]) {
                      out += ' if ( ' + $useData + ' === undefined ';

                      if ($ownProperties) {
                        out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
                      }

                      out += ') { ' + $nextValid + ' = false; ';
                      var $currentErrorPath = it.errorPath,
                          $currErrSchemaPath = $errSchemaPath,
                          $missingProperty = it.util.escapeQuotes($propertyKey);

                      if (it.opts._errorDataPathProperty) {
                        it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                      }

                      $errSchemaPath = it.errSchemaPath + '/required';
                      var $$outStack = $$outStack || [];
                      $$outStack.push(out);
                      out = '';
                      /* istanbul ignore else */

                      if (it.createErrors !== false) {
                        out += ' { keyword: \'' + 'required' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { missingProperty: \'' + $missingProperty + '\' } ';

                        if (it.opts.messages !== false) {
                          out += ' , message: \'';

                          if (it.opts._errorDataPathProperty) {
                            out += 'is a required property';
                          } else {
                            out += 'should have required property \\\'' + $missingProperty + '\\\'';
                          }

                          out += '\' ';
                        }

                        if (it.opts.verbose) {
                          out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
                        }

                        out += ' } ';
                      } else {
                        out += ' {} ';
                      }

                      var __err = out;
                      out = $$outStack.pop();

                      if (!it.compositeRule && $breakOnError) {
                        /* istanbul ignore if */
                        if (it.async) {
                          out += ' throw new ValidationError([' + __err + ']); ';
                        } else {
                          out += ' validate.errors = [' + __err + ']; return false; ';
                        }
                      } else {
                        out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                      }

                      $errSchemaPath = $currErrSchemaPath;
                      it.errorPath = $currentErrorPath;
                      out += ' } else { ';
                    } else {
                      if ($breakOnError) {
                        out += ' if ( ' + $useData + ' === undefined ';

                        if ($ownProperties) {
                          out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
                        }

                        out += ') { ' + $nextValid + ' = true; } else { ';
                      } else {
                        out += ' if (' + $useData + ' !== undefined ';

                        if ($ownProperties) {
                          out += ' &&   Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
                        }

                        out += ' ) { ';
                      }
                    }

                    out += ' ' + $code + ' } ';
                  }
                }

                if ($breakOnError) {
                  out += ' if (' + $nextValid + ') { ';
                  $closingBraces += '}';
                }
              }
            }
          }

          if ($pPropertyKeys.length) {
            var arr4 = $pPropertyKeys;

            if (arr4) {
              var $pProperty,
                  i4 = -1,
                  l4 = arr4.length - 1;

              while (i4 < l4) {
                $pProperty = arr4[i4 += 1];
                var $sch = $pProperties[$pProperty];

                if (it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
                  $it.schema = $sch;
                  $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
                  $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);

                  if ($ownProperties) {
                    out += ' ' + $dataProperties + ' = ' + $dataProperties + ' || Object.keys(' + $data + '); for (var ' + $idx + '=0; ' + $idx + '<' + $dataProperties + '.length; ' + $idx + '++) { var ' + $key + ' = ' + $dataProperties + '[' + $idx + ']; ';
                  } else {
                    out += ' for (var ' + $key + ' in ' + $data + ') { ';
                  }

                  out += ' if (' + it.usePattern($pProperty) + '.test(' + $key + ')) { ';
                  $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
                  var $passData = $data + '[' + $key + ']';
                  $it.dataPathArr[$dataNxt] = $key;
                  var $code = it.validate($it);
                  $it.baseId = $currentBaseId;

                  if (it.util.varOccurences($code, $nextData) < 2) {
                    out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
                  } else {
                    out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
                  }

                  if ($breakOnError) {
                    out += ' if (!' + $nextValid + ') break; ';
                  }

                  out += ' } ';

                  if ($breakOnError) {
                    out += ' else ' + $nextValid + ' = true; ';
                  }

                  out += ' }  ';

                  if ($breakOnError) {
                    out += ' if (' + $nextValid + ') { ';
                    $closingBraces += '}';
                  }
                }
              }
            }
          }

          if ($breakOnError) {
            out += ' ' + $closingBraces + ' if (' + $errs + ' == errors) {';
          }

          return out;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=2ece8fdf1072cc84ecc1d67a67374e651c1d9777.js.map