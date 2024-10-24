System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-10-24',
          endpointPrefix: 'sms',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'SMS',
          serviceFullName: 'AWS Server Migration Service',
          serviceId: 'SMS',
          signatureVersion: 'v4',
          targetPrefix: 'AWSServerMigrationService_V2016_10_24',
          uid: 'sms-2016-10-24'
        },
        operations: {
          CreateApp: {
            input: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                roleName: {},
                clientToken: {},
                serverGroups: {
                  shape: 'S6'
                },
                tags: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                appSummary: {
                  shape: 'St'
                },
                serverGroups: {
                  shape: 'S6'
                },
                tags: {
                  shape: 'So'
                }
              }
            }
          },
          CreateReplicationJob: {
            input: {
              type: 'structure',
              required: ['serverId', 'seedReplicationTime'],
              members: {
                serverId: {},
                seedReplicationTime: {
                  type: 'timestamp'
                },
                frequency: {
                  type: 'integer'
                },
                runOnce: {
                  type: 'boolean'
                },
                licenseType: {},
                roleName: {},
                description: {},
                numberOfRecentAmisToKeep: {
                  type: 'integer'
                },
                encrypted: {
                  type: 'boolean'
                },
                kmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                replicationJobId: {}
              }
            }
          },
          DeleteApp: {
            input: {
              type: 'structure',
              members: {
                appId: {},
                forceStopAppReplication: {
                  type: 'boolean'
                },
                forceTerminateApp: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAppLaunchConfiguration: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAppReplicationConfiguration: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAppValidationConfiguration: {
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteReplicationJob: {
            input: {
              type: 'structure',
              required: ['replicationJobId'],
              members: {
                replicationJobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteServerCatalog: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateConnector: {
            input: {
              type: 'structure',
              required: ['connectorId'],
              members: {
                connectorId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GenerateChangeSet: {
            input: {
              type: 'structure',
              members: {
                appId: {},
                changesetFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                s3Location: {
                  shape: 'S24'
                }
              }
            }
          },
          GenerateTemplate: {
            input: {
              type: 'structure',
              members: {
                appId: {},
                templateFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                s3Location: {
                  shape: 'S24'
                }
              }
            }
          },
          GetApp: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                appSummary: {
                  shape: 'St'
                },
                serverGroups: {
                  shape: 'S6'
                },
                tags: {
                  shape: 'So'
                }
              }
            }
          },
          GetAppLaunchConfiguration: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                appId: {},
                roleName: {},
                autoLaunch: {
                  type: 'boolean'
                },
                serverGroupLaunchConfigurations: {
                  shape: 'S2e'
                }
              }
            }
          },
          GetAppReplicationConfiguration: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                serverGroupReplicationConfigurations: {
                  shape: 'S2u'
                }
              }
            }
          },
          GetAppValidationConfiguration: {
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                appValidationConfigurations: {
                  shape: 'S31'
                },
                serverGroupValidationConfigurations: {
                  shape: 'S3c'
                }
              }
            }
          },
          GetAppValidationOutput: {
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                validationOutputList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      validationId: {},
                      name: {},
                      status: {},
                      statusMessage: {},
                      latestValidationTime: {
                        type: 'timestamp'
                      },
                      appValidationOutput: {
                        type: 'structure',
                        members: {
                          ssmOutput: {
                            type: 'structure',
                            members: {
                              s3Location: {
                                shape: 'S24'
                              }
                            }
                          }
                        }
                      },
                      serverValidationOutput: {
                        type: 'structure',
                        members: {
                          server: {
                            shape: 'Sb'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetConnectors: {
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
                connectorList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      connectorId: {},
                      version: {},
                      status: {},
                      capabilityList: {
                        type: 'list',
                        member: {}
                      },
                      vmManagerName: {},
                      vmManagerType: {},
                      vmManagerId: {},
                      ipAddress: {},
                      macAddress: {},
                      associatedOn: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetReplicationJobs: {
            input: {
              type: 'structure',
              members: {
                replicationJobId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                replicationJobList: {
                  type: 'list',
                  member: {
                    shape: 'S46'
                  }
                },
                nextToken: {}
              }
            }
          },
          GetReplicationRuns: {
            input: {
              type: 'structure',
              required: ['replicationJobId'],
              members: {
                replicationJobId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                replicationJob: {
                  shape: 'S46'
                },
                replicationRunList: {
                  shape: 'S4a'
                },
                nextToken: {}
              }
            }
          },
          GetServers: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                vmServerAddressList: {
                  type: 'list',
                  member: {
                    shape: 'Sf'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lastModifiedOn: {
                  type: 'timestamp'
                },
                serverCatalogStatus: {},
                serverList: {
                  shape: 'Sa'
                },
                nextToken: {}
              }
            }
          },
          ImportAppCatalog: {
            input: {
              type: 'structure',
              members: {
                roleName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ImportServerCatalog: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          LaunchApp: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListApps: {
            input: {
              type: 'structure',
              members: {
                appIds: {
                  type: 'list',
                  member: {}
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
                apps: {
                  type: 'list',
                  member: {
                    shape: 'St'
                  }
                },
                nextToken: {}
              }
            }
          },
          NotifyAppValidationOutput: {
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {},
                notificationContext: {
                  type: 'structure',
                  members: {
                    validationId: {},
                    status: {},
                    statusMessage: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutAppLaunchConfiguration: {
            input: {
              type: 'structure',
              members: {
                appId: {},
                roleName: {},
                autoLaunch: {
                  type: 'boolean'
                },
                serverGroupLaunchConfigurations: {
                  shape: 'S2e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutAppReplicationConfiguration: {
            input: {
              type: 'structure',
              members: {
                appId: {},
                serverGroupReplicationConfigurations: {
                  shape: 'S2u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutAppValidationConfiguration: {
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {},
                appValidationConfigurations: {
                  shape: 'S31'
                },
                serverGroupValidationConfigurations: {
                  shape: 'S3c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartAppReplication: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartOnDemandAppReplication: {
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartOnDemandReplicationRun: {
            input: {
              type: 'structure',
              required: ['replicationJobId'],
              members: {
                replicationJobId: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                replicationRunId: {}
              }
            }
          },
          StopAppReplication: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TerminateApp: {
            input: {
              type: 'structure',
              members: {
                appId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateApp: {
            input: {
              type: 'structure',
              members: {
                appId: {},
                name: {},
                description: {},
                roleName: {},
                serverGroups: {
                  shape: 'S6'
                },
                tags: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                appSummary: {
                  shape: 'St'
                },
                serverGroups: {
                  shape: 'S6'
                },
                tags: {
                  shape: 'So'
                }
              }
            }
          },
          UpdateReplicationJob: {
            input: {
              type: 'structure',
              required: ['replicationJobId'],
              members: {
                replicationJobId: {},
                frequency: {
                  type: 'integer'
                },
                nextReplicationRunStartTime: {
                  type: 'timestamp'
                },
                licenseType: {},
                roleName: {},
                description: {},
                numberOfRecentAmisToKeep: {
                  type: 'integer'
                },
                encrypted: {
                  type: 'boolean'
                },
                kmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                serverGroupId: {},
                name: {},
                serverList: {
                  shape: 'Sa'
                }
              }
            }
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
              serverId: {},
              serverType: {},
              vmServer: {
                shape: 'Se'
              },
              replicationJobId: {},
              replicationJobTerminated: {
                type: 'boolean'
              }
            }
          },
          Se: {
            type: 'structure',
            members: {
              vmServerAddress: {
                shape: 'Sf'
              },
              vmName: {},
              vmManagerName: {},
              vmManagerType: {},
              vmPath: {}
            }
          },
          Sf: {
            type: 'structure',
            members: {
              vmManagerId: {},
              vmId: {}
            }
          },
          So: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          St: {
            type: 'structure',
            members: {
              appId: {},
              importedAppId: {},
              name: {},
              description: {},
              status: {},
              statusMessage: {},
              replicationConfigurationStatus: {},
              replicationStatus: {},
              replicationStatusMessage: {},
              latestReplicationTime: {
                type: 'timestamp'
              },
              launchConfigurationStatus: {},
              launchStatus: {},
              launchStatusMessage: {},
              launchDetails: {
                type: 'structure',
                members: {
                  latestLaunchTime: {
                    type: 'timestamp'
                  },
                  stackName: {},
                  stackId: {}
                }
              },
              creationTime: {
                type: 'timestamp'
              },
              lastModified: {
                type: 'timestamp'
              },
              roleName: {},
              totalServerGroups: {
                type: 'integer'
              },
              totalServers: {
                type: 'integer'
              }
            }
          },
          S24: {
            type: 'structure',
            members: {
              bucket: {},
              key: {}
            }
          },
          S2e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                serverGroupId: {},
                launchOrder: {
                  type: 'integer'
                },
                serverLaunchConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      server: {
                        shape: 'Sb'
                      },
                      logicalId: {},
                      vpc: {},
                      subnet: {},
                      securityGroup: {},
                      ec2KeyName: {},
                      userData: {
                        type: 'structure',
                        members: {
                          s3Location: {
                            shape: 'S24'
                          }
                        }
                      },
                      instanceType: {},
                      associatePublicIpAddress: {
                        type: 'boolean'
                      },
                      iamInstanceProfileName: {},
                      configureScript: {
                        shape: 'S24'
                      },
                      configureScriptType: {}
                    }
                  }
                }
              }
            }
          },
          S2u: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                serverGroupId: {},
                serverReplicationConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      server: {
                        shape: 'Sb'
                      },
                      serverReplicationParameters: {
                        type: 'structure',
                        members: {
                          seedTime: {
                            type: 'timestamp'
                          },
                          frequency: {
                            type: 'integer'
                          },
                          runOnce: {
                            type: 'boolean'
                          },
                          licenseType: {},
                          numberOfRecentAmisToKeep: {
                            type: 'integer'
                          },
                          encrypted: {
                            type: 'boolean'
                          },
                          kmsKeyId: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S31: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                validationId: {},
                name: {},
                appValidationStrategy: {},
                ssmValidationParameters: {
                  type: 'structure',
                  members: {
                    source: {
                      shape: 'S37'
                    },
                    instanceId: {},
                    scriptType: {},
                    command: {},
                    executionTimeoutSeconds: {
                      type: 'integer'
                    },
                    outputS3BucketName: {}
                  }
                }
              }
            }
          },
          S37: {
            type: 'structure',
            members: {
              s3Location: {
                shape: 'S24'
              }
            }
          },
          S3c: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                serverGroupId: {},
                serverValidationConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      server: {
                        shape: 'Sb'
                      },
                      validationId: {},
                      name: {},
                      serverValidationStrategy: {},
                      userDataValidationParameters: {
                        type: 'structure',
                        members: {
                          source: {
                            shape: 'S37'
                          },
                          scriptType: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S46: {
            type: 'structure',
            members: {
              replicationJobId: {},
              serverId: {},
              serverType: {},
              vmServer: {
                shape: 'Se'
              },
              seedReplicationTime: {
                type: 'timestamp'
              },
              frequency: {
                type: 'integer'
              },
              runOnce: {
                type: 'boolean'
              },
              nextReplicationRunStartTime: {
                type: 'timestamp'
              },
              licenseType: {},
              roleName: {},
              latestAmiId: {},
              state: {},
              statusMessage: {},
              description: {},
              numberOfRecentAmisToKeep: {
                type: 'integer'
              },
              encrypted: {
                type: 'boolean'
              },
              kmsKeyId: {},
              replicationRunList: {
                shape: 'S4a'
              }
            }
          },
          S4a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                replicationRunId: {},
                state: {},
                type: {},
                stageDetails: {
                  type: 'structure',
                  members: {
                    stage: {},
                    stageProgress: {}
                  }
                },
                statusMessage: {},
                amiId: {},
                scheduledStartTime: {
                  type: 'timestamp'
                },
                completedTime: {
                  type: 'timestamp'
                },
                description: {},
                encrypted: {
                  type: 'boolean'
                },
                kmsKeyId: {}
              }
            }
          }
        },
        deprecated: true,
        deprecatedMessage: 'AWS Server Migration Service is Deprecated.'
      });
    }
  };
});
//# sourceMappingURL=f85ff860f23bf956804f5e1cbcb308cc2063bf33.js.map