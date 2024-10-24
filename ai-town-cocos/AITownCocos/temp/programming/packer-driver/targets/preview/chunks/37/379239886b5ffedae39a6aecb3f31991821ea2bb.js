System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-24',
          endpointPrefix: 'api.sagemaker',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'SageMaker',
          serviceFullName: 'Amazon SageMaker Service',
          serviceId: 'SageMaker',
          signatureVersion: 'v4',
          signingName: 'sagemaker',
          targetPrefix: 'SageMaker',
          uid: 'sagemaker-2017-07-24',
          auth: ['aws.auth#sigv4']
        },
        operations: {
          AddAssociation: {
            input: {
              type: 'structure',
              required: ['SourceArn', 'DestinationArn'],
              members: {
                SourceArn: {},
                DestinationArn: {},
                AssociationType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SourceArn: {},
                DestinationArn: {}
              }
            }
          },
          AddTags: {
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
              members: {
                Tags: {
                  shape: 'S7'
                }
              }
            }
          },
          AssociateTrialComponent: {
            input: {
              type: 'structure',
              required: ['TrialComponentName', 'TrialName'],
              members: {
                TrialComponentName: {},
                TrialName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialComponentArn: {},
                TrialArn: {}
              }
            }
          },
          BatchDescribeModelPackage: {
            input: {
              type: 'structure',
              required: ['ModelPackageArnList'],
              members: {
                ModelPackageArnList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ModelPackageSummaries: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['ModelPackageGroupName', 'ModelPackageArn', 'CreationTime', 'InferenceSpecification', 'ModelPackageStatus'],
                    members: {
                      ModelPackageGroupName: {},
                      ModelPackageVersion: {
                        type: 'integer'
                      },
                      ModelPackageArn: {},
                      ModelPackageDescription: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      InferenceSpecification: {
                        shape: 'Sr'
                      },
                      ModelPackageStatus: {},
                      ModelApprovalStatus: {}
                    }
                  }
                },
                BatchDescribeModelPackageErrorMap: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['ErrorCode', 'ErrorResponse'],
                    members: {
                      ErrorCode: {},
                      ErrorResponse: {}
                    }
                  }
                }
              }
            }
          },
          CreateAction: {
            input: {
              type: 'structure',
              required: ['ActionName', 'Source', 'ActionType'],
              members: {
                ActionName: {},
                Source: {
                  shape: 'S1u'
                },
                ActionType: {},
                Description: {},
                Status: {},
                Properties: {
                  shape: 'S1z'
                },
                MetadataProperties: {
                  shape: 'S21'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ActionArn: {}
              }
            }
          },
          CreateAlgorithm: {
            input: {
              type: 'structure',
              required: ['AlgorithmName', 'TrainingSpecification'],
              members: {
                AlgorithmName: {},
                AlgorithmDescription: {},
                TrainingSpecification: {
                  shape: 'S26'
                },
                InferenceSpecification: {
                  shape: 'Sr'
                },
                ValidationSpecification: {
                  shape: 'S2y'
                },
                CertifyForMarketplace: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AlgorithmArn'],
              members: {
                AlgorithmArn: {}
              }
            }
          },
          CreateApp: {
            input: {
              type: 'structure',
              required: ['DomainId', 'AppType', 'AppName'],
              members: {
                DomainId: {},
                UserProfileName: {},
                SpaceName: {},
                AppType: {},
                AppName: {},
                Tags: {
                  shape: 'S7'
                },
                ResourceSpec: {
                  shape: 'S4p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppArn: {}
              }
            }
          },
          CreateAppImageConfig: {
            input: {
              type: 'structure',
              required: ['AppImageConfigName'],
              members: {
                AppImageConfigName: {},
                Tags: {
                  shape: 'S7'
                },
                KernelGatewayImageConfig: {
                  shape: 'S4z'
                },
                JupyterLabAppImageConfig: {
                  shape: 'S58'
                },
                CodeEditorAppImageConfig: {
                  shape: 'S5f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppImageConfigArn: {}
              }
            }
          },
          CreateArtifact: {
            input: {
              type: 'structure',
              required: ['Source', 'ArtifactType'],
              members: {
                ArtifactName: {},
                Source: {
                  shape: 'S5j'
                },
                ArtifactType: {},
                Properties: {
                  shape: 'S5n'
                },
                MetadataProperties: {
                  shape: 'S21'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ArtifactArn: {}
              }
            }
          },
          CreateAutoMLJob: {
            input: {
              type: 'structure',
              required: ['AutoMLJobName', 'InputDataConfig', 'OutputDataConfig', 'RoleArn'],
              members: {
                AutoMLJobName: {},
                InputDataConfig: {
                  shape: 'S5t'
                },
                OutputDataConfig: {
                  shape: 'S61'
                },
                ProblemType: {},
                AutoMLJobObjective: {
                  shape: 'S63'
                },
                AutoMLJobConfig: {
                  shape: 'S65'
                },
                RoleArn: {},
                GenerateCandidateDefinitionsOnly: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S7'
                },
                ModelDeployConfig: {
                  shape: 'S6p'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AutoMLJobArn'],
              members: {
                AutoMLJobArn: {}
              }
            }
          },
          CreateAutoMLJobV2: {
            input: {
              type: 'structure',
              required: ['AutoMLJobName', 'AutoMLJobInputDataConfig', 'OutputDataConfig', 'AutoMLProblemTypeConfig', 'RoleArn'],
              members: {
                AutoMLJobName: {},
                AutoMLJobInputDataConfig: {
                  shape: 'S6v'
                },
                OutputDataConfig: {
                  shape: 'S61'
                },
                AutoMLProblemTypeConfig: {
                  shape: 'S6x'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S7'
                },
                SecurityConfig: {
                  shape: 'S6a'
                },
                AutoMLJobObjective: {
                  shape: 'S63'
                },
                ModelDeployConfig: {
                  shape: 'S6p'
                },
                DataSplitConfig: {
                  shape: 'S6l'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AutoMLJobArn'],
              members: {
                AutoMLJobArn: {}
              }
            }
          },
          CreateCluster: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'InstanceGroups'],
              members: {
                ClusterName: {},
                InstanceGroups: {
                  shape: 'S7x'
                },
                VpcConfig: {
                  shape: 'S6b'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ClusterArn'],
              members: {
                ClusterArn: {}
              }
            }
          },
          CreateCodeRepository: {
            input: {
              type: 'structure',
              required: ['CodeRepositoryName', 'GitConfig'],
              members: {
                CodeRepositoryName: {},
                GitConfig: {
                  shape: 'S88'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CodeRepositoryArn'],
              members: {
                CodeRepositoryArn: {}
              }
            }
          },
          CreateCompilationJob: {
            input: {
              type: 'structure',
              required: ['CompilationJobName', 'RoleArn', 'OutputConfig', 'StoppingCondition'],
              members: {
                CompilationJobName: {},
                RoleArn: {},
                ModelPackageVersionArn: {},
                InputConfig: {
                  shape: 'S8f'
                },
                OutputConfig: {
                  shape: 'S8i'
                },
                VpcConfig: {
                  shape: 'S8p'
                },
                StoppingCondition: {
                  shape: 'S3w'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CompilationJobArn'],
              members: {
                CompilationJobArn: {}
              }
            }
          },
          CreateContext: {
            input: {
              type: 'structure',
              required: ['ContextName', 'Source', 'ContextType'],
              members: {
                ContextName: {},
                Source: {
                  shape: 'S8y'
                },
                ContextType: {},
                Description: {},
                Properties: {
                  shape: 'S1z'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContextArn: {}
              }
            }
          },
          CreateDataQualityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName', 'DataQualityAppSpecification', 'DataQualityJobInput', 'DataQualityJobOutputConfig', 'JobResources', 'RoleArn'],
              members: {
                JobDefinitionName: {},
                DataQualityBaselineConfig: {
                  shape: 'S93'
                },
                DataQualityAppSpecification: {
                  shape: 'S97'
                },
                DataQualityJobInput: {
                  shape: 'S9g'
                },
                DataQualityJobOutputConfig: {
                  shape: 'S9u'
                },
                JobResources: {
                  shape: 'Sa0'
                },
                NetworkConfig: {
                  shape: 'Sa5'
                },
                RoleArn: {},
                StoppingCondition: {
                  shape: 'Sa6'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionArn'],
              members: {
                JobDefinitionArn: {}
              }
            }
          },
          CreateDeviceFleet: {
            input: {
              type: 'structure',
              required: ['DeviceFleetName', 'OutputConfig'],
              members: {
                DeviceFleetName: {},
                RoleArn: {},
                Description: {},
                OutputConfig: {
                  shape: 'Sac'
                },
                Tags: {
                  shape: 'S7'
                },
                EnableIotRoleAlias: {
                  type: 'boolean'
                }
              }
            }
          },
          CreateDomain: {
            input: {
              type: 'structure',
              required: ['DomainName', 'AuthMode', 'DefaultUserSettings', 'SubnetIds', 'VpcId'],
              members: {
                DomainName: {},
                AuthMode: {},
                DefaultUserSettings: {
                  shape: 'Sai'
                },
                DomainSettings: {
                  shape: 'Sbq'
                },
                SubnetIds: {
                  shape: 'S6e'
                },
                VpcId: {},
                Tags: {
                  shape: 'S7'
                },
                AppNetworkAccessType: {},
                HomeEfsFileSystemKmsKeyId: {
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated, use KmsKeyId instead.'
                },
                KmsKeyId: {},
                AppSecurityGroupManagement: {},
                DefaultSpaceSettings: {
                  shape: 'Sc0'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainArn: {},
                Url: {}
              }
            }
          },
          CreateEdgeDeploymentPlan: {
            input: {
              type: 'structure',
              required: ['EdgeDeploymentPlanName', 'ModelConfigs', 'DeviceFleetName'],
              members: {
                EdgeDeploymentPlanName: {},
                ModelConfigs: {
                  shape: 'Sc5'
                },
                DeviceFleetName: {},
                Stages: {
                  shape: 'Sc7'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EdgeDeploymentPlanArn'],
              members: {
                EdgeDeploymentPlanArn: {}
              }
            }
          },
          CreateEdgeDeploymentStage: {
            input: {
              type: 'structure',
              required: ['EdgeDeploymentPlanName', 'Stages'],
              members: {
                EdgeDeploymentPlanName: {},
                Stages: {
                  shape: 'Sc7'
                }
              }
            }
          },
          CreateEdgePackagingJob: {
            input: {
              type: 'structure',
              required: ['EdgePackagingJobName', 'CompilationJobName', 'ModelName', 'ModelVersion', 'RoleArn', 'OutputConfig'],
              members: {
                EdgePackagingJobName: {},
                CompilationJobName: {},
                ModelName: {},
                ModelVersion: {},
                RoleArn: {},
                OutputConfig: {
                  shape: 'Sac'
                },
                ResourceKey: {},
                Tags: {
                  shape: 'S7'
                }
              }
            }
          },
          CreateEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName', 'EndpointConfigName'],
              members: {
                EndpointName: {},
                EndpointConfigName: {},
                DeploymentConfig: {
                  shape: 'Scn'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            }
          },
          CreateEndpointConfig: {
            input: {
              type: 'structure',
              required: ['EndpointConfigName', 'ProductionVariants'],
              members: {
                EndpointConfigName: {},
                ProductionVariants: {
                  shape: 'Sd5'
                },
                DataCaptureConfig: {
                  shape: 'Sds'
                },
                Tags: {
                  shape: 'S7'
                },
                KmsKeyId: {},
                AsyncInferenceConfig: {
                  shape: 'Se3'
                },
                ExplainerConfig: {
                  shape: 'Seb'
                },
                ShadowProductionVariants: {
                  shape: 'Sd5'
                },
                ExecutionRoleArn: {},
                VpcConfig: {
                  shape: 'S6b'
                },
                EnableNetworkIsolation: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EndpointConfigArn'],
              members: {
                EndpointConfigArn: {}
              }
            }
          },
          CreateExperiment: {
            input: {
              type: 'structure',
              required: ['ExperimentName'],
              members: {
                ExperimentName: {},
                DisplayName: {},
                Description: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ExperimentArn: {}
              }
            }
          },
          CreateFeatureGroup: {
            input: {
              type: 'structure',
              required: ['FeatureGroupName', 'RecordIdentifierFeatureName', 'EventTimeFeatureName', 'FeatureDefinitions'],
              members: {
                FeatureGroupName: {},
                RecordIdentifierFeatureName: {},
                EventTimeFeatureName: {},
                FeatureDefinitions: {
                  shape: 'Sfa'
                },
                OnlineStoreConfig: {
                  shape: 'Sfh'
                },
                OfflineStoreConfig: {
                  shape: 'Sfn'
                },
                ThroughputConfig: {
                  type: 'structure',
                  required: ['ThroughputMode'],
                  members: {
                    ThroughputMode: {},
                    ProvisionedReadCapacityUnits: {
                      type: 'integer'
                    },
                    ProvisionedWriteCapacityUnits: {
                      type: 'integer'
                    }
                  }
                },
                RoleArn: {},
                Description: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FeatureGroupArn'],
              members: {
                FeatureGroupArn: {}
              }
            }
          },
          CreateFlowDefinition: {
            input: {
              type: 'structure',
              required: ['FlowDefinitionName', 'OutputConfig', 'RoleArn'],
              members: {
                FlowDefinitionName: {},
                HumanLoopRequestSource: {
                  shape: 'Sg2'
                },
                HumanLoopActivationConfig: {
                  shape: 'Sg4'
                },
                HumanLoopConfig: {
                  shape: 'Sg7'
                },
                OutputConfig: {
                  shape: 'Sgm'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FlowDefinitionArn'],
              members: {
                FlowDefinitionArn: {}
              }
            }
          },
          CreateHub: {
            input: {
              type: 'structure',
              required: ['HubName', 'HubDescription'],
              members: {
                HubName: {},
                HubDescription: {},
                HubDisplayName: {},
                HubSearchKeywords: {
                  shape: 'Sgt'
                },
                S3StorageConfig: {
                  shape: 'Sgv'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HubArn'],
              members: {
                HubArn: {}
              }
            }
          },
          CreateHumanTaskUi: {
            input: {
              type: 'structure',
              required: ['HumanTaskUiName', 'UiTemplate'],
              members: {
                HumanTaskUiName: {},
                UiTemplate: {
                  shape: 'Sh1'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HumanTaskUiArn'],
              members: {
                HumanTaskUiArn: {}
              }
            }
          },
          CreateHyperParameterTuningJob: {
            input: {
              type: 'structure',
              required: ['HyperParameterTuningJobName', 'HyperParameterTuningJobConfig'],
              members: {
                HyperParameterTuningJobName: {},
                HyperParameterTuningJobConfig: {
                  shape: 'Sh6'
                },
                TrainingJobDefinition: {
                  shape: 'Shz'
                },
                TrainingJobDefinitions: {
                  shape: 'Sif'
                },
                WarmStartConfig: {
                  shape: 'Sig'
                },
                Tags: {
                  shape: 'S7'
                },
                Autotune: {
                  shape: 'Sik'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HyperParameterTuningJobArn'],
              members: {
                HyperParameterTuningJobArn: {}
              }
            }
          },
          CreateImage: {
            input: {
              type: 'structure',
              required: ['ImageName', 'RoleArn'],
              members: {
                Description: {},
                DisplayName: {},
                ImageName: {},
                RoleArn: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageArn: {}
              }
            }
          },
          CreateImageVersion: {
            input: {
              type: 'structure',
              required: ['BaseImage', 'ClientToken', 'ImageName'],
              members: {
                BaseImage: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ImageName: {},
                Aliases: {
                  shape: 'Siv'
                },
                VendorGuidance: {},
                JobType: {},
                MLFramework: {},
                ProgrammingLang: {},
                Processor: {},
                Horovod: {
                  type: 'boolean'
                },
                ReleaseNotes: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageVersionArn: {}
              }
            }
          },
          CreateInferenceComponent: {
            input: {
              type: 'structure',
              required: ['InferenceComponentName', 'EndpointName', 'VariantName', 'Specification', 'RuntimeConfig'],
              members: {
                InferenceComponentName: {},
                EndpointName: {},
                VariantName: {},
                Specification: {
                  shape: 'Sj7'
                },
                RuntimeConfig: {
                  shape: 'Sje'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceComponentArn'],
              members: {
                InferenceComponentArn: {}
              }
            }
          },
          CreateInferenceExperiment: {
            input: {
              type: 'structure',
              required: ['Name', 'Type', 'RoleArn', 'EndpointName', 'ModelVariants', 'ShadowModeConfig'],
              members: {
                Name: {},
                Type: {},
                Schedule: {
                  shape: 'Sjl'
                },
                Description: {},
                RoleArn: {},
                EndpointName: {},
                ModelVariants: {
                  shape: 'Sjo'
                },
                DataStorageConfig: {
                  shape: 'Sjw'
                },
                ShadowModeConfig: {
                  shape: 'Sjx'
                },
                KmsKey: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceExperimentArn'],
              members: {
                InferenceExperimentArn: {}
              }
            }
          },
          CreateInferenceRecommendationsJob: {
            input: {
              type: 'structure',
              required: ['JobName', 'JobType', 'RoleArn', 'InputConfig'],
              members: {
                JobName: {},
                JobType: {},
                RoleArn: {},
                InputConfig: {
                  shape: 'Sk5'
                },
                JobDescription: {},
                StoppingConditions: {
                  shape: 'Slb'
                },
                OutputConfig: {
                  type: 'structure',
                  members: {
                    KmsKeyId: {},
                    CompiledOutputConfig: {
                      type: 'structure',
                      members: {
                        S3OutputUri: {}
                      }
                    }
                  }
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobArn'],
              members: {
                JobArn: {}
              }
            }
          },
          CreateLabelingJob: {
            input: {
              type: 'structure',
              required: ['LabelingJobName', 'LabelAttributeName', 'InputConfig', 'OutputConfig', 'RoleArn', 'HumanTaskConfig'],
              members: {
                LabelingJobName: {},
                LabelAttributeName: {},
                InputConfig: {
                  shape: 'Sln'
                },
                OutputConfig: {
                  shape: 'Slu'
                },
                RoleArn: {},
                LabelCategoryConfigS3Uri: {},
                StoppingConditions: {
                  shape: 'Slv'
                },
                LabelingJobAlgorithmsConfig: {
                  shape: 'Sly'
                },
                HumanTaskConfig: {
                  shape: 'Sm2'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['LabelingJobArn'],
              members: {
                LabelingJobArn: {}
              }
            }
          },
          CreateModel: {
            input: {
              type: 'structure',
              required: ['ModelName'],
              members: {
                ModelName: {},
                PrimaryContainer: {
                  shape: 'Smh'
                },
                Containers: {
                  shape: 'Smq'
                },
                InferenceExecutionConfig: {
                  shape: 'Smr'
                },
                ExecutionRoleArn: {},
                Tags: {
                  shape: 'S7'
                },
                VpcConfig: {
                  shape: 'S6b'
                },
                EnableNetworkIsolation: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelArn'],
              members: {
                ModelArn: {}
              }
            }
          },
          CreateModelBiasJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName', 'ModelBiasAppSpecification', 'ModelBiasJobInput', 'ModelBiasJobOutputConfig', 'JobResources', 'RoleArn'],
              members: {
                JobDefinitionName: {},
                ModelBiasBaselineConfig: {
                  shape: 'Smv'
                },
                ModelBiasAppSpecification: {
                  shape: 'Smw'
                },
                ModelBiasJobInput: {
                  shape: 'Smx'
                },
                ModelBiasJobOutputConfig: {
                  shape: 'S9u'
                },
                JobResources: {
                  shape: 'Sa0'
                },
                NetworkConfig: {
                  shape: 'Sa5'
                },
                RoleArn: {},
                StoppingCondition: {
                  shape: 'Sa6'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionArn'],
              members: {
                JobDefinitionArn: {}
              }
            }
          },
          CreateModelCard: {
            input: {
              type: 'structure',
              required: ['ModelCardName', 'Content', 'ModelCardStatus'],
              members: {
                ModelCardName: {},
                SecurityConfig: {
                  shape: 'Sn1'
                },
                Content: {
                  shape: 'Sn2'
                },
                ModelCardStatus: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelCardArn'],
              members: {
                ModelCardArn: {}
              }
            }
          },
          CreateModelCardExportJob: {
            input: {
              type: 'structure',
              required: ['ModelCardName', 'ModelCardExportJobName', 'OutputConfig'],
              members: {
                ModelCardName: {},
                ModelCardVersion: {
                  type: 'integer'
                },
                ModelCardExportJobName: {},
                OutputConfig: {
                  shape: 'Sn8'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelCardExportJobArn'],
              members: {
                ModelCardExportJobArn: {}
              }
            }
          },
          CreateModelExplainabilityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName', 'ModelExplainabilityAppSpecification', 'ModelExplainabilityJobInput', 'ModelExplainabilityJobOutputConfig', 'JobResources', 'RoleArn'],
              members: {
                JobDefinitionName: {},
                ModelExplainabilityBaselineConfig: {
                  shape: 'Snc'
                },
                ModelExplainabilityAppSpecification: {
                  shape: 'Snd'
                },
                ModelExplainabilityJobInput: {
                  shape: 'Sne'
                },
                ModelExplainabilityJobOutputConfig: {
                  shape: 'S9u'
                },
                JobResources: {
                  shape: 'Sa0'
                },
                NetworkConfig: {
                  shape: 'Sa5'
                },
                RoleArn: {},
                StoppingCondition: {
                  shape: 'Sa6'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionArn'],
              members: {
                JobDefinitionArn: {}
              }
            }
          },
          CreateModelPackage: {
            input: {
              type: 'structure',
              members: {
                ModelPackageName: {},
                ModelPackageGroupName: {},
                ModelPackageDescription: {},
                InferenceSpecification: {
                  shape: 'Sr'
                },
                ValidationSpecification: {
                  shape: 'Snh'
                },
                SourceAlgorithmSpecification: {
                  shape: 'Snk'
                },
                CertifyForMarketplace: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S7'
                },
                ModelApprovalStatus: {},
                MetadataProperties: {
                  shape: 'S21'
                },
                ModelMetrics: {
                  shape: 'Snn'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Domain: {},
                Task: {},
                SamplePayloadUrl: {},
                CustomerMetadataProperties: {
                  shape: 'Snu'
                },
                DriftCheckBaselines: {
                  shape: 'Snx'
                },
                AdditionalInferenceSpecifications: {
                  shape: 'So3'
                },
                SkipModelValidation: {},
                SourceUri: {},
                SecurityConfig: {
                  shape: 'So7'
                },
                ModelCard: {
                  shape: 'So8'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelPackageArn'],
              members: {
                ModelPackageArn: {}
              }
            }
          },
          CreateModelPackageGroup: {
            input: {
              type: 'structure',
              required: ['ModelPackageGroupName'],
              members: {
                ModelPackageGroupName: {},
                ModelPackageGroupDescription: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelPackageGroupArn'],
              members: {
                ModelPackageGroupArn: {}
              }
            }
          },
          CreateModelQualityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName', 'ModelQualityAppSpecification', 'ModelQualityJobInput', 'ModelQualityJobOutputConfig', 'JobResources', 'RoleArn'],
              members: {
                JobDefinitionName: {},
                ModelQualityBaselineConfig: {
                  shape: 'Soe'
                },
                ModelQualityAppSpecification: {
                  shape: 'Sof'
                },
                ModelQualityJobInput: {
                  shape: 'Soh'
                },
                ModelQualityJobOutputConfig: {
                  shape: 'S9u'
                },
                JobResources: {
                  shape: 'Sa0'
                },
                NetworkConfig: {
                  shape: 'Sa5'
                },
                RoleArn: {},
                StoppingCondition: {
                  shape: 'Sa6'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionArn'],
              members: {
                JobDefinitionArn: {}
              }
            }
          },
          CreateMonitoringSchedule: {
            input: {
              type: 'structure',
              required: ['MonitoringScheduleName', 'MonitoringScheduleConfig'],
              members: {
                MonitoringScheduleName: {},
                MonitoringScheduleConfig: {
                  shape: 'Sol'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MonitoringScheduleArn'],
              members: {
                MonitoringScheduleArn: {}
              }
            }
          },
          CreateNotebookInstance: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceName', 'InstanceType', 'RoleArn'],
              members: {
                NotebookInstanceName: {},
                InstanceType: {},
                SubnetId: {},
                SecurityGroupIds: {
                  shape: 'Saj'
                },
                RoleArn: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'S7'
                },
                LifecycleConfigName: {},
                DirectInternetAccess: {},
                VolumeSizeInGB: {
                  type: 'integer'
                },
                AcceleratorTypes: {
                  shape: 'Sp2'
                },
                DefaultCodeRepository: {},
                AdditionalCodeRepositories: {
                  shape: 'Sp5'
                },
                RootAccess: {},
                PlatformIdentifier: {},
                InstanceMetadataServiceConfiguration: {
                  shape: 'Sp8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookInstanceArn: {}
              }
            }
          },
          CreateNotebookInstanceLifecycleConfig: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceLifecycleConfigName'],
              members: {
                NotebookInstanceLifecycleConfigName: {},
                OnCreate: {
                  shape: 'Spd'
                },
                OnStart: {
                  shape: 'Spd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookInstanceLifecycleConfigArn: {}
              }
            }
          },
          CreatePipeline: {
            input: {
              type: 'structure',
              required: ['PipelineName', 'ClientRequestToken', 'RoleArn'],
              members: {
                PipelineName: {},
                PipelineDisplayName: {},
                PipelineDefinition: {},
                PipelineDefinitionS3Location: {
                  shape: 'Spl'
                },
                PipelineDescription: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                RoleArn: {},
                Tags: {
                  shape: 'S7'
                },
                ParallelismConfiguration: {
                  shape: 'Spr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineArn: {}
              }
            }
          },
          CreatePresignedDomainUrl: {
            input: {
              type: 'structure',
              required: ['DomainId', 'UserProfileName'],
              members: {
                DomainId: {},
                UserProfileName: {},
                SessionExpirationDurationInSeconds: {
                  type: 'integer'
                },
                ExpiresInSeconds: {
                  type: 'integer'
                },
                SpaceName: {},
                LandingUri: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthorizedUrl: {}
              }
            }
          },
          CreatePresignedNotebookInstanceUrl: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceName'],
              members: {
                NotebookInstanceName: {},
                SessionExpirationDurationInSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthorizedUrl: {}
              }
            }
          },
          CreateProcessingJob: {
            input: {
              type: 'structure',
              required: ['ProcessingJobName', 'ProcessingResources', 'AppSpecification', 'RoleArn'],
              members: {
                ProcessingInputs: {
                  shape: 'Sq4'
                },
                ProcessingOutputConfig: {
                  shape: 'Sqr'
                },
                ProcessingJobName: {},
                ProcessingResources: {
                  shape: 'Sqw'
                },
                StoppingCondition: {
                  shape: 'Sqy'
                },
                AppSpecification: {
                  shape: 'Sr0'
                },
                Environment: {
                  shape: 'Sr2'
                },
                NetworkConfig: {
                  shape: 'Sot'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S7'
                },
                ExperimentConfig: {
                  shape: 'Sr3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProcessingJobArn'],
              members: {
                ProcessingJobArn: {}
              }
            }
          },
          CreateProject: {
            input: {
              type: 'structure',
              required: ['ProjectName', 'ServiceCatalogProvisioningDetails'],
              members: {
                ProjectName: {},
                ProjectDescription: {},
                ServiceCatalogProvisioningDetails: {
                  shape: 'Sr8'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProjectArn', 'ProjectId'],
              members: {
                ProjectArn: {},
                ProjectId: {}
              }
            }
          },
          CreateSpace: {
            input: {
              type: 'structure',
              required: ['DomainId', 'SpaceName'],
              members: {
                DomainId: {},
                SpaceName: {},
                Tags: {
                  shape: 'S7'
                },
                SpaceSettings: {
                  shape: 'Sri'
                },
                OwnershipSettings: {
                  shape: 'Srq'
                },
                SpaceSharingSettings: {
                  shape: 'Srr'
                },
                SpaceDisplayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SpaceArn: {}
              }
            }
          },
          CreateStudioLifecycleConfig: {
            input: {
              type: 'structure',
              required: ['StudioLifecycleConfigName', 'StudioLifecycleConfigContent', 'StudioLifecycleConfigAppType'],
              members: {
                StudioLifecycleConfigName: {},
                StudioLifecycleConfigContent: {},
                StudioLifecycleConfigAppType: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StudioLifecycleConfigArn: {}
              }
            }
          },
          CreateTrainingJob: {
            input: {
              type: 'structure',
              required: ['TrainingJobName', 'AlgorithmSpecification', 'RoleArn', 'OutputDataConfig', 'ResourceConfig', 'StoppingCondition'],
              members: {
                TrainingJobName: {},
                HyperParameters: {
                  shape: 'S33'
                },
                AlgorithmSpecification: {
                  shape: 'Ss2'
                },
                RoleArn: {},
                InputDataConfig: {
                  shape: 'S35'
                },
                OutputDataConfig: {
                  shape: 'S3n'
                },
                ResourceConfig: {
                  shape: 'S3q'
                },
                VpcConfig: {
                  shape: 'S6b'
                },
                StoppingCondition: {
                  shape: 'S3w'
                },
                Tags: {
                  shape: 'S7'
                },
                EnableNetworkIsolation: {
                  type: 'boolean'
                },
                EnableInterContainerTrafficEncryption: {
                  type: 'boolean'
                },
                EnableManagedSpotTraining: {
                  type: 'boolean'
                },
                CheckpointConfig: {
                  shape: 'Si9'
                },
                DebugHookConfig: {
                  shape: 'Ssb'
                },
                DebugRuleConfigurations: {
                  shape: 'Ssj'
                },
                TensorBoardOutputConfig: {
                  shape: 'Ssn'
                },
                ExperimentConfig: {
                  shape: 'Sr3'
                },
                ProfilerConfig: {
                  shape: 'Sso'
                },
                ProfilerRuleConfigurations: {
                  shape: 'Sss'
                },
                Environment: {
                  shape: 'Ssu'
                },
                RetryStrategy: {
                  shape: 'Sia'
                },
                RemoteDebugConfig: {
                  shape: 'Ssx'
                },
                InfraCheckConfig: {
                  shape: 'Ssz'
                },
                SessionChainingConfig: {
                  type: 'structure',
                  members: {
                    EnableSessionTagChaining: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrainingJobArn'],
              members: {
                TrainingJobArn: {}
              }
            }
          },
          CreateTransformJob: {
            input: {
              type: 'structure',
              required: ['TransformJobName', 'ModelName', 'TransformInput', 'TransformOutput', 'TransformResources'],
              members: {
                TransformJobName: {},
                ModelName: {},
                MaxConcurrentTransforms: {
                  type: 'integer'
                },
                ModelClientConfig: {
                  shape: 'St7'
                },
                MaxPayloadInMB: {
                  type: 'integer'
                },
                BatchStrategy: {},
                Environment: {
                  shape: 'S44'
                },
                TransformInput: {
                  shape: 'S47'
                },
                TransformOutput: {
                  shape: 'S4b'
                },
                DataCaptureConfig: {
                  shape: 'Sta'
                },
                TransformResources: {
                  shape: 'S4e'
                },
                DataProcessing: {
                  shape: 'Stb'
                },
                Tags: {
                  shape: 'S7'
                },
                ExperimentConfig: {
                  shape: 'Sr3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TransformJobArn'],
              members: {
                TransformJobArn: {}
              }
            }
          },
          CreateTrial: {
            input: {
              type: 'structure',
              required: ['TrialName', 'ExperimentName'],
              members: {
                TrialName: {},
                DisplayName: {},
                ExperimentName: {},
                MetadataProperties: {
                  shape: 'S21'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialArn: {}
              }
            }
          },
          CreateTrialComponent: {
            input: {
              type: 'structure',
              required: ['TrialComponentName'],
              members: {
                TrialComponentName: {},
                DisplayName: {},
                Status: {
                  shape: 'Stj'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Parameters: {
                  shape: 'Stm'
                },
                InputArtifacts: {
                  shape: 'Stq'
                },
                OutputArtifacts: {
                  shape: 'Stq'
                },
                MetadataProperties: {
                  shape: 'S21'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialComponentArn: {}
              }
            }
          },
          CreateUserProfile: {
            input: {
              type: 'structure',
              required: ['DomainId', 'UserProfileName'],
              members: {
                DomainId: {},
                UserProfileName: {},
                SingleSignOnUserIdentifier: {},
                SingleSignOnUserValue: {},
                Tags: {
                  shape: 'S7'
                },
                UserSettings: {
                  shape: 'Sai'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserProfileArn: {}
              }
            }
          },
          CreateWorkforce: {
            input: {
              type: 'structure',
              required: ['WorkforceName'],
              members: {
                CognitoConfig: {
                  shape: 'Su1'
                },
                OidcConfig: {
                  shape: 'Su4'
                },
                SourceIpConfig: {
                  shape: 'Su7'
                },
                WorkforceName: {},
                Tags: {
                  shape: 'S7'
                },
                WorkforceVpcConfig: {
                  shape: 'Sub'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['WorkforceArn'],
              members: {
                WorkforceArn: {}
              }
            }
          },
          CreateWorkteam: {
            input: {
              type: 'structure',
              required: ['WorkteamName', 'MemberDefinitions', 'Description'],
              members: {
                WorkteamName: {},
                WorkforceName: {},
                MemberDefinitions: {
                  shape: 'Sul'
                },
                Description: {},
                NotificationConfiguration: {
                  shape: 'Sut'
                },
                WorkerAccessConfiguration: {
                  shape: 'Suv'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkteamArn: {}
              }
            }
          },
          DeleteAction: {
            input: {
              type: 'structure',
              required: ['ActionName'],
              members: {
                ActionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ActionArn: {}
              }
            }
          },
          DeleteAlgorithm: {
            input: {
              type: 'structure',
              required: ['AlgorithmName'],
              members: {
                AlgorithmName: {}
              }
            }
          },
          DeleteApp: {
            input: {
              type: 'structure',
              required: ['DomainId', 'AppType', 'AppName'],
              members: {
                DomainId: {},
                UserProfileName: {},
                SpaceName: {},
                AppType: {},
                AppName: {}
              }
            }
          },
          DeleteAppImageConfig: {
            input: {
              type: 'structure',
              required: ['AppImageConfigName'],
              members: {
                AppImageConfigName: {}
              }
            }
          },
          DeleteArtifact: {
            input: {
              type: 'structure',
              members: {
                ArtifactArn: {},
                Source: {
                  shape: 'S5j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ArtifactArn: {}
              }
            }
          },
          DeleteAssociation: {
            input: {
              type: 'structure',
              required: ['SourceArn', 'DestinationArn'],
              members: {
                SourceArn: {},
                DestinationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SourceArn: {},
                DestinationArn: {}
              }
            }
          },
          DeleteCluster: {
            input: {
              type: 'structure',
              required: ['ClusterName'],
              members: {
                ClusterName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ClusterArn'],
              members: {
                ClusterArn: {}
              }
            }
          },
          DeleteCodeRepository: {
            input: {
              type: 'structure',
              required: ['CodeRepositoryName'],
              members: {
                CodeRepositoryName: {}
              }
            }
          },
          DeleteCompilationJob: {
            input: {
              type: 'structure',
              required: ['CompilationJobName'],
              members: {
                CompilationJobName: {}
              }
            }
          },
          DeleteContext: {
            input: {
              type: 'structure',
              required: ['ContextName'],
              members: {
                ContextName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContextArn: {}
              }
            }
          },
          DeleteDataQualityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName'],
              members: {
                JobDefinitionName: {}
              }
            }
          },
          DeleteDeviceFleet: {
            input: {
              type: 'structure',
              required: ['DeviceFleetName'],
              members: {
                DeviceFleetName: {}
              }
            }
          },
          DeleteDomain: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {},
                RetentionPolicy: {
                  type: 'structure',
                  members: {
                    HomeEfsFileSystem: {}
                  }
                }
              }
            }
          },
          DeleteEdgeDeploymentPlan: {
            input: {
              type: 'structure',
              required: ['EdgeDeploymentPlanName'],
              members: {
                EdgeDeploymentPlanName: {}
              }
            }
          },
          DeleteEdgeDeploymentStage: {
            input: {
              type: 'structure',
              required: ['EdgeDeploymentPlanName', 'StageName'],
              members: {
                EdgeDeploymentPlanName: {},
                StageName: {}
              }
            }
          },
          DeleteEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName'],
              members: {
                EndpointName: {}
              }
            }
          },
          DeleteEndpointConfig: {
            input: {
              type: 'structure',
              required: ['EndpointConfigName'],
              members: {
                EndpointConfigName: {}
              }
            }
          },
          DeleteExperiment: {
            input: {
              type: 'structure',
              required: ['ExperimentName'],
              members: {
                ExperimentName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExperimentArn: {}
              }
            }
          },
          DeleteFeatureGroup: {
            input: {
              type: 'structure',
              required: ['FeatureGroupName'],
              members: {
                FeatureGroupName: {}
              }
            }
          },
          DeleteFlowDefinition: {
            input: {
              type: 'structure',
              required: ['FlowDefinitionName'],
              members: {
                FlowDefinitionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteHub: {
            input: {
              type: 'structure',
              required: ['HubName'],
              members: {
                HubName: {}
              }
            }
          },
          DeleteHubContent: {
            input: {
              type: 'structure',
              required: ['HubName', 'HubContentType', 'HubContentName', 'HubContentVersion'],
              members: {
                HubName: {},
                HubContentType: {},
                HubContentName: {},
                HubContentVersion: {}
              }
            }
          },
          DeleteHumanTaskUi: {
            input: {
              type: 'structure',
              required: ['HumanTaskUiName'],
              members: {
                HumanTaskUiName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteHyperParameterTuningJob: {
            input: {
              type: 'structure',
              required: ['HyperParameterTuningJobName'],
              members: {
                HyperParameterTuningJobName: {}
              }
            }
          },
          DeleteImage: {
            input: {
              type: 'structure',
              required: ['ImageName'],
              members: {
                ImageName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteImageVersion: {
            input: {
              type: 'structure',
              required: ['ImageName'],
              members: {
                ImageName: {},
                Version: {
                  type: 'integer'
                },
                Alias: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInferenceComponent: {
            input: {
              type: 'structure',
              required: ['InferenceComponentName'],
              members: {
                InferenceComponentName: {}
              }
            }
          },
          DeleteInferenceExperiment: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceExperimentArn'],
              members: {
                InferenceExperimentArn: {}
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
          DeleteModelBiasJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName'],
              members: {
                JobDefinitionName: {}
              }
            }
          },
          DeleteModelCard: {
            input: {
              type: 'structure',
              required: ['ModelCardName'],
              members: {
                ModelCardName: {}
              }
            }
          },
          DeleteModelExplainabilityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName'],
              members: {
                JobDefinitionName: {}
              }
            }
          },
          DeleteModelPackage: {
            input: {
              type: 'structure',
              required: ['ModelPackageName'],
              members: {
                ModelPackageName: {}
              }
            }
          },
          DeleteModelPackageGroup: {
            input: {
              type: 'structure',
              required: ['ModelPackageGroupName'],
              members: {
                ModelPackageGroupName: {}
              }
            }
          },
          DeleteModelPackageGroupPolicy: {
            input: {
              type: 'structure',
              required: ['ModelPackageGroupName'],
              members: {
                ModelPackageGroupName: {}
              }
            }
          },
          DeleteModelQualityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName'],
              members: {
                JobDefinitionName: {}
              }
            }
          },
          DeleteMonitoringSchedule: {
            input: {
              type: 'structure',
              required: ['MonitoringScheduleName'],
              members: {
                MonitoringScheduleName: {}
              }
            }
          },
          DeleteNotebookInstance: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceName'],
              members: {
                NotebookInstanceName: {}
              }
            }
          },
          DeleteNotebookInstanceLifecycleConfig: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceLifecycleConfigName'],
              members: {
                NotebookInstanceLifecycleConfigName: {}
              }
            }
          },
          DeletePipeline: {
            input: {
              type: 'structure',
              required: ['PipelineName', 'ClientRequestToken'],
              members: {
                PipelineName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineArn: {}
              }
            }
          },
          DeleteProject: {
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {}
              }
            }
          },
          DeleteSpace: {
            input: {
              type: 'structure',
              required: ['DomainId', 'SpaceName'],
              members: {
                DomainId: {},
                SpaceName: {}
              }
            }
          },
          DeleteStudioLifecycleConfig: {
            input: {
              type: 'structure',
              required: ['StudioLifecycleConfigName'],
              members: {
                StudioLifecycleConfigName: {}
              }
            }
          },
          DeleteTags: {
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
          DeleteTrial: {
            input: {
              type: 'structure',
              required: ['TrialName'],
              members: {
                TrialName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialArn: {}
              }
            }
          },
          DeleteTrialComponent: {
            input: {
              type: 'structure',
              required: ['TrialComponentName'],
              members: {
                TrialComponentName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialComponentArn: {}
              }
            }
          },
          DeleteUserProfile: {
            input: {
              type: 'structure',
              required: ['DomainId', 'UserProfileName'],
              members: {
                DomainId: {},
                UserProfileName: {}
              }
            }
          },
          DeleteWorkforce: {
            input: {
              type: 'structure',
              required: ['WorkforceName'],
              members: {
                WorkforceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWorkteam: {
            input: {
              type: 'structure',
              required: ['WorkteamName'],
              members: {
                WorkteamName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Success'],
              members: {
                Success: {
                  type: 'boolean'
                }
              }
            }
          },
          DeregisterDevices: {
            input: {
              type: 'structure',
              required: ['DeviceFleetName', 'DeviceNames'],
              members: {
                DeviceFleetName: {},
                DeviceNames: {
                  shape: 'Scc'
                }
              }
            }
          },
          DescribeAction: {
            input: {
              type: 'structure',
              required: ['ActionName'],
              members: {
                ActionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ActionName: {},
                ActionArn: {},
                Source: {
                  shape: 'S1u'
                },
                ActionType: {},
                Description: {},
                Status: {},
                Properties: {
                  shape: 'S1z'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                MetadataProperties: {
                  shape: 'S21'
                },
                LineageGroupArn: {}
              }
            }
          },
          DescribeAlgorithm: {
            input: {
              type: 'structure',
              required: ['AlgorithmName'],
              members: {
                AlgorithmName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AlgorithmName', 'AlgorithmArn', 'CreationTime', 'TrainingSpecification', 'AlgorithmStatus', 'AlgorithmStatusDetails'],
              members: {
                AlgorithmName: {},
                AlgorithmArn: {},
                AlgorithmDescription: {},
                CreationTime: {
                  type: 'timestamp'
                },
                TrainingSpecification: {
                  shape: 'S26'
                },
                InferenceSpecification: {
                  shape: 'Sr'
                },
                ValidationSpecification: {
                  shape: 'S2y'
                },
                AlgorithmStatus: {},
                AlgorithmStatusDetails: {
                  type: 'structure',
                  members: {
                    ValidationStatuses: {
                      shape: 'Sxd'
                    },
                    ImageScanStatuses: {
                      shape: 'Sxd'
                    }
                  }
                },
                ProductId: {},
                CertifyForMarketplace: {
                  type: 'boolean'
                }
              }
            }
          },
          DescribeApp: {
            input: {
              type: 'structure',
              required: ['DomainId', 'AppType', 'AppName'],
              members: {
                DomainId: {},
                UserProfileName: {},
                SpaceName: {},
                AppType: {},
                AppName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AppArn: {},
                AppType: {},
                AppName: {},
                DomainId: {},
                UserProfileName: {},
                SpaceName: {},
                Status: {},
                LastHealthCheckTimestamp: {
                  type: 'timestamp'
                },
                LastUserActivityTimestamp: {
                  type: 'timestamp'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                ResourceSpec: {
                  shape: 'S4p'
                }
              }
            }
          },
          DescribeAppImageConfig: {
            input: {
              type: 'structure',
              required: ['AppImageConfigName'],
              members: {
                AppImageConfigName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AppImageConfigArn: {},
                AppImageConfigName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                KernelGatewayImageConfig: {
                  shape: 'S4z'
                },
                JupyterLabAppImageConfig: {
                  shape: 'S58'
                },
                CodeEditorAppImageConfig: {
                  shape: 'S5f'
                }
              }
            }
          },
          DescribeArtifact: {
            input: {
              type: 'structure',
              required: ['ArtifactArn'],
              members: {
                ArtifactArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ArtifactName: {},
                ArtifactArn: {},
                Source: {
                  shape: 'S5j'
                },
                ArtifactType: {},
                Properties: {
                  shape: 'S1z'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                MetadataProperties: {
                  shape: 'S21'
                },
                LineageGroupArn: {}
              }
            }
          },
          DescribeAutoMLJob: {
            input: {
              type: 'structure',
              required: ['AutoMLJobName'],
              members: {
                AutoMLJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AutoMLJobName', 'AutoMLJobArn', 'InputDataConfig', 'OutputDataConfig', 'RoleArn', 'CreationTime', 'LastModifiedTime', 'AutoMLJobStatus', 'AutoMLJobSecondaryStatus'],
              members: {
                AutoMLJobName: {},
                AutoMLJobArn: {},
                InputDataConfig: {
                  shape: 'S5t'
                },
                OutputDataConfig: {
                  shape: 'S61'
                },
                RoleArn: {},
                AutoMLJobObjective: {
                  shape: 'S63'
                },
                ProblemType: {},
                AutoMLJobConfig: {
                  shape: 'S65'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                PartialFailureReasons: {
                  shape: 'Sxr'
                },
                BestCandidate: {
                  shape: 'Sxt'
                },
                AutoMLJobStatus: {},
                AutoMLJobSecondaryStatus: {},
                GenerateCandidateDefinitionsOnly: {
                  type: 'boolean'
                },
                AutoMLJobArtifacts: {
                  shape: 'Syl'
                },
                ResolvedAttributes: {
                  type: 'structure',
                  members: {
                    AutoMLJobObjective: {
                      shape: 'S63'
                    },
                    ProblemType: {},
                    CompletionCriteria: {
                      shape: 'S66'
                    }
                  }
                },
                ModelDeployConfig: {
                  shape: 'S6p'
                },
                ModelDeployResult: {
                  shape: 'Syp'
                }
              }
            }
          },
          DescribeAutoMLJobV2: {
            input: {
              type: 'structure',
              required: ['AutoMLJobName'],
              members: {
                AutoMLJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AutoMLJobName', 'AutoMLJobArn', 'AutoMLJobInputDataConfig', 'OutputDataConfig', 'RoleArn', 'CreationTime', 'LastModifiedTime', 'AutoMLJobStatus', 'AutoMLJobSecondaryStatus'],
              members: {
                AutoMLJobName: {},
                AutoMLJobArn: {},
                AutoMLJobInputDataConfig: {
                  shape: 'S6v'
                },
                OutputDataConfig: {
                  shape: 'S61'
                },
                RoleArn: {},
                AutoMLJobObjective: {
                  shape: 'S63'
                },
                AutoMLProblemTypeConfig: {
                  shape: 'S6x'
                },
                AutoMLProblemTypeConfigName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                PartialFailureReasons: {
                  shape: 'Sxr'
                },
                BestCandidate: {
                  shape: 'Sxt'
                },
                AutoMLJobStatus: {},
                AutoMLJobSecondaryStatus: {},
                AutoMLJobArtifacts: {
                  shape: 'Syl'
                },
                ResolvedAttributes: {
                  type: 'structure',
                  members: {
                    AutoMLJobObjective: {
                      shape: 'S63'
                    },
                    CompletionCriteria: {
                      shape: 'S66'
                    },
                    AutoMLProblemTypeResolvedAttributes: {
                      type: 'structure',
                      members: {
                        TabularResolvedAttributes: {
                          type: 'structure',
                          members: {
                            ProblemType: {}
                          }
                        },
                        TextGenerationResolvedAttributes: {
                          type: 'structure',
                          members: {
                            BaseModelName: {}
                          }
                        }
                      },
                      union: true
                    }
                  }
                },
                ModelDeployConfig: {
                  shape: 'S6p'
                },
                ModelDeployResult: {
                  shape: 'Syp'
                },
                DataSplitConfig: {
                  shape: 'S6l'
                },
                SecurityConfig: {
                  shape: 'S6a'
                }
              }
            }
          },
          DescribeCluster: {
            input: {
              type: 'structure',
              required: ['ClusterName'],
              members: {
                ClusterName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ClusterArn', 'ClusterStatus', 'InstanceGroups'],
              members: {
                ClusterArn: {},
                ClusterName: {},
                ClusterStatus: {},
                CreationTime: {
                  type: 'timestamp'
                },
                FailureMessage: {},
                InstanceGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CurrentCount: {
                        type: 'integer'
                      },
                      TargetCount: {
                        type: 'integer'
                      },
                      InstanceGroupName: {},
                      InstanceType: {},
                      LifeCycleConfig: {
                        shape: 'S82'
                      },
                      ExecutionRole: {},
                      ThreadsPerCore: {
                        type: 'integer'
                      }
                    }
                  }
                },
                VpcConfig: {
                  shape: 'S6b'
                }
              }
            }
          },
          DescribeClusterNode: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'NodeId'],
              members: {
                ClusterName: {},
                NodeId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['NodeDetails'],
              members: {
                NodeDetails: {
                  type: 'structure',
                  members: {
                    InstanceGroupName: {},
                    InstanceId: {},
                    InstanceStatus: {
                      shape: 'Sz7'
                    },
                    InstanceType: {},
                    LaunchTime: {
                      type: 'timestamp'
                    },
                    LifeCycleConfig: {
                      shape: 'S82'
                    },
                    ThreadsPerCore: {
                      type: 'integer'
                    },
                    PrivatePrimaryIp: {},
                    PrivateDnsHostname: {},
                    Placement: {
                      type: 'structure',
                      members: {
                        AvailabilityZone: {},
                        AvailabilityZoneId: {}
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeCodeRepository: {
            input: {
              type: 'structure',
              required: ['CodeRepositoryName'],
              members: {
                CodeRepositoryName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CodeRepositoryName', 'CodeRepositoryArn', 'CreationTime', 'LastModifiedTime'],
              members: {
                CodeRepositoryName: {},
                CodeRepositoryArn: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                GitConfig: {
                  shape: 'S88'
                }
              }
            }
          },
          DescribeCompilationJob: {
            input: {
              type: 'structure',
              required: ['CompilationJobName'],
              members: {
                CompilationJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CompilationJobName', 'CompilationJobArn', 'CompilationJobStatus', 'StoppingCondition', 'CreationTime', 'LastModifiedTime', 'FailureReason', 'ModelArtifacts', 'RoleArn', 'InputConfig', 'OutputConfig'],
              members: {
                CompilationJobName: {},
                CompilationJobArn: {},
                CompilationJobStatus: {},
                CompilationStartTime: {
                  type: 'timestamp'
                },
                CompilationEndTime: {
                  type: 'timestamp'
                },
                StoppingCondition: {
                  shape: 'S3w'
                },
                InferenceImage: {},
                ModelPackageVersionArn: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                ModelArtifacts: {
                  shape: 'Szl'
                },
                ModelDigests: {
                  type: 'structure',
                  members: {
                    ArtifactDigest: {}
                  }
                },
                RoleArn: {},
                InputConfig: {
                  shape: 'S8f'
                },
                OutputConfig: {
                  shape: 'S8i'
                },
                VpcConfig: {
                  shape: 'S8p'
                },
                DerivedInformation: {
                  type: 'structure',
                  members: {
                    DerivedDataInputConfig: {}
                  }
                }
              }
            }
          },
          DescribeContext: {
            input: {
              type: 'structure',
              required: ['ContextName'],
              members: {
                ContextName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContextName: {},
                ContextArn: {},
                Source: {
                  shape: 'S8y'
                },
                ContextType: {},
                Description: {},
                Properties: {
                  shape: 'S1z'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                LineageGroupArn: {}
              }
            }
          },
          DescribeDataQualityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName'],
              members: {
                JobDefinitionName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionArn', 'JobDefinitionName', 'CreationTime', 'DataQualityAppSpecification', 'DataQualityJobInput', 'DataQualityJobOutputConfig', 'JobResources', 'RoleArn'],
              members: {
                JobDefinitionArn: {},
                JobDefinitionName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                DataQualityBaselineConfig: {
                  shape: 'S93'
                },
                DataQualityAppSpecification: {
                  shape: 'S97'
                },
                DataQualityJobInput: {
                  shape: 'S9g'
                },
                DataQualityJobOutputConfig: {
                  shape: 'S9u'
                },
                JobResources: {
                  shape: 'Sa0'
                },
                NetworkConfig: {
                  shape: 'Sa5'
                },
                RoleArn: {},
                StoppingCondition: {
                  shape: 'Sa6'
                }
              }
            }
          },
          DescribeDevice: {
            input: {
              type: 'structure',
              required: ['DeviceName', 'DeviceFleetName'],
              members: {
                NextToken: {},
                DeviceName: {},
                DeviceFleetName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DeviceName', 'DeviceFleetName', 'RegistrationTime'],
              members: {
                DeviceArn: {},
                DeviceName: {},
                Description: {},
                DeviceFleetName: {},
                IotThingName: {},
                RegistrationTime: {
                  type: 'timestamp'
                },
                LatestHeartbeat: {
                  type: 'timestamp'
                },
                Models: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelName', 'ModelVersion'],
                    members: {
                      ModelName: {},
                      ModelVersion: {},
                      LatestSampleTime: {
                        type: 'timestamp'
                      },
                      LatestInference: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                MaxModels: {
                  type: 'integer'
                },
                NextToken: {},
                AgentVersion: {}
              }
            }
          },
          DescribeDeviceFleet: {
            input: {
              type: 'structure',
              required: ['DeviceFleetName'],
              members: {
                DeviceFleetName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DeviceFleetName', 'DeviceFleetArn', 'OutputConfig', 'CreationTime', 'LastModifiedTime'],
              members: {
                DeviceFleetName: {},
                DeviceFleetArn: {},
                OutputConfig: {
                  shape: 'Sac'
                },
                Description: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                RoleArn: {},
                IotRoleAlias: {}
              }
            }
          },
          DescribeDomain: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainArn: {},
                DomainId: {},
                DomainName: {},
                HomeEfsFileSystemId: {},
                SingleSignOnManagedApplicationInstanceId: {},
                SingleSignOnApplicationArn: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                SecurityGroupIdForDomainBoundary: {},
                AuthMode: {},
                DefaultUserSettings: {
                  shape: 'Sai'
                },
                DomainSettings: {
                  shape: 'Sbq'
                },
                AppNetworkAccessType: {},
                HomeEfsFileSystemKmsKeyId: {
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated, use KmsKeyId instead.'
                },
                SubnetIds: {
                  shape: 'S6e'
                },
                Url: {},
                VpcId: {},
                KmsKeyId: {},
                AppSecurityGroupManagement: {},
                DefaultSpaceSettings: {
                  shape: 'Sc0'
                }
              }
            }
          },
          DescribeEdgeDeploymentPlan: {
            input: {
              type: 'structure',
              required: ['EdgeDeploymentPlanName'],
              members: {
                EdgeDeploymentPlanName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EdgeDeploymentPlanArn', 'EdgeDeploymentPlanName', 'ModelConfigs', 'DeviceFleetName', 'Stages'],
              members: {
                EdgeDeploymentPlanArn: {},
                EdgeDeploymentPlanName: {},
                ModelConfigs: {
                  shape: 'Sc5'
                },
                DeviceFleetName: {},
                EdgeDeploymentSuccess: {
                  type: 'integer'
                },
                EdgeDeploymentPending: {
                  type: 'integer'
                },
                EdgeDeploymentFailed: {
                  type: 'integer'
                },
                Stages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StageName', 'DeviceSelectionConfig', 'DeploymentConfig', 'DeploymentStatus'],
                    members: {
                      StageName: {},
                      DeviceSelectionConfig: {
                        shape: 'Sc9'
                      },
                      DeploymentConfig: {
                        shape: 'Sce'
                      },
                      DeploymentStatus: {
                        type: 'structure',
                        required: ['StageStatus', 'EdgeDeploymentSuccessInStage', 'EdgeDeploymentPendingInStage', 'EdgeDeploymentFailedInStage'],
                        members: {
                          StageStatus: {},
                          EdgeDeploymentSuccessInStage: {
                            type: 'integer'
                          },
                          EdgeDeploymentPendingInStage: {
                            type: 'integer'
                          },
                          EdgeDeploymentFailedInStage: {
                            type: 'integer'
                          },
                          EdgeDeploymentStatusMessage: {},
                          EdgeDeploymentStageStartTime: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeEdgePackagingJob: {
            input: {
              type: 'structure',
              required: ['EdgePackagingJobName'],
              members: {
                EdgePackagingJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['EdgePackagingJobArn', 'EdgePackagingJobName', 'EdgePackagingJobStatus'],
              members: {
                EdgePackagingJobArn: {},
                EdgePackagingJobName: {},
                CompilationJobName: {},
                ModelName: {},
                ModelVersion: {},
                RoleArn: {},
                OutputConfig: {
                  shape: 'Sac'
                },
                ResourceKey: {},
                EdgePackagingJobStatus: {},
                EdgePackagingJobStatusMessage: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                ModelArtifact: {},
                ModelSignature: {},
                PresetDeploymentOutput: {
                  type: 'structure',
                  required: ['Type'],
                  members: {
                    Type: {},
                    Artifact: {},
                    Status: {},
                    StatusMessage: {}
                  }
                }
              }
            }
          },
          DescribeEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName'],
              members: {
                EndpointName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['EndpointName', 'EndpointArn', 'EndpointStatus', 'CreationTime', 'LastModifiedTime'],
              members: {
                EndpointName: {},
                EndpointArn: {},
                EndpointConfigName: {},
                ProductionVariants: {
                  shape: 'S10r'
                },
                DataCaptureConfig: {
                  shape: 'S10z'
                },
                EndpointStatus: {},
                FailureReason: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastDeploymentConfig: {
                  shape: 'Scn'
                },
                AsyncInferenceConfig: {
                  shape: 'Se3'
                },
                PendingDeploymentSummary: {
                  type: 'structure',
                  required: ['EndpointConfigName'],
                  members: {
                    EndpointConfigName: {},
                    ProductionVariants: {
                      shape: 'S113'
                    },
                    StartTime: {
                      type: 'timestamp'
                    },
                    ShadowProductionVariants: {
                      shape: 'S113'
                    }
                  }
                },
                ExplainerConfig: {
                  shape: 'Seb'
                },
                ShadowProductionVariants: {
                  shape: 'S10r'
                }
              }
            }
          },
          DescribeEndpointConfig: {
            input: {
              type: 'structure',
              required: ['EndpointConfigName'],
              members: {
                EndpointConfigName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['EndpointConfigName', 'EndpointConfigArn', 'ProductionVariants', 'CreationTime'],
              members: {
                EndpointConfigName: {},
                EndpointConfigArn: {},
                ProductionVariants: {
                  shape: 'Sd5'
                },
                DataCaptureConfig: {
                  shape: 'Sds'
                },
                KmsKeyId: {},
                CreationTime: {
                  type: 'timestamp'
                },
                AsyncInferenceConfig: {
                  shape: 'Se3'
                },
                ExplainerConfig: {
                  shape: 'Seb'
                },
                ShadowProductionVariants: {
                  shape: 'Sd5'
                },
                ExecutionRoleArn: {},
                VpcConfig: {
                  shape: 'S6b'
                },
                EnableNetworkIsolation: {
                  type: 'boolean'
                }
              }
            }
          },
          DescribeExperiment: {
            input: {
              type: 'structure',
              required: ['ExperimentName'],
              members: {
                ExperimentName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExperimentName: {},
                ExperimentArn: {},
                DisplayName: {},
                Source: {
                  shape: 'S119'
                },
                Description: {},
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                }
              }
            }
          },
          DescribeFeatureGroup: {
            input: {
              type: 'structure',
              required: ['FeatureGroupName'],
              members: {
                FeatureGroupName: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['FeatureGroupArn', 'FeatureGroupName', 'RecordIdentifierFeatureName', 'EventTimeFeatureName', 'FeatureDefinitions', 'CreationTime', 'NextToken'],
              members: {
                FeatureGroupArn: {},
                FeatureGroupName: {},
                RecordIdentifierFeatureName: {},
                EventTimeFeatureName: {},
                FeatureDefinitions: {
                  shape: 'Sfa'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                OnlineStoreConfig: {
                  shape: 'Sfh'
                },
                OfflineStoreConfig: {
                  shape: 'Sfn'
                },
                ThroughputConfig: {
                  type: 'structure',
                  required: ['ThroughputMode'],
                  members: {
                    ThroughputMode: {},
                    ProvisionedReadCapacityUnits: {
                      type: 'integer'
                    },
                    ProvisionedWriteCapacityUnits: {
                      type: 'integer'
                    }
                  }
                },
                RoleArn: {},
                FeatureGroupStatus: {},
                OfflineStoreStatus: {
                  shape: 'S11h'
                },
                LastUpdateStatus: {
                  shape: 'S11k'
                },
                FailureReason: {},
                Description: {},
                NextToken: {},
                OnlineStoreTotalSizeBytes: {
                  type: 'long'
                }
              }
            }
          },
          DescribeFeatureMetadata: {
            input: {
              type: 'structure',
              required: ['FeatureGroupName', 'FeatureName'],
              members: {
                FeatureGroupName: {},
                FeatureName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['FeatureGroupArn', 'FeatureGroupName', 'FeatureName', 'FeatureType', 'CreationTime', 'LastModifiedTime'],
              members: {
                FeatureGroupArn: {},
                FeatureGroupName: {},
                FeatureName: {},
                FeatureType: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                Description: {},
                Parameters: {
                  shape: 'S11q'
                }
              }
            }
          },
          DescribeFlowDefinition: {
            input: {
              type: 'structure',
              required: ['FlowDefinitionName'],
              members: {
                FlowDefinitionName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['FlowDefinitionArn', 'FlowDefinitionName', 'FlowDefinitionStatus', 'CreationTime', 'OutputConfig', 'RoleArn'],
              members: {
                FlowDefinitionArn: {},
                FlowDefinitionName: {},
                FlowDefinitionStatus: {},
                CreationTime: {
                  type: 'timestamp'
                },
                HumanLoopRequestSource: {
                  shape: 'Sg2'
                },
                HumanLoopActivationConfig: {
                  shape: 'Sg4'
                },
                HumanLoopConfig: {
                  shape: 'Sg7'
                },
                OutputConfig: {
                  shape: 'Sgm'
                },
                RoleArn: {},
                FailureReason: {}
              }
            }
          },
          DescribeHub: {
            input: {
              type: 'structure',
              required: ['HubName'],
              members: {
                HubName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HubName', 'HubArn', 'HubStatus', 'CreationTime', 'LastModifiedTime'],
              members: {
                HubName: {},
                HubArn: {},
                HubDisplayName: {},
                HubDescription: {},
                HubSearchKeywords: {
                  shape: 'Sgt'
                },
                S3StorageConfig: {
                  shape: 'Sgv'
                },
                HubStatus: {},
                FailureReason: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeHubContent: {
            input: {
              type: 'structure',
              required: ['HubName', 'HubContentType', 'HubContentName'],
              members: {
                HubName: {},
                HubContentType: {},
                HubContentName: {},
                HubContentVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HubContentName', 'HubContentArn', 'HubContentVersion', 'HubContentType', 'DocumentSchemaVersion', 'HubName', 'HubArn', 'HubContentDocument', 'HubContentStatus', 'CreationTime'],
              members: {
                HubContentName: {},
                HubContentArn: {},
                HubContentVersion: {},
                HubContentType: {},
                DocumentSchemaVersion: {},
                HubName: {},
                HubArn: {},
                HubContentDisplayName: {},
                HubContentDescription: {},
                HubContentMarkdown: {},
                HubContentDocument: {},
                HubContentSearchKeywords: {
                  shape: 'S128'
                },
                HubContentDependencies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DependencyOriginPath: {},
                      DependencyCopyPath: {}
                    }
                  }
                },
                HubContentStatus: {},
                FailureReason: {},
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeHumanTaskUi: {
            input: {
              type: 'structure',
              required: ['HumanTaskUiName'],
              members: {
                HumanTaskUiName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HumanTaskUiArn', 'HumanTaskUiName', 'CreationTime', 'UiTemplate'],
              members: {
                HumanTaskUiArn: {},
                HumanTaskUiName: {},
                HumanTaskUiStatus: {},
                CreationTime: {
                  type: 'timestamp'
                },
                UiTemplate: {
                  type: 'structure',
                  members: {
                    Url: {},
                    ContentSha256: {}
                  }
                }
              }
            }
          },
          DescribeHyperParameterTuningJob: {
            input: {
              type: 'structure',
              required: ['HyperParameterTuningJobName'],
              members: {
                HyperParameterTuningJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HyperParameterTuningJobName', 'HyperParameterTuningJobArn', 'HyperParameterTuningJobConfig', 'HyperParameterTuningJobStatus', 'CreationTime', 'TrainingJobStatusCounters', 'ObjectiveStatusCounters'],
              members: {
                HyperParameterTuningJobName: {},
                HyperParameterTuningJobArn: {},
                HyperParameterTuningJobConfig: {
                  shape: 'Sh6'
                },
                TrainingJobDefinition: {
                  shape: 'Shz'
                },
                TrainingJobDefinitions: {
                  shape: 'Sif'
                },
                HyperParameterTuningJobStatus: {},
                CreationTime: {
                  type: 'timestamp'
                },
                HyperParameterTuningEndTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                TrainingJobStatusCounters: {
                  shape: 'S12n'
                },
                ObjectiveStatusCounters: {
                  shape: 'S12p'
                },
                BestTrainingJob: {
                  shape: 'S12r'
                },
                OverallBestTrainingJob: {
                  shape: 'S12r'
                },
                WarmStartConfig: {
                  shape: 'Sig'
                },
                Autotune: {
                  shape: 'Sik'
                },
                FailureReason: {},
                TuningJobCompletionDetails: {
                  shape: 'S12u'
                },
                ConsumedResources: {
                  shape: 'S12v'
                }
              }
            }
          },
          DescribeImage: {
            input: {
              type: 'structure',
              required: ['ImageName'],
              members: {
                ImageName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CreationTime: {
                  type: 'timestamp'
                },
                Description: {},
                DisplayName: {},
                FailureReason: {},
                ImageArn: {},
                ImageName: {},
                ImageStatus: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                RoleArn: {}
              }
            }
          },
          DescribeImageVersion: {
            input: {
              type: 'structure',
              required: ['ImageName'],
              members: {
                ImageName: {},
                Version: {
                  type: 'integer'
                },
                Alias: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BaseImage: {},
                ContainerImage: {},
                CreationTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                ImageArn: {},
                ImageVersionArn: {},
                ImageVersionStatus: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                Version: {
                  type: 'integer'
                },
                VendorGuidance: {},
                JobType: {},
                MLFramework: {},
                ProgrammingLang: {},
                Processor: {},
                Horovod: {
                  type: 'boolean'
                },
                ReleaseNotes: {}
              }
            }
          },
          DescribeInferenceComponent: {
            input: {
              type: 'structure',
              required: ['InferenceComponentName'],
              members: {
                InferenceComponentName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceComponentName', 'InferenceComponentArn', 'EndpointName', 'EndpointArn', 'CreationTime', 'LastModifiedTime'],
              members: {
                InferenceComponentName: {},
                InferenceComponentArn: {},
                EndpointName: {},
                EndpointArn: {},
                VariantName: {},
                FailureReason: {},
                Specification: {
                  type: 'structure',
                  members: {
                    ModelName: {},
                    Container: {
                      type: 'structure',
                      members: {
                        DeployedImage: {
                          shape: 'S10u'
                        },
                        ArtifactUrl: {},
                        Environment: {
                          shape: 'S16'
                        }
                      }
                    },
                    StartupParameters: {
                      shape: 'Sj9'
                    },
                    ComputeResourceRequirements: {
                      shape: 'Sja'
                    }
                  }
                },
                RuntimeConfig: {
                  type: 'structure',
                  members: {
                    DesiredCopyCount: {
                      type: 'integer'
                    },
                    CurrentCopyCount: {
                      type: 'integer'
                    }
                  }
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                InferenceComponentStatus: {}
              }
            }
          },
          DescribeInferenceExperiment: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'Name', 'Type', 'Status', 'EndpointMetadata', 'ModelVariants'],
              members: {
                Arn: {},
                Name: {},
                Type: {},
                Schedule: {
                  shape: 'Sjl'
                },
                Status: {},
                StatusReason: {},
                Description: {},
                CreationTime: {
                  type: 'timestamp'
                },
                CompletionTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                RoleArn: {},
                EndpointMetadata: {
                  type: 'structure',
                  required: ['EndpointName'],
                  members: {
                    EndpointName: {},
                    EndpointConfigName: {},
                    EndpointStatus: {},
                    FailureReason: {}
                  }
                },
                ModelVariants: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelName', 'VariantName', 'InfrastructureConfig', 'Status'],
                    members: {
                      ModelName: {},
                      VariantName: {},
                      InfrastructureConfig: {
                        shape: 'Sjr'
                      },
                      Status: {}
                    }
                  }
                },
                DataStorageConfig: {
                  shape: 'Sjw'
                },
                ShadowModeConfig: {
                  shape: 'Sjx'
                },
                KmsKey: {}
              }
            }
          },
          DescribeInferenceRecommendationsJob: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['JobName', 'JobType', 'JobArn', 'RoleArn', 'Status', 'CreationTime', 'LastModifiedTime', 'InputConfig'],
              members: {
                JobName: {},
                JobDescription: {},
                JobType: {},
                JobArn: {},
                RoleArn: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                CompletionTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                InputConfig: {
                  shape: 'Sk5'
                },
                StoppingConditions: {
                  shape: 'Slb'
                },
                InferenceRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Metrics', 'EndpointConfiguration', 'ModelConfiguration'],
                    members: {
                      RecommendationId: {},
                      Metrics: {
                        shape: 'S13m'
                      },
                      EndpointConfiguration: {
                        shape: 'S13p'
                      },
                      ModelConfiguration: {
                        shape: 'S13r'
                      },
                      InvocationEndTime: {
                        type: 'timestamp'
                      },
                      InvocationStartTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                EndpointPerformances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Metrics', 'EndpointInfo'],
                    members: {
                      Metrics: {
                        shape: 'S13z'
                      },
                      EndpointInfo: {
                        shape: 'Sl4'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeLabelingJob: {
            input: {
              type: 'structure',
              required: ['LabelingJobName'],
              members: {
                LabelingJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['LabelingJobStatus', 'LabelCounters', 'CreationTime', 'LastModifiedTime', 'JobReferenceCode', 'LabelingJobName', 'LabelingJobArn', 'InputConfig', 'OutputConfig', 'RoleArn', 'HumanTaskConfig'],
              members: {
                LabelingJobStatus: {},
                LabelCounters: {
                  shape: 'S143'
                },
                FailureReason: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                JobReferenceCode: {},
                LabelingJobName: {},
                LabelingJobArn: {},
                LabelAttributeName: {},
                InputConfig: {
                  shape: 'Sln'
                },
                OutputConfig: {
                  shape: 'Slu'
                },
                RoleArn: {},
                LabelCategoryConfigS3Uri: {},
                StoppingConditions: {
                  shape: 'Slv'
                },
                LabelingJobAlgorithmsConfig: {
                  shape: 'Sly'
                },
                HumanTaskConfig: {
                  shape: 'Sm2'
                },
                Tags: {
                  shape: 'S7'
                },
                LabelingJobOutput: {
                  shape: 'S146'
                }
              }
            }
          },
          DescribeLineageGroup: {
            input: {
              type: 'structure',
              required: ['LineageGroupName'],
              members: {
                LineageGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LineageGroupName: {},
                LineageGroupArn: {},
                DisplayName: {},
                Description: {},
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
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
              required: ['ModelName', 'CreationTime', 'ModelArn'],
              members: {
                ModelName: {},
                PrimaryContainer: {
                  shape: 'Smh'
                },
                Containers: {
                  shape: 'Smq'
                },
                InferenceExecutionConfig: {
                  shape: 'Smr'
                },
                ExecutionRoleArn: {},
                VpcConfig: {
                  shape: 'S6b'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                ModelArn: {},
                EnableNetworkIsolation: {
                  type: 'boolean'
                },
                DeploymentRecommendation: {
                  shape: 'S14b'
                }
              }
            }
          },
          DescribeModelBiasJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName'],
              members: {
                JobDefinitionName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionArn', 'JobDefinitionName', 'CreationTime', 'ModelBiasAppSpecification', 'ModelBiasJobInput', 'ModelBiasJobOutputConfig', 'JobResources', 'RoleArn'],
              members: {
                JobDefinitionArn: {},
                JobDefinitionName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                ModelBiasBaselineConfig: {
                  shape: 'Smv'
                },
                ModelBiasAppSpecification: {
                  shape: 'Smw'
                },
                ModelBiasJobInput: {
                  shape: 'Smx'
                },
                ModelBiasJobOutputConfig: {
                  shape: 'S9u'
                },
                JobResources: {
                  shape: 'Sa0'
                },
                NetworkConfig: {
                  shape: 'Sa5'
                },
                RoleArn: {},
                StoppingCondition: {
                  shape: 'Sa6'
                }
              }
            }
          },
          DescribeModelCard: {
            input: {
              type: 'structure',
              required: ['ModelCardName'],
              members: {
                ModelCardName: {},
                ModelCardVersion: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelCardArn', 'ModelCardName', 'ModelCardVersion', 'Content', 'ModelCardStatus', 'CreationTime', 'CreatedBy'],
              members: {
                ModelCardArn: {},
                ModelCardName: {},
                ModelCardVersion: {
                  type: 'integer'
                },
                Content: {
                  shape: 'Sn2'
                },
                ModelCardStatus: {},
                SecurityConfig: {
                  shape: 'Sn1'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                ModelCardProcessingStatus: {}
              }
            }
          },
          DescribeModelCardExportJob: {
            input: {
              type: 'structure',
              required: ['ModelCardExportJobArn'],
              members: {
                ModelCardExportJobArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelCardExportJobName', 'ModelCardExportJobArn', 'Status', 'ModelCardName', 'ModelCardVersion', 'OutputConfig', 'CreatedAt', 'LastModifiedAt'],
              members: {
                ModelCardExportJobName: {},
                ModelCardExportJobArn: {},
                Status: {},
                ModelCardName: {},
                ModelCardVersion: {
                  type: 'integer'
                },
                OutputConfig: {
                  shape: 'Sn8'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastModifiedAt: {
                  type: 'timestamp'
                },
                FailureReason: {},
                ExportArtifacts: {
                  type: 'structure',
                  required: ['S3ExportArtifacts'],
                  members: {
                    S3ExportArtifacts: {}
                  }
                }
              }
            }
          },
          DescribeModelExplainabilityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName'],
              members: {
                JobDefinitionName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionArn', 'JobDefinitionName', 'CreationTime', 'ModelExplainabilityAppSpecification', 'ModelExplainabilityJobInput', 'ModelExplainabilityJobOutputConfig', 'JobResources', 'RoleArn'],
              members: {
                JobDefinitionArn: {},
                JobDefinitionName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                ModelExplainabilityBaselineConfig: {
                  shape: 'Snc'
                },
                ModelExplainabilityAppSpecification: {
                  shape: 'Snd'
                },
                ModelExplainabilityJobInput: {
                  shape: 'Sne'
                },
                ModelExplainabilityJobOutputConfig: {
                  shape: 'S9u'
                },
                JobResources: {
                  shape: 'Sa0'
                },
                NetworkConfig: {
                  shape: 'Sa5'
                },
                RoleArn: {},
                StoppingCondition: {
                  shape: 'Sa6'
                }
              }
            }
          },
          DescribeModelPackage: {
            input: {
              type: 'structure',
              required: ['ModelPackageName'],
              members: {
                ModelPackageName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelPackageName', 'ModelPackageArn', 'CreationTime', 'ModelPackageStatus', 'ModelPackageStatusDetails'],
              members: {
                ModelPackageName: {},
                ModelPackageGroupName: {},
                ModelPackageVersion: {
                  type: 'integer'
                },
                ModelPackageArn: {},
                ModelPackageDescription: {},
                CreationTime: {
                  type: 'timestamp'
                },
                InferenceSpecification: {
                  shape: 'Sr'
                },
                SourceAlgorithmSpecification: {
                  shape: 'Snk'
                },
                ValidationSpecification: {
                  shape: 'Snh'
                },
                ModelPackageStatus: {},
                ModelPackageStatusDetails: {
                  shape: 'S14s'
                },
                CertifyForMarketplace: {
                  type: 'boolean'
                },
                ModelApprovalStatus: {},
                CreatedBy: {
                  shape: 'Sx6'
                },
                MetadataProperties: {
                  shape: 'S21'
                },
                ModelMetrics: {
                  shape: 'Snn'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                ApprovalDescription: {},
                Domain: {},
                Task: {},
                SamplePayloadUrl: {},
                CustomerMetadataProperties: {
                  shape: 'Snu'
                },
                DriftCheckBaselines: {
                  shape: 'Snx'
                },
                AdditionalInferenceSpecifications: {
                  shape: 'So3'
                },
                SkipModelValidation: {},
                SourceUri: {},
                SecurityConfig: {
                  shape: 'So7'
                },
                ModelCard: {
                  shape: 'So8'
                }
              }
            }
          },
          DescribeModelPackageGroup: {
            input: {
              type: 'structure',
              required: ['ModelPackageGroupName'],
              members: {
                ModelPackageGroupName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelPackageGroupName', 'ModelPackageGroupArn', 'CreationTime', 'CreatedBy', 'ModelPackageGroupStatus'],
              members: {
                ModelPackageGroupName: {},
                ModelPackageGroupArn: {},
                ModelPackageGroupDescription: {},
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                ModelPackageGroupStatus: {}
              }
            }
          },
          DescribeModelQualityJobDefinition: {
            input: {
              type: 'structure',
              required: ['JobDefinitionName'],
              members: {
                JobDefinitionName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionArn', 'JobDefinitionName', 'CreationTime', 'ModelQualityAppSpecification', 'ModelQualityJobInput', 'ModelQualityJobOutputConfig', 'JobResources', 'RoleArn'],
              members: {
                JobDefinitionArn: {},
                JobDefinitionName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                ModelQualityBaselineConfig: {
                  shape: 'Soe'
                },
                ModelQualityAppSpecification: {
                  shape: 'Sof'
                },
                ModelQualityJobInput: {
                  shape: 'Soh'
                },
                ModelQualityJobOutputConfig: {
                  shape: 'S9u'
                },
                JobResources: {
                  shape: 'Sa0'
                },
                NetworkConfig: {
                  shape: 'Sa5'
                },
                RoleArn: {},
                StoppingCondition: {
                  shape: 'Sa6'
                }
              }
            }
          },
          DescribeMonitoringSchedule: {
            input: {
              type: 'structure',
              required: ['MonitoringScheduleName'],
              members: {
                MonitoringScheduleName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['MonitoringScheduleArn', 'MonitoringScheduleName', 'MonitoringScheduleStatus', 'CreationTime', 'LastModifiedTime', 'MonitoringScheduleConfig'],
              members: {
                MonitoringScheduleArn: {},
                MonitoringScheduleName: {},
                MonitoringScheduleStatus: {},
                MonitoringType: {},
                FailureReason: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                MonitoringScheduleConfig: {
                  shape: 'Sol'
                },
                EndpointName: {},
                LastMonitoringExecutionSummary: {
                  shape: 'S155'
                }
              }
            }
          },
          DescribeNotebookInstance: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceName'],
              members: {
                NotebookInstanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookInstanceArn: {},
                NotebookInstanceName: {},
                NotebookInstanceStatus: {},
                FailureReason: {},
                Url: {},
                InstanceType: {},
                SubnetId: {},
                SecurityGroups: {
                  shape: 'Saj'
                },
                RoleArn: {},
                KmsKeyId: {},
                NetworkInterfaceId: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                NotebookInstanceLifecycleConfigName: {},
                DirectInternetAccess: {},
                VolumeSizeInGB: {
                  type: 'integer'
                },
                AcceleratorTypes: {
                  shape: 'Sp2'
                },
                DefaultCodeRepository: {},
                AdditionalCodeRepositories: {
                  shape: 'Sp5'
                },
                RootAccess: {},
                PlatformIdentifier: {},
                InstanceMetadataServiceConfiguration: {
                  shape: 'Sp8'
                }
              }
            }
          },
          DescribeNotebookInstanceLifecycleConfig: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceLifecycleConfigName'],
              members: {
                NotebookInstanceLifecycleConfigName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookInstanceLifecycleConfigArn: {},
                NotebookInstanceLifecycleConfigName: {},
                OnCreate: {
                  shape: 'Spd'
                },
                OnStart: {
                  shape: 'Spd'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribePipeline: {
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineArn: {},
                PipelineName: {},
                PipelineDisplayName: {},
                PipelineDefinition: {},
                PipelineDescription: {},
                RoleArn: {},
                PipelineStatus: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastRunTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                ParallelismConfiguration: {
                  shape: 'Spr'
                }
              }
            }
          },
          DescribePipelineDefinitionForExecution: {
            input: {
              type: 'structure',
              required: ['PipelineExecutionArn'],
              members: {
                PipelineExecutionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineDefinition: {},
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribePipelineExecution: {
            input: {
              type: 'structure',
              required: ['PipelineExecutionArn'],
              members: {
                PipelineExecutionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineArn: {},
                PipelineExecutionArn: {},
                PipelineExecutionDisplayName: {},
                PipelineExecutionStatus: {},
                PipelineExecutionDescription: {},
                PipelineExperimentConfig: {
                  shape: 'S15p'
                },
                FailureReason: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                ParallelismConfiguration: {
                  shape: 'Spr'
                },
                SelectiveExecutionConfig: {
                  shape: 'S15r'
                }
              }
            }
          },
          DescribeProcessingJob: {
            input: {
              type: 'structure',
              required: ['ProcessingJobName'],
              members: {
                ProcessingJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ProcessingJobName', 'ProcessingResources', 'AppSpecification', 'ProcessingJobArn', 'ProcessingJobStatus', 'CreationTime'],
              members: {
                ProcessingInputs: {
                  shape: 'Sq4'
                },
                ProcessingOutputConfig: {
                  shape: 'Sqr'
                },
                ProcessingJobName: {},
                ProcessingResources: {
                  shape: 'Sqw'
                },
                StoppingCondition: {
                  shape: 'Sqy'
                },
                AppSpecification: {
                  shape: 'Sr0'
                },
                Environment: {
                  shape: 'Sr2'
                },
                NetworkConfig: {
                  shape: 'Sot'
                },
                RoleArn: {},
                ExperimentConfig: {
                  shape: 'Sr3'
                },
                ProcessingJobArn: {},
                ProcessingJobStatus: {},
                ExitMessage: {},
                FailureReason: {},
                ProcessingEndTime: {
                  type: 'timestamp'
                },
                ProcessingStartTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                MonitoringScheduleArn: {},
                AutoMLJobArn: {},
                TrainingJobArn: {}
              }
            }
          },
          DescribeProject: {
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ProjectArn', 'ProjectName', 'ProjectId', 'ServiceCatalogProvisioningDetails', 'ProjectStatus', 'CreationTime'],
              members: {
                ProjectArn: {},
                ProjectName: {},
                ProjectId: {},
                ProjectDescription: {},
                ServiceCatalogProvisioningDetails: {
                  shape: 'Sr8'
                },
                ServiceCatalogProvisionedProductDetails: {
                  shape: 'S160'
                },
                ProjectStatus: {},
                CreatedBy: {
                  shape: 'Sx6'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                }
              }
            }
          },
          DescribeSpace: {
            input: {
              type: 'structure',
              required: ['DomainId', 'SpaceName'],
              members: {
                DomainId: {},
                SpaceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainId: {},
                SpaceArn: {},
                SpaceName: {},
                HomeEfsFileSystemUid: {},
                Status: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                SpaceSettings: {
                  shape: 'Sri'
                },
                OwnershipSettings: {
                  shape: 'Srq'
                },
                SpaceSharingSettings: {
                  shape: 'Srr'
                },
                SpaceDisplayName: {},
                Url: {}
              }
            }
          },
          DescribeStudioLifecycleConfig: {
            input: {
              type: 'structure',
              required: ['StudioLifecycleConfigName'],
              members: {
                StudioLifecycleConfigName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StudioLifecycleConfigArn: {},
                StudioLifecycleConfigName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                StudioLifecycleConfigContent: {},
                StudioLifecycleConfigAppType: {}
              }
            }
          },
          DescribeSubscribedWorkteam: {
            input: {
              type: 'structure',
              required: ['WorkteamArn'],
              members: {
                WorkteamArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SubscribedWorkteam'],
              members: {
                SubscribedWorkteam: {
                  shape: 'S16b'
                }
              }
            }
          },
          DescribeTrainingJob: {
            input: {
              type: 'structure',
              required: ['TrainingJobName'],
              members: {
                TrainingJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TrainingJobName', 'TrainingJobArn', 'ModelArtifacts', 'TrainingJobStatus', 'SecondaryStatus', 'AlgorithmSpecification', 'ResourceConfig', 'StoppingCondition', 'CreationTime'],
              members: {
                TrainingJobName: {},
                TrainingJobArn: {},
                TuningJobArn: {},
                LabelingJobArn: {},
                AutoMLJobArn: {},
                ModelArtifacts: {
                  shape: 'Szl'
                },
                TrainingJobStatus: {},
                SecondaryStatus: {},
                FailureReason: {},
                HyperParameters: {
                  shape: 'S33'
                },
                AlgorithmSpecification: {
                  shape: 'Ss2'
                },
                RoleArn: {},
                InputDataConfig: {
                  shape: 'S35'
                },
                OutputDataConfig: {
                  shape: 'S3n'
                },
                ResourceConfig: {
                  shape: 'S3q'
                },
                WarmPoolStatus: {
                  shape: 'S16f'
                },
                VpcConfig: {
                  shape: 'S6b'
                },
                StoppingCondition: {
                  shape: 'S3w'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                TrainingStartTime: {
                  type: 'timestamp'
                },
                TrainingEndTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                SecondaryStatusTransitions: {
                  shape: 'S16i'
                },
                FinalMetricDataList: {
                  shape: 'S16l'
                },
                EnableNetworkIsolation: {
                  type: 'boolean'
                },
                EnableInterContainerTrafficEncryption: {
                  type: 'boolean'
                },
                EnableManagedSpotTraining: {
                  type: 'boolean'
                },
                CheckpointConfig: {
                  shape: 'Si9'
                },
                TrainingTimeInSeconds: {
                  type: 'integer'
                },
                BillableTimeInSeconds: {
                  type: 'integer'
                },
                DebugHookConfig: {
                  shape: 'Ssb'
                },
                ExperimentConfig: {
                  shape: 'Sr3'
                },
                DebugRuleConfigurations: {
                  shape: 'Ssj'
                },
                TensorBoardOutputConfig: {
                  shape: 'Ssn'
                },
                DebugRuleEvaluationStatuses: {
                  shape: 'S16p'
                },
                ProfilerConfig: {
                  shape: 'Sso'
                },
                ProfilerRuleConfigurations: {
                  shape: 'Sss'
                },
                ProfilerRuleEvaluationStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RuleConfigurationName: {},
                      RuleEvaluationJobArn: {},
                      RuleEvaluationStatus: {},
                      StatusDetails: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                ProfilingStatus: {},
                Environment: {
                  shape: 'Ssu'
                },
                RetryStrategy: {
                  shape: 'Sia'
                },
                RemoteDebugConfig: {
                  shape: 'Ssx'
                },
                InfraCheckConfig: {
                  shape: 'Ssz'
                }
              }
            }
          },
          DescribeTransformJob: {
            input: {
              type: 'structure',
              required: ['TransformJobName'],
              members: {
                TransformJobName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TransformJobName', 'TransformJobArn', 'TransformJobStatus', 'ModelName', 'TransformInput', 'TransformResources', 'CreationTime'],
              members: {
                TransformJobName: {},
                TransformJobArn: {},
                TransformJobStatus: {},
                FailureReason: {},
                ModelName: {},
                MaxConcurrentTransforms: {
                  type: 'integer'
                },
                ModelClientConfig: {
                  shape: 'St7'
                },
                MaxPayloadInMB: {
                  type: 'integer'
                },
                BatchStrategy: {},
                Environment: {
                  shape: 'S44'
                },
                TransformInput: {
                  shape: 'S47'
                },
                TransformOutput: {
                  shape: 'S4b'
                },
                DataCaptureConfig: {
                  shape: 'Sta'
                },
                TransformResources: {
                  shape: 'S4e'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                TransformStartTime: {
                  type: 'timestamp'
                },
                TransformEndTime: {
                  type: 'timestamp'
                },
                LabelingJobArn: {},
                AutoMLJobArn: {},
                DataProcessing: {
                  shape: 'Stb'
                },
                ExperimentConfig: {
                  shape: 'Sr3'
                }
              }
            }
          },
          DescribeTrial: {
            input: {
              type: 'structure',
              required: ['TrialName'],
              members: {
                TrialName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialName: {},
                TrialArn: {},
                DisplayName: {},
                ExperimentName: {},
                Source: {
                  shape: 'S171'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                MetadataProperties: {
                  shape: 'S21'
                }
              }
            }
          },
          DescribeTrialComponent: {
            input: {
              type: 'structure',
              required: ['TrialComponentName'],
              members: {
                TrialComponentName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialComponentName: {},
                TrialComponentArn: {},
                DisplayName: {},
                Source: {
                  shape: 'S175'
                },
                Status: {
                  shape: 'Stj'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'Sx6'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedBy: {
                  shape: 'Sx6'
                },
                Parameters: {
                  shape: 'Stm'
                },
                InputArtifacts: {
                  shape: 'Stq'
                },
                OutputArtifacts: {
                  shape: 'Stq'
                },
                MetadataProperties: {
                  shape: 'S21'
                },
                Metrics: {
                  shape: 'S177'
                },
                LineageGroupArn: {},
                Sources: {
                  type: 'list',
                  member: {
                    shape: 'S175'
                  }
                }
              }
            }
          },
          DescribeUserProfile: {
            input: {
              type: 'structure',
              required: ['DomainId', 'UserProfileName'],
              members: {
                DomainId: {},
                UserProfileName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainId: {},
                UserProfileArn: {},
                UserProfileName: {},
                HomeEfsFileSystemUid: {},
                Status: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                FailureReason: {},
                SingleSignOnUserIdentifier: {},
                SingleSignOnUserValue: {},
                UserSettings: {
                  shape: 'Sai'
                }
              }
            }
          },
          DescribeWorkforce: {
            input: {
              type: 'structure',
              required: ['WorkforceName'],
              members: {
                WorkforceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Workforce'],
              members: {
                Workforce: {
                  shape: 'S17h'
                }
              }
            }
          },
          DescribeWorkteam: {
            input: {
              type: 'structure',
              required: ['WorkteamName'],
              members: {
                WorkteamName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Workteam'],
              members: {
                Workteam: {
                  shape: 'S17p'
                }
              }
            }
          },
          DisableSagemakerServicecatalogPortfolio: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateTrialComponent: {
            input: {
              type: 'structure',
              required: ['TrialComponentName', 'TrialName'],
              members: {
                TrialComponentName: {},
                TrialName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialComponentArn: {},
                TrialArn: {}
              }
            }
          },
          EnableSagemakerServicecatalogPortfolio: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetDeviceFleetReport: {
            input: {
              type: 'structure',
              required: ['DeviceFleetName'],
              members: {
                DeviceFleetName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DeviceFleetArn', 'DeviceFleetName'],
              members: {
                DeviceFleetArn: {},
                DeviceFleetName: {},
                OutputConfig: {
                  shape: 'Sac'
                },
                Description: {},
                ReportGenerated: {
                  type: 'timestamp'
                },
                DeviceStats: {
                  type: 'structure',
                  required: ['ConnectedDeviceCount', 'RegisteredDeviceCount'],
                  members: {
                    ConnectedDeviceCount: {
                      type: 'long'
                    },
                    RegisteredDeviceCount: {
                      type: 'long'
                    }
                  }
                },
                AgentVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Version', 'AgentCount'],
                    members: {
                      Version: {},
                      AgentCount: {
                        type: 'long'
                      }
                    }
                  }
                },
                ModelStats: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelName', 'ModelVersion', 'OfflineDeviceCount', 'ConnectedDeviceCount', 'ActiveDeviceCount', 'SamplingDeviceCount'],
                    members: {
                      ModelName: {},
                      ModelVersion: {},
                      OfflineDeviceCount: {
                        type: 'long'
                      },
                      ConnectedDeviceCount: {
                        type: 'long'
                      },
                      ActiveDeviceCount: {
                        type: 'long'
                      },
                      SamplingDeviceCount: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          GetLineageGroupPolicy: {
            input: {
              type: 'structure',
              required: ['LineageGroupName'],
              members: {
                LineageGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LineageGroupArn: {},
                ResourcePolicy: {}
              }
            }
          },
          GetModelPackageGroupPolicy: {
            input: {
              type: 'structure',
              required: ['ModelPackageGroupName'],
              members: {
                ModelPackageGroupName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResourcePolicy'],
              members: {
                ResourcePolicy: {}
              }
            }
          },
          GetSagemakerServicecatalogPortfolioStatus: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          GetScalingConfigurationRecommendation: {
            input: {
              type: 'structure',
              required: ['InferenceRecommendationsJobName'],
              members: {
                InferenceRecommendationsJobName: {},
                RecommendationId: {},
                EndpointName: {},
                TargetCpuUtilizationPerCore: {
                  type: 'integer'
                },
                ScalingPolicyObjective: {
                  shape: 'S18h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InferenceRecommendationsJobName: {},
                RecommendationId: {},
                EndpointName: {},
                TargetCpuUtilizationPerCore: {
                  type: 'integer'
                },
                ScalingPolicyObjective: {
                  shape: 'S18h'
                },
                Metric: {
                  type: 'structure',
                  members: {
                    InvocationsPerInstance: {
                      type: 'integer'
                    },
                    ModelLatency: {
                      type: 'integer'
                    }
                  }
                },
                DynamicScalingConfiguration: {
                  type: 'structure',
                  members: {
                    MinCapacity: {
                      type: 'integer'
                    },
                    MaxCapacity: {
                      type: 'integer'
                    },
                    ScaleInCooldown: {
                      type: 'integer'
                    },
                    ScaleOutCooldown: {
                      type: 'integer'
                    },
                    ScalingPolicies: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          TargetTracking: {
                            type: 'structure',
                            members: {
                              MetricSpecification: {
                                type: 'structure',
                                members: {
                                  Predefined: {
                                    type: 'structure',
                                    members: {
                                      PredefinedMetricType: {}
                                    }
                                  },
                                  Customized: {
                                    type: 'structure',
                                    members: {
                                      MetricName: {},
                                      Namespace: {},
                                      Statistic: {}
                                    }
                                  }
                                },
                                union: true
                              },
                              TargetValue: {
                                type: 'double'
                              }
                            }
                          }
                        },
                        union: true
                      }
                    }
                  }
                }
              }
            }
          },
          GetSearchSuggestions: {
            input: {
              type: 'structure',
              required: ['Resource'],
              members: {
                Resource: {},
                SuggestionQuery: {
                  type: 'structure',
                  members: {
                    PropertyNameQuery: {
                      type: 'structure',
                      required: ['PropertyNameHint'],
                      members: {
                        PropertyNameHint: {}
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PropertyNameSuggestions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PropertyName: {}
                    }
                  }
                }
              }
            }
          },
          ImportHubContent: {
            input: {
              type: 'structure',
              required: ['HubContentName', 'HubContentType', 'DocumentSchemaVersion', 'HubName', 'HubContentDocument'],
              members: {
                HubContentName: {},
                HubContentVersion: {},
                HubContentType: {},
                DocumentSchemaVersion: {},
                HubName: {},
                HubContentDisplayName: {},
                HubContentDescription: {},
                HubContentMarkdown: {},
                HubContentDocument: {},
                HubContentSearchKeywords: {
                  shape: 'S128'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HubArn', 'HubContentArn'],
              members: {
                HubArn: {},
                HubContentArn: {}
              }
            }
          },
          ListActions: {
            input: {
              type: 'structure',
              members: {
                SourceUri: {},
                ActionType: {},
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ActionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ActionArn: {},
                      ActionName: {},
                      Source: {
                        shape: 'S1u'
                      },
                      ActionType: {},
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAlgorithms: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AlgorithmSummaryList'],
              members: {
                AlgorithmSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AlgorithmName', 'AlgorithmArn', 'CreationTime', 'AlgorithmStatus'],
                    members: {
                      AlgorithmName: {},
                      AlgorithmArn: {},
                      AlgorithmDescription: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      AlgorithmStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAliases: {
            input: {
              type: 'structure',
              required: ['ImageName'],
              members: {
                ImageName: {},
                Alias: {},
                Version: {
                  type: 'integer'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SageMakerImageVersionAliases: {
                  shape: 'Siv'
                },
                NextToken: {}
              }
            }
          },
          ListAppImageConfigs: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                ModifiedTimeBefore: {
                  type: 'timestamp'
                },
                ModifiedTimeAfter: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                AppImageConfigs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppImageConfigArn: {},
                      AppImageConfigName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      KernelGatewayImageConfig: {
                        shape: 'S4z'
                      },
                      JupyterLabAppImageConfig: {
                        shape: 'S58'
                      },
                      CodeEditorAppImageConfig: {
                        shape: 'S5f'
                      }
                    }
                  }
                }
              }
            }
          },
          ListApps: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortOrder: {},
                SortBy: {},
                DomainIdEquals: {},
                UserProfileNameEquals: {},
                SpaceNameEquals: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Apps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainId: {},
                      UserProfileName: {},
                      SpaceName: {},
                      AppType: {},
                      AppName: {},
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      ResourceSpec: {
                        shape: 'S4p'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListArtifacts: {
            input: {
              type: 'structure',
              members: {
                SourceUri: {},
                ArtifactType: {},
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ArtifactSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ArtifactArn: {},
                      ArtifactName: {},
                      Source: {
                        shape: 'S5j'
                      },
                      ArtifactType: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAssociations: {
            input: {
              type: 'structure',
              members: {
                SourceArn: {},
                DestinationArn: {},
                SourceType: {},
                DestinationType: {},
                AssociationType: {},
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceArn: {},
                      DestinationArn: {},
                      SourceType: {},
                      DestinationType: {},
                      AssociationType: {},
                      SourceName: {},
                      DestinationName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      CreatedBy: {
                        shape: 'Sx6'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAutoMLJobs: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                StatusEquals: {},
                SortOrder: {},
                SortBy: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AutoMLJobSummaries'],
              members: {
                AutoMLJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AutoMLJobName', 'AutoMLJobArn', 'AutoMLJobStatus', 'AutoMLJobSecondaryStatus', 'CreationTime', 'LastModifiedTime'],
                    members: {
                      AutoMLJobName: {},
                      AutoMLJobArn: {},
                      AutoMLJobStatus: {},
                      AutoMLJobSecondaryStatus: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      FailureReason: {},
                      PartialFailureReasons: {
                        shape: 'Sxr'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCandidatesForAutoMLJob: {
            input: {
              type: 'structure',
              required: ['AutoMLJobName'],
              members: {
                AutoMLJobName: {},
                StatusEquals: {},
                CandidateNameEquals: {},
                SortOrder: {},
                SortBy: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Candidates'],
              members: {
                Candidates: {
                  type: 'list',
                  member: {
                    shape: 'Sxt'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListClusterNodes: {
            input: {
              type: 'structure',
              required: ['ClusterName'],
              members: {
                ClusterName: {},
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                InstanceGroupNameContains: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['NextToken', 'ClusterNodeSummaries'],
              members: {
                NextToken: {},
                ClusterNodeSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['InstanceGroupName', 'InstanceId', 'InstanceType', 'LaunchTime', 'InstanceStatus'],
                    members: {
                      InstanceGroupName: {},
                      InstanceId: {},
                      InstanceType: {},
                      LaunchTime: {
                        type: 'timestamp'
                      },
                      InstanceStatus: {
                        shape: 'Sz7'
                      }
                    }
                  }
                }
              }
            }
          },
          ListClusters: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['NextToken', 'ClusterSummaries'],
              members: {
                NextToken: {},
                ClusterSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ClusterArn', 'ClusterName', 'CreationTime', 'ClusterStatus'],
                    members: {
                      ClusterArn: {},
                      ClusterName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      ClusterStatus: {}
                    }
                  }
                }
              }
            }
          },
          ListCodeRepositories: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CodeRepositorySummaryList'],
              members: {
                CodeRepositorySummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CodeRepositoryName', 'CodeRepositoryArn', 'CreationTime', 'LastModifiedTime'],
                    members: {
                      CodeRepositoryName: {},
                      CodeRepositoryArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      GitConfig: {
                        shape: 'S88'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCompilationJobs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                StatusEquals: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CompilationJobSummaries'],
              members: {
                CompilationJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CompilationJobName', 'CompilationJobArn', 'CreationTime', 'CompilationJobStatus'],
                    members: {
                      CompilationJobName: {},
                      CompilationJobArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      CompilationStartTime: {
                        type: 'timestamp'
                      },
                      CompilationEndTime: {
                        type: 'timestamp'
                      },
                      CompilationTargetDevice: {},
                      CompilationTargetPlatformOs: {},
                      CompilationTargetPlatformArch: {},
                      CompilationTargetPlatformAccelerator: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      CompilationJobStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListContexts: {
            input: {
              type: 'structure',
              members: {
                SourceUri: {},
                ContextType: {},
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContextSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ContextArn: {},
                      ContextName: {},
                      Source: {
                        shape: 'S8y'
                      },
                      ContextType: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDataQualityJobDefinitions: {
            input: {
              type: 'structure',
              members: {
                EndpointName: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionSummaries'],
              members: {
                JobDefinitionSummaries: {
                  shape: 'S1b9'
                },
                NextToken: {}
              }
            }
          },
          ListDeviceFleets: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DeviceFleetSummaries'],
              members: {
                DeviceFleetSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DeviceFleetArn', 'DeviceFleetName'],
                    members: {
                      DeviceFleetArn: {},
                      DeviceFleetName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDevices: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                LatestHeartbeatAfter: {
                  type: 'timestamp'
                },
                ModelName: {},
                DeviceFleetName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DeviceSummaries'],
              members: {
                DeviceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DeviceName', 'DeviceArn'],
                    members: {
                      DeviceName: {},
                      DeviceArn: {},
                      Description: {},
                      DeviceFleetName: {},
                      IotThingName: {},
                      RegistrationTime: {
                        type: 'timestamp'
                      },
                      LatestHeartbeat: {
                        type: 'timestamp'
                      },
                      Models: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['ModelName', 'ModelVersion'],
                          members: {
                            ModelName: {},
                            ModelVersion: {}
                          }
                        }
                      },
                      AgentVersion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDomains: {
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
                Domains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainArn: {},
                      DomainId: {},
                      DomainName: {},
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      Url: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEdgeDeploymentPlans: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                DeviceFleetNameContains: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['EdgeDeploymentPlanSummaries'],
              members: {
                EdgeDeploymentPlanSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EdgeDeploymentPlanArn', 'EdgeDeploymentPlanName', 'DeviceFleetName', 'EdgeDeploymentSuccess', 'EdgeDeploymentPending', 'EdgeDeploymentFailed'],
                    members: {
                      EdgeDeploymentPlanArn: {},
                      EdgeDeploymentPlanName: {},
                      DeviceFleetName: {},
                      EdgeDeploymentSuccess: {
                        type: 'integer'
                      },
                      EdgeDeploymentPending: {
                        type: 'integer'
                      },
                      EdgeDeploymentFailed: {
                        type: 'integer'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEdgePackagingJobs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                ModelNameContains: {},
                StatusEquals: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['EdgePackagingJobSummaries'],
              members: {
                EdgePackagingJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EdgePackagingJobArn', 'EdgePackagingJobName', 'EdgePackagingJobStatus'],
                    members: {
                      EdgePackagingJobArn: {},
                      EdgePackagingJobName: {},
                      EdgePackagingJobStatus: {},
                      CompilationJobName: {},
                      ModelName: {},
                      ModelVersion: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEndpointConfigs: {
            input: {
              type: 'structure',
              members: {
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EndpointConfigs'],
              members: {
                EndpointConfigs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EndpointConfigName', 'EndpointConfigArn', 'CreationTime'],
                    members: {
                      EndpointConfigName: {},
                      EndpointConfigArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEndpoints: {
            input: {
              type: 'structure',
              members: {
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                StatusEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Endpoints'],
              members: {
                Endpoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EndpointName', 'EndpointArn', 'CreationTime', 'LastModifiedTime', 'EndpointStatus'],
                    members: {
                      EndpointName: {},
                      EndpointArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      EndpointStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListExperiments: {
            input: {
              type: 'structure',
              members: {
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ExperimentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ExperimentArn: {},
                      ExperimentName: {},
                      DisplayName: {},
                      ExperimentSource: {
                        shape: 'S119'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFeatureGroups: {
            input: {
              type: 'structure',
              members: {
                NameContains: {},
                FeatureGroupStatusEquals: {},
                OfflineStoreStatusEquals: {},
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                SortOrder: {},
                SortBy: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['FeatureGroupSummaries'],
              members: {
                FeatureGroupSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FeatureGroupName', 'FeatureGroupArn', 'CreationTime'],
                    members: {
                      FeatureGroupName: {},
                      FeatureGroupArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      FeatureGroupStatus: {},
                      OfflineStoreStatus: {
                        shape: 'S11h'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFlowDefinitions: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FlowDefinitionSummaries'],
              members: {
                FlowDefinitionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FlowDefinitionName', 'FlowDefinitionArn', 'FlowDefinitionStatus', 'CreationTime'],
                    members: {
                      FlowDefinitionName: {},
                      FlowDefinitionArn: {},
                      FlowDefinitionStatus: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      FailureReason: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListHubContentVersions: {
            input: {
              type: 'structure',
              required: ['HubName', 'HubContentType', 'HubContentName'],
              members: {
                HubName: {},
                HubContentType: {},
                HubContentName: {},
                MinVersion: {},
                MaxSchemaVersion: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HubContentSummaries'],
              members: {
                HubContentSummaries: {
                  shape: 'S1cz'
                },
                NextToken: {}
              }
            }
          },
          ListHubContents: {
            input: {
              type: 'structure',
              required: ['HubName', 'HubContentType'],
              members: {
                HubName: {},
                HubContentType: {},
                NameContains: {},
                MaxSchemaVersion: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HubContentSummaries'],
              members: {
                HubContentSummaries: {
                  shape: 'S1cz'
                },
                NextToken: {}
              }
            }
          },
          ListHubs: {
            input: {
              type: 'structure',
              members: {
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HubSummaries'],
              members: {
                HubSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['HubName', 'HubArn', 'HubStatus', 'CreationTime', 'LastModifiedTime'],
                    members: {
                      HubName: {},
                      HubArn: {},
                      HubDisplayName: {},
                      HubDescription: {},
                      HubSearchKeywords: {
                        shape: 'Sgt'
                      },
                      HubStatus: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListHumanTaskUis: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HumanTaskUiSummaries'],
              members: {
                HumanTaskUiSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['HumanTaskUiName', 'HumanTaskUiArn', 'CreationTime'],
                    members: {
                      HumanTaskUiName: {},
                      HumanTaskUiArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListHyperParameterTuningJobs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortBy: {},
                SortOrder: {},
                NameContains: {},
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                StatusEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HyperParameterTuningJobSummaries'],
              members: {
                HyperParameterTuningJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['HyperParameterTuningJobName', 'HyperParameterTuningJobArn', 'HyperParameterTuningJobStatus', 'Strategy', 'CreationTime', 'TrainingJobStatusCounters', 'ObjectiveStatusCounters'],
                    members: {
                      HyperParameterTuningJobName: {},
                      HyperParameterTuningJobArn: {},
                      HyperParameterTuningJobStatus: {},
                      Strategy: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      HyperParameterTuningEndTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      TrainingJobStatusCounters: {
                        shape: 'S12n'
                      },
                      ObjectiveStatusCounters: {
                        shape: 'S12p'
                      },
                      ResourceLimits: {
                        shape: 'Shc'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListImageVersions: {
            input: {
              type: 'structure',
              required: ['ImageName'],
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                ImageName: {},
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CreationTime', 'ImageArn', 'ImageVersionArn', 'ImageVersionStatus', 'LastModifiedTime', 'Version'],
                    members: {
                      CreationTime: {
                        type: 'timestamp'
                      },
                      FailureReason: {},
                      ImageArn: {},
                      ImageVersionArn: {},
                      ImageVersionStatus: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      Version: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListImages: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Images: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CreationTime', 'ImageArn', 'ImageName', 'ImageStatus', 'LastModifiedTime'],
                    members: {
                      CreationTime: {
                        type: 'timestamp'
                      },
                      Description: {},
                      DisplayName: {},
                      FailureReason: {},
                      ImageArn: {},
                      ImageName: {},
                      ImageStatus: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInferenceComponents: {
            input: {
              type: 'structure',
              members: {
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                StatusEquals: {},
                EndpointNameEquals: {},
                VariantNameEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceComponents'],
              members: {
                InferenceComponents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CreationTime', 'InferenceComponentArn', 'InferenceComponentName', 'EndpointArn', 'EndpointName', 'VariantName', 'LastModifiedTime'],
                    members: {
                      CreationTime: {
                        type: 'timestamp'
                      },
                      InferenceComponentArn: {},
                      InferenceComponentName: {},
                      EndpointArn: {},
                      EndpointName: {},
                      VariantName: {},
                      InferenceComponentStatus: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInferenceExperiments: {
            input: {
              type: 'structure',
              members: {
                NameContains: {},
                Type: {},
                StatusEquals: {},
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InferenceExperiments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Type', 'Status', 'CreationTime', 'LastModifiedTime'],
                    members: {
                      Name: {},
                      Type: {},
                      Schedule: {
                        shape: 'Sjl'
                      },
                      Status: {},
                      StatusReason: {},
                      Description: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      CompletionTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      RoleArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInferenceRecommendationsJobSteps: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {},
                Status: {},
                StepType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Steps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StepType', 'JobName', 'Status'],
                    members: {
                      StepType: {},
                      JobName: {},
                      Status: {},
                      InferenceBenchmark: {
                        type: 'structure',
                        required: ['ModelConfiguration'],
                        members: {
                          Metrics: {
                            shape: 'S13m'
                          },
                          EndpointMetrics: {
                            shape: 'S13z'
                          },
                          EndpointConfiguration: {
                            shape: 'S13p'
                          },
                          ModelConfiguration: {
                            shape: 'S13r'
                          },
                          FailureReason: {},
                          InvocationEndTime: {
                            type: 'timestamp'
                          },
                          InvocationStartTime: {
                            type: 'timestamp'
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
          ListInferenceRecommendationsJobs: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                StatusEquals: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ModelNameEquals: {},
                ModelPackageVersionArnEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceRecommendationsJobs'],
              members: {
                InferenceRecommendationsJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['JobName', 'JobDescription', 'JobType', 'JobArn', 'Status', 'CreationTime', 'RoleArn', 'LastModifiedTime'],
                    members: {
                      JobName: {},
                      JobDescription: {},
                      JobType: {},
                      JobArn: {},
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      CompletionTime: {
                        type: 'timestamp'
                      },
                      RoleArn: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      FailureReason: {},
                      ModelName: {},
                      SamplePayloadUrl: {},
                      ModelPackageVersionArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLabelingJobs: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                NameContains: {},
                SortBy: {},
                SortOrder: {},
                StatusEquals: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LabelingJobSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['LabelingJobName', 'LabelingJobArn', 'CreationTime', 'LastModifiedTime', 'LabelingJobStatus', 'LabelCounters', 'WorkteamArn', 'PreHumanTaskLambdaArn'],
                    members: {
                      LabelingJobName: {},
                      LabelingJobArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LabelingJobStatus: {},
                      LabelCounters: {
                        shape: 'S143'
                      },
                      WorkteamArn: {},
                      PreHumanTaskLambdaArn: {},
                      AnnotationConsolidationLambdaArn: {},
                      FailureReason: {},
                      LabelingJobOutput: {
                        shape: 'S146'
                      },
                      InputConfig: {
                        shape: 'Sln'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLabelingJobsForWorkteam: {
            input: {
              type: 'structure',
              required: ['WorkteamArn'],
              members: {
                WorkteamArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                JobReferenceCodeContains: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['LabelingJobSummaryList'],
              members: {
                LabelingJobSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['JobReferenceCode', 'WorkRequesterAccountId', 'CreationTime'],
                    members: {
                      LabelingJobName: {},
                      JobReferenceCode: {},
                      WorkRequesterAccountId: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LabelCounters: {
                        type: 'structure',
                        members: {
                          HumanLabeled: {
                            type: 'integer'
                          },
                          PendingHuman: {
                            type: 'integer'
                          },
                          Total: {
                            type: 'integer'
                          }
                        }
                      },
                      NumberOfHumanWorkersPerDataObject: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLineageGroups: {
            input: {
              type: 'structure',
              members: {
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LineageGroupSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LineageGroupArn: {},
                      LineageGroupName: {},
                      DisplayName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListModelBiasJobDefinitions: {
            input: {
              type: 'structure',
              members: {
                EndpointName: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionSummaries'],
              members: {
                JobDefinitionSummaries: {
                  shape: 'S1b9'
                },
                NextToken: {}
              }
            }
          },
          ListModelCardExportJobs: {
            input: {
              type: 'structure',
              required: ['ModelCardName'],
              members: {
                ModelCardName: {},
                ModelCardVersion: {
                  type: 'integer'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                ModelCardExportJobNameContains: {},
                StatusEquals: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelCardExportJobSummaries'],
              members: {
                ModelCardExportJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelCardExportJobName', 'ModelCardExportJobArn', 'Status', 'ModelCardName', 'ModelCardVersion', 'CreatedAt', 'LastModifiedAt'],
                    members: {
                      ModelCardExportJobName: {},
                      ModelCardExportJobArn: {},
                      Status: {},
                      ModelCardName: {},
                      ModelCardVersion: {
                        type: 'integer'
                      },
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastModifiedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListModelCardVersions: {
            input: {
              type: 'structure',
              required: ['ModelCardName'],
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                ModelCardName: {},
                ModelCardStatus: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelCardVersionSummaryList'],
              members: {
                ModelCardVersionSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelCardName', 'ModelCardArn', 'ModelCardStatus', 'ModelCardVersion', 'CreationTime'],
                    members: {
                      ModelCardName: {},
                      ModelCardArn: {},
                      ModelCardStatus: {},
                      ModelCardVersion: {
                        type: 'integer'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListModelCards: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                ModelCardStatus: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelCardSummaries'],
              members: {
                ModelCardSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelCardName', 'ModelCardArn', 'ModelCardStatus', 'CreationTime'],
                    members: {
                      ModelCardName: {},
                      ModelCardArn: {},
                      ModelCardStatus: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListModelExplainabilityJobDefinitions: {
            input: {
              type: 'structure',
              members: {
                EndpointName: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionSummaries'],
              members: {
                JobDefinitionSummaries: {
                  shape: 'S1b9'
                },
                NextToken: {}
              }
            }
          },
          ListModelMetadata: {
            input: {
              type: 'structure',
              members: {
                SearchExpression: {
                  type: 'structure',
                  members: {
                    Filters: {
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelMetadataSummaries'],
              members: {
                ModelMetadataSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Domain', 'Framework', 'Task', 'Model', 'FrameworkVersion'],
                    members: {
                      Domain: {},
                      Framework: {},
                      Task: {},
                      Model: {},
                      FrameworkVersion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListModelPackageGroups: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelPackageGroupSummaryList'],
              members: {
                ModelPackageGroupSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelPackageGroupName', 'ModelPackageGroupArn', 'CreationTime', 'ModelPackageGroupStatus'],
                    members: {
                      ModelPackageGroupName: {},
                      ModelPackageGroupArn: {},
                      ModelPackageGroupDescription: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      ModelPackageGroupStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListModelPackages: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                ModelApprovalStatus: {},
                ModelPackageGroupName: {},
                ModelPackageType: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelPackageSummaryList'],
              members: {
                ModelPackageSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelPackageArn', 'CreationTime', 'ModelPackageStatus'],
                    members: {
                      ModelPackageName: {},
                      ModelPackageGroupName: {},
                      ModelPackageVersion: {
                        type: 'integer'
                      },
                      ModelPackageArn: {},
                      ModelPackageDescription: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      ModelPackageStatus: {},
                      ModelApprovalStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListModelQualityJobDefinitions: {
            input: {
              type: 'structure',
              members: {
                EndpointName: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobDefinitionSummaries'],
              members: {
                JobDefinitionSummaries: {
                  shape: 'S1b9'
                },
                NextToken: {}
              }
            }
          },
          ListModels: {
            input: {
              type: 'structure',
              members: {
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Models'],
              members: {
                Models: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ModelName', 'ModelArn', 'CreationTime'],
                    members: {
                      ModelName: {},
                      ModelArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMonitoringAlertHistory: {
            input: {
              type: 'structure',
              members: {
                MonitoringScheduleName: {},
                MonitoringAlertName: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                StatusEquals: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MonitoringAlertHistory: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['MonitoringScheduleName', 'MonitoringAlertName', 'CreationTime', 'AlertStatus'],
                    members: {
                      MonitoringScheduleName: {},
                      MonitoringAlertName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      AlertStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMonitoringAlerts: {
            input: {
              type: 'structure',
              required: ['MonitoringScheduleName'],
              members: {
                MonitoringScheduleName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MonitoringAlertSummaries: {
                  shape: 'S1gj'
                },
                NextToken: {}
              }
            }
          },
          ListMonitoringExecutions: {
            input: {
              type: 'structure',
              members: {
                MonitoringScheduleName: {},
                EndpointName: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ScheduledTimeBefore: {
                  type: 'timestamp'
                },
                ScheduledTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                StatusEquals: {},
                MonitoringJobDefinitionName: {},
                MonitoringTypeEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['MonitoringExecutionSummaries'],
              members: {
                MonitoringExecutionSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S155'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMonitoringSchedules: {
            input: {
              type: 'structure',
              members: {
                EndpointName: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                StatusEquals: {},
                MonitoringJobDefinitionName: {},
                MonitoringTypeEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['MonitoringScheduleSummaries'],
              members: {
                MonitoringScheduleSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['MonitoringScheduleName', 'MonitoringScheduleArn', 'CreationTime', 'LastModifiedTime', 'MonitoringScheduleStatus'],
                    members: {
                      MonitoringScheduleName: {},
                      MonitoringScheduleArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      MonitoringScheduleStatus: {},
                      EndpointName: {},
                      MonitoringJobDefinitionName: {},
                      MonitoringType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListNotebookInstanceLifecycleConfigs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortBy: {},
                SortOrder: {},
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                NotebookInstanceLifecycleConfigs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['NotebookInstanceLifecycleConfigName', 'NotebookInstanceLifecycleConfigArn'],
                    members: {
                      NotebookInstanceLifecycleConfigName: {},
                      NotebookInstanceLifecycleConfigArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListNotebookInstances: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortBy: {},
                SortOrder: {},
                NameContains: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                StatusEquals: {},
                NotebookInstanceLifecycleConfigNameContains: {},
                DefaultCodeRepositoryContains: {},
                AdditionalCodeRepositoryEquals: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                NotebookInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['NotebookInstanceName', 'NotebookInstanceArn'],
                    members: {
                      NotebookInstanceName: {},
                      NotebookInstanceArn: {},
                      NotebookInstanceStatus: {},
                      Url: {},
                      InstanceType: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      NotebookInstanceLifecycleConfigName: {},
                      DefaultCodeRepository: {},
                      AdditionalCodeRepositories: {
                        shape: 'Sp5'
                      }
                    }
                  }
                }
              }
            }
          },
          ListPipelineExecutionSteps: {
            input: {
              type: 'structure',
              members: {
                PipelineExecutionArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineExecutionSteps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StepName: {},
                      StepDisplayName: {},
                      StepDescription: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      StepStatus: {},
                      CacheHitResult: {
                        type: 'structure',
                        members: {
                          SourcePipelineExecutionArn: {}
                        }
                      },
                      FailureReason: {},
                      Metadata: {
                        type: 'structure',
                        members: {
                          TrainingJob: {
                            type: 'structure',
                            members: {
                              Arn: {}
                            }
                          },
                          ProcessingJob: {
                            type: 'structure',
                            members: {
                              Arn: {}
                            }
                          },
                          TransformJob: {
                            type: 'structure',
                            members: {
                              Arn: {}
                            }
                          },
                          TuningJob: {
                            type: 'structure',
                            members: {
                              Arn: {}
                            }
                          },
                          Model: {
                            type: 'structure',
                            members: {
                              Arn: {}
                            }
                          },
                          RegisterModel: {
                            type: 'structure',
                            members: {
                              Arn: {}
                            }
                          },
                          Condition: {
                            type: 'structure',
                            members: {
                              Outcome: {}
                            }
                          },
                          Callback: {
                            type: 'structure',
                            members: {
                              CallbackToken: {},
                              SqsQueueUrl: {},
                              OutputParameters: {
                                shape: 'S1hx'
                              }
                            }
                          },
                          Lambda: {
                            type: 'structure',
                            members: {
                              Arn: {},
                              OutputParameters: {
                                shape: 'S1hx'
                              }
                            }
                          },
                          EMR: {
                            type: 'structure',
                            members: {
                              ClusterId: {},
                              StepId: {},
                              StepName: {},
                              LogFilePath: {}
                            }
                          },
                          QualityCheck: {
                            type: 'structure',
                            members: {
                              CheckType: {},
                              BaselineUsedForDriftCheckStatistics: {},
                              BaselineUsedForDriftCheckConstraints: {},
                              CalculatedBaselineStatistics: {},
                              CalculatedBaselineConstraints: {},
                              ModelPackageGroupName: {},
                              ViolationReport: {},
                              CheckJobArn: {},
                              SkipCheck: {
                                type: 'boolean'
                              },
                              RegisterNewBaseline: {
                                type: 'boolean'
                              }
                            }
                          },
                          ClarifyCheck: {
                            type: 'structure',
                            members: {
                              CheckType: {},
                              BaselineUsedForDriftCheckConstraints: {},
                              CalculatedBaselineConstraints: {},
                              ModelPackageGroupName: {},
                              ViolationReport: {},
                              CheckJobArn: {},
                              SkipCheck: {
                                type: 'boolean'
                              },
                              RegisterNewBaseline: {
                                type: 'boolean'
                              }
                            }
                          },
                          Fail: {
                            type: 'structure',
                            members: {
                              ErrorMessage: {}
                            }
                          },
                          AutoMLJob: {
                            type: 'structure',
                            members: {
                              Arn: {}
                            }
                          }
                        }
                      },
                      AttemptCount: {
                        type: 'integer'
                      },
                      SelectiveExecutionResult: {
                        type: 'structure',
                        members: {
                          SourcePipelineExecutionArn: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPipelineExecutions: {
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {},
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineExecutionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PipelineExecutionArn: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      PipelineExecutionStatus: {},
                      PipelineExecutionDescription: {},
                      PipelineExecutionDisplayName: {},
                      PipelineExecutionFailureReason: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPipelineParametersForExecution: {
            input: {
              type: 'structure',
              required: ['PipelineExecutionArn'],
              members: {
                PipelineExecutionArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineParameters: {
                  shape: 'S1ie'
                },
                NextToken: {}
              }
            }
          },
          ListPipelines: {
            input: {
              type: 'structure',
              members: {
                PipelineNamePrefix: {},
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PipelineArn: {},
                      PipelineName: {},
                      PipelineDisplayName: {},
                      PipelineDescription: {},
                      RoleArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastExecutionTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProcessingJobs: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                StatusEquals: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProcessingJobSummaries'],
              members: {
                ProcessingJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ProcessingJobName', 'ProcessingJobArn', 'CreationTime', 'ProcessingJobStatus'],
                    members: {
                      ProcessingJobName: {},
                      ProcessingJobArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      ProcessingEndTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      ProcessingJobStatus: {},
                      FailureReason: {},
                      ExitMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProjects: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NameContains: {},
                NextToken: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ProjectSummaryList'],
              members: {
                ProjectSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ProjectName', 'ProjectArn', 'ProjectId', 'CreationTime', 'ProjectStatus'],
                    members: {
                      ProjectName: {},
                      ProjectDescription: {},
                      ProjectArn: {},
                      ProjectId: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      ProjectStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceCatalogs: {
            input: {
              type: 'structure',
              members: {
                NameContains: {},
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                SortOrder: {},
                SortBy: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceCatalogs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ResourceCatalogArn', 'ResourceCatalogName', 'Description', 'CreationTime'],
                    members: {
                      ResourceCatalogArn: {},
                      ResourceCatalogName: {},
                      Description: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSpaces: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortOrder: {},
                SortBy: {},
                DomainIdEquals: {},
                SpaceNameContains: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Spaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainId: {},
                      SpaceName: {},
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      SpaceSettingsSummary: {
                        type: 'structure',
                        members: {
                          AppType: {},
                          SpaceStorageSettings: {
                            shape: 'Srl'
                          }
                        }
                      },
                      SpaceSharingSettingsSummary: {
                        type: 'structure',
                        members: {
                          SharingType: {}
                        }
                      },
                      OwnershipSettingsSummary: {
                        type: 'structure',
                        members: {
                          OwnerUserProfileName: {}
                        }
                      },
                      SpaceDisplayName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStageDevices: {
            input: {
              type: 'structure',
              required: ['EdgeDeploymentPlanName', 'StageName'],
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                EdgeDeploymentPlanName: {},
                ExcludeDevicesDeployedInOtherStage: {
                  type: 'boolean'
                },
                StageName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DeviceDeploymentSummaries'],
              members: {
                DeviceDeploymentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EdgeDeploymentPlanArn', 'EdgeDeploymentPlanName', 'StageName', 'DeviceName', 'DeviceArn'],
                    members: {
                      EdgeDeploymentPlanArn: {},
                      EdgeDeploymentPlanName: {},
                      StageName: {},
                      DeployedStageName: {},
                      DeviceFleetName: {},
                      DeviceName: {},
                      DeviceArn: {},
                      DeviceDeploymentStatus: {},
                      DeviceDeploymentStatusMessage: {},
                      Description: {},
                      DeploymentStartTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStudioLifecycleConfigs: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                NameContains: {},
                AppTypeEquals: {},
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                ModifiedTimeBefore: {
                  type: 'timestamp'
                },
                ModifiedTimeAfter: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                StudioLifecycleConfigs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StudioLifecycleConfigArn: {},
                      StudioLifecycleConfigName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      StudioLifecycleConfigAppType: {}
                    }
                  }
                }
              }
            }
          },
          ListSubscribedWorkteams: {
            input: {
              type: 'structure',
              members: {
                NameContains: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SubscribedWorkteams'],
              members: {
                SubscribedWorkteams: {
                  type: 'list',
                  member: {
                    shape: 'S16b'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTags: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S7'
                },
                NextToken: {}
              }
            }
          },
          ListTrainingJobs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                StatusEquals: {},
                SortBy: {},
                SortOrder: {},
                WarmPoolStatusEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TrainingJobSummaries'],
              members: {
                TrainingJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TrainingJobName', 'TrainingJobArn', 'CreationTime', 'TrainingJobStatus'],
                    members: {
                      TrainingJobName: {},
                      TrainingJobArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      TrainingEndTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      TrainingJobStatus: {},
                      WarmPoolStatus: {
                        shape: 'S16f'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTrainingJobsForHyperParameterTuningJob: {
            input: {
              type: 'structure',
              required: ['HyperParameterTuningJobName'],
              members: {
                HyperParameterTuningJobName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                StatusEquals: {},
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TrainingJobSummaries'],
              members: {
                TrainingJobSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S12r'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTransformJobs: {
            input: {
              type: 'structure',
              members: {
                CreationTimeAfter: {
                  type: 'timestamp'
                },
                CreationTimeBefore: {
                  type: 'timestamp'
                },
                LastModifiedTimeAfter: {
                  type: 'timestamp'
                },
                LastModifiedTimeBefore: {
                  type: 'timestamp'
                },
                NameContains: {},
                StatusEquals: {},
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TransformJobSummaries'],
              members: {
                TransformJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TransformJobName', 'TransformJobArn', 'CreationTime', 'TransformJobStatus'],
                    members: {
                      TransformJobName: {},
                      TransformJobArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      TransformEndTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      TransformJobStatus: {},
                      FailureReason: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTrialComponents: {
            input: {
              type: 'structure',
              members: {
                ExperimentName: {},
                TrialName: {},
                SourceArn: {},
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialComponentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TrialComponentName: {},
                      TrialComponentArn: {},
                      DisplayName: {},
                      TrialComponentSource: {
                        shape: 'S175'
                      },
                      Status: {
                        shape: 'Stj'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      CreatedBy: {
                        shape: 'Sx6'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedBy: {
                        shape: 'Sx6'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTrials: {
            input: {
              type: 'structure',
              members: {
                ExperimentName: {},
                TrialComponentName: {},
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                SortBy: {},
                SortOrder: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TrialArn: {},
                      TrialName: {},
                      DisplayName: {},
                      TrialSource: {
                        shape: 'S171'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListUserProfiles: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortOrder: {},
                SortBy: {},
                DomainIdEquals: {},
                UserProfileNameContains: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserProfiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainId: {},
                      UserProfileName: {},
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListWorkforces: {
            input: {
              type: 'structure',
              members: {
                SortBy: {},
                SortOrder: {},
                NameContains: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Workforces'],
              members: {
                Workforces: {
                  type: 'list',
                  member: {
                    shape: 'S17h'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListWorkteams: {
            input: {
              type: 'structure',
              members: {
                SortBy: {},
                SortOrder: {},
                NameContains: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Workteams'],
              members: {
                Workteams: {
                  type: 'list',
                  member: {
                    shape: 'S17p'
                  }
                },
                NextToken: {}
              }
            }
          },
          PutModelPackageGroupPolicy: {
            input: {
              type: 'structure',
              required: ['ModelPackageGroupName', 'ResourcePolicy'],
              members: {
                ModelPackageGroupName: {},
                ResourcePolicy: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelPackageGroupArn'],
              members: {
                ModelPackageGroupArn: {}
              }
            }
          },
          QueryLineage: {
            input: {
              type: 'structure',
              members: {
                StartArns: {
                  type: 'list',
                  member: {}
                },
                Direction: {},
                IncludeEdges: {
                  type: 'boolean'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    Types: {
                      type: 'list',
                      member: {}
                    },
                    LineageTypes: {
                      type: 'list',
                      member: {}
                    },
                    CreatedBefore: {
                      type: 'timestamp'
                    },
                    CreatedAfter: {
                      type: 'timestamp'
                    },
                    ModifiedBefore: {
                      type: 'timestamp'
                    },
                    ModifiedAfter: {
                      type: 'timestamp'
                    },
                    Properties: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                },
                MaxDepth: {
                  type: 'integer'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Vertices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Type: {},
                      LineageType: {}
                    }
                  }
                },
                Edges: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceArn: {},
                      DestinationArn: {},
                      AssociationType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          RegisterDevices: {
            input: {
              type: 'structure',
              required: ['DeviceFleetName', 'Devices'],
              members: {
                DeviceFleetName: {},
                Devices: {
                  shape: 'S1lc'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            }
          },
          RenderUiTemplate: {
            input: {
              type: 'structure',
              required: ['Task', 'RoleArn'],
              members: {
                UiTemplate: {
                  shape: 'Sh1'
                },
                Task: {
                  type: 'structure',
                  required: ['Input'],
                  members: {
                    Input: {}
                  }
                },
                RoleArn: {},
                HumanTaskUiArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RenderedContent', 'Errors'],
              members: {
                RenderedContent: {},
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Code', 'Message'],
                    members: {
                      Code: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          RetryPipelineExecution: {
            input: {
              type: 'structure',
              required: ['PipelineExecutionArn', 'ClientRequestToken'],
              members: {
                PipelineExecutionArn: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                ParallelismConfiguration: {
                  shape: 'Spr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineExecutionArn: {}
              }
            }
          },
          Search: {
            input: {
              type: 'structure',
              required: ['Resource'],
              members: {
                Resource: {},
                SearchExpression: {
                  shape: 'S1ln'
                },
                SortBy: {},
                SortOrder: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CrossAccountFilterOption: {},
                VisibilityConditions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {},
                      Value: {}
                    }
                  }
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
                      TrainingJob: {
                        shape: 'S1m5'
                      },
                      Experiment: {
                        type: 'structure',
                        members: {
                          ExperimentName: {},
                          ExperimentArn: {},
                          DisplayName: {},
                          Source: {
                            shape: 'S119'
                          },
                          Description: {},
                          CreationTime: {
                            type: 'timestamp'
                          },
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          LastModifiedBy: {
                            shape: 'Sx6'
                          },
                          Tags: {
                            shape: 'S7'
                          }
                        }
                      },
                      Trial: {
                        type: 'structure',
                        members: {
                          TrialName: {},
                          TrialArn: {},
                          DisplayName: {},
                          ExperimentName: {},
                          Source: {
                            shape: 'S171'
                          },
                          CreationTime: {
                            type: 'timestamp'
                          },
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          LastModifiedBy: {
                            shape: 'Sx6'
                          },
                          MetadataProperties: {
                            shape: 'S21'
                          },
                          Tags: {
                            shape: 'S7'
                          },
                          TrialComponentSummaries: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                TrialComponentName: {},
                                TrialComponentArn: {},
                                TrialComponentSource: {
                                  shape: 'S175'
                                },
                                CreationTime: {
                                  type: 'timestamp'
                                },
                                CreatedBy: {
                                  shape: 'Sx6'
                                }
                              }
                            }
                          }
                        }
                      },
                      TrialComponent: {
                        type: 'structure',
                        members: {
                          TrialComponentName: {},
                          DisplayName: {},
                          TrialComponentArn: {},
                          Source: {
                            shape: 'S175'
                          },
                          Status: {
                            shape: 'Stj'
                          },
                          StartTime: {
                            type: 'timestamp'
                          },
                          EndTime: {
                            type: 'timestamp'
                          },
                          CreationTime: {
                            type: 'timestamp'
                          },
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          LastModifiedBy: {
                            shape: 'Sx6'
                          },
                          Parameters: {
                            shape: 'Stm'
                          },
                          InputArtifacts: {
                            shape: 'Stq'
                          },
                          OutputArtifacts: {
                            shape: 'Stq'
                          },
                          Metrics: {
                            shape: 'S177'
                          },
                          MetadataProperties: {
                            shape: 'S21'
                          },
                          SourceDetail: {
                            type: 'structure',
                            members: {
                              SourceArn: {},
                              TrainingJob: {
                                shape: 'S1m5'
                              },
                              ProcessingJob: {
                                type: 'structure',
                                members: {
                                  ProcessingInputs: {
                                    shape: 'Sq4'
                                  },
                                  ProcessingOutputConfig: {
                                    shape: 'Sqr'
                                  },
                                  ProcessingJobName: {},
                                  ProcessingResources: {
                                    shape: 'Sqw'
                                  },
                                  StoppingCondition: {
                                    shape: 'Sqy'
                                  },
                                  AppSpecification: {
                                    shape: 'Sr0'
                                  },
                                  Environment: {
                                    shape: 'Sr2'
                                  },
                                  NetworkConfig: {
                                    shape: 'Sot'
                                  },
                                  RoleArn: {},
                                  ExperimentConfig: {
                                    shape: 'Sr3'
                                  },
                                  ProcessingJobArn: {},
                                  ProcessingJobStatus: {},
                                  ExitMessage: {},
                                  FailureReason: {},
                                  ProcessingEndTime: {
                                    type: 'timestamp'
                                  },
                                  ProcessingStartTime: {
                                    type: 'timestamp'
                                  },
                                  LastModifiedTime: {
                                    type: 'timestamp'
                                  },
                                  CreationTime: {
                                    type: 'timestamp'
                                  },
                                  MonitoringScheduleArn: {},
                                  AutoMLJobArn: {},
                                  TrainingJobArn: {},
                                  Tags: {
                                    shape: 'S7'
                                  }
                                }
                              },
                              TransformJob: {
                                shape: 'S1md'
                              }
                            }
                          },
                          LineageGroupArn: {},
                          Tags: {
                            shape: 'S7'
                          },
                          Parents: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                TrialName: {},
                                ExperimentName: {}
                              }
                            }
                          },
                          RunName: {}
                        }
                      },
                      Endpoint: {
                        type: 'structure',
                        required: ['EndpointName', 'EndpointArn', 'EndpointConfigName', 'EndpointStatus', 'CreationTime', 'LastModifiedTime'],
                        members: {
                          EndpointName: {},
                          EndpointArn: {},
                          EndpointConfigName: {},
                          ProductionVariants: {
                            shape: 'S10r'
                          },
                          DataCaptureConfig: {
                            shape: 'S10z'
                          },
                          EndpointStatus: {},
                          FailureReason: {},
                          CreationTime: {
                            type: 'timestamp'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          MonitoringSchedules: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                MonitoringScheduleArn: {},
                                MonitoringScheduleName: {},
                                MonitoringScheduleStatus: {},
                                MonitoringType: {},
                                FailureReason: {},
                                CreationTime: {
                                  type: 'timestamp'
                                },
                                LastModifiedTime: {
                                  type: 'timestamp'
                                },
                                MonitoringScheduleConfig: {
                                  shape: 'Sol'
                                },
                                EndpointName: {},
                                LastMonitoringExecutionSummary: {
                                  shape: 'S155'
                                },
                                Tags: {
                                  shape: 'S7'
                                }
                              }
                            }
                          },
                          Tags: {
                            shape: 'S7'
                          },
                          ShadowProductionVariants: {
                            shape: 'S10r'
                          }
                        }
                      },
                      ModelPackage: {
                        type: 'structure',
                        members: {
                          ModelPackageName: {},
                          ModelPackageGroupName: {},
                          ModelPackageVersion: {
                            type: 'integer'
                          },
                          ModelPackageArn: {},
                          ModelPackageDescription: {},
                          CreationTime: {
                            type: 'timestamp'
                          },
                          InferenceSpecification: {
                            shape: 'Sr'
                          },
                          SourceAlgorithmSpecification: {
                            shape: 'Snk'
                          },
                          ValidationSpecification: {
                            shape: 'Snh'
                          },
                          ModelPackageStatus: {},
                          ModelPackageStatusDetails: {
                            shape: 'S14s'
                          },
                          CertifyForMarketplace: {
                            type: 'boolean'
                          },
                          ModelApprovalStatus: {},
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          MetadataProperties: {
                            shape: 'S21'
                          },
                          ModelMetrics: {
                            shape: 'Snn'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          LastModifiedBy: {
                            shape: 'Sx6'
                          },
                          ApprovalDescription: {},
                          Domain: {},
                          Task: {},
                          SamplePayloadUrl: {},
                          AdditionalInferenceSpecifications: {
                            shape: 'So3'
                          },
                          SourceUri: {},
                          SecurityConfig: {
                            shape: 'So7'
                          },
                          ModelCard: {
                            shape: 'So8'
                          },
                          Tags: {
                            shape: 'S7'
                          },
                          CustomerMetadataProperties: {
                            shape: 'Snu'
                          },
                          DriftCheckBaselines: {
                            shape: 'Snx'
                          },
                          SkipModelValidation: {}
                        }
                      },
                      ModelPackageGroup: {
                        type: 'structure',
                        members: {
                          ModelPackageGroupName: {},
                          ModelPackageGroupArn: {},
                          ModelPackageGroupDescription: {},
                          CreationTime: {
                            type: 'timestamp'
                          },
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          ModelPackageGroupStatus: {},
                          Tags: {
                            shape: 'S7'
                          }
                        }
                      },
                      Pipeline: {
                        type: 'structure',
                        members: {
                          PipelineArn: {},
                          PipelineName: {},
                          PipelineDisplayName: {},
                          PipelineDescription: {},
                          RoleArn: {},
                          PipelineStatus: {},
                          CreationTime: {
                            type: 'timestamp'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          LastRunTime: {
                            type: 'timestamp'
                          },
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          LastModifiedBy: {
                            shape: 'Sx6'
                          },
                          ParallelismConfiguration: {
                            shape: 'Spr'
                          },
                          Tags: {
                            shape: 'S7'
                          }
                        }
                      },
                      PipelineExecution: {
                        type: 'structure',
                        members: {
                          PipelineArn: {},
                          PipelineExecutionArn: {},
                          PipelineExecutionDisplayName: {},
                          PipelineExecutionStatus: {},
                          PipelineExecutionDescription: {},
                          PipelineExperimentConfig: {
                            shape: 'S15p'
                          },
                          FailureReason: {},
                          CreationTime: {
                            type: 'timestamp'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          LastModifiedBy: {
                            shape: 'Sx6'
                          },
                          ParallelismConfiguration: {
                            shape: 'Spr'
                          },
                          SelectiveExecutionConfig: {
                            shape: 'S15r'
                          },
                          PipelineParameters: {
                            shape: 'S1ie'
                          }
                        }
                      },
                      FeatureGroup: {
                        type: 'structure',
                        members: {
                          FeatureGroupArn: {},
                          FeatureGroupName: {},
                          RecordIdentifierFeatureName: {},
                          EventTimeFeatureName: {},
                          FeatureDefinitions: {
                            shape: 'Sfa'
                          },
                          CreationTime: {
                            type: 'timestamp'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          OnlineStoreConfig: {
                            shape: 'Sfh'
                          },
                          OfflineStoreConfig: {
                            shape: 'Sfn'
                          },
                          RoleArn: {},
                          FeatureGroupStatus: {},
                          OfflineStoreStatus: {
                            shape: 'S11h'
                          },
                          LastUpdateStatus: {
                            shape: 'S11k'
                          },
                          FailureReason: {},
                          Description: {},
                          Tags: {
                            shape: 'S7'
                          }
                        }
                      },
                      FeatureMetadata: {
                        type: 'structure',
                        members: {
                          FeatureGroupArn: {},
                          FeatureGroupName: {},
                          FeatureName: {},
                          FeatureType: {},
                          CreationTime: {
                            type: 'timestamp'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          Description: {},
                          Parameters: {
                            shape: 'S11q'
                          }
                        }
                      },
                      Project: {
                        type: 'structure',
                        members: {
                          ProjectArn: {},
                          ProjectName: {},
                          ProjectId: {},
                          ProjectDescription: {},
                          ServiceCatalogProvisioningDetails: {
                            shape: 'Sr8'
                          },
                          ServiceCatalogProvisionedProductDetails: {
                            shape: 'S160'
                          },
                          ProjectStatus: {},
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          CreationTime: {
                            type: 'timestamp'
                          },
                          Tags: {
                            shape: 'S7'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          LastModifiedBy: {
                            shape: 'Sx6'
                          }
                        }
                      },
                      HyperParameterTuningJob: {
                        type: 'structure',
                        members: {
                          HyperParameterTuningJobName: {},
                          HyperParameterTuningJobArn: {},
                          HyperParameterTuningJobConfig: {
                            shape: 'Sh6'
                          },
                          TrainingJobDefinition: {
                            shape: 'Shz'
                          },
                          TrainingJobDefinitions: {
                            shape: 'Sif'
                          },
                          HyperParameterTuningJobStatus: {},
                          CreationTime: {
                            type: 'timestamp'
                          },
                          HyperParameterTuningEndTime: {
                            type: 'timestamp'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          TrainingJobStatusCounters: {
                            shape: 'S12n'
                          },
                          ObjectiveStatusCounters: {
                            shape: 'S12p'
                          },
                          BestTrainingJob: {
                            shape: 'S12r'
                          },
                          OverallBestTrainingJob: {
                            shape: 'S12r'
                          },
                          WarmStartConfig: {
                            shape: 'Sig'
                          },
                          FailureReason: {},
                          TuningJobCompletionDetails: {
                            shape: 'S12u'
                          },
                          ConsumedResources: {
                            shape: 'S12v'
                          },
                          Tags: {
                            shape: 'S7'
                          }
                        }
                      },
                      ModelCard: {
                        type: 'structure',
                        members: {
                          ModelCardArn: {},
                          ModelCardName: {},
                          ModelCardVersion: {
                            type: 'integer'
                          },
                          Content: {
                            shape: 'Sn2'
                          },
                          ModelCardStatus: {},
                          SecurityConfig: {
                            shape: 'Sn1'
                          },
                          CreationTime: {
                            type: 'timestamp'
                          },
                          CreatedBy: {
                            shape: 'Sx6'
                          },
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          LastModifiedBy: {
                            shape: 'Sx6'
                          },
                          Tags: {
                            shape: 'S7'
                          },
                          ModelId: {},
                          RiskRating: {},
                          ModelPackageGroupName: {}
                        }
                      },
                      Model: {
                        type: 'structure',
                        members: {
                          Model: {
                            type: 'structure',
                            members: {
                              ModelName: {},
                              PrimaryContainer: {
                                shape: 'Smh'
                              },
                              Containers: {
                                shape: 'Smq'
                              },
                              InferenceExecutionConfig: {
                                shape: 'Smr'
                              },
                              ExecutionRoleArn: {},
                              VpcConfig: {
                                shape: 'S6b'
                              },
                              CreationTime: {
                                type: 'timestamp'
                              },
                              ModelArn: {},
                              EnableNetworkIsolation: {
                                type: 'boolean'
                              },
                              Tags: {
                                shape: 'S7'
                              },
                              DeploymentRecommendation: {
                                shape: 'S14b'
                              }
                            }
                          },
                          Endpoints: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['EndpointName', 'EndpointArn', 'CreationTime', 'LastModifiedTime', 'EndpointStatus'],
                              members: {
                                EndpointName: {},
                                EndpointArn: {},
                                CreationTime: {
                                  type: 'timestamp'
                                },
                                LastModifiedTime: {
                                  type: 'timestamp'
                                },
                                EndpointStatus: {}
                              }
                            }
                          },
                          LastBatchTransformJob: {
                            shape: 'S1md'
                          },
                          MonitoringSchedules: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                MonitoringScheduleArn: {},
                                MonitoringScheduleName: {},
                                MonitoringScheduleStatus: {},
                                MonitoringType: {},
                                FailureReason: {},
                                CreationTime: {
                                  type: 'timestamp'
                                },
                                LastModifiedTime: {
                                  type: 'timestamp'
                                },
                                MonitoringScheduleConfig: {
                                  shape: 'Sol'
                                },
                                EndpointName: {},
                                MonitoringAlertSummaries: {
                                  shape: 'S1gj'
                                },
                                LastMonitoringExecutionSummary: {
                                  shape: 'S155'
                                },
                                BatchTransformInput: {
                                  shape: 'S9o'
                                }
                              }
                            }
                          },
                          ModelCard: {
                            type: 'structure',
                            members: {
                              ModelCardArn: {},
                              ModelCardName: {},
                              ModelCardVersion: {
                                type: 'integer'
                              },
                              ModelCardStatus: {},
                              SecurityConfig: {
                                shape: 'Sn1'
                              },
                              CreationTime: {
                                type: 'timestamp'
                              },
                              CreatedBy: {
                                shape: 'Sx6'
                              },
                              LastModifiedTime: {
                                type: 'timestamp'
                              },
                              LastModifiedBy: {
                                shape: 'Sx6'
                              },
                              Tags: {
                                shape: 'S7'
                              },
                              ModelId: {},
                              RiskRating: {}
                            }
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
          SendPipelineExecutionStepFailure: {
            input: {
              type: 'structure',
              required: ['CallbackToken'],
              members: {
                CallbackToken: {},
                FailureReason: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineExecutionArn: {}
              }
            }
          },
          SendPipelineExecutionStepSuccess: {
            input: {
              type: 'structure',
              required: ['CallbackToken'],
              members: {
                CallbackToken: {},
                OutputParameters: {
                  shape: 'S1hx'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineExecutionArn: {}
              }
            }
          },
          StartEdgeDeploymentStage: {
            input: {
              type: 'structure',
              required: ['EdgeDeploymentPlanName', 'StageName'],
              members: {
                EdgeDeploymentPlanName: {},
                StageName: {}
              }
            }
          },
          StartInferenceExperiment: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceExperimentArn'],
              members: {
                InferenceExperimentArn: {}
              }
            }
          },
          StartMonitoringSchedule: {
            input: {
              type: 'structure',
              required: ['MonitoringScheduleName'],
              members: {
                MonitoringScheduleName: {}
              }
            }
          },
          StartNotebookInstance: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceName'],
              members: {
                NotebookInstanceName: {}
              }
            }
          },
          StartPipelineExecution: {
            input: {
              type: 'structure',
              required: ['PipelineName', 'ClientRequestToken'],
              members: {
                PipelineName: {},
                PipelineExecutionDisplayName: {},
                PipelineParameters: {
                  shape: 'S1ie'
                },
                PipelineExecutionDescription: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                ParallelismConfiguration: {
                  shape: 'Spr'
                },
                SelectiveExecutionConfig: {
                  shape: 'S15r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineExecutionArn: {}
              }
            }
          },
          StopAutoMLJob: {
            input: {
              type: 'structure',
              required: ['AutoMLJobName'],
              members: {
                AutoMLJobName: {}
              }
            }
          },
          StopCompilationJob: {
            input: {
              type: 'structure',
              required: ['CompilationJobName'],
              members: {
                CompilationJobName: {}
              }
            }
          },
          StopEdgeDeploymentStage: {
            input: {
              type: 'structure',
              required: ['EdgeDeploymentPlanName', 'StageName'],
              members: {
                EdgeDeploymentPlanName: {},
                StageName: {}
              }
            }
          },
          StopEdgePackagingJob: {
            input: {
              type: 'structure',
              required: ['EdgePackagingJobName'],
              members: {
                EdgePackagingJobName: {}
              }
            }
          },
          StopHyperParameterTuningJob: {
            input: {
              type: 'structure',
              required: ['HyperParameterTuningJobName'],
              members: {
                HyperParameterTuningJobName: {}
              }
            }
          },
          StopInferenceExperiment: {
            input: {
              type: 'structure',
              required: ['Name', 'ModelVariantActions'],
              members: {
                Name: {},
                ModelVariantActions: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                DesiredModelVariants: {
                  shape: 'Sjo'
                },
                DesiredState: {},
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceExperimentArn'],
              members: {
                InferenceExperimentArn: {}
              }
            }
          },
          StopInferenceRecommendationsJob: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {}
              }
            }
          },
          StopLabelingJob: {
            input: {
              type: 'structure',
              required: ['LabelingJobName'],
              members: {
                LabelingJobName: {}
              }
            }
          },
          StopMonitoringSchedule: {
            input: {
              type: 'structure',
              required: ['MonitoringScheduleName'],
              members: {
                MonitoringScheduleName: {}
              }
            }
          },
          StopNotebookInstance: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceName'],
              members: {
                NotebookInstanceName: {}
              }
            }
          },
          StopPipelineExecution: {
            input: {
              type: 'structure',
              required: ['PipelineExecutionArn', 'ClientRequestToken'],
              members: {
                PipelineExecutionArn: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineExecutionArn: {}
              }
            }
          },
          StopProcessingJob: {
            input: {
              type: 'structure',
              required: ['ProcessingJobName'],
              members: {
                ProcessingJobName: {}
              }
            }
          },
          StopTrainingJob: {
            input: {
              type: 'structure',
              required: ['TrainingJobName'],
              members: {
                TrainingJobName: {}
              }
            }
          },
          StopTransformJob: {
            input: {
              type: 'structure',
              required: ['TransformJobName'],
              members: {
                TransformJobName: {}
              }
            }
          },
          UpdateAction: {
            input: {
              type: 'structure',
              required: ['ActionName'],
              members: {
                ActionName: {},
                Description: {},
                Status: {},
                Properties: {
                  shape: 'S1z'
                },
                PropertiesToRemove: {
                  shape: 'S1nu'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ActionArn: {}
              }
            }
          },
          UpdateAppImageConfig: {
            input: {
              type: 'structure',
              required: ['AppImageConfigName'],
              members: {
                AppImageConfigName: {},
                KernelGatewayImageConfig: {
                  shape: 'S4z'
                },
                JupyterLabAppImageConfig: {
                  shape: 'S58'
                },
                CodeEditorAppImageConfig: {
                  shape: 'S5f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppImageConfigArn: {}
              }
            }
          },
          UpdateArtifact: {
            input: {
              type: 'structure',
              required: ['ArtifactArn'],
              members: {
                ArtifactArn: {},
                ArtifactName: {},
                Properties: {
                  shape: 'S5n'
                },
                PropertiesToRemove: {
                  shape: 'S1nu'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ArtifactArn: {}
              }
            }
          },
          UpdateCluster: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'InstanceGroups'],
              members: {
                ClusterName: {},
                InstanceGroups: {
                  shape: 'S7x'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ClusterArn'],
              members: {
                ClusterArn: {}
              }
            }
          },
          UpdateClusterSoftware: {
            input: {
              type: 'structure',
              required: ['ClusterName'],
              members: {
                ClusterName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ClusterArn'],
              members: {
                ClusterArn: {}
              }
            }
          },
          UpdateCodeRepository: {
            input: {
              type: 'structure',
              required: ['CodeRepositoryName'],
              members: {
                CodeRepositoryName: {},
                GitConfig: {
                  type: 'structure',
                  members: {
                    SecretArn: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CodeRepositoryArn'],
              members: {
                CodeRepositoryArn: {}
              }
            }
          },
          UpdateContext: {
            input: {
              type: 'structure',
              required: ['ContextName'],
              members: {
                ContextName: {},
                Description: {},
                Properties: {
                  shape: 'S1z'
                },
                PropertiesToRemove: {
                  shape: 'S1nu'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContextArn: {}
              }
            }
          },
          UpdateDeviceFleet: {
            input: {
              type: 'structure',
              required: ['DeviceFleetName', 'OutputConfig'],
              members: {
                DeviceFleetName: {},
                RoleArn: {},
                Description: {},
                OutputConfig: {
                  shape: 'Sac'
                },
                EnableIotRoleAlias: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateDevices: {
            input: {
              type: 'structure',
              required: ['DeviceFleetName', 'Devices'],
              members: {
                DeviceFleetName: {},
                Devices: {
                  shape: 'S1lc'
                }
              }
            }
          },
          UpdateDomain: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {},
                DefaultUserSettings: {
                  shape: 'Sai'
                },
                DomainSettingsForUpdate: {
                  type: 'structure',
                  members: {
                    RStudioServerProDomainSettingsForUpdate: {
                      type: 'structure',
                      required: ['DomainExecutionRoleArn'],
                      members: {
                        DomainExecutionRoleArn: {},
                        DefaultResourceSpec: {
                          shape: 'S4p'
                        },
                        RStudioConnectUrl: {},
                        RStudioPackageManagerUrl: {}
                      }
                    },
                    ExecutionRoleIdentityConfig: {},
                    SecurityGroupIds: {
                      shape: 'Sbr'
                    },
                    DockerSettings: {
                      shape: 'Sbu'
                    }
                  }
                },
                AppSecurityGroupManagement: {},
                DefaultSpaceSettings: {
                  shape: 'Sc0'
                },
                SubnetIds: {
                  shape: 'S6e'
                },
                AppNetworkAccessType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainArn: {}
              }
            }
          },
          UpdateEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName', 'EndpointConfigName'],
              members: {
                EndpointName: {},
                EndpointConfigName: {},
                RetainAllVariantProperties: {
                  type: 'boolean'
                },
                ExcludeRetainedVariantProperties: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['VariantPropertyType'],
                    members: {
                      VariantPropertyType: {}
                    }
                  }
                },
                DeploymentConfig: {
                  shape: 'Scn'
                },
                RetainDeploymentConfig: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            }
          },
          UpdateEndpointWeightsAndCapacities: {
            input: {
              type: 'structure',
              required: ['EndpointName', 'DesiredWeightsAndCapacities'],
              members: {
                EndpointName: {},
                DesiredWeightsAndCapacities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['VariantName'],
                    members: {
                      VariantName: {},
                      DesiredWeight: {
                        type: 'float'
                      },
                      DesiredInstanceCount: {
                        type: 'integer'
                      },
                      ServerlessUpdateConfig: {
                        type: 'structure',
                        members: {
                          MaxConcurrency: {
                            type: 'integer'
                          },
                          ProvisionedConcurrency: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            }
          },
          UpdateExperiment: {
            input: {
              type: 'structure',
              required: ['ExperimentName'],
              members: {
                ExperimentName: {},
                DisplayName: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExperimentArn: {}
              }
            }
          },
          UpdateFeatureGroup: {
            input: {
              type: 'structure',
              required: ['FeatureGroupName'],
              members: {
                FeatureGroupName: {},
                FeatureAdditions: {
                  type: 'list',
                  member: {
                    shape: 'Sfb'
                  }
                },
                OnlineStoreConfig: {
                  type: 'structure',
                  members: {
                    TtlDuration: {
                      shape: 'Sfj'
                    }
                  }
                },
                ThroughputConfig: {
                  type: 'structure',
                  members: {
                    ThroughputMode: {},
                    ProvisionedReadCapacityUnits: {
                      type: 'integer'
                    },
                    ProvisionedWriteCapacityUnits: {
                      type: 'integer'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FeatureGroupArn'],
              members: {
                FeatureGroupArn: {}
              }
            }
          },
          UpdateFeatureMetadata: {
            input: {
              type: 'structure',
              required: ['FeatureGroupName', 'FeatureName'],
              members: {
                FeatureGroupName: {},
                FeatureName: {},
                Description: {},
                ParameterAdditions: {
                  type: 'list',
                  member: {
                    shape: 'S11r'
                  }
                },
                ParameterRemovals: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateHub: {
            input: {
              type: 'structure',
              required: ['HubName'],
              members: {
                HubName: {},
                HubDescription: {},
                HubDisplayName: {},
                HubSearchKeywords: {
                  shape: 'Sgt'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HubArn'],
              members: {
                HubArn: {}
              }
            }
          },
          UpdateImage: {
            input: {
              type: 'structure',
              required: ['ImageName'],
              members: {
                DeleteProperties: {
                  type: 'list',
                  member: {}
                },
                Description: {},
                DisplayName: {},
                ImageName: {},
                RoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageArn: {}
              }
            }
          },
          UpdateImageVersion: {
            input: {
              type: 'structure',
              required: ['ImageName'],
              members: {
                ImageName: {},
                Alias: {},
                Version: {
                  type: 'integer'
                },
                AliasesToAdd: {
                  shape: 'Siv'
                },
                AliasesToDelete: {
                  shape: 'Siv'
                },
                VendorGuidance: {},
                JobType: {},
                MLFramework: {},
                ProgrammingLang: {},
                Processor: {},
                Horovod: {
                  type: 'boolean'
                },
                ReleaseNotes: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageVersionArn: {}
              }
            }
          },
          UpdateInferenceComponent: {
            input: {
              type: 'structure',
              required: ['InferenceComponentName'],
              members: {
                InferenceComponentName: {},
                Specification: {
                  shape: 'Sj7'
                },
                RuntimeConfig: {
                  shape: 'Sje'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceComponentArn'],
              members: {
                InferenceComponentArn: {}
              }
            }
          },
          UpdateInferenceComponentRuntimeConfig: {
            input: {
              type: 'structure',
              required: ['InferenceComponentName', 'DesiredRuntimeConfig'],
              members: {
                InferenceComponentName: {},
                DesiredRuntimeConfig: {
                  shape: 'Sje'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceComponentArn'],
              members: {
                InferenceComponentArn: {}
              }
            }
          },
          UpdateInferenceExperiment: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Schedule: {
                  shape: 'Sjl'
                },
                Description: {},
                ModelVariants: {
                  shape: 'Sjo'
                },
                DataStorageConfig: {
                  shape: 'Sjw'
                },
                ShadowModeConfig: {
                  shape: 'Sjx'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InferenceExperimentArn'],
              members: {
                InferenceExperimentArn: {}
              }
            }
          },
          UpdateModelCard: {
            input: {
              type: 'structure',
              required: ['ModelCardName'],
              members: {
                ModelCardName: {},
                Content: {
                  shape: 'Sn2'
                },
                ModelCardStatus: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ModelCardArn'],
              members: {
                ModelCardArn: {}
              }
            }
          },
          UpdateModelPackage: {
            input: {
              type: 'structure',
              required: ['ModelPackageArn'],
              members: {
                ModelPackageArn: {},
                ModelApprovalStatus: {},
                ApprovalDescription: {},
                CustomerMetadataProperties: {
                  shape: 'Snu'
                },
                CustomerMetadataPropertiesToRemove: {
                  type: 'list',
                  member: {}
                },
                AdditionalInferenceSpecificationsToAdd: {
                  shape: 'So3'
                },
                InferenceSpecification: {
                  shape: 'Sr'
                },
                SourceUri: {},
                ModelCard: {
                  shape: 'So8'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ModelPackageArn'],
              members: {
                ModelPackageArn: {}
              }
            }
          },
          UpdateMonitoringAlert: {
            input: {
              type: 'structure',
              required: ['MonitoringScheduleName', 'MonitoringAlertName', 'DatapointsToAlert', 'EvaluationPeriod'],
              members: {
                MonitoringScheduleName: {},
                MonitoringAlertName: {},
                DatapointsToAlert: {
                  type: 'integer'
                },
                EvaluationPeriod: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MonitoringScheduleArn'],
              members: {
                MonitoringScheduleArn: {},
                MonitoringAlertName: {}
              }
            }
          },
          UpdateMonitoringSchedule: {
            input: {
              type: 'structure',
              required: ['MonitoringScheduleName', 'MonitoringScheduleConfig'],
              members: {
                MonitoringScheduleName: {},
                MonitoringScheduleConfig: {
                  shape: 'Sol'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MonitoringScheduleArn'],
              members: {
                MonitoringScheduleArn: {}
              }
            }
          },
          UpdateNotebookInstance: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceName'],
              members: {
                NotebookInstanceName: {},
                InstanceType: {},
                RoleArn: {},
                LifecycleConfigName: {},
                DisassociateLifecycleConfig: {
                  type: 'boolean'
                },
                VolumeSizeInGB: {
                  type: 'integer'
                },
                DefaultCodeRepository: {},
                AdditionalCodeRepositories: {
                  shape: 'Sp5'
                },
                AcceleratorTypes: {
                  shape: 'Sp2'
                },
                DisassociateAcceleratorTypes: {
                  type: 'boolean'
                },
                DisassociateDefaultCodeRepository: {
                  type: 'boolean'
                },
                DisassociateAdditionalCodeRepositories: {
                  type: 'boolean'
                },
                RootAccess: {},
                InstanceMetadataServiceConfiguration: {
                  shape: 'Sp8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateNotebookInstanceLifecycleConfig: {
            input: {
              type: 'structure',
              required: ['NotebookInstanceLifecycleConfigName'],
              members: {
                NotebookInstanceLifecycleConfigName: {},
                OnCreate: {
                  shape: 'Spd'
                },
                OnStart: {
                  shape: 'Spd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdatePipeline: {
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {},
                PipelineDisplayName: {},
                PipelineDefinition: {},
                PipelineDefinitionS3Location: {
                  shape: 'Spl'
                },
                PipelineDescription: {},
                RoleArn: {},
                ParallelismConfiguration: {
                  shape: 'Spr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineArn: {}
              }
            }
          },
          UpdatePipelineExecution: {
            input: {
              type: 'structure',
              required: ['PipelineExecutionArn'],
              members: {
                PipelineExecutionArn: {},
                PipelineExecutionDescription: {},
                PipelineExecutionDisplayName: {},
                ParallelismConfiguration: {
                  shape: 'Spr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PipelineExecutionArn: {}
              }
            }
          },
          UpdateProject: {
            input: {
              type: 'structure',
              required: ['ProjectName'],
              members: {
                ProjectName: {},
                ProjectDescription: {},
                ServiceCatalogProvisioningUpdateDetails: {
                  type: 'structure',
                  members: {
                    ProvisioningArtifactId: {},
                    ProvisioningParameters: {
                      shape: 'Sra'
                    }
                  }
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProjectArn'],
              members: {
                ProjectArn: {}
              }
            }
          },
          UpdateSpace: {
            input: {
              type: 'structure',
              required: ['DomainId', 'SpaceName'],
              members: {
                DomainId: {},
                SpaceName: {},
                SpaceSettings: {
                  shape: 'Sri'
                },
                SpaceDisplayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SpaceArn: {}
              }
            }
          },
          UpdateTrainingJob: {
            input: {
              type: 'structure',
              required: ['TrainingJobName'],
              members: {
                TrainingJobName: {},
                ProfilerConfig: {
                  type: 'structure',
                  members: {
                    S3OutputPath: {},
                    ProfilingIntervalInMilliseconds: {
                      type: 'long'
                    },
                    ProfilingParameters: {
                      shape: 'Ssq'
                    },
                    DisableProfiler: {
                      type: 'boolean'
                    }
                  }
                },
                ProfilerRuleConfigurations: {
                  shape: 'Sss'
                },
                ResourceConfig: {
                  type: 'structure',
                  required: ['KeepAlivePeriodInSeconds'],
                  members: {
                    KeepAlivePeriodInSeconds: {
                      type: 'integer'
                    }
                  }
                },
                RemoteDebugConfig: {
                  type: 'structure',
                  members: {
                    EnableRemoteDebug: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrainingJobArn'],
              members: {
                TrainingJobArn: {}
              }
            }
          },
          UpdateTrial: {
            input: {
              type: 'structure',
              required: ['TrialName'],
              members: {
                TrialName: {},
                DisplayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialArn: {}
              }
            }
          },
          UpdateTrialComponent: {
            input: {
              type: 'structure',
              required: ['TrialComponentName'],
              members: {
                TrialComponentName: {},
                DisplayName: {},
                Status: {
                  shape: 'Stj'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Parameters: {
                  shape: 'Stm'
                },
                ParametersToRemove: {
                  shape: 'S1qb'
                },
                InputArtifacts: {
                  shape: 'Stq'
                },
                InputArtifactsToRemove: {
                  shape: 'S1qb'
                },
                OutputArtifacts: {
                  shape: 'Stq'
                },
                OutputArtifactsToRemove: {
                  shape: 'S1qb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TrialComponentArn: {}
              }
            }
          },
          UpdateUserProfile: {
            input: {
              type: 'structure',
              required: ['DomainId', 'UserProfileName'],
              members: {
                DomainId: {},
                UserProfileName: {},
                UserSettings: {
                  shape: 'Sai'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserProfileArn: {}
              }
            }
          },
          UpdateWorkforce: {
            input: {
              type: 'structure',
              required: ['WorkforceName'],
              members: {
                WorkforceName: {},
                SourceIpConfig: {
                  shape: 'Su7'
                },
                OidcConfig: {
                  shape: 'Su4'
                },
                WorkforceVpcConfig: {
                  shape: 'Sub'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Workforce'],
              members: {
                Workforce: {
                  shape: 'S17h'
                }
              }
            }
          },
          UpdateWorkteam: {
            input: {
              type: 'structure',
              required: ['WorkteamName'],
              members: {
                WorkteamName: {},
                MemberDefinitions: {
                  shape: 'Sul'
                },
                Description: {},
                NotificationConfiguration: {
                  shape: 'Sut'
                },
                WorkerAccessConfiguration: {
                  shape: 'Suv'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Workteam'],
              members: {
                Workteam: {
                  shape: 'S17p'
                }
              }
            }
          }
        },
        shapes: {
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
          Sr: {
            type: 'structure',
            required: ['Containers'],
            members: {
              Containers: {
                shape: 'Ss'
              },
              SupportedTransformInstanceTypes: {
                shape: 'S1h'
              },
              SupportedRealtimeInferenceInstanceTypes: {
                shape: 'S1j'
              },
              SupportedContentTypes: {
                shape: 'S1l'
              },
              SupportedResponseMIMETypes: {
                shape: 'S1n'
              }
            }
          },
          Ss: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Image'],
              members: {
                ContainerHostname: {},
                Image: {},
                ImageDigest: {},
                ModelDataUrl: {},
                ModelDataSource: {
                  shape: 'Sy'
                },
                ProductId: {},
                Environment: {
                  shape: 'S16'
                },
                ModelInput: {
                  type: 'structure',
                  required: ['DataInputConfig'],
                  members: {
                    DataInputConfig: {}
                  }
                },
                Framework: {},
                FrameworkVersion: {},
                NearestModelName: {},
                AdditionalS3DataSource: {
                  shape: 'S1d'
                }
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              S3DataSource: {
                type: 'structure',
                required: ['S3Uri', 'S3DataType', 'CompressionType'],
                members: {
                  S3Uri: {},
                  S3DataType: {},
                  CompressionType: {},
                  ModelAccessConfig: {
                    shape: 'S13'
                  }
                }
              }
            }
          },
          S13: {
            type: 'structure',
            required: ['AcceptEula'],
            members: {
              AcceptEula: {
                type: 'boolean'
              }
            }
          },
          S16: {
            type: 'map',
            key: {},
            value: {}
          },
          S1d: {
            type: 'structure',
            required: ['S3DataType', 'S3Uri'],
            members: {
              S3DataType: {},
              S3Uri: {},
              CompressionType: {}
            }
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'list',
            member: {}
          },
          S1l: {
            type: 'list',
            member: {}
          },
          S1n: {
            type: 'list',
            member: {}
          },
          S1u: {
            type: 'structure',
            required: ['SourceUri'],
            members: {
              SourceUri: {},
              SourceType: {},
              SourceId: {}
            }
          },
          S1z: {
            type: 'map',
            key: {},
            value: {}
          },
          S21: {
            type: 'structure',
            members: {
              CommitId: {},
              Repository: {},
              GeneratedBy: {},
              ProjectId: {}
            }
          },
          S26: {
            type: 'structure',
            required: ['TrainingImage', 'SupportedTrainingInstanceTypes', 'TrainingChannels'],
            members: {
              TrainingImage: {},
              TrainingImageDigest: {},
              SupportedHyperParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Type'],
                  members: {
                    Name: {},
                    Description: {},
                    Type: {},
                    Range: {
                      type: 'structure',
                      members: {
                        IntegerParameterRangeSpecification: {
                          type: 'structure',
                          required: ['MinValue', 'MaxValue'],
                          members: {
                            MinValue: {},
                            MaxValue: {}
                          }
                        },
                        ContinuousParameterRangeSpecification: {
                          type: 'structure',
                          required: ['MinValue', 'MaxValue'],
                          members: {
                            MinValue: {},
                            MaxValue: {}
                          }
                        },
                        CategoricalParameterRangeSpecification: {
                          type: 'structure',
                          required: ['Values'],
                          members: {
                            Values: {
                              shape: 'S2g'
                            }
                          }
                        }
                      }
                    },
                    IsTunable: {
                      type: 'boolean'
                    },
                    IsRequired: {
                      type: 'boolean'
                    },
                    DefaultValue: {}
                  }
                }
              },
              SupportedTrainingInstanceTypes: {
                type: 'list',
                member: {}
              },
              SupportsDistributedTraining: {
                type: 'boolean'
              },
              MetricDefinitions: {
                shape: 'S2l'
              },
              TrainingChannels: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'SupportedContentTypes', 'SupportedInputModes'],
                  members: {
                    Name: {},
                    Description: {},
                    IsRequired: {
                      type: 'boolean'
                    },
                    SupportedContentTypes: {
                      shape: 'S1l'
                    },
                    SupportedCompressionTypes: {
                      type: 'list',
                      member: {}
                    },
                    SupportedInputModes: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              SupportedTuningJobObjectiveMetrics: {
                type: 'list',
                member: {
                  shape: 'S2w'
                }
              },
              AdditionalS3DataSource: {
                shape: 'S1d'
              }
            }
          },
          S2g: {
            type: 'list',
            member: {}
          },
          S2l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Regex'],
              members: {
                Name: {},
                Regex: {}
              }
            }
          },
          S2w: {
            type: 'structure',
            required: ['Type', 'MetricName'],
            members: {
              Type: {},
              MetricName: {}
            }
          },
          S2y: {
            type: 'structure',
            required: ['ValidationRole', 'ValidationProfiles'],
            members: {
              ValidationRole: {},
              ValidationProfiles: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ProfileName', 'TrainingJobDefinition'],
                  members: {
                    ProfileName: {},
                    TrainingJobDefinition: {
                      type: 'structure',
                      required: ['TrainingInputMode', 'InputDataConfig', 'OutputDataConfig', 'ResourceConfig', 'StoppingCondition'],
                      members: {
                        TrainingInputMode: {},
                        HyperParameters: {
                          shape: 'S33'
                        },
                        InputDataConfig: {
                          shape: 'S35'
                        },
                        OutputDataConfig: {
                          shape: 'S3n'
                        },
                        ResourceConfig: {
                          shape: 'S3q'
                        },
                        StoppingCondition: {
                          shape: 'S3w'
                        }
                      }
                    },
                    TransformJobDefinition: {
                      shape: 'S40'
                    }
                  }
                }
              }
            }
          },
          S33: {
            type: 'map',
            key: {},
            value: {}
          },
          S35: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ChannelName', 'DataSource'],
              members: {
                ChannelName: {},
                DataSource: {
                  type: 'structure',
                  members: {
                    S3DataSource: {
                      type: 'structure',
                      required: ['S3DataType', 'S3Uri'],
                      members: {
                        S3DataType: {},
                        S3Uri: {},
                        S3DataDistributionType: {},
                        AttributeNames: {
                          type: 'list',
                          member: {}
                        },
                        InstanceGroupNames: {
                          type: 'list',
                          member: {}
                        }
                      }
                    },
                    FileSystemDataSource: {
                      type: 'structure',
                      required: ['FileSystemId', 'FileSystemAccessMode', 'FileSystemType', 'DirectoryPath'],
                      members: {
                        FileSystemId: {},
                        FileSystemAccessMode: {},
                        FileSystemType: {},
                        DirectoryPath: {}
                      }
                    }
                  }
                },
                ContentType: {},
                CompressionType: {},
                RecordWrapperType: {},
                InputMode: {},
                ShuffleConfig: {
                  type: 'structure',
                  required: ['Seed'],
                  members: {
                    Seed: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S3n: {
            type: 'structure',
            required: ['S3OutputPath'],
            members: {
              KmsKeyId: {},
              S3OutputPath: {},
              CompressionType: {}
            }
          },
          S3q: {
            type: 'structure',
            required: ['VolumeSizeInGB'],
            members: {
              InstanceType: {},
              InstanceCount: {
                type: 'integer'
              },
              VolumeSizeInGB: {
                type: 'integer'
              },
              VolumeKmsKeyId: {},
              KeepAlivePeriodInSeconds: {
                type: 'integer'
              },
              InstanceGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['InstanceType', 'InstanceCount', 'InstanceGroupName'],
                  members: {
                    InstanceType: {},
                    InstanceCount: {
                      type: 'integer'
                    },
                    InstanceGroupName: {}
                  }
                }
              }
            }
          },
          S3w: {
            type: 'structure',
            members: {
              MaxRuntimeInSeconds: {
                type: 'integer'
              },
              MaxWaitTimeInSeconds: {
                type: 'integer'
              },
              MaxPendingTimeInSeconds: {
                type: 'integer'
              }
            }
          },
          S40: {
            type: 'structure',
            required: ['TransformInput', 'TransformOutput', 'TransformResources'],
            members: {
              MaxConcurrentTransforms: {
                type: 'integer'
              },
              MaxPayloadInMB: {
                type: 'integer'
              },
              BatchStrategy: {},
              Environment: {
                shape: 'S44'
              },
              TransformInput: {
                shape: 'S47'
              },
              TransformOutput: {
                shape: 'S4b'
              },
              TransformResources: {
                shape: 'S4e'
              }
            }
          },
          S44: {
            type: 'map',
            key: {},
            value: {}
          },
          S47: {
            type: 'structure',
            required: ['DataSource'],
            members: {
              DataSource: {
                type: 'structure',
                required: ['S3DataSource'],
                members: {
                  S3DataSource: {
                    type: 'structure',
                    required: ['S3DataType', 'S3Uri'],
                    members: {
                      S3DataType: {},
                      S3Uri: {}
                    }
                  }
                }
              },
              ContentType: {},
              CompressionType: {},
              SplitType: {}
            }
          },
          S4b: {
            type: 'structure',
            required: ['S3OutputPath'],
            members: {
              S3OutputPath: {},
              Accept: {},
              AssembleWith: {},
              KmsKeyId: {}
            }
          },
          S4e: {
            type: 'structure',
            required: ['InstanceType', 'InstanceCount'],
            members: {
              InstanceType: {},
              InstanceCount: {
                type: 'integer'
              },
              VolumeKmsKeyId: {}
            }
          },
          S4p: {
            type: 'structure',
            members: {
              SageMakerImageArn: {},
              SageMakerImageVersionArn: {},
              SageMakerImageVersionAlias: {},
              InstanceType: {},
              LifecycleConfigArn: {}
            }
          },
          S4z: {
            type: 'structure',
            required: ['KernelSpecs'],
            members: {
              KernelSpecs: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    DisplayName: {}
                  }
                }
              },
              FileSystemConfig: {
                shape: 'S54'
              }
            }
          },
          S54: {
            type: 'structure',
            members: {
              MountPath: {},
              DefaultUid: {
                type: 'integer'
              },
              DefaultGid: {
                type: 'integer'
              }
            }
          },
          S58: {
            type: 'structure',
            members: {
              FileSystemConfig: {
                shape: 'S54'
              },
              ContainerConfig: {
                shape: 'S59'
              }
            }
          },
          S59: {
            type: 'structure',
            members: {
              ContainerArguments: {
                type: 'list',
                member: {}
              },
              ContainerEntrypoint: {
                type: 'list',
                member: {}
              },
              ContainerEnvironmentVariables: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S5f: {
            type: 'structure',
            members: {
              FileSystemConfig: {
                shape: 'S54'
              },
              ContainerConfig: {
                shape: 'S59'
              }
            }
          },
          S5j: {
            type: 'structure',
            required: ['SourceUri'],
            members: {
              SourceUri: {},
              SourceTypes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['SourceIdType', 'Value'],
                  members: {
                    SourceIdType: {},
                    Value: {}
                  }
                }
              }
            }
          },
          S5n: {
            type: 'map',
            key: {},
            value: {}
          },
          S5t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['TargetAttributeName'],
              members: {
                DataSource: {
                  shape: 'S5v'
                },
                CompressionType: {},
                TargetAttributeName: {},
                ContentType: {},
                ChannelType: {},
                SampleWeightAttributeName: {}
              }
            }
          },
          S5v: {
            type: 'structure',
            required: ['S3DataSource'],
            members: {
              S3DataSource: {
                type: 'structure',
                required: ['S3DataType', 'S3Uri'],
                members: {
                  S3DataType: {},
                  S3Uri: {}
                }
              }
            }
          },
          S61: {
            type: 'structure',
            required: ['S3OutputPath'],
            members: {
              KmsKeyId: {},
              S3OutputPath: {}
            }
          },
          S63: {
            type: 'structure',
            required: ['MetricName'],
            members: {
              MetricName: {}
            }
          },
          S65: {
            type: 'structure',
            members: {
              CompletionCriteria: {
                shape: 'S66'
              },
              SecurityConfig: {
                shape: 'S6a'
              },
              CandidateGenerationConfig: {
                type: 'structure',
                members: {
                  FeatureSpecificationS3Uri: {},
                  AlgorithmsConfig: {
                    shape: 'S6h'
                  }
                }
              },
              DataSplitConfig: {
                shape: 'S6l'
              },
              Mode: {}
            }
          },
          S66: {
            type: 'structure',
            members: {
              MaxCandidates: {
                type: 'integer'
              },
              MaxRuntimePerTrainingJobInSeconds: {
                type: 'integer'
              },
              MaxAutoMLJobRuntimeInSeconds: {
                type: 'integer'
              }
            }
          },
          S6a: {
            type: 'structure',
            members: {
              VolumeKmsKeyId: {},
              EnableInterContainerTrafficEncryption: {
                type: 'boolean'
              },
              VpcConfig: {
                shape: 'S6b'
              }
            }
          },
          S6b: {
            type: 'structure',
            required: ['SecurityGroupIds', 'Subnets'],
            members: {
              SecurityGroupIds: {
                type: 'list',
                member: {}
              },
              Subnets: {
                shape: 'S6e'
              }
            }
          },
          S6e: {
            type: 'list',
            member: {}
          },
          S6h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AutoMLAlgorithms'],
              members: {
                AutoMLAlgorithms: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S6l: {
            type: 'structure',
            members: {
              ValidationFraction: {
                type: 'float'
              }
            }
          },
          S6p: {
            type: 'structure',
            members: {
              AutoGenerateEndpointName: {
                type: 'boolean'
              },
              EndpointName: {}
            }
          },
          S6v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ChannelType: {},
                ContentType: {},
                CompressionType: {},
                DataSource: {
                  shape: 'S5v'
                }
              }
            }
          },
          S6x: {
            type: 'structure',
            members: {
              ImageClassificationJobConfig: {
                type: 'structure',
                members: {
                  CompletionCriteria: {
                    shape: 'S66'
                  }
                }
              },
              TextClassificationJobConfig: {
                type: 'structure',
                required: ['ContentColumn', 'TargetLabelColumn'],
                members: {
                  CompletionCriteria: {
                    shape: 'S66'
                  },
                  ContentColumn: {},
                  TargetLabelColumn: {}
                }
              },
              TimeSeriesForecastingJobConfig: {
                type: 'structure',
                required: ['ForecastFrequency', 'ForecastHorizon', 'TimeSeriesConfig'],
                members: {
                  FeatureSpecificationS3Uri: {},
                  CompletionCriteria: {
                    shape: 'S66'
                  },
                  ForecastFrequency: {},
                  ForecastHorizon: {
                    type: 'integer'
                  },
                  ForecastQuantiles: {
                    type: 'list',
                    member: {}
                  },
                  Transformations: {
                    type: 'structure',
                    members: {
                      Filling: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'map',
                          key: {},
                          value: {}
                        }
                      },
                      Aggregation: {
                        type: 'map',
                        key: {},
                        value: {}
                      }
                    }
                  },
                  TimeSeriesConfig: {
                    type: 'structure',
                    required: ['TargetAttributeName', 'TimestampAttributeName', 'ItemIdentifierAttributeName'],
                    members: {
                      TargetAttributeName: {},
                      TimestampAttributeName: {},
                      ItemIdentifierAttributeName: {},
                      GroupingAttributeNames: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  HolidayConfig: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        CountryCode: {}
                      }
                    }
                  },
                  CandidateGenerationConfig: {
                    shape: 'S7n'
                  }
                }
              },
              TabularJobConfig: {
                type: 'structure',
                required: ['TargetAttributeName'],
                members: {
                  CandidateGenerationConfig: {
                    shape: 'S7n'
                  },
                  CompletionCriteria: {
                    shape: 'S66'
                  },
                  FeatureSpecificationS3Uri: {},
                  Mode: {},
                  GenerateCandidateDefinitionsOnly: {
                    type: 'boolean'
                  },
                  ProblemType: {},
                  TargetAttributeName: {},
                  SampleWeightAttributeName: {}
                }
              },
              TextGenerationJobConfig: {
                type: 'structure',
                members: {
                  CompletionCriteria: {
                    shape: 'S66'
                  },
                  BaseModelName: {},
                  TextGenerationHyperParameters: {
                    type: 'map',
                    key: {},
                    value: {}
                  },
                  ModelAccessConfig: {
                    shape: 'S13'
                  }
                }
              }
            },
            union: true
          },
          S7n: {
            type: 'structure',
            members: {
              AlgorithmsConfig: {
                shape: 'S6h'
              }
            }
          },
          S7x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['InstanceCount', 'InstanceGroupName', 'InstanceType', 'LifeCycleConfig', 'ExecutionRole'],
              members: {
                InstanceCount: {
                  type: 'integer'
                },
                InstanceGroupName: {},
                InstanceType: {},
                LifeCycleConfig: {
                  shape: 'S82'
                },
                ExecutionRole: {},
                ThreadsPerCore: {
                  type: 'integer'
                }
              }
            }
          },
          S82: {
            type: 'structure',
            required: ['SourceS3Uri', 'OnCreate'],
            members: {
              SourceS3Uri: {},
              OnCreate: {}
            }
          },
          S88: {
            type: 'structure',
            required: ['RepositoryUrl'],
            members: {
              RepositoryUrl: {},
              Branch: {},
              SecretArn: {}
            }
          },
          S8f: {
            type: 'structure',
            required: ['S3Uri', 'Framework'],
            members: {
              S3Uri: {},
              DataInputConfig: {},
              Framework: {},
              FrameworkVersion: {}
            }
          },
          S8i: {
            type: 'structure',
            required: ['S3OutputLocation'],
            members: {
              S3OutputLocation: {},
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
              CompilerOptions: {},
              KmsKeyId: {}
            }
          },
          S8p: {
            type: 'structure',
            required: ['SecurityGroupIds', 'Subnets'],
            members: {
              SecurityGroupIds: {
                type: 'list',
                member: {}
              },
              Subnets: {
                type: 'list',
                member: {}
              }
            }
          },
          S8y: {
            type: 'structure',
            required: ['SourceUri'],
            members: {
              SourceUri: {},
              SourceType: {},
              SourceId: {}
            }
          },
          S93: {
            type: 'structure',
            members: {
              BaseliningJobName: {},
              ConstraintsResource: {
                shape: 'S95'
              },
              StatisticsResource: {
                shape: 'S96'
              }
            }
          },
          S95: {
            type: 'structure',
            members: {
              S3Uri: {}
            }
          },
          S96: {
            type: 'structure',
            members: {
              S3Uri: {}
            }
          },
          S97: {
            type: 'structure',
            required: ['ImageUri'],
            members: {
              ImageUri: {},
              ContainerEntrypoint: {
                shape: 'S99'
              },
              ContainerArguments: {
                shape: 'S9b'
              },
              RecordPreprocessorSourceUri: {},
              PostAnalyticsProcessorSourceUri: {},
              Environment: {
                shape: 'S9d'
              }
            }
          },
          S99: {
            type: 'list',
            member: {}
          },
          S9b: {
            type: 'list',
            member: {}
          },
          S9d: {
            type: 'map',
            key: {},
            value: {}
          },
          S9g: {
            type: 'structure',
            members: {
              EndpointInput: {
                shape: 'S9h'
              },
              BatchTransformInput: {
                shape: 'S9o'
              }
            }
          },
          S9h: {
            type: 'structure',
            required: ['EndpointName', 'LocalPath'],
            members: {
              EndpointName: {},
              LocalPath: {},
              S3InputMode: {},
              S3DataDistributionType: {},
              FeaturesAttribute: {},
              InferenceAttribute: {},
              ProbabilityAttribute: {},
              ProbabilityThresholdAttribute: {
                type: 'double'
              },
              StartTimeOffset: {},
              EndTimeOffset: {},
              ExcludeFeaturesAttribute: {}
            }
          },
          S9o: {
            type: 'structure',
            required: ['DataCapturedDestinationS3Uri', 'DatasetFormat', 'LocalPath'],
            members: {
              DataCapturedDestinationS3Uri: {},
              DatasetFormat: {
                type: 'structure',
                members: {
                  Csv: {
                    type: 'structure',
                    members: {
                      Header: {
                        type: 'boolean'
                      }
                    }
                  },
                  Json: {
                    type: 'structure',
                    members: {
                      Line: {
                        type: 'boolean'
                      }
                    }
                  },
                  Parquet: {
                    type: 'structure',
                    members: {}
                  }
                }
              },
              LocalPath: {},
              S3InputMode: {},
              S3DataDistributionType: {},
              FeaturesAttribute: {},
              InferenceAttribute: {},
              ProbabilityAttribute: {},
              ProbabilityThresholdAttribute: {
                type: 'double'
              },
              StartTimeOffset: {},
              EndTimeOffset: {},
              ExcludeFeaturesAttribute: {}
            }
          },
          S9u: {
            type: 'structure',
            required: ['MonitoringOutputs'],
            members: {
              MonitoringOutputs: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['S3Output'],
                  members: {
                    S3Output: {
                      type: 'structure',
                      required: ['S3Uri', 'LocalPath'],
                      members: {
                        S3Uri: {},
                        LocalPath: {},
                        S3UploadMode: {}
                      }
                    }
                  }
                }
              },
              KmsKeyId: {}
            }
          },
          Sa0: {
            type: 'structure',
            required: ['ClusterConfig'],
            members: {
              ClusterConfig: {
                type: 'structure',
                required: ['InstanceCount', 'InstanceType', 'VolumeSizeInGB'],
                members: {
                  InstanceCount: {
                    type: 'integer'
                  },
                  InstanceType: {},
                  VolumeSizeInGB: {
                    type: 'integer'
                  },
                  VolumeKmsKeyId: {}
                }
              }
            }
          },
          Sa5: {
            type: 'structure',
            members: {
              EnableInterContainerTrafficEncryption: {
                type: 'boolean'
              },
              EnableNetworkIsolation: {
                type: 'boolean'
              },
              VpcConfig: {
                shape: 'S6b'
              }
            }
          },
          Sa6: {
            type: 'structure',
            required: ['MaxRuntimeInSeconds'],
            members: {
              MaxRuntimeInSeconds: {
                type: 'integer'
              }
            }
          },
          Sac: {
            type: 'structure',
            required: ['S3OutputLocation'],
            members: {
              S3OutputLocation: {},
              KmsKeyId: {},
              PresetDeploymentType: {},
              PresetDeploymentConfig: {}
            }
          },
          Sai: {
            type: 'structure',
            members: {
              ExecutionRole: {},
              SecurityGroups: {
                shape: 'Saj'
              },
              SharingSettings: {
                type: 'structure',
                members: {
                  NotebookOutputOption: {},
                  S3OutputPath: {},
                  S3KmsKeyId: {}
                }
              },
              JupyterServerAppSettings: {
                shape: 'Sam'
              },
              KernelGatewayAppSettings: {
                shape: 'Sar'
              },
              TensorBoardAppSettings: {
                type: 'structure',
                members: {
                  DefaultResourceSpec: {
                    shape: 'S4p'
                  }
                }
              },
              RStudioServerProAppSettings: {
                type: 'structure',
                members: {
                  AccessStatus: {},
                  UserGroup: {}
                }
              },
              RSessionAppSettings: {
                type: 'structure',
                members: {
                  DefaultResourceSpec: {
                    shape: 'S4p'
                  },
                  CustomImages: {
                    shape: 'Sas'
                  }
                }
              },
              CanvasAppSettings: {
                type: 'structure',
                members: {
                  TimeSeriesForecastingSettings: {
                    type: 'structure',
                    members: {
                      Status: {},
                      AmazonForecastRoleArn: {}
                    }
                  },
                  ModelRegisterSettings: {
                    type: 'structure',
                    members: {
                      Status: {},
                      CrossAccountModelRegisterRoleArn: {}
                    }
                  },
                  WorkspaceSettings: {
                    type: 'structure',
                    members: {
                      S3ArtifactPath: {},
                      S3KmsKeyId: {}
                    }
                  },
                  IdentityProviderOAuthSettings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        DataSourceName: {},
                        Status: {},
                        SecretArn: {}
                      }
                    }
                  },
                  DirectDeploySettings: {
                    type: 'structure',
                    members: {
                      Status: {}
                    }
                  },
                  KendraSettings: {
                    type: 'structure',
                    members: {
                      Status: {}
                    }
                  },
                  GenerativeAiSettings: {
                    type: 'structure',
                    members: {
                      AmazonBedrockRoleArn: {}
                    }
                  }
                }
              },
              CodeEditorAppSettings: {
                type: 'structure',
                members: {
                  DefaultResourceSpec: {
                    shape: 'S4p'
                  },
                  CustomImages: {
                    shape: 'Sas'
                  },
                  LifecycleConfigArns: {
                    shape: 'San'
                  }
                }
              },
              JupyterLabAppSettings: {
                shape: 'Sbd'
              },
              SpaceStorageSettings: {
                shape: 'Sbe'
              },
              DefaultLandingUri: {},
              StudioWebPortal: {},
              CustomPosixUserConfig: {
                shape: 'Sbj'
              },
              CustomFileSystemConfigs: {
                shape: 'Sbm'
              }
            }
          },
          Saj: {
            type: 'list',
            member: {}
          },
          Sam: {
            type: 'structure',
            members: {
              DefaultResourceSpec: {
                shape: 'S4p'
              },
              LifecycleConfigArns: {
                shape: 'San'
              },
              CodeRepositories: {
                shape: 'Sao'
              }
            }
          },
          San: {
            type: 'list',
            member: {}
          },
          Sao: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['RepositoryUrl'],
              members: {
                RepositoryUrl: {}
              }
            }
          },
          Sar: {
            type: 'structure',
            members: {
              DefaultResourceSpec: {
                shape: 'S4p'
              },
              CustomImages: {
                shape: 'Sas'
              },
              LifecycleConfigArns: {
                shape: 'San'
              }
            }
          },
          Sas: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ImageName', 'AppImageConfigName'],
              members: {
                ImageName: {},
                ImageVersionNumber: {
                  type: 'integer'
                },
                AppImageConfigName: {}
              }
            }
          },
          Sbd: {
            type: 'structure',
            members: {
              DefaultResourceSpec: {
                shape: 'S4p'
              },
              CustomImages: {
                shape: 'Sas'
              },
              LifecycleConfigArns: {
                shape: 'San'
              },
              CodeRepositories: {
                shape: 'Sao'
              }
            }
          },
          Sbe: {
            type: 'structure',
            members: {
              DefaultEbsStorageSettings: {
                type: 'structure',
                required: ['DefaultEbsVolumeSizeInGb', 'MaximumEbsVolumeSizeInGb'],
                members: {
                  DefaultEbsVolumeSizeInGb: {
                    type: 'integer'
                  },
                  MaximumEbsVolumeSizeInGb: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          Sbj: {
            type: 'structure',
            required: ['Uid', 'Gid'],
            members: {
              Uid: {
                type: 'long'
              },
              Gid: {
                type: 'long'
              }
            }
          },
          Sbm: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EFSFileSystemConfig: {
                  type: 'structure',
                  required: ['FileSystemId'],
                  members: {
                    FileSystemId: {},
                    FileSystemPath: {}
                  }
                }
              },
              union: true
            }
          },
          Sbq: {
            type: 'structure',
            members: {
              SecurityGroupIds: {
                shape: 'Sbr'
              },
              RStudioServerProDomainSettings: {
                type: 'structure',
                required: ['DomainExecutionRoleArn'],
                members: {
                  DomainExecutionRoleArn: {},
                  RStudioConnectUrl: {},
                  RStudioPackageManagerUrl: {},
                  DefaultResourceSpec: {
                    shape: 'S4p'
                  }
                }
              },
              ExecutionRoleIdentityConfig: {},
              DockerSettings: {
                shape: 'Sbu'
              }
            }
          },
          Sbr: {
            type: 'list',
            member: {}
          },
          Sbu: {
            type: 'structure',
            members: {
              EnableDockerAccess: {},
              VpcOnlyTrustedAccounts: {
                type: 'list',
                member: {}
              }
            }
          },
          Sc0: {
            type: 'structure',
            members: {
              ExecutionRole: {},
              SecurityGroups: {
                shape: 'Saj'
              },
              JupyterServerAppSettings: {
                shape: 'Sam'
              },
              KernelGatewayAppSettings: {
                shape: 'Sar'
              },
              JupyterLabAppSettings: {
                shape: 'Sbd'
              },
              SpaceStorageSettings: {
                shape: 'Sbe'
              },
              CustomPosixUserConfig: {
                shape: 'Sbj'
              },
              CustomFileSystemConfigs: {
                shape: 'Sbm'
              }
            }
          },
          Sc5: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ModelHandle', 'EdgePackagingJobName'],
              members: {
                ModelHandle: {},
                EdgePackagingJobName: {}
              }
            }
          },
          Sc7: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['StageName', 'DeviceSelectionConfig'],
              members: {
                StageName: {},
                DeviceSelectionConfig: {
                  shape: 'Sc9'
                },
                DeploymentConfig: {
                  shape: 'Sce'
                }
              }
            }
          },
          Sc9: {
            type: 'structure',
            required: ['DeviceSubsetType'],
            members: {
              DeviceSubsetType: {},
              Percentage: {
                type: 'integer'
              },
              DeviceNames: {
                shape: 'Scc'
              },
              DeviceNameContains: {}
            }
          },
          Scc: {
            type: 'list',
            member: {}
          },
          Sce: {
            type: 'structure',
            required: ['FailureHandlingPolicy'],
            members: {
              FailureHandlingPolicy: {}
            }
          },
          Scn: {
            type: 'structure',
            members: {
              BlueGreenUpdatePolicy: {
                type: 'structure',
                required: ['TrafficRoutingConfiguration'],
                members: {
                  TrafficRoutingConfiguration: {
                    type: 'structure',
                    required: ['Type', 'WaitIntervalInSeconds'],
                    members: {
                      Type: {},
                      WaitIntervalInSeconds: {
                        type: 'integer'
                      },
                      CanarySize: {
                        shape: 'Scs'
                      },
                      LinearStepSize: {
                        shape: 'Scs'
                      }
                    }
                  },
                  TerminationWaitInSeconds: {
                    type: 'integer'
                  },
                  MaximumExecutionTimeoutInSeconds: {
                    type: 'integer'
                  }
                }
              },
              RollingUpdatePolicy: {
                type: 'structure',
                required: ['MaximumBatchSize', 'WaitIntervalInSeconds'],
                members: {
                  MaximumBatchSize: {
                    shape: 'Scs'
                  },
                  WaitIntervalInSeconds: {
                    type: 'integer'
                  },
                  MaximumExecutionTimeoutInSeconds: {
                    type: 'integer'
                  },
                  RollbackMaximumBatchSize: {
                    shape: 'Scs'
                  }
                }
              },
              AutoRollbackConfiguration: {
                type: 'structure',
                members: {
                  Alarms: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        AlarmName: {}
                      }
                    }
                  }
                }
              }
            }
          },
          Scs: {
            type: 'structure',
            required: ['Type', 'Value'],
            members: {
              Type: {},
              Value: {
                type: 'integer'
              }
            }
          },
          Sd5: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['VariantName'],
              members: {
                VariantName: {},
                ModelName: {},
                InitialInstanceCount: {
                  type: 'integer'
                },
                InstanceType: {},
                InitialVariantWeight: {
                  type: 'float'
                },
                AcceleratorType: {},
                CoreDumpConfig: {
                  type: 'structure',
                  required: ['DestinationS3Uri'],
                  members: {
                    DestinationS3Uri: {},
                    KmsKeyId: {}
                  }
                },
                ServerlessConfig: {
                  shape: 'Sdd'
                },
                VolumeSizeInGB: {
                  type: 'integer'
                },
                ModelDataDownloadTimeoutInSeconds: {
                  type: 'integer'
                },
                ContainerStartupHealthCheckTimeoutInSeconds: {
                  type: 'integer'
                },
                EnableSSMAccess: {
                  type: 'boolean'
                },
                ManagedInstanceScaling: {
                  shape: 'Sdl'
                },
                RoutingConfig: {
                  shape: 'Sdp'
                },
                InferenceAmiVersion: {}
              }
            }
          },
          Sdd: {
            type: 'structure',
            required: ['MemorySizeInMB', 'MaxConcurrency'],
            members: {
              MemorySizeInMB: {
                type: 'integer'
              },
              MaxConcurrency: {
                type: 'integer'
              },
              ProvisionedConcurrency: {
                type: 'integer'
              }
            }
          },
          Sdl: {
            type: 'structure',
            members: {
              Status: {},
              MinInstanceCount: {
                type: 'integer'
              },
              MaxInstanceCount: {
                type: 'integer'
              }
            }
          },
          Sdp: {
            type: 'structure',
            required: ['RoutingStrategy'],
            members: {
              RoutingStrategy: {}
            }
          },
          Sds: {
            type: 'structure',
            required: ['InitialSamplingPercentage', 'DestinationS3Uri', 'CaptureOptions'],
            members: {
              EnableCapture: {
                type: 'boolean'
              },
              InitialSamplingPercentage: {
                type: 'integer'
              },
              DestinationS3Uri: {},
              KmsKeyId: {},
              CaptureOptions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['CaptureMode'],
                  members: {
                    CaptureMode: {}
                  }
                }
              },
              CaptureContentTypeHeader: {
                shape: 'Sdy'
              }
            }
          },
          Sdy: {
            type: 'structure',
            members: {
              CsvContentTypes: {
                type: 'list',
                member: {}
              },
              JsonContentTypes: {
                type: 'list',
                member: {}
              }
            }
          },
          Se3: {
            type: 'structure',
            required: ['OutputConfig'],
            members: {
              ClientConfig: {
                type: 'structure',
                members: {
                  MaxConcurrentInvocationsPerInstance: {
                    type: 'integer'
                  }
                }
              },
              OutputConfig: {
                type: 'structure',
                members: {
                  KmsKeyId: {},
                  S3OutputPath: {},
                  NotificationConfig: {
                    type: 'structure',
                    members: {
                      SuccessTopic: {},
                      ErrorTopic: {},
                      IncludeInferenceResponseIn: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  S3FailurePath: {}
                }
              }
            }
          },
          Seb: {
            type: 'structure',
            members: {
              ClarifyExplainerConfig: {
                type: 'structure',
                required: ['ShapConfig'],
                members: {
                  EnableExplanations: {},
                  InferenceConfig: {
                    type: 'structure',
                    members: {
                      FeaturesAttribute: {},
                      ContentTemplate: {},
                      MaxRecordCount: {
                        type: 'integer'
                      },
                      MaxPayloadInMB: {
                        type: 'integer'
                      },
                      ProbabilityIndex: {
                        type: 'integer'
                      },
                      LabelIndex: {
                        type: 'integer'
                      },
                      ProbabilityAttribute: {},
                      LabelAttribute: {},
                      LabelHeaders: {
                        type: 'list',
                        member: {}
                      },
                      FeatureHeaders: {
                        type: 'list',
                        member: {}
                      },
                      FeatureTypes: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  ShapConfig: {
                    type: 'structure',
                    required: ['ShapBaselineConfig'],
                    members: {
                      ShapBaselineConfig: {
                        type: 'structure',
                        members: {
                          MimeType: {},
                          ShapBaseline: {},
                          ShapBaselineUri: {}
                        }
                      },
                      NumberOfSamples: {
                        type: 'integer'
                      },
                      UseLogit: {
                        type: 'boolean'
                      },
                      Seed: {
                        type: 'integer'
                      },
                      TextConfig: {
                        type: 'structure',
                        required: ['Language', 'Granularity'],
                        members: {
                          Language: {},
                          Granularity: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sfa: {
            type: 'list',
            member: {
              shape: 'Sfb'
            }
          },
          Sfb: {
            type: 'structure',
            required: ['FeatureName', 'FeatureType'],
            members: {
              FeatureName: {},
              FeatureType: {},
              CollectionType: {},
              CollectionConfig: {
                type: 'structure',
                members: {
                  VectorConfig: {
                    type: 'structure',
                    required: ['Dimension'],
                    members: {
                      Dimension: {
                        type: 'integer'
                      }
                    }
                  }
                },
                union: true
              }
            }
          },
          Sfh: {
            type: 'structure',
            members: {
              SecurityConfig: {
                type: 'structure',
                members: {
                  KmsKeyId: {}
                }
              },
              EnableOnlineStore: {
                type: 'boolean'
              },
              TtlDuration: {
                shape: 'Sfj'
              },
              StorageType: {}
            }
          },
          Sfj: {
            type: 'structure',
            members: {
              Unit: {},
              Value: {
                type: 'integer'
              }
            }
          },
          Sfn: {
            type: 'structure',
            required: ['S3StorageConfig'],
            members: {
              S3StorageConfig: {
                type: 'structure',
                required: ['S3Uri'],
                members: {
                  S3Uri: {},
                  KmsKeyId: {},
                  ResolvedOutputS3Uri: {}
                }
              },
              DisableGlueTableCreation: {
                type: 'boolean'
              },
              DataCatalogConfig: {
                type: 'structure',
                required: ['TableName', 'Catalog', 'Database'],
                members: {
                  TableName: {},
                  Catalog: {},
                  Database: {}
                }
              },
              TableFormat: {}
            }
          },
          Sg2: {
            type: 'structure',
            required: ['AwsManagedHumanLoopRequestSource'],
            members: {
              AwsManagedHumanLoopRequestSource: {}
            }
          },
          Sg4: {
            type: 'structure',
            required: ['HumanLoopActivationConditionsConfig'],
            members: {
              HumanLoopActivationConditionsConfig: {
                type: 'structure',
                required: ['HumanLoopActivationConditions'],
                members: {
                  HumanLoopActivationConditions: {
                    jsonvalue: true
                  }
                }
              }
            }
          },
          Sg7: {
            type: 'structure',
            required: ['WorkteamArn', 'HumanTaskUiArn', 'TaskTitle', 'TaskDescription', 'TaskCount'],
            members: {
              WorkteamArn: {},
              HumanTaskUiArn: {},
              TaskTitle: {},
              TaskDescription: {},
              TaskCount: {
                type: 'integer'
              },
              TaskAvailabilityLifetimeInSeconds: {
                type: 'integer'
              },
              TaskTimeLimitInSeconds: {
                type: 'integer'
              },
              TaskKeywords: {
                type: 'list',
                member: {}
              },
              PublicWorkforceTaskPrice: {
                shape: 'Sgh'
              }
            }
          },
          Sgh: {
            type: 'structure',
            members: {
              AmountInUsd: {
                type: 'structure',
                members: {
                  Dollars: {
                    type: 'integer'
                  },
                  Cents: {
                    type: 'integer'
                  },
                  TenthFractionsOfACent: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          Sgm: {
            type: 'structure',
            required: ['S3OutputPath'],
            members: {
              S3OutputPath: {},
              KmsKeyId: {}
            }
          },
          Sgt: {
            type: 'list',
            member: {}
          },
          Sgv: {
            type: 'structure',
            members: {
              S3OutputPath: {}
            }
          },
          Sh1: {
            type: 'structure',
            required: ['Content'],
            members: {
              Content: {}
            }
          },
          Sh6: {
            type: 'structure',
            required: ['Strategy', 'ResourceLimits'],
            members: {
              Strategy: {},
              StrategyConfig: {
                type: 'structure',
                members: {
                  HyperbandStrategyConfig: {
                    type: 'structure',
                    members: {
                      MinResource: {
                        type: 'integer'
                      },
                      MaxResource: {
                        type: 'integer'
                      }
                    }
                  }
                }
              },
              HyperParameterTuningJobObjective: {
                shape: 'S2w'
              },
              ResourceLimits: {
                shape: 'Shc'
              },
              ParameterRanges: {
                shape: 'Shg'
              },
              TrainingJobEarlyStoppingType: {},
              TuningJobCompletionCriteria: {
                type: 'structure',
                members: {
                  TargetObjectiveMetricValue: {
                    type: 'float'
                  },
                  BestObjectiveNotImproving: {
                    type: 'structure',
                    members: {
                      MaxNumberOfTrainingJobsNotImproving: {
                        type: 'integer'
                      }
                    }
                  },
                  ConvergenceDetected: {
                    type: 'structure',
                    members: {
                      CompleteOnConvergence: {}
                    }
                  }
                }
              },
              RandomSeed: {
                type: 'integer'
              }
            }
          },
          Shc: {
            type: 'structure',
            required: ['MaxParallelTrainingJobs'],
            members: {
              MaxNumberOfTrainingJobs: {
                type: 'integer'
              },
              MaxParallelTrainingJobs: {
                type: 'integer'
              },
              MaxRuntimeInSeconds: {
                type: 'integer'
              }
            }
          },
          Shg: {
            type: 'structure',
            members: {
              IntegerParameterRanges: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'MinValue', 'MaxValue'],
                  members: {
                    Name: {},
                    MinValue: {},
                    MaxValue: {},
                    ScalingType: {}
                  }
                }
              },
              ContinuousParameterRanges: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'MinValue', 'MaxValue'],
                  members: {
                    Name: {},
                    MinValue: {},
                    MaxValue: {},
                    ScalingType: {}
                  }
                }
              },
              CategoricalParameterRanges: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Values'],
                  members: {
                    Name: {},
                    Values: {
                      shape: 'S2g'
                    }
                  }
                }
              },
              AutoParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'ValueHint'],
                  members: {
                    Name: {},
                    ValueHint: {}
                  }
                }
              }
            }
          },
          Shz: {
            type: 'structure',
            required: ['AlgorithmSpecification', 'RoleArn', 'OutputDataConfig', 'StoppingCondition'],
            members: {
              DefinitionName: {},
              TuningObjective: {
                shape: 'S2w'
              },
              HyperParameterRanges: {
                shape: 'Shg'
              },
              StaticHyperParameters: {
                shape: 'S33'
              },
              AlgorithmSpecification: {
                type: 'structure',
                required: ['TrainingInputMode'],
                members: {
                  TrainingImage: {},
                  TrainingInputMode: {},
                  AlgorithmName: {},
                  MetricDefinitions: {
                    shape: 'S2l'
                  }
                }
              },
              RoleArn: {},
              InputDataConfig: {
                shape: 'S35'
              },
              VpcConfig: {
                shape: 'S6b'
              },
              OutputDataConfig: {
                shape: 'S3n'
              },
              ResourceConfig: {
                shape: 'S3q'
              },
              HyperParameterTuningResourceConfig: {
                type: 'structure',
                members: {
                  InstanceType: {},
                  InstanceCount: {
                    type: 'integer'
                  },
                  VolumeSizeInGB: {
                    type: 'integer'
                  },
                  VolumeKmsKeyId: {},
                  AllocationStrategy: {},
                  InstanceConfigs: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['InstanceType', 'InstanceCount', 'VolumeSizeInGB'],
                      members: {
                        InstanceType: {},
                        InstanceCount: {
                          type: 'integer'
                        },
                        VolumeSizeInGB: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              },
              StoppingCondition: {
                shape: 'S3w'
              },
              EnableNetworkIsolation: {
                type: 'boolean'
              },
              EnableInterContainerTrafficEncryption: {
                type: 'boolean'
              },
              EnableManagedSpotTraining: {
                type: 'boolean'
              },
              CheckpointConfig: {
                shape: 'Si9'
              },
              RetryStrategy: {
                shape: 'Sia'
              },
              Environment: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          Si9: {
            type: 'structure',
            required: ['S3Uri'],
            members: {
              S3Uri: {},
              LocalPath: {}
            }
          },
          Sia: {
            type: 'structure',
            required: ['MaximumRetryAttempts'],
            members: {
              MaximumRetryAttempts: {
                type: 'integer'
              }
            }
          },
          Sif: {
            type: 'list',
            member: {
              shape: 'Shz'
            }
          },
          Sig: {
            type: 'structure',
            required: ['ParentHyperParameterTuningJobs', 'WarmStartType'],
            members: {
              ParentHyperParameterTuningJobs: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    HyperParameterTuningJobName: {}
                  }
                }
              },
              WarmStartType: {}
            }
          },
          Sik: {
            type: 'structure',
            required: ['Mode'],
            members: {
              Mode: {}
            }
          },
          Siv: {
            type: 'list',
            member: {}
          },
          Sj7: {
            type: 'structure',
            required: ['ComputeResourceRequirements'],
            members: {
              ModelName: {},
              Container: {
                type: 'structure',
                members: {
                  Image: {},
                  ArtifactUrl: {},
                  Environment: {
                    shape: 'S16'
                  }
                }
              },
              StartupParameters: {
                shape: 'Sj9'
              },
              ComputeResourceRequirements: {
                shape: 'Sja'
              }
            }
          },
          Sj9: {
            type: 'structure',
            members: {
              ModelDataDownloadTimeoutInSeconds: {
                type: 'integer'
              },
              ContainerStartupHealthCheckTimeoutInSeconds: {
                type: 'integer'
              }
            }
          },
          Sja: {
            type: 'structure',
            required: ['MinMemoryRequiredInMb'],
            members: {
              NumberOfCpuCoresRequired: {
                type: 'float'
              },
              NumberOfAcceleratorDevicesRequired: {
                type: 'float'
              },
              MinMemoryRequiredInMb: {
                type: 'integer'
              },
              MaxMemoryRequiredInMb: {
                type: 'integer'
              }
            }
          },
          Sje: {
            type: 'structure',
            required: ['CopyCount'],
            members: {
              CopyCount: {
                type: 'integer'
              }
            }
          },
          Sjl: {
            type: 'structure',
            members: {
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              }
            }
          },
          Sjo: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ModelName', 'VariantName', 'InfrastructureConfig'],
              members: {
                ModelName: {},
                VariantName: {},
                InfrastructureConfig: {
                  shape: 'Sjr'
                }
              }
            }
          },
          Sjr: {
            type: 'structure',
            required: ['InfrastructureType', 'RealTimeInferenceConfig'],
            members: {
              InfrastructureType: {},
              RealTimeInferenceConfig: {
                type: 'structure',
                required: ['InstanceType', 'InstanceCount'],
                members: {
                  InstanceType: {},
                  InstanceCount: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          Sjw: {
            type: 'structure',
            required: ['Destination'],
            members: {
              Destination: {},
              KmsKey: {},
              ContentType: {
                shape: 'Sdy'
              }
            }
          },
          Sjx: {
            type: 'structure',
            required: ['SourceModelVariantName', 'ShadowModelVariants'],
            members: {
              SourceModelVariantName: {},
              ShadowModelVariants: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ShadowModelVariantName', 'SamplingPercentage'],
                  members: {
                    ShadowModelVariantName: {},
                    SamplingPercentage: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          Sk5: {
            type: 'structure',
            members: {
              ModelPackageVersionArn: {},
              ModelName: {},
              JobDurationInSeconds: {
                type: 'integer'
              },
              TrafficPattern: {
                type: 'structure',
                members: {
                  TrafficType: {},
                  Phases: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        InitialNumberOfUsers: {
                          type: 'integer'
                        },
                        SpawnRate: {
                          type: 'integer'
                        },
                        DurationInSeconds: {
                          type: 'integer'
                        }
                      }
                    }
                  },
                  Stairs: {
                    type: 'structure',
                    members: {
                      DurationInSeconds: {
                        type: 'integer'
                      },
                      NumberOfSteps: {
                        type: 'integer'
                      },
                      UsersPerStep: {
                        type: 'integer'
                      }
                    }
                  }
                }
              },
              ResourceLimit: {
                type: 'structure',
                members: {
                  MaxNumberOfTests: {
                    type: 'integer'
                  },
                  MaxParallelOfTests: {
                    type: 'integer'
                  }
                }
              },
              EndpointConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    InstanceType: {},
                    ServerlessConfig: {
                      shape: 'Sdd'
                    },
                    InferenceSpecificationName: {},
                    EnvironmentParameterRanges: {
                      type: 'structure',
                      members: {
                        CategoricalParameterRanges: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['Name', 'Value'],
                            members: {
                              Name: {},
                              Value: {
                                type: 'list',
                                member: {}
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              VolumeKmsKeyId: {},
              ContainerConfig: {
                type: 'structure',
                members: {
                  Domain: {},
                  Task: {},
                  Framework: {},
                  FrameworkVersion: {},
                  PayloadConfig: {
                    type: 'structure',
                    members: {
                      SamplePayloadUrl: {},
                      SupportedContentTypes: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  NearestModelName: {},
                  SupportedInstanceTypes: {
                    type: 'list',
                    member: {}
                  },
                  SupportedEndpointType: {},
                  DataInputConfig: {},
                  SupportedResponseMIMETypes: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              Endpoints: {
                type: 'list',
                member: {
                  shape: 'Sl4'
                }
              },
              VpcConfig: {
                type: 'structure',
                required: ['SecurityGroupIds', 'Subnets'],
                members: {
                  SecurityGroupIds: {
                    type: 'list',
                    member: {}
                  },
                  Subnets: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          Sl4: {
            type: 'structure',
            members: {
              EndpointName: {}
            }
          },
          Slb: {
            type: 'structure',
            members: {
              MaxInvocations: {
                type: 'integer'
              },
              ModelLatencyThresholds: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Percentile: {},
                    ValueInMilliseconds: {
                      type: 'integer'
                    }
                  }
                }
              },
              FlatInvocations: {}
            }
          },
          Sln: {
            type: 'structure',
            required: ['DataSource'],
            members: {
              DataSource: {
                type: 'structure',
                members: {
                  S3DataSource: {
                    type: 'structure',
                    required: ['ManifestS3Uri'],
                    members: {
                      ManifestS3Uri: {}
                    }
                  },
                  SnsDataSource: {
                    type: 'structure',
                    required: ['SnsTopicArn'],
                    members: {
                      SnsTopicArn: {}
                    }
                  }
                }
              },
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
          Slu: {
            type: 'structure',
            required: ['S3OutputPath'],
            members: {
              S3OutputPath: {},
              KmsKeyId: {},
              SnsTopicArn: {}
            }
          },
          Slv: {
            type: 'structure',
            members: {
              MaxHumanLabeledObjectCount: {
                type: 'integer'
              },
              MaxPercentageOfInputDatasetLabeled: {
                type: 'integer'
              }
            }
          },
          Sly: {
            type: 'structure',
            required: ['LabelingJobAlgorithmSpecificationArn'],
            members: {
              LabelingJobAlgorithmSpecificationArn: {},
              InitialActiveLearningModelArn: {},
              LabelingJobResourceConfig: {
                type: 'structure',
                members: {
                  VolumeKmsKeyId: {},
                  VpcConfig: {
                    shape: 'S6b'
                  }
                }
              }
            }
          },
          Sm2: {
            type: 'structure',
            required: ['WorkteamArn', 'UiConfig', 'PreHumanTaskLambdaArn', 'TaskTitle', 'TaskDescription', 'NumberOfHumanWorkersPerDataObject', 'TaskTimeLimitInSeconds', 'AnnotationConsolidationConfig'],
            members: {
              WorkteamArn: {},
              UiConfig: {
                type: 'structure',
                members: {
                  UiTemplateS3Uri: {},
                  HumanTaskUiArn: {}
                }
              },
              PreHumanTaskLambdaArn: {},
              TaskKeywords: {
                type: 'list',
                member: {}
              },
              TaskTitle: {},
              TaskDescription: {},
              NumberOfHumanWorkersPerDataObject: {
                type: 'integer'
              },
              TaskTimeLimitInSeconds: {
                type: 'integer'
              },
              TaskAvailabilityLifetimeInSeconds: {
                type: 'integer'
              },
              MaxConcurrentTaskCount: {
                type: 'integer'
              },
              AnnotationConsolidationConfig: {
                type: 'structure',
                required: ['AnnotationConsolidationLambdaArn'],
                members: {
                  AnnotationConsolidationLambdaArn: {}
                }
              },
              PublicWorkforceTaskPrice: {
                shape: 'Sgh'
              }
            }
          },
          Smh: {
            type: 'structure',
            members: {
              ContainerHostname: {},
              Image: {},
              ImageConfig: {
                type: 'structure',
                required: ['RepositoryAccessMode'],
                members: {
                  RepositoryAccessMode: {},
                  RepositoryAuthConfig: {
                    type: 'structure',
                    required: ['RepositoryCredentialsProviderArn'],
                    members: {
                      RepositoryCredentialsProviderArn: {}
                    }
                  }
                }
              },
              Mode: {},
              ModelDataUrl: {},
              ModelDataSource: {
                shape: 'Sy'
              },
              Environment: {
                shape: 'S16'
              },
              ModelPackageName: {},
              InferenceSpecificationName: {},
              MultiModelConfig: {
                type: 'structure',
                members: {
                  ModelCacheSetting: {}
                }
              }
            }
          },
          Smq: {
            type: 'list',
            member: {
              shape: 'Smh'
            }
          },
          Smr: {
            type: 'structure',
            required: ['Mode'],
            members: {
              Mode: {}
            }
          },
          Smv: {
            type: 'structure',
            members: {
              BaseliningJobName: {},
              ConstraintsResource: {
                shape: 'S95'
              }
            }
          },
          Smw: {
            type: 'structure',
            required: ['ImageUri', 'ConfigUri'],
            members: {
              ImageUri: {},
              ConfigUri: {},
              Environment: {
                shape: 'S9d'
              }
            }
          },
          Smx: {
            type: 'structure',
            required: ['GroundTruthS3Input'],
            members: {
              EndpointInput: {
                shape: 'S9h'
              },
              BatchTransformInput: {
                shape: 'S9o'
              },
              GroundTruthS3Input: {
                shape: 'Smy'
              }
            }
          },
          Smy: {
            type: 'structure',
            members: {
              S3Uri: {}
            }
          },
          Sn1: {
            type: 'structure',
            members: {
              KmsKeyId: {}
            }
          },
          Sn2: {
            type: 'string',
            sensitive: true
          },
          Sn8: {
            type: 'structure',
            required: ['S3OutputPath'],
            members: {
              S3OutputPath: {}
            }
          },
          Snc: {
            type: 'structure',
            members: {
              BaseliningJobName: {},
              ConstraintsResource: {
                shape: 'S95'
              }
            }
          },
          Snd: {
            type: 'structure',
            required: ['ImageUri', 'ConfigUri'],
            members: {
              ImageUri: {},
              ConfigUri: {},
              Environment: {
                shape: 'S9d'
              }
            }
          },
          Sne: {
            type: 'structure',
            members: {
              EndpointInput: {
                shape: 'S9h'
              },
              BatchTransformInput: {
                shape: 'S9o'
              }
            }
          },
          Snh: {
            type: 'structure',
            required: ['ValidationRole', 'ValidationProfiles'],
            members: {
              ValidationRole: {},
              ValidationProfiles: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ProfileName', 'TransformJobDefinition'],
                  members: {
                    ProfileName: {},
                    TransformJobDefinition: {
                      shape: 'S40'
                    }
                  }
                }
              }
            }
          },
          Snk: {
            type: 'structure',
            required: ['SourceAlgorithms'],
            members: {
              SourceAlgorithms: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AlgorithmName'],
                  members: {
                    ModelDataUrl: {},
                    ModelDataSource: {
                      shape: 'Sy'
                    },
                    AlgorithmName: {}
                  }
                }
              }
            }
          },
          Snn: {
            type: 'structure',
            members: {
              ModelQuality: {
                type: 'structure',
                members: {
                  Statistics: {
                    shape: 'Snp'
                  },
                  Constraints: {
                    shape: 'Snp'
                  }
                }
              },
              ModelDataQuality: {
                type: 'structure',
                members: {
                  Statistics: {
                    shape: 'Snp'
                  },
                  Constraints: {
                    shape: 'Snp'
                  }
                }
              },
              Bias: {
                type: 'structure',
                members: {
                  Report: {
                    shape: 'Snp'
                  },
                  PreTrainingReport: {
                    shape: 'Snp'
                  },
                  PostTrainingReport: {
                    shape: 'Snp'
                  }
                }
              },
              Explainability: {
                type: 'structure',
                members: {
                  Report: {
                    shape: 'Snp'
                  }
                }
              }
            }
          },
          Snp: {
            type: 'structure',
            required: ['ContentType', 'S3Uri'],
            members: {
              ContentType: {},
              ContentDigest: {},
              S3Uri: {}
            }
          },
          Snu: {
            type: 'map',
            key: {},
            value: {}
          },
          Snx: {
            type: 'structure',
            members: {
              Bias: {
                type: 'structure',
                members: {
                  ConfigFile: {
                    shape: 'Snz'
                  },
                  PreTrainingConstraints: {
                    shape: 'Snp'
                  },
                  PostTrainingConstraints: {
                    shape: 'Snp'
                  }
                }
              },
              Explainability: {
                type: 'structure',
                members: {
                  Constraints: {
                    shape: 'Snp'
                  },
                  ConfigFile: {
                    shape: 'Snz'
                  }
                }
              },
              ModelQuality: {
                type: 'structure',
                members: {
                  Statistics: {
                    shape: 'Snp'
                  },
                  Constraints: {
                    shape: 'Snp'
                  }
                }
              },
              ModelDataQuality: {
                type: 'structure',
                members: {
                  Statistics: {
                    shape: 'Snp'
                  },
                  Constraints: {
                    shape: 'Snp'
                  }
                }
              }
            }
          },
          Snz: {
            type: 'structure',
            required: ['S3Uri'],
            members: {
              ContentType: {},
              ContentDigest: {},
              S3Uri: {}
            }
          },
          So3: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Containers'],
              members: {
                Name: {},
                Description: {},
                Containers: {
                  shape: 'Ss'
                },
                SupportedTransformInstanceTypes: {
                  shape: 'S1h'
                },
                SupportedRealtimeInferenceInstanceTypes: {
                  shape: 'S1j'
                },
                SupportedContentTypes: {
                  shape: 'S1l'
                },
                SupportedResponseMIMETypes: {
                  shape: 'S1n'
                }
              }
            }
          },
          So7: {
            type: 'structure',
            required: ['KmsKeyId'],
            members: {
              KmsKeyId: {}
            }
          },
          So8: {
            type: 'structure',
            members: {
              ModelCardContent: {
                shape: 'Sn2'
              },
              ModelCardStatus: {}
            }
          },
          Soe: {
            type: 'structure',
            members: {
              BaseliningJobName: {},
              ConstraintsResource: {
                shape: 'S95'
              }
            }
          },
          Sof: {
            type: 'structure',
            required: ['ImageUri'],
            members: {
              ImageUri: {},
              ContainerEntrypoint: {
                shape: 'S99'
              },
              ContainerArguments: {
                shape: 'S9b'
              },
              RecordPreprocessorSourceUri: {},
              PostAnalyticsProcessorSourceUri: {},
              ProblemType: {},
              Environment: {
                shape: 'S9d'
              }
            }
          },
          Soh: {
            type: 'structure',
            required: ['GroundTruthS3Input'],
            members: {
              EndpointInput: {
                shape: 'S9h'
              },
              BatchTransformInput: {
                shape: 'S9o'
              },
              GroundTruthS3Input: {
                shape: 'Smy'
              }
            }
          },
          Sol: {
            type: 'structure',
            members: {
              ScheduleConfig: {
                type: 'structure',
                required: ['ScheduleExpression'],
                members: {
                  ScheduleExpression: {},
                  DataAnalysisStartTime: {},
                  DataAnalysisEndTime: {}
                }
              },
              MonitoringJobDefinition: {
                type: 'structure',
                required: ['MonitoringInputs', 'MonitoringOutputConfig', 'MonitoringResources', 'MonitoringAppSpecification', 'RoleArn'],
                members: {
                  BaselineConfig: {
                    type: 'structure',
                    members: {
                      BaseliningJobName: {},
                      ConstraintsResource: {
                        shape: 'S95'
                      },
                      StatisticsResource: {
                        shape: 'S96'
                      }
                    }
                  },
                  MonitoringInputs: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        EndpointInput: {
                          shape: 'S9h'
                        },
                        BatchTransformInput: {
                          shape: 'S9o'
                        }
                      }
                    }
                  },
                  MonitoringOutputConfig: {
                    shape: 'S9u'
                  },
                  MonitoringResources: {
                    shape: 'Sa0'
                  },
                  MonitoringAppSpecification: {
                    type: 'structure',
                    required: ['ImageUri'],
                    members: {
                      ImageUri: {},
                      ContainerEntrypoint: {
                        shape: 'S99'
                      },
                      ContainerArguments: {
                        shape: 'S9b'
                      },
                      RecordPreprocessorSourceUri: {},
                      PostAnalyticsProcessorSourceUri: {}
                    }
                  },
                  StoppingCondition: {
                    shape: 'Sa6'
                  },
                  Environment: {
                    shape: 'S9d'
                  },
                  NetworkConfig: {
                    shape: 'Sot'
                  },
                  RoleArn: {}
                }
              },
              MonitoringJobDefinitionName: {},
              MonitoringType: {}
            }
          },
          Sot: {
            type: 'structure',
            members: {
              EnableInterContainerTrafficEncryption: {
                type: 'boolean'
              },
              EnableNetworkIsolation: {
                type: 'boolean'
              },
              VpcConfig: {
                shape: 'S6b'
              }
            }
          },
          Sp2: {
            type: 'list',
            member: {}
          },
          Sp5: {
            type: 'list',
            member: {}
          },
          Sp8: {
            type: 'structure',
            required: ['MinimumInstanceMetadataServiceVersion'],
            members: {
              MinimumInstanceMetadataServiceVersion: {}
            }
          },
          Spd: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Content: {}
              }
            }
          },
          Spl: {
            type: 'structure',
            required: ['Bucket', 'ObjectKey'],
            members: {
              Bucket: {},
              ObjectKey: {},
              VersionId: {}
            }
          },
          Spr: {
            type: 'structure',
            required: ['MaxParallelExecutionSteps'],
            members: {
              MaxParallelExecutionSteps: {
                type: 'integer'
              }
            }
          },
          Sq4: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['InputName'],
              members: {
                InputName: {},
                AppManaged: {
                  type: 'boolean'
                },
                S3Input: {
                  type: 'structure',
                  required: ['S3Uri', 'S3DataType'],
                  members: {
                    S3Uri: {},
                    LocalPath: {},
                    S3DataType: {},
                    S3InputMode: {},
                    S3DataDistributionType: {},
                    S3CompressionType: {}
                  }
                },
                DatasetDefinition: {
                  type: 'structure',
                  members: {
                    AthenaDatasetDefinition: {
                      type: 'structure',
                      required: ['Catalog', 'Database', 'QueryString', 'OutputS3Uri', 'OutputFormat'],
                      members: {
                        Catalog: {},
                        Database: {},
                        QueryString: {},
                        WorkGroup: {},
                        OutputS3Uri: {},
                        KmsKeyId: {},
                        OutputFormat: {},
                        OutputCompression: {}
                      }
                    },
                    RedshiftDatasetDefinition: {
                      type: 'structure',
                      required: ['ClusterId', 'Database', 'DbUser', 'QueryString', 'ClusterRoleArn', 'OutputS3Uri', 'OutputFormat'],
                      members: {
                        ClusterId: {},
                        Database: {},
                        DbUser: {},
                        QueryString: {},
                        ClusterRoleArn: {},
                        OutputS3Uri: {},
                        KmsKeyId: {},
                        OutputFormat: {},
                        OutputCompression: {}
                      }
                    },
                    LocalPath: {},
                    DataDistributionType: {},
                    InputMode: {}
                  }
                }
              }
            }
          },
          Sqr: {
            type: 'structure',
            required: ['Outputs'],
            members: {
              Outputs: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['OutputName'],
                  members: {
                    OutputName: {},
                    S3Output: {
                      type: 'structure',
                      required: ['S3Uri', 'LocalPath', 'S3UploadMode'],
                      members: {
                        S3Uri: {},
                        LocalPath: {},
                        S3UploadMode: {}
                      }
                    },
                    FeatureStoreOutput: {
                      type: 'structure',
                      required: ['FeatureGroupName'],
                      members: {
                        FeatureGroupName: {}
                      }
                    },
                    AppManaged: {
                      type: 'boolean'
                    }
                  }
                }
              },
              KmsKeyId: {}
            }
          },
          Sqw: {
            type: 'structure',
            required: ['ClusterConfig'],
            members: {
              ClusterConfig: {
                type: 'structure',
                required: ['InstanceCount', 'InstanceType', 'VolumeSizeInGB'],
                members: {
                  InstanceCount: {
                    type: 'integer'
                  },
                  InstanceType: {},
                  VolumeSizeInGB: {
                    type: 'integer'
                  },
                  VolumeKmsKeyId: {}
                }
              }
            }
          },
          Sqy: {
            type: 'structure',
            required: ['MaxRuntimeInSeconds'],
            members: {
              MaxRuntimeInSeconds: {
                type: 'integer'
              }
            }
          },
          Sr0: {
            type: 'structure',
            required: ['ImageUri'],
            members: {
              ImageUri: {},
              ContainerEntrypoint: {
                shape: 'S99'
              },
              ContainerArguments: {
                type: 'list',
                member: {}
              }
            }
          },
          Sr2: {
            type: 'map',
            key: {},
            value: {}
          },
          Sr3: {
            type: 'structure',
            members: {
              ExperimentName: {},
              TrialName: {},
              TrialComponentDisplayName: {},
              RunName: {}
            }
          },
          Sr8: {
            type: 'structure',
            required: ['ProductId'],
            members: {
              ProductId: {},
              ProvisioningArtifactId: {},
              PathId: {},
              ProvisioningParameters: {
                shape: 'Sra'
              }
            }
          },
          Sra: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sri: {
            type: 'structure',
            members: {
              JupyterServerAppSettings: {
                shape: 'Sam'
              },
              KernelGatewayAppSettings: {
                shape: 'Sar'
              },
              CodeEditorAppSettings: {
                type: 'structure',
                members: {
                  DefaultResourceSpec: {
                    shape: 'S4p'
                  }
                }
              },
              JupyterLabAppSettings: {
                type: 'structure',
                members: {
                  DefaultResourceSpec: {
                    shape: 'S4p'
                  },
                  CodeRepositories: {
                    shape: 'Sao'
                  }
                }
              },
              AppType: {},
              SpaceStorageSettings: {
                shape: 'Srl'
              },
              CustomFileSystems: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    EFSFileSystem: {
                      type: 'structure',
                      required: ['FileSystemId'],
                      members: {
                        FileSystemId: {}
                      }
                    }
                  },
                  union: true
                }
              }
            }
          },
          Srl: {
            type: 'structure',
            members: {
              EbsStorageSettings: {
                type: 'structure',
                required: ['EbsVolumeSizeInGb'],
                members: {
                  EbsVolumeSizeInGb: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          Srq: {
            type: 'structure',
            required: ['OwnerUserProfileName'],
            members: {
              OwnerUserProfileName: {}
            }
          },
          Srr: {
            type: 'structure',
            required: ['SharingType'],
            members: {
              SharingType: {}
            }
          },
          Ss2: {
            type: 'structure',
            required: ['TrainingInputMode'],
            members: {
              TrainingImage: {},
              AlgorithmName: {},
              TrainingInputMode: {},
              MetricDefinitions: {
                shape: 'S2l'
              },
              EnableSageMakerMetricsTimeSeries: {
                type: 'boolean'
              },
              ContainerEntrypoint: {
                type: 'list',
                member: {}
              },
              ContainerArguments: {
                type: 'list',
                member: {}
              },
              TrainingImageConfig: {
                type: 'structure',
                required: ['TrainingRepositoryAccessMode'],
                members: {
                  TrainingRepositoryAccessMode: {},
                  TrainingRepositoryAuthConfig: {
                    type: 'structure',
                    required: ['TrainingRepositoryCredentialsProviderArn'],
                    members: {
                      TrainingRepositoryCredentialsProviderArn: {}
                    }
                  }
                }
              }
            }
          },
          Ssb: {
            type: 'structure',
            required: ['S3OutputPath'],
            members: {
              LocalPath: {},
              S3OutputPath: {},
              HookParameters: {
                type: 'map',
                key: {},
                value: {}
              },
              CollectionConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    CollectionName: {},
                    CollectionParameters: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            }
          },
          Ssj: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['RuleConfigurationName', 'RuleEvaluatorImage'],
              members: {
                RuleConfigurationName: {},
                LocalPath: {},
                S3OutputPath: {},
                RuleEvaluatorImage: {},
                InstanceType: {},
                VolumeSizeInGB: {
                  type: 'integer'
                },
                RuleParameters: {
                  shape: 'Ssm'
                }
              }
            }
          },
          Ssm: {
            type: 'map',
            key: {},
            value: {}
          },
          Ssn: {
            type: 'structure',
            required: ['S3OutputPath'],
            members: {
              LocalPath: {},
              S3OutputPath: {}
            }
          },
          Sso: {
            type: 'structure',
            members: {
              S3OutputPath: {},
              ProfilingIntervalInMilliseconds: {
                type: 'long'
              },
              ProfilingParameters: {
                shape: 'Ssq'
              },
              DisableProfiler: {
                type: 'boolean'
              }
            }
          },
          Ssq: {
            type: 'map',
            key: {},
            value: {}
          },
          Sss: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['RuleConfigurationName', 'RuleEvaluatorImage'],
              members: {
                RuleConfigurationName: {},
                LocalPath: {},
                S3OutputPath: {},
                RuleEvaluatorImage: {},
                InstanceType: {},
                VolumeSizeInGB: {
                  type: 'integer'
                },
                RuleParameters: {
                  shape: 'Ssm'
                }
              }
            }
          },
          Ssu: {
            type: 'map',
            key: {},
            value: {}
          },
          Ssx: {
            type: 'structure',
            members: {
              EnableRemoteDebug: {
                type: 'boolean'
              }
            }
          },
          Ssz: {
            type: 'structure',
            members: {
              EnableInfraCheck: {
                type: 'boolean'
              }
            }
          },
          St7: {
            type: 'structure',
            members: {
              InvocationsTimeoutInSeconds: {
                type: 'integer'
              },
              InvocationsMaxRetries: {
                type: 'integer'
              }
            }
          },
          Sta: {
            type: 'structure',
            required: ['DestinationS3Uri'],
            members: {
              DestinationS3Uri: {},
              KmsKeyId: {},
              GenerateInferenceId: {
                type: 'boolean'
              }
            }
          },
          Stb: {
            type: 'structure',
            members: {
              InputFilter: {},
              OutputFilter: {},
              JoinSource: {}
            }
          },
          Stj: {
            type: 'structure',
            members: {
              PrimaryStatus: {},
              Message: {}
            }
          },
          Stm: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                StringValue: {},
                NumberValue: {
                  type: 'double'
                }
              }
            }
          },
          Stq: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['Value'],
              members: {
                MediaType: {},
                Value: {}
              }
            }
          },
          Su1: {
            type: 'structure',
            required: ['UserPool', 'ClientId'],
            members: {
              UserPool: {},
              ClientId: {}
            }
          },
          Su4: {
            type: 'structure',
            required: ['ClientId', 'ClientSecret', 'Issuer', 'AuthorizationEndpoint', 'TokenEndpoint', 'UserInfoEndpoint', 'LogoutEndpoint', 'JwksUri'],
            members: {
              ClientId: {},
              ClientSecret: {
                type: 'string',
                sensitive: true
              },
              Issuer: {},
              AuthorizationEndpoint: {},
              TokenEndpoint: {},
              UserInfoEndpoint: {},
              LogoutEndpoint: {},
              JwksUri: {}
            }
          },
          Su7: {
            type: 'structure',
            required: ['Cidrs'],
            members: {
              Cidrs: {
                type: 'list',
                member: {}
              }
            }
          },
          Sub: {
            type: 'structure',
            members: {
              VpcId: {},
              SecurityGroupIds: {
                shape: 'Sud'
              },
              Subnets: {
                shape: 'Suf'
              }
            }
          },
          Sud: {
            type: 'list',
            member: {}
          },
          Suf: {
            type: 'list',
            member: {}
          },
          Sul: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                CognitoMemberDefinition: {
                  type: 'structure',
                  required: ['UserPool', 'UserGroup', 'ClientId'],
                  members: {
                    UserPool: {},
                    UserGroup: {},
                    ClientId: {}
                  }
                },
                OidcMemberDefinition: {
                  type: 'structure',
                  members: {
                    Groups: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          Sut: {
            type: 'structure',
            members: {
              NotificationTopicArn: {}
            }
          },
          Suv: {
            type: 'structure',
            members: {
              S3Presign: {
                type: 'structure',
                members: {
                  IamPolicyConstraints: {
                    type: 'structure',
                    members: {
                      SourceIp: {},
                      VpcSourceIp: {}
                    }
                  }
                }
              }
            }
          },
          Sx6: {
            type: 'structure',
            members: {
              UserProfileArn: {},
              UserProfileName: {},
              DomainId: {},
              IamIdentity: {
                type: 'structure',
                members: {
                  Arn: {},
                  PrincipalId: {},
                  SourceIdentity: {}
                }
              }
            }
          },
          Sxd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Status'],
              members: {
                Name: {},
                Status: {},
                FailureReason: {}
              }
            }
          },
          Sxr: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PartialFailureMessage: {}
              }
            }
          },
          Sxt: {
            type: 'structure',
            required: ['CandidateName', 'ObjectiveStatus', 'CandidateSteps', 'CandidateStatus', 'CreationTime', 'LastModifiedTime'],
            members: {
              CandidateName: {},
              FinalAutoMLJobObjectiveMetric: {
                type: 'structure',
                required: ['MetricName', 'Value'],
                members: {
                  Type: {},
                  MetricName: {},
                  Value: {
                    type: 'float'
                  },
                  StandardMetricName: {}
                }
              },
              ObjectiveStatus: {},
              CandidateSteps: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['CandidateStepType', 'CandidateStepArn', 'CandidateStepName'],
                  members: {
                    CandidateStepType: {},
                    CandidateStepArn: {},
                    CandidateStepName: {}
                  }
                }
              },
              CandidateStatus: {},
              InferenceContainers: {
                shape: 'Sy5'
              },
              CreationTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              FailureReason: {},
              CandidateProperties: {
                type: 'structure',
                members: {
                  CandidateArtifactLocations: {
                    type: 'structure',
                    required: ['Explainability'],
                    members: {
                      Explainability: {},
                      ModelInsights: {},
                      BacktestResults: {}
                    }
                  },
                  CandidateMetrics: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        MetricName: {},
                        Value: {
                          type: 'float'
                        },
                        Set: {},
                        StandardMetricName: {}
                      }
                    }
                  }
                }
              },
              InferenceContainerDefinitions: {
                type: 'map',
                key: {},
                value: {
                  shape: 'Sy5'
                }
              }
            }
          },
          Sy5: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Image', 'ModelDataUrl'],
              members: {
                Image: {},
                ModelDataUrl: {},
                Environment: {
                  shape: 'S16'
                }
              }
            }
          },
          Syl: {
            type: 'structure',
            members: {
              CandidateDefinitionNotebookLocation: {},
              DataExplorationNotebookLocation: {}
            }
          },
          Syp: {
            type: 'structure',
            members: {
              EndpointName: {}
            }
          },
          Sz7: {
            type: 'structure',
            required: ['Status'],
            members: {
              Status: {},
              Message: {}
            }
          },
          Szl: {
            type: 'structure',
            required: ['S3ModelArtifacts'],
            members: {
              S3ModelArtifacts: {}
            }
          },
          S10r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['VariantName'],
              members: {
                VariantName: {},
                DeployedImages: {
                  shape: 'S10t'
                },
                CurrentWeight: {
                  type: 'float'
                },
                DesiredWeight: {
                  type: 'float'
                },
                CurrentInstanceCount: {
                  type: 'integer'
                },
                DesiredInstanceCount: {
                  type: 'integer'
                },
                VariantStatus: {
                  shape: 'S10v'
                },
                CurrentServerlessConfig: {
                  shape: 'Sdd'
                },
                DesiredServerlessConfig: {
                  shape: 'Sdd'
                },
                ManagedInstanceScaling: {
                  shape: 'Sdl'
                },
                RoutingConfig: {
                  shape: 'Sdp'
                }
              }
            }
          },
          S10t: {
            type: 'list',
            member: {
              shape: 'S10u'
            }
          },
          S10u: {
            type: 'structure',
            members: {
              SpecifiedImage: {},
              ResolvedImage: {},
              ResolutionTime: {
                type: 'timestamp'
              }
            }
          },
          S10v: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {},
                StatusMessage: {},
                StartTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S10z: {
            type: 'structure',
            required: ['EnableCapture', 'CaptureStatus', 'CurrentSamplingPercentage', 'DestinationS3Uri', 'KmsKeyId'],
            members: {
              EnableCapture: {
                type: 'boolean'
              },
              CaptureStatus: {},
              CurrentSamplingPercentage: {
                type: 'integer'
              },
              DestinationS3Uri: {},
              KmsKeyId: {}
            }
          },
          S113: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['VariantName'],
              members: {
                VariantName: {},
                DeployedImages: {
                  shape: 'S10t'
                },
                CurrentWeight: {
                  type: 'float'
                },
                DesiredWeight: {
                  type: 'float'
                },
                CurrentInstanceCount: {
                  type: 'integer'
                },
                DesiredInstanceCount: {
                  type: 'integer'
                },
                InstanceType: {},
                AcceleratorType: {},
                VariantStatus: {
                  shape: 'S10v'
                },
                CurrentServerlessConfig: {
                  shape: 'Sdd'
                },
                DesiredServerlessConfig: {
                  shape: 'Sdd'
                },
                ManagedInstanceScaling: {
                  shape: 'Sdl'
                },
                RoutingConfig: {
                  shape: 'Sdp'
                }
              }
            }
          },
          S119: {
            type: 'structure',
            required: ['SourceArn'],
            members: {
              SourceArn: {},
              SourceType: {}
            }
          },
          S11h: {
            type: 'structure',
            required: ['Status'],
            members: {
              Status: {},
              BlockedReason: {}
            }
          },
          S11k: {
            type: 'structure',
            required: ['Status'],
            members: {
              Status: {},
              FailureReason: {}
            }
          },
          S11q: {
            type: 'list',
            member: {
              shape: 'S11r'
            }
          },
          S11r: {
            type: 'structure',
            members: {
              Key: {},
              Value: {}
            }
          },
          S128: {
            type: 'list',
            member: {}
          },
          S12n: {
            type: 'structure',
            members: {
              Completed: {
                type: 'integer'
              },
              InProgress: {
                type: 'integer'
              },
              RetryableError: {
                type: 'integer'
              },
              NonRetryableError: {
                type: 'integer'
              },
              Stopped: {
                type: 'integer'
              }
            }
          },
          S12p: {
            type: 'structure',
            members: {
              Succeeded: {
                type: 'integer'
              },
              Pending: {
                type: 'integer'
              },
              Failed: {
                type: 'integer'
              }
            }
          },
          S12r: {
            type: 'structure',
            required: ['TrainingJobName', 'TrainingJobArn', 'CreationTime', 'TrainingJobStatus', 'TunedHyperParameters'],
            members: {
              TrainingJobDefinitionName: {},
              TrainingJobName: {},
              TrainingJobArn: {},
              TuningJobName: {},
              CreationTime: {
                type: 'timestamp'
              },
              TrainingStartTime: {
                type: 'timestamp'
              },
              TrainingEndTime: {
                type: 'timestamp'
              },
              TrainingJobStatus: {},
              TunedHyperParameters: {
                shape: 'S33'
              },
              FailureReason: {},
              FinalHyperParameterTuningJobObjectiveMetric: {
                type: 'structure',
                required: ['MetricName', 'Value'],
                members: {
                  Type: {},
                  MetricName: {},
                  Value: {
                    type: 'float'
                  }
                }
              },
              ObjectiveStatus: {}
            }
          },
          S12u: {
            type: 'structure',
            members: {
              NumberOfTrainingJobsObjectiveNotImproving: {
                type: 'integer'
              },
              ConvergenceDetectedTime: {
                type: 'timestamp'
              }
            }
          },
          S12v: {
            type: 'structure',
            members: {
              RuntimeInSeconds: {
                type: 'integer'
              }
            }
          },
          S13m: {
            type: 'structure',
            required: ['CostPerHour', 'CostPerInference', 'MaxInvocations', 'ModelLatency'],
            members: {
              CostPerHour: {
                type: 'float'
              },
              CostPerInference: {
                type: 'float'
              },
              MaxInvocations: {
                type: 'integer'
              },
              ModelLatency: {
                type: 'integer'
              },
              CpuUtilization: {
                type: 'float'
              },
              MemoryUtilization: {
                type: 'float'
              },
              ModelSetupTime: {
                type: 'integer'
              }
            }
          },
          S13p: {
            type: 'structure',
            required: ['EndpointName', 'VariantName'],
            members: {
              EndpointName: {},
              VariantName: {},
              InstanceType: {},
              InitialInstanceCount: {
                type: 'integer'
              },
              ServerlessConfig: {
                shape: 'Sdd'
              }
            }
          },
          S13r: {
            type: 'structure',
            members: {
              InferenceSpecificationName: {},
              EnvironmentParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Key', 'ValueType', 'Value'],
                  members: {
                    Key: {},
                    ValueType: {},
                    Value: {}
                  }
                }
              },
              CompilationJobName: {}
            }
          },
          S13z: {
            type: 'structure',
            required: ['MaxInvocations', 'ModelLatency'],
            members: {
              MaxInvocations: {
                type: 'integer'
              },
              ModelLatency: {
                type: 'integer'
              }
            }
          },
          S143: {
            type: 'structure',
            members: {
              TotalLabeled: {
                type: 'integer'
              },
              HumanLabeled: {
                type: 'integer'
              },
              MachineLabeled: {
                type: 'integer'
              },
              FailedNonRetryableError: {
                type: 'integer'
              },
              Unlabeled: {
                type: 'integer'
              }
            }
          },
          S146: {
            type: 'structure',
            required: ['OutputDatasetS3Uri'],
            members: {
              OutputDatasetS3Uri: {},
              FinalActiveLearningModelArn: {}
            }
          },
          S14b: {
            type: 'structure',
            required: ['RecommendationStatus'],
            members: {
              RecommendationStatus: {},
              RealTimeInferenceRecommendations: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['RecommendationId', 'InstanceType'],
                  members: {
                    RecommendationId: {},
                    InstanceType: {},
                    Environment: {
                      shape: 'S16'
                    }
                  }
                }
              }
            }
          },
          S14s: {
            type: 'structure',
            required: ['ValidationStatuses'],
            members: {
              ValidationStatuses: {
                shape: 'S14t'
              },
              ImageScanStatuses: {
                shape: 'S14t'
              }
            }
          },
          S14t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Status'],
              members: {
                Name: {},
                Status: {},
                FailureReason: {}
              }
            }
          },
          S155: {
            type: 'structure',
            required: ['MonitoringScheduleName', 'ScheduledTime', 'CreationTime', 'LastModifiedTime', 'MonitoringExecutionStatus'],
            members: {
              MonitoringScheduleName: {},
              ScheduledTime: {
                type: 'timestamp'
              },
              CreationTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              MonitoringExecutionStatus: {},
              ProcessingJobArn: {},
              EndpointName: {},
              FailureReason: {},
              MonitoringJobDefinitionName: {},
              MonitoringType: {}
            }
          },
          S15p: {
            type: 'structure',
            members: {
              ExperimentName: {},
              TrialName: {}
            }
          },
          S15r: {
            type: 'structure',
            required: ['SelectedSteps'],
            members: {
              SourcePipelineExecutionArn: {},
              SelectedSteps: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['StepName'],
                  members: {
                    StepName: {}
                  }
                }
              }
            }
          },
          S160: {
            type: 'structure',
            members: {
              ProvisionedProductId: {},
              ProvisionedProductStatusMessage: {}
            }
          },
          S16b: {
            type: 'structure',
            required: ['WorkteamArn'],
            members: {
              WorkteamArn: {},
              MarketplaceTitle: {},
              SellerName: {},
              MarketplaceDescription: {},
              ListingId: {}
            }
          },
          S16f: {
            type: 'structure',
            required: ['Status'],
            members: {
              Status: {},
              ResourceRetainedBillableTimeInSeconds: {
                type: 'integer'
              },
              ReusedByJob: {}
            }
          },
          S16i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Status', 'StartTime'],
              members: {
                Status: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                StatusMessage: {}
              }
            }
          },
          S16l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                MetricName: {},
                Value: {
                  type: 'float'
                },
                Timestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          S16p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RuleConfigurationName: {},
                RuleEvaluationJobArn: {},
                RuleEvaluationStatus: {},
                StatusDetails: {},
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S171: {
            type: 'structure',
            required: ['SourceArn'],
            members: {
              SourceArn: {},
              SourceType: {}
            }
          },
          S175: {
            type: 'structure',
            required: ['SourceArn'],
            members: {
              SourceArn: {},
              SourceType: {}
            }
          },
          S177: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                MetricName: {},
                SourceArn: {},
                TimeStamp: {
                  type: 'timestamp'
                },
                Max: {
                  type: 'double'
                },
                Min: {
                  type: 'double'
                },
                Last: {
                  type: 'double'
                },
                Count: {
                  type: 'integer'
                },
                Avg: {
                  type: 'double'
                },
                StdDev: {
                  type: 'double'
                }
              }
            }
          },
          S17h: {
            type: 'structure',
            required: ['WorkforceName', 'WorkforceArn'],
            members: {
              WorkforceName: {},
              WorkforceArn: {},
              LastUpdatedDate: {
                type: 'timestamp'
              },
              SourceIpConfig: {
                shape: 'Su7'
              },
              SubDomain: {},
              CognitoConfig: {
                shape: 'Su1'
              },
              OidcConfig: {
                type: 'structure',
                members: {
                  ClientId: {},
                  Issuer: {},
                  AuthorizationEndpoint: {},
                  TokenEndpoint: {},
                  UserInfoEndpoint: {},
                  LogoutEndpoint: {},
                  JwksUri: {}
                }
              },
              CreateDate: {
                type: 'timestamp'
              },
              WorkforceVpcConfig: {
                type: 'structure',
                required: ['VpcId', 'SecurityGroupIds', 'Subnets'],
                members: {
                  VpcId: {},
                  SecurityGroupIds: {
                    shape: 'Sud'
                  },
                  Subnets: {
                    shape: 'Suf'
                  },
                  VpcEndpointId: {}
                }
              },
              Status: {},
              FailureReason: {}
            }
          },
          S17p: {
            type: 'structure',
            required: ['WorkteamName', 'MemberDefinitions', 'WorkteamArn', 'Description'],
            members: {
              WorkteamName: {},
              MemberDefinitions: {
                shape: 'Sul'
              },
              WorkteamArn: {},
              WorkforceArn: {},
              ProductListingIds: {
                type: 'list',
                member: {}
              },
              Description: {},
              SubDomain: {},
              CreateDate: {
                type: 'timestamp'
              },
              LastUpdatedDate: {
                type: 'timestamp'
              },
              NotificationConfiguration: {
                shape: 'Sut'
              },
              WorkerAccessConfiguration: {
                shape: 'Suv'
              }
            }
          },
          S18h: {
            type: 'structure',
            members: {
              MinInvocationsPerMinute: {
                type: 'integer'
              },
              MaxInvocationsPerMinute: {
                type: 'integer'
              }
            }
          },
          S1b9: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['MonitoringJobDefinitionName', 'MonitoringJobDefinitionArn', 'CreationTime', 'EndpointName'],
              members: {
                MonitoringJobDefinitionName: {},
                MonitoringJobDefinitionArn: {},
                CreationTime: {
                  type: 'timestamp'
                },
                EndpointName: {}
              }
            }
          },
          S1cz: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['HubContentName', 'HubContentArn', 'HubContentVersion', 'HubContentType', 'DocumentSchemaVersion', 'HubContentStatus', 'CreationTime'],
              members: {
                HubContentName: {},
                HubContentArn: {},
                HubContentVersion: {},
                HubContentType: {},
                DocumentSchemaVersion: {},
                HubContentDisplayName: {},
                HubContentDescription: {},
                HubContentSearchKeywords: {
                  shape: 'S128'
                },
                HubContentStatus: {},
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S1gj: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['MonitoringAlertName', 'CreationTime', 'LastModifiedTime', 'AlertStatus', 'DatapointsToAlert', 'EvaluationPeriod', 'Actions'],
              members: {
                MonitoringAlertName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                AlertStatus: {},
                DatapointsToAlert: {
                  type: 'integer'
                },
                EvaluationPeriod: {
                  type: 'integer'
                },
                Actions: {
                  type: 'structure',
                  members: {
                    ModelDashboardIndicator: {
                      type: 'structure',
                      members: {
                        Enabled: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S1hx: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S1ie: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S1lc: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DeviceName'],
              members: {
                DeviceName: {},
                Description: {},
                IotThingName: {}
              }
            }
          },
          S1ln: {
            type: 'structure',
            members: {
              Filters: {
                shape: 'S1lo'
              },
              NestedFilters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['NestedPropertyName', 'Filters'],
                  members: {
                    NestedPropertyName: {},
                    Filters: {
                      shape: 'S1lo'
                    }
                  }
                }
              },
              SubExpressions: {
                type: 'list',
                member: {
                  shape: 'S1ln'
                }
              },
              Operator: {}
            }
          },
          S1lo: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Operator: {},
                Value: {}
              }
            }
          },
          S1m5: {
            type: 'structure',
            members: {
              TrainingJobName: {},
              TrainingJobArn: {},
              TuningJobArn: {},
              LabelingJobArn: {},
              AutoMLJobArn: {},
              ModelArtifacts: {
                shape: 'Szl'
              },
              TrainingJobStatus: {},
              SecondaryStatus: {},
              FailureReason: {},
              HyperParameters: {
                shape: 'S33'
              },
              AlgorithmSpecification: {
                shape: 'Ss2'
              },
              RoleArn: {},
              InputDataConfig: {
                shape: 'S35'
              },
              OutputDataConfig: {
                shape: 'S3n'
              },
              ResourceConfig: {
                shape: 'S3q'
              },
              VpcConfig: {
                shape: 'S6b'
              },
              StoppingCondition: {
                shape: 'S3w'
              },
              CreationTime: {
                type: 'timestamp'
              },
              TrainingStartTime: {
                type: 'timestamp'
              },
              TrainingEndTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              SecondaryStatusTransitions: {
                shape: 'S16i'
              },
              FinalMetricDataList: {
                shape: 'S16l'
              },
              EnableNetworkIsolation: {
                type: 'boolean'
              },
              EnableInterContainerTrafficEncryption: {
                type: 'boolean'
              },
              EnableManagedSpotTraining: {
                type: 'boolean'
              },
              CheckpointConfig: {
                shape: 'Si9'
              },
              TrainingTimeInSeconds: {
                type: 'integer'
              },
              BillableTimeInSeconds: {
                type: 'integer'
              },
              DebugHookConfig: {
                shape: 'Ssb'
              },
              ExperimentConfig: {
                shape: 'Sr3'
              },
              DebugRuleConfigurations: {
                shape: 'Ssj'
              },
              TensorBoardOutputConfig: {
                shape: 'Ssn'
              },
              DebugRuleEvaluationStatuses: {
                shape: 'S16p'
              },
              ProfilerConfig: {
                shape: 'Sso'
              },
              Environment: {
                shape: 'Ssu'
              },
              RetryStrategy: {
                shape: 'Sia'
              },
              Tags: {
                shape: 'S7'
              }
            }
          },
          S1md: {
            type: 'structure',
            members: {
              TransformJobName: {},
              TransformJobArn: {},
              TransformJobStatus: {},
              FailureReason: {},
              ModelName: {},
              MaxConcurrentTransforms: {
                type: 'integer'
              },
              ModelClientConfig: {
                shape: 'St7'
              },
              MaxPayloadInMB: {
                type: 'integer'
              },
              BatchStrategy: {},
              Environment: {
                shape: 'S44'
              },
              TransformInput: {
                shape: 'S47'
              },
              TransformOutput: {
                shape: 'S4b'
              },
              DataCaptureConfig: {
                shape: 'Sta'
              },
              TransformResources: {
                shape: 'S4e'
              },
              CreationTime: {
                type: 'timestamp'
              },
              TransformStartTime: {
                type: 'timestamp'
              },
              TransformEndTime: {
                type: 'timestamp'
              },
              LabelingJobArn: {},
              AutoMLJobArn: {},
              DataProcessing: {
                shape: 'Stb'
              },
              ExperimentConfig: {
                shape: 'Sr3'
              },
              Tags: {
                shape: 'S7'
              }
            }
          },
          S1nu: {
            type: 'list',
            member: {}
          },
          S1qb: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=379239886b5ffedae39a6aecb3f31991821ea2bb.js.map