System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-14',
          endpointPrefix: 'ivsrealtime',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'ivsrealtime',
          serviceFullName: 'Amazon Interactive Video Service RealTime',
          serviceId: 'IVS RealTime',
          signatureVersion: 'v4',
          signingName: 'ivs',
          uid: 'ivs-realtime-2020-07-14'
        },
        operations: {
          CreateEncoderConfiguration: {
            http: {
              requestUri: '/CreateEncoderConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                name: {},
                tags: {
                  shape: 'S3'
                },
                video: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                encoderConfiguration: {
                  shape: 'Sc'
                }
              }
            }
          },
          CreateParticipantToken: {
            http: {
              requestUri: '/CreateParticipantToken',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['stageArn'],
              members: {
                attributes: {
                  shape: 'Sf'
                },
                capabilities: {
                  shape: 'Sh'
                },
                duration: {
                  type: 'integer'
                },
                stageArn: {},
                userId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                participantToken: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateStage: {
            http: {
              requestUri: '/CreateStage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                name: {},
                participantTokenConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      attributes: {
                        shape: 'Sf'
                      },
                      capabilities: {
                        shape: 'Sh'
                      },
                      duration: {
                        type: 'integer'
                      },
                      userId: {}
                    }
                  }
                },
                tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                participantTokens: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                stage: {
                  shape: 'Sx'
                }
              }
            }
          },
          CreateStorageConfiguration: {
            http: {
              requestUri: '/CreateStorageConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['s3'],
              members: {
                name: {},
                s3: {
                  shape: 'S11'
                },
                tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                storageConfiguration: {
                  shape: 'S14'
                }
              }
            }
          },
          DeleteEncoderConfiguration: {
            http: {
              requestUri: '/DeleteEncoderConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteStage: {
            http: {
              requestUri: '/DeleteStage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteStorageConfiguration: {
            http: {
              requestUri: '/DeleteStorageConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisconnectParticipant: {
            http: {
              requestUri: '/DisconnectParticipant',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['participantId', 'stageArn'],
              members: {
                participantId: {},
                reason: {},
                stageArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetComposition: {
            http: {
              requestUri: '/GetComposition',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                composition: {
                  shape: 'S1i'
                }
              }
            }
          },
          GetEncoderConfiguration: {
            http: {
              requestUri: '/GetEncoderConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                encoderConfiguration: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetParticipant: {
            http: {
              requestUri: '/GetParticipant',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['participantId', 'sessionId', 'stageArn'],
              members: {
                participantId: {},
                sessionId: {},
                stageArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                participant: {
                  type: 'structure',
                  members: {
                    attributes: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    browserName: {},
                    browserVersion: {},
                    firstJoinTime: {
                      shape: 'S1v'
                    },
                    ispName: {},
                    osName: {},
                    osVersion: {},
                    participantId: {},
                    published: {
                      type: 'boolean'
                    },
                    sdkVersion: {},
                    state: {},
                    userId: {}
                  }
                }
              }
            }
          },
          GetStage: {
            http: {
              requestUri: '/GetStage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                stage: {
                  shape: 'Sx'
                }
              }
            }
          },
          GetStageSession: {
            http: {
              requestUri: '/GetStageSession',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sessionId', 'stageArn'],
              members: {
                sessionId: {},
                stageArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                stageSession: {
                  type: 'structure',
                  members: {
                    endTime: {
                      shape: 'S1v'
                    },
                    sessionId: {},
                    startTime: {
                      shape: 'S1v'
                    }
                  }
                }
              }
            }
          },
          GetStorageConfiguration: {
            http: {
              requestUri: '/GetStorageConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                storageConfiguration: {
                  shape: 'S14'
                }
              }
            }
          },
          ListCompositions: {
            http: {
              requestUri: '/ListCompositions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterByEncoderConfigurationArn: {},
                filterByStageArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['compositions'],
              members: {
                compositions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'destinations', 'stageArn', 'state'],
                    members: {
                      arn: {},
                      destinations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['id', 'state'],
                          members: {
                            endTime: {
                              shape: 'S1v'
                            },
                            id: {},
                            startTime: {
                              shape: 'S1v'
                            },
                            state: {}
                          }
                        }
                      },
                      endTime: {
                        shape: 'S1v'
                      },
                      stageArn: {},
                      startTime: {
                        shape: 'S1v'
                      },
                      state: {},
                      tags: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEncoderConfigurations: {
            http: {
              requestUri: '/ListEncoderConfigurations',
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
              required: ['encoderConfigurations'],
              members: {
                encoderConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn'],
                    members: {
                      arn: {},
                      name: {},
                      tags: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListParticipantEvents: {
            http: {
              requestUri: '/ListParticipantEvents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['participantId', 'sessionId', 'stageArn'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                participantId: {},
                sessionId: {},
                stageArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['events'],
              members: {
                events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      errorCode: {},
                      eventTime: {
                        shape: 'S1v'
                      },
                      name: {},
                      participantId: {},
                      remoteParticipantId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListParticipants: {
            http: {
              requestUri: '/ListParticipants',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sessionId', 'stageArn'],
              members: {
                filterByPublished: {
                  type: 'boolean'
                },
                filterByState: {},
                filterByUserId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sessionId: {},
                stageArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['participants'],
              members: {
                nextToken: {},
                participants: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      firstJoinTime: {
                        shape: 'S1v'
                      },
                      participantId: {},
                      published: {
                        type: 'boolean'
                      },
                      state: {},
                      userId: {}
                    }
                  }
                }
              }
            }
          },
          ListStageSessions: {
            http: {
              requestUri: '/ListStageSessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['stageArn'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                stageArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['stageSessions'],
              members: {
                nextToken: {},
                stageSessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      endTime: {
                        shape: 'S1v'
                      },
                      sessionId: {},
                      startTime: {
                        shape: 'S1v'
                      }
                    }
                  }
                }
              }
            }
          },
          ListStages: {
            http: {
              requestUri: '/ListStages',
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
              required: ['stages'],
              members: {
                nextToken: {},
                stages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn'],
                    members: {
                      activeSessionId: {},
                      arn: {},
                      name: {},
                      tags: {
                        shape: 'S3'
                      }
                    }
                  }
                }
              }
            }
          },
          ListStorageConfigurations: {
            http: {
              requestUri: '/ListStorageConfigurations',
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
              required: ['storageConfigurations'],
              members: {
                nextToken: {},
                storageConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn'],
                    members: {
                      arn: {},
                      name: {},
                      s3: {
                        shape: 'S11'
                      },
                      tags: {
                        shape: 'S3'
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
                  shape: 'S3'
                }
              }
            }
          },
          StartComposition: {
            http: {
              requestUri: '/StartComposition',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['destinations', 'stageArn'],
              members: {
                destinations: {
                  type: 'list',
                  member: {
                    shape: 'S1l'
                  }
                },
                idempotencyToken: {
                  idempotencyToken: true
                },
                layout: {
                  shape: 'S1x'
                },
                stageArn: {},
                tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                composition: {
                  shape: 'S1i'
                }
              }
            }
          },
          StopComposition: {
            http: {
              requestUri: '/StopComposition',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
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
                  shape: 'S3'
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
          UpdateStage: {
            http: {
              requestUri: '/UpdateStage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                stage: {
                  shape: 'Sx'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'map',
            key: {},
            value: {}
          },
          S6: {
            type: 'structure',
            members: {
              bitrate: {
                type: 'integer'
              },
              framerate: {
                type: 'float'
              },
              height: {
                type: 'integer'
              },
              width: {
                type: 'integer'
              }
            }
          },
          Sc: {
            type: 'structure',
            required: ['arn'],
            members: {
              arn: {},
              name: {},
              tags: {
                shape: 'S3'
              },
              video: {
                shape: 'S6'
              }
            }
          },
          Sf: {
            type: 'map',
            key: {},
            value: {}
          },
          Sh: {
            type: 'list',
            member: {}
          },
          Sn: {
            type: 'structure',
            members: {
              attributes: {
                shape: 'Sf'
              },
              capabilities: {
                shape: 'Sh'
              },
              duration: {
                type: 'integer'
              },
              expirationTime: {
                type: 'timestamp',
                timestampFormat: 'iso8601'
              },
              participantId: {},
              token: {
                type: 'string',
                sensitive: true
              },
              userId: {}
            }
          },
          Sx: {
            type: 'structure',
            required: ['arn'],
            members: {
              activeSessionId: {},
              arn: {},
              name: {},
              tags: {
                shape: 'S3'
              }
            }
          },
          S11: {
            type: 'structure',
            required: ['bucketName'],
            members: {
              bucketName: {}
            }
          },
          S14: {
            type: 'structure',
            required: ['arn'],
            members: {
              arn: {},
              name: {},
              s3: {
                shape: 'S11'
              },
              tags: {
                shape: 'S3'
              }
            }
          },
          S1i: {
            type: 'structure',
            required: ['arn', 'destinations', 'layout', 'stageArn', 'state'],
            members: {
              arn: {},
              destinations: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['configuration', 'id', 'state'],
                  members: {
                    configuration: {
                      shape: 'S1l'
                    },
                    detail: {
                      type: 'structure',
                      members: {
                        s3: {
                          type: 'structure',
                          required: ['recordingPrefix'],
                          members: {
                            recordingPrefix: {}
                          }
                        }
                      }
                    },
                    endTime: {
                      shape: 'S1v'
                    },
                    id: {},
                    startTime: {
                      shape: 'S1v'
                    },
                    state: {}
                  }
                }
              },
              endTime: {
                shape: 'S1v'
              },
              layout: {
                shape: 'S1x'
              },
              stageArn: {},
              startTime: {
                shape: 'S1v'
              },
              state: {},
              tags: {
                shape: 'S3'
              }
            }
          },
          S1l: {
            type: 'structure',
            members: {
              channel: {
                type: 'structure',
                required: ['channelArn'],
                members: {
                  channelArn: {},
                  encoderConfigurationArn: {}
                }
              },
              name: {},
              s3: {
                type: 'structure',
                required: ['encoderConfigurationArns', 'storageConfigurationArn'],
                members: {
                  encoderConfigurationArns: {
                    type: 'list',
                    member: {}
                  },
                  recordingConfiguration: {
                    type: 'structure',
                    members: {
                      format: {}
                    }
                  },
                  storageConfigurationArn: {}
                }
              }
            }
          },
          S1v: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1x: {
            type: 'structure',
            members: {
              grid: {
                type: 'structure',
                members: {
                  featuredParticipantAttribute: {},
                  gridGap: {
                    type: 'integer'
                  },
                  omitStoppedVideo: {
                    type: 'boolean'
                  },
                  videoAspectRatio: {},
                  videoFillMode: {}
                }
              },
              pip: {
                type: 'structure',
                members: {
                  featuredParticipantAttribute: {},
                  gridGap: {
                    type: 'integer'
                  },
                  omitStoppedVideo: {
                    type: 'boolean'
                  },
                  pipBehavior: {},
                  pipHeight: {
                    type: 'integer'
                  },
                  pipOffset: {
                    type: 'integer'
                  },
                  pipParticipantAttribute: {},
                  pipPosition: {},
                  pipWidth: {
                    type: 'integer'
                  },
                  videoFillMode: {}
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d7e6e89990e9cb16195cc2e98c30b9ae34822d06.js.map