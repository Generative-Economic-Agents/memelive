System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-11-13',
          endpointPrefix: 'ecs',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Amazon ECS',
          serviceFullName: 'Amazon EC2 Container Service',
          serviceId: 'ECS',
          signatureVersion: 'v4',
          targetPrefix: 'AmazonEC2ContainerServiceV20141113',
          uid: 'ecs-2014-11-13'
        },
        operations: {
          CreateCapacityProvider: {
            input: {
              type: 'structure',
              required: ['name', 'autoScalingGroupProvider'],
              members: {
                name: {},
                autoScalingGroupProvider: {
                  shape: 'S3'
                },
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                capacityProvider: {
                  shape: 'Sg'
                }
              }
            }
          },
          CreateCluster: {
            input: {
              type: 'structure',
              members: {
                clusterName: {},
                tags: {
                  shape: 'Sb'
                },
                settings: {
                  shape: 'Sk'
                },
                configuration: {
                  shape: 'Sn'
                },
                capacityProviders: {
                  shape: 'Ss'
                },
                defaultCapacityProviderStrategy: {
                  shape: 'St'
                },
                serviceConnectDefaults: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'Sz'
                }
              }
            }
          },
          CreateService: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                cluster: {},
                serviceName: {},
                taskDefinition: {},
                loadBalancers: {
                  shape: 'S18'
                },
                serviceRegistries: {
                  shape: 'S1b'
                },
                desiredCount: {
                  type: 'integer'
                },
                clientToken: {},
                launchType: {},
                capacityProviderStrategy: {
                  shape: 'St'
                },
                platformVersion: {},
                role: {},
                deploymentConfiguration: {
                  shape: 'S1e'
                },
                placementConstraints: {
                  shape: 'S1h'
                },
                placementStrategy: {
                  shape: 'S1k'
                },
                networkConfiguration: {
                  shape: 'S1n'
                },
                healthCheckGracePeriodSeconds: {
                  type: 'integer'
                },
                schedulingStrategy: {},
                deploymentController: {
                  shape: 'S1r'
                },
                tags: {
                  shape: 'Sb'
                },
                enableECSManagedTags: {
                  type: 'boolean'
                },
                propagateTags: {},
                enableExecuteCommand: {
                  type: 'boolean'
                },
                serviceConnectConfiguration: {
                  shape: 'S1u'
                },
                volumeConfigurations: {
                  shape: 'S29'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                service: {
                  shape: 'S2n'
                }
              }
            }
          },
          CreateTaskSet: {
            input: {
              type: 'structure',
              required: ['service', 'cluster', 'taskDefinition'],
              members: {
                service: {},
                cluster: {},
                externalId: {},
                taskDefinition: {},
                networkConfiguration: {
                  shape: 'S1n'
                },
                loadBalancers: {
                  shape: 'S18'
                },
                serviceRegistries: {
                  shape: 'S1b'
                },
                launchType: {},
                capacityProviderStrategy: {
                  shape: 'St'
                },
                platformVersion: {},
                scale: {
                  shape: 'S2r'
                },
                clientToken: {},
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskSet: {
                  shape: 'S2p'
                }
              }
            }
          },
          DeleteAccountSetting: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                principalArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                setting: {
                  shape: 'S37'
                }
              }
            }
          },
          DeleteAttributes: {
            input: {
              type: 'structure',
              required: ['attributes'],
              members: {
                cluster: {},
                attributes: {
                  shape: 'S3a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attributes: {
                  shape: 'S3a'
                }
              }
            }
          },
          DeleteCapacityProvider: {
            input: {
              type: 'structure',
              required: ['capacityProvider'],
              members: {
                capacityProvider: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                capacityProvider: {
                  shape: 'Sg'
                }
              }
            }
          },
          DeleteCluster: {
            input: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'Sz'
                }
              }
            }
          },
          DeleteService: {
            input: {
              type: 'structure',
              required: ['service'],
              members: {
                cluster: {},
                service: {},
                force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                service: {
                  shape: 'S2n'
                }
              }
            }
          },
          DeleteTaskDefinitions: {
            input: {
              type: 'structure',
              required: ['taskDefinitions'],
              members: {
                taskDefinitions: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskDefinitions: {
                  type: 'list',
                  member: {
                    shape: 'S3n'
                  }
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          DeleteTaskSet: {
            input: {
              type: 'structure',
              required: ['cluster', 'service', 'taskSet'],
              members: {
                cluster: {},
                service: {},
                taskSet: {},
                force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskSet: {
                  shape: 'S2p'
                }
              }
            }
          },
          DeregisterContainerInstance: {
            input: {
              type: 'structure',
              required: ['containerInstance'],
              members: {
                cluster: {},
                containerInstance: {},
                force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                containerInstance: {
                  shape: 'S5u'
                }
              }
            }
          },
          DeregisterTaskDefinition: {
            input: {
              type: 'structure',
              required: ['taskDefinition'],
              members: {
                taskDefinition: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                taskDefinition: {
                  shape: 'S3n'
                }
              }
            }
          },
          DescribeCapacityProviders: {
            input: {
              type: 'structure',
              members: {
                capacityProviders: {
                  shape: 'Ss'
                },
                include: {
                  type: 'list',
                  member: {}
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
                capacityProviders: {
                  type: 'list',
                  member: {
                    shape: 'Sg'
                  }
                },
                failures: {
                  shape: 'S5o'
                },
                nextToken: {}
              }
            }
          },
          DescribeClusters: {
            input: {
              type: 'structure',
              members: {
                clusters: {
                  shape: 'Ss'
                },
                include: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                clusters: {
                  type: 'list',
                  member: {
                    shape: 'Sz'
                  }
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          DescribeContainerInstances: {
            input: {
              type: 'structure',
              required: ['containerInstances'],
              members: {
                cluster: {},
                containerInstances: {
                  shape: 'Ss'
                },
                include: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                containerInstances: {
                  shape: 'S6l'
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          DescribeServices: {
            input: {
              type: 'structure',
              required: ['services'],
              members: {
                cluster: {},
                services: {
                  shape: 'Ss'
                },
                include: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                services: {
                  type: 'list',
                  member: {
                    shape: 'S2n'
                  }
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          DescribeTaskDefinition: {
            input: {
              type: 'structure',
              required: ['taskDefinition'],
              members: {
                taskDefinition: {},
                include: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskDefinition: {
                  shape: 'S3n'
                },
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          DescribeTaskSets: {
            input: {
              type: 'structure',
              required: ['cluster', 'service'],
              members: {
                cluster: {},
                service: {},
                taskSets: {
                  shape: 'Ss'
                },
                include: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskSets: {
                  shape: 'S2o'
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          DescribeTasks: {
            input: {
              type: 'structure',
              required: ['tasks'],
              members: {
                cluster: {},
                tasks: {
                  shape: 'Ss'
                },
                include: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tasks: {
                  shape: 'S73'
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          DiscoverPollEndpoint: {
            input: {
              type: 'structure',
              members: {
                containerInstance: {},
                cluster: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                endpoint: {},
                telemetryEndpoint: {},
                serviceConnectEndpoint: {}
              }
            }
          },
          ExecuteCommand: {
            input: {
              type: 'structure',
              required: ['command', 'interactive', 'task'],
              members: {
                cluster: {},
                container: {},
                command: {},
                interactive: {
                  type: 'boolean'
                },
                task: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                clusterArn: {},
                containerArn: {},
                containerName: {},
                interactive: {
                  type: 'boolean'
                },
                session: {
                  type: 'structure',
                  members: {
                    sessionId: {},
                    streamUrl: {},
                    tokenValue: {
                      type: 'string',
                      sensitive: true
                    }
                  }
                },
                taskArn: {}
              }
            }
          },
          GetTaskProtection: {
            input: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {},
                tasks: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                protectedTasks: {
                  shape: 'S7v'
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          ListAccountSettings: {
            input: {
              type: 'structure',
              members: {
                name: {},
                value: {},
                principalArn: {},
                effectiveSettings: {
                  type: 'boolean'
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
                settings: {
                  type: 'list',
                  member: {
                    shape: 'S37'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAttributes: {
            input: {
              type: 'structure',
              required: ['targetType'],
              members: {
                cluster: {},
                targetType: {},
                attributeName: {},
                attributeValue: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attributes: {
                  shape: 'S3a'
                },
                nextToken: {}
              }
            }
          },
          ListClusters: {
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
                clusterArns: {
                  shape: 'Ss'
                },
                nextToken: {}
              }
            }
          },
          ListContainerInstances: {
            input: {
              type: 'structure',
              members: {
                cluster: {},
                filter: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                containerInstanceArns: {
                  shape: 'Ss'
                },
                nextToken: {}
              }
            }
          },
          ListServices: {
            input: {
              type: 'structure',
              members: {
                cluster: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                launchType: {},
                schedulingStrategy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceArns: {
                  shape: 'Ss'
                },
                nextToken: {}
              }
            }
          },
          ListServicesByNamespace: {
            input: {
              type: 'structure',
              required: ['namespace'],
              members: {
                namespace: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                serviceArns: {
                  shape: 'Ss'
                },
                nextToken: {}
              }
            }
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
                  shape: 'Sb'
                }
              }
            }
          },
          ListTaskDefinitionFamilies: {
            input: {
              type: 'structure',
              members: {
                familyPrefix: {},
                status: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                families: {
                  shape: 'Ss'
                },
                nextToken: {}
              }
            }
          },
          ListTaskDefinitions: {
            input: {
              type: 'structure',
              members: {
                familyPrefix: {},
                status: {},
                sort: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskDefinitionArns: {
                  shape: 'Ss'
                },
                nextToken: {}
              }
            }
          },
          ListTasks: {
            input: {
              type: 'structure',
              members: {
                cluster: {},
                containerInstance: {},
                family: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                startedBy: {},
                serviceName: {},
                desiredStatus: {},
                launchType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                taskArns: {
                  shape: 'Ss'
                },
                nextToken: {}
              }
            }
          },
          PutAccountSetting: {
            input: {
              type: 'structure',
              required: ['name', 'value'],
              members: {
                name: {},
                value: {},
                principalArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                setting: {
                  shape: 'S37'
                }
              }
            }
          },
          PutAccountSettingDefault: {
            input: {
              type: 'structure',
              required: ['name', 'value'],
              members: {
                name: {},
                value: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                setting: {
                  shape: 'S37'
                }
              }
            }
          },
          PutAttributes: {
            input: {
              type: 'structure',
              required: ['attributes'],
              members: {
                cluster: {},
                attributes: {
                  shape: 'S3a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attributes: {
                  shape: 'S3a'
                }
              }
            }
          },
          PutClusterCapacityProviders: {
            input: {
              type: 'structure',
              required: ['cluster', 'capacityProviders', 'defaultCapacityProviderStrategy'],
              members: {
                cluster: {},
                capacityProviders: {
                  shape: 'Ss'
                },
                defaultCapacityProviderStrategy: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'Sz'
                }
              }
            }
          },
          RegisterContainerInstance: {
            input: {
              type: 'structure',
              members: {
                cluster: {},
                instanceIdentityDocument: {},
                instanceIdentityDocumentSignature: {},
                totalResources: {
                  shape: 'S5x'
                },
                versionInfo: {
                  shape: 'S5w'
                },
                containerInstanceArn: {},
                attributes: {
                  shape: 'S3a'
                },
                platformDevices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'type'],
                    members: {
                      id: {},
                      type: {}
                    }
                  }
                },
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                containerInstance: {
                  shape: 'S5u'
                }
              }
            }
          },
          RegisterTaskDefinition: {
            input: {
              type: 'structure',
              required: ['family', 'containerDefinitions'],
              members: {
                family: {},
                taskRoleArn: {},
                executionRoleArn: {},
                networkMode: {},
                containerDefinitions: {
                  shape: 'S3o'
                },
                volumes: {
                  shape: 'S4u'
                },
                placementConstraints: {
                  shape: 'S58'
                },
                requiresCompatibilities: {
                  shape: 'S5b'
                },
                cpu: {},
                memory: {},
                tags: {
                  shape: 'Sb'
                },
                pidMode: {},
                ipcMode: {},
                proxyConfiguration: {
                  shape: 'S5k'
                },
                inferenceAccelerators: {
                  shape: 'S5g'
                },
                ephemeralStorage: {
                  shape: 'S5n'
                },
                runtimePlatform: {
                  shape: 'S5d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskDefinition: {
                  shape: 'S3n'
                },
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          RunTask: {
            input: {
              type: 'structure',
              required: ['taskDefinition'],
              members: {
                capacityProviderStrategy: {
                  shape: 'St'
                },
                cluster: {},
                count: {
                  type: 'integer'
                },
                enableECSManagedTags: {
                  type: 'boolean'
                },
                enableExecuteCommand: {
                  type: 'boolean'
                },
                group: {},
                launchType: {},
                networkConfiguration: {
                  shape: 'S1n'
                },
                overrides: {
                  shape: 'S7h'
                },
                placementConstraints: {
                  shape: 'S1h'
                },
                placementStrategy: {
                  shape: 'S1k'
                },
                platformVersion: {},
                propagateTags: {},
                referenceId: {},
                startedBy: {},
                tags: {
                  shape: 'Sb'
                },
                taskDefinition: {},
                clientToken: {
                  idempotencyToken: true
                },
                volumeConfigurations: {
                  shape: 'S92'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tasks: {
                  shape: 'S73'
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          StartTask: {
            input: {
              type: 'structure',
              required: ['containerInstances', 'taskDefinition'],
              members: {
                cluster: {},
                containerInstances: {
                  shape: 'Ss'
                },
                enableECSManagedTags: {
                  type: 'boolean'
                },
                enableExecuteCommand: {
                  type: 'boolean'
                },
                group: {},
                networkConfiguration: {
                  shape: 'S1n'
                },
                overrides: {
                  shape: 'S7h'
                },
                propagateTags: {},
                referenceId: {},
                startedBy: {},
                tags: {
                  shape: 'Sb'
                },
                taskDefinition: {},
                volumeConfigurations: {
                  shape: 'S92'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tasks: {
                  shape: 'S73'
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          StopTask: {
            input: {
              type: 'structure',
              required: ['task'],
              members: {
                cluster: {},
                task: {},
                reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                task: {
                  shape: 'S74'
                }
              }
            }
          },
          SubmitAttachmentStateChanges: {
            input: {
              type: 'structure',
              required: ['attachments'],
              members: {
                cluster: {},
                attachments: {
                  shape: 'S9c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                acknowledgment: {}
              }
            }
          },
          SubmitContainerStateChange: {
            input: {
              type: 'structure',
              members: {
                cluster: {},
                task: {},
                containerName: {},
                runtimeId: {},
                status: {},
                exitCode: {
                  type: 'integer'
                },
                reason: {},
                networkBindings: {
                  shape: 'S78'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                acknowledgment: {}
              }
            }
          },
          SubmitTaskStateChange: {
            input: {
              type: 'structure',
              members: {
                cluster: {},
                task: {},
                status: {},
                reason: {},
                containers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      containerName: {},
                      imageDigest: {},
                      runtimeId: {},
                      exitCode: {
                        type: 'integer'
                      },
                      networkBindings: {
                        shape: 'S78'
                      },
                      reason: {},
                      status: {}
                    }
                  }
                },
                attachments: {
                  shape: 'S9c'
                },
                managedAgents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['containerName', 'managedAgentName', 'status'],
                    members: {
                      containerName: {},
                      managedAgentName: {},
                      status: {},
                      reason: {}
                    }
                  }
                },
                pullStartedAt: {
                  type: 'timestamp'
                },
                pullStoppedAt: {
                  type: 'timestamp'
                },
                executionStoppedAt: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                acknowledgment: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'Sb'
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
          UpdateCapacityProvider: {
            input: {
              type: 'structure',
              required: ['name', 'autoScalingGroupProvider'],
              members: {
                name: {},
                autoScalingGroupProvider: {
                  type: 'structure',
                  members: {
                    managedScaling: {
                      shape: 'S4'
                    },
                    managedTerminationProtection: {},
                    managedDraining: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                capacityProvider: {
                  shape: 'Sg'
                }
              }
            }
          },
          UpdateCluster: {
            input: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {},
                settings: {
                  shape: 'Sk'
                },
                configuration: {
                  shape: 'Sn'
                },
                serviceConnectDefaults: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'Sz'
                }
              }
            }
          },
          UpdateClusterSettings: {
            input: {
              type: 'structure',
              required: ['cluster', 'settings'],
              members: {
                cluster: {},
                settings: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'Sz'
                }
              }
            }
          },
          UpdateContainerAgent: {
            input: {
              type: 'structure',
              required: ['containerInstance'],
              members: {
                cluster: {},
                containerInstance: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                containerInstance: {
                  shape: 'S5u'
                }
              }
            }
          },
          UpdateContainerInstancesState: {
            input: {
              type: 'structure',
              required: ['containerInstances', 'status'],
              members: {
                cluster: {},
                containerInstances: {
                  shape: 'Ss'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                containerInstances: {
                  shape: 'S6l'
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          UpdateService: {
            input: {
              type: 'structure',
              required: ['service'],
              members: {
                cluster: {},
                service: {},
                desiredCount: {
                  type: 'integer'
                },
                taskDefinition: {},
                capacityProviderStrategy: {
                  shape: 'St'
                },
                deploymentConfiguration: {
                  shape: 'S1e'
                },
                networkConfiguration: {
                  shape: 'S1n'
                },
                placementConstraints: {
                  shape: 'S1h'
                },
                placementStrategy: {
                  shape: 'S1k'
                },
                platformVersion: {},
                forceNewDeployment: {
                  type: 'boolean'
                },
                healthCheckGracePeriodSeconds: {
                  type: 'integer'
                },
                enableExecuteCommand: {
                  type: 'boolean'
                },
                enableECSManagedTags: {
                  type: 'boolean'
                },
                loadBalancers: {
                  shape: 'S18'
                },
                propagateTags: {},
                serviceRegistries: {
                  shape: 'S1b'
                },
                serviceConnectConfiguration: {
                  shape: 'S1u'
                },
                volumeConfigurations: {
                  shape: 'S29'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                service: {
                  shape: 'S2n'
                }
              }
            }
          },
          UpdateServicePrimaryTaskSet: {
            input: {
              type: 'structure',
              required: ['cluster', 'service', 'primaryTaskSet'],
              members: {
                cluster: {},
                service: {},
                primaryTaskSet: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                taskSet: {
                  shape: 'S2p'
                }
              }
            }
          },
          UpdateTaskProtection: {
            input: {
              type: 'structure',
              required: ['cluster', 'tasks', 'protectionEnabled'],
              members: {
                cluster: {},
                tasks: {
                  shape: 'Ss'
                },
                protectionEnabled: {
                  type: 'boolean'
                },
                expiresInMinutes: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                protectedTasks: {
                  shape: 'S7v'
                },
                failures: {
                  shape: 'S5o'
                }
              }
            }
          },
          UpdateTaskSet: {
            input: {
              type: 'structure',
              required: ['cluster', 'service', 'taskSet', 'scale'],
              members: {
                cluster: {},
                service: {},
                taskSet: {},
                scale: {
                  shape: 'S2r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskSet: {
                  shape: 'S2p'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            required: ['autoScalingGroupArn'],
            members: {
              autoScalingGroupArn: {},
              managedScaling: {
                shape: 'S4'
              },
              managedTerminationProtection: {},
              managedDraining: {}
            }
          },
          S4: {
            type: 'structure',
            members: {
              status: {},
              targetCapacity: {
                type: 'integer'
              },
              minimumScalingStepSize: {
                type: 'integer'
              },
              maximumScalingStepSize: {
                type: 'integer'
              },
              instanceWarmupPeriod: {
                type: 'integer'
              }
            }
          },
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              capacityProviderArn: {},
              name: {},
              status: {},
              autoScalingGroupProvider: {
                shape: 'S3'
              },
              updateStatus: {},
              updateStatusReason: {},
              tags: {
                shape: 'Sb'
              }
            }
          },
          Sk: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                value: {}
              }
            }
          },
          Sn: {
            type: 'structure',
            members: {
              executeCommandConfiguration: {
                type: 'structure',
                members: {
                  kmsKeyId: {},
                  logging: {},
                  logConfiguration: {
                    type: 'structure',
                    members: {
                      cloudWatchLogGroupName: {},
                      cloudWatchEncryptionEnabled: {
                        type: 'boolean'
                      },
                      s3BucketName: {},
                      s3EncryptionEnabled: {
                        type: 'boolean'
                      },
                      s3KeyPrefix: {}
                    }
                  }
                }
              }
            }
          },
          Ss: {
            type: 'list',
            member: {}
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['capacityProvider'],
              members: {
                capacityProvider: {},
                weight: {
                  type: 'integer'
                },
                base: {
                  type: 'integer'
                }
              }
            }
          },
          Sx: {
            type: 'structure',
            required: ['namespace'],
            members: {
              namespace: {}
            }
          },
          Sz: {
            type: 'structure',
            members: {
              clusterArn: {},
              clusterName: {},
              configuration: {
                shape: 'Sn'
              },
              status: {},
              registeredContainerInstancesCount: {
                type: 'integer'
              },
              runningTasksCount: {
                type: 'integer'
              },
              pendingTasksCount: {
                type: 'integer'
              },
              activeServicesCount: {
                type: 'integer'
              },
              statistics: {
                type: 'list',
                member: {
                  shape: 'S12'
                }
              },
              tags: {
                shape: 'Sb'
              },
              settings: {
                shape: 'Sk'
              },
              capacityProviders: {
                shape: 'Ss'
              },
              defaultCapacityProviderStrategy: {
                shape: 'St'
              },
              attachments: {
                shape: 'S13'
              },
              attachmentsStatus: {},
              serviceConnectDefaults: {
                type: 'structure',
                members: {
                  namespace: {}
                }
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              name: {},
              value: {}
            }
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                type: {},
                status: {},
                details: {
                  type: 'list',
                  member: {
                    shape: 'S12'
                  }
                }
              }
            }
          },
          S18: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                targetGroupArn: {},
                loadBalancerName: {},
                containerName: {},
                containerPort: {
                  type: 'integer'
                }
              }
            }
          },
          S1b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                registryArn: {},
                port: {
                  type: 'integer'
                },
                containerName: {},
                containerPort: {
                  type: 'integer'
                }
              }
            }
          },
          S1e: {
            type: 'structure',
            members: {
              deploymentCircuitBreaker: {
                type: 'structure',
                required: ['enable', 'rollback'],
                members: {
                  enable: {
                    type: 'boolean'
                  },
                  rollback: {
                    type: 'boolean'
                  }
                }
              },
              maximumPercent: {
                type: 'integer'
              },
              minimumHealthyPercent: {
                type: 'integer'
              },
              alarms: {
                type: 'structure',
                required: ['alarmNames', 'enable', 'rollback'],
                members: {
                  alarmNames: {
                    shape: 'Ss'
                  },
                  enable: {
                    type: 'boolean'
                  },
                  rollback: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                type: {},
                expression: {}
              }
            }
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                type: {},
                field: {}
              }
            }
          },
          S1n: {
            type: 'structure',
            members: {
              awsvpcConfiguration: {
                type: 'structure',
                required: ['subnets'],
                members: {
                  subnets: {
                    shape: 'Ss'
                  },
                  securityGroups: {
                    shape: 'Ss'
                  },
                  assignPublicIp: {}
                }
              }
            }
          },
          S1r: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {}
            }
          },
          S1u: {
            type: 'structure',
            required: ['enabled'],
            members: {
              enabled: {
                type: 'boolean'
              },
              namespace: {},
              services: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['portName'],
                  members: {
                    portName: {},
                    discoveryName: {},
                    clientAliases: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['port'],
                        members: {
                          port: {
                            type: 'integer'
                          },
                          dnsName: {}
                        }
                      }
                    },
                    ingressPortOverride: {
                      type: 'integer'
                    },
                    timeout: {
                      type: 'structure',
                      members: {
                        idleTimeoutSeconds: {
                          type: 'integer'
                        },
                        perRequestTimeoutSeconds: {
                          type: 'integer'
                        }
                      }
                    },
                    tls: {
                      type: 'structure',
                      required: ['issuerCertificateAuthority'],
                      members: {
                        issuerCertificateAuthority: {
                          type: 'structure',
                          members: {
                            awsPcaAuthorityArn: {}
                          }
                        },
                        kmsKey: {},
                        roleArn: {}
                      }
                    }
                  }
                }
              },
              logConfiguration: {
                shape: 'S24'
              }
            }
          },
          S24: {
            type: 'structure',
            required: ['logDriver'],
            members: {
              logDriver: {},
              options: {
                type: 'map',
                key: {},
                value: {}
              },
              secretOptions: {
                shape: 'S27'
              }
            }
          },
          S27: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'valueFrom'],
              members: {
                name: {},
                valueFrom: {}
              }
            }
          },
          S29: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                managedEBSVolume: {
                  type: 'structure',
                  required: ['roleArn'],
                  members: {
                    encrypted: {
                      type: 'boolean'
                    },
                    kmsKeyId: {},
                    volumeType: {},
                    sizeInGiB: {
                      type: 'integer'
                    },
                    snapshotId: {},
                    iops: {
                      type: 'integer'
                    },
                    throughput: {
                      type: 'integer'
                    },
                    tagSpecifications: {
                      shape: 'S2h'
                    },
                    roleArn: {},
                    filesystemType: {}
                  }
                }
              }
            }
          },
          S2h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['resourceType'],
              members: {
                resourceType: {},
                tags: {
                  shape: 'Sb'
                },
                propagateTags: {}
              }
            }
          },
          S2n: {
            type: 'structure',
            members: {
              serviceArn: {},
              serviceName: {},
              clusterArn: {},
              loadBalancers: {
                shape: 'S18'
              },
              serviceRegistries: {
                shape: 'S1b'
              },
              status: {},
              desiredCount: {
                type: 'integer'
              },
              runningCount: {
                type: 'integer'
              },
              pendingCount: {
                type: 'integer'
              },
              launchType: {},
              capacityProviderStrategy: {
                shape: 'St'
              },
              platformVersion: {},
              platformFamily: {},
              taskDefinition: {},
              deploymentConfiguration: {
                shape: 'S1e'
              },
              taskSets: {
                shape: 'S2o'
              },
              deployments: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    id: {},
                    status: {},
                    taskDefinition: {},
                    desiredCount: {
                      type: 'integer'
                    },
                    pendingCount: {
                      type: 'integer'
                    },
                    runningCount: {
                      type: 'integer'
                    },
                    failedTasks: {
                      type: 'integer'
                    },
                    createdAt: {
                      type: 'timestamp'
                    },
                    updatedAt: {
                      type: 'timestamp'
                    },
                    capacityProviderStrategy: {
                      shape: 'St'
                    },
                    launchType: {},
                    platformVersion: {},
                    platformFamily: {},
                    networkConfiguration: {
                      shape: 'S1n'
                    },
                    rolloutState: {},
                    rolloutStateReason: {},
                    serviceConnectConfiguration: {
                      shape: 'S1u'
                    },
                    serviceConnectResources: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          discoveryName: {},
                          discoveryArn: {}
                        }
                      }
                    },
                    volumeConfigurations: {
                      shape: 'S29'
                    }
                  }
                }
              },
              roleArn: {},
              events: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    id: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    message: {}
                  }
                }
              },
              createdAt: {
                type: 'timestamp'
              },
              placementConstraints: {
                shape: 'S1h'
              },
              placementStrategy: {
                shape: 'S1k'
              },
              networkConfiguration: {
                shape: 'S1n'
              },
              healthCheckGracePeriodSeconds: {
                type: 'integer'
              },
              schedulingStrategy: {},
              deploymentController: {
                shape: 'S1r'
              },
              tags: {
                shape: 'Sb'
              },
              createdBy: {},
              enableECSManagedTags: {
                type: 'boolean'
              },
              propagateTags: {},
              enableExecuteCommand: {
                type: 'boolean'
              }
            }
          },
          S2o: {
            type: 'list',
            member: {
              shape: 'S2p'
            }
          },
          S2p: {
            type: 'structure',
            members: {
              id: {},
              taskSetArn: {},
              serviceArn: {},
              clusterArn: {},
              startedBy: {},
              externalId: {},
              status: {},
              taskDefinition: {},
              computedDesiredCount: {
                type: 'integer'
              },
              pendingCount: {
                type: 'integer'
              },
              runningCount: {
                type: 'integer'
              },
              createdAt: {
                type: 'timestamp'
              },
              updatedAt: {
                type: 'timestamp'
              },
              launchType: {},
              capacityProviderStrategy: {
                shape: 'St'
              },
              platformVersion: {},
              platformFamily: {},
              networkConfiguration: {
                shape: 'S1n'
              },
              loadBalancers: {
                shape: 'S18'
              },
              serviceRegistries: {
                shape: 'S1b'
              },
              scale: {
                shape: 'S2r'
              },
              stabilityStatus: {},
              stabilityStatusAt: {
                type: 'timestamp'
              },
              tags: {
                shape: 'Sb'
              }
            }
          },
          S2r: {
            type: 'structure',
            members: {
              value: {
                type: 'double'
              },
              unit: {}
            }
          },
          S37: {
            type: 'structure',
            members: {
              name: {},
              value: {},
              principalArn: {},
              type: {}
            }
          },
          S3a: {
            type: 'list',
            member: {
              shape: 'S3b'
            }
          },
          S3b: {
            type: 'structure',
            required: ['name'],
            members: {
              name: {},
              value: {},
              targetType: {},
              targetId: {}
            }
          },
          S3n: {
            type: 'structure',
            members: {
              taskDefinitionArn: {},
              containerDefinitions: {
                shape: 'S3o'
              },
              family: {},
              taskRoleArn: {},
              executionRoleArn: {},
              networkMode: {},
              revision: {
                type: 'integer'
              },
              volumes: {
                shape: 'S4u'
              },
              status: {},
              requiresAttributes: {
                type: 'list',
                member: {
                  shape: 'S3b'
                }
              },
              placementConstraints: {
                shape: 'S58'
              },
              compatibilities: {
                shape: 'S5b'
              },
              runtimePlatform: {
                shape: 'S5d'
              },
              requiresCompatibilities: {
                shape: 'S5b'
              },
              cpu: {},
              memory: {},
              inferenceAccelerators: {
                shape: 'S5g'
              },
              pidMode: {},
              ipcMode: {},
              proxyConfiguration: {
                shape: 'S5k'
              },
              registeredAt: {
                type: 'timestamp'
              },
              deregisteredAt: {
                type: 'timestamp'
              },
              registeredBy: {},
              ephemeralStorage: {
                shape: 'S5n'
              }
            }
          },
          S3o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                image: {},
                repositoryCredentials: {
                  type: 'structure',
                  required: ['credentialsParameter'],
                  members: {
                    credentialsParameter: {}
                  }
                },
                cpu: {
                  type: 'integer'
                },
                memory: {
                  type: 'integer'
                },
                memoryReservation: {
                  type: 'integer'
                },
                links: {
                  shape: 'Ss'
                },
                portMappings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      containerPort: {
                        type: 'integer'
                      },
                      hostPort: {
                        type: 'integer'
                      },
                      protocol: {},
                      name: {},
                      appProtocol: {},
                      containerPortRange: {}
                    }
                  }
                },
                essential: {
                  type: 'boolean'
                },
                entryPoint: {
                  shape: 'Ss'
                },
                command: {
                  shape: 'Ss'
                },
                environment: {
                  shape: 'S3v'
                },
                environmentFiles: {
                  shape: 'S3w'
                },
                mountPoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      sourceVolume: {},
                      containerPath: {},
                      readOnly: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                volumesFrom: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      sourceContainer: {},
                      readOnly: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                linuxParameters: {
                  type: 'structure',
                  members: {
                    capabilities: {
                      type: 'structure',
                      members: {
                        add: {
                          shape: 'Ss'
                        },
                        drop: {
                          shape: 'Ss'
                        }
                      }
                    },
                    devices: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['hostPath'],
                        members: {
                          hostPath: {},
                          containerPath: {},
                          permissions: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    },
                    initProcessEnabled: {
                      type: 'boolean'
                    },
                    sharedMemorySize: {
                      type: 'integer'
                    },
                    tmpfs: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['containerPath', 'size'],
                        members: {
                          containerPath: {},
                          size: {
                            type: 'integer'
                          },
                          mountOptions: {
                            shape: 'Ss'
                          }
                        }
                      }
                    },
                    maxSwap: {
                      type: 'integer'
                    },
                    swappiness: {
                      type: 'integer'
                    }
                  }
                },
                secrets: {
                  shape: 'S27'
                },
                dependsOn: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['containerName', 'condition'],
                    members: {
                      containerName: {},
                      condition: {}
                    }
                  }
                },
                startTimeout: {
                  type: 'integer'
                },
                stopTimeout: {
                  type: 'integer'
                },
                hostname: {},
                user: {},
                workingDirectory: {},
                disableNetworking: {
                  type: 'boolean'
                },
                privileged: {
                  type: 'boolean'
                },
                readonlyRootFilesystem: {
                  type: 'boolean'
                },
                dnsServers: {
                  shape: 'Ss'
                },
                dnsSearchDomains: {
                  shape: 'Ss'
                },
                extraHosts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['hostname', 'ipAddress'],
                    members: {
                      hostname: {},
                      ipAddress: {}
                    }
                  }
                },
                dockerSecurityOptions: {
                  shape: 'Ss'
                },
                interactive: {
                  type: 'boolean'
                },
                pseudoTerminal: {
                  type: 'boolean'
                },
                dockerLabels: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                ulimits: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'softLimit', 'hardLimit'],
                    members: {
                      name: {},
                      softLimit: {
                        type: 'integer'
                      },
                      hardLimit: {
                        type: 'integer'
                      }
                    }
                  }
                },
                logConfiguration: {
                  shape: 'S24'
                },
                healthCheck: {
                  type: 'structure',
                  required: ['command'],
                  members: {
                    command: {
                      shape: 'Ss'
                    },
                    interval: {
                      type: 'integer'
                    },
                    timeout: {
                      type: 'integer'
                    },
                    retries: {
                      type: 'integer'
                    },
                    startPeriod: {
                      type: 'integer'
                    }
                  }
                },
                systemControls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      namespace: {},
                      value: {}
                    }
                  }
                },
                resourceRequirements: {
                  shape: 'S4n'
                },
                firelensConfiguration: {
                  type: 'structure',
                  required: ['type'],
                  members: {
                    type: {},
                    options: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                },
                credentialSpecs: {
                  shape: 'Ss'
                }
              }
            }
          },
          S3v: {
            type: 'list',
            member: {
              shape: 'S12'
            }
          },
          S3w: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['value', 'type'],
              members: {
                value: {},
                type: {}
              }
            }
          },
          S4n: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['value', 'type'],
              members: {
                value: {},
                type: {}
              }
            }
          },
          S4u: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                host: {
                  type: 'structure',
                  members: {
                    sourcePath: {}
                  }
                },
                dockerVolumeConfiguration: {
                  type: 'structure',
                  members: {
                    scope: {},
                    autoprovision: {
                      type: 'boolean'
                    },
                    driver: {},
                    driverOpts: {
                      shape: 'S4z'
                    },
                    labels: {
                      shape: 'S4z'
                    }
                  }
                },
                efsVolumeConfiguration: {
                  type: 'structure',
                  required: ['fileSystemId'],
                  members: {
                    fileSystemId: {},
                    rootDirectory: {},
                    transitEncryption: {},
                    transitEncryptionPort: {
                      type: 'integer'
                    },
                    authorizationConfig: {
                      type: 'structure',
                      members: {
                        accessPointId: {},
                        iam: {}
                      }
                    }
                  }
                },
                fsxWindowsFileServerVolumeConfiguration: {
                  type: 'structure',
                  required: ['fileSystemId', 'rootDirectory', 'authorizationConfig'],
                  members: {
                    fileSystemId: {},
                    rootDirectory: {},
                    authorizationConfig: {
                      type: 'structure',
                      required: ['credentialsParameter', 'domain'],
                      members: {
                        credentialsParameter: {},
                        domain: {}
                      }
                    }
                  }
                },
                configuredAtLaunch: {
                  type: 'boolean'
                }
              }
            }
          },
          S4z: {
            type: 'map',
            key: {},
            value: {}
          },
          S58: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                type: {},
                expression: {}
              }
            }
          },
          S5b: {
            type: 'list',
            member: {}
          },
          S5d: {
            type: 'structure',
            members: {
              cpuArchitecture: {},
              operatingSystemFamily: {}
            }
          },
          S5g: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['deviceName', 'deviceType'],
              members: {
                deviceName: {},
                deviceType: {}
              }
            }
          },
          S5k: {
            type: 'structure',
            required: ['containerName'],
            members: {
              type: {},
              containerName: {},
              properties: {
                type: 'list',
                member: {
                  shape: 'S12'
                }
              }
            }
          },
          S5n: {
            type: 'structure',
            required: ['sizeInGiB'],
            members: {
              sizeInGiB: {
                type: 'integer'
              }
            }
          },
          S5o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                arn: {},
                reason: {},
                detail: {}
              }
            }
          },
          S5u: {
            type: 'structure',
            members: {
              containerInstanceArn: {},
              ec2InstanceId: {},
              capacityProviderName: {},
              version: {
                type: 'long'
              },
              versionInfo: {
                shape: 'S5w'
              },
              remainingResources: {
                shape: 'S5x'
              },
              registeredResources: {
                shape: 'S5x'
              },
              status: {},
              statusReason: {},
              agentConnected: {
                type: 'boolean'
              },
              runningTasksCount: {
                type: 'integer'
              },
              pendingTasksCount: {
                type: 'integer'
              },
              agentUpdateStatus: {},
              attributes: {
                shape: 'S3a'
              },
              registeredAt: {
                type: 'timestamp'
              },
              attachments: {
                shape: 'S13'
              },
              tags: {
                shape: 'Sb'
              },
              healthStatus: {
                type: 'structure',
                members: {
                  overallStatus: {},
                  details: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        type: {},
                        status: {},
                        lastUpdated: {
                          type: 'timestamp'
                        },
                        lastStatusChange: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S5w: {
            type: 'structure',
            members: {
              agentVersion: {},
              agentHash: {},
              dockerVersion: {}
            }
          },
          S5x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                type: {},
                doubleValue: {
                  type: 'double'
                },
                longValue: {
                  type: 'long'
                },
                integerValue: {
                  type: 'integer'
                },
                stringSetValue: {
                  shape: 'Ss'
                }
              }
            }
          },
          S6l: {
            type: 'list',
            member: {
              shape: 'S5u'
            }
          },
          S73: {
            type: 'list',
            member: {
              shape: 'S74'
            }
          },
          S74: {
            type: 'structure',
            members: {
              attachments: {
                shape: 'S13'
              },
              attributes: {
                shape: 'S3a'
              },
              availabilityZone: {},
              capacityProviderName: {},
              clusterArn: {},
              connectivity: {},
              connectivityAt: {
                type: 'timestamp'
              },
              containerInstanceArn: {},
              containers: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    containerArn: {},
                    taskArn: {},
                    name: {},
                    image: {},
                    imageDigest: {},
                    runtimeId: {},
                    lastStatus: {},
                    exitCode: {
                      type: 'integer'
                    },
                    reason: {},
                    networkBindings: {
                      shape: 'S78'
                    },
                    networkInterfaces: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          attachmentId: {},
                          privateIpv4Address: {},
                          ipv6Address: {}
                        }
                      }
                    },
                    healthStatus: {},
                    managedAgents: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          lastStartedAt: {
                            type: 'timestamp'
                          },
                          name: {},
                          reason: {},
                          lastStatus: {}
                        }
                      }
                    },
                    cpu: {},
                    memory: {},
                    memoryReservation: {},
                    gpuIds: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              cpu: {},
              createdAt: {
                type: 'timestamp'
              },
              desiredStatus: {},
              enableExecuteCommand: {
                type: 'boolean'
              },
              executionStoppedAt: {
                type: 'timestamp'
              },
              group: {},
              healthStatus: {},
              inferenceAccelerators: {
                shape: 'S5g'
              },
              lastStatus: {},
              launchType: {},
              memory: {},
              overrides: {
                shape: 'S7h'
              },
              platformVersion: {},
              platformFamily: {},
              pullStartedAt: {
                type: 'timestamp'
              },
              pullStoppedAt: {
                type: 'timestamp'
              },
              startedAt: {
                type: 'timestamp'
              },
              startedBy: {},
              stopCode: {},
              stoppedAt: {
                type: 'timestamp'
              },
              stoppedReason: {},
              stoppingAt: {
                type: 'timestamp'
              },
              tags: {
                shape: 'Sb'
              },
              taskArn: {},
              taskDefinitionArn: {},
              version: {
                type: 'long'
              },
              ephemeralStorage: {
                shape: 'S5n'
              }
            }
          },
          S78: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                bindIP: {},
                containerPort: {
                  type: 'integer'
                },
                hostPort: {
                  type: 'integer'
                },
                protocol: {},
                containerPortRange: {},
                hostPortRange: {}
              }
            }
          },
          S7h: {
            type: 'structure',
            members: {
              containerOverrides: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {},
                    command: {
                      shape: 'Ss'
                    },
                    environment: {
                      shape: 'S3v'
                    },
                    environmentFiles: {
                      shape: 'S3w'
                    },
                    cpu: {
                      type: 'integer'
                    },
                    memory: {
                      type: 'integer'
                    },
                    memoryReservation: {
                      type: 'integer'
                    },
                    resourceRequirements: {
                      shape: 'S4n'
                    }
                  }
                }
              },
              cpu: {},
              inferenceAcceleratorOverrides: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    deviceName: {},
                    deviceType: {}
                  }
                }
              },
              executionRoleArn: {},
              memory: {},
              taskRoleArn: {},
              ephemeralStorage: {
                shape: 'S5n'
              }
            }
          },
          S7v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                taskArn: {},
                protectionEnabled: {
                  type: 'boolean'
                },
                expirationDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          S92: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                managedEBSVolume: {
                  type: 'structure',
                  required: ['roleArn'],
                  members: {
                    encrypted: {
                      type: 'boolean'
                    },
                    kmsKeyId: {},
                    volumeType: {},
                    sizeInGiB: {
                      type: 'integer'
                    },
                    snapshotId: {},
                    iops: {
                      type: 'integer'
                    },
                    throughput: {
                      type: 'integer'
                    },
                    tagSpecifications: {
                      shape: 'S2h'
                    },
                    roleArn: {},
                    terminationPolicy: {
                      type: 'structure',
                      required: ['deleteOnTermination'],
                      members: {
                        deleteOnTermination: {
                          type: 'boolean'
                        }
                      }
                    },
                    filesystemType: {}
                  }
                }
              }
            }
          },
          S9c: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['attachmentArn', 'status'],
              members: {
                attachmentArn: {},
                status: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6e7f35cd29145d9ca33c6f477a8845b2cce7a5b5.js.map