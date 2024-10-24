System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-02-26',
          endpointPrefix: 'mgn',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'mgn',
          serviceFullName: 'Application Migration Service',
          serviceId: 'mgn',
          signatureVersion: 'v4',
          signingName: 'mgn',
          uid: 'mgn-2020-02-26'
        },
        operations: {
          ArchiveApplication: {
            http: {
              requestUri: '/ArchiveApplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationID'],
              members: {
                accountID: {},
                applicationID: {}
              }
            },
            output: {
              shape: 'S4'
            }
          },
          ArchiveWave: {
            http: {
              requestUri: '/ArchiveWave',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['waveID'],
              members: {
                accountID: {},
                waveID: {}
              }
            },
            output: {
              shape: 'Sj'
            }
          },
          AssociateApplications: {
            http: {
              requestUri: '/AssociateApplications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationIDs', 'waveID'],
              members: {
                accountID: {},
                applicationIDs: {
                  shape: 'Sq'
                },
                waveID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          AssociateSourceServers: {
            http: {
              requestUri: '/AssociateSourceServers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationID', 'sourceServerIDs'],
              members: {
                accountID: {},
                applicationID: {},
                sourceServerIDs: {
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
          ChangeServerLifeCycleState: {
            http: {
              requestUri: '/ChangeServerLifeCycleState',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['lifeCycle', 'sourceServerID'],
              members: {
                accountID: {},
                lifeCycle: {
                  type: 'structure',
                  required: ['state'],
                  members: {
                    state: {}
                  }
                },
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
            }
          },
          CreateApplication: {
            http: {
              requestUri: '/CreateApplication',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                accountID: {},
                description: {},
                name: {},
                tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              shape: 'S4'
            },
            idempotent: true
          },
          CreateConnector: {
            http: {
              requestUri: '/CreateConnector',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name', 'ssmInstanceID'],
              members: {
                name: {},
                ssmCommandConfig: {
                  shape: 'S2b'
                },
                ssmInstanceID: {},
                tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              shape: 'S2f'
            },
            idempotent: true
          },
          CreateLaunchConfigurationTemplate: {
            http: {
              requestUri: '/CreateLaunchConfigurationTemplate',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                associatePublicIpAddress: {
                  type: 'boolean'
                },
                bootMode: {},
                copyPrivateIp: {
                  type: 'boolean'
                },
                copyTags: {
                  type: 'boolean'
                },
                enableMapAutoTagging: {
                  type: 'boolean'
                },
                largeVolumeConf: {
                  shape: 'S2j'
                },
                launchDisposition: {},
                licensing: {
                  shape: 'S2o'
                },
                mapAutoTaggingMpeID: {},
                postLaunchActions: {
                  shape: 'S2p'
                },
                smallVolumeConf: {
                  shape: 'S2j'
                },
                smallVolumeMaxSize: {
                  type: 'long'
                },
                tags: {
                  shape: 'Se'
                },
                targetInstanceTypeRightSizingMethod: {}
              }
            },
            output: {
              shape: 'S36'
            }
          },
          CreateReplicationConfigurationTemplate: {
            http: {
              requestUri: '/CreateReplicationConfigurationTemplate',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['associateDefaultSecurityGroup', 'bandwidthThrottling', 'createPublicIP', 'dataPlaneRouting', 'defaultLargeStagingDiskType', 'ebsEncryption', 'replicationServerInstanceType', 'replicationServersSecurityGroupsIDs', 'stagingAreaSubnetId', 'stagingAreaTags', 'useDedicatedReplicationServer'],
              members: {
                associateDefaultSecurityGroup: {
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
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                  shape: 'S3e'
                },
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                  shape: 'Se'
                },
                tags: {
                  shape: 'Se'
                },
                useDedicatedReplicationServer: {
                  type: 'boolean'
                },
                useFipsEndpoint: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S3h'
            }
          },
          CreateWave: {
            http: {
              requestUri: '/CreateWave',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                accountID: {},
                description: {},
                name: {},
                tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              shape: 'Sj'
            },
            idempotent: true
          },
          DeleteApplication: {
            http: {
              requestUri: '/DeleteApplication',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['applicationID'],
              members: {
                accountID: {},
                applicationID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteConnector: {
            http: {
              requestUri: '/DeleteConnector',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['connectorID'],
              members: {
                connectorID: {}
              }
            },
            idempotent: true
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
                accountID: {},
                jobID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
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
          DeleteSourceServer: {
            http: {
              requestUri: '/DeleteSourceServer',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteVcenterClient: {
            http: {
              requestUri: '/DeleteVcenterClient',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['vcenterClientID'],
              members: {
                vcenterClientID: {}
              }
            },
            idempotent: true
          },
          DeleteWave: {
            http: {
              requestUri: '/DeleteWave',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['waveID'],
              members: {
                accountID: {},
                waveID: {}
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
                accountID: {},
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
                          conversionServerID: {},
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
                accountID: {},
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
                    shape: 'S4b'
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
                    shape: 'S36'
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
                    shape: 'S3h'
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
                accountID: {},
                filters: {
                  type: 'structure',
                  members: {
                    applicationIDs: {
                      type: 'list',
                      member: {}
                    },
                    isArchived: {
                      type: 'boolean'
                    },
                    lifeCycleStates: {
                      type: 'list',
                      member: {}
                    },
                    replicationTypes: {
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
                    shape: 'Sz'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeVcenterClients: {
            http: {
              method: 'GET',
              requestUri: '/DescribeVcenterClients',
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
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      datacenterName: {},
                      hostname: {},
                      lastSeenDatetime: {},
                      sourceServerTags: {
                        shape: 'Se'
                      },
                      tags: {
                        shape: 'Se'
                      },
                      vcenterClientID: {},
                      vcenterUUID: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DisassociateApplications: {
            http: {
              requestUri: '/DisassociateApplications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationIDs', 'waveID'],
              members: {
                accountID: {},
                applicationIDs: {
                  shape: 'Sq'
                },
                waveID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateSourceServers: {
            http: {
              requestUri: '/DisassociateSourceServers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationID', 'sourceServerIDs'],
              members: {
                accountID: {},
                applicationID: {},
                sourceServerIDs: {
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
          DisconnectFromService: {
            http: {
              requestUri: '/DisconnectFromService',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
            }
          },
          FinalizeCutover: {
            http: {
              requestUri: '/FinalizeCutover',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
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
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'S5f'
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
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'S5i'
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
          ListApplications: {
            http: {
              requestUri: '/ListApplications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountID: {},
                filters: {
                  type: 'structure',
                  members: {
                    applicationIDs: {
                      type: 'list',
                      member: {}
                    },
                    isArchived: {
                      type: 'boolean'
                    },
                    waveIDs: {
                      shape: 'S5r'
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
                    shape: 'S4'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListConnectors: {
            http: {
              requestUri: '/ListConnectors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    connectorIDs: {
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
                    shape: 'S2f'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExportErrors: {
            http: {
              requestUri: '/ListExportErrors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['exportID'],
              members: {
                exportID: {},
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
                      errorData: {
                        type: 'structure',
                        members: {
                          rawError: {}
                        }
                      },
                      errorDateTime: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExports: {
            http: {
              requestUri: '/ListExports',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    exportIDs: {
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
                    shape: 'S6a'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImportErrors: {
            http: {
              requestUri: '/ListImportErrors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['importID'],
              members: {
                importID: {},
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
                      errorData: {
                        type: 'structure',
                        members: {
                          accountID: {},
                          applicationID: {},
                          ec2LaunchTemplateID: {},
                          rawError: {},
                          rowNumber: {
                            type: 'long'
                          },
                          sourceServerID: {},
                          waveID: {}
                        }
                      },
                      errorDateTime: {},
                      errorType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImports: {
            http: {
              requestUri: '/ListImports',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    importIDs: {
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
                    shape: 'S6r'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListManagedAccounts: {
            http: {
              requestUri: '/ListManagedAccounts',
              responseCode: 200
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
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSourceServerActions: {
            http: {
              requestUri: '/ListSourceServerActions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                accountID: {},
                filters: {
                  type: 'structure',
                  members: {
                    actionIDs: {
                      shape: 'S74'
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sourceServerID: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    shape: 'S78'
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
                  shape: 'Se'
                }
              }
            }
          },
          ListTemplateActions: {
            http: {
              requestUri: '/ListTemplateActions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchConfigurationTemplateID'],
              members: {
                filters: {
                  type: 'structure',
                  members: {
                    actionIDs: {
                      shape: 'S74'
                    }
                  }
                },
                launchConfigurationTemplateID: {},
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
                    shape: 'S7k'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListWaves: {
            http: {
              requestUri: '/ListWaves',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountID: {},
                filters: {
                  type: 'structure',
                  members: {
                    isArchived: {
                      type: 'boolean'
                    },
                    waveIDs: {
                      shape: 'S5r'
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
                    shape: 'Sj'
                  }
                },
                nextToken: {}
              }
            }
          },
          MarkAsArchived: {
            http: {
              requestUri: '/MarkAsArchived',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
            }
          },
          PauseReplication: {
            http: {
              requestUri: '/PauseReplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
            }
          },
          PutSourceServerAction: {
            http: {
              requestUri: '/PutSourceServerAction',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actionID', 'actionName', 'documentIdentifier', 'order', 'sourceServerID'],
              members: {
                accountID: {},
                actionID: {},
                actionName: {},
                active: {
                  type: 'boolean'
                },
                category: {},
                description: {},
                documentIdentifier: {},
                documentVersion: {},
                externalParameters: {
                  shape: 'S2u'
                },
                mustSucceedForCutover: {
                  type: 'boolean'
                },
                order: {
                  type: 'integer'
                },
                parameters: {
                  shape: 'S2y'
                },
                sourceServerID: {},
                timeoutSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S78'
            }
          },
          PutTemplateAction: {
            http: {
              requestUri: '/PutTemplateAction',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actionID', 'actionName', 'documentIdentifier', 'launchConfigurationTemplateID', 'order'],
              members: {
                actionID: {},
                actionName: {},
                active: {
                  type: 'boolean'
                },
                category: {},
                description: {},
                documentIdentifier: {},
                documentVersion: {},
                externalParameters: {
                  shape: 'S2u'
                },
                launchConfigurationTemplateID: {},
                mustSucceedForCutover: {
                  type: 'boolean'
                },
                operatingSystem: {},
                order: {
                  type: 'integer'
                },
                parameters: {
                  shape: 'S2y'
                },
                timeoutSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S7k'
            }
          },
          RemoveSourceServerAction: {
            http: {
              requestUri: '/RemoveSourceServerAction',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['actionID', 'sourceServerID'],
              members: {
                accountID: {},
                actionID: {},
                sourceServerID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RemoveTemplateAction: {
            http: {
              requestUri: '/RemoveTemplateAction',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['actionID', 'launchConfigurationTemplateID'],
              members: {
                actionID: {},
                launchConfigurationTemplateID: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ResumeReplication: {
            http: {
              requestUri: '/ResumeReplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
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
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
            }
          },
          StartCutover: {
            http: {
              requestUri: '/StartCutover',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['sourceServerIDs'],
              members: {
                accountID: {},
                sourceServerIDs: {
                  type: 'list',
                  member: {}
                },
                tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S4b'
                }
              }
            }
          },
          StartExport: {
            http: {
              requestUri: '/StartExport',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['s3Bucket', 's3Key'],
              members: {
                s3Bucket: {},
                s3BucketOwner: {},
                s3Key: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                exportTask: {
                  shape: 'S6a'
                }
              }
            }
          },
          StartImport: {
            http: {
              requestUri: '/StartImport',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['s3BucketSource'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                s3BucketSource: {
                  shape: 'S6s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                importTask: {
                  shape: 'S6r'
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
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
            }
          },
          StartTest: {
            http: {
              requestUri: '/StartTest',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['sourceServerIDs'],
              members: {
                accountID: {},
                sourceServerIDs: {
                  type: 'list',
                  member: {}
                },
                tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S4b'
                }
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
                accountID: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
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
                  shape: 'Se'
                }
              }
            },
            idempotent: true
          },
          TerminateTargetInstances: {
            http: {
              requestUri: '/TerminateTargetInstances',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['sourceServerIDs'],
              members: {
                accountID: {},
                sourceServerIDs: {
                  type: 'list',
                  member: {}
                },
                tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S4b'
                }
              }
            }
          },
          UnarchiveApplication: {
            http: {
              requestUri: '/UnarchiveApplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationID'],
              members: {
                accountID: {},
                applicationID: {}
              }
            },
            output: {
              shape: 'S4'
            }
          },
          UnarchiveWave: {
            http: {
              requestUri: '/UnarchiveWave',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['waveID'],
              members: {
                accountID: {},
                waveID: {}
              }
            },
            output: {
              shape: 'Sj'
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
          UpdateApplication: {
            http: {
              requestUri: '/UpdateApplication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationID'],
              members: {
                accountID: {},
                applicationID: {},
                description: {},
                name: {}
              }
            },
            output: {
              shape: 'S4'
            },
            idempotent: true
          },
          UpdateConnector: {
            http: {
              requestUri: '/UpdateConnector',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['connectorID'],
              members: {
                connectorID: {},
                name: {},
                ssmCommandConfig: {
                  shape: 'S2b'
                }
              }
            },
            output: {
              shape: 'S2f'
            },
            idempotent: true
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
                accountID: {},
                bootMode: {},
                copyPrivateIp: {
                  type: 'boolean'
                },
                copyTags: {
                  type: 'boolean'
                },
                enableMapAutoTagging: {
                  type: 'boolean'
                },
                launchDisposition: {},
                licensing: {
                  shape: 'S2o'
                },
                mapAutoTaggingMpeID: {},
                name: {},
                postLaunchActions: {
                  shape: 'S2p'
                },
                sourceServerID: {},
                targetInstanceTypeRightSizingMethod: {}
              }
            },
            output: {
              shape: 'S5f'
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
                associatePublicIpAddress: {
                  type: 'boolean'
                },
                bootMode: {},
                copyPrivateIp: {
                  type: 'boolean'
                },
                copyTags: {
                  type: 'boolean'
                },
                enableMapAutoTagging: {
                  type: 'boolean'
                },
                largeVolumeConf: {
                  shape: 'S2j'
                },
                launchConfigurationTemplateID: {},
                launchDisposition: {},
                licensing: {
                  shape: 'S2o'
                },
                mapAutoTaggingMpeID: {},
                postLaunchActions: {
                  shape: 'S2p'
                },
                smallVolumeConf: {
                  shape: 'S2j'
                },
                smallVolumeMaxSize: {
                  type: 'long'
                },
                targetInstanceTypeRightSizingMethod: {}
              }
            },
            output: {
              shape: 'S36'
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
                accountID: {},
                associateDefaultSecurityGroup: {
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
                replicatedDisks: {
                  shape: 'S5j'
                },
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                  shape: 'S3e'
                },
                sourceServerID: {},
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                  shape: 'Se'
                },
                useDedicatedReplicationServer: {
                  type: 'boolean'
                },
                useFipsEndpoint: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S5i'
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
                replicationConfigurationTemplateID: {},
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                  shape: 'S3e'
                },
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                  shape: 'Se'
                },
                useDedicatedReplicationServer: {
                  type: 'boolean'
                },
                useFipsEndpoint: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S3h'
            }
          },
          UpdateSourceServer: {
            http: {
              requestUri: '/UpdateSourceServer',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceServerID'],
              members: {
                accountID: {},
                connectorAction: {
                  shape: 'S10'
                },
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
            },
            idempotent: true
          },
          UpdateSourceServerReplicationType: {
            http: {
              requestUri: '/UpdateSourceServerReplicationType',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['replicationType', 'sourceServerID'],
              members: {
                accountID: {},
                replicationType: {},
                sourceServerID: {}
              }
            },
            output: {
              shape: 'Sz'
            }
          },
          UpdateWave: {
            http: {
              requestUri: '/UpdateWave',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['waveID'],
              members: {
                accountID: {},
                description: {},
                name: {},
                waveID: {}
              }
            },
            output: {
              shape: 'Sj'
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              applicationAggregatedStatus: {
                type: 'structure',
                members: {
                  healthStatus: {},
                  lastUpdateDateTime: {},
                  progressStatus: {},
                  totalSourceServers: {
                    type: 'long'
                  }
                }
              },
              applicationID: {},
              arn: {},
              creationDateTime: {},
              description: {},
              isArchived: {
                type: 'boolean'
              },
              lastModifiedDateTime: {},
              name: {},
              tags: {
                shape: 'Se'
              },
              waveID: {}
            }
          },
          Se: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Sj: {
            type: 'structure',
            members: {
              arn: {},
              creationDateTime: {},
              description: {},
              isArchived: {
                type: 'boolean'
              },
              lastModifiedDateTime: {},
              name: {},
              tags: {
                shape: 'Se'
              },
              waveAggregatedStatus: {
                type: 'structure',
                members: {
                  healthStatus: {},
                  lastUpdateDateTime: {},
                  progressStatus: {},
                  replicationStartedDateTime: {},
                  totalApplications: {
                    type: 'long'
                  }
                }
              },
              waveID: {}
            }
          },
          Sq: {
            type: 'list',
            member: {}
          },
          Sz: {
            type: 'structure',
            members: {
              applicationID: {},
              arn: {},
              connectorAction: {
                shape: 'S10'
              },
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
                  lastSnapshotDateTime: {},
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
                  }
                }
              },
              fqdnForActionFramework: {},
              isArchived: {
                type: 'boolean'
              },
              launchedInstance: {
                type: 'structure',
                members: {
                  ec2InstanceID: {},
                  firstBoot: {},
                  jobID: {}
                }
              },
              lifeCycle: {
                type: 'structure',
                members: {
                  addedToServiceDateTime: {},
                  elapsedReplicationDuration: {},
                  firstByteDateTime: {},
                  lastCutover: {
                    type: 'structure',
                    members: {
                      finalized: {
                        type: 'structure',
                        members: {
                          apiCallDateTime: {}
                        }
                      },
                      initiated: {
                        type: 'structure',
                        members: {
                          apiCallDateTime: {},
                          jobID: {}
                        }
                      },
                      reverted: {
                        type: 'structure',
                        members: {
                          apiCallDateTime: {}
                        }
                      }
                    }
                  },
                  lastSeenByServiceDateTime: {},
                  lastTest: {
                    type: 'structure',
                    members: {
                      finalized: {
                        type: 'structure',
                        members: {
                          apiCallDateTime: {}
                        }
                      },
                      initiated: {
                        type: 'structure',
                        members: {
                          apiCallDateTime: {},
                          jobID: {}
                        }
                      },
                      reverted: {
                        type: 'structure',
                        members: {
                          apiCallDateTime: {}
                        }
                      }
                    }
                  },
                  state: {}
                }
              },
              replicationType: {},
              sourceProperties: {
                type: 'structure',
                members: {
                  cpus: {
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
                    type: 'structure',
                    members: {
                      awsInstanceID: {},
                      fqdn: {},
                      hostname: {},
                      vmPath: {},
                      vmWareUuid: {}
                    }
                  },
                  lastUpdatedDateTime: {},
                  networkInterfaces: {
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
                  os: {
                    type: 'structure',
                    members: {
                      fullString: {}
                    }
                  },
                  ramBytes: {
                    type: 'long'
                  },
                  recommendedInstanceType: {}
                }
              },
              sourceServerID: {},
              tags: {
                shape: 'Se'
              },
              userProvidedID: {},
              vcenterClientID: {}
            }
          },
          S10: {
            type: 'structure',
            members: {
              connectorArn: {},
              credentialsSecretArn: {}
            }
          },
          S2b: {
            type: 'structure',
            required: ['cloudWatchOutputEnabled', 's3OutputEnabled'],
            members: {
              cloudWatchLogGroupName: {},
              cloudWatchOutputEnabled: {
                type: 'boolean'
              },
              outputS3BucketName: {},
              s3OutputEnabled: {
                type: 'boolean'
              }
            }
          },
          S2f: {
            type: 'structure',
            members: {
              arn: {},
              connectorID: {},
              name: {},
              ssmCommandConfig: {
                shape: 'S2b'
              },
              ssmInstanceID: {},
              tags: {
                shape: 'Se'
              }
            }
          },
          S2j: {
            type: 'structure',
            members: {
              iops: {
                type: 'long'
              },
              throughput: {
                type: 'long'
              },
              volumeType: {}
            }
          },
          S2o: {
            type: 'structure',
            members: {
              osByol: {
                type: 'boolean'
              }
            }
          },
          S2p: {
            type: 'structure',
            members: {
              cloudWatchLogGroupName: {},
              deployment: {},
              s3LogBucket: {},
              s3OutputKeyPrefix: {},
              ssmDocuments: {
                type: 'list',
                member: {
                  shape: 'S2t'
                }
              }
            }
          },
          S2t: {
            type: 'structure',
            required: ['actionName', 'ssmDocumentName'],
            members: {
              actionName: {},
              externalParameters: {
                shape: 'S2u'
              },
              mustSucceedForCutover: {
                type: 'boolean'
              },
              parameters: {
                shape: 'S2y'
              },
              ssmDocumentName: {},
              timeoutSeconds: {
                type: 'integer'
              }
            }
          },
          S2u: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                dynamicPath: {}
              },
              union: true
            }
          },
          S2y: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {
                type: 'structure',
                required: ['parameterName', 'parameterType'],
                members: {
                  parameterName: {},
                  parameterType: {}
                }
              }
            }
          },
          S36: {
            type: 'structure',
            required: ['launchConfigurationTemplateID'],
            members: {
              arn: {},
              associatePublicIpAddress: {
                type: 'boolean'
              },
              bootMode: {},
              copyPrivateIp: {
                type: 'boolean'
              },
              copyTags: {
                type: 'boolean'
              },
              ec2LaunchTemplateID: {},
              enableMapAutoTagging: {
                type: 'boolean'
              },
              largeVolumeConf: {
                shape: 'S2j'
              },
              launchConfigurationTemplateID: {},
              launchDisposition: {},
              licensing: {
                shape: 'S2o'
              },
              mapAutoTaggingMpeID: {},
              postLaunchActions: {
                shape: 'S2p'
              },
              smallVolumeConf: {
                shape: 'S2j'
              },
              smallVolumeMaxSize: {
                type: 'long'
              },
              tags: {
                shape: 'Se'
              },
              targetInstanceTypeRightSizingMethod: {}
            }
          },
          S3e: {
            type: 'list',
            member: {}
          },
          S3h: {
            type: 'structure',
            required: ['replicationConfigurationTemplateID'],
            members: {
              arn: {},
              associateDefaultSecurityGroup: {
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
              replicationConfigurationTemplateID: {},
              replicationServerInstanceType: {},
              replicationServersSecurityGroupsIDs: {
                shape: 'S3e'
              },
              stagingAreaSubnetId: {},
              stagingAreaTags: {
                shape: 'Se'
              },
              tags: {
                shape: 'Se'
              },
              useDedicatedReplicationServer: {
                type: 'boolean'
              },
              useFipsEndpoint: {
                type: 'boolean'
              }
            }
          },
          S4b: {
            type: 'structure',
            required: ['jobID'],
            members: {
              arn: {},
              creationDateTime: {},
              endDateTime: {},
              initiatedBy: {},
              jobID: {},
              participatingServers: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['sourceServerID'],
                  members: {
                    launchStatus: {},
                    launchedEc2InstanceID: {},
                    postLaunchActionsStatus: {
                      type: 'structure',
                      members: {
                        postLaunchActionsLaunchStatusList: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              executionID: {},
                              executionStatus: {},
                              failureReason: {},
                              ssmDocument: {
                                shape: 'S2t'
                              },
                              ssmDocumentType: {}
                            }
                          }
                        },
                        ssmAgentDiscoveryDatetime: {}
                      }
                    },
                    sourceServerID: {}
                  }
                }
              },
              status: {},
              tags: {
                shape: 'Se'
              },
              type: {}
            }
          },
          S5f: {
            type: 'structure',
            members: {
              bootMode: {},
              copyPrivateIp: {
                type: 'boolean'
              },
              copyTags: {
                type: 'boolean'
              },
              ec2LaunchTemplateID: {},
              enableMapAutoTagging: {
                type: 'boolean'
              },
              launchDisposition: {},
              licensing: {
                shape: 'S2o'
              },
              mapAutoTaggingMpeID: {},
              name: {},
              postLaunchActions: {
                shape: 'S2p'
              },
              sourceServerID: {},
              targetInstanceTypeRightSizingMethod: {}
            }
          },
          S5i: {
            type: 'structure',
            members: {
              associateDefaultSecurityGroup: {
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
              replicatedDisks: {
                shape: 'S5j'
              },
              replicationServerInstanceType: {},
              replicationServersSecurityGroupsIDs: {
                shape: 'S3e'
              },
              sourceServerID: {},
              stagingAreaSubnetId: {},
              stagingAreaTags: {
                shape: 'Se'
              },
              useDedicatedReplicationServer: {
                type: 'boolean'
              },
              useFipsEndpoint: {
                type: 'boolean'
              }
            }
          },
          S5j: {
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
                stagingDiskType: {},
                throughput: {
                  type: 'long'
                }
              }
            }
          },
          S5r: {
            type: 'list',
            member: {}
          },
          S6a: {
            type: 'structure',
            members: {
              creationDateTime: {},
              endDateTime: {},
              exportID: {},
              progressPercentage: {
                type: 'float'
              },
              s3Bucket: {},
              s3BucketOwner: {},
              s3Key: {},
              status: {},
              summary: {
                type: 'structure',
                members: {
                  applicationsCount: {
                    type: 'long'
                  },
                  serversCount: {
                    type: 'long'
                  },
                  wavesCount: {
                    type: 'long'
                  }
                }
              }
            }
          },
          S6r: {
            type: 'structure',
            members: {
              creationDateTime: {},
              endDateTime: {},
              importID: {},
              progressPercentage: {
                type: 'float'
              },
              s3BucketSource: {
                shape: 'S6s'
              },
              status: {},
              summary: {
                type: 'structure',
                members: {
                  applications: {
                    type: 'structure',
                    members: {
                      createdCount: {
                        type: 'long'
                      },
                      modifiedCount: {
                        type: 'long'
                      }
                    }
                  },
                  servers: {
                    type: 'structure',
                    members: {
                      createdCount: {
                        type: 'long'
                      },
                      modifiedCount: {
                        type: 'long'
                      }
                    }
                  },
                  waves: {
                    type: 'structure',
                    members: {
                      createdCount: {
                        type: 'long'
                      },
                      modifiedCount: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          S6s: {
            type: 'structure',
            required: ['s3Bucket', 's3Key'],
            members: {
              s3Bucket: {},
              s3BucketOwner: {},
              s3Key: {}
            }
          },
          S74: {
            type: 'list',
            member: {}
          },
          S78: {
            type: 'structure',
            members: {
              actionID: {},
              actionName: {},
              active: {
                type: 'boolean'
              },
              category: {},
              description: {},
              documentIdentifier: {},
              documentVersion: {},
              externalParameters: {
                shape: 'S2u'
              },
              mustSucceedForCutover: {
                type: 'boolean'
              },
              order: {
                type: 'integer'
              },
              parameters: {
                shape: 'S2y'
              },
              timeoutSeconds: {
                type: 'integer'
              }
            }
          },
          S7k: {
            type: 'structure',
            members: {
              actionID: {},
              actionName: {},
              active: {
                type: 'boolean'
              },
              category: {},
              description: {},
              documentIdentifier: {},
              documentVersion: {},
              externalParameters: {
                shape: 'S2u'
              },
              mustSucceedForCutover: {
                type: 'boolean'
              },
              operatingSystem: {},
              order: {
                type: 'integer'
              },
              parameters: {
                shape: 'S2y'
              },
              timeoutSeconds: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=aa2bc2fc0ed347236d46fe9641f16faafb6fa6d3.js.map