System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-12-15',
          endpointPrefix: 'lookoutequipment',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceAbbreviation: 'LookoutEquipment',
          serviceFullName: 'Amazon Lookout for Equipment',
          serviceId: 'LookoutEquipment',
          signatureVersion: 'v4',
          targetPrefix: 'AWSLookoutEquipmentFrontendService',
          uid: 'lookoutequipment-2020-12-15'
        },
        operations: {
          CreateDataset: {
            input: {
              type: 'structure',
              required: ['DatasetName', 'ClientToken'],
              members: {
                DatasetName: {},
                DatasetSchema: {
                  shape: 'S3'
                },
                ServerSideKmsKeyId: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetName: {},
                DatasetArn: {},
                Status: {}
              }
            }
          },
          CreateInferenceScheduler: {
            input: {
              type: 'structure',
              required: ['ModelName', 'InferenceSchedulerName', 'DataUploadFrequency', 'DataInputConfiguration', 'DataOutputConfiguration', 'RoleArn', 'ClientToken'],
              members: {
                ModelName: {},
                InferenceSchedulerName: {},
                DataDelayOffsetInMinutes: {
                  type: 'long'
                },
                DataUploadFrequency: {},
                DataInputConfiguration: {
                  shape: 'Sj'
                },
                DataOutputConfiguration: {
                  shape: 'Sr'
                },
                RoleArn: {},
                ServerSideKmsKeyId: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InferenceSchedulerArn: {},
                InferenceSchedulerName: {},
                Status: {},
                ModelQuality: {}
              }
            }
          },
          CreateLabel: {
            input: {
              type: 'structure',
              required: ['LabelGroupName', 'StartTime', 'EndTime', 'Rating', 'ClientToken'],
              members: {
                LabelGroupName: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Rating: {},
                FaultCode: {},
                Notes: {},
                Equipment: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LabelId: {}
              }
            }
          },
          CreateLabelGroup: {
            input: {
              type: 'structure',
              required: ['LabelGroupName', 'ClientToken'],
              members: {
                LabelGroupName: {},
                FaultCodes: {
                  shape: 'S18'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LabelGroupName: {},
                LabelGroupArn: {}
              }
            }
          },
          CreateModel: {
            input: {
              type: 'structure',
              required: ['ModelName', 'DatasetName', 'ClientToken'],
              members: {
                ModelName: {},
                DatasetName: {},
                DatasetSchema: {
                  shape: 'S3'
                },
                LabelsInputConfiguration: {
                  shape: 'S1d'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                TrainingDataStartTime: {
                  type: 'timestamp'
                },
                TrainingDataEndTime: {
                  type: 'timestamp'
                },
                EvaluationDataStartTime: {
                  type: 'timestamp'
                },
                EvaluationDataEndTime: {
                  type: 'timestamp'
                },
                RoleArn: {},
                DataPreProcessingConfiguration: {
                  shape: 'S1f'
                },
                ServerSideKmsKeyId: {},
                Tags: {
                  shape: 'S7'
                },
                OffCondition: {},
                ModelDiagnosticsOutputConfiguration: {
                  shape: 'S1i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelArn: {},
                Status: {}
              }
            }
          },
          CreateRetrainingScheduler: {
            input: {
              type: 'structure',
              required: ['ModelName', 'RetrainingFrequency', 'LookbackWindow', 'ClientToken'],
              members: {
                ModelName: {},
                RetrainingStartDate: {
                  type: 'timestamp'
                },
                RetrainingFrequency: {},
                LookbackWindow: {},
                PromoteMode: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelName: {},
                ModelArn: {},
                Status: {}
              }
            }
          },
          DeleteDataset: {
            input: {
              type: 'structure',
              required: ['DatasetName'],
              members: {
                DatasetName: {}
              }
            }
          },
          DeleteInferenceScheduler: {
            input: {
              type: 'structure',
              required: ['InferenceSchedulerName'],
              members: {
                InferenceSchedulerName: {}
              }
            }
          },
          DeleteLabel: {
            input: {
              type: 'structure',
              required: ['LabelGroupName', 'LabelId'],
              members: {
                LabelGroupName: {},
                LabelId: {}
              }
            }
          },
          DeleteLabelGroup: {
            input: {
              type: 'structure',
              required: ['LabelGroupName'],
              members: {
                LabelGroupName: {}
              }
            }
          },
          DeleteModel: {
            input: {
              type: 'structure',
              required: ['ModelName'],
              members: {
                ModelName: {}
              }
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            }
          },
          DeleteRetrainingScheduler: {
            input: {
              type: 'structure',
              required: ['ModelName'],
              members: {
                ModelName: {}
              }
            }
          },
          DescribeDataIngestionJob: {
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
                DatasetArn: {},
                IngestionInputConfiguration: {
                  shape: 'S25'
                },
                RoleArn: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                Status: {},
                FailedReason: {},
                DataQualitySummary: {
                  shape: 'S2a'
                },
                IngestedFilesSummary: {
                  shape: 'S2j'
                },
                StatusDetail: {},
                IngestedDataSize: {
                  type: 'long'
                },
                DataStartTime: {
                  type: 'timestamp'
                },
                DataEndTime: {
                  type: 'timestamp'
                },
                SourceDatasetArn: {}
              }
            }
          },
          DescribeDataset: {
            input: {
              type: 'structure',
              required: ['DatasetName'],
              members: {
                DatasetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetName: {},
                DatasetArn: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Status: {},
                Schema: {
                  jsonvalue: true
                },
                ServerSideKmsKeyId: {},
                IngestionInputConfiguration: {
                  shape: 'S25'
                },
                DataQualitySummary: {
                  shape: 'S2a'
                },
                IngestedFilesSummary: {
                  shape: 'S2j'
                },
                RoleArn: {},
                DataStartTime: {
                  type: 'timestamp'
                },
                DataEndTime: {
                  type: 'timestamp'
                },
                SourceDatasetArn: {}
              }
            }
          },
          DescribeInferenceScheduler: {
            input: {
              type: 'structure',
              required: ['InferenceSchedulerName'],
              members: {
                InferenceSchedulerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelArn: {},
                ModelName: {},
                InferenceSchedulerName: {},
                InferenceSchedulerArn: {},
                Status: {},
                DataDelayOffsetInMinutes: {
                  type: 'long'
                },
                DataUploadFrequency: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                DataInputConfiguration: {
                  shape: 'Sj'
                },
                DataOutputConfiguration: {
                  shape: 'Sr'
                },
                RoleArn: {},
                ServerSideKmsKeyId: {},
                LatestInferenceResult: {}
              }
            }
          },
          DescribeLabel: {
            input: {
              type: 'structure',
              required: ['LabelGroupName', 'LabelId'],
              members: {
                LabelGroupName: {},
                LabelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LabelGroupName: {},
                LabelGroupArn: {},
                LabelId: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Rating: {},
                FaultCode: {},
                Notes: {},
                Equipment: {},
                CreatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeLabelGroup: {
            input: {
              type: 'structure',
              required: ['LabelGroupName'],
              members: {
                LabelGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LabelGroupName: {},
                LabelGroupArn: {},
                FaultCodes: {
                  shape: 'S18'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeModel: {
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
                ModelName: {},
                ModelArn: {},
                DatasetName: {},
                DatasetArn: {},
                Schema: {
                  jsonvalue: true
                },
                LabelsInputConfiguration: {
                  shape: 'S1d'
                },
                TrainingDataStartTime: {
                  type: 'timestamp'
                },
                TrainingDataEndTime: {
                  type: 'timestamp'
                },
                EvaluationDataStartTime: {
                  type: 'timestamp'
                },
                EvaluationDataEndTime: {
                  type: 'timestamp'
                },
                RoleArn: {},
                DataPreProcessingConfiguration: {
                  shape: 'S1f'
                },
                Status: {},
                TrainingExecutionStartTime: {
                  type: 'timestamp'
                },
                TrainingExecutionEndTime: {
                  type: 'timestamp'
                },
                FailedReason: {},
                ModelMetrics: {
                  jsonvalue: true
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                ServerSideKmsKeyId: {},
                OffCondition: {},
                SourceModelVersionArn: {},
                ImportJobStartTime: {
                  type: 'timestamp'
                },
                ImportJobEndTime: {
                  type: 'timestamp'
                },
                ActiveModelVersion: {
                  type: 'long'
                },
                ActiveModelVersionArn: {},
                ModelVersionActivatedAt: {
                  type: 'timestamp'
                },
                PreviousActiveModelVersion: {
                  type: 'long'
                },
                PreviousActiveModelVersionArn: {},
                PreviousModelVersionActivatedAt: {
                  type: 'timestamp'
                },
                PriorModelMetrics: {
                  jsonvalue: true
                },
                LatestScheduledRetrainingFailedReason: {},
                LatestScheduledRetrainingStatus: {},
                LatestScheduledRetrainingModelVersion: {
                  type: 'long'
                },
                LatestScheduledRetrainingStartTime: {
                  type: 'timestamp'
                },
                LatestScheduledRetrainingAvailableDataInDays: {
                  type: 'integer'
                },
                NextScheduledRetrainingStartDate: {
                  type: 'timestamp'
                },
                AccumulatedInferenceDataStartTime: {
                  type: 'timestamp'
                },
                AccumulatedInferenceDataEndTime: {
                  type: 'timestamp'
                },
                RetrainingSchedulerStatus: {},
                ModelDiagnosticsOutputConfiguration: {
                  shape: 'S1i'
                },
                ModelQuality: {}
              }
            }
          },
          DescribeModelVersion: {
            input: {
              type: 'structure',
              required: ['ModelName', 'ModelVersion'],
              members: {
                ModelName: {},
                ModelVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelName: {},
                ModelArn: {},
                ModelVersion: {
                  type: 'long'
                },
                ModelVersionArn: {},
                Status: {},
                SourceType: {},
                DatasetName: {},
                DatasetArn: {},
                Schema: {},
                LabelsInputConfiguration: {
                  shape: 'S1d'
                },
                TrainingDataStartTime: {
                  type: 'timestamp'
                },
                TrainingDataEndTime: {
                  type: 'timestamp'
                },
                EvaluationDataStartTime: {
                  type: 'timestamp'
                },
                EvaluationDataEndTime: {
                  type: 'timestamp'
                },
                RoleArn: {},
                DataPreProcessingConfiguration: {
                  shape: 'S1f'
                },
                TrainingExecutionStartTime: {
                  type: 'timestamp'
                },
                TrainingExecutionEndTime: {
                  type: 'timestamp'
                },
                FailedReason: {},
                ModelMetrics: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                ServerSideKmsKeyId: {},
                OffCondition: {},
                SourceModelVersionArn: {},
                ImportJobStartTime: {
                  type: 'timestamp'
                },
                ImportJobEndTime: {
                  type: 'timestamp'
                },
                ImportedDataSizeInBytes: {
                  type: 'long'
                },
                PriorModelMetrics: {},
                RetrainingAvailableDataInDays: {
                  type: 'integer'
                },
                AutoPromotionResult: {},
                AutoPromotionResultReason: {},
                ModelDiagnosticsOutputConfiguration: {
                  shape: 'S1i'
                },
                ModelDiagnosticsResultsObject: {
                  shape: 'S2l'
                },
                ModelQuality: {}
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
                PolicyRevisionId: {},
                ResourcePolicy: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeRetrainingScheduler: {
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
                ModelName: {},
                ModelArn: {},
                RetrainingStartDate: {
                  type: 'timestamp'
                },
                RetrainingFrequency: {},
                LookbackWindow: {},
                Status: {},
                PromoteMode: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          ImportDataset: {
            input: {
              type: 'structure',
              required: ['SourceDatasetArn', 'ClientToken'],
              members: {
                SourceDatasetArn: {},
                DatasetName: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ServerSideKmsKeyId: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetName: {},
                DatasetArn: {},
                Status: {},
                JobId: {}
              }
            }
          },
          ImportModelVersion: {
            input: {
              type: 'structure',
              required: ['SourceModelVersionArn', 'DatasetName', 'ClientToken'],
              members: {
                SourceModelVersionArn: {},
                ModelName: {},
                DatasetName: {},
                LabelsInputConfiguration: {
                  shape: 'S1d'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                RoleArn: {},
                ServerSideKmsKeyId: {},
                Tags: {
                  shape: 'S7'
                },
                InferenceDataImportStrategy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelName: {},
                ModelArn: {},
                ModelVersionArn: {},
                ModelVersion: {
                  type: 'long'
                },
                Status: {}
              }
            }
          },
          ListDataIngestionJobs: {
            input: {
              type: 'structure',
              members: {
                DatasetName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                DataIngestionJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobId: {},
                      DatasetName: {},
                      DatasetArn: {},
                      IngestionInputConfiguration: {
                        shape: 'S25'
                      },
                      Status: {}
                    }
                  }
                }
              }
            }
          },
          ListDatasets: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                DatasetNameBeginsWith: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                DatasetSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DatasetName: {},
                      DatasetArn: {},
                      Status: {},
                      CreatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListInferenceEvents: {
            input: {
              type: 'structure',
              required: ['InferenceSchedulerName', 'IntervalStartTime', 'IntervalEndTime'],
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                InferenceSchedulerName: {},
                IntervalStartTime: {
                  type: 'timestamp'
                },
                IntervalEndTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                InferenceEventSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InferenceSchedulerArn: {},
                      InferenceSchedulerName: {},
                      EventStartTime: {
                        type: 'timestamp'
                      },
                      EventEndTime: {
                        type: 'timestamp'
                      },
                      Diagnostics: {},
                      EventDurationInSeconds: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          ListInferenceExecutions: {
            input: {
              type: 'structure',
              required: ['InferenceSchedulerName'],
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                InferenceSchedulerName: {},
                DataStartTimeAfter: {
                  type: 'timestamp'
                },
                DataEndTimeBefore: {
                  type: 'timestamp'
                },
                Status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                InferenceExecutionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ModelName: {},
                      ModelArn: {},
                      InferenceSchedulerName: {},
                      InferenceSchedulerArn: {},
                      ScheduledStartTime: {
                        type: 'timestamp'
                      },
                      DataStartTime: {
                        type: 'timestamp'
                      },
                      DataEndTime: {
                        type: 'timestamp'
                      },
                      DataInputConfiguration: {
                        shape: 'Sj'
                      },
                      DataOutputConfiguration: {
                        shape: 'Sr'
                      },
                      CustomerResultObject: {
                        shape: 'S2l'
                      },
                      Status: {},
                      FailedReason: {},
                      ModelVersion: {
                        type: 'long'
                      },
                      ModelVersionArn: {}
                    }
                  }
                }
              }
            }
          },
          ListInferenceSchedulers: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                InferenceSchedulerNameBeginsWith: {},
                ModelName: {},
                Status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                InferenceSchedulerSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ModelName: {},
                      ModelArn: {},
                      InferenceSchedulerName: {},
                      InferenceSchedulerArn: {},
                      Status: {},
                      DataDelayOffsetInMinutes: {
                        type: 'long'
                      },
                      DataUploadFrequency: {},
                      LatestInferenceResult: {}
                    }
                  }
                }
              }
            }
          },
          ListLabelGroups: {
            input: {
              type: 'structure',
              members: {
                LabelGroupNameBeginsWith: {},
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
                LabelGroupSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LabelGroupName: {},
                      LabelGroupArn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListLabels: {
            input: {
              type: 'structure',
              required: ['LabelGroupName'],
              members: {
                LabelGroupName: {},
                IntervalStartTime: {
                  type: 'timestamp'
                },
                IntervalEndTime: {
                  type: 'timestamp'
                },
                FaultCode: {},
                Equipment: {},
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
                LabelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LabelGroupName: {},
                      LabelId: {},
                      LabelGroupArn: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      Rating: {},
                      FaultCode: {},
                      Equipment: {},
                      CreatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListModelVersions: {
            input: {
              type: 'structure',
              required: ['ModelName'],
              members: {
                ModelName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Status: {},
                SourceType: {},
                CreatedAtEndTime: {
                  type: 'timestamp'
                },
                CreatedAtStartTime: {
                  type: 'timestamp'
                },
                MaxModelVersion: {
                  type: 'long'
                },
                MinModelVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ModelVersionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ModelName: {},
                      ModelArn: {},
                      ModelVersion: {
                        type: 'long'
                      },
                      ModelVersionArn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      Status: {},
                      SourceType: {},
                      ModelQuality: {}
                    }
                  }
                }
              }
            }
          },
          ListModels: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Status: {},
                ModelNameBeginsWith: {},
                DatasetNameBeginsWith: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ModelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ModelName: {},
                      ModelArn: {},
                      DatasetName: {},
                      DatasetArn: {},
                      Status: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      ActiveModelVersion: {
                        type: 'long'
                      },
                      ActiveModelVersionArn: {},
                      LatestScheduledRetrainingStatus: {},
                      LatestScheduledRetrainingModelVersion: {
                        type: 'long'
                      },
                      LatestScheduledRetrainingStartTime: {
                        type: 'timestamp'
                      },
                      NextScheduledRetrainingStartDate: {
                        type: 'timestamp'
                      },
                      RetrainingSchedulerStatus: {},
                      ModelDiagnosticsOutputConfiguration: {
                        shape: 'S1i'
                      },
                      ModelQuality: {}
                    }
                  }
                }
              }
            }
          },
          ListRetrainingSchedulers: {
            input: {
              type: 'structure',
              members: {
                ModelNameBeginsWith: {},
                Status: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RetrainingSchedulerSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ModelName: {},
                      ModelArn: {},
                      Status: {},
                      RetrainingStartDate: {
                        type: 'timestamp'
                      },
                      RetrainingFrequency: {},
                      LookbackWindow: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSensorStatistics: {
            input: {
              type: 'structure',
              required: ['DatasetName'],
              members: {
                DatasetName: {},
                IngestionJobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SensorStatisticsSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ComponentName: {},
                      SensorName: {},
                      DataExists: {
                        type: 'boolean'
                      },
                      MissingValues: {
                        shape: 'S4z'
                      },
                      InvalidValues: {
                        shape: 'S4z'
                      },
                      InvalidDateEntries: {
                        shape: 'S4z'
                      },
                      DuplicateTimestamps: {
                        shape: 'S4z'
                      },
                      CategoricalValues: {
                        type: 'structure',
                        required: ['Status'],
                        members: {
                          Status: {},
                          NumberOfCategory: {
                            type: 'integer'
                          }
                        }
                      },
                      MultipleOperatingModes: {
                        type: 'structure',
                        required: ['Status'],
                        members: {
                          Status: {}
                        }
                      },
                      LargeTimestampGaps: {
                        type: 'structure',
                        required: ['Status'],
                        members: {
                          Status: {},
                          NumberOfLargeTimestampGaps: {
                            type: 'integer'
                          },
                          MaxTimestampGapInDays: {
                            type: 'integer'
                          }
                        }
                      },
                      MonotonicValues: {
                        type: 'structure',
                        required: ['Status'],
                        members: {
                          Status: {},
                          Monotonicity: {}
                        }
                      },
                      DataStartTime: {
                        type: 'timestamp'
                      },
                      DataEndTime: {
                        type: 'timestamp'
                      }
                    }
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
                  shape: 'S7'
                }
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'ResourcePolicy', 'ClientToken'],
              members: {
                ResourceArn: {},
                ResourcePolicy: {},
                PolicyRevisionId: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                PolicyRevisionId: {}
              }
            }
          },
          StartDataIngestionJob: {
            input: {
              type: 'structure',
              required: ['DatasetName', 'IngestionInputConfiguration', 'RoleArn', 'ClientToken'],
              members: {
                DatasetName: {},
                IngestionInputConfiguration: {
                  shape: 'S25'
                },
                RoleArn: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                Status: {}
              }
            }
          },
          StartInferenceScheduler: {
            input: {
              type: 'structure',
              required: ['InferenceSchedulerName'],
              members: {
                InferenceSchedulerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelArn: {},
                ModelName: {},
                InferenceSchedulerName: {},
                InferenceSchedulerArn: {},
                Status: {}
              }
            }
          },
          StartRetrainingScheduler: {
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
                ModelName: {},
                ModelArn: {},
                Status: {}
              }
            }
          },
          StopInferenceScheduler: {
            input: {
              type: 'structure',
              required: ['InferenceSchedulerName'],
              members: {
                InferenceSchedulerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelArn: {},
                ModelName: {},
                InferenceSchedulerName: {},
                InferenceSchedulerArn: {},
                Status: {}
              }
            }
          },
          StopRetrainingScheduler: {
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
                ModelName: {},
                ModelArn: {},
                Status: {}
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
                  shape: 'S7'
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
          UpdateActiveModelVersion: {
            input: {
              type: 'structure',
              required: ['ModelName', 'ModelVersion'],
              members: {
                ModelName: {},
                ModelVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelName: {},
                ModelArn: {},
                CurrentActiveVersion: {
                  type: 'long'
                },
                PreviousActiveVersion: {
                  type: 'long'
                },
                CurrentActiveVersionArn: {},
                PreviousActiveVersionArn: {}
              }
            }
          },
          UpdateInferenceScheduler: {
            input: {
              type: 'structure',
              required: ['InferenceSchedulerName'],
              members: {
                InferenceSchedulerName: {},
                DataDelayOffsetInMinutes: {
                  type: 'long'
                },
                DataUploadFrequency: {},
                DataInputConfiguration: {
                  shape: 'Sj'
                },
                DataOutputConfiguration: {
                  shape: 'Sr'
                },
                RoleArn: {}
              }
            }
          },
          UpdateLabelGroup: {
            input: {
              type: 'structure',
              required: ['LabelGroupName'],
              members: {
                LabelGroupName: {},
                FaultCodes: {
                  shape: 'S18'
                }
              }
            }
          },
          UpdateModel: {
            input: {
              type: 'structure',
              required: ['ModelName'],
              members: {
                ModelName: {},
                LabelsInputConfiguration: {
                  shape: 'S1d'
                },
                RoleArn: {},
                ModelDiagnosticsOutputConfiguration: {
                  shape: 'S1i'
                }
              }
            }
          },
          UpdateRetrainingScheduler: {
            input: {
              type: 'structure',
              required: ['ModelName'],
              members: {
                ModelName: {},
                RetrainingStartDate: {
                  type: 'timestamp'
                },
                RetrainingFrequency: {},
                LookbackWindow: {},
                PromoteMode: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              InlineDataSchema: {
                jsonvalue: true
              }
            }
          },
          S7: {
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
          Sj: {
            type: 'structure',
            members: {
              S3InputConfiguration: {
                type: 'structure',
                required: ['Bucket'],
                members: {
                  Bucket: {},
                  Prefix: {}
                }
              },
              InputTimeZoneOffset: {},
              InferenceInputNameConfiguration: {
                type: 'structure',
                members: {
                  TimestampFormat: {},
                  ComponentTimestampDelimiter: {}
                }
              }
            }
          },
          Sr: {
            type: 'structure',
            required: ['S3OutputConfiguration'],
            members: {
              S3OutputConfiguration: {
                type: 'structure',
                required: ['Bucket'],
                members: {
                  Bucket: {},
                  Prefix: {}
                }
              },
              KmsKeyId: {}
            }
          },
          S18: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'structure',
            members: {
              S3InputConfiguration: {
                type: 'structure',
                required: ['Bucket'],
                members: {
                  Bucket: {},
                  Prefix: {}
                }
              },
              LabelGroupName: {}
            }
          },
          S1f: {
            type: 'structure',
            members: {
              TargetSamplingRate: {}
            }
          },
          S1i: {
            type: 'structure',
            required: ['S3OutputConfiguration'],
            members: {
              S3OutputConfiguration: {
                type: 'structure',
                required: ['Bucket'],
                members: {
                  Bucket: {},
                  Prefix: {}
                }
              },
              KmsKeyId: {}
            }
          },
          S25: {
            type: 'structure',
            required: ['S3InputConfiguration'],
            members: {
              S3InputConfiguration: {
                type: 'structure',
                required: ['Bucket'],
                members: {
                  Bucket: {},
                  Prefix: {},
                  KeyPattern: {}
                }
              }
            }
          },
          S2a: {
            type: 'structure',
            required: ['InsufficientSensorData', 'MissingSensorData', 'InvalidSensorData', 'UnsupportedTimestamps', 'DuplicateTimestamps'],
            members: {
              InsufficientSensorData: {
                type: 'structure',
                required: ['MissingCompleteSensorData', 'SensorsWithShortDateRange'],
                members: {
                  MissingCompleteSensorData: {
                    type: 'structure',
                    required: ['AffectedSensorCount'],
                    members: {
                      AffectedSensorCount: {
                        type: 'integer'
                      }
                    }
                  },
                  SensorsWithShortDateRange: {
                    type: 'structure',
                    required: ['AffectedSensorCount'],
                    members: {
                      AffectedSensorCount: {
                        type: 'integer'
                      }
                    }
                  }
                }
              },
              MissingSensorData: {
                type: 'structure',
                required: ['AffectedSensorCount', 'TotalNumberOfMissingValues'],
                members: {
                  AffectedSensorCount: {
                    type: 'integer'
                  },
                  TotalNumberOfMissingValues: {
                    type: 'integer'
                  }
                }
              },
              InvalidSensorData: {
                type: 'structure',
                required: ['AffectedSensorCount', 'TotalNumberOfInvalidValues'],
                members: {
                  AffectedSensorCount: {
                    type: 'integer'
                  },
                  TotalNumberOfInvalidValues: {
                    type: 'integer'
                  }
                }
              },
              UnsupportedTimestamps: {
                type: 'structure',
                required: ['TotalNumberOfUnsupportedTimestamps'],
                members: {
                  TotalNumberOfUnsupportedTimestamps: {
                    type: 'integer'
                  }
                }
              },
              DuplicateTimestamps: {
                type: 'structure',
                required: ['TotalNumberOfDuplicateTimestamps'],
                members: {
                  TotalNumberOfDuplicateTimestamps: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S2j: {
            type: 'structure',
            required: ['TotalNumberOfFiles', 'IngestedNumberOfFiles'],
            members: {
              TotalNumberOfFiles: {
                type: 'integer'
              },
              IngestedNumberOfFiles: {
                type: 'integer'
              },
              DiscardedFiles: {
                type: 'list',
                member: {
                  shape: 'S2l'
                }
              }
            }
          },
          S2l: {
            type: 'structure',
            required: ['Bucket', 'Key'],
            members: {
              Bucket: {},
              Key: {}
            }
          },
          S4z: {
            type: 'structure',
            required: ['Count', 'Percentage'],
            members: {
              Count: {
                type: 'integer'
              },
              Percentage: {
                type: 'float'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a60c12dad949bec234c4833a1418804a089d2e5e.js.map