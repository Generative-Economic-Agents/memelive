System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-11-28',
          endpointPrefix: 'runtime.lex',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Lex Runtime Service',
          serviceId: 'Lex Runtime Service',
          signatureVersion: 'v4',
          signingName: 'lex',
          uid: 'runtime.lex-2016-11-28'
        },
        operations: {
          DeleteSession: {
            http: {
              method: 'DELETE',
              requestUri: '/bot/{botName}/alias/{botAlias}/user/{userId}/session'
            },
            input: {
              type: 'structure',
              required: ['botName', 'botAlias', 'userId'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                botAlias: {
                  location: 'uri',
                  locationName: 'botAlias'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botName: {},
                botAlias: {},
                userId: {},
                sessionId: {}
              }
            }
          },
          GetSession: {
            http: {
              method: 'GET',
              requestUri: '/bot/{botName}/alias/{botAlias}/user/{userId}/session/'
            },
            input: {
              type: 'structure',
              required: ['botName', 'botAlias', 'userId'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                botAlias: {
                  location: 'uri',
                  locationName: 'botAlias'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                checkpointLabelFilter: {
                  location: 'querystring',
                  locationName: 'checkpointLabelFilter'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recentIntentSummaryView: {
                  shape: 'Sa'
                },
                sessionAttributes: {
                  shape: 'Sd'
                },
                sessionId: {},
                dialogAction: {
                  shape: 'Sh'
                },
                activeContexts: {
                  shape: 'Sk'
                }
              }
            }
          },
          PostContent: {
            http: {
              requestUri: '/bot/{botName}/alias/{botAlias}/user/{userId}/content'
            },
            input: {
              type: 'structure',
              required: ['botName', 'botAlias', 'userId', 'contentType', 'inputStream'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                botAlias: {
                  location: 'uri',
                  locationName: 'botAlias'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                sessionAttributes: {
                  shape: 'St',
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-session-attributes'
                },
                requestAttributes: {
                  shape: 'St',
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-request-attributes'
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                accept: {
                  location: 'header',
                  locationName: 'Accept'
                },
                inputStream: {
                  shape: 'Sw'
                },
                activeContexts: {
                  shape: 'Sx',
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-active-contexts'
                }
              },
              payload: 'inputStream'
            },
            output: {
              type: 'structure',
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                intentName: {
                  location: 'header',
                  locationName: 'x-amz-lex-intent-name'
                },
                nluIntentConfidence: {
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-nlu-intent-confidence'
                },
                alternativeIntents: {
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-alternative-intents'
                },
                slots: {
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-slots'
                },
                sessionAttributes: {
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-session-attributes'
                },
                sentimentResponse: {
                  location: 'header',
                  locationName: 'x-amz-lex-sentiment'
                },
                message: {
                  shape: 'Si',
                  deprecated: true,
                  deprecatedMessage: 'The message field is deprecated, use the encodedMessage field instead. The message field is available only in the de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-CA, fr-FR and it-IT locales.',
                  location: 'header',
                  locationName: 'x-amz-lex-message'
                },
                encodedMessage: {
                  shape: 'Sz',
                  location: 'header',
                  locationName: 'x-amz-lex-encoded-message'
                },
                messageFormat: {
                  location: 'header',
                  locationName: 'x-amz-lex-message-format'
                },
                dialogState: {
                  location: 'header',
                  locationName: 'x-amz-lex-dialog-state'
                },
                slotToElicit: {
                  location: 'header',
                  locationName: 'x-amz-lex-slot-to-elicit'
                },
                inputTranscript: {
                  deprecated: true,
                  deprecatedMessage: 'The inputTranscript field is deprecated, use the encodedInputTranscript field instead. The inputTranscript field is available only in the de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-CA, fr-FR and it-IT locales.',
                  location: 'header',
                  locationName: 'x-amz-lex-input-transcript'
                },
                encodedInputTranscript: {
                  location: 'header',
                  locationName: 'x-amz-lex-encoded-input-transcript',
                  type: 'string',
                  sensitive: true
                },
                audioStream: {
                  shape: 'Sw'
                },
                botVersion: {
                  location: 'header',
                  locationName: 'x-amz-lex-bot-version'
                },
                sessionId: {
                  location: 'header',
                  locationName: 'x-amz-lex-session-id'
                },
                activeContexts: {
                  shape: 'Sx',
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-active-contexts'
                }
              },
              payload: 'audioStream'
            },
            authtype: 'v4-unsigned-body'
          },
          PostText: {
            http: {
              requestUri: '/bot/{botName}/alias/{botAlias}/user/{userId}/text'
            },
            input: {
              type: 'structure',
              required: ['botName', 'botAlias', 'userId', 'inputText'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                botAlias: {
                  location: 'uri',
                  locationName: 'botAlias'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                sessionAttributes: {
                  shape: 'Sd'
                },
                requestAttributes: {
                  shape: 'Sd'
                },
                inputText: {
                  shape: 'Si'
                },
                activeContexts: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                intentName: {},
                nluIntentConfidence: {
                  shape: 'S15'
                },
                alternativeIntents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      intentName: {},
                      nluIntentConfidence: {
                        shape: 'S15'
                      },
                      slots: {
                        shape: 'Sd'
                      }
                    }
                  }
                },
                slots: {
                  shape: 'Sd'
                },
                sessionAttributes: {
                  shape: 'Sd'
                },
                message: {
                  shape: 'Si'
                },
                sentimentResponse: {
                  type: 'structure',
                  members: {
                    sentimentLabel: {},
                    sentimentScore: {}
                  }
                },
                messageFormat: {},
                dialogState: {},
                slotToElicit: {},
                responseCard: {
                  type: 'structure',
                  members: {
                    version: {},
                    contentType: {},
                    genericAttachments: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          title: {},
                          subTitle: {},
                          attachmentLinkUrl: {},
                          imageUrl: {},
                          buttons: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['text', 'value'],
                              members: {
                                text: {},
                                value: {}
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                sessionId: {},
                botVersion: {},
                activeContexts: {
                  shape: 'Sk'
                }
              }
            }
          },
          PutSession: {
            http: {
              requestUri: '/bot/{botName}/alias/{botAlias}/user/{userId}/session'
            },
            input: {
              type: 'structure',
              required: ['botName', 'botAlias', 'userId'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                botAlias: {
                  location: 'uri',
                  locationName: 'botAlias'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                sessionAttributes: {
                  shape: 'Sd'
                },
                dialogAction: {
                  shape: 'Sh'
                },
                recentIntentSummaryView: {
                  shape: 'Sa'
                },
                accept: {
                  location: 'header',
                  locationName: 'Accept'
                },
                activeContexts: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                intentName: {
                  location: 'header',
                  locationName: 'x-amz-lex-intent-name'
                },
                slots: {
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-slots'
                },
                sessionAttributes: {
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-session-attributes'
                },
                message: {
                  shape: 'Si',
                  deprecated: true,
                  deprecatedMessage: 'The message field is deprecated, use the encodedMessage field instead. The message field is available only in the de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-CA, fr-FR and it-IT locales.',
                  location: 'header',
                  locationName: 'x-amz-lex-message'
                },
                encodedMessage: {
                  shape: 'Sz',
                  location: 'header',
                  locationName: 'x-amz-lex-encoded-message'
                },
                messageFormat: {
                  location: 'header',
                  locationName: 'x-amz-lex-message-format'
                },
                dialogState: {
                  location: 'header',
                  locationName: 'x-amz-lex-dialog-state'
                },
                slotToElicit: {
                  location: 'header',
                  locationName: 'x-amz-lex-slot-to-elicit'
                },
                audioStream: {
                  shape: 'Sw'
                },
                sessionId: {
                  location: 'header',
                  locationName: 'x-amz-lex-session-id'
                },
                activeContexts: {
                  shape: 'Sx',
                  jsonvalue: true,
                  location: 'header',
                  locationName: 'x-amz-lex-active-contexts'
                }
              },
              payload: 'audioStream'
            }
          }
        },
        shapes: {
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['dialogActionType'],
              members: {
                intentName: {},
                checkpointLabel: {},
                slots: {
                  shape: 'Sd'
                },
                confirmationStatus: {},
                dialogActionType: {},
                fulfillmentState: {},
                slotToElicit: {}
              }
            }
          },
          Sd: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Sh: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              intentName: {},
              slots: {
                shape: 'Sd'
              },
              slotToElicit: {},
              fulfillmentState: {},
              message: {
                shape: 'Si'
              },
              messageFormat: {}
            }
          },
          Si: {
            type: 'string',
            sensitive: true
          },
          Sk: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'timeToLive', 'parameters'],
              members: {
                name: {},
                timeToLive: {
                  type: 'structure',
                  members: {
                    timeToLiveInSeconds: {
                      type: 'integer'
                    },
                    turnsToLive: {
                      type: 'integer'
                    }
                  }
                },
                parameters: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'Si'
                  }
                }
              }
            },
            sensitive: true
          },
          St: {
            type: 'string',
            sensitive: true
          },
          Sw: {
            type: 'blob',
            streaming: true
          },
          Sx: {
            type: 'string',
            sensitive: true
          },
          Sz: {
            type: 'string',
            sensitive: true
          },
          S15: {
            type: 'structure',
            members: {
              score: {
                type: 'double'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2484742ccffc292738aae55c5d5cf8d534357076.js.map