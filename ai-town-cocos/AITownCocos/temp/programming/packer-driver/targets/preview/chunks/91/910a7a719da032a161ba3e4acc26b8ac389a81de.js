System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-13',
          endpointPrefix: 'finspace-api',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'FinSpace Data',
          serviceFullName: 'FinSpace Public API',
          serviceId: 'finspace data',
          signatureVersion: 'v4',
          signingName: 'finspace-api',
          uid: 'finspace-2020-07-13'
        },
        operations: {
          AssociateUserToPermissionGroup: {
            http: {
              requestUri: '/permission-group/{permissionGroupId}/users/{userId}'
            },
            input: {
              type: 'structure',
              required: ['permissionGroupId', 'userId'],
              members: {
                permissionGroupId: {
                  location: 'uri',
                  locationName: 'permissionGroupId'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                statusCode: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          CreateChangeset: {
            http: {
              requestUri: '/datasets/{datasetId}/changesetsv2'
            },
            input: {
              type: 'structure',
              required: ['datasetId', 'changeType', 'sourceParams', 'formatParams'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
                },
                changeType: {},
                sourceParams: {
                  shape: 'Sa'
                },
                formatParams: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetId: {},
                changesetId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          CreateDataView: {
            http: {
              requestUri: '/datasets/{datasetId}/dataviewsv2'
            },
            input: {
              type: 'structure',
              required: ['datasetId', 'destinationTypeParams'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
                },
                autoUpdate: {
                  type: 'boolean'
                },
                sortColumns: {
                  shape: 'Si'
                },
                partitionColumns: {
                  shape: 'Sk'
                },
                asOfTimestamp: {
                  type: 'long'
                },
                destinationTypeParams: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetId: {},
                dataViewId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          CreateDataset: {
            http: {
              requestUri: '/datasetsv2'
            },
            input: {
              type: 'structure',
              required: ['datasetTitle', 'kind', 'permissionGroupParams'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                datasetTitle: {},
                kind: {},
                datasetDescription: {},
                ownerInfo: {
                  shape: 'Sw'
                },
                permissionGroupParams: {
                  type: 'structure',
                  members: {
                    permissionGroupId: {},
                    datasetPermissions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          permission: {}
                        }
                      }
                    }
                  }
                },
                alias: {},
                schemaDefinition: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          CreatePermissionGroup: {
            http: {
              requestUri: '/permission-group'
            },
            input: {
              type: 'structure',
              required: ['name', 'applicationPermissions'],
              members: {
                name: {
                  shape: 'S1f'
                },
                description: {
                  shape: 'S1g'
                },
                applicationPermissions: {
                  shape: 'S1h'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                permissionGroupId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          CreateUser: {
            http: {
              requestUri: '/user'
            },
            input: {
              type: 'structure',
              required: ['emailAddress', 'type'],
              members: {
                emailAddress: {
                  shape: 'Sz'
                },
                type: {},
                firstName: {
                  shape: 'S1m'
                },
                lastName: {
                  shape: 'S1n'
                },
                apiAccess: {},
                apiAccessPrincipalArn: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          DeleteDataset: {
            http: {
              method: 'DELETE',
              requestUri: '/datasetsv2/{datasetId}'
            },
            input: {
              type: 'structure',
              required: ['datasetId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          DeletePermissionGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/permission-group/{permissionGroupId}'
            },
            input: {
              type: 'structure',
              required: ['permissionGroupId'],
              members: {
                permissionGroupId: {
                  location: 'uri',
                  locationName: 'permissionGroupId'
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
              members: {
                permissionGroupId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          DisableUser: {
            http: {
              requestUri: '/user/{userId}/disable'
            },
            input: {
              type: 'structure',
              required: ['userId'],
              members: {
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          DisassociateUserFromPermissionGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/permission-group/{permissionGroupId}/users/{userId}'
            },
            input: {
              type: 'structure',
              required: ['permissionGroupId', 'userId'],
              members: {
                permissionGroupId: {
                  location: 'uri',
                  locationName: 'permissionGroupId'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
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
              members: {
                statusCode: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          EnableUser: {
            http: {
              requestUri: '/user/{userId}/enable'
            },
            input: {
              type: 'structure',
              required: ['userId'],
              members: {
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetChangeset: {
            http: {
              method: 'GET',
              requestUri: '/datasets/{datasetId}/changesetsv2/{changesetId}'
            },
            input: {
              type: 'structure',
              required: ['datasetId', 'changesetId'],
              members: {
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
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
                changesetArn: {},
                datasetId: {},
                changeType: {},
                sourceParams: {
                  shape: 'Sa'
                },
                formatParams: {
                  shape: 'Sd'
                },
                createTime: {
                  type: 'long'
                },
                status: {},
                errorInfo: {
                  shape: 'S25'
                },
                activeUntilTimestamp: {
                  type: 'long'
                },
                activeFromTimestamp: {
                  type: 'long'
                },
                updatesChangesetId: {},
                updatedByChangesetId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetDataView: {
            http: {
              method: 'GET',
              requestUri: '/datasets/{datasetId}/dataviewsv2/{dataviewId}'
            },
            input: {
              type: 'structure',
              required: ['dataViewId', 'datasetId'],
              members: {
                dataViewId: {
                  location: 'uri',
                  locationName: 'dataviewId'
                },
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                autoUpdate: {
                  type: 'boolean'
                },
                partitionColumns: {
                  shape: 'Sk'
                },
                datasetId: {},
                asOfTimestamp: {
                  type: 'long'
                },
                errorInfo: {
                  shape: 'S2a'
                },
                lastModifiedTime: {
                  type: 'long'
                },
                createTime: {
                  type: 'long'
                },
                sortColumns: {
                  shape: 'Si'
                },
                dataViewId: {},
                dataViewArn: {},
                destinationTypeParams: {
                  shape: 'Sm'
                },
                status: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetDataset: {
            http: {
              method: 'GET',
              requestUri: '/datasetsv2/{datasetId}'
            },
            input: {
              type: 'structure',
              required: ['datasetId'],
              members: {
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetId: {},
                datasetArn: {},
                datasetTitle: {},
                kind: {},
                datasetDescription: {},
                createTime: {
                  type: 'long'
                },
                lastModifiedTime: {
                  type: 'long'
                },
                schemaDefinition: {
                  shape: 'S15'
                },
                alias: {},
                status: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetExternalDataViewAccessDetails: {
            http: {
              requestUri: '/datasets/{datasetId}/dataviewsv2/{dataviewId}/external-access-details'
            },
            input: {
              type: 'structure',
              required: ['dataViewId', 'datasetId'],
              members: {
                dataViewId: {
                  location: 'uri',
                  locationName: 'dataviewId'
                },
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                credentials: {
                  type: 'structure',
                  members: {
                    accessKeyId: {},
                    secretAccessKey: {
                      type: 'string',
                      sensitive: true
                    },
                    sessionToken: {
                      type: 'string',
                      sensitive: true
                    },
                    expiration: {
                      type: 'long'
                    }
                  },
                  sensitive: true
                },
                s3Location: {
                  type: 'structure',
                  required: ['bucket', 'key'],
                  members: {
                    bucket: {},
                    key: {}
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetPermissionGroup: {
            http: {
              method: 'GET',
              requestUri: '/permission-group/{permissionGroupId}'
            },
            input: {
              type: 'structure',
              required: ['permissionGroupId'],
              members: {
                permissionGroupId: {
                  location: 'uri',
                  locationName: 'permissionGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                permissionGroup: {
                  shape: 'S2s'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetProgrammaticAccessCredentials: {
            http: {
              method: 'GET',
              requestUri: '/credentials/programmatic'
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                durationInMinutes: {
                  location: 'querystring',
                  locationName: 'durationInMinutes',
                  type: 'long'
                },
                environmentId: {
                  location: 'querystring',
                  locationName: 'environmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                credentials: {
                  type: 'structure',
                  members: {
                    accessKeyId: {},
                    secretAccessKey: {},
                    sessionToken: {}
                  },
                  sensitive: true
                },
                durationInMinutes: {
                  type: 'long'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetUser: {
            http: {
              method: 'GET',
              requestUri: '/user/{userId}'
            },
            input: {
              type: 'structure',
              required: ['userId'],
              members: {
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userId: {},
                status: {},
                firstName: {
                  shape: 'S1m'
                },
                lastName: {
                  shape: 'S1n'
                },
                emailAddress: {
                  shape: 'Sz'
                },
                type: {},
                apiAccess: {},
                apiAccessPrincipalArn: {},
                createTime: {
                  type: 'long'
                },
                lastEnabledTime: {
                  type: 'long'
                },
                lastDisabledTime: {
                  type: 'long'
                },
                lastModifiedTime: {
                  type: 'long'
                },
                lastLoginTime: {
                  type: 'long'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          GetWorkingLocation: {
            http: {
              requestUri: '/workingLocationV1'
            },
            input: {
              type: 'structure',
              members: {
                locationType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                s3Uri: {},
                s3Path: {},
                s3Bucket: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ListChangesets: {
            http: {
              method: 'GET',
              requestUri: '/datasets/{datasetId}/changesetsv2'
            },
            input: {
              type: 'structure',
              required: ['datasetId'],
              members: {
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
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
                changesets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      changesetId: {},
                      changesetArn: {},
                      datasetId: {},
                      changeType: {},
                      sourceParams: {
                        shape: 'Sa'
                      },
                      formatParams: {
                        shape: 'Sd'
                      },
                      createTime: {
                        type: 'long'
                      },
                      status: {},
                      errorInfo: {
                        shape: 'S25'
                      },
                      activeUntilTimestamp: {
                        type: 'long'
                      },
                      activeFromTimestamp: {
                        type: 'long'
                      },
                      updatesChangesetId: {},
                      updatedByChangesetId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ListDataViews: {
            http: {
              method: 'GET',
              requestUri: '/datasets/{datasetId}/dataviewsv2'
            },
            input: {
              type: 'structure',
              required: ['datasetId'],
              members: {
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
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
                nextToken: {},
                dataViews: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      dataViewId: {},
                      dataViewArn: {},
                      datasetId: {},
                      asOfTimestamp: {
                        type: 'long'
                      },
                      partitionColumns: {
                        shape: 'Sk'
                      },
                      sortColumns: {
                        shape: 'Si'
                      },
                      status: {},
                      errorInfo: {
                        shape: 'S2a'
                      },
                      destinationTypeProperties: {
                        shape: 'Sm'
                      },
                      autoUpdate: {
                        type: 'boolean'
                      },
                      createTime: {
                        type: 'long'
                      },
                      lastModifiedTime: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ListDatasets: {
            http: {
              method: 'GET',
              requestUri: '/datasetsv2'
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
                datasets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      datasetId: {},
                      datasetArn: {},
                      datasetTitle: {},
                      kind: {},
                      datasetDescription: {},
                      ownerInfo: {
                        shape: 'Sw'
                      },
                      createTime: {
                        type: 'long'
                      },
                      lastModifiedTime: {
                        type: 'long'
                      },
                      schemaDefinition: {
                        shape: 'S15'
                      },
                      alias: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ListPermissionGroups: {
            http: {
              method: 'GET',
              requestUri: '/permission-group'
            },
            input: {
              type: 'structure',
              required: ['maxResults'],
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
                permissionGroups: {
                  type: 'list',
                  member: {
                    shape: 'S2s'
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ListPermissionGroupsByUser: {
            http: {
              method: 'GET',
              requestUri: '/user/{userId}/permission-groups'
            },
            input: {
              type: 'structure',
              required: ['userId', 'maxResults'],
              members: {
                userId: {
                  location: 'uri',
                  locationName: 'userId'
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
                permissionGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      permissionGroupId: {},
                      name: {
                        shape: 'S1f'
                      },
                      membershipStatus: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ListUsers: {
            http: {
              method: 'GET',
              requestUri: '/user'
            },
            input: {
              type: 'structure',
              required: ['maxResults'],
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
                users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      userId: {},
                      status: {},
                      firstName: {
                        shape: 'S1m'
                      },
                      lastName: {
                        shape: 'S1n'
                      },
                      emailAddress: {
                        shape: 'Sz'
                      },
                      type: {},
                      apiAccess: {},
                      apiAccessPrincipalArn: {},
                      createTime: {
                        type: 'long'
                      },
                      lastEnabledTime: {
                        type: 'long'
                      },
                      lastDisabledTime: {
                        type: 'long'
                      },
                      lastModifiedTime: {
                        type: 'long'
                      },
                      lastLoginTime: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ListUsersByPermissionGroup: {
            http: {
              method: 'GET',
              requestUri: '/permission-group/{permissionGroupId}/users'
            },
            input: {
              type: 'structure',
              required: ['permissionGroupId', 'maxResults'],
              members: {
                permissionGroupId: {
                  location: 'uri',
                  locationName: 'permissionGroupId'
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
                      userId: {},
                      status: {},
                      firstName: {
                        shape: 'S1m'
                      },
                      lastName: {
                        shape: 'S1n'
                      },
                      emailAddress: {
                        shape: 'Sz'
                      },
                      type: {},
                      apiAccess: {},
                      apiAccessPrincipalArn: {},
                      membershipStatus: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          ResetUserPassword: {
            http: {
              requestUri: '/user/{userId}/password'
            },
            input: {
              type: 'structure',
              required: ['userId'],
              members: {
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userId: {},
                temporaryPassword: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          UpdateChangeset: {
            http: {
              method: 'PUT',
              requestUri: '/datasets/{datasetId}/changesetsv2/{changesetId}'
            },
            input: {
              type: 'structure',
              required: ['datasetId', 'changesetId', 'sourceParams', 'formatParams'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
                },
                changesetId: {
                  location: 'uri',
                  locationName: 'changesetId'
                },
                sourceParams: {
                  shape: 'Sa'
                },
                formatParams: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                changesetId: {},
                datasetId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          UpdateDataset: {
            http: {
              method: 'PUT',
              requestUri: '/datasetsv2/{datasetId}'
            },
            input: {
              type: 'structure',
              required: ['datasetId', 'datasetTitle', 'kind'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                datasetId: {
                  location: 'uri',
                  locationName: 'datasetId'
                },
                datasetTitle: {},
                kind: {},
                datasetDescription: {},
                alias: {},
                schemaDefinition: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          UpdatePermissionGroup: {
            http: {
              method: 'PUT',
              requestUri: '/permission-group/{permissionGroupId}'
            },
            input: {
              type: 'structure',
              required: ['permissionGroupId'],
              members: {
                permissionGroupId: {
                  location: 'uri',
                  locationName: 'permissionGroupId'
                },
                name: {
                  shape: 'S1f'
                },
                description: {
                  shape: 'S1g'
                },
                applicationPermissions: {
                  shape: 'S1h'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                permissionGroupId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          },
          UpdateUser: {
            http: {
              method: 'PUT',
              requestUri: '/user/{userId}'
            },
            input: {
              type: 'structure',
              required: ['userId'],
              members: {
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                type: {},
                firstName: {
                  shape: 'S1m'
                },
                lastName: {
                  shape: 'S1n'
                },
                apiAccess: {},
                apiAccessPrincipalArn: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This method will be discontinued.'
          }
        },
        shapes: {
          Sa: {
            type: 'map',
            key: {},
            value: {}
          },
          Sd: {
            type: 'map',
            key: {},
            value: {}
          },
          Si: {
            type: 'list',
            member: {}
          },
          Sk: {
            type: 'list',
            member: {}
          },
          Sm: {
            type: 'structure',
            required: ['destinationType'],
            members: {
              destinationType: {},
              s3DestinationExportFileFormat: {},
              s3DestinationExportFileFormatOptions: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              name: {},
              phoneNumber: {},
              email: {
                shape: 'Sz'
              }
            }
          },
          Sz: {
            type: 'string',
            sensitive: true
          },
          S15: {
            type: 'structure',
            members: {
              tabularSchemaConfig: {
                type: 'structure',
                members: {
                  columns: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        dataType: {},
                        columnName: {},
                        columnDescription: {}
                      }
                    }
                  },
                  primaryKeyColumns: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S1f: {
            type: 'string',
            sensitive: true
          },
          S1g: {
            type: 'string',
            sensitive: true
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1m: {
            type: 'string',
            sensitive: true
          },
          S1n: {
            type: 'string',
            sensitive: true
          },
          S25: {
            type: 'structure',
            members: {
              errorMessage: {},
              errorCategory: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              errorMessage: {},
              errorCategory: {}
            }
          },
          S2s: {
            type: 'structure',
            members: {
              permissionGroupId: {},
              name: {
                shape: 'S1f'
              },
              description: {
                shape: 'S1g'
              },
              applicationPermissions: {
                shape: 'S1h'
              },
              createTime: {
                type: 'long'
              },
              lastModifiedTime: {
                type: 'long'
              },
              membershipStatus: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=910a7a719da032a161ba3e4acc26b8ac389a81de.js.map