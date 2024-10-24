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
          serviceAbbreviation: 'Kinesis Video',
          serviceFullName: 'Amazon Kinesis Video Streams',
          serviceId: 'Kinesis Video',
          signatureVersion: 'v4',
          uid: 'kinesisvideo-2017-09-30'
        },
        operations: {
          CreateSignalingChannel: {
            http: {
              requestUri: '/createSignalingChannel'
            },
            input: {
              type: 'structure',
              required: ['ChannelName'],
              members: {
                ChannelName: {},
                ChannelType: {},
                SingleMasterConfiguration: {
                  shape: 'S4'
                },
                Tags: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelARN: {}
              }
            }
          },
          CreateStream: {
            http: {
              requestUri: '/createStream'
            },
            input: {
              type: 'structure',
              required: ['StreamName'],
              members: {
                DeviceName: {},
                StreamName: {},
                MediaType: {},
                KmsKeyId: {},
                DataRetentionInHours: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Si'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamARN: {}
              }
            }
          },
          DeleteEdgeConfiguration: {
            http: {
              requestUri: '/deleteEdgeConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSignalingChannel: {
            http: {
              requestUri: '/deleteSignalingChannel'
            },
            input: {
              type: 'structure',
              required: ['ChannelARN'],
              members: {
                ChannelARN: {},
                CurrentVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteStream: {
            http: {
              requestUri: '/deleteStream'
            },
            input: {
              type: 'structure',
              required: ['StreamARN'],
              members: {
                StreamARN: {},
                CurrentVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeEdgeConfiguration: {
            http: {
              requestUri: '/describeEdgeConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                SyncStatus: {},
                FailedStatusDetails: {},
                EdgeConfig: {
                  shape: 'Sw'
                },
                EdgeAgentStatus: {
                  type: 'structure',
                  members: {
                    LastRecorderStatus: {
                      type: 'structure',
                      members: {
                        JobStatusDetails: {},
                        LastCollectedTime: {
                          type: 'timestamp'
                        },
                        LastUpdatedTime: {
                          type: 'timestamp'
                        },
                        RecorderStatus: {}
                      }
                    },
                    LastUploaderStatus: {
                      type: 'structure',
                      members: {
                        JobStatusDetails: {},
                        LastCollectedTime: {
                          type: 'timestamp'
                        },
                        LastUpdatedTime: {
                          type: 'timestamp'
                        },
                        UploaderStatus: {}
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeImageGenerationConfiguration: {
            http: {
              requestUri: '/describeImageGenerationConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageGenerationConfiguration: {
                  shape: 'S1k'
                }
              }
            }
          },
          DescribeMappedResourceConfiguration: {
            http: {
              requestUri: '/describeMappedResourceConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MappedResourceConfigurationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      ARN: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMediaStorageConfiguration: {
            http: {
              requestUri: '/describeMediaStorageConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                ChannelName: {},
                ChannelARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaStorageConfiguration: {
                  shape: 'S26'
                }
              }
            }
          },
          DescribeNotificationConfiguration: {
            http: {
              requestUri: '/describeNotificationConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotificationConfiguration: {
                  shape: 'S2a'
                }
              }
            }
          },
          DescribeSignalingChannel: {
            http: {
              requestUri: '/describeSignalingChannel'
            },
            input: {
              type: 'structure',
              members: {
                ChannelName: {},
                ChannelARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelInfo: {
                  shape: 'S2e'
                }
              }
            }
          },
          DescribeStream: {
            http: {
              requestUri: '/describeStream'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamInfo: {
                  shape: 'S2i'
                }
              }
            }
          },
          GetDataEndpoint: {
            http: {
              requestUri: '/getDataEndpoint'
            },
            input: {
              type: 'structure',
              required: ['APIName'],
              members: {
                StreamName: {},
                StreamARN: {},
                APIName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataEndpoint: {}
              }
            }
          },
          GetSignalingChannelEndpoint: {
            http: {
              requestUri: '/getSignalingChannelEndpoint'
            },
            input: {
              type: 'structure',
              required: ['ChannelARN'],
              members: {
                ChannelARN: {},
                SingleMasterChannelEndpointConfiguration: {
                  type: 'structure',
                  members: {
                    Protocols: {
                      type: 'list',
                      member: {}
                    },
                    Role: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceEndpointList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Protocol: {},
                      ResourceEndpoint: {}
                    }
                  }
                }
              }
            }
          },
          ListEdgeAgentConfigurations: {
            http: {
              requestUri: '/listEdgeAgentConfigurations'
            },
            input: {
              type: 'structure',
              required: ['HubDeviceArn'],
              members: {
                HubDeviceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EdgeConfigs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StreamName: {},
                      StreamARN: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      SyncStatus: {},
                      FailedStatusDetails: {},
                      EdgeConfig: {
                        shape: 'Sw'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSignalingChannels: {
            http: {
              requestUri: '/listSignalingChannels'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ChannelNameCondition: {
                  type: 'structure',
                  members: {
                    ComparisonOperator: {},
                    ComparisonValue: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelInfoList: {
                  type: 'list',
                  member: {
                    shape: 'S2e'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStreams: {
            http: {
              requestUri: '/listStreams'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                StreamNameCondition: {
                  type: 'structure',
                  members: {
                    ComparisonOperator: {},
                    ComparisonValue: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamInfoList: {
                  type: 'list',
                  member: {
                    shape: 'S2i'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/ListTagsForResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                NextToken: {},
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Tags: {
                  shape: 'Si'
                }
              }
            }
          },
          ListTagsForStream: {
            http: {
              requestUri: '/listTagsForStream'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                StreamARN: {},
                StreamName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Tags: {
                  shape: 'Si'
                }
              }
            }
          },
          StartEdgeConfigurationUpdate: {
            http: {
              requestUri: '/startEdgeConfigurationUpdate'
            },
            input: {
              type: 'structure',
              required: ['EdgeConfig'],
              members: {
                StreamName: {},
                StreamARN: {},
                EdgeConfig: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                SyncStatus: {},
                FailedStatusDetails: {},
                EdgeConfig: {
                  shape: 'Sw'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/TagResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagStream: {
            http: {
              requestUri: '/tagStream'
            },
            input: {
              type: 'structure',
              required: ['Tags'],
              members: {
                StreamARN: {},
                StreamName: {},
                Tags: {
                  shape: 'Si'
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
              requestUri: '/UntagResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeyList'],
              members: {
                ResourceARN: {},
                TagKeyList: {
                  shape: 'S3n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagStream: {
            http: {
              requestUri: '/untagStream'
            },
            input: {
              type: 'structure',
              required: ['TagKeyList'],
              members: {
                StreamARN: {},
                StreamName: {},
                TagKeyList: {
                  shape: 'S3n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDataRetention: {
            http: {
              requestUri: '/updateDataRetention'
            },
            input: {
              type: 'structure',
              required: ['CurrentVersion', 'Operation', 'DataRetentionChangeInHours'],
              members: {
                StreamName: {},
                StreamARN: {},
                CurrentVersion: {},
                Operation: {},
                DataRetentionChangeInHours: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateImageGenerationConfiguration: {
            http: {
              requestUri: '/updateImageGenerationConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {},
                ImageGenerationConfiguration: {
                  shape: 'S1k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateMediaStorageConfiguration: {
            http: {
              requestUri: '/updateMediaStorageConfiguration'
            },
            input: {
              type: 'structure',
              required: ['ChannelARN', 'MediaStorageConfiguration'],
              members: {
                ChannelARN: {},
                MediaStorageConfiguration: {
                  shape: 'S26'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateNotificationConfiguration: {
            http: {
              requestUri: '/updateNotificationConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {},
                NotificationConfiguration: {
                  shape: 'S2a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateSignalingChannel: {
            http: {
              requestUri: '/updateSignalingChannel'
            },
            input: {
              type: 'structure',
              required: ['ChannelARN', 'CurrentVersion'],
              members: {
                ChannelARN: {},
                CurrentVersion: {},
                SingleMasterConfiguration: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateStream: {
            http: {
              requestUri: '/updateStream'
            },
            input: {
              type: 'structure',
              required: ['CurrentVersion'],
              members: {
                StreamName: {},
                StreamARN: {},
                CurrentVersion: {},
                DeviceName: {},
                MediaType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              MessageTtlSeconds: {
                type: 'integer'
              }
            }
          },
          S7: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {},
              Value: {}
            }
          },
          Si: {
            type: 'map',
            key: {},
            value: {}
          },
          Sw: {
            type: 'structure',
            required: ['HubDeviceArn', 'RecorderConfig'],
            members: {
              HubDeviceArn: {},
              RecorderConfig: {
                type: 'structure',
                required: ['MediaSourceConfig'],
                members: {
                  MediaSourceConfig: {
                    type: 'structure',
                    required: ['MediaUriSecretArn', 'MediaUriType'],
                    members: {
                      MediaUriSecretArn: {
                        type: 'string',
                        sensitive: true
                      },
                      MediaUriType: {}
                    }
                  },
                  ScheduleConfig: {
                    shape: 'S12'
                  }
                }
              },
              UploaderConfig: {
                type: 'structure',
                required: ['ScheduleConfig'],
                members: {
                  ScheduleConfig: {
                    shape: 'S12'
                  }
                }
              },
              DeletionConfig: {
                type: 'structure',
                members: {
                  EdgeRetentionInHours: {
                    type: 'integer'
                  },
                  LocalSizeConfig: {
                    type: 'structure',
                    members: {
                      MaxLocalMediaSizeInMB: {
                        type: 'integer'
                      },
                      StrategyOnFullSize: {}
                    }
                  },
                  DeleteAfterUpload: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S12: {
            type: 'structure',
            required: ['ScheduleExpression', 'DurationInSeconds'],
            members: {
              ScheduleExpression: {},
              DurationInSeconds: {
                type: 'integer'
              }
            }
          },
          S1k: {
            type: 'structure',
            required: ['Status', 'ImageSelectorType', 'DestinationConfig', 'SamplingInterval', 'Format'],
            members: {
              Status: {},
              ImageSelectorType: {},
              DestinationConfig: {
                type: 'structure',
                required: ['Uri', 'DestinationRegion'],
                members: {
                  Uri: {},
                  DestinationRegion: {}
                }
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
              }
            }
          },
          S26: {
            type: 'structure',
            required: ['Status'],
            members: {
              StreamARN: {},
              Status: {}
            }
          },
          S2a: {
            type: 'structure',
            required: ['Status', 'DestinationConfig'],
            members: {
              Status: {},
              DestinationConfig: {
                type: 'structure',
                required: ['Uri'],
                members: {
                  Uri: {}
                }
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              ChannelName: {},
              ChannelARN: {},
              ChannelType: {},
              ChannelStatus: {},
              CreationTime: {
                type: 'timestamp'
              },
              SingleMasterConfiguration: {
                shape: 'S4'
              },
              Version: {}
            }
          },
          S2i: {
            type: 'structure',
            members: {
              DeviceName: {},
              StreamName: {},
              StreamARN: {},
              MediaType: {},
              KmsKeyId: {},
              Version: {},
              Status: {},
              CreationTime: {
                type: 'timestamp'
              },
              DataRetentionInHours: {
                type: 'integer'
              }
            }
          },
          S3n: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e8fd85a99878d14bb454b3998ce163168fcbf66b.js.map