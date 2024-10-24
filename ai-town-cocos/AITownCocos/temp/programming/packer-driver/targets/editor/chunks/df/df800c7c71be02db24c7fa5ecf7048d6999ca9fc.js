System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-06-10',
          endpointPrefix: 'polly',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Polly',
          serviceId: 'Polly',
          signatureVersion: 'v4',
          uid: 'polly-2016-06-10'
        },
        operations: {
          DeleteLexicon: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/lexicons/{LexiconName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'LexiconName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeVoices: {
            http: {
              method: 'GET',
              requestUri: '/v1/voices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Engine: {
                  location: 'querystring',
                  locationName: 'Engine'
                },
                LanguageCode: {
                  location: 'querystring',
                  locationName: 'LanguageCode'
                },
                IncludeAdditionalLanguageCodes: {
                  location: 'querystring',
                  locationName: 'IncludeAdditionalLanguageCodes',
                  type: 'boolean'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Voices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Gender: {},
                      Id: {},
                      LanguageCode: {},
                      LanguageName: {},
                      Name: {},
                      AdditionalLanguageCodes: {
                        type: 'list',
                        member: {}
                      },
                      SupportedEngines: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetLexicon: {
            http: {
              method: 'GET',
              requestUri: '/v1/lexicons/{LexiconName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'LexiconName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Lexicon: {
                  type: 'structure',
                  members: {
                    Content: {
                      shape: 'Sl'
                    },
                    Name: {}
                  }
                },
                LexiconAttributes: {
                  shape: 'Sm'
                }
              }
            }
          },
          GetSpeechSynthesisTask: {
            http: {
              method: 'GET',
              requestUri: '/v1/synthesisTasks/{TaskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TaskId'],
              members: {
                TaskId: {
                  location: 'uri',
                  locationName: 'TaskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SynthesisTask: {
                  shape: 'Sv'
                }
              }
            }
          },
          ListLexicons: {
            http: {
              method: 'GET',
              requestUri: '/v1/lexicons',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Lexicons: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Attributes: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSpeechSynthesisTasks: {
            http: {
              method: 'GET',
              requestUri: '/v1/synthesisTasks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'Status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                SynthesisTasks: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                }
              }
            }
          },
          PutLexicon: {
            http: {
              method: 'PUT',
              requestUri: '/v1/lexicons/{LexiconName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'Content'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'LexiconName'
                },
                Content: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartSpeechSynthesisTask: {
            http: {
              requestUri: '/v1/synthesisTasks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['OutputFormat', 'OutputS3BucketName', 'Text', 'VoiceId'],
              members: {
                Engine: {},
                LanguageCode: {},
                LexiconNames: {
                  shape: 'S12'
                },
                OutputFormat: {},
                OutputS3BucketName: {},
                OutputS3KeyPrefix: {},
                SampleRate: {},
                SnsTopicArn: {},
                SpeechMarkTypes: {
                  shape: 'S15'
                },
                Text: {},
                TextType: {},
                VoiceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SynthesisTask: {
                  shape: 'Sv'
                }
              }
            }
          },
          SynthesizeSpeech: {
            http: {
              requestUri: '/v1/speech',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['OutputFormat', 'Text', 'VoiceId'],
              members: {
                Engine: {},
                LanguageCode: {},
                LexiconNames: {
                  shape: 'S12'
                },
                OutputFormat: {},
                SampleRate: {},
                SpeechMarkTypes: {
                  shape: 'S15'
                },
                Text: {},
                TextType: {},
                VoiceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AudioStream: {
                  type: 'blob',
                  streaming: true
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                RequestCharacters: {
                  location: 'header',
                  locationName: 'x-amzn-RequestCharacters',
                  type: 'integer'
                }
              },
              payload: 'AudioStream'
            }
          }
        },
        shapes: {
          Sl: {
            type: 'string',
            sensitive: true
          },
          Sm: {
            type: 'structure',
            members: {
              Alphabet: {},
              LanguageCode: {},
              LastModified: {
                type: 'timestamp'
              },
              LexiconArn: {},
              LexemesCount: {
                type: 'integer'
              },
              Size: {
                type: 'integer'
              }
            }
          },
          Sv: {
            type: 'structure',
            members: {
              Engine: {},
              TaskId: {},
              TaskStatus: {},
              TaskStatusReason: {},
              OutputUri: {},
              CreationTime: {
                type: 'timestamp'
              },
              RequestCharacters: {
                type: 'integer'
              },
              SnsTopicArn: {},
              LexiconNames: {
                shape: 'S12'
              },
              OutputFormat: {},
              SampleRate: {},
              SpeechMarkTypes: {
                shape: 'S15'
              },
              TextType: {},
              VoiceId: {},
              LanguageCode: {}
            }
          },
          S12: {
            type: 'list',
            member: {}
          },
          S15: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=df800c7c71be02db24c7fa5ecf7048d6999ca9fc.js.map