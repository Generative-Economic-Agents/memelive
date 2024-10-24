System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2020-01-01',
          endpointPrefix: 'macie2',
          signingName: 'macie2',
          serviceFullName: 'Amazon Macie 2',
          serviceId: 'Macie2',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'macie2-2020-01-01',
          signatureVersion: 'v4'
        },
        operations: {
          AcceptInvitation: {
            http: {
              requestUri: '/invitations/accept',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                administratorAccountId: {
                  locationName: 'administratorAccountId'
                },
                invitationId: {
                  locationName: 'invitationId'
                },
                masterAccount: {
                  locationName: 'masterAccount'
                }
              },
              required: ['invitationId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BatchGetCustomDataIdentifiers: {
            http: {
              requestUri: '/custom-data-identifiers/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S5',
                  locationName: 'ids'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                customDataIdentifiers: {
                  locationName: 'customDataIdentifiers',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {
                        locationName: 'arn'
                      },
                      createdAt: {
                        shape: 'S9',
                        locationName: 'createdAt'
                      },
                      deleted: {
                        locationName: 'deleted',
                        type: 'boolean'
                      },
                      description: {
                        locationName: 'description'
                      },
                      id: {
                        locationName: 'id'
                      },
                      name: {
                        locationName: 'name'
                      }
                    }
                  }
                },
                notFoundIdentifierIds: {
                  shape: 'S5',
                  locationName: 'notFoundIdentifierIds'
                }
              }
            }
          },
          CreateAllowList: {
            http: {
              requestUri: '/allow-lists',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                },
                criteria: {
                  shape: 'Sc',
                  locationName: 'criteria'
                },
                description: {
                  locationName: 'description'
                },
                name: {
                  locationName: 'name'
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              },
              required: ['criteria', 'clientToken', 'name']
            },
            output: {
              type: 'structure',
              members: {
                arn: {
                  locationName: 'arn'
                },
                id: {
                  locationName: 'id'
                }
              }
            }
          },
          CreateClassificationJob: {
            http: {
              requestUri: '/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                allowListIds: {
                  shape: 'S5',
                  locationName: 'allowListIds'
                },
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                },
                customDataIdentifierIds: {
                  shape: 'S5',
                  locationName: 'customDataIdentifierIds'
                },
                description: {
                  locationName: 'description'
                },
                initialRun: {
                  locationName: 'initialRun',
                  type: 'boolean'
                },
                jobType: {
                  locationName: 'jobType'
                },
                managedDataIdentifierIds: {
                  shape: 'S5',
                  locationName: 'managedDataIdentifierIds'
                },
                managedDataIdentifierSelector: {
                  locationName: 'managedDataIdentifierSelector'
                },
                name: {
                  locationName: 'name'
                },
                s3JobDefinition: {
                  shape: 'Sp',
                  locationName: 's3JobDefinition'
                },
                samplingPercentage: {
                  locationName: 'samplingPercentage',
                  type: 'integer'
                },
                scheduleFrequency: {
                  shape: 'S1d',
                  locationName: 'scheduleFrequency'
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              },
              required: ['s3JobDefinition', 'jobType', 'clientToken', 'name']
            },
            output: {
              type: 'structure',
              members: {
                jobArn: {
                  locationName: 'jobArn'
                },
                jobId: {
                  locationName: 'jobId'
                }
              }
            }
          },
          CreateCustomDataIdentifier: {
            http: {
              requestUri: '/custom-data-identifiers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                },
                description: {
                  locationName: 'description'
                },
                ignoreWords: {
                  shape: 'S5',
                  locationName: 'ignoreWords'
                },
                keywords: {
                  shape: 'S5',
                  locationName: 'keywords'
                },
                maximumMatchDistance: {
                  locationName: 'maximumMatchDistance',
                  type: 'integer'
                },
                name: {
                  locationName: 'name'
                },
                regex: {
                  locationName: 'regex'
                },
                severityLevels: {
                  shape: 'S1k',
                  locationName: 'severityLevels'
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              },
              required: ['regex', 'name']
            },
            output: {
              type: 'structure',
              members: {
                customDataIdentifierId: {
                  locationName: 'customDataIdentifierId'
                }
              }
            }
          },
          CreateFindingsFilter: {
            http: {
              requestUri: '/findingsfilters',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                action: {
                  locationName: 'action'
                },
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                },
                description: {
                  locationName: 'description'
                },
                findingCriteria: {
                  shape: 'S1r',
                  locationName: 'findingCriteria'
                },
                name: {
                  locationName: 'name'
                },
                position: {
                  locationName: 'position',
                  type: 'integer'
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              },
              required: ['action', 'findingCriteria', 'name']
            },
            output: {
              type: 'structure',
              members: {
                arn: {
                  locationName: 'arn'
                },
                id: {
                  locationName: 'id'
                }
              }
            }
          },
          CreateInvitations: {
            http: {
              requestUri: '/invitations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'S5',
                  locationName: 'accountIds'
                },
                disableEmailNotification: {
                  locationName: 'disableEmailNotification',
                  type: 'boolean'
                },
                message: {
                  locationName: 'message'
                }
              },
              required: ['accountIds']
            },
            output: {
              type: 'structure',
              members: {
                unprocessedAccounts: {
                  shape: 'S1x',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          CreateMember: {
            http: {
              requestUri: '/members',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                account: {
                  locationName: 'account',
                  type: 'structure',
                  members: {
                    accountId: {
                      locationName: 'accountId'
                    },
                    email: {
                      locationName: 'email'
                    }
                  },
                  required: ['email', 'accountId']
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              },
              required: ['account']
            },
            output: {
              type: 'structure',
              members: {
                arn: {
                  locationName: 'arn'
                }
              }
            }
          },
          CreateSampleFindings: {
            http: {
              requestUri: '/findings/sample',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                findingTypes: {
                  locationName: 'findingTypes',
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
          DeclineInvitations: {
            http: {
              requestUri: '/invitations/decline',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'S5',
                  locationName: 'accountIds'
                }
              },
              required: ['accountIds']
            },
            output: {
              type: 'structure',
              members: {
                unprocessedAccounts: {
                  shape: 'S1x',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          DeleteAllowList: {
            http: {
              method: 'DELETE',
              requestUri: '/allow-lists/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                ignoreJobChecks: {
                  location: 'querystring',
                  locationName: 'ignoreJobChecks'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCustomDataIdentifier: {
            http: {
              method: 'DELETE',
              requestUri: '/custom-data-identifiers/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFindingsFilter: {
            http: {
              method: 'DELETE',
              requestUri: '/findingsfilters/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInvitations: {
            http: {
              requestUri: '/invitations/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'S5',
                  locationName: 'accountIds'
                }
              },
              required: ['accountIds']
            },
            output: {
              type: 'structure',
              members: {
                unprocessedAccounts: {
                  shape: 'S1x',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          DeleteMember: {
            http: {
              method: 'DELETE',
              requestUri: '/members/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeBuckets: {
            http: {
              requestUri: '/datasources/s3',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                criteria: {
                  locationName: 'criteria',
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      eq: {
                        shape: 'S5',
                        locationName: 'eq'
                      },
                      gt: {
                        locationName: 'gt',
                        type: 'long'
                      },
                      gte: {
                        locationName: 'gte',
                        type: 'long'
                      },
                      lt: {
                        locationName: 'lt',
                        type: 'long'
                      },
                      lte: {
                        locationName: 'lte',
                        type: 'long'
                      },
                      neq: {
                        shape: 'S5',
                        locationName: 'neq'
                      },
                      prefix: {
                        locationName: 'prefix'
                      }
                    }
                  }
                },
                maxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  locationName: 'nextToken'
                },
                sortCriteria: {
                  locationName: 'sortCriteria',
                  type: 'structure',
                  members: {
                    attributeName: {
                      locationName: 'attributeName'
                    },
                    orderBy: {
                      locationName: 'orderBy'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                buckets: {
                  locationName: 'buckets',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {
                        locationName: 'accountId'
                      },
                      allowsUnencryptedObjectUploads: {
                        locationName: 'allowsUnencryptedObjectUploads'
                      },
                      bucketArn: {
                        locationName: 'bucketArn'
                      },
                      bucketCreatedAt: {
                        shape: 'S9',
                        locationName: 'bucketCreatedAt'
                      },
                      bucketName: {
                        locationName: 'bucketName'
                      },
                      classifiableObjectCount: {
                        locationName: 'classifiableObjectCount',
                        type: 'long'
                      },
                      classifiableSizeInBytes: {
                        locationName: 'classifiableSizeInBytes',
                        type: 'long'
                      },
                      errorCode: {
                        locationName: 'errorCode'
                      },
                      errorMessage: {
                        locationName: 'errorMessage'
                      },
                      jobDetails: {
                        shape: 'S2t',
                        locationName: 'jobDetails'
                      },
                      lastAutomatedDiscoveryTime: {
                        shape: 'S9',
                        locationName: 'lastAutomatedDiscoveryTime'
                      },
                      lastUpdated: {
                        shape: 'S9',
                        locationName: 'lastUpdated'
                      },
                      objectCount: {
                        locationName: 'objectCount',
                        type: 'long'
                      },
                      objectCountByEncryptionType: {
                        shape: 'S2w',
                        locationName: 'objectCountByEncryptionType'
                      },
                      publicAccess: {
                        shape: 'S2x',
                        locationName: 'publicAccess'
                      },
                      region: {
                        locationName: 'region'
                      },
                      replicationDetails: {
                        locationName: 'replicationDetails',
                        type: 'structure',
                        members: {
                          replicated: {
                            locationName: 'replicated',
                            type: 'boolean'
                          },
                          replicatedExternally: {
                            locationName: 'replicatedExternally',
                            type: 'boolean'
                          },
                          replicationAccounts: {
                            shape: 'S5',
                            locationName: 'replicationAccounts'
                          }
                        }
                      },
                      sensitivityScore: {
                        locationName: 'sensitivityScore',
                        type: 'integer'
                      },
                      serverSideEncryption: {
                        locationName: 'serverSideEncryption',
                        type: 'structure',
                        members: {
                          kmsMasterKeyId: {
                            locationName: 'kmsMasterKeyId'
                          },
                          type: {
                            locationName: 'type'
                          }
                        }
                      },
                      sharedAccess: {
                        locationName: 'sharedAccess'
                      },
                      sizeInBytes: {
                        locationName: 'sizeInBytes',
                        type: 'long'
                      },
                      sizeInBytesCompressed: {
                        locationName: 'sizeInBytesCompressed',
                        type: 'long'
                      },
                      tags: {
                        locationName: 'tags',
                        type: 'list',
                        member: {
                          shape: 'S3a'
                        }
                      },
                      unclassifiableObjectCount: {
                        shape: 'S3b',
                        locationName: 'unclassifiableObjectCount'
                      },
                      unclassifiableObjectSizeInBytes: {
                        shape: 'S3b',
                        locationName: 'unclassifiableObjectSizeInBytes'
                      },
                      versioning: {
                        locationName: 'versioning',
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          DescribeClassificationJob: {
            http: {
              method: 'GET',
              requestUri: '/jobs/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              },
              required: ['jobId']
            },
            output: {
              type: 'structure',
              members: {
                allowListIds: {
                  shape: 'S5',
                  locationName: 'allowListIds'
                },
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                },
                createdAt: {
                  shape: 'S9',
                  locationName: 'createdAt'
                },
                customDataIdentifierIds: {
                  shape: 'S5',
                  locationName: 'customDataIdentifierIds'
                },
                description: {
                  locationName: 'description'
                },
                initialRun: {
                  locationName: 'initialRun',
                  type: 'boolean'
                },
                jobArn: {
                  locationName: 'jobArn'
                },
                jobId: {
                  locationName: 'jobId'
                },
                jobStatus: {
                  locationName: 'jobStatus'
                },
                jobType: {
                  locationName: 'jobType'
                },
                lastRunErrorStatus: {
                  shape: 'S3f',
                  locationName: 'lastRunErrorStatus'
                },
                lastRunTime: {
                  shape: 'S9',
                  locationName: 'lastRunTime'
                },
                managedDataIdentifierIds: {
                  shape: 'S5',
                  locationName: 'managedDataIdentifierIds'
                },
                managedDataIdentifierSelector: {
                  locationName: 'managedDataIdentifierSelector'
                },
                name: {
                  locationName: 'name'
                },
                s3JobDefinition: {
                  shape: 'Sp',
                  locationName: 's3JobDefinition'
                },
                samplingPercentage: {
                  locationName: 'samplingPercentage',
                  type: 'integer'
                },
                scheduleFrequency: {
                  shape: 'S1d',
                  locationName: 'scheduleFrequency'
                },
                statistics: {
                  locationName: 'statistics',
                  type: 'structure',
                  members: {
                    approximateNumberOfObjectsToProcess: {
                      locationName: 'approximateNumberOfObjectsToProcess',
                      type: 'double'
                    },
                    numberOfRuns: {
                      locationName: 'numberOfRuns',
                      type: 'double'
                    }
                  }
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                },
                userPausedDetails: {
                  shape: 'S3j',
                  locationName: 'userPausedDetails'
                }
              }
            }
          },
          DescribeOrganizationConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/admin/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                autoEnable: {
                  locationName: 'autoEnable',
                  type: 'boolean'
                },
                maxAccountLimitReached: {
                  locationName: 'maxAccountLimitReached',
                  type: 'boolean'
                }
              }
            }
          },
          DisableMacie: {
            http: {
              method: 'DELETE',
              requestUri: '/macie',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableOrganizationAdminAccount: {
            http: {
              method: 'DELETE',
              requestUri: '/admin',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                adminAccountId: {
                  location: 'querystring',
                  locationName: 'adminAccountId'
                }
              },
              required: ['adminAccountId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateFromAdministratorAccount: {
            http: {
              requestUri: '/administrator/disassociate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateFromMasterAccount: {
            http: {
              requestUri: '/master/disassociate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateMember: {
            http: {
              requestUri: '/members/disassociate/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableMacie: {
            http: {
              requestUri: '/macie',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                },
                findingPublishingFrequency: {
                  locationName: 'findingPublishingFrequency'
                },
                status: {
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableOrganizationAdminAccount: {
            http: {
              requestUri: '/admin',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                adminAccountId: {
                  locationName: 'adminAccountId'
                },
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                }
              },
              required: ['adminAccountId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAdministratorAccount: {
            http: {
              method: 'GET',
              requestUri: '/administrator',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                administrator: {
                  shape: 'S44',
                  locationName: 'administrator'
                }
              }
            }
          },
          GetAllowList: {
            http: {
              method: 'GET',
              requestUri: '/allow-lists/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {
                arn: {
                  locationName: 'arn'
                },
                createdAt: {
                  shape: 'S9',
                  locationName: 'createdAt'
                },
                criteria: {
                  shape: 'Sc',
                  locationName: 'criteria'
                },
                description: {
                  locationName: 'description'
                },
                id: {
                  locationName: 'id'
                },
                name: {
                  locationName: 'name'
                },
                status: {
                  locationName: 'status',
                  type: 'structure',
                  members: {
                    code: {
                      locationName: 'code'
                    },
                    description: {
                      locationName: 'description'
                    }
                  },
                  required: ['code']
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                },
                updatedAt: {
                  shape: 'S9',
                  locationName: 'updatedAt'
                }
              }
            }
          },
          GetAutomatedDiscoveryConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/automated-discovery/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                classificationScopeId: {
                  locationName: 'classificationScopeId'
                },
                disabledAt: {
                  shape: 'S4d',
                  locationName: 'disabledAt'
                },
                firstEnabledAt: {
                  shape: 'S4d',
                  locationName: 'firstEnabledAt'
                },
                lastUpdatedAt: {
                  shape: 'S4d',
                  locationName: 'lastUpdatedAt'
                },
                sensitivityInspectionTemplateId: {
                  locationName: 'sensitivityInspectionTemplateId'
                },
                status: {
                  locationName: 'status'
                }
              }
            }
          },
          GetBucketStatistics: {
            http: {
              requestUri: '/datasources/s3/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountId: {
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                bucketCount: {
                  locationName: 'bucketCount',
                  type: 'long'
                },
                bucketCountByEffectivePermission: {
                  locationName: 'bucketCountByEffectivePermission',
                  type: 'structure',
                  members: {
                    publiclyAccessible: {
                      locationName: 'publiclyAccessible',
                      type: 'long'
                    },
                    publiclyReadable: {
                      locationName: 'publiclyReadable',
                      type: 'long'
                    },
                    publiclyWritable: {
                      locationName: 'publiclyWritable',
                      type: 'long'
                    },
                    unknown: {
                      locationName: 'unknown',
                      type: 'long'
                    }
                  }
                },
                bucketCountByEncryptionType: {
                  locationName: 'bucketCountByEncryptionType',
                  type: 'structure',
                  members: {
                    kmsManaged: {
                      locationName: 'kmsManaged',
                      type: 'long'
                    },
                    s3Managed: {
                      locationName: 's3Managed',
                      type: 'long'
                    },
                    unencrypted: {
                      locationName: 'unencrypted',
                      type: 'long'
                    },
                    unknown: {
                      locationName: 'unknown',
                      type: 'long'
                    }
                  }
                },
                bucketCountByObjectEncryptionRequirement: {
                  locationName: 'bucketCountByObjectEncryptionRequirement',
                  type: 'structure',
                  members: {
                    allowsUnencryptedObjectUploads: {
                      locationName: 'allowsUnencryptedObjectUploads',
                      type: 'long'
                    },
                    deniesUnencryptedObjectUploads: {
                      locationName: 'deniesUnencryptedObjectUploads',
                      type: 'long'
                    },
                    unknown: {
                      locationName: 'unknown',
                      type: 'long'
                    }
                  }
                },
                bucketCountBySharedAccessType: {
                  locationName: 'bucketCountBySharedAccessType',
                  type: 'structure',
                  members: {
                    external: {
                      locationName: 'external',
                      type: 'long'
                    },
                    internal: {
                      locationName: 'internal',
                      type: 'long'
                    },
                    notShared: {
                      locationName: 'notShared',
                      type: 'long'
                    },
                    unknown: {
                      locationName: 'unknown',
                      type: 'long'
                    }
                  }
                },
                bucketStatisticsBySensitivity: {
                  locationName: 'bucketStatisticsBySensitivity',
                  type: 'structure',
                  members: {
                    classificationError: {
                      shape: 'S4n',
                      locationName: 'classificationError'
                    },
                    notClassified: {
                      shape: 'S4n',
                      locationName: 'notClassified'
                    },
                    notSensitive: {
                      shape: 'S4n',
                      locationName: 'notSensitive'
                    },
                    sensitive: {
                      shape: 'S4n',
                      locationName: 'sensitive'
                    }
                  }
                },
                classifiableObjectCount: {
                  locationName: 'classifiableObjectCount',
                  type: 'long'
                },
                classifiableSizeInBytes: {
                  locationName: 'classifiableSizeInBytes',
                  type: 'long'
                },
                lastUpdated: {
                  shape: 'S9',
                  locationName: 'lastUpdated'
                },
                objectCount: {
                  locationName: 'objectCount',
                  type: 'long'
                },
                sizeInBytes: {
                  locationName: 'sizeInBytes',
                  type: 'long'
                },
                sizeInBytesCompressed: {
                  locationName: 'sizeInBytesCompressed',
                  type: 'long'
                },
                unclassifiableObjectCount: {
                  shape: 'S3b',
                  locationName: 'unclassifiableObjectCount'
                },
                unclassifiableObjectSizeInBytes: {
                  shape: 'S3b',
                  locationName: 'unclassifiableObjectSizeInBytes'
                }
              }
            }
          },
          GetClassificationExportConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/classification-export-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                configuration: {
                  shape: 'S4q',
                  locationName: 'configuration'
                }
              }
            }
          },
          GetClassificationScope: {
            http: {
              method: 'GET',
              requestUri: '/classification-scopes/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {
                id: {
                  locationName: 'id'
                },
                name: {
                  locationName: 'name'
                },
                s3: {
                  locationName: 's3',
                  type: 'structure',
                  members: {
                    excludes: {
                      locationName: 'excludes',
                      type: 'structure',
                      members: {
                        bucketNames: {
                          shape: 'S4x',
                          locationName: 'bucketNames'
                        }
                      },
                      required: ['bucketNames']
                    }
                  },
                  required: ['excludes']
                }
              }
            }
          },
          GetCustomDataIdentifier: {
            http: {
              method: 'GET',
              requestUri: '/custom-data-identifiers/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {
                arn: {
                  locationName: 'arn'
                },
                createdAt: {
                  shape: 'S9',
                  locationName: 'createdAt'
                },
                deleted: {
                  locationName: 'deleted',
                  type: 'boolean'
                },
                description: {
                  locationName: 'description'
                },
                id: {
                  locationName: 'id'
                },
                ignoreWords: {
                  shape: 'S5',
                  locationName: 'ignoreWords'
                },
                keywords: {
                  shape: 'S5',
                  locationName: 'keywords'
                },
                maximumMatchDistance: {
                  locationName: 'maximumMatchDistance',
                  type: 'integer'
                },
                name: {
                  locationName: 'name'
                },
                regex: {
                  locationName: 'regex'
                },
                severityLevels: {
                  shape: 'S1k',
                  locationName: 'severityLevels'
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              }
            }
          },
          GetFindingStatistics: {
            http: {
              requestUri: '/findings/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                findingCriteria: {
                  shape: 'S1r',
                  locationName: 'findingCriteria'
                },
                groupBy: {
                  locationName: 'groupBy'
                },
                size: {
                  locationName: 'size',
                  type: 'integer'
                },
                sortCriteria: {
                  locationName: 'sortCriteria',
                  type: 'structure',
                  members: {
                    attributeName: {
                      locationName: 'attributeName'
                    },
                    orderBy: {
                      locationName: 'orderBy'
                    }
                  }
                }
              },
              required: ['groupBy']
            },
            output: {
              type: 'structure',
              members: {
                countsByGroup: {
                  locationName: 'countsByGroup',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      count: {
                        locationName: 'count',
                        type: 'long'
                      },
                      groupKey: {
                        locationName: 'groupKey'
                      }
                    }
                  }
                }
              }
            }
          },
          GetFindings: {
            http: {
              requestUri: '/findings/describe',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                findingIds: {
                  shape: 'S5',
                  locationName: 'findingIds'
                },
                sortCriteria: {
                  shape: 'S59',
                  locationName: 'sortCriteria'
                }
              },
              required: ['findingIds']
            },
            output: {
              type: 'structure',
              members: {
                findings: {
                  locationName: 'findings',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {
                        locationName: 'accountId'
                      },
                      archived: {
                        locationName: 'archived',
                        type: 'boolean'
                      },
                      category: {
                        locationName: 'category'
                      },
                      classificationDetails: {
                        locationName: 'classificationDetails',
                        type: 'structure',
                        members: {
                          detailedResultsLocation: {
                            locationName: 'detailedResultsLocation'
                          },
                          jobArn: {
                            locationName: 'jobArn'
                          },
                          jobId: {
                            locationName: 'jobId'
                          },
                          originType: {
                            locationName: 'originType'
                          },
                          result: {
                            locationName: 'result',
                            type: 'structure',
                            members: {
                              additionalOccurrences: {
                                locationName: 'additionalOccurrences',
                                type: 'boolean'
                              },
                              customDataIdentifiers: {
                                locationName: 'customDataIdentifiers',
                                type: 'structure',
                                members: {
                                  detections: {
                                    locationName: 'detections',
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        arn: {
                                          locationName: 'arn'
                                        },
                                        count: {
                                          locationName: 'count',
                                          type: 'long'
                                        },
                                        name: {
                                          locationName: 'name'
                                        },
                                        occurrences: {
                                          shape: 'S5k',
                                          locationName: 'occurrences'
                                        }
                                      }
                                    }
                                  },
                                  totalCount: {
                                    locationName: 'totalCount',
                                    type: 'long'
                                  }
                                }
                              },
                              mimeType: {
                                locationName: 'mimeType'
                              },
                              sensitiveData: {
                                locationName: 'sensitiveData',
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    category: {
                                      locationName: 'category'
                                    },
                                    detections: {
                                      locationName: 'detections',
                                      type: 'list',
                                      member: {
                                        type: 'structure',
                                        members: {
                                          count: {
                                            locationName: 'count',
                                            type: 'long'
                                          },
                                          occurrences: {
                                            shape: 'S5k',
                                            locationName: 'occurrences'
                                          },
                                          type: {
                                            locationName: 'type'
                                          }
                                        }
                                      }
                                    },
                                    totalCount: {
                                      locationName: 'totalCount',
                                      type: 'long'
                                    }
                                  }
                                }
                              },
                              sizeClassified: {
                                locationName: 'sizeClassified',
                                type: 'long'
                              },
                              status: {
                                locationName: 'status',
                                type: 'structure',
                                members: {
                                  code: {
                                    locationName: 'code'
                                  },
                                  reason: {
                                    locationName: 'reason'
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      count: {
                        locationName: 'count',
                        type: 'long'
                      },
                      createdAt: {
                        shape: 'S9',
                        locationName: 'createdAt'
                      },
                      description: {
                        locationName: 'description'
                      },
                      id: {
                        locationName: 'id'
                      },
                      partition: {
                        locationName: 'partition'
                      },
                      policyDetails: {
                        locationName: 'policyDetails',
                        type: 'structure',
                        members: {
                          action: {
                            locationName: 'action',
                            type: 'structure',
                            members: {
                              actionType: {
                                locationName: 'actionType'
                              },
                              apiCallDetails: {
                                locationName: 'apiCallDetails',
                                type: 'structure',
                                members: {
                                  api: {
                                    locationName: 'api'
                                  },
                                  apiServiceName: {
                                    locationName: 'apiServiceName'
                                  },
                                  firstSeen: {
                                    shape: 'S9',
                                    locationName: 'firstSeen'
                                  },
                                  lastSeen: {
                                    shape: 'S9',
                                    locationName: 'lastSeen'
                                  }
                                }
                              }
                            }
                          },
                          actor: {
                            locationName: 'actor',
                            type: 'structure',
                            members: {
                              domainDetails: {
                                locationName: 'domainDetails',
                                type: 'structure',
                                members: {
                                  domainName: {
                                    locationName: 'domainName'
                                  }
                                }
                              },
                              ipAddressDetails: {
                                locationName: 'ipAddressDetails',
                                type: 'structure',
                                members: {
                                  ipAddressV4: {
                                    locationName: 'ipAddressV4'
                                  },
                                  ipCity: {
                                    locationName: 'ipCity',
                                    type: 'structure',
                                    members: {
                                      name: {
                                        locationName: 'name'
                                      }
                                    }
                                  },
                                  ipCountry: {
                                    locationName: 'ipCountry',
                                    type: 'structure',
                                    members: {
                                      code: {
                                        locationName: 'code'
                                      },
                                      name: {
                                        locationName: 'name'
                                      }
                                    }
                                  },
                                  ipGeoLocation: {
                                    locationName: 'ipGeoLocation',
                                    type: 'structure',
                                    members: {
                                      lat: {
                                        locationName: 'lat',
                                        type: 'double'
                                      },
                                      lon: {
                                        locationName: 'lon',
                                        type: 'double'
                                      }
                                    }
                                  },
                                  ipOwner: {
                                    locationName: 'ipOwner',
                                    type: 'structure',
                                    members: {
                                      asn: {
                                        locationName: 'asn'
                                      },
                                      asnOrg: {
                                        locationName: 'asnOrg'
                                      },
                                      isp: {
                                        locationName: 'isp'
                                      },
                                      org: {
                                        locationName: 'org'
                                      }
                                    }
                                  }
                                }
                              },
                              userIdentity: {
                                locationName: 'userIdentity',
                                type: 'structure',
                                members: {
                                  assumedRole: {
                                    locationName: 'assumedRole',
                                    type: 'structure',
                                    members: {
                                      accessKeyId: {
                                        locationName: 'accessKeyId'
                                      },
                                      accountId: {
                                        locationName: 'accountId'
                                      },
                                      arn: {
                                        locationName: 'arn'
                                      },
                                      principalId: {
                                        locationName: 'principalId'
                                      },
                                      sessionContext: {
                                        shape: 'S6c',
                                        locationName: 'sessionContext'
                                      }
                                    }
                                  },
                                  awsAccount: {
                                    locationName: 'awsAccount',
                                    type: 'structure',
                                    members: {
                                      accountId: {
                                        locationName: 'accountId'
                                      },
                                      principalId: {
                                        locationName: 'principalId'
                                      }
                                    }
                                  },
                                  awsService: {
                                    locationName: 'awsService',
                                    type: 'structure',
                                    members: {
                                      invokedBy: {
                                        locationName: 'invokedBy'
                                      }
                                    }
                                  },
                                  federatedUser: {
                                    locationName: 'federatedUser',
                                    type: 'structure',
                                    members: {
                                      accessKeyId: {
                                        locationName: 'accessKeyId'
                                      },
                                      accountId: {
                                        locationName: 'accountId'
                                      },
                                      arn: {
                                        locationName: 'arn'
                                      },
                                      principalId: {
                                        locationName: 'principalId'
                                      },
                                      sessionContext: {
                                        shape: 'S6c',
                                        locationName: 'sessionContext'
                                      }
                                    }
                                  },
                                  iamUser: {
                                    locationName: 'iamUser',
                                    type: 'structure',
                                    members: {
                                      accountId: {
                                        locationName: 'accountId'
                                      },
                                      arn: {
                                        locationName: 'arn'
                                      },
                                      principalId: {
                                        locationName: 'principalId'
                                      },
                                      userName: {
                                        locationName: 'userName'
                                      }
                                    }
                                  },
                                  root: {
                                    locationName: 'root',
                                    type: 'structure',
                                    members: {
                                      accountId: {
                                        locationName: 'accountId'
                                      },
                                      arn: {
                                        locationName: 'arn'
                                      },
                                      principalId: {
                                        locationName: 'principalId'
                                      }
                                    }
                                  },
                                  type: {
                                    locationName: 'type'
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      region: {
                        locationName: 'region'
                      },
                      resourcesAffected: {
                        locationName: 'resourcesAffected',
                        type: 'structure',
                        members: {
                          s3Bucket: {
                            locationName: 's3Bucket',
                            type: 'structure',
                            members: {
                              allowsUnencryptedObjectUploads: {
                                locationName: 'allowsUnencryptedObjectUploads'
                              },
                              arn: {
                                locationName: 'arn'
                              },
                              createdAt: {
                                shape: 'S9',
                                locationName: 'createdAt'
                              },
                              defaultServerSideEncryption: {
                                shape: 'S6n',
                                locationName: 'defaultServerSideEncryption'
                              },
                              name: {
                                locationName: 'name'
                              },
                              owner: {
                                locationName: 'owner',
                                type: 'structure',
                                members: {
                                  displayName: {
                                    locationName: 'displayName'
                                  },
                                  id: {
                                    locationName: 'id'
                                  }
                                }
                              },
                              publicAccess: {
                                shape: 'S2x',
                                locationName: 'publicAccess'
                              },
                              tags: {
                                shape: 'S6q',
                                locationName: 'tags'
                              }
                            }
                          },
                          s3Object: {
                            locationName: 's3Object',
                            type: 'structure',
                            members: {
                              bucketArn: {
                                locationName: 'bucketArn'
                              },
                              eTag: {
                                locationName: 'eTag'
                              },
                              extension: {
                                locationName: 'extension'
                              },
                              key: {
                                locationName: 'key'
                              },
                              lastModified: {
                                shape: 'S9',
                                locationName: 'lastModified'
                              },
                              path: {
                                locationName: 'path'
                              },
                              publicAccess: {
                                locationName: 'publicAccess',
                                type: 'boolean'
                              },
                              serverSideEncryption: {
                                shape: 'S6n',
                                locationName: 'serverSideEncryption'
                              },
                              size: {
                                locationName: 'size',
                                type: 'long'
                              },
                              storageClass: {
                                locationName: 'storageClass'
                              },
                              tags: {
                                shape: 'S6q',
                                locationName: 'tags'
                              },
                              versionId: {
                                locationName: 'versionId'
                              }
                            }
                          }
                        }
                      },
                      sample: {
                        locationName: 'sample',
                        type: 'boolean'
                      },
                      schemaVersion: {
                        locationName: 'schemaVersion'
                      },
                      severity: {
                        locationName: 'severity',
                        type: 'structure',
                        members: {
                          description: {
                            locationName: 'description'
                          },
                          score: {
                            locationName: 'score',
                            type: 'long'
                          }
                        }
                      },
                      title: {
                        locationName: 'title'
                      },
                      type: {
                        locationName: 'type'
                      },
                      updatedAt: {
                        shape: 'S9',
                        locationName: 'updatedAt'
                      }
                    }
                  }
                }
              }
            }
          },
          GetFindingsFilter: {
            http: {
              method: 'GET',
              requestUri: '/findingsfilters/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {
                action: {
                  locationName: 'action'
                },
                arn: {
                  locationName: 'arn'
                },
                description: {
                  locationName: 'description'
                },
                findingCriteria: {
                  shape: 'S1r',
                  locationName: 'findingCriteria'
                },
                id: {
                  locationName: 'id'
                },
                name: {
                  locationName: 'name'
                },
                position: {
                  locationName: 'position',
                  type: 'integer'
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              }
            }
          },
          GetFindingsPublicationConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/findings-publication-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                securityHubConfiguration: {
                  shape: 'S6z',
                  locationName: 'securityHubConfiguration'
                }
              }
            }
          },
          GetInvitationsCount: {
            http: {
              method: 'GET',
              requestUri: '/invitations/count',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                invitationsCount: {
                  locationName: 'invitationsCount',
                  type: 'long'
                }
              }
            }
          },
          GetMacieSession: {
            http: {
              method: 'GET',
              requestUri: '/macie',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                createdAt: {
                  shape: 'S9',
                  locationName: 'createdAt'
                },
                findingPublishingFrequency: {
                  locationName: 'findingPublishingFrequency'
                },
                serviceRole: {
                  locationName: 'serviceRole'
                },
                status: {
                  locationName: 'status'
                },
                updatedAt: {
                  shape: 'S9',
                  locationName: 'updatedAt'
                }
              }
            }
          },
          GetMasterAccount: {
            http: {
              method: 'GET',
              requestUri: '/master',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                master: {
                  shape: 'S44',
                  locationName: 'master'
                }
              }
            }
          },
          GetMember: {
            http: {
              method: 'GET',
              requestUri: '/members/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {
                accountId: {
                  locationName: 'accountId'
                },
                administratorAccountId: {
                  locationName: 'administratorAccountId'
                },
                arn: {
                  locationName: 'arn'
                },
                email: {
                  locationName: 'email'
                },
                invitedAt: {
                  shape: 'S9',
                  locationName: 'invitedAt'
                },
                masterAccountId: {
                  locationName: 'masterAccountId'
                },
                relationshipStatus: {
                  locationName: 'relationshipStatus'
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                },
                updatedAt: {
                  shape: 'S9',
                  locationName: 'updatedAt'
                }
              }
            }
          },
          GetResourceProfile: {
            http: {
              method: 'GET',
              requestUri: '/resource-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              },
              required: ['resourceArn']
            },
            output: {
              type: 'structure',
              members: {
                profileUpdatedAt: {
                  shape: 'S9',
                  locationName: 'profileUpdatedAt'
                },
                sensitivityScore: {
                  locationName: 'sensitivityScore',
                  type: 'integer'
                },
                sensitivityScoreOverridden: {
                  locationName: 'sensitivityScoreOverridden',
                  type: 'boolean'
                },
                statistics: {
                  locationName: 'statistics',
                  type: 'structure',
                  members: {
                    totalBytesClassified: {
                      locationName: 'totalBytesClassified',
                      type: 'long'
                    },
                    totalDetections: {
                      locationName: 'totalDetections',
                      type: 'long'
                    },
                    totalDetectionsSuppressed: {
                      locationName: 'totalDetectionsSuppressed',
                      type: 'long'
                    },
                    totalItemsClassified: {
                      locationName: 'totalItemsClassified',
                      type: 'long'
                    },
                    totalItemsSensitive: {
                      locationName: 'totalItemsSensitive',
                      type: 'long'
                    },
                    totalItemsSkipped: {
                      locationName: 'totalItemsSkipped',
                      type: 'long'
                    },
                    totalItemsSkippedInvalidEncryption: {
                      locationName: 'totalItemsSkippedInvalidEncryption',
                      type: 'long'
                    },
                    totalItemsSkippedInvalidKms: {
                      locationName: 'totalItemsSkippedInvalidKms',
                      type: 'long'
                    },
                    totalItemsSkippedPermissionDenied: {
                      locationName: 'totalItemsSkippedPermissionDenied',
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          GetRevealConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/reveal-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                configuration: {
                  shape: 'S7d',
                  locationName: 'configuration'
                },
                retrievalConfiguration: {
                  shape: 'S7g',
                  locationName: 'retrievalConfiguration'
                }
              }
            }
          },
          GetSensitiveDataOccurrences: {
            http: {
              method: 'GET',
              requestUri: '/findings/{findingId}/reveal',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                findingId: {
                  location: 'uri',
                  locationName: 'findingId'
                }
              },
              required: ['findingId']
            },
            output: {
              type: 'structure',
              members: {
                error: {
                  locationName: 'error'
                },
                sensitiveDataOccurrences: {
                  locationName: 'sensitiveDataOccurrences',
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        value: {
                          locationName: 'value'
                        }
                      },
                      required: ['value']
                    }
                  }
                },
                status: {
                  locationName: 'status'
                }
              }
            }
          },
          GetSensitiveDataOccurrencesAvailability: {
            http: {
              method: 'GET',
              requestUri: '/findings/{findingId}/reveal/availability',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                findingId: {
                  location: 'uri',
                  locationName: 'findingId'
                }
              },
              required: ['findingId']
            },
            output: {
              type: 'structure',
              members: {
                code: {
                  locationName: 'code'
                },
                reasons: {
                  locationName: 'reasons',
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          GetSensitivityInspectionTemplate: {
            http: {
              method: 'GET',
              requestUri: '/templates/sensitivity-inspections/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {
                description: {
                  locationName: 'description'
                },
                excludes: {
                  shape: 'S7x',
                  locationName: 'excludes'
                },
                includes: {
                  shape: 'S7y',
                  locationName: 'includes'
                },
                name: {
                  locationName: 'name'
                },
                sensitivityInspectionTemplateId: {
                  locationName: 'sensitivityInspectionTemplateId'
                }
              }
            }
          },
          GetUsageStatistics: {
            http: {
              requestUri: '/usage/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterBy: {
                  locationName: 'filterBy',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      comparator: {
                        locationName: 'comparator'
                      },
                      key: {
                        locationName: 'key'
                      },
                      values: {
                        shape: 'S5',
                        locationName: 'values'
                      }
                    }
                  }
                },
                maxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  locationName: 'nextToken'
                },
                sortBy: {
                  locationName: 'sortBy',
                  type: 'structure',
                  members: {
                    key: {
                      locationName: 'key'
                    },
                    orderBy: {
                      locationName: 'orderBy'
                    }
                  }
                },
                timeRange: {
                  locationName: 'timeRange'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {
                  locationName: 'nextToken'
                },
                records: {
                  locationName: 'records',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {
                        locationName: 'accountId'
                      },
                      automatedDiscoveryFreeTrialStartDate: {
                        shape: 'S9',
                        locationName: 'automatedDiscoveryFreeTrialStartDate'
                      },
                      freeTrialStartDate: {
                        shape: 'S9',
                        locationName: 'freeTrialStartDate'
                      },
                      usage: {
                        locationName: 'usage',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            currency: {
                              locationName: 'currency'
                            },
                            estimatedCost: {
                              locationName: 'estimatedCost'
                            },
                            serviceLimit: {
                              locationName: 'serviceLimit',
                              type: 'structure',
                              members: {
                                isServiceLimited: {
                                  locationName: 'isServiceLimited',
                                  type: 'boolean'
                                },
                                unit: {
                                  locationName: 'unit'
                                },
                                value: {
                                  locationName: 'value',
                                  type: 'long'
                                }
                              }
                            },
                            type: {
                              locationName: 'type'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                timeRange: {
                  locationName: 'timeRange'
                }
              }
            }
          },
          GetUsageTotals: {
            http: {
              method: 'GET',
              requestUri: '/usage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                timeRange: {
                  location: 'querystring',
                  locationName: 'timeRange'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                timeRange: {
                  locationName: 'timeRange'
                },
                usageTotals: {
                  locationName: 'usageTotals',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      currency: {
                        locationName: 'currency'
                      },
                      estimatedCost: {
                        locationName: 'estimatedCost'
                      },
                      type: {
                        locationName: 'type'
                      }
                    }
                  }
                }
              }
            }
          },
          ListAllowLists: {
            http: {
              method: 'GET',
              requestUri: '/allow-lists',
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
                allowLists: {
                  locationName: 'allowLists',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {
                        locationName: 'arn'
                      },
                      createdAt: {
                        shape: 'S9',
                        locationName: 'createdAt'
                      },
                      description: {
                        locationName: 'description'
                      },
                      id: {
                        locationName: 'id'
                      },
                      name: {
                        locationName: 'name'
                      },
                      updatedAt: {
                        shape: 'S9',
                        locationName: 'updatedAt'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListClassificationJobs: {
            http: {
              requestUri: '/jobs/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterCriteria: {
                  locationName: 'filterCriteria',
                  type: 'structure',
                  members: {
                    excludes: {
                      shape: 'S8r',
                      locationName: 'excludes'
                    },
                    includes: {
                      shape: 'S8r',
                      locationName: 'includes'
                    }
                  }
                },
                maxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  locationName: 'nextToken'
                },
                sortCriteria: {
                  locationName: 'sortCriteria',
                  type: 'structure',
                  members: {
                    attributeName: {
                      locationName: 'attributeName'
                    },
                    orderBy: {
                      locationName: 'orderBy'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      bucketCriteria: {
                        shape: 'Sq',
                        locationName: 'bucketCriteria'
                      },
                      bucketDefinitions: {
                        shape: 'S10',
                        locationName: 'bucketDefinitions'
                      },
                      createdAt: {
                        shape: 'S9',
                        locationName: 'createdAt'
                      },
                      jobId: {
                        locationName: 'jobId'
                      },
                      jobStatus: {
                        locationName: 'jobStatus'
                      },
                      jobType: {
                        locationName: 'jobType'
                      },
                      lastRunErrorStatus: {
                        shape: 'S3f',
                        locationName: 'lastRunErrorStatus'
                      },
                      name: {
                        locationName: 'name'
                      },
                      userPausedDetails: {
                        shape: 'S3j',
                        locationName: 'userPausedDetails'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListClassificationScopes: {
            http: {
              method: 'GET',
              requestUri: '/classification-scopes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                name: {
                  location: 'querystring',
                  locationName: 'name'
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
                classificationScopes: {
                  locationName: 'classificationScopes',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {
                        locationName: 'id'
                      },
                      name: {
                        locationName: 'name'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListCustomDataIdentifiers: {
            http: {
              requestUri: '/custom-data-identifiers/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {
                        locationName: 'arn'
                      },
                      createdAt: {
                        shape: 'S9',
                        locationName: 'createdAt'
                      },
                      description: {
                        locationName: 'description'
                      },
                      id: {
                        locationName: 'id'
                      },
                      name: {
                        locationName: 'name'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListFindings: {
            http: {
              requestUri: '/findings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                findingCriteria: {
                  shape: 'S1r',
                  locationName: 'findingCriteria'
                },
                maxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  locationName: 'nextToken'
                },
                sortCriteria: {
                  shape: 'S59',
                  locationName: 'sortCriteria'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                findingIds: {
                  shape: 'S5',
                  locationName: 'findingIds'
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListFindingsFilters: {
            http: {
              method: 'GET',
              requestUri: '/findingsfilters',
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
                findingsFilterListItems: {
                  locationName: 'findingsFilterListItems',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      action: {
                        locationName: 'action'
                      },
                      arn: {
                        locationName: 'arn'
                      },
                      id: {
                        locationName: 'id'
                      },
                      name: {
                        locationName: 'name'
                      },
                      tags: {
                        shape: 'Si',
                        locationName: 'tags'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListInvitations: {
            http: {
              method: 'GET',
              requestUri: '/invitations',
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
                invitations: {
                  locationName: 'invitations',
                  type: 'list',
                  member: {
                    shape: 'S44'
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListManagedDataIdentifiers: {
            http: {
              requestUri: '/managed-data-identifiers/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      category: {
                        locationName: 'category'
                      },
                      id: {
                        locationName: 'id'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListMembers: {
            http: {
              method: 'GET',
              requestUri: '/members',
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
                onlyAssociated: {
                  location: 'querystring',
                  locationName: 'onlyAssociated'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                members: {
                  locationName: 'members',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {
                        locationName: 'accountId'
                      },
                      administratorAccountId: {
                        locationName: 'administratorAccountId'
                      },
                      arn: {
                        locationName: 'arn'
                      },
                      email: {
                        locationName: 'email'
                      },
                      invitedAt: {
                        shape: 'S9',
                        locationName: 'invitedAt'
                      },
                      masterAccountId: {
                        locationName: 'masterAccountId'
                      },
                      relationshipStatus: {
                        locationName: 'relationshipStatus'
                      },
                      tags: {
                        shape: 'Si',
                        locationName: 'tags'
                      },
                      updatedAt: {
                        shape: 'S9',
                        locationName: 'updatedAt'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListOrganizationAdminAccounts: {
            http: {
              method: 'GET',
              requestUri: '/admin',
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
                adminAccounts: {
                  locationName: 'adminAccounts',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {
                        locationName: 'accountId'
                      },
                      status: {
                        locationName: 'status'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListResourceProfileArtifacts: {
            http: {
              method: 'GET',
              requestUri: '/resource-profiles/artifacts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              },
              required: ['resourceArn']
            },
            output: {
              type: 'structure',
              members: {
                artifacts: {
                  locationName: 'artifacts',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {
                        locationName: 'arn'
                      },
                      classificationResultStatus: {
                        locationName: 'classificationResultStatus'
                      },
                      sensitive: {
                        locationName: 'sensitive',
                        type: 'boolean'
                      }
                    },
                    required: ['classificationResultStatus', 'arn']
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListResourceProfileDetections: {
            http: {
              method: 'GET',
              requestUri: '/resource-profiles/detections',
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
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              },
              required: ['resourceArn']
            },
            output: {
              type: 'structure',
              members: {
                detections: {
                  locationName: 'detections',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {
                        locationName: 'arn'
                      },
                      count: {
                        locationName: 'count',
                        type: 'long'
                      },
                      id: {
                        locationName: 'id'
                      },
                      name: {
                        locationName: 'name'
                      },
                      suppressed: {
                        locationName: 'suppressed',
                        type: 'boolean'
                      },
                      type: {
                        locationName: 'type'
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListSensitivityInspectionTemplates: {
            http: {
              method: 'GET',
              requestUri: '/templates/sensitivity-inspections',
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
                nextToken: {
                  locationName: 'nextToken'
                },
                sensitivityInspectionTemplates: {
                  locationName: 'sensitivityInspectionTemplates',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {
                        locationName: 'id'
                      },
                      name: {
                        locationName: 'name'
                      }
                    }
                  }
                }
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
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              },
              required: ['resourceArn']
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              }
            }
          },
          PutClassificationExportConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/classification-export-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                configuration: {
                  shape: 'S4q',
                  locationName: 'configuration'
                }
              },
              required: ['configuration']
            },
            output: {
              type: 'structure',
              members: {
                configuration: {
                  shape: 'S4q',
                  locationName: 'configuration'
                }
              }
            }
          },
          PutFindingsPublicationConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/findings-publication-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                },
                securityHubConfiguration: {
                  shape: 'S6z',
                  locationName: 'securityHubConfiguration'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SearchResources: {
            http: {
              requestUri: '/datasources/search-resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                bucketCriteria: {
                  locationName: 'bucketCriteria',
                  type: 'structure',
                  members: {
                    excludes: {
                      shape: 'Saf',
                      locationName: 'excludes'
                    },
                    includes: {
                      shape: 'Saf',
                      locationName: 'includes'
                    }
                  }
                },
                maxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  locationName: 'nextToken'
                },
                sortCriteria: {
                  locationName: 'sortCriteria',
                  type: 'structure',
                  members: {
                    attributeName: {
                      locationName: 'attributeName'
                    },
                    orderBy: {
                      locationName: 'orderBy'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                matchingResources: {
                  locationName: 'matchingResources',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      matchingBucket: {
                        locationName: 'matchingBucket',
                        type: 'structure',
                        members: {
                          accountId: {
                            locationName: 'accountId'
                          },
                          bucketName: {
                            locationName: 'bucketName'
                          },
                          classifiableObjectCount: {
                            locationName: 'classifiableObjectCount',
                            type: 'long'
                          },
                          classifiableSizeInBytes: {
                            locationName: 'classifiableSizeInBytes',
                            type: 'long'
                          },
                          errorCode: {
                            locationName: 'errorCode'
                          },
                          errorMessage: {
                            locationName: 'errorMessage'
                          },
                          jobDetails: {
                            shape: 'S2t',
                            locationName: 'jobDetails'
                          },
                          lastAutomatedDiscoveryTime: {
                            shape: 'S9',
                            locationName: 'lastAutomatedDiscoveryTime'
                          },
                          objectCount: {
                            locationName: 'objectCount',
                            type: 'long'
                          },
                          objectCountByEncryptionType: {
                            shape: 'S2w',
                            locationName: 'objectCountByEncryptionType'
                          },
                          sensitivityScore: {
                            locationName: 'sensitivityScore',
                            type: 'integer'
                          },
                          sizeInBytes: {
                            locationName: 'sizeInBytes',
                            type: 'long'
                          },
                          sizeInBytesCompressed: {
                            locationName: 'sizeInBytesCompressed',
                            type: 'long'
                          },
                          unclassifiableObjectCount: {
                            shape: 'S3b',
                            locationName: 'unclassifiableObjectCount'
                          },
                          unclassifiableObjectSizeInBytes: {
                            shape: 'S3b',
                            locationName: 'unclassifiableObjectSizeInBytes'
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'Si',
                  locationName: 'tags'
                }
              },
              required: ['resourceArn', 'tags']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TestCustomDataIdentifier: {
            http: {
              requestUri: '/custom-data-identifiers/test',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ignoreWords: {
                  shape: 'S5',
                  locationName: 'ignoreWords'
                },
                keywords: {
                  shape: 'S5',
                  locationName: 'keywords'
                },
                maximumMatchDistance: {
                  locationName: 'maximumMatchDistance',
                  type: 'integer'
                },
                regex: {
                  locationName: 'regex'
                },
                sampleText: {
                  locationName: 'sampleText'
                }
              },
              required: ['regex', 'sampleText']
            },
            output: {
              type: 'structure',
              members: {
                matchCount: {
                  locationName: 'matchCount',
                  type: 'integer'
                }
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tagKeys: {
                  shape: 'S5',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['tagKeys', 'resourceArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateAllowList: {
            http: {
              method: 'PUT',
              requestUri: '/allow-lists/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                criteria: {
                  shape: 'Sc',
                  locationName: 'criteria'
                },
                description: {
                  locationName: 'description'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {
                  locationName: 'name'
                }
              },
              required: ['id', 'criteria', 'name']
            },
            output: {
              type: 'structure',
              members: {
                arn: {
                  locationName: 'arn'
                },
                id: {
                  locationName: 'id'
                }
              }
            }
          },
          UpdateAutomatedDiscoveryConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/automated-discovery/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                status: {
                  locationName: 'status'
                }
              },
              required: ['status']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateClassificationJob: {
            http: {
              method: 'PATCH',
              requestUri: '/jobs/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                jobStatus: {
                  locationName: 'jobStatus'
                }
              },
              required: ['jobId', 'jobStatus']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateClassificationScope: {
            http: {
              method: 'PATCH',
              requestUri: '/classification-scopes/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                s3: {
                  locationName: 's3',
                  type: 'structure',
                  members: {
                    excludes: {
                      locationName: 'excludes',
                      type: 'structure',
                      members: {
                        bucketNames: {
                          shape: 'S4x',
                          locationName: 'bucketNames'
                        },
                        operation: {
                          locationName: 'operation'
                        }
                      },
                      required: ['bucketNames', 'operation']
                    }
                  },
                  required: ['excludes']
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateFindingsFilter: {
            http: {
              method: 'PATCH',
              requestUri: '/findingsfilters/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                action: {
                  locationName: 'action'
                },
                clientToken: {
                  locationName: 'clientToken',
                  idempotencyToken: true
                },
                description: {
                  locationName: 'description'
                },
                findingCriteria: {
                  shape: 'S1r',
                  locationName: 'findingCriteria'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {
                  locationName: 'name'
                },
                position: {
                  locationName: 'position',
                  type: 'integer'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {
                arn: {
                  locationName: 'arn'
                },
                id: {
                  locationName: 'id'
                }
              }
            }
          },
          UpdateMacieSession: {
            http: {
              method: 'PATCH',
              requestUri: '/macie',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                findingPublishingFrequency: {
                  locationName: 'findingPublishingFrequency'
                },
                status: {
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateMemberSession: {
            http: {
              method: 'PATCH',
              requestUri: '/macie/members/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                status: {
                  locationName: 'status'
                }
              },
              required: ['id', 'status']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateOrganizationConfiguration: {
            http: {
              method: 'PATCH',
              requestUri: '/admin/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                autoEnable: {
                  locationName: 'autoEnable',
                  type: 'boolean'
                }
              },
              required: ['autoEnable']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateResourceProfile: {
            http: {
              method: 'PATCH',
              requestUri: '/resource-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                sensitivityScoreOverride: {
                  locationName: 'sensitivityScoreOverride',
                  type: 'integer'
                }
              },
              required: ['resourceArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateResourceProfileDetections: {
            http: {
              method: 'PATCH',
              requestUri: '/resource-profiles/detections',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                suppressDataIdentifiers: {
                  locationName: 'suppressDataIdentifiers',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {
                        locationName: 'id'
                      },
                      type: {
                        locationName: 'type'
                      }
                    }
                  }
                }
              },
              required: ['resourceArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRevealConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/reveal-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                configuration: {
                  shape: 'S7d',
                  locationName: 'configuration'
                },
                retrievalConfiguration: {
                  locationName: 'retrievalConfiguration',
                  type: 'structure',
                  members: {
                    retrievalMode: {
                      locationName: 'retrievalMode'
                    },
                    roleName: {
                      locationName: 'roleName'
                    }
                  },
                  required: ['retrievalMode']
                }
              },
              required: ['configuration']
            },
            output: {
              type: 'structure',
              members: {
                configuration: {
                  shape: 'S7d',
                  locationName: 'configuration'
                },
                retrievalConfiguration: {
                  shape: 'S7g',
                  locationName: 'retrievalConfiguration'
                }
              }
            }
          },
          UpdateSensitivityInspectionTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/templates/sensitivity-inspections/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                description: {
                  locationName: 'description'
                },
                excludes: {
                  shape: 'S7x',
                  locationName: 'excludes'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                includes: {
                  shape: 'S7y',
                  locationName: 'includes'
                }
              },
              required: ['id']
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {}
          },
          S9: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sc: {
            type: 'structure',
            members: {
              regex: {
                locationName: 'regex'
              },
              s3WordsList: {
                locationName: 's3WordsList',
                type: 'structure',
                members: {
                  bucketName: {
                    locationName: 'bucketName'
                  },
                  objectKey: {
                    locationName: 'objectKey'
                  }
                },
                required: ['bucketName', 'objectKey']
              }
            }
          },
          Si: {
            type: 'map',
            key: {},
            value: {}
          },
          Sp: {
            type: 'structure',
            members: {
              bucketCriteria: {
                shape: 'Sq',
                locationName: 'bucketCriteria'
              },
              bucketDefinitions: {
                shape: 'S10',
                locationName: 'bucketDefinitions'
              },
              scoping: {
                locationName: 'scoping',
                type: 'structure',
                members: {
                  excludes: {
                    shape: 'S13',
                    locationName: 'excludes'
                  },
                  includes: {
                    shape: 'S13',
                    locationName: 'includes'
                  }
                }
              }
            }
          },
          Sq: {
            type: 'structure',
            members: {
              excludes: {
                shape: 'Sr',
                locationName: 'excludes'
              },
              includes: {
                shape: 'Sr',
                locationName: 'includes'
              }
            }
          },
          Sr: {
            type: 'structure',
            members: {
              and: {
                locationName: 'and',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    simpleCriterion: {
                      locationName: 'simpleCriterion',
                      type: 'structure',
                      members: {
                        comparator: {
                          locationName: 'comparator'
                        },
                        key: {
                          locationName: 'key'
                        },
                        values: {
                          shape: 'S5',
                          locationName: 'values'
                        }
                      }
                    },
                    tagCriterion: {
                      locationName: 'tagCriterion',
                      type: 'structure',
                      members: {
                        comparator: {
                          locationName: 'comparator'
                        },
                        tagValues: {
                          locationName: 'tagValues',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              key: {
                                locationName: 'key'
                              },
                              value: {
                                locationName: 'value'
                              }
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
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                accountId: {
                  locationName: 'accountId'
                },
                buckets: {
                  shape: 'S5',
                  locationName: 'buckets'
                }
              },
              required: ['accountId', 'buckets']
            }
          },
          S13: {
            type: 'structure',
            members: {
              and: {
                locationName: 'and',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    simpleScopeTerm: {
                      locationName: 'simpleScopeTerm',
                      type: 'structure',
                      members: {
                        comparator: {
                          locationName: 'comparator'
                        },
                        key: {
                          locationName: 'key'
                        },
                        values: {
                          shape: 'S5',
                          locationName: 'values'
                        }
                      }
                    },
                    tagScopeTerm: {
                      locationName: 'tagScopeTerm',
                      type: 'structure',
                      members: {
                        comparator: {
                          locationName: 'comparator'
                        },
                        key: {
                          locationName: 'key'
                        },
                        tagValues: {
                          locationName: 'tagValues',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              key: {
                                locationName: 'key'
                              },
                              value: {
                                locationName: 'value'
                              }
                            }
                          }
                        },
                        target: {
                          locationName: 'target'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S1d: {
            type: 'structure',
            members: {
              dailySchedule: {
                locationName: 'dailySchedule',
                type: 'structure',
                members: {}
              },
              monthlySchedule: {
                locationName: 'monthlySchedule',
                type: 'structure',
                members: {
                  dayOfMonth: {
                    locationName: 'dayOfMonth',
                    type: 'integer'
                  }
                }
              },
              weeklySchedule: {
                locationName: 'weeklySchedule',
                type: 'structure',
                members: {
                  dayOfWeek: {
                    locationName: 'dayOfWeek'
                  }
                }
              }
            }
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                occurrencesThreshold: {
                  locationName: 'occurrencesThreshold',
                  type: 'long'
                },
                severity: {
                  locationName: 'severity'
                }
              },
              required: ['occurrencesThreshold', 'severity']
            }
          },
          S1r: {
            type: 'structure',
            members: {
              criterion: {
                locationName: 'criterion',
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    eq: {
                      shape: 'S5',
                      locationName: 'eq'
                    },
                    eqExactMatch: {
                      shape: 'S5',
                      locationName: 'eqExactMatch'
                    },
                    gt: {
                      locationName: 'gt',
                      type: 'long'
                    },
                    gte: {
                      locationName: 'gte',
                      type: 'long'
                    },
                    lt: {
                      locationName: 'lt',
                      type: 'long'
                    },
                    lte: {
                      locationName: 'lte',
                      type: 'long'
                    },
                    neq: {
                      shape: 'S5',
                      locationName: 'neq'
                    }
                  }
                }
              }
            }
          },
          S1x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                accountId: {
                  locationName: 'accountId'
                },
                errorCode: {
                  locationName: 'errorCode'
                },
                errorMessage: {
                  locationName: 'errorMessage'
                }
              }
            }
          },
          S2t: {
            type: 'structure',
            members: {
              isDefinedInJob: {
                locationName: 'isDefinedInJob'
              },
              isMonitoredByJob: {
                locationName: 'isMonitoredByJob'
              },
              lastJobId: {
                locationName: 'lastJobId'
              },
              lastJobRunTime: {
                shape: 'S9',
                locationName: 'lastJobRunTime'
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              customerManaged: {
                locationName: 'customerManaged',
                type: 'long'
              },
              kmsManaged: {
                locationName: 'kmsManaged',
                type: 'long'
              },
              s3Managed: {
                locationName: 's3Managed',
                type: 'long'
              },
              unencrypted: {
                locationName: 'unencrypted',
                type: 'long'
              },
              unknown: {
                locationName: 'unknown',
                type: 'long'
              }
            }
          },
          S2x: {
            type: 'structure',
            members: {
              effectivePermission: {
                locationName: 'effectivePermission'
              },
              permissionConfiguration: {
                locationName: 'permissionConfiguration',
                type: 'structure',
                members: {
                  accountLevelPermissions: {
                    locationName: 'accountLevelPermissions',
                    type: 'structure',
                    members: {
                      blockPublicAccess: {
                        shape: 'S31',
                        locationName: 'blockPublicAccess'
                      }
                    }
                  },
                  bucketLevelPermissions: {
                    locationName: 'bucketLevelPermissions',
                    type: 'structure',
                    members: {
                      accessControlList: {
                        locationName: 'accessControlList',
                        type: 'structure',
                        members: {
                          allowsPublicReadAccess: {
                            locationName: 'allowsPublicReadAccess',
                            type: 'boolean'
                          },
                          allowsPublicWriteAccess: {
                            locationName: 'allowsPublicWriteAccess',
                            type: 'boolean'
                          }
                        }
                      },
                      blockPublicAccess: {
                        shape: 'S31',
                        locationName: 'blockPublicAccess'
                      },
                      bucketPolicy: {
                        locationName: 'bucketPolicy',
                        type: 'structure',
                        members: {
                          allowsPublicReadAccess: {
                            locationName: 'allowsPublicReadAccess',
                            type: 'boolean'
                          },
                          allowsPublicWriteAccess: {
                            locationName: 'allowsPublicWriteAccess',
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
          S31: {
            type: 'structure',
            members: {
              blockPublicAcls: {
                locationName: 'blockPublicAcls',
                type: 'boolean'
              },
              blockPublicPolicy: {
                locationName: 'blockPublicPolicy',
                type: 'boolean'
              },
              ignorePublicAcls: {
                locationName: 'ignorePublicAcls',
                type: 'boolean'
              },
              restrictPublicBuckets: {
                locationName: 'restrictPublicBuckets',
                type: 'boolean'
              }
            }
          },
          S3a: {
            type: 'structure',
            members: {
              key: {
                locationName: 'key'
              },
              value: {
                locationName: 'value'
              }
            }
          },
          S3b: {
            type: 'structure',
            members: {
              fileType: {
                locationName: 'fileType',
                type: 'long'
              },
              storageClass: {
                locationName: 'storageClass',
                type: 'long'
              },
              total: {
                locationName: 'total',
                type: 'long'
              }
            }
          },
          S3f: {
            type: 'structure',
            members: {
              code: {
                locationName: 'code'
              }
            }
          },
          S3j: {
            type: 'structure',
            members: {
              jobExpiresAt: {
                shape: 'S9',
                locationName: 'jobExpiresAt'
              },
              jobImminentExpirationHealthEventArn: {
                locationName: 'jobImminentExpirationHealthEventArn'
              },
              jobPausedAt: {
                shape: 'S9',
                locationName: 'jobPausedAt'
              }
            }
          },
          S44: {
            type: 'structure',
            members: {
              accountId: {
                locationName: 'accountId'
              },
              invitationId: {
                locationName: 'invitationId'
              },
              invitedAt: {
                shape: 'S9',
                locationName: 'invitedAt'
              },
              relationshipStatus: {
                locationName: 'relationshipStatus'
              }
            }
          },
          S4d: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S4n: {
            type: 'structure',
            members: {
              classifiableSizeInBytes: {
                locationName: 'classifiableSizeInBytes',
                type: 'long'
              },
              publiclyAccessibleCount: {
                locationName: 'publiclyAccessibleCount',
                type: 'long'
              },
              totalCount: {
                locationName: 'totalCount',
                type: 'long'
              },
              totalSizeInBytes: {
                locationName: 'totalSizeInBytes',
                type: 'long'
              }
            }
          },
          S4q: {
            type: 'structure',
            members: {
              s3Destination: {
                locationName: 's3Destination',
                type: 'structure',
                members: {
                  bucketName: {
                    locationName: 'bucketName'
                  },
                  keyPrefix: {
                    locationName: 'keyPrefix'
                  },
                  kmsKeyArn: {
                    locationName: 'kmsKeyArn'
                  }
                },
                required: ['bucketName', 'kmsKeyArn']
              }
            }
          },
          S4x: {
            type: 'list',
            member: {}
          },
          S59: {
            type: 'structure',
            members: {
              attributeName: {
                locationName: 'attributeName'
              },
              orderBy: {
                locationName: 'orderBy'
              }
            }
          },
          S5k: {
            type: 'structure',
            members: {
              cells: {
                locationName: 'cells',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    cellReference: {
                      locationName: 'cellReference'
                    },
                    column: {
                      locationName: 'column',
                      type: 'long'
                    },
                    columnName: {
                      locationName: 'columnName'
                    },
                    row: {
                      locationName: 'row',
                      type: 'long'
                    }
                  }
                }
              },
              lineRanges: {
                shape: 'S5n',
                locationName: 'lineRanges'
              },
              offsetRanges: {
                shape: 'S5n',
                locationName: 'offsetRanges'
              },
              pages: {
                locationName: 'pages',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    lineRange: {
                      shape: 'S5o',
                      locationName: 'lineRange'
                    },
                    offsetRange: {
                      shape: 'S5o',
                      locationName: 'offsetRange'
                    },
                    pageNumber: {
                      locationName: 'pageNumber',
                      type: 'long'
                    }
                  }
                }
              },
              records: {
                locationName: 'records',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    jsonPath: {
                      locationName: 'jsonPath'
                    },
                    recordIndex: {
                      locationName: 'recordIndex',
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S5n: {
            type: 'list',
            member: {
              shape: 'S5o'
            }
          },
          S5o: {
            type: 'structure',
            members: {
              end: {
                locationName: 'end',
                type: 'long'
              },
              start: {
                locationName: 'start',
                type: 'long'
              },
              startColumn: {
                locationName: 'startColumn',
                type: 'long'
              }
            }
          },
          S6c: {
            type: 'structure',
            members: {
              attributes: {
                locationName: 'attributes',
                type: 'structure',
                members: {
                  creationDate: {
                    shape: 'S9',
                    locationName: 'creationDate'
                  },
                  mfaAuthenticated: {
                    locationName: 'mfaAuthenticated',
                    type: 'boolean'
                  }
                }
              },
              sessionIssuer: {
                locationName: 'sessionIssuer',
                type: 'structure',
                members: {
                  accountId: {
                    locationName: 'accountId'
                  },
                  arn: {
                    locationName: 'arn'
                  },
                  principalId: {
                    locationName: 'principalId'
                  },
                  type: {
                    locationName: 'type'
                  },
                  userName: {
                    locationName: 'userName'
                  }
                }
              }
            }
          },
          S6n: {
            type: 'structure',
            members: {
              encryptionType: {
                locationName: 'encryptionType'
              },
              kmsMasterKeyId: {
                locationName: 'kmsMasterKeyId'
              }
            }
          },
          S6q: {
            type: 'list',
            member: {
              shape: 'S3a'
            }
          },
          S6z: {
            type: 'structure',
            members: {
              publishClassificationFindings: {
                locationName: 'publishClassificationFindings',
                type: 'boolean'
              },
              publishPolicyFindings: {
                locationName: 'publishPolicyFindings',
                type: 'boolean'
              }
            },
            required: ['publishPolicyFindings', 'publishClassificationFindings']
          },
          S7d: {
            type: 'structure',
            members: {
              kmsKeyId: {
                locationName: 'kmsKeyId'
              },
              status: {
                locationName: 'status'
              }
            },
            required: ['status']
          },
          S7g: {
            type: 'structure',
            members: {
              externalId: {
                locationName: 'externalId'
              },
              retrievalMode: {
                locationName: 'retrievalMode'
              },
              roleName: {
                locationName: 'roleName'
              }
            },
            required: ['retrievalMode']
          },
          S7x: {
            type: 'structure',
            members: {
              managedDataIdentifierIds: {
                shape: 'S5',
                locationName: 'managedDataIdentifierIds'
              }
            }
          },
          S7y: {
            type: 'structure',
            members: {
              allowListIds: {
                shape: 'S5',
                locationName: 'allowListIds'
              },
              customDataIdentifierIds: {
                shape: 'S5',
                locationName: 'customDataIdentifierIds'
              },
              managedDataIdentifierIds: {
                shape: 'S5',
                locationName: 'managedDataIdentifierIds'
              }
            }
          },
          S8r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                comparator: {
                  locationName: 'comparator'
                },
                key: {
                  locationName: 'key'
                },
                values: {
                  shape: 'S5',
                  locationName: 'values'
                }
              }
            }
          },
          Saf: {
            type: 'structure',
            members: {
              and: {
                locationName: 'and',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    simpleCriterion: {
                      locationName: 'simpleCriterion',
                      type: 'structure',
                      members: {
                        comparator: {
                          locationName: 'comparator'
                        },
                        key: {
                          locationName: 'key'
                        },
                        values: {
                          shape: 'S5',
                          locationName: 'values'
                        }
                      }
                    },
                    tagCriterion: {
                      locationName: 'tagCriterion',
                      type: 'structure',
                      members: {
                        comparator: {
                          locationName: 'comparator'
                        },
                        tagValues: {
                          locationName: 'tagValues',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              key: {
                                locationName: 'key'
                              },
                              value: {
                                locationName: 'value'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6e3ed9c3afa68e6a059e96143906d2fa77bcf3d7.js.map