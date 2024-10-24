System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-08-01',
          endpointPrefix: 'aps',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Prometheus Service',
          serviceId: 'amp',
          signatureVersion: 'v4',
          signingName: 'aps',
          uid: 'amp-2020-08-01'
        },
        operations: {
          CreateAlertManagerDefinition: {
            http: {
              requestUri: '/workspaces/{workspaceId}/alertmanager/definition',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['data', 'workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                data: {
                  type: 'blob'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {
                  shape: 'S6'
                }
              }
            },
            idempotent: true
          },
          CreateLoggingConfiguration: {
            http: {
              requestUri: '/workspaces/{workspaceId}/logging',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['logGroupArn', 'workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                logGroupArn: {},
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {
                  shape: 'Sc'
                }
              }
            },
            idempotent: true
          },
          CreateRuleGroupsNamespace: {
            http: {
              requestUri: '/workspaces/{workspaceId}/rulegroupsnamespaces',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['data', 'name', 'workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                data: {
                  type: 'blob'
                },
                name: {},
                tags: {
                  shape: 'Sh'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'name', 'status'],
              members: {
                arn: {},
                name: {},
                status: {
                  shape: 'Sm'
                },
                tags: {
                  shape: 'Sh'
                }
              }
            },
            idempotent: true
          },
          CreateScraper: {
            http: {
              requestUri: '/scrapers',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['destination', 'scrapeConfiguration', 'source'],
              members: {
                alias: {},
                clientToken: {
                  idempotencyToken: true
                },
                destination: {
                  shape: 'Sq'
                },
                scrapeConfiguration: {
                  shape: 'St'
                },
                source: {
                  shape: 'Sv'
                },
                tags: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'scraperId', 'status'],
              members: {
                arn: {},
                scraperId: {},
                status: {
                  shape: 'S15'
                },
                tags: {
                  shape: 'Sh'
                }
              }
            },
            idempotent: true
          },
          CreateWorkspace: {
            http: {
              requestUri: '/workspaces',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                alias: {},
                clientToken: {
                  idempotencyToken: true
                },
                kmsKeyArn: {},
                tags: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'status', 'workspaceId'],
              members: {
                arn: {},
                kmsKeyArn: {},
                status: {
                  shape: 'S1b'
                },
                tags: {
                  shape: 'Sh'
                },
                workspaceId: {}
              }
            },
            idempotent: true
          },
          DeleteAlertManagerDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/alertmanager/definition',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            idempotent: true
          },
          DeleteLoggingConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/logging',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            idempotent: true
          },
          DeleteRuleGroupsNamespace: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/rulegroupsnamespaces/{name}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['name', 'workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            idempotent: true
          },
          DeleteScraper: {
            http: {
              method: 'DELETE',
              requestUri: '/scrapers/{scraperId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['scraperId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                scraperId: {
                  location: 'uri',
                  locationName: 'scraperId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['scraperId', 'status'],
              members: {
                scraperId: {},
                status: {
                  shape: 'S15'
                }
              }
            },
            idempotent: true
          },
          DeleteWorkspace: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            idempotent: true
          },
          DescribeAlertManagerDefinition: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/alertmanager/definition',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['alertManagerDefinition'],
              members: {
                alertManagerDefinition: {
                  type: 'structure',
                  required: ['createdAt', 'data', 'modifiedAt', 'status'],
                  members: {
                    createdAt: {
                      type: 'timestamp'
                    },
                    data: {
                      type: 'blob'
                    },
                    modifiedAt: {
                      type: 'timestamp'
                    },
                    status: {
                      shape: 'S6'
                    }
                  }
                }
              }
            }
          },
          DescribeLoggingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/logging',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['loggingConfiguration'],
              members: {
                loggingConfiguration: {
                  type: 'structure',
                  required: ['createdAt', 'logGroupArn', 'modifiedAt', 'status', 'workspace'],
                  members: {
                    createdAt: {
                      type: 'timestamp'
                    },
                    logGroupArn: {},
                    modifiedAt: {
                      type: 'timestamp'
                    },
                    status: {
                      shape: 'Sc'
                    },
                    workspace: {}
                  }
                }
              }
            }
          },
          DescribeRuleGroupsNamespace: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/rulegroupsnamespaces/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'workspaceId'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ruleGroupsNamespace'],
              members: {
                ruleGroupsNamespace: {
                  type: 'structure',
                  required: ['arn', 'createdAt', 'data', 'modifiedAt', 'name', 'status'],
                  members: {
                    arn: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    data: {
                      type: 'blob'
                    },
                    modifiedAt: {
                      type: 'timestamp'
                    },
                    name: {},
                    status: {
                      shape: 'Sm'
                    },
                    tags: {
                      shape: 'Sh'
                    }
                  }
                }
              }
            }
          },
          DescribeScraper: {
            http: {
              method: 'GET',
              requestUri: '/scrapers/{scraperId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scraperId'],
              members: {
                scraperId: {
                  location: 'uri',
                  locationName: 'scraperId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['scraper'],
              members: {
                scraper: {
                  type: 'structure',
                  required: ['arn', 'createdAt', 'destination', 'lastModifiedAt', 'roleArn', 'scrapeConfiguration', 'scraperId', 'source', 'status'],
                  members: {
                    alias: {},
                    arn: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    destination: {
                      shape: 'Sq'
                    },
                    lastModifiedAt: {
                      type: 'timestamp'
                    },
                    roleArn: {},
                    scrapeConfiguration: {
                      shape: 'St'
                    },
                    scraperId: {},
                    source: {
                      shape: 'Sv'
                    },
                    status: {
                      shape: 'S15'
                    },
                    statusReason: {},
                    tags: {
                      shape: 'Sh'
                    }
                  }
                }
              }
            }
          },
          DescribeWorkspace: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspace'],
              members: {
                workspace: {
                  type: 'structure',
                  required: ['arn', 'createdAt', 'status', 'workspaceId'],
                  members: {
                    alias: {},
                    arn: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    kmsKeyArn: {},
                    prometheusEndpoint: {},
                    status: {
                      shape: 'S1b'
                    },
                    tags: {
                      shape: 'Sh'
                    },
                    workspaceId: {}
                  }
                }
              }
            }
          },
          GetDefaultScraperConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/scraperconfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['configuration'],
              members: {
                configuration: {
                  type: 'blob'
                }
              }
            }
          },
          ListRuleGroupsNamespaces: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/rulegroupsnamespaces',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ruleGroupsNamespaces'],
              members: {
                nextToken: {},
                ruleGroupsNamespaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'modifiedAt', 'name', 'status'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      modifiedAt: {
                        type: 'timestamp'
                      },
                      name: {},
                      status: {
                        shape: 'Sm'
                      },
                      tags: {
                        shape: 'Sh'
                      }
                    }
                  }
                }
              }
            }
          },
          ListScrapers: {
            http: {
              method: 'GET',
              requestUri: '/scrapers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  location: 'querystring',
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['scrapers'],
              members: {
                nextToken: {},
                scrapers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'destination', 'lastModifiedAt', 'roleArn', 'scraperId', 'source', 'status'],
                    members: {
                      alias: {},
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      destination: {
                        shape: 'Sq'
                      },
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      roleArn: {},
                      scraperId: {},
                      source: {
                        shape: 'Sv'
                      },
                      status: {
                        shape: 'S15'
                      },
                      statusReason: {},
                      tags: {
                        shape: 'Sh'
                      }
                    }
                  }
                }
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
          ListWorkspaces: {
            http: {
              method: 'GET',
              requestUri: '/workspaces',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                alias: {
                  location: 'querystring',
                  locationName: 'alias'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspaces'],
              members: {
                nextToken: {},
                workspaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'status', 'workspaceId'],
                    members: {
                      alias: {},
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      kmsKeyArn: {},
                      status: {
                        shape: 'S1b'
                      },
                      tags: {
                        shape: 'Sh'
                      },
                      workspaceId: {}
                    }
                  }
                }
              }
            }
          },
          PutAlertManagerDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}/alertmanager/definition',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['data', 'workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                data: {
                  type: 'blob'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {
                  shape: 'S6'
                }
              }
            },
            idempotent: true
          },
          PutRuleGroupsNamespace: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}/rulegroupsnamespaces/{name}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['data', 'name', 'workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                data: {
                  type: 'blob'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'name', 'status'],
              members: {
                arn: {},
                name: {},
                status: {
                  shape: 'Sm'
                },
                tags: {
                  shape: 'Sh'
                }
              }
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
            },
            idempotent: true
          },
          UpdateLoggingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}/logging',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['logGroupArn', 'workspaceId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                logGroupArn: {},
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {
                  shape: 'Sc'
                }
              }
            },
            idempotent: true
          },
          UpdateWorkspaceAlias: {
            http: {
              requestUri: '/workspaces/{workspaceId}/alias',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                alias: {},
                clientToken: {
                  idempotencyToken: true
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            required: ['statusCode'],
            members: {
              statusCode: {},
              statusReason: {}
            }
          },
          Sc: {
            type: 'structure',
            required: ['statusCode'],
            members: {
              statusCode: {},
              statusReason: {}
            }
          },
          Sh: {
            type: 'map',
            key: {},
            value: {}
          },
          Sm: {
            type: 'structure',
            required: ['statusCode'],
            members: {
              statusCode: {},
              statusReason: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              ampConfiguration: {
                type: 'structure',
                required: ['workspaceArn'],
                members: {
                  workspaceArn: {}
                }
              }
            },
            union: true
          },
          St: {
            type: 'structure',
            members: {
              configurationBlob: {
                type: 'blob'
              }
            },
            union: true
          },
          Sv: {
            type: 'structure',
            members: {
              eksConfiguration: {
                type: 'structure',
                required: ['clusterArn', 'subnetIds'],
                members: {
                  clusterArn: {},
                  securityGroupIds: {
                    type: 'list',
                    member: {}
                  },
                  subnetIds: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            },
            union: true
          },
          S15: {
            type: 'structure',
            required: ['statusCode'],
            members: {
              statusCode: {}
            }
          },
          S1b: {
            type: 'structure',
            required: ['statusCode'],
            members: {
              statusCode: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=af9fb3bc26bfcb55b5d1c4751443678275e56e25.js.map