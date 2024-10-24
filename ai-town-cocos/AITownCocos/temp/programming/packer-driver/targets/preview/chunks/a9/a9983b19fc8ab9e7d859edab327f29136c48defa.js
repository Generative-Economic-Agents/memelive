System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-10-15',
          endpointPrefix: 'codestar-notifications',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS CodeStar Notifications',
          serviceId: 'codestar notifications',
          signatureVersion: 'v4',
          signingName: 'codestar-notifications',
          uid: 'codestar-notifications-2019-10-15'
        },
        operations: {
          CreateNotificationRule: {
            http: {
              requestUri: '/createNotificationRule'
            },
            input: {
              type: 'structure',
              required: ['Name', 'EventTypeIds', 'Resource', 'Targets', 'DetailType'],
              members: {
                Name: {
                  shape: 'S2'
                },
                EventTypeIds: {
                  shape: 'S3'
                },
                Resource: {},
                Targets: {
                  shape: 'S6'
                },
                DetailType: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sc'
                },
                Status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            }
          },
          DeleteNotificationRule: {
            http: {
              requestUri: '/deleteNotificationRule'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            }
          },
          DeleteTarget: {
            http: {
              requestUri: '/deleteTarget'
            },
            input: {
              type: 'structure',
              required: ['TargetAddress'],
              members: {
                TargetAddress: {
                  shape: 'S9'
                },
                ForceUnsubscribeAll: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeNotificationRule: {
            http: {
              requestUri: '/describeNotificationRule'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                Name: {
                  shape: 'S2'
                },
                EventTypes: {
                  shape: 'Sp'
                },
                Resource: {},
                Targets: {
                  shape: 'Su'
                },
                DetailType: {},
                CreatedBy: {},
                Status: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                LastModifiedTimestamp: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          ListEventTypes: {
            http: {
              requestUri: '/listEventTypes'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventTypes: {
                  shape: 'Sp'
                },
                NextToken: {}
              }
            }
          },
          ListNotificationRules: {
            http: {
              requestUri: '/listNotificationRules'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                NotificationRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/listTagsForResource'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          ListTargets: {
            http: {
              requestUri: '/listTargets'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Targets: {
                  shape: 'Su'
                },
                NextToken: {}
              }
            }
          },
          Subscribe: {
            http: {
              requestUri: '/subscribe'
            },
            input: {
              type: 'structure',
              required: ['Arn', 'Target'],
              members: {
                Arn: {},
                Target: {
                  shape: 'S7'
                },
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tagResource'
            },
            input: {
              type: 'structure',
              required: ['Arn', 'Tags'],
              members: {
                Arn: {},
                Tags: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          Unsubscribe: {
            http: {
              requestUri: '/unsubscribe'
            },
            input: {
              type: 'structure',
              required: ['Arn', 'TargetAddress'],
              members: {
                Arn: {},
                TargetAddress: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            }
          },
          UntagResource: {
            http: {
              requestUri: '/untagResource/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['Arn', 'TagKeys'],
              members: {
                Arn: {
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
          UpdateNotificationRule: {
            http: {
              requestUri: '/updateNotificationRule'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                Name: {
                  shape: 'S2'
                },
                Status: {},
                EventTypeIds: {
                  shape: 'S3'
                },
                Targets: {
                  shape: 'S6'
                },
                DetailType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S2: {
            type: 'string',
            sensitive: true
          },
          S3: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'list',
            member: {
              shape: 'S7'
            }
          },
          S7: {
            type: 'structure',
            members: {
              TargetType: {},
              TargetAddress: {
                shape: 'S9'
              }
            }
          },
          S9: {
            type: 'string',
            sensitive: true
          },
          Sc: {
            type: 'map',
            key: {},
            value: {}
          },
          Sp: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EventTypeId: {},
                ServiceName: {},
                EventTypeName: {},
                ResourceType: {}
              }
            }
          },
          Su: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TargetAddress: {
                  shape: 'S9'
                },
                TargetType: {},
                TargetStatus: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a9983b19fc8ab9e7d859edab327f29136c48defa.js.map