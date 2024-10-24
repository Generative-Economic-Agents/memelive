System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-07-15',
          endpointPrefix: 'meetings-chime',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Chime SDK Meetings',
          serviceId: 'Chime SDK Meetings',
          signatureVersion: 'v4',
          signingName: 'chime',
          uid: 'chime-sdk-meetings-2021-07-15'
        },
        operations: {
          BatchCreateAttendee: {
            http: {
              requestUri: '/meetings/{MeetingId}/attendees?operation=batch-create'
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'Attendees'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                },
                Attendees: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attendees: {
                  shape: 'S9'
                },
                Errors: {
                  shape: 'Sc'
                }
              }
            }
          },
          BatchUpdateAttendeeCapabilitiesExcept: {
            http: {
              method: 'PUT',
              requestUri: '/meetings/{MeetingId}/attendees/capabilities?operation=batch-update-except',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'ExcludedAttendeeIds', 'Capabilities'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                },
                ExcludedAttendeeIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AttendeeId'],
                    members: {
                      AttendeeId: {}
                    }
                  }
                },
                Capabilities: {
                  shape: 'S6'
                }
              }
            }
          },
          CreateAttendee: {
            http: {
              requestUri: '/meetings/{MeetingId}/attendees'
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'ExternalUserId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                },
                ExternalUserId: {
                  shape: 'S5'
                },
                Capabilities: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attendee: {
                  shape: 'Sa'
                }
              }
            }
          },
          CreateMeeting: {
            http: {
              requestUri: '/meetings'
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken', 'MediaRegion', 'ExternalMeetingId'],
              members: {
                ClientRequestToken: {
                  shape: 'Sl',
                  idempotencyToken: true
                },
                MediaRegion: {},
                MeetingHostId: {
                  shape: 'S5'
                },
                ExternalMeetingId: {
                  shape: 'Sn'
                },
                NotificationsConfiguration: {
                  shape: 'So'
                },
                MeetingFeatures: {
                  shape: 'Sq'
                },
                PrimaryMeetingId: {},
                TenantIds: {
                  shape: 'S10'
                },
                Tags: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Meeting: {
                  shape: 'S17'
                }
              }
            }
          },
          CreateMeetingWithAttendees: {
            http: {
              requestUri: '/meetings?operation=create-attendees'
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken', 'MediaRegion', 'ExternalMeetingId', 'Attendees'],
              members: {
                ClientRequestToken: {
                  shape: 'Sl',
                  idempotencyToken: true
                },
                MediaRegion: {},
                MeetingHostId: {
                  shape: 'S5'
                },
                ExternalMeetingId: {
                  shape: 'Sn'
                },
                MeetingFeatures: {
                  shape: 'Sq'
                },
                NotificationsConfiguration: {
                  shape: 'So'
                },
                Attendees: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                PrimaryMeetingId: {},
                TenantIds: {
                  shape: 'S10'
                },
                Tags: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Meeting: {
                  shape: 'S17'
                },
                Attendees: {
                  shape: 'S9'
                },
                Errors: {
                  shape: 'Sc'
                }
              }
            }
          },
          DeleteAttendee: {
            http: {
              method: 'DELETE',
              requestUri: '/meetings/{MeetingId}/attendees/{AttendeeId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'AttendeeId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                },
                AttendeeId: {
                  location: 'uri',
                  locationName: 'AttendeeId'
                }
              }
            }
          },
          DeleteMeeting: {
            http: {
              method: 'DELETE',
              requestUri: '/meetings/{MeetingId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                }
              }
            }
          },
          GetAttendee: {
            http: {
              method: 'GET',
              requestUri: '/meetings/{MeetingId}/attendees/{AttendeeId}'
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'AttendeeId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                },
                AttendeeId: {
                  location: 'uri',
                  locationName: 'AttendeeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attendee: {
                  shape: 'Sa'
                }
              }
            }
          },
          GetMeeting: {
            http: {
              method: 'GET',
              requestUri: '/meetings/{MeetingId}'
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Meeting: {
                  shape: 'S17'
                }
              }
            }
          },
          ListAttendees: {
            http: {
              method: 'GET',
              requestUri: '/meetings/{MeetingId}/attendees',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attendees: {
                  shape: 'S9'
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S12'
                }
              }
            }
          },
          StartMeetingTranscription: {
            http: {
              requestUri: '/meetings/{MeetingId}/transcription?operation=start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'TranscriptionConfiguration'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                },
                TranscriptionConfiguration: {
                  type: 'structure',
                  members: {
                    EngineTranscribeSettings: {
                      type: 'structure',
                      members: {
                        LanguageCode: {},
                        VocabularyFilterMethod: {},
                        VocabularyFilterName: {},
                        VocabularyName: {},
                        Region: {},
                        EnablePartialResultsStabilization: {
                          type: 'boolean'
                        },
                        PartialResultsStability: {},
                        ContentIdentificationType: {},
                        ContentRedactionType: {},
                        PiiEntityTypes: {},
                        LanguageModelName: {},
                        IdentifyLanguage: {
                          type: 'boolean'
                        },
                        LanguageOptions: {},
                        PreferredLanguage: {},
                        VocabularyNames: {},
                        VocabularyFilterNames: {}
                      }
                    },
                    EngineTranscribeMedicalSettings: {
                      type: 'structure',
                      required: ['LanguageCode', 'Specialty', 'Type'],
                      members: {
                        LanguageCode: {},
                        Specialty: {},
                        Type: {},
                        VocabularyName: {},
                        Region: {},
                        ContentIdentificationType: {}
                      }
                    }
                  }
                }
              }
            }
          },
          StopMeetingTranscription: {
            http: {
              requestUri: '/meetings/{MeetingId}/transcription?operation=stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags?operation=tag-resource',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S12'
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
              requestUri: '/tags?operation=untag-resource',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateAttendeeCapabilities: {
            http: {
              method: 'PUT',
              requestUri: '/meetings/{MeetingId}/attendees/{AttendeeId}/capabilities'
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'AttendeeId', 'Capabilities'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'MeetingId'
                },
                AttendeeId: {
                  location: 'uri',
                  locationName: 'AttendeeId'
                },
                Capabilities: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attendee: {
                  shape: 'Sa'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['ExternalUserId'],
            members: {
              ExternalUserId: {
                shape: 'S5'
              },
              Capabilities: {
                shape: 'S6'
              }
            }
          },
          S5: {
            type: 'string',
            sensitive: true
          },
          S6: {
            type: 'structure',
            required: ['Audio', 'Video', 'Content'],
            members: {
              Audio: {},
              Video: {},
              Content: {}
            }
          },
          S9: {
            type: 'list',
            member: {
              shape: 'Sa'
            }
          },
          Sa: {
            type: 'structure',
            members: {
              ExternalUserId: {
                shape: 'S5'
              },
              AttendeeId: {},
              JoinToken: {
                type: 'string',
                sensitive: true
              },
              Capabilities: {
                shape: 'S6'
              }
            }
          },
          Sc: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ExternalUserId: {
                  shape: 'S5'
                },
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          Sl: {
            type: 'string',
            sensitive: true
          },
          Sn: {
            type: 'string',
            sensitive: true
          },
          So: {
            type: 'structure',
            members: {
              LambdaFunctionArn: {
                shape: 'Sp'
              },
              SnsTopicArn: {
                shape: 'Sp'
              },
              SqsQueueArn: {
                shape: 'Sp'
              }
            }
          },
          Sp: {
            type: 'string',
            sensitive: true
          },
          Sq: {
            type: 'structure',
            members: {
              Audio: {
                type: 'structure',
                members: {
                  EchoReduction: {}
                }
              },
              Video: {
                type: 'structure',
                members: {
                  MaxResolution: {}
                }
              },
              Content: {
                type: 'structure',
                members: {
                  MaxResolution: {}
                }
              },
              Attendee: {
                type: 'structure',
                members: {
                  MaxCount: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S10: {
            type: 'list',
            member: {}
          },
          S12: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S17: {
            type: 'structure',
            members: {
              MeetingId: {},
              MeetingHostId: {
                shape: 'S5'
              },
              ExternalMeetingId: {
                shape: 'Sn'
              },
              MediaRegion: {},
              MediaPlacement: {
                type: 'structure',
                members: {
                  AudioHostUrl: {},
                  AudioFallbackUrl: {},
                  SignalingUrl: {},
                  TurnControlUrl: {},
                  ScreenDataUrl: {},
                  ScreenViewingUrl: {},
                  ScreenSharingUrl: {},
                  EventIngestionUrl: {}
                }
              },
              MeetingFeatures: {
                shape: 'Sq'
              },
              PrimaryMeetingId: {},
              TenantIds: {
                shape: 'S10'
              },
              MeetingArn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1c8ad3cec6e4010a54a3b3b7e466efee32777a02.js.map