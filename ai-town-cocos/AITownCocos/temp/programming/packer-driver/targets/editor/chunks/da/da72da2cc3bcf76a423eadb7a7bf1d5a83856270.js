System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-14',
          endpointPrefix: 'ivschat',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'ivschat',
          serviceFullName: 'Amazon Interactive Video Service Chat',
          serviceId: 'ivschat',
          signatureVersion: 'v4',
          signingName: 'ivschat',
          uid: 'ivschat-2020-07-14'
        },
        operations: {
          CreateChatToken: {
            http: {
              requestUri: '/CreateChatToken',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['roomIdentifier', 'userId'],
              members: {
                attributes: {
                  type: 'map',
                  key: {},
                  value: {},
                  sensitive: true
                },
                capabilities: {
                  type: 'list',
                  member: {}
                },
                roomIdentifier: {},
                sessionDurationInMinutes: {
                  type: 'integer'
                },
                userId: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sessionExpirationTime: {
                  shape: 'Sa'
                },
                token: {
                  type: 'string',
                  sensitive: true
                },
                tokenExpirationTime: {
                  shape: 'Sa'
                }
              }
            }
          },
          CreateLoggingConfiguration: {
            http: {
              requestUri: '/CreateLoggingConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['destinationConfiguration'],
              members: {
                destinationConfiguration: {
                  shape: 'Sd'
                },
                name: {},
                tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createTime: {
                  shape: 'Sa'
                },
                destinationConfiguration: {
                  shape: 'Sd'
                },
                id: {},
                name: {},
                state: {},
                tags: {
                  shape: 'Sl'
                },
                updateTime: {
                  shape: 'Sa'
                }
              }
            }
          },
          CreateRoom: {
            http: {
              requestUri: '/CreateRoom',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                loggingConfigurationIdentifiers: {
                  shape: 'St'
                },
                maximumMessageLength: {
                  type: 'integer'
                },
                maximumMessageRatePerSecond: {
                  type: 'integer'
                },
                messageReviewHandler: {
                  shape: 'Sx'
                },
                name: {},
                tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createTime: {
                  shape: 'Sa'
                },
                id: {},
                loggingConfigurationIdentifiers: {
                  shape: 'St'
                },
                maximumMessageLength: {
                  type: 'integer'
                },
                maximumMessageRatePerSecond: {
                  type: 'integer'
                },
                messageReviewHandler: {
                  shape: 'Sx'
                },
                name: {},
                tags: {
                  shape: 'Sl'
                },
                updateTime: {
                  shape: 'Sa'
                }
              }
            }
          },
          DeleteLoggingConfiguration: {
            http: {
              requestUri: '/DeleteLoggingConfiguration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {}
              }
            }
          },
          DeleteMessage: {
            http: {
              requestUri: '/DeleteMessage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'roomIdentifier'],
              members: {
                id: {},
                reason: {},
                roomIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {}
              }
            }
          },
          DeleteRoom: {
            http: {
              requestUri: '/DeleteRoom',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {}
              }
            }
          },
          DisconnectUser: {
            http: {
              requestUri: '/DisconnectUser',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['roomIdentifier', 'userId'],
              members: {
                reason: {},
                roomIdentifier: {},
                userId: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetLoggingConfiguration: {
            http: {
              requestUri: '/GetLoggingConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createTime: {
                  shape: 'Sa'
                },
                destinationConfiguration: {
                  shape: 'Sd'
                },
                id: {},
                name: {},
                state: {},
                tags: {
                  shape: 'Sl'
                },
                updateTime: {
                  shape: 'Sa'
                }
              }
            }
          },
          GetRoom: {
            http: {
              requestUri: '/GetRoom',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createTime: {
                  shape: 'Sa'
                },
                id: {},
                loggingConfigurationIdentifiers: {
                  shape: 'St'
                },
                maximumMessageLength: {
                  type: 'integer'
                },
                maximumMessageRatePerSecond: {
                  type: 'integer'
                },
                messageReviewHandler: {
                  shape: 'Sx'
                },
                name: {},
                tags: {
                  shape: 'Sl'
                },
                updateTime: {
                  shape: 'Sa'
                }
              }
            }
          },
          ListLoggingConfigurations: {
            http: {
              requestUri: '/ListLoggingConfigurations',
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
              required: ['loggingConfigurations'],
              members: {
                loggingConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createTime: {
                        shape: 'Sa'
                      },
                      destinationConfiguration: {
                        shape: 'Sd'
                      },
                      id: {},
                      name: {},
                      state: {},
                      tags: {
                        shape: 'Sl'
                      },
                      updateTime: {
                        shape: 'Sa'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRooms: {
            http: {
              requestUri: '/ListRooms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                loggingConfigurationIdentifier: {},
                maxResults: {
                  type: 'integer'
                },
                messageReviewHandlerUri: {},
                name: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['rooms'],
              members: {
                nextToken: {},
                rooms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createTime: {
                        shape: 'Sa'
                      },
                      id: {},
                      loggingConfigurationIdentifiers: {
                        shape: 'St'
                      },
                      messageReviewHandler: {
                        shape: 'Sx'
                      },
                      name: {},
                      tags: {
                        shape: 'Sl'
                      },
                      updateTime: {
                        shape: 'Sa'
                      }
                    }
                  }
                }
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
              required: ['tags'],
              members: {
                tags: {
                  shape: 'Sl'
                }
              }
            }
          },
          SendEvent: {
            http: {
              requestUri: '/SendEvent',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['eventName', 'roomIdentifier'],
              members: {
                attributes: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                eventName: {},
                roomIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {}
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
                  shape: 'Sl'
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
          },
          UpdateLoggingConfiguration: {
            http: {
              requestUri: '/UpdateLoggingConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                destinationConfiguration: {
                  shape: 'Sd'
                },
                identifier: {},
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createTime: {
                  shape: 'Sa'
                },
                destinationConfiguration: {
                  shape: 'Sd'
                },
                id: {},
                name: {},
                state: {},
                tags: {
                  shape: 'Sl'
                },
                updateTime: {
                  shape: 'Sa'
                }
              }
            }
          },
          UpdateRoom: {
            http: {
              requestUri: '/UpdateRoom',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {},
                loggingConfigurationIdentifiers: {
                  shape: 'St'
                },
                maximumMessageLength: {
                  type: 'integer'
                },
                maximumMessageRatePerSecond: {
                  type: 'integer'
                },
                messageReviewHandler: {
                  shape: 'Sx'
                },
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createTime: {
                  shape: 'Sa'
                },
                id: {},
                loggingConfigurationIdentifiers: {
                  shape: 'St'
                },
                maximumMessageLength: {
                  type: 'integer'
                },
                maximumMessageRatePerSecond: {
                  type: 'integer'
                },
                messageReviewHandler: {
                  shape: 'Sx'
                },
                name: {},
                tags: {
                  shape: 'Sl'
                },
                updateTime: {
                  shape: 'Sa'
                }
              }
            }
          }
        },
        shapes: {
          S8: {
            type: 'string',
            sensitive: true
          },
          Sa: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sd: {
            type: 'structure',
            members: {
              cloudWatchLogs: {
                type: 'structure',
                required: ['logGroupName'],
                members: {
                  logGroupName: {}
                }
              },
              firehose: {
                type: 'structure',
                required: ['deliveryStreamName'],
                members: {
                  deliveryStreamName: {}
                }
              },
              s3: {
                type: 'structure',
                required: ['bucketName'],
                members: {
                  bucketName: {}
                }
              }
            },
            union: true
          },
          Sl: {
            type: 'map',
            key: {},
            value: {}
          },
          St: {
            type: 'list',
            member: {}
          },
          Sx: {
            type: 'structure',
            members: {
              fallbackResult: {},
              uri: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=da72da2cc3bcf76a423eadb7a7bf1d5a83856270.js.map