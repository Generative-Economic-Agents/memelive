System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2019-12-02',
          endpointPrefix: 'schemas',
          signingName: 'schemas',
          serviceFullName: 'Schemas',
          serviceId: 'schemas',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'schemas-2019-12-02',
          signatureVersion: 'v4'
        },
        operations: {
          CreateDiscoverer: {
            http: {
              requestUri: '/v1/discoverers',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Description: {},
                SourceArn: {},
                CrossAccount: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              },
              required: ['SourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                DiscovererArn: {},
                DiscovererId: {},
                SourceArn: {},
                State: {},
                CrossAccount: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateRegistry: {
            http: {
              requestUri: '/v1/registries/name/{registryName}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Description: {},
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              },
              required: ['RegistryName']
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                RegistryArn: {},
                RegistryName: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateSchema: {
            http: {
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Content: {},
                Description: {},
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                },
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                },
                Type: {}
              },
              required: ['RegistryName', 'SchemaName', 'Type', 'Content']
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                LastModified: {
                  shape: 'Sf'
                },
                SchemaArn: {},
                SchemaName: {},
                SchemaVersion: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                },
                Type: {},
                VersionCreatedDate: {
                  shape: 'Sf'
                }
              }
            }
          },
          DeleteDiscoverer: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/discoverers/id/{discovererId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                DiscovererId: {
                  location: 'uri',
                  locationName: 'discovererId'
                }
              },
              required: ['DiscovererId']
            }
          },
          DeleteRegistry: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/registries/name/{registryName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                }
              },
              required: ['RegistryName']
            }
          },
          DeleteResourcePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/policy',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                RegistryName: {
                  location: 'querystring',
                  locationName: 'registryName'
                }
              }
            }
          },
          DeleteSchema: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                }
              },
              required: ['RegistryName', 'SchemaName']
            }
          },
          DeleteSchemaVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/version/{schemaVersion}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                },
                SchemaVersion: {
                  location: 'uri',
                  locationName: 'schemaVersion'
                }
              },
              required: ['SchemaVersion', 'RegistryName', 'SchemaName']
            }
          },
          DescribeCodeBinding: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Language: {
                  location: 'uri',
                  locationName: 'language'
                },
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                },
                SchemaVersion: {
                  location: 'querystring',
                  locationName: 'schemaVersion'
                }
              },
              required: ['RegistryName', 'SchemaName', 'Language']
            },
            output: {
              type: 'structure',
              members: {
                CreationDate: {
                  shape: 'Sf'
                },
                LastModified: {
                  shape: 'Sf'
                },
                SchemaVersion: {},
                Status: {}
              }
            }
          },
          DescribeDiscoverer: {
            http: {
              method: 'GET',
              requestUri: '/v1/discoverers/id/{discovererId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DiscovererId: {
                  location: 'uri',
                  locationName: 'discovererId'
                }
              },
              required: ['DiscovererId']
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                DiscovererArn: {},
                DiscovererId: {},
                SourceArn: {},
                State: {},
                CrossAccount: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          DescribeRegistry: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries/name/{registryName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                }
              },
              required: ['RegistryName']
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                RegistryArn: {},
                RegistryName: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          DescribeSchema: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                },
                SchemaVersion: {
                  location: 'querystring',
                  locationName: 'schemaVersion'
                }
              },
              required: ['RegistryName', 'SchemaName']
            },
            output: {
              type: 'structure',
              members: {
                Content: {},
                Description: {},
                LastModified: {
                  shape: 'Sf'
                },
                SchemaArn: {},
                SchemaName: {},
                SchemaVersion: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                },
                Type: {},
                VersionCreatedDate: {
                  shape: 'Sf'
                }
              }
            }
          },
          ExportSchema: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/export',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                },
                SchemaVersion: {
                  location: 'querystring',
                  locationName: 'schemaVersion'
                },
                Type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              },
              required: ['RegistryName', 'SchemaName', 'Type']
            },
            output: {
              type: 'structure',
              members: {
                Content: {},
                SchemaArn: {},
                SchemaName: {},
                SchemaVersion: {},
                Type: {}
              }
            }
          },
          GetCodeBindingSource: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}/source',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Language: {
                  location: 'uri',
                  locationName: 'language'
                },
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                },
                SchemaVersion: {
                  location: 'querystring',
                  locationName: 'schemaVersion'
                }
              },
              required: ['RegistryName', 'SchemaName', 'Language']
            },
            output: {
              type: 'structure',
              members: {
                Body: {
                  type: 'blob'
                }
              },
              payload: 'Body'
            }
          },
          GetDiscoveredSchema: {
            http: {
              requestUri: '/v1/discover',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Events: {
                  type: 'list',
                  member: {}
                },
                Type: {}
              },
              required: ['Type', 'Events']
            },
            output: {
              type: 'structure',
              members: {
                Content: {}
              }
            }
          },
          GetResourcePolicy: {
            http: {
              method: 'GET',
              requestUri: '/v1/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RegistryName: {
                  location: 'querystring',
                  locationName: 'registryName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  jsonvalue: true
                },
                RevisionId: {}
              }
            }
          },
          ListDiscoverers: {
            http: {
              method: 'GET',
              requestUri: '/v1/discoverers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DiscovererIdPrefix: {
                  location: 'querystring',
                  locationName: 'discovererIdPrefix'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                SourceArnPrefix: {
                  location: 'querystring',
                  locationName: 'sourceArnPrefix'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Discoverers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DiscovererArn: {},
                      DiscovererId: {},
                      SourceArn: {},
                      State: {},
                      CrossAccount: {
                        type: 'boolean'
                      },
                      Tags: {
                        shape: 'S5',
                        locationName: 'tags'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRegistries: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RegistryNamePrefix: {
                  location: 'querystring',
                  locationName: 'registryNamePrefix'
                },
                Scope: {
                  location: 'querystring',
                  locationName: 'scope'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Registries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RegistryArn: {},
                      RegistryName: {},
                      Tags: {
                        shape: 'S5',
                        locationName: 'tags'
                      }
                    }
                  }
                }
              }
            }
          },
          ListSchemaVersions: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                }
              },
              required: ['RegistryName', 'SchemaName']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                SchemaVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SchemaArn: {},
                      SchemaName: {},
                      SchemaVersion: {},
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          ListSchemas: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries/name/{registryName}/schemas',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaNamePrefix: {
                  location: 'querystring',
                  locationName: 'schemaNamePrefix'
                }
              },
              required: ['RegistryName']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Schemas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LastModified: {
                        shape: 'Sf'
                      },
                      SchemaArn: {},
                      SchemaName: {},
                      Tags: {
                        shape: 'S5',
                        locationName: 'tags'
                      },
                      VersionCount: {
                        type: 'long'
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
              requestUri: '/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          PutCodeBinding: {
            http: {
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Language: {
                  location: 'uri',
                  locationName: 'language'
                },
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                },
                SchemaVersion: {
                  location: 'querystring',
                  locationName: 'schemaVersion'
                }
              },
              required: ['RegistryName', 'SchemaName', 'Language']
            },
            output: {
              type: 'structure',
              members: {
                CreationDate: {
                  shape: 'Sf'
                },
                LastModified: {
                  shape: 'Sf'
                },
                SchemaVersion: {},
                Status: {}
              }
            }
          },
          PutResourcePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/v1/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Policy: {
                  jsonvalue: true
                },
                RegistryName: {
                  location: 'querystring',
                  locationName: 'registryName'
                },
                RevisionId: {}
              },
              required: ['Policy']
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  jsonvalue: true
                },
                RevisionId: {}
              }
            }
          },
          SearchSchemas: {
            http: {
              method: 'GET',
              requestUri: '/v1/registries/name/{registryName}/schemas/search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Keywords: {
                  location: 'querystring',
                  locationName: 'keywords'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                }
              },
              required: ['RegistryName', 'Keywords']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Schemas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RegistryName: {},
                      SchemaArn: {},
                      SchemaName: {},
                      SchemaVersions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            CreatedDate: {
                              shape: 'Sf'
                            },
                            SchemaVersion: {},
                            Type: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          StartDiscoverer: {
            http: {
              requestUri: '/v1/discoverers/id/{discovererId}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DiscovererId: {
                  location: 'uri',
                  locationName: 'discovererId'
                }
              },
              required: ['DiscovererId']
            },
            output: {
              type: 'structure',
              members: {
                DiscovererId: {},
                State: {}
              }
            }
          },
          StopDiscoverer: {
            http: {
              requestUri: '/v1/discoverers/id/{discovererId}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DiscovererId: {
                  location: 'uri',
                  locationName: 'discovererId'
                }
              },
              required: ['DiscovererId']
            },
            output: {
              type: 'structure',
              members: {
                DiscovererId: {},
                State: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              },
              required: ['ResourceArn', 'Tags']
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {}
                }
              },
              required: ['TagKeys', 'ResourceArn']
            }
          },
          UpdateDiscoverer: {
            http: {
              method: 'PUT',
              requestUri: '/v1/discoverers/id/{discovererId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Description: {},
                DiscovererId: {
                  location: 'uri',
                  locationName: 'discovererId'
                },
                CrossAccount: {
                  type: 'boolean'
                }
              },
              required: ['DiscovererId']
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                DiscovererArn: {},
                DiscovererId: {},
                SourceArn: {},
                State: {},
                CrossAccount: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateRegistry: {
            http: {
              method: 'PUT',
              requestUri: '/v1/registries/name/{registryName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Description: {},
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                }
              },
              required: ['RegistryName']
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                RegistryArn: {},
                RegistryName: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateSchema: {
            http: {
              method: 'PUT',
              requestUri: '/v1/registries/name/{registryName}/schemas/name/{schemaName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClientTokenId: {
                  idempotencyToken: true
                },
                Content: {},
                Description: {},
                RegistryName: {
                  location: 'uri',
                  locationName: 'registryName'
                },
                SchemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                },
                Type: {}
              },
              required: ['RegistryName', 'SchemaName']
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                LastModified: {
                  shape: 'Sf'
                },
                SchemaArn: {},
                SchemaName: {},
                SchemaVersion: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                },
                Type: {},
                VersionCreatedDate: {
                  shape: 'Sf'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {}
          },
          Sf: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a7b2d56e72b5b3946131400c501faf9ad63e0850.js.map