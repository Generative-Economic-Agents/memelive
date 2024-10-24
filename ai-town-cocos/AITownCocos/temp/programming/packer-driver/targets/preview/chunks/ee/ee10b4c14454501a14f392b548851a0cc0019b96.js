System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-09-06',
          endpointPrefix: 'cleanrooms-ml',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Clean Rooms ML',
          serviceId: 'CleanRoomsML',
          signatureVersion: 'v4',
          signingName: 'cleanrooms-ml',
          uid: 'cleanroomsml-2023-09-06'
        },
        operations: {
          CreateAudienceModel: {
            http: {
              requestUri: '/audience-model',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'trainingDatasetArn'],
              members: {
                description: {},
                kmsKeyArn: {},
                name: {},
                tags: {
                  shape: 'S5'
                },
                trainingDataEndTime: {
                  shape: 'S8'
                },
                trainingDataStartTime: {
                  shape: 'S8'
                },
                trainingDatasetArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['audienceModelArn'],
              members: {
                audienceModelArn: {}
              }
            },
            idempotent: true
          },
          CreateConfiguredAudienceModel: {
            http: {
              requestUri: '/configured-audience-model',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['audienceModelArn', 'name', 'outputConfig', 'sharedAudienceMetrics'],
              members: {
                audienceModelArn: {},
                audienceSizeConfig: {
                  shape: 'Sd'
                },
                childResourceTagOnCreatePolicy: {},
                description: {},
                minMatchingSeedSize: {
                  type: 'integer'
                },
                name: {},
                outputConfig: {
                  shape: 'Sj'
                },
                sharedAudienceMetrics: {
                  shape: 'So'
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredAudienceModelArn'],
              members: {
                configuredAudienceModelArn: {}
              }
            },
            idempotent: true
          },
          CreateTrainingDataset: {
            http: {
              requestUri: '/training-dataset',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'roleArn', 'trainingData'],
              members: {
                description: {},
                name: {},
                roleArn: {},
                tags: {
                  shape: 'S5'
                },
                trainingData: {
                  type: 'list',
                  member: {
                    shape: 'Su'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['trainingDatasetArn'],
              members: {
                trainingDatasetArn: {}
              }
            },
            idempotent: true
          },
          DeleteAudienceGenerationJob: {
            http: {
              method: 'DELETE',
              requestUri: '/audience-generation-job/{audienceGenerationJobArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['audienceGenerationJobArn'],
              members: {
                audienceGenerationJobArn: {
                  location: 'uri',
                  locationName: 'audienceGenerationJobArn'
                }
              }
            },
            idempotent: true
          },
          DeleteAudienceModel: {
            http: {
              method: 'DELETE',
              requestUri: '/audience-model/{audienceModelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['audienceModelArn'],
              members: {
                audienceModelArn: {
                  location: 'uri',
                  locationName: 'audienceModelArn'
                }
              }
            },
            idempotent: true
          },
          DeleteConfiguredAudienceModel: {
            http: {
              method: 'DELETE',
              requestUri: '/configured-audience-model/{configuredAudienceModelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelArn'],
              members: {
                configuredAudienceModelArn: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelArn'
                }
              }
            },
            idempotent: true
          },
          DeleteConfiguredAudienceModelPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/configured-audience-model/{configuredAudienceModelArn}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelArn'],
              members: {
                configuredAudienceModelArn: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelArn'
                }
              }
            },
            idempotent: true
          },
          DeleteTrainingDataset: {
            http: {
              method: 'DELETE',
              requestUri: '/training-dataset/{trainingDatasetArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['trainingDatasetArn'],
              members: {
                trainingDatasetArn: {
                  location: 'uri',
                  locationName: 'trainingDatasetArn'
                }
              }
            },
            idempotent: true
          },
          GetAudienceGenerationJob: {
            http: {
              method: 'GET',
              requestUri: '/audience-generation-job/{audienceGenerationJobArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['audienceGenerationJobArn'],
              members: {
                audienceGenerationJobArn: {
                  location: 'uri',
                  locationName: 'audienceGenerationJobArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['audienceGenerationJobArn', 'configuredAudienceModelArn', 'createTime', 'name', 'status', 'updateTime'],
              members: {
                audienceGenerationJobArn: {},
                collaborationId: {},
                configuredAudienceModelArn: {},
                createTime: {
                  shape: 'S8'
                },
                description: {},
                includeSeedInOutput: {
                  type: 'boolean'
                },
                metrics: {
                  type: 'structure',
                  required: ['relevanceMetrics'],
                  members: {
                    recallMetric: {
                      type: 'double'
                    },
                    relevanceMetrics: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['audienceSize'],
                        members: {
                          audienceSize: {
                            shape: 'S1m'
                          },
                          score: {
                            type: 'double'
                          }
                        }
                      }
                    }
                  }
                },
                name: {},
                seedAudience: {
                  shape: 'S1n'
                },
                startedBy: {},
                status: {},
                statusDetails: {
                  shape: 'S1p'
                },
                tags: {
                  shape: 'S5'
                },
                updateTime: {
                  shape: 'S8'
                }
              }
            }
          },
          GetAudienceModel: {
            http: {
              method: 'GET',
              requestUri: '/audience-model/{audienceModelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['audienceModelArn'],
              members: {
                audienceModelArn: {
                  location: 'uri',
                  locationName: 'audienceModelArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['audienceModelArn', 'createTime', 'name', 'status', 'trainingDatasetArn', 'updateTime'],
              members: {
                audienceModelArn: {},
                createTime: {
                  shape: 'S8'
                },
                description: {},
                kmsKeyArn: {},
                name: {},
                status: {},
                statusDetails: {
                  shape: 'S1p'
                },
                tags: {
                  shape: 'S5'
                },
                trainingDataEndTime: {
                  shape: 'S8'
                },
                trainingDataStartTime: {
                  shape: 'S8'
                },
                trainingDatasetArn: {},
                updateTime: {
                  shape: 'S8'
                }
              }
            }
          },
          GetConfiguredAudienceModel: {
            http: {
              method: 'GET',
              requestUri: '/configured-audience-model/{configuredAudienceModelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelArn'],
              members: {
                configuredAudienceModelArn: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['audienceModelArn', 'configuredAudienceModelArn', 'createTime', 'name', 'outputConfig', 'sharedAudienceMetrics', 'status', 'updateTime'],
              members: {
                audienceModelArn: {},
                audienceSizeConfig: {
                  shape: 'Sd'
                },
                childResourceTagOnCreatePolicy: {},
                configuredAudienceModelArn: {},
                createTime: {
                  shape: 'S8'
                },
                description: {},
                minMatchingSeedSize: {
                  type: 'integer'
                },
                name: {},
                outputConfig: {
                  shape: 'Sj'
                },
                sharedAudienceMetrics: {
                  shape: 'So'
                },
                status: {},
                tags: {
                  shape: 'S5'
                },
                updateTime: {
                  shape: 'S8'
                }
              }
            }
          },
          GetConfiguredAudienceModelPolicy: {
            http: {
              method: 'GET',
              requestUri: '/configured-audience-model/{configuredAudienceModelArn}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelArn'],
              members: {
                configuredAudienceModelArn: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredAudienceModelArn', 'configuredAudienceModelPolicy', 'policyHash'],
              members: {
                configuredAudienceModelArn: {},
                configuredAudienceModelPolicy: {},
                policyHash: {}
              }
            }
          },
          GetTrainingDataset: {
            http: {
              method: 'GET',
              requestUri: '/training-dataset/{trainingDatasetArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['trainingDatasetArn'],
              members: {
                trainingDatasetArn: {
                  location: 'uri',
                  locationName: 'trainingDatasetArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createTime', 'name', 'roleArn', 'status', 'trainingData', 'trainingDatasetArn', 'updateTime'],
              members: {
                createTime: {
                  shape: 'S8'
                },
                description: {},
                name: {},
                roleArn: {},
                status: {},
                tags: {
                  shape: 'S5'
                },
                trainingData: {
                  type: 'list',
                  member: {
                    shape: 'Su'
                  }
                },
                trainingDatasetArn: {},
                updateTime: {
                  shape: 'S8'
                }
              }
            }
          },
          ListAudienceExportJobs: {
            http: {
              method: 'GET',
              requestUri: '/audience-export-job',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                audienceGenerationJobArn: {
                  location: 'querystring',
                  locationName: 'audienceGenerationJobArn'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['audienceExportJobs'],
              members: {
                audienceExportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['audienceGenerationJobArn', 'audienceSize', 'createTime', 'name', 'status', 'updateTime'],
                    members: {
                      audienceGenerationJobArn: {},
                      audienceSize: {
                        shape: 'S1m'
                      },
                      createTime: {
                        shape: 'S8'
                      },
                      description: {},
                      name: {},
                      outputLocation: {},
                      status: {},
                      statusDetails: {
                        shape: 'S1p'
                      },
                      updateTime: {
                        shape: 'S8'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAudienceGenerationJobs: {
            http: {
              method: 'GET',
              requestUri: '/audience-generation-job',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                collaborationId: {
                  location: 'querystring',
                  locationName: 'collaborationId'
                },
                configuredAudienceModelArn: {
                  location: 'querystring',
                  locationName: 'configuredAudienceModelArn'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['audienceGenerationJobs'],
              members: {
                audienceGenerationJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['audienceGenerationJobArn', 'configuredAudienceModelArn', 'createTime', 'name', 'status', 'updateTime'],
                    members: {
                      audienceGenerationJobArn: {},
                      collaborationId: {},
                      configuredAudienceModelArn: {},
                      createTime: {
                        shape: 'S8'
                      },
                      description: {},
                      name: {},
                      startedBy: {},
                      status: {},
                      updateTime: {
                        shape: 'S8'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAudienceModels: {
            http: {
              method: 'GET',
              requestUri: '/audience-model',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['audienceModels'],
              members: {
                audienceModels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['audienceModelArn', 'createTime', 'name', 'status', 'trainingDatasetArn', 'updateTime'],
                    members: {
                      audienceModelArn: {},
                      createTime: {
                        shape: 'S8'
                      },
                      description: {},
                      name: {},
                      status: {},
                      trainingDatasetArn: {},
                      updateTime: {
                        shape: 'S8'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListConfiguredAudienceModels: {
            http: {
              method: 'GET',
              requestUri: '/configured-audience-model',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredAudienceModels'],
              members: {
                configuredAudienceModels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['audienceModelArn', 'configuredAudienceModelArn', 'createTime', 'name', 'outputConfig', 'status', 'updateTime'],
                    members: {
                      audienceModelArn: {},
                      configuredAudienceModelArn: {},
                      createTime: {
                        shape: 'S8'
                      },
                      description: {},
                      name: {},
                      outputConfig: {
                        shape: 'Sj'
                      },
                      status: {},
                      updateTime: {
                        shape: 'S8'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['tags'],
              members: {
                tags: {
                  shape: 'S5'
                }
              }
            }
          },
          ListTrainingDatasets: {
            http: {
              method: 'GET',
              requestUri: '/training-dataset',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['trainingDatasets'],
              members: {
                nextToken: {},
                trainingDatasets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createTime', 'name', 'status', 'trainingDatasetArn', 'updateTime'],
                    members: {
                      createTime: {
                        shape: 'S8'
                      },
                      description: {},
                      name: {},
                      status: {},
                      trainingDatasetArn: {},
                      updateTime: {
                        shape: 'S8'
                      }
                    }
                  }
                }
              }
            }
          },
          PutConfiguredAudienceModelPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/configured-audience-model/{configuredAudienceModelArn}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelArn', 'configuredAudienceModelPolicy'],
              members: {
                configuredAudienceModelArn: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelArn'
                },
                configuredAudienceModelPolicy: {},
                policyExistenceCondition: {},
                previousPolicyHash: {}
              }
            },
            output: {
              type: 'structure',
              required: ['configuredAudienceModelPolicy', 'policyHash'],
              members: {
                configuredAudienceModelPolicy: {},
                policyHash: {}
              }
            },
            idempotent: true
          },
          StartAudienceExportJob: {
            http: {
              requestUri: '/audience-export-job',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['audienceGenerationJobArn', 'audienceSize', 'name'],
              members: {
                audienceGenerationJobArn: {},
                audienceSize: {
                  shape: 'S1m'
                },
                description: {},
                name: {}
              }
            },
            idempotent: true
          },
          StartAudienceGenerationJob: {
            http: {
              requestUri: '/audience-generation-job',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelArn', 'name', 'seedAudience'],
              members: {
                collaborationId: {},
                configuredAudienceModelArn: {},
                description: {},
                includeSeedInOutput: {
                  type: 'boolean'
                },
                name: {},
                seedAudience: {
                  shape: 'S1n'
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['audienceGenerationJobArn'],
              members: {
                audienceGenerationJobArn: {}
              }
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
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
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tagKeys: {
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
            },
            idempotent: true
          },
          UpdateConfiguredAudienceModel: {
            http: {
              method: 'PATCH',
              requestUri: '/configured-audience-model/{configuredAudienceModelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelArn'],
              members: {
                audienceModelArn: {},
                audienceSizeConfig: {
                  shape: 'Sd'
                },
                configuredAudienceModelArn: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelArn'
                },
                description: {},
                minMatchingSeedSize: {
                  type: 'integer'
                },
                outputConfig: {
                  shape: 'Sj'
                },
                sharedAudienceMetrics: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredAudienceModelArn'],
              members: {
                configuredAudienceModelArn: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {}
          },
          S8: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sd: {
            type: 'structure',
            required: ['audienceSizeBins', 'audienceSizeType'],
            members: {
              audienceSizeBins: {
                type: 'list',
                member: {
                  type: 'integer'
                }
              },
              audienceSizeType: {}
            }
          },
          Sj: {
            type: 'structure',
            required: ['destination', 'roleArn'],
            members: {
              destination: {
                type: 'structure',
                required: ['s3Destination'],
                members: {
                  s3Destination: {
                    shape: 'Sl'
                  }
                }
              },
              roleArn: {}
            }
          },
          Sl: {
            type: 'structure',
            required: ['s3Uri'],
            members: {
              s3Uri: {}
            }
          },
          So: {
            type: 'list',
            member: {}
          },
          Su: {
            type: 'structure',
            required: ['inputConfig', 'type'],
            members: {
              inputConfig: {
                type: 'structure',
                required: ['dataSource', 'schema'],
                members: {
                  dataSource: {
                    type: 'structure',
                    required: ['glueDataSource'],
                    members: {
                      glueDataSource: {
                        type: 'structure',
                        required: ['databaseName', 'tableName'],
                        members: {
                          catalogId: {},
                          databaseName: {},
                          tableName: {}
                        }
                      }
                    }
                  },
                  schema: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['columnName', 'columnTypes'],
                      members: {
                        columnName: {},
                        columnTypes: {
                          type: 'list',
                          member: {}
                        }
                      }
                    }
                  }
                }
              },
              type: {}
            }
          },
          S1m: {
            type: 'structure',
            required: ['type', 'value'],
            members: {
              type: {},
              value: {
                type: 'integer'
              }
            }
          },
          S1n: {
            type: 'structure',
            required: ['dataSource', 'roleArn'],
            members: {
              dataSource: {
                shape: 'Sl'
              },
              roleArn: {}
            }
          },
          S1p: {
            type: 'structure',
            members: {
              message: {},
              statusCode: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ee10b4c14454501a14f392b548851a0cc0019b96.js.map