System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-08-01',
          endpointPrefix: 'networkmonitor',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon CloudWatch Network Monitor',
          serviceId: 'NetworkMonitor',
          signatureVersion: 'v4',
          signingName: 'networkmonitor',
          uid: 'networkmonitor-2023-08-01'
        },
        operations: {
          CreateMonitor: {
            http: {
              requestUri: '/monitors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorName'],
              members: {
                monitorName: {},
                probes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceArn', 'destination', 'protocol'],
                    members: {
                      sourceArn: {},
                      destination: {},
                      destinationPort: {
                        type: 'integer'
                      },
                      protocol: {},
                      packetSize: {
                        type: 'integer'
                      },
                      probeTags: {
                        shape: 'Sa'
                      }
                    }
                  }
                },
                aggregationPeriod: {
                  type: 'long'
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['monitorArn', 'monitorName', 'state'],
              members: {
                monitorArn: {},
                monitorName: {},
                state: {},
                aggregationPeriod: {
                  type: 'long'
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            idempotent: true
          },
          CreateProbe: {
            http: {
              requestUri: '/monitors/{monitorName}/probes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorName', 'probe'],
              members: {
                monitorName: {
                  location: 'uri',
                  locationName: 'monitorName'
                },
                probe: {
                  type: 'structure',
                  required: ['sourceArn', 'destination', 'protocol'],
                  members: {
                    sourceArn: {},
                    destination: {},
                    destinationPort: {
                      type: 'integer'
                    },
                    protocol: {},
                    packetSize: {
                      type: 'integer'
                    },
                    tags: {
                      shape: 'Sa'
                    }
                  }
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sourceArn', 'destination', 'protocol'],
              members: {
                probeId: {},
                probeArn: {},
                sourceArn: {},
                destination: {},
                destinationPort: {
                  type: 'integer'
                },
                protocol: {},
                packetSize: {
                  type: 'integer'
                },
                addressFamily: {},
                vpcId: {},
                state: {},
                createdAt: {
                  type: 'timestamp'
                },
                modifiedAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            idempotent: true
          },
          DeleteMonitor: {
            http: {
              method: 'DELETE',
              requestUri: '/monitors/{monitorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorName'],
              members: {
                monitorName: {
                  location: 'uri',
                  locationName: 'monitorName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteProbe: {
            http: {
              method: 'DELETE',
              requestUri: '/monitors/{monitorName}/probes/{probeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorName', 'probeId'],
              members: {
                monitorName: {
                  location: 'uri',
                  locationName: 'monitorName'
                },
                probeId: {
                  location: 'uri',
                  locationName: 'probeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetMonitor: {
            http: {
              method: 'GET',
              requestUri: '/monitors/{monitorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorName'],
              members: {
                monitorName: {
                  location: 'uri',
                  locationName: 'monitorName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['monitorArn', 'monitorName', 'state', 'aggregationPeriod', 'createdAt', 'modifiedAt'],
              members: {
                monitorArn: {},
                monitorName: {},
                state: {},
                aggregationPeriod: {
                  type: 'long'
                },
                tags: {
                  shape: 'Sa'
                },
                probes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceArn', 'destination', 'protocol'],
                    members: {
                      probeId: {},
                      probeArn: {},
                      sourceArn: {},
                      destination: {},
                      destinationPort: {
                        type: 'integer'
                      },
                      protocol: {},
                      packetSize: {
                        type: 'integer'
                      },
                      addressFamily: {},
                      vpcId: {},
                      state: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      modifiedAt: {
                        type: 'timestamp'
                      },
                      tags: {
                        shape: 'Sa'
                      }
                    }
                  }
                },
                createdAt: {
                  type: 'timestamp'
                },
                modifiedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetProbe: {
            http: {
              method: 'GET',
              requestUri: '/monitors/{monitorName}/probes/{probeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorName', 'probeId'],
              members: {
                monitorName: {
                  location: 'uri',
                  locationName: 'monitorName'
                },
                probeId: {
                  location: 'uri',
                  locationName: 'probeId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sourceArn', 'destination', 'protocol'],
              members: {
                probeId: {},
                probeArn: {},
                sourceArn: {},
                destination: {},
                destinationPort: {
                  type: 'integer'
                },
                protocol: {},
                packetSize: {
                  type: 'integer'
                },
                addressFamily: {},
                vpcId: {},
                state: {},
                createdAt: {
                  type: 'timestamp'
                },
                modifiedAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'Sa'
                }
              }
            }
          },
          ListMonitors: {
            http: {
              method: 'GET',
              requestUri: '/monitors',
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
                },
                state: {
                  location: 'querystring',
                  locationName: 'state'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['monitors'],
              members: {
                monitors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['monitorArn', 'monitorName', 'state'],
                    members: {
                      monitorArn: {},
                      monitorName: {},
                      state: {},
                      aggregationPeriod: {
                        type: 'long'
                      },
                      tags: {
                        shape: 'Sa'
                      }
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
                  shape: 'Sa'
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
                  shape: 'Sa'
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
          },
          UpdateMonitor: {
            http: {
              method: 'PATCH',
              requestUri: '/monitors/{monitorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorName', 'aggregationPeriod'],
              members: {
                monitorName: {
                  location: 'uri',
                  locationName: 'monitorName'
                },
                aggregationPeriod: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['monitorArn', 'monitorName', 'state'],
              members: {
                monitorArn: {},
                monitorName: {},
                state: {},
                aggregationPeriod: {
                  type: 'long'
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            idempotent: true
          },
          UpdateProbe: {
            http: {
              method: 'PATCH',
              requestUri: '/monitors/{monitorName}/probes/{probeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorName', 'probeId'],
              members: {
                monitorName: {
                  location: 'uri',
                  locationName: 'monitorName'
                },
                probeId: {
                  location: 'uri',
                  locationName: 'probeId'
                },
                state: {},
                destination: {},
                destinationPort: {
                  type: 'integer'
                },
                protocol: {},
                packetSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sourceArn', 'destination', 'protocol'],
              members: {
                probeId: {},
                probeArn: {},
                sourceArn: {},
                destination: {},
                destinationPort: {
                  type: 'integer'
                },
                protocol: {},
                packetSize: {
                  type: 'integer'
                },
                addressFamily: {},
                vpcId: {},
                state: {},
                createdAt: {
                  type: 'timestamp'
                },
                modifiedAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          Sa: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8a86fb64559eb1e23d9c9bfc1b55454b50912c7f.js.map