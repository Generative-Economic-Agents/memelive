System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-08-04',
          endpointPrefix: 'snow-device-management',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Snow Device Management',
          serviceId: 'Snow Device Management',
          signatureVersion: 'v4',
          signingName: 'snow-device-management',
          uid: 'snow-device-management-2021-08-04'
        },
        operations: {
          CancelTask: {
            http: {
              requestUri: '/task/{taskId}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['taskId'],
              members: {
                taskId: {
                  location: 'uri',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskId: {}
              }
            }
          },
          CreateTask: {
            http: {
              requestUri: '/task',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['command', 'targets'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                command: {
                  type: 'structure',
                  members: {
                    reboot: {
                      type: 'structure',
                      members: {}
                    },
                    unlock: {
                      type: 'structure',
                      members: {}
                    }
                  },
                  union: true
                },
                description: {},
                tags: {
                  shape: 'Sb'
                },
                targets: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskArn: {},
                taskId: {}
              }
            }
          },
          DescribeDevice: {
            http: {
              requestUri: '/managed-device/{managedDeviceId}/describe',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['managedDeviceId'],
              members: {
                managedDeviceId: {
                  location: 'uri',
                  locationName: 'managedDeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                associatedWithJob: {},
                deviceCapacities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      available: {
                        type: 'long'
                      },
                      name: {},
                      total: {
                        type: 'long'
                      },
                      unit: {},
                      used: {
                        type: 'long'
                      }
                    }
                  }
                },
                deviceState: {},
                deviceType: {},
                lastReachedOutAt: {
                  type: 'timestamp'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                managedDeviceArn: {},
                managedDeviceId: {},
                physicalNetworkInterfaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      defaultGateway: {},
                      ipAddress: {},
                      ipAddressAssignment: {},
                      macAddress: {},
                      netmask: {},
                      physicalConnectorType: {},
                      physicalNetworkInterfaceId: {}
                    }
                  }
                },
                software: {
                  type: 'structure',
                  members: {
                    installState: {},
                    installedVersion: {},
                    installingVersion: {}
                  }
                },
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          DescribeDeviceEc2Instances: {
            http: {
              requestUri: '/managed-device/{managedDeviceId}/resources/ec2/describe',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['instanceIds', 'managedDeviceId'],
              members: {
                instanceIds: {
                  type: 'list',
                  member: {}
                },
                managedDeviceId: {
                  location: 'uri',
                  locationName: 'managedDeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                instances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      instance: {
                        type: 'structure',
                        members: {
                          amiLaunchIndex: {
                            type: 'integer'
                          },
                          blockDeviceMappings: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                deviceName: {},
                                ebs: {
                                  type: 'structure',
                                  members: {
                                    attachTime: {
                                      type: 'timestamp'
                                    },
                                    deleteOnTermination: {
                                      type: 'boolean'
                                    },
                                    status: {},
                                    volumeId: {}
                                  }
                                }
                              }
                            }
                          },
                          cpuOptions: {
                            type: 'structure',
                            members: {
                              coreCount: {
                                type: 'integer'
                              },
                              threadsPerCore: {
                                type: 'integer'
                              }
                            }
                          },
                          createdAt: {
                            type: 'timestamp'
                          },
                          imageId: {},
                          instanceId: {},
                          instanceType: {},
                          privateIpAddress: {},
                          publicIpAddress: {},
                          rootDeviceName: {},
                          securityGroups: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                groupId: {},
                                groupName: {}
                              }
                            }
                          },
                          state: {
                            type: 'structure',
                            members: {
                              code: {
                                type: 'integer'
                              },
                              name: {}
                            }
                          },
                          updatedAt: {
                            type: 'timestamp'
                          }
                        }
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeExecution: {
            http: {
              requestUri: '/task/{taskId}/execution/{managedDeviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['managedDeviceId', 'taskId'],
              members: {
                managedDeviceId: {
                  location: 'uri',
                  locationName: 'managedDeviceId'
                },
                taskId: {
                  location: 'uri',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                executionId: {},
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                managedDeviceId: {},
                startedAt: {
                  type: 'timestamp'
                },
                state: {},
                taskId: {}
              }
            }
          },
          DescribeTask: {
            http: {
              requestUri: '/task/{taskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['taskId'],
              members: {
                taskId: {
                  location: 'uri',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                completedAt: {
                  type: 'timestamp'
                },
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                state: {},
                tags: {
                  shape: 'Sb'
                },
                targets: {
                  shape: 'Sc'
                },
                taskArn: {},
                taskId: {}
              }
            }
          },
          ListDeviceResources: {
            http: {
              method: 'GET',
              requestUri: '/managed-device/{managedDeviceId}/resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['managedDeviceId'],
              members: {
                managedDeviceId: {
                  location: 'uri',
                  locationName: 'managedDeviceId'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['resourceType'],
                    members: {
                      arn: {},
                      id: {},
                      resourceType: {}
                    }
                  }
                }
              }
            }
          },
          ListDevices: {
            http: {
              method: 'GET',
              requestUri: '/managed-devices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                jobId: {
                  location: 'querystring',
                  locationName: 'jobId'
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
              members: {
                devices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      associatedWithJob: {},
                      managedDeviceArn: {},
                      managedDeviceId: {},
                      tags: {
                        shape: 'Sb'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExecutions: {
            http: {
              method: 'GET',
              requestUri: '/executions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['taskId'],
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                state: {
                  location: 'querystring',
                  locationName: 'state'
                },
                taskId: {
                  location: 'querystring',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                executions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      executionId: {},
                      managedDeviceId: {},
                      state: {},
                      taskId: {}
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
                  shape: 'Sb'
                }
              }
            }
          },
          ListTasks: {
            http: {
              method: 'GET',
              requestUri: '/tasks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                state: {
                  location: 'querystring',
                  locationName: 'state'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                tasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['taskId'],
                    members: {
                      state: {},
                      tags: {
                        shape: 'Sb'
                      },
                      taskArn: {},
                      taskId: {}
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
                  shape: 'Sb'
                }
              }
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
            idempotent: true
          }
        },
        shapes: {
          Sb: {
            type: 'map',
            key: {},
            value: {}
          },
          Sc: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0e0828d8fc8d2f0e7f60661bf039c17224c7ace0.js.map