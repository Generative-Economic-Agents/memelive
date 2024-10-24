System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-04-20',
          endpointPrefix: 'bedrock',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Bedrock',
          serviceId: 'Bedrock',
          signatureVersion: 'v4',
          signingName: 'bedrock',
          uid: 'bedrock-2023-04-20'
        },
        operations: {
          CreateEvaluationJob: {
            http: {
              requestUri: '/evaluation-jobs',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['jobName', 'roleArn', 'evaluationConfig', 'inferenceConfig', 'outputDataConfig'],
              members: {
                jobName: {},
                jobDescription: {
                  shape: 'S3'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                roleArn: {},
                customerEncryptionKeyId: {},
                jobTags: {
                  shape: 'S7'
                },
                evaluationConfig: {
                  shape: 'Sb'
                },
                inferenceConfig: {
                  shape: 'Su'
                },
                outputDataConfig: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobArn'],
              members: {
                jobArn: {}
              }
            },
            idempotent: true
          },
          CreateGuardrail: {
            http: {
              requestUri: '/guardrails',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['name', 'blockedInputMessaging', 'blockedOutputsMessaging'],
              members: {
                name: {
                  shape: 'S14'
                },
                description: {
                  shape: 'S15'
                },
                topicPolicyConfig: {
                  shape: 'S16'
                },
                contentPolicyConfig: {
                  shape: 'S1e'
                },
                wordPolicyConfig: {
                  shape: 'S1j'
                },
                sensitiveInformationPolicyConfig: {
                  shape: 'S1q'
                },
                blockedInputMessaging: {
                  shape: 'S20'
                },
                blockedOutputsMessaging: {
                  shape: 'S20'
                },
                kmsKeyId: {},
                tags: {
                  shape: 'S7'
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['guardrailId', 'guardrailArn', 'version', 'createdAt'],
              members: {
                guardrailId: {},
                guardrailArn: {},
                version: {},
                createdAt: {
                  shape: 'S25'
                }
              }
            }
          },
          CreateGuardrailVersion: {
            http: {
              requestUri: '/guardrails/{guardrailIdentifier}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['guardrailIdentifier'],
              members: {
                guardrailIdentifier: {
                  location: 'uri',
                  locationName: 'guardrailIdentifier'
                },
                description: {
                  shape: 'S15'
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['guardrailId', 'version'],
              members: {
                guardrailId: {},
                version: {}
              }
            }
          },
          CreateModelCustomizationJob: {
            http: {
              requestUri: '/model-customization-jobs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['jobName', 'customModelName', 'roleArn', 'baseModelIdentifier', 'trainingDataConfig', 'outputDataConfig', 'hyperParameters'],
              members: {
                jobName: {},
                customModelName: {},
                roleArn: {},
                clientRequestToken: {
                  idempotencyToken: true
                },
                baseModelIdentifier: {},
                customizationType: {},
                customModelKmsKeyId: {},
                jobTags: {
                  shape: 'S7'
                },
                customModelTags: {
                  shape: 'S7'
                },
                trainingDataConfig: {
                  shape: 'S2f'
                },
                validationDataConfig: {
                  shape: 'S2g'
                },
                outputDataConfig: {
                  shape: 'S2j'
                },
                hyperParameters: {
                  shape: 'S2k'
                },
                vpcConfig: {
                  shape: 'S2m'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobArn'],
              members: {
                jobArn: {}
              }
            },
            idempotent: true
          },
          CreateProvisionedModelThroughput: {
            http: {
              requestUri: '/provisioned-model-throughput',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['modelUnits', 'provisionedModelName', 'modelId'],
              members: {
                clientRequestToken: {
                  idempotencyToken: true
                },
                modelUnits: {
                  type: 'integer'
                },
                provisionedModelName: {},
                modelId: {},
                commitmentDuration: {},
                tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['provisionedModelArn'],
              members: {
                provisionedModelArn: {}
              }
            },
            idempotent: true
          },
          DeleteCustomModel: {
            http: {
              method: 'DELETE',
              requestUri: '/custom-models/{modelIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['modelIdentifier'],
              members: {
                modelIdentifier: {
                  location: 'uri',
                  locationName: 'modelIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteGuardrail: {
            http: {
              method: 'DELETE',
              requestUri: '/guardrails/{guardrailIdentifier}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['guardrailIdentifier'],
              members: {
                guardrailIdentifier: {
                  location: 'uri',
                  locationName: 'guardrailIdentifier'
                },
                guardrailVersion: {
                  location: 'querystring',
                  locationName: 'guardrailVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteModelInvocationLoggingConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/logging/modelinvocations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteProvisionedModelThroughput: {
            http: {
              method: 'DELETE',
              requestUri: '/provisioned-model-throughput/{provisionedModelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['provisionedModelId'],
              members: {
                provisionedModelId: {
                  location: 'uri',
                  locationName: 'provisionedModelId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetCustomModel: {
            http: {
              method: 'GET',
              requestUri: '/custom-models/{modelIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['modelIdentifier'],
              members: {
                modelIdentifier: {
                  location: 'uri',
                  locationName: 'modelIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['modelArn', 'modelName', 'jobArn', 'baseModelArn', 'trainingDataConfig', 'outputDataConfig', 'creationTime'],
              members: {
                modelArn: {},
                modelName: {},
                jobName: {},
                jobArn: {},
                baseModelArn: {},
                customizationType: {},
                modelKmsKeyArn: {},
                hyperParameters: {
                  shape: 'S2k'
                },
                trainingDataConfig: {
                  shape: 'S2f'
                },
                validationDataConfig: {
                  shape: 'S2g'
                },
                outputDataConfig: {
                  shape: 'S2j'
                },
                trainingMetrics: {
                  shape: 'S3d'
                },
                validationMetrics: {
                  shape: 'S3f'
                },
                creationTime: {
                  shape: 'S25'
                }
              }
            }
          },
          GetEvaluationJob: {
            http: {
              method: 'GET',
              requestUri: '/evaluation-jobs/{jobIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobIdentifier'],
              members: {
                jobIdentifier: {
                  shape: 'S3i',
                  location: 'uri',
                  locationName: 'jobIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobName', 'status', 'jobArn', 'roleArn', 'jobType', 'evaluationConfig', 'inferenceConfig', 'outputDataConfig', 'creationTime'],
              members: {
                jobName: {},
                status: {},
                jobArn: {},
                jobDescription: {
                  shape: 'S3'
                },
                roleArn: {},
                customerEncryptionKeyId: {},
                jobType: {},
                evaluationConfig: {
                  shape: 'Sb'
                },
                inferenceConfig: {
                  shape: 'Su'
                },
                outputDataConfig: {
                  shape: 'S10'
                },
                creationTime: {
                  shape: 'S25'
                },
                lastModifiedTime: {
                  shape: 'S25'
                },
                failureMessages: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          GetFoundationModel: {
            http: {
              method: 'GET',
              requestUri: '/foundation-models/{modelIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['modelIdentifier'],
              members: {
                modelIdentifier: {
                  location: 'uri',
                  locationName: 'modelIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                modelDetails: {
                  type: 'structure',
                  required: ['modelArn', 'modelId'],
                  members: {
                    modelArn: {},
                    modelId: {},
                    modelName: {},
                    providerName: {},
                    inputModalities: {
                      shape: 'S3u'
                    },
                    outputModalities: {
                      shape: 'S3u'
                    },
                    responseStreamingSupported: {
                      type: 'boolean'
                    },
                    customizationsSupported: {
                      shape: 'S3x'
                    },
                    inferenceTypesSupported: {
                      shape: 'S3z'
                    },
                    modelLifecycle: {
                      shape: 'S41'
                    }
                  }
                }
              }
            }
          },
          GetGuardrail: {
            http: {
              method: 'GET',
              requestUri: '/guardrails/{guardrailIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['guardrailIdentifier'],
              members: {
                guardrailIdentifier: {
                  location: 'uri',
                  locationName: 'guardrailIdentifier'
                },
                guardrailVersion: {
                  location: 'querystring',
                  locationName: 'guardrailVersion'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'guardrailId', 'guardrailArn', 'version', 'status', 'createdAt', 'updatedAt', 'blockedInputMessaging', 'blockedOutputsMessaging'],
              members: {
                name: {
                  shape: 'S14'
                },
                description: {
                  shape: 'S15'
                },
                guardrailId: {},
                guardrailArn: {},
                version: {},
                status: {},
                topicPolicy: {
                  type: 'structure',
                  required: ['topics'],
                  members: {
                    topics: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'definition'],
                        members: {
                          name: {
                            shape: 'S19'
                          },
                          definition: {
                            shape: 'S1a'
                          },
                          examples: {
                            shape: 'S1b'
                          },
                          type: {}
                        }
                      }
                    }
                  }
                },
                contentPolicy: {
                  type: 'structure',
                  members: {
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['type', 'inputStrength', 'outputStrength'],
                        members: {
                          type: {},
                          inputStrength: {},
                          outputStrength: {}
                        }
                      }
                    }
                  }
                },
                wordPolicy: {
                  type: 'structure',
                  members: {
                    words: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['text'],
                        members: {
                          text: {}
                        }
                      }
                    },
                    managedWordLists: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['type'],
                        members: {
                          type: {}
                        }
                      }
                    }
                  }
                },
                sensitiveInformationPolicy: {
                  type: 'structure',
                  members: {
                    piiEntities: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['type', 'action'],
                        members: {
                          type: {},
                          action: {}
                        }
                      }
                    },
                    regexes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'pattern', 'action'],
                        members: {
                          name: {},
                          description: {},
                          pattern: {},
                          action: {}
                        }
                      }
                    }
                  }
                },
                createdAt: {
                  shape: 'S25'
                },
                updatedAt: {
                  shape: 'S25'
                },
                statusReasons: {
                  type: 'list',
                  member: {
                    type: 'string',
                    sensitive: true
                  }
                },
                failureRecommendations: {
                  type: 'list',
                  member: {
                    type: 'string',
                    sensitive: true
                  }
                },
                blockedInputMessaging: {
                  shape: 'S20'
                },
                blockedOutputsMessaging: {
                  shape: 'S20'
                },
                kmsKeyArn: {}
              }
            }
          },
          GetModelCustomizationJob: {
            http: {
              method: 'GET',
              requestUri: '/model-customization-jobs/{jobIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobIdentifier'],
              members: {
                jobIdentifier: {
                  location: 'uri',
                  locationName: 'jobIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobArn', 'jobName', 'outputModelName', 'roleArn', 'creationTime', 'baseModelArn', 'hyperParameters', 'trainingDataConfig', 'validationDataConfig', 'outputDataConfig'],
              members: {
                jobArn: {},
                jobName: {},
                outputModelName: {},
                outputModelArn: {},
                clientRequestToken: {},
                roleArn: {},
                status: {},
                failureMessage: {},
                creationTime: {
                  shape: 'S25'
                },
                lastModifiedTime: {
                  shape: 'S25'
                },
                endTime: {
                  shape: 'S25'
                },
                baseModelArn: {},
                hyperParameters: {
                  shape: 'S2k'
                },
                trainingDataConfig: {
                  shape: 'S2f'
                },
                validationDataConfig: {
                  shape: 'S2g'
                },
                outputDataConfig: {
                  shape: 'S2j'
                },
                customizationType: {},
                outputModelKmsKeyArn: {},
                trainingMetrics: {
                  shape: 'S3d'
                },
                validationMetrics: {
                  shape: 'S3f'
                },
                vpcConfig: {
                  shape: 'S2m'
                }
              }
            }
          },
          GetModelInvocationLoggingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/logging/modelinvocations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                loggingConfig: {
                  shape: 'S52'
                }
              }
            }
          },
          GetProvisionedModelThroughput: {
            http: {
              method: 'GET',
              requestUri: '/provisioned-model-throughput/{provisionedModelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['provisionedModelId'],
              members: {
                provisionedModelId: {
                  location: 'uri',
                  locationName: 'provisionedModelId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['modelUnits', 'desiredModelUnits', 'provisionedModelName', 'provisionedModelArn', 'modelArn', 'desiredModelArn', 'foundationModelArn', 'status', 'creationTime', 'lastModifiedTime'],
              members: {
                modelUnits: {
                  type: 'integer'
                },
                desiredModelUnits: {
                  type: 'integer'
                },
                provisionedModelName: {},
                provisionedModelArn: {},
                modelArn: {},
                desiredModelArn: {},
                foundationModelArn: {},
                status: {},
                creationTime: {
                  shape: 'S25'
                },
                lastModifiedTime: {
                  shape: 'S25'
                },
                failureMessage: {},
                commitmentDuration: {},
                commitmentExpirationTime: {
                  shape: 'S25'
                }
              }
            }
          },
          ListCustomModels: {
            http: {
              method: 'GET',
              requestUri: '/custom-models',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                creationTimeBefore: {
                  shape: 'S25',
                  location: 'querystring',
                  locationName: 'creationTimeBefore'
                },
                creationTimeAfter: {
                  shape: 'S25',
                  location: 'querystring',
                  locationName: 'creationTimeAfter'
                },
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                },
                baseModelArnEquals: {
                  location: 'querystring',
                  locationName: 'baseModelArnEquals'
                },
                foundationModelArnEquals: {
                  location: 'querystring',
                  locationName: 'foundationModelArnEquals'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                modelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['modelArn', 'modelName', 'creationTime', 'baseModelArn', 'baseModelName'],
                    members: {
                      modelArn: {},
                      modelName: {},
                      creationTime: {
                        shape: 'S25'
                      },
                      baseModelArn: {},
                      baseModelName: {},
                      customizationType: {}
                    }
                  }
                }
              }
            }
          },
          ListEvaluationJobs: {
            http: {
              method: 'GET',
              requestUri: '/evaluation-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                creationTimeAfter: {
                  shape: 'S25',
                  location: 'querystring',
                  locationName: 'creationTimeAfter'
                },
                creationTimeBefore: {
                  shape: 'S25',
                  location: 'querystring',
                  locationName: 'creationTimeBefore'
                },
                statusEquals: {
                  location: 'querystring',
                  locationName: 'statusEquals'
                },
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                jobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobArn', 'jobName', 'status', 'creationTime', 'jobType', 'evaluationTaskTypes', 'modelIdentifiers'],
                    members: {
                      jobArn: {},
                      jobName: {},
                      status: {},
                      creationTime: {
                        shape: 'S25'
                      },
                      jobType: {},
                      evaluationTaskTypes: {
                        type: 'list',
                        member: {}
                      },
                      modelIdentifiers: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          ListFoundationModels: {
            http: {
              method: 'GET',
              requestUri: '/foundation-models',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                byProvider: {
                  location: 'querystring',
                  locationName: 'byProvider'
                },
                byCustomizationType: {
                  location: 'querystring',
                  locationName: 'byCustomizationType'
                },
                byOutputModality: {
                  location: 'querystring',
                  locationName: 'byOutputModality'
                },
                byInferenceType: {
                  location: 'querystring',
                  locationName: 'byInferenceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                modelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['modelArn', 'modelId'],
                    members: {
                      modelArn: {},
                      modelId: {},
                      modelName: {},
                      providerName: {},
                      inputModalities: {
                        shape: 'S3u'
                      },
                      outputModalities: {
                        shape: 'S3u'
                      },
                      responseStreamingSupported: {
                        type: 'boolean'
                      },
                      customizationsSupported: {
                        shape: 'S3x'
                      },
                      inferenceTypesSupported: {
                        shape: 'S3z'
                      },
                      modelLifecycle: {
                        shape: 'S41'
                      }
                    }
                  }
                }
              }
            }
          },
          ListGuardrails: {
            http: {
              method: 'GET',
              requestUri: '/guardrails',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                guardrailIdentifier: {
                  location: 'querystring',
                  locationName: 'guardrailIdentifier'
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
              required: ['guardrails'],
              members: {
                guardrails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'status', 'name', 'version', 'createdAt', 'updatedAt'],
                    members: {
                      id: {},
                      arn: {},
                      status: {},
                      name: {
                        shape: 'S14'
                      },
                      description: {
                        shape: 'S15'
                      },
                      version: {},
                      createdAt: {
                        shape: 'S25'
                      },
                      updatedAt: {
                        shape: 'S25'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListModelCustomizationJobs: {
            http: {
              method: 'GET',
              requestUri: '/model-customization-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                creationTimeAfter: {
                  shape: 'S25',
                  location: 'querystring',
                  locationName: 'creationTimeAfter'
                },
                creationTimeBefore: {
                  shape: 'S25',
                  location: 'querystring',
                  locationName: 'creationTimeBefore'
                },
                statusEquals: {
                  location: 'querystring',
                  locationName: 'statusEquals'
                },
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                modelCustomizationJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobArn', 'baseModelArn', 'jobName', 'status', 'creationTime'],
                    members: {
                      jobArn: {},
                      baseModelArn: {},
                      jobName: {},
                      status: {},
                      lastModifiedTime: {
                        shape: 'S25'
                      },
                      creationTime: {
                        shape: 'S25'
                      },
                      endTime: {
                        shape: 'S25'
                      },
                      customModelArn: {},
                      customModelName: {},
                      customizationType: {}
                    }
                  }
                }
              }
            }
          },
          ListProvisionedModelThroughputs: {
            http: {
              method: 'GET',
              requestUri: '/provisioned-model-throughputs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                creationTimeAfter: {
                  shape: 'S25',
                  location: 'querystring',
                  locationName: 'creationTimeAfter'
                },
                creationTimeBefore: {
                  shape: 'S25',
                  location: 'querystring',
                  locationName: 'creationTimeBefore'
                },
                statusEquals: {
                  location: 'querystring',
                  locationName: 'statusEquals'
                },
                modelArnEquals: {
                  location: 'querystring',
                  locationName: 'modelArnEquals'
                },
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                provisionedModelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['provisionedModelName', 'provisionedModelArn', 'modelArn', 'desiredModelArn', 'foundationModelArn', 'modelUnits', 'desiredModelUnits', 'status', 'creationTime', 'lastModifiedTime'],
                    members: {
                      provisionedModelName: {},
                      provisionedModelArn: {},
                      modelArn: {},
                      desiredModelArn: {},
                      foundationModelArn: {},
                      modelUnits: {
                        type: 'integer'
                      },
                      desiredModelUnits: {
                        type: 'integer'
                      },
                      status: {},
                      commitmentDuration: {},
                      commitmentExpirationTime: {
                        shape: 'S25'
                      },
                      creationTime: {
                        shape: 'S25'
                      },
                      lastModifiedTime: {
                        shape: 'S25'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/listTagsForResource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceARN'],
              members: {
                resourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S7'
                }
              }
            }
          },
          PutModelInvocationLoggingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/logging/modelinvocations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['loggingConfig'],
              members: {
                loggingConfig: {
                  shape: 'S52'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          StopEvaluationJob: {
            http: {
              requestUri: '/evaluation-job/{jobIdentifier}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobIdentifier'],
              members: {
                jobIdentifier: {
                  shape: 'S3i',
                  location: 'uri',
                  locationName: 'jobIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopModelCustomizationJob: {
            http: {
              requestUri: '/model-customization-jobs/{jobIdentifier}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobIdentifier'],
              members: {
                jobIdentifier: {
                  location: 'uri',
                  locationName: 'jobIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tagResource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceARN', 'tags'],
              members: {
                resourceARN: {},
                tags: {
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
            http: {
              requestUri: '/untagResource',
              responseCode: 200
            },
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
          UpdateGuardrail: {
            http: {
              method: 'PUT',
              requestUri: '/guardrails/{guardrailIdentifier}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['guardrailIdentifier', 'name', 'blockedInputMessaging', 'blockedOutputsMessaging'],
              members: {
                guardrailIdentifier: {
                  location: 'uri',
                  locationName: 'guardrailIdentifier'
                },
                name: {
                  shape: 'S14'
                },
                description: {
                  shape: 'S15'
                },
                topicPolicyConfig: {
                  shape: 'S16'
                },
                contentPolicyConfig: {
                  shape: 'S1e'
                },
                wordPolicyConfig: {
                  shape: 'S1j'
                },
                sensitiveInformationPolicyConfig: {
                  shape: 'S1q'
                },
                blockedInputMessaging: {
                  shape: 'S20'
                },
                blockedOutputsMessaging: {
                  shape: 'S20'
                },
                kmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['guardrailId', 'guardrailArn', 'version', 'updatedAt'],
              members: {
                guardrailId: {},
                guardrailArn: {},
                version: {},
                updatedAt: {
                  shape: 'S25'
                }
              }
            },
            idempotent: true
          },
          UpdateProvisionedModelThroughput: {
            http: {
              method: 'PATCH',
              requestUri: '/provisioned-model-throughput/{provisionedModelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['provisionedModelId'],
              members: {
                provisionedModelId: {
                  location: 'uri',
                  locationName: 'provisionedModelId'
                },
                desiredProvisionedModelName: {},
                desiredModelId: {}
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
          S3: {
            type: 'string',
            sensitive: true
          },
          S7: {
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
          Sb: {
            type: 'structure',
            members: {
              automated: {
                type: 'structure',
                required: ['datasetMetricConfigs'],
                members: {
                  datasetMetricConfigs: {
                    shape: 'Sd'
                  }
                }
              },
              human: {
                type: 'structure',
                required: ['datasetMetricConfigs'],
                members: {
                  humanWorkflowConfig: {
                    type: 'structure',
                    required: ['flowDefinitionArn'],
                    members: {
                      flowDefinitionArn: {},
                      instructions: {
                        type: 'string',
                        sensitive: true
                      }
                    }
                  },
                  customMetrics: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['name', 'ratingMethod'],
                      members: {
                        name: {
                          shape: 'Sl'
                        },
                        description: {
                          type: 'string',
                          sensitive: true
                        },
                        ratingMethod: {}
                      }
                    }
                  },
                  datasetMetricConfigs: {
                    shape: 'Sd'
                  }
                }
              }
            },
            union: true
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['taskType', 'dataset', 'metricNames'],
              members: {
                taskType: {},
                dataset: {
                  type: 'structure',
                  required: ['name'],
                  members: {
                    name: {
                      type: 'string',
                      sensitive: true
                    },
                    datasetLocation: {
                      type: 'structure',
                      members: {
                        s3Uri: {}
                      },
                      union: true
                    }
                  }
                },
                metricNames: {
                  type: 'list',
                  member: {
                    shape: 'Sl'
                  }
                }
              }
            }
          },
          Sl: {
            type: 'string',
            sensitive: true
          },
          Su: {
            type: 'structure',
            members: {
              models: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    bedrockModel: {
                      type: 'structure',
                      required: ['modelIdentifier', 'inferenceParams'],
                      members: {
                        modelIdentifier: {},
                        inferenceParams: {
                          type: 'string',
                          sensitive: true
                        }
                      }
                    }
                  },
                  union: true
                }
              }
            },
            union: true
          },
          S10: {
            type: 'structure',
            required: ['s3Uri'],
            members: {
              s3Uri: {}
            }
          },
          S14: {
            type: 'string',
            sensitive: true
          },
          S15: {
            type: 'string',
            sensitive: true
          },
          S16: {
            type: 'structure',
            required: ['topicsConfig'],
            members: {
              topicsConfig: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'definition', 'type'],
                  members: {
                    name: {
                      shape: 'S19'
                    },
                    definition: {
                      shape: 'S1a'
                    },
                    examples: {
                      shape: 'S1b'
                    },
                    type: {}
                  }
                }
              }
            }
          },
          S19: {
            type: 'string',
            sensitive: true
          },
          S1a: {
            type: 'string',
            sensitive: true
          },
          S1b: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            }
          },
          S1e: {
            type: 'structure',
            required: ['filtersConfig'],
            members: {
              filtersConfig: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['type', 'inputStrength', 'outputStrength'],
                  members: {
                    type: {},
                    inputStrength: {},
                    outputStrength: {}
                  }
                }
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              wordsConfig: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['text'],
                  members: {
                    text: {}
                  }
                }
              },
              managedWordListsConfig: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['type'],
                  members: {
                    type: {}
                  }
                }
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              piiEntitiesConfig: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['type', 'action'],
                  members: {
                    type: {},
                    action: {}
                  }
                }
              },
              regexesConfig: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'pattern', 'action'],
                  members: {
                    name: {},
                    description: {},
                    pattern: {},
                    action: {}
                  }
                }
              }
            }
          },
          S20: {
            type: 'string',
            sensitive: true
          },
          S25: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S2f: {
            type: 'structure',
            required: ['s3Uri'],
            members: {
              s3Uri: {}
            }
          },
          S2g: {
            type: 'structure',
            required: ['validators'],
            members: {
              validators: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['s3Uri'],
                  members: {
                    s3Uri: {}
                  }
                }
              }
            }
          },
          S2j: {
            type: 'structure',
            required: ['s3Uri'],
            members: {
              s3Uri: {}
            }
          },
          S2k: {
            type: 'map',
            key: {},
            value: {}
          },
          S2m: {
            type: 'structure',
            required: ['subnetIds', 'securityGroupIds'],
            members: {
              subnetIds: {
                type: 'list',
                member: {}
              },
              securityGroupIds: {
                type: 'list',
                member: {}
              }
            }
          },
          S3d: {
            type: 'structure',
            members: {
              trainingLoss: {
                type: 'float'
              }
            }
          },
          S3f: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                validationLoss: {
                  type: 'float'
                }
              }
            }
          },
          S3i: {
            type: 'string',
            sensitive: true
          },
          S3u: {
            type: 'list',
            member: {}
          },
          S3x: {
            type: 'list',
            member: {}
          },
          S3z: {
            type: 'list',
            member: {}
          },
          S41: {
            type: 'structure',
            required: ['status'],
            members: {
              status: {}
            }
          },
          S52: {
            type: 'structure',
            members: {
              cloudWatchConfig: {
                type: 'structure',
                required: ['logGroupName', 'roleArn'],
                members: {
                  logGroupName: {},
                  roleArn: {},
                  largeDataDeliveryS3Config: {
                    shape: 'S55'
                  }
                }
              },
              s3Config: {
                shape: 'S55'
              },
              textDataDeliveryEnabled: {
                type: 'boolean'
              },
              imageDataDeliveryEnabled: {
                type: 'boolean'
              },
              embeddingDataDeliveryEnabled: {
                type: 'boolean'
              }
            }
          },
          S55: {
            type: 'structure',
            required: ['bucketName'],
            members: {
              bucketName: {},
              keyPrefix: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6a0af8422d37f3a882a025332846a49f5c572a80.js.map