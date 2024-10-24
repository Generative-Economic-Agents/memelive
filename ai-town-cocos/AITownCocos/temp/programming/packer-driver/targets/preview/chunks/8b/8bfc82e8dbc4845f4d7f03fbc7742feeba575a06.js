System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-01-27',
          endpointPrefix: 'timestream-influxdb',
          jsonVersion: '1.0',
          protocol: 'json',
          ripServiceName: 'timestream-influxdb',
          serviceAbbreviation: 'Timestream InfluxDB',
          serviceFullName: 'Timestream InfluxDB',
          serviceId: 'Timestream InfluxDB',
          signatureVersion: 'v4',
          signingName: 'timestream-influxdb',
          targetPrefix: 'AmazonTimestreamInfluxDB',
          uid: 'timestream-influxdb-2023-01-27'
        },
        operations: {
          CreateDbInstance: {
            input: {
              type: 'structure',
              required: ['name', 'password', 'dbInstanceType', 'vpcSubnetIds', 'vpcSecurityGroupIds', 'allocatedStorage'],
              members: {
                name: {},
                username: {
                  type: 'string',
                  sensitive: true
                },
                password: {
                  type: 'string',
                  sensitive: true
                },
                organization: {},
                bucket: {},
                dbInstanceType: {},
                vpcSubnetIds: {
                  shape: 'S8'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sa'
                },
                publiclyAccessible: {
                  type: 'boolean'
                },
                dbStorageType: {},
                allocatedStorage: {
                  type: 'integer'
                },
                dbParameterGroupIdentifier: {},
                deploymentType: {},
                logDeliveryConfiguration: {
                  shape: 'Sh'
                },
                tags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'name', 'arn', 'vpcSubnetIds'],
              members: {
                id: {},
                name: {},
                arn: {},
                status: {},
                endpoint: {},
                dbInstanceType: {},
                dbStorageType: {},
                allocatedStorage: {
                  type: 'integer'
                },
                deploymentType: {},
                vpcSubnetIds: {
                  shape: 'S8'
                },
                publiclyAccessible: {
                  type: 'boolean'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sa'
                },
                dbParameterGroupIdentifier: {},
                availabilityZone: {},
                secondaryAvailabilityZone: {},
                logDeliveryConfiguration: {
                  shape: 'Sh'
                },
                influxAuthParametersSecretArn: {}
              }
            },
            idempotent: true
          },
          CreateDbParameterGroup: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                parameters: {
                  shape: 'Sv'
                },
                tags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'name', 'arn'],
              members: {
                id: {},
                name: {},
                arn: {},
                description: {},
                parameters: {
                  shape: 'Sv'
                }
              }
            },
            idempotent: true
          },
          DeleteDbInstance: {
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'name', 'arn', 'vpcSubnetIds'],
              members: {
                id: {},
                name: {},
                arn: {},
                status: {},
                endpoint: {},
                dbInstanceType: {},
                dbStorageType: {},
                allocatedStorage: {
                  type: 'integer'
                },
                deploymentType: {},
                vpcSubnetIds: {
                  shape: 'S8'
                },
                publiclyAccessible: {
                  type: 'boolean'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sa'
                },
                dbParameterGroupIdentifier: {},
                availabilityZone: {},
                secondaryAvailabilityZone: {},
                logDeliveryConfiguration: {
                  shape: 'Sh'
                },
                influxAuthParametersSecretArn: {}
              }
            },
            idempotent: true
          },
          GetDbInstance: {
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'name', 'arn', 'vpcSubnetIds'],
              members: {
                id: {},
                name: {},
                arn: {},
                status: {},
                endpoint: {},
                dbInstanceType: {},
                dbStorageType: {},
                allocatedStorage: {
                  type: 'integer'
                },
                deploymentType: {},
                vpcSubnetIds: {
                  shape: 'S8'
                },
                publiclyAccessible: {
                  type: 'boolean'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sa'
                },
                dbParameterGroupIdentifier: {},
                availabilityZone: {},
                secondaryAvailabilityZone: {},
                logDeliveryConfiguration: {
                  shape: 'Sh'
                },
                influxAuthParametersSecretArn: {}
              }
            }
          },
          GetDbParameterGroup: {
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'name', 'arn'],
              members: {
                id: {},
                name: {},
                arn: {},
                description: {},
                parameters: {
                  shape: 'Sv'
                }
              }
            }
          },
          ListDbInstances: {
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
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name', 'arn'],
                    members: {
                      id: {},
                      name: {},
                      arn: {},
                      status: {},
                      endpoint: {},
                      dbInstanceType: {},
                      dbStorageType: {},
                      allocatedStorage: {
                        type: 'integer'
                      },
                      deploymentType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDbParameterGroups: {
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
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name', 'arn'],
                    members: {
                      id: {},
                      name: {},
                      arn: {},
                      description: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  type: 'map',
                  key: {},
                  value: {}
                }
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
                  shape: 'Sk'
                }
              }
            },
            idempotent: true
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            idempotent: true
          },
          UpdateDbInstance: {
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {},
                logDeliveryConfiguration: {
                  shape: 'Sh'
                },
                dbParameterGroupIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'name', 'arn', 'vpcSubnetIds'],
              members: {
                id: {},
                name: {},
                arn: {},
                status: {},
                endpoint: {},
                dbInstanceType: {},
                dbStorageType: {},
                allocatedStorage: {
                  type: 'integer'
                },
                deploymentType: {},
                vpcSubnetIds: {
                  shape: 'S8'
                },
                publiclyAccessible: {
                  type: 'boolean'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sa'
                },
                dbParameterGroupIdentifier: {},
                availabilityZone: {},
                secondaryAvailabilityZone: {},
                logDeliveryConfiguration: {
                  shape: 'Sh'
                },
                influxAuthParametersSecretArn: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S8: {
            type: 'list',
            member: {}
          },
          Sa: {
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'structure',
            required: ['s3Configuration'],
            members: {
              s3Configuration: {
                type: 'structure',
                required: ['bucketName', 'enabled'],
                members: {
                  bucketName: {},
                  enabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          Sk: {
            type: 'map',
            key: {},
            value: {}
          },
          Sv: {
            type: 'structure',
            members: {
              InfluxDBv2: {
                type: 'structure',
                members: {
                  fluxLogEnabled: {
                    type: 'boolean'
                  },
                  logLevel: {},
                  noTasks: {
                    type: 'boolean'
                  },
                  queryConcurrency: {
                    type: 'integer'
                  },
                  queryQueueSize: {
                    type: 'integer'
                  },
                  tracingType: {},
                  metricsDisabled: {
                    type: 'boolean'
                  }
                }
              }
            },
            union: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8bfc82e8dbc4845f4d7f03fbc7742feeba575a06.js.map