System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-09-30',
          endpointPrefix: 'kinesisvideo',
          protocol: 'rest-json',
          serviceAbbreviation: 'Kinesis Video Archived Media',
          serviceFullName: 'Amazon Kinesis Video Streams Archived Media',
          serviceId: 'Kinesis Video Archived Media',
          signatureVersion: 'v4',
          uid: 'kinesis-video-archived-media-2017-09-30'
        },
        operations: {
          GetClip: {
            http: {
              requestUri: '/getClip'
            },
            input: {
              type: 'structure',
              required: ['ClipFragmentSelector'],
              members: {
                StreamName: {},
                StreamARN: {},
                ClipFragmentSelector: {
                  type: 'structure',
                  required: ['FragmentSelectorType', 'TimestampRange'],
                  members: {
                    FragmentSelectorType: {},
                    TimestampRange: {
                      type: 'structure',
                      required: ['StartTimestamp', 'EndTimestamp'],
                      members: {
                        StartTimestamp: {
                          type: 'timestamp'
                        },
                        EndTimestamp: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Payload: {
                  shape: 'Sa'
                }
              },
              payload: 'Payload'
            }
          },
          GetDASHStreamingSessionURL: {
            http: {
              requestUri: '/getDASHStreamingSessionURL'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {},
                PlaybackMode: {},
                DisplayFragmentTimestamp: {},
                DisplayFragmentNumber: {},
                DASHFragmentSelector: {
                  type: 'structure',
                  members: {
                    FragmentSelectorType: {},
                    TimestampRange: {
                      type: 'structure',
                      members: {
                        StartTimestamp: {
                          type: 'timestamp'
                        },
                        EndTimestamp: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                },
                Expires: {
                  type: 'integer'
                },
                MaxManifestFragmentResults: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DASHStreamingSessionURL: {}
              }
            }
          },
          GetHLSStreamingSessionURL: {
            http: {
              requestUri: '/getHLSStreamingSessionURL'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {},
                PlaybackMode: {},
                HLSFragmentSelector: {
                  type: 'structure',
                  members: {
                    FragmentSelectorType: {},
                    TimestampRange: {
                      type: 'structure',
                      members: {
                        StartTimestamp: {
                          type: 'timestamp'
                        },
                        EndTimestamp: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                },
                ContainerFormat: {},
                DiscontinuityMode: {},
                DisplayFragmentTimestamp: {},
                Expires: {
                  type: 'integer'
                },
                MaxMediaPlaylistFragmentResults: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HLSStreamingSessionURL: {}
              }
            }
          },
          GetImages: {
            http: {
              requestUri: '/getImages'
            },
            input: {
              type: 'structure',
              required: ['ImageSelectorType', 'StartTimestamp', 'EndTimestamp', 'Format'],
              members: {
                StreamName: {},
                StreamARN: {},
                ImageSelectorType: {},
                StartTimestamp: {
                  type: 'timestamp'
                },
                EndTimestamp: {
                  type: 'timestamp'
                },
                SamplingInterval: {
                  type: 'integer'
                },
                Format: {},
                FormatConfig: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                WidthPixels: {
                  type: 'integer'
                },
                HeightPixels: {
                  type: 'integer'
                },
                MaxResults: {
                  type: 'long'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Images: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TimeStamp: {
                        type: 'timestamp'
                      },
                      Error: {},
                      ImageContent: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetMediaForFragmentList: {
            http: {
              requestUri: '/getMediaForFragmentList'
            },
            input: {
              type: 'structure',
              required: ['Fragments'],
              members: {
                StreamName: {},
                StreamARN: {},
                Fragments: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Payload: {
                  shape: 'Sa'
                }
              },
              payload: 'Payload'
            }
          },
          ListFragments: {
            http: {
              requestUri: '/listFragments'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {},
                MaxResults: {
                  type: 'long'
                },
                NextToken: {},
                FragmentSelector: {
                  type: 'structure',
                  required: ['FragmentSelectorType', 'TimestampRange'],
                  members: {
                    FragmentSelectorType: {},
                    TimestampRange: {
                      type: 'structure',
                      required: ['StartTimestamp', 'EndTimestamp'],
                      members: {
                        StartTimestamp: {
                          type: 'timestamp'
                        },
                        EndTimestamp: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Fragments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FragmentNumber: {},
                      FragmentSizeInBytes: {
                        type: 'long'
                      },
                      ProducerTimestamp: {
                        type: 'timestamp'
                      },
                      ServerTimestamp: {
                        type: 'timestamp'
                      },
                      FragmentLengthInMilliseconds: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          }
        },
        shapes: {
          Sa: {
            type: 'blob',
            streaming: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e15c8a98dc9ca1ec46e8c59e9036fe28c7006513.js.map