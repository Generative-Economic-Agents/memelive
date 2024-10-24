System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-07-29',
          endpointPrefix: 'wafv2',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'WAFV2',
          serviceFullName: 'AWS WAFV2',
          serviceId: 'WAFV2',
          signatureVersion: 'v4',
          targetPrefix: 'AWSWAF_20190729',
          uid: 'wafv2-2019-07-29'
        },
        operations: {
          AssociateWebACL: {
            input: {
              type: 'structure',
              required: ['WebACLArn', 'ResourceArn'],
              members: {
                WebACLArn: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CheckCapacity: {
            input: {
              type: 'structure',
              required: ['Scope', 'Rules'],
              members: {
                Scope: {},
                Rules: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Capacity: {
                  type: 'long'
                }
              }
            }
          },
          CreateAPIKey: {
            input: {
              type: 'structure',
              required: ['Scope', 'TokenDomains'],
              members: {
                Scope: {},
                TokenDomains: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                APIKey: {}
              }
            }
          },
          CreateIPSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'IPAddressVersion', 'Addresses'],
              members: {
                Name: {},
                Scope: {},
                Description: {},
                IPAddressVersion: {},
                Addresses: {
                  shape: 'S4p'
                },
                Tags: {
                  shape: 'S4r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Summary: {
                  shape: 'S4w'
                }
              }
            }
          },
          CreateRegexPatternSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'RegularExpressionList'],
              members: {
                Name: {},
                Scope: {},
                Description: {},
                RegularExpressionList: {
                  shape: 'S50'
                },
                Tags: {
                  shape: 'S4r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Summary: {
                  shape: 'S53'
                }
              }
            }
          },
          CreateRuleGroup: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Capacity', 'VisibilityConfig'],
              members: {
                Name: {},
                Scope: {},
                Capacity: {
                  type: 'long'
                },
                Description: {},
                Rules: {
                  shape: 'S6'
                },
                VisibilityConfig: {
                  shape: 'S49'
                },
                Tags: {
                  shape: 'S4r'
                },
                CustomResponseBodies: {
                  shape: 'S56'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Summary: {
                  shape: 'S5b'
                }
              }
            }
          },
          CreateWebACL: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'DefaultAction', 'VisibilityConfig'],
              members: {
                Name: {},
                Scope: {},
                DefaultAction: {
                  shape: 'S5d'
                },
                Description: {},
                Rules: {
                  shape: 'S6'
                },
                VisibilityConfig: {
                  shape: 'S49'
                },
                Tags: {
                  shape: 'S4r'
                },
                CustomResponseBodies: {
                  shape: 'S56'
                },
                CaptchaConfig: {
                  shape: 'S4b'
                },
                ChallengeConfig: {
                  shape: 'S4e'
                },
                TokenDomains: {
                  shape: 'S5e'
                },
                AssociationConfig: {
                  shape: 'S5f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Summary: {
                  shape: 'S5l'
                }
              }
            }
          },
          DeleteAPIKey: {
            input: {
              type: 'structure',
              required: ['Scope', 'APIKey'],
              members: {
                Scope: {},
                APIKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFirewallManagerRuleGroups: {
            input: {
              type: 'structure',
              required: ['WebACLArn', 'WebACLLockToken'],
              members: {
                WebACLArn: {},
                WebACLLockToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextWebACLLockToken: {}
              }
            }
          },
          DeleteIPSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                LockToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLoggingConfiguration: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                LogType: {},
                LogScope: {}
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
          DeleteRegexPatternSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                LockToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRuleGroup: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                LockToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWebACL: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                LockToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAllManagedProducts: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ManagedProducts: {
                  shape: 'S66'
                }
              }
            }
          },
          DescribeManagedProductsByVendor: {
            input: {
              type: 'structure',
              required: ['VendorName', 'Scope'],
              members: {
                VendorName: {},
                Scope: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ManagedProducts: {
                  shape: 'S66'
                }
              }
            }
          },
          DescribeManagedRuleGroup: {
            input: {
              type: 'structure',
              required: ['VendorName', 'Name', 'Scope'],
              members: {
                VendorName: {},
                Name: {},
                Scope: {},
                VersionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VersionName: {},
                SnsTopicArn: {},
                Capacity: {
                  type: 'long'
                },
                Rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Action: {
                        shape: 'S1q'
                      }
                    }
                  }
                },
                LabelNamespace: {},
                AvailableLabels: {
                  shape: 'S6i'
                },
                ConsumedLabels: {
                  shape: 'S6i'
                }
              }
            }
          },
          DisassociateWebACL: {
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
          GenerateMobileSdkReleaseUrl: {
            input: {
              type: 'structure',
              required: ['Platform', 'ReleaseVersion'],
              members: {
                Platform: {},
                ReleaseVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Url: {}
              }
            }
          },
          GetDecryptedAPIKey: {
            input: {
              type: 'structure',
              required: ['Scope', 'APIKey'],
              members: {
                Scope: {},
                APIKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TokenDomains: {
                  shape: 'S5e'
                },
                CreationTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetIPSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id'],
              members: {
                Name: {},
                Scope: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IPSet: {
                  type: 'structure',
                  required: ['Name', 'Id', 'ARN', 'IPAddressVersion', 'Addresses'],
                  members: {
                    Name: {},
                    Id: {},
                    ARN: {},
                    Description: {},
                    IPAddressVersion: {},
                    Addresses: {
                      shape: 'S4p'
                    }
                  }
                },
                LockToken: {}
              }
            }
          },
          GetLoggingConfiguration: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                LogType: {},
                LogScope: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfiguration: {
                  shape: 'S6y'
                }
              }
            }
          },
          GetManagedRuleSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id'],
              members: {
                Name: {},
                Scope: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ManagedRuleSet: {
                  type: 'structure',
                  required: ['Name', 'Id', 'ARN'],
                  members: {
                    Name: {},
                    Id: {},
                    ARN: {},
                    Description: {},
                    PublishedVersions: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          AssociatedRuleGroupArn: {},
                          Capacity: {
                            type: 'long'
                          },
                          ForecastedLifetime: {
                            type: 'integer'
                          },
                          PublishTimestamp: {
                            type: 'timestamp'
                          },
                          LastUpdateTimestamp: {
                            type: 'timestamp'
                          },
                          ExpiryTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      }
                    },
                    RecommendedVersion: {},
                    LabelNamespace: {}
                  }
                },
                LockToken: {}
              }
            }
          },
          GetMobileSdkRelease: {
            input: {
              type: 'structure',
              required: ['Platform', 'ReleaseVersion'],
              members: {
                Platform: {},
                ReleaseVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MobileSdkRelease: {
                  type: 'structure',
                  members: {
                    ReleaseVersion: {},
                    Timestamp: {
                      type: 'timestamp'
                    },
                    ReleaseNotes: {},
                    Tags: {
                      shape: 'S4r'
                    }
                  }
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
          GetRateBasedStatementManagedKeys: {
            input: {
              type: 'structure',
              required: ['Scope', 'WebACLName', 'WebACLId', 'RuleName'],
              members: {
                Scope: {},
                WebACLName: {},
                WebACLId: {},
                RuleGroupRuleName: {},
                RuleName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ManagedKeysIPV4: {
                  shape: 'S7q'
                },
                ManagedKeysIPV6: {
                  shape: 'S7q'
                }
              }
            }
          },
          GetRegexPatternSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id'],
              members: {
                Name: {},
                Scope: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegexPatternSet: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Id: {},
                    ARN: {},
                    Description: {},
                    RegularExpressionList: {
                      shape: 'S50'
                    }
                  }
                },
                LockToken: {}
              }
            }
          },
          GetRuleGroup: {
            input: {
              type: 'structure',
              members: {
                Name: {},
                Scope: {},
                Id: {},
                ARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RuleGroup: {
                  type: 'structure',
                  required: ['Name', 'Id', 'Capacity', 'ARN', 'VisibilityConfig'],
                  members: {
                    Name: {},
                    Id: {},
                    Capacity: {
                      type: 'long'
                    },
                    ARN: {},
                    Description: {},
                    Rules: {
                      shape: 'S6'
                    },
                    VisibilityConfig: {
                      shape: 'S49'
                    },
                    LabelNamespace: {},
                    CustomResponseBodies: {
                      shape: 'S56'
                    },
                    AvailableLabels: {
                      shape: 'S6i'
                    },
                    ConsumedLabels: {
                      shape: 'S6i'
                    }
                  }
                },
                LockToken: {}
              }
            }
          },
          GetSampledRequests: {
            input: {
              type: 'structure',
              required: ['WebAclArn', 'RuleMetricName', 'Scope', 'TimeWindow', 'MaxItems'],
              members: {
                WebAclArn: {},
                RuleMetricName: {},
                Scope: {},
                TimeWindow: {
                  shape: 'S7y'
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
                            shape: 'S89'
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
                      RuleNameWithinRuleGroup: {},
                      RequestHeadersInserted: {
                        shape: 'S89'
                      },
                      ResponseCodeSent: {
                        type: 'integer'
                      },
                      Labels: {
                        shape: 'S46'
                      },
                      CaptchaResponse: {
                        type: 'structure',
                        members: {
                          ResponseCode: {
                            type: 'integer'
                          },
                          SolveTimestamp: {
                            type: 'long'
                          },
                          FailureReason: {}
                        }
                      },
                      ChallengeResponse: {
                        type: 'structure',
                        members: {
                          ResponseCode: {
                            type: 'integer'
                          },
                          SolveTimestamp: {
                            type: 'long'
                          },
                          FailureReason: {}
                        }
                      },
                      OverriddenAction: {}
                    }
                  }
                },
                PopulationSize: {
                  type: 'long'
                },
                TimeWindow: {
                  shape: 'S7y'
                }
              }
            }
          },
          GetWebACL: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id'],
              members: {
                Name: {},
                Scope: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WebACL: {
                  shape: 'S8n'
                },
                LockToken: {},
                ApplicationIntegrationURL: {}
              }
            }
          },
          GetWebACLForResource: {
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
                WebACL: {
                  shape: 'S8n'
                }
              }
            }
          },
          ListAPIKeys: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {},
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
                APIKeySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TokenDomains: {
                        shape: 'S5e'
                      },
                      APIKey: {},
                      CreationTimestamp: {
                        type: 'timestamp'
                      },
                      Version: {
                        type: 'integer'
                      }
                    }
                  }
                },
                ApplicationIntegrationURL: {}
              }
            }
          },
          ListAvailableManagedRuleGroupVersions: {
            input: {
              type: 'structure',
              required: ['VendorName', 'Name', 'Scope'],
              members: {
                VendorName: {},
                Name: {},
                Scope: {},
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
                Versions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      LastUpdateTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                CurrentDefaultVersion: {}
              }
            }
          },
          ListAvailableManagedRuleGroups: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {},
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
                ManagedRuleGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VendorName: {},
                      Name: {},
                      VersioningSupported: {
                        type: 'boolean'
                      },
                      Description: {}
                    }
                  }
                }
              }
            }
          },
          ListIPSets: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {},
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
                    shape: 'S4w'
                  }
                }
              }
            }
          },
          ListLoggingConfigurations: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {},
                NextMarker: {},
                Limit: {
                  type: 'integer'
                },
                LogScope: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'S6y'
                  }
                },
                NextMarker: {}
              }
            }
          },
          ListManagedRuleSets: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {},
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
                ManagedRuleSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Id: {},
                      Description: {},
                      LockToken: {},
                      ARN: {},
                      LabelNamespace: {}
                    }
                  }
                }
              }
            }
          },
          ListMobileSdkReleases: {
            input: {
              type: 'structure',
              required: ['Platform'],
              members: {
                Platform: {},
                NextMarker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReleaseSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReleaseVersion: {},
                      Timestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextMarker: {}
              }
            }
          },
          ListRegexPatternSets: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {},
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
                    shape: 'S53'
                  }
                }
              }
            }
          },
          ListResourcesForWebACL: {
            input: {
              type: 'structure',
              required: ['WebACLArn'],
              members: {
                WebACLArn: {},
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArns: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListRuleGroups: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {},
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
                    shape: 'S5b'
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
                      shape: 'S4r'
                    }
                  }
                }
              }
            }
          },
          ListWebACLs: {
            input: {
              type: 'structure',
              required: ['Scope'],
              members: {
                Scope: {},
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
                    shape: 'S5l'
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
                  shape: 'S6y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfiguration: {
                  shape: 'S6y'
                }
              }
            }
          },
          PutManagedRuleSetVersions: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                LockToken: {},
                RecommendedVersion: {},
                VersionsToPublish: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      AssociatedRuleGroupArn: {},
                      ForecastedLifetime: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextLockToken: {}
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
                  shape: 'S4r'
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
          UpdateIPSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'Addresses', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                Description: {},
                Addresses: {
                  shape: 'S4p'
                },
                LockToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextLockToken: {}
              }
            }
          },
          UpdateManagedRuleSetVersionExpiryDate: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'LockToken', 'VersionToExpire', 'ExpiryTimestamp'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                LockToken: {},
                VersionToExpire: {},
                ExpiryTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ExpiringVersion: {},
                ExpiryTimestamp: {
                  type: 'timestamp'
                },
                NextLockToken: {}
              }
            }
          },
          UpdateRegexPatternSet: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'RegularExpressionList', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                Description: {},
                RegularExpressionList: {
                  shape: 'S50'
                },
                LockToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextLockToken: {}
              }
            }
          },
          UpdateRuleGroup: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'VisibilityConfig', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                Description: {},
                Rules: {
                  shape: 'S6'
                },
                VisibilityConfig: {
                  shape: 'S49'
                },
                LockToken: {},
                CustomResponseBodies: {
                  shape: 'S56'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextLockToken: {}
              }
            }
          },
          UpdateWebACL: {
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Id', 'DefaultAction', 'VisibilityConfig', 'LockToken'],
              members: {
                Name: {},
                Scope: {},
                Id: {},
                DefaultAction: {
                  shape: 'S5d'
                },
                Description: {},
                Rules: {
                  shape: 'S6'
                },
                VisibilityConfig: {
                  shape: 'S49'
                },
                LockToken: {},
                CustomResponseBodies: {
                  shape: 'S56'
                },
                CaptchaConfig: {
                  shape: 'S4b'
                },
                ChallengeConfig: {
                  shape: 'S4e'
                },
                TokenDomains: {
                  shape: 'S5e'
                },
                AssociationConfig: {
                  shape: 'S5f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextLockToken: {}
              }
            }
          }
        },
        shapes: {
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Priority', 'Statement', 'VisibilityConfig'],
              members: {
                Name: {},
                Priority: {
                  type: 'integer'
                },
                Statement: {
                  shape: 'Sa'
                },
                Action: {
                  shape: 'S1q'
                },
                OverrideAction: {
                  shape: 'S44'
                },
                RuleLabels: {
                  shape: 'S46'
                },
                VisibilityConfig: {
                  shape: 'S49'
                },
                CaptchaConfig: {
                  shape: 'S4b'
                },
                ChallengeConfig: {
                  shape: 'S4e'
                }
              }
            }
          },
          Sa: {
            type: 'structure',
            members: {
              ByteMatchStatement: {
                type: 'structure',
                required: ['SearchString', 'FieldToMatch', 'TextTransformations', 'PositionalConstraint'],
                members: {
                  SearchString: {
                    type: 'blob'
                  },
                  FieldToMatch: {
                    shape: 'Sd'
                  },
                  TextTransformations: {
                    shape: 'S15'
                  },
                  PositionalConstraint: {}
                }
              },
              SqliMatchStatement: {
                type: 'structure',
                required: ['FieldToMatch', 'TextTransformations'],
                members: {
                  FieldToMatch: {
                    shape: 'Sd'
                  },
                  TextTransformations: {
                    shape: 'S15'
                  },
                  SensitivityLevel: {}
                }
              },
              XssMatchStatement: {
                type: 'structure',
                required: ['FieldToMatch', 'TextTransformations'],
                members: {
                  FieldToMatch: {
                    shape: 'Sd'
                  },
                  TextTransformations: {
                    shape: 'S15'
                  }
                }
              },
              SizeConstraintStatement: {
                type: 'structure',
                required: ['FieldToMatch', 'ComparisonOperator', 'Size', 'TextTransformations'],
                members: {
                  FieldToMatch: {
                    shape: 'Sd'
                  },
                  ComparisonOperator: {},
                  Size: {
                    type: 'long'
                  },
                  TextTransformations: {
                    shape: 'S15'
                  }
                }
              },
              GeoMatchStatement: {
                type: 'structure',
                members: {
                  CountryCodes: {
                    type: 'list',
                    member: {}
                  },
                  ForwardedIPConfig: {
                    shape: 'S1j'
                  }
                }
              },
              RuleGroupReferenceStatement: {
                shape: 'S1l'
              },
              IPSetReferenceStatement: {
                type: 'structure',
                required: ['ARN'],
                members: {
                  ARN: {},
                  IPSetForwardedIPConfig: {
                    type: 'structure',
                    required: ['HeaderName', 'FallbackBehavior', 'Position'],
                    members: {
                      HeaderName: {},
                      FallbackBehavior: {},
                      Position: {}
                    }
                  }
                }
              },
              RegexPatternSetReferenceStatement: {
                type: 'structure',
                required: ['ARN', 'FieldToMatch', 'TextTransformations'],
                members: {
                  ARN: {},
                  FieldToMatch: {
                    shape: 'Sd'
                  },
                  TextTransformations: {
                    shape: 'S15'
                  }
                }
              },
              RateBasedStatement: {
                type: 'structure',
                required: ['Limit', 'AggregateKeyType'],
                members: {
                  Limit: {
                    type: 'long'
                  },
                  EvaluationWindowSec: {
                    type: 'long'
                  },
                  AggregateKeyType: {},
                  ScopeDownStatement: {
                    shape: 'Sa'
                  },
                  ForwardedIPConfig: {
                    shape: 'S1j'
                  },
                  CustomKeys: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Header: {
                          type: 'structure',
                          required: ['Name', 'TextTransformations'],
                          members: {
                            Name: {},
                            TextTransformations: {
                              shape: 'S15'
                            }
                          }
                        },
                        Cookie: {
                          type: 'structure',
                          required: ['Name', 'TextTransformations'],
                          members: {
                            Name: {},
                            TextTransformations: {
                              shape: 'S15'
                            }
                          }
                        },
                        QueryArgument: {
                          type: 'structure',
                          required: ['Name', 'TextTransformations'],
                          members: {
                            Name: {},
                            TextTransformations: {
                              shape: 'S15'
                            }
                          }
                        },
                        QueryString: {
                          type: 'structure',
                          required: ['TextTransformations'],
                          members: {
                            TextTransformations: {
                              shape: 'S15'
                            }
                          }
                        },
                        HTTPMethod: {
                          type: 'structure',
                          members: {}
                        },
                        ForwardedIP: {
                          type: 'structure',
                          members: {}
                        },
                        IP: {
                          type: 'structure',
                          members: {}
                        },
                        LabelNamespace: {
                          type: 'structure',
                          required: ['Namespace'],
                          members: {
                            Namespace: {}
                          }
                        },
                        UriPath: {
                          type: 'structure',
                          required: ['TextTransformations'],
                          members: {
                            TextTransformations: {
                              shape: 'S15'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              AndStatement: {
                type: 'structure',
                required: ['Statements'],
                members: {
                  Statements: {
                    shape: 'S2o'
                  }
                }
              },
              OrStatement: {
                type: 'structure',
                required: ['Statements'],
                members: {
                  Statements: {
                    shape: 'S2o'
                  }
                }
              },
              NotStatement: {
                type: 'structure',
                required: ['Statement'],
                members: {
                  Statement: {
                    shape: 'Sa'
                  }
                }
              },
              ManagedRuleGroupStatement: {
                shape: 'S2r'
              },
              LabelMatchStatement: {
                type: 'structure',
                required: ['Scope', 'Key'],
                members: {
                  Scope: {},
                  Key: {}
                }
              },
              RegexMatchStatement: {
                type: 'structure',
                required: ['RegexString', 'FieldToMatch', 'TextTransformations'],
                members: {
                  RegexString: {},
                  FieldToMatch: {
                    shape: 'Sd'
                  },
                  TextTransformations: {
                    shape: 'S15'
                  }
                }
              }
            }
          },
          Sd: {
            type: 'structure',
            members: {
              SingleHeader: {
                type: 'structure',
                required: ['Name'],
                members: {
                  Name: {}
                }
              },
              SingleQueryArgument: {
                type: 'structure',
                required: ['Name'],
                members: {
                  Name: {}
                }
              },
              AllQueryArguments: {
                type: 'structure',
                members: {}
              },
              UriPath: {
                type: 'structure',
                members: {}
              },
              QueryString: {
                type: 'structure',
                members: {}
              },
              Body: {
                type: 'structure',
                members: {
                  OversizeHandling: {}
                }
              },
              Method: {
                type: 'structure',
                members: {}
              },
              JsonBody: {
                type: 'structure',
                required: ['MatchPattern', 'MatchScope'],
                members: {
                  MatchPattern: {
                    type: 'structure',
                    members: {
                      All: {
                        shape: 'Sp'
                      },
                      IncludedPaths: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  MatchScope: {},
                  InvalidFallbackBehavior: {},
                  OversizeHandling: {}
                }
              },
              Headers: {
                type: 'structure',
                required: ['MatchPattern', 'MatchScope', 'OversizeHandling'],
                members: {
                  MatchPattern: {
                    type: 'structure',
                    members: {
                      All: {
                        shape: 'Sp'
                      },
                      IncludedHeaders: {
                        shape: 'Sw'
                      },
                      ExcludedHeaders: {
                        shape: 'Sw'
                      }
                    }
                  },
                  MatchScope: {},
                  OversizeHandling: {}
                }
              },
              Cookies: {
                type: 'structure',
                required: ['MatchPattern', 'MatchScope', 'OversizeHandling'],
                members: {
                  MatchPattern: {
                    type: 'structure',
                    members: {
                      All: {
                        shape: 'Sp'
                      },
                      IncludedCookies: {
                        shape: 'S10'
                      },
                      ExcludedCookies: {
                        shape: 'S10'
                      }
                    }
                  },
                  MatchScope: {},
                  OversizeHandling: {}
                }
              },
              HeaderOrder: {
                type: 'structure',
                required: ['OversizeHandling'],
                members: {
                  OversizeHandling: {}
                }
              },
              JA3Fingerprint: {
                type: 'structure',
                required: ['FallbackBehavior'],
                members: {
                  FallbackBehavior: {}
                }
              }
            }
          },
          Sp: {
            type: 'structure',
            members: {}
          },
          Sw: {
            type: 'list',
            member: {}
          },
          S10: {
            type: 'list',
            member: {}
          },
          S15: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Priority', 'Type'],
              members: {
                Priority: {
                  type: 'integer'
                },
                Type: {}
              }
            }
          },
          S1j: {
            type: 'structure',
            required: ['HeaderName', 'FallbackBehavior'],
            members: {
              HeaderName: {},
              FallbackBehavior: {}
            }
          },
          S1l: {
            type: 'structure',
            required: ['ARN'],
            members: {
              ARN: {},
              ExcludedRules: {
                shape: 'S1m'
              },
              RuleActionOverrides: {
                shape: 'S1o'
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          S1o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'ActionToUse'],
              members: {
                Name: {},
                ActionToUse: {
                  shape: 'S1q'
                }
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              Block: {
                shape: 'S1r'
              },
              Allow: {
                shape: 'S1y'
              },
              Count: {
                shape: 'S20'
              },
              Captcha: {
                type: 'structure',
                members: {
                  CustomRequestHandling: {
                    shape: 'S1z'
                  }
                }
              },
              Challenge: {
                type: 'structure',
                members: {
                  CustomRequestHandling: {
                    shape: 'S1z'
                  }
                }
              }
            }
          },
          S1r: {
            type: 'structure',
            members: {
              CustomResponse: {
                type: 'structure',
                required: ['ResponseCode'],
                members: {
                  ResponseCode: {
                    type: 'integer'
                  },
                  CustomResponseBodyKey: {},
                  ResponseHeaders: {
                    shape: 'S1u'
                  }
                }
              }
            }
          },
          S1u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S1y: {
            type: 'structure',
            members: {
              CustomRequestHandling: {
                shape: 'S1z'
              }
            }
          },
          S1z: {
            type: 'structure',
            required: ['InsertHeaders'],
            members: {
              InsertHeaders: {
                shape: 'S1u'
              }
            }
          },
          S20: {
            type: 'structure',
            members: {
              CustomRequestHandling: {
                shape: 'S1z'
              }
            }
          },
          S2o: {
            type: 'list',
            member: {
              shape: 'Sa'
            }
          },
          S2r: {
            type: 'structure',
            required: ['VendorName', 'Name'],
            members: {
              VendorName: {},
              Name: {},
              Version: {},
              ExcludedRules: {
                shape: 'S1m'
              },
              ScopeDownStatement: {
                shape: 'Sa'
              },
              ManagedRuleGroupConfigs: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    LoginPath: {
                      deprecated: true,
                      deprecatedMessage: 'Deprecated. Use AWSManagedRulesATPRuleSet LoginPath'
                    },
                    PayloadType: {
                      deprecated: true,
                      deprecatedMessage: 'Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection PayloadType'
                    },
                    UsernameField: {
                      shape: 'S2y',
                      deprecated: true,
                      deprecatedMessage: 'Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection UsernameField'
                    },
                    PasswordField: {
                      shape: 'S30',
                      deprecated: true,
                      deprecatedMessage: 'Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection PasswordField'
                    },
                    AWSManagedRulesBotControlRuleSet: {
                      type: 'structure',
                      required: ['InspectionLevel'],
                      members: {
                        InspectionLevel: {},
                        EnableMachineLearning: {
                          type: 'boolean'
                        }
                      }
                    },
                    AWSManagedRulesATPRuleSet: {
                      type: 'structure',
                      required: ['LoginPath'],
                      members: {
                        LoginPath: {},
                        RequestInspection: {
                          type: 'structure',
                          required: ['PayloadType', 'UsernameField', 'PasswordField'],
                          members: {
                            PayloadType: {},
                            UsernameField: {
                              shape: 'S2y'
                            },
                            PasswordField: {
                              shape: 'S30'
                            }
                          }
                        },
                        ResponseInspection: {
                          shape: 'S37'
                        },
                        EnableRegexInPath: {
                          type: 'boolean'
                        }
                      }
                    },
                    AWSManagedRulesACFPRuleSet: {
                      type: 'structure',
                      required: ['CreationPath', 'RegistrationPagePath', 'RequestInspection'],
                      members: {
                        CreationPath: {},
                        RegistrationPagePath: {},
                        RequestInspection: {
                          type: 'structure',
                          required: ['PayloadType'],
                          members: {
                            PayloadType: {},
                            UsernameField: {
                              shape: 'S2y'
                            },
                            PasswordField: {
                              shape: 'S30'
                            },
                            EmailField: {
                              type: 'structure',
                              required: ['Identifier'],
                              members: {
                                Identifier: {}
                              }
                            },
                            PhoneNumberFields: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                required: ['Identifier'],
                                members: {
                                  Identifier: {}
                                }
                              }
                            },
                            AddressFields: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                required: ['Identifier'],
                                members: {
                                  Identifier: {}
                                }
                              }
                            }
                          }
                        },
                        ResponseInspection: {
                          shape: 'S37'
                        },
                        EnableRegexInPath: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                }
              },
              RuleActionOverrides: {
                shape: 'S1o'
              }
            }
          },
          S2y: {
            type: 'structure',
            required: ['Identifier'],
            members: {
              Identifier: {}
            }
          },
          S30: {
            type: 'structure',
            required: ['Identifier'],
            members: {
              Identifier: {}
            }
          },
          S37: {
            type: 'structure',
            members: {
              StatusCode: {
                type: 'structure',
                required: ['SuccessCodes', 'FailureCodes'],
                members: {
                  SuccessCodes: {
                    type: 'list',
                    member: {
                      type: 'integer'
                    }
                  },
                  FailureCodes: {
                    type: 'list',
                    member: {
                      type: 'integer'
                    }
                  }
                }
              },
              Header: {
                type: 'structure',
                required: ['Name', 'SuccessValues', 'FailureValues'],
                members: {
                  Name: {},
                  SuccessValues: {
                    type: 'list',
                    member: {}
                  },
                  FailureValues: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              BodyContains: {
                type: 'structure',
                required: ['SuccessStrings', 'FailureStrings'],
                members: {
                  SuccessStrings: {
                    type: 'list',
                    member: {}
                  },
                  FailureStrings: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              Json: {
                type: 'structure',
                required: ['Identifier', 'SuccessValues', 'FailureValues'],
                members: {
                  Identifier: {},
                  SuccessValues: {
                    type: 'list',
                    member: {}
                  },
                  FailureValues: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S44: {
            type: 'structure',
            members: {
              Count: {
                shape: 'S20'
              },
              None: {
                type: 'structure',
                members: {}
              }
            }
          },
          S46: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          S49: {
            type: 'structure',
            required: ['SampledRequestsEnabled', 'CloudWatchMetricsEnabled', 'MetricName'],
            members: {
              SampledRequestsEnabled: {
                type: 'boolean'
              },
              CloudWatchMetricsEnabled: {
                type: 'boolean'
              },
              MetricName: {}
            }
          },
          S4b: {
            type: 'structure',
            members: {
              ImmunityTimeProperty: {
                shape: 'S4c'
              }
            }
          },
          S4c: {
            type: 'structure',
            required: ['ImmunityTime'],
            members: {
              ImmunityTime: {
                type: 'long'
              }
            }
          },
          S4e: {
            type: 'structure',
            members: {
              ImmunityTimeProperty: {
                shape: 'S4c'
              }
            }
          },
          S4p: {
            type: 'list',
            member: {}
          },
          S4r: {
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
          S4w: {
            type: 'structure',
            members: {
              Name: {},
              Id: {},
              Description: {},
              LockToken: {},
              ARN: {}
            }
          },
          S50: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RegexString: {}
              }
            }
          },
          S53: {
            type: 'structure',
            members: {
              Name: {},
              Id: {},
              Description: {},
              LockToken: {},
              ARN: {}
            }
          },
          S56: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['ContentType', 'Content'],
              members: {
                ContentType: {},
                Content: {}
              }
            }
          },
          S5b: {
            type: 'structure',
            members: {
              Name: {},
              Id: {},
              Description: {},
              LockToken: {},
              ARN: {}
            }
          },
          S5d: {
            type: 'structure',
            members: {
              Block: {
                shape: 'S1r'
              },
              Allow: {
                shape: 'S1y'
              }
            }
          },
          S5e: {
            type: 'list',
            member: {}
          },
          S5f: {
            type: 'structure',
            members: {
              RequestBody: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['DefaultSizeInspectionLimit'],
                  members: {
                    DefaultSizeInspectionLimit: {}
                  }
                }
              }
            }
          },
          S5l: {
            type: 'structure',
            members: {
              Name: {},
              Id: {},
              Description: {},
              LockToken: {},
              ARN: {}
            }
          },
          S66: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                VendorName: {},
                ManagedRuleSetName: {},
                ProductId: {},
                ProductLink: {},
                ProductTitle: {},
                ProductDescription: {},
                SnsTopicArn: {},
                IsVersioningSupported: {
                  type: 'boolean'
                },
                IsAdvancedManagedRuleSet: {
                  type: 'boolean'
                }
              }
            }
          },
          S6i: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          },
          S6y: {
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
                  shape: 'Sd'
                }
              },
              ManagedByFirewallManager: {
                type: 'boolean'
              },
              LoggingFilter: {
                type: 'structure',
                required: ['Filters', 'DefaultBehavior'],
                members: {
                  Filters: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Behavior', 'Requirement', 'Conditions'],
                      members: {
                        Behavior: {},
                        Requirement: {},
                        Conditions: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              ActionCondition: {
                                type: 'structure',
                                required: ['Action'],
                                members: {
                                  Action: {}
                                }
                              },
                              LabelNameCondition: {
                                type: 'structure',
                                required: ['LabelName'],
                                members: {
                                  LabelName: {}
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  DefaultBehavior: {}
                }
              },
              LogType: {},
              LogScope: {}
            }
          },
          S7q: {
            type: 'structure',
            members: {
              IPAddressVersion: {},
              Addresses: {
                shape: 'S4p'
              }
            }
          },
          S7y: {
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
          S89: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S8n: {
            type: 'structure',
            required: ['Name', 'Id', 'ARN', 'DefaultAction', 'VisibilityConfig'],
            members: {
              Name: {},
              Id: {},
              ARN: {},
              DefaultAction: {
                shape: 'S5d'
              },
              Description: {},
              Rules: {
                shape: 'S6'
              },
              VisibilityConfig: {
                shape: 'S49'
              },
              Capacity: {
                type: 'long'
              },
              PreProcessFirewallManagerRuleGroups: {
                shape: 'S8o'
              },
              PostProcessFirewallManagerRuleGroups: {
                shape: 'S8o'
              },
              ManagedByFirewallManager: {
                type: 'boolean'
              },
              LabelNamespace: {},
              CustomResponseBodies: {
                shape: 'S56'
              },
              CaptchaConfig: {
                shape: 'S4b'
              },
              ChallengeConfig: {
                shape: 'S4e'
              },
              TokenDomains: {
                shape: 'S5e'
              },
              AssociationConfig: {
                shape: 'S5f'
              }
            }
          },
          S8o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Priority', 'FirewallManagerStatement', 'OverrideAction', 'VisibilityConfig'],
              members: {
                Name: {},
                Priority: {
                  type: 'integer'
                },
                FirewallManagerStatement: {
                  type: 'structure',
                  members: {
                    ManagedRuleGroupStatement: {
                      shape: 'S2r'
                    },
                    RuleGroupReferenceStatement: {
                      shape: 'S1l'
                    }
                  }
                },
                OverrideAction: {
                  shape: 'S44'
                },
                VisibilityConfig: {
                  shape: 'S49'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9e8593a8da12275a199cb0e1865e42d820ca20c2.js.map