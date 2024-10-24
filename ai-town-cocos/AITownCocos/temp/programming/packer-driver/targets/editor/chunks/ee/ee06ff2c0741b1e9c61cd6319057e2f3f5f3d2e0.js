System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-09-28',
          endpointPrefix: 'codecatalyst',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon CodeCatalyst',
          serviceId: 'CodeCatalyst',
          signatureVersion: 'bearer',
          signingName: 'codecatalyst',
          uid: 'codecatalyst-2022-09-28'
        },
        operations: {
          CreateAccessToken: {
            http: {
              method: 'PUT',
              requestUri: '/v1/accessTokens',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                expiresTime: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['secret', 'name', 'expiresTime', 'accessTokenId'],
              members: {
                secret: {
                  type: 'string',
                  sensitive: true
                },
                name: {},
                expiresTime: {
                  shape: 'S3'
                },
                accessTokenId: {}
              }
            }
          },
          CreateDevEnvironment: {
            http: {
              method: 'PUT',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'instanceType', 'persistentStorage'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                repositories: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['repositoryName'],
                    members: {
                      repositoryName: {},
                      branchName: {}
                    }
                  }
                },
                clientToken: {},
                alias: {},
                ides: {
                  shape: 'Sf'
                },
                instanceType: {},
                inactivityTimeoutMinutes: {
                  type: 'integer'
                },
                persistentStorage: {
                  type: 'structure',
                  required: ['sizeInGiB'],
                  members: {
                    sizeInGiB: {
                      type: 'integer'
                    }
                  }
                },
                vpcConnectionName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id'],
              members: {
                spaceName: {},
                projectName: {},
                id: {},
                vpcConnectionName: {}
              }
            },
            idempotent: true
          },
          CreateProject: {
            http: {
              method: 'PUT',
              requestUri: '/v1/spaces/{spaceName}/projects',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'displayName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                displayName: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['name'],
              members: {
                spaceName: {},
                name: {},
                displayName: {},
                description: {}
              }
            },
            idempotent: true
          },
          CreateSourceRepository: {
            http: {
              method: 'PUT',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'name'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'name'],
              members: {
                spaceName: {},
                projectName: {},
                name: {},
                description: {}
              }
            },
            idempotent: true
          },
          CreateSourceRepositoryBranch: {
            http: {
              method: 'PUT',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches/{name}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'sourceRepositoryName', 'name'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                sourceRepositoryName: {
                  location: 'uri',
                  locationName: 'sourceRepositoryName'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                headCommitId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ref: {},
                name: {},
                lastUpdatedTime: {
                  shape: 'S3'
                },
                headCommitId: {}
              }
            },
            idempotent: true
          },
          DeleteAccessToken: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/accessTokens/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteDevEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id'],
              members: {
                spaceName: {},
                projectName: {},
                id: {}
              }
            },
            idempotent: true
          },
          DeleteProject: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/spaces/{spaceName}/projects/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'name'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'name'],
              members: {
                spaceName: {},
                name: {},
                displayName: {}
              }
            },
            idempotent: true
          },
          DeleteSourceRepository: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'name'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'name'],
              members: {
                spaceName: {},
                projectName: {},
                name: {}
              }
            },
            idempotent: true
          },
          DeleteSpace: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/spaces/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                displayName: {}
              }
            },
            idempotent: true
          },
          GetDevEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'lastUpdatedTime', 'creatorId', 'status', 'repositories', 'instanceType', 'inactivityTimeoutMinutes', 'persistentStorage'],
              members: {
                spaceName: {},
                projectName: {},
                id: {},
                lastUpdatedTime: {
                  shape: 'S3'
                },
                creatorId: {},
                status: {},
                statusReason: {},
                repositories: {
                  shape: 'S1f'
                },
                alias: {},
                ides: {
                  shape: 'S1i'
                },
                instanceType: {},
                inactivityTimeoutMinutes: {
                  type: 'integer'
                },
                persistentStorage: {
                  shape: 'S1m'
                },
                vpcConnectionName: {}
              }
            }
          },
          GetProject: {
            http: {
              method: 'GET',
              requestUri: '/v1/spaces/{spaceName}/projects/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'name'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name'],
              members: {
                spaceName: {},
                name: {},
                displayName: {},
                description: {}
              }
            }
          },
          GetSourceRepository: {
            http: {
              method: 'GET',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'name'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'name', 'lastUpdatedTime', 'createdTime'],
              members: {
                spaceName: {},
                projectName: {},
                name: {},
                description: {},
                lastUpdatedTime: {
                  shape: 'S1s'
                },
                createdTime: {
                  shape: 'S1s'
                }
              }
            }
          },
          GetSourceRepositoryCloneUrls: {
            http: {
              method: 'GET',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/cloneUrls',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'sourceRepositoryName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                sourceRepositoryName: {
                  location: 'uri',
                  locationName: 'sourceRepositoryName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['https'],
              members: {
                https: {}
              }
            }
          },
          GetSpace: {
            http: {
              method: 'GET',
              requestUri: '/v1/spaces/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'regionName'],
              members: {
                name: {},
                regionName: {},
                displayName: {},
                description: {}
              }
            }
          },
          GetSubscription: {
            http: {
              method: 'GET',
              requestUri: '/v1/spaces/{spaceName}/subscription',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscriptionType: {},
                awsAccountName: {},
                pendingSubscriptionType: {},
                pendingSubscriptionStartTime: {
                  shape: 'S3'
                }
              }
            }
          },
          GetUserDetails: {
            http: {
              method: 'GET',
              requestUri: '/userDetails',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                userName: {
                  location: 'querystring',
                  locationName: 'userName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userId: {},
                userName: {},
                displayName: {},
                primaryEmail: {
                  type: 'structure',
                  members: {
                    email: {},
                    verified: {
                      type: 'boolean'
                    }
                  }
                },
                version: {}
              }
            }
          },
          GetWorkflow: {
            http: {
              method: 'GET',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/workflows/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'id', 'projectName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'name', 'definition', 'createdTime', 'lastUpdatedTime', 'runMode', 'status'],
              members: {
                spaceName: {},
                projectName: {},
                id: {},
                name: {},
                sourceRepositoryName: {},
                sourceBranchName: {},
                definition: {
                  type: 'structure',
                  required: ['path'],
                  members: {
                    path: {}
                  }
                },
                createdTime: {
                  shape: 'S3'
                },
                lastUpdatedTime: {
                  shape: 'S3'
                },
                runMode: {},
                status: {}
              }
            }
          },
          GetWorkflowRun: {
            http: {
              method: 'GET',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'id', 'projectName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'workflowId', 'status', 'startTime', 'lastUpdatedTime'],
              members: {
                spaceName: {},
                projectName: {},
                id: {},
                workflowId: {},
                status: {},
                statusReasons: {
                  shape: 'S2g'
                },
                startTime: {
                  shape: 'S3'
                },
                endTime: {
                  shape: 'S3'
                },
                lastUpdatedTime: {
                  shape: 'S3'
                }
              }
            }
          },
          ListAccessTokens: {
            http: {
              requestUri: '/v1/accessTokens',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
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
                    required: ['id', 'name'],
                    members: {
                      id: {},
                      name: {},
                      expiresTime: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDevEnvironmentSessions: {
            http: {
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{devEnvironmentId}/sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'devEnvironmentId'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                devEnvironmentId: {
                  location: 'uri',
                  locationName: 'devEnvironmentId'
                },
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
                    required: ['spaceName', 'projectName', 'devEnvironmentId', 'startedTime', 'id'],
                    members: {
                      spaceName: {},
                      projectName: {},
                      devEnvironmentId: {},
                      startedTime: {
                        shape: 'S3'
                      },
                      id: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDevEnvironments: {
            http: {
              requestUri: '/v1/spaces/{spaceName}/devEnvironments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {},
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['key', 'values'],
                    members: {
                      key: {},
                      values: {
                        shape: 'S2y'
                      },
                      comparisonOperator: {}
                    }
                  }
                },
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
                    required: ['id', 'lastUpdatedTime', 'creatorId', 'status', 'repositories', 'instanceType', 'inactivityTimeoutMinutes', 'persistentStorage'],
                    members: {
                      spaceName: {},
                      projectName: {},
                      id: {},
                      lastUpdatedTime: {
                        shape: 'S3'
                      },
                      creatorId: {},
                      status: {},
                      statusReason: {},
                      repositories: {
                        shape: 'S1f'
                      },
                      alias: {},
                      ides: {
                        shape: 'S1i'
                      },
                      instanceType: {},
                      inactivityTimeoutMinutes: {
                        type: 'integer'
                      },
                      persistentStorage: {
                        shape: 'S1m'
                      },
                      vpcConnectionName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEventLogs: {
            http: {
              requestUri: '/v1/spaces/{spaceName}/eventLogs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'startTime', 'endTime'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                startTime: {
                  shape: 'S3'
                },
                endTime: {
                  shape: 'S3'
                },
                eventName: {},
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
                nextToken: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'eventName', 'eventType', 'eventCategory', 'eventSource', 'eventTime', 'operationType', 'userIdentity'],
                    members: {
                      id: {},
                      eventName: {},
                      eventType: {},
                      eventCategory: {},
                      eventSource: {},
                      eventTime: {
                        shape: 'S3'
                      },
                      operationType: {},
                      userIdentity: {
                        type: 'structure',
                        required: ['userType', 'principalId'],
                        members: {
                          userType: {},
                          principalId: {},
                          userName: {},
                          awsAccountId: {}
                        }
                      },
                      projectInformation: {
                        type: 'structure',
                        members: {
                          name: {},
                          projectId: {}
                        }
                      },
                      requestId: {},
                      requestPayload: {
                        shape: 'S3g'
                      },
                      responsePayload: {
                        shape: 'S3g'
                      },
                      errorCode: {},
                      sourceIpAddress: {},
                      userAgent: {}
                    }
                  }
                }
              }
            }
          },
          ListProjects: {
            http: {
              requestUri: '/v1/spaces/{spaceName}/projects',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['key', 'values'],
                    members: {
                      key: {},
                      values: {
                        shape: 'S2y'
                      },
                      comparisonOperator: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {},
                      displayName: {},
                      description: {}
                    }
                  }
                }
              }
            }
          },
          ListSourceRepositories: {
            http: {
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
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
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name', 'lastUpdatedTime', 'createdTime'],
                    members: {
                      id: {},
                      name: {},
                      description: {},
                      lastUpdatedTime: {
                        shape: 'S1s'
                      },
                      createdTime: {
                        shape: 'S1s'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSourceRepositoryBranches: {
            http: {
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'sourceRepositoryName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                sourceRepositoryName: {
                  location: 'uri',
                  locationName: 'sourceRepositoryName'
                },
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
                nextToken: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ref: {},
                      name: {},
                      lastUpdatedTime: {
                        shape: 'S3'
                      },
                      headCommitId: {}
                    }
                  }
                }
              }
            }
          },
          ListSpaces: {
            http: {
              requestUri: '/v1/spaces',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'regionName'],
                    members: {
                      name: {},
                      regionName: {},
                      displayName: {},
                      description: {}
                    }
                  }
                }
              }
            }
          },
          ListWorkflowRuns: {
            http: {
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                sortBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'workflowId', 'workflowName', 'status', 'startTime', 'lastUpdatedTime'],
                    members: {
                      id: {},
                      workflowId: {},
                      workflowName: {},
                      status: {},
                      statusReasons: {
                        shape: 'S2g'
                      },
                      startTime: {
                        shape: 'S3'
                      },
                      endTime: {
                        shape: 'S3'
                      },
                      lastUpdatedTime: {
                        shape: 'S3'
                      }
                    }
                  }
                }
              }
            }
          },
          ListWorkflows: {
            http: {
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/workflows',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                sortBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name', 'sourceRepositoryName', 'sourceBranchName', 'definition', 'createdTime', 'lastUpdatedTime', 'runMode', 'status'],
                    members: {
                      id: {},
                      name: {},
                      sourceRepositoryName: {},
                      sourceBranchName: {},
                      definition: {
                        type: 'structure',
                        required: ['path'],
                        members: {
                          path: {}
                        }
                      },
                      createdTime: {
                        shape: 'S3'
                      },
                      lastUpdatedTime: {
                        shape: 'S3'
                      },
                      runMode: {},
                      status: {}
                    }
                  }
                }
              }
            }
          },
          StartDevEnvironment: {
            http: {
              method: 'PUT',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                ides: {
                  shape: 'Sf'
                },
                instanceType: {},
                inactivityTimeoutMinutes: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'status'],
              members: {
                spaceName: {},
                projectName: {},
                id: {},
                status: {}
              }
            },
            idempotent: true
          },
          StartDevEnvironmentSession: {
            http: {
              method: 'PUT',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'sessionConfiguration'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                sessionConfiguration: {
                  type: 'structure',
                  required: ['sessionType'],
                  members: {
                    sessionType: {},
                    executeCommandSessionConfiguration: {
                      type: 'structure',
                      required: ['command'],
                      members: {
                        command: {},
                        arguments: {
                          type: 'list',
                          member: {}
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accessDetails', 'spaceName', 'projectName', 'id'],
              members: {
                accessDetails: {
                  type: 'structure',
                  required: ['streamUrl', 'tokenValue'],
                  members: {
                    streamUrl: {
                      shape: 'S53'
                    },
                    tokenValue: {
                      shape: 'S53'
                    }
                  },
                  sensitive: true
                },
                sessionId: {},
                spaceName: {},
                projectName: {},
                id: {}
              }
            }
          },
          StartWorkflowRun: {
            http: {
              method: 'PUT',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'workflowId'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'workflowId'],
              members: {
                spaceName: {},
                projectName: {},
                id: {},
                workflowId: {}
              }
            },
            idempotent: true
          },
          StopDevEnvironment: {
            http: {
              method: 'PUT',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'status'],
              members: {
                spaceName: {},
                projectName: {},
                id: {},
                status: {}
              }
            },
            idempotent: true
          },
          StopDevEnvironmentSession: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session/{sessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'sessionId'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id', 'sessionId'],
              members: {
                spaceName: {},
                projectName: {},
                id: {},
                sessionId: {}
              }
            },
            idempotent: true
          },
          UpdateDevEnvironment: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'projectName', 'id'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                alias: {},
                ides: {
                  shape: 'Sf'
                },
                instanceType: {},
                inactivityTimeoutMinutes: {
                  type: 'integer'
                },
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'spaceName', 'projectName'],
              members: {
                id: {},
                spaceName: {},
                projectName: {},
                alias: {},
                ides: {
                  shape: 'Sf'
                },
                instanceType: {},
                inactivityTimeoutMinutes: {
                  type: 'integer'
                },
                clientToken: {}
              }
            },
            idempotent: true
          },
          UpdateProject: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/spaces/{spaceName}/projects/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceName', 'name'],
              members: {
                spaceName: {
                  location: 'uri',
                  locationName: 'spaceName'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                spaceName: {},
                name: {},
                displayName: {},
                description: {}
              }
            },
            idempotent: true
          },
          UpdateSpace: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/spaces/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                displayName: {},
                description: {}
              }
            },
            idempotent: true
          },
          VerifySession: {
            http: {
              method: 'GET',
              requestUri: '/session',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                identity: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                runtime: {},
                name: {}
              }
            }
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {},
                branchName: {}
              }
            }
          },
          S1i: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                runtime: {},
                name: {}
              }
            }
          },
          S1m: {
            type: 'structure',
            required: ['sizeInGiB'],
            members: {
              sizeInGiB: {
                type: 'integer'
              }
            }
          },
          S1s: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S2g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {}
            }
          },
          S2y: {
            type: 'list',
            member: {}
          },
          S3g: {
            type: 'structure',
            members: {
              contentType: {},
              data: {}
            }
          },
          S53: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ee06ff2c0741b1e9c61cd6319057e2f3f5f3d2e0.js.map