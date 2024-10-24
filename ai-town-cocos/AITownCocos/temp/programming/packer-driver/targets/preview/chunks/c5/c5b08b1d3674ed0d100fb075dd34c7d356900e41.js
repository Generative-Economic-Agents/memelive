System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-02-26',
          endpointPrefix: 'drs',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'drs',
          serviceFullName: 'Elastic Disaster Recovery Service',
          serviceId: 'drs',
          signatureVersion: 'v4',
          signingName: 'drs',
          uid: 'drs-2020-02-26'
        },
        operations: {
          AssociateSourceNetworkStack: {
            http: {
              requestUri: '/AssociateSourceNetworkStack',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['cfnStackName', 'sourceNetworkID'],
              members: {
                cfnStackName: {
                  shape: 'S2'
                },
                sourceNetworkID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S5'
                }
              }
            }
          },
          CreateExtendedSourceServer: {
            http: {
              requestUri: '/CreateExtendedSourceServer',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['sourceServerArn'],
              members: {
                sourceServerArn: {},
                tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceServer: {
                  shape: 'S1b'
                }
              }
            }
          },
          CreateLaunchConfigurationTemplate: {
            http: {
              requestUri: '/CreateLaunchConfigurationTemplate',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                copyPrivateIp: {
                  type: 'boolean'
                },
                copyTags: {
                  type: 'boolean'
                },
                exportBucketArn: {},
                launchDisposition: {},
                launchIntoSourceInstance: {
                  type: 'boolean'
                },
                licensing: {
                  shape: 'S2k'
                },
                postLaunchEnabled: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'S14'
                },
                targetInstanceTypeRightSizingMethod: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                launchConfigurationTemplate: {
                  shape: 'S2n'
                }
              }
            }
          },
          CreateReplicationConfigurationTemplate: {
            http: {
              requestUri: '/CreateReplicationConfigurationTemplate',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['associateDefaultSecurityGroup', 'bandwidthThrottling', 'createPublicIP', 'dataPlaneRouting', 'defaultLargeStagingDiskType', 'ebsEncryption', 'pitPolicy', 'replicationServerInstanceType', 'replicationServersSecurityGroupsIDs', 'stagingAreaSubnetId', 'stagingAreaTags', 'useDedicatedReplicationServer'],
              members: {
                associateDefaultSecurityGroup: {
                  type: 'boolean'
                },
                autoReplicateNewDisks: {
                  type: 'boolean'
                },
                bandwidthThrottling: {
                  type: 'long'
                },
                createPublicIP: {
                  type: 'boolean'
                },
                dataPlaneRouting: {},
                defaultLargeStagingDiskType: {},
                ebsEncryption: {},
                ebsEncryptionKeyArn: {},
                pitPolicy: {
                  shape: 'S2t'
                },
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                  shape: 'S2x'
                },
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                  shape: 'S14'
                },
                tags: {
                  shape: 'S14'
                },
                useDedicatedReplicationServer: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S30'
            }
          },
          CreateSourceNetwork: {
            http: {
              requestUri: '/CreateSourceNetwork',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['originAccountID', 'originRegion', 'vpcID'],
              members: {
                originAccountID: {},
                originRegion: {},
                tags: {
                  shape: 'S14'
                },
                vpcID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceNetworkID: {}
              }
            }
          },
          DeleteJob: {
            http: {
              requestUri: '/DeleteJob',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['jobID'],
              members: {
                jobID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteLaunchAction: {
            http: {
              requestUri: '/DeleteLaunchAction',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['actionId', 'resourceId'],
              members: {
                actionId: {},
                resourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLaunchConfigurationTemplate: {
            http: {
              requestUri: '/DeleteLaunchConfigurationTemplate',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['launchConfigurationTemplateID'],
              members: {
                launchConfigurationTemplateID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteRecoveryInstance: {
            http: {
              requestUri: '/DeleteRecoveryInstance',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recoveryInstanceID'],
              members: {
                recoveryInstanceID: {}
              }
            }
          },
          DeleteReplicationConfigurationTemplate: {
            http: {
              requestUri: '/DeleteReplicationConfigurationTemplate',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['replicationConfigurationTemplateID'],
              members: {
                replicationConfigurationTemplateID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSourceNetwork: {
            http: {
              requestUri: '/DeleteSourceNetwork',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['sourceNetworkID'],
              members: {
                sourceNetworkID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSourceServer: {
            http: {
              requestUri: '/DeleteSourceServer',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                sourceServerID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeJobLogItems: {
            http: {
              requestUri: '/DescribeJobLogItems',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobID'],
              members: {
                jobID: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      event: {},
                      eventData: {
                        type: 'structure',
                        members: {
                          conversionProperties: {
                            type: 'structure',
                            members: {
                              dataTimestamp: {},
                              forceUefi: {
                                type: 'boolean'
                              },
                              rootVolumeName: {},
                              volumeToConversionMap: {
                                type: 'map',
                                key: {},
                                value: {
                                  type: 'map',
                                  key: {},
                                  value: {}
                                }
                              },
                              volumeToProductCodes: {
                                type: 'map',
                                key: {},
                                value: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      productCodeId: {},
                                      productCodeMode: {}
                                    }
                                  }
                                }
                              },
                              volumeToVolumeSize: {
                                type: 'map',
                                key: {},
                                value: {
                                  type: 'long'
                                }
                              }
                            }
                          },
                          conversionServerID: {},
                          eventResourceData: {
                            type: 'structure',
                            members: {
                              sourceNetworkData: {
                                type: 'structure',
                                members: {
                                  sourceNetworkID: {},
                                  sourceVpc: {},
                                  stackName: {},
                                  targetVpc: {}
                                }
                              }
                            },
                            union: true
                          },
                          rawError: {},
                          sourceServerID: {},
                          targetInstanceID: {}
                        }
                      },
                      logDateTime: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeJobs: {
            http: {
              requestUri: '/DescribeJobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    fromDate: {},
                    jobIDs: {
                      type: 'list',
                      member: {}
                    },
                    toDate: {}
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
                items: {
                  type: 'list',
                  member: {
                    shape: 'S5'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeLaunchConfigurationTemplates: {
            http: {
              requestUri: '/DescribeLaunchConfigurationTemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                launchConfigurationTemplateIDs: {
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
                items: {
                  type: 'list',
                  member: {
                    shape: 'S2n'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeRecoveryInstances: {
            http: {
              requestUri: '/DescribeRecoveryInstances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    recoveryInstanceIDs: {
                      type: 'list',
                      member: {}
                    },
                    sourceServerIDs: {
                      type: 'list',
                      member: {}
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
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      agentVersion: {},
                      arn: {},
                      dataReplicationInfo: {
                        type: 'structure',
                        members: {
                          dataReplicationError: {
                            type: 'structure',
                            members: {
                              error: {},
                              rawError: {}
                            }
                          },
                          dataReplicationInitiation: {
                            type: 'structure',
                            members: {
                              startDateTime: {},
                              steps: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    name: {},
                                    status: {}
                                  }
                                }
                              }
                            }
                          },
                          dataReplicationState: {},
                          etaDateTime: {},
                          lagDuration: {},
                          replicatedDisks: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                backloggedStorageBytes: {
                                  type: 'long'
                                },
                                deviceName: {},
                                replicatedStorageBytes: {
                                  type: 'long'
                                },
                                rescannedStorageBytes: {
                                  type: 'long'
                                },
                                totalStorageBytes: {
                                  type: 'long'
                                }
                              }
                            }
                          },
                          stagingAvailabilityZone: {},
                          stagingOutpostArn: {}
                        }
                      },
                      ec2InstanceID: {},
                      ec2InstanceState: {},
                      failback: {
                        type: 'structure',
                        members: {
                          agentLastSeenByServiceDateTime: {},
                          elapsedReplicationDuration: {},
                          failbackClientID: {},
                          failbackClientLastSeenByServiceDateTime: {},
                          failbackInitiationTime: {},
                          failbackJobID: {},
                          failbackLaunchType: {},
                          failbackToOriginalServer: {
                            type: 'boolean'
                          },
                          firstByteDateTime: {},
                          state: {}
                        }
                      },
                      isDrill: {
                        type: 'boolean'
                      },
                      jobID: {},
                      originAvailabilityZone: {},
                      originEnvironment: {},
                      pointInTimeSnapshotDateTime: {},
                      recoveryInstanceID: {},
                      recoveryInstanceProperties: {
                        type: 'structure',
                        members: {
                          cpus: {
                            shape: 'S25'
                          },
                          disks: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                bytes: {
                                  type: 'long'
                                },
                                ebsVolumeID: {},
                                internalDeviceName: {}
                              }
                            }
                          },
                          identificationHints: {
                            shape: 'S29'
                          },
                          lastUpdatedDateTime: {},
                          networkInterfaces: {
                            shape: 'S2b'
                          },
                          os: {
                            shape: 'S2e'
                          },
                          ramBytes: {
                            type: 'long'
                          }
                        }
                      },
                      sourceOutpostArn: {},
                      sourceServerID: {},
                      tags: {
                        shape: 'S14'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeRecoverySnapshots: {
            http: {
              requestUri: '/DescribeRecoverySnapshots',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    fromDateTime: {},
                    toDateTime: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                order: {},
                sourceServerID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['expectedTimestamp', 'snapshotID', 'sourceServerID'],
                    members: {
                      ebsSnapshots: {
                        type: 'list',
                        member: {}
                      },
                      expectedTimestamp: {},
                      snapshotID: {},
                      sourceServerID: {},
                      timestamp: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeReplicationConfigurationTemplates: {
            http: {
              requestUri: '/DescribeReplicationConfigurationTemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                replicationConfigurationTemplateIDs: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    shape: 'S30'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeSourceNetworks: {
            http: {
              requestUri: '/DescribeSourceNetworks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    originAccountID: {},
                    originRegion: {},
                    sourceNetworkIDs: {
                      type: 'list',
                      member: {}
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
                items: {
                  type: 'list',
                  member: {
                    shape: 'S5k'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeSourceServers: {
            http: {
              requestUri: '/DescribeSourceServers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    hardwareId: {},
                    sourceServerIDs: {
                      type: 'list',
                      member: {}
                    },
                    stagingAccountIDs: {
                      type: 'list',
                      member: {}
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
                items: {
                  type: 'list',
                  member: {
                    shape: 'S1b'
                  }
                },
                nextToken: {}
              }
            }
          },
          DisconnectRecoveryInstance: {
            http: {
              requestUri: '/DisconnectRecoveryInstance',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recoveryInstanceID'],
              members: {
                recoveryInstanceID: {}
              }
            }
          },
          DisconnectSourceServer: {
            http: {
              requestUri: '/DisconnectSourceServer',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                sourceServerID: {}
              }
            },
            output: {
              shape: 'S1b'
            }
          },
          ExportSourceNetworkCfnTemplate: {
            http: {
              requestUri: '/ExportSourceNetworkCfnTemplate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceNetworkID'],
              members: {
                sourceNetworkID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                s3DestinationUrl: {}
              }
            }
          },
          GetFailbackReplicationConfiguration: {
            http: {
              requestUri: '/GetFailbackReplicationConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recoveryInstanceID'],
              members: {
                recoveryInstanceID: {}
              }
            },
            output: {
              type: 'structure',
              required: ['recoveryInstanceID'],
              members: {
                bandwidthThrottling: {
                  type: 'long'
                },
                name: {},
                recoveryInstanceID: {},
                usePrivateIP: {
                  type: 'boolean'
                }
              }
            }
          },
          GetLaunchConfiguration: {
            http: {
              requestUri: '/GetLaunchConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                sourceServerID: {}
              }
            },
            output: {
              shape: 'S63'
            }
          },
          GetReplicationConfiguration: {
            http: {
              requestUri: '/GetReplicationConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                sourceServerID: {}
              }
            },
            output: {
              shape: 'S67'
            }
          },
          InitializeService: {
            http: {
              requestUri: '/InitializeService',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListExtensibleSourceServers: {
            http: {
              requestUri: '/ListExtensibleSourceServers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['stagingAccountID'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                stagingAccountID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      hostname: {},
                      tags: {
                        shape: 'S14'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLaunchActions: {
            http: {
              requestUri: '/ListLaunchActions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceId'],
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    actionIds: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    shape: 'Sj'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListStagingAccounts: {
            http: {
              method: 'GET',
              requestUri: '/ListStagingAccounts',
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
              members: {
                accounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountID: {}
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
              members: {
                tags: {
                  shape: 'S14'
                }
              }
            }
          },
          PutLaunchAction: {
            http: {
              requestUri: '/PutLaunchAction',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actionCode', 'actionId', 'actionVersion', 'active', 'category', 'description', 'name', 'optional', 'order', 'resourceId'],
              members: {
                actionCode: {},
                actionId: {},
                actionVersion: {},
                active: {
                  type: 'boolean'
                },
                category: {},
                description: {},
                name: {},
                optional: {
                  type: 'boolean'
                },
                order: {
                  type: 'integer'
                },
                parameters: {
                  shape: 'Ss'
                },
                resourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                actionCode: {},
                actionId: {},
                actionVersion: {},
                active: {
                  type: 'boolean'
                },
                category: {},
                description: {},
                name: {},
                optional: {
                  type: 'boolean'
                },
                order: {
                  type: 'integer'
                },
                parameters: {
                  shape: 'Ss'
                },
                resourceId: {},
                type: {}
              }
            }
          },
          RetryDataReplication: {
            http: {
              requestUri: '/RetryDataReplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                sourceServerID: {}
              },
              deprecated: true,
              deprecatedMessage: 'WARNING: RetryDataReplication is deprecated'
            },
            output: {
              shape: 'S1b'
            },
            deprecated: true,
            deprecatedMessage: 'WARNING: RetryDataReplication is deprecated'
          },
          ReverseReplication: {
            http: {
              requestUri: '/ReverseReplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recoveryInstanceID'],
              members: {
                recoveryInstanceID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                reversedDirectionSourceServerArn: {}
              }
            }
          },
          StartFailbackLaunch: {
            http: {
              requestUri: '/StartFailbackLaunch',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recoveryInstanceIDs'],
              members: {
                recoveryInstanceIDs: {
                  type: 'list',
                  member: {}
                },
                tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S5'
                }
              }
            }
          },
          StartRecovery: {
            http: {
              requestUri: '/StartRecovery',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['sourceServers'],
              members: {
                isDrill: {
                  type: 'boolean'
                },
                sourceServers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceServerID'],
                    members: {
                      recoverySnapshotID: {},
                      sourceServerID: {}
                    }
                  }
                },
                tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S5'
                }
              }
            }
          },
          StartReplication: {
            http: {
              requestUri: '/StartReplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                sourceServerID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceServer: {
                  shape: 'S1b'
                }
              }
            }
          },
          StartSourceNetworkRecovery: {
            http: {
              requestUri: '/StartSourceNetworkRecovery',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['sourceNetworks'],
              members: {
                deployAsNew: {
                  type: 'boolean'
                },
                sourceNetworks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceNetworkID'],
                    members: {
                      cfnStackName: {
                        shape: 'S2'
                      },
                      sourceNetworkID: {}
                    }
                  }
                },
                tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S5'
                }
              }
            }
          },
          StartSourceNetworkReplication: {
            http: {
              requestUri: '/StartSourceNetworkReplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceNetworkID'],
              members: {
                sourceNetworkID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceNetwork: {
                  shape: 'S5k'
                }
              }
            }
          },
          StopFailback: {
            http: {
              requestUri: '/StopFailback',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recoveryInstanceID'],
              members: {
                recoveryInstanceID: {}
              }
            }
          },
          StopReplication: {
            http: {
              requestUri: '/StopReplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                sourceServerID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceServer: {
                  shape: 'S1b'
                }
              }
            }
          },
          StopSourceNetworkReplication: {
            http: {
              requestUri: '/StopSourceNetworkReplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceNetworkID'],
              members: {
                sourceNetworkID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceNetwork: {
                  shape: 'S5k'
                }
              }
            }
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
                  shape: 'S14'
                }
              }
            },
            idempotent: true
          },
          TerminateRecoveryInstances: {
            http: {
              requestUri: '/TerminateRecoveryInstances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recoveryInstanceIDs'],
              members: {
                recoveryInstanceIDs: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S5'
                }
              }
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
                  member: {},
                  sensitive: true
                }
              }
            },
            idempotent: true
          },
          UpdateFailbackReplicationConfiguration: {
            http: {
              requestUri: '/UpdateFailbackReplicationConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recoveryInstanceID'],
              members: {
                bandwidthThrottling: {
                  type: 'long'
                },
                name: {},
                recoveryInstanceID: {},
                usePrivateIP: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateLaunchConfiguration: {
            http: {
              requestUri: '/UpdateLaunchConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                copyPrivateIp: {
                  type: 'boolean'
                },
                copyTags: {
                  type: 'boolean'
                },
                launchDisposition: {},
                launchIntoInstanceProperties: {
                  shape: 'S64'
                },
                licensing: {
                  shape: 'S2k'
                },
                name: {},
                postLaunchEnabled: {
                  type: 'boolean'
                },
                sourceServerID: {},
                targetInstanceTypeRightSizingMethod: {}
              }
            },
            output: {
              shape: 'S63'
            },
            idempotent: true
          },
          UpdateLaunchConfigurationTemplate: {
            http: {
              requestUri: '/UpdateLaunchConfigurationTemplate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchConfigurationTemplateID'],
              members: {
                copyPrivateIp: {
                  type: 'boolean'
                },
                copyTags: {
                  type: 'boolean'
                },
                exportBucketArn: {},
                launchConfigurationTemplateID: {},
                launchDisposition: {},
                launchIntoSourceInstance: {
                  type: 'boolean'
                },
                licensing: {
                  shape: 'S2k'
                },
                postLaunchEnabled: {
                  type: 'boolean'
                },
                targetInstanceTypeRightSizingMethod: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                launchConfigurationTemplate: {
                  shape: 'S2n'
                }
              }
            }
          },
          UpdateReplicationConfiguration: {
            http: {
              requestUri: '/UpdateReplicationConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                associateDefaultSecurityGroup: {
                  type: 'boolean'
                },
                autoReplicateNewDisks: {
                  type: 'boolean'
                },
                bandwidthThrottling: {
                  type: 'long'
                },
                createPublicIP: {
                  type: 'boolean'
                },
                dataPlaneRouting: {},
                defaultLargeStagingDiskType: {},
                ebsEncryption: {},
                ebsEncryptionKeyArn: {},
                name: {},
                pitPolicy: {
                  shape: 'S2t'
                },
                replicatedDisks: {
                  shape: 'S68'
                },
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                  shape: 'S2x'
                },
                sourceServerID: {},
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                  shape: 'S14'
                },
                useDedicatedReplicationServer: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S67'
            },
            idempotent: true
          },
          UpdateReplicationConfigurationTemplate: {
            http: {
              requestUri: '/UpdateReplicationConfigurationTemplate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['replicationConfigurationTemplateID'],
              members: {
                arn: {},
                associateDefaultSecurityGroup: {
                  type: 'boolean'
                },
                autoReplicateNewDisks: {
                  type: 'boolean'
                },
                bandwidthThrottling: {
                  type: 'long'
                },
                createPublicIP: {
                  type: 'boolean'
                },
                dataPlaneRouting: {},
                defaultLargeStagingDiskType: {},
                ebsEncryption: {},
                ebsEncryptionKeyArn: {},
                pitPolicy: {
                  shape: 'S2t'
                },
                replicationConfigurationTemplateID: {},
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                  shape: 'S2x'
                },
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                  shape: 'S14'
                },
                useDedicatedReplicationServer: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S30'
            }
          }
        },
        shapes: {
          S2: {
            type: 'string',
            sensitive: true
          },
          S5: {
            type: 'structure',
            required: ['jobID'],
            members: {
              arn: {},
              creationDateTime: {},
              endDateTime: {},
              initiatedBy: {},
              jobID: {},
              participatingResources: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    launchStatus: {},
                    participatingResourceID: {
                      type: 'structure',
                      members: {
                        sourceNetworkID: {}
                      },
                      union: true
                    }
                  }
                }
              },
              participatingServers: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    launchActionsStatus: {
                      type: 'structure',
                      members: {
                        runs: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              action: {
                                shape: 'Sj'
                              },
                              failureReason: {},
                              runId: {},
                              status: {}
                            }
                          }
                        },
                        ssmAgentDiscoveryDatetime: {}
                      }
                    },
                    launchStatus: {},
                    recoveryInstanceID: {},
                    sourceServerID: {}
                  }
                }
              },
              status: {},
              tags: {
                shape: 'S14'
              },
              type: {}
            }
          },
          Sj: {
            type: 'structure',
            members: {
              actionCode: {},
              actionId: {},
              actionVersion: {},
              active: {
                type: 'boolean'
              },
              category: {},
              description: {},
              name: {},
              optional: {
                type: 'boolean'
              },
              order: {
                type: 'integer'
              },
              parameters: {
                shape: 'Ss'
              },
              type: {}
            }
          },
          Ss: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                type: {},
                value: {}
              }
            }
          },
          S14: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S1b: {
            type: 'structure',
            members: {
              agentVersion: {},
              arn: {},
              dataReplicationInfo: {
                type: 'structure',
                members: {
                  dataReplicationError: {
                    type: 'structure',
                    members: {
                      error: {},
                      rawError: {}
                    }
                  },
                  dataReplicationInitiation: {
                    type: 'structure',
                    members: {
                      nextAttemptDateTime: {},
                      startDateTime: {},
                      steps: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            status: {}
                          }
                        }
                      }
                    }
                  },
                  dataReplicationState: {},
                  etaDateTime: {},
                  lagDuration: {},
                  replicatedDisks: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        backloggedStorageBytes: {
                          type: 'long'
                        },
                        deviceName: {},
                        replicatedStorageBytes: {
                          type: 'long'
                        },
                        rescannedStorageBytes: {
                          type: 'long'
                        },
                        totalStorageBytes: {
                          type: 'long'
                        },
                        volumeStatus: {}
                      }
                    }
                  },
                  stagingAvailabilityZone: {},
                  stagingOutpostArn: {}
                }
              },
              lastLaunchResult: {},
              lifeCycle: {
                type: 'structure',
                members: {
                  addedToServiceDateTime: {},
                  elapsedReplicationDuration: {},
                  firstByteDateTime: {},
                  lastLaunch: {
                    type: 'structure',
                    members: {
                      initiated: {
                        type: 'structure',
                        members: {
                          apiCallDateTime: {},
                          jobID: {},
                          type: {}
                        }
                      },
                      status: {}
                    }
                  },
                  lastSeenByServiceDateTime: {}
                }
              },
              recoveryInstanceId: {},
              replicationDirection: {},
              reversedDirectionSourceServerArn: {},
              sourceCloudProperties: {
                type: 'structure',
                members: {
                  originAccountID: {},
                  originAvailabilityZone: {},
                  originRegion: {},
                  sourceOutpostArn: {}
                }
              },
              sourceNetworkID: {},
              sourceProperties: {
                type: 'structure',
                members: {
                  cpus: {
                    shape: 'S25'
                  },
                  disks: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        bytes: {
                          type: 'long'
                        },
                        deviceName: {}
                      }
                    }
                  },
                  identificationHints: {
                    shape: 'S29'
                  },
                  lastUpdatedDateTime: {},
                  networkInterfaces: {
                    shape: 'S2b'
                  },
                  os: {
                    shape: 'S2e'
                  },
                  ramBytes: {
                    type: 'long'
                  },
                  recommendedInstanceType: {},
                  supportsNitroInstances: {
                    type: 'boolean'
                  }
                }
              },
              sourceServerID: {},
              stagingArea: {
                type: 'structure',
                members: {
                  errorMessage: {},
                  stagingAccountID: {},
                  stagingSourceServerArn: {},
                  status: {}
                }
              },
              tags: {
                shape: 'S14'
              }
            }
          },
          S25: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                cores: {
                  type: 'long'
                },
                modelName: {}
              }
            }
          },
          S29: {
            type: 'structure',
            members: {
              awsInstanceID: {},
              fqdn: {},
              hostname: {},
              vmWareUuid: {}
            }
          },
          S2b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ips: {
                  type: 'list',
                  member: {}
                },
                isPrimary: {
                  type: 'boolean'
                },
                macAddress: {}
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              fullString: {}
            }
          },
          S2k: {
            type: 'structure',
            members: {
              osByol: {
                type: 'boolean'
              }
            }
          },
          S2n: {
            type: 'structure',
            members: {
              arn: {},
              copyPrivateIp: {
                type: 'boolean'
              },
              copyTags: {
                type: 'boolean'
              },
              exportBucketArn: {},
              launchConfigurationTemplateID: {},
              launchDisposition: {},
              launchIntoSourceInstance: {
                type: 'boolean'
              },
              licensing: {
                shape: 'S2k'
              },
              postLaunchEnabled: {
                type: 'boolean'
              },
              tags: {
                shape: 'S14'
              },
              targetInstanceTypeRightSizingMethod: {}
            }
          },
          S2t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['interval', 'retentionDuration', 'units'],
              members: {
                enabled: {
                  type: 'boolean'
                },
                interval: {
                  type: 'integer'
                },
                retentionDuration: {
                  type: 'integer'
                },
                ruleID: {
                  type: 'long'
                },
                units: {}
              }
            }
          },
          S2x: {
            type: 'list',
            member: {}
          },
          S30: {
            type: 'structure',
            required: ['replicationConfigurationTemplateID'],
            members: {
              arn: {},
              associateDefaultSecurityGroup: {
                type: 'boolean'
              },
              autoReplicateNewDisks: {
                type: 'boolean'
              },
              bandwidthThrottling: {
                type: 'long'
              },
              createPublicIP: {
                type: 'boolean'
              },
              dataPlaneRouting: {},
              defaultLargeStagingDiskType: {},
              ebsEncryption: {},
              ebsEncryptionKeyArn: {},
              pitPolicy: {
                shape: 'S2t'
              },
              replicationConfigurationTemplateID: {},
              replicationServerInstanceType: {},
              replicationServersSecurityGroupsIDs: {
                shape: 'S2x'
              },
              stagingAreaSubnetId: {},
              stagingAreaTags: {
                shape: 'S14'
              },
              tags: {
                shape: 'S14'
              },
              useDedicatedReplicationServer: {
                type: 'boolean'
              }
            }
          },
          S5k: {
            type: 'structure',
            members: {
              arn: {},
              cfnStackName: {
                shape: 'S2'
              },
              lastRecovery: {
                type: 'structure',
                members: {
                  apiCallDateTime: {
                    type: 'timestamp',
                    timestampFormat: 'iso8601'
                  },
                  jobID: {},
                  lastRecoveryResult: {}
                }
              },
              launchedVpcID: {},
              replicationStatus: {},
              replicationStatusDetails: {
                type: 'string',
                sensitive: true
              },
              sourceAccountID: {},
              sourceNetworkID: {},
              sourceRegion: {},
              sourceVpcID: {},
              tags: {
                shape: 'S14'
              }
            }
          },
          S63: {
            type: 'structure',
            members: {
              copyPrivateIp: {
                type: 'boolean'
              },
              copyTags: {
                type: 'boolean'
              },
              ec2LaunchTemplateID: {},
              launchDisposition: {},
              launchIntoInstanceProperties: {
                shape: 'S64'
              },
              licensing: {
                shape: 'S2k'
              },
              name: {},
              postLaunchEnabled: {
                type: 'boolean'
              },
              sourceServerID: {},
              targetInstanceTypeRightSizingMethod: {}
            }
          },
          S64: {
            type: 'structure',
            members: {
              launchIntoEC2InstanceID: {}
            }
          },
          S67: {
            type: 'structure',
            members: {
              associateDefaultSecurityGroup: {
                type: 'boolean'
              },
              autoReplicateNewDisks: {
                type: 'boolean'
              },
              bandwidthThrottling: {
                type: 'long'
              },
              createPublicIP: {
                type: 'boolean'
              },
              dataPlaneRouting: {},
              defaultLargeStagingDiskType: {},
              ebsEncryption: {},
              ebsEncryptionKeyArn: {},
              name: {},
              pitPolicy: {
                shape: 'S2t'
              },
              replicatedDisks: {
                shape: 'S68'
              },
              replicationServerInstanceType: {},
              replicationServersSecurityGroupsIDs: {
                shape: 'S2x'
              },
              sourceServerID: {},
              stagingAreaSubnetId: {},
              stagingAreaTags: {
                shape: 'S14'
              },
              useDedicatedReplicationServer: {
                type: 'boolean'
              }
            }
          },
          S68: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                deviceName: {},
                iops: {
                  type: 'long'
                },
                isBootDisk: {
                  type: 'boolean'
                },
                optimizedStagingDiskType: {},
                stagingDiskType: {},
                throughput: {
                  type: 'long'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c5b08b1d3674ed0d100fb075dd34c7d356900e41.js.map