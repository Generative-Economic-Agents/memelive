System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-06-27',
          endpointPrefix: 'rekognition',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Rekognition',
          serviceId: 'Rekognition',
          signatureVersion: 'v4',
          targetPrefix: 'RekognitionService',
          uid: 'rekognition-2016-06-27'
        },
        operations: {
          AssociateFaces: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'UserId', 'FaceIds'],
              members: {
                CollectionId: {},
                UserId: {},
                FaceIds: {
                  shape: 'S4'
                },
                UserMatchThreshold: {
                  type: 'float'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociatedFaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FaceId: {}
                    }
                  }
                },
                UnsuccessfulFaceAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FaceId: {},
                      UserId: {},
                      Confidence: {
                        type: 'float'
                      },
                      Reasons: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                UserStatus: {}
              }
            }
          },
          CompareFaces: {
            input: {
              type: 'structure',
              required: ['SourceImage', 'TargetImage'],
              members: {
                SourceImage: {
                  shape: 'Sh'
                },
                TargetImage: {
                  shape: 'Sh'
                },
                SimilarityThreshold: {
                  type: 'float'
                },
                QualityFilter: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SourceImageFace: {
                  type: 'structure',
                  members: {
                    BoundingBox: {
                      shape: 'Sq'
                    },
                    Confidence: {
                      type: 'float'
                    }
                  }
                },
                FaceMatches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Similarity: {
                        type: 'float'
                      },
                      Face: {
                        shape: 'Su'
                      }
                    }
                  }
                },
                UnmatchedFaces: {
                  type: 'list',
                  member: {
                    shape: 'Su'
                  }
                },
                SourceImageOrientationCorrection: {},
                TargetImageOrientationCorrection: {}
              }
            }
          },
          CopyProjectVersion: {
            input: {
              type: 'structure',
              required: ['SourceProjectArn', 'SourceProjectVersionArn', 'DestinationProjectArn', 'VersionName', 'OutputConfig'],
              members: {
                SourceProjectArn: {},
                SourceProjectVersionArn: {},
                DestinationProjectArn: {},
                VersionName: {},
                OutputConfig: {
                  shape: 'S1c'
                },
                Tags: {
                  shape: 'S1e'
                },
                KmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProjectVersionArn: {}
              }
            }
          },
          CreateCollection: {
            input: {
              type: 'structure',
              required: ['CollectionId'],
              members: {
                CollectionId: {},
                Tags: {
                  shape: 'S1e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StatusCode: {
                  type: 'integer'
                },
                CollectionArn: {},
                FaceModelVersion: {}
              }
            }
          },
          CreateDataset: {
            input: {
              type: 'structure',
              required: ['DatasetType', 'ProjectArn'],
              members: {
                DatasetSource: {
                  type: 'structure',
                  members: {
                    GroundTruthManifest: {
                      shape: 'S1p'
                    },
                    DatasetArn: {}
                  }
                },
                DatasetType: {},
                ProjectArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetArn: {}
              }
            }
          },
          CreateFaceLivenessSession: {
            input: {
              type: 'structure',
              members: {
                KmsKeyId: {},
                Settings: {
                  type: 'structure',
                  members: {
                    OutputConfig: {
                      type: 'structure',
                      required: ['S3Bucket'],
                      members: {
                        S3Bucket: {},
                        S3KeyPrefix: {}
                      }
                    },
                    AuditImagesLimit: {
                      type: 'integer'
                    }
                  }
                },
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {}
              }
            },
            idempotent: true
          },
          CreateProject: {
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {},
                Feature: {},
                AutoUpdate: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProjectArn: {}
              }
            }
          },
          CreateProjectVersion: {
            input: {
              type: 'structure',
              required: ['ProjectArn', 'VersionName', 'OutputConfig'],
              members: {
                ProjectArn: {},
                VersionName: {},
                OutputConfig: {
                  shape: 'S1c'
                },
                TrainingData: {
                  shape: 'S26'
                },
                TestingData: {
                  shape: 'S29'
                },
                Tags: {
                  shape: 'S1e'
                },
                KmsKeyId: {},
                VersionDescription: {},
                FeatureConfig: {
                  shape: 'S2b'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProjectVersionArn: {}
              }
            }
          },
          CreateStreamProcessor: {
            input: {
              type: 'structure',
              required: ['Input', 'Output', 'Name', 'Settings', 'RoleArn'],
              members: {
                Input: {
                  shape: 'S2f'
                },
                Output: {
                  shape: 'S2i'
                },
                Name: {},
                Settings: {
                  shape: 'S2n'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S1e'
                },
                NotificationChannel: {
                  shape: 'S2t'
                },
                KmsKeyId: {},
                RegionsOfInterest: {
                  shape: 'S2v'
                },
                DataSharingPreference: {
                  shape: 'S2z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamProcessorArn: {}
              }
            }
          },
          CreateUser: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'UserId'],
              members: {
                CollectionId: {},
                UserId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCollection: {
            input: {
              type: 'structure',
              required: ['CollectionId'],
              members: {
                CollectionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StatusCode: {
                  type: 'integer'
                }
              }
            }
          },
          DeleteDataset: {
            input: {
              type: 'structure',
              required: ['DatasetArn'],
              members: {
                DatasetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFaces: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'FaceIds'],
              members: {
                CollectionId: {},
                FaceIds: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeletedFaces: {
                  shape: 'S39'
                },
                UnsuccessfulFaceDeletions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FaceId: {},
                      UserId: {},
                      Reasons: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          DeleteProject: {
            input: {
              type: 'structure',
              required: ['ProjectArn'],
              members: {
                ProjectArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          DeleteProjectPolicy: {
            input: {
              type: 'structure',
              required: ['ProjectArn', 'PolicyName'],
              members: {
                ProjectArn: {},
                PolicyName: {},
                PolicyRevisionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteProjectVersion: {
            input: {
              type: 'structure',
              required: ['ProjectVersionArn'],
              members: {
                ProjectVersionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          DeleteStreamProcessor: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteUser: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'UserId'],
              members: {
                CollectionId: {},
                UserId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeCollection: {
            input: {
              type: 'structure',
              required: ['CollectionId'],
              members: {
                CollectionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FaceCount: {
                  type: 'long'
                },
                FaceModelVersion: {},
                CollectionARN: {},
                CreationTimestamp: {
                  type: 'timestamp'
                },
                UserCount: {
                  type: 'long'
                }
              }
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
                DatasetDescription: {
                  type: 'structure',
                  members: {
                    CreationTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    Status: {},
                    StatusMessage: {},
                    StatusMessageCode: {},
                    DatasetStats: {
                      type: 'structure',
                      members: {
                        LabeledEntries: {
                          type: 'integer'
                        },
                        TotalEntries: {
                          type: 'integer'
                        },
                        TotalLabels: {
                          type: 'integer'
                        },
                        ErrorEntries: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeProjectVersions: {
            input: {
              type: 'structure',
              required: ['ProjectArn'],
              members: {
                ProjectArn: {},
                VersionNames: {
                  type: 'list',
                  member: {}
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
                ProjectVersionDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProjectVersionArn: {},
                      CreationTimestamp: {
                        type: 'timestamp'
                      },
                      MinInferenceUnits: {
                        type: 'integer'
                      },
                      Status: {},
                      StatusMessage: {},
                      BillableTrainingTimeInSeconds: {
                        type: 'long'
                      },
                      TrainingEndTimestamp: {
                        type: 'timestamp'
                      },
                      OutputConfig: {
                        shape: 'S1c'
                      },
                      TrainingDataResult: {
                        type: 'structure',
                        members: {
                          Input: {
                            shape: 'S26'
                          },
                          Output: {
                            shape: 'S26'
                          },
                          Validation: {
                            shape: 'S4d'
                          }
                        }
                      },
                      TestingDataResult: {
                        type: 'structure',
                        members: {
                          Input: {
                            shape: 'S29'
                          },
                          Output: {
                            shape: 'S29'
                          },
                          Validation: {
                            shape: 'S4d'
                          }
                        }
                      },
                      EvaluationResult: {
                        type: 'structure',
                        members: {
                          F1Score: {
                            type: 'float'
                          },
                          Summary: {
                            type: 'structure',
                            members: {
                              S3Object: {
                                shape: 'Sj'
                              }
                            }
                          }
                        }
                      },
                      ManifestSummary: {
                        shape: 'S1p'
                      },
                      KmsKeyId: {},
                      MaxInferenceUnits: {
                        type: 'integer'
                      },
                      SourceProjectVersionArn: {},
                      VersionDescription: {},
                      Feature: {},
                      BaseModelVersion: {},
                      FeatureConfig: {
                        shape: 'S2b'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeProjects: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ProjectNames: {
                  type: 'list',
                  member: {}
                },
                Features: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProjectDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProjectArn: {},
                      CreationTimestamp: {
                        type: 'timestamp'
                      },
                      Status: {},
                      Datasets: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            CreationTimestamp: {
                              type: 'timestamp'
                            },
                            DatasetType: {},
                            DatasetArn: {},
                            Status: {},
                            StatusMessage: {},
                            StatusMessageCode: {}
                          }
                        }
                      },
                      Feature: {},
                      AutoUpdate: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeStreamProcessor: {
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
                StreamProcessorArn: {},
                Status: {},
                StatusMessage: {},
                CreationTimestamp: {
                  type: 'timestamp'
                },
                LastUpdateTimestamp: {
                  type: 'timestamp'
                },
                Input: {
                  shape: 'S2f'
                },
                Output: {
                  shape: 'S2i'
                },
                RoleArn: {},
                Settings: {
                  shape: 'S2n'
                },
                NotificationChannel: {
                  shape: 'S2t'
                },
                KmsKeyId: {},
                RegionsOfInterest: {
                  shape: 'S2v'
                },
                DataSharingPreference: {
                  shape: 'S2z'
                }
              }
            }
          },
          DetectCustomLabels: {
            input: {
              type: 'structure',
              required: ['ProjectVersionArn', 'Image'],
              members: {
                ProjectVersionArn: {},
                Image: {
                  shape: 'Sh'
                },
                MaxResults: {
                  type: 'integer'
                },
                MinConfidence: {
                  type: 'float'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomLabels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Confidence: {
                        type: 'float'
                      },
                      Geometry: {
                        shape: 'S4x'
                      }
                    }
                  }
                }
              }
            }
          },
          DetectFaces: {
            input: {
              type: 'structure',
              required: ['Image'],
              members: {
                Image: {
                  shape: 'Sh'
                },
                Attributes: {
                  shape: 'S4z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FaceDetails: {
                  type: 'list',
                  member: {
                    shape: 'S53'
                  }
                },
                OrientationCorrection: {}
              }
            }
          },
          DetectLabels: {
            input: {
              type: 'structure',
              required: ['Image'],
              members: {
                Image: {
                  shape: 'Sh'
                },
                MaxLabels: {
                  type: 'integer'
                },
                MinConfidence: {
                  type: 'float'
                },
                Features: {
                  type: 'list',
                  member: {}
                },
                Settings: {
                  type: 'structure',
                  members: {
                    GeneralLabels: {
                      shape: 'S5j'
                    },
                    ImageProperties: {
                      type: 'structure',
                      members: {
                        MaxDominantColors: {
                          type: 'integer'
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
                Labels: {
                  type: 'list',
                  member: {
                    shape: 'S5q'
                  }
                },
                OrientationCorrection: {},
                LabelModelVersion: {},
                ImageProperties: {
                  type: 'structure',
                  members: {
                    Quality: {
                      shape: 'S62'
                    },
                    DominantColors: {
                      shape: 'S5t'
                    },
                    Foreground: {
                      type: 'structure',
                      members: {
                        Quality: {
                          shape: 'S62'
                        },
                        DominantColors: {
                          shape: 'S5t'
                        }
                      }
                    },
                    Background: {
                      type: 'structure',
                      members: {
                        Quality: {
                          shape: 'S62'
                        },
                        DominantColors: {
                          shape: 'S5t'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DetectModerationLabels: {
            input: {
              type: 'structure',
              required: ['Image'],
              members: {
                Image: {
                  shape: 'Sh'
                },
                MinConfidence: {
                  type: 'float'
                },
                HumanLoopConfig: {
                  type: 'structure',
                  required: ['HumanLoopName', 'FlowDefinitionArn'],
                  members: {
                    HumanLoopName: {},
                    FlowDefinitionArn: {},
                    DataAttributes: {
                      type: 'structure',
                      members: {
                        ContentClassifiers: {
                          type: 'list',
                          member: {}
                        }
                      }
                    }
                  }
                },
                ProjectVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ModerationLabels: {
                  type: 'list',
                  member: {
                    shape: 'S6f'
                  }
                },
                ModerationModelVersion: {},
                HumanLoopActivationOutput: {
                  type: 'structure',
                  members: {
                    HumanLoopArn: {},
                    HumanLoopActivationReasons: {
                      type: 'list',
                      member: {}
                    },
                    HumanLoopActivationConditionsEvaluationResults: {
                      jsonvalue: true
                    }
                  }
                },
                ProjectVersion: {},
                ContentTypes: {
                  shape: 'S6l'
                }
              }
            }
          },
          DetectProtectiveEquipment: {
            input: {
              type: 'structure',
              required: ['Image'],
              members: {
                Image: {
                  shape: 'Sh'
                },
                SummarizationAttributes: {
                  type: 'structure',
                  required: ['MinConfidence', 'RequiredEquipmentTypes'],
                  members: {
                    MinConfidence: {
                      type: 'float'
                    },
                    RequiredEquipmentTypes: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProtectiveEquipmentModelVersion: {},
                Persons: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BodyParts: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Confidence: {
                              type: 'float'
                            },
                            EquipmentDetections: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  BoundingBox: {
                                    shape: 'Sq'
                                  },
                                  Confidence: {
                                    type: 'float'
                                  },
                                  Type: {},
                                  CoversBodyPart: {
                                    type: 'structure',
                                    members: {
                                      Confidence: {
                                        type: 'float'
                                      },
                                      Value: {
                                        type: 'boolean'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      BoundingBox: {
                        shape: 'Sq'
                      },
                      Confidence: {
                        type: 'float'
                      },
                      Id: {
                        type: 'integer'
                      }
                    }
                  }
                },
                Summary: {
                  type: 'structure',
                  members: {
                    PersonsWithRequiredEquipment: {
                      shape: 'S71'
                    },
                    PersonsWithoutRequiredEquipment: {
                      shape: 'S71'
                    },
                    PersonsIndeterminate: {
                      shape: 'S71'
                    }
                  }
                }
              }
            }
          },
          DetectText: {
            input: {
              type: 'structure',
              required: ['Image'],
              members: {
                Image: {
                  shape: 'Sh'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    WordFilter: {
                      shape: 'S74'
                    },
                    RegionsOfInterest: {
                      shape: 'S2v'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TextDetections: {
                  type: 'list',
                  member: {
                    shape: 'S79'
                  }
                },
                TextModelVersion: {}
              }
            }
          },
          DisassociateFaces: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'UserId', 'FaceIds'],
              members: {
                CollectionId: {},
                UserId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                FaceIds: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DisassociatedFaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FaceId: {}
                    }
                  }
                },
                UnsuccessfulFaceDisassociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FaceId: {},
                      UserId: {},
                      Reasons: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                UserStatus: {}
              }
            }
          },
          DistributeDatasetEntries: {
            input: {
              type: 'structure',
              required: ['Datasets'],
              members: {
                Datasets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn'],
                    members: {
                      Arn: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetCelebrityInfo: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Urls: {
                  shape: 'S7q'
                },
                Name: {},
                KnownGender: {
                  shape: 'S7s'
                }
              }
            }
          },
          GetCelebrityRecognition: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SortBy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                StatusMessage: {},
                VideoMetadata: {
                  shape: 'S81'
                },
                NextToken: {},
                Celebrities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'long'
                      },
                      Celebrity: {
                        type: 'structure',
                        members: {
                          Urls: {
                            shape: 'S7q'
                          },
                          Name: {},
                          Id: {},
                          Confidence: {
                            type: 'float'
                          },
                          BoundingBox: {
                            shape: 'Sq'
                          },
                          Face: {
                            shape: 'S53'
                          },
                          KnownGender: {
                            shape: 'S7s'
                          }
                        }
                      }
                    }
                  }
                },
                JobId: {},
                Video: {
                  shape: 'S87'
                },
                JobTag: {}
              }
            }
          },
          GetContentModeration: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SortBy: {},
                AggregateBy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                StatusMessage: {},
                VideoMetadata: {
                  shape: 'S81'
                },
                ModerationLabels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'long'
                      },
                      ModerationLabel: {
                        shape: 'S6f'
                      },
                      StartTimestampMillis: {
                        type: 'long'
                      },
                      EndTimestampMillis: {
                        type: 'long'
                      },
                      DurationMillis: {
                        type: 'long'
                      },
                      ContentTypes: {
                        shape: 'S6l'
                      }
                    }
                  }
                },
                NextToken: {},
                ModerationModelVersion: {},
                JobId: {},
                Video: {
                  shape: 'S87'
                },
                JobTag: {},
                GetRequestMetadata: {
                  type: 'structure',
                  members: {
                    SortBy: {},
                    AggregateBy: {}
                  }
                }
              }
            }
          },
          GetFaceDetection: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                StatusMessage: {},
                VideoMetadata: {
                  shape: 'S81'
                },
                NextToken: {},
                Faces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'long'
                      },
                      Face: {
                        shape: 'S53'
                      }
                    }
                  }
                },
                JobId: {},
                Video: {
                  shape: 'S87'
                },
                JobTag: {}
              }
            }
          },
          GetFaceLivenessSessionResults: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SessionId', 'Status'],
              members: {
                SessionId: {},
                Status: {},
                Confidence: {
                  type: 'float'
                },
                ReferenceImage: {
                  shape: 'S8n'
                },
                AuditImages: {
                  type: 'list',
                  member: {
                    shape: 'S8n'
                  }
                }
              }
            }
          },
          GetFaceSearch: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SortBy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                StatusMessage: {},
                NextToken: {},
                VideoMetadata: {
                  shape: 'S81'
                },
                Persons: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'long'
                      },
                      Person: {
                        shape: 'S8v'
                      },
                      FaceMatches: {
                        shape: 'S8x'
                      }
                    }
                  }
                },
                JobId: {},
                Video: {
                  shape: 'S87'
                },
                JobTag: {}
              }
            }
          },
          GetLabelDetection: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SortBy: {},
                AggregateBy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                StatusMessage: {},
                VideoMetadata: {
                  shape: 'S81'
                },
                NextToken: {},
                Labels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'long'
                      },
                      Label: {
                        shape: 'S5q'
                      },
                      StartTimestampMillis: {
                        type: 'long'
                      },
                      EndTimestampMillis: {
                        type: 'long'
                      },
                      DurationMillis: {
                        type: 'long'
                      }
                    }
                  }
                },
                LabelModelVersion: {},
                JobId: {},
                Video: {
                  shape: 'S87'
                },
                JobTag: {},
                GetRequestMetadata: {
                  type: 'structure',
                  members: {
                    SortBy: {},
                    AggregateBy: {}
                  }
                }
              }
            }
          },
          GetMediaAnalysisJob: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['JobId', 'OperationsConfig', 'Status', 'CreationTimestamp', 'Input', 'OutputConfig'],
              members: {
                JobId: {},
                JobName: {},
                OperationsConfig: {
                  shape: 'S9e'
                },
                Status: {},
                FailureDetails: {
                  shape: 'S9h'
                },
                CreationTimestamp: {
                  type: 'timestamp'
                },
                CompletionTimestamp: {
                  type: 'timestamp'
                },
                Input: {
                  shape: 'S9j'
                },
                OutputConfig: {
                  shape: 'S9k'
                },
                KmsKeyId: {},
                Results: {
                  shape: 'S9m'
                },
                ManifestSummary: {
                  shape: 'S9o'
                }
              }
            }
          },
          GetPersonTracking: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SortBy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                StatusMessage: {},
                VideoMetadata: {
                  shape: 'S81'
                },
                NextToken: {},
                Persons: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'long'
                      },
                      Person: {
                        shape: 'S8v'
                      }
                    }
                  }
                },
                JobId: {},
                Video: {
                  shape: 'S87'
                },
                JobTag: {}
              }
            }
          },
          GetSegmentDetection: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                StatusMessage: {},
                VideoMetadata: {
                  type: 'list',
                  member: {
                    shape: 'S81'
                  }
                },
                AudioMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Codec: {},
                      DurationMillis: {
                        type: 'long'
                      },
                      SampleRate: {
                        type: 'long'
                      },
                      NumberOfChannels: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {},
                Segments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      StartTimestampMillis: {
                        type: 'long'
                      },
                      EndTimestampMillis: {
                        type: 'long'
                      },
                      DurationMillis: {
                        type: 'long'
                      },
                      StartTimecodeSMPTE: {},
                      EndTimecodeSMPTE: {},
                      DurationSMPTE: {},
                      TechnicalCueSegment: {
                        type: 'structure',
                        members: {
                          Type: {},
                          Confidence: {
                            type: 'float'
                          }
                        }
                      },
                      ShotSegment: {
                        type: 'structure',
                        members: {
                          Index: {
                            type: 'long'
                          },
                          Confidence: {
                            type: 'float'
                          }
                        }
                      },
                      StartFrameNumber: {
                        type: 'long'
                      },
                      EndFrameNumber: {
                        type: 'long'
                      },
                      DurationFrames: {
                        type: 'long'
                      }
                    }
                  }
                },
                SelectedSegmentTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      ModelVersion: {}
                    }
                  }
                },
                JobId: {},
                Video: {
                  shape: 'S87'
                },
                JobTag: {}
              }
            }
          },
          GetTextDetection: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                StatusMessage: {},
                VideoMetadata: {
                  shape: 'S81'
                },
                TextDetections: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'long'
                      },
                      TextDetection: {
                        shape: 'S79'
                      }
                    }
                  }
                },
                NextToken: {},
                TextModelVersion: {},
                JobId: {},
                Video: {
                  shape: 'S87'
                },
                JobTag: {}
              }
            }
          },
          IndexFaces: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'Image'],
              members: {
                CollectionId: {},
                Image: {
                  shape: 'Sh'
                },
                ExternalImageId: {},
                DetectionAttributes: {
                  shape: 'S4z'
                },
                MaxFaces: {
                  type: 'integer'
                },
                QualityFilter: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FaceRecords: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Face: {
                        shape: 'S8z'
                      },
                      FaceDetail: {
                        shape: 'S53'
                      }
                    }
                  }
                },
                OrientationCorrection: {},
                FaceModelVersion: {},
                UnindexedFaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Reasons: {
                        type: 'list',
                        member: {}
                      },
                      FaceDetail: {
                        shape: 'S53'
                      }
                    }
                  }
                }
              }
            }
          },
          ListCollections: {
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
                CollectionIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                FaceModelVersions: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListDatasetEntries: {
            input: {
              type: 'structure',
              required: ['DatasetArn'],
              members: {
                DatasetArn: {},
                ContainsLabels: {
                  type: 'list',
                  member: {}
                },
                Labeled: {
                  type: 'boolean'
                },
                SourceRefContains: {},
                HasErrors: {
                  type: 'boolean'
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
                DatasetEntries: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListDatasetLabels: {
            input: {
              type: 'structure',
              required: ['DatasetArn'],
              members: {
                DatasetArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetLabelDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LabelName: {},
                      LabelStats: {
                        type: 'structure',
                        members: {
                          EntryCount: {
                            type: 'integer'
                          },
                          BoundingBoxCount: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFaces: {
            input: {
              type: 'structure',
              required: ['CollectionId'],
              members: {
                CollectionId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                UserId: {},
                FaceIds: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Faces: {
                  type: 'list',
                  member: {
                    shape: 'S8z'
                  }
                },
                NextToken: {},
                FaceModelVersion: {}
              }
            }
          },
          ListMediaAnalysisJobs: {
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
              required: ['MediaAnalysisJobs'],
              members: {
                NextToken: {},
                MediaAnalysisJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['JobId', 'OperationsConfig', 'Status', 'CreationTimestamp', 'Input', 'OutputConfig'],
                    members: {
                      JobId: {},
                      JobName: {},
                      OperationsConfig: {
                        shape: 'S9e'
                      },
                      Status: {},
                      FailureDetails: {
                        shape: 'S9h'
                      },
                      CreationTimestamp: {
                        type: 'timestamp'
                      },
                      CompletionTimestamp: {
                        type: 'timestamp'
                      },
                      Input: {
                        shape: 'S9j'
                      },
                      OutputConfig: {
                        shape: 'S9k'
                      },
                      KmsKeyId: {},
                      Results: {
                        shape: 'S9m'
                      },
                      ManifestSummary: {
                        shape: 'S9o'
                      }
                    }
                  }
                }
              }
            }
          },
          ListProjectPolicies: {
            input: {
              type: 'structure',
              required: ['ProjectArn'],
              members: {
                ProjectArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProjectPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProjectArn: {},
                      PolicyName: {},
                      PolicyRevisionId: {},
                      PolicyDocument: {},
                      CreationTimestamp: {
                        type: 'timestamp'
                      },
                      LastUpdatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStreamProcessors: {
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
                StreamProcessors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Status: {}
                    }
                  }
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
                Tags: {
                  shape: 'S1e'
                }
              }
            }
          },
          ListUsers: {
            input: {
              type: 'structure',
              required: ['CollectionId'],
              members: {
                CollectionId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UserId: {},
                      UserStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PutProjectPolicy: {
            input: {
              type: 'structure',
              required: ['ProjectArn', 'PolicyName', 'PolicyDocument'],
              members: {
                ProjectArn: {},
                PolicyName: {},
                PolicyRevisionId: {},
                PolicyDocument: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyRevisionId: {}
              }
            }
          },
          RecognizeCelebrities: {
            input: {
              type: 'structure',
              required: ['Image'],
              members: {
                Image: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CelebrityFaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Urls: {
                        shape: 'S7q'
                      },
                      Name: {},
                      Id: {},
                      Face: {
                        shape: 'Su'
                      },
                      MatchConfidence: {
                        type: 'float'
                      },
                      KnownGender: {
                        shape: 'S7s'
                      }
                    }
                  }
                },
                UnrecognizedFaces: {
                  type: 'list',
                  member: {
                    shape: 'Su'
                  }
                },
                OrientationCorrection: {}
              }
            }
          },
          SearchFaces: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'FaceId'],
              members: {
                CollectionId: {},
                FaceId: {},
                MaxFaces: {
                  type: 'integer'
                },
                FaceMatchThreshold: {
                  type: 'float'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SearchedFaceId: {},
                FaceMatches: {
                  shape: 'S8x'
                },
                FaceModelVersion: {}
              }
            }
          },
          SearchFacesByImage: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'Image'],
              members: {
                CollectionId: {},
                Image: {
                  shape: 'Sh'
                },
                MaxFaces: {
                  type: 'integer'
                },
                FaceMatchThreshold: {
                  type: 'float'
                },
                QualityFilter: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SearchedFaceBoundingBox: {
                  shape: 'Sq'
                },
                SearchedFaceConfidence: {
                  type: 'float'
                },
                FaceMatches: {
                  shape: 'S8x'
                },
                FaceModelVersion: {}
              }
            }
          },
          SearchUsers: {
            input: {
              type: 'structure',
              required: ['CollectionId'],
              members: {
                CollectionId: {},
                UserId: {},
                FaceId: {},
                UserMatchThreshold: {
                  type: 'float'
                },
                MaxUsers: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserMatches: {
                  shape: 'Scb'
                },
                FaceModelVersion: {},
                SearchedFace: {
                  type: 'structure',
                  members: {
                    FaceId: {}
                  }
                },
                SearchedUser: {
                  type: 'structure',
                  members: {
                    UserId: {}
                  }
                }
              }
            }
          },
          SearchUsersByImage: {
            input: {
              type: 'structure',
              required: ['CollectionId', 'Image'],
              members: {
                CollectionId: {},
                Image: {
                  shape: 'Sh'
                },
                UserMatchThreshold: {
                  type: 'float'
                },
                MaxUsers: {
                  type: 'integer'
                },
                QualityFilter: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserMatches: {
                  shape: 'Scb'
                },
                FaceModelVersion: {},
                SearchedFace: {
                  type: 'structure',
                  members: {
                    FaceDetail: {
                      shape: 'S53'
                    }
                  }
                },
                UnsearchedFaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FaceDetails: {
                        shape: 'S53'
                      },
                      Reasons: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          StartCelebrityRecognition: {
            input: {
              type: 'structure',
              required: ['Video'],
              members: {
                Video: {
                  shape: 'S87'
                },
                ClientRequestToken: {},
                NotificationChannel: {
                  shape: 'Sco'
                },
                JobTag: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StartContentModeration: {
            input: {
              type: 'structure',
              required: ['Video'],
              members: {
                Video: {
                  shape: 'S87'
                },
                MinConfidence: {
                  type: 'float'
                },
                ClientRequestToken: {},
                NotificationChannel: {
                  shape: 'Sco'
                },
                JobTag: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StartFaceDetection: {
            input: {
              type: 'structure',
              required: ['Video'],
              members: {
                Video: {
                  shape: 'S87'
                },
                ClientRequestToken: {},
                NotificationChannel: {
                  shape: 'Sco'
                },
                FaceAttributes: {},
                JobTag: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StartFaceSearch: {
            input: {
              type: 'structure',
              required: ['Video', 'CollectionId'],
              members: {
                Video: {
                  shape: 'S87'
                },
                ClientRequestToken: {},
                FaceMatchThreshold: {
                  type: 'float'
                },
                CollectionId: {},
                NotificationChannel: {
                  shape: 'Sco'
                },
                JobTag: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StartLabelDetection: {
            input: {
              type: 'structure',
              required: ['Video'],
              members: {
                Video: {
                  shape: 'S87'
                },
                ClientRequestToken: {},
                MinConfidence: {
                  type: 'float'
                },
                NotificationChannel: {
                  shape: 'Sco'
                },
                JobTag: {},
                Features: {
                  type: 'list',
                  member: {}
                },
                Settings: {
                  type: 'structure',
                  members: {
                    GeneralLabels: {
                      shape: 'S5j'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StartMediaAnalysisJob: {
            input: {
              type: 'structure',
              required: ['OperationsConfig', 'Input', 'OutputConfig'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                JobName: {},
                OperationsConfig: {
                  shape: 'S9e'
                },
                Input: {
                  shape: 'S9j'
                },
                OutputConfig: {
                  shape: 'S9k'
                },
                KmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StartPersonTracking: {
            input: {
              type: 'structure',
              required: ['Video'],
              members: {
                Video: {
                  shape: 'S87'
                },
                ClientRequestToken: {},
                NotificationChannel: {
                  shape: 'Sco'
                },
                JobTag: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StartProjectVersion: {
            input: {
              type: 'structure',
              required: ['ProjectVersionArn', 'MinInferenceUnits'],
              members: {
                ProjectVersionArn: {},
                MinInferenceUnits: {
                  type: 'integer'
                },
                MaxInferenceUnits: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          StartSegmentDetection: {
            input: {
              type: 'structure',
              required: ['Video', 'SegmentTypes'],
              members: {
                Video: {
                  shape: 'S87'
                },
                ClientRequestToken: {},
                NotificationChannel: {
                  shape: 'Sco'
                },
                JobTag: {},
                Filters: {
                  type: 'structure',
                  members: {
                    TechnicalCueFilter: {
                      type: 'structure',
                      members: {
                        MinSegmentConfidence: {
                          type: 'float'
                        },
                        BlackFrame: {
                          type: 'structure',
                          members: {
                            MaxPixelThreshold: {
                              type: 'float'
                            },
                            MinCoveragePercentage: {
                              type: 'float'
                            }
                          }
                        }
                      }
                    },
                    ShotFilter: {
                      type: 'structure',
                      members: {
                        MinSegmentConfidence: {
                          type: 'float'
                        }
                      }
                    }
                  }
                },
                SegmentTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StartStreamProcessor: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                StartSelector: {
                  type: 'structure',
                  members: {
                    KVSStreamStartSelector: {
                      type: 'structure',
                      members: {
                        ProducerTimestamp: {
                          type: 'long'
                        },
                        FragmentNumber: {}
                      }
                    }
                  }
                },
                StopSelector: {
                  type: 'structure',
                  members: {
                    MaxDurationInSeconds: {
                      type: 'long'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SessionId: {}
              }
            }
          },
          StartTextDetection: {
            input: {
              type: 'structure',
              required: ['Video'],
              members: {
                Video: {
                  shape: 'S87'
                },
                ClientRequestToken: {},
                NotificationChannel: {
                  shape: 'Sco'
                },
                JobTag: {},
                Filters: {
                  type: 'structure',
                  members: {
                    WordFilter: {
                      shape: 'S74'
                    },
                    RegionsOfInterest: {
                      shape: 'S2v'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          StopProjectVersion: {
            input: {
              type: 'structure',
              required: ['ProjectVersionArn'],
              members: {
                ProjectVersionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          StopStreamProcessor: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
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
                  shape: 'S1e'
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
          UpdateDatasetEntries: {
            input: {
              type: 'structure',
              required: ['DatasetArn', 'Changes'],
              members: {
                DatasetArn: {},
                Changes: {
                  type: 'structure',
                  required: ['GroundTruth'],
                  members: {
                    GroundTruth: {
                      type: 'blob'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateStreamProcessor: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                SettingsForUpdate: {
                  type: 'structure',
                  members: {
                    ConnectedHomeForUpdate: {
                      type: 'structure',
                      members: {
                        Labels: {
                          shape: 'S2q'
                        },
                        MinConfidence: {
                          type: 'float'
                        }
                      }
                    }
                  }
                },
                RegionsOfInterestForUpdate: {
                  shape: 'S2v'
                },
                DataSharingPreferenceForUpdate: {
                  shape: 'S2z'
                },
                ParametersToDelete: {
                  type: 'list',
                  member: {}
                }
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
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'structure',
            members: {
              Bytes: {
                type: 'blob'
              },
              S3Object: {
                shape: 'Sj'
              }
            }
          },
          Sj: {
            type: 'structure',
            members: {
              Bucket: {},
              Name: {},
              Version: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              Width: {
                type: 'float'
              },
              Height: {
                type: 'float'
              },
              Left: {
                type: 'float'
              },
              Top: {
                type: 'float'
              }
            }
          },
          Su: {
            type: 'structure',
            members: {
              BoundingBox: {
                shape: 'Sq'
              },
              Confidence: {
                type: 'float'
              },
              Landmarks: {
                shape: 'Sv'
              },
              Pose: {
                shape: 'Sy'
              },
              Quality: {
                shape: 'S10'
              },
              Emotions: {
                shape: 'S11'
              },
              Smile: {
                shape: 'S14'
              }
            }
          },
          Sv: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                X: {
                  type: 'float'
                },
                Y: {
                  type: 'float'
                }
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              Roll: {
                type: 'float'
              },
              Yaw: {
                type: 'float'
              },
              Pitch: {
                type: 'float'
              }
            }
          },
          S10: {
            type: 'structure',
            members: {
              Brightness: {
                type: 'float'
              },
              Sharpness: {
                type: 'float'
              }
            }
          },
          S11: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Confidence: {
                  type: 'float'
                }
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              Value: {
                type: 'boolean'
              },
              Confidence: {
                type: 'float'
              }
            }
          },
          S1c: {
            type: 'structure',
            members: {
              S3Bucket: {},
              S3KeyPrefix: {}
            }
          },
          S1e: {
            type: 'map',
            key: {},
            value: {}
          },
          S1p: {
            type: 'structure',
            members: {
              S3Object: {
                shape: 'Sj'
              }
            }
          },
          S26: {
            type: 'structure',
            members: {
              Assets: {
                shape: 'S27'
              }
            }
          },
          S27: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                GroundTruthManifest: {
                  shape: 'S1p'
                }
              }
            }
          },
          S29: {
            type: 'structure',
            members: {
              Assets: {
                shape: 'S27'
              },
              AutoCreate: {
                type: 'boolean'
              }
            }
          },
          S2b: {
            type: 'structure',
            members: {
              ContentModeration: {
                type: 'structure',
                members: {
                  ConfidenceThreshold: {
                    type: 'float'
                  }
                }
              }
            }
          },
          S2f: {
            type: 'structure',
            members: {
              KinesisVideoStream: {
                type: 'structure',
                members: {
                  Arn: {}
                }
              }
            }
          },
          S2i: {
            type: 'structure',
            members: {
              KinesisDataStream: {
                type: 'structure',
                members: {
                  Arn: {}
                }
              },
              S3Destination: {
                type: 'structure',
                members: {
                  Bucket: {},
                  KeyPrefix: {}
                }
              }
            }
          },
          S2n: {
            type: 'structure',
            members: {
              FaceSearch: {
                type: 'structure',
                members: {
                  CollectionId: {},
                  FaceMatchThreshold: {
                    type: 'float'
                  }
                }
              },
              ConnectedHome: {
                type: 'structure',
                required: ['Labels'],
                members: {
                  Labels: {
                    shape: 'S2q'
                  },
                  MinConfidence: {
                    type: 'float'
                  }
                }
              }
            }
          },
          S2q: {
            type: 'list',
            member: {}
          },
          S2t: {
            type: 'structure',
            required: ['SNSTopicArn'],
            members: {
              SNSTopicArn: {}
            }
          },
          S2v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                BoundingBox: {
                  shape: 'Sq'
                },
                Polygon: {
                  shape: 'S2x'
                }
              }
            }
          },
          S2x: {
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
          },
          S2z: {
            type: 'structure',
            required: ['OptIn'],
            members: {
              OptIn: {
                type: 'boolean'
              }
            }
          },
          S39: {
            type: 'list',
            member: {}
          },
          S4d: {
            type: 'structure',
            members: {
              Assets: {
                shape: 'S27'
              }
            }
          },
          S4x: {
            type: 'structure',
            members: {
              BoundingBox: {
                shape: 'Sq'
              },
              Polygon: {
                shape: 'S2x'
              }
            }
          },
          S4z: {
            type: 'list',
            member: {}
          },
          S53: {
            type: 'structure',
            members: {
              BoundingBox: {
                shape: 'Sq'
              },
              AgeRange: {
                type: 'structure',
                members: {
                  Low: {
                    type: 'integer'
                  },
                  High: {
                    type: 'integer'
                  }
                }
              },
              Smile: {
                shape: 'S14'
              },
              Eyeglasses: {
                type: 'structure',
                members: {
                  Value: {
                    type: 'boolean'
                  },
                  Confidence: {
                    type: 'float'
                  }
                }
              },
              Sunglasses: {
                type: 'structure',
                members: {
                  Value: {
                    type: 'boolean'
                  },
                  Confidence: {
                    type: 'float'
                  }
                }
              },
              Gender: {
                type: 'structure',
                members: {
                  Value: {},
                  Confidence: {
                    type: 'float'
                  }
                }
              },
              Beard: {
                type: 'structure',
                members: {
                  Value: {
                    type: 'boolean'
                  },
                  Confidence: {
                    type: 'float'
                  }
                }
              },
              Mustache: {
                type: 'structure',
                members: {
                  Value: {
                    type: 'boolean'
                  },
                  Confidence: {
                    type: 'float'
                  }
                }
              },
              EyesOpen: {
                type: 'structure',
                members: {
                  Value: {
                    type: 'boolean'
                  },
                  Confidence: {
                    type: 'float'
                  }
                }
              },
              MouthOpen: {
                type: 'structure',
                members: {
                  Value: {
                    type: 'boolean'
                  },
                  Confidence: {
                    type: 'float'
                  }
                }
              },
              Emotions: {
                shape: 'S11'
              },
              Landmarks: {
                shape: 'Sv'
              },
              Pose: {
                shape: 'Sy'
              },
              Quality: {
                shape: 'S10'
              },
              Confidence: {
                type: 'float'
              },
              FaceOccluded: {
                type: 'structure',
                members: {
                  Value: {
                    type: 'boolean'
                  },
                  Confidence: {
                    type: 'float'
                  }
                }
              },
              EyeDirection: {
                type: 'structure',
                members: {
                  Yaw: {
                    type: 'float'
                  },
                  Pitch: {
                    type: 'float'
                  },
                  Confidence: {
                    type: 'float'
                  }
                }
              }
            }
          },
          S5j: {
            type: 'structure',
            members: {
              LabelInclusionFilters: {
                shape: 'S5k'
              },
              LabelExclusionFilters: {
                shape: 'S5k'
              },
              LabelCategoryInclusionFilters: {
                shape: 'S5k'
              },
              LabelCategoryExclusionFilters: {
                shape: 'S5k'
              }
            }
          },
          S5k: {
            type: 'list',
            member: {}
          },
          S5q: {
            type: 'structure',
            members: {
              Name: {},
              Confidence: {
                type: 'float'
              },
              Instances: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    BoundingBox: {
                      shape: 'Sq'
                    },
                    Confidence: {
                      type: 'float'
                    },
                    DominantColors: {
                      shape: 'S5t'
                    }
                  }
                }
              },
              Parents: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {}
                  }
                }
              },
              Aliases: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {}
                  }
                }
              },
              Categories: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {}
                  }
                }
              }
            }
          },
          S5t: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Red: {
                  type: 'integer'
                },
                Blue: {
                  type: 'integer'
                },
                Green: {
                  type: 'integer'
                },
                HexCode: {},
                CSSColor: {},
                SimplifiedColor: {},
                PixelPercent: {
                  type: 'float'
                }
              }
            }
          },
          S62: {
            type: 'structure',
            members: {
              Brightness: {
                type: 'float'
              },
              Sharpness: {
                type: 'float'
              },
              Contrast: {
                type: 'float'
              }
            }
          },
          S6f: {
            type: 'structure',
            members: {
              Confidence: {
                type: 'float'
              },
              Name: {},
              ParentName: {},
              TaxonomyLevel: {
                type: 'integer'
              }
            }
          },
          S6l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Confidence: {
                  type: 'float'
                },
                Name: {}
              }
            }
          },
          S71: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          S74: {
            type: 'structure',
            members: {
              MinConfidence: {
                type: 'float'
              },
              MinBoundingBoxHeight: {
                type: 'float'
              },
              MinBoundingBoxWidth: {
                type: 'float'
              }
            }
          },
          S79: {
            type: 'structure',
            members: {
              DetectedText: {},
              Type: {},
              Id: {
                type: 'integer'
              },
              ParentId: {
                type: 'integer'
              },
              Confidence: {
                type: 'float'
              },
              Geometry: {
                shape: 'S4x'
              }
            }
          },
          S7q: {
            type: 'list',
            member: {}
          },
          S7s: {
            type: 'structure',
            members: {
              Type: {}
            }
          },
          S81: {
            type: 'structure',
            members: {
              Codec: {},
              DurationMillis: {
                type: 'long'
              },
              Format: {},
              FrameRate: {
                type: 'float'
              },
              FrameHeight: {
                type: 'long'
              },
              FrameWidth: {
                type: 'long'
              },
              ColorRange: {}
            }
          },
          S87: {
            type: 'structure',
            members: {
              S3Object: {
                shape: 'Sj'
              }
            }
          },
          S8n: {
            type: 'structure',
            members: {
              Bytes: {
                type: 'blob',
                sensitive: true
              },
              S3Object: {
                shape: 'Sj'
              },
              BoundingBox: {
                shape: 'Sq'
              }
            }
          },
          S8v: {
            type: 'structure',
            members: {
              Index: {
                type: 'long'
              },
              BoundingBox: {
                shape: 'Sq'
              },
              Face: {
                shape: 'S53'
              }
            }
          },
          S8x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Similarity: {
                  type: 'float'
                },
                Face: {
                  shape: 'S8z'
                }
              }
            }
          },
          S8z: {
            type: 'structure',
            members: {
              FaceId: {},
              BoundingBox: {
                shape: 'Sq'
              },
              ImageId: {},
              ExternalImageId: {},
              Confidence: {
                type: 'float'
              },
              IndexFacesModelVersion: {},
              UserId: {}
            }
          },
          S9e: {
            type: 'structure',
            members: {
              DetectModerationLabels: {
                type: 'structure',
                members: {
                  MinConfidence: {
                    type: 'float'
                  },
                  ProjectVersion: {}
                }
              }
            }
          },
          S9h: {
            type: 'structure',
            members: {
              Code: {},
              Message: {}
            }
          },
          S9j: {
            type: 'structure',
            required: ['S3Object'],
            members: {
              S3Object: {
                shape: 'Sj'
              }
            }
          },
          S9k: {
            type: 'structure',
            required: ['S3Bucket'],
            members: {
              S3Bucket: {},
              S3KeyPrefix: {}
            }
          },
          S9m: {
            type: 'structure',
            members: {
              S3Object: {
                shape: 'Sj'
              },
              ModelVersions: {
                type: 'structure',
                members: {
                  Moderation: {}
                }
              }
            }
          },
          S9o: {
            type: 'structure',
            members: {
              S3Object: {
                shape: 'Sj'
              }
            }
          },
          Scb: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Similarity: {
                  type: 'float'
                },
                User: {
                  type: 'structure',
                  members: {
                    UserId: {},
                    UserStatus: {}
                  }
                }
              }
            }
          },
          Sco: {
            type: 'structure',
            required: ['SNSTopicArn', 'RoleArn'],
            members: {
              SNSTopicArn: {},
              RoleArn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3bdb712b01e9315317d1f410db5978296a337c9a.js.map