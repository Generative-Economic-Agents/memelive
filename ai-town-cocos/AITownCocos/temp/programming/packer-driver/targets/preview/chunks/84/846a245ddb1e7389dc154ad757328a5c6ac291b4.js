System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-09-23',
          endpointPrefix: 'edge.sagemaker',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Sagemaker Edge Manager',
          serviceId: 'Sagemaker Edge',
          signatureVersion: 'v4',
          signingName: 'sagemaker',
          uid: 'sagemaker-edge-2020-09-23'
        },
        operations: {
          GetDeployments: {
            http: {
              requestUri: '/GetDeployments'
            },
            input: {
              type: 'structure',
              required: ['DeviceName', 'DeviceFleetName'],
              members: {
                DeviceName: {},
                DeviceFleetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Deployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DeploymentName: {},
                      Type: {},
                      FailureHandlingPolicy: {},
                      Definitions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ModelHandle: {},
                            S3Url: {},
                            Checksum: {
                              type: 'structure',
                              members: {
                                Type: {},
                                Sum: {}
                              }
                            },
                            State: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetDeviceRegistration: {
            http: {
              requestUri: '/GetDeviceRegistration'
            },
            input: {
              type: 'structure',
              required: ['DeviceName', 'DeviceFleetName'],
              members: {
                DeviceName: {},
                DeviceFleetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DeviceRegistration: {},
                CacheTTL: {}
              }
            }
          },
          SendHeartbeat: {
            http: {
              requestUri: '/SendHeartbeat'
            },
            input: {
              type: 'structure',
              required: ['AgentVersion', 'DeviceName', 'DeviceFleetName'],
              members: {
                AgentMetrics: {
                  shape: 'Sm'
                },
                Models: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ModelName: {},
                      ModelVersion: {},
                      LatestSampleTime: {
                        type: 'timestamp'
                      },
                      LatestInference: {
                        type: 'timestamp'
                      },
                      ModelMetrics: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                AgentVersion: {},
                DeviceName: {},
                DeviceFleetName: {},
                DeploymentResult: {
                  type: 'structure',
                  members: {
                    DeploymentName: {},
                    DeploymentStatus: {},
                    DeploymentStatusMessage: {},
                    DeploymentStartTime: {
                      type: 'timestamp'
                    },
                    DeploymentEndTime: {
                      type: 'timestamp'
                    },
                    DeploymentModels: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ModelHandle: {},
                          ModelName: {},
                          ModelVersion: {},
                          DesiredState: {},
                          State: {},
                          Status: {},
                          StatusReason: {},
                          RollbackFailureReason: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          Sm: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Dimension: {},
                MetricName: {},
                Value: {
                  type: 'double'
                },
                Timestamp: {
                  type: 'timestamp'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=846a245ddb1e7389dc154ad757328a5c6ac291b4.js.map