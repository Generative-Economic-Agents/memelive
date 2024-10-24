System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-09-07',
          endpointPrefix: 'participant.connect',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Amazon Connect Participant',
          serviceFullName: 'Amazon Connect Participant Service',
          serviceId: 'ConnectParticipant',
          signatureVersion: 'v4',
          signingName: 'execute-api',
          uid: 'connectparticipant-2018-09-07'
        },
        operations: {
          CompleteAttachmentUpload: {
            http: {
              requestUri: '/participant/complete-attachment-upload'
            },
            input: {
              type: 'structure',
              required: ['AttachmentIds', 'ClientToken', 'ConnectionToken'],
              members: {
                AttachmentIds: {
                  type: 'list',
                  member: {}
                },
                ClientToken: {
                  idempotencyToken: true
                },
                ConnectionToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateParticipantConnection: {
            http: {
              requestUri: '/participant/connection'
            },
            input: {
              type: 'structure',
              required: ['ParticipantToken'],
              members: {
                Type: {
                  type: 'list',
                  member: {}
                },
                ParticipantToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                },
                ConnectParticipant: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Websocket: {
                  type: 'structure',
                  members: {
                    Url: {},
                    ConnectionExpiry: {}
                  }
                },
                ConnectionCredentials: {
                  type: 'structure',
                  members: {
                    ConnectionToken: {},
                    Expiry: {}
                  }
                }
              }
            }
          },
          DescribeView: {
            http: {
              method: 'GET',
              requestUri: '/participant/views/{ViewToken}'
            },
            input: {
              type: 'structure',
              required: ['ViewToken', 'ConnectionToken'],
              members: {
                ViewToken: {
                  location: 'uri',
                  locationName: 'ViewToken'
                },
                ConnectionToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                View: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Arn: {},
                    Name: {
                      type: 'string',
                      sensitive: true
                    },
                    Version: {
                      type: 'integer'
                    },
                    Content: {
                      type: 'structure',
                      members: {
                        InputSchema: {
                          type: 'string',
                          sensitive: true
                        },
                        Template: {
                          type: 'string',
                          sensitive: true
                        },
                        Actions: {
                          type: 'list',
                          member: {
                            type: 'string',
                            sensitive: true
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DisconnectParticipant: {
            http: {
              requestUri: '/participant/disconnect'
            },
            input: {
              type: 'structure',
              required: ['ConnectionToken'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ConnectionToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAttachment: {
            http: {
              requestUri: '/participant/attachment'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId', 'ConnectionToken'],
              members: {
                AttachmentId: {},
                ConnectionToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Url: {},
                UrlExpiry: {}
              }
            }
          },
          GetTranscript: {
            http: {
              requestUri: '/participant/transcript'
            },
            input: {
              type: 'structure',
              required: ['ConnectionToken'],
              members: {
                ContactId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ScanDirection: {},
                SortOrder: {},
                StartPosition: {
                  type: 'structure',
                  members: {
                    Id: {},
                    AbsoluteTime: {},
                    MostRecent: {
                      type: 'integer'
                    }
                  }
                },
                ConnectionToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InitialContactId: {},
                Transcript: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AbsoluteTime: {},
                      Content: {},
                      ContentType: {},
                      Id: {},
                      Type: {},
                      ParticipantId: {},
                      DisplayName: {},
                      ParticipantRole: {},
                      Attachments: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ContentType: {},
                            AttachmentId: {},
                            AttachmentName: {},
                            Status: {}
                          }
                        }
                      },
                      MessageMetadata: {
                        type: 'structure',
                        members: {
                          MessageId: {},
                          Receipts: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                DeliveredTimestamp: {},
                                ReadTimestamp: {},
                                RecipientParticipantId: {}
                              }
                            }
                          }
                        }
                      },
                      RelatedContactId: {},
                      ContactId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          SendEvent: {
            http: {
              requestUri: '/participant/event'
            },
            input: {
              type: 'structure',
              required: ['ContentType', 'ConnectionToken'],
              members: {
                ContentType: {},
                Content: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ConnectionToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                AbsoluteTime: {}
              }
            }
          },
          SendMessage: {
            http: {
              requestUri: '/participant/message'
            },
            input: {
              type: 'structure',
              required: ['ContentType', 'Content', 'ConnectionToken'],
              members: {
                ContentType: {},
                Content: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ConnectionToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                AbsoluteTime: {}
              }
            }
          },
          StartAttachmentUpload: {
            http: {
              requestUri: '/participant/start-attachment-upload'
            },
            input: {
              type: 'structure',
              required: ['ContentType', 'AttachmentSizeInBytes', 'AttachmentName', 'ClientToken', 'ConnectionToken'],
              members: {
                ContentType: {},
                AttachmentSizeInBytes: {
                  type: 'long'
                },
                AttachmentName: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ConnectionToken: {
                  location: 'header',
                  locationName: 'X-Amz-Bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AttachmentId: {},
                UploadMetadata: {
                  type: 'structure',
                  members: {
                    Url: {},
                    UrlExpiry: {},
                    HeadersToInclude: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=409cd388fd1820ce20c86b5eed428e0454ad480a.js.map