System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-02-10',
          endpointPrefix: 'cassandra',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'Amazon Keyspaces',
          serviceId: 'Keyspaces',
          signatureVersion: 'v4',
          signingName: 'cassandra',
          targetPrefix: 'KeyspacesService',
          uid: 'keyspaces-2022-02-10'
        },
        operations: {
          CreateKeyspace: {
            input: {
              type: 'structure',
              required: ['keyspaceName'],
              members: {
                keyspaceName: {},
                tags: {
                  shape: 'S3'
                },
                replicationSpecification: {
                  type: 'structure',
                  required: ['replicationStrategy'],
                  members: {
                    replicationStrategy: {},
                    regionList: {
                      shape: 'S9'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            }
          },
          CreateTable: {
            input: {
              type: 'structure',
              required: ['keyspaceName', 'tableName', 'schemaDefinition'],
              members: {
                keyspaceName: {},
                tableName: {},
                schemaDefinition: {
                  shape: 'Sf'
                },
                comment: {
                  shape: 'Sq'
                },
                capacitySpecification: {
                  shape: 'Ss'
                },
                encryptionSpecification: {
                  shape: 'Sv'
                },
                pointInTimeRecovery: {
                  shape: 'Sy'
                },
                ttl: {
                  shape: 'S10'
                },
                defaultTimeToLive: {
                  type: 'integer'
                },
                tags: {
                  shape: 'S3'
                },
                clientSideTimestamps: {
                  shape: 'S13'
                },
                autoScalingSpecification: {
                  shape: 'S15'
                },
                replicaSpecifications: {
                  shape: 'S1c'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            }
          },
          DeleteKeyspace: {
            input: {
              type: 'structure',
              required: ['keyspaceName'],
              members: {
                keyspaceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTable: {
            input: {
              type: 'structure',
              required: ['keyspaceName', 'tableName'],
              members: {
                keyspaceName: {},
                tableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetKeyspace: {
            input: {
              type: 'structure',
              required: ['keyspaceName'],
              members: {
                keyspaceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['keyspaceName', 'resourceArn', 'replicationStrategy'],
              members: {
                keyspaceName: {},
                resourceArn: {},
                replicationStrategy: {},
                replicationRegions: {
                  shape: 'S9'
                }
              }
            }
          },
          GetTable: {
            input: {
              type: 'structure',
              required: ['keyspaceName', 'tableName'],
              members: {
                keyspaceName: {},
                tableName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['keyspaceName', 'tableName', 'resourceArn'],
              members: {
                keyspaceName: {},
                tableName: {},
                resourceArn: {},
                creationTimestamp: {
                  type: 'timestamp'
                },
                status: {},
                schemaDefinition: {
                  shape: 'Sf'
                },
                capacitySpecification: {
                  shape: 'S1p'
                },
                encryptionSpecification: {
                  shape: 'Sv'
                },
                pointInTimeRecovery: {
                  type: 'structure',
                  required: ['status'],
                  members: {
                    status: {},
                    earliestRestorableTimestamp: {
                      type: 'timestamp'
                    }
                  }
                },
                ttl: {
                  shape: 'S10'
                },
                defaultTimeToLive: {
                  type: 'integer'
                },
                comment: {
                  shape: 'Sq'
                },
                clientSideTimestamps: {
                  shape: 'S13'
                },
                replicaSpecifications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      region: {},
                      status: {},
                      capacitySpecification: {
                        shape: 'S1p'
                      }
                    }
                  }
                }
              }
            }
          },
          GetTableAutoScalingSettings: {
            input: {
              type: 'structure',
              required: ['keyspaceName', 'tableName'],
              members: {
                keyspaceName: {},
                tableName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['keyspaceName', 'tableName', 'resourceArn'],
              members: {
                keyspaceName: {},
                tableName: {},
                resourceArn: {},
                autoScalingSpecification: {
                  shape: 'S15'
                },
                replicaSpecifications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      region: {},
                      autoScalingSpecification: {
                        shape: 'S15'
                      }
                    }
                  }
                }
              }
            }
          },
          ListKeyspaces: {
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
              required: ['keyspaces'],
              members: {
                nextToken: {},
                keyspaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['keyspaceName', 'resourceArn', 'replicationStrategy'],
                    members: {
                      keyspaceName: {},
                      resourceArn: {},
                      replicationStrategy: {},
                      replicationRegions: {
                        shape: 'S9'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTables: {
            input: {
              type: 'structure',
              required: ['keyspaceName'],
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                keyspaceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                tables: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['keyspaceName', 'tableName', 'resourceArn'],
                    members: {
                      keyspaceName: {},
                      tableName: {},
                      resourceArn: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                tags: {
                  shape: 'S3'
                }
              }
            }
          },
          RestoreTable: {
            input: {
              type: 'structure',
              required: ['sourceKeyspaceName', 'sourceTableName', 'targetKeyspaceName', 'targetTableName'],
              members: {
                sourceKeyspaceName: {},
                sourceTableName: {},
                targetKeyspaceName: {},
                targetTableName: {},
                restoreTimestamp: {
                  type: 'timestamp'
                },
                capacitySpecificationOverride: {
                  shape: 'Ss'
                },
                encryptionSpecificationOverride: {
                  shape: 'Sv'
                },
                pointInTimeRecoveryOverride: {
                  shape: 'Sy'
                },
                tagsOverride: {
                  shape: 'S3'
                },
                autoScalingSpecification: {
                  shape: 'S15'
                },
                replicaSpecifications: {
                  shape: 'S1c'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['restoredTableARN'],
              members: {
                restoredTableARN: {}
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
                  shape: 'S3'
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
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateTable: {
            input: {
              type: 'structure',
              required: ['keyspaceName', 'tableName'],
              members: {
                keyspaceName: {},
                tableName: {},
                addColumns: {
                  shape: 'Sg'
                },
                capacitySpecification: {
                  shape: 'Ss'
                },
                encryptionSpecification: {
                  shape: 'Sv'
                },
                pointInTimeRecovery: {
                  shape: 'Sy'
                },
                ttl: {
                  shape: 'S10'
                },
                defaultTimeToLive: {
                  type: 'integer'
                },
                clientSideTimestamps: {
                  shape: 'S13'
                },
                autoScalingSpecification: {
                  shape: 'S15'
                },
                replicaSpecifications: {
                  shape: 'S1c'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          S9: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'structure',
            required: ['allColumns', 'partitionKeys'],
            members: {
              allColumns: {
                shape: 'Sg'
              },
              partitionKeys: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name'],
                  members: {
                    name: {}
                  }
                }
              },
              clusteringKeys: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'orderBy'],
                  members: {
                    name: {},
                    orderBy: {}
                  }
                }
              },
              staticColumns: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name'],
                  members: {
                    name: {}
                  }
                }
              }
            }
          },
          Sg: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                name: {},
                type: {}
              }
            }
          },
          Sq: {
            type: 'structure',
            required: ['message'],
            members: {
              message: {}
            }
          },
          Ss: {
            type: 'structure',
            required: ['throughputMode'],
            members: {
              throughputMode: {},
              readCapacityUnits: {
                type: 'long'
              },
              writeCapacityUnits: {
                type: 'long'
              }
            }
          },
          Sv: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              kmsKeyIdentifier: {}
            }
          },
          Sy: {
            type: 'structure',
            required: ['status'],
            members: {
              status: {}
            }
          },
          S10: {
            type: 'structure',
            required: ['status'],
            members: {
              status: {}
            }
          },
          S13: {
            type: 'structure',
            required: ['status'],
            members: {
              status: {}
            }
          },
          S15: {
            type: 'structure',
            members: {
              writeCapacityAutoScaling: {
                shape: 'S16'
              },
              readCapacityAutoScaling: {
                shape: 'S16'
              }
            }
          },
          S16: {
            type: 'structure',
            members: {
              autoScalingDisabled: {
                type: 'boolean'
              },
              minimumUnits: {
                type: 'long'
              },
              maximumUnits: {
                type: 'long'
              },
              scalingPolicy: {
                type: 'structure',
                members: {
                  targetTrackingScalingPolicyConfiguration: {
                    type: 'structure',
                    required: ['targetValue'],
                    members: {
                      disableScaleIn: {
                        type: 'boolean'
                      },
                      scaleInCooldown: {
                        type: 'integer'
                      },
                      scaleOutCooldown: {
                        type: 'integer'
                      },
                      targetValue: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          S1c: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['region'],
              members: {
                region: {},
                readCapacityUnits: {
                  type: 'long'
                },
                readCapacityAutoScaling: {
                  shape: 'S16'
                }
              }
            }
          },
          S1p: {
            type: 'structure',
            required: ['throughputMode'],
            members: {
              throughputMode: {},
              readCapacityUnits: {
                type: 'long'
              },
              writeCapacityUnits: {
                type: 'long'
              },
              lastUpdateToPayPerRequestTimestamp: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e95cc7dc0102e37c8192ed603ebd1398f47b27df.js.map