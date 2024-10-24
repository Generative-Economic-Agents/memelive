System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-09-25',
          endpointPrefix: 'elastictranscoder',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Elastic Transcoder',
          serviceId: 'Elastic Transcoder',
          signatureVersion: 'v4',
          uid: 'elastictranscoder-2012-09-25'
        },
        operations: {
          CancelJob: {
            http: {
              method: 'DELETE',
              requestUri: '/2012-09-25/jobs/{Id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateJob: {
            http: {
              requestUri: '/2012-09-25/jobs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['PipelineId'],
              members: {
                PipelineId: {},
                Input: {
                  shape: 'S5'
                },
                Inputs: {
                  shape: 'St'
                },
                Output: {
                  shape: 'Su'
                },
                Outputs: {
                  type: 'list',
                  member: {
                    shape: 'Su'
                  }
                },
                OutputKeyPrefix: {},
                Playlists: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Format: {},
                      OutputKeys: {
                        shape: 'S1l'
                      },
                      HlsContentProtection: {
                        shape: 'S1m'
                      },
                      PlayReadyDrm: {
                        shape: 'S1q'
                      }
                    }
                  }
                },
                UserMetadata: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'S1y'
                }
              }
            }
          },
          CreatePipeline: {
            http: {
              requestUri: '/2012-09-25/pipelines',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'InputBucket', 'Role'],
              members: {
                Name: {},
                InputBucket: {},
                OutputBucket: {},
                Role: {},
                AwsKmsKeyArn: {},
                Notifications: {
                  shape: 'S2a'
                },
                ContentConfig: {
                  shape: 'S2c'
                },
                ThumbnailConfig: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'S2l'
                },
                Warnings: {
                  shape: 'S2n'
                }
              }
            }
          },
          CreatePreset: {
            http: {
              requestUri: '/2012-09-25/presets',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'Container'],
              members: {
                Name: {},
                Description: {},
                Container: {},
                Video: {
                  shape: 'S2r'
                },
                Audio: {
                  shape: 'S37'
                },
                Thumbnails: {
                  shape: 'S3i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Preset: {
                  shape: 'S3m'
                },
                Warning: {}
              }
            }
          },
          DeletePipeline: {
            http: {
              method: 'DELETE',
              requestUri: '/2012-09-25/pipelines/{Id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePreset: {
            http: {
              method: 'DELETE',
              requestUri: '/2012-09-25/presets/{Id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListJobsByPipeline: {
            http: {
              method: 'GET',
              requestUri: '/2012-09-25/jobsByPipeline/{PipelineId}'
            },
            input: {
              type: 'structure',
              required: ['PipelineId'],
              members: {
                PipelineId: {
                  location: 'uri',
                  locationName: 'PipelineId'
                },
                Ascending: {
                  location: 'querystring',
                  locationName: 'Ascending'
                },
                PageToken: {
                  location: 'querystring',
                  locationName: 'PageToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Jobs: {
                  shape: 'S3v'
                },
                NextPageToken: {}
              }
            }
          },
          ListJobsByStatus: {
            http: {
              method: 'GET',
              requestUri: '/2012-09-25/jobsByStatus/{Status}'
            },
            input: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {
                  location: 'uri',
                  locationName: 'Status'
                },
                Ascending: {
                  location: 'querystring',
                  locationName: 'Ascending'
                },
                PageToken: {
                  location: 'querystring',
                  locationName: 'PageToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Jobs: {
                  shape: 'S3v'
                },
                NextPageToken: {}
              }
            }
          },
          ListPipelines: {
            http: {
              method: 'GET',
              requestUri: '/2012-09-25/pipelines'
            },
            input: {
              type: 'structure',
              members: {
                Ascending: {
                  location: 'querystring',
                  locationName: 'Ascending'
                },
                PageToken: {
                  location: 'querystring',
                  locationName: 'PageToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipelines: {
                  type: 'list',
                  member: {
                    shape: 'S2l'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListPresets: {
            http: {
              method: 'GET',
              requestUri: '/2012-09-25/presets'
            },
            input: {
              type: 'structure',
              members: {
                Ascending: {
                  location: 'querystring',
                  locationName: 'Ascending'
                },
                PageToken: {
                  location: 'querystring',
                  locationName: 'PageToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Presets: {
                  type: 'list',
                  member: {
                    shape: 'S3m'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ReadJob: {
            http: {
              method: 'GET',
              requestUri: '/2012-09-25/jobs/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'S1y'
                }
              }
            }
          },
          ReadPipeline: {
            http: {
              method: 'GET',
              requestUri: '/2012-09-25/pipelines/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'S2l'
                },
                Warnings: {
                  shape: 'S2n'
                }
              }
            }
          },
          ReadPreset: {
            http: {
              method: 'GET',
              requestUri: '/2012-09-25/presets/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Preset: {
                  shape: 'S3m'
                }
              }
            }
          },
          TestRole: {
            http: {
              requestUri: '/2012-09-25/roleTests',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Role', 'InputBucket', 'OutputBucket', 'Topics'],
              members: {
                Role: {},
                InputBucket: {},
                OutputBucket: {},
                Topics: {
                  type: 'list',
                  member: {}
                }
              },
              deprecated: true
            },
            output: {
              type: 'structure',
              members: {
                Success: {},
                Messages: {
                  type: 'list',
                  member: {}
                }
              },
              deprecated: true
            },
            deprecated: true
          },
          UpdatePipeline: {
            http: {
              method: 'PUT',
              requestUri: '/2012-09-25/pipelines/{Id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Name: {},
                InputBucket: {},
                Role: {},
                AwsKmsKeyArn: {},
                Notifications: {
                  shape: 'S2a'
                },
                ContentConfig: {
                  shape: 'S2c'
                },
                ThumbnailConfig: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'S2l'
                },
                Warnings: {
                  shape: 'S2n'
                }
              }
            }
          },
          UpdatePipelineNotifications: {
            http: {
              requestUri: '/2012-09-25/pipelines/{Id}/notifications'
            },
            input: {
              type: 'structure',
              required: ['Id', 'Notifications'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Notifications: {
                  shape: 'S2a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'S2l'
                }
              }
            }
          },
          UpdatePipelineStatus: {
            http: {
              requestUri: '/2012-09-25/pipelines/{Id}/status'
            },
            input: {
              type: 'structure',
              required: ['Id', 'Status'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'S2l'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              Key: {},
              FrameRate: {},
              Resolution: {},
              AspectRatio: {},
              Interlaced: {},
              Container: {},
              Encryption: {
                shape: 'Sc'
              },
              TimeSpan: {
                shape: 'Sg'
              },
              InputCaptions: {
                type: 'structure',
                members: {
                  MergePolicy: {},
                  CaptionSources: {
                    shape: 'Sk'
                  }
                }
              },
              DetectedProperties: {
                type: 'structure',
                members: {
                  Width: {
                    type: 'integer'
                  },
                  Height: {
                    type: 'integer'
                  },
                  FrameRate: {},
                  FileSize: {
                    type: 'long'
                  },
                  DurationMillis: {
                    type: 'long'
                  }
                }
              }
            }
          },
          Sc: {
            type: 'structure',
            members: {
              Mode: {},
              Key: {},
              KeyMd5: {},
              InitializationVector: {}
            }
          },
          Sg: {
            type: 'structure',
            members: {
              StartTime: {},
              Duration: {}
            }
          },
          Sk: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Language: {},
                TimeOffset: {},
                Label: {},
                Encryption: {
                  shape: 'Sc'
                }
              }
            }
          },
          St: {
            type: 'list',
            member: {
              shape: 'S5'
            }
          },
          Su: {
            type: 'structure',
            members: {
              Key: {},
              ThumbnailPattern: {},
              ThumbnailEncryption: {
                shape: 'Sc'
              },
              Rotate: {},
              PresetId: {},
              SegmentDuration: {},
              Watermarks: {
                shape: 'Sx'
              },
              AlbumArt: {
                shape: 'S11'
              },
              Composition: {
                shape: 'S19',
                deprecated: true
              },
              Captions: {
                shape: 'S1b'
              },
              Encryption: {
                shape: 'Sc'
              }
            }
          },
          Sx: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PresetWatermarkId: {},
                InputKey: {},
                Encryption: {
                  shape: 'Sc'
                }
              }
            }
          },
          S11: {
            type: 'structure',
            members: {
              MergePolicy: {},
              Artwork: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    InputKey: {},
                    MaxWidth: {},
                    MaxHeight: {},
                    SizingPolicy: {},
                    PaddingPolicy: {},
                    AlbumArtFormat: {},
                    Encryption: {
                      shape: 'Sc'
                    }
                  }
                }
              }
            }
          },
          S19: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TimeSpan: {
                  shape: 'Sg'
                }
              },
              deprecated: true
            },
            deprecated: true
          },
          S1b: {
            type: 'structure',
            members: {
              MergePolicy: {
                deprecated: true
              },
              CaptionSources: {
                shape: 'Sk',
                deprecated: true
              },
              CaptionFormats: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Format: {},
                    Pattern: {},
                    Encryption: {
                      shape: 'Sc'
                    }
                  }
                }
              }
            }
          },
          S1l: {
            type: 'list',
            member: {}
          },
          S1m: {
            type: 'structure',
            members: {
              Method: {},
              Key: {},
              KeyMd5: {},
              InitializationVector: {},
              LicenseAcquisitionUrl: {},
              KeyStoragePolicy: {}
            }
          },
          S1q: {
            type: 'structure',
            members: {
              Format: {},
              Key: {},
              KeyMd5: {},
              KeyId: {},
              InitializationVector: {},
              LicenseAcquisitionUrl: {}
            }
          },
          S1v: {
            type: 'map',
            key: {},
            value: {}
          },
          S1y: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              PipelineId: {},
              Input: {
                shape: 'S5'
              },
              Inputs: {
                shape: 'St'
              },
              Output: {
                shape: 'S1z'
              },
              Outputs: {
                type: 'list',
                member: {
                  shape: 'S1z'
                }
              },
              OutputKeyPrefix: {},
              Playlists: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Format: {},
                    OutputKeys: {
                      shape: 'S1l'
                    },
                    HlsContentProtection: {
                      shape: 'S1m'
                    },
                    PlayReadyDrm: {
                      shape: 'S1q'
                    },
                    Status: {},
                    StatusDetail: {}
                  }
                }
              },
              Status: {},
              UserMetadata: {
                shape: 'S1v'
              },
              Timing: {
                type: 'structure',
                members: {
                  SubmitTimeMillis: {
                    type: 'long'
                  },
                  StartTimeMillis: {
                    type: 'long'
                  },
                  FinishTimeMillis: {
                    type: 'long'
                  }
                }
              }
            }
          },
          S1z: {
            type: 'structure',
            members: {
              Id: {},
              Key: {},
              ThumbnailPattern: {},
              ThumbnailEncryption: {
                shape: 'Sc'
              },
              Rotate: {},
              PresetId: {},
              SegmentDuration: {},
              Status: {},
              StatusDetail: {},
              Duration: {
                type: 'long'
              },
              Width: {
                type: 'integer'
              },
              Height: {
                type: 'integer'
              },
              FrameRate: {},
              FileSize: {
                type: 'long'
              },
              DurationMillis: {
                type: 'long'
              },
              Watermarks: {
                shape: 'Sx'
              },
              AlbumArt: {
                shape: 'S11'
              },
              Composition: {
                shape: 'S19',
                deprecated: true
              },
              Captions: {
                shape: 'S1b'
              },
              Encryption: {
                shape: 'Sc'
              },
              AppliedColorSpaceConversion: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              Progressing: {},
              Completed: {},
              Warning: {},
              Error: {}
            }
          },
          S2c: {
            type: 'structure',
            members: {
              Bucket: {},
              StorageClass: {},
              Permissions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    GranteeType: {},
                    Grantee: {},
                    Access: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          S2l: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              Status: {},
              InputBucket: {},
              OutputBucket: {},
              Role: {},
              AwsKmsKeyArn: {},
              Notifications: {
                shape: 'S2a'
              },
              ContentConfig: {
                shape: 'S2c'
              },
              ThumbnailConfig: {
                shape: 'S2c'
              }
            }
          },
          S2n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Code: {},
                Message: {}
              }
            }
          },
          S2r: {
            type: 'structure',
            members: {
              Codec: {},
              CodecOptions: {
                type: 'map',
                key: {},
                value: {}
              },
              KeyframesMaxDist: {},
              FixedGOP: {},
              BitRate: {},
              FrameRate: {},
              MaxFrameRate: {},
              Resolution: {},
              AspectRatio: {},
              MaxWidth: {},
              MaxHeight: {},
              DisplayAspectRatio: {},
              SizingPolicy: {},
              PaddingPolicy: {},
              Watermarks: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id: {},
                    MaxWidth: {},
                    MaxHeight: {},
                    SizingPolicy: {},
                    HorizontalAlign: {},
                    HorizontalOffset: {},
                    VerticalAlign: {},
                    VerticalOffset: {},
                    Opacity: {},
                    Target: {}
                  }
                }
              }
            }
          },
          S37: {
            type: 'structure',
            members: {
              Codec: {},
              SampleRate: {},
              BitRate: {},
              Channels: {},
              AudioPackingMode: {},
              CodecOptions: {
                type: 'structure',
                members: {
                  Profile: {},
                  BitDepth: {},
                  BitOrder: {},
                  Signed: {}
                }
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              Format: {},
              Interval: {},
              Resolution: {},
              AspectRatio: {},
              MaxWidth: {},
              MaxHeight: {},
              SizingPolicy: {},
              PaddingPolicy: {}
            }
          },
          S3m: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              Description: {},
              Container: {},
              Audio: {
                shape: 'S37'
              },
              Video: {
                shape: 'S2r'
              },
              Thumbnails: {
                shape: 'S3i'
              },
              Type: {}
            }
          },
          S3v: {
            type: 'list',
            member: {
              shape: 'S1y'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8b6b47a8491b03c1455c4e839c4e39e40ef79242.js.map