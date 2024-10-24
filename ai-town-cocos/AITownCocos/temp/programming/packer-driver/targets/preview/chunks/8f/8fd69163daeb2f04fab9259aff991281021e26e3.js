System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-05-28',
          endpointPrefix: 'data-ats.iot',
          protocol: 'rest-json',
          serviceFullName: 'AWS IoT Data Plane',
          serviceId: 'IoT Data Plane',
          signatureVersion: 'v4',
          signingName: 'iotdata',
          uid: 'iot-data-2015-05-28'
        },
        operations: {
          DeleteThingShadow: {
            http: {
              method: 'DELETE',
              requestUri: '/things/{thingName}/shadow'
            },
            input: {
              type: 'structure',
              required: ['thingName'],
              members: {
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                },
                shadowName: {
                  location: 'querystring',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['payload'],
              members: {
                payload: {
                  type: 'blob'
                }
              },
              payload: 'payload'
            }
          },
          GetRetainedMessage: {
            http: {
              method: 'GET',
              requestUri: '/retainedMessage/{topic}'
            },
            input: {
              type: 'structure',
              required: ['topic'],
              members: {
                topic: {
                  location: 'uri',
                  locationName: 'topic'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                topic: {},
                payload: {
                  type: 'blob'
                },
                qos: {
                  type: 'integer'
                },
                lastModifiedTime: {
                  type: 'long'
                },
                userProperties: {
                  type: 'blob'
                }
              }
            }
          },
          GetThingShadow: {
            http: {
              method: 'GET',
              requestUri: '/things/{thingName}/shadow'
            },
            input: {
              type: 'structure',
              required: ['thingName'],
              members: {
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                },
                shadowName: {
                  location: 'querystring',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                payload: {
                  type: 'blob'
                }
              },
              payload: 'payload'
            }
          },
          ListNamedShadowsForThing: {
            http: {
              method: 'GET',
              requestUri: '/api/things/shadow/ListNamedShadowsForThing/{thingName}'
            },
            input: {
              type: 'structure',
              required: ['thingName'],
              members: {
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                pageSize: {
                  location: 'querystring',
                  locationName: 'pageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                results: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                timestamp: {
                  type: 'long'
                }
              }
            }
          },
          ListRetainedMessages: {
            http: {
              method: 'GET',
              requestUri: '/retainedMessage'
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
                retainedTopics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      topic: {},
                      payloadSize: {
                        type: 'long'
                      },
                      qos: {
                        type: 'integer'
                      },
                      lastModifiedTime: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          Publish: {
            http: {
              requestUri: '/topics/{topic}'
            },
            input: {
              type: 'structure',
              required: ['topic'],
              members: {
                topic: {
                  location: 'uri',
                  locationName: 'topic'
                },
                qos: {
                  location: 'querystring',
                  locationName: 'qos',
                  type: 'integer'
                },
                retain: {
                  location: 'querystring',
                  locationName: 'retain',
                  type: 'boolean'
                },
                payload: {
                  type: 'blob'
                },
                userProperties: {
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-mqtt5-user-properties'
                },
                payloadFormatIndicator: {
                  location: 'header',
                  locationName: 'x-amz-mqtt5-payload-format-indicator'
                },
                contentType: {
                  location: 'querystring',
                  locationName: 'contentType'
                },
                responseTopic: {
                  location: 'querystring',
                  locationName: 'responseTopic'
                },
                correlationData: {
                  location: 'header',
                  locationName: 'x-amz-mqtt5-correlation-data'
                },
                messageExpiry: {
                  location: 'querystring',
                  locationName: 'messageExpiry',
                  type: 'long'
                }
              },
              payload: 'payload'
            }
          },
          UpdateThingShadow: {
            http: {
              requestUri: '/things/{thingName}/shadow'
            },
            input: {
              type: 'structure',
              required: ['thingName', 'payload'],
              members: {
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                },
                shadowName: {
                  location: 'querystring',
                  locationName: 'name'
                },
                payload: {
                  type: 'blob'
                }
              },
              payload: 'payload'
            },
            output: {
              type: 'structure',
              members: {
                payload: {
                  type: 'blob'
                }
              },
              payload: 'payload'
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=8fd69163daeb2f04fab9259aff991281021e26e3.js.map