System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-03-12',
          endpointPrefix: 'finspace',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'finspace',
          serviceFullName: 'FinSpace User Environment Management service',
          serviceId: 'finspace',
          signatureVersion: 'v4',
          signingName: 'finspace',
          uid: 'finspace-2021-03-12'
        },
        operations: {
          CreateEnvironment: {
            http: {
              requestUri: '/environment'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                kmsKeyId: {},
                tags: {
                  shape: 'S5'
                },
                federationMode: {},
                federationParameters: {
                  shape: 'S9'
                },
                superuserParameters: {
                  type: 'structure',
                  required: ['emailAddress', 'firstName', 'lastName'],
                  members: {
                    emailAddress: {
                      type: 'string',
                      sensitive: true
                    },
                    firstName: {},
                    lastName: {}
                  }
                },
                dataBundles: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentId: {},
                environmentArn: {},
                environmentUrl: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          CreateKxChangeset: {
            http: {
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}/changesets'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'changeRequests', 'clientToken'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                changeRequests: {
                  shape: 'Ss'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                changesetId: {},
                databaseName: {},
                environmentId: {},
                changeRequests: {
                  shape: 'Ss'
                },
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                status: {},
                errorInfo: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateKxCluster: {
            http: {
              requestUri: '/kx/environments/{environmentId}/clusters'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'clusterName', 'clusterType', 'releaseLabel', 'vpcConfiguration', 'azMode'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterName: {},
                clusterType: {},
                tickerplantLogConfiguration: {
                  shape: 'S1a'
                },
                databases: {
                  shape: 'S1d'
                },
                cacheStorageConfigurations: {
                  shape: 'S1r'
                },
                autoScalingConfiguration: {
                  shape: 'S1u'
                },
                clusterDescription: {},
                capacityConfiguration: {
                  shape: 'S20'
                },
                releaseLabel: {},
                vpcConfiguration: {
                  shape: 'S23'
                },
                initializationScript: {},
                commandLineArguments: {
                  shape: 'S2b'
                },
                code: {
                  shape: 'S2f'
                },
                executionRole: {},
                savedownStorageConfiguration: {
                  shape: 'S2k'
                },
                azMode: {},
                availabilityZoneId: {},
                tags: {
                  shape: 'S5'
                },
                scalingGroupConfiguration: {
                  shape: 'S2p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentId: {},
                status: {},
                statusReason: {},
                clusterName: {},
                clusterType: {},
                tickerplantLogConfiguration: {
                  shape: 'S1a'
                },
                volumes: {
                  shape: 'S2x'
                },
                databases: {
                  shape: 'S1d'
                },
                cacheStorageConfigurations: {
                  shape: 'S1r'
                },
                autoScalingConfiguration: {
                  shape: 'S1u'
                },
                clusterDescription: {},
                capacityConfiguration: {
                  shape: 'S20'
                },
                releaseLabel: {},
                vpcConfiguration: {
                  shape: 'S23'
                },
                initializationScript: {},
                commandLineArguments: {
                  shape: 'S2b'
                },
                code: {
                  shape: 'S2f'
                },
                executionRole: {},
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                savedownStorageConfiguration: {
                  shape: 'S2k'
                },
                azMode: {},
                availabilityZoneId: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                scalingGroupConfiguration: {
                  shape: 'S2p'
                }
              }
            }
          },
          CreateKxDatabase: {
            http: {
              requestUri: '/kx/environments/{environmentId}/databases'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'clientToken'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {},
                description: {},
                tags: {
                  shape: 'S5'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                databaseName: {},
                databaseArn: {},
                environmentId: {},
                description: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateKxDataview: {
            http: {
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}/dataviews'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'dataviewName', 'azMode', 'clientToken'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                dataviewName: {},
                azMode: {},
                availabilityZoneId: {},
                changesetId: {},
                segmentConfigurations: {
                  shape: 'S1m'
                },
                autoUpdate: {
                  type: 'boolean'
                },
                readWrite: {
                  type: 'boolean'
                },
                description: {},
                tags: {
                  shape: 'S5'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataviewName: {},
                databaseName: {},
                environmentId: {},
                azMode: {},
                availabilityZoneId: {},
                changesetId: {},
                segmentConfigurations: {
                  shape: 'S1m'
                },
                description: {},
                autoUpdate: {
                  type: 'boolean'
                },
                readWrite: {
                  type: 'boolean'
                },
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                status: {}
              }
            }
          },
          CreateKxEnvironment: {
            http: {
              requestUri: '/kx/environments'
            },
            input: {
              type: 'structure',
              required: ['name', 'kmsKeyId'],
              members: {
                name: {},
                description: {},
                kmsKeyId: {},
                tags: {
                  shape: 'S5'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                status: {},
                environmentId: {},
                description: {},
                environmentArn: {},
                kmsKeyId: {},
                creationTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateKxScalingGroup: {
            http: {
              requestUri: '/kx/environments/{environmentId}/scalingGroups'
            },
            input: {
              type: 'structure',
              required: ['clientToken', 'environmentId', 'scalingGroupName', 'hostType', 'availabilityZoneId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                scalingGroupName: {},
                hostType: {},
                availabilityZoneId: {},
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentId: {},
                scalingGroupName: {},
                hostType: {},
                availabilityZoneId: {},
                status: {},
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                createdTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateKxUser: {
            http: {
              requestUri: '/kx/environments/{environmentId}/users'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'userName', 'iamRole'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                userName: {},
                iamRole: {},
                tags: {
                  shape: 'S5'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userName: {},
                userArn: {},
                environmentId: {},
                iamRole: {}
              }
            }
          },
          CreateKxVolume: {
            http: {
              requestUri: '/kx/environments/{environmentId}/kxvolumes'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'volumeType', 'volumeName', 'azMode', 'availabilityZoneIds'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                volumeType: {},
                volumeName: {},
                description: {},
                nas1Configuration: {
                  shape: 'S3m'
                },
                azMode: {},
                availabilityZoneIds: {
                  shape: 'S3p'
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentId: {},
                volumeName: {},
                volumeType: {},
                volumeArn: {},
                nas1Configuration: {
                  shape: 'S3m'
                },
                status: {},
                statusReason: {},
                azMode: {},
                description: {},
                availabilityZoneIds: {
                  shape: 'S3p'
                },
                createdTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/environment/{environmentId}'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          DeleteKxCluster: {
            http: {
              method: 'DELETE',
              requestUri: '/kx/environments/{environmentId}/clusters/{clusterName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'clusterName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterName: {
                  location: 'uri',
                  locationName: 'clusterName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteKxClusterNode: {
            http: {
              method: 'DELETE',
              requestUri: '/kx/environments/{environmentId}/clusters/{clusterName}/nodes/{nodeId}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'nodeId', 'environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterName: {
                  location: 'uri',
                  locationName: 'clusterName'
                },
                nodeId: {
                  location: 'uri',
                  locationName: 'nodeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteKxDatabase: {
            http: {
              method: 'DELETE',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'clientToken'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteKxDataview: {
            http: {
              method: 'DELETE',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'dataviewName', 'clientToken'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                dataviewName: {
                  location: 'uri',
                  locationName: 'dataviewName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteKxEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/kx/environments/{environmentId}'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteKxScalingGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/kx/environments/{environmentId}/scalingGroups/{scalingGroupName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'scalingGroupName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                scalingGroupName: {
                  location: 'uri',
                  locationName: 'scalingGroupName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteKxUser: {
            http: {
              method: 'DELETE',
              requestUri: '/kx/environments/{environmentId}/users/{userName}'
            },
            input: {
              type: 'structure',
              required: ['userName', 'environmentId'],
              members: {
                userName: {
                  location: 'uri',
                  locationName: 'userName'
                },
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteKxVolume: {
            http: {
              method: 'DELETE',
              requestUri: '/kx/environments/{environmentId}/kxvolumes/{volumeName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'volumeName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                volumeName: {
                  location: 'uri',
                  locationName: 'volumeName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/environment/{environmentId}'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environment: {
                  shape: 'S4f'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetKxChangeset: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}/changesets/{changesetId}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'changesetId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                changesetId: {
                  location: 'uri',
                  locationName: 'changesetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                changesetId: {},
                databaseName: {},
                environmentId: {},
                changeRequests: {
                  shape: 'Ss'
                },
                createdTimestamp: {
                  type: 'timestamp'
                },
                activeFromTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                status: {},
                errorInfo: {
                  shape: 'S12'
                }
              }
            }
          },
          GetKxCluster: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/clusters/{clusterName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'clusterName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterName: {
                  location: 'uri',
                  locationName: 'clusterName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                statusReason: {},
                clusterName: {},
                clusterType: {},
                tickerplantLogConfiguration: {
                  shape: 'S1a'
                },
                volumes: {
                  shape: 'S2x'
                },
                databases: {
                  shape: 'S1d'
                },
                cacheStorageConfigurations: {
                  shape: 'S1r'
                },
                autoScalingConfiguration: {
                  shape: 'S1u'
                },
                clusterDescription: {},
                capacityConfiguration: {
                  shape: 'S20'
                },
                releaseLabel: {},
                vpcConfiguration: {
                  shape: 'S23'
                },
                initializationScript: {},
                commandLineArguments: {
                  shape: 'S2b'
                },
                code: {
                  shape: 'S2f'
                },
                executionRole: {},
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                savedownStorageConfiguration: {
                  shape: 'S2k'
                },
                azMode: {},
                availabilityZoneId: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                scalingGroupConfiguration: {
                  shape: 'S2p'
                }
              }
            }
          },
          GetKxConnectionString: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/connectionString'
            },
            input: {
              type: 'structure',
              required: ['userArn', 'environmentId', 'clusterName'],
              members: {
                userArn: {
                  location: 'querystring',
                  locationName: 'userArn'
                },
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterName: {
                  location: 'querystring',
                  locationName: 'clusterName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                signedConnectionString: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          GetKxDatabase: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                databaseName: {},
                databaseArn: {},
                environmentId: {},
                description: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                lastCompletedChangesetId: {},
                numBytes: {
                  type: 'long'
                },
                numChangesets: {
                  type: 'integer'
                },
                numFiles: {
                  type: 'integer'
                }
              }
            }
          },
          GetKxDataview: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'dataviewName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                dataviewName: {
                  location: 'uri',
                  locationName: 'dataviewName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                databaseName: {},
                dataviewName: {},
                azMode: {},
                availabilityZoneId: {},
                changesetId: {},
                segmentConfigurations: {
                  shape: 'S1m'
                },
                activeVersions: {
                  shape: 'S4v'
                },
                description: {},
                autoUpdate: {
                  type: 'boolean'
                },
                readWrite: {
                  type: 'boolean'
                },
                environmentId: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                status: {},
                statusReason: {}
              }
            }
          },
          GetKxEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                environmentId: {},
                awsAccountId: {},
                status: {},
                tgwStatus: {},
                dnsStatus: {},
                errorMessage: {},
                description: {},
                environmentArn: {},
                kmsKeyId: {},
                dedicatedServiceAccountId: {},
                transitGatewayConfiguration: {
                  shape: 'S54'
                },
                customDNSConfiguration: {
                  shape: 'S5h'
                },
                creationTimestamp: {
                  type: 'timestamp'
                },
                updateTimestamp: {
                  type: 'timestamp'
                },
                availabilityZoneIds: {
                  shape: 'S3p'
                },
                certificateAuthorityArn: {}
              }
            }
          },
          GetKxScalingGroup: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/scalingGroups/{scalingGroupName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'scalingGroupName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                scalingGroupName: {
                  location: 'uri',
                  locationName: 'scalingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                scalingGroupName: {},
                scalingGroupArn: {},
                hostType: {},
                clusters: {
                  shape: 'S5p'
                },
                availabilityZoneId: {},
                status: {},
                statusReason: {},
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                createdTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetKxUser: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/users/{userName}'
            },
            input: {
              type: 'structure',
              required: ['userName', 'environmentId'],
              members: {
                userName: {
                  location: 'uri',
                  locationName: 'userName'
                },
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userName: {},
                userArn: {},
                environmentId: {},
                iamRole: {}
              }
            }
          },
          GetKxVolume: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/kxvolumes/{volumeName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'volumeName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                volumeName: {
                  location: 'uri',
                  locationName: 'volumeName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentId: {},
                volumeName: {},
                volumeType: {},
                volumeArn: {},
                nas1Configuration: {
                  shape: 'S3m'
                },
                status: {},
                statusReason: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                description: {},
                azMode: {},
                availabilityZoneIds: {
                  shape: 'S3p'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                attachedClusters: {
                  shape: 'S5u'
                }
              }
            }
          },
          ListEnvironments: {
            http: {
              method: 'GET',
              requestUri: '/environment'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environments: {
                  type: 'list',
                  member: {
                    shape: 'S4f'
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ListKxChangesets: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}/changesets'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                kxChangesets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      changesetId: {},
                      createdTimestamp: {
                        type: 'timestamp'
                      },
                      activeFromTimestamp: {
                        type: 'timestamp'
                      },
                      lastModifiedTimestamp: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKxClusterNodes: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/clusters/{clusterName}/nodes'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterName: {
                  location: 'uri',
                  locationName: 'clusterName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nodes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      nodeId: {},
                      availabilityZoneId: {},
                      launchTime: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKxClusters: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/clusters'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterType: {
                  location: 'querystring',
                  locationName: 'clusterType'
                },
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
                kxClusterSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      status: {},
                      statusReason: {},
                      clusterName: {},
                      clusterType: {},
                      clusterDescription: {},
                      releaseLabel: {},
                      volumes: {
                        shape: 'S2x'
                      },
                      initializationScript: {},
                      executionRole: {},
                      azMode: {},
                      availabilityZoneId: {},
                      lastModifiedTimestamp: {
                        type: 'timestamp'
                      },
                      createdTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKxDatabases: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/databases'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                kxDatabases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      databaseName: {},
                      createdTimestamp: {
                        type: 'timestamp'
                      },
                      lastModifiedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKxDataviews: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}/dataviews'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                kxDataviews: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      environmentId: {},
                      databaseName: {},
                      dataviewName: {},
                      azMode: {},
                      availabilityZoneId: {},
                      changesetId: {},
                      segmentConfigurations: {
                        shape: 'S1m'
                      },
                      activeVersions: {
                        shape: 'S4v'
                      },
                      status: {},
                      description: {},
                      autoUpdate: {
                        type: 'boolean'
                      },
                      readWrite: {
                        type: 'boolean'
                      },
                      createdTimestamp: {
                        type: 'timestamp'
                      },
                      lastModifiedTimestamp: {
                        type: 'timestamp'
                      },
                      statusReason: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKxEnvironments: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      environmentId: {},
                      awsAccountId: {},
                      status: {},
                      tgwStatus: {},
                      dnsStatus: {},
                      errorMessage: {},
                      description: {},
                      environmentArn: {},
                      kmsKeyId: {},
                      dedicatedServiceAccountId: {},
                      transitGatewayConfiguration: {
                        shape: 'S54'
                      },
                      customDNSConfiguration: {
                        shape: 'S5h'
                      },
                      creationTimestamp: {
                        type: 'timestamp'
                      },
                      updateTimestamp: {
                        type: 'timestamp'
                      },
                      availabilityZoneIds: {
                        shape: 'S3p'
                      },
                      certificateAuthorityArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKxScalingGroups: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/scalingGroups'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
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
                scalingGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      scalingGroupName: {},
                      hostType: {},
                      clusters: {
                        shape: 'S5p'
                      },
                      availabilityZoneId: {},
                      status: {},
                      statusReason: {},
                      lastModifiedTimestamp: {
                        type: 'timestamp'
                      },
                      createdTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKxUsers: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/users'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      userArn: {},
                      userName: {},
                      iamRole: {},
                      createTimestamp: {
                        type: 'timestamp'
                      },
                      updateTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKxVolumes: {
            http: {
              method: 'GET',
              requestUri: '/kx/environments/{environmentId}/kxvolumes'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
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
                volumeType: {
                  location: 'querystring',
                  locationName: 'volumeType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                kxVolumeSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      volumeName: {},
                      volumeType: {},
                      status: {},
                      description: {},
                      statusReason: {},
                      azMode: {},
                      availabilityZoneIds: {
                        shape: 'S3p'
                      },
                      createdTimestamp: {
                        type: 'timestamp'
                      },
                      lastModifiedTimestamp: {
                        type: 'timestamp'
                      }
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
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'S5'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'S5'
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
              requestUri: '/tags/{resourceArn}'
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
            }
          },
          UpdateEnvironment: {
            http: {
              method: 'PUT',
              requestUri: '/environment/{environmentId}'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                name: {},
                description: {},
                federationMode: {},
                federationParameters: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environment: {
                  shape: 'S4f'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          UpdateKxClusterCodeConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/kx/environments/{environmentId}/clusters/{clusterName}/configuration/code'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'clusterName', 'code'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterName: {
                  location: 'uri',
                  locationName: 'clusterName'
                },
                clientToken: {
                  idempotencyToken: true
                },
                code: {
                  shape: 'S2f'
                },
                initializationScript: {},
                commandLineArguments: {
                  shape: 'S2b'
                },
                deploymentConfiguration: {
                  type: 'structure',
                  required: ['deploymentStrategy'],
                  members: {
                    deploymentStrategy: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateKxClusterDatabases: {
            http: {
              method: 'PUT',
              requestUri: '/kx/environments/{environmentId}/clusters/{clusterName}/configuration/databases'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'clusterName', 'databases'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                clusterName: {
                  location: 'uri',
                  locationName: 'clusterName'
                },
                clientToken: {
                  idempotencyToken: true
                },
                databases: {
                  shape: 'S1d'
                },
                deploymentConfiguration: {
                  type: 'structure',
                  required: ['deploymentStrategy'],
                  members: {
                    deploymentStrategy: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateKxDatabase: {
            http: {
              method: 'PUT',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'clientToken'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                description: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                databaseName: {},
                environmentId: {},
                description: {},
                lastModifiedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdateKxDataview: {
            http: {
              method: 'PUT',
              requestUri: '/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'databaseName', 'dataviewName', 'clientToken'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                databaseName: {
                  location: 'uri',
                  locationName: 'databaseName'
                },
                dataviewName: {
                  location: 'uri',
                  locationName: 'dataviewName'
                },
                description: {},
                changesetId: {},
                segmentConfigurations: {
                  shape: 'S1m'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentId: {},
                databaseName: {},
                dataviewName: {},
                azMode: {},
                availabilityZoneId: {},
                changesetId: {},
                segmentConfigurations: {
                  shape: 'S1m'
                },
                activeVersions: {
                  shape: 'S4v'
                },
                status: {},
                autoUpdate: {
                  type: 'boolean'
                },
                readWrite: {
                  type: 'boolean'
                },
                description: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdateKxEnvironment: {
            http: {
              method: 'PUT',
              requestUri: '/kx/environments/{environmentId}'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                name: {},
                description: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                environmentId: {},
                awsAccountId: {},
                status: {},
                tgwStatus: {},
                dnsStatus: {},
                errorMessage: {},
                description: {},
                environmentArn: {},
                kmsKeyId: {},
                dedicatedServiceAccountId: {},
                transitGatewayConfiguration: {
                  shape: 'S54'
                },
                customDNSConfiguration: {
                  shape: 'S5h'
                },
                creationTimestamp: {
                  type: 'timestamp'
                },
                updateTimestamp: {
                  type: 'timestamp'
                },
                availabilityZoneIds: {
                  shape: 'S3p'
                }
              }
            }
          },
          UpdateKxEnvironmentNetwork: {
            http: {
              method: 'PUT',
              requestUri: '/kx/environments/{environmentId}/network'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                transitGatewayConfiguration: {
                  shape: 'S54'
                },
                customDNSConfiguration: {
                  shape: 'S5h'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                environmentId: {},
                awsAccountId: {},
                status: {},
                tgwStatus: {},
                dnsStatus: {},
                errorMessage: {},
                description: {},
                environmentArn: {},
                kmsKeyId: {},
                dedicatedServiceAccountId: {},
                transitGatewayConfiguration: {
                  shape: 'S54'
                },
                customDNSConfiguration: {
                  shape: 'S5h'
                },
                creationTimestamp: {
                  type: 'timestamp'
                },
                updateTimestamp: {
                  type: 'timestamp'
                },
                availabilityZoneIds: {
                  shape: 'S3p'
                }
              }
            }
          },
          UpdateKxUser: {
            http: {
              method: 'PUT',
              requestUri: '/kx/environments/{environmentId}/users/{userName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'userName', 'iamRole'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                userName: {
                  location: 'uri',
                  locationName: 'userName'
                },
                iamRole: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userName: {},
                userArn: {},
                environmentId: {},
                iamRole: {}
              }
            }
          },
          UpdateKxVolume: {
            http: {
              method: 'PATCH',
              requestUri: '/kx/environments/{environmentId}/kxvolumes/{volumeName}'
            },
            input: {
              type: 'structure',
              required: ['environmentId', 'volumeName'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                volumeName: {
                  location: 'uri',
                  locationName: 'volumeName'
                },
                description: {},
                clientToken: {
                  idempotencyToken: true
                },
                nas1Configuration: {
                  shape: 'S3m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentId: {},
                volumeName: {},
                volumeType: {},
                volumeArn: {},
                nas1Configuration: {
                  shape: 'S3m'
                },
                status: {},
                description: {},
                statusReason: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                azMode: {},
                availabilityZoneIds: {
                  shape: 'S3p'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                },
                attachedClusters: {
                  shape: 'S5u'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {}
          },
          S9: {
            type: 'structure',
            members: {
              samlMetadataDocument: {},
              samlMetadataURL: {},
              applicationCallBackURL: {},
              federationURN: {},
              federationProviderName: {},
              attributeMap: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          Ss: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['changeType', 'dbPath'],
              members: {
                changeType: {},
                s3Path: {},
                dbPath: {}
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              errorMessage: {},
              errorType: {}
            }
          },
          S1a: {
            type: 'structure',
            members: {
              tickerplantLogVolumes: {
                type: 'list',
                member: {}
              }
            }
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['databaseName'],
              members: {
                databaseName: {},
                cacheConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['cacheType', 'dbPaths'],
                    members: {
                      cacheType: {},
                      dbPaths: {
                        type: 'list',
                        member: {}
                      },
                      dataviewName: {}
                    }
                  }
                },
                changesetId: {},
                dataviewName: {},
                dataviewConfiguration: {
                  type: 'structure',
                  members: {
                    dataviewName: {},
                    dataviewVersionId: {},
                    changesetId: {},
                    segmentConfigurations: {
                      shape: 'S1m'
                    }
                  }
                }
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['dbPaths', 'volumeName'],
              members: {
                dbPaths: {
                  type: 'list',
                  member: {}
                },
                volumeName: {},
                onDemand: {
                  type: 'boolean'
                }
              }
            }
          },
          S1r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['type', 'size'],
              members: {
                type: {},
                size: {
                  type: 'integer'
                }
              }
            }
          },
          S1u: {
            type: 'structure',
            members: {
              minNodeCount: {
                type: 'integer'
              },
              maxNodeCount: {
                type: 'integer'
              },
              autoScalingMetric: {},
              metricTarget: {
                type: 'double'
              },
              scaleInCooldownSeconds: {
                type: 'double'
              },
              scaleOutCooldownSeconds: {
                type: 'double'
              }
            }
          },
          S20: {
            type: 'structure',
            members: {
              nodeType: {},
              nodeCount: {
                type: 'integer'
              }
            }
          },
          S23: {
            type: 'structure',
            members: {
              vpcId: {},
              securityGroupIds: {
                type: 'list',
                member: {}
              },
              subnetIds: {
                type: 'list',
                member: {}
              },
              ipAddressType: {}
            }
          },
          S2b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          S2f: {
            type: 'structure',
            members: {
              s3Bucket: {},
              s3Key: {},
              s3ObjectVersion: {}
            }
          },
          S2k: {
            type: 'structure',
            members: {
              type: {},
              size: {
                type: 'integer'
              },
              volumeName: {}
            }
          },
          S2p: {
            type: 'structure',
            required: ['scalingGroupName', 'memoryReservation', 'nodeCount'],
            members: {
              scalingGroupName: {},
              memoryLimit: {
                type: 'integer'
              },
              memoryReservation: {
                type: 'integer'
              },
              nodeCount: {
                type: 'integer'
              },
              cpu: {
                type: 'double'
              }
            }
          },
          S2x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                volumeName: {},
                volumeType: {}
              }
            }
          },
          S3m: {
            type: 'structure',
            members: {
              type: {},
              size: {
                type: 'integer'
              }
            }
          },
          S3p: {
            type: 'list',
            member: {}
          },
          S4f: {
            type: 'structure',
            members: {
              name: {},
              environmentId: {},
              awsAccountId: {},
              status: {},
              environmentUrl: {},
              description: {},
              environmentArn: {},
              sageMakerStudioDomainUrl: {},
              kmsKeyId: {},
              dedicatedServiceAccountId: {},
              federationMode: {},
              federationParameters: {
                shape: 'S9'
              }
            }
          },
          S4v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                changesetId: {},
                segmentConfigurations: {
                  shape: 'S1m'
                },
                attachedClusters: {
                  type: 'list',
                  member: {}
                },
                createdTimestamp: {
                  type: 'timestamp'
                },
                versionId: {}
              }
            }
          },
          S54: {
            type: 'structure',
            required: ['transitGatewayID', 'routableCIDRSpace'],
            members: {
              transitGatewayID: {},
              routableCIDRSpace: {},
              attachmentNetworkAclConfiguration: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ruleNumber', 'protocol', 'ruleAction', 'cidrBlock'],
                  members: {
                    ruleNumber: {
                      type: 'integer'
                    },
                    protocol: {},
                    ruleAction: {},
                    portRange: {
                      type: 'structure',
                      required: ['from', 'to'],
                      members: {
                        from: {
                          type: 'integer'
                        },
                        to: {
                          type: 'integer'
                        }
                      }
                    },
                    icmpTypeCode: {
                      type: 'structure',
                      required: ['type', 'code'],
                      members: {
                        type: {
                          type: 'integer'
                        },
                        code: {
                          type: 'integer'
                        }
                      }
                    },
                    cidrBlock: {}
                  }
                }
              }
            }
          },
          S5h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['customDNSServerName', 'customDNSServerIP'],
              members: {
                customDNSServerName: {},
                customDNSServerIP: {}
              }
            }
          },
          S5p: {
            type: 'list',
            member: {}
          },
          S5u: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                clusterName: {},
                clusterType: {},
                clusterStatus: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c0cebc12ad8464a6f2030193a7800505cf8cf89f.js.map