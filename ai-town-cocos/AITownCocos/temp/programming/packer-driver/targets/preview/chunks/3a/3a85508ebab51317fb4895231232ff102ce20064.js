System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-04-19',
          endpointPrefix: 'dax',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Amazon DAX',
          serviceFullName: 'Amazon DynamoDB Accelerator (DAX)',
          serviceId: 'DAX',
          signatureVersion: 'v4',
          targetPrefix: 'AmazonDAXV3',
          uid: 'dax-2017-04-19'
        },
        operations: {
          CreateCluster: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'NodeType', 'ReplicationFactor', 'IamRoleArn'],
              members: {
                ClusterName: {},
                NodeType: {},
                Description: {},
                ReplicationFactor: {
                  type: 'integer'
                },
                AvailabilityZones: {
                  shape: 'S4'
                },
                SubnetGroupName: {},
                SecurityGroupIds: {
                  shape: 'S5'
                },
                PreferredMaintenanceWindow: {},
                NotificationTopicArn: {},
                IamRoleArn: {},
                ParameterGroupName: {},
                Tags: {
                  shape: 'S6'
                },
                SSESpecification: {
                  type: 'structure',
                  required: ['Enabled'],
                  members: {
                    Enabled: {
                      type: 'boolean'
                    }
                  }
                },
                ClusterEndpointEncryptionType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'Sc'
                }
              }
            }
          },
          CreateParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName'],
              members: {
                ParameterGroupName: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ParameterGroup: {
                  shape: 'Sr'
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
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SubnetGroup: {
                  shape: 'Sv'
                }
              }
            }
          },
          DecreaseReplicationFactor: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'NewReplicationFactor'],
              members: {
                ClusterName: {},
                NewReplicationFactor: {
                  type: 'integer'
                },
                AvailabilityZones: {
                  shape: 'S4'
                },
                NodeIdsToRemove: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'Sc'
                }
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
              members: {
                Cluster: {
                  shape: 'Sc'
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
                DeletionMessage: {}
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
                DeletionMessage: {}
              }
            }
          },
          DescribeClusters: {
            input: {
              type: 'structure',
              members: {
                ClusterNames: {
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
                Clusters: {
                  type: 'list',
                  member: {
                    shape: 'Sc'
                  }
                }
              }
            }
          },
          DescribeDefaultParameters: {
            input: {
              type: 'structure',
              members: {
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
                  shape: 'S1c'
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
                ParameterGroupNames: {
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
                ParameterGroups: {
                  type: 'list',
                  member: {
                    shape: 'Sr'
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
                Source: {},
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
                  shape: 'S1c'
                }
              }
            }
          },
          DescribeSubnetGroups: {
            input: {
              type: 'structure',
              members: {
                SubnetGroupNames: {
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
                SubnetGroups: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                }
              }
            }
          },
          IncreaseReplicationFactor: {
            input: {
              type: 'structure',
              required: ['ClusterName', 'NewReplicationFactor'],
              members: {
                ClusterName: {},
                NewReplicationFactor: {
                  type: 'integer'
                },
                AvailabilityZones: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'Sc'
                }
              }
            }
          },
          ListTags: {
            input: {
              type: 'structure',
              required: ['ResourceName'],
              members: {
                ResourceName: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S6'
                },
                NextToken: {}
              }
            }
          },
          RebootNode: {
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
              members: {
                Cluster: {
                  shape: 'Sc'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'Tags'],
              members: {
                ResourceName: {},
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S6'
                }
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'TagKeys'],
              members: {
                ResourceName: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S6'
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
                PreferredMaintenanceWindow: {},
                NotificationTopicArn: {},
                NotificationTopicStatus: {},
                ParameterGroupName: {},
                SecurityGroupIds: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'Sc'
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
                  shape: 'Sr'
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
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SubnetGroup: {
                  shape: 'Sv'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {}
          },
          S5: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sc: {
            type: 'structure',
            members: {
              ClusterName: {},
              Description: {},
              ClusterArn: {},
              TotalNodes: {
                type: 'integer'
              },
              ActiveNodes: {
                type: 'integer'
              },
              NodeType: {},
              Status: {},
              ClusterDiscoveryEndpoint: {
                shape: 'Se'
              },
              NodeIdsToRemove: {
                shape: 'Sf'
              },
              Nodes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    NodeId: {},
                    Endpoint: {
                      shape: 'Se'
                    },
                    NodeCreateTime: {
                      type: 'timestamp'
                    },
                    AvailabilityZone: {},
                    NodeStatus: {},
                    ParameterGroupStatus: {}
                  }
                }
              },
              PreferredMaintenanceWindow: {},
              NotificationConfiguration: {
                type: 'structure',
                members: {
                  TopicArn: {},
                  TopicStatus: {}
                }
              },
              SubnetGroup: {},
              SecurityGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SecurityGroupIdentifier: {},
                    Status: {}
                  }
                }
              },
              IamRoleArn: {},
              ParameterGroup: {
                type: 'structure',
                members: {
                  ParameterGroupName: {},
                  ParameterApplyStatus: {},
                  NodeIdsToReboot: {
                    shape: 'Sf'
                  }
                }
              },
              SSEDescription: {
                type: 'structure',
                members: {
                  Status: {}
                }
              },
              ClusterEndpointEncryptionType: {}
            }
          },
          Se: {
            type: 'structure',
            members: {
              Address: {},
              Port: {
                type: 'integer'
              },
              URL: {}
            }
          },
          Sf: {
            type: 'list',
            member: {}
          },
          Sr: {
            type: 'structure',
            members: {
              ParameterGroupName: {},
              Description: {}
            }
          },
          St: {
            type: 'list',
            member: {}
          },
          Sv: {
            type: 'structure',
            members: {
              SubnetGroupName: {},
              Description: {},
              VpcId: {},
              Subnets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {},
                    SubnetAvailabilityZone: {}
                  }
                }
              }
            }
          },
          S1c: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ParameterName: {},
                ParameterType: {},
                ParameterValue: {},
                NodeTypeSpecificValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      NodeType: {},
                      Value: {}
                    }
                  }
                },
                Description: {},
                Source: {},
                DataType: {},
                AllowedValues: {},
                IsModifiable: {},
                ChangeType: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3a85508ebab51317fb4895231232ff102ce20064.js.map