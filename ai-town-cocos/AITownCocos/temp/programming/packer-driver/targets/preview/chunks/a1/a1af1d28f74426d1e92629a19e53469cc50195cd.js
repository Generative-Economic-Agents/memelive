System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-10-01',
          endpointPrefix: 'appmesh',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS App Mesh',
          serviceId: 'App Mesh',
          signatureVersion: 'v4',
          signingName: 'appmesh',
          uid: 'appmesh-2018-10-01'
        },
        operations: {
          CreateMesh: {
            http: {
              method: 'PUT',
              requestUri: '/meshes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['meshName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                meshName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                mesh: {
                  shape: 'S5'
                }
              },
              payload: 'mesh'
            },
            idempotent: true
          },
          CreateRoute: {
            http: {
              method: 'PUT',
              requestUri: '/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes',
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
                routeName: {},
                spec: {
                  shape: 'Sd'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                route: {
                  shape: 'Sl'
                }
              },
              payload: 'route'
            },
            idempotent: true
          },
          CreateVirtualNode: {
            http: {
              method: 'PUT',
              requestUri: '/meshes/{meshName}/virtualNodes',
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
                spec: {
                  shape: 'Sp'
                },
                virtualNodeName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualNode: {
                  shape: 'S14'
                }
              },
              payload: 'virtualNode'
            },
            idempotent: true
          },
          CreateVirtualRouter: {
            http: {
              method: 'PUT',
              requestUri: '/meshes/{meshName}/virtualRouters',
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
                spec: {
                  shape: 'S18'
                },
                virtualRouterName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualRouter: {
                  shape: 'S1b'
                }
              },
              payload: 'virtualRouter'
            },
            idempotent: true
          },
          DeleteMesh: {
            http: {
              method: 'DELETE',
              requestUri: '/meshes/{meshName}',
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
              members: {
                mesh: {
                  shape: 'S5'
                }
              },
              payload: 'mesh'
            },
            idempotent: true
          },
          DeleteRoute: {
            http: {
              method: 'DELETE',
              requestUri: '/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
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
              members: {
                route: {
                  shape: 'Sl'
                }
              },
              payload: 'route'
            },
            idempotent: true
          },
          DeleteVirtualNode: {
            http: {
              method: 'DELETE',
              requestUri: '/meshes/{meshName}/virtualNodes/{virtualNodeName}',
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
                virtualNodeName: {
                  location: 'uri',
                  locationName: 'virtualNodeName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualNode: {
                  shape: 'S14'
                }
              },
              payload: 'virtualNode'
            },
            idempotent: true
          },
          DeleteVirtualRouter: {
            http: {
              method: 'DELETE',
              requestUri: '/meshes/{meshName}/virtualRouters/{virtualRouterName}',
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
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualRouter: {
                  shape: 'S1b'
                }
              },
              payload: 'virtualRouter'
            },
            idempotent: true
          },
          DescribeMesh: {
            http: {
              method: 'GET',
              requestUri: '/meshes/{meshName}',
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
              members: {
                mesh: {
                  shape: 'S5'
                }
              },
              payload: 'mesh'
            }
          },
          DescribeRoute: {
            http: {
              method: 'GET',
              requestUri: '/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
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
              members: {
                route: {
                  shape: 'Sl'
                }
              },
              payload: 'route'
            }
          },
          DescribeVirtualNode: {
            http: {
              method: 'GET',
              requestUri: '/meshes/{meshName}/virtualNodes/{virtualNodeName}',
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
                virtualNodeName: {
                  location: 'uri',
                  locationName: 'virtualNodeName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualNode: {
                  shape: 'S14'
                }
              },
              payload: 'virtualNode'
            }
          },
          DescribeVirtualRouter: {
            http: {
              method: 'GET',
              requestUri: '/meshes/{meshName}/virtualRouters/{virtualRouterName}',
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
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualRouter: {
                  shape: 'S1b'
                }
              },
              payload: 'virtualRouter'
            }
          },
          ListMeshes: {
            http: {
              method: 'GET',
              requestUri: '/meshes',
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
                    members: {
                      arn: {},
                      meshName: {}
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
              requestUri: '/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes',
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
                    members: {
                      arn: {},
                      meshName: {},
                      routeName: {},
                      virtualRouterName: {}
                    }
                  }
                }
              }
            }
          },
          ListVirtualNodes: {
            http: {
              method: 'GET',
              requestUri: '/meshes/{meshName}/virtualNodes',
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
                    members: {
                      arn: {},
                      meshName: {},
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
              requestUri: '/meshes/{meshName}/virtualRouters',
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
                    members: {
                      arn: {},
                      meshName: {},
                      virtualRouterName: {}
                    }
                  }
                }
              }
            }
          },
          UpdateRoute: {
            http: {
              method: 'PUT',
              requestUri: '/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
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
                routeName: {
                  location: 'uri',
                  locationName: 'routeName'
                },
                spec: {
                  shape: 'Sd'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                route: {
                  shape: 'Sl'
                }
              },
              payload: 'route'
            },
            idempotent: true
          },
          UpdateVirtualNode: {
            http: {
              method: 'PUT',
              requestUri: '/meshes/{meshName}/virtualNodes/{virtualNodeName}',
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
                spec: {
                  shape: 'Sp'
                },
                virtualNodeName: {
                  location: 'uri',
                  locationName: 'virtualNodeName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualNode: {
                  shape: 'S14'
                }
              },
              payload: 'virtualNode'
            },
            idempotent: true
          },
          UpdateVirtualRouter: {
            http: {
              method: 'PUT',
              requestUri: '/meshes/{meshName}/virtualRouters/{virtualRouterName}',
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
                spec: {
                  shape: 'S18'
                },
                virtualRouterName: {
                  location: 'uri',
                  locationName: 'virtualRouterName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualRouter: {
                  shape: 'S1b'
                }
              },
              payload: 'virtualRouter'
            },
            idempotent: true
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['meshName', 'metadata'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S6'
              },
              status: {
                type: 'structure',
                members: {
                  status: {}
                }
              }
            }
          },
          S6: {
            type: 'structure',
            members: {
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              lastUpdatedAt: {
                type: 'timestamp'
              },
              uid: {},
              version: {
                type: 'long'
              }
            }
          },
          Sd: {
            type: 'structure',
            members: {
              httpRoute: {
                type: 'structure',
                members: {
                  action: {
                    type: 'structure',
                    members: {
                      weightedTargets: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            virtualNode: {},
                            weight: {
                              type: 'integer'
                            }
                          }
                        }
                      }
                    }
                  },
                  match: {
                    type: 'structure',
                    members: {
                      prefix: {}
                    }
                  }
                }
              }
            }
          },
          Sl: {
            type: 'structure',
            required: ['meshName', 'routeName', 'virtualRouterName'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S6'
              },
              routeName: {},
              spec: {
                shape: 'Sd'
              },
              status: {
                type: 'structure',
                members: {
                  status: {}
                }
              },
              virtualRouterName: {}
            }
          },
          Sp: {
            type: 'structure',
            members: {
              backends: {
                type: 'list',
                member: {}
              },
              listeners: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
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
                      members: {
                        port: {
                          type: 'integer'
                        },
                        protocol: {}
                      }
                    }
                  }
                }
              },
              serviceDiscovery: {
                type: 'structure',
                members: {
                  dns: {
                    type: 'structure',
                    members: {
                      serviceName: {}
                    }
                  }
                }
              }
            }
          },
          S14: {
            type: 'structure',
            required: ['meshName', 'virtualNodeName'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S6'
              },
              spec: {
                shape: 'Sp'
              },
              status: {
                type: 'structure',
                members: {
                  status: {}
                }
              },
              virtualNodeName: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              serviceNames: {
                type: 'list',
                member: {}
              }
            }
          },
          S1b: {
            type: 'structure',
            required: ['meshName', 'virtualRouterName'],
            members: {
              meshName: {},
              metadata: {
                shape: 'S6'
              },
              spec: {
                shape: 'S18'
              },
              status: {
                type: 'structure',
                members: {
                  status: {}
                }
              },
              virtualRouterName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a1af1d28f74426d1e92629a19e53469cc50195cd.js.map