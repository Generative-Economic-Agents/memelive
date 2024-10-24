System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-10-26',
          endpointPrefix: 'transcribe',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'Amazon Transcribe Service',
          serviceId: 'Transcribe',
          signatureVersion: 'v4',
          signingName: 'transcribe',
          targetPrefix: 'Transcribe',
          uid: 'transcribe-2017-10-26'
        },
        operations: {
          CreateCallAnalyticsCategory: {
            input: {
              type: 'structure',
              required: ['CategoryName', 'Rules'],
              members: {
                CategoryName: {},
                Rules: {
                  shape: 'S3'
                },
                InputType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CategoryProperties: {
                  shape: 'Sm'
                }
              }
            }
          },
          CreateLanguageModel: {
            input: {
              type: 'structure',
              required: ['LanguageCode', 'BaseModelName', 'ModelName', 'InputDataConfig'],
              members: {
                LanguageCode: {},
                BaseModelName: {},
                ModelName: {},
                InputDataConfig: {
                  shape: 'Ss'
                },
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LanguageCode: {},
                BaseModelName: {},
                ModelName: {},
                InputDataConfig: {
                  shape: 'Ss'
                },
                ModelStatus: {}
              }
            }
          },
          CreateMedicalVocabulary: {
            input: {
              type: 'structure',
              required: ['VocabularyName', 'LanguageCode', 'VocabularyFileUri'],
              members: {
                VocabularyName: {},
                LanguageCode: {},
                VocabularyFileUri: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyName: {},
                LanguageCode: {},
                VocabularyState: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {}
              }
            }
          },
          CreateVocabulary: {
            input: {
              type: 'structure',
              required: ['VocabularyName', 'LanguageCode'],
              members: {
                VocabularyName: {},
                LanguageCode: {},
                Phrases: {
                  shape: 'S18'
                },
                VocabularyFileUri: {},
                Tags: {
                  shape: 'Sv'
                },
                DataAccessRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyName: {},
                LanguageCode: {},
                VocabularyState: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {}
              }
            }
          },
          CreateVocabularyFilter: {
            input: {
              type: 'structure',
              required: ['VocabularyFilterName', 'LanguageCode'],
              members: {
                VocabularyFilterName: {},
                LanguageCode: {},
                Words: {
                  shape: 'S1d'
                },
                VocabularyFilterFileUri: {},
                Tags: {
                  shape: 'Sv'
                },
                DataAccessRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyFilterName: {},
                LanguageCode: {},
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteCallAnalyticsCategory: {
            input: {
              type: 'structure',
              required: ['CategoryName'],
              members: {
                CategoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCallAnalyticsJob: {
            input: {
              type: 'structure',
              required: ['CallAnalyticsJobName'],
              members: {
                CallAnalyticsJobName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLanguageModel: {
            input: {
              type: 'structure',
              required: ['ModelName'],
              members: {
                ModelName: {}
              }
            }
          },
          DeleteMedicalScribeJob: {
            input: {
              type: 'structure',
              required: ['MedicalScribeJobName'],
              members: {
                MedicalScribeJobName: {}
              }
            }
          },
          DeleteMedicalTranscriptionJob: {
            input: {
              type: 'structure',
              required: ['MedicalTranscriptionJobName'],
              members: {
                MedicalTranscriptionJobName: {}
              }
            }
          },
          DeleteMedicalVocabulary: {
            input: {
              type: 'structure',
              required: ['VocabularyName'],
              members: {
                VocabularyName: {}
              }
            }
          },
          DeleteTranscriptionJob: {
            input: {
              type: 'structure',
              required: ['TranscriptionJobName'],
              members: {
                TranscriptionJobName: {}
              }
            }
          },
          DeleteVocabulary: {
            input: {
              type: 'structure',
              required: ['VocabularyName'],
              members: {
                VocabularyName: {}
              }
            }
          },
          DeleteVocabularyFilter: {
            input: {
              type: 'structure',
              required: ['VocabularyFilterName'],
              members: {
                VocabularyFilterName: {}
              }
            }
          },
          DescribeLanguageModel: {
            input: {
              type: 'structure',
              required: ['ModelName'],
              members: {
                ModelName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LanguageModel: {
                  shape: 'S1v'
                }
              }
            }
          },
          GetCallAnalyticsCategory: {
            input: {
              type: 'structure',
              required: ['CategoryName'],
              members: {
                CategoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CategoryProperties: {
                  shape: 'Sm'
                }
              }
            }
          },
          GetCallAnalyticsJob: {
            input: {
              type: 'structure',
              required: ['CallAnalyticsJobName'],
              members: {
                CallAnalyticsJobName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CallAnalyticsJob: {
                  shape: 'S20'
                }
              }
            }
          },
          GetMedicalScribeJob: {
            input: {
              type: 'structure',
              required: ['MedicalScribeJobName'],
              members: {
                MedicalScribeJobName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MedicalScribeJob: {
                  shape: 'S2t'
                }
              }
            }
          },
          GetMedicalTranscriptionJob: {
            input: {
              type: 'structure',
              required: ['MedicalTranscriptionJobName'],
              members: {
                MedicalTranscriptionJobName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MedicalTranscriptionJob: {
                  shape: 'S35'
                }
              }
            }
          },
          GetMedicalVocabulary: {
            input: {
              type: 'structure',
              required: ['VocabularyName'],
              members: {
                VocabularyName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyName: {},
                LanguageCode: {},
                VocabularyState: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                DownloadUri: {}
              }
            }
          },
          GetTranscriptionJob: {
            input: {
              type: 'structure',
              required: ['TranscriptionJobName'],
              members: {
                TranscriptionJobName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TranscriptionJob: {
                  shape: 'S3i'
                }
              }
            }
          },
          GetVocabulary: {
            input: {
              type: 'structure',
              required: ['VocabularyName'],
              members: {
                VocabularyName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyName: {},
                LanguageCode: {},
                VocabularyState: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                DownloadUri: {}
              }
            }
          },
          GetVocabularyFilter: {
            input: {
              type: 'structure',
              required: ['VocabularyFilterName'],
              members: {
                VocabularyFilterName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyFilterName: {},
                LanguageCode: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                DownloadUri: {}
              }
            }
          },
          ListCallAnalyticsCategories: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Categories: {
                  type: 'list',
                  member: {
                    shape: 'Sm'
                  }
                }
              }
            }
          },
          ListCallAnalyticsJobs: {
            input: {
              type: 'structure',
              members: {
                Status: {},
                JobNameContains: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                NextToken: {},
                CallAnalyticsJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CallAnalyticsJobName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      CompletionTime: {
                        type: 'timestamp'
                      },
                      LanguageCode: {},
                      CallAnalyticsJobStatus: {},
                      CallAnalyticsJobDetails: {
                        shape: 'S22'
                      },
                      FailureReason: {}
                    }
                  }
                }
              }
            }
          },
          ListLanguageModels: {
            input: {
              type: 'structure',
              members: {
                StatusEquals: {},
                NameContains: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Models: {
                  type: 'list',
                  member: {
                    shape: 'S1v'
                  }
                }
              }
            }
          },
          ListMedicalScribeJobs: {
            input: {
              type: 'structure',
              members: {
                Status: {},
                JobNameContains: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                NextToken: {},
                MedicalScribeJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MedicalScribeJobName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      CompletionTime: {
                        type: 'timestamp'
                      },
                      LanguageCode: {},
                      MedicalScribeJobStatus: {},
                      FailureReason: {}
                    }
                  }
                }
              }
            }
          },
          ListMedicalTranscriptionJobs: {
            input: {
              type: 'structure',
              members: {
                Status: {},
                JobNameContains: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                NextToken: {},
                MedicalTranscriptionJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MedicalTranscriptionJobName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      CompletionTime: {
                        type: 'timestamp'
                      },
                      LanguageCode: {},
                      TranscriptionJobStatus: {},
                      FailureReason: {},
                      OutputLocationType: {},
                      Specialty: {},
                      ContentIdentificationType: {},
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          ListMedicalVocabularies: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                StateEquals: {},
                NameContains: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                NextToken: {},
                Vocabularies: {
                  shape: 'S4p'
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          ListTranscriptionJobs: {
            input: {
              type: 'structure',
              members: {
                Status: {},
                JobNameContains: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                NextToken: {},
                TranscriptionJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TranscriptionJobName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      CompletionTime: {
                        type: 'timestamp'
                      },
                      LanguageCode: {},
                      TranscriptionJobStatus: {},
                      FailureReason: {},
                      OutputLocationType: {},
                      ContentRedaction: {
                        shape: 'S2f'
                      },
                      ModelSettings: {
                        shape: 'S3k'
                      },
                      IdentifyLanguage: {
                        type: 'boolean'
                      },
                      IdentifyMultipleLanguages: {
                        type: 'boolean'
                      },
                      IdentifiedLanguageScore: {
                        type: 'float'
                      },
                      LanguageCodes: {
                        shape: 'S3m'
                      },
                      ToxicityDetection: {
                        shape: 'S3u'
                      }
                    }
                  }
                }
              }
            }
          },
          ListVocabularies: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                StateEquals: {},
                NameContains: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                NextToken: {},
                Vocabularies: {
                  shape: 'S4p'
                }
              }
            }
          },
          ListVocabularyFilters: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                VocabularyFilters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VocabularyFilterName: {},
                      LanguageCode: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          StartCallAnalyticsJob: {
            input: {
              type: 'structure',
              required: ['CallAnalyticsJobName', 'Media'],
              members: {
                CallAnalyticsJobName: {},
                Media: {
                  shape: 'S2a'
                },
                OutputLocation: {},
                OutputEncryptionKMSKeyId: {},
                DataAccessRoleArn: {},
                Settings: {
                  shape: 'S2d'
                },
                ChannelDefinitions: {
                  shape: 'S2o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CallAnalyticsJob: {
                  shape: 'S20'
                }
              }
            }
          },
          StartMedicalScribeJob: {
            input: {
              type: 'structure',
              required: ['MedicalScribeJobName', 'Media', 'OutputBucketName', 'DataAccessRoleArn', 'Settings'],
              members: {
                MedicalScribeJobName: {},
                Media: {
                  shape: 'S2a'
                },
                OutputBucketName: {},
                OutputEncryptionKMSKeyId: {},
                KMSEncryptionContext: {
                  shape: 'S59'
                },
                DataAccessRoleArn: {},
                Settings: {
                  shape: 'S2x'
                },
                ChannelDefinitions: {
                  shape: 'S2z'
                },
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MedicalScribeJob: {
                  shape: 'S2t'
                }
              }
            }
          },
          StartMedicalTranscriptionJob: {
            input: {
              type: 'structure',
              required: ['MedicalTranscriptionJobName', 'LanguageCode', 'Media', 'OutputBucketName', 'Specialty', 'Type'],
              members: {
                MedicalTranscriptionJobName: {},
                LanguageCode: {},
                MediaSampleRateHertz: {
                  type: 'integer'
                },
                MediaFormat: {},
                Media: {
                  shape: 'S2a'
                },
                OutputBucketName: {},
                OutputKey: {},
                OutputEncryptionKMSKeyId: {},
                KMSEncryptionContext: {
                  shape: 'S59'
                },
                Settings: {
                  shape: 'S39'
                },
                ContentIdentificationType: {},
                Specialty: {},
                Type: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MedicalTranscriptionJob: {
                  shape: 'S35'
                }
              }
            }
          },
          StartTranscriptionJob: {
            input: {
              type: 'structure',
              required: ['TranscriptionJobName', 'Media'],
              members: {
                TranscriptionJobName: {},
                LanguageCode: {},
                MediaSampleRateHertz: {
                  type: 'integer'
                },
                MediaFormat: {},
                Media: {
                  shape: 'S2a'
                },
                OutputBucketName: {},
                OutputKey: {},
                OutputEncryptionKMSKeyId: {},
                KMSEncryptionContext: {
                  shape: 'S59'
                },
                Settings: {
                  shape: 'S3j'
                },
                ModelSettings: {
                  shape: 'S3k'
                },
                JobExecutionSettings: {
                  shape: 'S3l'
                },
                ContentRedaction: {
                  shape: 'S2f'
                },
                IdentifyLanguage: {
                  type: 'boolean'
                },
                IdentifyMultipleLanguages: {
                  type: 'boolean'
                },
                LanguageOptions: {
                  shape: 'S2k'
                },
                Subtitles: {
                  type: 'structure',
                  members: {
                    Formats: {
                      shape: 'S3q'
                    },
                    OutputStartIndex: {
                      type: 'integer'
                    }
                  }
                },
                Tags: {
                  shape: 'Sv'
                },
                LanguageIdSettings: {
                  shape: 'S2l'
                },
                ToxicityDetection: {
                  shape: 'S3u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TranscriptionJob: {
                  shape: 'S3i'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
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
          UpdateCallAnalyticsCategory: {
            input: {
              type: 'structure',
              required: ['CategoryName', 'Rules'],
              members: {
                CategoryName: {},
                Rules: {
                  shape: 'S3'
                },
                InputType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CategoryProperties: {
                  shape: 'Sm'
                }
              }
            }
          },
          UpdateMedicalVocabulary: {
            input: {
              type: 'structure',
              required: ['VocabularyName', 'LanguageCode', 'VocabularyFileUri'],
              members: {
                VocabularyName: {},
                LanguageCode: {},
                VocabularyFileUri: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyName: {},
                LanguageCode: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                VocabularyState: {}
              }
            }
          },
          UpdateVocabulary: {
            input: {
              type: 'structure',
              required: ['VocabularyName', 'LanguageCode'],
              members: {
                VocabularyName: {},
                LanguageCode: {},
                Phrases: {
                  shape: 'S18'
                },
                VocabularyFileUri: {},
                DataAccessRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyName: {},
                LanguageCode: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                VocabularyState: {}
              }
            }
          },
          UpdateVocabularyFilter: {
            input: {
              type: 'structure',
              required: ['VocabularyFilterName'],
              members: {
                VocabularyFilterName: {},
                Words: {
                  shape: 'S1d'
                },
                VocabularyFilterFileUri: {},
                DataAccessRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularyFilterName: {},
                LanguageCode: {},
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                NonTalkTimeFilter: {
                  type: 'structure',
                  members: {
                    Threshold: {
                      type: 'long'
                    },
                    AbsoluteTimeRange: {
                      shape: 'S7'
                    },
                    RelativeTimeRange: {
                      shape: 'S8'
                    },
                    Negate: {
                      type: 'boolean'
                    }
                  }
                },
                InterruptionFilter: {
                  type: 'structure',
                  members: {
                    Threshold: {
                      type: 'long'
                    },
                    ParticipantRole: {},
                    AbsoluteTimeRange: {
                      shape: 'S7'
                    },
                    RelativeTimeRange: {
                      shape: 'S8'
                    },
                    Negate: {
                      type: 'boolean'
                    }
                  }
                },
                TranscriptFilter: {
                  type: 'structure',
                  required: ['TranscriptFilterType', 'Targets'],
                  members: {
                    TranscriptFilterType: {},
                    AbsoluteTimeRange: {
                      shape: 'S7'
                    },
                    RelativeTimeRange: {
                      shape: 'S8'
                    },
                    ParticipantRole: {},
                    Negate: {
                      type: 'boolean'
                    },
                    Targets: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                SentimentFilter: {
                  type: 'structure',
                  required: ['Sentiments'],
                  members: {
                    Sentiments: {
                      type: 'list',
                      member: {}
                    },
                    AbsoluteTimeRange: {
                      shape: 'S7'
                    },
                    RelativeTimeRange: {
                      shape: 'S8'
                    },
                    ParticipantRole: {},
                    Negate: {
                      type: 'boolean'
                    }
                  }
                }
              },
              union: true
            }
          },
          S7: {
            type: 'structure',
            members: {
              StartTime: {
                type: 'long'
              },
              EndTime: {
                type: 'long'
              },
              First: {
                type: 'long'
              },
              Last: {
                type: 'long'
              }
            }
          },
          S8: {
            type: 'structure',
            members: {
              StartPercentage: {
                type: 'integer'
              },
              EndPercentage: {
                type: 'integer'
              },
              First: {
                type: 'integer'
              },
              Last: {
                type: 'integer'
              }
            }
          },
          Sm: {
            type: 'structure',
            members: {
              CategoryName: {},
              Rules: {
                shape: 'S3'
              },
              CreateTime: {
                type: 'timestamp'
              },
              LastUpdateTime: {
                type: 'timestamp'
              },
              InputType: {}
            }
          },
          Ss: {
            type: 'structure',
            required: ['S3Uri', 'DataAccessRoleArn'],
            members: {
              S3Uri: {},
              TuningDataS3Uri: {},
              DataAccessRoleArn: {}
            }
          },
          Sv: {
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
          S18: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'list',
            member: {}
          },
          S1v: {
            type: 'structure',
            members: {
              ModelName: {},
              CreateTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              LanguageCode: {},
              BaseModelName: {},
              ModelStatus: {},
              UpgradeAvailability: {
                type: 'boolean'
              },
              FailureReason: {},
              InputDataConfig: {
                shape: 'Ss'
              }
            }
          },
          S20: {
            type: 'structure',
            members: {
              CallAnalyticsJobName: {},
              CallAnalyticsJobStatus: {},
              CallAnalyticsJobDetails: {
                shape: 'S22'
              },
              LanguageCode: {},
              MediaSampleRateHertz: {
                type: 'integer'
              },
              MediaFormat: {},
              Media: {
                shape: 'S2a'
              },
              Transcript: {
                shape: 'S2b'
              },
              StartTime: {
                type: 'timestamp'
              },
              CreationTime: {
                type: 'timestamp'
              },
              CompletionTime: {
                type: 'timestamp'
              },
              FailureReason: {},
              DataAccessRoleArn: {},
              IdentifiedLanguageScore: {
                type: 'float'
              },
              Settings: {
                shape: 'S2d'
              },
              ChannelDefinitions: {
                shape: 'S2o'
              }
            }
          },
          S22: {
            type: 'structure',
            members: {
              Skipped: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Feature: {},
                    ReasonCode: {},
                    Message: {}
                  }
                }
              }
            }
          },
          S2a: {
            type: 'structure',
            members: {
              MediaFileUri: {},
              RedactedMediaFileUri: {}
            }
          },
          S2b: {
            type: 'structure',
            members: {
              TranscriptFileUri: {},
              RedactedTranscriptFileUri: {}
            }
          },
          S2d: {
            type: 'structure',
            members: {
              VocabularyName: {},
              VocabularyFilterName: {},
              VocabularyFilterMethod: {},
              LanguageModelName: {},
              ContentRedaction: {
                shape: 'S2f'
              },
              LanguageOptions: {
                shape: 'S2k'
              },
              LanguageIdSettings: {
                shape: 'S2l'
              },
              Summarization: {
                type: 'structure',
                required: ['GenerateAbstractiveSummary'],
                members: {
                  GenerateAbstractiveSummary: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S2f: {
            type: 'structure',
            required: ['RedactionType', 'RedactionOutput'],
            members: {
              RedactionType: {},
              RedactionOutput: {},
              PiiEntityTypes: {
                type: 'list',
                member: {}
              }
            }
          },
          S2k: {
            type: 'list',
            member: {}
          },
          S2l: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                VocabularyName: {},
                VocabularyFilterName: {},
                LanguageModelName: {}
              }
            }
          },
          S2o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ChannelId: {
                  type: 'integer'
                },
                ParticipantRole: {}
              }
            }
          },
          S2t: {
            type: 'structure',
            members: {
              MedicalScribeJobName: {},
              MedicalScribeJobStatus: {},
              LanguageCode: {},
              Media: {
                shape: 'S2a'
              },
              MedicalScribeOutput: {
                type: 'structure',
                required: ['TranscriptFileUri', 'ClinicalDocumentUri'],
                members: {
                  TranscriptFileUri: {},
                  ClinicalDocumentUri: {}
                }
              },
              StartTime: {
                type: 'timestamp'
              },
              CreationTime: {
                type: 'timestamp'
              },
              CompletionTime: {
                type: 'timestamp'
              },
              FailureReason: {},
              Settings: {
                shape: 'S2x'
              },
              DataAccessRoleArn: {},
              ChannelDefinitions: {
                shape: 'S2z'
              },
              Tags: {
                shape: 'Sv'
              }
            }
          },
          S2x: {
            type: 'structure',
            members: {
              ShowSpeakerLabels: {
                type: 'boolean'
              },
              MaxSpeakerLabels: {
                type: 'integer'
              },
              ChannelIdentification: {
                type: 'boolean'
              },
              VocabularyName: {},
              VocabularyFilterName: {},
              VocabularyFilterMethod: {}
            }
          },
          S2z: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ChannelId', 'ParticipantRole'],
              members: {
                ChannelId: {
                  type: 'integer'
                },
                ParticipantRole: {}
              }
            }
          },
          S35: {
            type: 'structure',
            members: {
              MedicalTranscriptionJobName: {},
              TranscriptionJobStatus: {},
              LanguageCode: {},
              MediaSampleRateHertz: {
                type: 'integer'
              },
              MediaFormat: {},
              Media: {
                shape: 'S2a'
              },
              Transcript: {
                type: 'structure',
                members: {
                  TranscriptFileUri: {}
                }
              },
              StartTime: {
                type: 'timestamp'
              },
              CreationTime: {
                type: 'timestamp'
              },
              CompletionTime: {
                type: 'timestamp'
              },
              FailureReason: {},
              Settings: {
                shape: 'S39'
              },
              ContentIdentificationType: {},
              Specialty: {},
              Type: {},
              Tags: {
                shape: 'Sv'
              }
            }
          },
          S39: {
            type: 'structure',
            members: {
              ShowSpeakerLabels: {
                type: 'boolean'
              },
              MaxSpeakerLabels: {
                type: 'integer'
              },
              ChannelIdentification: {
                type: 'boolean'
              },
              ShowAlternatives: {
                type: 'boolean'
              },
              MaxAlternatives: {
                type: 'integer'
              },
              VocabularyName: {}
            }
          },
          S3i: {
            type: 'structure',
            members: {
              TranscriptionJobName: {},
              TranscriptionJobStatus: {},
              LanguageCode: {},
              MediaSampleRateHertz: {
                type: 'integer'
              },
              MediaFormat: {},
              Media: {
                shape: 'S2a'
              },
              Transcript: {
                shape: 'S2b'
              },
              StartTime: {
                type: 'timestamp'
              },
              CreationTime: {
                type: 'timestamp'
              },
              CompletionTime: {
                type: 'timestamp'
              },
              FailureReason: {},
              Settings: {
                shape: 'S3j'
              },
              ModelSettings: {
                shape: 'S3k'
              },
              JobExecutionSettings: {
                shape: 'S3l'
              },
              ContentRedaction: {
                shape: 'S2f'
              },
              IdentifyLanguage: {
                type: 'boolean'
              },
              IdentifyMultipleLanguages: {
                type: 'boolean'
              },
              LanguageOptions: {
                shape: 'S2k'
              },
              IdentifiedLanguageScore: {
                type: 'float'
              },
              LanguageCodes: {
                shape: 'S3m'
              },
              Tags: {
                shape: 'Sv'
              },
              Subtitles: {
                type: 'structure',
                members: {
                  Formats: {
                    shape: 'S3q'
                  },
                  SubtitleFileUris: {
                    type: 'list',
                    member: {}
                  },
                  OutputStartIndex: {
                    type: 'integer'
                  }
                }
              },
              LanguageIdSettings: {
                shape: 'S2l'
              },
              ToxicityDetection: {
                shape: 'S3u'
              }
            }
          },
          S3j: {
            type: 'structure',
            members: {
              VocabularyName: {},
              ShowSpeakerLabels: {
                type: 'boolean'
              },
              MaxSpeakerLabels: {
                type: 'integer'
              },
              ChannelIdentification: {
                type: 'boolean'
              },
              ShowAlternatives: {
                type: 'boolean'
              },
              MaxAlternatives: {
                type: 'integer'
              },
              VocabularyFilterName: {},
              VocabularyFilterMethod: {}
            }
          },
          S3k: {
            type: 'structure',
            members: {
              LanguageModelName: {}
            }
          },
          S3l: {
            type: 'structure',
            members: {
              AllowDeferredExecution: {
                type: 'boolean'
              },
              DataAccessRoleArn: {}
            }
          },
          S3m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LanguageCode: {},
                DurationInSeconds: {
                  type: 'float'
                }
              }
            }
          },
          S3q: {
            type: 'list',
            member: {}
          },
          S3u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ToxicityCategories'],
              members: {
                ToxicityCategories: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S4p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                VocabularyName: {},
                LanguageCode: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                VocabularyState: {}
              }
            }
          },
          S59: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=524ad46aef9805fe9db199f914c699ece9358f07.js.map