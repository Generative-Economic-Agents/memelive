System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-10-12',
          endpointPrefix: 'deadline',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWSDeadlineCloud',
          serviceId: 'deadline',
          signatureVersion: 'v4',
          signingName: 'deadline',
          uid: 'deadline-2023-10-12'
        },
        operations: {
          AssociateMemberToFarm: {
            http: {
              method: 'PUT',
              requestUri: '/2023-10-12/farms/{farmId}/members/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'identityStoreId', 'membershipLevel', 'principalId', 'principalType'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                identityStoreId: {},
                membershipLevel: {},
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                principalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          AssociateMemberToFleet: {
            http: {
              method: 'PUT',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'identityStoreId', 'membershipLevel', 'principalId', 'principalType'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                identityStoreId: {},
                membershipLevel: {},
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                principalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          AssociateMemberToJob: {
            http: {
              method: 'PUT',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'identityStoreId', 'jobId', 'membershipLevel', 'principalId', 'principalType', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                identityStoreId: {},
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                membershipLevel: {},
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                principalType: {},
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          AssociateMemberToQueue: {
            http: {
              method: 'PUT',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'identityStoreId', 'membershipLevel', 'principalId', 'principalType', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                identityStoreId: {},
                membershipLevel: {},
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                principalType: {},
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          AssumeFleetRoleForRead: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/read-roles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['credentials'],
              members: {
                credentials: {
                  shape: 'Sj'
                }
              },
              sensitive: true
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          AssumeFleetRoleForWorker: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/fleet-roles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'workerId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                workerId: {
                  location: 'uri',
                  locationName: 'workerId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['credentials'],
              members: {
                credentials: {
                  shape: 'Sj'
                }
              },
              sensitive: true
            },
            endpoint: {
              hostPrefix: 'scheduling.'
            }
          },
          AssumeQueueRoleForRead: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/read-roles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['credentials'],
              members: {
                credentials: {
                  shape: 'Sj'
                }
              },
              sensitive: true
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          AssumeQueueRoleForUser: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/user-roles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['credentials'],
              members: {
                credentials: {
                  shape: 'Sj'
                }
              },
              sensitive: true
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          AssumeQueueRoleForWorker: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/queue-roles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'queueId', 'workerId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                queueId: {
                  location: 'querystring',
                  locationName: 'queueId'
                },
                workerId: {
                  location: 'uri',
                  locationName: 'workerId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                credentials: {
                  shape: 'Sj'
                }
              },
              sensitive: true
            },
            endpoint: {
              hostPrefix: 'scheduling.'
            }
          },
          BatchGetJobEntity: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/batchGetJobEntity',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'identifiers', 'workerId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                identifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      environmentDetails: {
                        type: 'structure',
                        required: ['environmentId', 'jobId'],
                        members: {
                          environmentId: {},
                          jobId: {}
                        }
                      },
                      jobAttachmentDetails: {
                        type: 'structure',
                        required: ['jobId'],
                        members: {
                          jobId: {}
                        }
                      },
                      jobDetails: {
                        type: 'structure',
                        required: ['jobId'],
                        members: {
                          jobId: {}
                        }
                      },
                      stepDetails: {
                        type: 'structure',
                        required: ['jobId', 'stepId'],
                        members: {
                          jobId: {},
                          stepId: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                workerId: {
                  location: 'uri',
                  locationName: 'workerId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['entities', 'errors'],
              members: {
                entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      environmentDetails: {
                        type: 'structure',
                        required: ['environmentId', 'jobId', 'schemaVersion', 'template'],
                        members: {
                          environmentId: {},
                          jobId: {},
                          schemaVersion: {},
                          template: {
                            shape: 'S1b'
                          }
                        }
                      },
                      jobAttachmentDetails: {
                        type: 'structure',
                        required: ['attachments', 'jobId'],
                        members: {
                          attachments: {
                            shape: 'S1d'
                          },
                          jobId: {}
                        }
                      },
                      jobDetails: {
                        type: 'structure',
                        required: ['jobId', 'logGroupName', 'schemaVersion'],
                        members: {
                          jobAttachmentSettings: {
                            shape: 'S1p'
                          },
                          jobId: {},
                          jobRunAsUser: {
                            shape: 'S1s'
                          },
                          logGroupName: {},
                          parameters: {
                            shape: 'S20'
                          },
                          pathMappingRules: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['destinationPath', 'sourcePath', 'sourcePathFormat'],
                              members: {
                                destinationPath: {},
                                sourcePath: {},
                                sourcePathFormat: {}
                              },
                              sensitive: true
                            }
                          },
                          queueRoleArn: {},
                          schemaVersion: {}
                        }
                      },
                      stepDetails: {
                        type: 'structure',
                        required: ['dependencies', 'jobId', 'schemaVersion', 'stepId', 'template'],
                        members: {
                          dependencies: {
                            type: 'list',
                            member: {}
                          },
                          jobId: {},
                          schemaVersion: {},
                          stepId: {},
                          template: {
                            shape: 'S1b'
                          }
                        }
                      }
                    },
                    union: true
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      environmentDetails: {
                        type: 'structure',
                        required: ['code', 'environmentId', 'jobId', 'message'],
                        members: {
                          code: {},
                          environmentId: {},
                          jobId: {},
                          message: {}
                        }
                      },
                      jobAttachmentDetails: {
                        type: 'structure',
                        required: ['code', 'jobId', 'message'],
                        members: {
                          code: {},
                          jobId: {},
                          message: {}
                        }
                      },
                      jobDetails: {
                        type: 'structure',
                        required: ['code', 'jobId', 'message'],
                        members: {
                          code: {},
                          jobId: {},
                          message: {}
                        }
                      },
                      stepDetails: {
                        type: 'structure',
                        required: ['code', 'jobId', 'message', 'stepId'],
                        members: {
                          code: {},
                          jobId: {},
                          message: {},
                          stepId: {}
                        }
                      }
                    },
                    union: true
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'scheduling.'
            }
          },
          CopyJobTemplate: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/template',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'targetS3Location'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                targetS3Location: {
                  type: 'structure',
                  required: ['bucketName', 'key'],
                  members: {
                    bucketName: {},
                    key: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['templateType'],
              members: {
                templateType: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          CreateBudget: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/budgets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actions', 'approximateDollarLimit', 'displayName', 'farmId', 'schedule', 'usageTrackingResource'],
              members: {
                actions: {
                  shape: 'S2o'
                },
                approximateDollarLimit: {
                  type: 'float'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                schedule: {
                  shape: 'S2w'
                },
                usageTrackingResource: {
                  shape: 'S30'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['budgetId'],
              members: {
                budgetId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateFarm: {
            http: {
              requestUri: '/2023-10-12/farms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['displayName'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                kmsKeyArn: {},
                tags: {
                  shape: 'S35'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['farmId'],
              members: {
                farmId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateFleet: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/fleets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuration', 'displayName', 'farmId', 'maxWorkerCount', 'roleArn'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                configuration: {
                  shape: 'S38'
                },
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                maxWorkerCount: {
                  type: 'integer'
                },
                minWorkerCount: {
                  type: 'integer'
                },
                roleArn: {},
                tags: {
                  shape: 'S35'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['fleetId'],
              members: {
                fleetId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateJob: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['farmId', 'priority', 'queueId', 'template', 'templateType'],
              members: {
                attachments: {
                  shape: 'S1d'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                maxFailedTasksCount: {
                  type: 'integer'
                },
                maxRetriesPerTask: {
                  type: 'integer'
                },
                parameters: {
                  shape: 'S20'
                },
                priority: {
                  type: 'integer'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                storageProfileId: {},
                targetTaskRunStatus: {},
                template: {
                  type: 'string',
                  sensitive: true
                },
                templateType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateLicenseEndpoint: {
            http: {
              requestUri: '/2023-10-12/license-endpoints',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['securityGroupIds', 'subnetIds', 'vpcId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                securityGroupIds: {
                  type: 'list',
                  member: {}
                },
                subnetIds: {
                  type: 'list',
                  member: {}
                },
                tags: {
                  shape: 'S35'
                },
                vpcId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['licenseEndpointId'],
              members: {
                licenseEndpointId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateMonitor: {
            http: {
              requestUri: '/2023-10-12/monitors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['displayName', 'identityCenterInstanceArn', 'roleArn', 'subdomain'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                displayName: {},
                identityCenterInstanceArn: {},
                roleArn: {},
                subdomain: {}
              }
            },
            output: {
              type: 'structure',
              required: ['identityCenterApplicationArn', 'monitorId'],
              members: {
                identityCenterApplicationArn: {},
                monitorId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateQueue: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/queues',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['displayName', 'farmId'],
              members: {
                allowedStorageProfileIds: {
                  shape: 'S4v'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                defaultBudgetAction: {},
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobAttachmentSettings: {
                  shape: 'S1p'
                },
                jobRunAsUser: {
                  shape: 'S1s'
                },
                requiredFileSystemLocationNames: {
                  shape: 'S4x'
                },
                roleArn: {},
                tags: {
                  shape: 'S35'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['queueId'],
              members: {
                queueId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateQueueEnvironment: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/environments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'priority', 'queueId', 'template', 'templateType'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                priority: {
                  type: 'integer'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                template: {
                  shape: 'S51'
                },
                templateType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['queueEnvironmentId'],
              members: {
                queueEnvironmentId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateQueueFleetAssociation: {
            http: {
              method: 'PUT',
              requestUri: '/2023-10-12/farms/{farmId}/queue-fleet-associations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {},
                queueId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateStorageProfile: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/storage-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['displayName', 'farmId', 'osFamily'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fileSystemLocations: {
                  shape: 'S58'
                },
                osFamily: {}
              }
            },
            output: {
              type: 'structure',
              required: ['storageProfileId'],
              members: {
                storageProfileId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          CreateWorker: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                hostProperties: {
                  shape: 'S5e'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workerId'],
              members: {
                workerId: {}
              }
            },
            endpoint: {
              hostPrefix: 'scheduling.'
            },
            idempotent: true
          },
          DeleteBudget: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/budgets/{budgetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['budgetId', 'farmId'],
              members: {
                budgetId: {
                  location: 'uri',
                  locationName: 'budgetId'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteFarm: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteFleet: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteLicenseEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/license-endpoints/{licenseEndpointId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['licenseEndpointId'],
              members: {
                licenseEndpointId: {
                  location: 'uri',
                  locationName: 'licenseEndpointId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteMeteredProduct: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['licenseEndpointId', 'productId'],
              members: {
                licenseEndpointId: {
                  location: 'uri',
                  locationName: 'licenseEndpointId'
                },
                productId: {
                  location: 'uri',
                  locationName: 'productId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteMonitor: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/monitors/{monitorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorId'],
              members: {
                monitorId: {
                  location: 'uri',
                  locationName: 'monitorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteQueue: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteQueueEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueEnvironmentId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                queueEnvironmentId: {
                  location: 'uri',
                  locationName: 'queueEnvironmentId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteQueueFleetAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteStorageProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'storageProfileId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                storageProfileId: {
                  location: 'uri',
                  locationName: 'storageProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DeleteWorker: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'workerId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                workerId: {
                  location: 'uri',
                  locationName: 'workerId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DisassociateMemberFromFarm: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/members/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'principalId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DisassociateMemberFromFleet: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'principalId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DisassociateMemberFromJob: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'principalId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          DisassociateMemberFromQueue: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'principalId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          GetBudget: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/budgets/{budgetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['budgetId', 'farmId'],
              members: {
                budgetId: {
                  location: 'uri',
                  locationName: 'budgetId'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['actions', 'approximateDollarLimit', 'budgetId', 'createdAt', 'createdBy', 'displayName', 'schedule', 'status', 'usageTrackingResource', 'usages'],
              members: {
                actions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['thresholdPercentage', 'type'],
                    members: {
                      description: {
                        shape: 'S2q'
                      },
                      thresholdPercentage: {
                        type: 'float'
                      },
                      type: {}
                    }
                  }
                },
                approximateDollarLimit: {
                  type: 'float'
                },
                budgetId: {},
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                queueStoppedAt: {
                  shape: 'S6n'
                },
                schedule: {
                  shape: 'S2w'
                },
                status: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {},
                usageTrackingResource: {
                  shape: 'S30'
                },
                usages: {
                  shape: 'S6q'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetFarm: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'displayName', 'farmId', 'kmsKeyArn'],
              members: {
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {},
                kmsKeyArn: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetFleet: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuration', 'createdAt', 'createdBy', 'displayName', 'farmId', 'fleetId', 'maxWorkerCount', 'minWorkerCount', 'roleArn', 'status', 'workerCount'],
              members: {
                autoScalingStatus: {},
                capabilities: {
                  type: 'structure',
                  members: {
                    amounts: {
                      type: 'list',
                      member: {
                        shape: 'S3k'
                      }
                    },
                    attributes: {
                      type: 'list',
                      member: {
                        shape: 'S3o'
                      }
                    }
                  }
                },
                configuration: {
                  shape: 'S38'
                },
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {},
                fleetId: {},
                maxWorkerCount: {
                  type: 'integer'
                },
                minWorkerCount: {
                  type: 'integer'
                },
                roleArn: {},
                status: {},
                targetWorkerCount: {
                  type: 'integer'
                },
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {},
                workerCount: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetJob: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'jobId', 'lifecycleStatus', 'lifecycleStatusMessage', 'name', 'priority'],
              members: {
                attachments: {
                  shape: 'S1d'
                },
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                description: {
                  type: 'string',
                  sensitive: true
                },
                endedAt: {
                  shape: 'S73'
                },
                jobId: {},
                lifecycleStatus: {},
                lifecycleStatusMessage: {},
                maxFailedTasksCount: {
                  type: 'integer'
                },
                maxRetriesPerTask: {
                  type: 'integer'
                },
                name: {},
                parameters: {
                  shape: 'S20'
                },
                priority: {
                  type: 'integer'
                },
                startedAt: {
                  shape: 'S76'
                },
                storageProfileId: {},
                targetTaskRunStatus: {},
                taskRunStatus: {},
                taskRunStatusCounts: {
                  shape: 'S79'
                },
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetLicenseEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/license-endpoints/{licenseEndpointId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['licenseEndpointId'],
              members: {
                licenseEndpointId: {
                  location: 'uri',
                  locationName: 'licenseEndpointId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['licenseEndpointId', 'status', 'statusMessage'],
              members: {
                dnsName: {},
                licenseEndpointId: {},
                securityGroupIds: {
                  type: 'list',
                  member: {}
                },
                status: {},
                statusMessage: {},
                subnetIds: {
                  type: 'list',
                  member: {}
                },
                vpcId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetMonitor: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/monitors/{monitorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorId'],
              members: {
                monitorId: {
                  location: 'uri',
                  locationName: 'monitorId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'displayName', 'identityCenterApplicationArn', 'identityCenterInstanceArn', 'monitorId', 'roleArn', 'subdomain', 'url'],
              members: {
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                displayName: {},
                identityCenterApplicationArn: {},
                identityCenterInstanceArn: {},
                monitorId: {},
                roleArn: {},
                subdomain: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {},
                url: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetQueue: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'defaultBudgetAction', 'displayName', 'farmId', 'queueId', 'status'],
              members: {
                allowedStorageProfileIds: {
                  shape: 'S4v'
                },
                blockedReason: {},
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                defaultBudgetAction: {},
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {},
                jobAttachmentSettings: {
                  shape: 'S1p'
                },
                jobRunAsUser: {
                  shape: 'S1s'
                },
                queueId: {},
                requiredFileSystemLocationNames: {
                  shape: 'S4x'
                },
                roleArn: {},
                status: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetQueueEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueEnvironmentId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                queueEnvironmentId: {
                  location: 'uri',
                  locationName: 'queueEnvironmentId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'name', 'priority', 'queueEnvironmentId', 'template', 'templateType'],
              members: {
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                name: {},
                priority: {
                  type: 'integer'
                },
                queueEnvironmentId: {},
                template: {
                  shape: 'S51'
                },
                templateType: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetQueueFleetAssociation: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'fleetId', 'queueId', 'status'],
              members: {
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                fleetId: {},
                queueId: {},
                status: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetSession: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'sessionId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['fleetId', 'lifecycleStatus', 'log', 'sessionId', 'startedAt', 'workerId'],
              members: {
                endedAt: {
                  shape: 'S73'
                },
                fleetId: {},
                hostProperties: {
                  shape: 'S7x'
                },
                lifecycleStatus: {},
                log: {
                  shape: 'S7z'
                },
                sessionId: {},
                startedAt: {
                  shape: 'S76'
                },
                targetLifecycleStatus: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {},
                workerId: {},
                workerLog: {
                  shape: 'S7z'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetSessionAction: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions/{sessionActionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'sessionActionId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                sessionActionId: {
                  location: 'uri',
                  locationName: 'sessionActionId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['definition', 'sessionActionId', 'sessionId', 'status'],
              members: {
                definition: {
                  type: 'structure',
                  members: {
                    envEnter: {
                      type: 'structure',
                      required: ['environmentId'],
                      members: {
                        environmentId: {}
                      }
                    },
                    envExit: {
                      type: 'structure',
                      required: ['environmentId'],
                      members: {
                        environmentId: {}
                      }
                    },
                    syncInputJobAttachments: {
                      type: 'structure',
                      members: {
                        stepId: {}
                      }
                    },
                    taskRun: {
                      type: 'structure',
                      required: ['parameters', 'stepId', 'taskId'],
                      members: {
                        parameters: {
                          shape: 'S8d'
                        },
                        stepId: {},
                        taskId: {}
                      }
                    }
                  },
                  union: true
                },
                endedAt: {
                  shape: 'S73'
                },
                processExitCode: {
                  type: 'integer'
                },
                progressMessage: {
                  shape: 'S8h'
                },
                progressPercent: {
                  type: 'float'
                },
                sessionActionId: {},
                sessionId: {},
                startedAt: {
                  shape: 'S76'
                },
                status: {},
                workerUpdatedAt: {
                  shape: 'S8k'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetSessionsStatisticsAggregation: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/sessions-statistics-aggregation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['aggregationId', 'farmId'],
              members: {
                aggregationId: {
                  location: 'querystring',
                  locationName: 'aggregationId'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
              required: ['status'],
              members: {
                nextToken: {},
                statistics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['costInUsd', 'count', 'runtimeInSeconds'],
                    members: {
                      aggregationEndTime: {
                        shape: 'Sl'
                      },
                      aggregationStartTime: {
                        shape: 'Sl'
                      },
                      costInUsd: {
                        shape: 'S8r'
                      },
                      count: {
                        type: 'integer'
                      },
                      fleetId: {},
                      instanceType: {},
                      jobId: {},
                      jobName: {},
                      licenseProduct: {},
                      queueId: {},
                      runtimeInSeconds: {
                        shape: 'S8r'
                      },
                      usageType: {},
                      userId: {}
                    }
                  }
                },
                status: {},
                statusMessage: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetStep: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'stepId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                stepId: {
                  location: 'uri',
                  locationName: 'stepId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'lifecycleStatus', 'name', 'stepId', 'taskRunStatus', 'taskRunStatusCounts'],
              members: {
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                dependencyCounts: {
                  shape: 'S8z'
                },
                description: {
                  type: 'string',
                  sensitive: true
                },
                endedAt: {
                  shape: 'S73'
                },
                lifecycleStatus: {},
                lifecycleStatusMessage: {},
                name: {},
                parameterSpace: {
                  shape: 'S93'
                },
                requiredCapabilities: {
                  type: 'structure',
                  required: ['amounts', 'attributes'],
                  members: {
                    amounts: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name'],
                        members: {
                          max: {
                            type: 'double'
                          },
                          min: {
                            type: 'double'
                          },
                          name: {},
                          value: {
                            type: 'double'
                          }
                        }
                      }
                    },
                    attributes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name'],
                        members: {
                          allOf: {
                            shape: 'S9e'
                          },
                          anyOf: {
                            shape: 'S9e'
                          },
                          name: {}
                        }
                      }
                    }
                  }
                },
                startedAt: {
                  shape: 'S76'
                },
                stepId: {},
                targetTaskRunStatus: {},
                taskRunStatus: {},
                taskRunStatusCounts: {
                  shape: 'S79'
                },
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetStorageProfile: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'storageProfileId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                storageProfileId: {
                  location: 'uri',
                  locationName: 'storageProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'displayName', 'osFamily', 'storageProfileId'],
              members: {
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                displayName: {},
                fileSystemLocations: {
                  shape: 'S58'
                },
                osFamily: {},
                storageProfileId: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetStorageProfileForQueue: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles/{storageProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId', 'storageProfileId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                storageProfileId: {
                  location: 'uri',
                  locationName: 'storageProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['displayName', 'osFamily', 'storageProfileId'],
              members: {
                displayName: {},
                fileSystemLocations: {
                  shape: 'S58'
                },
                osFamily: {},
                storageProfileId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetTask: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'stepId', 'taskId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                stepId: {
                  location: 'uri',
                  locationName: 'stepId'
                },
                taskId: {
                  location: 'uri',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'runStatus', 'taskId'],
              members: {
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                endedAt: {
                  shape: 'S73'
                },
                failureRetryCount: {
                  type: 'integer'
                },
                latestSessionActionId: {},
                parameters: {
                  shape: 'S8d'
                },
                runStatus: {},
                startedAt: {
                  shape: 'S76'
                },
                targetRunStatus: {},
                taskId: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          GetWorker: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'workerId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                workerId: {
                  location: 'uri',
                  locationName: 'workerId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'farmId', 'fleetId', 'status', 'workerId'],
              members: {
                createdAt: {
                  shape: 'S6l'
                },
                createdBy: {},
                farmId: {},
                fleetId: {},
                hostProperties: {
                  shape: 'S7x'
                },
                log: {
                  shape: 'S7z'
                },
                status: {},
                updatedAt: {
                  shape: 'S6n'
                },
                updatedBy: {},
                workerId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListAvailableMeteredProducts: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/metered-products',
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
              required: ['meteredProducts'],
              members: {
                meteredProducts: {
                  shape: 'S9t'
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListBudgets: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/budgets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['budgets'],
              members: {
                budgets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['approximateDollarLimit', 'budgetId', 'createdAt', 'createdBy', 'displayName', 'status', 'usageTrackingResource', 'usages'],
                    members: {
                      approximateDollarLimit: {
                        type: 'float'
                      },
                      budgetId: {},
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      description: {
                        shape: 'S2q'
                      },
                      displayName: {},
                      status: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {},
                      usageTrackingResource: {
                        shape: 'S30'
                      },
                      usages: {
                        shape: 'S6q'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListFarmMembers: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/members',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
              required: ['members'],
              members: {
                members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['farmId', 'identityStoreId', 'membershipLevel', 'principalId', 'principalType'],
                    members: {
                      farmId: {},
                      identityStoreId: {},
                      membershipLevel: {},
                      principalId: {},
                      principalType: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListFarms: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms',
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
                },
                principalId: {
                  location: 'querystring',
                  locationName: 'principalId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['farms'],
              members: {
                farms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'displayName', 'farmId'],
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      displayName: {},
                      farmId: {},
                      kmsKeyArn: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListFleetMembers: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/members',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
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
              required: ['members'],
              members: {
                members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['farmId', 'fleetId', 'identityStoreId', 'membershipLevel', 'principalId', 'principalType'],
                    members: {
                      farmId: {},
                      fleetId: {},
                      identityStoreId: {},
                      membershipLevel: {},
                      principalId: {},
                      principalType: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListFleets: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                displayName: {
                  location: 'querystring',
                  locationName: 'displayName'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
                principalId: {
                  location: 'querystring',
                  locationName: 'principalId'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['fleets'],
              members: {
                fleets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['configuration', 'createdAt', 'createdBy', 'displayName', 'farmId', 'fleetId', 'maxWorkerCount', 'minWorkerCount', 'status', 'workerCount'],
                    members: {
                      autoScalingStatus: {},
                      configuration: {
                        shape: 'S38'
                      },
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      displayName: {},
                      farmId: {},
                      fleetId: {},
                      maxWorkerCount: {
                        type: 'integer'
                      },
                      minWorkerCount: {
                        type: 'integer'
                      },
                      status: {},
                      targetWorkerCount: {
                        type: 'integer'
                      },
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {},
                      workerCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListJobMembers: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['members'],
              members: {
                members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['farmId', 'identityStoreId', 'jobId', 'membershipLevel', 'principalId', 'principalType', 'queueId'],
                    members: {
                      farmId: {},
                      identityStoreId: {},
                      jobId: {},
                      membershipLevel: {},
                      principalId: {},
                      principalType: {},
                      queueId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListJobs: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
                principalId: {
                  location: 'querystring',
                  locationName: 'principalId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobs'],
              members: {
                jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'jobId', 'lifecycleStatus', 'lifecycleStatusMessage', 'name', 'priority'],
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      endedAt: {
                        shape: 'S73'
                      },
                      jobId: {},
                      lifecycleStatus: {},
                      lifecycleStatusMessage: {},
                      maxFailedTasksCount: {
                        type: 'integer'
                      },
                      maxRetriesPerTask: {
                        type: 'integer'
                      },
                      name: {},
                      priority: {
                        type: 'integer'
                      },
                      startedAt: {
                        shape: 'S76'
                      },
                      targetTaskRunStatus: {},
                      taskRunStatus: {},
                      taskRunStatusCounts: {
                        shape: 'S79'
                      },
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListLicenseEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/license-endpoints',
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
              required: ['licenseEndpoints'],
              members: {
                licenseEndpoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      licenseEndpointId: {},
                      status: {},
                      statusMessage: {},
                      vpcId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListMeteredProducts: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['licenseEndpointId'],
              members: {
                licenseEndpointId: {
                  location: 'uri',
                  locationName: 'licenseEndpointId'
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
              required: ['meteredProducts'],
              members: {
                meteredProducts: {
                  shape: 'S9t'
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListMonitors: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/monitors',
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
              required: ['monitors'],
              members: {
                monitors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'displayName', 'identityCenterApplicationArn', 'identityCenterInstanceArn', 'monitorId', 'roleArn', 'subdomain', 'url'],
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      displayName: {},
                      identityCenterApplicationArn: {},
                      identityCenterInstanceArn: {},
                      monitorId: {},
                      roleArn: {},
                      subdomain: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {},
                      url: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListQueueEnvironments: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/environments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['environments'],
              members: {
                environments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'priority', 'queueEnvironmentId'],
                    members: {
                      name: {},
                      priority: {
                        type: 'integer'
                      },
                      queueEnvironmentId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListQueueFleetAssociations: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queue-fleet-associations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'querystring',
                  locationName: 'fleetId'
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
                queueId: {
                  location: 'querystring',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['queueFleetAssociations'],
              members: {
                nextToken: {},
                queueFleetAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'fleetId', 'queueId', 'status'],
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      fleetId: {},
                      queueId: {},
                      status: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListQueueMembers: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/members',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['members'],
              members: {
                members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['farmId', 'identityStoreId', 'membershipLevel', 'principalId', 'principalType', 'queueId'],
                    members: {
                      farmId: {},
                      identityStoreId: {},
                      membershipLevel: {},
                      principalId: {},
                      principalType: {},
                      queueId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListQueues: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
                principalId: {
                  location: 'querystring',
                  locationName: 'principalId'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['queues'],
              members: {
                nextToken: {},
                queues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'defaultBudgetAction', 'displayName', 'farmId', 'queueId', 'status'],
                    members: {
                      blockedReason: {},
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      defaultBudgetAction: {},
                      displayName: {},
                      farmId: {},
                      queueId: {},
                      status: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListSessionActions: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                sessionId: {
                  location: 'querystring',
                  locationName: 'sessionId'
                },
                taskId: {
                  location: 'querystring',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sessionActions'],
              members: {
                nextToken: {},
                sessionActions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['definition', 'sessionActionId', 'status'],
                    members: {
                      definition: {
                        type: 'structure',
                        members: {
                          envEnter: {
                            type: 'structure',
                            required: ['environmentId'],
                            members: {
                              environmentId: {}
                            }
                          },
                          envExit: {
                            type: 'structure',
                            required: ['environmentId'],
                            members: {
                              environmentId: {}
                            }
                          },
                          syncInputJobAttachments: {
                            type: 'structure',
                            members: {
                              stepId: {}
                            }
                          },
                          taskRun: {
                            type: 'structure',
                            required: ['stepId', 'taskId'],
                            members: {
                              stepId: {},
                              taskId: {}
                            }
                          }
                        },
                        union: true
                      },
                      endedAt: {
                        shape: 'S73'
                      },
                      progressPercent: {
                        type: 'float'
                      },
                      sessionActionId: {},
                      startedAt: {
                        shape: 'S76'
                      },
                      status: {},
                      workerUpdatedAt: {
                        shape: 'S8k'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListSessions: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sessions'],
              members: {
                nextToken: {},
                sessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['fleetId', 'lifecycleStatus', 'sessionId', 'startedAt', 'workerId'],
                    members: {
                      endedAt: {
                        shape: 'S73'
                      },
                      fleetId: {},
                      lifecycleStatus: {},
                      sessionId: {},
                      startedAt: {
                        shape: 'S76'
                      },
                      targetLifecycleStatus: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {},
                      workerId: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListSessionsForWorker: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'workerId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
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
                workerId: {
                  location: 'uri',
                  locationName: 'workerId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sessions'],
              members: {
                nextToken: {},
                sessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobId', 'lifecycleStatus', 'queueId', 'sessionId', 'startedAt'],
                    members: {
                      endedAt: {
                        shape: 'S73'
                      },
                      jobId: {},
                      lifecycleStatus: {},
                      queueId: {},
                      sessionId: {},
                      startedAt: {
                        shape: 'S76'
                      },
                      targetLifecycleStatus: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListStepConsumers: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/consumers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'stepId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                stepId: {
                  location: 'uri',
                  locationName: 'stepId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['consumers'],
              members: {
                consumers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['status', 'stepId'],
                    members: {
                      status: {},
                      stepId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListStepDependencies: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/dependencies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'stepId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                stepId: {
                  location: 'uri',
                  locationName: 'stepId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dependencies'],
              members: {
                dependencies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['status', 'stepId'],
                    members: {
                      status: {},
                      stepId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListSteps: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['steps'],
              members: {
                nextToken: {},
                steps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'lifecycleStatus', 'name', 'stepId', 'taskRunStatus', 'taskRunStatusCounts'],
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      dependencyCounts: {
                        shape: 'S8z'
                      },
                      endedAt: {
                        shape: 'S73'
                      },
                      lifecycleStatus: {},
                      lifecycleStatusMessage: {},
                      name: {},
                      startedAt: {
                        shape: 'S76'
                      },
                      stepId: {},
                      targetTaskRunStatus: {},
                      taskRunStatus: {},
                      taskRunStatusCounts: {
                        shape: 'S79'
                      },
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListStorageProfiles: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/storage-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
              required: ['storageProfiles'],
              members: {
                nextToken: {},
                storageProfiles: {
                  shape: 'Scd'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListStorageProfilesForQueue: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['storageProfiles'],
              members: {
                nextToken: {},
                storageProfiles: {
                  shape: 'Scd'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/tags/{resourceArn}',
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
                  shape: 'S35'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListTasks: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'stepId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
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
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                stepId: {
                  location: 'uri',
                  locationName: 'stepId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['tasks'],
              members: {
                nextToken: {},
                tasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'runStatus', 'taskId'],
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      endedAt: {
                        shape: 'S73'
                      },
                      failureRetryCount: {
                        type: 'integer'
                      },
                      latestSessionActionId: {},
                      parameters: {
                        shape: 'S8d'
                      },
                      runStatus: {},
                      startedAt: {
                        shape: 'S76'
                      },
                      targetRunStatus: {},
                      taskId: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          ListWorkers: {
            http: {
              method: 'GET',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
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
              required: ['workers'],
              members: {
                nextToken: {},
                workers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'farmId', 'fleetId', 'status', 'workerId'],
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      farmId: {},
                      fleetId: {},
                      hostProperties: {
                        shape: 'S7x'
                      },
                      log: {
                        shape: 'S7z'
                      },
                      status: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {},
                      workerId: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          PutMeteredProduct: {
            http: {
              method: 'PUT',
              requestUri: '/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['licenseEndpointId', 'productId'],
              members: {
                licenseEndpointId: {
                  location: 'uri',
                  locationName: 'licenseEndpointId'
                },
                productId: {
                  location: 'uri',
                  locationName: 'productId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          SearchJobs: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/search/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'itemOffset', 'queueIds'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                filterExpressions: {
                  shape: 'Scu'
                },
                itemOffset: {
                  type: 'integer'
                },
                pageSize: {
                  type: 'integer'
                },
                queueIds: {
                  type: 'list',
                  member: {}
                },
                sortExpressions: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobs', 'totalResults'],
              members: {
                jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      endedAt: {
                        shape: 'S73'
                      },
                      jobId: {},
                      jobParameters: {
                        shape: 'S20'
                      },
                      lifecycleStatus: {},
                      lifecycleStatusMessage: {},
                      maxFailedTasksCount: {
                        type: 'integer'
                      },
                      maxRetriesPerTask: {
                        type: 'integer'
                      },
                      name: {},
                      priority: {
                        type: 'integer'
                      },
                      queueId: {},
                      startedAt: {
                        shape: 'S76'
                      },
                      targetTaskRunStatus: {},
                      taskRunStatus: {},
                      taskRunStatusCounts: {
                        shape: 'S79'
                      }
                    }
                  }
                },
                nextItemOffset: {
                  type: 'integer'
                },
                totalResults: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          SearchSteps: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/search/steps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'itemOffset', 'queueIds'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                filterExpressions: {
                  shape: 'Scu'
                },
                itemOffset: {
                  type: 'integer'
                },
                jobId: {},
                pageSize: {
                  type: 'integer'
                },
                queueIds: {
                  type: 'list',
                  member: {}
                },
                sortExpressions: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['steps', 'totalResults'],
              members: {
                nextItemOffset: {
                  type: 'integer'
                },
                steps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      endedAt: {
                        shape: 'S73'
                      },
                      jobId: {},
                      lifecycleStatus: {},
                      lifecycleStatusMessage: {},
                      name: {},
                      parameterSpace: {
                        shape: 'S93'
                      },
                      queueId: {},
                      startedAt: {
                        shape: 'S76'
                      },
                      stepId: {},
                      targetTaskRunStatus: {},
                      taskRunStatus: {},
                      taskRunStatusCounts: {
                        shape: 'S79'
                      }
                    }
                  }
                },
                totalResults: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          SearchTasks: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/search/tasks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'itemOffset', 'queueIds'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                filterExpressions: {
                  shape: 'Scu'
                },
                itemOffset: {
                  type: 'integer'
                },
                jobId: {},
                pageSize: {
                  type: 'integer'
                },
                queueIds: {
                  type: 'list',
                  member: {}
                },
                sortExpressions: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['tasks', 'totalResults'],
              members: {
                nextItemOffset: {
                  type: 'integer'
                },
                tasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      endedAt: {
                        shape: 'S73'
                      },
                      failureRetryCount: {
                        type: 'integer'
                      },
                      jobId: {},
                      parameters: {
                        shape: 'S8d'
                      },
                      queueId: {},
                      runStatus: {},
                      startedAt: {
                        shape: 'S76'
                      },
                      stepId: {},
                      targetRunStatus: {},
                      taskId: {}
                    }
                  }
                },
                totalResults: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          SearchWorkers: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/search/workers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetIds', 'itemOffset'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                filterExpressions: {
                  shape: 'Scu'
                },
                fleetIds: {
                  type: 'list',
                  member: {}
                },
                itemOffset: {
                  type: 'integer'
                },
                pageSize: {
                  type: 'integer'
                },
                sortExpressions: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['totalResults', 'workers'],
              members: {
                nextItemOffset: {
                  type: 'integer'
                },
                totalResults: {
                  type: 'integer'
                },
                workers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        shape: 'S6l'
                      },
                      createdBy: {},
                      fleetId: {},
                      hostProperties: {
                        shape: 'S7x'
                      },
                      status: {},
                      updatedAt: {
                        shape: 'S6n'
                      },
                      updatedBy: {},
                      workerId: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          StartSessionsStatisticsAggregation: {
            http: {
              requestUri: '/2023-10-12/farms/{farmId}/sessions-statistics-aggregation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endTime', 'farmId', 'groupBy', 'resourceIds', 'startTime', 'statistics'],
              members: {
                endTime: {
                  shape: 'Sl'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                groupBy: {
                  type: 'list',
                  member: {}
                },
                period: {},
                resourceIds: {
                  type: 'structure',
                  members: {
                    fleetIds: {
                      type: 'list',
                      member: {}
                    },
                    queueIds: {
                      type: 'list',
                      member: {}
                    }
                  },
                  union: true
                },
                startTime: {
                  shape: 'Sl'
                },
                statistics: {
                  type: 'list',
                  member: {}
                },
                timezone: {}
              }
            },
            output: {
              type: 'structure',
              required: ['aggregationId'],
              members: {
                aggregationId: {}
              }
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          TagResource: {
            http: {
              requestUri: '/2023-10-12/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S35'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/2023-10-12/tags/{resourceArn}',
              responseCode: 204
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
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateBudget: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/budgets/{budgetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['budgetId', 'farmId'],
              members: {
                actionsToAdd: {
                  shape: 'S2o'
                },
                actionsToRemove: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['thresholdPercentage', 'type'],
                    members: {
                      thresholdPercentage: {
                        type: 'float'
                      },
                      type: {}
                    }
                  }
                },
                approximateDollarLimit: {
                  type: 'float'
                },
                budgetId: {
                  location: 'uri',
                  locationName: 'budgetId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                schedule: {
                  shape: 'S2w'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateFarm: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId'],
              members: {
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateFleet: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                configuration: {
                  shape: 'S38'
                },
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                maxWorkerCount: {
                  type: 'integer'
                },
                minWorkerCount: {
                  type: 'integer'
                },
                roleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateJob: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                lifecycleStatus: {},
                maxFailedTasksCount: {
                  type: 'integer'
                },
                maxRetriesPerTask: {
                  type: 'integer'
                },
                priority: {
                  type: 'integer'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                targetTaskRunStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateMonitor: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/monitors/{monitorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['monitorId'],
              members: {
                displayName: {},
                monitorId: {
                  location: 'uri',
                  locationName: 'monitorId'
                },
                roleArn: {},
                subdomain: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateQueue: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueId'],
              members: {
                allowedStorageProfileIdsToAdd: {
                  shape: 'S4v'
                },
                allowedStorageProfileIdsToRemove: {
                  shape: 'S4v'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                defaultBudgetAction: {},
                description: {
                  shape: 'S2q'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobAttachmentSettings: {
                  shape: 'S1p'
                },
                jobRunAsUser: {
                  shape: 'S1s'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                requiredFileSystemLocationNamesToAdd: {
                  shape: 'S4x'
                },
                requiredFileSystemLocationNamesToRemove: {
                  shape: 'S4x'
                },
                roleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateQueueEnvironment: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'queueEnvironmentId', 'queueId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                priority: {
                  type: 'integer'
                },
                queueEnvironmentId: {
                  location: 'uri',
                  locationName: 'queueEnvironmentId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                template: {
                  shape: 'S51'
                },
                templateType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            }
          },
          UpdateQueueFleetAssociation: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'queueId', 'status'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateSession: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'sessionId', 'targetLifecycleStatus'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                targetLifecycleStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateStep: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'stepId', 'targetTaskRunStatus'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                stepId: {
                  location: 'uri',
                  locationName: 'stepId'
                },
                targetTaskRunStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateStorageProfile: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'storageProfileId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                displayName: {},
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fileSystemLocationsToAdd: {
                  shape: 'S58'
                },
                fileSystemLocationsToRemove: {
                  shape: 'S58'
                },
                osFamily: {},
                storageProfileId: {
                  location: 'uri',
                  locationName: 'storageProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateTask: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'jobId', 'queueId', 'stepId', 'targetRunStatus', 'taskId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                queueId: {
                  location: 'uri',
                  locationName: 'queueId'
                },
                stepId: {
                  location: 'uri',
                  locationName: 'stepId'
                },
                targetRunStatus: {},
                taskId: {
                  location: 'uri',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'management.'
            },
            idempotent: true
          },
          UpdateWorker: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'workerId'],
              members: {
                capabilities: {
                  type: 'structure',
                  required: ['amounts', 'attributes'],
                  members: {
                    amounts: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'value'],
                        members: {
                          name: {},
                          value: {
                            type: 'float'
                          }
                        }
                      }
                    },
                    attributes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'values'],
                        members: {
                          name: {},
                          values: {
                            shape: 'S3q'
                          }
                        }
                      }
                    }
                  }
                },
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                hostProperties: {
                  shape: 'S5e'
                },
                status: {},
                workerId: {
                  location: 'uri',
                  locationName: 'workerId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                log: {
                  shape: 'S7z'
                }
              }
            },
            endpoint: {
              hostPrefix: 'scheduling.'
            },
            idempotent: true
          },
          UpdateWorkerSchedule: {
            http: {
              method: 'PATCH',
              requestUri: '/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/schedule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['farmId', 'fleetId', 'workerId'],
              members: {
                farmId: {
                  location: 'uri',
                  locationName: 'farmId'
                },
                fleetId: {
                  location: 'uri',
                  locationName: 'fleetId'
                },
                updatedSessionActions: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      completedStatus: {},
                      endedAt: {
                        shape: 'Sl'
                      },
                      processExitCode: {
                        type: 'integer'
                      },
                      progressMessage: {
                        shape: 'S8h'
                      },
                      progressPercent: {
                        type: 'float'
                      },
                      startedAt: {
                        shape: 'Sl'
                      },
                      updatedAt: {
                        shape: 'Sl'
                      }
                    }
                  }
                },
                workerId: {
                  location: 'uri',
                  locationName: 'workerId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assignedSessions', 'cancelSessionActions', 'updateIntervalSeconds'],
              members: {
                assignedSessions: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['jobId', 'logConfiguration', 'queueId', 'sessionActions'],
                    members: {
                      jobId: {},
                      logConfiguration: {
                        shape: 'S7z'
                      },
                      queueId: {},
                      sessionActions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['definition', 'sessionActionId'],
                          members: {
                            definition: {
                              type: 'structure',
                              members: {
                                envEnter: {
                                  type: 'structure',
                                  required: ['environmentId'],
                                  members: {
                                    environmentId: {}
                                  }
                                },
                                envExit: {
                                  type: 'structure',
                                  required: ['environmentId'],
                                  members: {
                                    environmentId: {}
                                  }
                                },
                                syncInputJobAttachments: {
                                  type: 'structure',
                                  members: {
                                    stepId: {}
                                  }
                                },
                                taskRun: {
                                  type: 'structure',
                                  required: ['parameters', 'stepId', 'taskId'],
                                  members: {
                                    parameters: {
                                      shape: 'S8d'
                                    },
                                    stepId: {},
                                    taskId: {}
                                  }
                                }
                              },
                              union: true
                            },
                            sessionActionId: {}
                          }
                        }
                      }
                    }
                  }
                },
                cancelSessionActions: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                desiredWorkerStatus: {},
                updateIntervalSeconds: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'scheduling.'
            },
            idempotent: true
          }
        },
        shapes: {
          Sj: {
            type: 'structure',
            required: ['accessKeyId', 'expiration', 'secretAccessKey', 'sessionToken'],
            members: {
              accessKeyId: {
                type: 'string',
                sensitive: true
              },
              expiration: {
                shape: 'Sl'
              },
              secretAccessKey: {
                type: 'string',
                sensitive: true
              },
              sessionToken: {
                type: 'string',
                sensitive: true
              }
            },
            sensitive: true
          },
          Sl: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1b: {
            type: 'structure',
            members: {},
            document: true,
            sensitive: true
          },
          S1d: {
            type: 'structure',
            required: ['manifests'],
            members: {
              fileSystem: {},
              manifests: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['rootPath', 'rootPathFormat'],
                  members: {
                    fileSystemLocationName: {
                      shape: 'S1h'
                    },
                    inputManifestHash: {},
                    inputManifestPath: {},
                    outputRelativeDirectories: {
                      type: 'list',
                      member: {}
                    },
                    rootPath: {},
                    rootPathFormat: {}
                  },
                  sensitive: true
                }
              }
            }
          },
          S1h: {
            type: 'string',
            sensitive: true
          },
          S1p: {
            type: 'structure',
            required: ['rootPrefix', 's3BucketName'],
            members: {
              rootPrefix: {},
              s3BucketName: {}
            }
          },
          S1s: {
            type: 'structure',
            required: ['runAs'],
            members: {
              posix: {
                type: 'structure',
                required: ['group', 'user'],
                members: {
                  group: {},
                  user: {}
                }
              },
              runAs: {},
              windows: {
                type: 'structure',
                required: ['passwordArn', 'user'],
                members: {
                  passwordArn: {},
                  user: {}
                }
              }
            }
          },
          S20: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                'float': {},
                'int': {},
                path: {},
                string: {}
              },
              union: true
            },
            sensitive: true
          },
          S2o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['thresholdPercentage', 'type'],
              members: {
                description: {
                  shape: 'S2q'
                },
                thresholdPercentage: {
                  type: 'float'
                },
                type: {}
              }
            }
          },
          S2q: {
            type: 'string',
            sensitive: true
          },
          S2w: {
            type: 'structure',
            members: {
              fixed: {
                type: 'structure',
                required: ['endTime', 'startTime'],
                members: {
                  endTime: {
                    type: 'timestamp',
                    timestampFormat: 'iso8601'
                  },
                  startTime: {
                    type: 'timestamp',
                    timestampFormat: 'iso8601'
                  }
                }
              }
            },
            union: true
          },
          S30: {
            type: 'structure',
            members: {
              queueId: {}
            },
            union: true
          },
          S35: {
            type: 'map',
            key: {},
            value: {}
          },
          S38: {
            type: 'structure',
            members: {
              customerManaged: {
                type: 'structure',
                required: ['mode', 'workerCapabilities'],
                members: {
                  mode: {},
                  storageProfileId: {},
                  workerCapabilities: {
                    type: 'structure',
                    required: ['cpuArchitectureType', 'memoryMiB', 'osFamily', 'vCpuCount'],
                    members: {
                      acceleratorCount: {
                        type: 'structure',
                        required: ['min'],
                        members: {
                          max: {
                            type: 'integer'
                          },
                          min: {
                            type: 'integer'
                          }
                        }
                      },
                      acceleratorTotalMemoryMiB: {
                        type: 'structure',
                        required: ['min'],
                        members: {
                          max: {
                            type: 'integer'
                          },
                          min: {
                            type: 'integer'
                          }
                        }
                      },
                      acceleratorTypes: {
                        type: 'list',
                        member: {}
                      },
                      cpuArchitectureType: {},
                      customAmounts: {
                        shape: 'S3j'
                      },
                      customAttributes: {
                        shape: 'S3n'
                      },
                      memoryMiB: {
                        shape: 'S3s'
                      },
                      osFamily: {},
                      vCpuCount: {
                        shape: 'S3v'
                      }
                    }
                  }
                }
              },
              serviceManagedEc2: {
                type: 'structure',
                required: ['instanceCapabilities', 'instanceMarketOptions'],
                members: {
                  instanceCapabilities: {
                    type: 'structure',
                    required: ['cpuArchitectureType', 'memoryMiB', 'osFamily', 'vCpuCount'],
                    members: {
                      allowedInstanceTypes: {
                        shape: 'S3z'
                      },
                      cpuArchitectureType: {},
                      customAmounts: {
                        shape: 'S3j'
                      },
                      customAttributes: {
                        shape: 'S3n'
                      },
                      excludedInstanceTypes: {
                        shape: 'S3z'
                      },
                      memoryMiB: {
                        shape: 'S3s'
                      },
                      osFamily: {},
                      rootEbsVolume: {
                        type: 'structure',
                        members: {
                          iops: {
                            type: 'integer'
                          },
                          sizeGiB: {
                            type: 'integer'
                          },
                          throughputMiB: {
                            type: 'integer'
                          }
                        }
                      },
                      vCpuCount: {
                        shape: 'S3v'
                      }
                    }
                  },
                  instanceMarketOptions: {
                    type: 'structure',
                    required: ['type'],
                    members: {
                      type: {}
                    }
                  }
                }
              }
            },
            union: true
          },
          S3j: {
            type: 'list',
            member: {
              shape: 'S3k'
            }
          },
          S3k: {
            type: 'structure',
            required: ['min', 'name'],
            members: {
              max: {
                type: 'float'
              },
              min: {
                type: 'float'
              },
              name: {}
            }
          },
          S3n: {
            type: 'list',
            member: {
              shape: 'S3o'
            }
          },
          S3o: {
            type: 'structure',
            required: ['name', 'values'],
            members: {
              name: {},
              values: {
                shape: 'S3q'
              }
            }
          },
          S3q: {
            type: 'list',
            member: {}
          },
          S3s: {
            type: 'structure',
            required: ['min'],
            members: {
              max: {
                type: 'integer'
              },
              min: {
                type: 'integer'
              }
            }
          },
          S3v: {
            type: 'structure',
            required: ['min'],
            members: {
              max: {
                type: 'integer'
              },
              min: {
                type: 'integer'
              }
            }
          },
          S3z: {
            type: 'list',
            member: {}
          },
          S4v: {
            type: 'list',
            member: {}
          },
          S4x: {
            type: 'list',
            member: {
              shape: 'S1h'
            }
          },
          S51: {
            type: 'string',
            sensitive: true
          },
          S58: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'path', 'type'],
              members: {
                name: {
                  shape: 'S1h'
                },
                path: {},
                type: {}
              },
              sensitive: true
            }
          },
          S5e: {
            type: 'structure',
            members: {
              hostName: {},
              ipAddresses: {
                shape: 'S5g'
              }
            }
          },
          S5g: {
            type: 'structure',
            members: {
              ipV4Addresses: {
                type: 'list',
                member: {}
              },
              ipV6Addresses: {
                type: 'list',
                member: {}
              }
            }
          },
          S6l: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S6n: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S6q: {
            type: 'structure',
            required: ['approximateDollarUsage'],
            members: {
              approximateDollarUsage: {
                type: 'float'
              }
            }
          },
          S73: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S76: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S79: {
            type: 'map',
            key: {},
            value: {
              type: 'integer'
            }
          },
          S7x: {
            type: 'structure',
            members: {
              ec2InstanceArn: {},
              ec2InstanceType: {},
              hostName: {},
              ipAddresses: {
                shape: 'S5g'
              }
            }
          },
          S7z: {
            type: 'structure',
            required: ['logDriver'],
            members: {
              error: {},
              logDriver: {},
              options: {
                type: 'map',
                key: {},
                value: {}
              },
              parameters: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S8d: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                'float': {},
                'int': {},
                path: {},
                string: {}
              },
              sensitive: true,
              union: true
            },
            sensitive: true
          },
          S8h: {
            type: 'string',
            sensitive: true
          },
          S8k: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S8r: {
            type: 'structure',
            members: {
              avg: {
                type: 'double'
              },
              max: {
                type: 'double'
              },
              min: {
                type: 'double'
              },
              sum: {
                type: 'double'
              }
            }
          },
          S8z: {
            type: 'structure',
            required: ['consumersResolved', 'consumersUnresolved', 'dependenciesResolved', 'dependenciesUnresolved'],
            members: {
              consumersResolved: {
                type: 'integer'
              },
              consumersUnresolved: {
                type: 'integer'
              },
              dependenciesResolved: {
                type: 'integer'
              },
              dependenciesUnresolved: {
                type: 'integer'
              }
            }
          },
          S93: {
            type: 'structure',
            required: ['parameters'],
            members: {
              combination: {},
              parameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'type'],
                  members: {
                    name: {},
                    type: {}
                  }
                }
              }
            }
          },
          S9e: {
            type: 'list',
            member: {}
          },
          S9t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['family', 'port', 'productId', 'vendor'],
              members: {
                family: {},
                port: {
                  type: 'integer'
                },
                productId: {},
                vendor: {}
              }
            }
          },
          Scd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['displayName', 'osFamily', 'storageProfileId'],
              members: {
                displayName: {},
                osFamily: {},
                storageProfileId: {}
              }
            }
          },
          Scu: {
            type: 'structure',
            required: ['filters', 'operator'],
            members: {
              filters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    dateTimeFilter: {
                      type: 'structure',
                      required: ['dateTime', 'name', 'operator'],
                      members: {
                        dateTime: {
                          shape: 'Sl'
                        },
                        name: {},
                        operator: {}
                      }
                    },
                    groupFilter: {
                      shape: 'Scu'
                    },
                    parameterFilter: {
                      type: 'structure',
                      required: ['name', 'operator', 'value'],
                      members: {
                        name: {},
                        operator: {},
                        value: {}
                      }
                    },
                    searchTermFilter: {
                      type: 'structure',
                      required: ['searchTerm'],
                      members: {
                        searchTerm: {}
                      }
                    },
                    stringFilter: {
                      type: 'structure',
                      required: ['name', 'operator', 'value'],
                      members: {
                        name: {},
                        operator: {},
                        value: {}
                      }
                    }
                  },
                  union: true
                }
              },
              operator: {}
            }
          },
          Sd9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                fieldSort: {
                  type: 'structure',
                  required: ['name', 'sortOrder'],
                  members: {
                    name: {},
                    sortOrder: {}
                  }
                },
                parameterSort: {
                  type: 'structure',
                  required: ['name', 'sortOrder'],
                  members: {
                    name: {},
                    sortOrder: {}
                  }
                },
                userJobsFirst: {
                  type: 'structure',
                  required: ['userIdentityId'],
                  members: {
                    userIdentityId: {}
                  }
                }
              },
              union: true
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c98c1f1952e9a83181383ba7e0e012bd4aa74822.js.map