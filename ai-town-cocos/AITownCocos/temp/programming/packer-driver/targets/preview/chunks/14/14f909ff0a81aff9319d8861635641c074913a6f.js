System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2018-05-14',
          endpointPrefix: 'devices.iot1click',
          signingName: 'iot1click',
          serviceFullName: 'AWS IoT 1-Click Devices Service',
          serviceId: 'IoT 1Click Devices Service',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'devices-2018-05-14',
          signatureVersion: 'v4'
        },
        operations: {
          ClaimDevicesByClaimCode: {
            http: {
              method: 'PUT',
              requestUri: '/claims/{claimCode}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClaimCode: {
                  location: 'uri',
                  locationName: 'claimCode'
                }
              },
              required: ['ClaimCode']
            },
            output: {
              type: 'structure',
              members: {
                ClaimCode: {
                  locationName: 'claimCode'
                },
                Total: {
                  locationName: 'total',
                  type: 'integer'
                }
              }
            }
          },
          DescribeDevice: {
            http: {
              method: 'GET',
              requestUri: '/devices/{deviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                }
              },
              required: ['DeviceId']
            },
            output: {
              type: 'structure',
              members: {
                DeviceDescription: {
                  shape: 'S8',
                  locationName: 'deviceDescription'
                }
              }
            }
          },
          FinalizeDeviceClaim: {
            http: {
              method: 'PUT',
              requestUri: '/devices/{deviceId}/finalize-claim',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                },
                Tags: {
                  shape: 'Sc',
                  locationName: 'tags'
                }
              },
              required: ['DeviceId']
            },
            output: {
              type: 'structure',
              members: {
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          GetDeviceMethods: {
            http: {
              method: 'GET',
              requestUri: '/devices/{deviceId}/methods',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                }
              },
              required: ['DeviceId']
            },
            output: {
              type: 'structure',
              members: {
                DeviceMethods: {
                  locationName: 'deviceMethods',
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                }
              }
            }
          },
          InitiateDeviceClaim: {
            http: {
              method: 'PUT',
              requestUri: '/devices/{deviceId}/initiate-claim',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                }
              },
              required: ['DeviceId']
            },
            output: {
              type: 'structure',
              members: {
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          InvokeDeviceMethod: {
            http: {
              requestUri: '/devices/{deviceId}/methods',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                },
                DeviceMethod: {
                  shape: 'Si',
                  locationName: 'deviceMethod'
                },
                DeviceMethodParameters: {
                  locationName: 'deviceMethodParameters'
                }
              },
              required: ['DeviceId']
            },
            output: {
              type: 'structure',
              members: {
                DeviceMethodResponse: {
                  locationName: 'deviceMethodResponse'
                }
              }
            }
          },
          ListDeviceEvents: {
            http: {
              method: 'GET',
              requestUri: '/devices/{deviceId}/events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                },
                FromTimeStamp: {
                  shape: 'So',
                  location: 'querystring',
                  locationName: 'fromTimeStamp'
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
                ToTimeStamp: {
                  shape: 'So',
                  location: 'querystring',
                  locationName: 'toTimeStamp'
                }
              },
              required: ['DeviceId', 'FromTimeStamp', 'ToTimeStamp']
            },
            output: {
              type: 'structure',
              members: {
                Events: {
                  locationName: 'events',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Device: {
                        locationName: 'device',
                        type: 'structure',
                        members: {
                          Attributes: {
                            locationName: 'attributes',
                            type: 'structure',
                            members: {}
                          },
                          DeviceId: {
                            locationName: 'deviceId'
                          },
                          Type: {
                            locationName: 'type'
                          }
                        }
                      },
                      StdEvent: {
                        locationName: 'stdEvent'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
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
                DeviceType: {
                  location: 'querystring',
                  locationName: 'deviceType'
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
                Devices: {
                  locationName: 'devices',
                  type: 'list',
                  member: {
                    shape: 'S8'
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
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
                  shape: 'Sc',
                  locationName: 'tags'
                }
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
                  shape: 'Sc',
                  locationName: 'tags'
                }
              },
              required: ['ResourceArn', 'Tags']
            }
          },
          UnclaimDevice: {
            http: {
              method: 'PUT',
              requestUri: '/devices/{deviceId}/unclaim',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                }
              },
              required: ['DeviceId']
            },
            output: {
              type: 'structure',
              members: {
                State: {
                  locationName: 'state'
                }
              }
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
          UpdateDeviceState: {
            http: {
              method: 'PUT',
              requestUri: '/devices/{deviceId}/state',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                },
                Enabled: {
                  locationName: 'enabled',
                  type: 'boolean'
                }
              },
              required: ['DeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S8: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              Attributes: {
                locationName: 'attributes',
                type: 'map',
                key: {},
                value: {}
              },
              DeviceId: {
                locationName: 'deviceId'
              },
              Enabled: {
                locationName: 'enabled',
                type: 'boolean'
              },
              RemainingLife: {
                locationName: 'remainingLife',
                type: 'double'
              },
              Type: {
                locationName: 'type'
              },
              Tags: {
                shape: 'Sc',
                locationName: 'tags'
              }
            }
          },
          Sc: {
            type: 'map',
            key: {},
            value: {}
          },
          Si: {
            type: 'structure',
            members: {
              DeviceType: {
                locationName: 'deviceType'
              },
              MethodName: {
                locationName: 'methodName'
              }
            }
          },
          So: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=14f909ff0a81aff9319d8861635641c074913a6f.js.map