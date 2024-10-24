System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-08-24',
          endpointPrefix: 'waf',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'WAF',
          serviceFullName: 'AWS WAF',
          serviceId: 'WAF',
          signatureVersion: 'v4',
          targetPrefix: 'AWSWAF_20150824',
          uid: 'waf-2015-08-24'
        },
        operations: {
          CreateByteMatchSet: {
            input: {
              type: 'structure',
              required: ['Name', 'ChangeToken'],
              members: {
                Name: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ByteMatchSet: {
                  shape: 'S5'
                },
                ChangeToken: {}
              }
            }
          },
          CreateGeoMatchSet: {
            input: {
              type: 'structure',
              required: ['Name', 'ChangeToken'],
              members: {
                Name: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GeoMatchSet: {
                  shape: 'Sh'
                },
                ChangeToken: {}
              }
            }
          },
          CreateIPSet: {
            input: {
              type: 'structure',
              required: ['Name', 'ChangeToken'],
              members: {
                Name: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IPSet: {
                  shape: 'So'
                },
                ChangeToken: {}
              }
            }
          },
          CreateRateBasedRule: {
            input: {
              type: 'structure',
              required: ['Name', 'MetricName', 'RateKey', 'RateLimit', 'ChangeToken'],
              members: {
                Name: {},
                MetricName: {},
                RateKey: {},
                RateLimit: {
                  type: 'long'
                },
                ChangeToken: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rule: {
                  shape: 'S12'
                },
                ChangeToken: {}
              }
            }
          },
          CreateRegexMatchSet: {
            input: {
              type: 'structure',
              required: ['Name', 'ChangeToken'],
              members: {
                Name: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegexMatchSet: {
                  shape: 'S19'
                },
                ChangeToken: {}
              }
            }
          },
          CreateRegexPatternSet: {
            input: {
              type: 'structure',
              required: ['Name', 'ChangeToken'],
              members: {
                Name: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegexPatternSet: {
                  shape: 'S1e'
                },
                ChangeToken: {}
              }
            }
          },
          CreateRule: {
            input: {
              type: 'structure',
              required: ['Name', 'MetricName', 'ChangeToken'],
              members: {
                Name: {},
                MetricName: {},
                ChangeToken: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rule: {
                  shape: 'S1j'
                },
                ChangeToken: {}
              }
            }
          },
          CreateRuleGroup: {
            input: {
              type: 'structure',
              required: ['Name', 'MetricName', 'ChangeToken'],
              members: {
                Name: {},
                MetricName: {},
                ChangeToken: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RuleGroup: {
                  shape: 'S1m'
                },
                ChangeToken: {}
              }
            }
          },
          CreateSizeConstraintSet: {
            input: {
              type: 'structure',
              required: ['Name', 'ChangeToken'],
              members: {
                Name: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SizeConstraintSet: {
                  shape: 'S1p'
                },
                ChangeToken: {}
              }
            }
          },
          CreateSqlInjectionMatchSet: {
            input: {
              type: 'structure',
              required: ['Name', 'ChangeToken'],
              members: {
                Name: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SqlInjectionMatchSet: {
                  shape: 'S1w'
                },
                ChangeToken: {}
              }
            }
          },
          CreateWebACL: {
            input: {
              type: 'structure',
              required: ['Name', 'MetricName', 'DefaultAction', 'ChangeToken'],
              members: {
                Name: {},
                MetricName: {},
                DefaultAction: {
                  shape: 'S20'
                },
                ChangeToken: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WebACL: {
                  shape: 'S23'
                },
                ChangeToken: {}
              }
            }
          },
          CreateWebACLMigrationStack: {
            input: {
              type: 'structure',
              required: ['WebACLId', 'S3BucketName', 'IgnoreUnsupportedType'],
              members: {
                WebACLId: {},
                S3BucketName: {},
                IgnoreUnsupportedType: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['S3ObjectUrl'],
              members: {
                S3ObjectUrl: {}
              }
            }
          },
          CreateXssMatchSet: {
            input: {
              type: 'structure',
              required: ['Name', 'ChangeToken'],
              members: {
                Name: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                XssMatchSet: {
                  shape: 'S2k'
                },
                ChangeToken: {}
              }
            }
          },
          DeleteByteMatchSet: {
            input: {
              type: 'structure',
              required: ['ByteMatchSetId', 'ChangeToken'],
              members: {
                ByteMatchSetId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteGeoMatchSet: {
            input: {
              type: 'structure',
              required: ['GeoMatchSetId', 'ChangeToken'],
              members: {
                GeoMatchSetId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteIPSet: {
            input: {
              type: 'structure',
              required: ['IPSetId', 'ChangeToken'],
              members: {
                IPSetId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteLoggingConfiguration: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePermissionPolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRateBasedRule: {
            input: {
              type: 'structure',
              required: ['RuleId', 'ChangeToken'],
              members: {
                RuleId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteRegexMatchSet: {
            input: {
              type: 'structure',
              required: ['RegexMatchSetId', 'ChangeToken'],
              members: {
                RegexMatchSetId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteRegexPatternSet: {
            input: {
              type: 'structure',
              required: ['RegexPatternSetId', 'ChangeToken'],
              members: {
                RegexPatternSetId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteRule: {
            input: {
              type: 'structure',
              required: ['RuleId', 'ChangeToken'],
              members: {
                RuleId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteRuleGroup: {
            input: {
              type: 'structure',
              required: ['RuleGroupId', 'ChangeToken'],
              members: {
                RuleGroupId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteSizeConstraintSet: {
            input: {
              type: 'structure',
              required: ['SizeConstraintSetId', 'ChangeToken'],
              members: {
                SizeConstraintSetId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteSqlInjectionMatchSet: {
            input: {
              type: 'structure',
              required: ['SqlInjectionMatchSetId', 'ChangeToken'],
              members: {
                SqlInjectionMatchSetId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteWebACL: {
            input: {
              type: 'structure',
              required: ['WebACLId', 'ChangeToken'],
              members: {
                WebACLId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          DeleteXssMatchSet: {
            input: {
              type: 'structure',
              required: ['XssMatchSetId', 'ChangeToken'],
              members: {
                XssMatchSetId: {},
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          GetByteMatchSet: {
            input: {
              type: 'structure',
              required: ['ByteMatchSetId'],
              members: {
                ByteMatchSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ByteMatchSet: {
                  shape: 'S5'
                }
              }
            }
          },
          GetChangeToken: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          GetChangeTokenStatus: {
            input: {
              type: 'structure',
              required: ['ChangeToken'],
              members: {
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeTokenStatus: {}
              }
            }
          },
          GetGeoMatchSet: {
            input: {
              type: 'structure',
              required: ['GeoMatchSetId'],
              members: {
                GeoMatchSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GeoMatchSet: {
                  shape: 'Sh'
                }
              }
            }
          },
          GetIPSet: {
            input: {
              type: 'structure',
              required: ['IPSetId'],
              members: {
                IPSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IPSet: {
                  shape: 'So'
                }
              }
            }
          },
          GetLoggingConfiguration: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfiguration: {
                  shape: 'S3s'
                }
              }
            }
          },
          GetPermissionPolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            }
          },
          GetRateBasedRule: {
            input: {
              type: 'structure',
              required: ['RuleId'],
              members: {
                RuleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Rule: {
                  shape: 'S12'
                }
              }
            }
          },
          GetRateBasedRuleManagedKeys: {
            input: {
              type: 'structure',
              required: ['RuleId'],
              members: {
                RuleId: {},
                NextMarker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ManagedKeys: {
                  type: 'list',
                  member: {}
                },
                NextMarker: {}
              }
            }
          },
          GetRegexMatchSet: {
            input: {
              type: 'structure',
              required: ['RegexMatchSetId'],
              members: {
                RegexMatchSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegexMatchSet: {
                  shape: 'S19'
                }
              }
            }
          },
          GetRegexPatternSet: {
            input: {
              type: 'structure',
              required: ['RegexPatternSetId'],
              members: {
                RegexPatternSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegexPatternSet: {
                  shape: 'S1e'
                }
              }
            }
          },
          GetRule: {
            input: {
              type: 'structure',
              required: ['RuleId'],
              members: {
                RuleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Rule: {
                  shape: 'S1j'
                }
              }
            }
          },
          GetRuleGroup: {
            input: {
              type: 'structure',
              required: ['RuleGroupId'],
              members: {
                RuleGroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RuleGroup: {
                  shape: 'S1m'
                }
              }
            }
          },
          GetSampledRequests: {
            input: {
              type: 'structure',
              required: ['WebAclId', 'RuleId', 'TimeWindow', 'MaxItems'],
              members: {
                WebAclId: {},
                RuleId: {},
                TimeWindow: {
                  shape: 'S4e'
                },
                MaxItems: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SampledRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Request', 'Weight'],
                    members: {
                      Request: {
                        type: 'structure',
                        members: {
                          ClientIP: {},
                          Country: {},
                          URI: {},
                          Method: {},
                          HTTPVersion: {},
                          Headers: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Name: {},
                                Value: {}
                              }
                            }
                          }
                        }
                      },
                      Weight: {
                        type: 'long'
                      },
                      Timestamp: {
                        type: 'timestamp'
                      },
                      Action: {},
                      RuleWithinRuleGroup: {}
                    }
                  }
                },
                PopulationSize: {
                  type: 'long'
                },
                TimeWindow: {
                  shape: 'S4e'
                }
              }
            }
          },
          GetSizeConstraintSet: {
            input: {
              type: 'structure',
              required: ['SizeConstraintSetId'],
              members: {
                SizeConstraintSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SizeConstraintSet: {
                  shape: 'S1p'
                }
              }
            }
          },
          GetSqlInjectionMatchSet: {
            input: {
              type: 'structure',
              required: ['SqlInjectionMatchSetId'],
              members: {
                SqlInjectionMatchSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SqlInjectionMatchSet: {
                  shape: 'S1w'
                }
              }
            }
          },
          GetWebACL: {
            input: {
              type: 'structure',
              required: ['WebACLId'],
              members: {
                WebACLId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WebACL: {
                  shape: 'S23'
                }
              }
            }
          },
          GetXssMatchSet: {
            input: {
              type: 'structure',
              required: ['XssMatchSetId'],
              members: {
                XssMatchSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                XssMatchSet: {
                  shape: 'S2k'
                }
              }
            }
          },
          ListActivatedRulesInRuleGroup: {
            input: {
              type: 'structure',
              members: {
                RuleGroupId: {},
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                ActivatedRules: {
                  shape: 'S24'
                }
              }
            }
          },
          ListByteMatchSets: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                ByteMatchSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ByteMatchSetId', 'Name'],
                    members: {
                      ByteMatchSetId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListGeoMatchSets: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                GeoMatchSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GeoMatchSetId', 'Name'],
                    members: {
                      GeoMatchSetId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListIPSets: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                IPSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IPSetId', 'Name'],
                    members: {
                      IPSetId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListLoggingConfigurations: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'S3s'
                  }
                },
                NextMarker: {}
              }
            }
          },
          ListRateBasedRules: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                Rules: {
                  shape: 'S5p'
                }
              }
            }
          },
          ListRegexMatchSets: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                RegexMatchSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RegexMatchSetId', 'Name'],
                    members: {
                      RegexMatchSetId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListRegexPatternSets: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                RegexPatternSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RegexPatternSetId', 'Name'],
                    members: {
                      RegexPatternSetId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListRuleGroups: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                RuleGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RuleGroupId', 'Name'],
                    members: {
                      RuleGroupId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListRules: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                Rules: {
                  shape: 'S5p'
                }
              }
            }
          },
          ListSizeConstraintSets: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                SizeConstraintSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SizeConstraintSetId', 'Name'],
                    members: {
                      SizeConstraintSetId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListSqlInjectionMatchSets: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                SqlInjectionMatchSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SqlInjectionMatchSetId', 'Name'],
                    members: {
                      SqlInjectionMatchSetId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListSubscribedRuleGroups: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                RuleGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RuleGroupId', 'Name', 'MetricName'],
                    members: {
                      RuleGroupId: {},
                      Name: {},
                      MetricName: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                },
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                TagInfoForResource: {
                  type: 'structure',
                  members: {
                    ResourceARN: {},
                    TagList: {
                      shape: 'Sx'
                    }
                  }
                }
              }
            }
          },
          ListWebACLs: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                WebACLs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['WebACLId', 'Name'],
                    members: {
                      WebACLId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListXssMatchSets: {
            input: {
              type: 'structure',
              members: {
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                XssMatchSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['XssMatchSetId', 'Name'],
                    members: {
                      XssMatchSetId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          PutLoggingConfiguration: {
            input: {
              type: 'structure',
              required: ['LoggingConfiguration'],
              members: {
                LoggingConfiguration: {
                  shape: 'S3s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfiguration: {
                  shape: 'S3s'
                }
              }
            }
          },
          PutPermissionPolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Policy'],
              members: {
                ResourceArn: {},
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateByteMatchSet: {
            input: {
              type: 'structure',
              required: ['ByteMatchSetId', 'ChangeToken', 'Updates'],
              members: {
                ByteMatchSetId: {},
                ChangeToken: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'ByteMatchTuple'],
                    members: {
                      Action: {},
                      ByteMatchTuple: {
                        shape: 'S8'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateGeoMatchSet: {
            input: {
              type: 'structure',
              required: ['GeoMatchSetId', 'ChangeToken', 'Updates'],
              members: {
                GeoMatchSetId: {},
                ChangeToken: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'GeoMatchConstraint'],
                    members: {
                      Action: {},
                      GeoMatchConstraint: {
                        shape: 'Sj'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateIPSet: {
            input: {
              type: 'structure',
              required: ['IPSetId', 'ChangeToken', 'Updates'],
              members: {
                IPSetId: {},
                ChangeToken: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'IPSetDescriptor'],
                    members: {
                      Action: {},
                      IPSetDescriptor: {
                        shape: 'Sq'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateRateBasedRule: {
            input: {
              type: 'structure',
              required: ['RuleId', 'ChangeToken', 'Updates', 'RateLimit'],
              members: {
                RuleId: {},
                ChangeToken: {},
                Updates: {
                  shape: 'S7f'
                },
                RateLimit: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateRegexMatchSet: {
            input: {
              type: 'structure',
              required: ['RegexMatchSetId', 'Updates', 'ChangeToken'],
              members: {
                RegexMatchSetId: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'RegexMatchTuple'],
                    members: {
                      Action: {},
                      RegexMatchTuple: {
                        shape: 'S1b'
                      }
                    }
                  }
                },
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateRegexPatternSet: {
            input: {
              type: 'structure',
              required: ['RegexPatternSetId', 'Updates', 'ChangeToken'],
              members: {
                RegexPatternSetId: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'RegexPatternString'],
                    members: {
                      Action: {},
                      RegexPatternString: {}
                    }
                  }
                },
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateRule: {
            input: {
              type: 'structure',
              required: ['RuleId', 'ChangeToken', 'Updates'],
              members: {
                RuleId: {},
                ChangeToken: {},
                Updates: {
                  shape: 'S7f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateRuleGroup: {
            input: {
              type: 'structure',
              required: ['RuleGroupId', 'Updates', 'ChangeToken'],
              members: {
                RuleGroupId: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'ActivatedRule'],
                    members: {
                      Action: {},
                      ActivatedRule: {
                        shape: 'S25'
                      }
                    }
                  }
                },
                ChangeToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateSizeConstraintSet: {
            input: {
              type: 'structure',
              required: ['SizeConstraintSetId', 'ChangeToken', 'Updates'],
              members: {
                SizeConstraintSetId: {},
                ChangeToken: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'SizeConstraint'],
                    members: {
                      Action: {},
                      SizeConstraint: {
                        shape: 'S1r'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateSqlInjectionMatchSet: {
            input: {
              type: 'structure',
              required: ['SqlInjectionMatchSetId', 'ChangeToken', 'Updates'],
              members: {
                SqlInjectionMatchSetId: {},
                ChangeToken: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'SqlInjectionMatchTuple'],
                    members: {
                      Action: {},
                      SqlInjectionMatchTuple: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateWebACL: {
            input: {
              type: 'structure',
              required: ['WebACLId', 'ChangeToken'],
              members: {
                WebACLId: {},
                ChangeToken: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'ActivatedRule'],
                    members: {
                      Action: {},
                      ActivatedRule: {
                        shape: 'S25'
                      }
                    }
                  }
                },
                DefaultAction: {
                  shape: 'S20'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          },
          UpdateXssMatchSet: {
            input: {
              type: 'structure',
              required: ['XssMatchSetId', 'ChangeToken', 'Updates'],
              members: {
                XssMatchSetId: {},
                ChangeToken: {},
                Updates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'XssMatchTuple'],
                    members: {
                      Action: {},
                      XssMatchTuple: {
                        shape: 'S2m'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeToken: {}
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['ByteMatchSetId', 'ByteMatchTuples'],
            members: {
              ByteMatchSetId: {},
              Name: {},
              ByteMatchTuples: {
                type: 'list',
                member: {
                  shape: 'S8'
                }
              }
            }
          },
          S8: {
            type: 'structure',
            required: ['FieldToMatch', 'TargetString', 'TextTransformation', 'PositionalConstraint'],
            members: {
              FieldToMatch: {
                shape: 'S9'
              },
              TargetString: {
                type: 'blob'
              },
              TextTransformation: {},
              PositionalConstraint: {}
            }
          },
          S9: {
            type: 'structure',
            required: ['Type'],
            members: {
              Type: {},
              Data: {}
            }
          },
          Sh: {
            type: 'structure',
            required: ['GeoMatchSetId', 'GeoMatchConstraints'],
            members: {
              GeoMatchSetId: {},
              Name: {},
              GeoMatchConstraints: {
                type: 'list',
                member: {
                  shape: 'Sj'
                }
              }
            }
          },
          Sj: {
            type: 'structure',
            required: ['Type', 'Value'],
            members: {
              Type: {},
              Value: {}
            }
          },
          So: {
            type: 'structure',
            required: ['IPSetId', 'IPSetDescriptors'],
            members: {
              IPSetId: {},
              Name: {},
              IPSetDescriptors: {
                type: 'list',
                member: {
                  shape: 'Sq'
                }
              }
            }
          },
          Sq: {
            type: 'structure',
            required: ['Type', 'Value'],
            members: {
              Type: {},
              Value: {}
            }
          },
          Sx: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S12: {
            type: 'structure',
            required: ['RuleId', 'MatchPredicates', 'RateKey', 'RateLimit'],
            members: {
              RuleId: {},
              Name: {},
              MetricName: {},
              MatchPredicates: {
                shape: 'S13'
              },
              RateKey: {},
              RateLimit: {
                type: 'long'
              }
            }
          },
          S13: {
            type: 'list',
            member: {
              shape: 'S14'
            }
          },
          S14: {
            type: 'structure',
            required: ['Negated', 'Type', 'DataId'],
            members: {
              Negated: {
                type: 'boolean'
              },
              Type: {},
              DataId: {}
            }
          },
          S19: {
            type: 'structure',
            members: {
              RegexMatchSetId: {},
              Name: {},
              RegexMatchTuples: {
                type: 'list',
                member: {
                  shape: 'S1b'
                }
              }
            }
          },
          S1b: {
            type: 'structure',
            required: ['FieldToMatch', 'TextTransformation', 'RegexPatternSetId'],
            members: {
              FieldToMatch: {
                shape: 'S9'
              },
              TextTransformation: {},
              RegexPatternSetId: {}
            }
          },
          S1e: {
            type: 'structure',
            required: ['RegexPatternSetId', 'RegexPatternStrings'],
            members: {
              RegexPatternSetId: {},
              Name: {},
              RegexPatternStrings: {
                type: 'list',
                member: {}
              }
            }
          },
          S1j: {
            type: 'structure',
            required: ['RuleId', 'Predicates'],
            members: {
              RuleId: {},
              Name: {},
              MetricName: {},
              Predicates: {
                shape: 'S13'
              }
            }
          },
          S1m: {
            type: 'structure',
            required: ['RuleGroupId'],
            members: {
              RuleGroupId: {},
              Name: {},
              MetricName: {}
            }
          },
          S1p: {
            type: 'structure',
            required: ['SizeConstraintSetId', 'SizeConstraints'],
            members: {
              SizeConstraintSetId: {},
              Name: {},
              SizeConstraints: {
                type: 'list',
                member: {
                  shape: 'S1r'
                }
              }
            }
          },
          S1r: {
            type: 'structure',
            required: ['FieldToMatch', 'TextTransformation', 'ComparisonOperator', 'Size'],
            members: {
              FieldToMatch: {
                shape: 'S9'
              },
              TextTransformation: {},
              ComparisonOperator: {},
              Size: {
                type: 'long'
              }
            }
          },
          S1w: {
            type: 'structure',
            required: ['SqlInjectionMatchSetId', 'SqlInjectionMatchTuples'],
            members: {
              SqlInjectionMatchSetId: {},
              Name: {},
              SqlInjectionMatchTuples: {
                type: 'list',
                member: {
                  shape: 'S1y'
                }
              }
            }
          },
          S1y: {
            type: 'structure',
            required: ['FieldToMatch', 'TextTransformation'],
            members: {
              FieldToMatch: {
                shape: 'S9'
              },
              TextTransformation: {}
            }
          },
          S20: {
            type: 'structure',
            required: ['Type'],
            members: {
              Type: {}
            }
          },
          S23: {
            type: 'structure',
            required: ['WebACLId', 'DefaultAction', 'Rules'],
            members: {
              WebACLId: {},
              Name: {},
              MetricName: {},
              DefaultAction: {
                shape: 'S20'
              },
              Rules: {
                shape: 'S24'
              },
              WebACLArn: {}
            }
          },
          S24: {
            type: 'list',
            member: {
              shape: 'S25'
            }
          },
          S25: {
            type: 'structure',
            required: ['Priority', 'RuleId'],
            members: {
              Priority: {
                type: 'integer'
              },
              RuleId: {},
              Action: {
                shape: 'S20'
              },
              OverrideAction: {
                type: 'structure',
                required: ['Type'],
                members: {
                  Type: {}
                }
              },
              Type: {},
              ExcludedRules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['RuleId'],
                  members: {
                    RuleId: {}
                  }
                }
              }
            }
          },
          S2k: {
            type: 'structure',
            required: ['XssMatchSetId', 'XssMatchTuples'],
            members: {
              XssMatchSetId: {},
              Name: {},
              XssMatchTuples: {
                type: 'list',
                member: {
                  shape: 'S2m'
                }
              }
            }
          },
          S2m: {
            type: 'structure',
            required: ['FieldToMatch', 'TextTransformation'],
            members: {
              FieldToMatch: {
                shape: 'S9'
              },
              TextTransformation: {}
            }
          },
          S3s: {
            type: 'structure',
            required: ['ResourceArn', 'LogDestinationConfigs'],
            members: {
              ResourceArn: {},
              LogDestinationConfigs: {
                type: 'list',
                member: {}
              },
              RedactedFields: {
                type: 'list',
                member: {
                  shape: 'S9'
                }
              }
            }
          },
          S4e: {
            type: 'structure',
            required: ['StartTime', 'EndTime'],
            members: {
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              }
            }
          },
          S5p: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['RuleId', 'Name'],
              members: {
                RuleId: {},
                Name: {}
              }
            }
          },
          S7f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Action', 'Predicate'],
              members: {
                Action: {},
                Predicate: {
                  shape: 'S14'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ac1ce06f0c26a110aa872ec99dfbb2b535c70caa.js.map