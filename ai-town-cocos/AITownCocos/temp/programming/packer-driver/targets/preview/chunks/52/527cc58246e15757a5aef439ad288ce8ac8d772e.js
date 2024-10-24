System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-04-23',
          endpointPrefix: 'api.mediatailor',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'MediaTailor',
          serviceFullName: 'AWS MediaTailor',
          serviceId: 'MediaTailor',
          signatureVersion: 'v4',
          signingName: 'mediatailor',
          uid: 'mediatailor-2018-04-23'
        },
        operations: {
          ConfigureLogsForChannel: {
            http: {
              method: 'PUT',
              requestUri: '/configureLogs/channel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName', 'LogTypes'],
              members: {
                ChannelName: {},
                LogTypes: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelName: {},
                LogTypes: {
                  shape: 'S3'
                }
              }
            }
          },
          ConfigureLogsForPlaybackConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/configureLogs/playbackConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PercentEnabled', 'PlaybackConfigurationName'],
              members: {
                PercentEnabled: {
                  type: 'integer'
                },
                PlaybackConfigurationName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['PercentEnabled'],
              members: {
                PercentEnabled: {
                  type: 'integer'
                },
                PlaybackConfigurationName: {}
              }
            },
            idempotent: true
          },
          CreateChannel: {
            http: {
              requestUri: '/channel/{ChannelName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName', 'Outputs', 'PlaybackMode'],
              members: {
                Audiences: {
                  shape: 'Sa'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                FillerSlate: {
                  shape: 'Sc'
                },
                Outputs: {
                  shape: 'Sd'
                },
                PlaybackMode: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                Tier: {},
                TimeShiftConfiguration: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Audiences: {
                  shape: 'Sa'
                },
                ChannelName: {},
                ChannelState: {},
                CreationTime: {
                  shape: 'Sp'
                },
                FillerSlate: {
                  shape: 'Sc'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                Outputs: {
                  shape: 'Sq'
                },
                PlaybackMode: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                Tier: {},
                TimeShiftConfiguration: {
                  shape: 'Sm'
                }
              }
            },
            idempotent: true
          },
          CreateLiveSource: {
            http: {
              requestUri: '/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['HttpPackageConfigurations', 'LiveSourceName', 'SourceLocationName'],
              members: {
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                LiveSourceName: {
                  location: 'uri',
                  locationName: 'LiveSourceName'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                },
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                LiveSourceName: {},
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            },
            idempotent: true
          },
          CreatePrefetchSchedule: {
            http: {
              requestUri: '/prefetchSchedule/{PlaybackConfigurationName}/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Consumption', 'Name', 'PlaybackConfigurationName', 'Retrieval'],
              members: {
                Consumption: {
                  shape: 'Sy'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                PlaybackConfigurationName: {
                  location: 'uri',
                  locationName: 'PlaybackConfigurationName'
                },
                Retrieval: {
                  shape: 'S12'
                },
                StreamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Consumption: {
                  shape: 'Sy'
                },
                Name: {},
                PlaybackConfigurationName: {},
                Retrieval: {
                  shape: 'S12'
                },
                StreamId: {}
              }
            },
            idempotent: true
          },
          CreateProgram: {
            http: {
              requestUri: '/channel/{ChannelName}/program/{ProgramName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName', 'ProgramName', 'ScheduleConfiguration', 'SourceLocationName'],
              members: {
                AdBreaks: {
                  shape: 'S15'
                },
                AudienceMedia: {
                  shape: 'S1g'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                LiveSourceName: {},
                ProgramName: {
                  location: 'uri',
                  locationName: 'ProgramName'
                },
                ScheduleConfiguration: {
                  type: 'structure',
                  required: ['Transition'],
                  members: {
                    ClipRange: {
                      shape: 'S1k'
                    },
                    Transition: {
                      type: 'structure',
                      required: ['RelativePosition', 'Type'],
                      members: {
                        DurationMillis: {
                          type: 'long'
                        },
                        RelativePosition: {},
                        RelativeProgram: {},
                        ScheduledStartTimeMillis: {
                          type: 'long'
                        },
                        Type: {}
                      }
                    }
                  }
                },
                SourceLocationName: {},
                VodSourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AdBreaks: {
                  shape: 'S15'
                },
                Arn: {},
                AudienceMedia: {
                  shape: 'S1g'
                },
                ChannelName: {},
                ClipRange: {
                  shape: 'S1k'
                },
                CreationTime: {
                  shape: 'Sp'
                },
                DurationMillis: {
                  type: 'long'
                },
                LiveSourceName: {},
                ProgramName: {},
                ScheduledStartTime: {
                  shape: 'Sp'
                },
                SourceLocationName: {},
                VodSourceName: {}
              }
            },
            idempotent: true
          },
          CreateSourceLocation: {
            http: {
              requestUri: '/sourceLocation/{SourceLocationName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['HttpConfiguration', 'SourceLocationName'],
              members: {
                AccessConfiguration: {
                  shape: 'S1q'
                },
                DefaultSegmentDeliveryConfiguration: {
                  shape: 'S1t'
                },
                HttpConfiguration: {
                  shape: 'S1u'
                },
                SegmentDeliveryConfigurations: {
                  shape: 'S1v'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                },
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessConfiguration: {
                  shape: 'S1q'
                },
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                DefaultSegmentDeliveryConfiguration: {
                  shape: 'S1t'
                },
                HttpConfiguration: {
                  shape: 'S1u'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                SegmentDeliveryConfigurations: {
                  shape: 'S1v'
                },
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            },
            idempotent: true
          },
          CreateVodSource: {
            http: {
              requestUri: '/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['HttpPackageConfigurations', 'SourceLocationName', 'VodSourceName'],
              members: {
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                },
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                VodSourceName: {
                  location: 'uri',
                  locationName: 'VodSourceName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                VodSourceName: {}
              }
            },
            idempotent: true
          },
          DeleteChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/channel/{ChannelName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteChannelPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/channel/{ChannelName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteLiveSource: {
            http: {
              method: 'DELETE',
              requestUri: '/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['LiveSourceName', 'SourceLocationName'],
              members: {
                LiveSourceName: {
                  location: 'uri',
                  locationName: 'LiveSourceName'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeletePlaybackConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/playbackConfiguration/{Name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeletePrefetchSchedule: {
            http: {
              method: 'DELETE',
              requestUri: '/prefetchSchedule/{PlaybackConfigurationName}/{Name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Name', 'PlaybackConfigurationName'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                PlaybackConfigurationName: {
                  location: 'uri',
                  locationName: 'PlaybackConfigurationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteProgram: {
            http: {
              method: 'DELETE',
              requestUri: '/channel/{ChannelName}/program/{ProgramName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName', 'ProgramName'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                ProgramName: {
                  location: 'uri',
                  locationName: 'ProgramName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSourceLocation: {
            http: {
              method: 'DELETE',
              requestUri: '/sourceLocation/{SourceLocationName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SourceLocationName'],
              members: {
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteVodSource: {
            http: {
              method: 'DELETE',
              requestUri: '/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SourceLocationName', 'VodSourceName'],
              members: {
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                },
                VodSourceName: {
                  location: 'uri',
                  locationName: 'VodSourceName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeChannel: {
            http: {
              method: 'GET',
              requestUri: '/channel/{ChannelName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['LogConfiguration'],
              members: {
                Arn: {},
                Audiences: {
                  shape: 'Sa'
                },
                ChannelName: {},
                ChannelState: {},
                CreationTime: {
                  shape: 'Sp'
                },
                FillerSlate: {
                  shape: 'Sc'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                LogConfiguration: {
                  shape: 'S2i'
                },
                Outputs: {
                  shape: 'Sq'
                },
                PlaybackMode: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                Tier: {},
                TimeShiftConfiguration: {
                  shape: 'Sm'
                }
              }
            }
          },
          DescribeLiveSource: {
            http: {
              method: 'GET',
              requestUri: '/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['LiveSourceName', 'SourceLocationName'],
              members: {
                LiveSourceName: {
                  location: 'uri',
                  locationName: 'LiveSourceName'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                LiveSourceName: {},
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            }
          },
          DescribeProgram: {
            http: {
              method: 'GET',
              requestUri: '/channel/{ChannelName}/program/{ProgramName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName', 'ProgramName'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                ProgramName: {
                  location: 'uri',
                  locationName: 'ProgramName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AdBreaks: {
                  shape: 'S15'
                },
                Arn: {},
                AudienceMedia: {
                  shape: 'S1g'
                },
                ChannelName: {},
                ClipRange: {
                  shape: 'S1k'
                },
                CreationTime: {
                  shape: 'Sp'
                },
                DurationMillis: {
                  type: 'long'
                },
                LiveSourceName: {},
                ProgramName: {},
                ScheduledStartTime: {
                  shape: 'Sp'
                },
                SourceLocationName: {},
                VodSourceName: {}
              }
            }
          },
          DescribeSourceLocation: {
            http: {
              method: 'GET',
              requestUri: '/sourceLocation/{SourceLocationName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SourceLocationName'],
              members: {
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessConfiguration: {
                  shape: 'S1q'
                },
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                DefaultSegmentDeliveryConfiguration: {
                  shape: 'S1t'
                },
                HttpConfiguration: {
                  shape: 'S1u'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                SegmentDeliveryConfigurations: {
                  shape: 'S1v'
                },
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            }
          },
          DescribeVodSource: {
            http: {
              method: 'GET',
              requestUri: '/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SourceLocationName', 'VodSourceName'],
              members: {
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                },
                VodSourceName: {
                  location: 'uri',
                  locationName: 'VodSourceName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AdBreakOpportunities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['OffsetMillis'],
                    members: {
                      OffsetMillis: {
                        type: 'long'
                      }
                    }
                  }
                },
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                VodSourceName: {}
              }
            }
          },
          GetChannelPolicy: {
            http: {
              method: 'GET',
              requestUri: '/channel/{ChannelName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            }
          },
          GetChannelSchedule: {
            http: {
              method: 'GET',
              requestUri: '/channel/{ChannelName}/schedule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName'],
              members: {
                Audience: {
                  location: 'querystring',
                  locationName: 'audience'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                DurationMinutes: {
                  location: 'querystring',
                  locationName: 'durationMinutes'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'ChannelName', 'ProgramName', 'SourceLocationName'],
                    members: {
                      ApproximateDurationSeconds: {
                        type: 'long'
                      },
                      ApproximateStartTime: {
                        shape: 'Sp'
                      },
                      Arn: {},
                      Audiences: {
                        shape: 'Sa'
                      },
                      ChannelName: {},
                      LiveSourceName: {},
                      ProgramName: {},
                      ScheduleAdBreaks: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ApproximateDurationSeconds: {
                              type: 'long'
                            },
                            ApproximateStartTime: {
                              shape: 'Sp'
                            },
                            SourceLocationName: {},
                            VodSourceName: {}
                          }
                        }
                      },
                      ScheduleEntryType: {},
                      SourceLocationName: {},
                      VodSourceName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetPlaybackConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/playbackConfiguration/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AdDecisionServerUrl: {},
                AvailSuppression: {
                  shape: 'S36'
                },
                Bumper: {
                  shape: 'S39'
                },
                CdnConfiguration: {
                  shape: 'S3a'
                },
                ConfigurationAliases: {
                  shape: 'S3b'
                },
                DashConfiguration: {
                  shape: 'S3c'
                },
                HlsConfiguration: {
                  shape: 'S3e'
                },
                InsertionMode: {},
                LivePreRollConfiguration: {
                  shape: 'S3g'
                },
                LogConfiguration: {
                  shape: 'S3h'
                },
                ManifestProcessingRules: {
                  shape: 'S3i'
                },
                Name: {},
                PersonalizationThresholdSeconds: {
                  type: 'integer'
                },
                PlaybackConfigurationArn: {},
                PlaybackEndpointPrefix: {},
                SessionInitializationEndpointPrefix: {},
                SlateAdUrl: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                TranscodeProfileName: {},
                VideoContentSourceUrl: {}
              }
            }
          },
          GetPrefetchSchedule: {
            http: {
              method: 'GET',
              requestUri: '/prefetchSchedule/{PlaybackConfigurationName}/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'PlaybackConfigurationName'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                PlaybackConfigurationName: {
                  location: 'uri',
                  locationName: 'PlaybackConfigurationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Consumption: {
                  shape: 'Sy'
                },
                Name: {},
                PlaybackConfigurationName: {},
                Retrieval: {
                  shape: 'S12'
                },
                StreamId: {}
              }
            }
          },
          ListAlerts: {
            http: {
              method: 'GET',
              requestUri: '/alerts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AlertCode', 'AlertMessage', 'LastModifiedTime', 'RelatedResourceArns', 'ResourceArn'],
                    members: {
                      AlertCode: {},
                      AlertMessage: {},
                      Category: {},
                      LastModifiedTime: {
                        shape: 'Sp'
                      },
                      RelatedResourceArns: {
                        shape: 'S3t'
                      },
                      ResourceArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListChannels: {
            http: {
              method: 'GET',
              requestUri: '/channels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'ChannelName', 'ChannelState', 'LogConfiguration', 'Outputs', 'PlaybackMode', 'Tier'],
                    members: {
                      Arn: {},
                      Audiences: {
                        shape: 'Sa'
                      },
                      ChannelName: {},
                      ChannelState: {},
                      CreationTime: {
                        shape: 'Sp'
                      },
                      FillerSlate: {
                        shape: 'Sc'
                      },
                      LastModifiedTime: {
                        shape: 'Sp'
                      },
                      LogConfiguration: {
                        shape: 'S2i'
                      },
                      Outputs: {
                        shape: 'Sq'
                      },
                      PlaybackMode: {},
                      Tags: {
                        shape: 'Sk',
                        locationName: 'tags'
                      },
                      Tier: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLiveSources: {
            http: {
              method: 'GET',
              requestUri: '/sourceLocation/{SourceLocationName}/liveSources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SourceLocationName'],
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'HttpPackageConfigurations', 'LiveSourceName', 'SourceLocationName'],
                    members: {
                      Arn: {},
                      CreationTime: {
                        shape: 'Sp'
                      },
                      HttpPackageConfigurations: {
                        shape: 'St'
                      },
                      LastModifiedTime: {
                        shape: 'Sp'
                      },
                      LiveSourceName: {},
                      SourceLocationName: {},
                      Tags: {
                        shape: 'Sk',
                        locationName: 'tags'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPlaybackConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/playbackConfigurations',
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AdDecisionServerUrl: {},
                      AvailSuppression: {
                        shape: 'S36'
                      },
                      Bumper: {
                        shape: 'S39'
                      },
                      CdnConfiguration: {
                        shape: 'S3a'
                      },
                      ConfigurationAliases: {
                        shape: 'S3b'
                      },
                      DashConfiguration: {
                        shape: 'S3c'
                      },
                      HlsConfiguration: {
                        shape: 'S3e'
                      },
                      InsertionMode: {},
                      LivePreRollConfiguration: {
                        shape: 'S3g'
                      },
                      LogConfiguration: {
                        shape: 'S3h'
                      },
                      ManifestProcessingRules: {
                        shape: 'S3i'
                      },
                      Name: {},
                      PersonalizationThresholdSeconds: {
                        type: 'integer'
                      },
                      PlaybackConfigurationArn: {},
                      PlaybackEndpointPrefix: {},
                      SessionInitializationEndpointPrefix: {},
                      SlateAdUrl: {},
                      Tags: {
                        shape: 'Sk',
                        locationName: 'tags'
                      },
                      TranscodeProfileName: {},
                      VideoContentSourceUrl: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPrefetchSchedules: {
            http: {
              requestUri: '/prefetchSchedule/{PlaybackConfigurationName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PlaybackConfigurationName'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PlaybackConfigurationName: {
                  location: 'uri',
                  locationName: 'PlaybackConfigurationName'
                },
                StreamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'Consumption', 'Name', 'PlaybackConfigurationName', 'Retrieval'],
                    members: {
                      Arn: {},
                      Consumption: {
                        shape: 'Sy'
                      },
                      Name: {},
                      PlaybackConfigurationName: {},
                      Retrieval: {
                        shape: 'S12'
                      },
                      StreamId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSourceLocations: {
            http: {
              method: 'GET',
              requestUri: '/sourceLocations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'HttpConfiguration', 'SourceLocationName'],
                    members: {
                      AccessConfiguration: {
                        shape: 'S1q'
                      },
                      Arn: {},
                      CreationTime: {
                        shape: 'Sp'
                      },
                      DefaultSegmentDeliveryConfiguration: {
                        shape: 'S1t'
                      },
                      HttpConfiguration: {
                        shape: 'S1u'
                      },
                      LastModifiedTime: {
                        shape: 'Sp'
                      },
                      SegmentDeliveryConfigurations: {
                        shape: 'S1v'
                      },
                      SourceLocationName: {},
                      Tags: {
                        shape: 'Sk',
                        locationName: 'tags'
                      }
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
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            }
          },
          ListVodSources: {
            http: {
              method: 'GET',
              requestUri: '/sourceLocation/{SourceLocationName}/vodSources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SourceLocationName'],
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'HttpPackageConfigurations', 'SourceLocationName', 'VodSourceName'],
                    members: {
                      Arn: {},
                      CreationTime: {
                        shape: 'Sp'
                      },
                      HttpPackageConfigurations: {
                        shape: 'St'
                      },
                      LastModifiedTime: {
                        shape: 'Sp'
                      },
                      SourceLocationName: {},
                      Tags: {
                        shape: 'Sk',
                        locationName: 'tags'
                      },
                      VodSourceName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PutChannelPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/channel/{ChannelName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName', 'Policy'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          PutPlaybackConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/playbackConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                AdDecisionServerUrl: {},
                AvailSuppression: {
                  shape: 'S36'
                },
                Bumper: {
                  shape: 'S39'
                },
                CdnConfiguration: {
                  shape: 'S3a'
                },
                ConfigurationAliases: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'Sk'
                  }
                },
                DashConfiguration: {
                  type: 'structure',
                  members: {
                    MpdLocation: {},
                    OriginManifestType: {}
                  }
                },
                InsertionMode: {},
                LivePreRollConfiguration: {
                  shape: 'S3g'
                },
                ManifestProcessingRules: {
                  shape: 'S3i'
                },
                Name: {},
                PersonalizationThresholdSeconds: {
                  type: 'integer'
                },
                SlateAdUrl: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                TranscodeProfileName: {},
                VideoContentSourceUrl: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AdDecisionServerUrl: {},
                AvailSuppression: {
                  shape: 'S36'
                },
                Bumper: {
                  shape: 'S39'
                },
                CdnConfiguration: {
                  shape: 'S3a'
                },
                ConfigurationAliases: {
                  shape: 'S3b'
                },
                DashConfiguration: {
                  shape: 'S3c'
                },
                HlsConfiguration: {
                  shape: 'S3e'
                },
                InsertionMode: {},
                LivePreRollConfiguration: {
                  shape: 'S3g'
                },
                LogConfiguration: {
                  shape: 'S3h'
                },
                ManifestProcessingRules: {
                  shape: 'S3i'
                },
                Name: {},
                PersonalizationThresholdSeconds: {
                  type: 'integer'
                },
                PlaybackConfigurationArn: {},
                PlaybackEndpointPrefix: {},
                SessionInitializationEndpointPrefix: {},
                SlateAdUrl: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                TranscodeProfileName: {},
                VideoContentSourceUrl: {}
              }
            },
            idempotent: true
          },
          StartChannel: {
            http: {
              method: 'PUT',
              requestUri: '/channel/{ChannelName}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          StopChannel: {
            http: {
              method: 'PUT',
              requestUri: '/channel/{ChannelName}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName'],
              members: {
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
                  shape: 'S3t',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              }
            },
            idempotent: true
          },
          UpdateChannel: {
            http: {
              method: 'PUT',
              requestUri: '/channel/{ChannelName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName', 'Outputs'],
              members: {
                Audiences: {
                  shape: 'Sa'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                FillerSlate: {
                  shape: 'Sc'
                },
                Outputs: {
                  shape: 'Sd'
                },
                TimeShiftConfiguration: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Audiences: {
                  shape: 'Sa'
                },
                ChannelName: {},
                ChannelState: {},
                CreationTime: {
                  shape: 'Sp'
                },
                FillerSlate: {
                  shape: 'Sc'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                Outputs: {
                  shape: 'Sq'
                },
                PlaybackMode: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                Tier: {},
                TimeShiftConfiguration: {
                  shape: 'Sm'
                }
              }
            },
            idempotent: true
          },
          UpdateLiveSource: {
            http: {
              method: 'PUT',
              requestUri: '/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['HttpPackageConfigurations', 'LiveSourceName', 'SourceLocationName'],
              members: {
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                LiveSourceName: {
                  location: 'uri',
                  locationName: 'LiveSourceName'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                LiveSourceName: {},
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            },
            idempotent: true
          },
          UpdateProgram: {
            http: {
              method: 'PUT',
              requestUri: '/channel/{ChannelName}/program/{ProgramName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelName', 'ProgramName', 'ScheduleConfiguration'],
              members: {
                AdBreaks: {
                  shape: 'S15'
                },
                AudienceMedia: {
                  shape: 'S1g'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                ProgramName: {
                  location: 'uri',
                  locationName: 'ProgramName'
                },
                ScheduleConfiguration: {
                  type: 'structure',
                  members: {
                    ClipRange: {
                      shape: 'S1k'
                    },
                    Transition: {
                      type: 'structure',
                      members: {
                        DurationMillis: {
                          type: 'long'
                        },
                        ScheduledStartTimeMillis: {
                          type: 'long'
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
                AdBreaks: {
                  shape: 'S15'
                },
                Arn: {},
                AudienceMedia: {
                  shape: 'S1g'
                },
                ChannelName: {},
                ClipRange: {
                  shape: 'S1k'
                },
                CreationTime: {
                  shape: 'Sp'
                },
                DurationMillis: {
                  type: 'long'
                },
                LiveSourceName: {},
                ProgramName: {},
                ScheduledStartTime: {
                  shape: 'Sp'
                },
                SourceLocationName: {},
                VodSourceName: {}
              }
            },
            idempotent: true
          },
          UpdateSourceLocation: {
            http: {
              method: 'PUT',
              requestUri: '/sourceLocation/{SourceLocationName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['HttpConfiguration', 'SourceLocationName'],
              members: {
                AccessConfiguration: {
                  shape: 'S1q'
                },
                DefaultSegmentDeliveryConfiguration: {
                  shape: 'S1t'
                },
                HttpConfiguration: {
                  shape: 'S1u'
                },
                SegmentDeliveryConfigurations: {
                  shape: 'S1v'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessConfiguration: {
                  shape: 'S1q'
                },
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                DefaultSegmentDeliveryConfiguration: {
                  shape: 'S1t'
                },
                HttpConfiguration: {
                  shape: 'S1u'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                SegmentDeliveryConfigurations: {
                  shape: 'S1v'
                },
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                }
              }
            },
            idempotent: true
          },
          UpdateVodSource: {
            http: {
              method: 'PUT',
              requestUri: '/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['HttpPackageConfigurations', 'SourceLocationName', 'VodSourceName'],
              members: {
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                SourceLocationName: {
                  location: 'uri',
                  locationName: 'SourceLocationName'
                },
                VodSourceName: {
                  location: 'uri',
                  locationName: 'VodSourceName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sp'
                },
                HttpPackageConfigurations: {
                  shape: 'St'
                },
                LastModifiedTime: {
                  shape: 'Sp'
                },
                SourceLocationName: {},
                Tags: {
                  shape: 'Sk',
                  locationName: 'tags'
                },
                VodSourceName: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          Sa: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'structure',
            members: {
              SourceLocationName: {},
              VodSourceName: {}
            }
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ManifestName', 'SourceGroup'],
              members: {
                DashPlaylistSettings: {
                  shape: 'Sf'
                },
                HlsPlaylistSettings: {
                  shape: 'Sg'
                },
                ManifestName: {},
                SourceGroup: {}
              }
            }
          },
          Sf: {
            type: 'structure',
            members: {
              ManifestWindowSeconds: {
                type: 'integer'
              },
              MinBufferTimeSeconds: {
                type: 'integer'
              },
              MinUpdatePeriodSeconds: {
                type: 'integer'
              },
              SuggestedPresentationDelaySeconds: {
                type: 'integer'
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              AdMarkupType: {
                type: 'list',
                member: {}
              },
              ManifestWindowSeconds: {
                type: 'integer'
              }
            }
          },
          Sk: {
            type: 'map',
            key: {},
            value: {}
          },
          Sm: {
            type: 'structure',
            required: ['MaxTimeDelaySeconds'],
            members: {
              MaxTimeDelaySeconds: {
                type: 'integer'
              }
            }
          },
          Sp: {
            type: 'timestamp',
            timestampFormat: 'unixTimestamp'
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ManifestName', 'PlaybackUrl', 'SourceGroup'],
              members: {
                DashPlaylistSettings: {
                  shape: 'Sf'
                },
                HlsPlaylistSettings: {
                  shape: 'Sg'
                },
                ManifestName: {},
                PlaybackUrl: {},
                SourceGroup: {}
              }
            }
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Path', 'SourceGroup', 'Type'],
              members: {
                Path: {},
                SourceGroup: {},
                Type: {}
              }
            }
          },
          Sy: {
            type: 'structure',
            required: ['EndTime'],
            members: {
              AvailMatchingCriteria: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DynamicVariable', 'Operator'],
                  members: {
                    DynamicVariable: {},
                    Operator: {}
                  }
                }
              },
              EndTime: {
                shape: 'Sp'
              },
              StartTime: {
                shape: 'Sp'
              }
            }
          },
          S12: {
            type: 'structure',
            required: ['EndTime'],
            members: {
              DynamicVariables: {
                shape: 'Sk'
              },
              EndTime: {
                shape: 'Sp'
              },
              StartTime: {
                shape: 'Sp'
              }
            }
          },
          S15: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['OffsetMillis'],
              members: {
                AdBreakMetadata: {
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
                MessageType: {},
                OffsetMillis: {
                  type: 'long'
                },
                Slate: {
                  shape: 'Sc'
                },
                SpliceInsertMessage: {
                  type: 'structure',
                  members: {
                    AvailNum: {
                      type: 'integer'
                    },
                    AvailsExpected: {
                      type: 'integer'
                    },
                    SpliceEventId: {
                      type: 'integer'
                    },
                    UniqueProgramId: {
                      type: 'integer'
                    }
                  }
                },
                TimeSignalMessage: {
                  type: 'structure',
                  members: {
                    SegmentationDescriptors: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          SegmentNum: {
                            type: 'integer'
                          },
                          SegmentationEventId: {
                            type: 'integer'
                          },
                          SegmentationTypeId: {
                            type: 'integer'
                          },
                          SegmentationUpid: {},
                          SegmentationUpidType: {
                            type: 'integer'
                          },
                          SegmentsExpected: {
                            type: 'integer'
                          },
                          SubSegmentNum: {
                            type: 'integer'
                          },
                          SubSegmentsExpected: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S1g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AlternateMedia: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AdBreaks: {
                        shape: 'S15'
                      },
                      ClipRange: {
                        shape: 'S1k'
                      },
                      DurationMillis: {
                        type: 'long'
                      },
                      LiveSourceName: {},
                      ScheduledStartTimeMillis: {
                        type: 'long'
                      },
                      SourceLocationName: {},
                      VodSourceName: {}
                    }
                  }
                },
                Audience: {}
              }
            }
          },
          S1k: {
            type: 'structure',
            members: {
              EndOffsetMillis: {
                type: 'long'
              },
              StartOffsetMillis: {
                type: 'long'
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              AccessType: {},
              SecretsManagerAccessTokenConfiguration: {
                type: 'structure',
                members: {
                  HeaderName: {},
                  SecretArn: {},
                  SecretStringKey: {}
                }
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              BaseUrl: {}
            }
          },
          S1u: {
            type: 'structure',
            required: ['BaseUrl'],
            members: {
              BaseUrl: {}
            }
          },
          S1v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                BaseUrl: {},
                Name: {}
              }
            }
          },
          S2i: {
            type: 'structure',
            members: {
              LogTypes: {
                shape: 'S3'
              }
            }
          },
          S36: {
            type: 'structure',
            members: {
              FillPolicy: {},
              Mode: {},
              Value: {}
            }
          },
          S39: {
            type: 'structure',
            members: {
              EndUrl: {},
              StartUrl: {}
            }
          },
          S3a: {
            type: 'structure',
            members: {
              AdSegmentUrlPrefix: {},
              ContentSegmentUrlPrefix: {}
            }
          },
          S3b: {
            type: 'map',
            key: {},
            value: {
              shape: 'Sk'
            }
          },
          S3c: {
            type: 'structure',
            members: {
              ManifestEndpointPrefix: {},
              MpdLocation: {},
              OriginManifestType: {}
            }
          },
          S3e: {
            type: 'structure',
            members: {
              ManifestEndpointPrefix: {}
            }
          },
          S3g: {
            type: 'structure',
            members: {
              AdDecisionServerUrl: {},
              MaxDurationSeconds: {
                type: 'integer'
              }
            }
          },
          S3h: {
            type: 'structure',
            required: ['PercentEnabled'],
            members: {
              PercentEnabled: {
                type: 'integer'
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              AdMarkerPassthrough: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S3t: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=527cc58246e15757a5aef439ad288ce8ac8d772e.js.map