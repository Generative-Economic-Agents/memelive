System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-10-06',
          endpointPrefix: 'codedeploy',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'CodeDeploy',
          serviceFullName: 'AWS CodeDeploy',
          serviceId: 'CodeDeploy',
          signatureVersion: 'v4',
          targetPrefix: 'CodeDeploy_20141006',
          uid: 'codedeploy-2014-10-06'
        },
        operations: {
          AddTagsToOnPremisesInstances: {
            input: {
              type: 'structure',
              required: ['tags', 'instanceNames'],
              members: {
                tags: {
                  shape: 'S2'
                },
                instanceNames: {
                  shape: 'S6'
                }
              }
            }
          },
          BatchGetApplicationRevisions: {
            input: {
              type: 'structure',
              required: ['applicationName', 'revisions'],
              members: {
                applicationName: {},
                revisions: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationName: {},
                errorMessage: {},
                revisions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      revisionLocation: {
                        shape: 'Sb'
                      },
                      genericRevisionInfo: {
                        shape: 'Su'
                      }
                    }
                  }
                }
              }
            }
          },
          BatchGetApplications: {
            input: {
              type: 'structure',
              required: ['applicationNames'],
              members: {
                applicationNames: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationsInfo: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                }
              }
            }
          },
          BatchGetDeploymentGroups: {
            input: {
              type: 'structure',
              required: ['applicationName', 'deploymentGroupNames'],
              members: {
                applicationName: {},
                deploymentGroupNames: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentGroupsInfo: {
                  type: 'list',
                  member: {
                    shape: 'S1b'
                  }
                },
                errorMessage: {}
              }
            }
          },
          BatchGetDeploymentInstances: {
            input: {
              type: 'structure',
              required: ['deploymentId', 'instanceIds'],
              members: {
                deploymentId: {},
                instanceIds: {
                  shape: 'S32'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                instancesSummary: {
                  type: 'list',
                  member: {
                    shape: 'S36'
                  }
                },
                errorMessage: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This operation is deprecated, use BatchGetDeploymentTargets instead.'
          },
          BatchGetDeploymentTargets: {
            input: {
              type: 'structure',
              required: ['deploymentId', 'targetIds'],
              members: {
                deploymentId: {},
                targetIds: {
                  shape: 'S3j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentTargets: {
                  type: 'list',
                  member: {
                    shape: 'S3n'
                  }
                }
              }
            }
          },
          BatchGetDeployments: {
            input: {
              type: 'structure',
              required: ['deploymentIds'],
              members: {
                deploymentIds: {
                  shape: 'S49'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentsInfo: {
                  type: 'list',
                  member: {
                    shape: 'S4c'
                  }
                }
              }
            }
          },
          BatchGetOnPremisesInstances: {
            input: {
              type: 'structure',
              required: ['instanceNames'],
              members: {
                instanceNames: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                instanceInfos: {
                  type: 'list',
                  member: {
                    shape: 'S4t'
                  }
                }
              }
            }
          },
          ContinueDeployment: {
            input: {
              type: 'structure',
              members: {
                deploymentId: {},
                deploymentWaitType: {}
              }
            }
          },
          CreateApplication: {
            input: {
              type: 'structure',
              required: ['applicationName'],
              members: {
                applicationName: {},
                computePlatform: {},
                tags: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationId: {}
              }
            }
          },
          CreateDeployment: {
            input: {
              type: 'structure',
              required: ['applicationName'],
              members: {
                applicationName: {},
                deploymentGroupName: {},
                revision: {
                  shape: 'Sb'
                },
                deploymentConfigName: {},
                description: {},
                ignoreApplicationStopFailures: {
                  type: 'boolean'
                },
                targetInstances: {
                  shape: 'S4j'
                },
                autoRollbackConfiguration: {
                  shape: 'S1z'
                },
                updateOutdatedInstancesOnly: {
                  type: 'boolean'
                },
                fileExistsBehavior: {},
                overrideAlarmConfiguration: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentId: {}
              }
            }
          },
          CreateDeploymentConfig: {
            input: {
              type: 'structure',
              required: ['deploymentConfigName'],
              members: {
                deploymentConfigName: {},
                minimumHealthyHosts: {
                  shape: 'S54'
                },
                trafficRoutingConfig: {
                  shape: 'S57'
                },
                computePlatform: {},
                zonalConfig: {
                  shape: 'S5d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentConfigId: {}
              }
            }
          },
          CreateDeploymentGroup: {
            input: {
              type: 'structure',
              required: ['applicationName', 'deploymentGroupName', 'serviceRoleArn'],
              members: {
                applicationName: {},
                deploymentGroupName: {},
                deploymentConfigName: {},
                ec2TagFilters: {
                  shape: 'S1e'
                },
                onPremisesInstanceTagFilters: {
                  shape: 'S1h'
                },
                autoScalingGroups: {
                  shape: 'S4k'
                },
                serviceRoleArn: {},
                triggerConfigurations: {
                  shape: 'S1p'
                },
                alarmConfiguration: {
                  shape: 'S1v'
                },
                autoRollbackConfiguration: {
                  shape: 'S1z'
                },
                outdatedInstancesStrategy: {},
                deploymentStyle: {
                  shape: 'S22'
                },
                blueGreenDeploymentConfiguration: {
                  shape: 'S26'
                },
                loadBalancerInfo: {
                  shape: 'S2e'
                },
                ec2TagSet: {
                  shape: 'S2t'
                },
                ecsServices: {
                  shape: 'S2x'
                },
                onPremisesTagSet: {
                  shape: 'S2v'
                },
                tags: {
                  shape: 'S2'
                },
                terminationHookEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentGroupId: {}
              }
            }
          },
          DeleteApplication: {
            input: {
              type: 'structure',
              required: ['applicationName'],
              members: {
                applicationName: {}
              }
            }
          },
          DeleteDeploymentConfig: {
            input: {
              type: 'structure',
              required: ['deploymentConfigName'],
              members: {
                deploymentConfigName: {}
              }
            }
          },
          DeleteDeploymentGroup: {
            input: {
              type: 'structure',
              required: ['applicationName', 'deploymentGroupName'],
              members: {
                applicationName: {},
                deploymentGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                hooksNotCleanedUp: {
                  shape: 'S1k'
                }
              }
            }
          },
          DeleteGitHubAccountToken: {
            input: {
              type: 'structure',
              members: {
                tokenName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tokenName: {}
              }
            }
          },
          DeleteResourcesByExternalId: {
            input: {
              type: 'structure',
              members: {
                externalId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterOnPremisesInstance: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {}
              }
            }
          },
          GetApplication: {
            input: {
              type: 'structure',
              required: ['applicationName'],
              members: {
                applicationName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                application: {
                  shape: 'S13'
                }
              }
            }
          },
          GetApplicationRevision: {
            input: {
              type: 'structure',
              required: ['applicationName', 'revision'],
              members: {
                applicationName: {},
                revision: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationName: {},
                revision: {
                  shape: 'Sb'
                },
                revisionInfo: {
                  shape: 'Su'
                }
              }
            }
          },
          GetDeployment: {
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentInfo: {
                  shape: 'S4c'
                }
              }
            }
          },
          GetDeploymentConfig: {
            input: {
              type: 'structure',
              required: ['deploymentConfigName'],
              members: {
                deploymentConfigName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentConfigInfo: {
                  type: 'structure',
                  members: {
                    deploymentConfigId: {},
                    deploymentConfigName: {},
                    minimumHealthyHosts: {
                      shape: 'S54'
                    },
                    createTime: {
                      type: 'timestamp'
                    },
                    computePlatform: {},
                    trafficRoutingConfig: {
                      shape: 'S57'
                    },
                    zonalConfig: {
                      shape: 'S5d'
                    }
                  }
                }
              }
            }
          },
          GetDeploymentGroup: {
            input: {
              type: 'structure',
              required: ['applicationName', 'deploymentGroupName'],
              members: {
                applicationName: {},
                deploymentGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentGroupInfo: {
                  shape: 'S1b'
                }
              }
            }
          },
          GetDeploymentInstance: {
            input: {
              type: 'structure',
              required: ['deploymentId', 'instanceId'],
              members: {
                deploymentId: {},
                instanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                instanceSummary: {
                  shape: 'S36'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This operation is deprecated, use GetDeploymentTarget instead.'
          },
          GetDeploymentTarget: {
            input: {
              type: 'structure',
              required: ['deploymentId', 'targetId'],
              members: {
                deploymentId: {},
                targetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentTarget: {
                  shape: 'S3n'
                }
              }
            }
          },
          GetOnPremisesInstance: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                instanceInfo: {
                  shape: 'S4t'
                }
              }
            }
          },
          ListApplicationRevisions: {
            input: {
              type: 'structure',
              required: ['applicationName'],
              members: {
                applicationName: {},
                sortBy: {},
                sortOrder: {},
                s3Bucket: {},
                s3KeyPrefix: {},
                deployed: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                revisions: {
                  shape: 'Sa'
                },
                nextToken: {}
              }
            }
          },
          ListApplications: {
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                applications: {
                  shape: 'S10'
                },
                nextToken: {}
              }
            }
          },
          ListDeploymentConfigs: {
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentConfigsList: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            }
          },
          ListDeploymentGroups: {
            input: {
              type: 'structure',
              required: ['applicationName'],
              members: {
                applicationName: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationName: {},
                deploymentGroups: {
                  shape: 'Sw'
                },
                nextToken: {}
              }
            }
          },
          ListDeploymentInstances: {
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {},
                nextToken: {},
                instanceStatusFilter: {
                  type: 'list',
                  member: {
                    shape: 'S37'
                  }
                },
                instanceTypeFilter: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                instancesList: {
                  shape: 'S32'
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This operation is deprecated, use ListDeploymentTargets instead.'
          },
          ListDeploymentTargets: {
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {},
                nextToken: {},
                targetFilters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                targetIds: {
                  shape: 'S3j'
                },
                nextToken: {}
              }
            }
          },
          ListDeployments: {
            input: {
              type: 'structure',
              members: {
                applicationName: {},
                deploymentGroupName: {},
                externalId: {},
                includeOnlyStatuses: {
                  type: 'list',
                  member: {}
                },
                createTimeRange: {
                  type: 'structure',
                  members: {
                    start: {
                      type: 'timestamp'
                    },
                    end: {
                      type: 'timestamp'
                    }
                  }
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deployments: {
                  shape: 'S49'
                },
                nextToken: {}
              }
            }
          },
          ListGitHubAccountTokenNames: {
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tokenNameList: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            }
          },
          ListOnPremisesInstances: {
            input: {
              type: 'structure',
              members: {
                registrationStatus: {},
                tagFilters: {
                  shape: 'S1h'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                instanceNames: {
                  shape: 'S6'
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S2'
                },
                NextToken: {}
              }
            }
          },
          PutLifecycleEventHookExecutionStatus: {
            input: {
              type: 'structure',
              members: {
                deploymentId: {},
                lifecycleEventHookExecutionId: {},
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecycleEventHookExecutionId: {}
              }
            }
          },
          RegisterApplicationRevision: {
            input: {
              type: 'structure',
              required: ['applicationName', 'revision'],
              members: {
                applicationName: {},
                description: {},
                revision: {
                  shape: 'Sb'
                }
              }
            }
          },
          RegisterOnPremisesInstance: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {},
                iamSessionArn: {},
                iamUserArn: {}
              }
            }
          },
          RemoveTagsFromOnPremisesInstances: {
            input: {
              type: 'structure',
              required: ['tags', 'instanceNames'],
              members: {
                tags: {
                  shape: 'S2'
                },
                instanceNames: {
                  shape: 'S6'
                }
              }
            }
          },
          SkipWaitTimeForInstanceTermination: {
            input: {
              type: 'structure',
              members: {
                deploymentId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This operation is deprecated, use ContinueDeployment with DeploymentWaitType instead.'
          },
          StopDeployment: {
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {},
                autoRollbackEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                statusMessage: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S2'
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
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateApplication: {
            input: {
              type: 'structure',
              members: {
                applicationName: {},
                newApplicationName: {}
              }
            }
          },
          UpdateDeploymentGroup: {
            input: {
              type: 'structure',
              required: ['applicationName', 'currentDeploymentGroupName'],
              members: {
                applicationName: {},
                currentDeploymentGroupName: {},
                newDeploymentGroupName: {},
                deploymentConfigName: {},
                ec2TagFilters: {
                  shape: 'S1e'
                },
                onPremisesInstanceTagFilters: {
                  shape: 'S1h'
                },
                autoScalingGroups: {
                  shape: 'S4k'
                },
                serviceRoleArn: {},
                triggerConfigurations: {
                  shape: 'S1p'
                },
                alarmConfiguration: {
                  shape: 'S1v'
                },
                autoRollbackConfiguration: {
                  shape: 'S1z'
                },
                outdatedInstancesStrategy: {},
                deploymentStyle: {
                  shape: 'S22'
                },
                blueGreenDeploymentConfiguration: {
                  shape: 'S26'
                },
                loadBalancerInfo: {
                  shape: 'S2e'
                },
                ec2TagSet: {
                  shape: 'S2t'
                },
                ecsServices: {
                  shape: 'S2x'
                },
                onPremisesTagSet: {
                  shape: 'S2v'
                },
                terminationHookEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                hooksNotCleanedUp: {
                  shape: 'S1k'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S6: {
            type: 'list',
            member: {}
          },
          Sa: {
            type: 'list',
            member: {
              shape: 'Sb'
            }
          },
          Sb: {
            type: 'structure',
            members: {
              revisionType: {},
              s3Location: {
                type: 'structure',
                members: {
                  bucket: {},
                  key: {},
                  bundleType: {},
                  version: {},
                  eTag: {}
                }
              },
              gitHubLocation: {
                type: 'structure',
                members: {
                  repository: {},
                  commitId: {}
                }
              },
              string: {
                type: 'structure',
                members: {
                  content: {},
                  sha256: {}
                },
                deprecated: true,
                deprecatedMessage: 'RawString and String revision type are deprecated, use AppSpecContent type instead.'
              },
              appSpecContent: {
                type: 'structure',
                members: {
                  content: {},
                  sha256: {}
                }
              }
            }
          },
          Su: {
            type: 'structure',
            members: {
              description: {},
              deploymentGroups: {
                shape: 'Sw'
              },
              firstUsedTime: {
                type: 'timestamp'
              },
              lastUsedTime: {
                type: 'timestamp'
              },
              registerTime: {
                type: 'timestamp'
              }
            }
          },
          Sw: {
            type: 'list',
            member: {}
          },
          S10: {
            type: 'list',
            member: {}
          },
          S13: {
            type: 'structure',
            members: {
              applicationId: {},
              applicationName: {},
              createTime: {
                type: 'timestamp'
              },
              linkedToGitHub: {
                type: 'boolean'
              },
              gitHubAccountName: {},
              computePlatform: {}
            }
          },
          S1b: {
            type: 'structure',
            members: {
              applicationName: {},
              deploymentGroupId: {},
              deploymentGroupName: {},
              deploymentConfigName: {},
              ec2TagFilters: {
                shape: 'S1e'
              },
              onPremisesInstanceTagFilters: {
                shape: 'S1h'
              },
              autoScalingGroups: {
                shape: 'S1k'
              },
              serviceRoleArn: {},
              targetRevision: {
                shape: 'Sb'
              },
              triggerConfigurations: {
                shape: 'S1p'
              },
              alarmConfiguration: {
                shape: 'S1v'
              },
              autoRollbackConfiguration: {
                shape: 'S1z'
              },
              deploymentStyle: {
                shape: 'S22'
              },
              outdatedInstancesStrategy: {},
              blueGreenDeploymentConfiguration: {
                shape: 'S26'
              },
              loadBalancerInfo: {
                shape: 'S2e'
              },
              lastSuccessfulDeployment: {
                shape: 'S2q'
              },
              lastAttemptedDeployment: {
                shape: 'S2q'
              },
              ec2TagSet: {
                shape: 'S2t'
              },
              onPremisesTagSet: {
                shape: 'S2v'
              },
              computePlatform: {},
              ecsServices: {
                shape: 'S2x'
              },
              terminationHookEnabled: {
                type: 'boolean'
              }
            }
          },
          S1e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {},
                Type: {}
              }
            }
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {},
                Type: {}
              }
            }
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                hook: {},
                terminationHook: {}
              }
            }
          },
          S1p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                triggerName: {},
                triggerTargetArn: {},
                triggerEvents: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1v: {
            type: 'structure',
            members: {
              enabled: {
                type: 'boolean'
              },
              ignorePollAlarmFailure: {
                type: 'boolean'
              },
              alarms: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {}
                  }
                }
              }
            }
          },
          S1z: {
            type: 'structure',
            members: {
              enabled: {
                type: 'boolean'
              },
              events: {
                type: 'list',
                member: {}
              }
            }
          },
          S22: {
            type: 'structure',
            members: {
              deploymentType: {},
              deploymentOption: {}
            }
          },
          S26: {
            type: 'structure',
            members: {
              terminateBlueInstancesOnDeploymentSuccess: {
                type: 'structure',
                members: {
                  action: {},
                  terminationWaitTimeInMinutes: {
                    type: 'integer'
                  }
                }
              },
              deploymentReadyOption: {
                type: 'structure',
                members: {
                  actionOnTimeout: {},
                  waitTimeInMinutes: {
                    type: 'integer'
                  }
                }
              },
              greenFleetProvisioningOption: {
                type: 'structure',
                members: {
                  action: {}
                }
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              elbInfoList: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {}
                  }
                }
              },
              targetGroupInfoList: {
                shape: 'S2i'
              },
              targetGroupPairInfoList: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    targetGroups: {
                      shape: 'S2i'
                    },
                    prodTrafficRoute: {
                      shape: 'S2n'
                    },
                    testTrafficRoute: {
                      shape: 'S2n'
                    }
                  }
                }
              }
            }
          },
          S2i: {
            type: 'list',
            member: {
              shape: 'S2j'
            }
          },
          S2j: {
            type: 'structure',
            members: {
              name: {}
            }
          },
          S2n: {
            type: 'structure',
            members: {
              listenerArns: {
                type: 'list',
                member: {}
              }
            }
          },
          S2q: {
            type: 'structure',
            members: {
              deploymentId: {},
              status: {},
              endTime: {
                type: 'timestamp'
              },
              createTime: {
                type: 'timestamp'
              }
            }
          },
          S2t: {
            type: 'structure',
            members: {
              ec2TagSetList: {
                type: 'list',
                member: {
                  shape: 'S1e'
                }
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              onPremisesTagSetList: {
                type: 'list',
                member: {
                  shape: 'S1h'
                }
              }
            }
          },
          S2x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                serviceName: {},
                clusterName: {}
              }
            }
          },
          S32: {
            type: 'list',
            member: {}
          },
          S36: {
            type: 'structure',
            members: {
              deploymentId: {},
              instanceId: {},
              status: {
                shape: 'S37'
              },
              lastUpdatedAt: {
                type: 'timestamp'
              },
              lifecycleEvents: {
                shape: 'S38'
              },
              instanceType: {}
            },
            deprecated: true,
            deprecatedMessage: 'InstanceSummary is deprecated, use DeploymentTarget instead.'
          },
          S37: {
            type: 'string',
            deprecated: true,
            deprecatedMessage: 'InstanceStatus is deprecated, use TargetStatus instead.'
          },
          S38: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                lifecycleEventName: {},
                diagnostics: {
                  type: 'structure',
                  members: {
                    errorCode: {},
                    scriptName: {},
                    message: {},
                    logTail: {}
                  }
                },
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                status: {}
              }
            }
          },
          S3j: {
            type: 'list',
            member: {}
          },
          S3n: {
            type: 'structure',
            members: {
              deploymentTargetType: {},
              instanceTarget: {
                type: 'structure',
                members: {
                  deploymentId: {},
                  targetId: {},
                  targetArn: {},
                  status: {},
                  lastUpdatedAt: {
                    type: 'timestamp'
                  },
                  lifecycleEvents: {
                    shape: 'S38'
                  },
                  instanceLabel: {}
                }
              },
              lambdaTarget: {
                type: 'structure',
                members: {
                  deploymentId: {},
                  targetId: {},
                  targetArn: {},
                  status: {},
                  lastUpdatedAt: {
                    type: 'timestamp'
                  },
                  lifecycleEvents: {
                    shape: 'S38'
                  },
                  lambdaFunctionInfo: {
                    type: 'structure',
                    members: {
                      functionName: {},
                      functionAlias: {},
                      currentVersion: {},
                      targetVersion: {},
                      targetVersionWeight: {
                        type: 'double'
                      }
                    }
                  }
                }
              },
              ecsTarget: {
                type: 'structure',
                members: {
                  deploymentId: {},
                  targetId: {},
                  targetArn: {},
                  lastUpdatedAt: {
                    type: 'timestamp'
                  },
                  lifecycleEvents: {
                    shape: 'S38'
                  },
                  status: {},
                  taskSetsInfo: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        identifer: {},
                        desiredCount: {
                          type: 'long'
                        },
                        pendingCount: {
                          type: 'long'
                        },
                        runningCount: {
                          type: 'long'
                        },
                        status: {},
                        trafficWeight: {
                          type: 'double'
                        },
                        targetGroup: {
                          shape: 'S2j'
                        },
                        taskSetLabel: {}
                      }
                    }
                  }
                }
              },
              cloudFormationTarget: {
                type: 'structure',
                members: {
                  deploymentId: {},
                  targetId: {},
                  lastUpdatedAt: {
                    type: 'timestamp'
                  },
                  lifecycleEvents: {
                    shape: 'S38'
                  },
                  status: {},
                  resourceType: {},
                  targetVersionWeight: {
                    type: 'double'
                  }
                }
              }
            }
          },
          S49: {
            type: 'list',
            member: {}
          },
          S4c: {
            type: 'structure',
            members: {
              applicationName: {},
              deploymentGroupName: {},
              deploymentConfigName: {},
              deploymentId: {},
              previousRevision: {
                shape: 'Sb'
              },
              revision: {
                shape: 'Sb'
              },
              status: {},
              errorInformation: {
                type: 'structure',
                members: {
                  code: {},
                  message: {}
                }
              },
              createTime: {
                type: 'timestamp'
              },
              startTime: {
                type: 'timestamp'
              },
              completeTime: {
                type: 'timestamp'
              },
              deploymentOverview: {
                type: 'structure',
                members: {
                  Pending: {
                    type: 'long'
                  },
                  InProgress: {
                    type: 'long'
                  },
                  Succeeded: {
                    type: 'long'
                  },
                  Failed: {
                    type: 'long'
                  },
                  Skipped: {
                    type: 'long'
                  },
                  Ready: {
                    type: 'long'
                  }
                }
              },
              description: {},
              creator: {},
              ignoreApplicationStopFailures: {
                type: 'boolean'
              },
              autoRollbackConfiguration: {
                shape: 'S1z'
              },
              updateOutdatedInstancesOnly: {
                type: 'boolean'
              },
              rollbackInfo: {
                type: 'structure',
                members: {
                  rollbackDeploymentId: {},
                  rollbackTriggeringDeploymentId: {},
                  rollbackMessage: {}
                }
              },
              deploymentStyle: {
                shape: 'S22'
              },
              targetInstances: {
                shape: 'S4j'
              },
              instanceTerminationWaitTimeStarted: {
                type: 'boolean'
              },
              blueGreenDeploymentConfiguration: {
                shape: 'S26'
              },
              loadBalancerInfo: {
                shape: 'S2e'
              },
              additionalDeploymentStatusInfo: {
                type: 'string',
                deprecated: true,
                deprecatedMessage: 'AdditionalDeploymentStatusInfo is deprecated, use DeploymentStatusMessageList instead.'
              },
              fileExistsBehavior: {},
              deploymentStatusMessages: {
                type: 'list',
                member: {}
              },
              computePlatform: {},
              externalId: {},
              relatedDeployments: {
                type: 'structure',
                members: {
                  autoUpdateOutdatedInstancesRootDeploymentId: {},
                  autoUpdateOutdatedInstancesDeploymentIds: {
                    shape: 'S49'
                  }
                }
              },
              overrideAlarmConfiguration: {
                shape: 'S1v'
              }
            }
          },
          S4j: {
            type: 'structure',
            members: {
              tagFilters: {
                shape: 'S1e'
              },
              autoScalingGroups: {
                shape: 'S4k'
              },
              ec2TagSet: {
                shape: 'S2t'
              }
            }
          },
          S4k: {
            type: 'list',
            member: {}
          },
          S4t: {
            type: 'structure',
            members: {
              instanceName: {},
              iamSessionArn: {},
              iamUserArn: {},
              instanceArn: {},
              registerTime: {
                type: 'timestamp'
              },
              deregisterTime: {
                type: 'timestamp'
              },
              tags: {
                shape: 'S2'
              }
            }
          },
          S54: {
            type: 'structure',
            members: {
              type: {},
              value: {
                type: 'integer'
              }
            }
          },
          S57: {
            type: 'structure',
            members: {
              type: {},
              timeBasedCanary: {
                type: 'structure',
                members: {
                  canaryPercentage: {
                    type: 'integer'
                  },
                  canaryInterval: {
                    type: 'integer'
                  }
                }
              },
              timeBasedLinear: {
                type: 'structure',
                members: {
                  linearPercentage: {
                    type: 'integer'
                  },
                  linearInterval: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S5d: {
            type: 'structure',
            members: {
              firstZoneMonitorDurationInSeconds: {
                type: 'long'
              },
              monitorDurationInSeconds: {
                type: 'long'
              },
              minimumHealthyHostsPerZone: {
                type: 'structure',
                members: {
                  type: {},
                  value: {
                    type: 'integer'
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
//# sourceMappingURL=efff3c60cb8ca8b518ba77735599c393ea1d77ae.js.map