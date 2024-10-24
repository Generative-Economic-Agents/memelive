System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-03-22',
          endpointPrefix: 'personalize-events',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Personalize Events',
          serviceId: 'Personalize Events',
          signatureVersion: 'v4',
          signingName: 'personalize',
          uid: 'personalize-events-2018-03-22'
        },
        operations: {
          PutActionInteractions: {
            http: {
              requestUri: '/action-interactions'
            },
            input: {
              type: 'structure',
              required: ['trackingId', 'actionInteractions'],
              members: {
                trackingId: {},
                actionInteractions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['actionId', 'sessionId', 'timestamp', 'eventType'],
                    members: {
                      actionId: {
                        shape: 'S5'
                      },
                      userId: {
                        shape: 'S6'
                      },
                      sessionId: {},
                      timestamp: {
                        type: 'timestamp'
                      },
                      eventType: {},
                      eventId: {},
                      recommendationId: {},
                      impression: {
                        type: 'list',
                        member: {
                          shape: 'S5'
                        }
                      },
                      properties: {
                        jsonvalue: true,
                        type: 'string',
                        sensitive: true
                      }
                    }
                  }
                }
              }
            }
          },
          PutActions: {
            http: {
              requestUri: '/actions'
            },
            input: {
              type: 'structure',
              required: ['datasetArn', 'actions'],
              members: {
                datasetArn: {},
                actions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['actionId'],
                    members: {
                      actionId: {},
                      properties: {
                        jsonvalue: true,
                        type: 'string',
                        sensitive: true
                      }
                    }
                  }
                }
              }
            }
          },
          PutEvents: {
            http: {
              requestUri: '/events'
            },
            input: {
              type: 'structure',
              required: ['trackingId', 'sessionId', 'eventList'],
              members: {
                trackingId: {},
                userId: {
                  shape: 'S6'
                },
                sessionId: {},
                eventList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['eventType', 'sentAt'],
                    members: {
                      eventId: {},
                      eventType: {},
                      eventValue: {
                        type: 'float'
                      },
                      itemId: {
                        shape: 'Sk'
                      },
                      properties: {
                        jsonvalue: true,
                        type: 'string',
                        sensitive: true
                      },
                      sentAt: {
                        type: 'timestamp'
                      },
                      recommendationId: {},
                      impression: {
                        type: 'list',
                        member: {
                          shape: 'Sk'
                        }
                      },
                      metricAttribution: {
                        type: 'structure',
                        required: ['eventAttributionSource'],
                        members: {
                          eventAttributionSource: {}
                        }
                      }
                    },
                    sensitive: true
                  }
                }
              }
            }
          },
          PutItems: {
            http: {
              requestUri: '/items'
            },
            input: {
              type: 'structure',
              required: ['datasetArn', 'items'],
              members: {
                datasetArn: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['itemId'],
                    members: {
                      itemId: {},
                      properties: {
                        jsonvalue: true,
                        type: 'string',
                        sensitive: true
                      }
                    }
                  }
                }
              }
            }
          },
          PutUsers: {
            http: {
              requestUri: '/users'
            },
            input: {
              type: 'structure',
              required: ['datasetArn', 'users'],
              members: {
                datasetArn: {},
                users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['userId'],
                    members: {
                      userId: {},
                      properties: {
                        jsonvalue: true,
                        type: 'string',
                        sensitive: true
                      }
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'string',
            sensitive: true
          },
          S6: {
            type: 'string',
            sensitive: true
          },
          Sk: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=336f13f1096c4796815bf0fcf2675d0356abba0f.js.map