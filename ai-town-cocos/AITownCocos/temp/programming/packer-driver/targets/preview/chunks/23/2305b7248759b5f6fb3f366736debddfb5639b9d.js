System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-12-12',
          endpointPrefix: 'machinelearning',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Machine Learning',
          serviceId: 'Machine Learning',
          signatureVersion: 'v4',
          targetPrefix: 'AmazonML_20141212',
          uid: 'machinelearning-2014-12-12'
        },
        operations: {
          AddTags: {
            input: {
              type: 'structure',
              required: ['Tags', 'ResourceId', 'ResourceType'],
              members: {
                Tags: {
                  shape: 'S2'
                },
                ResourceId: {},
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceId: {},
                ResourceType: {}
              }
            }
          },
          CreateBatchPrediction: {
            input: {
              type: 'structure',
              required: ['BatchPredictionId', 'MLModelId', 'BatchPredictionDataSourceId', 'OutputUri'],
              members: {
                BatchPredictionId: {},
                BatchPredictionName: {},
                MLModelId: {},
                BatchPredictionDataSourceId: {},
                OutputUri: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BatchPredictionId: {}
              }
            }
          },
          CreateDataSourceFromRDS: {
            input: {
              type: 'structure',
              required: ['DataSourceId', 'RDSData', 'RoleARN'],
              members: {
                DataSourceId: {},
                DataSourceName: {},
                RDSData: {
                  type: 'structure',
                  required: ['DatabaseInformation', 'SelectSqlQuery', 'DatabaseCredentials', 'S3StagingLocation', 'ResourceRole', 'ServiceRole', 'SubnetId', 'SecurityGroupIds'],
                  members: {
                    DatabaseInformation: {
                      shape: 'Sf'
                    },
                    SelectSqlQuery: {},
                    DatabaseCredentials: {
                      type: 'structure',
                      required: ['Username', 'Password'],
                      members: {
                        Username: {},
                        Password: {
                          type: 'string',
                          sensitive: true
                        }
                      }
                    },
                    S3StagingLocation: {},
                    DataRearrangement: {},
                    DataSchema: {},
                    DataSchemaUri: {},
                    ResourceRole: {},
                    ServiceRole: {},
                    SubnetId: {},
                    SecurityGroupIds: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                RoleARN: {},
                ComputeStatistics: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceId: {}
              }
            }
          },
          CreateDataSourceFromRedshift: {
            input: {
              type: 'structure',
              required: ['DataSourceId', 'DataSpec', 'RoleARN'],
              members: {
                DataSourceId: {},
                DataSourceName: {},
                DataSpec: {
                  type: 'structure',
                  required: ['DatabaseInformation', 'SelectSqlQuery', 'DatabaseCredentials', 'S3StagingLocation'],
                  members: {
                    DatabaseInformation: {
                      shape: 'Sy'
                    },
                    SelectSqlQuery: {},
                    DatabaseCredentials: {
                      type: 'structure',
                      required: ['Username', 'Password'],
                      members: {
                        Username: {},
                        Password: {
                          type: 'string',
                          sensitive: true
                        }
                      }
                    },
                    S3StagingLocation: {},
                    DataRearrangement: {},
                    DataSchema: {},
                    DataSchemaUri: {}
                  }
                },
                RoleARN: {},
                ComputeStatistics: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceId: {}
              }
            }
          },
          CreateDataSourceFromS3: {
            input: {
              type: 'structure',
              required: ['DataSourceId', 'DataSpec'],
              members: {
                DataSourceId: {},
                DataSourceName: {},
                DataSpec: {
                  type: 'structure',
                  required: ['DataLocationS3'],
                  members: {
                    DataLocationS3: {},
                    DataRearrangement: {},
                    DataSchema: {},
                    DataSchemaLocationS3: {}
                  }
                },
                ComputeStatistics: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceId: {}
              }
            }
          },
          CreateEvaluation: {
            input: {
              type: 'structure',
              required: ['EvaluationId', 'MLModelId', 'EvaluationDataSourceId'],
              members: {
                EvaluationId: {},
                EvaluationName: {},
                MLModelId: {},
                EvaluationDataSourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EvaluationId: {}
              }
            }
          },
          CreateMLModel: {
            input: {
              type: 'structure',
              required: ['MLModelId', 'MLModelType', 'TrainingDataSourceId'],
              members: {
                MLModelId: {},
                MLModelName: {},
                MLModelType: {},
                Parameters: {
                  shape: 'S1d'
                },
                TrainingDataSourceId: {},
                Recipe: {},
                RecipeUri: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MLModelId: {}
              }
            }
          },
          CreateRealtimeEndpoint: {
            input: {
              type: 'structure',
              required: ['MLModelId'],
              members: {
                MLModelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MLModelId: {},
                RealtimeEndpointInfo: {
                  shape: 'S1j'
                }
              }
            }
          },
          DeleteBatchPrediction: {
            input: {
              type: 'structure',
              required: ['BatchPredictionId'],
              members: {
                BatchPredictionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BatchPredictionId: {}
              }
            }
          },
          DeleteDataSource: {
            input: {
              type: 'structure',
              required: ['DataSourceId'],
              members: {
                DataSourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceId: {}
              }
            }
          },
          DeleteEvaluation: {
            input: {
              type: 'structure',
              required: ['EvaluationId'],
              members: {
                EvaluationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EvaluationId: {}
              }
            }
          },
          DeleteMLModel: {
            input: {
              type: 'structure',
              required: ['MLModelId'],
              members: {
                MLModelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MLModelId: {}
              }
            }
          },
          DeleteRealtimeEndpoint: {
            input: {
              type: 'structure',
              required: ['MLModelId'],
              members: {
                MLModelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MLModelId: {},
                RealtimeEndpointInfo: {
                  shape: 'S1j'
                }
              }
            }
          },
          DeleteTags: {
            input: {
              type: 'structure',
              required: ['TagKeys', 'ResourceId', 'ResourceType'],
              members: {
                TagKeys: {
                  type: 'list',
                  member: {}
                },
                ResourceId: {},
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceId: {},
                ResourceType: {}
              }
            }
          },
          DescribeBatchPredictions: {
            input: {
              type: 'structure',
              members: {
                FilterVariable: {},
                EQ: {},
                GT: {},
                LT: {},
                GE: {},
                LE: {},
                NE: {},
                Prefix: {},
                SortOrder: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BatchPredictionId: {},
                      MLModelId: {},
                      BatchPredictionDataSourceId: {},
                      InputDataLocationS3: {},
                      CreatedByIamUser: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      Name: {},
                      Status: {},
                      OutputUri: {},
                      Message: {},
                      ComputeTime: {
                        type: 'long'
                      },
                      FinishedAt: {
                        type: 'timestamp'
                      },
                      StartedAt: {
                        type: 'timestamp'
                      },
                      TotalRecordCount: {
                        type: 'long'
                      },
                      InvalidRecordCount: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeDataSources: {
            input: {
              type: 'structure',
              members: {
                FilterVariable: {},
                EQ: {},
                GT: {},
                LT: {},
                GE: {},
                LE: {},
                NE: {},
                Prefix: {},
                SortOrder: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DataSourceId: {},
                      DataLocationS3: {},
                      DataRearrangement: {},
                      CreatedByIamUser: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      DataSizeInBytes: {
                        type: 'long'
                      },
                      NumberOfFiles: {
                        type: 'long'
                      },
                      Name: {},
                      Status: {},
                      Message: {},
                      RedshiftMetadata: {
                        shape: 'S2i'
                      },
                      RDSMetadata: {
                        shape: 'S2j'
                      },
                      RoleARN: {},
                      ComputeStatistics: {
                        type: 'boolean'
                      },
                      ComputeTime: {
                        type: 'long'
                      },
                      FinishedAt: {
                        type: 'timestamp'
                      },
                      StartedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeEvaluations: {
            input: {
              type: 'structure',
              members: {
                FilterVariable: {},
                EQ: {},
                GT: {},
                LT: {},
                GE: {},
                LE: {},
                NE: {},
                Prefix: {},
                SortOrder: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EvaluationId: {},
                      MLModelId: {},
                      EvaluationDataSourceId: {},
                      InputDataLocationS3: {},
                      CreatedByIamUser: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      Name: {},
                      Status: {},
                      PerformanceMetrics: {
                        shape: 'S2q'
                      },
                      Message: {},
                      ComputeTime: {
                        type: 'long'
                      },
                      FinishedAt: {
                        type: 'timestamp'
                      },
                      StartedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMLModels: {
            input: {
              type: 'structure',
              members: {
                FilterVariable: {},
                EQ: {},
                GT: {},
                LT: {},
                GE: {},
                LE: {},
                NE: {},
                Prefix: {},
                SortOrder: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MLModelId: {},
                      TrainingDataSourceId: {},
                      CreatedByIamUser: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      Name: {},
                      Status: {},
                      SizeInBytes: {
                        type: 'long'
                      },
                      EndpointInfo: {
                        shape: 'S1j'
                      },
                      TrainingParameters: {
                        shape: 'S1d'
                      },
                      InputDataLocationS3: {},
                      Algorithm: {},
                      MLModelType: {},
                      ScoreThreshold: {
                        type: 'float'
                      },
                      ScoreThresholdLastUpdatedAt: {
                        type: 'timestamp'
                      },
                      Message: {},
                      ComputeTime: {
                        type: 'long'
                      },
                      FinishedAt: {
                        type: 'timestamp'
                      },
                      StartedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeTags: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'ResourceType'],
              members: {
                ResourceId: {},
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceId: {},
                ResourceType: {},
                Tags: {
                  shape: 'S2'
                }
              }
            }
          },
          GetBatchPrediction: {
            input: {
              type: 'structure',
              required: ['BatchPredictionId'],
              members: {
                BatchPredictionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BatchPredictionId: {},
                MLModelId: {},
                BatchPredictionDataSourceId: {},
                InputDataLocationS3: {},
                CreatedByIamUser: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Name: {},
                Status: {},
                OutputUri: {},
                LogUri: {},
                Message: {},
                ComputeTime: {
                  type: 'long'
                },
                FinishedAt: {
                  type: 'timestamp'
                },
                StartedAt: {
                  type: 'timestamp'
                },
                TotalRecordCount: {
                  type: 'long'
                },
                InvalidRecordCount: {
                  type: 'long'
                }
              }
            }
          },
          GetDataSource: {
            input: {
              type: 'structure',
              required: ['DataSourceId'],
              members: {
                DataSourceId: {},
                Verbose: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceId: {},
                DataLocationS3: {},
                DataRearrangement: {},
                CreatedByIamUser: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                DataSizeInBytes: {
                  type: 'long'
                },
                NumberOfFiles: {
                  type: 'long'
                },
                Name: {},
                Status: {},
                LogUri: {},
                Message: {},
                RedshiftMetadata: {
                  shape: 'S2i'
                },
                RDSMetadata: {
                  shape: 'S2j'
                },
                RoleARN: {},
                ComputeStatistics: {
                  type: 'boolean'
                },
                ComputeTime: {
                  type: 'long'
                },
                FinishedAt: {
                  type: 'timestamp'
                },
                StartedAt: {
                  type: 'timestamp'
                },
                DataSourceSchema: {}
              }
            }
          },
          GetEvaluation: {
            input: {
              type: 'structure',
              required: ['EvaluationId'],
              members: {
                EvaluationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EvaluationId: {},
                MLModelId: {},
                EvaluationDataSourceId: {},
                InputDataLocationS3: {},
                CreatedByIamUser: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Name: {},
                Status: {},
                PerformanceMetrics: {
                  shape: 'S2q'
                },
                LogUri: {},
                Message: {},
                ComputeTime: {
                  type: 'long'
                },
                FinishedAt: {
                  type: 'timestamp'
                },
                StartedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetMLModel: {
            input: {
              type: 'structure',
              required: ['MLModelId'],
              members: {
                MLModelId: {},
                Verbose: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MLModelId: {},
                TrainingDataSourceId: {},
                CreatedByIamUser: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Name: {},
                Status: {},
                SizeInBytes: {
                  type: 'long'
                },
                EndpointInfo: {
                  shape: 'S1j'
                },
                TrainingParameters: {
                  shape: 'S1d'
                },
                InputDataLocationS3: {},
                MLModelType: {},
                ScoreThreshold: {
                  type: 'float'
                },
                ScoreThresholdLastUpdatedAt: {
                  type: 'timestamp'
                },
                LogUri: {},
                Message: {},
                ComputeTime: {
                  type: 'long'
                },
                FinishedAt: {
                  type: 'timestamp'
                },
                StartedAt: {
                  type: 'timestamp'
                },
                Recipe: {},
                Schema: {}
              }
            }
          },
          Predict: {
            input: {
              type: 'structure',
              required: ['MLModelId', 'Record', 'PredictEndpoint'],
              members: {
                MLModelId: {},
                Record: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                PredictEndpoint: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Prediction: {
                  type: 'structure',
                  members: {
                    predictedLabel: {},
                    predictedValue: {
                      type: 'float'
                    },
                    predictedScores: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'float'
                      }
                    },
                    details: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            }
          },
          UpdateBatchPrediction: {
            input: {
              type: 'structure',
              required: ['BatchPredictionId', 'BatchPredictionName'],
              members: {
                BatchPredictionId: {},
                BatchPredictionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BatchPredictionId: {}
              }
            }
          },
          UpdateDataSource: {
            input: {
              type: 'structure',
              required: ['DataSourceId', 'DataSourceName'],
              members: {
                DataSourceId: {},
                DataSourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceId: {}
              }
            }
          },
          UpdateEvaluation: {
            input: {
              type: 'structure',
              required: ['EvaluationId', 'EvaluationName'],
              members: {
                EvaluationId: {},
                EvaluationName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EvaluationId: {}
              }
            }
          },
          UpdateMLModel: {
            input: {
              type: 'structure',
              required: ['MLModelId'],
              members: {
                MLModelId: {},
                MLModelName: {},
                ScoreThreshold: {
                  type: 'float'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MLModelId: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sf: {
            type: 'structure',
            required: ['InstanceIdentifier', 'DatabaseName'],
            members: {
              InstanceIdentifier: {},
              DatabaseName: {}
            }
          },
          Sy: {
            type: 'structure',
            required: ['DatabaseName', 'ClusterIdentifier'],
            members: {
              DatabaseName: {},
              ClusterIdentifier: {}
            }
          },
          S1d: {
            type: 'map',
            key: {},
            value: {}
          },
          S1j: {
            type: 'structure',
            members: {
              PeakRequestsPerSecond: {
                type: 'integer'
              },
              CreatedAt: {
                type: 'timestamp'
              },
              EndpointUrl: {},
              EndpointStatus: {}
            }
          },
          S2i: {
            type: 'structure',
            members: {
              RedshiftDatabase: {
                shape: 'Sy'
              },
              DatabaseUserName: {},
              SelectSqlQuery: {}
            }
          },
          S2j: {
            type: 'structure',
            members: {
              Database: {
                shape: 'Sf'
              },
              DatabaseUserName: {},
              SelectSqlQuery: {},
              ResourceRole: {},
              ServiceRole: {},
              DataPipelineId: {}
            }
          },
          S2q: {
            type: 'structure',
            members: {
              Properties: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2305b7248759b5f6fb3f366736debddfb5639b9d.js.map