System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-11-27',
          endpointPrefix: 'comprehend',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Comprehend',
          serviceId: 'Comprehend',
          signatureVersion: 'v4',
          signingName: 'comprehend',
          targetPrefix: 'Comprehend_20171127',
          uid: 'comprehend-2017-11-27'
        },
        operations: {
          BatchDetectDominantLanguage: {
            input: {
              type: 'structure',
              required: ['TextList'],
              members: {
                TextList: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResultList', 'ErrorList'],
              members: {
                ResultList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Index: {
                        type: 'integer'
                      },
                      Languages: {
                        shape: 'S8'
                      }
                    }
                  }
                },
                ErrorList: {
                  shape: 'Sc'
                }
              },
              sensitive: true
            }
          },
          BatchDetectEntities: {
            input: {
              type: 'structure',
              required: ['TextList', 'LanguageCode'],
              members: {
                TextList: {
                  shape: 'S2'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResultList', 'ErrorList'],
              members: {
                ResultList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Index: {
                        type: 'integer'
                      },
                      Entities: {
                        shape: 'Sj'
                      }
                    }
                  }
                },
                ErrorList: {
                  shape: 'Sc'
                }
              },
              sensitive: true
            }
          },
          BatchDetectKeyPhrases: {
            input: {
              type: 'structure',
              required: ['TextList', 'LanguageCode'],
              members: {
                TextList: {
                  shape: 'S2'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResultList', 'ErrorList'],
              members: {
                ResultList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Index: {
                        type: 'integer'
                      },
                      KeyPhrases: {
                        shape: 'Su'
                      }
                    }
                  }
                },
                ErrorList: {
                  shape: 'Sc'
                }
              },
              sensitive: true
            }
          },
          BatchDetectSentiment: {
            input: {
              type: 'structure',
              required: ['TextList', 'LanguageCode'],
              members: {
                TextList: {
                  shape: 'S2'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResultList', 'ErrorList'],
              members: {
                ResultList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Index: {
                        type: 'integer'
                      },
                      Sentiment: {},
                      SentimentScore: {
                        shape: 'S11'
                      }
                    }
                  }
                },
                ErrorList: {
                  shape: 'Sc'
                }
              },
              sensitive: true
            }
          },
          BatchDetectSyntax: {
            input: {
              type: 'structure',
              required: ['TextList', 'LanguageCode'],
              members: {
                TextList: {
                  shape: 'S2'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResultList', 'ErrorList'],
              members: {
                ResultList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Index: {
                        type: 'integer'
                      },
                      SyntaxTokens: {
                        shape: 'S17'
                      }
                    }
                  }
                },
                ErrorList: {
                  shape: 'Sc'
                }
              },
              sensitive: true
            }
          },
          BatchDetectTargetedSentiment: {
            input: {
              type: 'structure',
              required: ['TextList', 'LanguageCode'],
              members: {
                TextList: {
                  shape: 'S2'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResultList', 'ErrorList'],
              members: {
                ResultList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Index: {
                        type: 'integer'
                      },
                      Entities: {
                        shape: 'S1f'
                      }
                    }
                  }
                },
                ErrorList: {
                  shape: 'Sc'
                }
              },
              sensitive: true
            }
          },
          ClassifyDocument: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                Text: {
                  shape: 'S3'
                },
                EndpointArn: {},
                Bytes: {
                  type: 'blob'
                },
                DocumentReaderConfig: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Classes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Score: {
                        type: 'float'
                      },
                      Page: {
                        type: 'integer'
                      }
                    }
                  }
                },
                Labels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Score: {
                        type: 'float'
                      },
                      Page: {
                        type: 'integer'
                      }
                    }
                  }
                },
                DocumentMetadata: {
                  shape: 'S1z'
                },
                DocumentType: {
                  shape: 'S22'
                },
                Errors: {
                  shape: 'S25'
                },
                Warnings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Page: {
                        type: 'integer'
                      },
                      WarnCode: {},
                      WarnMessage: {}
                    }
                  }
                }
              },
              sensitive: true
            }
          },
          ContainsPiiEntities: {
            input: {
              type: 'structure',
              required: ['Text', 'LanguageCode'],
              members: {
                Text: {},
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Labels: {
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
                }
              }
            }
          },
          CreateDataset: {
            input: {
              type: 'structure',
              required: ['FlywheelArn', 'DatasetName', 'InputDataConfig'],
              members: {
                FlywheelArn: {},
                DatasetName: {},
                DatasetType: {},
                Description: {},
                InputDataConfig: {
                  type: 'structure',
                  members: {
                    AugmentedManifests: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['AttributeNames', 'S3Uri'],
                        members: {
                          AttributeNames: {
                            shape: 'S2o'
                          },
                          S3Uri: {},
                          AnnotationDataS3Uri: {},
                          SourceDocumentsS3Uri: {},
                          DocumentType: {}
                        }
                      }
                    },
                    DataFormat: {},
                    DocumentClassifierInputDataConfig: {
                      type: 'structure',
                      required: ['S3Uri'],
                      members: {
                        S3Uri: {},
                        LabelDelimiter: {}
                      }
                    },
                    EntityRecognizerInputDataConfig: {
                      type: 'structure',
                      required: ['Documents'],
                      members: {
                        Annotations: {
                          type: 'structure',
                          required: ['S3Uri'],
                          members: {
                            S3Uri: {}
                          }
                        },
                        Documents: {
                          type: 'structure',
                          required: ['S3Uri'],
                          members: {
                            S3Uri: {},
                            InputFormat: {}
                          }
                        },
                        EntityList: {
                          type: 'structure',
                          required: ['S3Uri'],
                          members: {
                            S3Uri: {}
                          }
                        }
                      }
                    }
                  }
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetArn: {}
              }
            }
          },
          CreateDocumentClassifier: {
            input: {
              type: 'structure',
              required: ['DocumentClassifierName', 'DataAccessRoleArn', 'InputDataConfig', 'LanguageCode'],
              members: {
                DocumentClassifierName: {},
                VersionName: {},
                DataAccessRoleArn: {},
                Tags: {
                  shape: 'S31'
                },
                InputDataConfig: {
                  shape: 'S3a'
                },
                OutputDataConfig: {
                  shape: 'S3h'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                LanguageCode: {},
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                Mode: {},
                ModelKmsKeyId: {},
                ModelPolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentClassifierArn: {}
              }
            }
          },
          CreateEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName', 'DesiredInferenceUnits'],
              members: {
                EndpointName: {},
                ModelArn: {},
                DesiredInferenceUnits: {
                  type: 'integer'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S31'
                },
                DataAccessRoleArn: {},
                FlywheelArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointArn: {},
                ModelArn: {}
              }
            }
          },
          CreateEntityRecognizer: {
            input: {
              type: 'structure',
              required: ['RecognizerName', 'DataAccessRoleArn', 'InputDataConfig', 'LanguageCode'],
              members: {
                RecognizerName: {},
                VersionName: {},
                DataAccessRoleArn: {},
                Tags: {
                  shape: 'S31'
                },
                InputDataConfig: {
                  shape: 'S3z'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                LanguageCode: {},
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                ModelKmsKeyId: {},
                ModelPolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EntityRecognizerArn: {}
              }
            }
          },
          CreateFlywheel: {
            input: {
              type: 'structure',
              required: ['FlywheelName', 'DataAccessRoleArn', 'DataLakeS3Uri'],
              members: {
                FlywheelName: {},
                ActiveModelArn: {},
                DataAccessRoleArn: {},
                TaskConfig: {
                  shape: 'S4b'
                },
                ModelType: {},
                DataLakeS3Uri: {},
                DataSecurityConfig: {
                  shape: 'S4i'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FlywheelArn: {},
                ActiveModelArn: {}
              }
            }
          },
          DeleteDocumentClassifier: {
            input: {
              type: 'structure',
              required: ['DocumentClassifierArn'],
              members: {
                DocumentClassifierArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEntityRecognizer: {
            input: {
              type: 'structure',
              required: ['EntityRecognizerArn'],
              members: {
                EntityRecognizerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFlywheel: {
            input: {
              type: 'structure',
              required: ['FlywheelArn'],
              members: {
                FlywheelArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                PolicyRevisionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeDataset: {
            input: {
              type: 'structure',
              required: ['DatasetArn'],
              members: {
                DatasetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetProperties: {
                  shape: 'S4x'
                }
              }
            }
          },
          DescribeDocumentClassificationJob: {
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
                DocumentClassificationJobProperties: {
                  shape: 'S55'
                }
              }
            }
          },
          DescribeDocumentClassifier: {
            input: {
              type: 'structure',
              required: ['DocumentClassifierArn'],
              members: {
                DocumentClassifierArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentClassifierProperties: {
                  shape: 'S5d'
                }
              }
            }
          },
          DescribeDominantLanguageDetectionJob: {
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
                DominantLanguageDetectionJobProperties: {
                  shape: 'S5k'
                }
              }
            }
          },
          DescribeEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointProperties: {
                  shape: 'S5n'
                }
              }
            }
          },
          DescribeEntitiesDetectionJob: {
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
                EntitiesDetectionJobProperties: {
                  shape: 'S5r'
                }
              }
            }
          },
          DescribeEntityRecognizer: {
            input: {
              type: 'structure',
              required: ['EntityRecognizerArn'],
              members: {
                EntityRecognizerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EntityRecognizerProperties: {
                  shape: 'S5u'
                }
              }
            }
          },
          DescribeEventsDetectionJob: {
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
                EventsDetectionJobProperties: {
                  shape: 'S63'
                }
              }
            }
          },
          DescribeFlywheel: {
            input: {
              type: 'structure',
              required: ['FlywheelArn'],
              members: {
                FlywheelArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FlywheelProperties: {
                  shape: 'S68'
                }
              }
            }
          },
          DescribeFlywheelIteration: {
            input: {
              type: 'structure',
              required: ['FlywheelArn', 'FlywheelIterationId'],
              members: {
                FlywheelArn: {},
                FlywheelIterationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FlywheelIterationProperties: {
                  shape: 'S6d'
                }
              }
            }
          },
          DescribeKeyPhrasesDetectionJob: {
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
                KeyPhrasesDetectionJobProperties: {
                  shape: 'S6i'
                }
              }
            }
          },
          DescribePiiEntitiesDetectionJob: {
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
                PiiEntitiesDetectionJobProperties: {
                  shape: 'S6l'
                }
              }
            }
          },
          DescribeResourcePolicy: {
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
                ResourcePolicy: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                PolicyRevisionId: {}
              }
            }
          },
          DescribeSentimentDetectionJob: {
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
                SentimentDetectionJobProperties: {
                  shape: 'S6w'
                }
              }
            }
          },
          DescribeTargetedSentimentDetectionJob: {
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
                TargetedSentimentDetectionJobProperties: {
                  shape: 'S6z'
                }
              }
            }
          },
          DescribeTopicsDetectionJob: {
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
                TopicsDetectionJobProperties: {
                  shape: 'S72'
                }
              }
            }
          },
          DetectDominantLanguage: {
            input: {
              type: 'structure',
              required: ['Text'],
              members: {
                Text: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Languages: {
                  shape: 'S8'
                }
              },
              sensitive: true
            }
          },
          DetectEntities: {
            input: {
              type: 'structure',
              members: {
                Text: {
                  shape: 'S3'
                },
                LanguageCode: {},
                EndpointArn: {},
                Bytes: {
                  type: 'blob'
                },
                DocumentReaderConfig: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Entities: {
                  shape: 'Sj'
                },
                DocumentMetadata: {
                  shape: 'S1z'
                },
                DocumentType: {
                  shape: 'S22'
                },
                Blocks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      BlockType: {},
                      Text: {},
                      Page: {
                        type: 'integer'
                      },
                      Geometry: {
                        type: 'structure',
                        members: {
                          BoundingBox: {
                            type: 'structure',
                            members: {
                              Height: {
                                type: 'float'
                              },
                              Left: {
                                type: 'float'
                              },
                              Top: {
                                type: 'float'
                              },
                              Width: {
                                type: 'float'
                              }
                            }
                          },
                          Polygon: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                X: {
                                  type: 'float'
                                },
                                Y: {
                                  type: 'float'
                                }
                              }
                            }
                          }
                        }
                      },
                      Relationships: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Ids: {
                              type: 'list',
                              member: {}
                            },
                            Type: {}
                          }
                        }
                      }
                    }
                  }
                },
                Errors: {
                  shape: 'S25'
                }
              },
              sensitive: true
            }
          },
          DetectKeyPhrases: {
            input: {
              type: 'structure',
              required: ['Text', 'LanguageCode'],
              members: {
                Text: {
                  shape: 'S3'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyPhrases: {
                  shape: 'Su'
                }
              },
              sensitive: true
            }
          },
          DetectPiiEntities: {
            input: {
              type: 'structure',
              required: ['Text', 'LanguageCode'],
              members: {
                Text: {},
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Score: {
                        type: 'float'
                      },
                      Type: {},
                      BeginOffset: {
                        type: 'integer'
                      },
                      EndOffset: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          DetectSentiment: {
            input: {
              type: 'structure',
              required: ['Text', 'LanguageCode'],
              members: {
                Text: {
                  shape: 'S3'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Sentiment: {},
                SentimentScore: {
                  shape: 'S11'
                }
              },
              sensitive: true
            }
          },
          DetectSyntax: {
            input: {
              type: 'structure',
              required: ['Text', 'LanguageCode'],
              members: {
                Text: {
                  shape: 'S3'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SyntaxTokens: {
                  shape: 'S17'
                }
              },
              sensitive: true
            }
          },
          DetectTargetedSentiment: {
            input: {
              type: 'structure',
              required: ['Text', 'LanguageCode'],
              members: {
                Text: {
                  shape: 'S3'
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Entities: {
                  shape: 'S1f'
                }
              },
              sensitive: true
            }
          },
          DetectToxicContent: {
            input: {
              type: 'structure',
              required: ['TextSegments', 'LanguageCode'],
              members: {
                TextSegments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Text'],
                    members: {
                      Text: {
                        shape: 'S3'
                      }
                    }
                  },
                  sensitive: true
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResultList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Labels: {
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
                      Toxicity: {
                        type: 'float'
                      }
                    }
                  }
                }
              }
            }
          },
          ImportModel: {
            input: {
              type: 'structure',
              required: ['SourceModelArn'],
              members: {
                SourceModelArn: {},
                ModelName: {},
                VersionName: {},
                ModelKmsKeyId: {},
                DataAccessRoleArn: {},
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelArn: {}
              }
            }
          },
          ListDatasets: {
            input: {
              type: 'structure',
              members: {
                FlywheelArn: {},
                Filter: {
                  type: 'structure',
                  members: {
                    Status: {},
                    DatasetType: {},
                    CreationTimeAfter: {
                      type: 'timestamp'
                    },
                    CreationTimeBefore: {
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
                DatasetPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S4x'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDocumentClassificationJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentClassificationJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S55'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDocumentClassifierSummaries: {
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
                DocumentClassifierSummariesList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DocumentClassifierName: {},
                      NumberOfVersions: {
                        type: 'integer'
                      },
                      LatestVersionCreatedAt: {
                        type: 'timestamp'
                      },
                      LatestVersionName: {},
                      LatestVersionStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDocumentClassifiers: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    Status: {},
                    DocumentClassifierName: {},
                    SubmitTimeBefore: {
                      type: 'timestamp'
                    },
                    SubmitTimeAfter: {
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
                DocumentClassifierPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S5d'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDominantLanguageDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DominantLanguageDetectionJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S5k'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEndpoints: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    ModelArn: {},
                    Status: {},
                    CreationTimeBefore: {
                      type: 'timestamp'
                    },
                    CreationTimeAfter: {
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
                EndpointPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S5n'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEntitiesDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EntitiesDetectionJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S5r'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEntityRecognizerSummaries: {
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
                EntityRecognizerSummariesList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecognizerName: {},
                      NumberOfVersions: {
                        type: 'integer'
                      },
                      LatestVersionCreatedAt: {
                        type: 'timestamp'
                      },
                      LatestVersionName: {},
                      LatestVersionStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEntityRecognizers: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    Status: {},
                    RecognizerName: {},
                    SubmitTimeBefore: {
                      type: 'timestamp'
                    },
                    SubmitTimeAfter: {
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
                EntityRecognizerPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S5u'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEventsDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventsDetectionJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S63'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFlywheelIterationHistory: {
            input: {
              type: 'structure',
              required: ['FlywheelArn'],
              members: {
                FlywheelArn: {},
                Filter: {
                  type: 'structure',
                  members: {
                    CreationTimeAfter: {
                      type: 'timestamp'
                    },
                    CreationTimeBefore: {
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
                FlywheelIterationPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S6d'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFlywheels: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    Status: {},
                    CreationTimeAfter: {
                      type: 'timestamp'
                    },
                    CreationTimeBefore: {
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
                FlywheelSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FlywheelArn: {},
                      ActiveModelArn: {},
                      DataLakeS3Uri: {},
                      Status: {},
                      ModelType: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LatestFlywheelIteration: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListKeyPhrasesDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyPhrasesDetectionJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S6i'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPiiEntitiesDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PiiEntitiesDetectionJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S6l'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSentimentDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SentimentDetectionJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S6w'
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
                ResourceArn: {},
                Tags: {
                  shape: 'S31'
                }
              }
            }
          },
          ListTargetedSentimentDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TargetedSentimentDetectionJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S6z'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTopicsDetectionJobs: {
            input: {
              type: 'structure',
              members: {
                Filter: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicsDetectionJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S72'
                  }
                },
                NextToken: {}
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'ResourcePolicy'],
              members: {
                ResourceArn: {},
                ResourcePolicy: {},
                PolicyRevisionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyRevisionId: {}
              }
            }
          },
          StartDocumentClassificationJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn'],
              members: {
                JobName: {},
                DocumentClassifierArn: {},
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                DataAccessRoleArn: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                Tags: {
                  shape: 'S31'
                },
                FlywheelArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {},
                DocumentClassifierArn: {}
              }
            }
          },
          StartDominantLanguageDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn'],
              members: {
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                DataAccessRoleArn: {},
                JobName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {}
              }
            }
          },
          StartEntitiesDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                DataAccessRoleArn: {},
                JobName: {},
                EntityRecognizerArn: {},
                LanguageCode: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                Tags: {
                  shape: 'S31'
                },
                FlywheelArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {},
                EntityRecognizerArn: {}
              }
            }
          },
          StartEventsDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode', 'TargetEventTypes'],
              members: {
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                DataAccessRoleArn: {},
                JobName: {},
                LanguageCode: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                TargetEventTypes: {
                  shape: 'S64'
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {}
              }
            }
          },
          StartFlywheelIteration: {
            input: {
              type: 'structure',
              required: ['FlywheelArn'],
              members: {
                FlywheelArn: {},
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FlywheelArn: {},
                FlywheelIterationId: {}
              }
            }
          },
          StartKeyPhrasesDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                DataAccessRoleArn: {},
                JobName: {},
                LanguageCode: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {}
              }
            }
          },
          StartPiiEntitiesDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'Mode', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                Mode: {},
                RedactionConfig: {
                  shape: 'S6n'
                },
                DataAccessRoleArn: {},
                JobName: {},
                LanguageCode: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {}
              }
            }
          },
          StartSentimentDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                DataAccessRoleArn: {},
                JobName: {},
                LanguageCode: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {}
              }
            }
          },
          StartTargetedSentimentDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
              members: {
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                DataAccessRoleArn: {},
                JobName: {},
                LanguageCode: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {}
              }
            }
          },
          StartTopicsDetectionJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn'],
              members: {
                InputDataConfig: {
                  shape: 'S59'
                },
                OutputDataConfig: {
                  shape: 'S5a'
                },
                DataAccessRoleArn: {},
                JobName: {},
                NumberOfTopics: {
                  type: 'integer'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeKmsKeyId: {},
                VpcConfig: {
                  shape: 'S3j'
                },
                Tags: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                JobArn: {},
                JobStatus: {}
              }
            }
          },
          StopDominantLanguageDetectionJob: {
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
          StopEntitiesDetectionJob: {
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
          StopEventsDetectionJob: {
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
          StopKeyPhrasesDetectionJob: {
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
          StopPiiEntitiesDetectionJob: {
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
          StopSentimentDetectionJob: {
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
          StopTargetedSentimentDetectionJob: {
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
          StopTrainingDocumentClassifier: {
            input: {
              type: 'structure',
              required: ['DocumentClassifierArn'],
              members: {
                DocumentClassifierArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopTrainingEntityRecognizer: {
            input: {
              type: 'structure',
              required: ['EntityRecognizerArn'],
              members: {
                EntityRecognizerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S31'
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
          UpdateEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {},
                DesiredModelArn: {},
                DesiredInferenceUnits: {
                  type: 'integer'
                },
                DesiredDataAccessRoleArn: {},
                FlywheelArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DesiredModelArn: {}
              }
            }
          },
          UpdateFlywheel: {
            input: {
              type: 'structure',
              required: ['FlywheelArn'],
              members: {
                FlywheelArn: {},
                ActiveModelArn: {},
                DataAccessRoleArn: {},
                DataSecurityConfig: {
                  type: 'structure',
                  members: {
                    ModelKmsKeyId: {},
                    VolumeKmsKeyId: {},
                    VpcConfig: {
                      shape: 'S3j'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FlywheelProperties: {
                  shape: 'S68'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {
              shape: 'S3'
            },
            sensitive: true
          },
          S3: {
            type: 'string',
            sensitive: true
          },
          S8: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LanguageCode: {},
                Score: {
                  type: 'float'
                }
              }
            }
          },
          Sc: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Index: {
                  type: 'integer'
                },
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Score: {
                  type: 'float'
                },
                Type: {},
                Text: {},
                BeginOffset: {
                  type: 'integer'
                },
                EndOffset: {
                  type: 'integer'
                },
                BlockReferences: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BlockId: {},
                      BeginOffset: {
                        type: 'integer'
                      },
                      EndOffset: {
                        type: 'integer'
                      },
                      ChildBlocks: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ChildBlockId: {},
                            BeginOffset: {
                              type: 'integer'
                            },
                            EndOffset: {
                              type: 'integer'
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
          Su: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Score: {
                  type: 'float'
                },
                Text: {},
                BeginOffset: {
                  type: 'integer'
                },
                EndOffset: {
                  type: 'integer'
                }
              }
            }
          },
          S11: {
            type: 'structure',
            members: {
              Positive: {
                type: 'float'
              },
              Negative: {
                type: 'float'
              },
              Neutral: {
                type: 'float'
              },
              Mixed: {
                type: 'float'
              }
            }
          },
          S17: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TokenId: {
                  type: 'integer'
                },
                Text: {},
                BeginOffset: {
                  type: 'integer'
                },
                EndOffset: {
                  type: 'integer'
                },
                PartOfSpeech: {
                  type: 'structure',
                  members: {
                    Tag: {},
                    Score: {
                      type: 'float'
                    }
                  }
                }
              }
            }
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DescriptiveMentionIndex: {
                  type: 'list',
                  member: {
                    type: 'integer'
                  }
                },
                Mentions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Score: {
                        type: 'float'
                      },
                      GroupScore: {
                        type: 'float'
                      },
                      Text: {},
                      Type: {},
                      MentionSentiment: {
                        type: 'structure',
                        members: {
                          Sentiment: {},
                          SentimentScore: {
                            shape: 'S11'
                          }
                        }
                      },
                      BeginOffset: {
                        type: 'integer'
                      },
                      EndOffset: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          S1p: {
            type: 'structure',
            required: ['DocumentReadAction'],
            members: {
              DocumentReadAction: {},
              DocumentReadMode: {},
              FeatureTypes: {
                type: 'list',
                member: {}
              }
            }
          },
          S1z: {
            type: 'structure',
            members: {
              Pages: {
                type: 'integer'
              },
              ExtractedCharacters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Page: {
                      type: 'integer'
                    },
                    Count: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          S22: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Page: {
                  type: 'integer'
                },
                Type: {}
              }
            }
          },
          S25: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Page: {
                  type: 'integer'
                },
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          S2o: {
            type: 'list',
            member: {}
          },
          S31: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S3a: {
            type: 'structure',
            members: {
              DataFormat: {},
              S3Uri: {},
              TestS3Uri: {},
              LabelDelimiter: {},
              AugmentedManifests: {
                type: 'list',
                member: {
                  shape: 'S3d'
                }
              },
              DocumentType: {},
              Documents: {
                type: 'structure',
                required: ['S3Uri'],
                members: {
                  S3Uri: {},
                  TestS3Uri: {}
                }
              },
              DocumentReaderConfig: {
                shape: 'S1p'
              }
            }
          },
          S3d: {
            type: 'structure',
            required: ['S3Uri', 'AttributeNames'],
            members: {
              S3Uri: {},
              Split: {},
              AttributeNames: {
                shape: 'S2o'
              },
              AnnotationDataS3Uri: {},
              SourceDocumentsS3Uri: {},
              DocumentType: {}
            }
          },
          S3h: {
            type: 'structure',
            members: {
              S3Uri: {},
              KmsKeyId: {},
              FlywheelStatsS3Prefix: {}
            }
          },
          S3j: {
            type: 'structure',
            required: ['SecurityGroupIds', 'Subnets'],
            members: {
              SecurityGroupIds: {
                type: 'list',
                member: {}
              },
              Subnets: {
                type: 'list',
                member: {}
              }
            }
          },
          S3z: {
            type: 'structure',
            required: ['EntityTypes'],
            members: {
              DataFormat: {},
              EntityTypes: {
                shape: 'S41'
              },
              Documents: {
                type: 'structure',
                required: ['S3Uri'],
                members: {
                  S3Uri: {},
                  TestS3Uri: {},
                  InputFormat: {}
                }
              },
              Annotations: {
                type: 'structure',
                required: ['S3Uri'],
                members: {
                  S3Uri: {},
                  TestS3Uri: {}
                }
              },
              EntityList: {
                type: 'structure',
                required: ['S3Uri'],
                members: {
                  S3Uri: {}
                }
              },
              AugmentedManifests: {
                type: 'list',
                member: {
                  shape: 'S3d'
                }
              }
            }
          },
          S41: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type'],
              members: {
                Type: {}
              }
            }
          },
          S4b: {
            type: 'structure',
            required: ['LanguageCode'],
            members: {
              LanguageCode: {},
              DocumentClassificationConfig: {
                type: 'structure',
                required: ['Mode'],
                members: {
                  Mode: {},
                  Labels: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              EntityRecognitionConfig: {
                type: 'structure',
                required: ['EntityTypes'],
                members: {
                  EntityTypes: {
                    shape: 'S41'
                  }
                }
              }
            }
          },
          S4i: {
            type: 'structure',
            members: {
              ModelKmsKeyId: {},
              VolumeKmsKeyId: {},
              DataLakeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              }
            }
          },
          S4x: {
            type: 'structure',
            members: {
              DatasetArn: {},
              DatasetName: {},
              DatasetType: {},
              DatasetS3Uri: {},
              Description: {},
              Status: {},
              Message: {},
              NumberOfDocuments: {
                type: 'long'
              },
              CreationTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              }
            }
          },
          S55: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              DocumentClassifierArn: {},
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                shape: 'S5a'
              },
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              },
              FlywheelArn: {}
            }
          },
          S59: {
            type: 'structure',
            required: ['S3Uri'],
            members: {
              S3Uri: {},
              InputFormat: {},
              DocumentReaderConfig: {
                shape: 'S1p'
              }
            }
          },
          S5a: {
            type: 'structure',
            required: ['S3Uri'],
            members: {
              S3Uri: {},
              KmsKeyId: {}
            }
          },
          S5d: {
            type: 'structure',
            members: {
              DocumentClassifierArn: {},
              LanguageCode: {},
              Status: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              TrainingStartTime: {
                type: 'timestamp'
              },
              TrainingEndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S3a'
              },
              OutputDataConfig: {
                shape: 'S3h'
              },
              ClassifierMetadata: {
                type: 'structure',
                members: {
                  NumberOfLabels: {
                    type: 'integer'
                  },
                  NumberOfTrainedDocuments: {
                    type: 'integer'
                  },
                  NumberOfTestDocuments: {
                    type: 'integer'
                  },
                  EvaluationMetrics: {
                    type: 'structure',
                    members: {
                      Accuracy: {
                        type: 'double'
                      },
                      Precision: {
                        type: 'double'
                      },
                      Recall: {
                        type: 'double'
                      },
                      F1Score: {
                        type: 'double'
                      },
                      MicroPrecision: {
                        type: 'double'
                      },
                      MicroRecall: {
                        type: 'double'
                      },
                      MicroF1Score: {
                        type: 'double'
                      },
                      HammingLoss: {
                        type: 'double'
                      }
                    }
                  }
                },
                sensitive: true
              },
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              },
              Mode: {},
              ModelKmsKeyId: {},
              VersionName: {},
              SourceModelArn: {},
              FlywheelArn: {}
            }
          },
          S5k: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                shape: 'S5a'
              },
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              }
            }
          },
          S5n: {
            type: 'structure',
            members: {
              EndpointArn: {},
              Status: {},
              Message: {},
              ModelArn: {},
              DesiredModelArn: {},
              DesiredInferenceUnits: {
                type: 'integer'
              },
              CurrentInferenceUnits: {
                type: 'integer'
              },
              CreationTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              DataAccessRoleArn: {},
              DesiredDataAccessRoleArn: {},
              FlywheelArn: {}
            }
          },
          S5r: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              EntityRecognizerArn: {},
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                shape: 'S5a'
              },
              LanguageCode: {},
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              },
              FlywheelArn: {}
            }
          },
          S5u: {
            type: 'structure',
            members: {
              EntityRecognizerArn: {},
              LanguageCode: {},
              Status: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              TrainingStartTime: {
                type: 'timestamp'
              },
              TrainingEndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S3z'
              },
              RecognizerMetadata: {
                type: 'structure',
                members: {
                  NumberOfTrainedDocuments: {
                    type: 'integer'
                  },
                  NumberOfTestDocuments: {
                    type: 'integer'
                  },
                  EvaluationMetrics: {
                    type: 'structure',
                    members: {
                      Precision: {
                        type: 'double'
                      },
                      Recall: {
                        type: 'double'
                      },
                      F1Score: {
                        type: 'double'
                      }
                    }
                  },
                  EntityTypes: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Type: {},
                        EvaluationMetrics: {
                          type: 'structure',
                          members: {
                            Precision: {
                              type: 'double'
                            },
                            Recall: {
                              type: 'double'
                            },
                            F1Score: {
                              type: 'double'
                            }
                          }
                        },
                        NumberOfTrainMentions: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                sensitive: true
              },
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              },
              ModelKmsKeyId: {},
              VersionName: {},
              SourceModelArn: {},
              FlywheelArn: {},
              OutputDataConfig: {
                type: 'structure',
                members: {
                  FlywheelStatsS3Prefix: {}
                }
              }
            }
          },
          S63: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                shape: 'S5a'
              },
              LanguageCode: {},
              DataAccessRoleArn: {},
              TargetEventTypes: {
                shape: 'S64'
              }
            }
          },
          S64: {
            type: 'list',
            member: {}
          },
          S68: {
            type: 'structure',
            members: {
              FlywheelArn: {},
              ActiveModelArn: {},
              DataAccessRoleArn: {},
              TaskConfig: {
                shape: 'S4b'
              },
              DataLakeS3Uri: {},
              DataSecurityConfig: {
                shape: 'S4i'
              },
              Status: {},
              ModelType: {},
              Message: {},
              CreationTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              LatestFlywheelIteration: {}
            }
          },
          S6d: {
            type: 'structure',
            members: {
              FlywheelArn: {},
              FlywheelIterationId: {},
              CreationTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              Status: {},
              Message: {},
              EvaluatedModelArn: {},
              EvaluatedModelMetrics: {
                shape: 'S6f'
              },
              TrainedModelArn: {},
              TrainedModelMetrics: {
                shape: 'S6f'
              },
              EvaluationManifestS3Prefix: {}
            }
          },
          S6f: {
            type: 'structure',
            members: {
              AverageF1Score: {
                type: 'double'
              },
              AveragePrecision: {
                type: 'double'
              },
              AverageRecall: {
                type: 'double'
              },
              AverageAccuracy: {
                type: 'double'
              }
            }
          },
          S6i: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                shape: 'S5a'
              },
              LanguageCode: {},
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              }
            }
          },
          S6l: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                type: 'structure',
                required: ['S3Uri'],
                members: {
                  S3Uri: {},
                  KmsKeyId: {}
                }
              },
              RedactionConfig: {
                shape: 'S6n'
              },
              LanguageCode: {},
              DataAccessRoleArn: {},
              Mode: {}
            }
          },
          S6n: {
            type: 'structure',
            members: {
              PiiEntityTypes: {
                type: 'list',
                member: {}
              },
              MaskMode: {},
              MaskCharacter: {}
            }
          },
          S6w: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                shape: 'S5a'
              },
              LanguageCode: {},
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              }
            }
          },
          S6z: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                shape: 'S5a'
              },
              LanguageCode: {},
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              }
            }
          },
          S72: {
            type: 'structure',
            members: {
              JobId: {},
              JobArn: {},
              JobName: {},
              JobStatus: {},
              Message: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              InputDataConfig: {
                shape: 'S59'
              },
              OutputDataConfig: {
                shape: 'S5a'
              },
              NumberOfTopics: {
                type: 'integer'
              },
              DataAccessRoleArn: {},
              VolumeKmsKeyId: {},
              VpcConfig: {
                shape: 'S3j'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5e67fa6db231ce6a3652b316436bf2d94a2c95e2.js.map