System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-01-01',
          endpointPrefix: 'memory-db',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Amazon MemoryDB',
          serviceFullName: 'Amazon MemoryDB',
          serviceId: 'MemoryDB',
          signatureVersion: 'v4',
          signingName: 'memorydb',
          targetPrefix: 'AmazonMemoryDB',
          uid: 'memorydb-2021-01-01'
        },
        operations: {
          BatchUpdateCluster: {
            input: {
              type: 'structure',
              required: ['ClusterNames'],
              members: {
                ClusterNames: {
                  shape: 'S2'
                },
                ServiceUpdate: {
                  type: 'structure',
                  members: {
                    ServiceUpdateNameToApply: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProcessedClusters: {
                  shape: 'S6'
                },
                UnprocessedClusters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ClusterName: {},
                      ErrorType: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          CopySnapshot: {
            input: {
              type: 'structure',
              required: ['SourceSnapshotName', 'TargetSnapshotName'],
              members: {
                SourceSnapshotName: {},
                TargetSnapshotName: {},
                TargetBucket: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateACL: {
            input: {
              type: 'structure',
              required: ['ACLName'],
              members: {
                ACLName: {},
                UserNames: {
                  shape: 'S18'
                },
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ACL: {
                  shape: 'S1b'
                }
              }
            }
          },
          CreateCluster: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'NodeType', 'ACLName'],
              members: {
                ClusterName: {},
                NodeType: {},
                ParameterGroupName: {},
                Description: {},
                NumShards: {
                  type: 'integer'
                },
                NumReplicasPerShard: {
                  type: 'integer'
                },
                SubnetGroupName: {},
                SecurityGroupIds: {
                  shape: 'S1g'
                },
                MaintenanceWindow: {},
                Port: {
                  type: 'integer'
                },
                SnsTopicArn: {},
                TLSEnabled: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                SnapshotArns: {
                  type: 'list',
                  member: {}
                },
                SnapshotName: {},
                SnapshotRetentionLimit: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sz'
                },
                SnapshotWindow: {},
                ACLName: {},
                EngineVersion: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                DataTiering: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S7'
                }
              }
            }
          },
          CreateParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName', 'Family'],
              members: {
                ParameterGroupName: {},
                Family: {},
                Description: {},
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ParameterGroup: {
                  shape: 'S1l'
                }
              }
            }
          },
          CreateSnapshot: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'SnapshotName'],
              members: {
                ClusterName: {},
                SnapshotName: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateSubnetGroup: {
            input: {
              type: 'structure',
              required: ['SubnetGroupName', 'SubnetIds'],
              members: {
                SubnetGroupName: {},
                Description: {},
                SubnetIds: {
                  shape: 'S1p'
                },
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SubnetGroup: {
                  shape: 'S1r'
                }
              }
            }
          },
          CreateUser: {
            input: {
              type: 'structure',
              required: ['UserName', 'AuthenticationMode', 'AccessString'],
              members: {
                UserName: {},
                AuthenticationMode: {
                  shape: 'S1w'
                },
                AccessString: {},
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S21'
                }
              }
            }
          },
          DeleteACL: {
            input: {
              type: 'structure',
              required: ['ACLName'],
              members: {
                ACLName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ACL: {
                  shape: 'S1b'
                }
              }
            }
          },
          DeleteCluster: {
            input: {
              type: 'structure',
              required: ['ClusterName'],
              members: {
                ClusterName: {},
                FinalSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S7'
                }
              }
            }
          },
          DeleteParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName'],
              members: {
                ParameterGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ParameterGroup: {
                  shape: 'S1l'
                }
              }
            }
          },
          DeleteSnapshot: {
            input: {
              type: 'structure',
              required: ['SnapshotName'],
              members: {
                SnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S12'
                }
              }
            }
          },
          DeleteSubnetGroup: {
            input: {
              type: 'structure',
              required: ['SubnetGroupName'],
              members: {
                SubnetGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SubnetGroup: {
                  shape: 'S1r'
                }
              }
            }
          },
          DeleteUser: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S21'
                }
              }
            }
          },
          DescribeACLs: {
            input: {
              type: 'structure',
              members: {
                ACLName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ACLs: {
                  type: 'list',
                  member: {
                    shape: 'S1b'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeClusters: {
            input: {
              type: 'structure',
              members: {
                ClusterName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ShowShardDetails: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Clusters: {
                  shape: 'S6'
                }
              }
            }
          },
          DescribeEngineVersions: {
            input: {
              type: 'structure',
              members: {
                EngineVersion: {},
                ParameterGroupFamily: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                DefaultOnly: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                EngineVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EngineVersion: {},
                      EnginePatchVersion: {},
                      ParameterGroupFamily: {}
                    }
                  }
                }
              }
            }
          },
          DescribeEvents: {
            input: {
              type: 'structure',
              members: {
                SourceName: {},
                SourceType: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Duration: {
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
                NextToken: {},
                Events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceName: {},
                      SourceType: {},
                      Message: {},
                      Date: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeParameterGroups: {
            input: {
              type: 'structure',
              members: {
                ParameterGroupName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ParameterGroups: {
                  type: 'list',
                  member: {
                    shape: 'S1l'
                  }
                }
              }
            }
          },
          DescribeParameters: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName'],
              members: {
                ParameterGroupName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Value: {},
                      Description: {},
                      DataType: {},
                      AllowedValues: {},
                      MinimumEngineVersion: {}
                    }
                  }
                }
              }
            }
          },
          DescribeReservedNodes: {
            input: {
              type: 'structure',
              members: {
                ReservationId: {},
                ReservedNodesOfferingId: {},
                NodeType: {},
                Duration: {},
                OfferingType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ReservedNodes: {
                  type: 'list',
                  member: {
                    shape: 'S36'
                  }
                }
              }
            }
          },
          DescribeReservedNodesOfferings: {
            input: {
              type: 'structure',
              members: {
                ReservedNodesOfferingId: {},
                NodeType: {},
                Duration: {},
                OfferingType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ReservedNodesOfferings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReservedNodesOfferingId: {},
                      NodeType: {},
                      Duration: {
                        type: 'integer'
                      },
                      FixedPrice: {
                        type: 'double'
                      },
                      OfferingType: {},
                      RecurringCharges: {
                        shape: 'S37'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeServiceUpdates: {
            input: {
              type: 'structure',
              members: {
                ServiceUpdateName: {},
                ClusterNames: {
                  shape: 'S2'
                },
                Status: {
                  type: 'list',
                  member: {}
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
                NextToken: {},
                ServiceUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ClusterName: {},
                      ServiceUpdateName: {},
                      ReleaseDate: {
                        type: 'timestamp'
                      },
                      Description: {},
                      Status: {},
                      Type: {},
                      NodesUpdated: {},
                      AutoUpdateStartDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeSnapshots: {
            input: {
              type: 'structure',
              members: {
                ClusterName: {},
                SnapshotName: {},
                Source: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ShowDetail: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Snapshots: {
                  type: 'list',
                  member: {
                    shape: 'S12'
                  }
                }
              }
            }
          },
          DescribeSubnetGroups: {
            input: {
              type: 'structure',
              members: {
                SubnetGroupName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                SubnetGroups: {
                  type: 'list',
                  member: {
                    shape: 'S1r'
                  }
                }
              }
            }
          },
          DescribeUsers: {
            input: {
              type: 'structure',
              members: {
                UserName: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
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
                Users: {
                  type: 'list',
                  member: {
                    shape: 'S21'
                  }
                },
                NextToken: {}
              }
            }
          },
          FailoverShard: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'ShardName'],
              members: {
                ClusterName: {},
                ShardName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S7'
                }
              }
            }
          },
          ListAllowedNodeTypeUpdates: {
            input: {
              type: 'structure',
              required: ['ClusterName'],
              members: {
                ClusterName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ScaleUpNodeTypes: {
                  shape: 'S41'
                },
                ScaleDownNodeTypes: {
                  shape: 'S41'
                }
              }
            }
          },
          ListTags: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TagList: {
                  shape: 'Sz'
                }
              }
            }
          },
          PurchaseReservedNodesOffering: {
            input: {
              type: 'structure',
              required: ['ReservedNodesOfferingId'],
              members: {
                ReservedNodesOfferingId: {},
                ReservationId: {},
                NodeCount: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReservedNode: {
                  shape: 'S36'
                }
              }
            }
          },
          ResetParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName'],
              members: {
                ParameterGroupName: {},
                AllParameters: {
                  type: 'boolean'
                },
                ParameterNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ParameterGroup: {
                  shape: 'S1l'
                }
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
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TagList: {
                  shape: 'Sz'
                }
              }
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
              members: {
                TagList: {
                  shape: 'Sz'
                }
              }
            }
          },
          UpdateACL: {
            input: {
              type: 'structure',
              required: ['ACLName'],
              members: {
                ACLName: {},
                UserNamesToAdd: {
                  shape: 'S18'
                },
                UserNamesToRemove: {
                  shape: 'S18'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ACL: {
                  shape: 'S1b'
                }
              }
            }
          },
          UpdateCluster: {
            input: {
              type: 'structure',
              required: ['ClusterName'],
              members: {
                ClusterName: {},
                Description: {},
                SecurityGroupIds: {
                  shape: 'S1g'
                },
                MaintenanceWindow: {},
                SnsTopicArn: {},
                SnsTopicStatus: {},
                ParameterGroupName: {},
                SnapshotWindow: {},
                SnapshotRetentionLimit: {
                  type: 'integer'
                },
                NodeType: {},
                EngineVersion: {},
                ReplicaConfiguration: {
                  type: 'structure',
                  members: {
                    ReplicaCount: {
                      type: 'integer'
                    }
                  }
                },
                ShardConfiguration: {
                  type: 'structure',
                  members: {
                    ShardCount: {
                      type: 'integer'
                    }
                  }
                },
                ACLName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S7'
                }
              }
            }
          },
          UpdateParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName', 'ParameterNameValues'],
              members: {
                ParameterGroupName: {},
                ParameterNameValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ParameterName: {},
                      ParameterValue: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ParameterGroup: {
                  shape: 'S1l'
                }
              }
            }
          },
          UpdateSubnetGroup: {
            input: {
              type: 'structure',
              required: ['SubnetGroupName'],
              members: {
                SubnetGroupName: {},
                Description: {},
                SubnetIds: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SubnetGroup: {
                  shape: 'S1r'
                }
              }
            }
          },
          UpdateUser: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {},
                AuthenticationMode: {
                  shape: 'S1w'
                },
                AccessString: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S21'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'list',
            member: {
              shape: 'S7'
            }
          },
          S7: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              Status: {},
              PendingUpdates: {
                type: 'structure',
                members: {
                  Resharding: {
                    type: 'structure',
                    members: {
                      SlotMigration: {
                        type: 'structure',
                        members: {
                          ProgressPercentage: {
                            type: 'double'
                          }
                        }
                      }
                    }
                  },
                  ACLs: {
                    type: 'structure',
                    members: {
                      ACLToApply: {}
                    }
                  },
                  ServiceUpdates: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        ServiceUpdateName: {},
                        Status: {}
                      }
                    }
                  }
                }
              },
              NumberOfShards: {
                type: 'integer'
              },
              Shards: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Status: {},
                    Slots: {},
                    Nodes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Status: {},
                          AvailabilityZone: {},
                          CreateTime: {
                            type: 'timestamp'
                          },
                          Endpoint: {
                            shape: 'Sn'
                          }
                        }
                      }
                    },
                    NumberOfNodes: {
                      type: 'integer'
                    }
                  }
                }
              },
              AvailabilityMode: {},
              ClusterEndpoint: {
                shape: 'Sn'
              },
              NodeType: {},
              EngineVersion: {},
              EnginePatchVersion: {},
              ParameterGroupName: {},
              ParameterGroupStatus: {},
              SecurityGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SecurityGroupId: {},
                    Status: {}
                  }
                }
              },
              SubnetGroupName: {},
              TLSEnabled: {
                type: 'boolean'
              },
              KmsKeyId: {},
              ARN: {},
              SnsTopicArn: {},
              SnsTopicStatus: {},
              SnapshotRetentionLimit: {
                type: 'integer'
              },
              MaintenanceWindow: {},
              SnapshotWindow: {},
              ACLName: {},
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              DataTiering: {}
            }
          },
          Sn: {
            type: 'structure',
            members: {
              Address: {},
              Port: {
                type: 'integer'
              }
            }
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              Name: {},
              Status: {},
              Source: {},
              KmsKeyId: {},
              ARN: {},
              ClusterConfiguration: {
                type: 'structure',
                members: {
                  Name: {},
                  Description: {},
                  NodeType: {},
                  EngineVersion: {},
                  MaintenanceWindow: {},
                  TopicArn: {},
                  Port: {
                    type: 'integer'
                  },
                  ParameterGroupName: {},
                  SubnetGroupName: {},
                  VpcId: {},
                  SnapshotRetentionLimit: {
                    type: 'integer'
                  },
                  SnapshotWindow: {},
                  NumShards: {
                    type: 'integer'
                  },
                  Shards: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Name: {},
                        Configuration: {
                          type: 'structure',
                          members: {
                            Slots: {},
                            ReplicaCount: {
                              type: 'integer'
                            }
                          }
                        },
                        Size: {},
                        SnapshotCreationTime: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                }
              },
              DataTiering: {}
            }
          },
          S18: {
            type: 'list',
            member: {}
          },
          S1b: {
            type: 'structure',
            members: {
              Name: {},
              Status: {},
              UserNames: {
                shape: 'S1c'
              },
              MinimumEngineVersion: {},
              PendingChanges: {
                type: 'structure',
                members: {
                  UserNamesToRemove: {
                    shape: 'S1c'
                  },
                  UserNamesToAdd: {
                    shape: 'S1c'
                  }
                }
              },
              Clusters: {
                type: 'list',
                member: {}
              },
              ARN: {}
            }
          },
          S1c: {
            type: 'list',
            member: {}
          },
          S1g: {
            type: 'list',
            member: {}
          },
          S1l: {
            type: 'structure',
            members: {
              Name: {},
              Family: {},
              Description: {},
              ARN: {}
            }
          },
          S1p: {
            type: 'list',
            member: {}
          },
          S1r: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              VpcId: {},
              Subnets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Identifier: {},
                    AvailabilityZone: {
                      type: 'structure',
                      members: {
                        Name: {}
                      }
                    }
                  }
                }
              },
              ARN: {}
            }
          },
          S1w: {
            type: 'structure',
            members: {
              Type: {},
              Passwords: {
                type: 'list',
                member: {}
              }
            }
          },
          S21: {
            type: 'structure',
            members: {
              Name: {},
              Status: {},
              AccessString: {},
              ACLNames: {
                type: 'list',
                member: {}
              },
              MinimumEngineVersion: {},
              Authentication: {
                type: 'structure',
                members: {
                  Type: {},
                  PasswordCount: {
                    type: 'integer'
                  }
                }
              },
              ARN: {}
            }
          },
          S36: {
            type: 'structure',
            members: {
              ReservationId: {},
              ReservedNodesOfferingId: {},
              NodeType: {},
              StartTime: {
                type: 'timestamp'
              },
              Duration: {
                type: 'integer'
              },
              FixedPrice: {
                type: 'double'
              },
              NodeCount: {
                type: 'integer'
              },
              OfferingType: {},
              State: {},
              RecurringCharges: {
                shape: 'S37'
              },
              ARN: {}
            }
          },
          S37: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RecurringChargeAmount: {
                  type: 'double'
                },
                RecurringChargeFrequency: {}
              }
            }
          },
          S41: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=88615bcdaeb46d1b0824e2bfe83c2b22750df087.js.map