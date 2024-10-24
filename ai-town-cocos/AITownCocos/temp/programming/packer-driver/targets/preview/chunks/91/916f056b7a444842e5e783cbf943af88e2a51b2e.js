System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-10-26',
          endpointPrefix: 'refactor-spaces',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Migration Hub Refactor Spaces',
          serviceId: 'Migration Hub Refactor Spaces',
          signatureVersion: 'v4',
          signingName: 'refactor-spaces',
          uid: 'migration-hub-refactor-spaces-2021-10-26'
        },
        operations: {
          CreateApplication: {
            http: {
              requestUri: '/environments/{EnvironmentIdentifier}/applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EnvironmentIdentifier', 'Name', 'ProxyType', 'VpcId'],
              members: {
                ApiGatewayProxy: {
                  shape: 'S2'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                Name: {},
                ProxyType: {},
                Tags: {
                  shape: 'S9'
                },
                VpcId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApiGatewayProxy: {
                  shape: 'S2'
                },
                ApplicationId: {},
                Arn: {},
                CreatedByAccountId: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                EnvironmentId: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                OwnerAccountId: {},
                ProxyType: {},
                State: {},
                Tags: {
                  shape: 'S9'
                },
                VpcId: {}
              }
            }
          },
          CreateEnvironment: {
            http: {
              requestUri: '/environments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'NetworkFabricType'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Description: {},
                Name: {},
                NetworkFabricType: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                Description: {},
                EnvironmentId: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                NetworkFabricType: {},
                OwnerAccountId: {},
                State: {},
                Tags: {
                  shape: 'S9'
                }
              }
            }
          },
          CreateRoute: {
            http: {
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier', 'RouteType', 'ServiceIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                DefaultRoute: {
                  type: 'structure',
                  members: {
                    ActivationState: {}
                  }
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                RouteType: {},
                ServiceIdentifier: {},
                Tags: {
                  shape: 'S9'
                },
                UriPathRoute: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {},
                Arn: {},
                CreatedByAccountId: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                OwnerAccountId: {},
                RouteId: {},
                RouteType: {},
                ServiceId: {},
                State: {},
                Tags: {
                  shape: 'S9'
                },
                UriPathRoute: {
                  shape: 'Su'
                }
              }
            }
          },
          CreateService: {
            http: {
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EndpointType', 'EnvironmentIdentifier', 'Name'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Description: {},
                EndpointType: {},
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                LambdaEndpoint: {
                  shape: 'S14'
                },
                Name: {},
                Tags: {
                  shape: 'S9'
                },
                UrlEndpoint: {
                  shape: 'S17'
                },
                VpcId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {},
                Arn: {},
                CreatedByAccountId: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                Description: {},
                EndpointType: {},
                EnvironmentId: {},
                LambdaEndpoint: {
                  shape: 'S14'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                OwnerAccountId: {},
                ServiceId: {},
                State: {},
                Tags: {
                  shape: 'S9'
                },
                UrlEndpoint: {
                  shape: 'S17'
                },
                VpcId: {}
              }
            }
          },
          DeleteApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {},
                Arn: {},
                EnvironmentId: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                State: {}
              }
            },
            idempotent: true
          },
          DeleteEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/environments/{EnvironmentIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EnvironmentIdentifier'],
              members: {
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                EnvironmentId: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                State: {}
              }
            },
            idempotent: true
          },
          DeleteResourcePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/resourcepolicy/{Identifier}',
              responseCode: 200
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
              members: {}
            },
            idempotent: true
          },
          DeleteRoute: {
            http: {
              method: 'DELETE',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier', 'RouteIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                RouteIdentifier: {
                  location: 'uri',
                  locationName: 'RouteIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {},
                Arn: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                RouteId: {},
                ServiceId: {},
                State: {}
              }
            },
            idempotent: true
          },
          DeleteService: {
            http: {
              method: 'DELETE',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier', 'ServiceIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                ServiceIdentifier: {
                  location: 'uri',
                  locationName: 'ServiceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {},
                Arn: {},
                EnvironmentId: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                ServiceId: {},
                State: {}
              }
            },
            idempotent: true
          },
          GetApplication: {
            http: {
              method: 'GET',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApiGatewayProxy: {
                  type: 'structure',
                  members: {
                    ApiGatewayId: {},
                    EndpointType: {},
                    NlbArn: {},
                    NlbName: {},
                    ProxyUrl: {},
                    StageName: {},
                    VpcLinkId: {}
                  }
                },
                ApplicationId: {},
                Arn: {},
                CreatedByAccountId: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                EnvironmentId: {},
                Error: {
                  shape: 'S1t'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                OwnerAccountId: {},
                ProxyType: {},
                State: {},
                Tags: {
                  shape: 'S9'
                },
                VpcId: {}
              }
            }
          },
          GetEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/environments/{EnvironmentIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EnvironmentIdentifier'],
              members: {
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                Description: {},
                EnvironmentId: {},
                Error: {
                  shape: 'S1t'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                NetworkFabricType: {},
                OwnerAccountId: {},
                State: {},
                Tags: {
                  shape: 'S9'
                },
                TransitGatewayId: {}
              }
            }
          },
          GetResourcePolicy: {
            http: {
              method: 'GET',
              requestUri: '/resourcepolicy/{Identifier}',
              responseCode: 200
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
                Policy: {}
              }
            }
          },
          GetRoute: {
            http: {
              method: 'GET',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier', 'RouteIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                RouteIdentifier: {
                  location: 'uri',
                  locationName: 'RouteIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppendSourcePath: {
                  type: 'boolean'
                },
                ApplicationId: {},
                Arn: {},
                CreatedByAccountId: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                EnvironmentId: {},
                Error: {
                  shape: 'S1t'
                },
                IncludeChildPaths: {
                  type: 'boolean'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Methods: {
                  shape: 'Sw'
                },
                OwnerAccountId: {},
                PathResourceToId: {
                  shape: 'S29'
                },
                RouteId: {},
                RouteType: {},
                ServiceId: {},
                SourcePath: {},
                State: {},
                Tags: {
                  shape: 'S9'
                }
              }
            }
          },
          GetService: {
            http: {
              method: 'GET',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier', 'ServiceIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                ServiceIdentifier: {
                  location: 'uri',
                  locationName: 'ServiceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {},
                Arn: {},
                CreatedByAccountId: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                Description: {},
                EndpointType: {},
                EnvironmentId: {},
                Error: {
                  shape: 'S1t'
                },
                LambdaEndpoint: {
                  type: 'structure',
                  members: {
                    Arn: {}
                  }
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                OwnerAccountId: {},
                ServiceId: {},
                State: {},
                Tags: {
                  shape: 'S9'
                },
                UrlEndpoint: {
                  type: 'structure',
                  members: {
                    HealthUrl: {},
                    Url: {}
                  }
                },
                VpcId: {}
              }
            }
          },
          ListApplications: {
            http: {
              method: 'GET',
              requestUri: '/environments/{EnvironmentIdentifier}/applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EnvironmentIdentifier'],
              members: {
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApiGatewayProxy: {
                        type: 'structure',
                        members: {
                          ApiGatewayId: {},
                          EndpointType: {},
                          NlbArn: {},
                          NlbName: {},
                          ProxyUrl: {},
                          StageName: {},
                          VpcLinkId: {}
                        }
                      },
                      ApplicationId: {},
                      Arn: {},
                      CreatedByAccountId: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      EnvironmentId: {},
                      Error: {
                        shape: 'S1t'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      Name: {},
                      OwnerAccountId: {},
                      ProxyType: {},
                      State: {},
                      Tags: {
                        shape: 'S9'
                      },
                      VpcId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEnvironmentVpcs: {
            http: {
              method: 'GET',
              requestUri: '/environments/{EnvironmentIdentifier}/vpcs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EnvironmentIdentifier'],
              members: {
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EnvironmentVpcList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      CidrBlocks: {
                        type: 'list',
                        member: {}
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      EnvironmentId: {},
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      VpcId: {},
                      VpcName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEnvironments: {
            http: {
              method: 'GET',
              requestUri: '/environments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EnvironmentSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      Description: {},
                      EnvironmentId: {},
                      Error: {
                        shape: 'S1t'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      Name: {},
                      NetworkFabricType: {},
                      OwnerAccountId: {},
                      State: {},
                      Tags: {
                        shape: 'S9'
                      },
                      TransitGatewayId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRoutes: {
            http: {
              method: 'GET',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                RouteSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppendSourcePath: {
                        type: 'boolean'
                      },
                      ApplicationId: {},
                      Arn: {},
                      CreatedByAccountId: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      EnvironmentId: {},
                      Error: {
                        shape: 'S1t'
                      },
                      IncludeChildPaths: {
                        type: 'boolean'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      Methods: {
                        shape: 'Sw'
                      },
                      OwnerAccountId: {},
                      PathResourceToId: {
                        shape: 'S29'
                      },
                      RouteId: {},
                      RouteType: {},
                      ServiceId: {},
                      SourcePath: {},
                      State: {},
                      Tags: {
                        shape: 'S9'
                      }
                    }
                  }
                }
              }
            }
          },
          ListServices: {
            http: {
              method: 'GET',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier'],
              members: {
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ServiceSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {},
                      Arn: {},
                      CreatedByAccountId: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      Description: {},
                      EndpointType: {},
                      EnvironmentId: {},
                      Error: {
                        shape: 'S1t'
                      },
                      LambdaEndpoint: {
                        type: 'structure',
                        members: {
                          Arn: {}
                        }
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      Name: {},
                      OwnerAccountId: {},
                      ServiceId: {},
                      State: {},
                      Tags: {
                        shape: 'S9'
                      },
                      UrlEndpoint: {
                        type: 'structure',
                        members: {
                          HealthUrl: {},
                          Url: {}
                        }
                      },
                      VpcId: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S9'
                }
              }
            }
          },
          PutResourcePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/resourcepolicy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Policy', 'ResourceArn'],
              members: {
                Policy: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S9'
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
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {},
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateRoute: {
            http: {
              method: 'PATCH',
              requestUri: '/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ActivationState', 'ApplicationIdentifier', 'EnvironmentIdentifier', 'RouteIdentifier'],
              members: {
                ActivationState: {},
                ApplicationIdentifier: {
                  location: 'uri',
                  locationName: 'ApplicationIdentifier'
                },
                EnvironmentIdentifier: {
                  location: 'uri',
                  locationName: 'EnvironmentIdentifier'
                },
                RouteIdentifier: {
                  location: 'uri',
                  locationName: 'RouteIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {},
                Arn: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                RouteId: {},
                ServiceId: {},
                State: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            members: {
              EndpointType: {},
              StageName: {}
            }
          },
          S9: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Su: {
            type: 'structure',
            required: ['ActivationState', 'SourcePath'],
            members: {
              ActivationState: {},
              AppendSourcePath: {
                type: 'boolean'
              },
              IncludeChildPaths: {
                type: 'boolean'
              },
              Methods: {
                shape: 'Sw'
              },
              SourcePath: {}
            }
          },
          Sw: {
            type: 'list',
            member: {}
          },
          S14: {
            type: 'structure',
            required: ['Arn'],
            members: {
              Arn: {}
            }
          },
          S17: {
            type: 'structure',
            required: ['Url'],
            members: {
              HealthUrl: {},
              Url: {}
            }
          },
          S1t: {
            type: 'structure',
            members: {
              AccountId: {},
              AdditionalDetails: {
                type: 'map',
                key: {},
                value: {}
              },
              Code: {},
              Message: {},
              ResourceIdentifier: {},
              ResourceType: {}
            }
          },
          S29: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=916f056b7a444842e5e783cbf943af88e2a51b2e.js.map