System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-06-26',
          endpointPrefix: 'forecast',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Forecast Service',
          serviceId: 'forecast',
          signatureVersion: 'v4',
          signingName: 'forecast',
          targetPrefix: 'AmazonForecast',
          uid: 'forecast-2018-06-26'
        },
        operations: {
          CreateAutoPredictor: {
            input: {
              type: 'structure',
              required: ['PredictorName'],
              members: {
                PredictorName: {},
                ForecastHorizon: {
                  type: 'integer'
                },
                ForecastTypes: {
                  shape: 'S4'
                },
                ForecastDimensions: {
                  shape: 'S6'
                },
                ForecastFrequency: {},
                DataConfig: {
                  shape: 'S8'
                },
                EncryptionConfig: {
                  shape: 'Si'
                },
                ReferencePredictorArn: {},
                OptimizationMetric: {},
                ExplainPredictor: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sm'
                },
                MonitorConfig: {
                  type: 'structure',
                  required: ['MonitorName'],
                  members: {
                    MonitorName: {}
                  }
                },
                TimeAlignmentBoundary: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PredictorArn: {}
              }
            }
          },
          CreateDataset: {
            input: {
              type: 'structure',
              required: ['DatasetName', 'Domain', 'DatasetType', 'Schema'],
              members: {
                DatasetName: {},
                Domain: {},
                DatasetType: {},
                DataFrequency: {},
                Schema: {
                  shape: 'S10'
                },
                EncryptionConfig: {
                  shape: 'Si'
                },
                Tags: {
                  shape: 'Sm'
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
          CreateDatasetGroup: {
            input: {
              type: 'structure',
              required: ['DatasetGroupName', 'Domain'],
              members: {
                DatasetGroupName: {},
                Domain: {},
                DatasetArns: {
                  shape: 'S16'
                },
                Tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetGroupArn: {}
              }
            }
          },
          CreateDatasetImportJob: {
            input: {
              type: 'structure',
              required: ['DatasetImportJobName', 'DatasetArn', 'DataSource'],
              members: {
                DatasetImportJobName: {},
                DatasetArn: {},
                DataSource: {
                  shape: 'S19'
                },
                TimestampFormat: {},
                TimeZone: {},
                UseGeolocationForTimeZone: {
                  type: 'boolean'
                },
                GeolocationFormat: {},
                Tags: {
                  shape: 'Sm'
                },
                Format: {},
                ImportMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetImportJobArn: {}
              }
            }
          },
          CreateExplainability: {
            input: {
              type: 'structure',
              required: ['ExplainabilityName', 'ResourceArn', 'ExplainabilityConfig'],
              members: {
                ExplainabilityName: {},
                ResourceArn: {},
                ExplainabilityConfig: {
                  shape: 'S1k'
                },
                DataSource: {
                  shape: 'S19'
                },
                Schema: {
                  shape: 'S10'
                },
                EnableVisualization: {
                  type: 'boolean'
                },
                StartDateTime: {},
                EndDateTime: {},
                Tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ExplainabilityArn: {}
              }
            }
          },
          CreateExplainabilityExport: {
            input: {
              type: 'structure',
              required: ['ExplainabilityExportName', 'ExplainabilityArn', 'Destination'],
              members: {
                ExplainabilityExportName: {},
                ExplainabilityArn: {},
                Destination: {
                  shape: 'S1q'
                },
                Tags: {
                  shape: 'Sm'
                },
                Format: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExplainabilityExportArn: {}
              }
            }
          },
          CreateForecast: {
            input: {
              type: 'structure',
              required: ['ForecastName', 'PredictorArn'],
              members: {
                ForecastName: {},
                PredictorArn: {},
                ForecastTypes: {
                  shape: 'S4'
                },
                Tags: {
                  shape: 'Sm'
                },
                TimeSeriesSelector: {
                  shape: 'S1t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ForecastArn: {}
              }
            }
          },
          CreateForecastExportJob: {
            input: {
              type: 'structure',
              required: ['ForecastExportJobName', 'ForecastArn', 'Destination'],
              members: {
                ForecastExportJobName: {},
                ForecastArn: {},
                Destination: {
                  shape: 'S1q'
                },
                Tags: {
                  shape: 'Sm'
                },
                Format: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ForecastExportJobArn: {}
              }
            }
          },
          CreateMonitor: {
            input: {
              type: 'structure',
              required: ['MonitorName', 'ResourceArn'],
              members: {
                MonitorName: {},
                ResourceArn: {},
                Tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MonitorArn: {}
              }
            }
          },
          CreatePredictor: {
            input: {
              type: 'structure',
              required: ['PredictorName', 'ForecastHorizon', 'InputDataConfig', 'FeaturizationConfig'],
              members: {
                PredictorName: {},
                AlgorithmArn: {},
                ForecastHorizon: {
                  type: 'integer'
                },
                ForecastTypes: {
                  shape: 'S4'
                },
                PerformAutoML: {
                  type: 'boolean'
                },
                AutoMLOverrideStrategy: {},
                PerformHPO: {
                  type: 'boolean'
                },
                TrainingParameters: {
                  shape: 'S22'
                },
                EvaluationParameters: {
                  shape: 'S25'
                },
                HPOConfig: {
                  shape: 'S26'
                },
                InputDataConfig: {
                  shape: 'S2g'
                },
                FeaturizationConfig: {
                  shape: 'S2j'
                },
                EncryptionConfig: {
                  shape: 'Si'
                },
                Tags: {
                  shape: 'Sm'
                },
                OptimizationMetric: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PredictorArn: {}
              }
            }
          },
          CreatePredictorBacktestExportJob: {
            input: {
              type: 'structure',
              required: ['PredictorBacktestExportJobName', 'PredictorArn', 'Destination'],
              members: {
                PredictorBacktestExportJobName: {},
                PredictorArn: {},
                Destination: {
                  shape: 'S1q'
                },
                Tags: {
                  shape: 'Sm'
                },
                Format: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PredictorBacktestExportJobArn: {}
              }
            }
          },
          CreateWhatIfAnalysis: {
            input: {
              type: 'structure',
              required: ['WhatIfAnalysisName', 'ForecastArn'],
              members: {
                WhatIfAnalysisName: {},
                ForecastArn: {},
                TimeSeriesSelector: {
                  shape: 'S1t'
                },
                Tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfAnalysisArn: {}
              }
            }
          },
          CreateWhatIfForecast: {
            input: {
              type: 'structure',
              required: ['WhatIfForecastName', 'WhatIfAnalysisArn'],
              members: {
                WhatIfForecastName: {},
                WhatIfAnalysisArn: {},
                TimeSeriesTransformations: {
                  shape: 'S2w'
                },
                TimeSeriesReplacementsDataSource: {
                  shape: 'S34'
                },
                Tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfForecastArn: {}
              }
            }
          },
          CreateWhatIfForecastExport: {
            input: {
              type: 'structure',
              required: ['WhatIfForecastExportName', 'WhatIfForecastArns', 'Destination'],
              members: {
                WhatIfForecastExportName: {},
                WhatIfForecastArns: {
                  shape: 'S38'
                },
                Destination: {
                  shape: 'S1q'
                },
                Tags: {
                  shape: 'Sm'
                },
                Format: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfForecastExportArn: {}
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
            idempotent: true
          },
          DeleteDatasetGroup: {
            input: {
              type: 'structure',
              required: ['DatasetGroupArn'],
              members: {
                DatasetGroupArn: {}
              }
            },
            idempotent: true
          },
          DeleteDatasetImportJob: {
            input: {
              type: 'structure',
              required: ['DatasetImportJobArn'],
              members: {
                DatasetImportJobArn: {}
              }
            },
            idempotent: true
          },
          DeleteExplainability: {
            input: {
              type: 'structure',
              required: ['ExplainabilityArn'],
              members: {
                ExplainabilityArn: {}
              }
            },
            idempotent: true
          },
          DeleteExplainabilityExport: {
            input: {
              type: 'structure',
              required: ['ExplainabilityExportArn'],
              members: {
                ExplainabilityExportArn: {}
              }
            },
            idempotent: true
          },
          DeleteForecast: {
            input: {
              type: 'structure',
              required: ['ForecastArn'],
              members: {
                ForecastArn: {}
              }
            },
            idempotent: true
          },
          DeleteForecastExportJob: {
            input: {
              type: 'structure',
              required: ['ForecastExportJobArn'],
              members: {
                ForecastExportJobArn: {}
              }
            },
            idempotent: true
          },
          DeleteMonitor: {
            input: {
              type: 'structure',
              required: ['MonitorArn'],
              members: {
                MonitorArn: {}
              }
            },
            idempotent: true
          },
          DeletePredictor: {
            input: {
              type: 'structure',
              required: ['PredictorArn'],
              members: {
                PredictorArn: {}
              }
            },
            idempotent: true
          },
          DeletePredictorBacktestExportJob: {
            input: {
              type: 'structure',
              required: ['PredictorBacktestExportJobArn'],
              members: {
                PredictorBacktestExportJobArn: {}
              }
            },
            idempotent: true
          },
          DeleteResourceTree: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            idempotent: true
          },
          DeleteWhatIfAnalysis: {
            input: {
              type: 'structure',
              required: ['WhatIfAnalysisArn'],
              members: {
                WhatIfAnalysisArn: {}
              }
            },
            idempotent: true
          },
          DeleteWhatIfForecast: {
            input: {
              type: 'structure',
              required: ['WhatIfForecastArn'],
              members: {
                WhatIfForecastArn: {}
              }
            },
            idempotent: true
          },
          DeleteWhatIfForecastExport: {
            input: {
              type: 'structure',
              required: ['WhatIfForecastExportArn'],
              members: {
                WhatIfForecastExportArn: {}
              }
            },
            idempotent: true
          },
          DescribeAutoPredictor: {
            input: {
              type: 'structure',
              required: ['PredictorArn'],
              members: {
                PredictorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PredictorArn: {},
                PredictorName: {},
                ForecastHorizon: {
                  type: 'integer'
                },
                ForecastTypes: {
                  shape: 'S4'
                },
                ForecastFrequency: {},
                ForecastDimensions: {
                  shape: 'S6'
                },
                DatasetImportJobArns: {
                  shape: 'S16'
                },
                DataConfig: {
                  shape: 'S8'
                },
                EncryptionConfig: {
                  shape: 'Si'
                },
                ReferencePredictorSummary: {
                  shape: 'S3q'
                },
                EstimatedTimeRemainingInMinutes: {
                  type: 'long'
                },
                Status: {},
                Message: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                OptimizationMetric: {},
                ExplainabilityInfo: {
                  type: 'structure',
                  members: {
                    ExplainabilityArn: {},
                    Status: {}
                  }
                },
                MonitorInfo: {
                  type: 'structure',
                  members: {
                    MonitorArn: {},
                    Status: {}
                  }
                },
                TimeAlignmentBoundary: {
                  shape: 'Sr'
                }
              }
            },
            idempotent: true
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
                DatasetArn: {},
                DatasetName: {},
                Domain: {},
                DatasetType: {},
                DataFrequency: {},
                Schema: {
                  shape: 'S10'
                },
                EncryptionConfig: {
                  shape: 'Si'
                },
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          DescribeDatasetGroup: {
            input: {
              type: 'structure',
              required: ['DatasetGroupArn'],
              members: {
                DatasetGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetGroupName: {},
                DatasetGroupArn: {},
                DatasetArns: {
                  shape: 'S16'
                },
                Domain: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          DescribeDatasetImportJob: {
            input: {
              type: 'structure',
              required: ['DatasetImportJobArn'],
              members: {
                DatasetImportJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetImportJobName: {},
                DatasetImportJobArn: {},
                DatasetArn: {},
                TimestampFormat: {},
                TimeZone: {},
                UseGeolocationForTimeZone: {
                  type: 'boolean'
                },
                GeolocationFormat: {},
                DataSource: {
                  shape: 'S19'
                },
                EstimatedTimeRemainingInMinutes: {
                  type: 'long'
                },
                FieldStatistics: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      Count: {
                        type: 'integer'
                      },
                      CountDistinct: {
                        type: 'integer'
                      },
                      CountNull: {
                        type: 'integer'
                      },
                      CountNan: {
                        type: 'integer'
                      },
                      Min: {},
                      Max: {},
                      Avg: {
                        type: 'double'
                      },
                      Stddev: {
                        type: 'double'
                      },
                      CountLong: {
                        type: 'long'
                      },
                      CountDistinctLong: {
                        type: 'long'
                      },
                      CountNullLong: {
                        type: 'long'
                      },
                      CountNanLong: {
                        type: 'long'
                      }
                    }
                  }
                },
                DataSize: {
                  type: 'double'
                },
                Status: {},
                Message: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                Format: {},
                ImportMode: {}
              }
            },
            idempotent: true
          },
          DescribeExplainability: {
            input: {
              type: 'structure',
              required: ['ExplainabilityArn'],
              members: {
                ExplainabilityArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExplainabilityArn: {},
                ExplainabilityName: {},
                ResourceArn: {},
                ExplainabilityConfig: {
                  shape: 'S1k'
                },
                EnableVisualization: {
                  type: 'boolean'
                },
                DataSource: {
                  shape: 'S19'
                },
                Schema: {
                  shape: 'S10'
                },
                StartDateTime: {},
                EndDateTime: {},
                EstimatedTimeRemainingInMinutes: {
                  type: 'long'
                },
                Message: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          DescribeExplainabilityExport: {
            input: {
              type: 'structure',
              required: ['ExplainabilityExportArn'],
              members: {
                ExplainabilityExportArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExplainabilityExportArn: {},
                ExplainabilityExportName: {},
                ExplainabilityArn: {},
                Destination: {
                  shape: 'S1q'
                },
                Message: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                Format: {}
              }
            },
            idempotent: true
          },
          DescribeForecast: {
            input: {
              type: 'structure',
              required: ['ForecastArn'],
              members: {
                ForecastArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ForecastArn: {},
                ForecastName: {},
                ForecastTypes: {
                  shape: 'S4'
                },
                PredictorArn: {},
                DatasetGroupArn: {},
                EstimatedTimeRemainingInMinutes: {
                  type: 'long'
                },
                Status: {},
                Message: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                TimeSeriesSelector: {
                  shape: 'S1t'
                }
              }
            },
            idempotent: true
          },
          DescribeForecastExportJob: {
            input: {
              type: 'structure',
              required: ['ForecastExportJobArn'],
              members: {
                ForecastExportJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ForecastExportJobArn: {},
                ForecastExportJobName: {},
                ForecastArn: {},
                Destination: {
                  shape: 'S1q'
                },
                Message: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                Format: {}
              }
            },
            idempotent: true
          },
          DescribeMonitor: {
            input: {
              type: 'structure',
              required: ['MonitorArn'],
              members: {
                MonitorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MonitorName: {},
                MonitorArn: {},
                ResourceArn: {},
                Status: {},
                LastEvaluationTime: {
                  type: 'timestamp'
                },
                LastEvaluationState: {},
                Baseline: {
                  type: 'structure',
                  members: {
                    PredictorBaseline: {
                      type: 'structure',
                      members: {
                        BaselineMetrics: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              Name: {},
                              Value: {
                                type: 'double'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Message: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                EstimatedEvaluationTimeRemainingInMinutes: {
                  type: 'long'
                }
              }
            },
            idempotent: true
          },
          DescribePredictor: {
            input: {
              type: 'structure',
              required: ['PredictorArn'],
              members: {
                PredictorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PredictorArn: {},
                PredictorName: {},
                AlgorithmArn: {},
                AutoMLAlgorithmArns: {
                  shape: 'S16'
                },
                ForecastHorizon: {
                  type: 'integer'
                },
                ForecastTypes: {
                  shape: 'S4'
                },
                PerformAutoML: {
                  type: 'boolean'
                },
                AutoMLOverrideStrategy: {},
                PerformHPO: {
                  type: 'boolean'
                },
                TrainingParameters: {
                  shape: 'S22'
                },
                EvaluationParameters: {
                  shape: 'S25'
                },
                HPOConfig: {
                  shape: 'S26'
                },
                InputDataConfig: {
                  shape: 'S2g'
                },
                FeaturizationConfig: {
                  shape: 'S2j'
                },
                EncryptionConfig: {
                  shape: 'Si'
                },
                PredictorExecutionDetails: {
                  type: 'structure',
                  members: {
                    PredictorExecutions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          AlgorithmArn: {},
                          TestWindows: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                TestWindowStart: {
                                  type: 'timestamp'
                                },
                                TestWindowEnd: {
                                  type: 'timestamp'
                                },
                                Status: {},
                                Message: {}
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                EstimatedTimeRemainingInMinutes: {
                  type: 'long'
                },
                IsAutoPredictor: {
                  type: 'boolean'
                },
                DatasetImportJobArns: {
                  shape: 'S16'
                },
                Status: {},
                Message: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                OptimizationMetric: {}
              }
            },
            idempotent: true
          },
          DescribePredictorBacktestExportJob: {
            input: {
              type: 'structure',
              required: ['PredictorBacktestExportJobArn'],
              members: {
                PredictorBacktestExportJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PredictorBacktestExportJobArn: {},
                PredictorBacktestExportJobName: {},
                PredictorArn: {},
                Destination: {
                  shape: 'S1q'
                },
                Message: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                Format: {}
              }
            },
            idempotent: true
          },
          DescribeWhatIfAnalysis: {
            input: {
              type: 'structure',
              required: ['WhatIfAnalysisArn'],
              members: {
                WhatIfAnalysisArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfAnalysisName: {},
                WhatIfAnalysisArn: {},
                ForecastArn: {},
                EstimatedTimeRemainingInMinutes: {
                  type: 'long'
                },
                Status: {},
                Message: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                TimeSeriesSelector: {
                  shape: 'S1t'
                }
              }
            },
            idempotent: true
          },
          DescribeWhatIfForecast: {
            input: {
              type: 'structure',
              required: ['WhatIfForecastArn'],
              members: {
                WhatIfForecastArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfForecastName: {},
                WhatIfForecastArn: {},
                WhatIfAnalysisArn: {},
                EstimatedTimeRemainingInMinutes: {
                  type: 'long'
                },
                Status: {},
                Message: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                TimeSeriesTransformations: {
                  shape: 'S2w'
                },
                TimeSeriesReplacementsDataSource: {
                  shape: 'S34'
                },
                ForecastTypes: {
                  shape: 'S4'
                }
              }
            },
            idempotent: true
          },
          DescribeWhatIfForecastExport: {
            input: {
              type: 'structure',
              required: ['WhatIfForecastExportArn'],
              members: {
                WhatIfForecastExportArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfForecastExportArn: {},
                WhatIfForecastExportName: {},
                WhatIfForecastArns: {
                  type: 'list',
                  member: {}
                },
                Destination: {
                  shape: 'S1q'
                },
                Message: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                EstimatedTimeRemainingInMinutes: {
                  type: 'long'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                Format: {}
              }
            },
            idempotent: true
          },
          GetAccuracyMetrics: {
            input: {
              type: 'structure',
              required: ['PredictorArn'],
              members: {
                PredictorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PredictorEvaluationResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AlgorithmArn: {},
                      TestWindows: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            TestWindowStart: {
                              type: 'timestamp'
                            },
                            TestWindowEnd: {
                              type: 'timestamp'
                            },
                            ItemCount: {
                              type: 'integer'
                            },
                            EvaluationType: {},
                            Metrics: {
                              type: 'structure',
                              members: {
                                RMSE: {
                                  deprecated: true,
                                  deprecatedMessage: 'This property is deprecated, please refer to ErrorMetrics for both RMSE and WAPE',
                                  type: 'double'
                                },
                                WeightedQuantileLosses: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Quantile: {
                                        type: 'double'
                                      },
                                      LossValue: {
                                        type: 'double'
                                      }
                                    }
                                  }
                                },
                                ErrorMetrics: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      ForecastType: {},
                                      WAPE: {
                                        type: 'double'
                                      },
                                      RMSE: {
                                        type: 'double'
                                      },
                                      MASE: {
                                        type: 'double'
                                      },
                                      MAPE: {
                                        type: 'double'
                                      }
                                    }
                                  }
                                },
                                AverageWeightedQuantileLoss: {
                                  type: 'double'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                IsAutoPredictor: {
                  type: 'boolean'
                },
                AutoMLOverrideStrategy: {},
                OptimizationMetric: {}
              }
            },
            idempotent: true
          },
          ListDatasetGroups: {
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
                DatasetGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DatasetGroupArn: {},
                      DatasetGroupName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListDatasetImportJobs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetImportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DatasetImportJobArn: {},
                      DatasetImportJobName: {},
                      DataSource: {
                        shape: 'S19'
                      },
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      },
                      ImportMode: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListDatasets: {
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
                Datasets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DatasetArn: {},
                      DatasetName: {},
                      DatasetType: {},
                      Domain: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListExplainabilities: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Explainabilities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ExplainabilityArn: {},
                      ExplainabilityName: {},
                      ResourceArn: {},
                      ExplainabilityConfig: {
                        shape: 'S1k'
                      },
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListExplainabilityExports: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ExplainabilityExports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ExplainabilityExportArn: {},
                      ExplainabilityExportName: {},
                      Destination: {
                        shape: 'S1q'
                      },
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListForecastExportJobs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ForecastExportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ForecastExportJobArn: {},
                      ForecastExportJobName: {},
                      Destination: {
                        shape: 'S1q'
                      },
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListForecasts: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Forecasts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ForecastArn: {},
                      ForecastName: {},
                      PredictorArn: {},
                      CreatedUsingAutoPredictor: {
                        type: 'boolean'
                      },
                      DatasetGroupArn: {},
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListMonitorEvaluations: {
            input: {
              type: 'structure',
              required: ['MonitorArn'],
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                MonitorArn: {},
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                PredictorMonitorEvaluations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceArn: {},
                      MonitorArn: {},
                      EvaluationTime: {
                        type: 'timestamp'
                      },
                      EvaluationState: {},
                      WindowStartDatetime: {
                        type: 'timestamp'
                      },
                      WindowEndDatetime: {
                        type: 'timestamp'
                      },
                      PredictorEvent: {
                        type: 'structure',
                        members: {
                          Detail: {},
                          Datetime: {
                            type: 'timestamp'
                          }
                        }
                      },
                      MonitorDataSource: {
                        type: 'structure',
                        members: {
                          DatasetImportJobArn: {},
                          ForecastArn: {},
                          PredictorArn: {}
                        }
                      },
                      MetricResults: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            MetricName: {},
                            MetricValue: {
                              type: 'double'
                            }
                          }
                        }
                      },
                      NumItemsEvaluated: {
                        type: 'long'
                      },
                      Message: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ListMonitors: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Monitors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MonitorArn: {},
                      MonitorName: {},
                      ResourceArn: {},
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListPredictorBacktestExportJobs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PredictorBacktestExportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PredictorBacktestExportJobArn: {},
                      PredictorBacktestExportJobName: {},
                      Destination: {
                        shape: 'S1q'
                      },
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListPredictors: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Predictors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PredictorArn: {},
                      PredictorName: {},
                      DatasetGroupArn: {},
                      IsAutoPredictor: {
                        type: 'boolean'
                      },
                      ReferencePredictorSummary: {
                        shape: 'S3q'
                      },
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
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
                  shape: 'Sm'
                }
              }
            }
          },
          ListWhatIfAnalyses: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfAnalyses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WhatIfAnalysisArn: {},
                      WhatIfAnalysisName: {},
                      ForecastArn: {},
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListWhatIfForecastExports: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfForecastExports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WhatIfForecastExportArn: {},
                      WhatIfForecastArns: {
                        shape: 'S38'
                      },
                      WhatIfForecastExportName: {},
                      Destination: {
                        shape: 'S1q'
                      },
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListWhatIfForecasts: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WhatIfForecasts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WhatIfForecastArn: {},
                      WhatIfForecastName: {},
                      WhatIfAnalysisArn: {},
                      Status: {},
                      Message: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ResumeResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            idempotent: true
          },
          StopResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            idempotent: true
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sm'
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
                  member: {
                    shape: 'So'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDatasetGroup: {
            input: {
              type: 'structure',
              required: ['DatasetGroupArn', 'DatasetArns'],
              members: {
                DatasetGroupArn: {},
                DatasetArns: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'list',
            member: {}
          },
          S8: {
            type: 'structure',
            required: ['DatasetGroupArn'],
            members: {
              DatasetGroupArn: {},
              AttributeConfigs: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AttributeName', 'Transformations'],
                  members: {
                    AttributeName: {},
                    Transformations: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              },
              AdditionalDatasets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    Configuration: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'Sh'
                      }
                    }
                  }
                }
              }
            }
          },
          Sh: {
            type: 'list',
            member: {}
          },
          Si: {
            type: 'structure',
            required: ['RoleArn', 'KMSKeyArn'],
            members: {
              RoleArn: {},
              KMSKeyArn: {}
            }
          },
          Sm: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'So'
                },
                Value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          So: {
            type: 'string',
            sensitive: true
          },
          Sr: {
            type: 'structure',
            members: {
              Month: {},
              DayOfMonth: {
                type: 'integer'
              },
              DayOfWeek: {},
              Hour: {
                type: 'integer'
              }
            }
          },
          S10: {
            type: 'structure',
            members: {
              Attributes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    AttributeName: {},
                    AttributeType: {}
                  }
                }
              }
            }
          },
          S16: {
            type: 'list',
            member: {}
          },
          S19: {
            type: 'structure',
            required: ['S3Config'],
            members: {
              S3Config: {
                shape: 'S1a'
              }
            }
          },
          S1a: {
            type: 'structure',
            required: ['Path', 'RoleArn'],
            members: {
              Path: {},
              RoleArn: {},
              KMSKeyArn: {}
            }
          },
          S1k: {
            type: 'structure',
            required: ['TimeSeriesGranularity', 'TimePointGranularity'],
            members: {
              TimeSeriesGranularity: {},
              TimePointGranularity: {}
            }
          },
          S1q: {
            type: 'structure',
            required: ['S3Config'],
            members: {
              S3Config: {
                shape: 'S1a'
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              TimeSeriesIdentifiers: {
                type: 'structure',
                members: {
                  DataSource: {
                    shape: 'S19'
                  },
                  Schema: {
                    shape: 'S10'
                  },
                  Format: {}
                }
              }
            }
          },
          S22: {
            type: 'map',
            key: {},
            value: {}
          },
          S25: {
            type: 'structure',
            members: {
              NumberOfBacktestWindows: {
                type: 'integer'
              },
              BackTestWindowOffset: {
                type: 'integer'
              }
            }
          },
          S26: {
            type: 'structure',
            members: {
              ParameterRanges: {
                type: 'structure',
                members: {
                  CategoricalParameterRanges: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Name', 'Values'],
                      members: {
                        Name: {},
                        Values: {
                          shape: 'Sh'
                        }
                      }
                    }
                  },
                  ContinuousParameterRanges: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Name', 'MaxValue', 'MinValue'],
                      members: {
                        Name: {},
                        MaxValue: {
                          type: 'double'
                        },
                        MinValue: {
                          type: 'double'
                        },
                        ScalingType: {}
                      }
                    }
                  },
                  IntegerParameterRanges: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Name', 'MaxValue', 'MinValue'],
                      members: {
                        Name: {},
                        MaxValue: {
                          type: 'integer'
                        },
                        MinValue: {
                          type: 'integer'
                        },
                        ScalingType: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S2g: {
            type: 'structure',
            required: ['DatasetGroupArn'],
            members: {
              DatasetGroupArn: {},
              SupplementaryFeatures: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Value'],
                  members: {
                    Name: {},
                    Value: {}
                  }
                }
              }
            }
          },
          S2j: {
            type: 'structure',
            required: ['ForecastFrequency'],
            members: {
              ForecastFrequency: {},
              ForecastDimensions: {
                shape: 'S6'
              },
              Featurizations: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AttributeName'],
                  members: {
                    AttributeName: {},
                    FeaturizationPipeline: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['FeaturizationMethodName'],
                        members: {
                          FeaturizationMethodName: {},
                          FeaturizationMethodParameters: {
                            type: 'map',
                            key: {},
                            value: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2w: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Action: {
                  type: 'structure',
                  required: ['AttributeName', 'Operation', 'Value'],
                  members: {
                    AttributeName: {},
                    Operation: {},
                    Value: {
                      type: 'double'
                    }
                  }
                },
                TimeSeriesConditions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AttributeName', 'AttributeValue', 'Condition'],
                    members: {
                      AttributeName: {},
                      AttributeValue: {},
                      Condition: {}
                    }
                  }
                }
              }
            }
          },
          S34: {
            type: 'structure',
            required: ['S3Config', 'Schema'],
            members: {
              S3Config: {
                shape: 'S1a'
              },
              Schema: {
                shape: 'S10'
              },
              Format: {},
              TimestampFormat: {}
            }
          },
          S38: {
            type: 'list',
            member: {}
          },
          S3q: {
            type: 'structure',
            members: {
              Arn: {},
              State: {}
            }
          },
          S5m: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value', 'Condition'],
              members: {
                Key: {},
                Value: {},
                Condition: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=aaea0484dd0472f9c86363eb32c759d3ab25a005.js.map