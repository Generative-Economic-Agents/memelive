System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2017-08-29',
          endpointPrefix: 'mediaconvert',
          signingName: 'mediaconvert',
          serviceFullName: 'AWS Elemental MediaConvert',
          serviceId: 'MediaConvert',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'mediaconvert-2017-08-29',
          signatureVersion: 'v4',
          serviceAbbreviation: 'MediaConvert'
        },
        operations: {
          AssociateCertificate: {
            http: {
              requestUri: '/2017-08-29/certificates',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelJob: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-08-29/jobs/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Id: {
                  locationName: 'id',
                  location: 'uri'
                }
              },
              required: ['Id']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateJob: {
            http: {
              requestUri: '/2017-08-29/jobs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                AccelerationSettings: {
                  shape: 'S7',
                  locationName: 'accelerationSettings'
                },
                BillingTagsSource: {
                  locationName: 'billingTagsSource'
                },
                ClientRequestToken: {
                  locationName: 'clientRequestToken',
                  idempotencyToken: true
                },
                HopDestinations: {
                  shape: 'Sa',
                  locationName: 'hopDestinations'
                },
                JobTemplate: {
                  locationName: 'jobTemplate'
                },
                Priority: {
                  locationName: 'priority',
                  type: 'integer'
                },
                Queue: {
                  locationName: 'queue'
                },
                Role: {
                  locationName: 'role'
                },
                Settings: {
                  shape: 'Se',
                  locationName: 'settings'
                },
                SimulateReservedQueue: {
                  locationName: 'simulateReservedQueue'
                },
                StatusUpdateInterval: {
                  locationName: 'statusUpdateInterval'
                },
                Tags: {
                  shape: 'Slb',
                  locationName: 'tags'
                },
                UserMetadata: {
                  shape: 'Slb',
                  locationName: 'userMetadata'
                }
              },
              required: ['Role', 'Settings']
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'Sld',
                  locationName: 'job'
                }
              }
            }
          },
          CreateJobTemplate: {
            http: {
              requestUri: '/2017-08-29/jobTemplates',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                AccelerationSettings: {
                  shape: 'S7',
                  locationName: 'accelerationSettings'
                },
                Category: {
                  locationName: 'category'
                },
                Description: {
                  locationName: 'description'
                },
                HopDestinations: {
                  shape: 'Sa',
                  locationName: 'hopDestinations'
                },
                Name: {
                  locationName: 'name'
                },
                Priority: {
                  locationName: 'priority',
                  type: 'integer'
                },
                Queue: {
                  locationName: 'queue'
                },
                Settings: {
                  shape: 'Slv',
                  locationName: 'settings'
                },
                StatusUpdateInterval: {
                  locationName: 'statusUpdateInterval'
                },
                Tags: {
                  shape: 'Slb',
                  locationName: 'tags'
                }
              },
              required: ['Settings', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                JobTemplate: {
                  shape: 'Slz',
                  locationName: 'jobTemplate'
                }
              }
            }
          },
          CreatePreset: {
            http: {
              requestUri: '/2017-08-29/presets',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Category: {
                  locationName: 'category'
                },
                Description: {
                  locationName: 'description'
                },
                Name: {
                  locationName: 'name'
                },
                Settings: {
                  shape: 'Sm2',
                  locationName: 'settings'
                },
                Tags: {
                  shape: 'Slb',
                  locationName: 'tags'
                }
              },
              required: ['Settings', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                Preset: {
                  shape: 'Sm6',
                  locationName: 'preset'
                }
              }
            }
          },
          CreateQueue: {
            http: {
              requestUri: '/2017-08-29/queues',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                Name: {
                  locationName: 'name'
                },
                PricingPlan: {
                  locationName: 'pricingPlan'
                },
                ReservationPlanSettings: {
                  shape: 'Sm9',
                  locationName: 'reservationPlanSettings'
                },
                Status: {
                  locationName: 'status'
                },
                Tags: {
                  shape: 'Slb',
                  locationName: 'tags'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Queue: {
                  shape: 'Sme',
                  locationName: 'queue'
                }
              }
            }
          },
          DeleteJobTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-08-29/jobTemplates/{name}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name',
                  location: 'uri'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-08-29/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePreset: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-08-29/presets/{name}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name',
                  location: 'uri'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteQueue: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-08-29/queues/{name}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name',
                  location: 'uri'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeEndpoints: {
            http: {
              requestUri: '/2017-08-29/endpoints',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                Mode: {
                  locationName: 'mode',
                  type: 'string',
                  deprecated: true,
                  deprecatedMessage: 'DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead.'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              },
              deprecated: true,
              deprecatedMessage: 'DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead.'
            },
            output: {
              type: 'structure',
              members: {
                Endpoints: {
                  locationName: 'endpoints',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Url: {
                        locationName: 'url'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              },
              deprecated: true,
              deprecatedMessage: 'DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead.'
            },
            deprecated: true,
            deprecatedMessage: 'DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead.'
          },
          DisassociateCertificate: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-08-29/certificates/{arn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn',
                  location: 'uri'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetJob: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/jobs/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Id: {
                  locationName: 'id',
                  location: 'uri'
                }
              },
              required: ['Id']
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'Sld',
                  locationName: 'job'
                }
              }
            }
          },
          GetJobTemplate: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/jobTemplates/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name',
                  location: 'uri'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                JobTemplate: {
                  shape: 'Slz',
                  locationName: 'jobTemplate'
                }
              }
            }
          },
          GetPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'Sn2',
                  locationName: 'policy'
                }
              }
            }
          },
          GetPreset: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/presets/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name',
                  location: 'uri'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Preset: {
                  shape: 'Sm6',
                  locationName: 'preset'
                }
              }
            }
          },
          GetQueue: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/queues/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name',
                  location: 'uri'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Queue: {
                  shape: 'Sme',
                  locationName: 'queue'
                }
              }
            }
          },
          ListJobTemplates: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/jobTemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Category: {
                  locationName: 'category',
                  location: 'querystring'
                },
                ListBy: {
                  locationName: 'listBy',
                  location: 'querystring'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  location: 'querystring',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken',
                  location: 'querystring'
                },
                Order: {
                  locationName: 'order',
                  location: 'querystring'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobTemplates: {
                  locationName: 'jobTemplates',
                  type: 'list',
                  member: {
                    shape: 'Slz'
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListJobs: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  locationName: 'maxResults',
                  location: 'querystring',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken',
                  location: 'querystring'
                },
                Order: {
                  locationName: 'order',
                  location: 'querystring'
                },
                Queue: {
                  locationName: 'queue',
                  location: 'querystring'
                },
                Status: {
                  locationName: 'status',
                  location: 'querystring'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Jobs: {
                  locationName: 'jobs',
                  type: 'list',
                  member: {
                    shape: 'Sld'
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListPresets: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/presets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Category: {
                  locationName: 'category',
                  location: 'querystring'
                },
                ListBy: {
                  locationName: 'listBy',
                  location: 'querystring'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  location: 'querystring',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken',
                  location: 'querystring'
                },
                Order: {
                  locationName: 'order',
                  location: 'querystring'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Presets: {
                  locationName: 'presets',
                  type: 'list',
                  member: {
                    shape: 'Sm6'
                  }
                }
              }
            }
          },
          ListQueues: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/queues',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ListBy: {
                  locationName: 'listBy',
                  location: 'querystring'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  location: 'querystring',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken',
                  location: 'querystring'
                },
                Order: {
                  locationName: 'order',
                  location: 'querystring'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Queues: {
                  locationName: 'queues',
                  type: 'list',
                  member: {
                    shape: 'Sme'
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/2017-08-29/tags/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn',
                  location: 'uri'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {
                ResourceTags: {
                  locationName: 'resourceTags',
                  type: 'structure',
                  members: {
                    Arn: {
                      locationName: 'arn'
                    },
                    Tags: {
                      shape: 'Slb',
                      locationName: 'tags'
                    }
                  }
                }
              }
            }
          },
          PutPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/2017-08-29/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'Sn2',
                  locationName: 'policy'
                }
              },
              required: ['Policy']
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'Sn2',
                  locationName: 'policy'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/2017-08-29/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Tags: {
                  shape: 'Slb',
                  locationName: 'tags'
                }
              },
              required: ['Arn', 'Tags']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'PUT',
              requestUri: '/2017-08-29/tags/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn',
                  location: 'uri'
                },
                TagKeys: {
                  shape: 'Sli',
                  locationName: 'tagKeys'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateJobTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/2017-08-29/jobTemplates/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AccelerationSettings: {
                  shape: 'S7',
                  locationName: 'accelerationSettings'
                },
                Category: {
                  locationName: 'category'
                },
                Description: {
                  locationName: 'description'
                },
                HopDestinations: {
                  shape: 'Sa',
                  locationName: 'hopDestinations'
                },
                Name: {
                  locationName: 'name',
                  location: 'uri'
                },
                Priority: {
                  locationName: 'priority',
                  type: 'integer'
                },
                Queue: {
                  locationName: 'queue'
                },
                Settings: {
                  shape: 'Slv',
                  locationName: 'settings'
                },
                StatusUpdateInterval: {
                  locationName: 'statusUpdateInterval'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                JobTemplate: {
                  shape: 'Slz',
                  locationName: 'jobTemplate'
                }
              }
            }
          },
          UpdatePreset: {
            http: {
              method: 'PUT',
              requestUri: '/2017-08-29/presets/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Category: {
                  locationName: 'category'
                },
                Description: {
                  locationName: 'description'
                },
                Name: {
                  locationName: 'name',
                  location: 'uri'
                },
                Settings: {
                  shape: 'Sm2',
                  locationName: 'settings'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Preset: {
                  shape: 'Sm6',
                  locationName: 'preset'
                }
              }
            }
          },
          UpdateQueue: {
            http: {
              method: 'PUT',
              requestUri: '/2017-08-29/queues/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                Name: {
                  locationName: 'name',
                  location: 'uri'
                },
                ReservationPlanSettings: {
                  shape: 'Sm9',
                  locationName: 'reservationPlanSettings'
                },
                Status: {
                  locationName: 'status'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Queue: {
                  shape: 'Sme',
                  locationName: 'queue'
                }
              }
            }
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            members: {
              Mode: {
                locationName: 'mode'
              }
            },
            required: ['Mode']
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Priority: {
                  locationName: 'priority',
                  type: 'integer'
                },
                Queue: {
                  locationName: 'queue'
                },
                WaitMinutes: {
                  locationName: 'waitMinutes',
                  type: 'integer'
                }
              }
            }
          },
          Se: {
            type: 'structure',
            members: {
              AdAvailOffset: {
                locationName: 'adAvailOffset',
                type: 'integer'
              },
              AvailBlanking: {
                shape: 'Sg',
                locationName: 'availBlanking'
              },
              ColorConversion3DLUTSettings: {
                shape: 'Si',
                locationName: 'colorConversion3DLUTSettings'
              },
              Esam: {
                shape: 'Sn',
                locationName: 'esam'
              },
              ExtendedDataServices: {
                shape: 'St',
                locationName: 'extendedDataServices'
              },
              FollowSource: {
                locationName: 'followSource',
                type: 'integer'
              },
              Inputs: {
                locationName: 'inputs',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    AdvancedInputFilter: {
                      locationName: 'advancedInputFilter'
                    },
                    AdvancedInputFilterSettings: {
                      shape: 'S10',
                      locationName: 'advancedInputFilterSettings'
                    },
                    AudioSelectorGroups: {
                      shape: 'S13',
                      locationName: 'audioSelectorGroups'
                    },
                    AudioSelectors: {
                      shape: 'S17',
                      locationName: 'audioSelectors'
                    },
                    CaptionSelectors: {
                      shape: 'S1t',
                      locationName: 'captionSelectors'
                    },
                    Crop: {
                      shape: 'S2i',
                      locationName: 'crop'
                    },
                    DeblockFilter: {
                      locationName: 'deblockFilter'
                    },
                    DecryptionSettings: {
                      locationName: 'decryptionSettings',
                      type: 'structure',
                      members: {
                        DecryptionMode: {
                          locationName: 'decryptionMode'
                        },
                        EncryptedDecryptionKey: {
                          locationName: 'encryptedDecryptionKey'
                        },
                        InitializationVector: {
                          locationName: 'initializationVector'
                        },
                        KmsKeyRegion: {
                          locationName: 'kmsKeyRegion'
                        }
                      }
                    },
                    DenoiseFilter: {
                      locationName: 'denoiseFilter'
                    },
                    DolbyVisionMetadataXml: {
                      locationName: 'dolbyVisionMetadataXml'
                    },
                    FileInput: {
                      locationName: 'fileInput'
                    },
                    FilterEnable: {
                      locationName: 'filterEnable'
                    },
                    FilterStrength: {
                      locationName: 'filterStrength',
                      type: 'integer'
                    },
                    ImageInserter: {
                      shape: 'S2u',
                      locationName: 'imageInserter'
                    },
                    InputClippings: {
                      shape: 'S32',
                      locationName: 'inputClippings'
                    },
                    InputScanType: {
                      locationName: 'inputScanType'
                    },
                    Position: {
                      shape: 'S2i',
                      locationName: 'position'
                    },
                    ProgramNumber: {
                      locationName: 'programNumber',
                      type: 'integer'
                    },
                    PsiControl: {
                      locationName: 'psiControl'
                    },
                    SupplementalImps: {
                      locationName: 'supplementalImps',
                      type: 'list',
                      member: {}
                    },
                    TimecodeSource: {
                      locationName: 'timecodeSource'
                    },
                    TimecodeStart: {
                      locationName: 'timecodeStart'
                    },
                    VideoGenerator: {
                      locationName: 'videoGenerator',
                      type: 'structure',
                      members: {
                        Duration: {
                          locationName: 'duration',
                          type: 'integer'
                        }
                      }
                    },
                    VideoOverlays: {
                      shape: 'S3d',
                      locationName: 'videoOverlays'
                    },
                    VideoSelector: {
                      shape: 'S3i',
                      locationName: 'videoSelector'
                    }
                  }
                }
              },
              KantarWatermark: {
                shape: 'S3s',
                locationName: 'kantarWatermark'
              },
              MotionImageInserter: {
                shape: 'S40',
                locationName: 'motionImageInserter'
              },
              NielsenConfiguration: {
                shape: 'S48',
                locationName: 'nielsenConfiguration'
              },
              NielsenNonLinearWatermark: {
                shape: 'S4a',
                locationName: 'nielsenNonLinearWatermark'
              },
              OutputGroups: {
                shape: 'S4h',
                locationName: 'outputGroups'
              },
              TimecodeConfig: {
                shape: 'Sl3',
                locationName: 'timecodeConfig'
              },
              TimedMetadataInsertion: {
                shape: 'Sl6',
                locationName: 'timedMetadataInsertion'
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              AvailBlankingImage: {
                locationName: 'availBlankingImage'
              }
            }
          },
          Si: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FileInput: {
                  locationName: 'fileInput'
                },
                InputColorSpace: {
                  locationName: 'inputColorSpace'
                },
                InputMasteringLuminance: {
                  locationName: 'inputMasteringLuminance',
                  type: 'integer'
                },
                OutputColorSpace: {
                  locationName: 'outputColorSpace'
                },
                OutputMasteringLuminance: {
                  locationName: 'outputMasteringLuminance',
                  type: 'integer'
                }
              }
            }
          },
          Sn: {
            type: 'structure',
            members: {
              ManifestConfirmConditionNotification: {
                locationName: 'manifestConfirmConditionNotification',
                type: 'structure',
                members: {
                  MccXml: {
                    locationName: 'mccXml'
                  }
                }
              },
              ResponseSignalPreroll: {
                locationName: 'responseSignalPreroll',
                type: 'integer'
              },
              SignalProcessingNotification: {
                locationName: 'signalProcessingNotification',
                type: 'structure',
                members: {
                  SccXml: {
                    locationName: 'sccXml'
                  }
                }
              }
            }
          },
          St: {
            type: 'structure',
            members: {
              CopyProtectionAction: {
                locationName: 'copyProtectionAction'
              },
              VchipAction: {
                locationName: 'vchipAction'
              }
            }
          },
          S10: {
            type: 'structure',
            members: {
              AddTexture: {
                locationName: 'addTexture'
              },
              Sharpening: {
                locationName: 'sharpening'
              }
            }
          },
          S13: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                AudioSelectorNames: {
                  shape: 'S15',
                  locationName: 'audioSelectorNames'
                }
              }
            }
          },
          S15: {
            type: 'list',
            member: {}
          },
          S17: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                AudioDurationCorrection: {
                  locationName: 'audioDurationCorrection'
                },
                CustomLanguageCode: {
                  locationName: 'customLanguageCode'
                },
                DefaultSelection: {
                  locationName: 'defaultSelection'
                },
                ExternalAudioFileInput: {
                  locationName: 'externalAudioFileInput'
                },
                HlsRenditionGroupSettings: {
                  locationName: 'hlsRenditionGroupSettings',
                  type: 'structure',
                  members: {
                    RenditionGroupId: {
                      locationName: 'renditionGroupId'
                    },
                    RenditionLanguageCode: {
                      locationName: 'renditionLanguageCode'
                    },
                    RenditionName: {
                      locationName: 'renditionName'
                    }
                  }
                },
                LanguageCode: {
                  locationName: 'languageCode'
                },
                Offset: {
                  locationName: 'offset',
                  type: 'integer'
                },
                Pids: {
                  shape: 'S1g',
                  locationName: 'pids'
                },
                ProgramSelection: {
                  locationName: 'programSelection',
                  type: 'integer'
                },
                RemixSettings: {
                  shape: 'S1j',
                  locationName: 'remixSettings'
                },
                SelectorType: {
                  locationName: 'selectorType'
                },
                Tracks: {
                  shape: 'S1g',
                  locationName: 'tracks'
                }
              }
            }
          },
          S1g: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          S1j: {
            type: 'structure',
            members: {
              AudioDescriptionAudioChannel: {
                locationName: 'audioDescriptionAudioChannel',
                type: 'integer'
              },
              AudioDescriptionDataChannel: {
                locationName: 'audioDescriptionDataChannel',
                type: 'integer'
              },
              ChannelMapping: {
                locationName: 'channelMapping',
                type: 'structure',
                members: {
                  OutputChannels: {
                    locationName: 'outputChannels',
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        InputChannels: {
                          locationName: 'inputChannels',
                          type: 'list',
                          member: {
                            type: 'integer'
                          }
                        },
                        InputChannelsFineTune: {
                          locationName: 'inputChannelsFineTune',
                          type: 'list',
                          member: {
                            type: 'double'
                          }
                        }
                      }
                    }
                  }
                }
              },
              ChannelsIn: {
                locationName: 'channelsIn',
                type: 'integer'
              },
              ChannelsOut: {
                locationName: 'channelsOut',
                type: 'integer'
              }
            }
          },
          S1t: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                CustomLanguageCode: {
                  locationName: 'customLanguageCode'
                },
                LanguageCode: {
                  locationName: 'languageCode'
                },
                SourceSettings: {
                  locationName: 'sourceSettings',
                  type: 'structure',
                  members: {
                    AncillarySourceSettings: {
                      locationName: 'ancillarySourceSettings',
                      type: 'structure',
                      members: {
                        Convert608To708: {
                          locationName: 'convert608To708'
                        },
                        SourceAncillaryChannelNumber: {
                          locationName: 'sourceAncillaryChannelNumber',
                          type: 'integer'
                        },
                        TerminateCaptions: {
                          locationName: 'terminateCaptions'
                        }
                      }
                    },
                    DvbSubSourceSettings: {
                      locationName: 'dvbSubSourceSettings',
                      type: 'structure',
                      members: {
                        Pid: {
                          locationName: 'pid',
                          type: 'integer'
                        }
                      }
                    },
                    EmbeddedSourceSettings: {
                      locationName: 'embeddedSourceSettings',
                      type: 'structure',
                      members: {
                        Convert608To708: {
                          locationName: 'convert608To708'
                        },
                        Source608ChannelNumber: {
                          locationName: 'source608ChannelNumber',
                          type: 'integer'
                        },
                        Source608TrackNumber: {
                          locationName: 'source608TrackNumber',
                          type: 'integer'
                        },
                        TerminateCaptions: {
                          locationName: 'terminateCaptions'
                        }
                      }
                    },
                    FileSourceSettings: {
                      locationName: 'fileSourceSettings',
                      type: 'structure',
                      members: {
                        Convert608To708: {
                          locationName: 'convert608To708'
                        },
                        ConvertPaintToPop: {
                          locationName: 'convertPaintToPop'
                        },
                        Framerate: {
                          locationName: 'framerate',
                          type: 'structure',
                          members: {
                            FramerateDenominator: {
                              locationName: 'framerateDenominator',
                              type: 'integer'
                            },
                            FramerateNumerator: {
                              locationName: 'framerateNumerator',
                              type: 'integer'
                            }
                          }
                        },
                        SourceFile: {
                          locationName: 'sourceFile'
                        },
                        TimeDelta: {
                          locationName: 'timeDelta',
                          type: 'integer'
                        },
                        TimeDeltaUnits: {
                          locationName: 'timeDeltaUnits'
                        }
                      }
                    },
                    SourceType: {
                      locationName: 'sourceType'
                    },
                    TeletextSourceSettings: {
                      locationName: 'teletextSourceSettings',
                      type: 'structure',
                      members: {
                        PageNumber: {
                          locationName: 'pageNumber'
                        }
                      }
                    },
                    TrackSourceSettings: {
                      locationName: 'trackSourceSettings',
                      type: 'structure',
                      members: {
                        TrackNumber: {
                          locationName: 'trackNumber',
                          type: 'integer'
                        }
                      }
                    },
                    WebvttHlsSourceSettings: {
                      locationName: 'webvttHlsSourceSettings',
                      type: 'structure',
                      members: {
                        RenditionGroupId: {
                          locationName: 'renditionGroupId'
                        },
                        RenditionLanguageCode: {
                          locationName: 'renditionLanguageCode'
                        },
                        RenditionName: {
                          locationName: 'renditionName'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2i: {
            type: 'structure',
            members: {
              Height: {
                locationName: 'height',
                type: 'integer'
              },
              Width: {
                locationName: 'width',
                type: 'integer'
              },
              X: {
                locationName: 'x',
                type: 'integer'
              },
              Y: {
                locationName: 'y',
                type: 'integer'
              }
            }
          },
          S2u: {
            type: 'structure',
            members: {
              InsertableImages: {
                locationName: 'insertableImages',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Duration: {
                      locationName: 'duration',
                      type: 'integer'
                    },
                    FadeIn: {
                      locationName: 'fadeIn',
                      type: 'integer'
                    },
                    FadeOut: {
                      locationName: 'fadeOut',
                      type: 'integer'
                    },
                    Height: {
                      locationName: 'height',
                      type: 'integer'
                    },
                    ImageInserterInput: {
                      locationName: 'imageInserterInput'
                    },
                    ImageX: {
                      locationName: 'imageX',
                      type: 'integer'
                    },
                    ImageY: {
                      locationName: 'imageY',
                      type: 'integer'
                    },
                    Layer: {
                      locationName: 'layer',
                      type: 'integer'
                    },
                    Opacity: {
                      locationName: 'opacity',
                      type: 'integer'
                    },
                    StartTime: {
                      locationName: 'startTime'
                    },
                    Width: {
                      locationName: 'width',
                      type: 'integer'
                    }
                  }
                }
              },
              SdrReferenceWhiteLevel: {
                locationName: 'sdrReferenceWhiteLevel',
                type: 'integer'
              }
            }
          },
          S32: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EndTimecode: {
                  locationName: 'endTimecode'
                },
                StartTimecode: {
                  locationName: 'startTimecode'
                }
              }
            }
          },
          S3d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EndTimecode: {
                  locationName: 'endTimecode'
                },
                Input: {
                  locationName: 'input',
                  type: 'structure',
                  members: {
                    FileInput: {
                      locationName: 'fileInput'
                    },
                    InputClippings: {
                      locationName: 'inputClippings',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          EndTimecode: {
                            locationName: 'endTimecode'
                          },
                          StartTimecode: {
                            locationName: 'startTimecode'
                          }
                        }
                      }
                    },
                    TimecodeSource: {
                      locationName: 'timecodeSource'
                    },
                    TimecodeStart: {
                      locationName: 'timecodeStart'
                    }
                  }
                },
                StartTimecode: {
                  locationName: 'startTimecode'
                }
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              AlphaBehavior: {
                locationName: 'alphaBehavior'
              },
              ColorSpace: {
                locationName: 'colorSpace'
              },
              ColorSpaceUsage: {
                locationName: 'colorSpaceUsage'
              },
              EmbeddedTimecodeOverride: {
                locationName: 'embeddedTimecodeOverride'
              },
              Hdr10Metadata: {
                shape: 'S3m',
                locationName: 'hdr10Metadata'
              },
              MaxLuminance: {
                locationName: 'maxLuminance',
                type: 'integer'
              },
              PadVideo: {
                locationName: 'padVideo'
              },
              Pid: {
                locationName: 'pid',
                type: 'integer'
              },
              ProgramNumber: {
                locationName: 'programNumber',
                type: 'integer'
              },
              Rotate: {
                locationName: 'rotate'
              },
              SampleRange: {
                locationName: 'sampleRange'
              }
            }
          },
          S3m: {
            type: 'structure',
            members: {
              BluePrimaryX: {
                locationName: 'bluePrimaryX',
                type: 'integer'
              },
              BluePrimaryY: {
                locationName: 'bluePrimaryY',
                type: 'integer'
              },
              GreenPrimaryX: {
                locationName: 'greenPrimaryX',
                type: 'integer'
              },
              GreenPrimaryY: {
                locationName: 'greenPrimaryY',
                type: 'integer'
              },
              MaxContentLightLevel: {
                locationName: 'maxContentLightLevel',
                type: 'integer'
              },
              MaxFrameAverageLightLevel: {
                locationName: 'maxFrameAverageLightLevel',
                type: 'integer'
              },
              MaxLuminance: {
                locationName: 'maxLuminance',
                type: 'integer'
              },
              MinLuminance: {
                locationName: 'minLuminance',
                type: 'integer'
              },
              RedPrimaryX: {
                locationName: 'redPrimaryX',
                type: 'integer'
              },
              RedPrimaryY: {
                locationName: 'redPrimaryY',
                type: 'integer'
              },
              WhitePointX: {
                locationName: 'whitePointX',
                type: 'integer'
              },
              WhitePointY: {
                locationName: 'whitePointY',
                type: 'integer'
              }
            }
          },
          S3s: {
            type: 'structure',
            members: {
              ChannelName: {
                locationName: 'channelName'
              },
              ContentReference: {
                locationName: 'contentReference'
              },
              CredentialsSecretName: {
                locationName: 'credentialsSecretName'
              },
              FileOffset: {
                locationName: 'fileOffset',
                type: 'double'
              },
              KantarLicenseId: {
                locationName: 'kantarLicenseId',
                type: 'integer'
              },
              KantarServerUrl: {
                locationName: 'kantarServerUrl'
              },
              LogDestination: {
                locationName: 'logDestination'
              },
              Metadata3: {
                locationName: 'metadata3'
              },
              Metadata4: {
                locationName: 'metadata4'
              },
              Metadata5: {
                locationName: 'metadata5'
              },
              Metadata6: {
                locationName: 'metadata6'
              },
              Metadata7: {
                locationName: 'metadata7'
              },
              Metadata8: {
                locationName: 'metadata8'
              }
            }
          },
          S40: {
            type: 'structure',
            members: {
              Framerate: {
                locationName: 'framerate',
                type: 'structure',
                members: {
                  FramerateDenominator: {
                    locationName: 'framerateDenominator',
                    type: 'integer'
                  },
                  FramerateNumerator: {
                    locationName: 'framerateNumerator',
                    type: 'integer'
                  }
                }
              },
              Input: {
                locationName: 'input'
              },
              InsertionMode: {
                locationName: 'insertionMode'
              },
              Offset: {
                locationName: 'offset',
                type: 'structure',
                members: {
                  ImageX: {
                    locationName: 'imageX',
                    type: 'integer'
                  },
                  ImageY: {
                    locationName: 'imageY',
                    type: 'integer'
                  }
                }
              },
              Playback: {
                locationName: 'playback'
              },
              StartTime: {
                locationName: 'startTime'
              }
            }
          },
          S48: {
            type: 'structure',
            members: {
              BreakoutCode: {
                locationName: 'breakoutCode',
                type: 'integer'
              },
              DistributorId: {
                locationName: 'distributorId'
              }
            }
          },
          S4a: {
            type: 'structure',
            members: {
              ActiveWatermarkProcess: {
                locationName: 'activeWatermarkProcess'
              },
              AdiFilename: {
                locationName: 'adiFilename'
              },
              AssetId: {
                locationName: 'assetId'
              },
              AssetName: {
                locationName: 'assetName'
              },
              CbetSourceId: {
                locationName: 'cbetSourceId'
              },
              EpisodeId: {
                locationName: 'episodeId'
              },
              MetadataDestination: {
                locationName: 'metadataDestination'
              },
              SourceId: {
                locationName: 'sourceId',
                type: 'integer'
              },
              SourceWatermarkStatus: {
                locationName: 'sourceWatermarkStatus'
              },
              TicServerUrl: {
                locationName: 'ticServerUrl'
              },
              UniqueTicPerAudioTrack: {
                locationName: 'uniqueTicPerAudioTrack'
              }
            }
          },
          S4h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AutomatedEncodingSettings: {
                  locationName: 'automatedEncodingSettings',
                  type: 'structure',
                  members: {
                    AbrSettings: {
                      locationName: 'abrSettings',
                      type: 'structure',
                      members: {
                        MaxAbrBitrate: {
                          locationName: 'maxAbrBitrate',
                          type: 'integer'
                        },
                        MaxRenditions: {
                          locationName: 'maxRenditions',
                          type: 'integer'
                        },
                        MinAbrBitrate: {
                          locationName: 'minAbrBitrate',
                          type: 'integer'
                        },
                        Rules: {
                          locationName: 'rules',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              AllowedRenditions: {
                                locationName: 'allowedRenditions',
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Height: {
                                      locationName: 'height',
                                      type: 'integer'
                                    },
                                    Required: {
                                      locationName: 'required'
                                    },
                                    Width: {
                                      locationName: 'width',
                                      type: 'integer'
                                    }
                                  }
                                }
                              },
                              ForceIncludeRenditions: {
                                locationName: 'forceIncludeRenditions',
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Height: {
                                      locationName: 'height',
                                      type: 'integer'
                                    },
                                    Width: {
                                      locationName: 'width',
                                      type: 'integer'
                                    }
                                  }
                                }
                              },
                              MinBottomRenditionSize: {
                                locationName: 'minBottomRenditionSize',
                                type: 'structure',
                                members: {
                                  Height: {
                                    locationName: 'height',
                                    type: 'integer'
                                  },
                                  Width: {
                                    locationName: 'width',
                                    type: 'integer'
                                  }
                                }
                              },
                              MinTopRenditionSize: {
                                locationName: 'minTopRenditionSize',
                                type: 'structure',
                                members: {
                                  Height: {
                                    locationName: 'height',
                                    type: 'integer'
                                  },
                                  Width: {
                                    locationName: 'width',
                                    type: 'integer'
                                  }
                                }
                              },
                              Type: {
                                locationName: 'type'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                CustomName: {
                  locationName: 'customName'
                },
                Name: {
                  locationName: 'name'
                },
                OutputGroupSettings: {
                  locationName: 'outputGroupSettings',
                  type: 'structure',
                  members: {
                    CmafGroupSettings: {
                      locationName: 'cmafGroupSettings',
                      type: 'structure',
                      members: {
                        AdditionalManifests: {
                          locationName: 'additionalManifests',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              ManifestNameModifier: {
                                locationName: 'manifestNameModifier'
                              },
                              SelectedOutputs: {
                                shape: 'S15',
                                locationName: 'selectedOutputs'
                              }
                            }
                          }
                        },
                        BaseUrl: {
                          locationName: 'baseUrl'
                        },
                        ClientCache: {
                          locationName: 'clientCache'
                        },
                        CodecSpecification: {
                          locationName: 'codecSpecification'
                        },
                        DashManifestStyle: {
                          locationName: 'dashManifestStyle'
                        },
                        Destination: {
                          locationName: 'destination'
                        },
                        DestinationSettings: {
                          shape: 'S55',
                          locationName: 'destinationSettings'
                        },
                        Encryption: {
                          locationName: 'encryption',
                          type: 'structure',
                          members: {
                            ConstantInitializationVector: {
                              locationName: 'constantInitializationVector'
                            },
                            EncryptionMethod: {
                              locationName: 'encryptionMethod'
                            },
                            InitializationVectorInManifest: {
                              locationName: 'initializationVectorInManifest'
                            },
                            SpekeKeyProvider: {
                              locationName: 'spekeKeyProvider',
                              type: 'structure',
                              members: {
                                CertificateArn: {
                                  locationName: 'certificateArn'
                                },
                                DashSignaledSystemIds: {
                                  shape: 'S5k',
                                  locationName: 'dashSignaledSystemIds'
                                },
                                HlsSignaledSystemIds: {
                                  shape: 'S5k',
                                  locationName: 'hlsSignaledSystemIds'
                                },
                                ResourceId: {
                                  locationName: 'resourceId'
                                },
                                Url: {
                                  locationName: 'url'
                                }
                              }
                            },
                            StaticKeyProvider: {
                              shape: 'S5o',
                              locationName: 'staticKeyProvider'
                            },
                            Type: {
                              locationName: 'type'
                            }
                          }
                        },
                        FragmentLength: {
                          locationName: 'fragmentLength',
                          type: 'integer'
                        },
                        ImageBasedTrickPlay: {
                          locationName: 'imageBasedTrickPlay'
                        },
                        ImageBasedTrickPlaySettings: {
                          locationName: 'imageBasedTrickPlaySettings',
                          type: 'structure',
                          members: {
                            IntervalCadence: {
                              locationName: 'intervalCadence'
                            },
                            ThumbnailHeight: {
                              locationName: 'thumbnailHeight',
                              type: 'integer'
                            },
                            ThumbnailInterval: {
                              locationName: 'thumbnailInterval',
                              type: 'double'
                            },
                            ThumbnailWidth: {
                              locationName: 'thumbnailWidth',
                              type: 'integer'
                            },
                            TileHeight: {
                              locationName: 'tileHeight',
                              type: 'integer'
                            },
                            TileWidth: {
                              locationName: 'tileWidth',
                              type: 'integer'
                            }
                          }
                        },
                        ManifestCompression: {
                          locationName: 'manifestCompression'
                        },
                        ManifestDurationFormat: {
                          locationName: 'manifestDurationFormat'
                        },
                        MinBufferTime: {
                          locationName: 'minBufferTime',
                          type: 'integer'
                        },
                        MinFinalSegmentLength: {
                          locationName: 'minFinalSegmentLength',
                          type: 'double'
                        },
                        MpdManifestBandwidthType: {
                          locationName: 'mpdManifestBandwidthType'
                        },
                        MpdProfile: {
                          locationName: 'mpdProfile'
                        },
                        PtsOffsetHandlingForBFrames: {
                          locationName: 'ptsOffsetHandlingForBFrames'
                        },
                        SegmentControl: {
                          locationName: 'segmentControl'
                        },
                        SegmentLength: {
                          locationName: 'segmentLength',
                          type: 'integer'
                        },
                        SegmentLengthControl: {
                          locationName: 'segmentLengthControl'
                        },
                        StreamInfResolution: {
                          locationName: 'streamInfResolution'
                        },
                        TargetDurationCompatibilityMode: {
                          locationName: 'targetDurationCompatibilityMode'
                        },
                        VideoCompositionOffsets: {
                          locationName: 'videoCompositionOffsets'
                        },
                        WriteDashManifest: {
                          locationName: 'writeDashManifest'
                        },
                        WriteHlsManifest: {
                          locationName: 'writeHlsManifest'
                        },
                        WriteSegmentTimelineInRepresentation: {
                          locationName: 'writeSegmentTimelineInRepresentation'
                        }
                      }
                    },
                    DashIsoGroupSettings: {
                      locationName: 'dashIsoGroupSettings',
                      type: 'structure',
                      members: {
                        AdditionalManifests: {
                          locationName: 'additionalManifests',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              ManifestNameModifier: {
                                locationName: 'manifestNameModifier'
                              },
                              SelectedOutputs: {
                                shape: 'S15',
                                locationName: 'selectedOutputs'
                              }
                            }
                          }
                        },
                        AudioChannelConfigSchemeIdUri: {
                          locationName: 'audioChannelConfigSchemeIdUri'
                        },
                        BaseUrl: {
                          locationName: 'baseUrl'
                        },
                        DashManifestStyle: {
                          locationName: 'dashManifestStyle'
                        },
                        Destination: {
                          locationName: 'destination'
                        },
                        DestinationSettings: {
                          shape: 'S55',
                          locationName: 'destinationSettings'
                        },
                        Encryption: {
                          locationName: 'encryption',
                          type: 'structure',
                          members: {
                            PlaybackDeviceCompatibility: {
                              locationName: 'playbackDeviceCompatibility'
                            },
                            SpekeKeyProvider: {
                              shape: 'S6k',
                              locationName: 'spekeKeyProvider'
                            }
                          }
                        },
                        FragmentLength: {
                          locationName: 'fragmentLength',
                          type: 'integer'
                        },
                        HbbtvCompliance: {
                          locationName: 'hbbtvCompliance'
                        },
                        ImageBasedTrickPlay: {
                          locationName: 'imageBasedTrickPlay'
                        },
                        ImageBasedTrickPlaySettings: {
                          locationName: 'imageBasedTrickPlaySettings',
                          type: 'structure',
                          members: {
                            IntervalCadence: {
                              locationName: 'intervalCadence'
                            },
                            ThumbnailHeight: {
                              locationName: 'thumbnailHeight',
                              type: 'integer'
                            },
                            ThumbnailInterval: {
                              locationName: 'thumbnailInterval',
                              type: 'double'
                            },
                            ThumbnailWidth: {
                              locationName: 'thumbnailWidth',
                              type: 'integer'
                            },
                            TileHeight: {
                              locationName: 'tileHeight',
                              type: 'integer'
                            },
                            TileWidth: {
                              locationName: 'tileWidth',
                              type: 'integer'
                            }
                          }
                        },
                        MinBufferTime: {
                          locationName: 'minBufferTime',
                          type: 'integer'
                        },
                        MinFinalSegmentLength: {
                          locationName: 'minFinalSegmentLength',
                          type: 'double'
                        },
                        MpdManifestBandwidthType: {
                          locationName: 'mpdManifestBandwidthType'
                        },
                        MpdProfile: {
                          locationName: 'mpdProfile'
                        },
                        PtsOffsetHandlingForBFrames: {
                          locationName: 'ptsOffsetHandlingForBFrames'
                        },
                        SegmentControl: {
                          locationName: 'segmentControl'
                        },
                        SegmentLength: {
                          locationName: 'segmentLength',
                          type: 'integer'
                        },
                        SegmentLengthControl: {
                          locationName: 'segmentLengthControl'
                        },
                        VideoCompositionOffsets: {
                          locationName: 'videoCompositionOffsets'
                        },
                        WriteSegmentTimelineInRepresentation: {
                          locationName: 'writeSegmentTimelineInRepresentation'
                        }
                      }
                    },
                    FileGroupSettings: {
                      locationName: 'fileGroupSettings',
                      type: 'structure',
                      members: {
                        Destination: {
                          locationName: 'destination'
                        },
                        DestinationSettings: {
                          shape: 'S55',
                          locationName: 'destinationSettings'
                        }
                      }
                    },
                    HlsGroupSettings: {
                      locationName: 'hlsGroupSettings',
                      type: 'structure',
                      members: {
                        AdMarkers: {
                          locationName: 'adMarkers',
                          type: 'list',
                          member: {}
                        },
                        AdditionalManifests: {
                          locationName: 'additionalManifests',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              ManifestNameModifier: {
                                locationName: 'manifestNameModifier'
                              },
                              SelectedOutputs: {
                                shape: 'S15',
                                locationName: 'selectedOutputs'
                              }
                            }
                          }
                        },
                        AudioOnlyHeader: {
                          locationName: 'audioOnlyHeader'
                        },
                        BaseUrl: {
                          locationName: 'baseUrl'
                        },
                        CaptionLanguageMappings: {
                          locationName: 'captionLanguageMappings',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              CaptionChannel: {
                                locationName: 'captionChannel',
                                type: 'integer'
                              },
                              CustomLanguageCode: {
                                locationName: 'customLanguageCode'
                              },
                              LanguageCode: {
                                locationName: 'languageCode'
                              },
                              LanguageDescription: {
                                locationName: 'languageDescription'
                              }
                            }
                          }
                        },
                        CaptionLanguageSetting: {
                          locationName: 'captionLanguageSetting'
                        },
                        CaptionSegmentLengthControl: {
                          locationName: 'captionSegmentLengthControl'
                        },
                        ClientCache: {
                          locationName: 'clientCache'
                        },
                        CodecSpecification: {
                          locationName: 'codecSpecification'
                        },
                        Destination: {
                          locationName: 'destination'
                        },
                        DestinationSettings: {
                          shape: 'S55',
                          locationName: 'destinationSettings'
                        },
                        DirectoryStructure: {
                          locationName: 'directoryStructure'
                        },
                        Encryption: {
                          locationName: 'encryption',
                          type: 'structure',
                          members: {
                            ConstantInitializationVector: {
                              locationName: 'constantInitializationVector'
                            },
                            EncryptionMethod: {
                              locationName: 'encryptionMethod'
                            },
                            InitializationVectorInManifest: {
                              locationName: 'initializationVectorInManifest'
                            },
                            OfflineEncrypted: {
                              locationName: 'offlineEncrypted'
                            },
                            SpekeKeyProvider: {
                              shape: 'S6k',
                              locationName: 'spekeKeyProvider'
                            },
                            StaticKeyProvider: {
                              shape: 'S5o',
                              locationName: 'staticKeyProvider'
                            },
                            Type: {
                              locationName: 'type'
                            }
                          }
                        },
                        ImageBasedTrickPlay: {
                          locationName: 'imageBasedTrickPlay'
                        },
                        ImageBasedTrickPlaySettings: {
                          locationName: 'imageBasedTrickPlaySettings',
                          type: 'structure',
                          members: {
                            IntervalCadence: {
                              locationName: 'intervalCadence'
                            },
                            ThumbnailHeight: {
                              locationName: 'thumbnailHeight',
                              type: 'integer'
                            },
                            ThumbnailInterval: {
                              locationName: 'thumbnailInterval',
                              type: 'double'
                            },
                            ThumbnailWidth: {
                              locationName: 'thumbnailWidth',
                              type: 'integer'
                            },
                            TileHeight: {
                              locationName: 'tileHeight',
                              type: 'integer'
                            },
                            TileWidth: {
                              locationName: 'tileWidth',
                              type: 'integer'
                            }
                          }
                        },
                        ManifestCompression: {
                          locationName: 'manifestCompression'
                        },
                        ManifestDurationFormat: {
                          locationName: 'manifestDurationFormat'
                        },
                        MinFinalSegmentLength: {
                          locationName: 'minFinalSegmentLength',
                          type: 'double'
                        },
                        MinSegmentLength: {
                          locationName: 'minSegmentLength',
                          type: 'integer'
                        },
                        OutputSelection: {
                          locationName: 'outputSelection'
                        },
                        ProgramDateTime: {
                          locationName: 'programDateTime'
                        },
                        ProgramDateTimePeriod: {
                          locationName: 'programDateTimePeriod',
                          type: 'integer'
                        },
                        ProgressiveWriteHlsManifest: {
                          locationName: 'progressiveWriteHlsManifest'
                        },
                        SegmentControl: {
                          locationName: 'segmentControl'
                        },
                        SegmentLength: {
                          locationName: 'segmentLength',
                          type: 'integer'
                        },
                        SegmentLengthControl: {
                          locationName: 'segmentLengthControl'
                        },
                        SegmentsPerSubdirectory: {
                          locationName: 'segmentsPerSubdirectory',
                          type: 'integer'
                        },
                        StreamInfResolution: {
                          locationName: 'streamInfResolution'
                        },
                        TargetDurationCompatibilityMode: {
                          locationName: 'targetDurationCompatibilityMode'
                        },
                        TimedMetadataId3Frame: {
                          locationName: 'timedMetadataId3Frame'
                        },
                        TimedMetadataId3Period: {
                          locationName: 'timedMetadataId3Period',
                          type: 'integer'
                        },
                        TimestampDeltaMilliseconds: {
                          locationName: 'timestampDeltaMilliseconds',
                          type: 'integer'
                        }
                      }
                    },
                    MsSmoothGroupSettings: {
                      locationName: 'msSmoothGroupSettings',
                      type: 'structure',
                      members: {
                        AdditionalManifests: {
                          locationName: 'additionalManifests',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              ManifestNameModifier: {
                                locationName: 'manifestNameModifier'
                              },
                              SelectedOutputs: {
                                shape: 'S15',
                                locationName: 'selectedOutputs'
                              }
                            }
                          }
                        },
                        AudioDeduplication: {
                          locationName: 'audioDeduplication'
                        },
                        Destination: {
                          locationName: 'destination'
                        },
                        DestinationSettings: {
                          shape: 'S55',
                          locationName: 'destinationSettings'
                        },
                        Encryption: {
                          locationName: 'encryption',
                          type: 'structure',
                          members: {
                            SpekeKeyProvider: {
                              shape: 'S6k',
                              locationName: 'spekeKeyProvider'
                            }
                          }
                        },
                        FragmentLength: {
                          locationName: 'fragmentLength',
                          type: 'integer'
                        },
                        FragmentLengthControl: {
                          locationName: 'fragmentLengthControl'
                        },
                        ManifestEncoding: {
                          locationName: 'manifestEncoding'
                        }
                      }
                    },
                    Type: {
                      locationName: 'type'
                    }
                  }
                },
                Outputs: {
                  locationName: 'outputs',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AudioDescriptions: {
                        shape: 'S86',
                        locationName: 'audioDescriptions'
                      },
                      CaptionDescriptions: {
                        locationName: 'captionDescriptions',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            CaptionSelectorName: {
                              locationName: 'captionSelectorName'
                            },
                            CustomLanguageCode: {
                              locationName: 'customLanguageCode'
                            },
                            DestinationSettings: {
                              shape: 'Sau',
                              locationName: 'destinationSettings'
                            },
                            LanguageCode: {
                              locationName: 'languageCode'
                            },
                            LanguageDescription: {
                              locationName: 'languageDescription'
                            }
                          }
                        }
                      },
                      ContainerSettings: {
                        shape: 'Sc5',
                        locationName: 'containerSettings'
                      },
                      Extension: {
                        locationName: 'extension'
                      },
                      NameModifier: {
                        locationName: 'nameModifier'
                      },
                      OutputSettings: {
                        locationName: 'outputSettings',
                        type: 'structure',
                        members: {
                          HlsSettings: {
                            locationName: 'hlsSettings',
                            type: 'structure',
                            members: {
                              AudioGroupId: {
                                locationName: 'audioGroupId'
                              },
                              AudioOnlyContainer: {
                                locationName: 'audioOnlyContainer'
                              },
                              AudioRenditionSets: {
                                locationName: 'audioRenditionSets'
                              },
                              AudioTrackType: {
                                locationName: 'audioTrackType'
                              },
                              DescriptiveVideoServiceFlag: {
                                locationName: 'descriptiveVideoServiceFlag'
                              },
                              IFrameOnlyManifest: {
                                locationName: 'iFrameOnlyManifest'
                              },
                              SegmentModifier: {
                                locationName: 'segmentModifier'
                              }
                            }
                          }
                        }
                      },
                      Preset: {
                        locationName: 'preset'
                      },
                      VideoDescription: {
                        shape: 'Sel',
                        locationName: 'videoDescription'
                      }
                    }
                  }
                }
              }
            }
          },
          S55: {
            type: 'structure',
            members: {
              S3Settings: {
                locationName: 's3Settings',
                type: 'structure',
                members: {
                  AccessControl: {
                    locationName: 'accessControl',
                    type: 'structure',
                    members: {
                      CannedAcl: {
                        locationName: 'cannedAcl'
                      }
                    }
                  },
                  Encryption: {
                    locationName: 'encryption',
                    type: 'structure',
                    members: {
                      EncryptionType: {
                        locationName: 'encryptionType'
                      },
                      KmsEncryptionContext: {
                        locationName: 'kmsEncryptionContext'
                      },
                      KmsKeyArn: {
                        locationName: 'kmsKeyArn'
                      }
                    }
                  },
                  StorageClass: {
                    locationName: 'storageClass'
                  }
                }
              }
            }
          },
          S5k: {
            type: 'list',
            member: {}
          },
          S5o: {
            type: 'structure',
            members: {
              KeyFormat: {
                locationName: 'keyFormat'
              },
              KeyFormatVersions: {
                locationName: 'keyFormatVersions'
              },
              StaticKeyValue: {
                locationName: 'staticKeyValue'
              },
              Url: {
                locationName: 'url'
              }
            }
          },
          S6k: {
            type: 'structure',
            members: {
              CertificateArn: {
                locationName: 'certificateArn'
              },
              ResourceId: {
                locationName: 'resourceId'
              },
              SystemIds: {
                locationName: 'systemIds',
                type: 'list',
                member: {}
              },
              Url: {
                locationName: 'url'
              }
            }
          },
          S86: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AudioChannelTaggingSettings: {
                  locationName: 'audioChannelTaggingSettings',
                  type: 'structure',
                  members: {
                    ChannelTag: {
                      locationName: 'channelTag'
                    },
                    ChannelTags: {
                      locationName: 'channelTags',
                      type: 'list',
                      member: {}
                    }
                  }
                },
                AudioNormalizationSettings: {
                  locationName: 'audioNormalizationSettings',
                  type: 'structure',
                  members: {
                    Algorithm: {
                      locationName: 'algorithm'
                    },
                    AlgorithmControl: {
                      locationName: 'algorithmControl'
                    },
                    CorrectionGateLevel: {
                      locationName: 'correctionGateLevel',
                      type: 'integer'
                    },
                    LoudnessLogging: {
                      locationName: 'loudnessLogging'
                    },
                    PeakCalculation: {
                      locationName: 'peakCalculation'
                    },
                    TargetLkfs: {
                      locationName: 'targetLkfs',
                      type: 'double'
                    },
                    TruePeakLimiterThreshold: {
                      locationName: 'truePeakLimiterThreshold',
                      type: 'double'
                    }
                  }
                },
                AudioSourceName: {
                  locationName: 'audioSourceName'
                },
                AudioType: {
                  locationName: 'audioType',
                  type: 'integer'
                },
                AudioTypeControl: {
                  locationName: 'audioTypeControl'
                },
                CodecSettings: {
                  locationName: 'codecSettings',
                  type: 'structure',
                  members: {
                    AacSettings: {
                      locationName: 'aacSettings',
                      type: 'structure',
                      members: {
                        AudioDescriptionBroadcasterMix: {
                          locationName: 'audioDescriptionBroadcasterMix'
                        },
                        Bitrate: {
                          locationName: 'bitrate',
                          type: 'integer'
                        },
                        CodecProfile: {
                          locationName: 'codecProfile'
                        },
                        CodingMode: {
                          locationName: 'codingMode'
                        },
                        RateControlMode: {
                          locationName: 'rateControlMode'
                        },
                        RawFormat: {
                          locationName: 'rawFormat'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        },
                        Specification: {
                          locationName: 'specification'
                        },
                        VbrQuality: {
                          locationName: 'vbrQuality'
                        }
                      }
                    },
                    Ac3Settings: {
                      locationName: 'ac3Settings',
                      type: 'structure',
                      members: {
                        Bitrate: {
                          locationName: 'bitrate',
                          type: 'integer'
                        },
                        BitstreamMode: {
                          locationName: 'bitstreamMode'
                        },
                        CodingMode: {
                          locationName: 'codingMode'
                        },
                        Dialnorm: {
                          locationName: 'dialnorm',
                          type: 'integer'
                        },
                        DynamicRangeCompressionLine: {
                          locationName: 'dynamicRangeCompressionLine'
                        },
                        DynamicRangeCompressionProfile: {
                          locationName: 'dynamicRangeCompressionProfile'
                        },
                        DynamicRangeCompressionRf: {
                          locationName: 'dynamicRangeCompressionRf'
                        },
                        LfeFilter: {
                          locationName: 'lfeFilter'
                        },
                        MetadataControl: {
                          locationName: 'metadataControl'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        }
                      }
                    },
                    AiffSettings: {
                      locationName: 'aiffSettings',
                      type: 'structure',
                      members: {
                        BitDepth: {
                          locationName: 'bitDepth',
                          type: 'integer'
                        },
                        Channels: {
                          locationName: 'channels',
                          type: 'integer'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        }
                      }
                    },
                    Codec: {
                      locationName: 'codec'
                    },
                    Eac3AtmosSettings: {
                      locationName: 'eac3AtmosSettings',
                      type: 'structure',
                      members: {
                        Bitrate: {
                          locationName: 'bitrate',
                          type: 'integer'
                        },
                        BitstreamMode: {
                          locationName: 'bitstreamMode'
                        },
                        CodingMode: {
                          locationName: 'codingMode'
                        },
                        DialogueIntelligence: {
                          locationName: 'dialogueIntelligence'
                        },
                        DownmixControl: {
                          locationName: 'downmixControl'
                        },
                        DynamicRangeCompressionLine: {
                          locationName: 'dynamicRangeCompressionLine'
                        },
                        DynamicRangeCompressionRf: {
                          locationName: 'dynamicRangeCompressionRf'
                        },
                        DynamicRangeControl: {
                          locationName: 'dynamicRangeControl'
                        },
                        LoRoCenterMixLevel: {
                          locationName: 'loRoCenterMixLevel',
                          type: 'double'
                        },
                        LoRoSurroundMixLevel: {
                          locationName: 'loRoSurroundMixLevel',
                          type: 'double'
                        },
                        LtRtCenterMixLevel: {
                          locationName: 'ltRtCenterMixLevel',
                          type: 'double'
                        },
                        LtRtSurroundMixLevel: {
                          locationName: 'ltRtSurroundMixLevel',
                          type: 'double'
                        },
                        MeteringMode: {
                          locationName: 'meteringMode'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        },
                        SpeechThreshold: {
                          locationName: 'speechThreshold',
                          type: 'integer'
                        },
                        StereoDownmix: {
                          locationName: 'stereoDownmix'
                        },
                        SurroundExMode: {
                          locationName: 'surroundExMode'
                        }
                      }
                    },
                    Eac3Settings: {
                      locationName: 'eac3Settings',
                      type: 'structure',
                      members: {
                        AttenuationControl: {
                          locationName: 'attenuationControl'
                        },
                        Bitrate: {
                          locationName: 'bitrate',
                          type: 'integer'
                        },
                        BitstreamMode: {
                          locationName: 'bitstreamMode'
                        },
                        CodingMode: {
                          locationName: 'codingMode'
                        },
                        DcFilter: {
                          locationName: 'dcFilter'
                        },
                        Dialnorm: {
                          locationName: 'dialnorm',
                          type: 'integer'
                        },
                        DynamicRangeCompressionLine: {
                          locationName: 'dynamicRangeCompressionLine'
                        },
                        DynamicRangeCompressionRf: {
                          locationName: 'dynamicRangeCompressionRf'
                        },
                        LfeControl: {
                          locationName: 'lfeControl'
                        },
                        LfeFilter: {
                          locationName: 'lfeFilter'
                        },
                        LoRoCenterMixLevel: {
                          locationName: 'loRoCenterMixLevel',
                          type: 'double'
                        },
                        LoRoSurroundMixLevel: {
                          locationName: 'loRoSurroundMixLevel',
                          type: 'double'
                        },
                        LtRtCenterMixLevel: {
                          locationName: 'ltRtCenterMixLevel',
                          type: 'double'
                        },
                        LtRtSurroundMixLevel: {
                          locationName: 'ltRtSurroundMixLevel',
                          type: 'double'
                        },
                        MetadataControl: {
                          locationName: 'metadataControl'
                        },
                        PassthroughControl: {
                          locationName: 'passthroughControl'
                        },
                        PhaseControl: {
                          locationName: 'phaseControl'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        },
                        StereoDownmix: {
                          locationName: 'stereoDownmix'
                        },
                        SurroundExMode: {
                          locationName: 'surroundExMode'
                        },
                        SurroundMode: {
                          locationName: 'surroundMode'
                        }
                      }
                    },
                    FlacSettings: {
                      locationName: 'flacSettings',
                      type: 'structure',
                      members: {
                        BitDepth: {
                          locationName: 'bitDepth',
                          type: 'integer'
                        },
                        Channels: {
                          locationName: 'channels',
                          type: 'integer'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        }
                      }
                    },
                    Mp2Settings: {
                      locationName: 'mp2Settings',
                      type: 'structure',
                      members: {
                        Bitrate: {
                          locationName: 'bitrate',
                          type: 'integer'
                        },
                        Channels: {
                          locationName: 'channels',
                          type: 'integer'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        }
                      }
                    },
                    Mp3Settings: {
                      locationName: 'mp3Settings',
                      type: 'structure',
                      members: {
                        Bitrate: {
                          locationName: 'bitrate',
                          type: 'integer'
                        },
                        Channels: {
                          locationName: 'channels',
                          type: 'integer'
                        },
                        RateControlMode: {
                          locationName: 'rateControlMode'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        },
                        VbrQuality: {
                          locationName: 'vbrQuality',
                          type: 'integer'
                        }
                      }
                    },
                    OpusSettings: {
                      locationName: 'opusSettings',
                      type: 'structure',
                      members: {
                        Bitrate: {
                          locationName: 'bitrate',
                          type: 'integer'
                        },
                        Channels: {
                          locationName: 'channels',
                          type: 'integer'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        }
                      }
                    },
                    VorbisSettings: {
                      locationName: 'vorbisSettings',
                      type: 'structure',
                      members: {
                        Channels: {
                          locationName: 'channels',
                          type: 'integer'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        },
                        VbrQuality: {
                          locationName: 'vbrQuality',
                          type: 'integer'
                        }
                      }
                    },
                    WavSettings: {
                      locationName: 'wavSettings',
                      type: 'structure',
                      members: {
                        BitDepth: {
                          locationName: 'bitDepth',
                          type: 'integer'
                        },
                        Channels: {
                          locationName: 'channels',
                          type: 'integer'
                        },
                        Format: {
                          locationName: 'format'
                        },
                        SampleRate: {
                          locationName: 'sampleRate',
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                CustomLanguageCode: {
                  locationName: 'customLanguageCode'
                },
                LanguageCode: {
                  locationName: 'languageCode'
                },
                LanguageCodeControl: {
                  locationName: 'languageCodeControl'
                },
                RemixSettings: {
                  shape: 'S1j',
                  locationName: 'remixSettings'
                },
                StreamName: {
                  locationName: 'streamName'
                }
              }
            }
          },
          Sau: {
            type: 'structure',
            members: {
              BurninDestinationSettings: {
                locationName: 'burninDestinationSettings',
                type: 'structure',
                members: {
                  Alignment: {
                    locationName: 'alignment'
                  },
                  ApplyFontColor: {
                    locationName: 'applyFontColor'
                  },
                  BackgroundColor: {
                    locationName: 'backgroundColor'
                  },
                  BackgroundOpacity: {
                    locationName: 'backgroundOpacity',
                    type: 'integer'
                  },
                  FallbackFont: {
                    locationName: 'fallbackFont'
                  },
                  FontColor: {
                    locationName: 'fontColor'
                  },
                  FontFileBold: {
                    locationName: 'fontFileBold'
                  },
                  FontFileBoldItalic: {
                    locationName: 'fontFileBoldItalic'
                  },
                  FontFileItalic: {
                    locationName: 'fontFileItalic'
                  },
                  FontFileRegular: {
                    locationName: 'fontFileRegular'
                  },
                  FontOpacity: {
                    locationName: 'fontOpacity',
                    type: 'integer'
                  },
                  FontResolution: {
                    locationName: 'fontResolution',
                    type: 'integer'
                  },
                  FontScript: {
                    locationName: 'fontScript'
                  },
                  FontSize: {
                    locationName: 'fontSize',
                    type: 'integer'
                  },
                  HexFontColor: {
                    locationName: 'hexFontColor'
                  },
                  OutlineColor: {
                    locationName: 'outlineColor'
                  },
                  OutlineSize: {
                    locationName: 'outlineSize',
                    type: 'integer'
                  },
                  ShadowColor: {
                    locationName: 'shadowColor'
                  },
                  ShadowOpacity: {
                    locationName: 'shadowOpacity',
                    type: 'integer'
                  },
                  ShadowXOffset: {
                    locationName: 'shadowXOffset',
                    type: 'integer'
                  },
                  ShadowYOffset: {
                    locationName: 'shadowYOffset',
                    type: 'integer'
                  },
                  StylePassthrough: {
                    locationName: 'stylePassthrough'
                  },
                  TeletextSpacing: {
                    locationName: 'teletextSpacing'
                  },
                  XPosition: {
                    locationName: 'xPosition',
                    type: 'integer'
                  },
                  YPosition: {
                    locationName: 'yPosition',
                    type: 'integer'
                  }
                }
              },
              DestinationType: {
                locationName: 'destinationType'
              },
              DvbSubDestinationSettings: {
                locationName: 'dvbSubDestinationSettings',
                type: 'structure',
                members: {
                  Alignment: {
                    locationName: 'alignment'
                  },
                  ApplyFontColor: {
                    locationName: 'applyFontColor'
                  },
                  BackgroundColor: {
                    locationName: 'backgroundColor'
                  },
                  BackgroundOpacity: {
                    locationName: 'backgroundOpacity',
                    type: 'integer'
                  },
                  DdsHandling: {
                    locationName: 'ddsHandling'
                  },
                  DdsXCoordinate: {
                    locationName: 'ddsXCoordinate',
                    type: 'integer'
                  },
                  DdsYCoordinate: {
                    locationName: 'ddsYCoordinate',
                    type: 'integer'
                  },
                  FallbackFont: {
                    locationName: 'fallbackFont'
                  },
                  FontColor: {
                    locationName: 'fontColor'
                  },
                  FontFileBold: {
                    locationName: 'fontFileBold'
                  },
                  FontFileBoldItalic: {
                    locationName: 'fontFileBoldItalic'
                  },
                  FontFileItalic: {
                    locationName: 'fontFileItalic'
                  },
                  FontFileRegular: {
                    locationName: 'fontFileRegular'
                  },
                  FontOpacity: {
                    locationName: 'fontOpacity',
                    type: 'integer'
                  },
                  FontResolution: {
                    locationName: 'fontResolution',
                    type: 'integer'
                  },
                  FontScript: {
                    locationName: 'fontScript'
                  },
                  FontSize: {
                    locationName: 'fontSize',
                    type: 'integer'
                  },
                  Height: {
                    locationName: 'height',
                    type: 'integer'
                  },
                  HexFontColor: {
                    locationName: 'hexFontColor'
                  },
                  OutlineColor: {
                    locationName: 'outlineColor'
                  },
                  OutlineSize: {
                    locationName: 'outlineSize',
                    type: 'integer'
                  },
                  ShadowColor: {
                    locationName: 'shadowColor'
                  },
                  ShadowOpacity: {
                    locationName: 'shadowOpacity',
                    type: 'integer'
                  },
                  ShadowXOffset: {
                    locationName: 'shadowXOffset',
                    type: 'integer'
                  },
                  ShadowYOffset: {
                    locationName: 'shadowYOffset',
                    type: 'integer'
                  },
                  StylePassthrough: {
                    locationName: 'stylePassthrough'
                  },
                  SubtitlingType: {
                    locationName: 'subtitlingType'
                  },
                  TeletextSpacing: {
                    locationName: 'teletextSpacing'
                  },
                  Width: {
                    locationName: 'width',
                    type: 'integer'
                  },
                  XPosition: {
                    locationName: 'xPosition',
                    type: 'integer'
                  },
                  YPosition: {
                    locationName: 'yPosition',
                    type: 'integer'
                  }
                }
              },
              EmbeddedDestinationSettings: {
                locationName: 'embeddedDestinationSettings',
                type: 'structure',
                members: {
                  Destination608ChannelNumber: {
                    locationName: 'destination608ChannelNumber',
                    type: 'integer'
                  },
                  Destination708ServiceNumber: {
                    locationName: 'destination708ServiceNumber',
                    type: 'integer'
                  }
                }
              },
              ImscDestinationSettings: {
                locationName: 'imscDestinationSettings',
                type: 'structure',
                members: {
                  Accessibility: {
                    locationName: 'accessibility'
                  },
                  StylePassthrough: {
                    locationName: 'stylePassthrough'
                  }
                }
              },
              SccDestinationSettings: {
                locationName: 'sccDestinationSettings',
                type: 'structure',
                members: {
                  Framerate: {
                    locationName: 'framerate'
                  }
                }
              },
              SrtDestinationSettings: {
                locationName: 'srtDestinationSettings',
                type: 'structure',
                members: {
                  StylePassthrough: {
                    locationName: 'stylePassthrough'
                  }
                }
              },
              TeletextDestinationSettings: {
                locationName: 'teletextDestinationSettings',
                type: 'structure',
                members: {
                  PageNumber: {
                    locationName: 'pageNumber'
                  },
                  PageTypes: {
                    locationName: 'pageTypes',
                    type: 'list',
                    member: {}
                  }
                }
              },
              TtmlDestinationSettings: {
                locationName: 'ttmlDestinationSettings',
                type: 'structure',
                members: {
                  StylePassthrough: {
                    locationName: 'stylePassthrough'
                  }
                }
              },
              WebvttDestinationSettings: {
                locationName: 'webvttDestinationSettings',
                type: 'structure',
                members: {
                  Accessibility: {
                    locationName: 'accessibility'
                  },
                  StylePassthrough: {
                    locationName: 'stylePassthrough'
                  }
                }
              }
            }
          },
          Sc5: {
            type: 'structure',
            members: {
              CmfcSettings: {
                locationName: 'cmfcSettings',
                type: 'structure',
                members: {
                  AudioDuration: {
                    locationName: 'audioDuration'
                  },
                  AudioGroupId: {
                    locationName: 'audioGroupId'
                  },
                  AudioRenditionSets: {
                    locationName: 'audioRenditionSets'
                  },
                  AudioTrackType: {
                    locationName: 'audioTrackType'
                  },
                  DescriptiveVideoServiceFlag: {
                    locationName: 'descriptiveVideoServiceFlag'
                  },
                  IFrameOnlyManifest: {
                    locationName: 'iFrameOnlyManifest'
                  },
                  KlvMetadata: {
                    locationName: 'klvMetadata'
                  },
                  ManifestMetadataSignaling: {
                    locationName: 'manifestMetadataSignaling'
                  },
                  Scte35Esam: {
                    locationName: 'scte35Esam'
                  },
                  Scte35Source: {
                    locationName: 'scte35Source'
                  },
                  TimedMetadata: {
                    locationName: 'timedMetadata'
                  },
                  TimedMetadataBoxVersion: {
                    locationName: 'timedMetadataBoxVersion'
                  },
                  TimedMetadataSchemeIdUri: {
                    locationName: 'timedMetadataSchemeIdUri'
                  },
                  TimedMetadataValue: {
                    locationName: 'timedMetadataValue'
                  }
                }
              },
              Container: {
                locationName: 'container'
              },
              F4vSettings: {
                locationName: 'f4vSettings',
                type: 'structure',
                members: {
                  MoovPlacement: {
                    locationName: 'moovPlacement'
                  }
                }
              },
              M2tsSettings: {
                locationName: 'm2tsSettings',
                type: 'structure',
                members: {
                  AudioBufferModel: {
                    locationName: 'audioBufferModel'
                  },
                  AudioDuration: {
                    locationName: 'audioDuration'
                  },
                  AudioFramesPerPes: {
                    locationName: 'audioFramesPerPes',
                    type: 'integer'
                  },
                  AudioPids: {
                    shape: 'Sco',
                    locationName: 'audioPids'
                  },
                  Bitrate: {
                    locationName: 'bitrate',
                    type: 'integer'
                  },
                  BufferModel: {
                    locationName: 'bufferModel'
                  },
                  DataPTSControl: {
                    locationName: 'dataPTSControl'
                  },
                  DvbNitSettings: {
                    locationName: 'dvbNitSettings',
                    type: 'structure',
                    members: {
                      NetworkId: {
                        locationName: 'networkId',
                        type: 'integer'
                      },
                      NetworkName: {
                        locationName: 'networkName'
                      },
                      NitInterval: {
                        locationName: 'nitInterval',
                        type: 'integer'
                      }
                    }
                  },
                  DvbSdtSettings: {
                    locationName: 'dvbSdtSettings',
                    type: 'structure',
                    members: {
                      OutputSdt: {
                        locationName: 'outputSdt'
                      },
                      SdtInterval: {
                        locationName: 'sdtInterval',
                        type: 'integer'
                      },
                      ServiceName: {
                        locationName: 'serviceName'
                      },
                      ServiceProviderName: {
                        locationName: 'serviceProviderName'
                      }
                    }
                  },
                  DvbSubPids: {
                    shape: 'Sco',
                    locationName: 'dvbSubPids'
                  },
                  DvbTdtSettings: {
                    locationName: 'dvbTdtSettings',
                    type: 'structure',
                    members: {
                      TdtInterval: {
                        locationName: 'tdtInterval',
                        type: 'integer'
                      }
                    }
                  },
                  DvbTeletextPid: {
                    locationName: 'dvbTeletextPid',
                    type: 'integer'
                  },
                  EbpAudioInterval: {
                    locationName: 'ebpAudioInterval'
                  },
                  EbpPlacement: {
                    locationName: 'ebpPlacement'
                  },
                  EsRateInPes: {
                    locationName: 'esRateInPes'
                  },
                  ForceTsVideoEbpOrder: {
                    locationName: 'forceTsVideoEbpOrder'
                  },
                  FragmentTime: {
                    locationName: 'fragmentTime',
                    type: 'double'
                  },
                  KlvMetadata: {
                    locationName: 'klvMetadata'
                  },
                  MaxPcrInterval: {
                    locationName: 'maxPcrInterval',
                    type: 'integer'
                  },
                  MinEbpInterval: {
                    locationName: 'minEbpInterval',
                    type: 'integer'
                  },
                  NielsenId3: {
                    locationName: 'nielsenId3'
                  },
                  NullPacketBitrate: {
                    locationName: 'nullPacketBitrate',
                    type: 'double'
                  },
                  PatInterval: {
                    locationName: 'patInterval',
                    type: 'integer'
                  },
                  PcrControl: {
                    locationName: 'pcrControl'
                  },
                  PcrPid: {
                    locationName: 'pcrPid',
                    type: 'integer'
                  },
                  PmtInterval: {
                    locationName: 'pmtInterval',
                    type: 'integer'
                  },
                  PmtPid: {
                    locationName: 'pmtPid',
                    type: 'integer'
                  },
                  PreventBufferUnderflow: {
                    locationName: 'preventBufferUnderflow'
                  },
                  PrivateMetadataPid: {
                    locationName: 'privateMetadataPid',
                    type: 'integer'
                  },
                  ProgramNumber: {
                    locationName: 'programNumber',
                    type: 'integer'
                  },
                  PtsOffset: {
                    locationName: 'ptsOffset',
                    type: 'integer'
                  },
                  PtsOffsetMode: {
                    locationName: 'ptsOffsetMode'
                  },
                  RateMode: {
                    locationName: 'rateMode'
                  },
                  Scte35Esam: {
                    locationName: 'scte35Esam',
                    type: 'structure',
                    members: {
                      Scte35EsamPid: {
                        locationName: 'scte35EsamPid',
                        type: 'integer'
                      }
                    }
                  },
                  Scte35Pid: {
                    locationName: 'scte35Pid',
                    type: 'integer'
                  },
                  Scte35Source: {
                    locationName: 'scte35Source'
                  },
                  SegmentationMarkers: {
                    locationName: 'segmentationMarkers'
                  },
                  SegmentationStyle: {
                    locationName: 'segmentationStyle'
                  },
                  SegmentationTime: {
                    locationName: 'segmentationTime',
                    type: 'double'
                  },
                  TimedMetadataPid: {
                    locationName: 'timedMetadataPid',
                    type: 'integer'
                  },
                  TransportStreamId: {
                    locationName: 'transportStreamId',
                    type: 'integer'
                  },
                  VideoPid: {
                    locationName: 'videoPid',
                    type: 'integer'
                  }
                }
              },
              M3u8Settings: {
                locationName: 'm3u8Settings',
                type: 'structure',
                members: {
                  AudioDuration: {
                    locationName: 'audioDuration'
                  },
                  AudioFramesPerPes: {
                    locationName: 'audioFramesPerPes',
                    type: 'integer'
                  },
                  AudioPids: {
                    shape: 'Sco',
                    locationName: 'audioPids'
                  },
                  DataPTSControl: {
                    locationName: 'dataPTSControl'
                  },
                  MaxPcrInterval: {
                    locationName: 'maxPcrInterval',
                    type: 'integer'
                  },
                  NielsenId3: {
                    locationName: 'nielsenId3'
                  },
                  PatInterval: {
                    locationName: 'patInterval',
                    type: 'integer'
                  },
                  PcrControl: {
                    locationName: 'pcrControl'
                  },
                  PcrPid: {
                    locationName: 'pcrPid',
                    type: 'integer'
                  },
                  PmtInterval: {
                    locationName: 'pmtInterval',
                    type: 'integer'
                  },
                  PmtPid: {
                    locationName: 'pmtPid',
                    type: 'integer'
                  },
                  PrivateMetadataPid: {
                    locationName: 'privateMetadataPid',
                    type: 'integer'
                  },
                  ProgramNumber: {
                    locationName: 'programNumber',
                    type: 'integer'
                  },
                  PtsOffset: {
                    locationName: 'ptsOffset',
                    type: 'integer'
                  },
                  PtsOffsetMode: {
                    locationName: 'ptsOffsetMode'
                  },
                  Scte35Pid: {
                    locationName: 'scte35Pid',
                    type: 'integer'
                  },
                  Scte35Source: {
                    locationName: 'scte35Source'
                  },
                  TimedMetadata: {
                    locationName: 'timedMetadata'
                  },
                  TimedMetadataPid: {
                    locationName: 'timedMetadataPid',
                    type: 'integer'
                  },
                  TransportStreamId: {
                    locationName: 'transportStreamId',
                    type: 'integer'
                  },
                  VideoPid: {
                    locationName: 'videoPid',
                    type: 'integer'
                  }
                }
              },
              MovSettings: {
                locationName: 'movSettings',
                type: 'structure',
                members: {
                  ClapAtom: {
                    locationName: 'clapAtom'
                  },
                  CslgAtom: {
                    locationName: 'cslgAtom'
                  },
                  Mpeg2FourCCControl: {
                    locationName: 'mpeg2FourCCControl'
                  },
                  PaddingControl: {
                    locationName: 'paddingControl'
                  },
                  Reference: {
                    locationName: 'reference'
                  }
                }
              },
              Mp4Settings: {
                locationName: 'mp4Settings',
                type: 'structure',
                members: {
                  AudioDuration: {
                    locationName: 'audioDuration'
                  },
                  CslgAtom: {
                    locationName: 'cslgAtom'
                  },
                  CttsVersion: {
                    locationName: 'cttsVersion',
                    type: 'integer'
                  },
                  FreeSpaceBox: {
                    locationName: 'freeSpaceBox'
                  },
                  MoovPlacement: {
                    locationName: 'moovPlacement'
                  },
                  Mp4MajorBrand: {
                    locationName: 'mp4MajorBrand'
                  }
                }
              },
              MpdSettings: {
                locationName: 'mpdSettings',
                type: 'structure',
                members: {
                  AccessibilityCaptionHints: {
                    locationName: 'accessibilityCaptionHints'
                  },
                  AudioDuration: {
                    locationName: 'audioDuration'
                  },
                  CaptionContainerType: {
                    locationName: 'captionContainerType'
                  },
                  KlvMetadata: {
                    locationName: 'klvMetadata'
                  },
                  ManifestMetadataSignaling: {
                    locationName: 'manifestMetadataSignaling'
                  },
                  Scte35Esam: {
                    locationName: 'scte35Esam'
                  },
                  Scte35Source: {
                    locationName: 'scte35Source'
                  },
                  TimedMetadata: {
                    locationName: 'timedMetadata'
                  },
                  TimedMetadataBoxVersion: {
                    locationName: 'timedMetadataBoxVersion'
                  },
                  TimedMetadataSchemeIdUri: {
                    locationName: 'timedMetadataSchemeIdUri'
                  },
                  TimedMetadataValue: {
                    locationName: 'timedMetadataValue'
                  }
                }
              },
              MxfSettings: {
                locationName: 'mxfSettings',
                type: 'structure',
                members: {
                  AfdSignaling: {
                    locationName: 'afdSignaling'
                  },
                  Profile: {
                    locationName: 'profile'
                  },
                  XavcProfileSettings: {
                    locationName: 'xavcProfileSettings',
                    type: 'structure',
                    members: {
                      DurationMode: {
                        locationName: 'durationMode'
                      },
                      MaxAncDataSize: {
                        locationName: 'maxAncDataSize',
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          Sco: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          Sel: {
            type: 'structure',
            members: {
              AfdSignaling: {
                locationName: 'afdSignaling'
              },
              AntiAlias: {
                locationName: 'antiAlias'
              },
              CodecSettings: {
                locationName: 'codecSettings',
                type: 'structure',
                members: {
                  Av1Settings: {
                    locationName: 'av1Settings',
                    type: 'structure',
                    members: {
                      AdaptiveQuantization: {
                        locationName: 'adaptiveQuantization'
                      },
                      BitDepth: {
                        locationName: 'bitDepth'
                      },
                      FilmGrainSynthesis: {
                        locationName: 'filmGrainSynthesis'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      GopSize: {
                        locationName: 'gopSize',
                        type: 'double'
                      },
                      MaxBitrate: {
                        locationName: 'maxBitrate',
                        type: 'integer'
                      },
                      NumberBFramesBetweenReferenceFrames: {
                        locationName: 'numberBFramesBetweenReferenceFrames',
                        type: 'integer'
                      },
                      QvbrSettings: {
                        locationName: 'qvbrSettings',
                        type: 'structure',
                        members: {
                          QvbrQualityLevel: {
                            locationName: 'qvbrQualityLevel',
                            type: 'integer'
                          },
                          QvbrQualityLevelFineTune: {
                            locationName: 'qvbrQualityLevelFineTune',
                            type: 'double'
                          }
                        }
                      },
                      RateControlMode: {
                        locationName: 'rateControlMode'
                      },
                      Slices: {
                        locationName: 'slices',
                        type: 'integer'
                      },
                      SpatialAdaptiveQuantization: {
                        locationName: 'spatialAdaptiveQuantization'
                      }
                    }
                  },
                  AvcIntraSettings: {
                    locationName: 'avcIntraSettings',
                    type: 'structure',
                    members: {
                      AvcIntraClass: {
                        locationName: 'avcIntraClass'
                      },
                      AvcIntraUhdSettings: {
                        locationName: 'avcIntraUhdSettings',
                        type: 'structure',
                        members: {
                          QualityTuningLevel: {
                            locationName: 'qualityTuningLevel'
                          }
                        }
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      InterlaceMode: {
                        locationName: 'interlaceMode'
                      },
                      ScanTypeConversionMode: {
                        locationName: 'scanTypeConversionMode'
                      },
                      SlowPal: {
                        locationName: 'slowPal'
                      },
                      Telecine: {
                        locationName: 'telecine'
                      }
                    }
                  },
                  Codec: {
                    locationName: 'codec'
                  },
                  FrameCaptureSettings: {
                    locationName: 'frameCaptureSettings',
                    type: 'structure',
                    members: {
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      MaxCaptures: {
                        locationName: 'maxCaptures',
                        type: 'integer'
                      },
                      Quality: {
                        locationName: 'quality',
                        type: 'integer'
                      }
                    }
                  },
                  H264Settings: {
                    locationName: 'h264Settings',
                    type: 'structure',
                    members: {
                      AdaptiveQuantization: {
                        locationName: 'adaptiveQuantization'
                      },
                      BandwidthReductionFilter: {
                        shape: 'Sfk',
                        locationName: 'bandwidthReductionFilter'
                      },
                      Bitrate: {
                        locationName: 'bitrate',
                        type: 'integer'
                      },
                      CodecLevel: {
                        locationName: 'codecLevel'
                      },
                      CodecProfile: {
                        locationName: 'codecProfile'
                      },
                      DynamicSubGop: {
                        locationName: 'dynamicSubGop'
                      },
                      EndOfStreamMarkers: {
                        locationName: 'endOfStreamMarkers'
                      },
                      EntropyEncoding: {
                        locationName: 'entropyEncoding'
                      },
                      FieldEncoding: {
                        locationName: 'fieldEncoding'
                      },
                      FlickerAdaptiveQuantization: {
                        locationName: 'flickerAdaptiveQuantization'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      GopBReference: {
                        locationName: 'gopBReference'
                      },
                      GopClosedCadence: {
                        locationName: 'gopClosedCadence',
                        type: 'integer'
                      },
                      GopSize: {
                        locationName: 'gopSize',
                        type: 'double'
                      },
                      GopSizeUnits: {
                        locationName: 'gopSizeUnits'
                      },
                      HrdBufferFinalFillPercentage: {
                        locationName: 'hrdBufferFinalFillPercentage',
                        type: 'integer'
                      },
                      HrdBufferInitialFillPercentage: {
                        locationName: 'hrdBufferInitialFillPercentage',
                        type: 'integer'
                      },
                      HrdBufferSize: {
                        locationName: 'hrdBufferSize',
                        type: 'integer'
                      },
                      InterlaceMode: {
                        locationName: 'interlaceMode'
                      },
                      MaxBitrate: {
                        locationName: 'maxBitrate',
                        type: 'integer'
                      },
                      MinIInterval: {
                        locationName: 'minIInterval',
                        type: 'integer'
                      },
                      NumberBFramesBetweenReferenceFrames: {
                        locationName: 'numberBFramesBetweenReferenceFrames',
                        type: 'integer'
                      },
                      NumberReferenceFrames: {
                        locationName: 'numberReferenceFrames',
                        type: 'integer'
                      },
                      ParControl: {
                        locationName: 'parControl'
                      },
                      ParDenominator: {
                        locationName: 'parDenominator',
                        type: 'integer'
                      },
                      ParNumerator: {
                        locationName: 'parNumerator',
                        type: 'integer'
                      },
                      QualityTuningLevel: {
                        locationName: 'qualityTuningLevel'
                      },
                      QvbrSettings: {
                        locationName: 'qvbrSettings',
                        type: 'structure',
                        members: {
                          MaxAverageBitrate: {
                            locationName: 'maxAverageBitrate',
                            type: 'integer'
                          },
                          QvbrQualityLevel: {
                            locationName: 'qvbrQualityLevel',
                            type: 'integer'
                          },
                          QvbrQualityLevelFineTune: {
                            locationName: 'qvbrQualityLevelFineTune',
                            type: 'double'
                          }
                        }
                      },
                      RateControlMode: {
                        locationName: 'rateControlMode'
                      },
                      RepeatPps: {
                        locationName: 'repeatPps'
                      },
                      ScanTypeConversionMode: {
                        locationName: 'scanTypeConversionMode'
                      },
                      SceneChangeDetect: {
                        locationName: 'sceneChangeDetect'
                      },
                      Slices: {
                        locationName: 'slices',
                        type: 'integer'
                      },
                      SlowPal: {
                        locationName: 'slowPal'
                      },
                      Softness: {
                        locationName: 'softness',
                        type: 'integer'
                      },
                      SpatialAdaptiveQuantization: {
                        locationName: 'spatialAdaptiveQuantization'
                      },
                      Syntax: {
                        locationName: 'syntax'
                      },
                      Telecine: {
                        locationName: 'telecine'
                      },
                      TemporalAdaptiveQuantization: {
                        locationName: 'temporalAdaptiveQuantization'
                      },
                      UnregisteredSeiTimecode: {
                        locationName: 'unregisteredSeiTimecode'
                      }
                    }
                  },
                  H265Settings: {
                    locationName: 'h265Settings',
                    type: 'structure',
                    members: {
                      AdaptiveQuantization: {
                        locationName: 'adaptiveQuantization'
                      },
                      AlternateTransferFunctionSei: {
                        locationName: 'alternateTransferFunctionSei'
                      },
                      BandwidthReductionFilter: {
                        shape: 'Sfk',
                        locationName: 'bandwidthReductionFilter'
                      },
                      Bitrate: {
                        locationName: 'bitrate',
                        type: 'integer'
                      },
                      CodecLevel: {
                        locationName: 'codecLevel'
                      },
                      CodecProfile: {
                        locationName: 'codecProfile'
                      },
                      DynamicSubGop: {
                        locationName: 'dynamicSubGop'
                      },
                      EndOfStreamMarkers: {
                        locationName: 'endOfStreamMarkers'
                      },
                      FlickerAdaptiveQuantization: {
                        locationName: 'flickerAdaptiveQuantization'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      GopBReference: {
                        locationName: 'gopBReference'
                      },
                      GopClosedCadence: {
                        locationName: 'gopClosedCadence',
                        type: 'integer'
                      },
                      GopSize: {
                        locationName: 'gopSize',
                        type: 'double'
                      },
                      GopSizeUnits: {
                        locationName: 'gopSizeUnits'
                      },
                      HrdBufferFinalFillPercentage: {
                        locationName: 'hrdBufferFinalFillPercentage',
                        type: 'integer'
                      },
                      HrdBufferInitialFillPercentage: {
                        locationName: 'hrdBufferInitialFillPercentage',
                        type: 'integer'
                      },
                      HrdBufferSize: {
                        locationName: 'hrdBufferSize',
                        type: 'integer'
                      },
                      InterlaceMode: {
                        locationName: 'interlaceMode'
                      },
                      MaxBitrate: {
                        locationName: 'maxBitrate',
                        type: 'integer'
                      },
                      MinIInterval: {
                        locationName: 'minIInterval',
                        type: 'integer'
                      },
                      NumberBFramesBetweenReferenceFrames: {
                        locationName: 'numberBFramesBetweenReferenceFrames',
                        type: 'integer'
                      },
                      NumberReferenceFrames: {
                        locationName: 'numberReferenceFrames',
                        type: 'integer'
                      },
                      ParControl: {
                        locationName: 'parControl'
                      },
                      ParDenominator: {
                        locationName: 'parDenominator',
                        type: 'integer'
                      },
                      ParNumerator: {
                        locationName: 'parNumerator',
                        type: 'integer'
                      },
                      QualityTuningLevel: {
                        locationName: 'qualityTuningLevel'
                      },
                      QvbrSettings: {
                        locationName: 'qvbrSettings',
                        type: 'structure',
                        members: {
                          MaxAverageBitrate: {
                            locationName: 'maxAverageBitrate',
                            type: 'integer'
                          },
                          QvbrQualityLevel: {
                            locationName: 'qvbrQualityLevel',
                            type: 'integer'
                          },
                          QvbrQualityLevelFineTune: {
                            locationName: 'qvbrQualityLevelFineTune',
                            type: 'double'
                          }
                        }
                      },
                      RateControlMode: {
                        locationName: 'rateControlMode'
                      },
                      SampleAdaptiveOffsetFilterMode: {
                        locationName: 'sampleAdaptiveOffsetFilterMode'
                      },
                      ScanTypeConversionMode: {
                        locationName: 'scanTypeConversionMode'
                      },
                      SceneChangeDetect: {
                        locationName: 'sceneChangeDetect'
                      },
                      Slices: {
                        locationName: 'slices',
                        type: 'integer'
                      },
                      SlowPal: {
                        locationName: 'slowPal'
                      },
                      SpatialAdaptiveQuantization: {
                        locationName: 'spatialAdaptiveQuantization'
                      },
                      Telecine: {
                        locationName: 'telecine'
                      },
                      TemporalAdaptiveQuantization: {
                        locationName: 'temporalAdaptiveQuantization'
                      },
                      TemporalIds: {
                        locationName: 'temporalIds'
                      },
                      Tiles: {
                        locationName: 'tiles'
                      },
                      UnregisteredSeiTimecode: {
                        locationName: 'unregisteredSeiTimecode'
                      },
                      WriteMp4PackagingType: {
                        locationName: 'writeMp4PackagingType'
                      }
                    }
                  },
                  Mpeg2Settings: {
                    locationName: 'mpeg2Settings',
                    type: 'structure',
                    members: {
                      AdaptiveQuantization: {
                        locationName: 'adaptiveQuantization'
                      },
                      Bitrate: {
                        locationName: 'bitrate',
                        type: 'integer'
                      },
                      CodecLevel: {
                        locationName: 'codecLevel'
                      },
                      CodecProfile: {
                        locationName: 'codecProfile'
                      },
                      DynamicSubGop: {
                        locationName: 'dynamicSubGop'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      GopClosedCadence: {
                        locationName: 'gopClosedCadence',
                        type: 'integer'
                      },
                      GopSize: {
                        locationName: 'gopSize',
                        type: 'double'
                      },
                      GopSizeUnits: {
                        locationName: 'gopSizeUnits'
                      },
                      HrdBufferFinalFillPercentage: {
                        locationName: 'hrdBufferFinalFillPercentage',
                        type: 'integer'
                      },
                      HrdBufferInitialFillPercentage: {
                        locationName: 'hrdBufferInitialFillPercentage',
                        type: 'integer'
                      },
                      HrdBufferSize: {
                        locationName: 'hrdBufferSize',
                        type: 'integer'
                      },
                      InterlaceMode: {
                        locationName: 'interlaceMode'
                      },
                      IntraDcPrecision: {
                        locationName: 'intraDcPrecision'
                      },
                      MaxBitrate: {
                        locationName: 'maxBitrate',
                        type: 'integer'
                      },
                      MinIInterval: {
                        locationName: 'minIInterval',
                        type: 'integer'
                      },
                      NumberBFramesBetweenReferenceFrames: {
                        locationName: 'numberBFramesBetweenReferenceFrames',
                        type: 'integer'
                      },
                      ParControl: {
                        locationName: 'parControl'
                      },
                      ParDenominator: {
                        locationName: 'parDenominator',
                        type: 'integer'
                      },
                      ParNumerator: {
                        locationName: 'parNumerator',
                        type: 'integer'
                      },
                      QualityTuningLevel: {
                        locationName: 'qualityTuningLevel'
                      },
                      RateControlMode: {
                        locationName: 'rateControlMode'
                      },
                      ScanTypeConversionMode: {
                        locationName: 'scanTypeConversionMode'
                      },
                      SceneChangeDetect: {
                        locationName: 'sceneChangeDetect'
                      },
                      SlowPal: {
                        locationName: 'slowPal'
                      },
                      Softness: {
                        locationName: 'softness',
                        type: 'integer'
                      },
                      SpatialAdaptiveQuantization: {
                        locationName: 'spatialAdaptiveQuantization'
                      },
                      Syntax: {
                        locationName: 'syntax'
                      },
                      Telecine: {
                        locationName: 'telecine'
                      },
                      TemporalAdaptiveQuantization: {
                        locationName: 'temporalAdaptiveQuantization'
                      }
                    }
                  },
                  ProresSettings: {
                    locationName: 'proresSettings',
                    type: 'structure',
                    members: {
                      ChromaSampling: {
                        locationName: 'chromaSampling'
                      },
                      CodecProfile: {
                        locationName: 'codecProfile'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      InterlaceMode: {
                        locationName: 'interlaceMode'
                      },
                      ParControl: {
                        locationName: 'parControl'
                      },
                      ParDenominator: {
                        locationName: 'parDenominator',
                        type: 'integer'
                      },
                      ParNumerator: {
                        locationName: 'parNumerator',
                        type: 'integer'
                      },
                      ScanTypeConversionMode: {
                        locationName: 'scanTypeConversionMode'
                      },
                      SlowPal: {
                        locationName: 'slowPal'
                      },
                      Telecine: {
                        locationName: 'telecine'
                      }
                    }
                  },
                  UncompressedSettings: {
                    locationName: 'uncompressedSettings',
                    type: 'structure',
                    members: {
                      Fourcc: {
                        locationName: 'fourcc'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      InterlaceMode: {
                        locationName: 'interlaceMode'
                      },
                      ScanTypeConversionMode: {
                        locationName: 'scanTypeConversionMode'
                      },
                      SlowPal: {
                        locationName: 'slowPal'
                      },
                      Telecine: {
                        locationName: 'telecine'
                      }
                    }
                  },
                  Vc3Settings: {
                    locationName: 'vc3Settings',
                    type: 'structure',
                    members: {
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      InterlaceMode: {
                        locationName: 'interlaceMode'
                      },
                      ScanTypeConversionMode: {
                        locationName: 'scanTypeConversionMode'
                      },
                      SlowPal: {
                        locationName: 'slowPal'
                      },
                      Telecine: {
                        locationName: 'telecine'
                      },
                      Vc3Class: {
                        locationName: 'vc3Class'
                      }
                    }
                  },
                  Vp8Settings: {
                    locationName: 'vp8Settings',
                    type: 'structure',
                    members: {
                      Bitrate: {
                        locationName: 'bitrate',
                        type: 'integer'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      GopSize: {
                        locationName: 'gopSize',
                        type: 'double'
                      },
                      HrdBufferSize: {
                        locationName: 'hrdBufferSize',
                        type: 'integer'
                      },
                      MaxBitrate: {
                        locationName: 'maxBitrate',
                        type: 'integer'
                      },
                      ParControl: {
                        locationName: 'parControl'
                      },
                      ParDenominator: {
                        locationName: 'parDenominator',
                        type: 'integer'
                      },
                      ParNumerator: {
                        locationName: 'parNumerator',
                        type: 'integer'
                      },
                      QualityTuningLevel: {
                        locationName: 'qualityTuningLevel'
                      },
                      RateControlMode: {
                        locationName: 'rateControlMode'
                      }
                    }
                  },
                  Vp9Settings: {
                    locationName: 'vp9Settings',
                    type: 'structure',
                    members: {
                      Bitrate: {
                        locationName: 'bitrate',
                        type: 'integer'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      GopSize: {
                        locationName: 'gopSize',
                        type: 'double'
                      },
                      HrdBufferSize: {
                        locationName: 'hrdBufferSize',
                        type: 'integer'
                      },
                      MaxBitrate: {
                        locationName: 'maxBitrate',
                        type: 'integer'
                      },
                      ParControl: {
                        locationName: 'parControl'
                      },
                      ParDenominator: {
                        locationName: 'parDenominator',
                        type: 'integer'
                      },
                      ParNumerator: {
                        locationName: 'parNumerator',
                        type: 'integer'
                      },
                      QualityTuningLevel: {
                        locationName: 'qualityTuningLevel'
                      },
                      RateControlMode: {
                        locationName: 'rateControlMode'
                      }
                    }
                  },
                  XavcSettings: {
                    locationName: 'xavcSettings',
                    type: 'structure',
                    members: {
                      AdaptiveQuantization: {
                        locationName: 'adaptiveQuantization'
                      },
                      EntropyEncoding: {
                        locationName: 'entropyEncoding'
                      },
                      FramerateControl: {
                        locationName: 'framerateControl'
                      },
                      FramerateConversionAlgorithm: {
                        locationName: 'framerateConversionAlgorithm'
                      },
                      FramerateDenominator: {
                        locationName: 'framerateDenominator',
                        type: 'integer'
                      },
                      FramerateNumerator: {
                        locationName: 'framerateNumerator',
                        type: 'integer'
                      },
                      Profile: {
                        locationName: 'profile'
                      },
                      SlowPal: {
                        locationName: 'slowPal'
                      },
                      Softness: {
                        locationName: 'softness',
                        type: 'integer'
                      },
                      SpatialAdaptiveQuantization: {
                        locationName: 'spatialAdaptiveQuantization'
                      },
                      TemporalAdaptiveQuantization: {
                        locationName: 'temporalAdaptiveQuantization'
                      },
                      Xavc4kIntraCbgProfileSettings: {
                        locationName: 'xavc4kIntraCbgProfileSettings',
                        type: 'structure',
                        members: {
                          XavcClass: {
                            locationName: 'xavcClass'
                          }
                        }
                      },
                      Xavc4kIntraVbrProfileSettings: {
                        locationName: 'xavc4kIntraVbrProfileSettings',
                        type: 'structure',
                        members: {
                          XavcClass: {
                            locationName: 'xavcClass'
                          }
                        }
                      },
                      Xavc4kProfileSettings: {
                        locationName: 'xavc4kProfileSettings',
                        type: 'structure',
                        members: {
                          BitrateClass: {
                            locationName: 'bitrateClass'
                          },
                          CodecProfile: {
                            locationName: 'codecProfile'
                          },
                          FlickerAdaptiveQuantization: {
                            locationName: 'flickerAdaptiveQuantization'
                          },
                          GopBReference: {
                            locationName: 'gopBReference'
                          },
                          GopClosedCadence: {
                            locationName: 'gopClosedCadence',
                            type: 'integer'
                          },
                          HrdBufferSize: {
                            locationName: 'hrdBufferSize',
                            type: 'integer'
                          },
                          QualityTuningLevel: {
                            locationName: 'qualityTuningLevel'
                          },
                          Slices: {
                            locationName: 'slices',
                            type: 'integer'
                          }
                        }
                      },
                      XavcHdIntraCbgProfileSettings: {
                        locationName: 'xavcHdIntraCbgProfileSettings',
                        type: 'structure',
                        members: {
                          XavcClass: {
                            locationName: 'xavcClass'
                          }
                        }
                      },
                      XavcHdProfileSettings: {
                        locationName: 'xavcHdProfileSettings',
                        type: 'structure',
                        members: {
                          BitrateClass: {
                            locationName: 'bitrateClass'
                          },
                          FlickerAdaptiveQuantization: {
                            locationName: 'flickerAdaptiveQuantization'
                          },
                          GopBReference: {
                            locationName: 'gopBReference'
                          },
                          GopClosedCadence: {
                            locationName: 'gopClosedCadence',
                            type: 'integer'
                          },
                          HrdBufferSize: {
                            locationName: 'hrdBufferSize',
                            type: 'integer'
                          },
                          InterlaceMode: {
                            locationName: 'interlaceMode'
                          },
                          QualityTuningLevel: {
                            locationName: 'qualityTuningLevel'
                          },
                          Slices: {
                            locationName: 'slices',
                            type: 'integer'
                          },
                          Telecine: {
                            locationName: 'telecine'
                          }
                        }
                      }
                    }
                  }
                }
              },
              ColorMetadata: {
                locationName: 'colorMetadata'
              },
              Crop: {
                shape: 'S2i',
                locationName: 'crop'
              },
              DropFrameTimecode: {
                locationName: 'dropFrameTimecode'
              },
              FixedAfd: {
                locationName: 'fixedAfd',
                type: 'integer'
              },
              Height: {
                locationName: 'height',
                type: 'integer'
              },
              Position: {
                shape: 'S2i',
                locationName: 'position'
              },
              RespondToAfd: {
                locationName: 'respondToAfd'
              },
              ScalingBehavior: {
                locationName: 'scalingBehavior'
              },
              Sharpness: {
                locationName: 'sharpness',
                type: 'integer'
              },
              TimecodeInsertion: {
                locationName: 'timecodeInsertion'
              },
              VideoPreprocessors: {
                locationName: 'videoPreprocessors',
                type: 'structure',
                members: {
                  ColorCorrector: {
                    locationName: 'colorCorrector',
                    type: 'structure',
                    members: {
                      Brightness: {
                        locationName: 'brightness',
                        type: 'integer'
                      },
                      ClipLimits: {
                        locationName: 'clipLimits',
                        type: 'structure',
                        members: {
                          MaximumRGBTolerance: {
                            locationName: 'maximumRGBTolerance',
                            type: 'integer'
                          },
                          MaximumYUV: {
                            locationName: 'maximumYUV',
                            type: 'integer'
                          },
                          MinimumRGBTolerance: {
                            locationName: 'minimumRGBTolerance',
                            type: 'integer'
                          },
                          MinimumYUV: {
                            locationName: 'minimumYUV',
                            type: 'integer'
                          }
                        }
                      },
                      ColorSpaceConversion: {
                        locationName: 'colorSpaceConversion'
                      },
                      Contrast: {
                        locationName: 'contrast',
                        type: 'integer'
                      },
                      Hdr10Metadata: {
                        shape: 'S3m',
                        locationName: 'hdr10Metadata'
                      },
                      HdrToSdrToneMapper: {
                        locationName: 'hdrToSdrToneMapper'
                      },
                      Hue: {
                        locationName: 'hue',
                        type: 'integer'
                      },
                      MaxLuminance: {
                        locationName: 'maxLuminance',
                        type: 'integer'
                      },
                      SampleRangeConversion: {
                        locationName: 'sampleRangeConversion'
                      },
                      Saturation: {
                        locationName: 'saturation',
                        type: 'integer'
                      },
                      SdrReferenceWhiteLevel: {
                        locationName: 'sdrReferenceWhiteLevel',
                        type: 'integer'
                      }
                    }
                  },
                  Deinterlacer: {
                    locationName: 'deinterlacer',
                    type: 'structure',
                    members: {
                      Algorithm: {
                        locationName: 'algorithm'
                      },
                      Control: {
                        locationName: 'control'
                      },
                      Mode: {
                        locationName: 'mode'
                      }
                    }
                  },
                  DolbyVision: {
                    locationName: 'dolbyVision',
                    type: 'structure',
                    members: {
                      L6Metadata: {
                        locationName: 'l6Metadata',
                        type: 'structure',
                        members: {
                          MaxCll: {
                            locationName: 'maxCll',
                            type: 'integer'
                          },
                          MaxFall: {
                            locationName: 'maxFall',
                            type: 'integer'
                          }
                        }
                      },
                      L6Mode: {
                        locationName: 'l6Mode'
                      },
                      Mapping: {
                        locationName: 'mapping'
                      },
                      Profile: {
                        locationName: 'profile'
                      }
                    }
                  },
                  Hdr10Plus: {
                    locationName: 'hdr10Plus',
                    type: 'structure',
                    members: {
                      MasteringMonitorNits: {
                        locationName: 'masteringMonitorNits',
                        type: 'integer'
                      },
                      TargetMonitorNits: {
                        locationName: 'targetMonitorNits',
                        type: 'integer'
                      }
                    }
                  },
                  ImageInserter: {
                    shape: 'S2u',
                    locationName: 'imageInserter'
                  },
                  NoiseReducer: {
                    locationName: 'noiseReducer',
                    type: 'structure',
                    members: {
                      Filter: {
                        locationName: 'filter'
                      },
                      FilterSettings: {
                        locationName: 'filterSettings',
                        type: 'structure',
                        members: {
                          Strength: {
                            locationName: 'strength',
                            type: 'integer'
                          }
                        }
                      },
                      SpatialFilterSettings: {
                        locationName: 'spatialFilterSettings',
                        type: 'structure',
                        members: {
                          PostFilterSharpenStrength: {
                            locationName: 'postFilterSharpenStrength',
                            type: 'integer'
                          },
                          Speed: {
                            locationName: 'speed',
                            type: 'integer'
                          },
                          Strength: {
                            locationName: 'strength',
                            type: 'integer'
                          }
                        }
                      },
                      TemporalFilterSettings: {
                        locationName: 'temporalFilterSettings',
                        type: 'structure',
                        members: {
                          AggressiveMode: {
                            locationName: 'aggressiveMode',
                            type: 'integer'
                          },
                          PostTemporalSharpening: {
                            locationName: 'postTemporalSharpening'
                          },
                          PostTemporalSharpeningStrength: {
                            locationName: 'postTemporalSharpeningStrength'
                          },
                          Speed: {
                            locationName: 'speed',
                            type: 'integer'
                          },
                          Strength: {
                            locationName: 'strength',
                            type: 'integer'
                          }
                        }
                      }
                    }
                  },
                  PartnerWatermarking: {
                    locationName: 'partnerWatermarking',
                    type: 'structure',
                    members: {
                      NexguardFileMarkerSettings: {
                        locationName: 'nexguardFileMarkerSettings',
                        type: 'structure',
                        members: {
                          License: {
                            locationName: 'license'
                          },
                          Payload: {
                            locationName: 'payload',
                            type: 'integer'
                          },
                          Preset: {
                            locationName: 'preset'
                          },
                          Strength: {
                            locationName: 'strength'
                          }
                        }
                      }
                    }
                  },
                  TimecodeBurnin: {
                    locationName: 'timecodeBurnin',
                    type: 'structure',
                    members: {
                      FontSize: {
                        locationName: 'fontSize',
                        type: 'integer'
                      },
                      Position: {
                        locationName: 'position'
                      },
                      Prefix: {
                        locationName: 'prefix'
                      }
                    }
                  }
                }
              },
              Width: {
                locationName: 'width',
                type: 'integer'
              }
            }
          },
          Sfk: {
            type: 'structure',
            members: {
              Sharpening: {
                locationName: 'sharpening'
              },
              Strength: {
                locationName: 'strength'
              }
            }
          },
          Sl3: {
            type: 'structure',
            members: {
              Anchor: {
                locationName: 'anchor'
              },
              Source: {
                locationName: 'source'
              },
              Start: {
                locationName: 'start'
              },
              TimestampOffset: {
                locationName: 'timestampOffset'
              }
            }
          },
          Sl6: {
            type: 'structure',
            members: {
              Id3Insertions: {
                locationName: 'id3Insertions',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id3: {
                      locationName: 'id3'
                    },
                    Timecode: {
                      locationName: 'timecode'
                    }
                  }
                }
              }
            }
          },
          Slb: {
            type: 'map',
            key: {},
            value: {}
          },
          Sld: {
            type: 'structure',
            members: {
              AccelerationSettings: {
                shape: 'S7',
                locationName: 'accelerationSettings'
              },
              AccelerationStatus: {
                locationName: 'accelerationStatus'
              },
              Arn: {
                locationName: 'arn'
              },
              BillingTagsSource: {
                locationName: 'billingTagsSource'
              },
              ClientRequestToken: {
                locationName: 'clientRequestToken'
              },
              CreatedAt: {
                shape: 'Slf',
                locationName: 'createdAt'
              },
              CurrentPhase: {
                locationName: 'currentPhase'
              },
              ErrorCode: {
                locationName: 'errorCode',
                type: 'integer'
              },
              ErrorMessage: {
                locationName: 'errorMessage'
              },
              HopDestinations: {
                shape: 'Sa',
                locationName: 'hopDestinations'
              },
              Id: {
                locationName: 'id'
              },
              JobPercentComplete: {
                locationName: 'jobPercentComplete',
                type: 'integer'
              },
              JobTemplate: {
                locationName: 'jobTemplate'
              },
              Messages: {
                locationName: 'messages',
                type: 'structure',
                members: {
                  Info: {
                    shape: 'Sli',
                    locationName: 'info'
                  },
                  Warning: {
                    shape: 'Sli',
                    locationName: 'warning'
                  }
                }
              },
              OutputGroupDetails: {
                locationName: 'outputGroupDetails',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    OutputDetails: {
                      locationName: 'outputDetails',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          DurationInMs: {
                            locationName: 'durationInMs',
                            type: 'integer'
                          },
                          VideoDetails: {
                            locationName: 'videoDetails',
                            type: 'structure',
                            members: {
                              HeightInPx: {
                                locationName: 'heightInPx',
                                type: 'integer'
                              },
                              WidthInPx: {
                                locationName: 'widthInPx',
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
              Priority: {
                locationName: 'priority',
                type: 'integer'
              },
              Queue: {
                locationName: 'queue'
              },
              QueueTransitions: {
                locationName: 'queueTransitions',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    DestinationQueue: {
                      locationName: 'destinationQueue'
                    },
                    SourceQueue: {
                      locationName: 'sourceQueue'
                    },
                    Timestamp: {
                      shape: 'Slf',
                      locationName: 'timestamp'
                    }
                  }
                }
              },
              RetryCount: {
                locationName: 'retryCount',
                type: 'integer'
              },
              Role: {
                locationName: 'role'
              },
              Settings: {
                shape: 'Se',
                locationName: 'settings'
              },
              SimulateReservedQueue: {
                locationName: 'simulateReservedQueue'
              },
              Status: {
                locationName: 'status'
              },
              StatusUpdateInterval: {
                locationName: 'statusUpdateInterval'
              },
              Timing: {
                locationName: 'timing',
                type: 'structure',
                members: {
                  FinishTime: {
                    shape: 'Slf',
                    locationName: 'finishTime'
                  },
                  StartTime: {
                    shape: 'Slf',
                    locationName: 'startTime'
                  },
                  SubmitTime: {
                    shape: 'Slf',
                    locationName: 'submitTime'
                  }
                }
              },
              UserMetadata: {
                shape: 'Slb',
                locationName: 'userMetadata'
              },
              Warnings: {
                locationName: 'warnings',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Code: {
                      locationName: 'code',
                      type: 'integer'
                    },
                    Count: {
                      locationName: 'count',
                      type: 'integer'
                    }
                  },
                  required: ['Count', 'Code']
                }
              }
            },
            required: ['Settings', 'Role']
          },
          Slf: {
            type: 'timestamp',
            timestampFormat: 'unixTimestamp'
          },
          Sli: {
            type: 'list',
            member: {}
          },
          Slv: {
            type: 'structure',
            members: {
              AdAvailOffset: {
                locationName: 'adAvailOffset',
                type: 'integer'
              },
              AvailBlanking: {
                shape: 'Sg',
                locationName: 'availBlanking'
              },
              ColorConversion3DLUTSettings: {
                shape: 'Si',
                locationName: 'colorConversion3DLUTSettings'
              },
              Esam: {
                shape: 'Sn',
                locationName: 'esam'
              },
              ExtendedDataServices: {
                shape: 'St',
                locationName: 'extendedDataServices'
              },
              FollowSource: {
                locationName: 'followSource',
                type: 'integer'
              },
              Inputs: {
                locationName: 'inputs',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    AdvancedInputFilter: {
                      locationName: 'advancedInputFilter'
                    },
                    AdvancedInputFilterSettings: {
                      shape: 'S10',
                      locationName: 'advancedInputFilterSettings'
                    },
                    AudioSelectorGroups: {
                      shape: 'S13',
                      locationName: 'audioSelectorGroups'
                    },
                    AudioSelectors: {
                      shape: 'S17',
                      locationName: 'audioSelectors'
                    },
                    CaptionSelectors: {
                      shape: 'S1t',
                      locationName: 'captionSelectors'
                    },
                    Crop: {
                      shape: 'S2i',
                      locationName: 'crop'
                    },
                    DeblockFilter: {
                      locationName: 'deblockFilter'
                    },
                    DenoiseFilter: {
                      locationName: 'denoiseFilter'
                    },
                    DolbyVisionMetadataXml: {
                      locationName: 'dolbyVisionMetadataXml'
                    },
                    FilterEnable: {
                      locationName: 'filterEnable'
                    },
                    FilterStrength: {
                      locationName: 'filterStrength',
                      type: 'integer'
                    },
                    ImageInserter: {
                      shape: 'S2u',
                      locationName: 'imageInserter'
                    },
                    InputClippings: {
                      shape: 'S32',
                      locationName: 'inputClippings'
                    },
                    InputScanType: {
                      locationName: 'inputScanType'
                    },
                    Position: {
                      shape: 'S2i',
                      locationName: 'position'
                    },
                    ProgramNumber: {
                      locationName: 'programNumber',
                      type: 'integer'
                    },
                    PsiControl: {
                      locationName: 'psiControl'
                    },
                    TimecodeSource: {
                      locationName: 'timecodeSource'
                    },
                    TimecodeStart: {
                      locationName: 'timecodeStart'
                    },
                    VideoOverlays: {
                      shape: 'S3d',
                      locationName: 'videoOverlays'
                    },
                    VideoSelector: {
                      shape: 'S3i',
                      locationName: 'videoSelector'
                    }
                  }
                }
              },
              KantarWatermark: {
                shape: 'S3s',
                locationName: 'kantarWatermark'
              },
              MotionImageInserter: {
                shape: 'S40',
                locationName: 'motionImageInserter'
              },
              NielsenConfiguration: {
                shape: 'S48',
                locationName: 'nielsenConfiguration'
              },
              NielsenNonLinearWatermark: {
                shape: 'S4a',
                locationName: 'nielsenNonLinearWatermark'
              },
              OutputGroups: {
                shape: 'S4h',
                locationName: 'outputGroups'
              },
              TimecodeConfig: {
                shape: 'Sl3',
                locationName: 'timecodeConfig'
              },
              TimedMetadataInsertion: {
                shape: 'Sl6',
                locationName: 'timedMetadataInsertion'
              }
            }
          },
          Slz: {
            type: 'structure',
            members: {
              AccelerationSettings: {
                shape: 'S7',
                locationName: 'accelerationSettings'
              },
              Arn: {
                locationName: 'arn'
              },
              Category: {
                locationName: 'category'
              },
              CreatedAt: {
                shape: 'Slf',
                locationName: 'createdAt'
              },
              Description: {
                locationName: 'description'
              },
              HopDestinations: {
                shape: 'Sa',
                locationName: 'hopDestinations'
              },
              LastUpdated: {
                shape: 'Slf',
                locationName: 'lastUpdated'
              },
              Name: {
                locationName: 'name'
              },
              Priority: {
                locationName: 'priority',
                type: 'integer'
              },
              Queue: {
                locationName: 'queue'
              },
              Settings: {
                shape: 'Slv',
                locationName: 'settings'
              },
              StatusUpdateInterval: {
                locationName: 'statusUpdateInterval'
              },
              Type: {
                locationName: 'type'
              }
            },
            required: ['Settings', 'Name']
          },
          Sm2: {
            type: 'structure',
            members: {
              AudioDescriptions: {
                shape: 'S86',
                locationName: 'audioDescriptions'
              },
              CaptionDescriptions: {
                locationName: 'captionDescriptions',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    CustomLanguageCode: {
                      locationName: 'customLanguageCode'
                    },
                    DestinationSettings: {
                      shape: 'Sau',
                      locationName: 'destinationSettings'
                    },
                    LanguageCode: {
                      locationName: 'languageCode'
                    },
                    LanguageDescription: {
                      locationName: 'languageDescription'
                    }
                  }
                }
              },
              ContainerSettings: {
                shape: 'Sc5',
                locationName: 'containerSettings'
              },
              VideoDescription: {
                shape: 'Sel',
                locationName: 'videoDescription'
              }
            }
          },
          Sm6: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              Category: {
                locationName: 'category'
              },
              CreatedAt: {
                shape: 'Slf',
                locationName: 'createdAt'
              },
              Description: {
                locationName: 'description'
              },
              LastUpdated: {
                shape: 'Slf',
                locationName: 'lastUpdated'
              },
              Name: {
                locationName: 'name'
              },
              Settings: {
                shape: 'Sm2',
                locationName: 'settings'
              },
              Type: {
                locationName: 'type'
              }
            },
            required: ['Settings', 'Name']
          },
          Sm9: {
            type: 'structure',
            members: {
              Commitment: {
                locationName: 'commitment'
              },
              RenewalType: {
                locationName: 'renewalType'
              },
              ReservedSlots: {
                locationName: 'reservedSlots',
                type: 'integer'
              }
            },
            required: ['Commitment', 'ReservedSlots', 'RenewalType']
          },
          Sme: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              CreatedAt: {
                shape: 'Slf',
                locationName: 'createdAt'
              },
              Description: {
                locationName: 'description'
              },
              LastUpdated: {
                shape: 'Slf',
                locationName: 'lastUpdated'
              },
              Name: {
                locationName: 'name'
              },
              PricingPlan: {
                locationName: 'pricingPlan'
              },
              ProgressingJobsCount: {
                locationName: 'progressingJobsCount',
                type: 'integer'
              },
              ReservationPlan: {
                locationName: 'reservationPlan',
                type: 'structure',
                members: {
                  Commitment: {
                    locationName: 'commitment'
                  },
                  ExpiresAt: {
                    shape: 'Slf',
                    locationName: 'expiresAt'
                  },
                  PurchasedAt: {
                    shape: 'Slf',
                    locationName: 'purchasedAt'
                  },
                  RenewalType: {
                    locationName: 'renewalType'
                  },
                  ReservedSlots: {
                    locationName: 'reservedSlots',
                    type: 'integer'
                  },
                  Status: {
                    locationName: 'status'
                  }
                }
              },
              Status: {
                locationName: 'status'
              },
              SubmittedJobsCount: {
                locationName: 'submittedJobsCount',
                type: 'integer'
              },
              Type: {
                locationName: 'type'
              }
            },
            required: ['Name']
          },
          Sn2: {
            type: 'structure',
            members: {
              HttpInputs: {
                locationName: 'httpInputs'
              },
              HttpsInputs: {
                locationName: 'httpsInputs'
              },
              S3Inputs: {
                locationName: 's3Inputs'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=697f09dfab71fc4be95494397045bfaa0b219c47.js.map