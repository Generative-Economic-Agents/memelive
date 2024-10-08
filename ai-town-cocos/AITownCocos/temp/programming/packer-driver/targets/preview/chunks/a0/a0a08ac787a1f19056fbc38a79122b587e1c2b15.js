System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-10-01',
          endpointPrefix: 'gamelift',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon GameLift',
          serviceId: 'GameLift',
          signatureVersion: 'v4',
          targetPrefix: 'GameLift',
          uid: 'gamelift-2015-10-01'
        },
        operations: {
          AcceptMatch: {
            input: {
              type: 'structure',
              required: ['TicketId', 'PlayerIds', 'AcceptanceType'],
              members: {
                TicketId: {},
                PlayerIds: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  },
                  sensitive: true
                },
                AcceptanceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ClaimGameServer: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName'],
              members: {
                GameServerGroupName: {},
                GameServerId: {},
                GameServerData: {},
                FilterOption: {
                  type: 'structure',
                  members: {
                    InstanceStatuses: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServer: {
                  shape: 'Sf'
                }
              }
            }
          },
          CreateAlias: {
            input: {
              type: 'structure',
              required: ['Name', 'RoutingStrategy'],
              members: {
                Name: {},
                Description: {},
                RoutingStrategy: {
                  shape: 'Sq'
                },
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Alias: {
                  shape: 'Sz'
                }
              }
            }
          },
          CreateBuild: {
            input: {
              type: 'structure',
              members: {
                Name: {},
                Version: {},
                StorageLocation: {
                  shape: 'S13'
                },
                OperatingSystem: {},
                Tags: {
                  shape: 'Su'
                },
                ServerSdkVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Build: {
                  shape: 'S18'
                },
                UploadCredentials: {
                  shape: 'S1d'
                },
                StorageLocation: {
                  shape: 'S13'
                }
              }
            }
          },
          CreateContainerGroupDefinition: {
            input: {
              type: 'structure',
              required: ['Name', 'TotalMemoryLimit', 'TotalCpuLimit', 'ContainerDefinitions', 'OperatingSystem'],
              members: {
                Name: {},
                SchedulingStrategy: {},
                TotalMemoryLimit: {
                  type: 'integer'
                },
                TotalCpuLimit: {
                  type: 'integer'
                },
                ContainerDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ContainerName', 'ImageUri'],
                    members: {
                      ContainerName: {},
                      ImageUri: {},
                      MemoryLimits: {
                        shape: 'S1n'
                      },
                      PortConfiguration: {
                        shape: 'S1p'
                      },
                      Cpu: {
                        type: 'integer'
                      },
                      HealthCheck: {
                        shape: 'S1v'
                      },
                      Command: {
                        shape: 'S1w'
                      },
                      Essential: {
                        type: 'boolean'
                      },
                      EntryPoint: {
                        shape: 'S23'
                      },
                      WorkingDirectory: {},
                      Environment: {
                        shape: 'S24'
                      },
                      DependsOn: {
                        shape: 'S26'
                      }
                    }
                  }
                },
                OperatingSystem: {},
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContainerGroupDefinition: {
                  shape: 'S2b'
                }
              }
            }
          },
          CreateFleet: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                BuildId: {},
                ScriptId: {},
                ServerLaunchPath: {},
                ServerLaunchParameters: {},
                LogPaths: {
                  shape: 'S2m'
                },
                EC2InstanceType: {},
                EC2InboundPermissions: {
                  shape: 'S2o'
                },
                NewGameSessionProtectionPolicy: {},
                RuntimeConfiguration: {
                  shape: 'S2s'
                },
                ResourceCreationLimitPolicy: {
                  shape: 'S2y'
                },
                MetricGroups: {
                  shape: 'S30'
                },
                PeerVpcAwsAccountId: {},
                PeerVpcId: {},
                FleetType: {},
                InstanceRoleArn: {},
                CertificateConfiguration: {
                  shape: 'S33'
                },
                Locations: {
                  shape: 'S35'
                },
                Tags: {
                  shape: 'Su'
                },
                ComputeType: {},
                AnywhereConfiguration: {
                  shape: 'S39'
                },
                InstanceRoleCredentialsProvider: {},
                ContainerGroupsConfiguration: {
                  type: 'structure',
                  required: ['ContainerGroupDefinitionNames', 'ConnectionPortRange'],
                  members: {
                    ContainerGroupDefinitionNames: {
                      type: 'list',
                      member: {}
                    },
                    ConnectionPortRange: {
                      shape: 'S3f'
                    },
                    DesiredReplicaContainerGroupsPerInstance: {
                      type: 'integer'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetAttributes: {
                  shape: 'S3i'
                },
                LocationStates: {
                  shape: 'S3t'
                }
              }
            }
          },
          CreateFleetLocations: {
            input: {
              type: 'structure',
              required: ['FleetId', 'Locations'],
              members: {
                FleetId: {},
                Locations: {
                  shape: 'S35'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {},
                LocationStates: {
                  shape: 'S3t'
                }
              }
            }
          },
          CreateGameServerGroup: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName', 'RoleArn', 'MinSize', 'MaxSize', 'LaunchTemplate', 'InstanceDefinitions'],
              members: {
                GameServerGroupName: {},
                RoleArn: {},
                MinSize: {
                  type: 'integer'
                },
                MaxSize: {
                  type: 'integer'
                },
                LaunchTemplate: {
                  type: 'structure',
                  members: {
                    LaunchTemplateId: {},
                    LaunchTemplateName: {},
                    Version: {}
                  }
                },
                InstanceDefinitions: {
                  shape: 'S44'
                },
                AutoScalingPolicy: {
                  type: 'structure',
                  required: ['TargetTrackingConfiguration'],
                  members: {
                    EstimatedInstanceWarmup: {
                      type: 'integer'
                    },
                    TargetTrackingConfiguration: {
                      type: 'structure',
                      required: ['TargetValue'],
                      members: {
                        TargetValue: {
                          type: 'double'
                        }
                      }
                    }
                  }
                },
                BalancingStrategy: {},
                GameServerProtectionPolicy: {},
                VpcSubnets: {
                  type: 'list',
                  member: {}
                },
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServerGroup: {
                  shape: 'S4g'
                }
              }
            }
          },
          CreateGameSession: {
            input: {
              type: 'structure',
              required: ['MaximumPlayerSessionCount'],
              members: {
                FleetId: {},
                AliasId: {},
                MaximumPlayerSessionCount: {
                  type: 'integer'
                },
                Name: {},
                GameProperties: {
                  shape: 'S4n'
                },
                CreatorId: {},
                GameSessionId: {},
                IdempotencyToken: {},
                GameSessionData: {},
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSession: {
                  shape: 'S4u'
                }
              }
            }
          },
          CreateGameSessionQueue: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                TimeoutInSeconds: {
                  type: 'integer'
                },
                PlayerLatencyPolicies: {
                  shape: 'S53'
                },
                Destinations: {
                  shape: 'S55'
                },
                FilterConfiguration: {
                  shape: 'S58'
                },
                PriorityConfiguration: {
                  shape: 'S5a'
                },
                CustomEventData: {},
                NotificationTarget: {},
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessionQueue: {
                  shape: 'S5g'
                }
              }
            }
          },
          CreateLocation: {
            input: {
              type: 'structure',
              required: ['LocationName'],
              members: {
                LocationName: {},
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Location: {
                  shape: 'S5l'
                }
              }
            }
          },
          CreateMatchmakingConfiguration: {
            input: {
              type: 'structure',
              required: ['Name', 'RequestTimeoutSeconds', 'AcceptanceRequired', 'RuleSetName'],
              members: {
                Name: {},
                Description: {},
                GameSessionQueueArns: {
                  shape: 'S5o'
                },
                RequestTimeoutSeconds: {
                  type: 'integer'
                },
                AcceptanceTimeoutSeconds: {
                  type: 'integer'
                },
                AcceptanceRequired: {
                  type: 'boolean'
                },
                RuleSetName: {},
                NotificationTarget: {},
                AdditionalPlayerCount: {
                  type: 'integer'
                },
                CustomEventData: {},
                GameProperties: {
                  shape: 'S4n'
                },
                GameSessionData: {},
                BackfillMode: {},
                FlexMatchMode: {},
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Configuration: {
                  shape: 'S5y'
                }
              }
            }
          },
          CreateMatchmakingRuleSet: {
            input: {
              type: 'structure',
              required: ['Name', 'RuleSetBody'],
              members: {
                Name: {},
                RuleSetBody: {},
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RuleSet'],
              members: {
                RuleSet: {
                  shape: 'S64'
                }
              }
            }
          },
          CreatePlayerSession: {
            input: {
              type: 'structure',
              required: ['GameSessionId', 'PlayerId'],
              members: {
                GameSessionId: {},
                PlayerId: {
                  shape: 'S4'
                },
                PlayerData: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PlayerSession: {
                  shape: 'S68'
                }
              }
            }
          },
          CreatePlayerSessions: {
            input: {
              type: 'structure',
              required: ['GameSessionId', 'PlayerIds'],
              members: {
                GameSessionId: {},
                PlayerIds: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  },
                  sensitive: true
                },
                PlayerDataMap: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PlayerSessions: {
                  shape: 'S6f'
                }
              }
            }
          },
          CreateScript: {
            input: {
              type: 'structure',
              members: {
                Name: {},
                Version: {},
                StorageLocation: {
                  shape: 'S13'
                },
                ZipFile: {
                  type: 'blob'
                },
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Script: {
                  shape: 'S6j'
                }
              }
            }
          },
          CreateVpcPeeringAuthorization: {
            input: {
              type: 'structure',
              required: ['GameLiftAwsAccountId', 'PeerVpcId'],
              members: {
                GameLiftAwsAccountId: {},
                PeerVpcId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VpcPeeringAuthorization: {
                  shape: 'S6m'
                }
              }
            }
          },
          CreateVpcPeeringConnection: {
            input: {
              type: 'structure',
              required: ['FleetId', 'PeerVpcAwsAccountId', 'PeerVpcId'],
              members: {
                FleetId: {},
                PeerVpcAwsAccountId: {},
                PeerVpcId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAlias: {
            input: {
              type: 'structure',
              required: ['AliasId'],
              members: {
                AliasId: {}
              }
            }
          },
          DeleteBuild: {
            input: {
              type: 'structure',
              required: ['BuildId'],
              members: {
                BuildId: {}
              }
            }
          },
          DeleteContainerGroupDefinition: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DeleteFleet: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {}
              }
            }
          },
          DeleteFleetLocations: {
            input: {
              type: 'structure',
              required: ['FleetId', 'Locations'],
              members: {
                FleetId: {},
                Locations: {
                  shape: 'S59'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {},
                LocationStates: {
                  shape: 'S3t'
                }
              }
            }
          },
          DeleteGameServerGroup: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName'],
              members: {
                GameServerGroupName: {},
                DeleteOption: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServerGroup: {
                  shape: 'S4g'
                }
              }
            }
          },
          DeleteGameSessionQueue: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLocation: {
            input: {
              type: 'structure',
              required: ['LocationName'],
              members: {
                LocationName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMatchmakingConfiguration: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMatchmakingRuleSet: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteScalingPolicy: {
            input: {
              type: 'structure',
              required: ['Name', 'FleetId'],
              members: {
                Name: {},
                FleetId: {}
              }
            }
          },
          DeleteScript: {
            input: {
              type: 'structure',
              required: ['ScriptId'],
              members: {
                ScriptId: {}
              }
            }
          },
          DeleteVpcPeeringAuthorization: {
            input: {
              type: 'structure',
              required: ['GameLiftAwsAccountId', 'PeerVpcId'],
              members: {
                GameLiftAwsAccountId: {},
                PeerVpcId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteVpcPeeringConnection: {
            input: {
              type: 'structure',
              required: ['FleetId', 'VpcPeeringConnectionId'],
              members: {
                FleetId: {},
                VpcPeeringConnectionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterCompute: {
            input: {
              type: 'structure',
              required: ['FleetId', 'ComputeName'],
              members: {
                FleetId: {},
                ComputeName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterGameServer: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName', 'GameServerId'],
              members: {
                GameServerGroupName: {},
                GameServerId: {}
              }
            }
          },
          DescribeAlias: {
            input: {
              type: 'structure',
              required: ['AliasId'],
              members: {
                AliasId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Alias: {
                  shape: 'Sz'
                }
              }
            }
          },
          DescribeBuild: {
            input: {
              type: 'structure',
              required: ['BuildId'],
              members: {
                BuildId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Build: {
                  shape: 'S18'
                }
              }
            }
          },
          DescribeCompute: {
            input: {
              type: 'structure',
              required: ['FleetId', 'ComputeName'],
              members: {
                FleetId: {},
                ComputeName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Compute: {
                  shape: 'S7p'
                }
              }
            }
          },
          DescribeContainerGroupDefinition: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContainerGroupDefinition: {
                  shape: 'S2b'
                }
              }
            }
          },
          DescribeEC2InstanceLimits: {
            input: {
              type: 'structure',
              members: {
                EC2InstanceType: {},
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EC2InstanceLimits: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EC2InstanceType: {},
                      CurrentInstances: {
                        type: 'integer'
                      },
                      InstanceLimit: {
                        type: 'integer'
                      },
                      Location: {}
                    }
                  }
                }
              }
            }
          },
          DescribeFleetAttributes: {
            input: {
              type: 'structure',
              members: {
                FleetIds: {
                  shape: 'S86'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetAttributes: {
                  type: 'list',
                  member: {
                    shape: 'S3i'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleetCapacity: {
            input: {
              type: 'structure',
              members: {
                FleetIds: {
                  shape: 'S86'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetCapacity: {
                  type: 'list',
                  member: {
                    shape: 'S8c'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleetEvents: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventId: {},
                      ResourceId: {},
                      EventCode: {},
                      Message: {},
                      EventTime: {
                        type: 'timestamp'
                      },
                      PreSignedLogUrl: {},
                      Count: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleetLocationAttributes: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                Locations: {
                  shape: 'S59'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {},
                LocationAttributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LocationState: {
                        shape: 'S3u'
                      },
                      StoppedActions: {
                        shape: 'S3n'
                      },
                      UpdateStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleetLocationCapacity: {
            input: {
              type: 'structure',
              required: ['FleetId', 'Location'],
              members: {
                FleetId: {},
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetCapacity: {
                  shape: 'S8c'
                }
              }
            }
          },
          DescribeFleetLocationUtilization: {
            input: {
              type: 'structure',
              required: ['FleetId', 'Location'],
              members: {
                FleetId: {},
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetUtilization: {
                  shape: 'S8u'
                }
              }
            }
          },
          DescribeFleetPortSettings: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {},
                InboundPermissions: {
                  shape: 'S2o'
                },
                UpdateStatus: {},
                Location: {}
              }
            }
          },
          DescribeFleetUtilization: {
            input: {
              type: 'structure',
              members: {
                FleetIds: {
                  shape: 'S86'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetUtilization: {
                  type: 'list',
                  member: {
                    shape: 'S8u'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeGameServer: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName', 'GameServerId'],
              members: {
                GameServerGroupName: {},
                GameServerId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServer: {
                  shape: 'Sf'
                }
              }
            }
          },
          DescribeGameServerGroup: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName'],
              members: {
                GameServerGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServerGroup: {
                  shape: 'S4g'
                }
              }
            }
          },
          DescribeGameServerInstances: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName'],
              members: {
                GameServerGroupName: {},
                InstanceIds: {
                  type: 'list',
                  member: {}
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServerInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GameServerGroupName: {},
                      GameServerGroupArn: {},
                      InstanceId: {},
                      InstanceStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeGameSessionDetails: {
            input: {
              type: 'structure',
              members: {
                FleetId: {},
                GameSessionId: {},
                AliasId: {},
                Location: {},
                StatusFilter: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessionDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GameSession: {
                        shape: 'S4u'
                      },
                      ProtectionPolicy: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeGameSessionPlacement: {
            input: {
              type: 'structure',
              required: ['PlacementId'],
              members: {
                PlacementId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessionPlacement: {
                  shape: 'S9g'
                }
              }
            }
          },
          DescribeGameSessionQueues: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  type: 'list',
                  member: {}
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessionQueues: {
                  type: 'list',
                  member: {
                    shape: 'S5g'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeGameSessions: {
            input: {
              type: 'structure',
              members: {
                FleetId: {},
                GameSessionId: {},
                AliasId: {},
                Location: {},
                StatusFilter: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessions: {
                  shape: 'S9t'
                },
                NextToken: {}
              }
            }
          },
          DescribeInstances: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                InstanceId: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {},
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Instances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FleetId: {},
                      FleetArn: {},
                      InstanceId: {},
                      IpAddress: {
                        shape: 'S4x'
                      },
                      DnsName: {},
                      OperatingSystem: {},
                      Type: {},
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      Location: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMatchmaking: {
            input: {
              type: 'structure',
              required: ['TicketIds'],
              members: {
                TicketIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TicketList: {
                  type: 'list',
                  member: {
                    shape: 'Sa3'
                  }
                }
              }
            }
          },
          DescribeMatchmakingConfigurations: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  type: 'list',
                  member: {}
                },
                RuleSetName: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Configurations: {
                  type: 'list',
                  member: {
                    shape: 'S5y'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMatchmakingRuleSets: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  type: 'list',
                  member: {}
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RuleSets'],
              members: {
                RuleSets: {
                  type: 'list',
                  member: {
                    shape: 'S64'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePlayerSessions: {
            input: {
              type: 'structure',
              members: {
                GameSessionId: {},
                PlayerId: {
                  shape: 'S4'
                },
                PlayerSessionId: {},
                PlayerSessionStatusFilter: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PlayerSessions: {
                  shape: 'S6f'
                },
                NextToken: {}
              }
            }
          },
          DescribeRuntimeConfiguration: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RuntimeConfiguration: {
                  shape: 'S2s'
                }
              }
            }
          },
          DescribeScalingPolicies: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                StatusFilter: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {},
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ScalingPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FleetId: {},
                      FleetArn: {},
                      Name: {},
                      Status: {},
                      ScalingAdjustment: {
                        type: 'integer'
                      },
                      ScalingAdjustmentType: {},
                      ComparisonOperator: {},
                      Threshold: {
                        type: 'double'
                      },
                      EvaluationPeriods: {
                        type: 'integer'
                      },
                      MetricName: {},
                      PolicyType: {},
                      TargetConfiguration: {
                        shape: 'Sb6'
                      },
                      UpdateStatus: {},
                      Location: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeScript: {
            input: {
              type: 'structure',
              required: ['ScriptId'],
              members: {
                ScriptId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Script: {
                  shape: 'S6j'
                }
              }
            }
          },
          DescribeVpcPeeringAuthorizations: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                VpcPeeringAuthorizations: {
                  type: 'list',
                  member: {
                    shape: 'S6m'
                  }
                }
              }
            }
          },
          DescribeVpcPeeringConnections: {
            input: {
              type: 'structure',
              members: {
                FleetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VpcPeeringConnections: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FleetId: {},
                      FleetArn: {},
                      IpV4CidrBlock: {},
                      VpcPeeringConnectionId: {},
                      Status: {
                        type: 'structure',
                        members: {
                          Code: {},
                          Message: {}
                        }
                      },
                      PeerVpcId: {},
                      GameLiftVpcId: {}
                    }
                  }
                }
              }
            }
          },
          GetComputeAccess: {
            input: {
              type: 'structure',
              required: ['FleetId', 'ComputeName'],
              members: {
                FleetId: {},
                ComputeName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {},
                ComputeName: {},
                ComputeArn: {},
                Credentials: {
                  shape: 'S1d'
                },
                Target: {}
              }
            }
          },
          GetComputeAuthToken: {
            input: {
              type: 'structure',
              required: ['FleetId', 'ComputeName'],
              members: {
                FleetId: {},
                ComputeName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {},
                ComputeName: {},
                ComputeArn: {},
                AuthToken: {},
                ExpirationTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetGameSessionLogUrl: {
            input: {
              type: 'structure',
              required: ['GameSessionId'],
              members: {
                GameSessionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PreSignedUrl: {}
              }
            }
          },
          GetInstanceAccess: {
            input: {
              type: 'structure',
              required: ['FleetId', 'InstanceId'],
              members: {
                FleetId: {},
                InstanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceAccess: {
                  type: 'structure',
                  members: {
                    FleetId: {},
                    InstanceId: {},
                    IpAddress: {
                      shape: 'S4x'
                    },
                    OperatingSystem: {},
                    Credentials: {
                      type: 'structure',
                      members: {
                        UserName: {},
                        Secret: {}
                      },
                      sensitive: true
                    }
                  }
                }
              }
            }
          },
          ListAliases: {
            input: {
              type: 'structure',
              members: {
                RoutingStrategyType: {},
                Name: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Aliases: {
                  type: 'list',
                  member: {
                    shape: 'Sz'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListBuilds: {
            input: {
              type: 'structure',
              members: {
                Status: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Builds: {
                  type: 'list',
                  member: {
                    shape: 'S18'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCompute: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                Location: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ComputeList: {
                  type: 'list',
                  member: {
                    shape: 'S7p'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListContainerGroupDefinitions: {
            input: {
              type: 'structure',
              members: {
                SchedulingStrategy: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContainerGroupDefinitions: {
                  type: 'list',
                  member: {
                    shape: 'S2b'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFleets: {
            input: {
              type: 'structure',
              members: {
                BuildId: {},
                ScriptId: {},
                ContainerGroupDefinitionName: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListGameServerGroups: {
            input: {
              type: 'structure',
              members: {
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServerGroups: {
                  type: 'list',
                  member: {
                    shape: 'S4g'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListGameServers: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName'],
              members: {
                GameServerGroupName: {},
                SortOrder: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServers: {
                  type: 'list',
                  member: {
                    shape: 'Sf'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLocations: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {}
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Locations: {
                  type: 'list',
                  member: {
                    shape: 'S5l'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListScripts: {
            input: {
              type: 'structure',
              members: {
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Scripts: {
                  type: 'list',
                  member: {
                    shape: 'S6j'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Su'
                }
              }
            }
          },
          PutScalingPolicy: {
            input: {
              type: 'structure',
              required: ['Name', 'FleetId', 'MetricName'],
              members: {
                Name: {},
                FleetId: {},
                ScalingAdjustment: {
                  type: 'integer'
                },
                ScalingAdjustmentType: {},
                Threshold: {
                  type: 'double'
                },
                ComparisonOperator: {},
                EvaluationPeriods: {
                  type: 'integer'
                },
                MetricName: {},
                PolicyType: {},
                TargetConfiguration: {
                  shape: 'Sb6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          },
          RegisterCompute: {
            input: {
              type: 'structure',
              required: ['FleetId', 'ComputeName'],
              members: {
                FleetId: {},
                ComputeName: {},
                CertificatePath: {},
                DnsName: {},
                IpAddress: {
                  shape: 'S4x'
                },
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Compute: {
                  shape: 'S7p'
                }
              }
            }
          },
          RegisterGameServer: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName', 'GameServerId', 'InstanceId'],
              members: {
                GameServerGroupName: {},
                GameServerId: {},
                InstanceId: {},
                ConnectionInfo: {},
                GameServerData: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServer: {
                  shape: 'Sf'
                }
              }
            }
          },
          RequestUploadCredentials: {
            input: {
              type: 'structure',
              required: ['BuildId'],
              members: {
                BuildId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UploadCredentials: {
                  shape: 'S1d'
                },
                StorageLocation: {
                  shape: 'S13'
                }
              }
            }
          },
          ResolveAlias: {
            input: {
              type: 'structure',
              required: ['AliasId'],
              members: {
                AliasId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {}
              }
            }
          },
          ResumeGameServerGroup: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName', 'ResumeActions'],
              members: {
                GameServerGroupName: {},
                ResumeActions: {
                  shape: 'S4j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServerGroup: {
                  shape: 'S4g'
                }
              }
            }
          },
          SearchGameSessions: {
            input: {
              type: 'structure',
              members: {
                FleetId: {},
                AliasId: {},
                Location: {},
                FilterExpression: {},
                SortExpression: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessions: {
                  shape: 'S9t'
                },
                NextToken: {}
              }
            }
          },
          StartFleetActions: {
            input: {
              type: 'structure',
              required: ['FleetId', 'Actions'],
              members: {
                FleetId: {},
                Actions: {
                  shape: 'S3n'
                },
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {}
              }
            }
          },
          StartGameSessionPlacement: {
            input: {
              type: 'structure',
              required: ['PlacementId', 'GameSessionQueueName', 'MaximumPlayerSessionCount'],
              members: {
                PlacementId: {},
                GameSessionQueueName: {},
                GameProperties: {
                  shape: 'S4n'
                },
                MaximumPlayerSessionCount: {
                  type: 'integer'
                },
                GameSessionName: {},
                PlayerLatencies: {
                  shape: 'S9i'
                },
                DesiredPlayerSessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PlayerId: {
                        shape: 'S4'
                      },
                      PlayerData: {}
                    }
                  }
                },
                GameSessionData: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessionPlacement: {
                  shape: 'S9g'
                }
              }
            }
          },
          StartMatchBackfill: {
            input: {
              type: 'structure',
              required: ['ConfigurationName', 'Players'],
              members: {
                TicketId: {},
                ConfigurationName: {},
                GameSessionArn: {},
                Players: {
                  shape: 'Sa6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MatchmakingTicket: {
                  shape: 'Sa3'
                }
              }
            }
          },
          StartMatchmaking: {
            input: {
              type: 'structure',
              required: ['ConfigurationName', 'Players'],
              members: {
                TicketId: {},
                ConfigurationName: {},
                Players: {
                  shape: 'Sa6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MatchmakingTicket: {
                  shape: 'Sa3'
                }
              }
            }
          },
          StopFleetActions: {
            input: {
              type: 'structure',
              required: ['FleetId', 'Actions'],
              members: {
                FleetId: {},
                Actions: {
                  shape: 'S3n'
                },
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {}
              }
            }
          },
          StopGameSessionPlacement: {
            input: {
              type: 'structure',
              required: ['PlacementId'],
              members: {
                PlacementId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessionPlacement: {
                  shape: 'S9g'
                }
              }
            }
          },
          StopMatchmaking: {
            input: {
              type: 'structure',
              required: ['TicketId'],
              members: {
                TicketId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SuspendGameServerGroup: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName', 'SuspendActions'],
              members: {
                GameServerGroupName: {},
                SuspendActions: {
                  shape: 'S4j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServerGroup: {
                  shape: 'S4g'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'Su'
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
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
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
          UpdateAlias: {
            input: {
              type: 'structure',
              required: ['AliasId'],
              members: {
                AliasId: {},
                Name: {},
                Description: {},
                RoutingStrategy: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Alias: {
                  shape: 'Sz'
                }
              }
            }
          },
          UpdateBuild: {
            input: {
              type: 'structure',
              required: ['BuildId'],
              members: {
                BuildId: {},
                Name: {},
                Version: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Build: {
                  shape: 'S18'
                }
              }
            }
          },
          UpdateFleetAttributes: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                Name: {},
                Description: {},
                NewGameSessionProtectionPolicy: {},
                ResourceCreationLimitPolicy: {
                  shape: 'S2y'
                },
                MetricGroups: {
                  shape: 'S30'
                },
                AnywhereConfiguration: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {}
              }
            }
          },
          UpdateFleetCapacity: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                DesiredInstances: {
                  type: 'integer'
                },
                MinSize: {
                  type: 'integer'
                },
                MaxSize: {
                  type: 'integer'
                },
                Location: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {},
                Location: {}
              }
            }
          },
          UpdateFleetPortSettings: {
            input: {
              type: 'structure',
              required: ['FleetId'],
              members: {
                FleetId: {},
                InboundPermissionAuthorizations: {
                  shape: 'S2o'
                },
                InboundPermissionRevocations: {
                  shape: 'S2o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetId: {},
                FleetArn: {}
              }
            }
          },
          UpdateGameServer: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName', 'GameServerId'],
              members: {
                GameServerGroupName: {},
                GameServerId: {},
                GameServerData: {},
                UtilizationStatus: {},
                HealthCheck: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServer: {
                  shape: 'Sf'
                }
              }
            }
          },
          UpdateGameServerGroup: {
            input: {
              type: 'structure',
              required: ['GameServerGroupName'],
              members: {
                GameServerGroupName: {},
                RoleArn: {},
                InstanceDefinitions: {
                  shape: 'S44'
                },
                GameServerProtectionPolicy: {},
                BalancingStrategy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameServerGroup: {
                  shape: 'S4g'
                }
              }
            }
          },
          UpdateGameSession: {
            input: {
              type: 'structure',
              required: ['GameSessionId'],
              members: {
                GameSessionId: {},
                MaximumPlayerSessionCount: {
                  type: 'integer'
                },
                Name: {},
                PlayerSessionCreationPolicy: {},
                ProtectionPolicy: {},
                GameProperties: {
                  shape: 'S4n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSession: {
                  shape: 'S4u'
                }
              }
            }
          },
          UpdateGameSessionQueue: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                TimeoutInSeconds: {
                  type: 'integer'
                },
                PlayerLatencyPolicies: {
                  shape: 'S53'
                },
                Destinations: {
                  shape: 'S55'
                },
                FilterConfiguration: {
                  shape: 'S58'
                },
                PriorityConfiguration: {
                  shape: 'S5a'
                },
                CustomEventData: {},
                NotificationTarget: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GameSessionQueue: {
                  shape: 'S5g'
                }
              }
            }
          },
          UpdateMatchmakingConfiguration: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                GameSessionQueueArns: {
                  shape: 'S5o'
                },
                RequestTimeoutSeconds: {
                  type: 'integer'
                },
                AcceptanceTimeoutSeconds: {
                  type: 'integer'
                },
                AcceptanceRequired: {
                  type: 'boolean'
                },
                RuleSetName: {},
                NotificationTarget: {},
                AdditionalPlayerCount: {
                  type: 'integer'
                },
                CustomEventData: {},
                GameProperties: {
                  shape: 'S4n'
                },
                GameSessionData: {},
                BackfillMode: {},
                FlexMatchMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Configuration: {
                  shape: 'S5y'
                }
              }
            }
          },
          UpdateRuntimeConfiguration: {
            input: {
              type: 'structure',
              required: ['FleetId', 'RuntimeConfiguration'],
              members: {
                FleetId: {},
                RuntimeConfiguration: {
                  shape: 'S2s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RuntimeConfiguration: {
                  shape: 'S2s'
                }
              }
            }
          },
          UpdateScript: {
            input: {
              type: 'structure',
              required: ['ScriptId'],
              members: {
                ScriptId: {},
                Name: {},
                Version: {},
                StorageLocation: {
                  shape: 'S13'
                },
                ZipFile: {
                  type: 'blob'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Script: {
                  shape: 'S6j'
                }
              }
            }
          },
          ValidateMatchmakingRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetBody'],
              members: {
                RuleSetBody: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Valid: {
                  type: 'boolean'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'string',
            sensitive: true
          },
          Sf: {
            type: 'structure',
            members: {
              GameServerGroupName: {},
              GameServerGroupArn: {},
              GameServerId: {},
              InstanceId: {},
              ConnectionInfo: {},
              GameServerData: {},
              ClaimStatus: {},
              UtilizationStatus: {},
              RegistrationTime: {
                type: 'timestamp'
              },
              LastClaimTime: {
                type: 'timestamp'
              },
              LastHealthCheckTime: {
                type: 'timestamp'
              }
            }
          },
          Sq: {
            type: 'structure',
            members: {
              Type: {},
              FleetId: {},
              Message: {}
            }
          },
          Su: {
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
          Sz: {
            type: 'structure',
            members: {
              AliasId: {},
              Name: {},
              AliasArn: {},
              Description: {},
              RoutingStrategy: {
                shape: 'Sq'
              },
              CreationTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              }
            }
          },
          S13: {
            type: 'structure',
            members: {
              Bucket: {},
              Key: {},
              RoleArn: {},
              ObjectVersion: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              BuildId: {},
              BuildArn: {},
              Name: {},
              Version: {},
              Status: {},
              SizeOnDisk: {
                type: 'long'
              },
              OperatingSystem: {},
              CreationTime: {
                type: 'timestamp'
              },
              ServerSdkVersion: {}
            }
          },
          S1d: {
            type: 'structure',
            members: {
              AccessKeyId: {},
              SecretAccessKey: {},
              SessionToken: {}
            },
            sensitive: true
          },
          S1n: {
            type: 'structure',
            members: {
              SoftLimit: {
                type: 'integer'
              },
              HardLimit: {
                type: 'integer'
              }
            }
          },
          S1p: {
            type: 'structure',
            required: ['ContainerPortRanges'],
            members: {
              ContainerPortRanges: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['FromPort', 'ToPort', 'Protocol'],
                  members: {
                    FromPort: {
                      shape: 'S1s'
                    },
                    ToPort: {
                      shape: 'S1s'
                    },
                    Protocol: {}
                  }
                }
              }
            }
          },
          S1s: {
            type: 'integer',
            sensitive: true
          },
          S1v: {
            type: 'structure',
            required: ['Command'],
            members: {
              Command: {
                shape: 'S1w'
              },
              Interval: {
                type: 'integer'
              },
              Timeout: {
                type: 'integer'
              },
              Retries: {
                type: 'integer'
              },
              StartPeriod: {
                type: 'integer'
              }
            }
          },
          S1w: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'list',
            member: {}
          },
          S24: {
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
          S26: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ContainerName', 'Condition'],
              members: {
                ContainerName: {},
                Condition: {}
              }
            }
          },
          S2b: {
            type: 'structure',
            members: {
              ContainerGroupDefinitionArn: {},
              CreationTime: {
                type: 'timestamp'
              },
              OperatingSystem: {},
              Name: {},
              SchedulingStrategy: {},
              TotalMemoryLimit: {
                type: 'integer'
              },
              TotalCpuLimit: {
                type: 'integer'
              },
              ContainerDefinitions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ContainerName', 'ImageUri'],
                  members: {
                    ContainerName: {},
                    ImageUri: {},
                    ResolvedImageDigest: {},
                    MemoryLimits: {
                      shape: 'S1n'
                    },
                    PortConfiguration: {
                      shape: 'S1p'
                    },
                    Cpu: {
                      type: 'integer'
                    },
                    HealthCheck: {
                      shape: 'S1v'
                    },
                    Command: {
                      shape: 'S1w'
                    },
                    Essential: {
                      type: 'boolean'
                    },
                    EntryPoint: {
                      shape: 'S23'
                    },
                    WorkingDirectory: {},
                    Environment: {
                      shape: 'S24'
                    },
                    DependsOn: {
                      shape: 'S26'
                    }
                  }
                }
              },
              Status: {},
              StatusReason: {}
            }
          },
          S2m: {
            type: 'list',
            member: {}
          },
          S2o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['FromPort', 'ToPort', 'IpRange', 'Protocol'],
              members: {
                FromPort: {
                  shape: 'S1s'
                },
                ToPort: {
                  shape: 'S1s'
                },
                IpRange: {
                  type: 'string',
                  sensitive: true
                },
                Protocol: {}
              }
            }
          },
          S2s: {
            type: 'structure',
            members: {
              ServerProcesses: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['LaunchPath', 'ConcurrentExecutions'],
                  members: {
                    LaunchPath: {},
                    Parameters: {},
                    ConcurrentExecutions: {
                      type: 'integer'
                    }
                  }
                }
              },
              MaxConcurrentGameSessionActivations: {
                type: 'integer'
              },
              GameSessionActivationTimeoutSeconds: {
                type: 'integer'
              }
            }
          },
          S2y: {
            type: 'structure',
            members: {
              NewGameSessionsPerCreator: {
                type: 'integer'
              },
              PolicyPeriodInMinutes: {
                type: 'integer'
              }
            }
          },
          S30: {
            type: 'list',
            member: {}
          },
          S33: {
            type: 'structure',
            required: ['CertificateType'],
            members: {
              CertificateType: {}
            }
          },
          S35: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Location'],
              members: {
                Location: {}
              }
            }
          },
          S39: {
            type: 'structure',
            required: ['Cost'],
            members: {
              Cost: {}
            }
          },
          S3f: {
            type: 'structure',
            required: ['FromPort', 'ToPort'],
            members: {
              FromPort: {
                shape: 'S1s'
              },
              ToPort: {
                shape: 'S1s'
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              FleetId: {},
              FleetArn: {},
              FleetType: {},
              InstanceType: {},
              Description: {},
              Name: {},
              CreationTime: {
                type: 'timestamp'
              },
              TerminationTime: {
                type: 'timestamp'
              },
              Status: {},
              BuildId: {},
              BuildArn: {},
              ScriptId: {},
              ScriptArn: {},
              ServerLaunchPath: {},
              ServerLaunchParameters: {},
              LogPaths: {
                shape: 'S2m'
              },
              NewGameSessionProtectionPolicy: {},
              OperatingSystem: {},
              ResourceCreationLimitPolicy: {
                shape: 'S2y'
              },
              MetricGroups: {
                shape: 'S30'
              },
              StoppedActions: {
                shape: 'S3n'
              },
              InstanceRoleArn: {},
              CertificateConfiguration: {
                shape: 'S33'
              },
              ComputeType: {},
              AnywhereConfiguration: {
                shape: 'S39'
              },
              InstanceRoleCredentialsProvider: {},
              ContainerGroupsAttributes: {
                type: 'structure',
                members: {
                  ContainerGroupDefinitionProperties: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        SchedulingStrategy: {},
                        ContainerGroupDefinitionName: {}
                      }
                    }
                  },
                  ConnectionPortRange: {
                    shape: 'S3f'
                  },
                  ContainerGroupsPerInstance: {
                    type: 'structure',
                    members: {
                      DesiredReplicaContainerGroupsPerInstance: {
                        type: 'integer'
                      },
                      MaxReplicaContainerGroupsPerInstance: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          S3n: {
            type: 'list',
            member: {}
          },
          S3t: {
            type: 'list',
            member: {
              shape: 'S3u'
            }
          },
          S3u: {
            type: 'structure',
            members: {
              Location: {},
              Status: {}
            }
          },
          S44: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['InstanceType'],
              members: {
                InstanceType: {},
                WeightedCapacity: {}
              }
            }
          },
          S4g: {
            type: 'structure',
            members: {
              GameServerGroupName: {},
              GameServerGroupArn: {},
              RoleArn: {},
              InstanceDefinitions: {
                shape: 'S44'
              },
              BalancingStrategy: {},
              GameServerProtectionPolicy: {},
              AutoScalingGroupArn: {},
              Status: {},
              StatusReason: {},
              SuspendedActions: {
                shape: 'S4j'
              },
              CreationTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              }
            }
          },
          S4j: {
            type: 'list',
            member: {}
          },
          S4n: {
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
          S4u: {
            type: 'structure',
            members: {
              GameSessionId: {},
              Name: {},
              FleetId: {},
              FleetArn: {},
              CreationTime: {
                type: 'timestamp'
              },
              TerminationTime: {
                type: 'timestamp'
              },
              CurrentPlayerSessionCount: {
                type: 'integer'
              },
              MaximumPlayerSessionCount: {
                type: 'integer'
              },
              Status: {},
              StatusReason: {},
              GameProperties: {
                shape: 'S4n'
              },
              IpAddress: {
                shape: 'S4x'
              },
              DnsName: {},
              Port: {
                shape: 'S1s'
              },
              PlayerSessionCreationPolicy: {},
              CreatorId: {},
              GameSessionData: {},
              MatchmakerData: {},
              Location: {}
            }
          },
          S4x: {
            type: 'string',
            sensitive: true
          },
          S53: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                MaximumIndividualPlayerLatencyMilliseconds: {
                  type: 'integer'
                },
                PolicyDurationSeconds: {
                  type: 'integer'
                }
              }
            }
          },
          S55: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DestinationArn: {}
              }
            }
          },
          S58: {
            type: 'structure',
            members: {
              AllowedLocations: {
                shape: 'S59'
              }
            }
          },
          S59: {
            type: 'list',
            member: {}
          },
          S5a: {
            type: 'structure',
            members: {
              PriorityOrder: {
                type: 'list',
                member: {}
              },
              LocationOrder: {
                shape: 'S59'
              }
            }
          },
          S5g: {
            type: 'structure',
            members: {
              Name: {},
              GameSessionQueueArn: {},
              TimeoutInSeconds: {
                type: 'integer'
              },
              PlayerLatencyPolicies: {
                shape: 'S53'
              },
              Destinations: {
                shape: 'S55'
              },
              FilterConfiguration: {
                shape: 'S58'
              },
              PriorityConfiguration: {
                shape: 'S5a'
              },
              CustomEventData: {},
              NotificationTarget: {}
            }
          },
          S5l: {
            type: 'structure',
            members: {
              LocationName: {},
              LocationArn: {}
            }
          },
          S5o: {
            type: 'list',
            member: {}
          },
          S5y: {
            type: 'structure',
            members: {
              Name: {},
              ConfigurationArn: {},
              Description: {},
              GameSessionQueueArns: {
                shape: 'S5o'
              },
              RequestTimeoutSeconds: {
                type: 'integer'
              },
              AcceptanceTimeoutSeconds: {
                type: 'integer'
              },
              AcceptanceRequired: {
                type: 'boolean'
              },
              RuleSetName: {},
              RuleSetArn: {},
              NotificationTarget: {},
              AdditionalPlayerCount: {
                type: 'integer'
              },
              CustomEventData: {},
              CreationTime: {
                type: 'timestamp'
              },
              GameProperties: {
                shape: 'S4n'
              },
              GameSessionData: {},
              BackfillMode: {},
              FlexMatchMode: {}
            }
          },
          S64: {
            type: 'structure',
            required: ['RuleSetBody'],
            members: {
              RuleSetName: {},
              RuleSetArn: {},
              RuleSetBody: {},
              CreationTime: {
                type: 'timestamp'
              }
            }
          },
          S68: {
            type: 'structure',
            members: {
              PlayerSessionId: {},
              PlayerId: {
                shape: 'S4'
              },
              GameSessionId: {},
              FleetId: {},
              FleetArn: {},
              CreationTime: {
                type: 'timestamp'
              },
              TerminationTime: {
                type: 'timestamp'
              },
              Status: {},
              IpAddress: {
                shape: 'S4x'
              },
              DnsName: {},
              Port: {
                shape: 'S1s'
              },
              PlayerData: {}
            }
          },
          S6f: {
            type: 'list',
            member: {
              shape: 'S68'
            }
          },
          S6j: {
            type: 'structure',
            members: {
              ScriptId: {},
              ScriptArn: {},
              Name: {},
              Version: {},
              SizeOnDisk: {
                type: 'long'
              },
              CreationTime: {
                type: 'timestamp'
              },
              StorageLocation: {
                shape: 'S13'
              }
            }
          },
          S6m: {
            type: 'structure',
            members: {
              GameLiftAwsAccountId: {},
              PeerVpcAwsAccountId: {},
              PeerVpcId: {},
              CreationTime: {
                type: 'timestamp'
              },
              ExpirationTime: {
                type: 'timestamp'
              }
            }
          },
          S7p: {
            type: 'structure',
            members: {
              FleetId: {},
              FleetArn: {},
              ComputeName: {},
              ComputeArn: {},
              IpAddress: {
                shape: 'S4x'
              },
              DnsName: {},
              ComputeStatus: {},
              Location: {},
              CreationTime: {
                type: 'timestamp'
              },
              OperatingSystem: {},
              Type: {},
              GameLiftServiceSdkEndpoint: {},
              GameLiftAgentEndpoint: {},
              InstanceId: {},
              ContainerAttributes: {
                type: 'structure',
                members: {
                  ContainerPortMappings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        ContainerPort: {
                          shape: 'S1s'
                        },
                        ConnectionPort: {
                          shape: 'S1s'
                        },
                        Protocol: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S86: {
            type: 'list',
            member: {}
          },
          S8c: {
            type: 'structure',
            members: {
              FleetId: {},
              FleetArn: {},
              InstanceType: {},
              InstanceCounts: {
                type: 'structure',
                members: {
                  DESIRED: {
                    type: 'integer'
                  },
                  MINIMUM: {
                    type: 'integer'
                  },
                  MAXIMUM: {
                    type: 'integer'
                  },
                  PENDING: {
                    type: 'integer'
                  },
                  ACTIVE: {
                    type: 'integer'
                  },
                  IDLE: {
                    type: 'integer'
                  },
                  TERMINATING: {
                    type: 'integer'
                  }
                }
              },
              Location: {},
              ReplicaContainerGroupCounts: {
                type: 'structure',
                members: {
                  PENDING: {
                    type: 'integer'
                  },
                  ACTIVE: {
                    type: 'integer'
                  },
                  IDLE: {
                    type: 'integer'
                  },
                  TERMINATING: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S8u: {
            type: 'structure',
            members: {
              FleetId: {},
              FleetArn: {},
              ActiveServerProcessCount: {
                type: 'integer'
              },
              ActiveGameSessionCount: {
                type: 'integer'
              },
              CurrentPlayerSessionCount: {
                type: 'integer'
              },
              MaximumPlayerSessionCount: {
                type: 'integer'
              },
              Location: {}
            }
          },
          S9g: {
            type: 'structure',
            members: {
              PlacementId: {},
              GameSessionQueueName: {},
              Status: {},
              GameProperties: {
                shape: 'S4n'
              },
              MaximumPlayerSessionCount: {
                type: 'integer'
              },
              GameSessionName: {},
              GameSessionId: {},
              GameSessionArn: {},
              GameSessionRegion: {},
              PlayerLatencies: {
                shape: 'S9i'
              },
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              IpAddress: {
                shape: 'S4x'
              },
              DnsName: {},
              Port: {
                shape: 'S1s'
              },
              PlacedPlayerSessions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PlayerId: {
                      shape: 'S4'
                    },
                    PlayerSessionId: {}
                  }
                }
              },
              GameSessionData: {},
              MatchmakerData: {}
            }
          },
          S9i: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PlayerId: {
                  shape: 'S4'
                },
                RegionIdentifier: {},
                LatencyInMilliseconds: {
                  type: 'float'
                }
              }
            }
          },
          S9t: {
            type: 'list',
            member: {
              shape: 'S4u'
            }
          },
          Sa3: {
            type: 'structure',
            members: {
              TicketId: {},
              ConfigurationName: {},
              ConfigurationArn: {},
              Status: {},
              StatusReason: {},
              StatusMessage: {},
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              Players: {
                shape: 'Sa6'
              },
              GameSessionConnectionInfo: {
                type: 'structure',
                members: {
                  GameSessionArn: {},
                  IpAddress: {
                    shape: 'S4x'
                  },
                  DnsName: {},
                  Port: {
                    type: 'integer'
                  },
                  MatchedPlayerSessions: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        PlayerId: {
                          shape: 'S4'
                        },
                        PlayerSessionId: {}
                      }
                    }
                  }
                }
              },
              EstimatedWaitTime: {
                type: 'integer'
              }
            }
          },
          Sa6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PlayerId: {
                  shape: 'S4'
                },
                PlayerAttributes: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      S: {},
                      N: {
                        type: 'double'
                      },
                      SL: {
                        type: 'list',
                        member: {}
                      },
                      SDM: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'double'
                        }
                      }
                    }
                  }
                },
                Team: {},
                LatencyInMs: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          Sb6: {
            type: 'structure',
            required: ['TargetValue'],
            members: {
              TargetValue: {
                type: 'double'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a0a08ac787a1f19056fbc38a79122b587e1c2b15.js.map