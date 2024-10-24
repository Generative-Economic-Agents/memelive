System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-01-25',
          endpointPrefix: 'appmesh',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS App Mesh',
          serviceId: 'App Mesh',
          signatureVersion: 'v4',
          signingName: 'appmesh',
          uid: 'appmesh-2019-01-25'
        },
        operations: {
          CreateGatewayRoute: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['gatewayRouteName', 'meshName', 'spec', 'virtualGatewayName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                gatewayRouteName: {},
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S5'
                },
                tags: {
                  shape: 'S1a'
                },
                virtualGatewayName: {
                  location: 'uri',
                  locationName: 'virtualGatewayName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['gatewayRoute'],
              members: {
                gatewayRoute: {
                  shape: 'S1f'
                }
              },
              payload: 'gatewayRoute'
            },
            idempotent: true
          },
          CreateMesh: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {},
                spec: {
                  shape: 'S1m'
                },
                tags: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['mesh'],
              members: {
                mesh: {
                  shape: 'S1s'
                }
              },
              payload: 'mesh'
            },
            idempotent: true
          },
          CreateRoute: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'routeName', 'spec', 'virtualRouterName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                routeName: {},
                spec: {
                  shape: 'S1w'
                },
                tags: {
                  shape: 'S1a'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['route'],
              members: {
                route: {
                  shape: 'S2x'
                }
              },
              payload: 'route'
            },
            idempotent: true
          },
          CreateVirtualGateway: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateways',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'spec', 'virtualGatewayName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S31'
                },
                tags: {
                  shape: 'S1a'
                },
                virtualGatewayName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['virtualGateway'],
              members: {
                virtualGateway: {
                  shape: 'S4h'
                }
              },
              payload: 'virtualGateway'
            },
            idempotent: true
          },
          CreateVirtualNode: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualNodes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'spec', 'virtualNodeName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S4l'
                },
                tags: {
                  shape: 'S1a'
                },
                virtualNodeName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['virtualNode'],
              members: {
                virtualNode: {
                  shape: 'S63'
                }
              },
              payload: 'virtualNode'
            },
            idempotent: true
          },
          CreateVirtualRouter: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouters',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'spec', 'virtualRouterName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S67'
                },
                tags: {
                  shape: 'S1a'
                },
                virtualRouterName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['virtualRouter'],
              members: {
                virtualRouter: {
                  shape: 'S6b'
                }
              },
              payload: 'virtualRouter'
            },
            idempotent: true
          },
          CreateVirtualService: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualServices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'spec', 'virtualServiceName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S6f'
                },
                tags: {
                  shape: 'S1a'
                },
                virtualServiceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['virtualService'],
              members: {
                virtualService: {
                  shape: 'S6k'
                }
              },
              payload: 'virtualService'
            },
            idempotent: true
          },
          DeleteGatewayRoute: {
            http: {
              method: 'DELETE',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['gatewayRouteName', 'meshName', 'virtualGatewayName'],
              members: {
                gatewayRouteName: {
                  location: 'uri',
                  locationName: 'gatewayRouteName'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualGatewayName: {
                  location: 'uri',
                  locationName: 'virtualGatewayName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['gatewayRoute'],
              members: {
                gatewayRoute: {
                  shape: 'S1f'
                }
              },
              payload: 'gatewayRoute'
            },
            idempotent: true
          },
          DeleteMesh: {
            http: {
              method: 'DELETE',
              requestUri: '/v20190125/meshes/{meshName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['mesh'],
              members: {
                mesh: {
                  shape: 'S1s'
                }
              },
              payload: 'mesh'
            },
            idempotent: true
          },
          DeleteRoute: {
            http: {
              method: 'DELETE',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'routeName', 'virtualRouterName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                routeName: {
                  location: 'uri',
                  locationName: 'routeName'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['route'],
              members: {
                route: {
                  shape: 'S2x'
                }
              },
              payload: 'route'
            },
            idempotent: true
          },
          DeleteVirtualGateway: {
            http: {
              method: 'DELETE',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualGatewayName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualGatewayName: {
                  location: 'uri',
                  locationName: 'virtualGatewayName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualGateway'],
              members: {
                virtualGateway: {
                  shape: 'S4h'
                }
              },
              payload: 'virtualGateway'
            },
            idempotent: true
          },
          DeleteVirtualNode: {
            http: {
              method: 'DELETE',
              requestUri: '/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualNodeName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualNodeName: {
                  location: 'uri',
                  locationName: 'virtualNodeName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualNode'],
              members: {
                virtualNode: {
                  shape: 'S63'
                }
              },
              payload: 'virtualNode'
            },
            idempotent: true
          },
          DeleteVirtualRouter: {
            http: {
              method: 'DELETE',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualRouterName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualRouter'],
              members: {
                virtualRouter: {
                  shape: 'S6b'
                }
              },
              payload: 'virtualRouter'
            },
            idempotent: true
          },
          DeleteVirtualService: {
            http: {
              method: 'DELETE',
              requestUri: '/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualServiceName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualServiceName: {
                  location: 'uri',
                  locationName: 'virtualServiceName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualService'],
              members: {
                virtualService: {
                  shape: 'S6k'
                }
              },
              payload: 'virtualService'
            },
            idempotent: true
          },
          DescribeGatewayRoute: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['gatewayRouteName', 'meshName', 'virtualGatewayName'],
              members: {
                gatewayRouteName: {
                  location: 'uri',
                  locationName: 'gatewayRouteName'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualGatewayName: {
                  location: 'uri',
                  locationName: 'virtualGatewayName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['gatewayRoute'],
              members: {
                gatewayRoute: {
                  shape: 'S1f'
                }
              },
              payload: 'gatewayRoute'
            }
          },
          DescribeMesh: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['mesh'],
              members: {
                mesh: {
                  shape: 'S1s'
                }
              },
              payload: 'mesh'
            }
          },
          DescribeRoute: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'routeName', 'virtualRouterName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                routeName: {
                  location: 'uri',
                  locationName: 'routeName'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['route'],
              members: {
                route: {
                  shape: 'S2x'
                }
              },
              payload: 'route'
            }
          },
          DescribeVirtualGateway: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualGatewayName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualGatewayName: {
                  location: 'uri',
                  locationName: 'virtualGatewayName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualGateway'],
              members: {
                virtualGateway: {
                  shape: 'S4h'
                }
              },
              payload: 'virtualGateway'
            }
          },
          DescribeVirtualNode: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualNodeName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualNodeName: {
                  location: 'uri',
                  locationName: 'virtualNodeName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualNode'],
              members: {
                virtualNode: {
                  shape: 'S63'
                }
              },
              payload: 'virtualNode'
            }
          },
          DescribeVirtualRouter: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualRouterName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualRouter'],
              members: {
                virtualRouter: {
                  shape: 'S6b'
                }
              },
              payload: 'virtualRouter'
            }
          },
          DescribeVirtualService: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualServiceName'],
              members: {
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                virtualServiceName: {
                  location: 'uri',
                  locationName: 'virtualServiceName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualService'],
              members: {
                virtualService: {
                  shape: 'S6k'
                }
              },
              payload: 'virtualService'
            }
          },
          ListGatewayRoutes: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualGatewayName'],
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                virtualGatewayName: {
                  location: 'uri',
                  locationName: 'virtualGatewayName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['gatewayRoutes'],
              members: {
                gatewayRoutes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'gatewayRouteName', 'lastUpdatedAt', 'meshName', 'meshOwner', 'resourceOwner', 'version', 'virtualGatewayName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      gatewayRouteName: {},
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      meshName: {},
                      meshOwner: {},
                      resourceOwner: {},
                      version: {
                        type: 'long'
                      },
                      virtualGatewayName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListMeshes: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
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
              required: ['meshes'],
              members: {
                meshes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastUpdatedAt', 'meshName', 'meshOwner', 'resourceOwner', 'version'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      meshName: {},
                      meshOwner: {},
                      resourceOwner: {},
                      version: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRoutes: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'virtualRouterName'],
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['routes'],
              members: {
                nextToken: {},
                routes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastUpdatedAt', 'meshName', 'meshOwner', 'resourceOwner', 'routeName', 'version', 'virtualRouterName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      meshName: {},
                      meshOwner: {},
                      resourceOwner: {},
                      routeName: {},
                      version: {
                        type: 'long'
                      },
                      virtualRouterName: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['tags'],
              members: {
                nextToken: {},
                tags: {
                  shape: 'S1a'
                }
              }
            }
          },
          ListVirtualGateways: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateways',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualGateways'],
              members: {
                nextToken: {},
                virtualGateways: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastUpdatedAt', 'meshName', 'meshOwner', 'resourceOwner', 'version', 'virtualGatewayName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      meshName: {},
                      meshOwner: {},
                      resourceOwner: {},
                      version: {
                        type: 'long'
                      },
                      virtualGatewayName: {}
                    }
                  }
                }
              }
            }
          },
          ListVirtualNodes: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualNodes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualNodes'],
              members: {
                nextToken: {},
                virtualNodes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastUpdatedAt', 'meshName', 'meshOwner', 'resourceOwner', 'version', 'virtualNodeName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      meshName: {},
                      meshOwner: {},
                      resourceOwner: {},
                      version: {
                        type: 'long'
                      },
                      virtualNodeName: {}
                    }
                  }
                }
              }
            }
          },
          ListVirtualRouters: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouters',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualRouters'],
              members: {
                nextToken: {},
                virtualRouters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastUpdatedAt', 'meshName', 'meshOwner', 'resourceOwner', 'version', 'virtualRouterName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      meshName: {},
                      meshOwner: {},
                      resourceOwner: {},
                      version: {
                        type: 'long'
                      },
                      virtualRouterName: {}
                    }
                  }
                }
              }
            }
          },
          ListVirtualServices: {
            http: {
              method: 'GET',
              requestUri: '/v20190125/meshes/{meshName}/virtualServices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualServices'],
              members: {
                nextToken: {},
                virtualServices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastUpdatedAt', 'meshName', 'meshOwner', 'resourceOwner', 'version', 'virtualServiceName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      meshName: {},
                      meshOwner: {},
                      resourceOwner: {},
                      version: {
                        type: 'long'
                      },
                      virtualServiceName: {}
                    }
                  }
                }
              }
            }
          },
          TagResource: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/tag',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/untag',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                tagKeys: {
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
          UpdateGatewayRoute: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['gatewayRouteName', 'meshName', 'spec', 'virtualGatewayName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                gatewayRouteName: {
                  location: 'uri',
                  locationName: 'gatewayRouteName'
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S5'
                },
                virtualGatewayName: {
                  location: 'uri',
                  locationName: 'virtualGatewayName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['gatewayRoute'],
              members: {
                gatewayRoute: {
                  shape: 'S1f'
                }
              },
              payload: 'gatewayRoute'
            },
            idempotent: true
          },
          UpdateMesh: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                spec: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['mesh'],
              members: {
                mesh: {
                  shape: 'S1s'
                }
              },
              payload: 'mesh'
            },
            idempotent: true
          },
          UpdateRoute: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'routeName', 'spec', 'virtualRouterName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                routeName: {
                  location: 'uri',
                  locationName: 'routeName'
                },
                spec: {
                  shape: 'S1w'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['route'],
              members: {
                route: {
                  shape: 'S2x'
                }
              },
              payload: 'route'
            },
            idempotent: true
          },
          UpdateVirtualGateway: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'spec', 'virtualGatewayName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S31'
                },
                virtualGatewayName: {
                  location: 'uri',
                  locationName: 'virtualGatewayName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualGateway'],
              members: {
                virtualGateway: {
                  shape: 'S4h'
                }
              },
              payload: 'virtualGateway'
            },
            idempotent: true
          },
          UpdateVirtualNode: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'spec', 'virtualNodeName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S4l'
                },
                virtualNodeName: {
                  location: 'uri',
                  locationName: 'virtualNodeName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualNode'],
              members: {
                virtualNode: {
                  shape: 'S63'
                }
              },
              payload: 'virtualNode'
            },
            idempotent: true
          },
          UpdateVirtualRouter: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'spec', 'virtualRouterName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S67'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualRouter'],
              members: {
                virtualRouter: {
                  shape: 'S6b'
                }
              },
              payload: 'virtualRouter'
            },
            idempotent: true
          },
          UpdateVirtualService: {
            http: {
              method: 'PUT',
              requestUri: '/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName', 'spec', 'virtualServiceName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {
                  location: 'uri',
                  locationName: 'meshName'
                },
                meshOwner: {
                  location: 'querystring',
                  locationName: 'meshOwner'
                },
                spec: {
                  shape: 'S6f'
                },
                virtualServiceName: {
                  location: 'uri',
                  locationName: 'virtualServiceName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['virtualService'],
              members: {
                virtualService: {
                  shape: 'S6k'
                }
              },
              payload: 'virtualService'
            },
            idempotent: true
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              grpcRoute: {
                type: 'structure',
                required: ['action', 'match'],
                members: {
                  action: {
                    type: 'structure',
                    required: ['target'],
                    members: {
                      rewrite: {
                        type: 'structure',
                        members: {
                          hostname: {
                            shape: 'S9'
                          }
                        }
                      },
                      target: {
                        shape: 'Sb'
                      }
                    }
                  },
                  match: {
                    type: 'structure',
                    members: {
                      hostname: {
                        shape: 'Sf'
                      },
                      metadata: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['name'],
                          members: {
                            invert: {
                              type: 'boolean'
                            },
                            match: {
                              type: 'structure',
                              members: {
                                exact: {},
                                prefix: {},
                                range: {
                                  shape: 'Sn'
                                },
                                regex: {},
                                suffix: {}
                              },
                              union: true
                            },
                            name: {}
                          }
                        }
                      },
                      port: {
                        type: 'integer'
                      },
                      serviceName: {}
                    }
                  }
                }
              },
              http2Route: {
                shape: 'Sr'
              },
              httpRoute: {
                shape: 'Sr'
              },
              priority: {
                type: 'integer'
              }
            }
          },
          S9: {
            type: 'structure',
            members: {
              defaultTargetHostname: {}
            }
          },
          Sb: {
            type: 'structure',
            required: ['virtualService'],
            members: {
              port: {
                type: 'integer'
              },
              virtualService: {
                type: 'structure',
                required: ['virtualServiceName'],
                members: {
                  virtualServiceName: {}
                }
              }
            }
          },
          Sf: {
            type: 'structure',
            members: {
              exact: {},
              suffix: {}
            }
          },
          Sn: {
            type: 'structure',
            required: ['end', 'start'],
            members: {
              end: {
                type: 'long'
              },
              start: {
                type: 'long'
              }
            }
          },
          Sr: {
            type: 'structure',
            required: ['action', 'match'],
            members: {
              action: {
                type: 'structure',
                required: ['target'],
                members: {
                  rewrite: {
                    type: 'structure',
                    members: {
                      hostname: {
                        shape: 'S9'
                      },
                      path: {
                        type: 'structure',
                        members: {
                          exact: {}
                        }
                      },
                      prefix: {
                        type: 'structure',
                        members: {
                          defaultPrefix: {},
                          value: {}
                        }
                      }
                    }
                  },
                  target: {
                    shape: 'Sb'
                  }
                }
              },
              match: {
                type: 'structure',
                members: {
                  headers: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['name'],
                      members: {
                        invert: {
                          type: 'boolean'
                        },
                        match: {
                          shape: 'S11'
                        },
                        name: {}
                      }
                    }
                  },
                  hostname: {
                    shape: 'Sf'
                  },
                  method: {},
                  path: {
                    shape: 'S13'
                  },
                  port: {
                    type: 'integer'
                  },
                  prefix: {},
                  queryParameters: {
                    shape: 'S15'
                  }
                }
              }
            }
          },
          S11: {
            type: 'structure',
            members: {
              exact: {},
              prefix: {},
              range: {
                shape: 'Sn'
              },
              regex: {},
              suffix: {}
            },
            union: true
          },
          S13: {
            type: 'structure',
            members: {
              exact: {},
              regex: {}
            }
          },
          S15: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                match: {
                  type: 'structure',
                  members: {
                    exact: {}
                  }
                },
                name: {}
              }
            }
          },
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          S1f: {
            type: 'structure',
            required: ['gatewayRouteName', 'meshName', 'metadata', 'spec', 'status', 'virtualGatewayName'],
            members: {
              gatewayRouteName: {},
              meshName: {},
              metadata: {
                shape: 'S1g'
              },
              spec: {
                shape: 'S5'
              },
              status: {
                type: 'structure',
                required: ['status'],
                members: {
                  status: {}
                }
              },
              virtualGatewayName: {}
            }
          },
          S1g: {
            type: 'structure',
            required: ['arn', 'createdAt', 'lastUpdatedAt', 'meshOwner', 'resourceOwner', 'uid', 'version'],
            members: {
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              lastUpdatedAt: {
                type: 'timestamp'
              },
              meshOwner: {},
              resourceOwner: {},
              uid: {},
              version: {
                type: 'long'
              }
            }
          },
          S1m: {
            type: 'structure',
            members: {
              egressFilter: {
                type: 'structure',
                required: ['type'],
                members: {
                  type: {}
                }
              },
              serviceDiscovery: {
                type: 'structure',
                members: {
                  ipPreference: {}
                }
              }
            }
          },
          S1s: {
            type: 'structure',
            required: ['meshName', 'metadata', 'spec', 'status'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S1g'
              },
              spec: {
                shape: 'S1m'
              },
              status: {
                type: 'structure',
                members: {
                  status: {}
                }
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              grpcRoute: {
                type: 'structure',
                required: ['action', 'match'],
                members: {
                  action: {
                    type: 'structure',
                    required: ['weightedTargets'],
                    members: {
                      weightedTargets: {
                        shape: 'S1z'
                      }
                    }
                  },
                  match: {
                    type: 'structure',
                    members: {
                      metadata: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['name'],
                          members: {
                            invert: {
                              type: 'boolean'
                            },
                            match: {
                              type: 'structure',
                              members: {
                                exact: {},
                                prefix: {},
                                range: {
                                  shape: 'Sn'
                                },
                                regex: {},
                                suffix: {}
                              },
                              union: true
                            },
                            name: {}
                          }
                        }
                      },
                      methodName: {},
                      port: {
                        type: 'integer'
                      },
                      serviceName: {}
                    }
                  },
                  retryPolicy: {
                    type: 'structure',
                    required: ['maxRetries', 'perRetryTimeout'],
                    members: {
                      grpcRetryEvents: {
                        type: 'list',
                        member: {}
                      },
                      httpRetryEvents: {
                        shape: 'S2a'
                      },
                      maxRetries: {
                        type: 'long'
                      },
                      perRetryTimeout: {
                        shape: 'S2d'
                      },
                      tcpRetryEvents: {
                        shape: 'S2g'
                      }
                    }
                  },
                  timeout: {
                    shape: 'S2i'
                  }
                }
              },
              http2Route: {
                shape: 'S2j'
              },
              httpRoute: {
                shape: 'S2j'
              },
              priority: {
                type: 'integer'
              },
              tcpRoute: {
                type: 'structure',
                required: ['action'],
                members: {
                  action: {
                    type: 'structure',
                    required: ['weightedTargets'],
                    members: {
                      weightedTargets: {
                        shape: 'S1z'
                      }
                    }
                  },
                  match: {
                    type: 'structure',
                    members: {
                      port: {
                        type: 'integer'
                      }
                    }
                  },
                  timeout: {
                    shape: 'S2v'
                  }
                }
              }
            }
          },
          S1z: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['virtualNode', 'weight'],
              members: {
                port: {
                  type: 'integer'
                },
                virtualNode: {},
                weight: {
                  type: 'integer'
                }
              }
            }
          },
          S2a: {
            type: 'list',
            member: {}
          },
          S2d: {
            type: 'structure',
            members: {
              unit: {},
              value: {
                type: 'long'
              }
            }
          },
          S2g: {
            type: 'list',
            member: {}
          },
          S2i: {
            type: 'structure',
            members: {
              idle: {
                shape: 'S2d'
              },
              perRequest: {
                shape: 'S2d'
              }
            }
          },
          S2j: {
            type: 'structure',
            required: ['action', 'match'],
            members: {
              action: {
                type: 'structure',
                required: ['weightedTargets'],
                members: {
                  weightedTargets: {
                    shape: 'S1z'
                  }
                }
              },
              match: {
                type: 'structure',
                members: {
                  headers: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['name'],
                      members: {
                        invert: {
                          type: 'boolean'
                        },
                        match: {
                          shape: 'S11'
                        },
                        name: {}
                      }
                    }
                  },
                  method: {},
                  path: {
                    shape: 'S13'
                  },
                  port: {
                    type: 'integer'
                  },
                  prefix: {},
                  queryParameters: {
                    shape: 'S15'
                  },
                  scheme: {}
                }
              },
              retryPolicy: {
                type: 'structure',
                required: ['maxRetries', 'perRetryTimeout'],
                members: {
                  httpRetryEvents: {
                    shape: 'S2a'
                  },
                  maxRetries: {
                    type: 'long'
                  },
                  perRetryTimeout: {
                    shape: 'S2d'
                  },
                  tcpRetryEvents: {
                    shape: 'S2g'
                  }
                }
              },
              timeout: {
                shape: 'S2q'
              }
            }
          },
          S2q: {
            type: 'structure',
            members: {
              idle: {
                shape: 'S2d'
              },
              perRequest: {
                shape: 'S2d'
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              idle: {
                shape: 'S2d'
              }
            }
          },
          S2x: {
            type: 'structure',
            required: ['meshName', 'metadata', 'routeName', 'spec', 'status', 'virtualRouterName'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S1g'
              },
              routeName: {},
              spec: {
                shape: 'S1w'
              },
              status: {
                type: 'structure',
                required: ['status'],
                members: {
                  status: {}
                }
              },
              virtualRouterName: {}
            }
          },
          S31: {
            type: 'structure',
            required: ['listeners'],
            members: {
              backendDefaults: {
                type: 'structure',
                members: {
                  clientPolicy: {
                    type: 'structure',
                    members: {
                      tls: {
                        type: 'structure',
                        required: ['validation'],
                        members: {
                          certificate: {
                            type: 'structure',
                            members: {
                              file: {
                                shape: 'S36'
                              },
                              sds: {
                                shape: 'S38'
                              }
                            },
                            union: true
                          },
                          enforce: {
                            type: 'boolean'
                          },
                          ports: {
                            shape: 'S3a'
                          },
                          validation: {
                            type: 'structure',
                            required: ['trust'],
                            members: {
                              subjectAlternativeNames: {
                                shape: 'S3d'
                              },
                              trust: {
                                type: 'structure',
                                members: {
                                  acm: {
                                    type: 'structure',
                                    required: ['certificateAuthorityArns'],
                                    members: {
                                      certificateAuthorityArns: {
                                        type: 'list',
                                        member: {}
                                      }
                                    }
                                  },
                                  file: {
                                    shape: 'S3k'
                                  },
                                  sds: {
                                    shape: 'S3l'
                                  }
                                },
                                union: true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              listeners: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['portMapping'],
                  members: {
                    connectionPool: {
                      type: 'structure',
                      members: {
                        grpc: {
                          type: 'structure',
                          required: ['maxRequests'],
                          members: {
                            maxRequests: {
                              type: 'integer'
                            }
                          }
                        },
                        http: {
                          type: 'structure',
                          required: ['maxConnections'],
                          members: {
                            maxConnections: {
                              type: 'integer'
                            },
                            maxPendingRequests: {
                              type: 'integer'
                            }
                          }
                        },
                        http2: {
                          type: 'structure',
                          required: ['maxRequests'],
                          members: {
                            maxRequests: {
                              type: 'integer'
                            }
                          }
                        }
                      },
                      union: true
                    },
                    healthCheck: {
                      type: 'structure',
                      required: ['healthyThreshold', 'intervalMillis', 'protocol', 'timeoutMillis', 'unhealthyThreshold'],
                      members: {
                        healthyThreshold: {
                          type: 'integer'
                        },
                        intervalMillis: {
                          type: 'long'
                        },
                        path: {},
                        port: {
                          type: 'integer'
                        },
                        protocol: {},
                        timeoutMillis: {
                          type: 'long'
                        },
                        unhealthyThreshold: {
                          type: 'integer'
                        }
                      }
                    },
                    portMapping: {
                      type: 'structure',
                      required: ['port', 'protocol'],
                      members: {
                        port: {
                          type: 'integer'
                        },
                        protocol: {}
                      }
                    },
                    tls: {
                      type: 'structure',
                      required: ['certificate', 'mode'],
                      members: {
                        certificate: {
                          type: 'structure',
                          members: {
                            acm: {
                              type: 'structure',
                              required: ['certificateArn'],
                              members: {
                                certificateArn: {}
                              }
                            },
                            file: {
                              shape: 'S36'
                            },
                            sds: {
                              shape: 'S38'
                            }
                          },
                          union: true
                        },
                        mode: {},
                        validation: {
                          type: 'structure',
                          required: ['trust'],
                          members: {
                            subjectAlternativeNames: {
                              shape: 'S3d'
                            },
                            trust: {
                              type: 'structure',
                              members: {
                                file: {
                                  shape: 'S3k'
                                },
                                sds: {
                                  shape: 'S3l'
                                }
                              },
                              union: true
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              logging: {
                type: 'structure',
                members: {
                  accessLog: {
                    type: 'structure',
                    members: {
                      file: {
                        type: 'structure',
                        required: ['path'],
                        members: {
                          format: {
                            shape: 'S4a'
                          },
                          path: {}
                        }
                      }
                    },
                    union: true
                  }
                }
              }
            }
          },
          S36: {
            type: 'structure',
            required: ['certificateChain', 'privateKey'],
            members: {
              certificateChain: {},
              privateKey: {}
            }
          },
          S38: {
            type: 'structure',
            required: ['secretName'],
            members: {
              secretName: {}
            }
          },
          S3a: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          S3d: {
            type: 'structure',
            required: ['match'],
            members: {
              match: {
                type: 'structure',
                required: ['exact'],
                members: {
                  exact: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S3k: {
            type: 'structure',
            required: ['certificateChain'],
            members: {
              certificateChain: {}
            }
          },
          S3l: {
            type: 'structure',
            required: ['secretName'],
            members: {
              secretName: {}
            }
          },
          S4a: {
            type: 'structure',
            members: {
              json: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['key', 'value'],
                  members: {
                    key: {},
                    value: {}
                  }
                }
              },
              text: {}
            },
            union: true
          },
          S4h: {
            type: 'structure',
            required: ['meshName', 'metadata', 'spec', 'status', 'virtualGatewayName'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S1g'
              },
              spec: {
                shape: 'S31'
              },
              status: {
                type: 'structure',
                required: ['status'],
                members: {
                  status: {}
                }
              },
              virtualGatewayName: {}
            }
          },
          S4l: {
            type: 'structure',
            members: {
              backendDefaults: {
                type: 'structure',
                members: {
                  clientPolicy: {
                    shape: 'S4n'
                  }
                }
              },
              backends: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    virtualService: {
                      type: 'structure',
                      required: ['virtualServiceName'],
                      members: {
                        clientPolicy: {
                          shape: 'S4n'
                        },
                        virtualServiceName: {}
                      }
                    }
                  },
                  union: true
                }
              },
              listeners: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['portMapping'],
                  members: {
                    connectionPool: {
                      type: 'structure',
                      members: {
                        grpc: {
                          type: 'structure',
                          required: ['maxRequests'],
                          members: {
                            maxRequests: {
                              type: 'integer'
                            }
                          }
                        },
                        http: {
                          type: 'structure',
                          required: ['maxConnections'],
                          members: {
                            maxConnections: {
                              type: 'integer'
                            },
                            maxPendingRequests: {
                              type: 'integer'
                            }
                          }
                        },
                        http2: {
                          type: 'structure',
                          required: ['maxRequests'],
                          members: {
                            maxRequests: {
                              type: 'integer'
                            }
                          }
                        },
                        tcp: {
                          type: 'structure',
                          required: ['maxConnections'],
                          members: {
                            maxConnections: {
                              type: 'integer'
                            }
                          }
                        }
                      },
                      union: true
                    },
                    healthCheck: {
                      type: 'structure',
                      required: ['healthyThreshold', 'intervalMillis', 'protocol', 'timeoutMillis', 'unhealthyThreshold'],
                      members: {
                        healthyThreshold: {
                          type: 'integer'
                        },
                        intervalMillis: {
                          type: 'long'
                        },
                        path: {},
                        port: {
                          type: 'integer'
                        },
                        protocol: {},
                        timeoutMillis: {
                          type: 'long'
                        },
                        unhealthyThreshold: {
                          type: 'integer'
                        }
                      }
                    },
                    outlierDetection: {
                      type: 'structure',
                      required: ['baseEjectionDuration', 'interval', 'maxEjectionPercent', 'maxServerErrors'],
                      members: {
                        baseEjectionDuration: {
                          shape: 'S2d'
                        },
                        interval: {
                          shape: 'S2d'
                        },
                        maxEjectionPercent: {
                          type: 'integer'
                        },
                        maxServerErrors: {
                          type: 'long'
                        }
                      }
                    },
                    portMapping: {
                      shape: 'S5h'
                    },
                    timeout: {
                      type: 'structure',
                      members: {
                        grpc: {
                          shape: 'S2i'
                        },
                        http: {
                          shape: 'S2q'
                        },
                        http2: {
                          shape: 'S2q'
                        },
                        tcp: {
                          shape: 'S2v'
                        }
                      },
                      union: true
                    },
                    tls: {
                      type: 'structure',
                      required: ['certificate', 'mode'],
                      members: {
                        certificate: {
                          type: 'structure',
                          members: {
                            acm: {
                              type: 'structure',
                              required: ['certificateArn'],
                              members: {
                                certificateArn: {}
                              }
                            },
                            file: {
                              shape: 'S4q'
                            },
                            sds: {
                              shape: 'S4r'
                            }
                          },
                          union: true
                        },
                        mode: {},
                        validation: {
                          type: 'structure',
                          required: ['trust'],
                          members: {
                            subjectAlternativeNames: {
                              shape: 'S3d'
                            },
                            trust: {
                              type: 'structure',
                              members: {
                                file: {
                                  shape: 'S4x'
                                },
                                sds: {
                                  shape: 'S4y'
                                }
                              },
                              union: true
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              logging: {
                type: 'structure',
                members: {
                  accessLog: {
                    type: 'structure',
                    members: {
                      file: {
                        type: 'structure',
                        required: ['path'],
                        members: {
                          format: {
                            shape: 'S4a'
                          },
                          path: {}
                        }
                      }
                    },
                    union: true
                  }
                }
              },
              serviceDiscovery: {
                type: 'structure',
                members: {
                  awsCloudMap: {
                    type: 'structure',
                    required: ['namespaceName', 'serviceName'],
                    members: {
                      attributes: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['key', 'value'],
                          members: {
                            key: {},
                            value: {}
                          }
                        }
                      },
                      ipPreference: {},
                      namespaceName: {},
                      serviceName: {}
                    }
                  },
                  dns: {
                    type: 'structure',
                    required: ['hostname'],
                    members: {
                      hostname: {},
                      ipPreference: {},
                      responseType: {}
                    }
                  }
                },
                union: true
              }
            }
          },
          S4n: {
            type: 'structure',
            members: {
              tls: {
                type: 'structure',
                required: ['validation'],
                members: {
                  certificate: {
                    type: 'structure',
                    members: {
                      file: {
                        shape: 'S4q'
                      },
                      sds: {
                        shape: 'S4r'
                      }
                    },
                    union: true
                  },
                  enforce: {
                    type: 'boolean'
                  },
                  ports: {
                    shape: 'S3a'
                  },
                  validation: {
                    type: 'structure',
                    required: ['trust'],
                    members: {
                      subjectAlternativeNames: {
                        shape: 'S3d'
                      },
                      trust: {
                        type: 'structure',
                        members: {
                          acm: {
                            type: 'structure',
                            required: ['certificateAuthorityArns'],
                            members: {
                              certificateAuthorityArns: {
                                type: 'list',
                                member: {}
                              }
                            }
                          },
                          file: {
                            shape: 'S4x'
                          },
                          sds: {
                            shape: 'S4y'
                          }
                        },
                        union: true
                      }
                    }
                  }
                }
              }
            }
          },
          S4q: {
            type: 'structure',
            required: ['certificateChain', 'privateKey'],
            members: {
              certificateChain: {},
              privateKey: {}
            }
          },
          S4r: {
            type: 'structure',
            required: ['secretName'],
            members: {
              secretName: {}
            }
          },
          S4x: {
            type: 'structure',
            required: ['certificateChain'],
            members: {
              certificateChain: {}
            }
          },
          S4y: {
            type: 'structure',
            required: ['secretName'],
            members: {
              secretName: {}
            }
          },
          S5h: {
            type: 'structure',
            required: ['port', 'protocol'],
            members: {
              port: {
                type: 'integer'
              },
              protocol: {}
            }
          },
          S63: {
            type: 'structure',
            required: ['meshName', 'metadata', 'spec', 'status', 'virtualNodeName'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S1g'
              },
              spec: {
                shape: 'S4l'
              },
              status: {
                type: 'structure',
                required: ['status'],
                members: {
                  status: {}
                }
              },
              virtualNodeName: {}
            }
          },
          S67: {
            type: 'structure',
            members: {
              listeners: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['portMapping'],
                  members: {
                    portMapping: {
                      shape: 'S5h'
                    }
                  }
                }
              }
            }
          },
          S6b: {
            type: 'structure',
            required: ['meshName', 'metadata', 'spec', 'status', 'virtualRouterName'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S1g'
              },
              spec: {
                shape: 'S67'
              },
              status: {
                type: 'structure',
                required: ['status'],
                members: {
                  status: {}
                }
              },
              virtualRouterName: {}
            }
          },
          S6f: {
            type: 'structure',
            members: {
              provider: {
                type: 'structure',
                members: {
                  virtualNode: {
                    type: 'structure',
                    required: ['virtualNodeName'],
                    members: {
                      virtualNodeName: {}
                    }
                  },
                  virtualRouter: {
                    type: 'structure',
                    required: ['virtualRouterName'],
                    members: {
                      virtualRouterName: {}
                    }
                  }
                },
                union: true
              }
            }
          },
          S6k: {
            type: 'structure',
            required: ['meshName', 'metadata', 'spec', 'status', 'virtualServiceName'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S1g'
              },
              spec: {
                shape: 'S6f'
              },
              status: {
                type: 'structure',
                required: ['status'],
                members: {
                  status: {}
                }
              },
              virtualServiceName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c1e68d762c3a1e2853dd4e750bd5fc08d9e276f1.js.map