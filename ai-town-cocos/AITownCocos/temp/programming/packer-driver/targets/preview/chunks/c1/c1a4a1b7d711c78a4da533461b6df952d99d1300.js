System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-08-21',
          endpointPrefix: 'contact-lens',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Amazon Connect Contact Lens',
          serviceFullName: 'Amazon Connect Contact Lens',
          serviceId: 'Connect Contact Lens',
          signatureVersion: 'v4',
          signingName: 'connect',
          uid: 'connect-contact-lens-2020-08-21'
        },
        operations: {
          ListRealtimeContactAnalysisSegments: {
            http: {
              requestUri: '/realtime-contact-analysis/analysis-segments'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId'],
              members: {
                InstanceId: {},
                ContactId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Segments'],
              members: {
                Segments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Transcript: {
                        type: 'structure',
                        required: ['Id', 'ParticipantId', 'ParticipantRole', 'Content', 'BeginOffsetMillis', 'EndOffsetMillis', 'Sentiment'],
                        members: {
                          Id: {},
                          ParticipantId: {},
                          ParticipantRole: {},
                          Content: {},
                          BeginOffsetMillis: {
                            type: 'integer'
                          },
                          EndOffsetMillis: {
                            type: 'integer'
                          },
                          Sentiment: {},
                          IssuesDetected: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['CharacterOffsets'],
                              members: {
                                CharacterOffsets: {
                                  type: 'structure',
                                  required: ['BeginOffsetChar', 'EndOffsetChar'],
                                  members: {
                                    BeginOffsetChar: {
                                      type: 'integer'
                                    },
                                    EndOffsetChar: {
                                      type: 'integer'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      Categories: {
                        type: 'structure',
                        required: ['MatchedCategories', 'MatchedDetails'],
                        members: {
                          MatchedCategories: {
                            type: 'list',
                            member: {}
                          },
                          MatchedDetails: {
                            type: 'map',
                            key: {},
                            value: {
                              type: 'structure',
                              required: ['PointsOfInterest'],
                              members: {
                                PointsOfInterest: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    required: ['BeginOffsetMillis', 'EndOffsetMillis'],
                                    members: {
                                      BeginOffsetMillis: {
                                        type: 'integer'
                                      },
                                      EndOffsetMillis: {
                                        type: 'integer'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=c1a4a1b7d711c78a4da533461b6df952d99d1300.js.map