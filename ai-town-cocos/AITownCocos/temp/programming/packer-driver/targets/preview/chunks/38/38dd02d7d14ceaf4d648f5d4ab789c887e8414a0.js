System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-10-05',
          endpointPrefix: 'api.tunneling.iot',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS IoT Secure Tunneling',
          serviceId: 'IoTSecureTunneling',
          signatureVersion: 'v4',
          signingName: 'IoTSecuredTunneling',
          targetPrefix: 'IoTSecuredTunneling',
          uid: 'iotsecuretunneling-2018-10-05'
        },
        operations: {
          CloseTunnel: {
            input: {
              type: 'structure',
              required: ['tunnelId'],
              members: {
                tunnelId: {},
                'delete': {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeTunnel: {
            input: {
              type: 'structure',
              required: ['tunnelId'],
              members: {
                tunnelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tunnel: {
                  type: 'structure',
                  members: {
                    tunnelId: {},
                    tunnelArn: {},
                    status: {},
                    sourceConnectionState: {
                      shape: 'Sa'
                    },
                    destinationConnectionState: {
                      shape: 'Sa'
                    },
                    description: {},
                    destinationConfig: {
                      shape: 'Se'
                    },
                    timeoutConfig: {
                      shape: 'Si'
                    },
                    tags: {
                      shape: 'Sk'
                    },
                    createdAt: {
                      type: 'timestamp'
                    },
                    lastUpdatedAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sk'
                }
              }
            }
          },
          ListTunnels: {
            input: {
              type: 'structure',
              members: {
                thingName: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tunnelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      tunnelId: {},
                      tunnelArn: {},
                      status: {},
                      description: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          OpenTunnel: {
            input: {
              type: 'structure',
              members: {
                description: {},
                tags: {
                  shape: 'Sk'
                },
                destinationConfig: {
                  shape: 'Se'
                },
                timeoutConfig: {
                  shape: 'Si'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tunnelId: {},
                tunnelArn: {},
                sourceAccessToken: {
                  shape: 'Sz'
                },
                destinationAccessToken: {
                  shape: 'Sz'
                }
              }
            }
          },
          RotateTunnelAccessToken: {
            input: {
              type: 'structure',
              required: ['tunnelId', 'clientMode'],
              members: {
                tunnelId: {},
                clientMode: {},
                destinationConfig: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tunnelArn: {},
                sourceAccessToken: {
                  shape: 'Sz'
                },
                destinationAccessToken: {
                  shape: 'Sz'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
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
          Sa: {
            type: 'structure',
            members: {
              status: {},
              lastUpdatedAt: {
                type: 'timestamp'
              }
            }
          },
          Se: {
            type: 'structure',
            required: ['services'],
            members: {
              thingName: {},
              services: {
                type: 'list',
                member: {}
              }
            }
          },
          Si: {
            type: 'structure',
            members: {
              maxLifetimeTimeoutMinutes: {
                type: 'integer'
              }
            }
          },
          Sk: {
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
          Sz: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=38dd02d7d14ceaf4d648f5d4ab789c887e8414a0.js.map