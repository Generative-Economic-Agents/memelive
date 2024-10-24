System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-11-28',
          endpointPrefix: 'docdb-elastic',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'DocDB Elastic',
          serviceFullName: 'Amazon DocumentDB Elastic Clusters',
          serviceId: 'DocDB Elastic',
          signatureVersion: 'v4',
          signingName: 'docdb-elastic',
          uid: 'docdb-elastic-2022-11-28'
        },
        operations: {
          CopyClusterSnapshot: {
            http: {
              requestUri: '/cluster-snapshot/{snapshotArn}/copy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['snapshotArn', 'targetSnapshotName'],
              members: {
                copyTags: {
                  type: 'boolean'
                },
                kmsKeyId: {},
                snapshotArn: {
                  location: 'uri',
                  locationName: 'snapshotArn'
                },
                tags: {
                  shape: 'S4'
                },
                targetSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['snapshot'],
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          CreateCluster: {
            http: {
              requestUri: '/cluster',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['adminUserName', 'adminUserPassword', 'authType', 'clusterName', 'shardCapacity', 'shardCount'],
              members: {
                adminUserName: {},
                adminUserPassword: {
                  shape: 'Se'
                },
                authType: {},
                backupRetentionPeriod: {
                  type: 'integer'
                },
                clientToken: {
                  idempotencyToken: true
                },
                clusterName: {},
                kmsKeyId: {},
                preferredBackupWindow: {},
                preferredMaintenanceWindow: {},
                shardCapacity: {
                  type: 'integer'
                },
                shardCount: {
                  type: 'integer'
                },
                shardInstanceCount: {
                  type: 'integer'
                },
                subnetIds: {
                  shape: 'Sc'
                },
                tags: {
                  shape: 'S4'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
          },
          CreateClusterSnapshot: {
            http: {
              requestUri: '/cluster-snapshot',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clusterArn', 'snapshotName'],
              members: {
                clusterArn: {},
                snapshotName: {},
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['snapshot'],
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          DeleteCluster: {
            http: {
              method: 'DELETE',
              requestUri: '/cluster/{clusterArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clusterArn'],
              members: {
                clusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
          },
          DeleteClusterSnapshot: {
            http: {
              method: 'DELETE',
              requestUri: '/cluster-snapshot/{snapshotArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['snapshotArn'],
              members: {
                snapshotArn: {
                  location: 'uri',
                  locationName: 'snapshotArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['snapshot'],
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          GetCluster: {
            http: {
              method: 'GET',
              requestUri: '/cluster/{clusterArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clusterArn'],
              members: {
                clusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {
                  shape: 'Si'
                }
              }
            }
          },
          GetClusterSnapshot: {
            http: {
              method: 'GET',
              requestUri: '/cluster-snapshot/{snapshotArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['snapshotArn'],
              members: {
                snapshotArn: {
                  location: 'uri',
                  locationName: 'snapshotArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['snapshot'],
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            }
          },
          ListClusterSnapshots: {
            http: {
              method: 'GET',
              requestUri: '/cluster-snapshots',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                clusterArn: {
                  location: 'querystring',
                  locationName: 'clusterArn'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                snapshotType: {
                  location: 'querystring',
                  locationName: 'snapshotType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                snapshots: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['clusterArn', 'snapshotArn', 'snapshotCreationTime', 'snapshotName', 'status'],
                    members: {
                      clusterArn: {},
                      snapshotArn: {},
                      snapshotCreationTime: {},
                      snapshotName: {},
                      status: {}
                    }
                  }
                }
              }
            }
          },
          ListClusters: {
            http: {
              method: 'GET',
              requestUri: '/clusters',
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
                clusters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['clusterArn', 'clusterName', 'status'],
                    members: {
                      clusterArn: {},
                      clusterName: {},
                      status: {}
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
                  shape: 'S4'
                }
              }
            }
          },
          RestoreClusterFromSnapshot: {
            http: {
              requestUri: '/cluster-snapshot/{snapshotArn}/restore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'snapshotArn'],
              members: {
                clusterName: {},
                kmsKeyId: {},
                shardCapacity: {
                  type: 'integer'
                },
                shardInstanceCount: {
                  type: 'integer'
                },
                snapshotArn: {
                  location: 'uri',
                  locationName: 'snapshotArn'
                },
                subnetIds: {
                  shape: 'Sc'
                },
                tags: {
                  shape: 'S4'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
          },
          StartCluster: {
            http: {
              requestUri: '/cluster/{clusterArn}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clusterArn'],
              members: {
                clusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
          },
          StopCluster: {
            http: {
              requestUri: '/cluster/{clusterArn}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clusterArn'],
              members: {
                clusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
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
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
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
          UpdateCluster: {
            http: {
              method: 'PUT',
              requestUri: '/cluster/{clusterArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clusterArn'],
              members: {
                adminUserPassword: {
                  shape: 'Se'
                },
                authType: {},
                backupRetentionPeriod: {
                  type: 'integer'
                },
                clientToken: {
                  idempotencyToken: true
                },
                clusterArn: {
                  location: 'uri',
                  locationName: 'clusterArn'
                },
                preferredBackupWindow: {},
                preferredMaintenanceWindow: {},
                shardCapacity: {
                  type: 'integer'
                },
                shardCount: {
                  type: 'integer'
                },
                shardInstanceCount: {
                  type: 'integer'
                },
                subnetIds: {
                  shape: 'Sc'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cluster'],
              members: {
                cluster: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'map',
            key: {},
            value: {}
          },
          S9: {
            type: 'structure',
            required: ['adminUserName', 'clusterArn', 'clusterCreationTime', 'kmsKeyId', 'snapshotArn', 'snapshotCreationTime', 'snapshotName', 'status', 'subnetIds', 'vpcSecurityGroupIds'],
            members: {
              adminUserName: {},
              clusterArn: {},
              clusterCreationTime: {},
              kmsKeyId: {},
              snapshotArn: {},
              snapshotCreationTime: {},
              snapshotName: {},
              snapshotType: {},
              status: {},
              subnetIds: {
                shape: 'Sc'
              },
              vpcSecurityGroupIds: {
                shape: 'Sc'
              }
            }
          },
          Sc: {
            type: 'list',
            member: {}
          },
          Se: {
            type: 'string',
            sensitive: true
          },
          Si: {
            type: 'structure',
            required: ['adminUserName', 'authType', 'clusterArn', 'clusterEndpoint', 'clusterName', 'createTime', 'kmsKeyId', 'preferredMaintenanceWindow', 'shardCapacity', 'shardCount', 'status', 'subnetIds', 'vpcSecurityGroupIds'],
            members: {
              adminUserName: {},
              authType: {},
              backupRetentionPeriod: {
                type: 'integer'
              },
              clusterArn: {},
              clusterEndpoint: {},
              clusterName: {},
              createTime: {},
              kmsKeyId: {},
              preferredBackupWindow: {},
              preferredMaintenanceWindow: {},
              shardCapacity: {
                type: 'integer'
              },
              shardCount: {
                type: 'integer'
              },
              shardInstanceCount: {
                type: 'integer'
              },
              shards: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['createTime', 'shardId', 'status'],
                  members: {
                    createTime: {},
                    shardId: {},
                    status: {}
                  }
                }
              },
              status: {},
              subnetIds: {
                shape: 'Sc'
              },
              vpcSecurityGroupIds: {
                shape: 'Sc'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=10b5d69fe781998993daedecaff96d103ad878b8.js.map