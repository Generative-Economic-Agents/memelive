System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-22',
          endpointPrefix: 'personalize',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'Amazon Personalize',
          serviceId: 'Personalize',
          signatureVersion: 'v4',
          signingName: 'personalize',
          targetPrefix: 'AmazonPersonalize',
          uid: 'personalize-2018-05-22'
        },
        operations: {
          CreateBatchInferenceJob: {
            input: {
              type: 'structure',
              required: ['jobName', 'solutionVersionArn', 'jobInput', 'jobOutput', 'roleArn'],
              members: {
                jobName: {},
                solutionVersionArn: {},
                filterArn: {},
                numResults: {
                  type: 'integer'
                },
                jobInput: {
                  shape: 'S5'
                },
                jobOutput: {
                  shape: 'S9'
                },
                roleArn: {},
                batchInferenceJobConfig: {
                  shape: 'Sb'
                },
                tags: {
                  shape: 'Sf'
                },
                batchInferenceJobMode: {},
                themeGenerationConfig: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                batchInferenceJobArn: {}
              }
            }
          },
          CreateBatchSegmentJob: {
            input: {
              type: 'structure',
              required: ['jobName', 'solutionVersionArn', 'jobInput', 'jobOutput', 'roleArn'],
              members: {
                jobName: {},
                solutionVersionArn: {},
                filterArn: {},
                numResults: {
                  type: 'integer'
                },
                jobInput: {
                  shape: 'Sp'
                },
                jobOutput: {
                  shape: 'Sq'
                },
                roleArn: {},
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                batchSegmentJobArn: {}
              }
            }
          },
          CreateCampaign: {
            input: {
              type: 'structure',
              required: ['name', 'solutionVersionArn'],
              members: {
                name: {},
                solutionVersionArn: {},
                minProvisionedTPS: {
                  type: 'integer'
                },
                campaignConfig: {
                  shape: 'Su'
                },
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                campaignArn: {}
              }
            },
            idempotent: true
          },
          CreateDataDeletionJob: {
            input: {
              type: 'structure',
              required: ['jobName', 'datasetGroupArn', 'dataSource', 'roleArn'],
              members: {
                jobName: {},
                datasetGroupArn: {},
                dataSource: {
                  shape: 'Sy'
                },
                roleArn: {},
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataDeletionJobArn: {}
              }
            }
          },
          CreateDataset: {
            input: {
              type: 'structure',
              required: ['name', 'schemaArn', 'datasetGroupArn', 'datasetType'],
              members: {
                name: {},
                schemaArn: {},
                datasetGroupArn: {},
                datasetType: {},
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetArn: {}
              }
            },
            idempotent: true
          },
          CreateDatasetExportJob: {
            input: {
              type: 'structure',
              required: ['jobName', 'datasetArn', 'roleArn', 'jobOutput'],
              members: {
                jobName: {},
                datasetArn: {},
                ingestionMode: {},
                roleArn: {},
                jobOutput: {
                  shape: 'S15'
                },
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetExportJobArn: {}
              }
            },
            idempotent: true
          },
          CreateDatasetGroup: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                roleArn: {},
                kmsKeyArn: {},
                domain: {},
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetGroupArn: {},
                domain: {}
              }
            }
          },
          CreateDatasetImportJob: {
            input: {
              type: 'structure',
              required: ['jobName', 'datasetArn', 'dataSource', 'roleArn'],
              members: {
                jobName: {},
                datasetArn: {},
                dataSource: {
                  shape: 'Sy'
                },
                roleArn: {},
                tags: {
                  shape: 'Sf'
                },
                importMode: {},
                publishAttributionMetricsToS3: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetImportJobArn: {}
              }
            }
          },
          CreateEventTracker: {
            input: {
              type: 'structure',
              required: ['name', 'datasetGroupArn'],
              members: {
                name: {},
                datasetGroupArn: {},
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eventTrackerArn: {},
                trackingId: {}
              }
            },
            idempotent: true
          },
          CreateFilter: {
            input: {
              type: 'structure',
              required: ['name', 'datasetGroupArn', 'filterExpression'],
              members: {
                name: {},
                datasetGroupArn: {},
                filterExpression: {
                  shape: 'S1h'
                },
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                filterArn: {}
              }
            }
          },
          CreateMetricAttribution: {
            input: {
              type: 'structure',
              required: ['name', 'datasetGroupArn', 'metrics', 'metricsOutputConfig'],
              members: {
                name: {},
                datasetGroupArn: {},
                metrics: {
                  shape: 'S1k'
                },
                metricsOutputConfig: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metricAttributionArn: {}
              }
            }
          },
          CreateRecommender: {
            input: {
              type: 'structure',
              required: ['name', 'datasetGroupArn', 'recipeArn'],
              members: {
                name: {},
                datasetGroupArn: {},
                recipeArn: {},
                recommenderConfig: {
                  shape: 'S1s'
                },
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recommenderArn: {}
              }
            },
            idempotent: true
          },
          CreateSchema: {
            input: {
              type: 'structure',
              required: ['name', 'schema'],
              members: {
                name: {},
                schema: {},
                domain: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                schemaArn: {}
              }
            },
            idempotent: true
          },
          CreateSolution: {
            input: {
              type: 'structure',
              required: ['name', 'datasetGroupArn'],
              members: {
                name: {},
                performHPO: {
                  type: 'boolean'
                },
                performAutoML: {
                  type: 'boolean'
                },
                performAutoTraining: {
                  type: 'boolean'
                },
                recipeArn: {},
                datasetGroupArn: {},
                eventType: {},
                solutionConfig: {
                  shape: 'S23'
                },
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                solutionArn: {}
              }
            }
          },
          CreateSolutionVersion: {
            input: {
              type: 'structure',
              required: ['solutionArn'],
              members: {
                name: {},
                solutionArn: {},
                trainingMode: {},
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                solutionVersionArn: {}
              }
            }
          },
          DeleteCampaign: {
            input: {
              type: 'structure',
              required: ['campaignArn'],
              members: {
                campaignArn: {}
              }
            },
            idempotent: true
          },
          DeleteDataset: {
            input: {
              type: 'structure',
              required: ['datasetArn'],
              members: {
                datasetArn: {}
              }
            },
            idempotent: true
          },
          DeleteDatasetGroup: {
            input: {
              type: 'structure',
              required: ['datasetGroupArn'],
              members: {
                datasetGroupArn: {}
              }
            },
            idempotent: true
          },
          DeleteEventTracker: {
            input: {
              type: 'structure',
              required: ['eventTrackerArn'],
              members: {
                eventTrackerArn: {}
              }
            },
            idempotent: true
          },
          DeleteFilter: {
            input: {
              type: 'structure',
              required: ['filterArn'],
              members: {
                filterArn: {}
              }
            }
          },
          DeleteMetricAttribution: {
            input: {
              type: 'structure',
              required: ['metricAttributionArn'],
              members: {
                metricAttributionArn: {}
              }
            },
            idempotent: true
          },
          DeleteRecommender: {
            input: {
              type: 'structure',
              required: ['recommenderArn'],
              members: {
                recommenderArn: {}
              }
            },
            idempotent: true
          },
          DeleteSchema: {
            input: {
              type: 'structure',
              required: ['schemaArn'],
              members: {
                schemaArn: {}
              }
            },
            idempotent: true
          },
          DeleteSolution: {
            input: {
              type: 'structure',
              required: ['solutionArn'],
              members: {
                solutionArn: {}
              }
            },
            idempotent: true
          },
          DescribeAlgorithm: {
            input: {
              type: 'structure',
              required: ['algorithmArn'],
              members: {
                algorithmArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                algorithm: {
                  type: 'structure',
                  members: {
                    name: {},
                    algorithmArn: {},
                    algorithmImage: {
                      type: 'structure',
                      required: ['dockerURI'],
                      members: {
                        name: {},
                        dockerURI: {}
                      }
                    },
                    defaultHyperParameters: {
                      shape: 'Sc'
                    },
                    defaultHyperParameterRanges: {
                      type: 'structure',
                      members: {
                        integerHyperParameterRanges: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              name: {},
                              minValue: {
                                type: 'integer'
                              },
                              maxValue: {
                                type: 'integer'
                              },
                              isTunable: {
                                type: 'boolean'
                              }
                            }
                          }
                        },
                        continuousHyperParameterRanges: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              name: {},
                              minValue: {
                                type: 'double'
                              },
                              maxValue: {
                                type: 'double'
                              },
                              isTunable: {
                                type: 'boolean'
                              }
                            }
                          }
                        },
                        categoricalHyperParameterRanges: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              name: {},
                              values: {
                                shape: 'S2m'
                              },
                              isTunable: {
                                type: 'boolean'
                              }
                            }
                          }
                        }
                      }
                    },
                    defaultResourceConfig: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    trainingInputMode: {},
                    roleArn: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeBatchInferenceJob: {
            input: {
              type: 'structure',
              required: ['batchInferenceJobArn'],
              members: {
                batchInferenceJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                batchInferenceJob: {
                  type: 'structure',
                  members: {
                    jobName: {},
                    batchInferenceJobArn: {},
                    filterArn: {},
                    failureReason: {},
                    solutionVersionArn: {},
                    numResults: {
                      type: 'integer'
                    },
                    jobInput: {
                      shape: 'S5'
                    },
                    jobOutput: {
                      shape: 'S9'
                    },
                    batchInferenceJobConfig: {
                      shape: 'Sb'
                    },
                    roleArn: {},
                    batchInferenceJobMode: {},
                    themeGenerationConfig: {
                      shape: 'Sk'
                    },
                    status: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeBatchSegmentJob: {
            input: {
              type: 'structure',
              required: ['batchSegmentJobArn'],
              members: {
                batchSegmentJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                batchSegmentJob: {
                  type: 'structure',
                  members: {
                    jobName: {},
                    batchSegmentJobArn: {},
                    filterArn: {},
                    failureReason: {},
                    solutionVersionArn: {},
                    numResults: {
                      type: 'integer'
                    },
                    jobInput: {
                      shape: 'Sp'
                    },
                    jobOutput: {
                      shape: 'Sq'
                    },
                    roleArn: {},
                    status: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeCampaign: {
            input: {
              type: 'structure',
              required: ['campaignArn'],
              members: {
                campaignArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                campaign: {
                  type: 'structure',
                  members: {
                    name: {},
                    campaignArn: {},
                    solutionVersionArn: {},
                    minProvisionedTPS: {
                      type: 'integer'
                    },
                    campaignConfig: {
                      shape: 'Su'
                    },
                    status: {},
                    failureReason: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    latestCampaignUpdate: {
                      type: 'structure',
                      members: {
                        solutionVersionArn: {},
                        minProvisionedTPS: {
                          type: 'integer'
                        },
                        campaignConfig: {
                          shape: 'Su'
                        },
                        status: {},
                        failureReason: {},
                        creationDateTime: {
                          type: 'timestamp'
                        },
                        lastUpdatedDateTime: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeDataDeletionJob: {
            input: {
              type: 'structure',
              required: ['dataDeletionJobArn'],
              members: {
                dataDeletionJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                dataDeletionJob: {
                  type: 'structure',
                  members: {
                    jobName: {},
                    dataDeletionJobArn: {},
                    datasetGroupArn: {},
                    dataSource: {
                      shape: 'Sy'
                    },
                    roleArn: {},
                    status: {},
                    numDeleted: {
                      type: 'integer'
                    },
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    failureReason: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeDataset: {
            input: {
              type: 'structure',
              required: ['datasetArn'],
              members: {
                datasetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                dataset: {
                  type: 'structure',
                  members: {
                    name: {},
                    datasetArn: {},
                    datasetGroupArn: {},
                    datasetType: {},
                    schemaArn: {},
                    status: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    latestDatasetUpdate: {
                      type: 'structure',
                      members: {
                        schemaArn: {},
                        status: {},
                        failureReason: {},
                        creationDateTime: {
                          type: 'timestamp'
                        },
                        lastUpdatedDateTime: {
                          type: 'timestamp'
                        }
                      }
                    },
                    trackingId: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeDatasetExportJob: {
            input: {
              type: 'structure',
              required: ['datasetExportJobArn'],
              members: {
                datasetExportJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetExportJob: {
                  type: 'structure',
                  members: {
                    jobName: {},
                    datasetExportJobArn: {},
                    datasetArn: {},
                    ingestionMode: {},
                    roleArn: {},
                    status: {},
                    jobOutput: {
                      shape: 'S15'
                    },
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    failureReason: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeDatasetGroup: {
            input: {
              type: 'structure',
              required: ['datasetGroupArn'],
              members: {
                datasetGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetGroup: {
                  type: 'structure',
                  members: {
                    name: {},
                    datasetGroupArn: {},
                    status: {},
                    roleArn: {},
                    kmsKeyArn: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    failureReason: {},
                    domain: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeDatasetImportJob: {
            input: {
              type: 'structure',
              required: ['datasetImportJobArn'],
              members: {
                datasetImportJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetImportJob: {
                  type: 'structure',
                  members: {
                    jobName: {},
                    datasetImportJobArn: {},
                    datasetArn: {},
                    dataSource: {
                      shape: 'Sy'
                    },
                    roleArn: {},
                    status: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    failureReason: {},
                    importMode: {},
                    publishAttributionMetricsToS3: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeEventTracker: {
            input: {
              type: 'structure',
              required: ['eventTrackerArn'],
              members: {
                eventTrackerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                eventTracker: {
                  type: 'structure',
                  members: {
                    name: {},
                    eventTrackerArn: {},
                    accountId: {},
                    trackingId: {},
                    datasetGroupArn: {},
                    status: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeFeatureTransformation: {
            input: {
              type: 'structure',
              required: ['featureTransformationArn'],
              members: {
                featureTransformationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                featureTransformation: {
                  type: 'structure',
                  members: {
                    name: {},
                    featureTransformationArn: {},
                    defaultParameters: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    status: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeFilter: {
            input: {
              type: 'structure',
              required: ['filterArn'],
              members: {
                filterArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                filter: {
                  type: 'structure',
                  members: {
                    name: {},
                    filterArn: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    datasetGroupArn: {},
                    failureReason: {},
                    filterExpression: {
                      shape: 'S1h'
                    },
                    status: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeMetricAttribution: {
            input: {
              type: 'structure',
              required: ['metricAttributionArn'],
              members: {
                metricAttributionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                metricAttribution: {
                  type: 'structure',
                  members: {
                    name: {},
                    metricAttributionArn: {},
                    datasetGroupArn: {},
                    metricsOutputConfig: {
                      shape: 'S1p'
                    },
                    status: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    failureReason: {}
                  }
                }
              }
            }
          },
          DescribeRecipe: {
            input: {
              type: 'structure',
              required: ['recipeArn'],
              members: {
                recipeArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                recipe: {
                  type: 'structure',
                  members: {
                    name: {},
                    recipeArn: {},
                    algorithmArn: {},
                    featureTransformationArn: {},
                    status: {},
                    description: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    recipeType: {},
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeRecommender: {
            input: {
              type: 'structure',
              required: ['recommenderArn'],
              members: {
                recommenderArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                recommender: {
                  type: 'structure',
                  members: {
                    recommenderArn: {},
                    datasetGroupArn: {},
                    name: {},
                    recipeArn: {},
                    recommenderConfig: {
                      shape: 'S1s'
                    },
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    status: {},
                    failureReason: {},
                    latestRecommenderUpdate: {
                      type: 'structure',
                      members: {
                        recommenderConfig: {
                          shape: 'S1s'
                        },
                        creationDateTime: {
                          type: 'timestamp'
                        },
                        lastUpdatedDateTime: {
                          type: 'timestamp'
                        },
                        status: {},
                        failureReason: {}
                      }
                    },
                    modelMetrics: {
                      shape: 'S55'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeSchema: {
            input: {
              type: 'structure',
              required: ['schemaArn'],
              members: {
                schemaArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                schema: {
                  type: 'structure',
                  members: {
                    name: {},
                    schemaArn: {},
                    schema: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    domain: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeSolution: {
            input: {
              type: 'structure',
              required: ['solutionArn'],
              members: {
                solutionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                solution: {
                  type: 'structure',
                  members: {
                    name: {},
                    solutionArn: {},
                    performHPO: {
                      type: 'boolean'
                    },
                    performAutoML: {
                      type: 'boolean'
                    },
                    performAutoTraining: {
                      type: 'boolean'
                    },
                    recipeArn: {},
                    datasetGroupArn: {},
                    eventType: {},
                    solutionConfig: {
                      shape: 'S23'
                    },
                    autoMLResult: {
                      type: 'structure',
                      members: {
                        bestRecipeArn: {}
                      }
                    },
                    status: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    latestSolutionVersion: {
                      shape: 'S5f'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeSolutionVersion: {
            input: {
              type: 'structure',
              required: ['solutionVersionArn'],
              members: {
                solutionVersionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                solutionVersion: {
                  type: 'structure',
                  members: {
                    name: {},
                    solutionVersionArn: {},
                    solutionArn: {},
                    performHPO: {
                      type: 'boolean'
                    },
                    performAutoML: {
                      type: 'boolean'
                    },
                    recipeArn: {},
                    eventType: {},
                    datasetGroupArn: {},
                    solutionConfig: {
                      shape: 'S23'
                    },
                    trainingHours: {
                      type: 'double'
                    },
                    trainingMode: {},
                    tunedHPOParams: {
                      type: 'structure',
                      members: {
                        algorithmHyperParameters: {
                          shape: 'Sc'
                        }
                      }
                    },
                    status: {},
                    failureReason: {},
                    creationDateTime: {
                      type: 'timestamp'
                    },
                    lastUpdatedDateTime: {
                      type: 'timestamp'
                    },
                    trainingType: {}
                  }
                }
              }
            },
            idempotent: true
          },
          GetSolutionMetrics: {
            input: {
              type: 'structure',
              required: ['solutionVersionArn'],
              members: {
                solutionVersionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                solutionVersionArn: {},
                metrics: {
                  shape: 'S55'
                }
              }
            }
          },
          ListBatchInferenceJobs: {
            input: {
              type: 'structure',
              members: {
                solutionVersionArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                batchInferenceJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      batchInferenceJobArn: {},
                      jobName: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReason: {},
                      solutionVersionArn: {},
                      batchInferenceJobMode: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListBatchSegmentJobs: {
            input: {
              type: 'structure',
              members: {
                solutionVersionArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                batchSegmentJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      batchSegmentJobArn: {},
                      jobName: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReason: {},
                      solutionVersionArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListCampaigns: {
            input: {
              type: 'structure',
              members: {
                solutionArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                campaigns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      campaignArn: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReason: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListDataDeletionJobs: {
            input: {
              type: 'structure',
              members: {
                datasetGroupArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataDeletionJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      dataDeletionJobArn: {},
                      datasetGroupArn: {},
                      jobName: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReason: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListDatasetExportJobs: {
            input: {
              type: 'structure',
              members: {
                datasetArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetExportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      datasetExportJobArn: {},
                      jobName: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReason: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListDatasetGroups: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      datasetGroupArn: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReason: {},
                      domain: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListDatasetImportJobs: {
            input: {
              type: 'structure',
              members: {
                datasetArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetImportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      datasetImportJobArn: {},
                      jobName: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReason: {},
                      importMode: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListDatasets: {
            input: {
              type: 'structure',
              members: {
                datasetGroupArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      datasetArn: {},
                      datasetType: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListEventTrackers: {
            input: {
              type: 'structure',
              members: {
                datasetGroupArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eventTrackers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      eventTrackerArn: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListFilters: {
            input: {
              type: 'structure',
              members: {
                datasetGroupArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      filterArn: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      datasetGroupArn: {},
                      failureReason: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListMetricAttributionMetrics: {
            input: {
              type: 'structure',
              members: {
                metricAttributionArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metrics: {
                  shape: 'S1k'
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListMetricAttributions: {
            input: {
              type: 'structure',
              members: {
                datasetGroupArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metricAttributions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      metricAttributionArn: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReason: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListRecipes: {
            input: {
              type: 'structure',
              members: {
                recipeProvider: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                domain: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                recipes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      recipeArn: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      domain: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListRecommenders: {
            input: {
              type: 'structure',
              members: {
                datasetGroupArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recommenders: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      recommenderArn: {},
                      datasetGroupArn: {},
                      recipeArn: {},
                      recommenderConfig: {
                        shape: 'S1s'
                      },
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListSchemas: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                schemas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      schemaArn: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      domain: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListSolutionVersions: {
            input: {
              type: 'structure',
              members: {
                solutionArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                solutionVersions: {
                  type: 'list',
                  member: {
                    shape: 'S5f'
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListSolutions: {
            input: {
              type: 'structure',
              members: {
                datasetGroupArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                solutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      solutionArn: {},
                      status: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      recipeArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sf'
                }
              }
            }
          },
          StartRecommender: {
            input: {
              type: 'structure',
              required: ['recommenderArn'],
              members: {
                recommenderArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                recommenderArn: {}
              }
            },
            idempotent: true
          },
          StopRecommender: {
            input: {
              type: 'structure',
              required: ['recommenderArn'],
              members: {
                recommenderArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                recommenderArn: {}
              }
            },
            idempotent: true
          },
          StopSolutionVersionCreation: {
            input: {
              type: 'structure',
              required: ['solutionVersionArn'],
              members: {
                solutionVersionArn: {}
              }
            },
            idempotent: true
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'Sf'
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
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
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
          UpdateCampaign: {
            input: {
              type: 'structure',
              required: ['campaignArn'],
              members: {
                campaignArn: {},
                solutionVersionArn: {},
                minProvisionedTPS: {
                  type: 'integer'
                },
                campaignConfig: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                campaignArn: {}
              }
            },
            idempotent: true
          },
          UpdateDataset: {
            input: {
              type: 'structure',
              required: ['datasetArn', 'schemaArn'],
              members: {
                datasetArn: {},
                schemaArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetArn: {}
              }
            },
            idempotent: true
          },
          UpdateMetricAttribution: {
            input: {
              type: 'structure',
              members: {
                addMetrics: {
                  shape: 'S1k'
                },
                removeMetrics: {
                  type: 'list',
                  member: {}
                },
                metricsOutputConfig: {
                  shape: 'S1p'
                },
                metricAttributionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                metricAttributionArn: {}
              }
            }
          },
          UpdateRecommender: {
            input: {
              type: 'structure',
              required: ['recommenderArn', 'recommenderConfig'],
              members: {
                recommenderArn: {},
                recommenderConfig: {
                  shape: 'S1s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recommenderArn: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['s3DataSource'],
            members: {
              s3DataSource: {
                shape: 'S6'
              }
            }
          },
          S6: {
            type: 'structure',
            required: ['path'],
            members: {
              path: {},
              kmsKeyArn: {}
            }
          },
          S9: {
            type: 'structure',
            required: ['s3DataDestination'],
            members: {
              s3DataDestination: {
                shape: 'S6'
              }
            }
          },
          Sb: {
            type: 'structure',
            members: {
              itemExplorationConfig: {
                shape: 'Sc'
              }
            }
          },
          Sc: {
            type: 'map',
            key: {},
            value: {}
          },
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['tagKey', 'tagValue'],
              members: {
                tagKey: {},
                tagValue: {}
              }
            }
          },
          Sk: {
            type: 'structure',
            required: ['fieldsForThemeGeneration'],
            members: {
              fieldsForThemeGeneration: {
                type: 'structure',
                required: ['itemName'],
                members: {
                  itemName: {}
                }
              }
            }
          },
          Sp: {
            type: 'structure',
            required: ['s3DataSource'],
            members: {
              s3DataSource: {
                shape: 'S6'
              }
            }
          },
          Sq: {
            type: 'structure',
            required: ['s3DataDestination'],
            members: {
              s3DataDestination: {
                shape: 'S6'
              }
            }
          },
          Su: {
            type: 'structure',
            members: {
              itemExplorationConfig: {
                shape: 'Sc'
              },
              enableMetadataWithRecommendations: {
                type: 'boolean'
              },
              syncWithLatestSolutionVersion: {
                type: 'boolean'
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              dataLocation: {}
            }
          },
          S15: {
            type: 'structure',
            required: ['s3DataDestination'],
            members: {
              s3DataDestination: {
                shape: 'S6'
              }
            }
          },
          S1h: {
            type: 'string',
            sensitive: true
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['eventType', 'metricName', 'expression'],
              members: {
                eventType: {},
                metricName: {},
                expression: {}
              }
            }
          },
          S1p: {
            type: 'structure',
            required: ['roleArn'],
            members: {
              s3DataDestination: {
                shape: 'S6'
              },
              roleArn: {}
            }
          },
          S1s: {
            type: 'structure',
            members: {
              itemExplorationConfig: {
                shape: 'Sc'
              },
              minRecommendationRequestsPerSecond: {
                type: 'integer'
              },
              trainingDataConfig: {
                shape: 'S1t'
              },
              enableMetadataWithRecommendations: {
                type: 'boolean'
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              excludedDatasetColumns: {
                type: 'map',
                key: {},
                value: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S23: {
            type: 'structure',
            members: {
              eventValueThreshold: {},
              hpoConfig: {
                type: 'structure',
                members: {
                  hpoObjective: {
                    type: 'structure',
                    members: {
                      type: {},
                      metricName: {},
                      metricRegex: {}
                    }
                  },
                  hpoResourceConfig: {
                    type: 'structure',
                    members: {
                      maxNumberOfTrainingJobs: {},
                      maxParallelTrainingJobs: {}
                    }
                  },
                  algorithmHyperParameterRanges: {
                    type: 'structure',
                    members: {
                      integerHyperParameterRanges: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            minValue: {
                              type: 'integer'
                            },
                            maxValue: {
                              type: 'integer'
                            }
                          }
                        }
                      },
                      continuousHyperParameterRanges: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            minValue: {
                              type: 'double'
                            },
                            maxValue: {
                              type: 'double'
                            }
                          }
                        }
                      },
                      categoricalHyperParameterRanges: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            values: {
                              shape: 'S2m'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              algorithmHyperParameters: {
                shape: 'Sc'
              },
              featureTransformationParameters: {
                type: 'map',
                key: {},
                value: {}
              },
              autoMLConfig: {
                type: 'structure',
                members: {
                  metricName: {},
                  recipeList: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              optimizationObjective: {
                type: 'structure',
                members: {
                  itemAttribute: {},
                  objectiveSensitivity: {}
                }
              },
              trainingDataConfig: {
                shape: 'S1t'
              },
              autoTrainingConfig: {
                type: 'structure',
                members: {
                  schedulingExpression: {}
                }
              }
            }
          },
          S2m: {
            type: 'list',
            member: {}
          },
          S55: {
            type: 'map',
            key: {},
            value: {
              type: 'double'
            }
          },
          S5f: {
            type: 'structure',
            members: {
              solutionVersionArn: {},
              status: {},
              trainingMode: {},
              trainingType: {},
              creationDateTime: {
                type: 'timestamp'
              },
              lastUpdatedDateTime: {
                type: 'timestamp'
              },
              failureReason: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2c29af62c5a5ef12ace419e90b3c8ec2330c2e59.js.map