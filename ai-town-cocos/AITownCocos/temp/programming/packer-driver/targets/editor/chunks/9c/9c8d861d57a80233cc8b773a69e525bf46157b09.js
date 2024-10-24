System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-07-15',
          endpointPrefix: 'media-pipelines-chime',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Chime SDK Media Pipelines',
          serviceId: 'Chime SDK Media Pipelines',
          signatureVersion: 'v4',
          signingName: 'chime',
          uid: 'chime-sdk-media-pipelines-2021-07-15'
        },
        operations: {
          CreateMediaCapturePipeline: {
            http: {
              requestUri: '/sdk-media-capture-pipelines',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['SourceType', 'SourceArn', 'SinkType', 'SinkArn'],
              members: {
                SourceType: {},
                SourceArn: {
                  shape: 'S3'
                },
                SinkType: {},
                SinkArn: {
                  shape: 'S3'
                },
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                },
                ChimeSdkMeetingConfiguration: {
                  shape: 'S6'
                },
                Tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaCapturePipeline: {
                  shape: 'S1c'
                }
              }
            }
          },
          CreateMediaConcatenationPipeline: {
            http: {
              requestUri: '/sdk-media-concatenation-pipelines',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Sources', 'Sinks'],
              members: {
                Sources: {
                  shape: 'S1h'
                },
                Sinks: {
                  shape: 'S1w'
                },
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaConcatenationPipeline: {
                  shape: 'S21'
                }
              }
            }
          },
          CreateMediaInsightsPipeline: {
            http: {
              requestUri: '/media-insights-pipelines',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['MediaInsightsPipelineConfigurationArn'],
              members: {
                MediaInsightsPipelineConfigurationArn: {
                  shape: 'S3'
                },
                KinesisVideoStreamSourceRuntimeConfiguration: {
                  shape: 'S23'
                },
                MediaInsightsRuntimeMetadata: {
                  shape: 'S2g'
                },
                KinesisVideoStreamRecordingSourceRuntimeConfiguration: {
                  shape: 'S2j'
                },
                S3RecordingSinkRuntimeConfiguration: {
                  shape: 'S2q'
                },
                Tags: {
                  shape: 'S17'
                },
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MediaInsightsPipeline'],
              members: {
                MediaInsightsPipeline: {
                  shape: 'S2t'
                }
              }
            }
          },
          CreateMediaInsightsPipelineConfiguration: {
            http: {
              requestUri: '/media-insights-pipeline-configurations',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['MediaInsightsPipelineConfigurationName', 'ResourceAccessRoleArn', 'Elements'],
              members: {
                MediaInsightsPipelineConfigurationName: {},
                ResourceAccessRoleArn: {
                  shape: 'S3'
                },
                RealTimeAlertConfiguration: {
                  shape: 'S30'
                },
                Elements: {
                  shape: 'S3d'
                },
                Tags: {
                  shape: 'S17'
                },
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaInsightsPipelineConfiguration: {
                  shape: 'S45'
                }
              }
            }
          },
          CreateMediaLiveConnectorPipeline: {
            http: {
              requestUri: '/sdk-media-live-connector-pipelines',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Sources', 'Sinks'],
              members: {
                Sources: {
                  shape: 'S47'
                },
                Sinks: {
                  shape: 'S4c'
                },
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaLiveConnectorPipeline: {
                  shape: 'S4k'
                }
              }
            }
          },
          CreateMediaPipelineKinesisVideoStreamPool: {
            http: {
              requestUri: '/media-pipeline-kinesis-video-stream-pools',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamConfiguration', 'PoolName'],
              members: {
                StreamConfiguration: {
                  shape: 'S4m'
                },
                PoolName: {},
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KinesisVideoStreamPoolConfiguration: {
                  shape: 'S4r'
                }
              }
            }
          },
          CreateMediaStreamPipeline: {
            http: {
              requestUri: '/sdk-media-stream-pipelines',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Sources', 'Sinks'],
              members: {
                Sources: {
                  shape: 'S4w'
                },
                Sinks: {
                  shape: 'S4y'
                },
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaStreamPipeline: {
                  shape: 'S54'
                }
              }
            }
          },
          DeleteMediaCapturePipeline: {
            http: {
              method: 'DELETE',
              requestUri: '/sdk-media-capture-pipelines/{mediaPipelineId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MediaPipelineId'],
              members: {
                MediaPipelineId: {
                  location: 'uri',
                  locationName: 'mediaPipelineId'
                }
              }
            }
          },
          DeleteMediaInsightsPipelineConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/media-insights-pipeline-configurations/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            }
          },
          DeleteMediaPipeline: {
            http: {
              method: 'DELETE',
              requestUri: '/sdk-media-pipelines/{mediaPipelineId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MediaPipelineId'],
              members: {
                MediaPipelineId: {
                  location: 'uri',
                  locationName: 'mediaPipelineId'
                }
              }
            }
          },
          DeleteMediaPipelineKinesisVideoStreamPool: {
            http: {
              method: 'DELETE',
              requestUri: '/media-pipeline-kinesis-video-stream-pools/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            }
          },
          GetMediaCapturePipeline: {
            http: {
              method: 'GET',
              requestUri: '/sdk-media-capture-pipelines/{mediaPipelineId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MediaPipelineId'],
              members: {
                MediaPipelineId: {
                  location: 'uri',
                  locationName: 'mediaPipelineId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaCapturePipeline: {
                  shape: 'S1c'
                }
              }
            }
          },
          GetMediaInsightsPipelineConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/media-insights-pipeline-configurations/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaInsightsPipelineConfiguration: {
                  shape: 'S45'
                }
              }
            }
          },
          GetMediaPipeline: {
            http: {
              method: 'GET',
              requestUri: '/sdk-media-pipelines/{mediaPipelineId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MediaPipelineId'],
              members: {
                MediaPipelineId: {
                  location: 'uri',
                  locationName: 'mediaPipelineId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaPipeline: {
                  type: 'structure',
                  members: {
                    MediaCapturePipeline: {
                      shape: 'S1c'
                    },
                    MediaLiveConnectorPipeline: {
                      shape: 'S4k'
                    },
                    MediaConcatenationPipeline: {
                      shape: 'S21'
                    },
                    MediaInsightsPipeline: {
                      shape: 'S2t'
                    },
                    MediaStreamPipeline: {
                      shape: 'S54'
                    }
                  }
                }
              }
            }
          },
          GetMediaPipelineKinesisVideoStreamPool: {
            http: {
              method: 'GET',
              requestUri: '/media-pipeline-kinesis-video-stream-pools/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KinesisVideoStreamPoolConfiguration: {
                  shape: 'S4r'
                }
              }
            }
          },
          GetSpeakerSearchTask: {
            http: {
              method: 'GET',
              requestUri: '/media-insights-pipelines/{identifier}/speaker-search-tasks/{speakerSearchTaskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'SpeakerSearchTaskId'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                SpeakerSearchTaskId: {
                  location: 'uri',
                  locationName: 'speakerSearchTaskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SpeakerSearchTask: {
                  shape: 'S5k'
                }
              }
            }
          },
          GetVoiceToneAnalysisTask: {
            http: {
              method: 'GET',
              requestUri: '/media-insights-pipelines/{identifier}/voice-tone-analysis-tasks/{voiceToneAnalysisTaskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'VoiceToneAnalysisTaskId'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                VoiceToneAnalysisTaskId: {
                  location: 'uri',
                  locationName: 'voiceToneAnalysisTaskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceToneAnalysisTask: {
                  shape: 'S5o'
                }
              }
            }
          },
          ListMediaCapturePipelines: {
            http: {
              method: 'GET',
              requestUri: '/sdk-media-capture-pipelines',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
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
                MediaCapturePipelines: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MediaPipelineId: {},
                      MediaPipelineArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMediaInsightsPipelineConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/media-insights-pipeline-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
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
                MediaInsightsPipelineConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MediaInsightsPipelineConfigurationName: {},
                      MediaInsightsPipelineConfigurationId: {},
                      MediaInsightsPipelineConfigurationArn: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMediaPipelineKinesisVideoStreamPools: {
            http: {
              method: 'GET',
              requestUri: '/media-pipeline-kinesis-video-stream-pools',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
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
                KinesisVideoStreamPools: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PoolName: {},
                      PoolId: {},
                      PoolArn: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMediaPipelines: {
            http: {
              method: 'GET',
              requestUri: '/sdk-media-pipelines',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
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
                MediaPipelines: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MediaPipelineId: {},
                      MediaPipelineArn: {}
                    }
                  }
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
                  shape: 'S17'
                }
              }
            }
          },
          StartSpeakerSearchTask: {
            http: {
              requestUri: '/media-insights-pipelines/{identifier}/speaker-search-tasks?operation=start',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'VoiceProfileDomainArn'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                VoiceProfileDomainArn: {
                  shape: 'S3'
                },
                KinesisVideoStreamSourceTaskConfiguration: {
                  shape: 'S69'
                },
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SpeakerSearchTask: {
                  shape: 'S5k'
                }
              }
            }
          },
          StartVoiceToneAnalysisTask: {
            http: {
              requestUri: '/media-insights-pipelines/{identifier}/voice-tone-analysis-tasks?operation=start',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'LanguageCode'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                LanguageCode: {},
                KinesisVideoStreamSourceTaskConfiguration: {
                  shape: 'S69'
                },
                ClientRequestToken: {
                  shape: 'S5',
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceToneAnalysisTask: {
                  shape: 'S5o'
                }
              }
            }
          },
          StopSpeakerSearchTask: {
            http: {
              requestUri: '/media-insights-pipelines/{identifier}/speaker-search-tasks/{speakerSearchTaskId}?operation=stop',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'SpeakerSearchTaskId'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                SpeakerSearchTaskId: {
                  location: 'uri',
                  locationName: 'speakerSearchTaskId'
                }
              }
            }
          },
          StopVoiceToneAnalysisTask: {
            http: {
              requestUri: '/media-insights-pipelines/{identifier}/voice-tone-analysis-tasks/{voiceToneAnalysisTaskId}?operation=stop',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'VoiceToneAnalysisTaskId'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                VoiceToneAnalysisTaskId: {
                  location: 'uri',
                  locationName: 'voiceToneAnalysisTaskId'
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
                  shape: 'S17'
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
          UpdateMediaInsightsPipelineConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/media-insights-pipeline-configurations/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'ResourceAccessRoleArn', 'Elements'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                ResourceAccessRoleArn: {
                  shape: 'S3'
                },
                RealTimeAlertConfiguration: {
                  shape: 'S30'
                },
                Elements: {
                  shape: 'S3d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaInsightsPipelineConfiguration: {
                  shape: 'S45'
                }
              }
            }
          },
          UpdateMediaInsightsPipelineStatus: {
            http: {
              method: 'PUT',
              requestUri: '/media-insights-pipeline-status/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'UpdateStatus'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                UpdateStatus: {}
              }
            }
          },
          UpdateMediaPipelineKinesisVideoStreamPool: {
            http: {
              method: 'PUT',
              requestUri: '/media-pipeline-kinesis-video-stream-pools/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                StreamConfiguration: {
                  type: 'structure',
                  members: {
                    DataRetentionInHours: {
                      type: 'integer'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KinesisVideoStreamPoolConfiguration: {
                  shape: 'S4r'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'string',
            sensitive: true
          },
          S5: {
            type: 'string',
            sensitive: true
          },
          S6: {
            type: 'structure',
            members: {
              SourceConfiguration: {
                shape: 'S7'
              },
              ArtifactsConfiguration: {
                type: 'structure',
                required: ['Audio', 'Video', 'Content'],
                members: {
                  Audio: {
                    type: 'structure',
                    required: ['MuxType'],
                    members: {
                      MuxType: {}
                    }
                  },
                  Video: {
                    type: 'structure',
                    required: ['State'],
                    members: {
                      State: {},
                      MuxType: {}
                    }
                  },
                  Content: {
                    type: 'structure',
                    required: ['State'],
                    members: {
                      State: {},
                      MuxType: {}
                    }
                  },
                  CompositedVideo: {
                    shape: 'Sl'
                  }
                }
              }
            }
          },
          S7: {
            type: 'structure',
            members: {
              SelectedVideoStreams: {
                type: 'structure',
                members: {
                  AttendeeIds: {
                    type: 'list',
                    member: {}
                  },
                  ExternalUserIds: {
                    type: 'list',
                    member: {
                      type: 'string',
                      sensitive: true
                    }
                  }
                }
              }
            }
          },
          Sl: {
            type: 'structure',
            required: ['GridViewConfiguration'],
            members: {
              Layout: {},
              Resolution: {},
              GridViewConfiguration: {
                type: 'structure',
                required: ['ContentShareLayout'],
                members: {
                  ContentShareLayout: {},
                  PresenterOnlyConfiguration: {
                    type: 'structure',
                    members: {
                      PresenterPosition: {}
                    }
                  },
                  ActiveSpeakerOnlyConfiguration: {
                    type: 'structure',
                    members: {
                      ActiveSpeakerPosition: {}
                    }
                  },
                  HorizontalLayoutConfiguration: {
                    type: 'structure',
                    members: {
                      TileOrder: {},
                      TilePosition: {},
                      TileCount: {
                        type: 'integer'
                      },
                      TileAspectRatio: {}
                    }
                  },
                  VerticalLayoutConfiguration: {
                    type: 'structure',
                    members: {
                      TileOrder: {},
                      TilePosition: {},
                      TileCount: {
                        type: 'integer'
                      },
                      TileAspectRatio: {}
                    }
                  },
                  VideoAttribute: {
                    type: 'structure',
                    members: {
                      CornerRadius: {
                        type: 'integer'
                      },
                      BorderColor: {},
                      HighlightColor: {},
                      BorderThickness: {
                        type: 'integer'
                      }
                    }
                  },
                  CanvasOrientation: {}
                }
              }
            }
          },
          S17: {
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
          S1c: {
            type: 'structure',
            members: {
              MediaPipelineId: {},
              MediaPipelineArn: {},
              SourceType: {},
              SourceArn: {
                shape: 'S3'
              },
              Status: {},
              SinkType: {},
              SinkArn: {
                shape: 'S3'
              },
              CreatedTimestamp: {
                shape: 'S1f'
              },
              UpdatedTimestamp: {
                shape: 'S1f'
              },
              ChimeSdkMeetingConfiguration: {
                shape: 'S6'
              }
            }
          },
          S1f: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type', 'MediaCapturePipelineSourceConfiguration'],
              members: {
                Type: {},
                MediaCapturePipelineSourceConfiguration: {
                  type: 'structure',
                  required: ['MediaPipelineArn', 'ChimeSdkMeetingConfiguration'],
                  members: {
                    MediaPipelineArn: {
                      shape: 'S3'
                    },
                    ChimeSdkMeetingConfiguration: {
                      type: 'structure',
                      required: ['ArtifactsConfiguration'],
                      members: {
                        ArtifactsConfiguration: {
                          type: 'structure',
                          required: ['Audio', 'Video', 'Content', 'DataChannel', 'TranscriptionMessages', 'MeetingEvents', 'CompositedVideo'],
                          members: {
                            Audio: {
                              type: 'structure',
                              required: ['State'],
                              members: {
                                State: {}
                              }
                            },
                            Video: {
                              type: 'structure',
                              required: ['State'],
                              members: {
                                State: {}
                              }
                            },
                            Content: {
                              type: 'structure',
                              required: ['State'],
                              members: {
                                State: {}
                              }
                            },
                            DataChannel: {
                              type: 'structure',
                              required: ['State'],
                              members: {
                                State: {}
                              }
                            },
                            TranscriptionMessages: {
                              type: 'structure',
                              required: ['State'],
                              members: {
                                State: {}
                              }
                            },
                            MeetingEvents: {
                              type: 'structure',
                              required: ['State'],
                              members: {
                                State: {}
                              }
                            },
                            CompositedVideo: {
                              type: 'structure',
                              required: ['State'],
                              members: {
                                State: {}
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
          S1w: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type', 'S3BucketSinkConfiguration'],
              members: {
                Type: {},
                S3BucketSinkConfiguration: {
                  type: 'structure',
                  required: ['Destination'],
                  members: {
                    Destination: {
                      shape: 'S3'
                    }
                  }
                }
              }
            }
          },
          S21: {
            type: 'structure',
            members: {
              MediaPipelineId: {},
              MediaPipelineArn: {},
              Sources: {
                shape: 'S1h'
              },
              Sinks: {
                shape: 'S1w'
              },
              Status: {},
              CreatedTimestamp: {
                shape: 'S1f'
              },
              UpdatedTimestamp: {
                shape: 'S1f'
              }
            }
          },
          S23: {
            type: 'structure',
            required: ['Streams', 'MediaEncoding', 'MediaSampleRate'],
            members: {
              Streams: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['StreamArn', 'StreamChannelDefinition'],
                  members: {
                    StreamArn: {},
                    FragmentNumber: {},
                    StreamChannelDefinition: {
                      type: 'structure',
                      required: ['NumberOfChannels'],
                      members: {
                        NumberOfChannels: {
                          type: 'integer'
                        },
                        ChannelDefinitions: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['ChannelId'],
                            members: {
                              ChannelId: {
                                type: 'integer'
                              },
                              ParticipantRole: {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              MediaEncoding: {},
              MediaSampleRate: {
                type: 'integer'
              }
            }
          },
          S2g: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S2j: {
            type: 'structure',
            required: ['Streams', 'FragmentSelector'],
            members: {
              Streams: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    StreamArn: {}
                  }
                }
              },
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
          S2q: {
            type: 'structure',
            required: ['Destination', 'RecordingFileFormat'],
            members: {
              Destination: {
                shape: 'S3'
              },
              RecordingFileFormat: {}
            }
          },
          S2t: {
            type: 'structure',
            members: {
              MediaPipelineId: {},
              MediaPipelineArn: {
                shape: 'S3'
              },
              MediaInsightsPipelineConfigurationArn: {
                shape: 'S3'
              },
              Status: {},
              KinesisVideoStreamSourceRuntimeConfiguration: {
                shape: 'S23'
              },
              MediaInsightsRuntimeMetadata: {
                shape: 'S2g'
              },
              KinesisVideoStreamRecordingSourceRuntimeConfiguration: {
                shape: 'S2j'
              },
              S3RecordingSinkRuntimeConfiguration: {
                shape: 'S2q'
              },
              CreatedTimestamp: {
                shape: 'S1f'
              },
              ElementStatuses: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Type: {},
                    Status: {}
                  }
                }
              }
            }
          },
          S30: {
            type: 'structure',
            members: {
              Disabled: {
                type: 'boolean'
              },
              Rules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Type'],
                  members: {
                    Type: {},
                    KeywordMatchConfiguration: {
                      type: 'structure',
                      required: ['RuleName', 'Keywords'],
                      members: {
                        RuleName: {},
                        Keywords: {
                          type: 'list',
                          member: {}
                        },
                        Negate: {
                          type: 'boolean'
                        }
                      }
                    },
                    SentimentConfiguration: {
                      type: 'structure',
                      required: ['RuleName', 'SentimentType', 'TimePeriod'],
                      members: {
                        RuleName: {},
                        SentimentType: {},
                        TimePeriod: {
                          type: 'integer'
                        }
                      }
                    },
                    IssueDetectionConfiguration: {
                      type: 'structure',
                      required: ['RuleName'],
                      members: {
                        RuleName: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S3d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type'],
              members: {
                Type: {},
                AmazonTranscribeCallAnalyticsProcessorConfiguration: {
                  type: 'structure',
                  required: ['LanguageCode'],
                  members: {
                    LanguageCode: {},
                    VocabularyName: {},
                    VocabularyFilterName: {},
                    VocabularyFilterMethod: {},
                    LanguageModelName: {},
                    EnablePartialResultsStabilization: {
                      type: 'boolean'
                    },
                    PartialResultsStability: {},
                    ContentIdentificationType: {},
                    ContentRedactionType: {},
                    PiiEntityTypes: {},
                    FilterPartialResults: {
                      type: 'boolean'
                    },
                    PostCallAnalyticsSettings: {
                      type: 'structure',
                      required: ['OutputLocation', 'DataAccessRoleArn'],
                      members: {
                        OutputLocation: {},
                        DataAccessRoleArn: {},
                        ContentRedactionOutput: {},
                        OutputEncryptionKMSKeyId: {}
                      }
                    },
                    CallAnalyticsStreamCategories: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                AmazonTranscribeProcessorConfiguration: {
                  type: 'structure',
                  members: {
                    LanguageCode: {},
                    VocabularyName: {},
                    VocabularyFilterName: {},
                    VocabularyFilterMethod: {},
                    ShowSpeakerLabel: {
                      type: 'boolean'
                    },
                    EnablePartialResultsStabilization: {
                      type: 'boolean'
                    },
                    PartialResultsStability: {},
                    ContentIdentificationType: {},
                    ContentRedactionType: {},
                    PiiEntityTypes: {},
                    LanguageModelName: {},
                    FilterPartialResults: {
                      type: 'boolean'
                    },
                    IdentifyLanguage: {
                      type: 'boolean'
                    },
                    LanguageOptions: {},
                    PreferredLanguage: {},
                    VocabularyNames: {},
                    VocabularyFilterNames: {}
                  }
                },
                KinesisDataStreamSinkConfiguration: {
                  type: 'structure',
                  members: {
                    InsightsTarget: {
                      shape: 'S3'
                    }
                  }
                },
                S3RecordingSinkConfiguration: {
                  type: 'structure',
                  members: {
                    Destination: {
                      shape: 'S3'
                    },
                    RecordingFileFormat: {}
                  }
                },
                VoiceAnalyticsProcessorConfiguration: {
                  type: 'structure',
                  members: {
                    SpeakerSearchStatus: {},
                    VoiceToneAnalysisStatus: {}
                  }
                },
                LambdaFunctionSinkConfiguration: {
                  type: 'structure',
                  members: {
                    InsightsTarget: {
                      shape: 'S3'
                    }
                  }
                },
                SqsQueueSinkConfiguration: {
                  type: 'structure',
                  members: {
                    InsightsTarget: {
                      shape: 'S3'
                    }
                  }
                },
                SnsTopicSinkConfiguration: {
                  type: 'structure',
                  members: {
                    InsightsTarget: {
                      shape: 'S3'
                    }
                  }
                },
                VoiceEnhancementSinkConfiguration: {
                  type: 'structure',
                  members: {
                    Disabled: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S45: {
            type: 'structure',
            members: {
              MediaInsightsPipelineConfigurationName: {},
              MediaInsightsPipelineConfigurationArn: {
                shape: 'S3'
              },
              ResourceAccessRoleArn: {
                shape: 'S3'
              },
              RealTimeAlertConfiguration: {
                shape: 'S30'
              },
              Elements: {
                shape: 'S3d'
              },
              MediaInsightsPipelineConfigurationId: {},
              CreatedTimestamp: {
                shape: 'S1f'
              },
              UpdatedTimestamp: {
                shape: 'S1f'
              }
            }
          },
          S47: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SourceType', 'ChimeSdkMeetingLiveConnectorConfiguration'],
              members: {
                SourceType: {},
                ChimeSdkMeetingLiveConnectorConfiguration: {
                  type: 'structure',
                  required: ['Arn', 'MuxType'],
                  members: {
                    Arn: {
                      shape: 'S3'
                    },
                    MuxType: {},
                    CompositedVideo: {
                      shape: 'Sl'
                    },
                    SourceConfiguration: {
                      shape: 'S7'
                    }
                  }
                }
              }
            }
          },
          S4c: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SinkType', 'RTMPConfiguration'],
              members: {
                SinkType: {},
                RTMPConfiguration: {
                  type: 'structure',
                  required: ['Url'],
                  members: {
                    Url: {
                      type: 'string',
                      sensitive: true
                    },
                    AudioChannels: {},
                    AudioSampleRate: {}
                  }
                }
              }
            }
          },
          S4k: {
            type: 'structure',
            members: {
              Sources: {
                shape: 'S47'
              },
              Sinks: {
                shape: 'S4c'
              },
              MediaPipelineId: {},
              MediaPipelineArn: {},
              Status: {},
              CreatedTimestamp: {
                shape: 'S1f'
              },
              UpdatedTimestamp: {
                shape: 'S1f'
              }
            }
          },
          S4m: {
            type: 'structure',
            required: ['Region'],
            members: {
              Region: {},
              DataRetentionInHours: {
                type: 'integer'
              }
            }
          },
          S4r: {
            type: 'structure',
            members: {
              PoolArn: {
                shape: 'S3'
              },
              PoolName: {},
              PoolId: {},
              PoolStatus: {},
              PoolSize: {
                type: 'integer'
              },
              StreamConfiguration: {
                shape: 'S4m'
              },
              CreatedTimestamp: {
                shape: 'S1f'
              },
              UpdatedTimestamp: {
                shape: 'S1f'
              }
            }
          },
          S4w: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SourceType', 'SourceArn'],
              members: {
                SourceType: {},
                SourceArn: {
                  shape: 'S3'
                }
              }
            }
          },
          S4y: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SinkArn', 'SinkType', 'ReservedStreamCapacity', 'MediaStreamType'],
              members: {
                SinkArn: {
                  shape: 'S3'
                },
                SinkType: {},
                ReservedStreamCapacity: {
                  type: 'integer'
                },
                MediaStreamType: {}
              }
            }
          },
          S54: {
            type: 'structure',
            members: {
              MediaPipelineId: {},
              MediaPipelineArn: {},
              CreatedTimestamp: {
                shape: 'S1f'
              },
              UpdatedTimestamp: {
                shape: 'S1f'
              },
              Status: {},
              Sources: {
                shape: 'S4w'
              },
              Sinks: {
                shape: 'S4y'
              }
            }
          },
          S5k: {
            type: 'structure',
            members: {
              SpeakerSearchTaskId: {},
              SpeakerSearchTaskStatus: {},
              CreatedTimestamp: {
                shape: 'S1f'
              },
              UpdatedTimestamp: {
                shape: 'S1f'
              }
            }
          },
          S5o: {
            type: 'structure',
            members: {
              VoiceToneAnalysisTaskId: {},
              VoiceToneAnalysisTaskStatus: {},
              CreatedTimestamp: {
                shape: 'S1f'
              },
              UpdatedTimestamp: {
                shape: 'S1f'
              }
            }
          },
          S69: {
            type: 'structure',
            required: ['StreamArn', 'ChannelId'],
            members: {
              StreamArn: {},
              ChannelId: {
                type: 'integer'
              },
              FragmentNumber: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9c8d861d57a80233cc8b773a69e525bf46157b09.js.map