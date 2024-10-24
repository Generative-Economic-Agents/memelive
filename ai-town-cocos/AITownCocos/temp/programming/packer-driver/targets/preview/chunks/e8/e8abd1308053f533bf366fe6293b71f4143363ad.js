System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-01',
          endpointPrefix: 'translate',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Translate',
          serviceId: 'Translate',
          signatureVersion: 'v4',
          signingName: 'translate',
          targetPrefix: 'AWSShineFrontendService_20170701',
          uid: 'translate-2017-07-01'
        },
        operations: {
          CreateParallelData: {
            input: {
              type: 'structure',
              required: ['Name', 'ParallelDataConfig', 'ClientToken'],
              members: {
                Name: {},
                Description: {},
                ParallelDataConfig: {
                  shape: 'S4'
                },
                EncryptionKey: {
                  shape: 'S7'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Status: {}
              }
            }
          },
          DeleteParallelData: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Status: {}
              }
            }
          },
          DeleteTerminology: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DescribeTextTranslationJob: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TextTranslationJobProperties: {
                  shape: 'Sn'
                }
              }
            }
          },
          GetParallelData: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ParallelDataProperties: {
                  shape: 'S17'
                },
                DataLocation: {
                  shape: 'S1b'
                },
                AuxiliaryDataLocation: {
                  shape: 'S1b'
                },
                LatestUpdateAttemptAuxiliaryDataLocation: {
                  shape: 'S1b'
                }
              }
            }
          },
          GetTerminology: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                TerminologyDataFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TerminologyProperties: {
                  shape: 'S1g'
                },
                TerminologyDataLocation: {
                  shape: 'S1j'
                },
                AuxiliaryDataLocation: {
                  shape: 'S1j'
                }
              }
            }
          },
          ImportTerminology: {
            input: {
              type: 'structure',
              required: ['Name', 'MergeStrategy', 'TerminologyData'],
              members: {
                Name: {},
                MergeStrategy: {},
                Description: {},
                TerminologyData: {
                  type: 'structure',
                  required: ['File', 'Format'],
                  members: {
                    File: {
                      type: 'blob',
                      sensitive: true
                    },
                    Format: {},
                    Directionality: {}
                  }
                },
                EncryptionKey: {
                  shape: 'S7'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TerminologyProperties: {
                  shape: 'S1g'
                },
                AuxiliaryDataLocation: {
                  shape: 'S1j'
                }
              }
            }
          },
          ListLanguages: {
            input: {
              type: 'structure',
              members: {
                DisplayLanguageCode: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Languages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['LanguageName', 'LanguageCode'],
                    members: {
                      LanguageName: {},
                      LanguageCode: {}
                    }
                  }
                },
                DisplayLanguageCode: {},
                NextToken: {}
              }
            }
          },
          ListParallelData: {
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
                ParallelDataPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S17'
                  }
                },
                NextToken: {}
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
                Tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          ListTerminologies: {
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
                TerminologyPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S1g'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTextTranslationJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    JobName: {},
                    JobStatus: {},
                    SubmittedBeforeTime: {
                      type: 'timestamp'
                    },
                    SubmittedAfterTime: {
                      type: 'timestamp'
                    }
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TextTranslationJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                NextToken: {}
              }
            }
          },
          StartTextTranslationJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'SourceLanguageCode', 'TargetLanguageCodes', 'ClientToken'],
              members: {
                JobName: {},
                InputDataConfig: {
                  shape: 'Sx'
                },
                OutputDataConfig: {
                  shape: 'Sz'
                },
                DataAccessRoleArn: {},
                SourceLanguageCode: {},
                TargetLanguageCodes: {
                  shape: 'St'
                },
                TerminologyNames: {
                  shape: 'Su'
                },
                ParallelDataNames: {
                  shape: 'Su'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Settings: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobStatus: {}
              }
            }
          },
          StopTextTranslationJob: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobStatus: {}
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
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TranslateDocument: {
            input: {
              type: 'structure',
              required: ['Document', 'SourceLanguageCode', 'TargetLanguageCode'],
              members: {
                Document: {
                  type: 'structure',
                  required: ['Content', 'ContentType'],
                  members: {
                    Content: {
                      type: 'blob',
                      sensitive: true
                    },
                    ContentType: {}
                  }
                },
                TerminologyNames: {
                  shape: 'Su'
                },
                SourceLanguageCode: {},
                TargetLanguageCode: {},
                Settings: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TranslatedDocument', 'SourceLanguageCode', 'TargetLanguageCode'],
              members: {
                TranslatedDocument: {
                  type: 'structure',
                  required: ['Content'],
                  members: {
                    Content: {
                      type: 'blob',
                      sensitive: true
                    }
                  }
                },
                SourceLanguageCode: {},
                TargetLanguageCode: {},
                AppliedTerminologies: {
                  shape: 'S2m'
                },
                AppliedSettings: {
                  shape: 'S11'
                }
              }
            }
          },
          TranslateText: {
            input: {
              type: 'structure',
              required: ['Text', 'SourceLanguageCode', 'TargetLanguageCode'],
              members: {
                Text: {},
                TerminologyNames: {
                  shape: 'Su'
                },
                SourceLanguageCode: {},
                TargetLanguageCode: {},
                Settings: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TranslatedText', 'SourceLanguageCode', 'TargetLanguageCode'],
              members: {
                TranslatedText: {},
                SourceLanguageCode: {},
                TargetLanguageCode: {},
                AppliedTerminologies: {
                  shape: 'S2m'
                },
                AppliedSettings: {
                  shape: 'S11'
                }
              }
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
          UpdateParallelData: {
            input: {
              type: 'structure',
              required: ['Name', 'ParallelDataConfig', 'ClientToken'],
              members: {
                Name: {},
                Description: {},
                ParallelDataConfig: {
                  shape: 'S4'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Status: {},
                LatestUpdateAttemptStatus: {},
                LatestUpdateAttemptAt: {
                  type: 'timestamp'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              S3Uri: {},
              Format: {}
            }
          },
          S7: {
            type: 'structure',
            required: ['Type', 'Id'],
            members: {
              Type: {},
              Id: {}
            }
          },
          Sb: {
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
          Sn: {
            type: 'structure',
            members: {
              JobId: {},
              JobName: {},
              JobStatus: {},
              JobDetails: {
                type: 'structure',
                members: {
                  TranslatedDocumentsCount: {
                    type: 'integer'
                  },
                  DocumentsWithErrorsCount: {
                    type: 'integer'
                  },
                  InputDocumentsCount: {
                    type: 'integer'
                  }
                }
              },
              SourceLanguageCode: {},
              TargetLanguageCodes: {
                shape: 'St'
              },
              TerminologyNames: {
                shape: 'Su'
              },
              ParallelDataNames: {
                shape: 'Su'
              },
              Message: {},
              SubmittedTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'Sx'
              },
              OutputDataConfig: {
                shape: 'Sz'
              },
              DataAccessRoleArn: {},
              Settings: {
                shape: 'S11'
              }
            }
          },
          St: {
            type: 'list',
            member: {}
          },
          Su: {
            type: 'list',
            member: {}
          },
          Sx: {
            type: 'structure',
            required: ['S3Uri', 'ContentType'],
            members: {
              S3Uri: {},
              ContentType: {}
            }
          },
          Sz: {
            type: 'structure',
            required: ['S3Uri'],
            members: {
              S3Uri: {},
              EncryptionKey: {
                shape: 'S7'
              }
            }
          },
          S11: {
            type: 'structure',
            members: {
              Formality: {},
              Profanity: {},
              Brevity: {}
            }
          },
          S17: {
            type: 'structure',
            members: {
              Name: {},
              Arn: {},
              Description: {},
              Status: {},
              SourceLanguageCode: {},
              TargetLanguageCodes: {
                shape: 'S19'
              },
              ParallelDataConfig: {
                shape: 'S4'
              },
              Message: {},
              ImportedDataSize: {
                type: 'long'
              },
              ImportedRecordCount: {
                type: 'long'
              },
              FailedRecordCount: {
                type: 'long'
              },
              SkippedRecordCount: {
                type: 'long'
              },
              EncryptionKey: {
                shape: 'S7'
              },
              CreatedAt: {
                type: 'timestamp'
              },
              LastUpdatedAt: {
                type: 'timestamp'
              },
              LatestUpdateAttemptStatus: {},
              LatestUpdateAttemptAt: {
                type: 'timestamp'
              }
            }
          },
          S19: {
            type: 'list',
            member: {}
          },
          S1b: {
            type: 'structure',
            required: ['RepositoryType', 'Location'],
            members: {
              RepositoryType: {},
              Location: {}
            }
          },
          S1g: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              Arn: {},
              SourceLanguageCode: {},
              TargetLanguageCodes: {
                shape: 'S19'
              },
              EncryptionKey: {
                shape: 'S7'
              },
              SizeBytes: {
                type: 'integer'
              },
              TermCount: {
                type: 'integer'
              },
              CreatedAt: {
                type: 'timestamp'
              },
              LastUpdatedAt: {
                type: 'timestamp'
              },
              Directionality: {},
              Message: {},
              SkippedTermCount: {
                type: 'integer'
              },
              Format: {}
            }
          },
          S1j: {
            type: 'structure',
            required: ['RepositoryType', 'Location'],
            members: {
              RepositoryType: {},
              Location: {}
            }
          },
          S2m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Terms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceText: {},
                      TargetText: {}
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e8abd1308053f533bf366fe6293b71f4143363ad.js.map