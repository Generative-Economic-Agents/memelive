System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-10-30',
          endpointPrefix: 'comprehendmedical',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'ComprehendMedical',
          serviceFullName: 'AWS Comprehend Medical',
          serviceId: 'ComprehendMedical',
          signatureVersion: 'v4',
          signingName: 'comprehendmedical',
          targetPrefix: 'ComprehendMedical_20181030',
          uid: 'comprehendmedical-2018-10-30'
        },
        operations: {
          DescribeEntitiesDetectionV2Job: {
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
                ComprehendMedicalAsyncJobProperties: {
                  shape: 'S4'
                }
              }
            }
          },
          DescribeICD10CMInferenceJob: {
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
                ComprehendMedicalAsyncJobProperties: {
                  shape: 'S4'
                }
              }
            }
          },
          DescribePHIDetectionJob: {
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
                ComprehendMedicalAsyncJobProperties: {
                  shape: 'S4'
                }
              }
            }
          },
          DescribeRxNormInferenceJob: {
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
                ComprehendMedicalAsyncJobProperties: {
                  shape: 'S4'
                }
              }
            }
          },
          DescribeSNOMEDCTInferenceJob: {
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
                ComprehendMedicalAsyncJobProperties: {
                  shape: 'S4'
                }
              }
            }
          },
          DetectEntities: {
            input: {
              type: 'structure',
              required: ['Text'],
              members: {
                Text: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entities', 'ModelVersion'],
              members: {
                Entities: {
                  shape: 'St'
                },
                UnmappedAttributes: {
                  shape: 'S16'
                },
                PaginationToken: {},
                ModelVersion: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This operation is deprecated, use DetectEntitiesV2 instead.'
          },
          DetectEntitiesV2: {
            input: {
              type: 'structure',
              required: ['Text'],
              members: {
                Text: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entities', 'ModelVersion'],
              members: {
                Entities: {
                  shape: 'St'
                },
                UnmappedAttributes: {
                  shape: 'S16'
                },
                PaginationToken: {},
                ModelVersion: {}
              }
            }
          },
          DetectPHI: {
            input: {
              type: 'structure',
              required: ['Text'],
              members: {
                Text: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entities', 'ModelVersion'],
              members: {
                Entities: {
                  shape: 'St'
                },
                PaginationToken: {},
                ModelVersion: {}
              }
            }
          },
          InferICD10CM: {
            input: {
              type: 'structure',
              required: ['Text'],
              members: {
                Text: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entities'],
              members: {
                Entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {
                        type: 'integer'
                      },
                      Text: {},
                      Category: {},
                      Type: {},
                      Score: {
                        type: 'float'
                      },
                      BeginOffset: {
                        type: 'integer'
                      },
                      EndOffset: {
                        type: 'integer'
                      },
                      Attributes: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Type: {},
                            Score: {
                              type: 'float'
                            },
                            RelationshipScore: {
                              type: 'float'
                            },
                            Id: {
                              type: 'integer'
                            },
                            BeginOffset: {
                              type: 'integer'
                            },
                            EndOffset: {
                              type: 'integer'
                            },
                            Text: {},
                            Traits: {
                              shape: 'S1m'
                            },
                            Category: {},
                            RelationshipType: {}
                          }
                        }
                      },
                      Traits: {
                        shape: 'S1m'
                      },
                      ICD10CMConcepts: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Description: {},
                            Code: {},
                            Score: {
                              type: 'float'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                PaginationToken: {},
                ModelVersion: {}
              }
            }
          },
          InferRxNorm: {
            input: {
              type: 'structure',
              required: ['Text'],
              members: {
                Text: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entities'],
              members: {
                Entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {
                        type: 'integer'
                      },
                      Text: {},
                      Category: {},
                      Type: {},
                      Score: {
                        type: 'float'
                      },
                      BeginOffset: {
                        type: 'integer'
                      },
                      EndOffset: {
                        type: 'integer'
                      },
                      Attributes: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Type: {},
                            Score: {
                              type: 'float'
                            },
                            RelationshipScore: {
                              type: 'float'
                            },
                            Id: {
                              type: 'integer'
                            },
                            BeginOffset: {
                              type: 'integer'
                            },
                            EndOffset: {
                              type: 'integer'
                            },
                            Text: {},
                            Traits: {
                              shape: 'S21'
                            }
                          }
                        }
                      },
                      Traits: {
                        shape: 'S21'
                      },
                      RxNormConcepts: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Description: {},
                            Code: {},
                            Score: {
                              type: 'float'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                PaginationToken: {},
                ModelVersion: {}
              }
            }
          },
          InferSNOMEDCT: {
            input: {
              type: 'structure',
              required: ['Text'],
              members: {
                Text: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entities'],
              members: {
                Entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {
                        type: 'integer'
                      },
                      Text: {},
                      Category: {},
                      Type: {},
                      Score: {
                        type: 'float'
                      },
                      BeginOffset: {
                        type: 'integer'
                      },
                      EndOffset: {
                        type: 'integer'
                      },
                      Attributes: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Category: {},
                            Type: {},
                            Score: {
                              type: 'float'
                            },
                            RelationshipScore: {
                              type: 'float'
                            },
                            RelationshipType: {},
                            Id: {
                              type: 'integer'
                            },
                            BeginOffset: {
                              type: 'integer'
                            },
                            EndOffset: {
                              type: 'integer'
                            },
                            Text: {},
                            Traits: {
                              shape: 'S2g'
                            },
                            SNOMEDCTConcepts: {
                              shape: 'S2j'
                            }
                          }
                        }
                      },
                      Traits: {
                        shape: 'S2g'
                      },
                      SNOMEDCTConcepts: {
                        shape: 'S2j'
                      }
                    }
                  }
                },
                PaginationToken: {},
                ModelVersion: {},
                SNOMEDCTDetails: {
                  type: 'structure',
                  members: {
                    Edition: {},
                    Language: {},
                    VersionDate: {}
                  }
                },
                Characters: {
                  type: 'structure',
                  members: {
                    OriginalTextCharacters: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          ListEntitiesDetectionV2Jobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  shape: 'S2o'
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
                ComprehendMedicalAsyncJobPropertiesList: {
                  shape: 'S2r'
                },
                NextToken: {}
              }
            }
          },
          ListICD10CMInferenceJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  shape: 'S2o'
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
                ComprehendMedicalAsyncJobPropertiesList: {
                  shape: 'S2r'
                },
                NextToken: {}
              }
            }
          },
          ListPHIDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  shape: 'S2o'
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
                ComprehendMedicalAsyncJobPropertiesList: {
                  shape: 'S2r'
                },
                NextToken: {}
              }
            }
          },
          ListRxNormInferenceJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  shape: 'S2o'
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
                ComprehendMedicalAsyncJobPropertiesList: {
                  shape: 'S2r'
                },
                NextToken: {}
              }
            }
          },
          ListSNOMEDCTInferenceJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  shape: 'S2o'
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
                ComprehendMedicalAsyncJobPropertiesList: {
                  shape: 'S2r'
                },
                NextToken: {}
              }
            }
          },
          StartEntitiesDetectionV2Job: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S9'
                },
                OutputDataConfig: {
                  shape: 'Sc'
                },
                DataAccessRoleArn: {},
                JobName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                KMSKey: {},
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          StartICD10CMInferenceJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S9'
                },
                OutputDataConfig: {
                  shape: 'Sc'
                },
                DataAccessRoleArn: {},
                JobName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                KMSKey: {},
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          StartPHIDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S9'
                },
                OutputDataConfig: {
                  shape: 'Sc'
                },
                DataAccessRoleArn: {},
                JobName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                KMSKey: {},
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          StartRxNormInferenceJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S9'
                },
                OutputDataConfig: {
                  shape: 'Sc'
                },
                DataAccessRoleArn: {},
                JobName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                KMSKey: {},
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          StartSNOMEDCTInferenceJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S9'
                },
                OutputDataConfig: {
                  shape: 'Sc'
                },
                DataAccessRoleArn: {},
                JobName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                KMSKey: {},
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          StopEntitiesDetectionV2Job: {
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
                JobId: {}
              }
            }
          },
          StopICD10CMInferenceJob: {
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
                JobId: {}
              }
            }
          },
          StopPHIDetectionJob: {
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
                JobId: {}
              }
            }
          },
          StopRxNormInferenceJob: {
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
                JobId: {}
              }
            }
          },
          StopSNOMEDCTInferenceJob: {
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
                JobId: {}
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              JobId: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              ExpirationTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S9'
              },
              OutputDataConfig: {
                shape: 'Sc'
              },
              LanguageCode: {},
              DataAccessRoleArn: {},
              ManifestFilePath: {},
              KMSKey: {},
              ModelVersion: {}
            }
          },
          S9: {
            type: 'structure',
            required: ['S3Bucket'],
            members: {
              S3Bucket: {},
              S3Key: {}
            }
          },
          Sc: {
            type: 'structure',
            required: ['S3Bucket'],
            members: {
              S3Bucket: {},
              S3Key: {}
            }
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {
                  type: 'integer'
                },
                BeginOffset: {
                  type: 'integer'
                },
                EndOffset: {
                  type: 'integer'
                },
                Score: {
                  type: 'float'
                },
                Text: {},
                Category: {},
                Type: {},
                Traits: {
                  shape: 'S10'
                },
                Attributes: {
                  type: 'list',
                  member: {
                    shape: 'S14'
                  }
                }
              }
            }
          },
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Score: {
                  type: 'float'
                }
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              Type: {},
              Score: {
                type: 'float'
              },
              RelationshipScore: {
                type: 'float'
              },
              RelationshipType: {},
              Id: {
                type: 'integer'
              },
              BeginOffset: {
                type: 'integer'
              },
              EndOffset: {
                type: 'integer'
              },
              Text: {},
              Category: {},
              Traits: {
                shape: 'S10'
              }
            }
          },
          S16: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Attribute: {
                  shape: 'S14'
                }
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Score: {
                  type: 'float'
                }
              }
            }
          },
          S21: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Score: {
                  type: 'float'
                }
              }
            }
          },
          S2g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Score: {
                  type: 'float'
                }
              }
            }
          },
          S2j: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Description: {},
                Code: {},
                Score: {
                  type: 'float'
                }
              }
            }
          },
          S2o: {
            type: 'structure',
            members: {
              JobName: {},
              JobStatus: {},
              SubmitTimeBefore: {
                type: 'timestamp'
              },
              SubmitTimeAfter: {
                type: 'timestamp'
              }
            }
          },
          S2r: {
            type: 'list',
            member: {
              shape: 'S4'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=55b013d0c8fd76e9b00f7eba70862ef00fdf4db7.js.map