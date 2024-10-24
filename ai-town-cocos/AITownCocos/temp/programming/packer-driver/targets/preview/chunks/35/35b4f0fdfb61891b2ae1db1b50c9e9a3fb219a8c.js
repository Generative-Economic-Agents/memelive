System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-06-15',
          endpointPrefix: 'rbin',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Recycle Bin',
          serviceId: 'rbin',
          signatureVersion: 'v4',
          signingName: 'rbin',
          uid: 'rbin-2021-06-15'
        },
        operations: {
          CreateRule: {
            http: {
              requestUri: '/rules',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['RetentionPeriod', 'ResourceType'],
              members: {
                RetentionPeriod: {
                  shape: 'S2'
                },
                Description: {},
                Tags: {
                  shape: 'S6'
                },
                ResourceType: {},
                ResourceTags: {
                  shape: 'Sb'
                },
                LockConfiguration: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Identifier: {},
                RetentionPeriod: {
                  shape: 'S2'
                },
                Description: {},
                Tags: {
                  shape: 'S6'
                },
                ResourceType: {},
                ResourceTags: {
                  shape: 'Sb'
                },
                Status: {},
                LockConfiguration: {
                  shape: 'Sf'
                },
                LockState: {},
                RuleArn: {}
              }
            }
          },
          DeleteRule: {
            http: {
              method: 'DELETE',
              requestUri: '/rules/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetRule: {
            http: {
              method: 'GET',
              requestUri: '/rules/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Identifier: {},
                Description: {},
                ResourceType: {},
                RetentionPeriod: {
                  shape: 'S2'
                },
                ResourceTags: {
                  shape: 'Sb'
                },
                Status: {},
                LockConfiguration: {
                  shape: 'Sf'
                },
                LockState: {},
                LockEndTime: {
                  type: 'timestamp'
                },
                RuleArn: {}
              }
            }
          },
          ListRules: {
            http: {
              requestUri: '/list-rules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceType'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ResourceType: {},
                ResourceTags: {
                  shape: 'Sb'
                },
                LockState: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Identifier: {},
                      Description: {},
                      RetentionPeriod: {
                        shape: 'S2'
                      },
                      LockState: {},
                      RuleArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S6'
                }
              }
            }
          },
          LockRule: {
            http: {
              method: 'PATCH',
              requestUri: '/rules/{identifier}/lock',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'LockConfiguration'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                LockConfiguration: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Identifier: {},
                Description: {},
                ResourceType: {},
                RetentionPeriod: {
                  shape: 'S2'
                },
                ResourceTags: {
                  shape: 'Sb'
                },
                Status: {},
                LockConfiguration: {
                  shape: 'Sf'
                },
                LockState: {},
                RuleArn: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UnlockRule: {
            http: {
              method: 'PATCH',
              requestUri: '/rules/{identifier}/unlock',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Identifier: {},
                Description: {},
                ResourceType: {},
                RetentionPeriod: {
                  shape: 'S2'
                },
                ResourceTags: {
                  shape: 'Sb'
                },
                Status: {},
                LockConfiguration: {
                  shape: 'Sf'
                },
                LockState: {},
                LockEndTime: {
                  type: 'timestamp'
                },
                RuleArn: {}
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
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
          UpdateRule: {
            http: {
              method: 'PATCH',
              requestUri: '/rules/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                RetentionPeriod: {
                  shape: 'S2'
                },
                Description: {},
                ResourceType: {},
                ResourceTags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Identifier: {},
                RetentionPeriod: {
                  shape: 'S2'
                },
                Description: {},
                ResourceType: {},
                ResourceTags: {
                  shape: 'Sb'
                },
                Status: {},
                LockState: {},
                LockEndTime: {
                  type: 'timestamp'
                },
                RuleArn: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            required: ['RetentionPeriodValue', 'RetentionPeriodUnit'],
            members: {
              RetentionPeriodValue: {
                type: 'integer'
              },
              RetentionPeriodUnit: {}
            }
          },
          S6: {
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
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ResourceTagKey'],
              members: {
                ResourceTagKey: {},
                ResourceTagValue: {}
              }
            }
          },
          Sf: {
            type: 'structure',
            required: ['UnlockDelay'],
            members: {
              UnlockDelay: {
                type: 'structure',
                required: ['UnlockDelayValue', 'UnlockDelayUnit'],
                members: {
                  UnlockDelayValue: {
                    type: 'integer'
                  },
                  UnlockDelayUnit: {}
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=35b4f0fdfb61891b2ae1db1b50c9e9a3fb219a8c.js.map