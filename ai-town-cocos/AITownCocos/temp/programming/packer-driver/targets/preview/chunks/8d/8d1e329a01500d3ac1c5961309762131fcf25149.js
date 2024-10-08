System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-08-22',
          endpointPrefix: 'thinclient',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon WorkSpaces Thin Client',
          serviceId: 'WorkSpaces Thin Client',
          signatureVersion: 'v4',
          signingName: 'thinclient',
          uid: 'workspaces-thin-client-2023-08-22'
        },
        operations: {
          CreateEnvironment: {
            http: {
              requestUri: '/environments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['desktopArn'],
              members: {
                name: {
                  shape: 'S2'
                },
                desktopArn: {},
                desktopEndpoint: {
                  shape: 'S4'
                },
                softwareSetUpdateSchedule: {},
                maintenanceWindow: {
                  shape: 'S6'
                },
                softwareSetUpdateMode: {},
                desiredSoftwareSetId: {},
                kmsKeyArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environment: {
                  shape: 'Sk'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeleteDevice: {
            http: {
              method: 'DELETE',
              requestUri: '/devices/{id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          DeleteEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/environments/{id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          DeregisterDevice: {
            http: {
              requestUri: '/deregister-device/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                targetDeviceStatus: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          GetDevice: {
            http: {
              method: 'GET',
              requestUri: '/devices/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                device: {
                  type: 'structure',
                  members: {
                    id: {},
                    serialNumber: {},
                    name: {
                      shape: 'S10'
                    },
                    model: {},
                    environmentId: {},
                    status: {},
                    currentSoftwareSetId: {},
                    currentSoftwareSetVersion: {},
                    desiredSoftwareSetId: {},
                    pendingSoftwareSetId: {},
                    pendingSoftwareSetVersion: {},
                    softwareSetUpdateSchedule: {},
                    softwareSetComplianceStatus: {},
                    softwareSetUpdateStatus: {},
                    lastConnectedAt: {
                      type: 'timestamp'
                    },
                    lastPostureAt: {
                      type: 'timestamp'
                    },
                    createdAt: {
                      type: 'timestamp'
                    },
                    updatedAt: {
                      type: 'timestamp'
                    },
                    arn: {},
                    kmsKeyArn: {},
                    tags: {
                      shape: 'Sh'
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          GetEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/environments/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environment: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {
                      shape: 'S2'
                    },
                    desktopArn: {},
                    desktopEndpoint: {
                      shape: 'S4'
                    },
                    desktopType: {},
                    activationCode: {},
                    registeredDevicesCount: {
                      type: 'integer'
                    },
                    softwareSetUpdateSchedule: {},
                    maintenanceWindow: {
                      shape: 'S6'
                    },
                    softwareSetUpdateMode: {},
                    desiredSoftwareSetId: {},
                    pendingSoftwareSetId: {},
                    pendingSoftwareSetVersion: {},
                    softwareSetComplianceStatus: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    updatedAt: {
                      type: 'timestamp'
                    },
                    arn: {},
                    kmsKeyArn: {},
                    tags: {
                      shape: 'Sh'
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          GetSoftwareSet: {
            http: {
              method: 'GET',
              requestUri: '/softwaresets/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                softwareSet: {
                  type: 'structure',
                  members: {
                    id: {},
                    version: {},
                    releasedAt: {
                      type: 'timestamp'
                    },
                    supportedUntil: {
                      type: 'timestamp'
                    },
                    validationStatus: {},
                    software: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          name: {},
                          version: {}
                        }
                      }
                    },
                    arn: {},
                    tags: {
                      shape: 'Sh'
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListDevices: {
            http: {
              method: 'GET',
              requestUri: '/devices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                devices: {
                  type: 'list',
                  member: {
                    shape: 'S1k'
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
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
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environments: {
                  type: 'list',
                  member: {
                    shape: 'Sk'
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListSoftwareSets: {
            http: {
              method: 'GET',
              requestUri: '/softwaresets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                softwareSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      version: {},
                      releasedAt: {
                        type: 'timestamp'
                      },
                      supportedUntil: {
                        type: 'timestamp'
                      },
                      validationStatus: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
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
            },
            endpoint: {
              hostPrefix: 'api.'
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
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
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
                  member: {},
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          UpdateDevice: {
            http: {
              method: 'PATCH',
              requestUri: '/devices/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {
                  shape: 'S10'
                },
                desiredSoftwareSetId: {},
                softwareSetUpdateSchedule: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                device: {
                  shape: 'S1k'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          UpdateEnvironment: {
            http: {
              method: 'PATCH',
              requestUri: '/environments/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {
                  shape: 'S2'
                },
                desktopArn: {},
                desktopEndpoint: {
                  shape: 'S4'
                },
                softwareSetUpdateSchedule: {},
                maintenanceWindow: {
                  shape: 'S6'
                },
                softwareSetUpdateMode: {},
                desiredSoftwareSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                environment: {
                  shape: 'Sk'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          UpdateSoftwareSet: {
            http: {
              method: 'PATCH',
              requestUri: '/softwaresets/{id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['id', 'validationStatus'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                validationStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          }
        },
        shapes: {
          S2: {
            type: 'string',
            sensitive: true
          },
          S4: {
            type: 'string',
            sensitive: true
          },
          S6: {
            type: 'structure',
            members: {
              type: {},
              startTimeHour: {
                type: 'integer'
              },
              startTimeMinute: {
                type: 'integer'
              },
              endTimeHour: {
                type: 'integer'
              },
              endTimeMinute: {
                type: 'integer'
              },
              daysOfTheWeek: {
                type: 'list',
                member: {}
              },
              applyTimeOf: {}
            }
          },
          Sh: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Sk: {
            type: 'structure',
            members: {
              id: {},
              name: {
                shape: 'S2'
              },
              desktopArn: {},
              desktopEndpoint: {
                shape: 'S4'
              },
              desktopType: {},
              activationCode: {},
              softwareSetUpdateSchedule: {},
              maintenanceWindow: {
                shape: 'S6'
              },
              softwareSetUpdateMode: {},
              desiredSoftwareSetId: {},
              pendingSoftwareSetId: {},
              createdAt: {
                type: 'timestamp'
              },
              updatedAt: {
                type: 'timestamp'
              },
              arn: {}
            }
          },
          S10: {
            type: 'string',
            sensitive: true
          },
          S1k: {
            type: 'structure',
            members: {
              id: {},
              serialNumber: {},
              name: {
                shape: 'S10'
              },
              model: {},
              environmentId: {},
              status: {},
              currentSoftwareSetId: {},
              desiredSoftwareSetId: {},
              pendingSoftwareSetId: {},
              softwareSetUpdateSchedule: {},
              lastConnectedAt: {
                type: 'timestamp'
              },
              lastPostureAt: {
                type: 'timestamp'
              },
              createdAt: {
                type: 'timestamp'
              },
              updatedAt: {
                type: 'timestamp'
              },
              arn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8d1e329a01500d3ac1c5961309762131fcf25149.js.map