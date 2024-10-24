System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-20',
          endpointPrefix: 'proton',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'AWS Proton',
          serviceId: 'Proton',
          signatureVersion: 'v4',
          signingName: 'proton',
          targetPrefix: 'AwsProton20200720',
          uid: 'proton-2020-07-20'
        },
        operations: {
          AcceptEnvironmentAccountConnection: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentAccountConnection'],
              members: {
                environmentAccountConnection: {
                  shape: 'S4'
                }
              }
            },
            idempotent: true
          },
          CancelComponentDeployment: {
            input: {
              type: 'structure',
              required: ['componentName'],
              members: {
                componentName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['component'],
              members: {
                component: {
                  shape: 'Se'
                }
              }
            }
          },
          CancelEnvironmentDeployment: {
            input: {
              type: 'structure',
              required: ['environmentName'],
              members: {
                environmentName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environment'],
              members: {
                environment: {
                  shape: 'So'
                }
              }
            }
          },
          CancelServiceInstanceDeployment: {
            input: {
              type: 'structure',
              required: ['serviceInstanceName', 'serviceName'],
              members: {
                serviceInstanceName: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceInstance'],
              members: {
                serviceInstance: {
                  shape: 'Sz'
                }
              }
            }
          },
          CancelServicePipelineDeployment: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pipeline'],
              members: {
                pipeline: {
                  shape: 'S13'
                }
              }
            }
          },
          CreateComponent: {
            input: {
              type: 'structure',
              required: ['manifest', 'name', 'templateFile'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {
                  shape: 'Si'
                },
                environmentName: {},
                manifest: {
                  type: 'string',
                  sensitive: true
                },
                name: {},
                serviceInstanceName: {},
                serviceName: {},
                serviceSpec: {
                  shape: 'Sl'
                },
                tags: {
                  shape: 'S17'
                },
                templateFile: {
                  shape: 'S1b'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['component'],
              members: {
                component: {
                  shape: 'Se'
                }
              }
            },
            idempotent: true
          },
          CreateEnvironment: {
            input: {
              type: 'structure',
              required: ['name', 'spec', 'templateMajorVersion', 'templateName'],
              members: {
                codebuildRoleArn: {},
                componentRoleArn: {},
                description: {
                  shape: 'Si'
                },
                environmentAccountConnectionId: {},
                name: {},
                protonServiceRoleArn: {},
                provisioningRepository: {
                  shape: 'S1e'
                },
                spec: {
                  shape: 'Sl'
                },
                tags: {
                  shape: 'S17'
                },
                templateMajorVersion: {},
                templateMinorVersion: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environment'],
              members: {
                environment: {
                  shape: 'So'
                }
              }
            },
            idempotent: true
          },
          CreateEnvironmentAccountConnection: {
            input: {
              type: 'structure',
              required: ['environmentName', 'managementAccountId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                codebuildRoleArn: {},
                componentRoleArn: {},
                environmentName: {},
                managementAccountId: {},
                roleArn: {},
                tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['environmentAccountConnection'],
              members: {
                environmentAccountConnection: {
                  shape: 'S4'
                }
              }
            },
            idempotent: true
          },
          CreateEnvironmentTemplate: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                description: {
                  shape: 'Si'
                },
                displayName: {
                  shape: 'S1j'
                },
                encryptionKey: {},
                name: {},
                provisioning: {},
                tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['environmentTemplate'],
              members: {
                environmentTemplate: {
                  shape: 'S1l'
                }
              }
            },
            idempotent: true
          },
          CreateEnvironmentTemplateVersion: {
            input: {
              type: 'structure',
              required: ['source', 'templateName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {
                  shape: 'Si'
                },
                majorVersion: {},
                source: {
                  shape: 'S1p'
                },
                tags: {
                  shape: 'S17'
                },
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentTemplateVersion'],
              members: {
                environmentTemplateVersion: {
                  shape: 'S1u'
                }
              }
            },
            idempotent: true
          },
          CreateRepository: {
            input: {
              type: 'structure',
              required: ['connectionArn', 'name', 'provider'],
              members: {
                connectionArn: {},
                encryptionKey: {},
                name: {},
                provider: {},
                tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['repository'],
              members: {
                repository: {
                  shape: 'S20'
                }
              }
            },
            idempotent: true
          },
          CreateService: {
            input: {
              type: 'structure',
              required: ['name', 'spec', 'templateMajorVersion', 'templateName'],
              members: {
                branchName: {},
                description: {
                  shape: 'Si'
                },
                name: {},
                repositoryConnectionArn: {},
                repositoryId: {},
                spec: {
                  shape: 'Sl'
                },
                tags: {
                  shape: 'S17'
                },
                templateMajorVersion: {},
                templateMinorVersion: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['service'],
              members: {
                service: {
                  shape: 'S24'
                }
              }
            },
            idempotent: true
          },
          CreateServiceInstance: {
            input: {
              type: 'structure',
              required: ['name', 'serviceName', 'spec'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                name: {},
                serviceName: {},
                spec: {
                  shape: 'Sl'
                },
                tags: {
                  shape: 'S17'
                },
                templateMajorVersion: {},
                templateMinorVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceInstance'],
              members: {
                serviceInstance: {
                  shape: 'Sz'
                }
              }
            },
            idempotent: true
          },
          CreateServiceSyncConfig: {
            input: {
              type: 'structure',
              required: ['branch', 'filePath', 'repositoryName', 'repositoryProvider', 'serviceName'],
              members: {
                branch: {},
                filePath: {},
                repositoryName: {},
                repositoryProvider: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceSyncConfig: {
                  shape: 'S2c'
                }
              }
            },
            idempotent: true
          },
          CreateServiceTemplate: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                description: {
                  shape: 'Si'
                },
                displayName: {
                  shape: 'S1j'
                },
                encryptionKey: {},
                name: {},
                pipelineProvisioning: {},
                tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['serviceTemplate'],
              members: {
                serviceTemplate: {
                  shape: 'S2f'
                }
              }
            },
            idempotent: true
          },
          CreateServiceTemplateVersion: {
            input: {
              type: 'structure',
              required: ['compatibleEnvironmentTemplates', 'source', 'templateName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                compatibleEnvironmentTemplates: {
                  shape: 'S2i'
                },
                description: {
                  shape: 'Si'
                },
                majorVersion: {},
                source: {
                  shape: 'S1p'
                },
                supportedComponentSources: {
                  shape: 'S2k'
                },
                tags: {
                  shape: 'S17'
                },
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceTemplateVersion'],
              members: {
                serviceTemplateVersion: {
                  shape: 'S2n'
                }
              }
            },
            idempotent: true
          },
          CreateTemplateSyncConfig: {
            input: {
              type: 'structure',
              required: ['branch', 'repositoryName', 'repositoryProvider', 'templateName', 'templateType'],
              members: {
                branch: {},
                repositoryName: {},
                repositoryProvider: {},
                subdirectory: {},
                templateName: {},
                templateType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                templateSyncConfig: {
                  shape: 'S2v'
                }
              }
            },
            idempotent: true
          },
          DeleteComponent: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                component: {
                  shape: 'Se'
                }
              }
            },
            idempotent: true
          },
          DeleteDeployment: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deployment: {
                  shape: 'S30'
                }
              }
            },
            idempotent: true
          },
          DeleteEnvironment: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                environment: {
                  shape: 'So'
                }
              }
            },
            idempotent: true
          },
          DeleteEnvironmentAccountConnection: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentAccountConnection: {
                  shape: 'S4'
                }
              }
            },
            idempotent: true
          },
          DeleteEnvironmentTemplate: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentTemplate: {
                  shape: 'S1l'
                }
              }
            },
            idempotent: true
          },
          DeleteEnvironmentTemplateVersion: {
            input: {
              type: 'structure',
              required: ['majorVersion', 'minorVersion', 'templateName'],
              members: {
                majorVersion: {},
                minorVersion: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentTemplateVersion: {
                  shape: 'S1u'
                }
              }
            },
            idempotent: true
          },
          DeleteRepository: {
            input: {
              type: 'structure',
              required: ['name', 'provider'],
              members: {
                name: {},
                provider: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S20'
                }
              }
            },
            idempotent: true
          },
          DeleteService: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                service: {
                  shape: 'S24'
                }
              }
            },
            idempotent: true
          },
          DeleteServiceSyncConfig: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceSyncConfig: {
                  shape: 'S2c'
                }
              }
            },
            idempotent: true
          },
          DeleteServiceTemplate: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceTemplate: {
                  shape: 'S2f'
                }
              }
            },
            idempotent: true
          },
          DeleteServiceTemplateVersion: {
            input: {
              type: 'structure',
              required: ['majorVersion', 'minorVersion', 'templateName'],
              members: {
                majorVersion: {},
                minorVersion: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceTemplateVersion: {
                  shape: 'S2n'
                }
              }
            },
            idempotent: true
          },
          DeleteTemplateSyncConfig: {
            input: {
              type: 'structure',
              required: ['templateName', 'templateType'],
              members: {
                templateName: {},
                templateType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                templateSyncConfig: {
                  shape: 'S2v'
                }
              }
            },
            idempotent: true
          },
          GetAccountSettings: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                accountSettings: {
                  shape: 'S3w'
                }
              }
            }
          },
          GetComponent: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                component: {
                  shape: 'Se'
                }
              }
            }
          },
          GetDeployment: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                componentName: {},
                environmentName: {},
                id: {},
                serviceInstanceName: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deployment: {
                  shape: 'S30'
                }
              }
            }
          },
          GetEnvironment: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environment'],
              members: {
                environment: {
                  shape: 'So'
                }
              }
            }
          },
          GetEnvironmentAccountConnection: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentAccountConnection'],
              members: {
                environmentAccountConnection: {
                  shape: 'S4'
                }
              }
            }
          },
          GetEnvironmentTemplate: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentTemplate'],
              members: {
                environmentTemplate: {
                  shape: 'S1l'
                }
              }
            }
          },
          GetEnvironmentTemplateVersion: {
            input: {
              type: 'structure',
              required: ['majorVersion', 'minorVersion', 'templateName'],
              members: {
                majorVersion: {},
                minorVersion: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentTemplateVersion'],
              members: {
                environmentTemplateVersion: {
                  shape: 'S1u'
                }
              }
            }
          },
          GetRepository: {
            input: {
              type: 'structure',
              required: ['name', 'provider'],
              members: {
                name: {},
                provider: {}
              }
            },
            output: {
              type: 'structure',
              required: ['repository'],
              members: {
                repository: {
                  shape: 'S20'
                }
              }
            }
          },
          GetRepositorySyncStatus: {
            input: {
              type: 'structure',
              required: ['branch', 'repositoryName', 'repositoryProvider', 'syncType'],
              members: {
                branch: {},
                repositoryName: {},
                repositoryProvider: {},
                syncType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                latestSync: {
                  type: 'structure',
                  required: ['events', 'startedAt', 'status'],
                  members: {
                    events: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['event', 'time', 'type'],
                        members: {
                          event: {},
                          externalId: {},
                          time: {
                            type: 'timestamp'
                          },
                          type: {}
                        }
                      }
                    },
                    startedAt: {
                      type: 'timestamp'
                    },
                    status: {}
                  }
                }
              }
            }
          },
          GetResourcesSummary: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['counts'],
              members: {
                counts: {
                  type: 'structure',
                  members: {
                    components: {
                      shape: 'S4m'
                    },
                    environmentTemplates: {
                      shape: 'S4m'
                    },
                    environments: {
                      shape: 'S4m'
                    },
                    pipelines: {
                      shape: 'S4m'
                    },
                    serviceInstances: {
                      shape: 'S4m'
                    },
                    serviceTemplates: {
                      shape: 'S4m'
                    },
                    services: {
                      shape: 'S4m'
                    }
                  }
                }
              }
            }
          },
          GetService: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                service: {
                  shape: 'S24'
                }
              }
            }
          },
          GetServiceInstance: {
            input: {
              type: 'structure',
              required: ['name', 'serviceName'],
              members: {
                name: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceInstance'],
              members: {
                serviceInstance: {
                  shape: 'Sz'
                }
              }
            }
          },
          GetServiceInstanceSyncStatus: {
            input: {
              type: 'structure',
              required: ['serviceInstanceName', 'serviceName'],
              members: {
                serviceInstanceName: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                desiredState: {
                  shape: 'S4u'
                },
                latestSuccessfulSync: {
                  shape: 'S4w'
                },
                latestSync: {
                  shape: 'S4w'
                }
              }
            }
          },
          GetServiceSyncBlockerSummary: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceInstanceName: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceSyncBlockerSummary: {
                  type: 'structure',
                  required: ['serviceName'],
                  members: {
                    latestBlockers: {
                      type: 'list',
                      member: {
                        shape: 'S54'
                      }
                    },
                    serviceInstanceName: {},
                    serviceName: {}
                  }
                }
              }
            }
          },
          GetServiceSyncConfig: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceSyncConfig: {
                  shape: 'S2c'
                }
              }
            }
          },
          GetServiceTemplate: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceTemplate'],
              members: {
                serviceTemplate: {
                  shape: 'S2f'
                }
              }
            }
          },
          GetServiceTemplateVersion: {
            input: {
              type: 'structure',
              required: ['majorVersion', 'minorVersion', 'templateName'],
              members: {
                majorVersion: {},
                minorVersion: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceTemplateVersion'],
              members: {
                serviceTemplateVersion: {
                  shape: 'S2n'
                }
              }
            }
          },
          GetTemplateSyncConfig: {
            input: {
              type: 'structure',
              required: ['templateName', 'templateType'],
              members: {
                templateName: {},
                templateType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                templateSyncConfig: {
                  shape: 'S2v'
                }
              }
            }
          },
          GetTemplateSyncStatus: {
            input: {
              type: 'structure',
              required: ['templateName', 'templateType', 'templateVersion'],
              members: {
                templateName: {},
                templateType: {},
                templateVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                desiredState: {
                  shape: 'S4u'
                },
                latestSuccessfulSync: {
                  shape: 'S4w'
                },
                latestSync: {
                  shape: 'S4w'
                }
              }
            }
          },
          ListComponentOutputs: {
            input: {
              type: 'structure',
              required: ['componentName'],
              members: {
                componentName: {},
                deploymentId: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['outputs'],
              members: {
                nextToken: {},
                outputs: {
                  shape: 'S5m'
                }
              }
            }
          },
          ListComponentProvisionedResources: {
            input: {
              type: 'structure',
              required: ['componentName'],
              members: {
                componentName: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['provisionedResources'],
              members: {
                nextToken: {},
                provisionedResources: {
                  shape: 'S5s'
                }
              }
            }
          },
          ListComponents: {
            input: {
              type: 'structure',
              members: {
                environmentName: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                serviceInstanceName: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['components'],
              members: {
                components: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'deploymentStatus', 'environmentName', 'lastModifiedAt', 'name'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      deploymentStatus: {},
                      deploymentStatusMessage: {
                        shape: 'Sh'
                      },
                      environmentName: {},
                      lastAttemptedDeploymentId: {},
                      lastDeploymentAttemptedAt: {
                        type: 'timestamp'
                      },
                      lastDeploymentSucceededAt: {
                        type: 'timestamp'
                      },
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      lastSucceededDeploymentId: {},
                      name: {},
                      serviceInstanceName: {},
                      serviceName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDeployments: {
            input: {
              type: 'structure',
              members: {
                componentName: {},
                environmentName: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                serviceInstanceName: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['deployments'],
              members: {
                deployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'deploymentStatus', 'environmentName', 'id', 'lastModifiedAt', 'targetArn', 'targetResourceCreatedAt', 'targetResourceType'],
                    members: {
                      arn: {},
                      completedAt: {
                        type: 'timestamp'
                      },
                      componentName: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      deploymentStatus: {},
                      environmentName: {},
                      id: {},
                      lastAttemptedDeploymentId: {},
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      lastSucceededDeploymentId: {},
                      serviceInstanceName: {},
                      serviceName: {},
                      targetArn: {},
                      targetResourceCreatedAt: {
                        type: 'timestamp'
                      },
                      targetResourceType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnvironmentAccountConnections: {
            input: {
              type: 'structure',
              required: ['requestedBy'],
              members: {
                environmentName: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                requestedBy: {},
                statuses: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['environmentAccountConnections'],
              members: {
                environmentAccountConnections: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'environmentAccountId', 'environmentName', 'id', 'lastModifiedAt', 'managementAccountId', 'requestedAt', 'roleArn', 'status'],
                    members: {
                      arn: {},
                      componentRoleArn: {},
                      environmentAccountId: {},
                      environmentName: {},
                      id: {},
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      managementAccountId: {},
                      requestedAt: {
                        type: 'timestamp'
                      },
                      roleArn: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnvironmentOutputs: {
            input: {
              type: 'structure',
              required: ['environmentName'],
              members: {
                deploymentId: {},
                environmentName: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['outputs'],
              members: {
                nextToken: {},
                outputs: {
                  shape: 'S5m'
                }
              }
            }
          },
          ListEnvironmentProvisionedResources: {
            input: {
              type: 'structure',
              required: ['environmentName'],
              members: {
                environmentName: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['provisionedResources'],
              members: {
                nextToken: {},
                provisionedResources: {
                  shape: 'S5s'
                }
              }
            }
          },
          ListEnvironmentTemplateVersions: {
            input: {
              type: 'structure',
              required: ['templateName'],
              members: {
                majorVersion: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['templateVersions'],
              members: {
                nextToken: {},
                templateVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastModifiedAt', 'majorVersion', 'minorVersion', 'status', 'templateName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      description: {
                        shape: 'Si'
                      },
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      majorVersion: {},
                      minorVersion: {},
                      recommendedMinorVersion: {},
                      status: {},
                      statusMessage: {
                        shape: 'Sh'
                      },
                      templateName: {}
                    }
                  }
                }
              }
            }
          },
          ListEnvironmentTemplates: {
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
              required: ['templates'],
              members: {
                nextToken: {},
                templates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastModifiedAt', 'name'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      description: {
                        shape: 'Si'
                      },
                      displayName: {
                        shape: 'S1j'
                      },
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      name: {},
                      provisioning: {},
                      recommendedVersion: {}
                    }
                  }
                }
              }
            }
          },
          ListEnvironments: {
            input: {
              type: 'structure',
              members: {
                environmentTemplates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['majorVersion', 'templateName'],
                    members: {
                      majorVersion: {},
                      templateName: {}
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
              required: ['environments'],
              members: {
                environments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'deploymentStatus', 'lastDeploymentAttemptedAt', 'lastDeploymentSucceededAt', 'name', 'templateMajorVersion', 'templateMinorVersion', 'templateName'],
                    members: {
                      arn: {},
                      componentRoleArn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      deploymentStatus: {},
                      deploymentStatusMessage: {
                        shape: 'Sh'
                      },
                      description: {
                        shape: 'Si'
                      },
                      environmentAccountConnectionId: {},
                      environmentAccountId: {},
                      lastAttemptedDeploymentId: {},
                      lastDeploymentAttemptedAt: {
                        type: 'timestamp'
                      },
                      lastDeploymentSucceededAt: {
                        type: 'timestamp'
                      },
                      lastSucceededDeploymentId: {},
                      name: {},
                      protonServiceRoleArn: {},
                      provisioning: {},
                      templateMajorVersion: {},
                      templateMinorVersion: {},
                      templateName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRepositories: {
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
              required: ['repositories'],
              members: {
                nextToken: {},
                repositories: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'connectionArn', 'name', 'provider'],
                    members: {
                      arn: {},
                      connectionArn: {},
                      name: {},
                      provider: {}
                    }
                  }
                }
              }
            }
          },
          ListRepositorySyncDefinitions: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'repositoryProvider', 'syncType'],
              members: {
                nextToken: {},
                repositoryName: {},
                repositoryProvider: {},
                syncType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['syncDefinitions'],
              members: {
                nextToken: {},
                syncDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['branch', 'directory', 'parent', 'target'],
                    members: {
                      branch: {},
                      directory: {},
                      parent: {},
                      target: {}
                    }
                  }
                }
              }
            }
          },
          ListServiceInstanceOutputs: {
            input: {
              type: 'structure',
              required: ['serviceInstanceName', 'serviceName'],
              members: {
                deploymentId: {},
                nextToken: {},
                serviceInstanceName: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['outputs'],
              members: {
                nextToken: {},
                outputs: {
                  shape: 'S5m'
                }
              }
            }
          },
          ListServiceInstanceProvisionedResources: {
            input: {
              type: 'structure',
              required: ['serviceInstanceName', 'serviceName'],
              members: {
                nextToken: {},
                serviceInstanceName: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['provisionedResources'],
              members: {
                nextToken: {},
                provisionedResources: {
                  shape: 'S5s'
                }
              }
            }
          },
          ListServiceInstances: {
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      key: {},
                      value: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                serviceName: {},
                sortBy: {},
                sortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceInstances'],
              members: {
                nextToken: {},
                serviceInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'deploymentStatus', 'environmentName', 'lastDeploymentAttemptedAt', 'lastDeploymentSucceededAt', 'name', 'serviceName', 'templateMajorVersion', 'templateMinorVersion', 'templateName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      deploymentStatus: {},
                      deploymentStatusMessage: {
                        shape: 'Sh'
                      },
                      environmentName: {},
                      lastAttemptedDeploymentId: {},
                      lastDeploymentAttemptedAt: {
                        type: 'timestamp'
                      },
                      lastDeploymentSucceededAt: {
                        type: 'timestamp'
                      },
                      lastSucceededDeploymentId: {},
                      name: {},
                      serviceName: {},
                      templateMajorVersion: {},
                      templateMinorVersion: {},
                      templateName: {}
                    }
                  }
                }
              }
            }
          },
          ListServicePipelineOutputs: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                deploymentId: {},
                nextToken: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['outputs'],
              members: {
                nextToken: {},
                outputs: {
                  shape: 'S5m'
                }
              }
            }
          },
          ListServicePipelineProvisionedResources: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                nextToken: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['provisionedResources'],
              members: {
                nextToken: {},
                provisionedResources: {
                  shape: 'S5s'
                }
              }
            }
          },
          ListServiceTemplateVersions: {
            input: {
              type: 'structure',
              required: ['templateName'],
              members: {
                majorVersion: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['templateVersions'],
              members: {
                nextToken: {},
                templateVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastModifiedAt', 'majorVersion', 'minorVersion', 'status', 'templateName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      description: {
                        shape: 'Si'
                      },
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      majorVersion: {},
                      minorVersion: {},
                      recommendedMinorVersion: {},
                      status: {},
                      statusMessage: {
                        shape: 'Sh'
                      },
                      templateName: {}
                    }
                  }
                }
              }
            }
          },
          ListServiceTemplates: {
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
              required: ['templates'],
              members: {
                nextToken: {},
                templates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastModifiedAt', 'name'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      description: {
                        shape: 'Si'
                      },
                      displayName: {
                        shape: 'S1j'
                      },
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      name: {},
                      pipelineProvisioning: {},
                      recommendedVersion: {}
                    }
                  }
                }
              }
            }
          },
          ListServices: {
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
              required: ['services'],
              members: {
                nextToken: {},
                services: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'lastModifiedAt', 'name', 'status', 'templateName'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      description: {
                        shape: 'Si'
                      },
                      lastModifiedAt: {
                        type: 'timestamp'
                      },
                      name: {},
                      status: {},
                      statusMessage: {
                        shape: 'Sh'
                      },
                      templateName: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
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
              required: ['tags'],
              members: {
                nextToken: {},
                tags: {
                  shape: 'S17'
                }
              }
            }
          },
          NotifyResourceDeploymentStatusChange: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                deploymentId: {},
                outputs: {
                  type: 'list',
                  member: {
                    shape: 'S5n'
                  }
                },
                resourceArn: {},
                status: {},
                statusMessage: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RejectEnvironmentAccountConnection: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentAccountConnection'],
              members: {
                environmentAccountConnection: {
                  shape: 'S4'
                }
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
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
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
            },
            idempotent: true
          },
          UpdateAccountSettings: {
            input: {
              type: 'structure',
              members: {
                deletePipelineProvisioningRepository: {
                  type: 'boolean'
                },
                pipelineCodebuildRoleArn: {},
                pipelineProvisioningRepository: {
                  shape: 'S1e'
                },
                pipelineServiceRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['accountSettings'],
              members: {
                accountSettings: {
                  shape: 'S3w'
                }
              }
            }
          },
          UpdateComponent: {
            input: {
              type: 'structure',
              required: ['deploymentType', 'name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                deploymentType: {},
                description: {
                  shape: 'Si'
                },
                name: {},
                serviceInstanceName: {},
                serviceName: {},
                serviceSpec: {
                  shape: 'Sl'
                },
                templateFile: {
                  shape: 'S1b'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['component'],
              members: {
                component: {
                  shape: 'Se'
                }
              }
            }
          },
          UpdateEnvironment: {
            input: {
              type: 'structure',
              required: ['deploymentType', 'name'],
              members: {
                codebuildRoleArn: {},
                componentRoleArn: {},
                deploymentType: {},
                description: {
                  shape: 'Si'
                },
                environmentAccountConnectionId: {},
                name: {},
                protonServiceRoleArn: {},
                provisioningRepository: {
                  shape: 'S1e'
                },
                spec: {
                  shape: 'Sl'
                },
                templateMajorVersion: {},
                templateMinorVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environment'],
              members: {
                environment: {
                  shape: 'So'
                }
              }
            }
          },
          UpdateEnvironmentAccountConnection: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                codebuildRoleArn: {},
                componentRoleArn: {},
                id: {},
                roleArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentAccountConnection'],
              members: {
                environmentAccountConnection: {
                  shape: 'S4'
                }
              }
            },
            idempotent: true
          },
          UpdateEnvironmentTemplate: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                description: {
                  shape: 'Si'
                },
                displayName: {
                  shape: 'S1j'
                },
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentTemplate'],
              members: {
                environmentTemplate: {
                  shape: 'S1l'
                }
              }
            }
          },
          UpdateEnvironmentTemplateVersion: {
            input: {
              type: 'structure',
              required: ['majorVersion', 'minorVersion', 'templateName'],
              members: {
                description: {
                  shape: 'Si'
                },
                majorVersion: {},
                minorVersion: {},
                status: {},
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentTemplateVersion'],
              members: {
                environmentTemplateVersion: {
                  shape: 'S1u'
                }
              }
            }
          },
          UpdateService: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                description: {
                  shape: 'Si'
                },
                name: {},
                spec: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['service'],
              members: {
                service: {
                  shape: 'S24'
                }
              }
            }
          },
          UpdateServiceInstance: {
            input: {
              type: 'structure',
              required: ['deploymentType', 'name', 'serviceName'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                deploymentType: {},
                name: {},
                serviceName: {},
                spec: {
                  shape: 'Sl'
                },
                templateMajorVersion: {},
                templateMinorVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceInstance'],
              members: {
                serviceInstance: {
                  shape: 'Sz'
                }
              }
            }
          },
          UpdateServicePipeline: {
            input: {
              type: 'structure',
              required: ['deploymentType', 'serviceName', 'spec'],
              members: {
                deploymentType: {},
                serviceName: {},
                spec: {
                  shape: 'Sl'
                },
                templateMajorVersion: {},
                templateMinorVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pipeline'],
              members: {
                pipeline: {
                  shape: 'S13'
                }
              }
            }
          },
          UpdateServiceSyncBlocker: {
            input: {
              type: 'structure',
              required: ['id', 'resolvedReason'],
              members: {
                id: {},
                resolvedReason: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceName', 'serviceSyncBlocker'],
              members: {
                serviceInstanceName: {},
                serviceName: {},
                serviceSyncBlocker: {
                  shape: 'S54'
                }
              }
            }
          },
          UpdateServiceSyncConfig: {
            input: {
              type: 'structure',
              required: ['branch', 'filePath', 'repositoryName', 'repositoryProvider', 'serviceName'],
              members: {
                branch: {},
                filePath: {},
                repositoryName: {},
                repositoryProvider: {},
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceSyncConfig: {
                  shape: 'S2c'
                }
              }
            }
          },
          UpdateServiceTemplate: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                description: {
                  shape: 'Si'
                },
                displayName: {
                  shape: 'S1j'
                },
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceTemplate'],
              members: {
                serviceTemplate: {
                  shape: 'S2f'
                }
              }
            }
          },
          UpdateServiceTemplateVersion: {
            input: {
              type: 'structure',
              required: ['majorVersion', 'minorVersion', 'templateName'],
              members: {
                compatibleEnvironmentTemplates: {
                  shape: 'S2i'
                },
                description: {
                  shape: 'Si'
                },
                majorVersion: {},
                minorVersion: {},
                status: {},
                supportedComponentSources: {
                  shape: 'S2k'
                },
                templateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['serviceTemplateVersion'],
              members: {
                serviceTemplateVersion: {
                  shape: 'S2n'
                }
              }
            }
          },
          UpdateTemplateSyncConfig: {
            input: {
              type: 'structure',
              required: ['branch', 'repositoryName', 'repositoryProvider', 'templateName', 'templateType'],
              members: {
                branch: {},
                repositoryName: {},
                repositoryProvider: {},
                subdirectory: {},
                templateName: {},
                templateType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                templateSyncConfig: {
                  shape: 'S2v'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['arn', 'environmentAccountId', 'environmentName', 'id', 'lastModifiedAt', 'managementAccountId', 'requestedAt', 'roleArn', 'status'],
            members: {
              arn: {},
              codebuildRoleArn: {},
              componentRoleArn: {},
              environmentAccountId: {},
              environmentName: {},
              id: {},
              lastModifiedAt: {
                type: 'timestamp'
              },
              managementAccountId: {},
              requestedAt: {
                type: 'timestamp'
              },
              roleArn: {},
              status: {}
            }
          },
          Se: {
            type: 'structure',
            required: ['arn', 'createdAt', 'deploymentStatus', 'environmentName', 'lastModifiedAt', 'name'],
            members: {
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              deploymentStatus: {},
              deploymentStatusMessage: {
                shape: 'Sh'
              },
              description: {
                shape: 'Si'
              },
              environmentName: {},
              lastAttemptedDeploymentId: {},
              lastClientRequestToken: {},
              lastDeploymentAttemptedAt: {
                type: 'timestamp'
              },
              lastDeploymentSucceededAt: {
                type: 'timestamp'
              },
              lastModifiedAt: {
                type: 'timestamp'
              },
              lastSucceededDeploymentId: {},
              name: {},
              serviceInstanceName: {},
              serviceName: {},
              serviceSpec: {
                shape: 'Sl'
              }
            }
          },
          Sh: {
            type: 'string',
            sensitive: true
          },
          Si: {
            type: 'string',
            sensitive: true
          },
          Sl: {
            type: 'string',
            sensitive: true
          },
          So: {
            type: 'structure',
            required: ['arn', 'createdAt', 'deploymentStatus', 'lastDeploymentAttemptedAt', 'lastDeploymentSucceededAt', 'name', 'templateMajorVersion', 'templateMinorVersion', 'templateName'],
            members: {
              arn: {},
              codebuildRoleArn: {},
              componentRoleArn: {},
              createdAt: {
                type: 'timestamp'
              },
              deploymentStatus: {},
              deploymentStatusMessage: {
                shape: 'Sh'
              },
              description: {
                shape: 'Si'
              },
              environmentAccountConnectionId: {},
              environmentAccountId: {},
              lastAttemptedDeploymentId: {},
              lastDeploymentAttemptedAt: {
                type: 'timestamp'
              },
              lastDeploymentSucceededAt: {
                type: 'timestamp'
              },
              lastSucceededDeploymentId: {},
              name: {},
              protonServiceRoleArn: {},
              provisioning: {},
              provisioningRepository: {
                shape: 'Sr'
              },
              spec: {
                shape: 'Sl'
              },
              templateMajorVersion: {},
              templateMinorVersion: {},
              templateName: {}
            }
          },
          Sr: {
            type: 'structure',
            required: ['arn', 'branch', 'name', 'provider'],
            members: {
              arn: {},
              branch: {},
              name: {},
              provider: {}
            }
          },
          Sz: {
            type: 'structure',
            required: ['arn', 'createdAt', 'deploymentStatus', 'environmentName', 'lastDeploymentAttemptedAt', 'lastDeploymentSucceededAt', 'name', 'serviceName', 'templateMajorVersion', 'templateMinorVersion', 'templateName'],
            members: {
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              deploymentStatus: {},
              deploymentStatusMessage: {
                shape: 'Sh'
              },
              environmentName: {},
              lastAttemptedDeploymentId: {},
              lastClientRequestToken: {},
              lastDeploymentAttemptedAt: {
                type: 'timestamp'
              },
              lastDeploymentSucceededAt: {
                type: 'timestamp'
              },
              lastSucceededDeploymentId: {},
              name: {},
              serviceName: {},
              spec: {
                shape: 'Sl'
              },
              templateMajorVersion: {},
              templateMinorVersion: {},
              templateName: {}
            }
          },
          S13: {
            type: 'structure',
            required: ['arn', 'createdAt', 'deploymentStatus', 'lastDeploymentAttemptedAt', 'lastDeploymentSucceededAt', 'templateMajorVersion', 'templateMinorVersion', 'templateName'],
            members: {
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              deploymentStatus: {},
              deploymentStatusMessage: {
                shape: 'Sh'
              },
              lastAttemptedDeploymentId: {},
              lastDeploymentAttemptedAt: {
                type: 'timestamp'
              },
              lastDeploymentSucceededAt: {
                type: 'timestamp'
              },
              lastSucceededDeploymentId: {},
              spec: {
                shape: 'Sl'
              },
              templateMajorVersion: {},
              templateMinorVersion: {},
              templateName: {}
            }
          },
          S17: {
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
          S1b: {
            type: 'string',
            sensitive: true
          },
          S1e: {
            type: 'structure',
            required: ['branch', 'name', 'provider'],
            members: {
              branch: {},
              name: {},
              provider: {}
            }
          },
          S1j: {
            type: 'string',
            sensitive: true
          },
          S1l: {
            type: 'structure',
            required: ['arn', 'createdAt', 'lastModifiedAt', 'name'],
            members: {
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              description: {
                shape: 'Si'
              },
              displayName: {
                shape: 'S1j'
              },
              encryptionKey: {},
              lastModifiedAt: {
                type: 'timestamp'
              },
              name: {},
              provisioning: {},
              recommendedVersion: {}
            }
          },
          S1p: {
            type: 'structure',
            members: {
              s3: {
                type: 'structure',
                required: ['bucket', 'key'],
                members: {
                  bucket: {},
                  key: {}
                }
              }
            },
            union: true
          },
          S1u: {
            type: 'structure',
            required: ['arn', 'createdAt', 'lastModifiedAt', 'majorVersion', 'minorVersion', 'status', 'templateName'],
            members: {
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              description: {
                shape: 'Si'
              },
              lastModifiedAt: {
                type: 'timestamp'
              },
              majorVersion: {},
              minorVersion: {},
              recommendedMinorVersion: {},
              schema: {
                shape: 'S1w'
              },
              status: {},
              statusMessage: {
                shape: 'Sh'
              },
              templateName: {}
            }
          },
          S1w: {
            type: 'string',
            sensitive: true
          },
          S20: {
            type: 'structure',
            required: ['arn', 'connectionArn', 'name', 'provider'],
            members: {
              arn: {},
              connectionArn: {},
              encryptionKey: {},
              name: {},
              provider: {}
            }
          },
          S24: {
            type: 'structure',
            required: ['arn', 'createdAt', 'lastModifiedAt', 'name', 'spec', 'status', 'templateName'],
            members: {
              arn: {},
              branchName: {},
              createdAt: {
                type: 'timestamp'
              },
              description: {
                shape: 'Si'
              },
              lastModifiedAt: {
                type: 'timestamp'
              },
              name: {},
              pipeline: {
                shape: 'S13'
              },
              repositoryConnectionArn: {},
              repositoryId: {},
              spec: {
                shape: 'Sl'
              },
              status: {},
              statusMessage: {
                shape: 'Sh'
              },
              templateName: {}
            }
          },
          S2c: {
            type: 'structure',
            required: ['branch', 'filePath', 'repositoryName', 'repositoryProvider', 'serviceName'],
            members: {
              branch: {},
              filePath: {},
              repositoryName: {},
              repositoryProvider: {},
              serviceName: {}
            }
          },
          S2f: {
            type: 'structure',
            required: ['arn', 'createdAt', 'lastModifiedAt', 'name'],
            members: {
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              description: {
                shape: 'Si'
              },
              displayName: {
                shape: 'S1j'
              },
              encryptionKey: {},
              lastModifiedAt: {
                type: 'timestamp'
              },
              name: {},
              pipelineProvisioning: {},
              recommendedVersion: {}
            }
          },
          S2i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['majorVersion', 'templateName'],
              members: {
                majorVersion: {},
                templateName: {}
              }
            }
          },
          S2k: {
            type: 'list',
            member: {}
          },
          S2n: {
            type: 'structure',
            required: ['arn', 'compatibleEnvironmentTemplates', 'createdAt', 'lastModifiedAt', 'majorVersion', 'minorVersion', 'status', 'templateName'],
            members: {
              arn: {},
              compatibleEnvironmentTemplates: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['majorVersion', 'templateName'],
                  members: {
                    majorVersion: {},
                    templateName: {}
                  }
                }
              },
              createdAt: {
                type: 'timestamp'
              },
              description: {
                shape: 'Si'
              },
              lastModifiedAt: {
                type: 'timestamp'
              },
              majorVersion: {},
              minorVersion: {},
              recommendedMinorVersion: {},
              schema: {
                shape: 'S1w'
              },
              status: {},
              statusMessage: {
                shape: 'Sh'
              },
              supportedComponentSources: {
                shape: 'S2k'
              },
              templateName: {}
            }
          },
          S2v: {
            type: 'structure',
            required: ['branch', 'repositoryName', 'repositoryProvider', 'templateName', 'templateType'],
            members: {
              branch: {},
              repositoryName: {},
              repositoryProvider: {},
              subdirectory: {},
              templateName: {},
              templateType: {}
            }
          },
          S30: {
            type: 'structure',
            required: ['arn', 'createdAt', 'deploymentStatus', 'environmentName', 'id', 'lastModifiedAt', 'targetArn', 'targetResourceCreatedAt', 'targetResourceType'],
            members: {
              arn: {},
              completedAt: {
                type: 'timestamp'
              },
              componentName: {},
              createdAt: {
                type: 'timestamp'
              },
              deploymentStatus: {},
              deploymentStatusMessage: {
                shape: 'Sh'
              },
              environmentName: {},
              id: {},
              initialState: {
                shape: 'S32'
              },
              lastAttemptedDeploymentId: {},
              lastModifiedAt: {
                type: 'timestamp'
              },
              lastSucceededDeploymentId: {},
              serviceInstanceName: {},
              serviceName: {},
              targetArn: {},
              targetResourceCreatedAt: {
                type: 'timestamp'
              },
              targetResourceType: {},
              targetState: {
                shape: 'S32'
              }
            }
          },
          S32: {
            type: 'structure',
            members: {
              component: {
                type: 'structure',
                members: {
                  serviceInstanceName: {},
                  serviceName: {},
                  serviceSpec: {
                    shape: 'Sl'
                  },
                  templateFile: {
                    shape: 'S1b'
                  }
                }
              },
              environment: {
                type: 'structure',
                required: ['templateMajorVersion', 'templateMinorVersion', 'templateName'],
                members: {
                  spec: {
                    shape: 'Sl'
                  },
                  templateMajorVersion: {},
                  templateMinorVersion: {},
                  templateName: {}
                }
              },
              serviceInstance: {
                type: 'structure',
                required: ['spec', 'templateMajorVersion', 'templateMinorVersion', 'templateName'],
                members: {
                  lastSuccessfulComponentDeploymentIds: {
                    type: 'list',
                    member: {}
                  },
                  lastSuccessfulEnvironmentDeploymentId: {},
                  lastSuccessfulServicePipelineDeploymentId: {},
                  spec: {
                    shape: 'Sl'
                  },
                  templateMajorVersion: {},
                  templateMinorVersion: {},
                  templateName: {}
                }
              },
              servicePipeline: {
                type: 'structure',
                required: ['templateMajorVersion', 'templateMinorVersion', 'templateName'],
                members: {
                  spec: {
                    shape: 'Sl'
                  },
                  templateMajorVersion: {},
                  templateMinorVersion: {},
                  templateName: {}
                }
              }
            },
            union: true
          },
          S3w: {
            type: 'structure',
            members: {
              pipelineCodebuildRoleArn: {},
              pipelineProvisioningRepository: {
                shape: 'Sr'
              },
              pipelineServiceRoleArn: {}
            }
          },
          S4m: {
            type: 'structure',
            required: ['total'],
            members: {
              behindMajor: {
                type: 'integer'
              },
              behindMinor: {
                type: 'integer'
              },
              failed: {
                type: 'integer'
              },
              total: {
                type: 'integer'
              },
              upToDate: {
                type: 'integer'
              }
            }
          },
          S4u: {
            type: 'structure',
            required: ['branch', 'directory', 'repositoryName', 'repositoryProvider', 'sha'],
            members: {
              branch: {},
              directory: {},
              repositoryName: {},
              repositoryProvider: {},
              sha: {}
            }
          },
          S4w: {
            type: 'structure',
            required: ['events', 'initialRevision', 'startedAt', 'status', 'target', 'targetRevision'],
            members: {
              events: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['event', 'time', 'type'],
                  members: {
                    event: {},
                    externalId: {},
                    time: {
                      type: 'timestamp'
                    },
                    type: {}
                  }
                }
              },
              initialRevision: {
                shape: 'S4u'
              },
              startedAt: {
                type: 'timestamp'
              },
              status: {},
              target: {},
              targetRevision: {
                shape: 'S4u'
              }
            }
          },
          S54: {
            type: 'structure',
            required: ['createdAt', 'createdReason', 'id', 'status', 'type'],
            members: {
              contexts: {
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
              createdAt: {
                type: 'timestamp'
              },
              createdReason: {},
              id: {},
              resolvedAt: {
                type: 'timestamp'
              },
              resolvedReason: {},
              status: {},
              type: {}
            }
          },
          S5m: {
            type: 'list',
            member: {
              shape: 'S5n'
            }
          },
          S5n: {
            type: 'structure',
            members: {
              key: {},
              valueString: {}
            },
            sensitive: true
          },
          S5s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                identifier: {},
                name: {},
                provisioningEngine: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=faf1ec80bf9d1c464a2de1c8e23854a3398e4010.js.map