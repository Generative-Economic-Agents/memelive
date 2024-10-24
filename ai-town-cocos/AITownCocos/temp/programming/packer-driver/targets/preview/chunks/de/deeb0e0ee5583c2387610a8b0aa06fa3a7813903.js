System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-11-20',
          endpointPrefix: 'lookoutvision',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Lookout for Vision',
          serviceId: 'LookoutVision',
          signatureVersion: 'v4',
          signingName: 'lookoutvision',
          uid: 'lookoutvision-2020-11-20'
        },
        operations: {
          CreateDataset: {
            http: {
              requestUri: '/2020-11-20/projects/{projectName}/datasets',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'DatasetType'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                DatasetType: {},
                DatasetSource: {
                  type: 'structure',
                  members: {
                    GroundTruthManifest: {
                      type: 'structure',
                      members: {
                        S3Object: {
                          type: 'structure',
                          required: ['Bucket', 'Key'],
                          members: {
                            Bucket: {},
                            Key: {},
                            VersionId: {}
                          }
                        }
                      }
                    }
                  }
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetMetadata: {
                  shape: 'Sc'
                }
              }
            }
          },
          CreateModel: {
            http: {
              requestUri: '/2020-11-20/projects/{projectName}/models',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'OutputConfig'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                Description: {},
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                OutputConfig: {
                  shape: 'Si'
                },
                KmsKeyId: {},
                Tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelMetadata: {
                  shape: 'Sr'
                }
              }
            }
          },
          CreateProject: {
            http: {
              requestUri: '/2020-11-20/projects'
            },
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {},
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProjectMetadata: {
                  shape: 'S10'
                }
              }
            }
          },
          DeleteDataset: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-11-20/projects/{projectName}/datasets/{datasetType}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'DatasetType'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                DatasetType: {
                  location: 'uri',
                  locationName: 'datasetType'
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteModel: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-11-20/projects/{projectName}/models/{modelVersion}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'ModelVersion'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                ModelVersion: {
                  location: 'uri',
                  locationName: 'modelVersion'
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
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
          DeleteProject: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-11-20/projects/{projectName}'
            },
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProjectArn: {}
              }
            }
          },
          DescribeDataset: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/projects/{projectName}/datasets/{datasetType}'
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'DatasetType'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                DatasetType: {
                  location: 'uri',
                  locationName: 'datasetType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasetDescription: {
                  type: 'structure',
                  members: {
                    ProjectName: {},
                    DatasetType: {},
                    CreationTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    Status: {},
                    StatusMessage: {},
                    ImageStats: {
                      type: 'structure',
                      members: {
                        Total: {
                          type: 'integer'
                        },
                        Labeled: {
                          type: 'integer'
                        },
                        Normal: {
                          type: 'integer'
                        },
                        Anomaly: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeModel: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/projects/{projectName}/models/{modelVersion}'
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'ModelVersion'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                ModelVersion: {
                  location: 'uri',
                  locationName: 'modelVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelDescription: {
                  type: 'structure',
                  members: {
                    ModelVersion: {},
                    ModelArn: {},
                    CreationTimestamp: {
                      type: 'timestamp'
                    },
                    Description: {},
                    Status: {},
                    StatusMessage: {},
                    Performance: {
                      shape: 'Sw'
                    },
                    OutputConfig: {
                      shape: 'Si'
                    },
                    EvaluationManifest: {
                      shape: 'S1h'
                    },
                    EvaluationResult: {
                      shape: 'S1h'
                    },
                    EvaluationEndTimestamp: {
                      type: 'timestamp'
                    },
                    KmsKeyId: {},
                    MinInferenceUnits: {
                      type: 'integer'
                    },
                    MaxInferenceUnits: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          DescribeModelPackagingJob: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/projects/{projectName}/modelpackagingjobs/{jobName}'
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'JobName'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                JobName: {
                  location: 'uri',
                  locationName: 'jobName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelPackagingDescription: {
                  type: 'structure',
                  members: {
                    JobName: {},
                    ProjectName: {},
                    ModelVersion: {},
                    ModelPackagingConfiguration: {
                      shape: 'S1n'
                    },
                    ModelPackagingJobDescription: {},
                    ModelPackagingMethod: {},
                    ModelPackagingOutputDetails: {
                      type: 'structure',
                      members: {
                        Greengrass: {
                          type: 'structure',
                          members: {
                            ComponentVersionArn: {},
                            ComponentName: {},
                            ComponentVersion: {}
                          }
                        }
                      }
                    },
                    Status: {},
                    StatusMessage: {},
                    CreationTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          DescribeProject: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/projects/{projectName}'
            },
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProjectDescription: {
                  type: 'structure',
                  members: {
                    ProjectArn: {},
                    ProjectName: {},
                    CreationTimestamp: {
                      type: 'timestamp'
                    },
                    Datasets: {
                      type: 'list',
                      member: {
                        shape: 'Sc'
                      }
                    }
                  }
                }
              }
            }
          },
          DetectAnomalies: {
            http: {
              requestUri: '/2020-11-20/projects/{projectName}/models/{modelVersion}/detect'
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'ModelVersion', 'Body', 'ContentType'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                ModelVersion: {
                  location: 'uri',
                  locationName: 'modelVersion'
                },
                Body: {
                  type: 'blob',
                  requiresLength: true,
                  streaming: true
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                }
              },
              payload: 'Body'
            },
            output: {
              type: 'structure',
              members: {
                DetectAnomalyResult: {
                  type: 'structure',
                  members: {
                    Source: {
                      type: 'structure',
                      members: {
                        Type: {}
                      }
                    },
                    IsAnomalous: {
                      type: 'boolean'
                    },
                    Confidence: {
                      type: 'float'
                    },
                    Anomalies: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          PixelAnomaly: {
                            type: 'structure',
                            members: {
                              TotalPercentageArea: {
                                type: 'float'
                              },
                              Color: {}
                            }
                          }
                        }
                      }
                    },
                    AnomalyMask: {
                      type: 'blob'
                    }
                  }
                }
              }
            }
          },
          ListDatasetEntries: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/projects/{projectName}/datasets/{datasetType}/entries'
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'DatasetType'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                DatasetType: {
                  location: 'uri',
                  locationName: 'datasetType'
                },
                Labeled: {
                  location: 'querystring',
                  locationName: 'labeled',
                  type: 'boolean'
                },
                AnomalyClass: {
                  location: 'querystring',
                  locationName: 'anomalyClass'
                },
                BeforeCreationDate: {
                  location: 'querystring',
                  locationName: 'createdBefore',
                  type: 'timestamp'
                },
                AfterCreationDate: {
                  location: 'querystring',
                  locationName: 'createdAfter',
                  type: 'timestamp'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                SourceRefContains: {
                  location: 'querystring',
                  locationName: 'sourceRefContains'
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
          ListModelPackagingJobs: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/projects/{projectName}/modelpackagingjobs'
            },
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelPackagingJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobName: {},
                      ProjectName: {},
                      ModelVersion: {},
                      ModelPackagingJobDescription: {},
                      ModelPackagingMethod: {},
                      Status: {},
                      StatusMessage: {},
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
          ListModels: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/projects/{projectName}/models'
            },
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Models: {
                  type: 'list',
                  member: {
                    shape: 'Sr'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProjects: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/projects'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Projects: {
                  type: 'list',
                  member: {
                    shape: 'S10'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/2020-11-20/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
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
          StartModel: {
            http: {
              requestUri: '/2020-11-20/projects/{projectName}/models/{modelVersion}/start',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'ModelVersion', 'MinInferenceUnits'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                ModelVersion: {
                  location: 'uri',
                  locationName: 'modelVersion'
                },
                MinInferenceUnits: {
                  type: 'integer'
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
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
          StartModelPackagingJob: {
            http: {
              requestUri: '/2020-11-20/projects/{projectName}/modelpackagingjobs'
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'ModelVersion', 'Configuration'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                ModelVersion: {},
                JobName: {},
                Configuration: {
                  shape: 'S1n'
                },
                Description: {},
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobName: {}
              }
            }
          },
          StopModel: {
            http: {
              requestUri: '/2020-11-20/projects/{projectName}/models/{modelVersion}/stop',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'ModelVersion'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                ModelVersion: {
                  location: 'uri',
                  locationName: 'modelVersion'
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
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
          TagResource: {
            http: {
              requestUri: '/2020-11-20/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
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
            http: {
              method: 'DELETE',
              requestUri: '/2020-11-20/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
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
            http: {
              method: 'PATCH',
              requestUri: '/2020-11-20/projects/{projectName}/datasets/{datasetType}/entries',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ProjectName', 'DatasetType', 'Changes'],
              members: {
                ProjectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                DatasetType: {
                  location: 'uri',
                  locationName: 'datasetType'
                },
                Changes: {
                  type: 'blob'
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          }
        },
        shapes: {
          Sc: {
            type: 'structure',
            members: {
              DatasetType: {},
              CreationTimestamp: {
                type: 'timestamp'
              },
              Status: {},
              StatusMessage: {}
            }
          },
          Si: {
            type: 'structure',
            required: ['S3Location'],
            members: {
              S3Location: {
                shape: 'Sj'
              }
            }
          },
          Sj: {
            type: 'structure',
            required: ['Bucket'],
            members: {
              Bucket: {},
              Prefix: {}
            }
          },
          Sm: {
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
          Sr: {
            type: 'structure',
            members: {
              CreationTimestamp: {
                type: 'timestamp'
              },
              ModelVersion: {},
              ModelArn: {},
              Description: {},
              Status: {},
              StatusMessage: {},
              Performance: {
                shape: 'Sw'
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              F1Score: {
                type: 'float'
              },
              Recall: {
                type: 'float'
              },
              Precision: {
                type: 'float'
              }
            }
          },
          S10: {
            type: 'structure',
            members: {
              ProjectArn: {},
              ProjectName: {},
              CreationTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S1h: {
            type: 'structure',
            required: ['Bucket', 'Key'],
            members: {
              Bucket: {},
              Key: {}
            }
          },
          S1n: {
            type: 'structure',
            required: ['Greengrass'],
            members: {
              Greengrass: {
                type: 'structure',
                required: ['S3OutputLocation', 'ComponentName'],
                members: {
                  CompilerOptions: {},
                  TargetDevice: {},
                  TargetPlatform: {
                    type: 'structure',
                    required: ['Os', 'Arch'],
                    members: {
                      Os: {},
                      Arch: {},
                      Accelerator: {}
                    }
                  },
                  S3OutputLocation: {
                    shape: 'Sj'
                  },
                  ComponentName: {},
                  ComponentVersion: {},
                  ComponentDescription: {},
                  Tags: {
                    shape: 'Sm'
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
//# sourceMappingURL=deeb0e0ee5583c2387610a8b0aa06fa3a7813903.js.map