System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-10-28',
          endpointPrefix: 'simspaceweaver',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS SimSpace Weaver',
          serviceId: 'SimSpaceWeaver',
          signatureVersion: 'v4',
          signingName: 'simspaceweaver',
          uid: 'simspaceweaver-2022-10-28'
        },
        operations: {
          CreateSnapshot: {
            http: {
              requestUri: '/createsnapshot',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Destination', 'Simulation'],
              members: {
                Destination: {
                  type: 'structure',
                  required: ['BucketName'],
                  members: {
                    BucketName: {},
                    ObjectKeyPrefix: {}
                  }
                },
                Simulation: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApp: {
            http: {
              method: 'DELETE',
              requestUri: '/deleteapp',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['App', 'Domain', 'Simulation'],
              members: {
                App: {
                  location: 'querystring',
                  locationName: 'app'
                },
                Domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                Simulation: {
                  location: 'querystring',
                  locationName: 'simulation'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSimulation: {
            http: {
              method: 'DELETE',
              requestUri: '/deletesimulation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Simulation'],
              members: {
                Simulation: {
                  location: 'querystring',
                  locationName: 'simulation'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeApp: {
            http: {
              method: 'GET',
              requestUri: '/describeapp',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['App', 'Domain', 'Simulation'],
              members: {
                App: {
                  location: 'querystring',
                  locationName: 'app'
                },
                Domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                Simulation: {
                  location: 'querystring',
                  locationName: 'simulation'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                Domain: {},
                EndpointInfo: {
                  type: 'structure',
                  members: {
                    Address: {},
                    IngressPortMappings: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Actual: {
                            type: 'integer'
                          },
                          Declared: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                },
                LaunchOverrides: {
                  shape: 'Sk'
                },
                Name: {},
                Simulation: {},
                Status: {},
                TargetStatus: {}
              }
            }
          },
          DescribeSimulation: {
            http: {
              method: 'GET',
              requestUri: '/describesimulation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Simulation'],
              members: {
                Simulation: {
                  location: 'querystring',
                  locationName: 'simulation'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTime: {
                  type: 'timestamp'
                },
                Description: {},
                ExecutionId: {},
                LiveSimulationState: {
                  type: 'structure',
                  members: {
                    Clocks: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Status: {},
                          TargetStatus: {}
                        }
                      }
                    },
                    Domains: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Lifecycle: {},
                          Name: {}
                        }
                      }
                    }
                  }
                },
                LoggingConfiguration: {
                  type: 'structure',
                  members: {
                    Destinations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          CloudWatchLogsLogGroup: {
                            type: 'structure',
                            members: {
                              LogGroupArn: {}
                            }
                          }
                        }
                      }
                    }
                  }
                },
                MaximumDuration: {},
                Name: {},
                RoleArn: {},
                SchemaError: {
                  deprecated: true,
                  deprecatedMessage: 'SchemaError is no longer used, check StartError instead.'
                },
                SchemaS3Location: {
                  shape: 'S19'
                },
                SnapshotS3Location: {
                  shape: 'S19'
                },
                StartError: {},
                Status: {},
                TargetStatus: {}
              }
            }
          },
          ListApps: {
            http: {
              method: 'GET',
              requestUri: '/listapps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Simulation'],
              members: {
                Domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                Simulation: {
                  location: 'querystring',
                  locationName: 'simulation'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Apps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Domain: {},
                      Name: {},
                      Simulation: {},
                      Status: {},
                      TargetStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSimulations: {
            http: {
              method: 'GET',
              requestUri: '/listsimulations',
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
                NextToken: {},
                Simulations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      Name: {},
                      Status: {},
                      TargetStatus: {}
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
                  shape: 'S1o'
                }
              }
            }
          },
          StartApp: {
            http: {
              requestUri: '/startapp',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Domain', 'Name', 'Simulation'],
              members: {
                ClientToken: {
                  shape: 'S1s',
                  idempotencyToken: true
                },
                Description: {},
                Domain: {},
                LaunchOverrides: {
                  shape: 'Sk'
                },
                Name: {},
                Simulation: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Domain: {},
                Name: {},
                Simulation: {}
              }
            }
          },
          StartClock: {
            http: {
              requestUri: '/startclock',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Simulation'],
              members: {
                Simulation: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartSimulation: {
            http: {
              requestUri: '/startsimulation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'RoleArn'],
              members: {
                ClientToken: {
                  shape: 'S1s',
                  idempotencyToken: true
                },
                Description: {},
                MaximumDuration: {},
                Name: {},
                RoleArn: {},
                SchemaS3Location: {
                  shape: 'S19'
                },
                SnapshotS3Location: {
                  shape: 'S19'
                },
                Tags: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTime: {
                  type: 'timestamp'
                },
                ExecutionId: {}
              }
            }
          },
          StopApp: {
            http: {
              requestUri: '/stopapp',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['App', 'Domain', 'Simulation'],
              members: {
                App: {},
                Domain: {},
                Simulation: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopClock: {
            http: {
              requestUri: '/stopclock',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Simulation'],
              members: {
                Simulation: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopSimulation: {
            http: {
              requestUri: '/stopsimulation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Simulation'],
              members: {
                Simulation: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
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
                  shape: 'S1o'
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
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          Sk: {
            type: 'structure',
            members: {
              LaunchCommands: {
                type: 'list',
                member: {}
              }
            }
          },
          S19: {
            type: 'structure',
            required: ['BucketName', 'ObjectKey'],
            members: {
              BucketName: {},
              ObjectKey: {}
            }
          },
          S1o: {
            type: 'map',
            key: {},
            value: {}
          },
          S1s: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=863d449f1e3f929471aad81cc8d4c024eda38a91.js.map