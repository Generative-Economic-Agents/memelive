System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-14',
          endpointPrefix: 'ivs',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Amazon IVS',
          serviceFullName: 'Amazon Interactive Video Service',
          serviceId: 'ivs',
          signatureVersion: 'v4',
          signingName: 'ivs',
          uid: 'ivs-2020-07-14'
        },
        operations: {
          BatchGetChannel: {
            http: {
              requestUri: '/BatchGetChannel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arns'],
              members: {
                arns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                channels: {
                  type: 'list',
                  member: {
                    shape: 'S6'
                  }
                },
                errors: {
                  shape: 'Sn'
                }
              }
            }
          },
          BatchGetStreamKey: {
            http: {
              requestUri: '/BatchGetStreamKey',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arns'],
              members: {
                arns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  shape: 'Sn'
                },
                streamKeys: {
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                }
              }
            }
          },
          BatchStartViewerSessionRevocation: {
            http: {
              requestUri: '/BatchStartViewerSessionRevocation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['viewerSessions'],
              members: {
                viewerSessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['channelArn', 'viewerId'],
                    members: {
                      channelArn: {},
                      viewerId: {},
                      viewerSessionVersionsLessThanOrEqualTo: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['channelArn', 'viewerId'],
                    members: {
                      channelArn: {},
                      code: {},
                      message: {},
                      viewerId: {}
                    }
                  }
                }
              }
            }
          },
          CreateChannel: {
            http: {
              requestUri: '/CreateChannel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                authorized: {
                  type: 'boolean'
                },
                insecureIngest: {
                  type: 'boolean'
                },
                latencyMode: {},
                name: {},
                playbackRestrictionPolicyArn: {},
                preset: {},
                recordingConfigurationArn: {},
                tags: {
                  shape: 'Sj'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                channel: {
                  shape: 'S6'
                },
                streamKey: {
                  shape: 'Sx'
                }
              }
            }
          },
          CreatePlaybackRestrictionPolicy: {
            http: {
              requestUri: '/CreatePlaybackRestrictionPolicy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                allowedCountries: {
                  shape: 'S1b'
                },
                allowedOrigins: {
                  shape: 'S1d'
                },
                enableStrictOriginEnforcement: {
                  type: 'boolean'
                },
                name: {},
                tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                playbackRestrictionPolicy: {
                  shape: 'S1i'
                }
              }
            }
          },
          CreateRecordingConfiguration: {
            http: {
              requestUri: '/CreateRecordingConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['destinationConfiguration'],
              members: {
                destinationConfiguration: {
                  shape: 'S1l'
                },
                name: {},
                recordingReconnectWindowSeconds: {
                  type: 'integer'
                },
                renditionConfiguration: {
                  shape: 'S1q'
                },
                tags: {
                  shape: 'Sj'
                },
                thumbnailConfiguration: {
                  shape: 'S1u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recordingConfiguration: {
                  shape: 'S21'
                }
              }
            }
          },
          CreateStreamKey: {
            http: {
              requestUri: '/CreateStreamKey',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelArn'],
              members: {
                channelArn: {},
                tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                streamKey: {
                  shape: 'Sx'
                }
              }
            }
          },
          DeleteChannel: {
            http: {
              requestUri: '/DeleteChannel',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            }
          },
          DeletePlaybackKeyPair: {
            http: {
              requestUri: '/DeletePlaybackKeyPair',
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
          DeletePlaybackRestrictionPolicy: {
            http: {
              requestUri: '/DeletePlaybackRestrictionPolicy',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            }
          },
          DeleteRecordingConfiguration: {
            http: {
              requestUri: '/DeleteRecordingConfiguration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            }
          },
          DeleteStreamKey: {
            http: {
              requestUri: '/DeleteStreamKey',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            }
          },
          GetChannel: {
            http: {
              requestUri: '/GetChannel',
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
                channel: {
                  shape: 'S6'
                }
              }
            }
          },
          GetPlaybackKeyPair: {
            http: {
              requestUri: '/GetPlaybackKeyPair',
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
                keyPair: {
                  shape: 'S2h'
                }
              }
            }
          },
          GetPlaybackRestrictionPolicy: {
            http: {
              requestUri: '/GetPlaybackRestrictionPolicy',
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
                playbackRestrictionPolicy: {
                  shape: 'S1i'
                }
              }
            }
          },
          GetRecordingConfiguration: {
            http: {
              requestUri: '/GetRecordingConfiguration',
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
                recordingConfiguration: {
                  shape: 'S21'
                }
              }
            }
          },
          GetStream: {
            http: {
              requestUri: '/GetStream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelArn'],
              members: {
                channelArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                stream: {
                  type: 'structure',
                  members: {
                    channelArn: {},
                    health: {},
                    playbackUrl: {},
                    startTime: {
                      shape: 'S2s'
                    },
                    state: {},
                    streamId: {},
                    viewerCount: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          GetStreamKey: {
            http: {
              requestUri: '/GetStreamKey',
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
                streamKey: {
                  shape: 'Sx'
                }
              }
            }
          },
          GetStreamSession: {
            http: {
              requestUri: '/GetStreamSession',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelArn'],
              members: {
                channelArn: {},
                streamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                streamSession: {
                  type: 'structure',
                  members: {
                    channel: {
                      shape: 'S6'
                    },
                    endTime: {
                      shape: 'S31'
                    },
                    ingestConfiguration: {
                      type: 'structure',
                      members: {
                        audio: {
                          type: 'structure',
                          members: {
                            channels: {
                              type: 'long'
                            },
                            codec: {},
                            sampleRate: {
                              type: 'long'
                            },
                            targetBitrate: {
                              type: 'long'
                            }
                          }
                        },
                        video: {
                          type: 'structure',
                          members: {
                            avcLevel: {},
                            avcProfile: {},
                            codec: {},
                            encoder: {},
                            targetBitrate: {
                              type: 'long'
                            },
                            targetFramerate: {
                              type: 'long'
                            },
                            videoHeight: {
                              type: 'long'
                            },
                            videoWidth: {
                              type: 'long'
                            }
                          }
                        }
                      }
                    },
                    recordingConfiguration: {
                      shape: 'S21'
                    },
                    startTime: {
                      shape: 'S31'
                    },
                    streamId: {},
                    truncatedEvents: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          eventTime: {
                            shape: 'S31'
                          },
                          name: {},
                          type: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ImportPlaybackKeyPair: {
            http: {
              requestUri: '/ImportPlaybackKeyPair',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['publicKeyMaterial'],
              members: {
                name: {},
                publicKeyMaterial: {},
                tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                keyPair: {
                  shape: 'S2h'
                }
              }
            }
          },
          ListChannels: {
            http: {
              requestUri: '/ListChannels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterByName: {},
                filterByPlaybackRestrictionPolicyArn: {},
                filterByRecordingConfigurationArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['channels'],
              members: {
                channels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      authorized: {
                        type: 'boolean'
                      },
                      insecureIngest: {
                        type: 'boolean'
                      },
                      latencyMode: {},
                      name: {},
                      playbackRestrictionPolicyArn: {},
                      preset: {},
                      recordingConfigurationArn: {},
                      tags: {
                        shape: 'Sj'
                      },
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPlaybackKeyPairs: {
            http: {
              requestUri: '/ListPlaybackKeyPairs',
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
              required: ['keyPairs'],
              members: {
                keyPairs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      tags: {
                        shape: 'Sj'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPlaybackRestrictionPolicies: {
            http: {
              requestUri: '/ListPlaybackRestrictionPolicies',
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
              required: ['playbackRestrictionPolicies'],
              members: {
                nextToken: {},
                playbackRestrictionPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['allowedCountries', 'allowedOrigins', 'arn'],
                    members: {
                      allowedCountries: {
                        shape: 'S1b'
                      },
                      allowedOrigins: {
                        shape: 'S1d'
                      },
                      arn: {},
                      enableStrictOriginEnforcement: {
                        type: 'boolean'
                      },
                      name: {},
                      tags: {
                        shape: 'Sj'
                      }
                    }
                  }
                }
              }
            }
          },
          ListRecordingConfigurations: {
            http: {
              requestUri: '/ListRecordingConfigurations',
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
              required: ['recordingConfigurations'],
              members: {
                nextToken: {},
                recordingConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'destinationConfiguration', 'state'],
                    members: {
                      arn: {},
                      destinationConfiguration: {
                        shape: 'S1l'
                      },
                      name: {},
                      state: {},
                      tags: {
                        shape: 'Sj'
                      }
                    }
                  }
                }
              }
            }
          },
          ListStreamKeys: {
            http: {
              requestUri: '/ListStreamKeys',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelArn'],
              members: {
                channelArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['streamKeys'],
              members: {
                nextToken: {},
                streamKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      channelArn: {},
                      tags: {
                        shape: 'Sj'
                      }
                    }
                  }
                }
              }
            }
          },
          ListStreamSessions: {
            http: {
              requestUri: '/ListStreamSessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelArn'],
              members: {
                channelArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['streamSessions'],
              members: {
                nextToken: {},
                streamSessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      endTime: {
                        shape: 'S31'
                      },
                      hasErrorEvent: {
                        type: 'boolean'
                      },
                      startTime: {
                        shape: 'S31'
                      },
                      streamId: {}
                    }
                  }
                }
              }
            }
          },
          ListStreams: {
            http: {
              requestUri: '/ListStreams',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterBy: {
                  type: 'structure',
                  members: {
                    health: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['streams'],
              members: {
                nextToken: {},
                streams: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      channelArn: {},
                      health: {},
                      startTime: {
                        shape: 'S2s'
                      },
                      state: {},
                      streamId: {},
                      viewerCount: {
                        type: 'long'
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
                  shape: 'Sj'
                }
              }
            }
          },
          PutMetadata: {
            http: {
              requestUri: '/PutMetadata',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['channelArn', 'metadata'],
              members: {
                channelArn: {},
                metadata: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          StartViewerSessionRevocation: {
            http: {
              requestUri: '/StartViewerSessionRevocation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelArn', 'viewerId'],
              members: {
                channelArn: {},
                viewerId: {},
                viewerSessionVersionsLessThanOrEqualTo: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopStream: {
            http: {
              requestUri: '/StopStream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelArn'],
              members: {
                channelArn: {}
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
                  shape: 'Sj'
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
          UpdateChannel: {
            http: {
              requestUri: '/UpdateChannel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                authorized: {
                  type: 'boolean'
                },
                insecureIngest: {
                  type: 'boolean'
                },
                latencyMode: {},
                name: {},
                playbackRestrictionPolicyArn: {},
                preset: {},
                recordingConfigurationArn: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                channel: {
                  shape: 'S6'
                }
              }
            }
          },
          UpdatePlaybackRestrictionPolicy: {
            http: {
              requestUri: '/UpdatePlaybackRestrictionPolicy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                allowedCountries: {
                  shape: 'S1b'
                },
                allowedOrigins: {
                  shape: 'S1d'
                },
                arn: {},
                enableStrictOriginEnforcement: {
                  type: 'boolean'
                },
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                playbackRestrictionPolicy: {
                  shape: 'S1i'
                }
              }
            }
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            members: {
              arn: {},
              authorized: {
                type: 'boolean'
              },
              ingestEndpoint: {},
              insecureIngest: {
                type: 'boolean'
              },
              latencyMode: {},
              name: {},
              playbackRestrictionPolicyArn: {},
              playbackUrl: {},
              preset: {},
              recordingConfigurationArn: {},
              srt: {
                type: 'structure',
                members: {
                  endpoint: {},
                  passphrase: {
                    type: 'string',
                    sensitive: true
                  }
                }
              },
              tags: {
                shape: 'Sj'
              },
              type: {}
            }
          },
          Sj: {
            type: 'map',
            key: {},
            value: {}
          },
          Sn: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                arn: {},
                code: {},
                message: {}
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              arn: {},
              channelArn: {},
              tags: {
                shape: 'Sj'
              },
              value: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S1b: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'list',
            member: {}
          },
          S1i: {
            type: 'structure',
            required: ['allowedCountries', 'allowedOrigins', 'arn'],
            members: {
              allowedCountries: {
                shape: 'S1b'
              },
              allowedOrigins: {
                shape: 'S1d'
              },
              arn: {},
              enableStrictOriginEnforcement: {
                type: 'boolean'
              },
              name: {},
              tags: {
                shape: 'Sj'
              }
            }
          },
          S1l: {
            type: 'structure',
            members: {
              s3: {
                type: 'structure',
                required: ['bucketName'],
                members: {
                  bucketName: {}
                }
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              renditionSelection: {},
              renditions: {
                type: 'list',
                member: {}
              }
            }
          },
          S1u: {
            type: 'structure',
            members: {
              recordingMode: {},
              resolution: {},
              storage: {
                type: 'list',
                member: {}
              },
              targetIntervalSeconds: {
                type: 'long'
              }
            }
          },
          S21: {
            type: 'structure',
            required: ['arn', 'destinationConfiguration', 'state'],
            members: {
              arn: {},
              destinationConfiguration: {
                shape: 'S1l'
              },
              name: {},
              recordingReconnectWindowSeconds: {
                type: 'integer'
              },
              renditionConfiguration: {
                shape: 'S1q'
              },
              state: {},
              tags: {
                shape: 'Sj'
              },
              thumbnailConfiguration: {
                shape: 'S1u'
              }
            }
          },
          S2h: {
            type: 'structure',
            members: {
              arn: {},
              fingerprint: {},
              name: {},
              tags: {
                shape: 'Sj'
              }
            }
          },
          S2s: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S31: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=93e9811779b47a2c83f956f16696d86b52205a8f.js.map