System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-08-07',
          endpointPrefix: 'runtime-v2-lex',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocolSettings: {
            h2: 'eventstream'
          },
          serviceAbbreviation: 'Lex Runtime V2',
          serviceFullName: 'Amazon Lex Runtime V2',
          serviceId: 'Lex Runtime V2',
          signatureVersion: 'v4',
          signingName: 'lex',
          uid: 'runtime.lex.v2-2020-08-07'
        },
        operations: {
          DeleteSession: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}'
            },
            input: {
              type: 'structure',
              required: ['botId', 'botAliasId', 'sessionId', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botAliasId: {
                  location: 'uri',
                  locationName: 'botAliasId'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botAliasId: {},
                localeId: {},
                sessionId: {}
              }
            }
          },
          GetSession: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}'
            },
            input: {
              type: 'structure',
              required: ['botId', 'botAliasId', 'localeId', 'sessionId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botAliasId: {
                  location: 'uri',
                  locationName: 'botAliasId'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sessionId: {},
                messages: {
                  shape: 'Sa'
                },
                interpretations: {
                  shape: 'Sl'
                },
                sessionState: {
                  shape: 'S12'
                }
              }
            }
          },
          PutSession: {
            http: {
              requestUri: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}'
            },
            input: {
              type: 'structure',
              required: ['botId', 'botAliasId', 'localeId', 'sessionState', 'sessionId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botAliasId: {
                  location: 'uri',
                  locationName: 'botAliasId'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                messages: {
                  shape: 'Sa'
                },
                sessionState: {
                  shape: 'S12'
                },
                requestAttributes: {
                  shape: 'S1f'
                },
                responseContentType: {
                  location: 'header',
                  locationName: 'ResponseContentType'
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
                messages: {
                  location: 'header',
                  locationName: 'x-amz-lex-messages'
                },
                sessionState: {
                  location: 'header',
                  locationName: 'x-amz-lex-session-state'
                },
                requestAttributes: {
                  location: 'header',
                  locationName: 'x-amz-lex-request-attributes'
                },
                sessionId: {
                  location: 'header',
                  locationName: 'x-amz-lex-session-id'
                },
                audioStream: {
                  shape: 'S1r'
                }
              },
              payload: 'audioStream'
            }
          },
          RecognizeText: {
            http: {
              requestUri: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text'
            },
            input: {
              type: 'structure',
              required: ['botId', 'botAliasId', 'localeId', 'text', 'sessionId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botAliasId: {
                  location: 'uri',
                  locationName: 'botAliasId'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                text: {
                  shape: 'Sc'
                },
                sessionState: {
                  shape: 'S12'
                },
                requestAttributes: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                messages: {
                  shape: 'Sa'
                },
                sessionState: {
                  shape: 'S12'
                },
                interpretations: {
                  shape: 'Sl'
                },
                requestAttributes: {
                  shape: 'S1f'
                },
                sessionId: {},
                recognizedBotMember: {
                  type: 'structure',
                  required: ['botId'],
                  members: {
                    botId: {},
                    botName: {}
                  }
                }
              }
            }
          },
          RecognizeUtterance: {
            http: {
              requestUri: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance'
            },
            input: {
              type: 'structure',
              required: ['botId', 'botAliasId', 'localeId', 'requestContentType', 'sessionId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botAliasId: {
                  location: 'uri',
                  locationName: 'botAliasId'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                sessionState: {
                  shape: 'S1w',
                  location: 'header',
                  locationName: 'x-amz-lex-session-state'
                },
                requestAttributes: {
                  shape: 'S1w',
                  location: 'header',
                  locationName: 'x-amz-lex-request-attributes'
                },
                requestContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                responseContentType: {
                  location: 'header',
                  locationName: 'Response-Content-Type'
                },
                inputStream: {
                  shape: 'S1r'
                }
              },
              payload: 'inputStream'
            },
            output: {
              type: 'structure',
              members: {
                inputMode: {
                  location: 'header',
                  locationName: 'x-amz-lex-input-mode'
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                messages: {
                  location: 'header',
                  locationName: 'x-amz-lex-messages'
                },
                interpretations: {
                  location: 'header',
                  locationName: 'x-amz-lex-interpretations'
                },
                sessionState: {
                  location: 'header',
                  locationName: 'x-amz-lex-session-state'
                },
                requestAttributes: {
                  location: 'header',
                  locationName: 'x-amz-lex-request-attributes'
                },
                sessionId: {
                  location: 'header',
                  locationName: 'x-amz-lex-session-id'
                },
                inputTranscript: {
                  location: 'header',
                  locationName: 'x-amz-lex-input-transcript'
                },
                audioStream: {
                  shape: 'S1r'
                },
                recognizedBotMember: {
                  location: 'header',
                  locationName: 'x-amz-lex-recognized-bot-member'
                }
              },
              payload: 'audioStream'
            },
            authtype: 'v4-unsigned-body'
          }
        },
        shapes: {
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['contentType'],
              members: {
                content: {
                  shape: 'Sc'
                },
                contentType: {},
                imageResponseCard: {
                  type: 'structure',
                  required: ['title'],
                  members: {
                    title: {},
                    subtitle: {},
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
          Sc: {
            type: 'string',
            sensitive: true
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                nluConfidence: {
                  type: 'structure',
                  members: {
                    score: {
                      type: 'double'
                    }
                  }
                },
                sentimentResponse: {
                  type: 'structure',
                  members: {
                    sentiment: {},
                    sentimentScore: {
                      type: 'structure',
                      members: {
                        positive: {
                          type: 'double'
                        },
                        negative: {
                          type: 'double'
                        },
                        neutral: {
                          type: 'double'
                        },
                        mixed: {
                          type: 'double'
                        }
                      }
                    }
                  }
                },
                intent: {
                  shape: 'Ss'
                },
                interpretationSource: {}
              }
            }
          },
          Ss: {
            type: 'structure',
            required: ['name'],
            members: {
              name: {},
              slots: {
                shape: 'St'
              },
              state: {},
              confirmationState: {}
            }
          },
          St: {
            type: 'map',
            key: {},
            value: {
              shape: 'Su'
            }
          },
          Su: {
            type: 'structure',
            members: {
              value: {
                type: 'structure',
                required: ['interpretedValue'],
                members: {
                  originalValue: {},
                  interpretedValue: {},
                  resolvedValues: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              shape: {},
              values: {
                type: 'list',
                member: {
                  shape: 'Su'
                }
              },
              subSlots: {
                shape: 'St'
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              dialogAction: {
                type: 'structure',
                required: ['type'],
                members: {
                  type: {},
                  slotToElicit: {},
                  slotElicitationStyle: {},
                  subSlotToElicit: {
                    shape: 'S16'
                  }
                }
              },
              intent: {
                shape: 'Ss'
              },
              activeContexts: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'timeToLive', 'contextAttributes'],
                  members: {
                    name: {},
                    timeToLive: {
                      type: 'structure',
                      required: ['timeToLiveInSeconds', 'turnsToLive'],
                      members: {
                        timeToLiveInSeconds: {
                          type: 'integer'
                        },
                        turnsToLive: {
                          type: 'integer'
                        }
                      }
                    },
                    contextAttributes: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'Sc'
                      }
                    }
                  }
                }
              },
              sessionAttributes: {
                shape: 'S1f'
              },
              originatingRequestId: {},
              runtimeHints: {
                type: 'structure',
                members: {
                  slotHints: {
                    type: 'map',
                    key: {},
                    value: {
                      shape: 'S1k'
                    }
                  }
                }
              }
            }
          },
          S16: {
            type: 'structure',
            required: ['name'],
            members: {
              name: {},
              subSlotToElicit: {
                shape: 'S16'
              }
            }
          },
          S1f: {
            type: 'map',
            key: {},
            value: {}
          },
          S1k: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                runtimeHintValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['phrase'],
                    members: {
                      phrase: {}
                    }
                  }
                },
                subSlotHints: {
                  shape: 'S1k'
                }
              }
            }
          },
          S1r: {
            type: 'blob',
            streaming: true
          },
          S1w: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8c919b94fc23cf0472a0a924c6d5297f83b30096.js.map