System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-29',
          endpointPrefix: 'app-integrations',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon AppIntegrations Service',
          serviceId: 'AppIntegrations',
          signatureVersion: 'v4',
          signingName: 'app-integrations',
          uid: 'appintegrations-2020-07-29'
        },
        operations: {
          CreateApplication: {
            http: {
              requestUri: '/applications'
            },
            input: {
              type: 'structure',
              required: ['Name', 'Namespace', 'ApplicationSourceConfig'],
              members: {
                Name: {},
                Namespace: {},
                Description: {},
                ApplicationSourceConfig: {
                  shape: 'S5'
                },
                Subscriptions: {
                  shape: 'Sa',
                  deprecated: true,
                  deprecatedMessage: 'Subscriptions has been replaced with Permissions'
                },
                Publications: {
                  shape: 'Sd',
                  deprecated: true,
                  deprecatedMessage: 'Publications has been replaced with Permissions'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sh'
                },
                Permissions: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {}
              }
            }
          },
          CreateDataIntegration: {
            http: {
              requestUri: '/dataIntegrations'
            },
            input: {
              type: 'structure',
              required: ['Name', 'KmsKey', 'SourceURI'],
              members: {
                Name: {},
                Description: {},
                KmsKey: {},
                SourceURI: {},
                ScheduleConfig: {
                  shape: 'St'
                },
                Tags: {
                  shape: 'Sh'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                FileConfiguration: {
                  shape: 'Sv'
                },
                ObjectConfiguration: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Description: {},
                KmsKey: {},
                SourceURI: {},
                ScheduleConfiguration: {
                  shape: 'St'
                },
                Tags: {
                  shape: 'Sh'
                },
                ClientToken: {},
                FileConfiguration: {
                  shape: 'Sv'
                },
                ObjectConfiguration: {
                  shape: 'S11'
                }
              }
            }
          },
          CreateEventIntegration: {
            http: {
              requestUri: '/eventIntegrations'
            },
            input: {
              type: 'structure',
              required: ['Name', 'EventFilter', 'EventBridgeBus'],
              members: {
                Name: {},
                Description: {},
                EventFilter: {
                  shape: 'S14'
                },
                EventBridgeBus: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventIntegrationArn: {}
              }
            }
          },
          DeleteApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{ApplicationIdentifier}'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDataIntegration: {
            http: {
              method: 'DELETE',
              requestUri: '/dataIntegrations/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['DataIntegrationIdentifier'],
              members: {
                DataIntegrationIdentifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEventIntegration: {
            http: {
              method: 'DELETE',
              requestUri: '/eventIntegrations/{Name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetApplication: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationIdentifier}'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Namespace: {},
                Description: {},
                ApplicationSourceConfig: {
                  shape: 'S5'
                },
                Subscriptions: {
                  shape: 'Sa',
                  deprecated: true,
                  deprecatedMessage: 'Subscriptions has been replaced with Permissions'
                },
                Publications: {
                  shape: 'Sd',
                  deprecated: true,
                  deprecatedMessage: 'Publications has been replaced with Permissions'
                },
                CreatedTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sh'
                },
                Permissions: {
                  shape: 'Sk'
                }
              }
            }
          },
          GetDataIntegration: {
            http: {
              method: 'GET',
              requestUri: '/dataIntegrations/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Description: {},
                KmsKey: {},
                SourceURI: {},
                ScheduleConfiguration: {
                  shape: 'St'
                },
                Tags: {
                  shape: 'Sh'
                },
                FileConfiguration: {
                  shape: 'Sv'
                },
                ObjectConfiguration: {
                  shape: 'S11'
                }
              }
            }
          },
          GetEventIntegration: {
            http: {
              method: 'GET',
              requestUri: '/eventIntegrations/{Name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Description: {},
                EventIntegrationArn: {},
                EventBridgeBus: {},
                EventFilter: {
                  shape: 'S14'
                },
                Tags: {
                  shape: 'Sh'
                }
              }
            }
          },
          ListApplicationAssociations: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationIdentifier}/associations'
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationAssociationArn: {},
                      ApplicationArn: {},
                      ClientId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListApplications: {
            http: {
              method: 'GET',
              requestUri: '/applications'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Applications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      Name: {},
                      Namespace: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDataIntegrationAssociations: {
            http: {
              method: 'GET',
              requestUri: '/dataIntegrations/{Identifier}/associations'
            },
            input: {
              type: 'structure',
              required: ['DataIntegrationIdentifier'],
              members: {
                DataIntegrationIdentifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataIntegrationAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DataIntegrationAssociationArn: {},
                      DataIntegrationArn: {},
                      ClientId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDataIntegrations: {
            http: {
              method: 'GET',
              requestUri: '/dataIntegrations'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataIntegrations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {},
                      SourceURI: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEventIntegrationAssociations: {
            http: {
              method: 'GET',
              requestUri: '/eventIntegrations/{Name}/associations'
            },
            input: {
              type: 'structure',
              required: ['EventIntegrationName'],
              members: {
                EventIntegrationName: {
                  location: 'uri',
                  locationName: 'Name'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventIntegrationAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventIntegrationAssociationArn: {},
                      EventIntegrationAssociationId: {},
                      EventIntegrationName: {},
                      ClientId: {},
                      EventBridgeRuleName: {},
                      ClientAssociationMetadata: {
                        type: 'map',
                        key: {},
                        value: {}
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEventIntegrations: {
            http: {
              method: 'GET',
              requestUri: '/eventIntegrations'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventIntegrations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventIntegrationArn: {},
                      Name: {},
                      Description: {},
                      EventFilter: {
                        shape: 'S14'
                      },
                      EventBridgeBus: {},
                      Tags: {
                        shape: 'Sh'
                      }
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
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sh'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tagKeys: {
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
          UpdateApplication: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{ApplicationIdentifier}'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                Name: {},
                Description: {},
                ApplicationSourceConfig: {
                  shape: 'S5'
                },
                Subscriptions: {
                  shape: 'Sa',
                  deprecated: true,
                  deprecatedMessage: 'Subscriptions has been replaced with Permissions'
                },
                Publications: {
                  shape: 'Sd',
                  deprecated: true,
                  deprecatedMessage: 'Publications has been replaced with Permissions'
                },
                Permissions: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDataIntegration: {
            http: {
              method: 'PATCH',
              requestUri: '/dataIntegrations/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                },
                Name: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEventIntegration: {
            http: {
              method: 'PATCH',
              requestUri: '/eventIntegrations/{Name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              ExternalUrlConfig: {
                type: 'structure',
                required: ['AccessUrl'],
                members: {
                  AccessUrl: {},
                  ApprovedOrigins: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Event'],
              members: {
                Event: {},
                Description: {}
              }
            }
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Event', 'Schema'],
              members: {
                Event: {},
                Schema: {},
                Description: {}
              }
            }
          },
          Sh: {
            type: 'map',
            key: {},
            value: {}
          },
          Sk: {
            type: 'list',
            member: {}
          },
          St: {
            type: 'structure',
            required: ['ScheduleExpression'],
            members: {
              FirstExecutionFrom: {},
              Object: {},
              ScheduleExpression: {}
            }
          },
          Sv: {
            type: 'structure',
            required: ['Folders'],
            members: {
              Folders: {
                type: 'list',
                member: {}
              },
              Filters: {
                shape: 'Sy'
              }
            }
          },
          Sy: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          S11: {
            type: 'map',
            key: {},
            value: {
              shape: 'Sy'
            }
          },
          S14: {
            type: 'structure',
            required: ['Source'],
            members: {
              Source: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=785660c66cf36a0e6d8a45a47a9a82f2f463bbb6.js.map