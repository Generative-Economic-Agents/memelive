System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2018-11-14',
          endpointPrefix: 'kafka',
          signingName: 'kafka',
          serviceFullName: 'Managed Streaming for Kafka',
          serviceAbbreviation: 'Kafka',
          serviceId: 'Kafka',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'kafka-2018-11-14',
          signatureVersion: 'v4'
        },
        operations: {
          BatchAssociateScramSecret: {
            http: {
              requestUri: '/v1/clusters/{clusterArn}/scram-secrets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                SecretArnList: {
                  shape: 'S3',
                  locationName: 'secretArnList'
                }
              },
              required: ['ClusterArn', 'SecretArnList']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                UnprocessedScramSecrets: {
                  shape: 'S5',
                  locationName: 'unprocessedScramSecrets'
                }
              }
            }
          },
          CreateCluster: {
            http: {
              requestUri: '/v1/clusters',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerNodeGroupInfo: {
                  shape: 'S8',
                  locationName: 'brokerNodeGroupInfo'
                },
                ClientAuthentication: {
                  shape: 'Sp',
                  locationName: 'clientAuthentication'
                },
                ClusterName: {
                  locationName: 'clusterName'
                },
                ConfigurationInfo: {
                  shape: 'Sw',
                  locationName: 'configurationInfo'
                },
                EncryptionInfo: {
                  shape: 'Sy',
                  locationName: 'encryptionInfo'
                },
                EnhancedMonitoring: {
                  locationName: 'enhancedMonitoring'
                },
                OpenMonitoring: {
                  shape: 'S13',
                  locationName: 'openMonitoring'
                },
                KafkaVersion: {
                  locationName: 'kafkaVersion'
                },
                LoggingInfo: {
                  shape: 'S18',
                  locationName: 'loggingInfo'
                },
                NumberOfBrokerNodes: {
                  locationName: 'numberOfBrokerNodes',
                  type: 'integer'
                },
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                },
                StorageMode: {
                  locationName: 'storageMode'
                }
              },
              required: ['BrokerNodeGroupInfo', 'KafkaVersion', 'NumberOfBrokerNodes', 'ClusterName']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterName: {
                  locationName: 'clusterName'
                },
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          CreateClusterV2: {
            http: {
              requestUri: '/api/v2/clusters',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterName: {
                  locationName: 'clusterName'
                },
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                },
                Provisioned: {
                  locationName: 'provisioned',
                  type: 'structure',
                  members: {
                    BrokerNodeGroupInfo: {
                      shape: 'S8',
                      locationName: 'brokerNodeGroupInfo'
                    },
                    ClientAuthentication: {
                      shape: 'Sp',
                      locationName: 'clientAuthentication'
                    },
                    ConfigurationInfo: {
                      shape: 'Sw',
                      locationName: 'configurationInfo'
                    },
                    EncryptionInfo: {
                      shape: 'Sy',
                      locationName: 'encryptionInfo'
                    },
                    EnhancedMonitoring: {
                      locationName: 'enhancedMonitoring'
                    },
                    OpenMonitoring: {
                      shape: 'S13',
                      locationName: 'openMonitoring'
                    },
                    KafkaVersion: {
                      locationName: 'kafkaVersion'
                    },
                    LoggingInfo: {
                      shape: 'S18',
                      locationName: 'loggingInfo'
                    },
                    NumberOfBrokerNodes: {
                      locationName: 'numberOfBrokerNodes',
                      type: 'integer'
                    },
                    StorageMode: {
                      locationName: 'storageMode'
                    }
                  },
                  required: ['BrokerNodeGroupInfo', 'KafkaVersion', 'NumberOfBrokerNodes']
                },
                Serverless: {
                  locationName: 'serverless',
                  type: 'structure',
                  members: {
                    VpcConfigs: {
                      shape: 'S1l',
                      locationName: 'vpcConfigs'
                    },
                    ClientAuthentication: {
                      shape: 'S1n',
                      locationName: 'clientAuthentication'
                    }
                  },
                  required: ['VpcConfigs']
                }
              },
              required: ['ClusterName']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterName: {
                  locationName: 'clusterName'
                },
                State: {
                  locationName: 'state'
                },
                ClusterType: {
                  locationName: 'clusterType'
                }
              }
            }
          },
          CreateConfiguration: {
            http: {
              requestUri: '/v1/configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                KafkaVersions: {
                  shape: 'S3',
                  locationName: 'kafkaVersions'
                },
                Name: {
                  locationName: 'name'
                },
                ServerProperties: {
                  locationName: 'serverProperties',
                  type: 'blob'
                }
              },
              required: ['ServerProperties', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreationTime: {
                  shape: 'S1u',
                  locationName: 'creationTime'
                },
                LatestRevision: {
                  shape: 'S1v',
                  locationName: 'latestRevision'
                },
                Name: {
                  locationName: 'name'
                },
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          CreateReplicator: {
            http: {
              requestUri: '/replication/v1/replicators',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                KafkaClusters: {
                  locationName: 'kafkaClusters',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AmazonMskCluster: {
                        shape: 'S21',
                        locationName: 'amazonMskCluster'
                      },
                      VpcConfig: {
                        shape: 'S22',
                        locationName: 'vpcConfig'
                      }
                    },
                    required: ['VpcConfig', 'AmazonMskCluster']
                  }
                },
                ReplicationInfoList: {
                  locationName: 'replicationInfoList',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConsumerGroupReplication: {
                        shape: 'S25',
                        locationName: 'consumerGroupReplication'
                      },
                      SourceKafkaClusterArn: {
                        locationName: 'sourceKafkaClusterArn'
                      },
                      TargetCompressionType: {
                        locationName: 'targetCompressionType'
                      },
                      TargetKafkaClusterArn: {
                        locationName: 'targetKafkaClusterArn'
                      },
                      TopicReplication: {
                        shape: 'S29',
                        locationName: 'topicReplication'
                      }
                    },
                    required: ['TargetCompressionType', 'TopicReplication', 'ConsumerGroupReplication', 'SourceKafkaClusterArn', 'TargetKafkaClusterArn']
                  }
                },
                ReplicatorName: {
                  locationName: 'replicatorName'
                },
                ServiceExecutionRoleArn: {
                  locationName: 'serviceExecutionRoleArn'
                },
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                }
              },
              required: ['ServiceExecutionRoleArn', 'ReplicatorName', 'ReplicationInfoList', 'KafkaClusters']
            },
            output: {
              type: 'structure',
              members: {
                ReplicatorArn: {
                  locationName: 'replicatorArn'
                },
                ReplicatorName: {
                  locationName: 'replicatorName'
                },
                ReplicatorState: {
                  locationName: 'replicatorState'
                }
              }
            }
          },
          CreateVpcConnection: {
            http: {
              requestUri: '/v1/vpc-connection',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                TargetClusterArn: {
                  locationName: 'targetClusterArn'
                },
                Authentication: {
                  locationName: 'authentication'
                },
                VpcId: {
                  locationName: 'vpcId'
                },
                ClientSubnets: {
                  shape: 'S3',
                  locationName: 'clientSubnets'
                },
                SecurityGroups: {
                  shape: 'S3',
                  locationName: 'securityGroups'
                },
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                }
              },
              required: ['TargetClusterArn', 'Authentication', 'VpcId', 'ClientSubnets', 'SecurityGroups']
            },
            output: {
              type: 'structure',
              members: {
                VpcConnectionArn: {
                  locationName: 'vpcConnectionArn'
                },
                State: {
                  locationName: 'state'
                },
                Authentication: {
                  locationName: 'authentication'
                },
                VpcId: {
                  locationName: 'vpcId'
                },
                ClientSubnets: {
                  shape: 'S3',
                  locationName: 'clientSubnets'
                },
                SecurityGroups: {
                  shape: 'S3',
                  locationName: 'securityGroups'
                },
                CreationTime: {
                  shape: 'S1u',
                  locationName: 'creationTime'
                },
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                }
              }
            }
          },
          DeleteCluster: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/clusters/{clusterArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                CurrentVersion: {
                  location: 'querystring',
                  locationName: 'currentVersion'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          DeleteClusterPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/clusters/{clusterArn}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/configurations/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          DeleteReplicator: {
            http: {
              method: 'DELETE',
              requestUri: '/replication/v1/replicators/{replicatorArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CurrentVersion: {
                  location: 'querystring',
                  locationName: 'currentVersion'
                },
                ReplicatorArn: {
                  location: 'uri',
                  locationName: 'replicatorArn'
                }
              },
              required: ['ReplicatorArn']
            },
            output: {
              type: 'structure',
              members: {
                ReplicatorArn: {
                  locationName: 'replicatorArn'
                },
                ReplicatorState: {
                  locationName: 'replicatorState'
                }
              }
            }
          },
          DeleteVpcConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/vpc-connection/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {
                VpcConnectionArn: {
                  locationName: 'vpcConnectionArn'
                },
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          DescribeCluster: {
            http: {
              method: 'GET',
              requestUri: '/v1/clusters/{clusterArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                ClusterInfo: {
                  shape: 'S2w',
                  locationName: 'clusterInfo'
                }
              }
            }
          },
          DescribeClusterV2: {
            http: {
              method: 'GET',
              requestUri: '/api/v2/clusters/{clusterArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                ClusterInfo: {
                  shape: 'S36',
                  locationName: 'clusterInfo'
                }
              }
            }
          },
          DescribeClusterOperation: {
            http: {
              method: 'GET',
              requestUri: '/v1/operations/{clusterOperationArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterOperationArn: {
                  location: 'uri',
                  locationName: 'clusterOperationArn'
                }
              },
              required: ['ClusterOperationArn']
            },
            output: {
              type: 'structure',
              members: {
                ClusterOperationInfo: {
                  shape: 'S3b',
                  locationName: 'clusterOperationInfo'
                }
              }
            }
          },
          DescribeClusterOperationV2: {
            http: {
              method: 'GET',
              requestUri: '/api/v2/operations/{clusterOperationArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterOperationArn: {
                  location: 'uri',
                  locationName: 'clusterOperationArn'
                }
              },
              required: ['ClusterOperationArn']
            },
            output: {
              type: 'structure',
              members: {
                ClusterOperationInfo: {
                  locationName: 'clusterOperationInfo',
                  type: 'structure',
                  members: {
                    ClusterArn: {
                      locationName: 'clusterArn'
                    },
                    ClusterType: {
                      locationName: 'clusterType'
                    },
                    StartTime: {
                      shape: 'S1u',
                      locationName: 'startTime'
                    },
                    EndTime: {
                      shape: 'S1u',
                      locationName: 'endTime'
                    },
                    ErrorInfo: {
                      shape: 'S3c',
                      locationName: 'errorInfo'
                    },
                    OperationArn: {
                      locationName: 'operationArn'
                    },
                    OperationState: {
                      locationName: 'operationState'
                    },
                    OperationType: {
                      locationName: 'operationType'
                    },
                    Provisioned: {
                      locationName: 'provisioned',
                      type: 'structure',
                      members: {
                        OperationSteps: {
                          shape: 'S3d',
                          locationName: 'operationSteps'
                        },
                        SourceClusterInfo: {
                          shape: 'S3g',
                          locationName: 'sourceClusterInfo'
                        },
                        TargetClusterInfo: {
                          shape: 'S3g',
                          locationName: 'targetClusterInfo'
                        },
                        VpcConnectionInfo: {
                          shape: 'S3m',
                          locationName: 'vpcConnectionInfo'
                        }
                      }
                    },
                    Serverless: {
                      locationName: 'serverless',
                      type: 'structure',
                      members: {
                        VpcConnectionInfo: {
                          locationName: 'vpcConnectionInfo',
                          type: 'structure',
                          members: {
                            CreationTime: {
                              shape: 'S1u',
                              locationName: 'creationTime'
                            },
                            Owner: {
                              locationName: 'owner'
                            },
                            UserIdentity: {
                              shape: 'S3n',
                              locationName: 'userIdentity'
                            },
                            VpcConnectionArn: {
                              locationName: 'vpcConnectionArn'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/v1/configurations/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreationTime: {
                  shape: 'S1u',
                  locationName: 'creationTime'
                },
                Description: {
                  locationName: 'description'
                },
                KafkaVersions: {
                  shape: 'S3',
                  locationName: 'kafkaVersions'
                },
                LatestRevision: {
                  shape: 'S1v',
                  locationName: 'latestRevision'
                },
                Name: {
                  locationName: 'name'
                },
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          DescribeConfigurationRevision: {
            http: {
              method: 'GET',
              requestUri: '/v1/configurations/{arn}/revisions/{revision}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                Revision: {
                  location: 'uri',
                  locationName: 'revision',
                  type: 'long'
                }
              },
              required: ['Revision', 'Arn']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreationTime: {
                  shape: 'S1u',
                  locationName: 'creationTime'
                },
                Description: {
                  locationName: 'description'
                },
                Revision: {
                  locationName: 'revision',
                  type: 'long'
                },
                ServerProperties: {
                  locationName: 'serverProperties',
                  type: 'blob'
                }
              }
            }
          },
          DescribeReplicator: {
            http: {
              method: 'GET',
              requestUri: '/replication/v1/replicators/{replicatorArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ReplicatorArn: {
                  location: 'uri',
                  locationName: 'replicatorArn'
                }
              },
              required: ['ReplicatorArn']
            },
            output: {
              type: 'structure',
              members: {
                CreationTime: {
                  shape: 'S1u',
                  locationName: 'creationTime'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                IsReplicatorReference: {
                  locationName: 'isReplicatorReference',
                  type: 'boolean'
                },
                KafkaClusters: {
                  locationName: 'kafkaClusters',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AmazonMskCluster: {
                        shape: 'S21',
                        locationName: 'amazonMskCluster'
                      },
                      KafkaClusterAlias: {
                        locationName: 'kafkaClusterAlias'
                      },
                      VpcConfig: {
                        shape: 'S22',
                        locationName: 'vpcConfig'
                      }
                    }
                  }
                },
                ReplicationInfoList: {
                  locationName: 'replicationInfoList',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConsumerGroupReplication: {
                        shape: 'S25',
                        locationName: 'consumerGroupReplication'
                      },
                      SourceKafkaClusterAlias: {
                        locationName: 'sourceKafkaClusterAlias'
                      },
                      TargetCompressionType: {
                        locationName: 'targetCompressionType'
                      },
                      TargetKafkaClusterAlias: {
                        locationName: 'targetKafkaClusterAlias'
                      },
                      TopicReplication: {
                        shape: 'S29',
                        locationName: 'topicReplication'
                      }
                    }
                  }
                },
                ReplicatorArn: {
                  locationName: 'replicatorArn'
                },
                ReplicatorDescription: {
                  locationName: 'replicatorDescription'
                },
                ReplicatorName: {
                  locationName: 'replicatorName'
                },
                ReplicatorResourceArn: {
                  locationName: 'replicatorResourceArn'
                },
                ReplicatorState: {
                  locationName: 'replicatorState'
                },
                ServiceExecutionRoleArn: {
                  locationName: 'serviceExecutionRoleArn'
                },
                StateInfo: {
                  locationName: 'stateInfo',
                  type: 'structure',
                  members: {
                    Code: {
                      locationName: 'code'
                    },
                    Message: {
                      locationName: 'message'
                    }
                  }
                },
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                }
              }
            }
          },
          DescribeVpcConnection: {
            http: {
              method: 'GET',
              requestUri: '/v1/vpc-connection/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {
                VpcConnectionArn: {
                  locationName: 'vpcConnectionArn'
                },
                TargetClusterArn: {
                  locationName: 'targetClusterArn'
                },
                State: {
                  locationName: 'state'
                },
                Authentication: {
                  locationName: 'authentication'
                },
                VpcId: {
                  locationName: 'vpcId'
                },
                Subnets: {
                  shape: 'S3',
                  locationName: 'subnets'
                },
                SecurityGroups: {
                  shape: 'S3',
                  locationName: 'securityGroups'
                },
                CreationTime: {
                  shape: 'S1u',
                  locationName: 'creationTime'
                },
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                }
              }
            }
          },
          BatchDisassociateScramSecret: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/clusters/{clusterArn}/scram-secrets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                SecretArnList: {
                  shape: 'S3',
                  locationName: 'secretArnList'
                }
              },
              required: ['ClusterArn', 'SecretArnList']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                UnprocessedScramSecrets: {
                  shape: 'S5',
                  locationName: 'unprocessedScramSecrets'
                }
              }
            }
          },
          GetBootstrapBrokers: {
            http: {
              method: 'GET',
              requestUri: '/v1/clusters/{clusterArn}/bootstrap-brokers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                BootstrapBrokerString: {
                  locationName: 'bootstrapBrokerString'
                },
                BootstrapBrokerStringTls: {
                  locationName: 'bootstrapBrokerStringTls'
                },
                BootstrapBrokerStringSaslScram: {
                  locationName: 'bootstrapBrokerStringSaslScram'
                },
                BootstrapBrokerStringSaslIam: {
                  locationName: 'bootstrapBrokerStringSaslIam'
                },
                BootstrapBrokerStringPublicTls: {
                  locationName: 'bootstrapBrokerStringPublicTls'
                },
                BootstrapBrokerStringPublicSaslScram: {
                  locationName: 'bootstrapBrokerStringPublicSaslScram'
                },
                BootstrapBrokerStringPublicSaslIam: {
                  locationName: 'bootstrapBrokerStringPublicSaslIam'
                },
                BootstrapBrokerStringVpcConnectivityTls: {
                  locationName: 'bootstrapBrokerStringVpcConnectivityTls'
                },
                BootstrapBrokerStringVpcConnectivitySaslScram: {
                  locationName: 'bootstrapBrokerStringVpcConnectivitySaslScram'
                },
                BootstrapBrokerStringVpcConnectivitySaslIam: {
                  locationName: 'bootstrapBrokerStringVpcConnectivitySaslIam'
                }
              }
            }
          },
          GetCompatibleKafkaVersions: {
            http: {
              method: 'GET',
              requestUri: '/v1/compatible-kafka-versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'querystring',
                  locationName: 'clusterArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CompatibleKafkaVersions: {
                  locationName: 'compatibleKafkaVersions',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceVersion: {
                        locationName: 'sourceVersion'
                      },
                      TargetVersions: {
                        shape: 'S3',
                        locationName: 'targetVersions'
                      }
                    }
                  }
                }
              }
            }
          },
          GetClusterPolicy: {
            http: {
              method: 'GET',
              requestUri: '/v1/clusters/{clusterArn}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                Policy: {
                  locationName: 'policy'
                }
              }
            }
          },
          ListClusterOperations: {
            http: {
              method: 'GET',
              requestUri: '/v1/clusters/{clusterArn}/operations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                ClusterOperationInfoList: {
                  locationName: 'clusterOperationInfoList',
                  type: 'list',
                  member: {
                    shape: 'S3b'
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListClusterOperationsV2: {
            http: {
              method: 'GET',
              requestUri: '/api/v2/clusters/{clusterArn}/operations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                ClusterOperationInfoList: {
                  locationName: 'clusterOperationInfoList',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ClusterArn: {
                        locationName: 'clusterArn'
                      },
                      ClusterType: {
                        locationName: 'clusterType'
                      },
                      StartTime: {
                        shape: 'S1u',
                        locationName: 'startTime'
                      },
                      EndTime: {
                        shape: 'S1u',
                        locationName: 'endTime'
                      },
                      OperationArn: {
                        locationName: 'operationArn'
                      },
                      OperationState: {
                        locationName: 'operationState'
                      },
                      OperationType: {
                        locationName: 'operationType'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListClusters: {
            http: {
              method: 'GET',
              requestUri: '/v1/clusters',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterNameFilter: {
                  location: 'querystring',
                  locationName: 'clusterNameFilter'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ClusterInfoList: {
                  locationName: 'clusterInfoList',
                  type: 'list',
                  member: {
                    shape: 'S2w'
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListClustersV2: {
            http: {
              method: 'GET',
              requestUri: '/api/v2/clusters',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterNameFilter: {
                  location: 'querystring',
                  locationName: 'clusterNameFilter'
                },
                ClusterTypeFilter: {
                  location: 'querystring',
                  locationName: 'clusterTypeFilter'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ClusterInfoList: {
                  locationName: 'clusterInfoList',
                  type: 'list',
                  member: {
                    shape: 'S36'
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListConfigurationRevisions: {
            http: {
              method: 'GET',
              requestUri: '/v1/configurations/{arn}/revisions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['Arn']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Revisions: {
                  locationName: 'revisions',
                  type: 'list',
                  member: {
                    shape: 'S1v'
                  }
                }
              }
            }
          },
          ListConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/v1/configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Configurations: {
                  locationName: 'configurations',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CreationTime: {
                        shape: 'S1u',
                        locationName: 'creationTime'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      KafkaVersions: {
                        shape: 'S3',
                        locationName: 'kafkaVersions'
                      },
                      LatestRevision: {
                        shape: 'S1v',
                        locationName: 'latestRevision'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      State: {
                        locationName: 'state'
                      }
                    },
                    required: ['Description', 'LatestRevision', 'CreationTime', 'KafkaVersions', 'Arn', 'Name', 'State']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListKafkaVersions: {
            http: {
              method: 'GET',
              requestUri: '/v1/kafka-versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KafkaVersions: {
                  locationName: 'kafkaVersions',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Version: {
                        locationName: 'version'
                      },
                      Status: {
                        locationName: 'status'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListNodes: {
            http: {
              method: 'GET',
              requestUri: '/v1/clusters/{clusterArn}/nodes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                NodeInfoList: {
                  locationName: 'nodeInfoList',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AddedToClusterTime: {
                        locationName: 'addedToClusterTime'
                      },
                      BrokerNodeInfo: {
                        locationName: 'brokerNodeInfo',
                        type: 'structure',
                        members: {
                          AttachedENIId: {
                            locationName: 'attachedENIId'
                          },
                          BrokerId: {
                            locationName: 'brokerId',
                            type: 'double'
                          },
                          ClientSubnet: {
                            locationName: 'clientSubnet'
                          },
                          ClientVpcIpAddress: {
                            locationName: 'clientVpcIpAddress'
                          },
                          CurrentBrokerSoftwareInfo: {
                            shape: 'S2x',
                            locationName: 'currentBrokerSoftwareInfo'
                          },
                          Endpoints: {
                            shape: 'S3',
                            locationName: 'endpoints'
                          }
                        }
                      },
                      ControllerNodeInfo: {
                        locationName: 'controllerNodeInfo',
                        type: 'structure',
                        members: {
                          Endpoints: {
                            shape: 'S3',
                            locationName: 'endpoints'
                          }
                        }
                      },
                      InstanceType: {
                        locationName: 'instanceType'
                      },
                      NodeARN: {
                        locationName: 'nodeARN'
                      },
                      NodeType: {
                        locationName: 'nodeType'
                      },
                      ZookeeperNodeInfo: {
                        locationName: 'zookeeperNodeInfo',
                        type: 'structure',
                        members: {
                          AttachedENIId: {
                            locationName: 'attachedENIId'
                          },
                          ClientVpcIpAddress: {
                            locationName: 'clientVpcIpAddress'
                          },
                          Endpoints: {
                            shape: 'S3',
                            locationName: 'endpoints'
                          },
                          ZookeeperId: {
                            locationName: 'zookeeperId',
                            type: 'double'
                          },
                          ZookeeperVersion: {
                            locationName: 'zookeeperVersion'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ListReplicators: {
            http: {
              method: 'GET',
              requestUri: '/replication/v1/replicators',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                ReplicatorNameFilter: {
                  location: 'querystring',
                  locationName: 'replicatorNameFilter'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Replicators: {
                  locationName: 'replicators',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreationTime: {
                        shape: 'S1u',
                        locationName: 'creationTime'
                      },
                      CurrentVersion: {
                        locationName: 'currentVersion'
                      },
                      IsReplicatorReference: {
                        locationName: 'isReplicatorReference',
                        type: 'boolean'
                      },
                      KafkaClustersSummary: {
                        locationName: 'kafkaClustersSummary',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            AmazonMskCluster: {
                              shape: 'S21',
                              locationName: 'amazonMskCluster'
                            },
                            KafkaClusterAlias: {
                              locationName: 'kafkaClusterAlias'
                            }
                          }
                        }
                      },
                      ReplicationInfoSummaryList: {
                        locationName: 'replicationInfoSummaryList',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            SourceKafkaClusterAlias: {
                              locationName: 'sourceKafkaClusterAlias'
                            },
                            TargetKafkaClusterAlias: {
                              locationName: 'targetKafkaClusterAlias'
                            }
                          }
                        }
                      },
                      ReplicatorArn: {
                        locationName: 'replicatorArn'
                      },
                      ReplicatorName: {
                        locationName: 'replicatorName'
                      },
                      ReplicatorResourceArn: {
                        locationName: 'replicatorResourceArn'
                      },
                      ReplicatorState: {
                        locationName: 'replicatorState'
                      }
                    }
                  }
                }
              }
            }
          },
          ListScramSecrets: {
            http: {
              method: 'GET',
              requestUri: '/v1/clusters/{clusterArn}/scram-secrets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                SecretArnList: {
                  shape: 'S3',
                  locationName: 'secretArnList'
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/v1/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                }
              }
            }
          },
          ListClientVpcConnections: {
            http: {
              method: 'GET',
              requestUri: '/v1/clusters/{clusterArn}/client-vpc-connections',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                ClientVpcConnections: {
                  locationName: 'clientVpcConnections',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Authentication: {
                        locationName: 'authentication'
                      },
                      CreationTime: {
                        shape: 'S1u',
                        locationName: 'creationTime'
                      },
                      State: {
                        locationName: 'state'
                      },
                      VpcConnectionArn: {
                        locationName: 'vpcConnectionArn'
                      },
                      Owner: {
                        locationName: 'owner'
                      }
                    },
                    required: ['VpcConnectionArn']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListVpcConnections: {
            http: {
              method: 'GET',
              requestUri: '/v1/vpc-connections',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VpcConnections: {
                  locationName: 'vpcConnections',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VpcConnectionArn: {
                        locationName: 'vpcConnectionArn'
                      },
                      TargetClusterArn: {
                        locationName: 'targetClusterArn'
                      },
                      CreationTime: {
                        shape: 'S1u',
                        locationName: 'creationTime'
                      },
                      Authentication: {
                        locationName: 'authentication'
                      },
                      VpcId: {
                        locationName: 'vpcId'
                      },
                      State: {
                        locationName: 'state'
                      }
                    },
                    required: ['VpcConnectionArn', 'TargetClusterArn']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          RejectClientVpcConnection: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/client-vpc-connection',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                VpcConnectionArn: {
                  locationName: 'vpcConnectionArn'
                }
              },
              required: ['VpcConnectionArn', 'ClusterArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutClusterPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                Policy: {
                  locationName: 'policy'
                }
              },
              required: ['ClusterArn', 'Policy']
            },
            output: {
              type: 'structure',
              members: {
                CurrentVersion: {
                  locationName: 'currentVersion'
                }
              }
            }
          },
          RebootBroker: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/reboot-broker',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerIds: {
                  shape: 'S3',
                  locationName: 'brokerIds'
                },
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              },
              required: ['ClusterArn', 'BrokerIds']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/v1/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'S1e',
                  locationName: 'tags'
                }
              },
              required: ['ResourceArn', 'Tags']
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeys: {
                  shape: 'S3',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['TagKeys', 'ResourceArn']
            }
          },
          UpdateBrokerCount: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/nodes/count',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                TargetNumberOfBrokerNodes: {
                  locationName: 'targetNumberOfBrokerNodes',
                  type: 'integer'
                }
              },
              required: ['ClusterArn', 'CurrentVersion', 'TargetNumberOfBrokerNodes']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          UpdateBrokerType: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/nodes/type',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                TargetInstanceType: {
                  locationName: 'targetInstanceType'
                }
              },
              required: ['ClusterArn', 'CurrentVersion', 'TargetInstanceType']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          UpdateBrokerStorage: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/nodes/storage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                TargetBrokerEBSVolumeInfo: {
                  shape: 'S3h',
                  locationName: 'targetBrokerEBSVolumeInfo'
                }
              },
              required: ['ClusterArn', 'TargetBrokerEBSVolumeInfo', 'CurrentVersion']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          UpdateConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/v1/configurations/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                Description: {
                  locationName: 'description'
                },
                ServerProperties: {
                  locationName: 'serverProperties',
                  type: 'blob'
                }
              },
              required: ['Arn', 'ServerProperties']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                LatestRevision: {
                  shape: 'S1v',
                  locationName: 'latestRevision'
                }
              }
            }
          },
          UpdateConnectivity: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/connectivity',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                ConnectivityInfo: {
                  shape: 'Sh',
                  locationName: 'connectivityInfo'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                }
              },
              required: ['ClusterArn', 'ConnectivityInfo', 'CurrentVersion']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          UpdateClusterConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                ConfigurationInfo: {
                  shape: 'Sw',
                  locationName: 'configurationInfo'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                }
              },
              required: ['ClusterArn', 'CurrentVersion', 'ConfigurationInfo']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          UpdateClusterKafkaVersion: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/version',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                ConfigurationInfo: {
                  shape: 'Sw',
                  locationName: 'configurationInfo'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                TargetKafkaVersion: {
                  locationName: 'targetKafkaVersion'
                }
              },
              required: ['ClusterArn', 'TargetKafkaVersion', 'CurrentVersion']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          UpdateMonitoring: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/monitoring',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                EnhancedMonitoring: {
                  locationName: 'enhancedMonitoring'
                },
                OpenMonitoring: {
                  shape: 'S13',
                  locationName: 'openMonitoring'
                },
                LoggingInfo: {
                  shape: 'S18',
                  locationName: 'loggingInfo'
                }
              },
              required: ['ClusterArn', 'CurrentVersion']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          UpdateReplicationInfo: {
            http: {
              method: 'PUT',
              requestUri: '/replication/v1/replicators/{replicatorArn}/replication-info',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConsumerGroupReplication: {
                  locationName: 'consumerGroupReplication',
                  type: 'structure',
                  members: {
                    ConsumerGroupsToExclude: {
                      shape: 'S26',
                      locationName: 'consumerGroupsToExclude'
                    },
                    ConsumerGroupsToReplicate: {
                      shape: 'S26',
                      locationName: 'consumerGroupsToReplicate'
                    },
                    DetectAndCopyNewConsumerGroups: {
                      locationName: 'detectAndCopyNewConsumerGroups',
                      type: 'boolean'
                    },
                    SynchroniseConsumerGroupOffsets: {
                      locationName: 'synchroniseConsumerGroupOffsets',
                      type: 'boolean'
                    }
                  },
                  required: ['ConsumerGroupsToReplicate', 'ConsumerGroupsToExclude', 'SynchroniseConsumerGroupOffsets', 'DetectAndCopyNewConsumerGroups']
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                ReplicatorArn: {
                  location: 'uri',
                  locationName: 'replicatorArn'
                },
                SourceKafkaClusterArn: {
                  locationName: 'sourceKafkaClusterArn'
                },
                TargetKafkaClusterArn: {
                  locationName: 'targetKafkaClusterArn'
                },
                TopicReplication: {
                  locationName: 'topicReplication',
                  type: 'structure',
                  members: {
                    CopyAccessControlListsForTopics: {
                      locationName: 'copyAccessControlListsForTopics',
                      type: 'boolean'
                    },
                    CopyTopicConfigurations: {
                      locationName: 'copyTopicConfigurations',
                      type: 'boolean'
                    },
                    DetectAndCopyNewTopics: {
                      locationName: 'detectAndCopyNewTopics',
                      type: 'boolean'
                    },
                    TopicsToExclude: {
                      shape: 'S2c',
                      locationName: 'topicsToExclude'
                    },
                    TopicsToReplicate: {
                      shape: 'S2c',
                      locationName: 'topicsToReplicate'
                    }
                  },
                  required: ['TopicsToReplicate', 'TopicsToExclude', 'CopyTopicConfigurations', 'DetectAndCopyNewTopics', 'CopyAccessControlListsForTopics']
                }
              },
              required: ['ReplicatorArn', 'SourceKafkaClusterArn', 'CurrentVersion', 'TargetKafkaClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                ReplicatorArn: {
                  locationName: 'replicatorArn'
                },
                ReplicatorState: {
                  locationName: 'replicatorState'
                }
              }
            }
          },
          UpdateSecurity: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/clusters/{clusterArn}/security',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClientAuthentication: {
                  shape: 'Sp',
                  locationName: 'clientAuthentication'
                },
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                EncryptionInfo: {
                  shape: 'Sy',
                  locationName: 'encryptionInfo'
                }
              },
              required: ['ClusterArn', 'CurrentVersion']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          },
          UpdateStorage: {
            http: {
              method: 'PUT',
              requestUri: '/v1/clusters/{clusterArn}/storage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                CurrentVersion: {
                  locationName: 'currentVersion'
                },
                ProvisionedThroughput: {
                  shape: 'Sd',
                  locationName: 'provisionedThroughput'
                },
                StorageMode: {
                  locationName: 'storageMode'
                },
                VolumeSizeGB: {
                  locationName: 'volumeSizeGB',
                  type: 'integer'
                }
              },
              required: ['ClusterArn', 'CurrentVersion']
            },
            output: {
              type: 'structure',
              members: {
                ClusterArn: {
                  locationName: 'clusterArn'
                },
                ClusterOperationArn: {
                  locationName: 'clusterOperationArn'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S5: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ErrorCode: {
                  locationName: 'errorCode'
                },
                ErrorMessage: {
                  locationName: 'errorMessage'
                },
                SecretArn: {
                  locationName: 'secretArn'
                }
              }
            }
          },
          S8: {
            type: 'structure',
            members: {
              BrokerAZDistribution: {
                locationName: 'brokerAZDistribution'
              },
              ClientSubnets: {
                shape: 'S3',
                locationName: 'clientSubnets'
              },
              InstanceType: {
                locationName: 'instanceType'
              },
              SecurityGroups: {
                shape: 'S3',
                locationName: 'securityGroups'
              },
              StorageInfo: {
                locationName: 'storageInfo',
                type: 'structure',
                members: {
                  EbsStorageInfo: {
                    locationName: 'ebsStorageInfo',
                    type: 'structure',
                    members: {
                      ProvisionedThroughput: {
                        shape: 'Sd',
                        locationName: 'provisionedThroughput'
                      },
                      VolumeSize: {
                        locationName: 'volumeSize',
                        type: 'integer'
                      }
                    }
                  }
                }
              },
              ConnectivityInfo: {
                shape: 'Sh',
                locationName: 'connectivityInfo'
              },
              ZoneIds: {
                shape: 'S3',
                locationName: 'zoneIds'
              }
            },
            required: ['ClientSubnets', 'InstanceType']
          },
          Sd: {
            type: 'structure',
            members: {
              Enabled: {
                locationName: 'enabled',
                type: 'boolean'
              },
              VolumeThroughput: {
                locationName: 'volumeThroughput',
                type: 'integer'
              }
            }
          },
          Sh: {
            type: 'structure',
            members: {
              PublicAccess: {
                locationName: 'publicAccess',
                type: 'structure',
                members: {
                  Type: {
                    locationName: 'type'
                  }
                }
              },
              VpcConnectivity: {
                locationName: 'vpcConnectivity',
                type: 'structure',
                members: {
                  ClientAuthentication: {
                    locationName: 'clientAuthentication',
                    type: 'structure',
                    members: {
                      Sasl: {
                        locationName: 'sasl',
                        type: 'structure',
                        members: {
                          Scram: {
                            locationName: 'scram',
                            type: 'structure',
                            members: {
                              Enabled: {
                                locationName: 'enabled',
                                type: 'boolean'
                              }
                            }
                          },
                          Iam: {
                            locationName: 'iam',
                            type: 'structure',
                            members: {
                              Enabled: {
                                locationName: 'enabled',
                                type: 'boolean'
                              }
                            }
                          }
                        }
                      },
                      Tls: {
                        locationName: 'tls',
                        type: 'structure',
                        members: {
                          Enabled: {
                            locationName: 'enabled',
                            type: 'boolean'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sp: {
            type: 'structure',
            members: {
              Sasl: {
                locationName: 'sasl',
                type: 'structure',
                members: {
                  Scram: {
                    locationName: 'scram',
                    type: 'structure',
                    members: {
                      Enabled: {
                        locationName: 'enabled',
                        type: 'boolean'
                      }
                    }
                  },
                  Iam: {
                    shape: 'Ss',
                    locationName: 'iam'
                  }
                }
              },
              Tls: {
                locationName: 'tls',
                type: 'structure',
                members: {
                  CertificateAuthorityArnList: {
                    shape: 'S3',
                    locationName: 'certificateAuthorityArnList'
                  },
                  Enabled: {
                    locationName: 'enabled',
                    type: 'boolean'
                  }
                }
              },
              Unauthenticated: {
                locationName: 'unauthenticated',
                type: 'structure',
                members: {
                  Enabled: {
                    locationName: 'enabled',
                    type: 'boolean'
                  }
                }
              }
            }
          },
          Ss: {
            type: 'structure',
            members: {
              Enabled: {
                locationName: 'enabled',
                type: 'boolean'
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              Revision: {
                locationName: 'revision',
                type: 'long'
              }
            },
            required: ['Revision', 'Arn']
          },
          Sy: {
            type: 'structure',
            members: {
              EncryptionAtRest: {
                locationName: 'encryptionAtRest',
                type: 'structure',
                members: {
                  DataVolumeKMSKeyId: {
                    locationName: 'dataVolumeKMSKeyId'
                  }
                },
                required: ['DataVolumeKMSKeyId']
              },
              EncryptionInTransit: {
                locationName: 'encryptionInTransit',
                type: 'structure',
                members: {
                  ClientBroker: {
                    locationName: 'clientBroker'
                  },
                  InCluster: {
                    locationName: 'inCluster',
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S13: {
            type: 'structure',
            members: {
              Prometheus: {
                locationName: 'prometheus',
                type: 'structure',
                members: {
                  JmxExporter: {
                    locationName: 'jmxExporter',
                    type: 'structure',
                    members: {
                      EnabledInBroker: {
                        locationName: 'enabledInBroker',
                        type: 'boolean'
                      }
                    },
                    required: ['EnabledInBroker']
                  },
                  NodeExporter: {
                    locationName: 'nodeExporter',
                    type: 'structure',
                    members: {
                      EnabledInBroker: {
                        locationName: 'enabledInBroker',
                        type: 'boolean'
                      }
                    },
                    required: ['EnabledInBroker']
                  }
                }
              }
            },
            required: ['Prometheus']
          },
          S18: {
            type: 'structure',
            members: {
              BrokerLogs: {
                locationName: 'brokerLogs',
                type: 'structure',
                members: {
                  CloudWatchLogs: {
                    locationName: 'cloudWatchLogs',
                    type: 'structure',
                    members: {
                      Enabled: {
                        locationName: 'enabled',
                        type: 'boolean'
                      },
                      LogGroup: {
                        locationName: 'logGroup'
                      }
                    },
                    required: ['Enabled']
                  },
                  Firehose: {
                    locationName: 'firehose',
                    type: 'structure',
                    members: {
                      DeliveryStream: {
                        locationName: 'deliveryStream'
                      },
                      Enabled: {
                        locationName: 'enabled',
                        type: 'boolean'
                      }
                    },
                    required: ['Enabled']
                  },
                  S3: {
                    locationName: 's3',
                    type: 'structure',
                    members: {
                      Bucket: {
                        locationName: 'bucket'
                      },
                      Enabled: {
                        locationName: 'enabled',
                        type: 'boolean'
                      },
                      Prefix: {
                        locationName: 'prefix'
                      }
                    },
                    required: ['Enabled']
                  }
                }
              }
            },
            required: ['BrokerLogs']
          },
          S1e: {
            type: 'map',
            key: {},
            value: {}
          },
          S1l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SubnetIds: {
                  shape: 'S3',
                  locationName: 'subnetIds'
                },
                SecurityGroupIds: {
                  shape: 'S3',
                  locationName: 'securityGroupIds'
                }
              },
              required: ['SubnetIds']
            }
          },
          S1n: {
            type: 'structure',
            members: {
              Sasl: {
                locationName: 'sasl',
                type: 'structure',
                members: {
                  Iam: {
                    shape: 'Ss',
                    locationName: 'iam'
                  }
                }
              }
            }
          },
          S1u: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1v: {
            type: 'structure',
            members: {
              CreationTime: {
                shape: 'S1u',
                locationName: 'creationTime'
              },
              Description: {
                locationName: 'description'
              },
              Revision: {
                locationName: 'revision',
                type: 'long'
              }
            },
            required: ['Revision', 'CreationTime']
          },
          S21: {
            type: 'structure',
            members: {
              MskClusterArn: {
                locationName: 'mskClusterArn'
              }
            },
            required: ['MskClusterArn']
          },
          S22: {
            type: 'structure',
            members: {
              SecurityGroupIds: {
                shape: 'S3',
                locationName: 'securityGroupIds'
              },
              SubnetIds: {
                shape: 'S3',
                locationName: 'subnetIds'
              }
            },
            required: ['SubnetIds']
          },
          S25: {
            type: 'structure',
            members: {
              ConsumerGroupsToExclude: {
                shape: 'S26',
                locationName: 'consumerGroupsToExclude'
              },
              ConsumerGroupsToReplicate: {
                shape: 'S26',
                locationName: 'consumerGroupsToReplicate'
              },
              DetectAndCopyNewConsumerGroups: {
                locationName: 'detectAndCopyNewConsumerGroups',
                type: 'boolean'
              },
              SynchroniseConsumerGroupOffsets: {
                locationName: 'synchroniseConsumerGroupOffsets',
                type: 'boolean'
              }
            },
            required: ['ConsumerGroupsToReplicate']
          },
          S26: {
            type: 'list',
            member: {}
          },
          S29: {
            type: 'structure',
            members: {
              CopyAccessControlListsForTopics: {
                locationName: 'copyAccessControlListsForTopics',
                type: 'boolean'
              },
              CopyTopicConfigurations: {
                locationName: 'copyTopicConfigurations',
                type: 'boolean'
              },
              DetectAndCopyNewTopics: {
                locationName: 'detectAndCopyNewTopics',
                type: 'boolean'
              },
              StartingPosition: {
                locationName: 'startingPosition',
                type: 'structure',
                members: {
                  Type: {
                    locationName: 'type'
                  }
                }
              },
              TopicsToExclude: {
                shape: 'S2c',
                locationName: 'topicsToExclude'
              },
              TopicsToReplicate: {
                shape: 'S2c',
                locationName: 'topicsToReplicate'
              }
            },
            required: ['TopicsToReplicate']
          },
          S2c: {
            type: 'list',
            member: {}
          },
          S2w: {
            type: 'structure',
            members: {
              ActiveOperationArn: {
                locationName: 'activeOperationArn'
              },
              BrokerNodeGroupInfo: {
                shape: 'S8',
                locationName: 'brokerNodeGroupInfo'
              },
              ClientAuthentication: {
                shape: 'Sp',
                locationName: 'clientAuthentication'
              },
              ClusterArn: {
                locationName: 'clusterArn'
              },
              ClusterName: {
                locationName: 'clusterName'
              },
              CreationTime: {
                shape: 'S1u',
                locationName: 'creationTime'
              },
              CurrentBrokerSoftwareInfo: {
                shape: 'S2x',
                locationName: 'currentBrokerSoftwareInfo'
              },
              CurrentVersion: {
                locationName: 'currentVersion'
              },
              EncryptionInfo: {
                shape: 'Sy',
                locationName: 'encryptionInfo'
              },
              EnhancedMonitoring: {
                locationName: 'enhancedMonitoring'
              },
              OpenMonitoring: {
                shape: 'S2y',
                locationName: 'openMonitoring'
              },
              LoggingInfo: {
                shape: 'S18',
                locationName: 'loggingInfo'
              },
              NumberOfBrokerNodes: {
                locationName: 'numberOfBrokerNodes',
                type: 'integer'
              },
              State: {
                locationName: 'state'
              },
              StateInfo: {
                shape: 'S32',
                locationName: 'stateInfo'
              },
              Tags: {
                shape: 'S1e',
                locationName: 'tags'
              },
              ZookeeperConnectString: {
                locationName: 'zookeeperConnectString'
              },
              ZookeeperConnectStringTls: {
                locationName: 'zookeeperConnectStringTls'
              },
              StorageMode: {
                locationName: 'storageMode'
              },
              CustomerActionStatus: {
                locationName: 'customerActionStatus'
              }
            }
          },
          S2x: {
            type: 'structure',
            members: {
              ConfigurationArn: {
                locationName: 'configurationArn'
              },
              ConfigurationRevision: {
                locationName: 'configurationRevision',
                type: 'long'
              },
              KafkaVersion: {
                locationName: 'kafkaVersion'
              }
            }
          },
          S2y: {
            type: 'structure',
            members: {
              Prometheus: {
                locationName: 'prometheus',
                type: 'structure',
                members: {
                  JmxExporter: {
                    locationName: 'jmxExporter',
                    type: 'structure',
                    members: {
                      EnabledInBroker: {
                        locationName: 'enabledInBroker',
                        type: 'boolean'
                      }
                    },
                    required: ['EnabledInBroker']
                  },
                  NodeExporter: {
                    locationName: 'nodeExporter',
                    type: 'structure',
                    members: {
                      EnabledInBroker: {
                        locationName: 'enabledInBroker',
                        type: 'boolean'
                      }
                    },
                    required: ['EnabledInBroker']
                  }
                }
              }
            },
            required: ['Prometheus']
          },
          S32: {
            type: 'structure',
            members: {
              Code: {
                locationName: 'code'
              },
              Message: {
                locationName: 'message'
              }
            }
          },
          S36: {
            type: 'structure',
            members: {
              ActiveOperationArn: {
                locationName: 'activeOperationArn'
              },
              ClusterType: {
                locationName: 'clusterType'
              },
              ClusterArn: {
                locationName: 'clusterArn'
              },
              ClusterName: {
                locationName: 'clusterName'
              },
              CreationTime: {
                shape: 'S1u',
                locationName: 'creationTime'
              },
              CurrentVersion: {
                locationName: 'currentVersion'
              },
              State: {
                locationName: 'state'
              },
              StateInfo: {
                shape: 'S32',
                locationName: 'stateInfo'
              },
              Tags: {
                shape: 'S1e',
                locationName: 'tags'
              },
              Provisioned: {
                locationName: 'provisioned',
                type: 'structure',
                members: {
                  BrokerNodeGroupInfo: {
                    shape: 'S8',
                    locationName: 'brokerNodeGroupInfo'
                  },
                  CurrentBrokerSoftwareInfo: {
                    shape: 'S2x',
                    locationName: 'currentBrokerSoftwareInfo'
                  },
                  ClientAuthentication: {
                    shape: 'Sp',
                    locationName: 'clientAuthentication'
                  },
                  EncryptionInfo: {
                    shape: 'Sy',
                    locationName: 'encryptionInfo'
                  },
                  EnhancedMonitoring: {
                    locationName: 'enhancedMonitoring'
                  },
                  OpenMonitoring: {
                    shape: 'S13',
                    locationName: 'openMonitoring'
                  },
                  LoggingInfo: {
                    shape: 'S18',
                    locationName: 'loggingInfo'
                  },
                  NumberOfBrokerNodes: {
                    locationName: 'numberOfBrokerNodes',
                    type: 'integer'
                  },
                  ZookeeperConnectString: {
                    locationName: 'zookeeperConnectString'
                  },
                  ZookeeperConnectStringTls: {
                    locationName: 'zookeeperConnectStringTls'
                  },
                  StorageMode: {
                    locationName: 'storageMode'
                  },
                  CustomerActionStatus: {
                    locationName: 'customerActionStatus'
                  }
                },
                required: ['BrokerNodeGroupInfo', 'NumberOfBrokerNodes']
              },
              Serverless: {
                locationName: 'serverless',
                type: 'structure',
                members: {
                  VpcConfigs: {
                    shape: 'S1l',
                    locationName: 'vpcConfigs'
                  },
                  ClientAuthentication: {
                    shape: 'S1n',
                    locationName: 'clientAuthentication'
                  }
                },
                required: ['VpcConfigs']
              }
            }
          },
          S3b: {
            type: 'structure',
            members: {
              ClientRequestId: {
                locationName: 'clientRequestId'
              },
              ClusterArn: {
                locationName: 'clusterArn'
              },
              CreationTime: {
                shape: 'S1u',
                locationName: 'creationTime'
              },
              EndTime: {
                shape: 'S1u',
                locationName: 'endTime'
              },
              ErrorInfo: {
                shape: 'S3c',
                locationName: 'errorInfo'
              },
              OperationArn: {
                locationName: 'operationArn'
              },
              OperationState: {
                locationName: 'operationState'
              },
              OperationSteps: {
                shape: 'S3d',
                locationName: 'operationSteps'
              },
              OperationType: {
                locationName: 'operationType'
              },
              SourceClusterInfo: {
                shape: 'S3g',
                locationName: 'sourceClusterInfo'
              },
              TargetClusterInfo: {
                shape: 'S3g',
                locationName: 'targetClusterInfo'
              },
              VpcConnectionInfo: {
                shape: 'S3m',
                locationName: 'vpcConnectionInfo'
              }
            }
          },
          S3c: {
            type: 'structure',
            members: {
              ErrorCode: {
                locationName: 'errorCode'
              },
              ErrorString: {
                locationName: 'errorString'
              }
            }
          },
          S3d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StepInfo: {
                  locationName: 'stepInfo',
                  type: 'structure',
                  members: {
                    StepStatus: {
                      locationName: 'stepStatus'
                    }
                  }
                },
                StepName: {
                  locationName: 'stepName'
                }
              }
            }
          },
          S3g: {
            type: 'structure',
            members: {
              BrokerEBSVolumeInfo: {
                shape: 'S3h',
                locationName: 'brokerEBSVolumeInfo'
              },
              ConfigurationInfo: {
                shape: 'Sw',
                locationName: 'configurationInfo'
              },
              NumberOfBrokerNodes: {
                locationName: 'numberOfBrokerNodes',
                type: 'integer'
              },
              EnhancedMonitoring: {
                locationName: 'enhancedMonitoring'
              },
              OpenMonitoring: {
                shape: 'S2y',
                locationName: 'openMonitoring'
              },
              KafkaVersion: {
                locationName: 'kafkaVersion'
              },
              LoggingInfo: {
                shape: 'S18',
                locationName: 'loggingInfo'
              },
              InstanceType: {
                locationName: 'instanceType'
              },
              ClientAuthentication: {
                shape: 'Sp',
                locationName: 'clientAuthentication'
              },
              EncryptionInfo: {
                shape: 'Sy',
                locationName: 'encryptionInfo'
              },
              ConnectivityInfo: {
                shape: 'Sh',
                locationName: 'connectivityInfo'
              },
              StorageMode: {
                locationName: 'storageMode'
              },
              BrokerCountUpdateInfo: {
                locationName: 'brokerCountUpdateInfo',
                type: 'structure',
                members: {
                  CreatedBrokerIds: {
                    shape: 'S3k',
                    locationName: 'createdBrokerIds'
                  },
                  DeletedBrokerIds: {
                    shape: 'S3k',
                    locationName: 'deletedBrokerIds'
                  }
                }
              }
            }
          },
          S3h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                KafkaBrokerNodeId: {
                  locationName: 'kafkaBrokerNodeId'
                },
                ProvisionedThroughput: {
                  shape: 'Sd',
                  locationName: 'provisionedThroughput'
                },
                VolumeSizeGB: {
                  locationName: 'volumeSizeGB',
                  type: 'integer'
                }
              },
              required: ['KafkaBrokerNodeId']
            }
          },
          S3k: {
            type: 'list',
            member: {
              type: 'double'
            }
          },
          S3m: {
            type: 'structure',
            members: {
              VpcConnectionArn: {
                locationName: 'vpcConnectionArn'
              },
              Owner: {
                locationName: 'owner'
              },
              UserIdentity: {
                shape: 'S3n',
                locationName: 'userIdentity'
              },
              CreationTime: {
                shape: 'S1u',
                locationName: 'creationTime'
              }
            }
          },
          S3n: {
            type: 'structure',
            members: {
              Type: {
                locationName: 'type'
              },
              PrincipalId: {
                locationName: 'principalId'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=021516498562cdbea71a93e5ee0c99c2d65888b4.js.map