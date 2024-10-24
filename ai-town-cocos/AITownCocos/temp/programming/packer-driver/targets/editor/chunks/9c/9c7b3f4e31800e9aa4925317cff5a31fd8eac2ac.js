System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'launchwizard',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS Launch Wizard',
          serviceId: 'Launch Wizard',
          signatureVersion: 'v4',
          signingName: 'launchwizard',
          uid: 'launch-wizard-2018-05-10'
        },
        operations: {
          CreateDeployment: {
            http: {
              requestUri: '/createDeployment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deploymentPatternName', 'name', 'specifications', 'workloadName'],
              members: {
                deploymentPatternName: {},
                dryRun: {
                  type: 'boolean'
                },
                name: {},
                specifications: {
                  shape: 'S5'
                },
                tags: {
                  shape: 'S8'
                },
                workloadName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentId: {}
              }
            }
          },
          DeleteDeployment: {
            http: {
              requestUri: '/deleteDeployment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                statusReason: {}
              }
            },
            idempotent: true
          },
          GetDeployment: {
            http: {
              requestUri: '/getDeployment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deployment: {
                  type: 'structure',
                  members: {
                    createdAt: {
                      type: 'timestamp'
                    },
                    deletedAt: {
                      type: 'timestamp'
                    },
                    deploymentArn: {},
                    id: {},
                    name: {},
                    patternName: {},
                    resourceGroup: {},
                    specifications: {
                      shape: 'S5'
                    },
                    status: {},
                    tags: {
                      shape: 'S8'
                    },
                    workloadName: {}
                  }
                }
              }
            }
          },
          GetWorkload: {
            http: {
              requestUri: '/getWorkload',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workloadName'],
              members: {
                workloadName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                workload: {
                  type: 'structure',
                  members: {
                    description: {},
                    displayName: {},
                    documentationUrl: {},
                    iconUrl: {},
                    status: {},
                    statusMessage: {},
                    workloadName: {}
                  }
                }
              }
            }
          },
          GetWorkloadDeploymentPattern: {
            http: {
              requestUri: '/getWorkloadDeploymentPattern',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deploymentPatternName', 'workloadName'],
              members: {
                deploymentPatternName: {},
                workloadName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                workloadDeploymentPattern: {
                  type: 'structure',
                  members: {
                    deploymentPatternName: {},
                    description: {},
                    displayName: {},
                    specifications: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          allowedValues: {
                            type: 'list',
                            member: {}
                          },
                          conditionals: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                comparator: {},
                                name: {},
                                value: {}
                              }
                            }
                          },
                          description: {},
                          name: {},
                          required: {}
                        }
                      }
                    },
                    status: {},
                    statusMessage: {},
                    workloadName: {},
                    workloadVersionName: {}
                  }
                }
              }
            }
          },
          ListDeploymentEvents: {
            http: {
              requestUri: '/listDeploymentEvents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      description: {},
                      name: {},
                      status: {},
                      statusReason: {},
                      timestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDeployments: {
            http: {
              requestUri: '/listDeployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      id: {},
                      name: {},
                      patternName: {},
                      status: {},
                      workloadName: {}
                    }
                  }
                },
                nextToken: {}
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
                  shape: 'S8'
                }
              }
            }
          },
          ListWorkloadDeploymentPatterns: {
            http: {
              requestUri: '/listWorkloadDeploymentPatterns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workloadName'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                workloadName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                workloadDeploymentPatterns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      deploymentPatternName: {},
                      description: {},
                      displayName: {},
                      status: {},
                      statusMessage: {},
                      workloadName: {},
                      workloadVersionName: {}
                    }
                  }
                }
              }
            }
          },
          ListWorkloads: {
            http: {
              requestUri: '/listWorkloads',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                workloads: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      displayName: {},
                      workloadName: {}
                    }
                  }
                }
              }
            }
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
                  shape: 'S8'
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
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S8: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9c7b3f4e31800e9aa4925317cff5a31fd8eac2ac.js.map