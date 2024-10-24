System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-12-02',
          endpointPrefix: 'imagebuilder',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'imagebuilder',
          serviceFullName: 'EC2 Image Builder',
          serviceId: 'imagebuilder',
          signatureVersion: 'v4',
          signingName: 'imagebuilder',
          uid: 'imagebuilder-2019-12-02'
        },
        operations: {
          CancelImageCreation: {
            http: {
              method: 'PUT',
              requestUri: '/CancelImageCreation'
            },
            input: {
              type: 'structure',
              required: ['imageBuildVersionArn', 'clientToken'],
              members: {
                imageBuildVersionArn: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                imageBuildVersionArn: {}
              }
            }
          },
          CancelLifecycleExecution: {
            http: {
              method: 'PUT',
              requestUri: '/CancelLifecycleExecution'
            },
            input: {
              type: 'structure',
              required: ['lifecycleExecutionId', 'clientToken'],
              members: {
                lifecycleExecutionId: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecycleExecutionId: {}
              }
            }
          },
          CreateComponent: {
            http: {
              method: 'PUT',
              requestUri: '/CreateComponent'
            },
            input: {
              type: 'structure',
              required: ['name', 'semanticVersion', 'platform', 'clientToken'],
              members: {
                name: {},
                semanticVersion: {},
                description: {},
                changeDescription: {},
                platform: {},
                supportedOsVersions: {
                  shape: 'Sd'
                },
                data: {},
                uri: {},
                kmsKeyId: {},
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                componentBuildVersionArn: {}
              }
            }
          },
          CreateContainerRecipe: {
            http: {
              method: 'PUT',
              requestUri: '/CreateContainerRecipe'
            },
            input: {
              type: 'structure',
              required: ['containerType', 'name', 'semanticVersion', 'components', 'parentImage', 'targetRepository', 'clientToken'],
              members: {
                containerType: {},
                name: {},
                description: {},
                semanticVersion: {},
                components: {
                  shape: 'So'
                },
                instanceConfiguration: {
                  shape: 'Sw'
                },
                dockerfileTemplateData: {},
                dockerfileTemplateUri: {},
                platformOverride: {},
                imageOsVersionOverride: {},
                parentImage: {},
                tags: {
                  shape: 'Sh'
                },
                workingDirectory: {},
                targetRepository: {
                  shape: 'S17'
                },
                kmsKeyId: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                containerRecipeArn: {}
              }
            }
          },
          CreateDistributionConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/CreateDistributionConfiguration'
            },
            input: {
              type: 'structure',
              required: ['name', 'distributions', 'clientToken'],
              members: {
                name: {},
                description: {},
                distributions: {
                  shape: 'S1c'
                },
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                distributionConfigurationArn: {}
              }
            }
          },
          CreateImage: {
            http: {
              method: 'PUT',
              requestUri: '/CreateImage'
            },
            input: {
              type: 'structure',
              required: ['infrastructureConfigurationArn', 'clientToken'],
              members: {
                imageRecipeArn: {},
                containerRecipeArn: {},
                distributionConfigurationArn: {},
                infrastructureConfigurationArn: {},
                imageTestsConfiguration: {
                  shape: 'S28'
                },
                enhancedImageMetadataEnabled: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                },
                imageScanningConfiguration: {
                  shape: 'S2a'
                },
                workflows: {
                  shape: 'S2c'
                },
                executionRole: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                imageBuildVersionArn: {}
              }
            }
          },
          CreateImagePipeline: {
            http: {
              method: 'PUT',
              requestUri: '/CreateImagePipeline'
            },
            input: {
              type: 'structure',
              required: ['name', 'infrastructureConfigurationArn', 'clientToken'],
              members: {
                name: {},
                description: {},
                imageRecipeArn: {},
                containerRecipeArn: {},
                infrastructureConfigurationArn: {},
                distributionConfigurationArn: {},
                imageTestsConfiguration: {
                  shape: 'S28'
                },
                enhancedImageMetadataEnabled: {
                  type: 'boolean'
                },
                schedule: {
                  shape: 'S2p'
                },
                status: {},
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                },
                imageScanningConfiguration: {
                  shape: 'S2a'
                },
                workflows: {
                  shape: 'S2c'
                },
                executionRole: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                imagePipelineArn: {}
              }
            }
          },
          CreateImageRecipe: {
            http: {
              method: 'PUT',
              requestUri: '/CreateImageRecipe'
            },
            input: {
              type: 'structure',
              required: ['name', 'semanticVersion', 'components', 'parentImage', 'clientToken'],
              members: {
                name: {},
                description: {},
                semanticVersion: {},
                components: {
                  shape: 'So'
                },
                parentImage: {},
                blockDeviceMappings: {
                  shape: 'Sx'
                },
                tags: {
                  shape: 'Sh'
                },
                workingDirectory: {},
                additionalInstanceConfiguration: {
                  shape: 'S2w'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                imageRecipeArn: {}
              }
            }
          },
          CreateInfrastructureConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/CreateInfrastructureConfiguration'
            },
            input: {
              type: 'structure',
              required: ['name', 'instanceProfileName', 'clientToken'],
              members: {
                name: {},
                description: {},
                instanceTypes: {
                  shape: 'S31'
                },
                instanceProfileName: {},
                securityGroupIds: {
                  shape: 'S34'
                },
                subnetId: {},
                logging: {
                  shape: 'S35'
                },
                keyPair: {},
                terminateInstanceOnFailure: {
                  type: 'boolean'
                },
                snsTopicArn: {},
                resourceTags: {
                  shape: 'S38'
                },
                instanceMetadataOptions: {
                  shape: 'S39'
                },
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                infrastructureConfigurationArn: {}
              }
            }
          },
          CreateLifecyclePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/CreateLifecyclePolicy'
            },
            input: {
              type: 'structure',
              required: ['name', 'executionRole', 'resourceType', 'policyDetails', 'resourceSelection', 'clientToken'],
              members: {
                name: {},
                description: {},
                status: {},
                executionRole: {},
                resourceType: {},
                policyDetails: {
                  shape: 'S3g'
                },
                resourceSelection: {
                  shape: 'S3u'
                },
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                clientToken: {},
                lifecyclePolicyArn: {}
              }
            }
          },
          CreateWorkflow: {
            http: {
              method: 'PUT',
              requestUri: '/CreateWorkflow'
            },
            input: {
              type: 'structure',
              required: ['name', 'semanticVersion', 'clientToken', 'type'],
              members: {
                name: {},
                semanticVersion: {},
                description: {},
                changeDescription: {},
                data: {},
                uri: {},
                kmsKeyId: {},
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                clientToken: {},
                workflowBuildVersionArn: {}
              }
            }
          },
          DeleteComponent: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteComponent'
            },
            input: {
              type: 'structure',
              required: ['componentBuildVersionArn'],
              members: {
                componentBuildVersionArn: {
                  location: 'querystring',
                  locationName: 'componentBuildVersionArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                componentBuildVersionArn: {}
              }
            }
          },
          DeleteContainerRecipe: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteContainerRecipe'
            },
            input: {
              type: 'structure',
              required: ['containerRecipeArn'],
              members: {
                containerRecipeArn: {
                  location: 'querystring',
                  locationName: 'containerRecipeArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                containerRecipeArn: {}
              }
            }
          },
          DeleteDistributionConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteDistributionConfiguration'
            },
            input: {
              type: 'structure',
              required: ['distributionConfigurationArn'],
              members: {
                distributionConfigurationArn: {
                  location: 'querystring',
                  locationName: 'distributionConfigurationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                distributionConfigurationArn: {}
              }
            }
          },
          DeleteImage: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteImage'
            },
            input: {
              type: 'structure',
              required: ['imageBuildVersionArn'],
              members: {
                imageBuildVersionArn: {
                  location: 'querystring',
                  locationName: 'imageBuildVersionArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageBuildVersionArn: {}
              }
            }
          },
          DeleteImagePipeline: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteImagePipeline'
            },
            input: {
              type: 'structure',
              required: ['imagePipelineArn'],
              members: {
                imagePipelineArn: {
                  location: 'querystring',
                  locationName: 'imagePipelineArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imagePipelineArn: {}
              }
            }
          },
          DeleteImageRecipe: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteImageRecipe'
            },
            input: {
              type: 'structure',
              required: ['imageRecipeArn'],
              members: {
                imageRecipeArn: {
                  location: 'querystring',
                  locationName: 'imageRecipeArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageRecipeArn: {}
              }
            }
          },
          DeleteInfrastructureConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteInfrastructureConfiguration'
            },
            input: {
              type: 'structure',
              required: ['infrastructureConfigurationArn'],
              members: {
                infrastructureConfigurationArn: {
                  location: 'querystring',
                  locationName: 'infrastructureConfigurationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                infrastructureConfigurationArn: {}
              }
            }
          },
          DeleteLifecyclePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteLifecyclePolicy'
            },
            input: {
              type: 'structure',
              required: ['lifecyclePolicyArn'],
              members: {
                lifecyclePolicyArn: {
                  location: 'querystring',
                  locationName: 'lifecyclePolicyArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecyclePolicyArn: {}
              }
            }
          },
          DeleteWorkflow: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteWorkflow'
            },
            input: {
              type: 'structure',
              required: ['workflowBuildVersionArn'],
              members: {
                workflowBuildVersionArn: {
                  location: 'querystring',
                  locationName: 'workflowBuildVersionArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                workflowBuildVersionArn: {}
              }
            }
          },
          GetComponent: {
            http: {
              method: 'GET',
              requestUri: '/GetComponent'
            },
            input: {
              type: 'structure',
              required: ['componentBuildVersionArn'],
              members: {
                componentBuildVersionArn: {
                  location: 'querystring',
                  locationName: 'componentBuildVersionArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                component: {
                  type: 'structure',
                  members: {
                    arn: {},
                    name: {},
                    version: {},
                    description: {},
                    changeDescription: {},
                    type: {},
                    platform: {},
                    supportedOsVersions: {
                      shape: 'Sd'
                    },
                    state: {
                      shape: 'S4r'
                    },
                    parameters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'type'],
                        members: {
                          name: {},
                          type: {},
                          defaultValue: {
                            shape: 'Su'
                          },
                          description: {}
                        }
                      }
                    },
                    owner: {},
                    data: {},
                    kmsKeyId: {},
                    encrypted: {
                      type: 'boolean'
                    },
                    dateCreated: {},
                    tags: {
                      shape: 'Sh'
                    },
                    publisher: {},
                    obfuscate: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          GetComponentPolicy: {
            http: {
              method: 'GET',
              requestUri: '/GetComponentPolicy'
            },
            input: {
              type: 'structure',
              required: ['componentArn'],
              members: {
                componentArn: {
                  location: 'querystring',
                  locationName: 'componentArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                policy: {}
              }
            }
          },
          GetContainerRecipe: {
            http: {
              method: 'GET',
              requestUri: '/GetContainerRecipe'
            },
            input: {
              type: 'structure',
              required: ['containerRecipeArn'],
              members: {
                containerRecipeArn: {
                  location: 'querystring',
                  locationName: 'containerRecipeArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                containerRecipe: {
                  shape: 'S54'
                }
              }
            }
          },
          GetContainerRecipePolicy: {
            http: {
              method: 'GET',
              requestUri: '/GetContainerRecipePolicy'
            },
            input: {
              type: 'structure',
              required: ['containerRecipeArn'],
              members: {
                containerRecipeArn: {
                  location: 'querystring',
                  locationName: 'containerRecipeArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                policy: {}
              }
            }
          },
          GetDistributionConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/GetDistributionConfiguration'
            },
            input: {
              type: 'structure',
              required: ['distributionConfigurationArn'],
              members: {
                distributionConfigurationArn: {
                  location: 'querystring',
                  locationName: 'distributionConfigurationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                distributionConfiguration: {
                  shape: 'S5a'
                }
              }
            }
          },
          GetImage: {
            http: {
              method: 'GET',
              requestUri: '/GetImage'
            },
            input: {
              type: 'structure',
              required: ['imageBuildVersionArn'],
              members: {
                imageBuildVersionArn: {
                  location: 'querystring',
                  locationName: 'imageBuildVersionArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                image: {
                  type: 'structure',
                  members: {
                    arn: {},
                    type: {},
                    name: {},
                    version: {},
                    platform: {},
                    enhancedImageMetadataEnabled: {
                      type: 'boolean'
                    },
                    osVersion: {},
                    state: {
                      shape: 'S5h'
                    },
                    imageRecipe: {
                      shape: 'S5j'
                    },
                    containerRecipe: {
                      shape: 'S54'
                    },
                    sourcePipelineName: {},
                    sourcePipelineArn: {},
                    infrastructureConfiguration: {
                      shape: 'S5l'
                    },
                    distributionConfiguration: {
                      shape: 'S5a'
                    },
                    imageTestsConfiguration: {
                      shape: 'S28'
                    },
                    dateCreated: {},
                    outputResources: {
                      shape: 'S5m'
                    },
                    tags: {
                      shape: 'Sh'
                    },
                    buildType: {},
                    imageSource: {},
                    scanState: {
                      type: 'structure',
                      members: {
                        status: {},
                        reason: {}
                      }
                    },
                    imageScanningConfiguration: {
                      shape: 'S2a'
                    },
                    deprecationTime: {
                      type: 'timestamp'
                    },
                    lifecycleExecutionId: {},
                    executionRole: {},
                    workflows: {
                      shape: 'S2c'
                    }
                  }
                }
              }
            }
          },
          GetImagePipeline: {
            http: {
              method: 'GET',
              requestUri: '/GetImagePipeline'
            },
            input: {
              type: 'structure',
              required: ['imagePipelineArn'],
              members: {
                imagePipelineArn: {
                  location: 'querystring',
                  locationName: 'imagePipelineArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imagePipeline: {
                  shape: 'S5y'
                }
              }
            }
          },
          GetImagePolicy: {
            http: {
              method: 'GET',
              requestUri: '/GetImagePolicy'
            },
            input: {
              type: 'structure',
              required: ['imageArn'],
              members: {
                imageArn: {
                  location: 'querystring',
                  locationName: 'imageArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                policy: {}
              }
            }
          },
          GetImageRecipe: {
            http: {
              method: 'GET',
              requestUri: '/GetImageRecipe'
            },
            input: {
              type: 'structure',
              required: ['imageRecipeArn'],
              members: {
                imageRecipeArn: {
                  location: 'querystring',
                  locationName: 'imageRecipeArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageRecipe: {
                  shape: 'S5j'
                }
              }
            }
          },
          GetImageRecipePolicy: {
            http: {
              method: 'GET',
              requestUri: '/GetImageRecipePolicy'
            },
            input: {
              type: 'structure',
              required: ['imageRecipeArn'],
              members: {
                imageRecipeArn: {
                  location: 'querystring',
                  locationName: 'imageRecipeArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                policy: {}
              }
            }
          },
          GetInfrastructureConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/GetInfrastructureConfiguration'
            },
            input: {
              type: 'structure',
              required: ['infrastructureConfigurationArn'],
              members: {
                infrastructureConfigurationArn: {
                  location: 'querystring',
                  locationName: 'infrastructureConfigurationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                infrastructureConfiguration: {
                  shape: 'S5l'
                }
              }
            }
          },
          GetLifecycleExecution: {
            http: {
              method: 'GET',
              requestUri: '/GetLifecycleExecution'
            },
            input: {
              type: 'structure',
              required: ['lifecycleExecutionId'],
              members: {
                lifecycleExecutionId: {
                  location: 'querystring',
                  locationName: 'lifecycleExecutionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecycleExecution: {
                  shape: 'S69'
                }
              }
            }
          },
          GetLifecyclePolicy: {
            http: {
              method: 'GET',
              requestUri: '/GetLifecyclePolicy'
            },
            input: {
              type: 'structure',
              required: ['lifecyclePolicyArn'],
              members: {
                lifecyclePolicyArn: {
                  location: 'querystring',
                  locationName: 'lifecyclePolicyArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecyclePolicy: {
                  type: 'structure',
                  members: {
                    arn: {},
                    name: {},
                    description: {},
                    status: {},
                    executionRole: {},
                    resourceType: {},
                    policyDetails: {
                      shape: 'S3g'
                    },
                    resourceSelection: {
                      shape: 'S3u'
                    },
                    dateCreated: {
                      type: 'timestamp'
                    },
                    dateUpdated: {
                      type: 'timestamp'
                    },
                    dateLastRun: {
                      type: 'timestamp'
                    },
                    tags: {
                      shape: 'Sh'
                    }
                  }
                }
              }
            }
          },
          GetWorkflow: {
            http: {
              method: 'GET',
              requestUri: '/GetWorkflow'
            },
            input: {
              type: 'structure',
              required: ['workflowBuildVersionArn'],
              members: {
                workflowBuildVersionArn: {
                  location: 'querystring',
                  locationName: 'workflowBuildVersionArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                workflow: {
                  type: 'structure',
                  members: {
                    arn: {},
                    name: {},
                    version: {},
                    description: {},
                    changeDescription: {},
                    type: {},
                    state: {
                      shape: 'S6j'
                    },
                    owner: {},
                    data: {},
                    kmsKeyId: {},
                    dateCreated: {},
                    tags: {
                      shape: 'Sh'
                    },
                    parameters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'type'],
                        members: {
                          name: {},
                          type: {},
                          defaultValue: {
                            shape: 'S2i'
                          },
                          description: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetWorkflowExecution: {
            http: {
              method: 'GET',
              requestUri: '/GetWorkflowExecution'
            },
            input: {
              type: 'structure',
              required: ['workflowExecutionId'],
              members: {
                workflowExecutionId: {
                  location: 'querystring',
                  locationName: 'workflowExecutionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                workflowBuildVersionArn: {},
                workflowExecutionId: {},
                imageBuildVersionArn: {},
                type: {},
                status: {},
                message: {},
                totalStepCount: {
                  type: 'integer'
                },
                totalStepsSucceeded: {
                  type: 'integer'
                },
                totalStepsFailed: {
                  type: 'integer'
                },
                totalStepsSkipped: {
                  type: 'integer'
                },
                startTime: {},
                endTime: {},
                parallelGroup: {}
              }
            }
          },
          GetWorkflowStepExecution: {
            http: {
              method: 'GET',
              requestUri: '/GetWorkflowStepExecution'
            },
            input: {
              type: 'structure',
              required: ['stepExecutionId'],
              members: {
                stepExecutionId: {
                  location: 'querystring',
                  locationName: 'stepExecutionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                stepExecutionId: {},
                workflowBuildVersionArn: {},
                workflowExecutionId: {},
                imageBuildVersionArn: {},
                name: {},
                description: {},
                action: {},
                status: {},
                rollbackStatus: {},
                message: {},
                inputs: {},
                outputs: {},
                startTime: {},
                endTime: {},
                onFailure: {},
                timeoutSeconds: {
                  type: 'integer'
                }
              }
            }
          },
          ImportComponent: {
            http: {
              method: 'PUT',
              requestUri: '/ImportComponent'
            },
            input: {
              type: 'structure',
              required: ['name', 'semanticVersion', 'type', 'format', 'platform', 'clientToken'],
              members: {
                name: {},
                semanticVersion: {},
                description: {},
                changeDescription: {},
                type: {},
                format: {},
                platform: {},
                data: {},
                uri: {},
                kmsKeyId: {},
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                componentBuildVersionArn: {}
              }
            }
          },
          ImportVmImage: {
            http: {
              method: 'PUT',
              requestUri: '/ImportVmImage'
            },
            input: {
              type: 'structure',
              required: ['name', 'semanticVersion', 'platform', 'vmImportTaskId', 'clientToken'],
              members: {
                name: {},
                semanticVersion: {},
                description: {},
                platform: {},
                osVersion: {},
                vmImportTaskId: {},
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageArn: {},
                clientToken: {}
              }
            }
          },
          ListComponentBuildVersions: {
            http: {
              requestUri: '/ListComponentBuildVersions'
            },
            input: {
              type: 'structure',
              required: ['componentVersionArn'],
              members: {
                componentVersionArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                componentSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      version: {},
                      platform: {},
                      supportedOsVersions: {
                        shape: 'Sd'
                      },
                      state: {
                        shape: 'S4r'
                      },
                      type: {},
                      owner: {},
                      description: {},
                      changeDescription: {},
                      dateCreated: {},
                      tags: {
                        shape: 'Sh'
                      },
                      publisher: {},
                      obfuscate: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListComponents: {
            http: {
              requestUri: '/ListComponents'
            },
            input: {
              type: 'structure',
              members: {
                owner: {},
                filters: {
                  shape: 'S7m'
                },
                byName: {
                  type: 'boolean'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                componentVersionList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      version: {},
                      description: {},
                      platform: {},
                      supportedOsVersions: {
                        shape: 'Sd'
                      },
                      type: {},
                      owner: {},
                      dateCreated: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListContainerRecipes: {
            http: {
              requestUri: '/ListContainerRecipes'
            },
            input: {
              type: 'structure',
              members: {
                owner: {},
                filters: {
                  shape: 'S7m'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                containerRecipeSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      containerType: {},
                      name: {},
                      platform: {},
                      owner: {},
                      parentImage: {},
                      dateCreated: {},
                      tags: {
                        shape: 'Sh'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDistributionConfigurations: {
            http: {
              requestUri: '/ListDistributionConfigurations'
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  shape: 'S7m'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                distributionConfigurationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      description: {},
                      dateCreated: {},
                      dateUpdated: {},
                      tags: {
                        shape: 'Sh'
                      },
                      regions: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImageBuildVersions: {
            http: {
              requestUri: '/ListImageBuildVersions'
            },
            input: {
              type: 'structure',
              required: ['imageVersionArn'],
              members: {
                imageVersionArn: {},
                filters: {
                  shape: 'S7m'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageSummaryList: {
                  shape: 'S86'
                },
                nextToken: {}
              }
            }
          },
          ListImagePackages: {
            http: {
              requestUri: '/ListImagePackages'
            },
            input: {
              type: 'structure',
              required: ['imageBuildVersionArn'],
              members: {
                imageBuildVersionArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imagePackageList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      packageName: {},
                      packageVersion: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImagePipelineImages: {
            http: {
              requestUri: '/ListImagePipelineImages'
            },
            input: {
              type: 'structure',
              required: ['imagePipelineArn'],
              members: {
                imagePipelineArn: {},
                filters: {
                  shape: 'S7m'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageSummaryList: {
                  shape: 'S86'
                },
                nextToken: {}
              }
            }
          },
          ListImagePipelines: {
            http: {
              requestUri: '/ListImagePipelines'
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  shape: 'S7m'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imagePipelineList: {
                  type: 'list',
                  member: {
                    shape: 'S5y'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImageRecipes: {
            http: {
              requestUri: '/ListImageRecipes'
            },
            input: {
              type: 'structure',
              members: {
                owner: {},
                filters: {
                  shape: 'S7m'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageRecipeSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      platform: {},
                      owner: {},
                      parentImage: {},
                      dateCreated: {},
                      tags: {
                        shape: 'Sh'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImageScanFindingAggregations: {
            http: {
              requestUri: '/ListImageScanFindingAggregations'
            },
            input: {
              type: 'structure',
              members: {
                filter: {
                  shape: 'S7n'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                aggregationType: {},
                responses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountAggregation: {
                        type: 'structure',
                        members: {
                          accountId: {},
                          severityCounts: {
                            shape: 'S8q'
                          }
                        }
                      },
                      imageAggregation: {
                        type: 'structure',
                        members: {
                          imageBuildVersionArn: {},
                          severityCounts: {
                            shape: 'S8q'
                          }
                        }
                      },
                      imagePipelineAggregation: {
                        type: 'structure',
                        members: {
                          imagePipelineArn: {},
                          severityCounts: {
                            shape: 'S8q'
                          }
                        }
                      },
                      vulnerabilityIdAggregation: {
                        type: 'structure',
                        members: {
                          vulnerabilityId: {},
                          severityCounts: {
                            shape: 'S8q'
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
          ListImageScanFindings: {
            http: {
              requestUri: '/ListImageScanFindings'
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      awsAccountId: {},
                      imageBuildVersionArn: {},
                      imagePipelineArn: {},
                      type: {},
                      description: {},
                      title: {},
                      remediation: {
                        type: 'structure',
                        members: {
                          recommendation: {
                            type: 'structure',
                            members: {
                              text: {},
                              url: {}
                            }
                          }
                        }
                      },
                      severity: {},
                      firstObservedAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      inspectorScore: {
                        type: 'double'
                      },
                      inspectorScoreDetails: {
                        type: 'structure',
                        members: {
                          adjustedCvss: {
                            type: 'structure',
                            members: {
                              scoreSource: {},
                              cvssSource: {},
                              version: {},
                              score: {
                                type: 'double'
                              },
                              scoringVector: {},
                              adjustments: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    metric: {},
                                    reason: {}
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      packageVulnerabilityDetails: {
                        type: 'structure',
                        required: ['vulnerabilityId'],
                        members: {
                          vulnerabilityId: {},
                          vulnerablePackages: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                name: {},
                                version: {},
                                sourceLayerHash: {},
                                epoch: {
                                  type: 'integer'
                                },
                                release: {},
                                arch: {},
                                packageManager: {},
                                filePath: {},
                                fixedInVersion: {},
                                remediation: {}
                              }
                            }
                          },
                          source: {},
                          cvss: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                baseScore: {
                                  type: 'double'
                                },
                                scoringVector: {},
                                version: {},
                                source: {}
                              }
                            }
                          },
                          relatedVulnerabilities: {
                            type: 'list',
                            member: {}
                          },
                          sourceUrl: {},
                          vendorSeverity: {},
                          vendorCreatedAt: {
                            type: 'timestamp'
                          },
                          vendorUpdatedAt: {
                            type: 'timestamp'
                          },
                          referenceUrls: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      fixAvailable: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImages: {
            http: {
              requestUri: '/ListImages'
            },
            input: {
              type: 'structure',
              members: {
                owner: {},
                filters: {
                  shape: 'S7m'
                },
                byName: {
                  type: 'boolean'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                includeDeprecated: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageVersionList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      type: {},
                      version: {},
                      platform: {},
                      osVersion: {},
                      owner: {},
                      dateCreated: {},
                      buildType: {},
                      imageSource: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListInfrastructureConfigurations: {
            http: {
              requestUri: '/ListInfrastructureConfigurations'
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  shape: 'S7m'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                infrastructureConfigurationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      description: {},
                      dateCreated: {},
                      dateUpdated: {},
                      resourceTags: {
                        shape: 'S38'
                      },
                      tags: {
                        shape: 'Sh'
                      },
                      instanceTypes: {
                        shape: 'S31'
                      },
                      instanceProfileName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLifecycleExecutionResources: {
            http: {
              requestUri: '/ListLifecycleExecutionResources'
            },
            input: {
              type: 'structure',
              required: ['lifecycleExecutionId'],
              members: {
                lifecycleExecutionId: {},
                parentResourceId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecycleExecutionId: {},
                lifecycleExecutionState: {
                  shape: 'S6b'
                },
                resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      resourceId: {},
                      state: {
                        shape: 'S9w'
                      },
                      action: {
                        type: 'structure',
                        members: {
                          name: {},
                          reason: {}
                        }
                      },
                      region: {},
                      snapshots: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            snapshotId: {},
                            state: {
                              shape: 'S9w'
                            }
                          }
                        }
                      },
                      imageUris: {
                        shape: 'S1j'
                      },
                      startTime: {
                        type: 'timestamp'
                      },
                      endTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLifecycleExecutions: {
            http: {
              requestUri: '/ListLifecycleExecutions'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecycleExecutions: {
                  type: 'list',
                  member: {
                    shape: 'S69'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLifecyclePolicies: {
            http: {
              requestUri: '/ListLifecyclePolicies'
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  shape: 'S7m'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecyclePolicySummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      description: {},
                      status: {},
                      executionRole: {},
                      resourceType: {},
                      dateCreated: {
                        type: 'timestamp'
                      },
                      dateUpdated: {
                        type: 'timestamp'
                      },
                      dateLastRun: {
                        type: 'timestamp'
                      },
                      tags: {
                        shape: 'Sh'
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
              requestUri: '/tags/{resourceArn}'
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
              members: {
                tags: {
                  shape: 'Sh'
                }
              }
            }
          },
          ListWaitingWorkflowSteps: {
            http: {
              requestUri: '/ListWaitingWorkflowSteps'
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                steps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      stepExecutionId: {},
                      imageBuildVersionArn: {},
                      workflowExecutionId: {},
                      workflowBuildVersionArn: {},
                      name: {},
                      action: {},
                      startTime: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListWorkflowBuildVersions: {
            http: {
              requestUri: '/ListWorkflowBuildVersions'
            },
            input: {
              type: 'structure',
              required: ['workflowVersionArn'],
              members: {
                workflowVersionArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                workflowSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      version: {},
                      description: {},
                      changeDescription: {},
                      type: {},
                      owner: {},
                      state: {
                        shape: 'S6j'
                      },
                      dateCreated: {},
                      tags: {
                        shape: 'Sh'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListWorkflowExecutions: {
            http: {
              requestUri: '/ListWorkflowExecutions'
            },
            input: {
              type: 'structure',
              required: ['imageBuildVersionArn'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                imageBuildVersionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                workflowExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      workflowBuildVersionArn: {},
                      workflowExecutionId: {},
                      type: {},
                      status: {},
                      message: {},
                      totalStepCount: {
                        type: 'integer'
                      },
                      totalStepsSucceeded: {
                        type: 'integer'
                      },
                      totalStepsFailed: {
                        type: 'integer'
                      },
                      totalStepsSkipped: {
                        type: 'integer'
                      },
                      startTime: {},
                      endTime: {},
                      parallelGroup: {}
                    }
                  }
                },
                imageBuildVersionArn: {},
                message: {},
                nextToken: {}
              }
            }
          },
          ListWorkflowStepExecutions: {
            http: {
              requestUri: '/ListWorkflowStepExecutions'
            },
            input: {
              type: 'structure',
              required: ['workflowExecutionId'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                workflowExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                steps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      stepExecutionId: {},
                      name: {},
                      description: {},
                      action: {},
                      status: {},
                      rollbackStatus: {},
                      message: {},
                      inputs: {},
                      outputs: {},
                      startTime: {},
                      endTime: {}
                    }
                  }
                },
                workflowBuildVersionArn: {},
                workflowExecutionId: {},
                imageBuildVersionArn: {},
                message: {},
                nextToken: {}
              }
            }
          },
          ListWorkflows: {
            http: {
              requestUri: '/ListWorkflows'
            },
            input: {
              type: 'structure',
              members: {
                owner: {},
                filters: {
                  shape: 'S7m'
                },
                byName: {
                  type: 'boolean'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                workflowVersionList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      version: {},
                      description: {},
                      type: {},
                      owner: {},
                      dateCreated: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          PutComponentPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/PutComponentPolicy'
            },
            input: {
              type: 'structure',
              required: ['componentArn', 'policy'],
              members: {
                componentArn: {},
                policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                componentArn: {}
              }
            }
          },
          PutContainerRecipePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/PutContainerRecipePolicy'
            },
            input: {
              type: 'structure',
              required: ['containerRecipeArn', 'policy'],
              members: {
                containerRecipeArn: {},
                policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                containerRecipeArn: {}
              }
            }
          },
          PutImagePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/PutImagePolicy'
            },
            input: {
              type: 'structure',
              required: ['imageArn', 'policy'],
              members: {
                imageArn: {},
                policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageArn: {}
              }
            }
          },
          PutImageRecipePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/PutImageRecipePolicy'
            },
            input: {
              type: 'structure',
              required: ['imageRecipeArn', 'policy'],
              members: {
                imageRecipeArn: {},
                policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                imageRecipeArn: {}
              }
            }
          },
          SendWorkflowStepAction: {
            http: {
              method: 'PUT',
              requestUri: '/SendWorkflowStepAction'
            },
            input: {
              type: 'structure',
              required: ['stepExecutionId', 'imageBuildVersionArn', 'action', 'clientToken'],
              members: {
                stepExecutionId: {},
                imageBuildVersionArn: {},
                action: {},
                reason: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                stepExecutionId: {},
                imageBuildVersionArn: {},
                clientToken: {}
              }
            }
          },
          StartImagePipelineExecution: {
            http: {
              method: 'PUT',
              requestUri: '/StartImagePipelineExecution'
            },
            input: {
              type: 'structure',
              required: ['imagePipelineArn', 'clientToken'],
              members: {
                imagePipelineArn: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                imageBuildVersionArn: {}
              }
            }
          },
          StartResourceStateUpdate: {
            http: {
              method: 'PUT',
              requestUri: '/StartResourceStateUpdate'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'state', 'clientToken'],
              members: {
                resourceArn: {},
                state: {
                  type: 'structure',
                  members: {
                    status: {}
                  }
                },
                executionRole: {},
                includeResources: {
                  type: 'structure',
                  members: {
                    amis: {
                      type: 'boolean'
                    },
                    snapshots: {
                      type: 'boolean'
                    },
                    containers: {
                      type: 'boolean'
                    }
                  }
                },
                exclusionRules: {
                  type: 'structure',
                  members: {
                    amis: {
                      shape: 'S3r'
                    }
                  }
                },
                updateAt: {
                  type: 'timestamp'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecycleExecutionId: {},
                resourceArn: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'Sh'
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
              requestUri: '/tags/{resourceArn}'
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
            }
          },
          UpdateDistributionConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/UpdateDistributionConfiguration'
            },
            input: {
              type: 'structure',
              required: ['distributionConfigurationArn', 'distributions', 'clientToken'],
              members: {
                distributionConfigurationArn: {},
                description: {},
                distributions: {
                  shape: 'S1c'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                distributionConfigurationArn: {}
              }
            }
          },
          UpdateImagePipeline: {
            http: {
              method: 'PUT',
              requestUri: '/UpdateImagePipeline'
            },
            input: {
              type: 'structure',
              required: ['imagePipelineArn', 'infrastructureConfigurationArn', 'clientToken'],
              members: {
                imagePipelineArn: {},
                description: {},
                imageRecipeArn: {},
                containerRecipeArn: {},
                infrastructureConfigurationArn: {},
                distributionConfigurationArn: {},
                imageTestsConfiguration: {
                  shape: 'S28'
                },
                enhancedImageMetadataEnabled: {
                  type: 'boolean'
                },
                schedule: {
                  shape: 'S2p'
                },
                status: {},
                clientToken: {
                  idempotencyToken: true
                },
                imageScanningConfiguration: {
                  shape: 'S2a'
                },
                workflows: {
                  shape: 'S2c'
                },
                executionRole: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                imagePipelineArn: {}
              }
            }
          },
          UpdateInfrastructureConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/UpdateInfrastructureConfiguration'
            },
            input: {
              type: 'structure',
              required: ['infrastructureConfigurationArn', 'instanceProfileName', 'clientToken'],
              members: {
                infrastructureConfigurationArn: {},
                description: {},
                instanceTypes: {
                  shape: 'S31'
                },
                instanceProfileName: {},
                securityGroupIds: {
                  shape: 'S34'
                },
                subnetId: {},
                logging: {
                  shape: 'S35'
                },
                keyPair: {},
                terminateInstanceOnFailure: {
                  type: 'boolean'
                },
                snsTopicArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                resourceTags: {
                  shape: 'S38'
                },
                instanceMetadataOptions: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                clientToken: {},
                infrastructureConfigurationArn: {}
              }
            }
          },
          UpdateLifecyclePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/UpdateLifecyclePolicy'
            },
            input: {
              type: 'structure',
              required: ['lifecyclePolicyArn', 'executionRole', 'resourceType', 'policyDetails', 'resourceSelection', 'clientToken'],
              members: {
                lifecyclePolicyArn: {},
                description: {},
                status: {},
                executionRole: {},
                resourceType: {},
                policyDetails: {
                  shape: 'S3g'
                },
                resourceSelection: {
                  shape: 'S3u'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecyclePolicyArn: {}
              }
            }
          }
        },
        shapes: {
          Sd: {
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'map',
            key: {},
            value: {}
          },
          So: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['componentArn'],
              members: {
                componentArn: {},
                parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'value'],
                    members: {
                      name: {},
                      value: {
                        shape: 'Su'
                      }
                    }
                  }
                }
              }
            }
          },
          Su: {
            type: 'list',
            member: {}
          },
          Sw: {
            type: 'structure',
            members: {
              image: {},
              blockDeviceMappings: {
                shape: 'Sx'
              }
            }
          },
          Sx: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                deviceName: {},
                ebs: {
                  type: 'structure',
                  members: {
                    encrypted: {
                      type: 'boolean'
                    },
                    deleteOnTermination: {
                      type: 'boolean'
                    },
                    iops: {
                      type: 'integer'
                    },
                    kmsKeyId: {},
                    snapshotId: {},
                    volumeSize: {
                      type: 'integer'
                    },
                    volumeType: {},
                    throughput: {
                      type: 'integer'
                    }
                  }
                },
                virtualName: {},
                noDevice: {}
              }
            }
          },
          S17: {
            type: 'structure',
            required: ['service', 'repositoryName'],
            members: {
              service: {},
              repositoryName: {}
            }
          },
          S1c: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['region'],
              members: {
                region: {},
                amiDistributionConfiguration: {
                  type: 'structure',
                  members: {
                    name: {},
                    description: {},
                    targetAccountIds: {
                      shape: 'S1g'
                    },
                    amiTags: {
                      shape: 'Sh'
                    },
                    kmsKeyId: {},
                    launchPermission: {
                      type: 'structure',
                      members: {
                        userIds: {
                          shape: 'S1g'
                        },
                        userGroups: {
                          shape: 'S1j'
                        },
                        organizationArns: {
                          type: 'list',
                          member: {}
                        },
                        organizationalUnitArns: {
                          type: 'list',
                          member: {}
                        }
                      }
                    }
                  }
                },
                containerDistributionConfiguration: {
                  type: 'structure',
                  required: ['targetRepository'],
                  members: {
                    description: {},
                    containerTags: {
                      shape: 'S1j'
                    },
                    targetRepository: {
                      shape: 'S17'
                    }
                  }
                },
                licenseConfigurationArns: {
                  type: 'list',
                  member: {}
                },
                launchTemplateConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['launchTemplateId'],
                    members: {
                      launchTemplateId: {},
                      accountId: {},
                      setDefaultVersion: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                s3ExportConfiguration: {
                  type: 'structure',
                  required: ['roleName', 'diskImageFormat', 's3Bucket'],
                  members: {
                    roleName: {},
                    diskImageFormat: {},
                    s3Bucket: {},
                    s3Prefix: {}
                  }
                },
                fastLaunchConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['enabled'],
                    members: {
                      enabled: {
                        type: 'boolean'
                      },
                      snapshotConfiguration: {
                        type: 'structure',
                        members: {
                          targetResourceCount: {
                            type: 'integer'
                          }
                        }
                      },
                      maxParallelLaunches: {
                        type: 'integer'
                      },
                      launchTemplate: {
                        type: 'structure',
                        members: {
                          launchTemplateId: {},
                          launchTemplateName: {},
                          launchTemplateVersion: {}
                        }
                      },
                      accountId: {}
                    }
                  }
                }
              }
            }
          },
          S1g: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'list',
            member: {}
          },
          S28: {
            type: 'structure',
            members: {
              imageTestsEnabled: {
                type: 'boolean'
              },
              timeoutMinutes: {
                type: 'integer'
              }
            }
          },
          S2a: {
            type: 'structure',
            members: {
              imageScanningEnabled: {
                type: 'boolean'
              },
              ecrConfiguration: {
                type: 'structure',
                members: {
                  repositoryName: {},
                  containerTags: {
                    shape: 'S1j'
                  }
                }
              }
            }
          },
          S2c: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['workflowArn'],
              members: {
                workflowArn: {},
                parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'value'],
                    members: {
                      name: {},
                      value: {
                        shape: 'S2i'
                      }
                    }
                  }
                },
                parallelGroup: {},
                onFailure: {}
              }
            }
          },
          S2i: {
            type: 'list',
            member: {}
          },
          S2p: {
            type: 'structure',
            members: {
              scheduleExpression: {},
              timezone: {},
              pipelineExecutionStartCondition: {}
            }
          },
          S2w: {
            type: 'structure',
            members: {
              systemsManagerAgent: {
                type: 'structure',
                members: {
                  uninstallAfterBuild: {
                    type: 'boolean'
                  }
                }
              },
              userDataOverride: {}
            }
          },
          S31: {
            type: 'list',
            member: {}
          },
          S34: {
            type: 'list',
            member: {}
          },
          S35: {
            type: 'structure',
            members: {
              s3Logs: {
                type: 'structure',
                members: {
                  s3BucketName: {},
                  s3KeyPrefix: {}
                }
              }
            }
          },
          S38: {
            type: 'map',
            key: {},
            value: {}
          },
          S39: {
            type: 'structure',
            members: {
              httpTokens: {},
              httpPutResponseHopLimit: {
                type: 'integer'
              }
            }
          },
          S3g: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['action', 'filter'],
              members: {
                action: {
                  type: 'structure',
                  required: ['type'],
                  members: {
                    type: {},
                    includeResources: {
                      type: 'structure',
                      members: {
                        amis: {
                          type: 'boolean'
                        },
                        snapshots: {
                          type: 'boolean'
                        },
                        containers: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                },
                filter: {
                  type: 'structure',
                  required: ['type', 'value'],
                  members: {
                    type: {},
                    value: {
                      type: 'integer'
                    },
                    unit: {},
                    retainAtLeast: {
                      type: 'integer'
                    }
                  }
                },
                exclusionRules: {
                  type: 'structure',
                  members: {
                    tagMap: {
                      shape: 'Sh'
                    },
                    amis: {
                      shape: 'S3r'
                    }
                  }
                }
              }
            }
          },
          S3r: {
            type: 'structure',
            members: {
              isPublic: {
                type: 'boolean'
              },
              regions: {
                shape: 'S1j'
              },
              sharedAccounts: {
                shape: 'S1g'
              },
              lastLaunched: {
                type: 'structure',
                required: ['value', 'unit'],
                members: {
                  value: {
                    type: 'integer'
                  },
                  unit: {}
                }
              },
              tagMap: {
                shape: 'Sh'
              }
            }
          },
          S3u: {
            type: 'structure',
            members: {
              recipes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'semanticVersion'],
                  members: {
                    name: {},
                    semanticVersion: {}
                  }
                }
              },
              tagMap: {
                shape: 'Sh'
              }
            }
          },
          S4r: {
            type: 'structure',
            members: {
              status: {},
              reason: {}
            }
          },
          S54: {
            type: 'structure',
            members: {
              arn: {},
              containerType: {},
              name: {},
              description: {},
              platform: {},
              owner: {},
              version: {},
              components: {
                shape: 'So'
              },
              instanceConfiguration: {
                shape: 'Sw'
              },
              dockerfileTemplateData: {},
              kmsKeyId: {},
              encrypted: {
                type: 'boolean'
              },
              parentImage: {},
              dateCreated: {},
              tags: {
                shape: 'Sh'
              },
              workingDirectory: {},
              targetRepository: {
                shape: 'S17'
              }
            }
          },
          S5a: {
            type: 'structure',
            required: ['timeoutMinutes'],
            members: {
              arn: {},
              name: {},
              description: {},
              distributions: {
                shape: 'S1c'
              },
              timeoutMinutes: {
                type: 'integer'
              },
              dateCreated: {},
              dateUpdated: {},
              tags: {
                shape: 'Sh'
              }
            }
          },
          S5h: {
            type: 'structure',
            members: {
              status: {},
              reason: {}
            }
          },
          S5j: {
            type: 'structure',
            members: {
              arn: {},
              type: {},
              name: {},
              description: {},
              platform: {},
              owner: {},
              version: {},
              components: {
                shape: 'So'
              },
              parentImage: {},
              blockDeviceMappings: {
                shape: 'Sx'
              },
              dateCreated: {},
              tags: {
                shape: 'Sh'
              },
              workingDirectory: {},
              additionalInstanceConfiguration: {
                shape: 'S2w'
              }
            }
          },
          S5l: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              description: {},
              instanceTypes: {
                shape: 'S31'
              },
              instanceProfileName: {},
              securityGroupIds: {
                shape: 'S34'
              },
              subnetId: {},
              logging: {
                shape: 'S35'
              },
              keyPair: {},
              terminateInstanceOnFailure: {
                type: 'boolean'
              },
              snsTopicArn: {},
              dateCreated: {},
              dateUpdated: {},
              resourceTags: {
                shape: 'S38'
              },
              instanceMetadataOptions: {
                shape: 'S39'
              },
              tags: {
                shape: 'Sh'
              }
            }
          },
          S5m: {
            type: 'structure',
            members: {
              amis: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    region: {},
                    image: {},
                    name: {},
                    description: {},
                    state: {
                      shape: 'S5h'
                    },
                    accountId: {}
                  }
                }
              },
              containers: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    region: {},
                    imageUris: {
                      shape: 'S1j'
                    }
                  }
                }
              }
            }
          },
          S5y: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              description: {},
              platform: {},
              enhancedImageMetadataEnabled: {
                type: 'boolean'
              },
              imageRecipeArn: {},
              containerRecipeArn: {},
              infrastructureConfigurationArn: {},
              distributionConfigurationArn: {},
              imageTestsConfiguration: {
                shape: 'S28'
              },
              schedule: {
                shape: 'S2p'
              },
              status: {},
              dateCreated: {},
              dateUpdated: {},
              dateLastRun: {},
              dateNextRun: {},
              tags: {
                shape: 'Sh'
              },
              imageScanningConfiguration: {
                shape: 'S2a'
              },
              executionRole: {},
              workflows: {
                shape: 'S2c'
              }
            }
          },
          S69: {
            type: 'structure',
            members: {
              lifecycleExecutionId: {},
              lifecyclePolicyArn: {},
              resourcesImpactedSummary: {
                type: 'structure',
                members: {
                  hasImpactedResources: {
                    type: 'boolean'
                  }
                }
              },
              state: {
                shape: 'S6b'
              },
              startTime: {
                type: 'timestamp'
              },
              endTime: {
                type: 'timestamp'
              }
            }
          },
          S6b: {
            type: 'structure',
            members: {
              status: {},
              reason: {}
            }
          },
          S6j: {
            type: 'structure',
            members: {
              status: {},
              reason: {}
            }
          },
          S7m: {
            type: 'list',
            member: {
              shape: 'S7n'
            }
          },
          S7n: {
            type: 'structure',
            members: {
              name: {},
              values: {
                type: 'list',
                member: {}
              }
            }
          },
          S86: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                type: {},
                version: {},
                platform: {},
                osVersion: {},
                state: {
                  shape: 'S5h'
                },
                owner: {},
                dateCreated: {},
                outputResources: {
                  shape: 'S5m'
                },
                tags: {
                  shape: 'Sh'
                },
                buildType: {},
                imageSource: {},
                deprecationTime: {
                  type: 'timestamp'
                },
                lifecycleExecutionId: {}
              }
            }
          },
          S8q: {
            type: 'structure',
            members: {
              all: {
                type: 'long'
              },
              critical: {
                type: 'long'
              },
              high: {
                type: 'long'
              },
              medium: {
                type: 'long'
              }
            }
          },
          S9w: {
            type: 'structure',
            members: {
              status: {},
              reason: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=dce589835da107ffc53a12e1452445895f730454.js.map