System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-11-28',
          endpointPrefix: 'lightsail',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'Amazon Lightsail',
          serviceId: 'Lightsail',
          signatureVersion: 'v4',
          targetPrefix: 'Lightsail_20161128',
          uid: 'lightsail-2016-11-28'
        },
        operations: {
          AllocateStaticIp: {
            input: {
              type: 'structure',
              required: ['staticIpName'],
              members: {
                staticIpName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          AttachCertificateToDistribution: {
            input: {
              type: 'structure',
              required: ['distributionName', 'certificateName'],
              members: {
                distributionName: {},
                certificateName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          AttachDisk: {
            input: {
              type: 'structure',
              required: ['diskName', 'instanceName', 'diskPath'],
              members: {
                diskName: {},
                instanceName: {},
                diskPath: {},
                autoMounting: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          AttachInstancesToLoadBalancer: {
            input: {
              type: 'structure',
              required: ['loadBalancerName', 'instanceNames'],
              members: {
                loadBalancerName: {},
                instanceNames: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          AttachLoadBalancerTlsCertificate: {
            input: {
              type: 'structure',
              required: ['loadBalancerName', 'certificateName'],
              members: {
                loadBalancerName: {},
                certificateName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          AttachStaticIp: {
            input: {
              type: 'structure',
              required: ['staticIpName', 'instanceName'],
              members: {
                staticIpName: {},
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CloseInstancePublicPorts: {
            input: {
              type: 'structure',
              required: ['portInfo', 'instanceName'],
              members: {
                portInfo: {
                  shape: 'Sr'
                },
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          CopySnapshot: {
            input: {
              type: 'structure',
              required: ['targetSnapshotName', 'sourceRegion'],
              members: {
                sourceSnapshotName: {},
                sourceResourceName: {},
                restoreDate: {},
                useLatestRestorableAutoSnapshot: {
                  type: 'boolean'
                },
                targetSnapshotName: {},
                sourceRegion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateBucket: {
            input: {
              type: 'structure',
              required: ['bucketName', 'bundleId'],
              members: {
                bucketName: {},
                bundleId: {},
                tags: {
                  shape: 'S10'
                },
                enableObjectVersioning: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                bucket: {
                  shape: 'S15'
                },
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateBucketAccessKey: {
            input: {
              type: 'structure',
              required: ['bucketName'],
              members: {
                bucketName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessKey: {
                  shape: 'S1g'
                },
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateCertificate: {
            input: {
              type: 'structure',
              required: ['certificateName', 'domainName'],
              members: {
                certificateName: {},
                domainName: {},
                subjectAlternativeNames: {
                  shape: 'S1n'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                certificate: {
                  shape: 'S1p'
                },
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateCloudFormationStack: {
            input: {
              type: 'structure',
              required: ['instances'],
              members: {
                instances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceName', 'instanceType', 'portInfoSource', 'availabilityZone'],
                    members: {
                      sourceName: {},
                      instanceType: {},
                      portInfoSource: {},
                      userData: {},
                      availabilityZone: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateContactMethod: {
            input: {
              type: 'structure',
              required: ['protocol', 'contactEndpoint'],
              members: {
                protocol: {},
                contactEndpoint: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateContainerService: {
            input: {
              type: 'structure',
              required: ['serviceName', 'power', 'scale'],
              members: {
                serviceName: {},
                power: {},
                scale: {
                  type: 'integer'
                },
                tags: {
                  shape: 'S10'
                },
                publicDomainNames: {
                  shape: 'S2l'
                },
                deployment: {
                  type: 'structure',
                  members: {
                    containers: {
                      shape: 'S2o'
                    },
                    publicEndpoint: {
                      shape: 'S2u'
                    }
                  }
                },
                privateRegistryAccess: {
                  shape: 'S2x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                containerService: {
                  shape: 'S30'
                }
              }
            }
          },
          CreateContainerServiceDeployment: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceName: {},
                containers: {
                  shape: 'S2o'
                },
                publicEndpoint: {
                  shape: 'S2u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                containerService: {
                  shape: 'S30'
                }
              }
            }
          },
          CreateContainerServiceRegistryLogin: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                registryLogin: {
                  type: 'structure',
                  members: {
                    username: {},
                    password: {},
                    expiresAt: {
                      type: 'timestamp'
                    },
                    registry: {}
                  }
                }
              }
            }
          },
          CreateDisk: {
            input: {
              type: 'structure',
              required: ['diskName', 'availabilityZone', 'sizeInGb'],
              members: {
                diskName: {},
                availabilityZone: {},
                sizeInGb: {
                  type: 'integer'
                },
                tags: {
                  shape: 'S10'
                },
                addOns: {
                  shape: 'S3f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateDiskFromSnapshot: {
            input: {
              type: 'structure',
              required: ['diskName', 'availabilityZone', 'sizeInGb'],
              members: {
                diskName: {},
                diskSnapshotName: {},
                availabilityZone: {},
                sizeInGb: {
                  type: 'integer'
                },
                tags: {
                  shape: 'S10'
                },
                addOns: {
                  shape: 'S3f'
                },
                sourceDiskName: {},
                restoreDate: {},
                useLatestRestorableAutoSnapshot: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateDiskSnapshot: {
            input: {
              type: 'structure',
              required: ['diskSnapshotName'],
              members: {
                diskName: {},
                diskSnapshotName: {},
                instanceName: {},
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateDistribution: {
            input: {
              type: 'structure',
              required: ['distributionName', 'origin', 'defaultCacheBehavior', 'bundleId'],
              members: {
                distributionName: {},
                origin: {
                  shape: 'S3r'
                },
                defaultCacheBehavior: {
                  shape: 'S3t'
                },
                cacheBehaviorSettings: {
                  shape: 'S3v'
                },
                cacheBehaviors: {
                  shape: 'S43'
                },
                bundleId: {},
                ipAddressType: {},
                tags: {
                  shape: 'S10'
                },
                certificateName: {},
                viewerMinimumTlsProtocolVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                distribution: {
                  shape: 'S48'
                },
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          CreateDomain: {
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {},
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          CreateDomainEntry: {
            input: {
              type: 'structure',
              required: ['domainName', 'domainEntry'],
              members: {
                domainName: {},
                domainEntry: {
                  shape: 'S4d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          CreateGUISessionAccessDetails: {
            input: {
              type: 'structure',
              required: ['resourceName'],
              members: {
                resourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceName: {},
                status: {},
                percentageComplete: {
                  type: 'integer'
                },
                failureReason: {},
                sessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      url: {
                        type: 'string',
                        sensitive: true
                      },
                      isPrimary: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          CreateInstanceSnapshot: {
            input: {
              type: 'structure',
              required: ['instanceSnapshotName', 'instanceName'],
              members: {
                instanceSnapshotName: {},
                instanceName: {},
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateInstances: {
            input: {
              type: 'structure',
              required: ['instanceNames', 'availabilityZone', 'blueprintId', 'bundleId'],
              members: {
                instanceNames: {
                  shape: 'Su'
                },
                availabilityZone: {},
                customImageName: {
                  deprecated: true
                },
                blueprintId: {},
                bundleId: {},
                userData: {},
                keyPairName: {},
                tags: {
                  shape: 'S10'
                },
                addOns: {
                  shape: 'S3f'
                },
                ipAddressType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateInstancesFromSnapshot: {
            input: {
              type: 'structure',
              required: ['instanceNames', 'availabilityZone', 'bundleId'],
              members: {
                instanceNames: {
                  shape: 'Su'
                },
                attachedDiskMapping: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        originalDiskPath: {},
                        newDiskName: {}
                      }
                    }
                  }
                },
                availabilityZone: {},
                instanceSnapshotName: {},
                bundleId: {},
                userData: {},
                keyPairName: {},
                tags: {
                  shape: 'S10'
                },
                addOns: {
                  shape: 'S3f'
                },
                ipAddressType: {},
                sourceInstanceName: {},
                restoreDate: {},
                useLatestRestorableAutoSnapshot: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateKeyPair: {
            input: {
              type: 'structure',
              required: ['keyPairName'],
              members: {
                keyPairName: {},
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                keyPair: {
                  shape: 'S4z'
                },
                publicKeyBase64: {},
                privateKeyBase64: {},
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          CreateLoadBalancer: {
            input: {
              type: 'structure',
              required: ['loadBalancerName', 'instancePort'],
              members: {
                loadBalancerName: {},
                instancePort: {
                  type: 'integer'
                },
                healthCheckPath: {},
                certificateName: {},
                certificateDomainName: {},
                certificateAlternativeNames: {
                  shape: 'S52'
                },
                tags: {
                  shape: 'S10'
                },
                ipAddressType: {},
                tlsPolicyName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateLoadBalancerTlsCertificate: {
            input: {
              type: 'structure',
              required: ['loadBalancerName', 'certificateName', 'certificateDomainName'],
              members: {
                loadBalancerName: {},
                certificateName: {},
                certificateDomainName: {},
                certificateAlternativeNames: {
                  shape: 'S52'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateRelationalDatabase: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName', 'relationalDatabaseBlueprintId', 'relationalDatabaseBundleId', 'masterDatabaseName', 'masterUsername'],
              members: {
                relationalDatabaseName: {},
                availabilityZone: {},
                relationalDatabaseBlueprintId: {},
                relationalDatabaseBundleId: {},
                masterDatabaseName: {},
                masterUsername: {},
                masterUserPassword: {
                  shape: 'S57'
                },
                preferredBackupWindow: {},
                preferredMaintenanceWindow: {},
                publiclyAccessible: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateRelationalDatabaseFromSnapshot: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {},
                availabilityZone: {},
                publiclyAccessible: {
                  type: 'boolean'
                },
                relationalDatabaseSnapshotName: {},
                relationalDatabaseBundleId: {},
                sourceRelationalDatabaseName: {},
                restoreTime: {
                  type: 'timestamp'
                },
                useLatestRestorableTime: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateRelationalDatabaseSnapshot: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName', 'relationalDatabaseSnapshotName'],
              members: {
                relationalDatabaseName: {},
                relationalDatabaseSnapshotName: {},
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteAlarm: {
            input: {
              type: 'structure',
              required: ['alarmName'],
              members: {
                alarmName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteAutoSnapshot: {
            input: {
              type: 'structure',
              required: ['resourceName', 'date'],
              members: {
                resourceName: {},
                date: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteBucket: {
            input: {
              type: 'structure',
              required: ['bucketName'],
              members: {
                bucketName: {},
                forceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteBucketAccessKey: {
            input: {
              type: 'structure',
              required: ['bucketName', 'accessKeyId'],
              members: {
                bucketName: {},
                accessKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteCertificate: {
            input: {
              type: 'structure',
              required: ['certificateName'],
              members: {
                certificateName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteContactMethod: {
            input: {
              type: 'structure',
              required: ['protocol'],
              members: {
                protocol: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteContainerImage: {
            input: {
              type: 'structure',
              required: ['serviceName', 'image'],
              members: {
                serviceName: {},
                image: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteContainerService: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDisk: {
            input: {
              type: 'structure',
              required: ['diskName'],
              members: {
                diskName: {},
                forceDeleteAddOns: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteDiskSnapshot: {
            input: {
              type: 'structure',
              required: ['diskSnapshotName'],
              members: {
                diskSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteDistribution: {
            input: {
              type: 'structure',
              members: {
                distributionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteDomain: {
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteDomainEntry: {
            input: {
              type: 'structure',
              required: ['domainName', 'domainEntry'],
              members: {
                domainName: {},
                domainEntry: {
                  shape: 'S4d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteInstance: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {},
                forceDeleteAddOns: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteInstanceSnapshot: {
            input: {
              type: 'structure',
              required: ['instanceSnapshotName'],
              members: {
                instanceSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteKeyPair: {
            input: {
              type: 'structure',
              required: ['keyPairName'],
              members: {
                keyPairName: {},
                expectedFingerprint: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteKnownHostKeys: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteLoadBalancer: {
            input: {
              type: 'structure',
              required: ['loadBalancerName'],
              members: {
                loadBalancerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteLoadBalancerTlsCertificate: {
            input: {
              type: 'structure',
              required: ['loadBalancerName', 'certificateName'],
              members: {
                loadBalancerName: {},
                certificateName: {},
                force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteRelationalDatabase: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {},
                skipFinalSnapshot: {
                  type: 'boolean'
                },
                finalRelationalDatabaseSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteRelationalDatabaseSnapshot: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseSnapshotName'],
              members: {
                relationalDatabaseSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DetachCertificateFromDistribution: {
            input: {
              type: 'structure',
              required: ['distributionName'],
              members: {
                distributionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          DetachDisk: {
            input: {
              type: 'structure',
              required: ['diskName'],
              members: {
                diskName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DetachInstancesFromLoadBalancer: {
            input: {
              type: 'structure',
              required: ['loadBalancerName', 'instanceNames'],
              members: {
                loadBalancerName: {},
                instanceNames: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DetachStaticIp: {
            input: {
              type: 'structure',
              required: ['staticIpName'],
              members: {
                staticIpName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DisableAddOn: {
            input: {
              type: 'structure',
              required: ['addOnType', 'resourceName'],
              members: {
                addOnType: {},
                resourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          DownloadDefaultKeyPair: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                publicKeyBase64: {},
                privateKeyBase64: {},
                createdAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          EnableAddOn: {
            input: {
              type: 'structure',
              required: ['resourceName', 'addOnRequest'],
              members: {
                resourceName: {},
                addOnRequest: {
                  shape: 'S3g'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          ExportSnapshot: {
            input: {
              type: 'structure',
              required: ['sourceSnapshotName'],
              members: {
                sourceSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          GetActiveNames: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                activeNames: {
                  shape: 'Su'
                },
                nextPageToken: {}
              }
            }
          },
          GetAlarms: {
            input: {
              type: 'structure',
              members: {
                alarmName: {},
                pageToken: {},
                monitoredResourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                alarms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      location: {
                        shape: 'S9'
                      },
                      resourceType: {},
                      supportCode: {},
                      monitoredResourceInfo: {
                        type: 'structure',
                        members: {
                          arn: {},
                          name: {},
                          resourceType: {}
                        }
                      },
                      comparisonOperator: {},
                      evaluationPeriods: {
                        type: 'integer'
                      },
                      period: {
                        type: 'integer'
                      },
                      threshold: {
                        type: 'double'
                      },
                      datapointsToAlarm: {
                        type: 'integer'
                      },
                      treatMissingData: {},
                      statistic: {},
                      metricName: {},
                      state: {},
                      unit: {},
                      contactProtocols: {
                        shape: 'S7g'
                      },
                      notificationTriggers: {
                        shape: 'S7h'
                      },
                      notificationEnabled: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetAutoSnapshots: {
            input: {
              type: 'structure',
              required: ['resourceName'],
              members: {
                resourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceName: {},
                resourceType: {},
                autoSnapshots: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      date: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      status: {},
                      fromAttachedDisks: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            path: {},
                            sizeInGb: {
                              type: 'integer'
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
          GetBlueprints: {
            input: {
              type: 'structure',
              members: {
                includeInactive: {
                  type: 'boolean'
                },
                pageToken: {},
                appCategory: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                blueprints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      blueprintId: {},
                      name: {},
                      group: {},
                      type: {},
                      description: {},
                      isActive: {
                        type: 'boolean'
                      },
                      minPower: {
                        type: 'integer'
                      },
                      version: {},
                      versionCode: {},
                      productUrl: {},
                      licenseUrl: {},
                      platform: {},
                      appCategory: {}
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetBucketAccessKeys: {
            input: {
              type: 'structure',
              required: ['bucketName'],
              members: {
                bucketName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessKeys: {
                  type: 'list',
                  member: {
                    shape: 'S1g'
                  }
                }
              }
            }
          },
          GetBucketBundles: {
            input: {
              type: 'structure',
              members: {
                includeInactive: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                bundles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      bundleId: {},
                      name: {},
                      price: {
                        type: 'float'
                      },
                      storagePerMonthInGb: {
                        type: 'integer'
                      },
                      transferPerMonthInGb: {
                        type: 'integer'
                      },
                      isActive: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          GetBucketMetricData: {
            input: {
              type: 'structure',
              required: ['bucketName', 'metricName', 'startTime', 'endTime', 'period', 'statistics', 'unit'],
              members: {
                bucketName: {},
                metricName: {},
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                period: {
                  type: 'integer'
                },
                statistics: {
                  shape: 'S86'
                },
                unit: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                metricName: {},
                metricData: {
                  shape: 'S88'
                }
              }
            }
          },
          GetBuckets: {
            input: {
              type: 'structure',
              members: {
                bucketName: {},
                pageToken: {},
                includeConnectedResources: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                buckets: {
                  type: 'list',
                  member: {
                    shape: 'S15'
                  }
                },
                nextPageToken: {},
                accountLevelBpaSync: {
                  type: 'structure',
                  members: {
                    status: {},
                    lastSyncedAt: {
                      type: 'timestamp'
                    },
                    message: {},
                    bpaImpactsLightsail: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          GetBundles: {
            input: {
              type: 'structure',
              members: {
                includeInactive: {
                  type: 'boolean'
                },
                pageToken: {},
                appCategory: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                bundles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      price: {
                        type: 'float'
                      },
                      cpuCount: {
                        type: 'integer'
                      },
                      diskSizeInGb: {
                        type: 'integer'
                      },
                      bundleId: {},
                      instanceType: {},
                      isActive: {
                        type: 'boolean'
                      },
                      name: {},
                      power: {
                        type: 'integer'
                      },
                      ramSizeInGb: {
                        type: 'float'
                      },
                      transferPerMonthInGb: {
                        type: 'integer'
                      },
                      supportedPlatforms: {
                        type: 'list',
                        member: {}
                      },
                      supportedAppCategories: {
                        type: 'list',
                        member: {}
                      },
                      publicIpv4AddressCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetCertificates: {
            input: {
              type: 'structure',
              members: {
                certificateStatuses: {
                  type: 'list',
                  member: {}
                },
                includeCertificateDetails: {
                  type: 'boolean'
                },
                certificateName: {},
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                certificates: {
                  type: 'list',
                  member: {
                    shape: 'S1p'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetCloudFormationStackRecords: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                cloudFormationStackRecords: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      location: {
                        shape: 'S9'
                      },
                      resourceType: {},
                      state: {},
                      sourceInfo: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            resourceType: {},
                            name: {},
                            arn: {}
                          }
                        }
                      },
                      destinationInfo: {
                        shape: 'S90'
                      }
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetContactMethods: {
            input: {
              type: 'structure',
              members: {
                protocols: {
                  shape: 'S7g'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contactMethods: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      contactEndpoint: {},
                      status: {},
                      protocol: {},
                      name: {},
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      location: {
                        shape: 'S9'
                      },
                      resourceType: {},
                      supportCode: {}
                    }
                  }
                }
              }
            }
          },
          GetContainerAPIMetadata: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                metadata: {
                  type: 'list',
                  member: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                }
              }
            }
          },
          GetContainerImages: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                containerImages: {
                  type: 'list',
                  member: {
                    shape: 'S9d'
                  }
                }
              }
            }
          },
          GetContainerLog: {
            input: {
              type: 'structure',
              required: ['serviceName', 'containerName'],
              members: {
                serviceName: {},
                containerName: {},
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                filterPattern: {},
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                logEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      message: {}
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetContainerServiceDeployments: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deployments: {
                  type: 'list',
                  member: {
                    shape: 'S34'
                  }
                }
              }
            }
          },
          GetContainerServiceMetricData: {
            input: {
              type: 'structure',
              required: ['serviceName', 'metricName', 'startTime', 'endTime', 'period', 'statistics'],
              members: {
                serviceName: {},
                metricName: {},
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                period: {
                  type: 'integer'
                },
                statistics: {
                  shape: 'S86'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metricName: {},
                metricData: {
                  shape: 'S88'
                }
              }
            }
          },
          GetContainerServicePowers: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                powers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      powerId: {},
                      price: {
                        type: 'float'
                      },
                      cpuCount: {
                        type: 'float'
                      },
                      ramSizeInGb: {
                        type: 'float'
                      },
                      name: {},
                      isActive: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          GetContainerServices: {
            input: {
              type: 'structure',
              members: {
                serviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                containerServices: {
                  type: 'list',
                  member: {
                    shape: 'S30'
                  }
                }
              }
            }
          },
          GetCostEstimate: {
            input: {
              type: 'structure',
              required: ['resourceName', 'startTime', 'endTime'],
              members: {
                resourceName: {},
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourcesBudgetEstimate: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceName: {},
                      resourceType: {},
                      costEstimates: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            usageType: {},
                            resultsByTime: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  usageCost: {
                                    type: 'double'
                                  },
                                  pricingUnit: {},
                                  unit: {
                                    type: 'double'
                                  },
                                  currency: {},
                                  timePeriod: {
                                    type: 'structure',
                                    members: {
                                      start: {
                                        type: 'timestamp'
                                      },
                                      end: {
                                        type: 'timestamp'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      startTime: {
                        type: 'timestamp'
                      },
                      endTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          GetDisk: {
            input: {
              type: 'structure',
              required: ['diskName'],
              members: {
                diskName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                disk: {
                  shape: 'Sa8'
                }
              }
            }
          },
          GetDiskSnapshot: {
            input: {
              type: 'structure',
              required: ['diskSnapshotName'],
              members: {
                diskSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                diskSnapshot: {
                  shape: 'Saf'
                }
              }
            }
          },
          GetDiskSnapshots: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                diskSnapshots: {
                  type: 'list',
                  member: {
                    shape: 'Saf'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetDisks: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                disks: {
                  shape: 'Sam'
                },
                nextPageToken: {}
              }
            }
          },
          GetDistributionBundles: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                bundles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      bundleId: {},
                      name: {},
                      price: {
                        type: 'float'
                      },
                      transferPerMonthInGb: {
                        type: 'integer'
                      },
                      isActive: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          GetDistributionLatestCacheReset: {
            input: {
              type: 'structure',
              members: {
                distributionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                createTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetDistributionMetricData: {
            input: {
              type: 'structure',
              required: ['distributionName', 'metricName', 'startTime', 'endTime', 'period', 'unit', 'statistics'],
              members: {
                distributionName: {},
                metricName: {},
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                period: {
                  type: 'integer'
                },
                unit: {},
                statistics: {
                  shape: 'S86'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metricName: {},
                metricData: {
                  shape: 'S88'
                }
              }
            }
          },
          GetDistributions: {
            input: {
              type: 'structure',
              members: {
                distributionName: {},
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                distributions: {
                  type: 'list',
                  member: {
                    shape: 'S48'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetDomain: {
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domain: {
                  shape: 'Sb1'
                }
              }
            }
          },
          GetDomains: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domains: {
                  type: 'list',
                  member: {
                    shape: 'Sb1'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetExportSnapshotRecords: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                exportSnapshotRecords: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      location: {
                        shape: 'S9'
                      },
                      resourceType: {},
                      state: {},
                      sourceInfo: {
                        type: 'structure',
                        members: {
                          resourceType: {},
                          createdAt: {
                            type: 'timestamp'
                          },
                          name: {},
                          arn: {},
                          fromResourceName: {},
                          fromResourceArn: {},
                          instanceSnapshotInfo: {
                            type: 'structure',
                            members: {
                              fromBundleId: {},
                              fromBlueprintId: {},
                              fromDiskInfo: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    name: {},
                                    path: {},
                                    sizeInGb: {
                                      type: 'integer'
                                    },
                                    isSystemDisk: {
                                      type: 'boolean'
                                    }
                                  }
                                }
                              }
                            }
                          },
                          diskSnapshotInfo: {
                            type: 'structure',
                            members: {
                              sizeInGb: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      },
                      destinationInfo: {
                        shape: 'S90'
                      }
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetInstance: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                instance: {
                  shape: 'Sbn'
                }
              }
            }
          },
          GetInstanceAccessDetails: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {},
                protocol: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessDetails: {
                  type: 'structure',
                  members: {
                    certKey: {},
                    expiresAt: {
                      type: 'timestamp'
                    },
                    ipAddress: {},
                    ipv6Addresses: {
                      shape: 'Sbp'
                    },
                    password: {},
                    passwordData: {
                      type: 'structure',
                      members: {
                        ciphertext: {},
                        keyPairName: {}
                      }
                    },
                    privateKey: {},
                    protocol: {},
                    instanceName: {},
                    username: {},
                    hostKeys: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          algorithm: {},
                          publicKey: {},
                          witnessedAt: {
                            type: 'timestamp'
                          },
                          fingerprintSHA1: {},
                          fingerprintSHA256: {},
                          notValidBefore: {
                            type: 'timestamp'
                          },
                          notValidAfter: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetInstanceMetricData: {
            input: {
              type: 'structure',
              required: ['instanceName', 'metricName', 'period', 'startTime', 'endTime', 'unit', 'statistics'],
              members: {
                instanceName: {},
                metricName: {},
                period: {
                  type: 'integer'
                },
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                unit: {},
                statistics: {
                  shape: 'S86'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metricName: {},
                metricData: {
                  shape: 'S88'
                }
              }
            }
          },
          GetInstancePortStates: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                portStates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      fromPort: {
                        type: 'integer'
                      },
                      toPort: {
                        type: 'integer'
                      },
                      protocol: {},
                      state: {},
                      cidrs: {
                        shape: 'Su'
                      },
                      ipv6Cidrs: {
                        shape: 'Su'
                      },
                      cidrListAliases: {
                        shape: 'Su'
                      }
                    }
                  }
                }
              }
            }
          },
          GetInstanceSnapshot: {
            input: {
              type: 'structure',
              required: ['instanceSnapshotName'],
              members: {
                instanceSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                instanceSnapshot: {
                  shape: 'Scl'
                }
              }
            }
          },
          GetInstanceSnapshots: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                instanceSnapshots: {
                  type: 'list',
                  member: {
                    shape: 'Scl'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetInstanceState: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                state: {
                  shape: 'Sby'
                }
              }
            }
          },
          GetInstances: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                instances: {
                  type: 'list',
                  member: {
                    shape: 'Sbn'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetKeyPair: {
            input: {
              type: 'structure',
              required: ['keyPairName'],
              members: {
                keyPairName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                keyPair: {
                  shape: 'S4z'
                }
              }
            }
          },
          GetKeyPairs: {
            input: {
              type: 'structure',
              members: {
                pageToken: {},
                includeDefaultKeyPair: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                keyPairs: {
                  type: 'list',
                  member: {
                    shape: 'S4z'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetLoadBalancer: {
            input: {
              type: 'structure',
              required: ['loadBalancerName'],
              members: {
                loadBalancerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                loadBalancer: {
                  shape: 'Sd2'
                }
              }
            }
          },
          GetLoadBalancerMetricData: {
            input: {
              type: 'structure',
              required: ['loadBalancerName', 'metricName', 'period', 'startTime', 'endTime', 'unit', 'statistics'],
              members: {
                loadBalancerName: {},
                metricName: {},
                period: {
                  type: 'integer'
                },
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                unit: {},
                statistics: {
                  shape: 'S86'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metricName: {},
                metricData: {
                  shape: 'S88'
                }
              }
            }
          },
          GetLoadBalancerTlsCertificates: {
            input: {
              type: 'structure',
              required: ['loadBalancerName'],
              members: {
                loadBalancerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tlsCertificates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      supportCode: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      location: {
                        shape: 'S9'
                      },
                      resourceType: {},
                      tags: {
                        shape: 'S10'
                      },
                      loadBalancerName: {},
                      isAttached: {
                        type: 'boolean'
                      },
                      status: {},
                      domainName: {},
                      domainValidationRecords: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            type: {},
                            value: {},
                            validationStatus: {},
                            domainName: {},
                            dnsRecordCreationState: {
                              type: 'structure',
                              members: {
                                code: {},
                                message: {}
                              }
                            }
                          }
                        }
                      },
                      failureReason: {},
                      issuedAt: {
                        type: 'timestamp'
                      },
                      issuer: {},
                      keyAlgorithm: {},
                      notAfter: {
                        type: 'timestamp'
                      },
                      notBefore: {
                        type: 'timestamp'
                      },
                      renewalSummary: {
                        type: 'structure',
                        members: {
                          renewalStatus: {},
                          domainValidationOptions: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                domainName: {},
                                validationStatus: {}
                              }
                            }
                          }
                        }
                      },
                      revocationReason: {},
                      revokedAt: {
                        type: 'timestamp'
                      },
                      serial: {},
                      signatureAlgorithm: {},
                      subject: {},
                      subjectAlternativeNames: {
                        shape: 'Su'
                      }
                    }
                  }
                }
              }
            }
          },
          GetLoadBalancerTlsPolicies: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tlsPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      isDefault: {
                        type: 'boolean'
                      },
                      description: {},
                      protocols: {
                        shape: 'Su'
                      },
                      ciphers: {
                        shape: 'Su'
                      }
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetLoadBalancers: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                loadBalancers: {
                  type: 'list',
                  member: {
                    shape: 'Sd2'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetOperation: {
            input: {
              type: 'structure',
              required: ['operationId'],
              members: {
                operationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          GetOperations: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                },
                nextPageToken: {}
              }
            }
          },
          GetOperationsForResource: {
            input: {
              type: 'structure',
              required: ['resourceName'],
              members: {
                resourceName: {},
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                },
                nextPageCount: {
                  deprecated: true
                },
                nextPageToken: {}
              }
            }
          },
          GetRegions: {
            input: {
              type: 'structure',
              members: {
                includeAvailabilityZones: {
                  type: 'boolean'
                },
                includeRelationalDatabaseAvailabilityZones: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                regions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      continentCode: {},
                      description: {},
                      displayName: {},
                      name: {},
                      availabilityZones: {
                        shape: 'See'
                      },
                      relationalDatabaseAvailabilityZones: {
                        shape: 'See'
                      }
                    }
                  }
                }
              }
            }
          },
          GetRelationalDatabase: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                relationalDatabase: {
                  shape: 'Sei'
                }
              }
            }
          },
          GetRelationalDatabaseBlueprints: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                blueprints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      blueprintId: {},
                      engine: {},
                      engineVersion: {},
                      engineDescription: {},
                      engineVersionDescription: {},
                      isEngineDefault: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetRelationalDatabaseBundles: {
            input: {
              type: 'structure',
              members: {
                pageToken: {},
                includeInactive: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                bundles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      bundleId: {},
                      name: {},
                      price: {
                        type: 'float'
                      },
                      ramSizeInGb: {
                        type: 'float'
                      },
                      diskSizeInGb: {
                        type: 'integer'
                      },
                      transferPerMonthInGb: {
                        type: 'integer'
                      },
                      cpuCount: {
                        type: 'integer'
                      },
                      isEncrypted: {
                        type: 'boolean'
                      },
                      isActive: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetRelationalDatabaseEvents: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {},
                durationInMinutes: {
                  type: 'integer'
                },
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                relationalDatabaseEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resource: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      message: {},
                      eventCategories: {
                        shape: 'Su'
                      }
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetRelationalDatabaseLogEvents: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName', 'logStreamName'],
              members: {
                relationalDatabaseName: {},
                logStreamName: {},
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                startFromHead: {
                  type: 'boolean'
                },
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceLogEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      message: {}
                    }
                  }
                },
                nextBackwardToken: {},
                nextForwardToken: {}
              }
            }
          },
          GetRelationalDatabaseLogStreams: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                logStreams: {
                  shape: 'Su'
                }
              }
            }
          },
          GetRelationalDatabaseMasterUserPassword: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {},
                passwordVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                masterUserPassword: {
                  shape: 'S57'
                },
                createdAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetRelationalDatabaseMetricData: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName', 'metricName', 'period', 'startTime', 'endTime', 'unit', 'statistics'],
              members: {
                relationalDatabaseName: {},
                metricName: {},
                period: {
                  type: 'integer'
                },
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                unit: {},
                statistics: {
                  shape: 'S86'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metricName: {},
                metricData: {
                  shape: 'S88'
                }
              }
            }
          },
          GetRelationalDatabaseParameters: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {},
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                parameters: {
                  shape: 'Sff'
                },
                nextPageToken: {}
              }
            }
          },
          GetRelationalDatabaseSnapshot: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseSnapshotName'],
              members: {
                relationalDatabaseSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                relationalDatabaseSnapshot: {
                  shape: 'Sfj'
                }
              }
            }
          },
          GetRelationalDatabaseSnapshots: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                relationalDatabaseSnapshots: {
                  type: 'list',
                  member: {
                    shape: 'Sfj'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetRelationalDatabases: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                relationalDatabases: {
                  type: 'list',
                  member: {
                    shape: 'Sei'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetSetupHistory: {
            input: {
              type: 'structure',
              required: ['resourceName'],
              members: {
                resourceName: {},
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                setupHistory: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      operationId: {},
                      request: {
                        type: 'structure',
                        members: {
                          instanceName: {},
                          domainNames: {
                            shape: 'Sfw'
                          },
                          certificateProvider: {}
                        }
                      },
                      resource: {
                        type: 'structure',
                        members: {
                          name: {},
                          arn: {},
                          createdAt: {
                            type: 'timestamp'
                          },
                          location: {
                            shape: 'S9'
                          },
                          resourceType: {}
                        }
                      },
                      executionDetails: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            command: {},
                            dateTime: {
                              type: 'timestamp'
                            },
                            name: {},
                            status: {},
                            standardError: {},
                            standardOutput: {},
                            version: {}
                          }
                        }
                      },
                      status: {}
                    }
                  }
                },
                nextPageToken: {}
              }
            }
          },
          GetStaticIp: {
            input: {
              type: 'structure',
              required: ['staticIpName'],
              members: {
                staticIpName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                staticIp: {
                  shape: 'Sg5'
                }
              }
            }
          },
          GetStaticIps: {
            input: {
              type: 'structure',
              members: {
                pageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                staticIps: {
                  type: 'list',
                  member: {
                    shape: 'Sg5'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          ImportKeyPair: {
            input: {
              type: 'structure',
              required: ['keyPairName', 'publicKeyBase64'],
              members: {
                keyPairName: {},
                publicKeyBase64: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          IsVpcPeered: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                isPeered: {
                  type: 'boolean'
                }
              }
            }
          },
          OpenInstancePublicPorts: {
            input: {
              type: 'structure',
              required: ['portInfo', 'instanceName'],
              members: {
                portInfo: {
                  shape: 'Sr'
                },
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          PeerVpc: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          PutAlarm: {
            input: {
              type: 'structure',
              required: ['alarmName', 'metricName', 'monitoredResourceName', 'comparisonOperator', 'threshold', 'evaluationPeriods'],
              members: {
                alarmName: {},
                metricName: {},
                monitoredResourceName: {},
                comparisonOperator: {},
                threshold: {
                  type: 'double'
                },
                evaluationPeriods: {
                  type: 'integer'
                },
                datapointsToAlarm: {
                  type: 'integer'
                },
                treatMissingData: {},
                contactProtocols: {
                  shape: 'S7g'
                },
                notificationTriggers: {
                  shape: 'S7h'
                },
                notificationEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          PutInstancePublicPorts: {
            input: {
              type: 'structure',
              required: ['portInfos', 'instanceName'],
              members: {
                portInfos: {
                  type: 'list',
                  member: {
                    shape: 'Sr'
                  }
                },
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          RebootInstance: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          RebootRelationalDatabase: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          RegisterContainerImage: {
            input: {
              type: 'structure',
              required: ['serviceName', 'label', 'digest'],
              members: {
                serviceName: {},
                label: {},
                digest: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                containerImage: {
                  shape: 'S9d'
                }
              }
            }
          },
          ReleaseStaticIp: {
            input: {
              type: 'structure',
              required: ['staticIpName'],
              members: {
                staticIpName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          ResetDistributionCache: {
            input: {
              type: 'structure',
              members: {
                distributionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                createTime: {
                  type: 'timestamp'
                },
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          SendContactMethodVerification: {
            input: {
              type: 'structure',
              required: ['protocol'],
              members: {
                protocol: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          SetIpAddressType: {
            input: {
              type: 'structure',
              required: ['resourceType', 'resourceName', 'ipAddressType'],
              members: {
                resourceType: {},
                resourceName: {},
                ipAddressType: {},
                acceptBundleUpdate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          SetResourceAccessForBucket: {
            input: {
              type: 'structure',
              required: ['resourceName', 'bucketName', 'access'],
              members: {
                resourceName: {},
                bucketName: {},
                access: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          SetupInstanceHttps: {
            input: {
              type: 'structure',
              required: ['instanceName', 'emailAddress', 'domainNames', 'certificateProvider'],
              members: {
                instanceName: {},
                emailAddress: {
                  type: 'string',
                  sensitive: true
                },
                domainNames: {
                  shape: 'Sfw'
                },
                certificateProvider: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          StartGUISession: {
            input: {
              type: 'structure',
              required: ['resourceName'],
              members: {
                resourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          StartInstance: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          StartRelationalDatabase: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          StopGUISession: {
            input: {
              type: 'structure',
              required: ['resourceName'],
              members: {
                resourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          StopInstance: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {},
                force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          StopRelationalDatabase: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {},
                relationalDatabaseSnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceName', 'tags'],
              members: {
                resourceName: {},
                resourceArn: {},
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          TestAlarm: {
            input: {
              type: 'structure',
              required: ['alarmName', 'state'],
              members: {
                alarmName: {},
                state: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          UnpeerVpc: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['resourceName', 'tagKeys'],
              members: {
                resourceName: {},
                resourceArn: {},
                tagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          UpdateBucket: {
            input: {
              type: 'structure',
              required: ['bucketName'],
              members: {
                bucketName: {},
                accessRules: {
                  shape: 'S16'
                },
                versioning: {},
                readonlyAccessAccounts: {
                  shape: 'S18'
                },
                accessLogConfig: {
                  shape: 'S1c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                bucket: {
                  shape: 'S15'
                },
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          UpdateBucketBundle: {
            input: {
              type: 'structure',
              required: ['bucketName', 'bundleId'],
              members: {
                bucketName: {},
                bundleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          UpdateContainerService: {
            input: {
              type: 'structure',
              required: ['serviceName'],
              members: {
                serviceName: {},
                power: {},
                scale: {
                  type: 'integer'
                },
                isDisabled: {
                  type: 'boolean'
                },
                publicDomainNames: {
                  shape: 'S2l'
                },
                privateRegistryAccess: {
                  shape: 'S2x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                containerService: {
                  shape: 'S30'
                }
              }
            }
          },
          UpdateDistribution: {
            input: {
              type: 'structure',
              required: ['distributionName'],
              members: {
                distributionName: {},
                origin: {
                  shape: 'S3r'
                },
                defaultCacheBehavior: {
                  shape: 'S3t'
                },
                cacheBehaviorSettings: {
                  shape: 'S3v'
                },
                cacheBehaviors: {
                  shape: 'S43'
                },
                isEnabled: {
                  type: 'boolean'
                },
                viewerMinimumTlsProtocolVersion: {},
                certificateName: {},
                useDefaultCertificate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          UpdateDistributionBundle: {
            input: {
              type: 'structure',
              members: {
                distributionName: {},
                bundleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          UpdateDomainEntry: {
            input: {
              type: 'structure',
              required: ['domainName', 'domainEntry'],
              members: {
                domainName: {},
                domainEntry: {
                  shape: 'S4d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          UpdateInstanceMetadataOptions: {
            input: {
              type: 'structure',
              required: ['instanceName'],
              members: {
                instanceName: {},
                httpTokens: {},
                httpEndpoint: {},
                httpPutResponseHopLimit: {
                  type: 'integer'
                },
                httpProtocolIpv6: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operation: {
                  shape: 'S5'
                }
              }
            }
          },
          UpdateLoadBalancerAttribute: {
            input: {
              type: 'structure',
              required: ['loadBalancerName', 'attributeName', 'attributeValue'],
              members: {
                loadBalancerName: {},
                attributeName: {},
                attributeValue: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          UpdateRelationalDatabase: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName'],
              members: {
                relationalDatabaseName: {},
                masterUserPassword: {
                  shape: 'S57'
                },
                rotateMasterUserPassword: {
                  type: 'boolean'
                },
                preferredBackupWindow: {},
                preferredMaintenanceWindow: {},
                enableBackupRetention: {
                  type: 'boolean'
                },
                disableBackupRetention: {
                  type: 'boolean'
                },
                publiclyAccessible: {
                  type: 'boolean'
                },
                applyImmediately: {
                  type: 'boolean'
                },
                caCertificateIdentifier: {},
                relationalDatabaseBlueprintId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          },
          UpdateRelationalDatabaseParameters: {
            input: {
              type: 'structure',
              required: ['relationalDatabaseName', 'parameters'],
              members: {
                relationalDatabaseName: {},
                parameters: {
                  shape: 'Sff'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                operations: {
                  shape: 'S4'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {
              shape: 'S5'
            }
          },
          S5: {
            type: 'structure',
            members: {
              id: {},
              resourceName: {},
              resourceType: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              isTerminal: {
                type: 'boolean'
              },
              operationDetails: {},
              operationType: {},
              status: {},
              statusChangedAt: {
                type: 'timestamp'
              },
              errorCode: {},
              errorDetails: {}
            }
          },
          S9: {
            type: 'structure',
            members: {
              availabilityZone: {},
              regionName: {}
            }
          },
          Sk: {
            type: 'list',
            member: {}
          },
          Sr: {
            type: 'structure',
            members: {
              fromPort: {
                type: 'integer'
              },
              toPort: {
                type: 'integer'
              },
              protocol: {},
              cidrs: {
                shape: 'Su'
              },
              ipv6Cidrs: {
                shape: 'Su'
              },
              cidrListAliases: {
                shape: 'Su'
              }
            }
          },
          Su: {
            type: 'list',
            member: {}
          },
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          S15: {
            type: 'structure',
            members: {
              resourceType: {},
              accessRules: {
                shape: 'S16'
              },
              arn: {},
              bundleId: {},
              createdAt: {
                type: 'timestamp'
              },
              url: {},
              location: {
                shape: 'S9'
              },
              name: {},
              supportCode: {},
              tags: {
                shape: 'S10'
              },
              objectVersioning: {},
              ableToUpdateBundle: {
                type: 'boolean'
              },
              readonlyAccessAccounts: {
                shape: 'S18'
              },
              resourcesReceivingAccess: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {},
                    resourceType: {}
                  }
                }
              },
              state: {
                type: 'structure',
                members: {
                  code: {},
                  message: {}
                }
              },
              accessLogConfig: {
                shape: 'S1c'
              }
            }
          },
          S16: {
            type: 'structure',
            members: {
              getObject: {},
              allowPublicOverrides: {
                type: 'boolean'
              }
            }
          },
          S18: {
            type: 'list',
            member: {}
          },
          S1c: {
            type: 'structure',
            required: ['enabled'],
            members: {
              enabled: {
                type: 'boolean'
              },
              destination: {},
              prefix: {}
            }
          },
          S1g: {
            type: 'structure',
            members: {
              accessKeyId: {
                type: 'string',
                sensitive: true
              },
              secretAccessKey: {},
              status: {},
              createdAt: {
                type: 'timestamp'
              },
              lastUsed: {
                type: 'structure',
                members: {
                  lastUsedDate: {
                    type: 'timestamp'
                  },
                  region: {},
                  serviceName: {}
                }
              }
            }
          },
          S1n: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'structure',
            members: {
              certificateArn: {},
              certificateName: {},
              domainName: {},
              certificateDetail: {
                type: 'structure',
                members: {
                  arn: {},
                  name: {},
                  domainName: {},
                  status: {},
                  serialNumber: {},
                  subjectAlternativeNames: {
                    shape: 'S1n'
                  },
                  domainValidationRecords: {
                    shape: 'S1t'
                  },
                  requestFailureReason: {},
                  inUseResourceCount: {
                    type: 'integer'
                  },
                  keyAlgorithm: {},
                  createdAt: {
                    type: 'timestamp'
                  },
                  issuedAt: {
                    type: 'timestamp'
                  },
                  issuerCA: {},
                  notBefore: {
                    type: 'timestamp'
                  },
                  notAfter: {
                    type: 'timestamp'
                  },
                  eligibleToRenew: {},
                  renewalSummary: {
                    type: 'structure',
                    members: {
                      domainValidationRecords: {
                        shape: 'S1t'
                      },
                      renewalStatus: {},
                      renewalStatusReason: {},
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  },
                  revokedAt: {
                    type: 'timestamp'
                  },
                  revocationReason: {},
                  tags: {
                    shape: 'S10'
                  },
                  supportCode: {}
                }
              },
              tags: {
                shape: 'S10'
              }
            }
          },
          S1t: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                domainName: {},
                resourceRecord: {
                  type: 'structure',
                  members: {
                    name: {},
                    type: {},
                    value: {}
                  }
                },
                dnsRecordCreationState: {
                  type: 'structure',
                  members: {
                    code: {},
                    message: {}
                  }
                },
                validationStatus: {}
              }
            }
          },
          S2l: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          S2o: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                image: {},
                command: {
                  shape: 'Su'
                },
                environment: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                ports: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          S2u: {
            type: 'structure',
            required: ['containerName', 'containerPort'],
            members: {
              containerName: {},
              containerPort: {
                type: 'integer'
              },
              healthCheck: {
                shape: 'S2w'
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              healthyThreshold: {
                type: 'integer'
              },
              unhealthyThreshold: {
                type: 'integer'
              },
              timeoutSeconds: {
                type: 'integer'
              },
              intervalSeconds: {
                type: 'integer'
              },
              path: {},
              successCodes: {}
            }
          },
          S2x: {
            type: 'structure',
            members: {
              ecrImagePullerRole: {
                type: 'structure',
                members: {
                  isActive: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S30: {
            type: 'structure',
            members: {
              containerServiceName: {},
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              power: {},
              powerId: {},
              state: {},
              stateDetail: {
                type: 'structure',
                members: {
                  code: {},
                  message: {}
                }
              },
              scale: {
                type: 'integer'
              },
              currentDeployment: {
                shape: 'S34'
              },
              nextDeployment: {
                shape: 'S34'
              },
              isDisabled: {
                type: 'boolean'
              },
              principalArn: {},
              privateDomainName: {},
              publicDomainNames: {
                shape: 'S2l'
              },
              url: {},
              privateRegistryAccess: {
                type: 'structure',
                members: {
                  ecrImagePullerRole: {
                    type: 'structure',
                    members: {
                      isActive: {
                        type: 'boolean'
                      },
                      principalArn: {}
                    }
                  }
                }
              }
            }
          },
          S34: {
            type: 'structure',
            members: {
              version: {
                type: 'integer'
              },
              state: {},
              containers: {
                shape: 'S2o'
              },
              publicEndpoint: {
                type: 'structure',
                members: {
                  containerName: {},
                  containerPort: {
                    type: 'integer'
                  },
                  healthCheck: {
                    shape: 'S2w'
                  }
                }
              },
              createdAt: {
                type: 'timestamp'
              }
            }
          },
          S3f: {
            type: 'list',
            member: {
              shape: 'S3g'
            }
          },
          S3g: {
            type: 'structure',
            required: ['addOnType'],
            members: {
              addOnType: {},
              autoSnapshotAddOnRequest: {
                type: 'structure',
                members: {
                  snapshotTimeOfDay: {}
                }
              },
              stopInstanceOnIdleRequest: {
                type: 'structure',
                members: {
                  threshold: {},
                  duration: {}
                }
              }
            }
          },
          S3r: {
            type: 'structure',
            members: {
              name: {},
              regionName: {},
              protocolPolicy: {},
              responseTimeout: {
                type: 'integer'
              }
            }
          },
          S3t: {
            type: 'structure',
            members: {
              behavior: {}
            }
          },
          S3v: {
            type: 'structure',
            members: {
              defaultTTL: {
                type: 'long'
              },
              minimumTTL: {
                type: 'long'
              },
              maximumTTL: {
                type: 'long'
              },
              allowedHTTPMethods: {},
              cachedHTTPMethods: {},
              forwardedCookies: {
                type: 'structure',
                members: {
                  option: {},
                  cookiesAllowList: {
                    shape: 'Su'
                  }
                }
              },
              forwardedHeaders: {
                type: 'structure',
                members: {
                  option: {},
                  headersAllowList: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              forwardedQueryStrings: {
                type: 'structure',
                members: {
                  option: {
                    type: 'boolean'
                  },
                  queryStringsAllowList: {
                    shape: 'Su'
                  }
                }
              }
            }
          },
          S43: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                path: {},
                behavior: {}
              }
            }
          },
          S48: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              alternativeDomainNames: {
                shape: 'Su'
              },
              status: {},
              isEnabled: {
                type: 'boolean'
              },
              domainName: {},
              bundleId: {},
              certificateName: {},
              origin: {
                type: 'structure',
                members: {
                  name: {},
                  resourceType: {},
                  regionName: {},
                  protocolPolicy: {},
                  responseTimeout: {
                    type: 'integer'
                  }
                }
              },
              originPublicDNS: {},
              defaultCacheBehavior: {
                shape: 'S3t'
              },
              cacheBehaviorSettings: {
                shape: 'S3v'
              },
              cacheBehaviors: {
                shape: 'S43'
              },
              ableToUpdateBundle: {
                type: 'boolean'
              },
              ipAddressType: {},
              tags: {
                shape: 'S10'
              },
              viewerMinimumTlsProtocolVersion: {}
            }
          },
          S4d: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              target: {},
              isAlias: {
                type: 'boolean'
              },
              type: {},
              options: {
                deprecated: true,
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S4z: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              fingerprint: {}
            }
          },
          S52: {
            type: 'list',
            member: {}
          },
          S57: {
            type: 'string',
            sensitive: true
          },
          S7g: {
            type: 'list',
            member: {}
          },
          S7h: {
            type: 'list',
            member: {}
          },
          S86: {
            type: 'list',
            member: {}
          },
          S88: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                average: {
                  type: 'double'
                },
                maximum: {
                  type: 'double'
                },
                minimum: {
                  type: 'double'
                },
                sampleCount: {
                  type: 'double'
                },
                sum: {
                  type: 'double'
                },
                timestamp: {
                  type: 'timestamp'
                },
                unit: {}
              }
            }
          },
          S90: {
            type: 'structure',
            members: {
              id: {},
              service: {}
            }
          },
          S9d: {
            type: 'structure',
            members: {
              image: {},
              digest: {},
              createdAt: {
                type: 'timestamp'
              }
            }
          },
          Sa8: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              addOns: {
                shape: 'Sa9'
              },
              sizeInGb: {
                type: 'integer'
              },
              isSystemDisk: {
                type: 'boolean'
              },
              iops: {
                type: 'integer'
              },
              path: {},
              state: {},
              attachedTo: {},
              isAttached: {
                type: 'boolean'
              },
              attachmentState: {
                deprecated: true
              },
              gbInUse: {
                deprecated: true,
                type: 'integer'
              },
              autoMountStatus: {}
            }
          },
          Sa9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                status: {},
                snapshotTimeOfDay: {},
                nextSnapshotTimeOfDay: {},
                threshold: {},
                duration: {}
              }
            }
          },
          Saf: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              sizeInGb: {
                type: 'integer'
              },
              state: {},
              progress: {},
              fromDiskName: {},
              fromDiskArn: {},
              fromInstanceName: {},
              fromInstanceArn: {},
              isFromAutoSnapshot: {
                type: 'boolean'
              }
            }
          },
          Sam: {
            type: 'list',
            member: {
              shape: 'Sa8'
            }
          },
          Sb1: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              domainEntries: {
                type: 'list',
                member: {
                  shape: 'S4d'
                }
              },
              registeredDomainDelegationInfo: {
                type: 'structure',
                members: {
                  nameServersUpdateState: {
                    type: 'structure',
                    members: {
                      code: {},
                      message: {}
                    }
                  },
                  r53HostedZoneDeletionState: {
                    type: 'structure',
                    members: {
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            }
          },
          Sbn: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              blueprintId: {},
              blueprintName: {},
              bundleId: {},
              addOns: {
                shape: 'Sa9'
              },
              isStaticIp: {
                type: 'boolean'
              },
              privateIpAddress: {},
              publicIpAddress: {},
              ipv6Addresses: {
                shape: 'Sbp'
              },
              ipAddressType: {},
              hardware: {
                type: 'structure',
                members: {
                  cpuCount: {
                    type: 'integer'
                  },
                  disks: {
                    shape: 'Sam'
                  },
                  ramSizeInGb: {
                    type: 'float'
                  }
                }
              },
              networking: {
                type: 'structure',
                members: {
                  monthlyTransfer: {
                    type: 'structure',
                    members: {
                      gbPerMonthAllocated: {
                        type: 'integer'
                      }
                    }
                  },
                  ports: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        fromPort: {
                          type: 'integer'
                        },
                        toPort: {
                          type: 'integer'
                        },
                        protocol: {},
                        accessFrom: {},
                        accessType: {},
                        commonName: {},
                        accessDirection: {},
                        cidrs: {
                          shape: 'Su'
                        },
                        ipv6Cidrs: {
                          shape: 'Su'
                        },
                        cidrListAliases: {
                          shape: 'Su'
                        }
                      }
                    }
                  }
                }
              },
              state: {
                shape: 'Sby'
              },
              username: {},
              sshKeyName: {},
              metadataOptions: {
                type: 'structure',
                members: {
                  state: {},
                  httpTokens: {},
                  httpEndpoint: {},
                  httpPutResponseHopLimit: {
                    type: 'integer'
                  },
                  httpProtocolIpv6: {}
                }
              }
            }
          },
          Sbp: {
            type: 'list',
            member: {}
          },
          Sby: {
            type: 'structure',
            members: {
              code: {
                type: 'integer'
              },
              name: {}
            }
          },
          Scl: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              state: {},
              progress: {},
              fromAttachedDisks: {
                shape: 'Sam'
              },
              fromInstanceName: {},
              fromInstanceArn: {},
              fromBlueprintId: {},
              fromBundleId: {},
              isFromAutoSnapshot: {
                type: 'boolean'
              },
              sizeInGb: {
                type: 'integer'
              }
            }
          },
          Sd2: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              dnsName: {},
              state: {},
              protocol: {},
              publicPorts: {
                type: 'list',
                member: {
                  type: 'integer'
                }
              },
              healthCheckPath: {},
              instancePort: {
                type: 'integer'
              },
              instanceHealthSummary: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    instanceName: {},
                    instanceHealth: {},
                    instanceHealthReason: {}
                  }
                }
              },
              tlsCertificateSummaries: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {},
                    isAttached: {
                      type: 'boolean'
                    }
                  }
                }
              },
              configurationOptions: {
                type: 'map',
                key: {},
                value: {}
              },
              ipAddressType: {},
              httpsRedirectionEnabled: {
                type: 'boolean'
              },
              tlsPolicyName: {}
            }
          },
          See: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                zoneName: {},
                state: {}
              }
            }
          },
          Sei: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              relationalDatabaseBlueprintId: {},
              relationalDatabaseBundleId: {},
              masterDatabaseName: {},
              hardware: {
                type: 'structure',
                members: {
                  cpuCount: {
                    type: 'integer'
                  },
                  diskSizeInGb: {
                    type: 'integer'
                  },
                  ramSizeInGb: {
                    type: 'float'
                  }
                }
              },
              state: {},
              secondaryAvailabilityZone: {},
              backupRetentionEnabled: {
                type: 'boolean'
              },
              pendingModifiedValues: {
                type: 'structure',
                members: {
                  masterUserPassword: {},
                  engineVersion: {},
                  backupRetentionEnabled: {
                    type: 'boolean'
                  }
                }
              },
              engine: {},
              engineVersion: {},
              latestRestorableTime: {
                type: 'timestamp'
              },
              masterUsername: {},
              parameterApplyStatus: {},
              preferredBackupWindow: {},
              preferredMaintenanceWindow: {},
              publiclyAccessible: {
                type: 'boolean'
              },
              masterEndpoint: {
                type: 'structure',
                members: {
                  port: {
                    type: 'integer'
                  },
                  address: {}
                }
              },
              pendingMaintenanceActions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    action: {},
                    description: {},
                    currentApplyDate: {
                      type: 'timestamp'
                    }
                  }
                }
              },
              caCertificateIdentifier: {}
            }
          },
          Sff: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                allowedValues: {},
                applyMethod: {},
                applyType: {},
                dataType: {},
                description: {},
                isModifiable: {
                  type: 'boolean'
                },
                parameterName: {},
                parameterValue: {}
              }
            }
          },
          Sfj: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              tags: {
                shape: 'S10'
              },
              engine: {},
              engineVersion: {},
              sizeInGb: {
                type: 'integer'
              },
              state: {},
              fromRelationalDatabaseName: {},
              fromRelationalDatabaseArn: {},
              fromRelationalDatabaseBundleId: {},
              fromRelationalDatabaseBlueprintId: {}
            }
          },
          Sfw: {
            type: 'list',
            member: {}
          },
          Sg5: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              supportCode: {},
              createdAt: {
                type: 'timestamp'
              },
              location: {
                shape: 'S9'
              },
              resourceType: {},
              ipAddress: {},
              attachedTo: {},
              isAttached: {
                type: 'boolean'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2fe6349bfbdc3d9d0f1d51c00eeff41eff9d47e3.js.map