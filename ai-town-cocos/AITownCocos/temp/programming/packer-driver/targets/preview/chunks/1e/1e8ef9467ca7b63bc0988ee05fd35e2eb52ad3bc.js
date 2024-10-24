System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2018-09-05',
          endpointPrefix: 'sms-voice.pinpoint',
          signingName: 'sms-voice',
          serviceAbbreviation: 'Pinpoint SMS Voice',
          serviceFullName: 'Amazon Pinpoint SMS and Voice Service',
          serviceId: 'Pinpoint SMS Voice',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'pinpoint-sms-voice-2018-09-05',
          signatureVersion: 'v4'
        },
        operations: {
          CreateConfigurationSet: {
            http: {
              requestUri: '/v1/sms-voice/configuration-sets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateConfigurationSetEventDestination: {
            http: {
              requestUri: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                EventDestination: {
                  shape: 'S6'
                },
                EventDestinationName: {}
              },
              required: ['ConfigurationSetName']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteConfigurationSet: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                }
              },
              required: ['ConfigurationSetName']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteConfigurationSetEventDestination: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                EventDestinationName: {
                  location: 'uri',
                  locationName: 'EventDestinationName'
                }
              },
              required: ['EventDestinationName', 'ConfigurationSetName']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetConfigurationSetEventDestinations: {
            http: {
              method: 'GET',
              requestUri: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                }
              },
              required: ['ConfigurationSetName']
            },
            output: {
              type: 'structure',
              members: {
                EventDestinations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CloudWatchLogsDestination: {
                        shape: 'S7'
                      },
                      Enabled: {
                        type: 'boolean'
                      },
                      KinesisFirehoseDestination: {
                        shape: 'Sa'
                      },
                      MatchingEventTypes: {
                        shape: 'Sb'
                      },
                      Name: {},
                      SnsDestination: {
                        shape: 'Sd'
                      }
                    }
                  }
                }
              }
            }
          },
          ListConfigurationSets: {
            http: {
              method: 'GET',
              requestUri: '/v1/sms-voice/configuration-sets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSets: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          SendVoiceMessage: {
            http: {
              requestUri: '/v1/sms-voice/voice/message',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CallerId: {},
                ConfigurationSetName: {},
                Content: {
                  type: 'structure',
                  members: {
                    CallInstructionsMessage: {
                      type: 'structure',
                      members: {
                        Text: {}
                      },
                      required: []
                    },
                    PlainTextMessage: {
                      type: 'structure',
                      members: {
                        LanguageCode: {},
                        Text: {},
                        VoiceId: {}
                      },
                      required: []
                    },
                    SSMLMessage: {
                      type: 'structure',
                      members: {
                        LanguageCode: {},
                        Text: {},
                        VoiceId: {}
                      },
                      required: []
                    }
                  }
                },
                DestinationPhoneNumber: {},
                OriginationPhoneNumber: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          UpdateConfigurationSetEventDestination: {
            http: {
              method: 'PUT',
              requestUri: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                EventDestination: {
                  shape: 'S6'
                },
                EventDestinationName: {
                  location: 'uri',
                  locationName: 'EventDestinationName'
                }
              },
              required: ['EventDestinationName', 'ConfigurationSetName']
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            members: {
              CloudWatchLogsDestination: {
                shape: 'S7'
              },
              Enabled: {
                type: 'boolean'
              },
              KinesisFirehoseDestination: {
                shape: 'Sa'
              },
              MatchingEventTypes: {
                shape: 'Sb'
              },
              SnsDestination: {
                shape: 'Sd'
              }
            },
            required: []
          },
          S7: {
            type: 'structure',
            members: {
              IamRoleArn: {},
              LogGroupArn: {}
            },
            required: []
          },
          Sa: {
            type: 'structure',
            members: {
              DeliveryStreamArn: {},
              IamRoleArn: {}
            },
            required: []
          },
          Sb: {
            type: 'list',
            member: {}
          },
          Sd: {
            type: 'structure',
            members: {
              TopicArn: {}
            },
            required: []
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1e8ef9467ca7b63bc0988ee05fd35e2eb52ad3bc.js.map