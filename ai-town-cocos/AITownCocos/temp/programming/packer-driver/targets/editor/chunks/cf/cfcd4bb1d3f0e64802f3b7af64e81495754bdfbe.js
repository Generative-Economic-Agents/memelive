System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-06-17',
          endpointPrefix: 'iotfleetwise',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'AWS IoT FleetWise',
          serviceId: 'IoTFleetWise',
          signatureVersion: 'v4',
          signingName: 'iotfleetwise',
          targetPrefix: 'IoTAutobahnControlPlane',
          uid: 'iotfleetwise-2021-06-17'
        },
        operations: {
          AssociateVehicleFleet: {
            input: {
              type: 'structure',
              required: ['vehicleName', 'fleetId'],
              members: {
                vehicleName: {},
                fleetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BatchCreateVehicle: {
            input: {
              type: 'structure',
              required: ['vehicles'],
              members: {
                vehicles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['vehicleName', 'modelManifestArn', 'decoderManifestArn'],
                    members: {
                      vehicleName: {},
                      modelManifestArn: {},
                      decoderManifestArn: {},
                      attributes: {
                        shape: 'S9'
                      },
                      associationBehavior: {},
                      tags: {
                        shape: 'Sd'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                vehicles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      vehicleName: {},
                      arn: {},
                      thingArn: {}
                    }
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      vehicleName: {},
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            }
          },
          BatchUpdateVehicle: {
            input: {
              type: 'structure',
              required: ['vehicles'],
              members: {
                vehicles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['vehicleName'],
                    members: {
                      vehicleName: {},
                      modelManifestArn: {},
                      decoderManifestArn: {},
                      attributes: {
                        shape: 'S9'
                      },
                      attributeUpdateMode: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                vehicles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      vehicleName: {},
                      arn: {}
                    }
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      vehicleName: {},
                      code: {
                        type: 'integer'
                      },
                      message: {}
                    }
                  }
                }
              }
            }
          },
          CreateCampaign: {
            input: {
              type: 'structure',
              required: ['name', 'signalCatalogArn', 'targetArn', 'collectionScheme'],
              members: {
                name: {},
                description: {},
                signalCatalogArn: {},
                targetArn: {},
                startTime: {
                  type: 'timestamp'
                },
                expiryTime: {
                  type: 'timestamp'
                },
                postTriggerCollectionDuration: {
                  type: 'long'
                },
                diagnosticsMode: {},
                spoolingMode: {},
                compression: {},
                priority: {
                  type: 'integer'
                },
                signalsToCollect: {
                  shape: 'S16'
                },
                collectionScheme: {
                  shape: 'S1a'
                },
                dataExtraDimensions: {
                  shape: 'S1h'
                },
                tags: {
                  shape: 'Sd'
                },
                dataDestinationConfigs: {
                  shape: 'S1j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          CreateDecoderManifest: {
            input: {
              type: 'structure',
              required: ['name', 'modelManifestArn'],
              members: {
                name: {},
                description: {},
                modelManifestArn: {},
                signalDecoders: {
                  shape: 'S1w'
                },
                networkInterfaces: {
                  shape: 'S2m'
                },
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          CreateFleet: {
            input: {
              type: 'structure',
              required: ['fleetId', 'signalCatalogArn'],
              members: {
                fleetId: {},
                description: {},
                signalCatalogArn: {},
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn'],
              members: {
                id: {},
                arn: {}
              }
            },
            idempotent: true
          },
          CreateModelManifest: {
            input: {
              type: 'structure',
              required: ['name', 'nodes', 'signalCatalogArn'],
              members: {
                name: {},
                description: {},
                nodes: {
                  shape: 'S33'
                },
                signalCatalogArn: {},
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          CreateSignalCatalog: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                nodes: {
                  shape: 'S36'
                },
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          CreateVehicle: {
            input: {
              type: 'structure',
              required: ['vehicleName', 'modelManifestArn', 'decoderManifestArn'],
              members: {
                vehicleName: {},
                modelManifestArn: {},
                decoderManifestArn: {},
                attributes: {
                  shape: 'S9'
                },
                associationBehavior: {},
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                vehicleName: {},
                arn: {},
                thingArn: {}
              }
            },
            idempotent: true
          },
          DeleteCampaign: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          DeleteDecoderManifest: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          DeleteFleet: {
            input: {
              type: 'structure',
              required: ['fleetId'],
              members: {
                fleetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {}
              }
            },
            idempotent: true
          },
          DeleteModelManifest: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          DeleteSignalCatalog: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          DeleteVehicle: {
            input: {
              type: 'structure',
              required: ['vehicleName'],
              members: {
                vehicleName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['vehicleName', 'arn'],
              members: {
                vehicleName: {},
                arn: {}
              }
            },
            idempotent: true
          },
          DisassociateVehicleFleet: {
            input: {
              type: 'structure',
              required: ['vehicleName', 'fleetId'],
              members: {
                vehicleName: {},
                fleetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetCampaign: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                arn: {},
                description: {},
                signalCatalogArn: {},
                targetArn: {},
                status: {},
                startTime: {
                  type: 'timestamp'
                },
                expiryTime: {
                  type: 'timestamp'
                },
                postTriggerCollectionDuration: {
                  type: 'long'
                },
                diagnosticsMode: {},
                spoolingMode: {},
                compression: {},
                priority: {
                  type: 'integer'
                },
                signalsToCollect: {
                  shape: 'S16'
                },
                collectionScheme: {
                  shape: 'S1a'
                },
                dataExtraDimensions: {
                  shape: 'S1h'
                },
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
                },
                dataDestinationConfigs: {
                  shape: 'S1j'
                }
              }
            }
          },
          GetDecoderManifest: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn', 'creationTime', 'lastModificationTime'],
              members: {
                name: {},
                arn: {},
                description: {},
                modelManifestArn: {},
                status: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
                },
                message: {}
              }
            }
          },
          GetEncryptionConfiguration: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['encryptionStatus', 'encryptionType'],
              members: {
                kmsKeyId: {},
                encryptionStatus: {},
                encryptionType: {},
                errorMessage: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetFleet: {
            input: {
              type: 'structure',
              required: ['fleetId'],
              members: {
                fleetId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn', 'signalCatalogArn', 'creationTime', 'lastModificationTime'],
              members: {
                id: {},
                arn: {},
                description: {},
                signalCatalogArn: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetLoggingOptions: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['cloudWatchLogDelivery'],
              members: {
                cloudWatchLogDelivery: {
                  shape: 'S4e'
                }
              }
            }
          },
          GetModelManifest: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn', 'creationTime', 'lastModificationTime'],
              members: {
                name: {},
                arn: {},
                description: {},
                signalCatalogArn: {},
                status: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetRegisterAccountStatus: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['customerAccountId', 'accountStatus', 'iamRegistrationResponse', 'creationTime', 'lastModificationTime'],
              members: {
                customerAccountId: {},
                accountStatus: {},
                timestreamRegistrationResponse: {
                  type: 'structure',
                  required: ['timestreamDatabaseName', 'timestreamTableName', 'registrationStatus'],
                  members: {
                    timestreamDatabaseName: {},
                    timestreamTableName: {},
                    timestreamDatabaseArn: {},
                    timestreamTableArn: {},
                    registrationStatus: {},
                    errorMessage: {}
                  }
                },
                iamRegistrationResponse: {
                  type: 'structure',
                  required: ['roleArn', 'registrationStatus'],
                  members: {
                    roleArn: {},
                    registrationStatus: {},
                    errorMessage: {}
                  }
                },
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetSignalCatalog: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn', 'creationTime', 'lastModificationTime'],
              members: {
                name: {},
                arn: {},
                description: {},
                nodeCounts: {
                  type: 'structure',
                  members: {
                    totalNodes: {
                      type: 'integer'
                    },
                    totalBranches: {
                      type: 'integer'
                    },
                    totalSensors: {
                      type: 'integer'
                    },
                    totalAttributes: {
                      type: 'integer'
                    },
                    totalActuators: {
                      type: 'integer'
                    },
                    totalStructs: {
                      type: 'integer'
                    },
                    totalProperties: {
                      type: 'integer'
                    }
                  }
                },
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetVehicle: {
            input: {
              type: 'structure',
              required: ['vehicleName'],
              members: {
                vehicleName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                vehicleName: {},
                arn: {},
                modelManifestArn: {},
                decoderManifestArn: {},
                attributes: {
                  shape: 'S9'
                },
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetVehicleStatus: {
            input: {
              type: 'structure',
              required: ['vehicleName'],
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                vehicleName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                campaigns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      campaignName: {},
                      vehicleName: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ImportDecoderManifest: {
            input: {
              type: 'structure',
              required: ['name', 'networkFileDefinitions'],
              members: {
                name: {},
                networkFileDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      canDbc: {
                        type: 'structure',
                        required: ['networkInterface', 'canDbcFiles'],
                        members: {
                          networkInterface: {},
                          canDbcFiles: {
                            type: 'list',
                            member: {
                              type: 'blob'
                            }
                          },
                          signalsMap: {
                            type: 'map',
                            key: {},
                            value: {}
                          }
                        }
                      }
                    },
                    union: true
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            }
          },
          ImportSignalCatalog: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                vss: {
                  type: 'structure',
                  members: {
                    vssJson: {}
                  },
                  union: true
                },
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          ListCampaigns: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                campaignSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['creationTime', 'lastModificationTime'],
                    members: {
                      arn: {},
                      name: {},
                      description: {},
                      signalCatalogArn: {},
                      targetArn: {},
                      status: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDecoderManifestNetworkInterfaces: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkInterfaces: {
                  shape: 'S2m'
                },
                nextToken: {}
              }
            }
          },
          ListDecoderManifestSignals: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                signalDecoders: {
                  shape: 'S1w'
                },
                nextToken: {}
              }
            }
          },
          ListDecoderManifests: {
            input: {
              type: 'structure',
              members: {
                modelManifestArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['creationTime', 'lastModificationTime'],
                    members: {
                      name: {},
                      arn: {},
                      modelManifestArn: {},
                      description: {},
                      status: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastModificationTime: {
                        type: 'timestamp'
                      },
                      message: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFleets: {
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
                fleetSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'signalCatalogArn', 'creationTime'],
                    members: {
                      id: {},
                      arn: {},
                      description: {},
                      signalCatalogArn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFleetsForVehicle: {
            input: {
              type: 'structure',
              required: ['vehicleName'],
              members: {
                vehicleName: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                fleets: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            }
          },
          ListModelManifestNodes: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nodes: {
                  shape: 'S36'
                },
                nextToken: {}
              }
            }
          },
          ListModelManifests: {
            input: {
              type: 'structure',
              members: {
                signalCatalogArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['creationTime', 'lastModificationTime'],
                    members: {
                      name: {},
                      arn: {},
                      signalCatalogArn: {},
                      description: {},
                      status: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastModificationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSignalCatalogNodes: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                signalNodeType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nodes: {
                  shape: 'S36'
                },
                nextToken: {}
              }
            }
          },
          ListSignalCatalogs: {
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
                summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastModificationTime: {
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
                  shape: 'Sd'
                }
              }
            }
          },
          ListVehicles: {
            input: {
              type: 'structure',
              members: {
                modelManifestArn: {},
                attributeNames: {
                  type: 'list',
                  member: {}
                },
                attributeValues: {
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
                vehicleSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['vehicleName', 'arn', 'modelManifestArn', 'decoderManifestArn', 'creationTime', 'lastModificationTime'],
                    members: {
                      vehicleName: {},
                      arn: {},
                      modelManifestArn: {},
                      decoderManifestArn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastModificationTime: {
                        type: 'timestamp'
                      },
                      attributes: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListVehiclesInFleet: {
            input: {
              type: 'structure',
              required: ['fleetId'],
              members: {
                fleetId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                vehicles: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            }
          },
          PutEncryptionConfiguration: {
            input: {
              type: 'structure',
              required: ['encryptionType'],
              members: {
                kmsKeyId: {},
                encryptionType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['encryptionStatus', 'encryptionType'],
              members: {
                kmsKeyId: {},
                encryptionStatus: {},
                encryptionType: {}
              }
            }
          },
          PutLoggingOptions: {
            input: {
              type: 'structure',
              required: ['cloudWatchLogDelivery'],
              members: {
                cloudWatchLogDelivery: {
                  shape: 'S4e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          RegisterAccount: {
            input: {
              type: 'structure',
              members: {
                timestreamResources: {
                  shape: 'S6u',
                  deprecated: true,
                  deprecatedMessage: 'Amazon Timestream metadata is now passed in the CreateCampaign API.'
                },
                iamResources: {
                  shape: 'S6v',
                  deprecated: true,
                  deprecatedMessage: 'iamResources is no longer used or needed as input'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['registerAccountStatus', 'iamResources', 'creationTime', 'lastModificationTime'],
              members: {
                registerAccountStatus: {},
                timestreamResources: {
                  shape: 'S6u'
                },
                iamResources: {
                  shape: 'S6v'
                },
                creationTime: {
                  type: 'timestamp'
                },
                lastModificationTime: {
                  type: 'timestamp'
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
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
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
            },
            idempotent: true
          },
          UpdateCampaign: {
            input: {
              type: 'structure',
              required: ['name', 'action'],
              members: {
                name: {},
                description: {},
                dataExtraDimensions: {
                  shape: 'S1h'
                },
                action: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                status: {}
              }
            }
          },
          UpdateDecoderManifest: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                signalDecodersToAdd: {
                  shape: 'S1w'
                },
                signalDecodersToUpdate: {
                  shape: 'S1w'
                },
                signalDecodersToRemove: {
                  type: 'list',
                  member: {}
                },
                networkInterfacesToAdd: {
                  shape: 'S2m'
                },
                networkInterfacesToUpdate: {
                  shape: 'S2m'
                },
                networkInterfacesToRemove: {
                  type: 'list',
                  member: {}
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          UpdateFleet: {
            input: {
              type: 'structure',
              required: ['fleetId'],
              members: {
                fleetId: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {}
              }
            }
          },
          UpdateModelManifest: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                nodesToAdd: {
                  shape: 'S7c'
                },
                nodesToRemove: {
                  shape: 'S7c'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          UpdateSignalCatalog: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                nodesToAdd: {
                  shape: 'S36'
                },
                nodesToUpdate: {
                  shape: 'S36'
                },
                nodesToRemove: {
                  shape: 'S7c'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            },
            idempotent: true
          },
          UpdateVehicle: {
            input: {
              type: 'structure',
              required: ['vehicleName'],
              members: {
                vehicleName: {},
                modelManifestArn: {},
                decoderManifestArn: {},
                attributes: {
                  shape: 'S9'
                },
                attributeUpdateMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                vehicleName: {},
                arn: {}
              }
            }
          }
        },
        shapes: {
          S9: {
            type: 'map',
            key: {},
            value: {}
          },
          Sd: {
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
          S16: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                maxSampleCount: {
                  type: 'long'
                },
                minimumSamplingIntervalMs: {
                  type: 'long'
                }
              }
            }
          },
          S1a: {
            type: 'structure',
            members: {
              timeBasedCollectionScheme: {
                type: 'structure',
                required: ['periodMs'],
                members: {
                  periodMs: {
                    type: 'long'
                  }
                }
              },
              conditionBasedCollectionScheme: {
                type: 'structure',
                required: ['expression'],
                members: {
                  expression: {},
                  minimumTriggerIntervalMs: {
                    type: 'long'
                  },
                  triggerMode: {},
                  conditionLanguageVersion: {
                    type: 'integer'
                  }
                }
              }
            },
            union: true
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                s3Config: {
                  type: 'structure',
                  required: ['bucketArn'],
                  members: {
                    bucketArn: {},
                    dataFormat: {},
                    storageCompressionFormat: {},
                    prefix: {}
                  }
                },
                timestreamConfig: {
                  type: 'structure',
                  required: ['timestreamTableArn', 'executionRoleArn'],
                  members: {
                    timestreamTableArn: {},
                    executionRoleArn: {}
                  }
                }
              },
              union: true
            }
          },
          S1w: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['fullyQualifiedName', 'type', 'interfaceId'],
              members: {
                fullyQualifiedName: {},
                type: {},
                interfaceId: {},
                canSignal: {
                  type: 'structure',
                  required: ['messageId', 'isBigEndian', 'isSigned', 'startBit', 'offset', 'factor', 'length'],
                  members: {
                    messageId: {
                      type: 'integer'
                    },
                    isBigEndian: {
                      type: 'boolean'
                    },
                    isSigned: {
                      type: 'boolean'
                    },
                    startBit: {
                      type: 'integer'
                    },
                    offset: {
                      type: 'double'
                    },
                    factor: {
                      type: 'double'
                    },
                    length: {
                      type: 'integer'
                    },
                    name: {}
                  }
                },
                obdSignal: {
                  type: 'structure',
                  required: ['pidResponseLength', 'serviceMode', 'pid', 'scaling', 'offset', 'startByte', 'byteLength'],
                  members: {
                    pidResponseLength: {
                      type: 'integer'
                    },
                    serviceMode: {
                      type: 'integer'
                    },
                    pid: {
                      type: 'integer'
                    },
                    scaling: {
                      type: 'double'
                    },
                    offset: {
                      type: 'double'
                    },
                    startByte: {
                      type: 'integer'
                    },
                    byteLength: {
                      type: 'integer'
                    },
                    bitRightShift: {
                      type: 'integer'
                    },
                    bitMaskLength: {
                      type: 'integer'
                    }
                  }
                },
                messageSignal: {
                  type: 'structure',
                  required: ['topicName', 'structuredMessage'],
                  members: {
                    topicName: {},
                    structuredMessage: {
                      shape: 'S2c'
                    }
                  }
                }
              }
            }
          },
          S2c: {
            type: 'structure',
            members: {
              primitiveMessageDefinition: {
                type: 'structure',
                members: {
                  ros2PrimitiveMessageDefinition: {
                    type: 'structure',
                    required: ['primitiveType'],
                    members: {
                      primitiveType: {},
                      offset: {
                        type: 'double'
                      },
                      scaling: {
                        type: 'double'
                      },
                      upperBound: {
                        type: 'long'
                      }
                    }
                  }
                },
                union: true
              },
              structuredMessageListDefinition: {
                type: 'structure',
                required: ['name', 'memberType', 'listType'],
                members: {
                  name: {},
                  memberType: {
                    shape: 'S2c'
                  },
                  listType: {},
                  capacity: {
                    type: 'integer'
                  }
                }
              },
              structuredMessageDefinition: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['fieldName', 'dataType'],
                  members: {
                    fieldName: {},
                    dataType: {
                      shape: 'S2c'
                    }
                  }
                }
              }
            },
            union: true
          },
          S2m: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['interfaceId', 'type'],
              members: {
                interfaceId: {},
                type: {},
                canInterface: {
                  type: 'structure',
                  required: ['name'],
                  members: {
                    name: {},
                    protocolName: {},
                    protocolVersion: {}
                  }
                },
                obdInterface: {
                  type: 'structure',
                  required: ['name', 'requestMessageId'],
                  members: {
                    name: {},
                    requestMessageId: {
                      type: 'integer'
                    },
                    obdStandard: {},
                    pidRequestIntervalSeconds: {
                      type: 'integer'
                    },
                    dtcRequestIntervalSeconds: {
                      type: 'integer'
                    },
                    useExtendedIds: {
                      type: 'boolean'
                    },
                    hasTransmissionEcu: {
                      type: 'boolean'
                    }
                  }
                },
                vehicleMiddleware: {
                  type: 'structure',
                  required: ['name', 'protocolName'],
                  members: {
                    name: {},
                    protocolName: {}
                  }
                }
              }
            }
          },
          S33: {
            type: 'list',
            member: {}
          },
          S36: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                branch: {
                  type: 'structure',
                  required: ['fullyQualifiedName'],
                  members: {
                    fullyQualifiedName: {},
                    description: {},
                    deprecationMessage: {},
                    comment: {}
                  }
                },
                sensor: {
                  type: 'structure',
                  required: ['fullyQualifiedName', 'dataType'],
                  members: {
                    fullyQualifiedName: {},
                    dataType: {},
                    description: {},
                    unit: {},
                    allowedValues: {
                      shape: 'S33'
                    },
                    min: {
                      type: 'double'
                    },
                    max: {
                      type: 'double'
                    },
                    deprecationMessage: {},
                    comment: {},
                    structFullyQualifiedName: {}
                  }
                },
                actuator: {
                  type: 'structure',
                  required: ['fullyQualifiedName', 'dataType'],
                  members: {
                    fullyQualifiedName: {},
                    dataType: {},
                    description: {},
                    unit: {},
                    allowedValues: {
                      shape: 'S33'
                    },
                    min: {
                      type: 'double'
                    },
                    max: {
                      type: 'double'
                    },
                    assignedValue: {
                      deprecated: true,
                      deprecatedMessage: 'assignedValue is no longer in use'
                    },
                    deprecationMessage: {},
                    comment: {},
                    structFullyQualifiedName: {}
                  }
                },
                attribute: {
                  type: 'structure',
                  required: ['fullyQualifiedName', 'dataType'],
                  members: {
                    fullyQualifiedName: {},
                    dataType: {},
                    description: {},
                    unit: {},
                    allowedValues: {
                      shape: 'S33'
                    },
                    min: {
                      type: 'double'
                    },
                    max: {
                      type: 'double'
                    },
                    assignedValue: {
                      deprecated: true,
                      deprecatedMessage: 'assignedValue is no longer in use'
                    },
                    defaultValue: {},
                    deprecationMessage: {},
                    comment: {}
                  }
                },
                struct: {
                  type: 'structure',
                  required: ['fullyQualifiedName'],
                  members: {
                    fullyQualifiedName: {},
                    description: {},
                    deprecationMessage: {},
                    comment: {}
                  }
                },
                property: {
                  type: 'structure',
                  required: ['fullyQualifiedName', 'dataType'],
                  members: {
                    fullyQualifiedName: {},
                    dataType: {},
                    dataEncoding: {},
                    description: {},
                    deprecationMessage: {},
                    comment: {},
                    structFullyQualifiedName: {}
                  }
                }
              },
              union: true
            }
          },
          S4e: {
            type: 'structure',
            required: ['logType'],
            members: {
              logType: {},
              logGroupName: {}
            }
          },
          S6u: {
            type: 'structure',
            required: ['timestreamDatabaseName', 'timestreamTableName'],
            members: {
              timestreamDatabaseName: {},
              timestreamTableName: {}
            }
          },
          S6v: {
            type: 'structure',
            required: ['roleArn'],
            members: {
              roleArn: {}
            }
          },
          S7c: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=cfcd4bb1d3f0e64802f3b7af64e81495754bdfbe.js.map