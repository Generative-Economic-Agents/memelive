System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-11-15',
          endpointPrefix: 'frauddetector',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Fraud Detector',
          serviceId: 'FraudDetector',
          signatureVersion: 'v4',
          targetPrefix: 'AWSHawksNestServiceFacade',
          uid: 'frauddetector-2019-11-15'
        },
        operations: {
          BatchCreateVariable: {
            input: {
              type: 'structure',
              required: ['variableEntries'],
              members: {
                variableEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      dataType: {},
                      dataSource: {},
                      defaultValue: {},
                      description: {},
                      variableType: {}
                    }
                  }
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      code: {
                        type: 'integer'
                      },
                      message: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetVariable: {
            input: {
              type: 'structure',
              required: ['names'],
              members: {
                names: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                variables: {
                  shape: 'Sg'
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      code: {
                        type: 'integer'
                      },
                      message: {}
                    }
                  }
                }
              }
            }
          },
          CancelBatchImportJob: {
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelBatchPredictionJob: {
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateBatchImportJob: {
            input: {
              type: 'structure',
              required: ['jobId', 'inputPath', 'outputPath', 'eventTypeName', 'iamRoleArn'],
              members: {
                jobId: {},
                inputPath: {},
                outputPath: {},
                eventTypeName: {},
                iamRoleArn: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateBatchPredictionJob: {
            input: {
              type: 'structure',
              required: ['jobId', 'inputPath', 'outputPath', 'eventTypeName', 'detectorName', 'iamRoleArn'],
              members: {
                jobId: {},
                inputPath: {},
                outputPath: {},
                eventTypeName: {},
                detectorName: {},
                detectorVersion: {},
                iamRoleArn: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDetectorVersion: {
            input: {
              type: 'structure',
              required: ['detectorId', 'rules'],
              members: {
                detectorId: {},
                description: {},
                externalModelEndpoints: {
                  shape: 'S12'
                },
                rules: {
                  shape: 'S13'
                },
                modelVersions: {
                  shape: 'S15'
                },
                ruleExecutionMode: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                detectorId: {},
                detectorVersionId: {},
                status: {}
              }
            }
          },
          CreateList: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                elements: {
                  shape: 'S1f'
                },
                variableType: {},
                description: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateModel: {
            input: {
              type: 'structure',
              required: ['modelId', 'modelType', 'eventTypeName'],
              members: {
                modelId: {},
                modelType: {},
                description: {},
                eventTypeName: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateModelVersion: {
            input: {
              type: 'structure',
              required: ['modelId', 'modelType', 'trainingDataSource', 'trainingDataSchema'],
              members: {
                modelId: {},
                modelType: {},
                trainingDataSource: {},
                trainingDataSchema: {
                  shape: 'S1n'
                },
                externalEventsDetail: {
                  shape: 'S1r'
                },
                ingestedEventsDetail: {
                  shape: 'S1s'
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                modelId: {},
                modelType: {},
                modelVersionNumber: {},
                status: {}
              }
            }
          },
          CreateRule: {
            input: {
              type: 'structure',
              required: ['ruleId', 'detectorId', 'expression', 'language', 'outcomes'],
              members: {
                ruleId: {},
                detectorId: {},
                description: {},
                expression: {
                  shape: 'S1w'
                },
                language: {},
                outcomes: {
                  shape: 'S1y'
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                rule: {
                  shape: 'S14'
                }
              }
            }
          },
          CreateVariable: {
            input: {
              type: 'structure',
              required: ['name', 'dataType', 'dataSource', 'defaultValue'],
              members: {
                name: {},
                dataType: {},
                dataSource: {},
                defaultValue: {},
                description: {},
                variableType: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteBatchImportJob: {
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteBatchPredictionJob: {
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDetector: {
            input: {
              type: 'structure',
              required: ['detectorId'],
              members: {
                detectorId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDetectorVersion: {
            input: {
              type: 'structure',
              required: ['detectorId', 'detectorVersionId'],
              members: {
                detectorId: {},
                detectorVersionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEntityType: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEvent: {
            input: {
              type: 'structure',
              required: ['eventId', 'eventTypeName'],
              members: {
                eventId: {},
                eventTypeName: {},
                deleteAuditHistory: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEventType: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEventsByEventType: {
            input: {
              type: 'structure',
              required: ['eventTypeName'],
              members: {
                eventTypeName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                eventTypeName: {},
                eventsDeletionStatus: {}
              }
            }
          },
          DeleteExternalModel: {
            input: {
              type: 'structure',
              required: ['modelEndpoint'],
              members: {
                modelEndpoint: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLabel: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteList: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteModel: {
            input: {
              type: 'structure',
              required: ['modelId', 'modelType'],
              members: {
                modelId: {},
                modelType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteModelVersion: {
            input: {
              type: 'structure',
              required: ['modelId', 'modelType', 'modelVersionNumber'],
              members: {
                modelId: {},
                modelType: {},
                modelVersionNumber: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteOutcome: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRule: {
            input: {
              type: 'structure',
              required: ['rule'],
              members: {
                rule: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteVariable: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeDetector: {
            input: {
              type: 'structure',
              required: ['detectorId'],
              members: {
                detectorId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                detectorId: {},
                detectorVersionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      detectorVersionId: {},
                      status: {},
                      description: {},
                      lastUpdatedTime: {}
                    }
                  }
                },
                nextToken: {},
                arn: {}
              }
            }
          },
          DescribeModelVersions: {
            input: {
              type: 'structure',
              members: {
                modelId: {},
                modelVersionNumber: {},
                modelType: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                modelVersionDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      modelId: {},
                      modelType: {},
                      modelVersionNumber: {},
                      status: {},
                      trainingDataSource: {},
                      trainingDataSchema: {
                        shape: 'S1n'
                      },
                      externalEventsDetail: {
                        shape: 'S1r'
                      },
                      ingestedEventsDetail: {
                        shape: 'S1s'
                      },
                      trainingResult: {
                        type: 'structure',
                        members: {
                          dataValidationMetrics: {
                            shape: 'S3b'
                          },
                          trainingMetrics: {
                            type: 'structure',
                            members: {
                              auc: {
                                type: 'float'
                              },
                              metricDataPoints: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    fpr: {
                                      type: 'float'
                                    },
                                    precision: {
                                      type: 'float'
                                    },
                                    tpr: {
                                      type: 'float'
                                    },
                                    threshold: {
                                      type: 'float'
                                    }
                                  }
                                }
                              }
                            }
                          },
                          variableImportanceMetrics: {
                            shape: 'S3k'
                          }
                        }
                      },
                      lastUpdatedTime: {},
                      createdTime: {},
                      arn: {},
                      trainingResultV2: {
                        type: 'structure',
                        members: {
                          dataValidationMetrics: {
                            shape: 'S3b'
                          },
                          trainingMetricsV2: {
                            type: 'structure',
                            members: {
                              ofi: {
                                type: 'structure',
                                members: {
                                  metricDataPoints: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        fpr: {
                                          type: 'float'
                                        },
                                        precision: {
                                          type: 'float'
                                        },
                                        tpr: {
                                          type: 'float'
                                        },
                                        threshold: {
                                          type: 'float'
                                        }
                                      }
                                    }
                                  },
                                  modelPerformance: {
                                    type: 'structure',
                                    members: {
                                      auc: {
                                        type: 'float'
                                      },
                                      uncertaintyRange: {
                                        shape: 'S3t'
                                      }
                                    }
                                  }
                                }
                              },
                              tfi: {
                                type: 'structure',
                                members: {
                                  metricDataPoints: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        fpr: {
                                          type: 'float'
                                        },
                                        precision: {
                                          type: 'float'
                                        },
                                        tpr: {
                                          type: 'float'
                                        },
                                        threshold: {
                                          type: 'float'
                                        }
                                      }
                                    }
                                  },
                                  modelPerformance: {
                                    type: 'structure',
                                    members: {
                                      auc: {
                                        type: 'float'
                                      },
                                      uncertaintyRange: {
                                        shape: 'S3t'
                                      }
                                    }
                                  }
                                }
                              },
                              ati: {
                                type: 'structure',
                                members: {
                                  metricDataPoints: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        cr: {
                                          type: 'float'
                                        },
                                        adr: {
                                          type: 'float'
                                        },
                                        threshold: {
                                          type: 'float'
                                        },
                                        atodr: {
                                          type: 'float'
                                        }
                                      }
                                    }
                                  },
                                  modelPerformance: {
                                    type: 'structure',
                                    members: {
                                      asi: {
                                        type: 'float'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          variableImportanceMetrics: {
                            shape: 'S3k'
                          },
                          aggregatedVariablesImportanceMetrics: {
                            type: 'structure',
                            members: {
                              logOddsMetrics: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['variableNames', 'aggregatedVariablesImportance'],
                                  members: {
                                    variableNames: {
                                      shape: 'S12'
                                    },
                                    aggregatedVariablesImportance: {
                                      type: 'float'
                                    }
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
                nextToken: {}
              }
            }
          },
          GetBatchImportJobs: {
            input: {
              type: 'structure',
              members: {
                jobId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                batchImports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      jobId: {},
                      status: {},
                      failureReason: {},
                      startTime: {},
                      completionTime: {},
                      inputPath: {},
                      outputPath: {},
                      eventTypeName: {},
                      iamRoleArn: {},
                      arn: {},
                      processedRecordsCount: {
                        type: 'integer'
                      },
                      failedRecordsCount: {
                        type: 'integer'
                      },
                      totalRecordsCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetBatchPredictionJobs: {
            input: {
              type: 'structure',
              members: {
                jobId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                batchPredictions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      jobId: {},
                      status: {},
                      failureReason: {},
                      startTime: {},
                      completionTime: {},
                      lastHeartbeatTime: {},
                      inputPath: {},
                      outputPath: {},
                      eventTypeName: {},
                      detectorName: {},
                      detectorVersion: {},
                      iamRoleArn: {},
                      arn: {},
                      processedRecordsCount: {
                        type: 'integer'
                      },
                      totalRecordsCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetDeleteEventsByEventTypeStatus: {
            input: {
              type: 'structure',
              required: ['eventTypeName'],
              members: {
                eventTypeName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                eventTypeName: {},
                eventsDeletionStatus: {}
              }
            }
          },
          GetDetectorVersion: {
            input: {
              type: 'structure',
              required: ['detectorId', 'detectorVersionId'],
              members: {
                detectorId: {},
                detectorVersionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                detectorId: {},
                detectorVersionId: {},
                description: {},
                externalModelEndpoints: {
                  shape: 'S12'
                },
                modelVersions: {
                  shape: 'S15'
                },
                rules: {
                  shape: 'S13'
                },
                status: {},
                lastUpdatedTime: {},
                createdTime: {},
                ruleExecutionMode: {},
                arn: {}
              }
            }
          },
          GetDetectors: {
            input: {
              type: 'structure',
              members: {
                detectorId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                detectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      detectorId: {},
                      description: {},
                      eventTypeName: {},
                      lastUpdatedTime: {},
                      createdTime: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetEntityTypes: {
            input: {
              type: 'structure',
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                entityTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      description: {},
                      lastUpdatedTime: {},
                      createdTime: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetEvent: {
            input: {
              type: 'structure',
              required: ['eventId', 'eventTypeName'],
              members: {
                eventId: {},
                eventTypeName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                event: {
                  type: 'structure',
                  members: {
                    eventId: {},
                    eventTypeName: {},
                    eventTimestamp: {},
                    eventVariables: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'string',
                        sensitive: true
                      }
                    },
                    currentLabel: {},
                    labelTimestamp: {},
                    entities: {
                      shape: 'S51'
                    }
                  }
                }
              }
            }
          },
          GetEventPrediction: {
            input: {
              type: 'structure',
              required: ['detectorId', 'eventId', 'eventTypeName', 'entities', 'eventTimestamp', 'eventVariables'],
              members: {
                detectorId: {},
                detectorVersionId: {},
                eventId: {},
                eventTypeName: {},
                entities: {
                  shape: 'S51'
                },
                eventTimestamp: {},
                eventVariables: {
                  shape: 'S56'
                },
                externalModelEndpointDataBlobs: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      byteBuffer: {
                        type: 'blob'
                      },
                      contentType: {}
                    }
                  },
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                modelScores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      modelVersion: {
                        shape: 'S16'
                      },
                      scores: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'float'
                        }
                      }
                    }
                  }
                },
                ruleResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ruleId: {},
                      outcomes: {
                        shape: 'S12'
                      }
                    }
                  }
                },
                externalModelOutputs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      externalModel: {
                        type: 'structure',
                        members: {
                          modelEndpoint: {},
                          modelSource: {}
                        }
                      },
                      outputs: {
                        type: 'map',
                        key: {},
                        value: {}
                      }
                    }
                  }
                }
              }
            }
          },
          GetEventPredictionMetadata: {
            input: {
              type: 'structure',
              required: ['eventId', 'eventTypeName', 'detectorId', 'detectorVersionId', 'predictionTimestamp'],
              members: {
                eventId: {},
                eventTypeName: {},
                detectorId: {},
                detectorVersionId: {},
                predictionTimestamp: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                eventId: {},
                eventTypeName: {},
                entityId: {},
                entityType: {},
                eventTimestamp: {},
                detectorId: {},
                detectorVersionId: {},
                detectorVersionStatus: {},
                eventVariables: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {
                        shape: 'S5s'
                      },
                      value: {
                        shape: 'S5s'
                      },
                      source: {
                        shape: 'S5s'
                      }
                    }
                  }
                },
                rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ruleId: {},
                      ruleVersion: {},
                      expression: {
                        shape: 'S5s'
                      },
                      expressionWithValues: {
                        shape: 'S5s'
                      },
                      outcomes: {
                        shape: 'S12'
                      },
                      evaluated: {
                        type: 'boolean'
                      },
                      matched: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                ruleExecutionMode: {},
                outcomes: {
                  shape: 'S12'
                },
                evaluatedModelVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      modelId: {},
                      modelVersion: {},
                      modelType: {},
                      evaluations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            outputVariableName: {},
                            evaluationScore: {},
                            predictionExplanations: {
                              type: 'structure',
                              members: {
                                variableImpactExplanations: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      eventVariableName: {},
                                      relativeImpact: {},
                                      logOddsImpact: {
                                        type: 'float'
                                      }
                                    }
                                  }
                                },
                                aggregatedVariablesImpactExplanations: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      eventVariableNames: {
                                        shape: 'S12'
                                      },
                                      relativeImpact: {},
                                      logOddsImpact: {
                                        type: 'float'
                                      }
                                    }
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
                evaluatedExternalModels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      modelEndpoint: {},
                      useEventVariables: {
                        type: 'boolean'
                      },
                      inputVariables: {
                        shape: 'S67'
                      },
                      outputVariables: {
                        shape: 'S67'
                      }
                    }
                  }
                },
                predictionTimestamp: {}
              }
            }
          },
          GetEventTypes: {
            input: {
              type: 'structure',
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eventTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      description: {},
                      eventVariables: {
                        shape: 'S12'
                      },
                      labels: {
                        shape: 'S12'
                      },
                      entityTypes: {
                        shape: 'S1y'
                      },
                      eventIngestion: {},
                      ingestedEventStatistics: {
                        type: 'structure',
                        members: {
                          numberOfEvents: {
                            type: 'long'
                          },
                          eventDataSizeInBytes: {
                            type: 'long'
                          },
                          leastRecentEvent: {},
                          mostRecentEvent: {},
                          lastUpdatedTime: {}
                        }
                      },
                      lastUpdatedTime: {},
                      createdTime: {},
                      arn: {},
                      eventOrchestration: {
                        shape: 'S6g'
                      }
                    },
                    sensitive: true
                  }
                },
                nextToken: {}
              }
            }
          },
          GetExternalModels: {
            input: {
              type: 'structure',
              members: {
                modelEndpoint: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                externalModels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      modelEndpoint: {},
                      modelSource: {},
                      invokeModelEndpointRoleArn: {},
                      inputConfiguration: {
                        shape: 'S6m'
                      },
                      outputConfiguration: {
                        shape: 'S6q'
                      },
                      modelEndpointStatus: {},
                      lastUpdatedTime: {},
                      createdTime: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetKMSEncryptionKey: {
            output: {
              type: 'structure',
              members: {
                kmsKey: {
                  type: 'structure',
                  members: {
                    kmsEncryptionKeyArn: {}
                  }
                }
              }
            }
          },
          GetLabels: {
            input: {
              type: 'structure',
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                labels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      description: {},
                      lastUpdatedTime: {},
                      createdTime: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetListElements: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                elements: {
                  shape: 'S1f'
                },
                nextToken: {}
              }
            }
          },
          GetListsMetadata: {
            input: {
              type: 'structure',
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lists: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {},
                      description: {},
                      variableType: {},
                      createdTime: {},
                      updatedTime: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetModelVersion: {
            input: {
              type: 'structure',
              required: ['modelId', 'modelType', 'modelVersionNumber'],
              members: {
                modelId: {},
                modelType: {},
                modelVersionNumber: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                modelId: {},
                modelType: {},
                modelVersionNumber: {},
                trainingDataSource: {},
                trainingDataSchema: {
                  shape: 'S1n'
                },
                externalEventsDetail: {
                  shape: 'S1r'
                },
                ingestedEventsDetail: {
                  shape: 'S1s'
                },
                status: {},
                arn: {}
              }
            }
          },
          GetModels: {
            input: {
              type: 'structure',
              members: {
                modelId: {},
                modelType: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                models: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      modelId: {},
                      modelType: {},
                      description: {},
                      eventTypeName: {},
                      createdTime: {},
                      lastUpdatedTime: {},
                      arn: {}
                    }
                  }
                }
              }
            }
          },
          GetOutcomes: {
            input: {
              type: 'structure',
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                outcomes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      description: {},
                      lastUpdatedTime: {},
                      createdTime: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetRules: {
            input: {
              type: 'structure',
              required: ['detectorId'],
              members: {
                ruleId: {},
                detectorId: {},
                ruleVersion: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ruleDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ruleId: {},
                      description: {},
                      detectorId: {},
                      ruleVersion: {},
                      expression: {
                        shape: 'S1w'
                      },
                      language: {},
                      outcomes: {
                        shape: 'S1y'
                      },
                      lastUpdatedTime: {},
                      createdTime: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetVariables: {
            input: {
              type: 'structure',
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                variables: {
                  shape: 'Sg'
                },
                nextToken: {}
              }
            }
          },
          ListEventPredictions: {
            input: {
              type: 'structure',
              members: {
                eventId: {
                  shape: 'S7w'
                },
                eventType: {
                  shape: 'S7w'
                },
                detectorId: {
                  shape: 'S7w'
                },
                detectorVersionId: {
                  shape: 'S7w'
                },
                predictionTimeRange: {
                  type: 'structure',
                  required: ['startTime', 'endTime'],
                  members: {
                    startTime: {},
                    endTime: {}
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eventPredictionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      eventId: {},
                      eventTypeName: {},
                      eventTimestamp: {},
                      predictionTimestamp: {},
                      detectorId: {},
                      detectorVersionId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceARN'],
              members: {
                resourceARN: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S5'
                },
                nextToken: {}
              }
            }
          },
          PutDetector: {
            input: {
              type: 'structure',
              required: ['detectorId', 'eventTypeName'],
              members: {
                detectorId: {},
                description: {},
                eventTypeName: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutEntityType: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutEventType: {
            input: {
              type: 'structure',
              required: ['name', 'eventVariables', 'entityTypes'],
              members: {
                name: {},
                description: {},
                eventVariables: {
                  shape: 'S1y'
                },
                labels: {
                  shape: 'S12'
                },
                entityTypes: {
                  shape: 'S1y'
                },
                eventIngestion: {},
                tags: {
                  shape: 'S5'
                },
                eventOrchestration: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutExternalModel: {
            input: {
              type: 'structure',
              required: ['modelEndpoint', 'modelSource', 'invokeModelEndpointRoleArn', 'inputConfiguration', 'outputConfiguration', 'modelEndpointStatus'],
              members: {
                modelEndpoint: {},
                modelSource: {},
                invokeModelEndpointRoleArn: {},
                inputConfiguration: {
                  shape: 'S6m'
                },
                outputConfiguration: {
                  shape: 'S6q'
                },
                modelEndpointStatus: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutKMSEncryptionKey: {
            input: {
              type: 'structure',
              required: ['kmsEncryptionKeyArn'],
              members: {
                kmsEncryptionKeyArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutLabel: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutOutcome: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendEvent: {
            input: {
              type: 'structure',
              required: ['eventId', 'eventTypeName', 'eventTimestamp', 'eventVariables', 'entities'],
              members: {
                eventId: {},
                eventTypeName: {},
                eventTimestamp: {},
                eventVariables: {
                  shape: 'S56'
                },
                assignedLabel: {},
                labelTimestamp: {},
                entities: {
                  shape: 'S51'
                }
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
              required: ['resourceARN', 'tags'],
              members: {
                resourceARN: {},
                tags: {
                  shape: 'S5'
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
              required: ['resourceARN', 'tagKeys'],
              members: {
                resourceARN: {},
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
          UpdateDetectorVersion: {
            input: {
              type: 'structure',
              required: ['detectorId', 'detectorVersionId', 'externalModelEndpoints', 'rules'],
              members: {
                detectorId: {},
                detectorVersionId: {},
                externalModelEndpoints: {
                  shape: 'S12'
                },
                rules: {
                  shape: 'S13'
                },
                description: {},
                modelVersions: {
                  shape: 'S15'
                },
                ruleExecutionMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDetectorVersionMetadata: {
            input: {
              type: 'structure',
              required: ['detectorId', 'detectorVersionId', 'description'],
              members: {
                detectorId: {},
                detectorVersionId: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDetectorVersionStatus: {
            input: {
              type: 'structure',
              required: ['detectorId', 'detectorVersionId', 'status'],
              members: {
                detectorId: {},
                detectorVersionId: {},
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEventLabel: {
            input: {
              type: 'structure',
              required: ['eventId', 'eventTypeName', 'assignedLabel', 'labelTimestamp'],
              members: {
                eventId: {},
                eventTypeName: {},
                assignedLabel: {},
                labelTimestamp: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateList: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                elements: {
                  shape: 'S1f'
                },
                description: {},
                updateMode: {},
                variableType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateModel: {
            input: {
              type: 'structure',
              required: ['modelId', 'modelType'],
              members: {
                modelId: {},
                modelType: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateModelVersion: {
            input: {
              type: 'structure',
              required: ['modelId', 'modelType', 'majorVersionNumber'],
              members: {
                modelId: {},
                modelType: {},
                majorVersionNumber: {},
                externalEventsDetail: {
                  shape: 'S1r'
                },
                ingestedEventsDetail: {
                  shape: 'S1s'
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                modelId: {},
                modelType: {},
                modelVersionNumber: {},
                status: {}
              }
            }
          },
          UpdateModelVersionStatus: {
            input: {
              type: 'structure',
              required: ['modelId', 'modelType', 'modelVersionNumber', 'status'],
              members: {
                modelId: {},
                modelType: {},
                modelVersionNumber: {},
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRuleMetadata: {
            input: {
              type: 'structure',
              required: ['rule', 'description'],
              members: {
                rule: {
                  shape: 'S14'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRuleVersion: {
            input: {
              type: 'structure',
              required: ['rule', 'expression', 'language', 'outcomes'],
              members: {
                rule: {
                  shape: 'S14'
                },
                description: {},
                expression: {
                  shape: 'S1w'
                },
                language: {},
                outcomes: {
                  shape: 'S1y'
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                rule: {
                  shape: 'S14'
                }
              }
            }
          },
          UpdateVariable: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                defaultValue: {},
                description: {},
                variableType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          Sg: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                dataType: {},
                dataSource: {},
                defaultValue: {},
                description: {},
                variableType: {},
                lastUpdatedTime: {},
                createdTime: {},
                arn: {}
              }
            }
          },
          S12: {
            type: 'list',
            member: {}
          },
          S13: {
            type: 'list',
            member: {
              shape: 'S14'
            }
          },
          S14: {
            type: 'structure',
            required: ['detectorId', 'ruleId', 'ruleVersion'],
            members: {
              detectorId: {},
              ruleId: {},
              ruleVersion: {}
            }
          },
          S15: {
            type: 'list',
            member: {
              shape: 'S16'
            }
          },
          S16: {
            type: 'structure',
            required: ['modelId', 'modelType', 'modelVersionNumber'],
            members: {
              modelId: {},
              modelType: {},
              modelVersionNumber: {},
              arn: {}
            }
          },
          S1f: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            }
          },
          S1n: {
            type: 'structure',
            required: ['modelVariables'],
            members: {
              modelVariables: {
                shape: 'S12'
              },
              labelSchema: {
                type: 'structure',
                members: {
                  labelMapper: {
                    type: 'map',
                    key: {},
                    value: {
                      shape: 'S12'
                    }
                  },
                  unlabeledEventsTreatment: {}
                }
              }
            }
          },
          S1r: {
            type: 'structure',
            required: ['dataLocation', 'dataAccessRoleArn'],
            members: {
              dataLocation: {},
              dataAccessRoleArn: {}
            }
          },
          S1s: {
            type: 'structure',
            required: ['ingestedEventsTimeWindow'],
            members: {
              ingestedEventsTimeWindow: {
                type: 'structure',
                required: ['startTime', 'endTime'],
                members: {
                  startTime: {},
                  endTime: {}
                }
              }
            }
          },
          S1w: {
            type: 'string',
            sensitive: true
          },
          S1y: {
            type: 'list',
            member: {}
          },
          S3b: {
            type: 'structure',
            members: {
              fileLevelMessages: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    title: {},
                    content: {},
                    type: {}
                  }
                }
              },
              fieldLevelMessages: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    fieldName: {},
                    identifier: {},
                    title: {},
                    content: {},
                    type: {}
                  }
                }
              }
            }
          },
          S3k: {
            type: 'structure',
            members: {
              logOddsMetrics: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['variableName', 'variableType', 'variableImportance'],
                  members: {
                    variableName: {},
                    variableType: {},
                    variableImportance: {
                      type: 'float'
                    }
                  }
                }
              }
            }
          },
          S3t: {
            type: 'structure',
            required: ['lowerBoundValue', 'upperBoundValue'],
            members: {
              lowerBoundValue: {
                type: 'float'
              },
              upperBoundValue: {
                type: 'float'
              }
            }
          },
          S51: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['entityType', 'entityId'],
              members: {
                entityType: {},
                entityId: {}
              },
              sensitive: true
            }
          },
          S56: {
            type: 'map',
            key: {},
            value: {
              type: 'string',
              sensitive: true
            }
          },
          S5s: {
            type: 'string',
            sensitive: true
          },
          S67: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S6g: {
            type: 'structure',
            required: ['eventBridgeEnabled'],
            members: {
              eventBridgeEnabled: {
                type: 'boolean'
              }
            }
          },
          S6m: {
            type: 'structure',
            required: ['useEventVariables'],
            members: {
              eventTypeName: {},
              format: {},
              useEventVariables: {
                type: 'boolean'
              },
              jsonInputTemplate: {},
              csvInputTemplate: {}
            }
          },
          S6q: {
            type: 'structure',
            required: ['format'],
            members: {
              format: {},
              jsonKeyToVariableMap: {
                type: 'map',
                key: {},
                value: {}
              },
              csvIndexToVariableMap: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S7w: {
            type: 'structure',
            members: {
              value: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=74e7e98a10e9f0447ef19eae5d8fb8bf759e1cbe.js.map