System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2020-08-11',
          endpointPrefix: 'amplifybackend',
          signingName: 'amplifybackend',
          serviceFullName: 'AmplifyBackend',
          serviceId: 'AmplifyBackend',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'amplifybackend-2020-08-11',
          signatureVersion: 'v4'
        },
        operations: {
          CloneBackend: {
            http: {
              requestUri: '/backend/{appId}/environments/{backendEnvironmentName}/clone',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                TargetEnvironmentName: {
                  locationName: 'targetEnvironmentName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'TargetEnvironmentName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          CreateBackend: {
            http: {
              requestUri: '/backend',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                AppName: {
                  locationName: 'appName'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  locationName: 'resourceConfig',
                  type: 'structure',
                  members: {}
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'AppName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          CreateBackendAPI: {
            http: {
              requestUri: '/backend/{appId}/api',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  shape: 'S8',
                  locationName: 'resourceConfig'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'ResourceName', 'BackendEnvironmentName', 'ResourceConfig']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          CreateBackendAuth: {
            http: {
              requestUri: '/backend/{appId}/auth',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  shape: 'Si',
                  locationName: 'resourceConfig'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'ResourceName', 'BackendEnvironmentName', 'ResourceConfig']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          CreateBackendConfig: {
            http: {
              requestUri: '/backend/{appId}/config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendManagerAppId: {
                  locationName: 'backendManagerAppId'
                }
              },
              required: ['AppId']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          CreateBackendStorage: {
            http: {
              requestUri: '/backend/{appId}/storage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  locationName: 'resourceConfig',
                  type: 'structure',
                  members: {
                    BucketName: {
                      locationName: 'bucketName'
                    },
                    Permissions: {
                      shape: 'S1h',
                      locationName: 'permissions'
                    },
                    ServiceName: {
                      locationName: 'serviceName'
                    }
                  },
                  required: ['ServiceName', 'Permissions']
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'ResourceName', 'BackendEnvironmentName', 'ResourceConfig']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          CreateToken: {
            http: {
              requestUri: '/backend/{appId}/challenge',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                }
              },
              required: ['AppId']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                ChallengeCode: {
                  locationName: 'challengeCode'
                },
                SessionId: {
                  locationName: 'sessionId'
                },
                Ttl: {
                  locationName: 'ttl'
                }
              }
            }
          },
          DeleteBackend: {
            http: {
              requestUri: '/backend/{appId}/environments/{backendEnvironmentName}/remove',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          DeleteBackendAPI: {
            http: {
              requestUri: '/backend/{appId}/api/{backendEnvironmentName}/remove',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  shape: 'S8',
                  locationName: 'resourceConfig'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          DeleteBackendAuth: {
            http: {
              requestUri: '/backend/{appId}/auth/{backendEnvironmentName}/remove',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          DeleteBackendStorage: {
            http: {
              requestUri: '/backend/{appId}/storage/{backendEnvironmentName}/remove',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceName: {
                  locationName: 'resourceName'
                },
                ServiceName: {
                  locationName: 'serviceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ServiceName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          DeleteToken: {
            http: {
              requestUri: '/backend/{appId}/challenge/{sessionId}/remove',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                SessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                }
              },
              required: ['SessionId', 'AppId']
            },
            output: {
              type: 'structure',
              members: {
                IsSuccess: {
                  locationName: 'isSuccess',
                  type: 'boolean'
                }
              }
            }
          },
          GenerateBackendAPIModels: {
            http: {
              requestUri: '/backend/{appId}/api/{backendEnvironmentName}/generateModels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          GetBackend: {
            http: {
              requestUri: '/backend/{appId}/details',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                }
              },
              required: ['AppId']
            },
            output: {
              type: 'structure',
              members: {
                AmplifyFeatureFlags: {
                  locationName: 'amplifyFeatureFlags'
                },
                AmplifyMetaConfig: {
                  locationName: 'amplifyMetaConfig'
                },
                AppId: {
                  locationName: 'appId'
                },
                AppName: {
                  locationName: 'appName'
                },
                BackendEnvironmentList: {
                  shape: 'S11',
                  locationName: 'backendEnvironmentList'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                }
              }
            }
          },
          GetBackendAPI: {
            http: {
              requestUri: '/backend/{appId}/api/{backendEnvironmentName}/details',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  shape: 'S8',
                  locationName: 'resourceConfig'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                ResourceConfig: {
                  shape: 'S8',
                  locationName: 'resourceConfig'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              }
            }
          },
          GetBackendAPIModels: {
            http: {
              requestUri: '/backend/{appId}/api/{backendEnvironmentName}/getModels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                Models: {
                  locationName: 'models'
                },
                Status: {
                  locationName: 'status'
                },
                ModelIntrospectionSchema: {
                  locationName: 'modelIntrospectionSchema'
                }
              }
            }
          },
          GetBackendAuth: {
            http: {
              requestUri: '/backend/{appId}/auth/{backendEnvironmentName}/details',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                ResourceConfig: {
                  shape: 'Si',
                  locationName: 'resourceConfig'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              }
            }
          },
          GetBackendJob: {
            http: {
              method: 'GET',
              requestUri: '/backend/{appId}/job/{backendEnvironmentName}/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'JobId']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                CreateTime: {
                  locationName: 'createTime'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                },
                UpdateTime: {
                  locationName: 'updateTime'
                }
              }
            }
          },
          GetBackendStorage: {
            http: {
              requestUri: '/backend/{appId}/storage/{backendEnvironmentName}/details',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  locationName: 'resourceConfig',
                  type: 'structure',
                  members: {
                    BucketName: {
                      locationName: 'bucketName'
                    },
                    Imported: {
                      locationName: 'imported',
                      type: 'boolean'
                    },
                    Permissions: {
                      shape: 'S1h',
                      locationName: 'permissions'
                    },
                    ServiceName: {
                      locationName: 'serviceName'
                    }
                  },
                  required: ['ServiceName', 'Imported']
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              }
            }
          },
          GetToken: {
            http: {
              method: 'GET',
              requestUri: '/backend/{appId}/challenge/{sessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                SessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                }
              },
              required: ['SessionId', 'AppId']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                ChallengeCode: {
                  locationName: 'challengeCode'
                },
                SessionId: {
                  locationName: 'sessionId'
                },
                Ttl: {
                  locationName: 'ttl'
                }
              }
            }
          },
          ImportBackendAuth: {
            http: {
              requestUri: '/backend/{appId}/auth/{backendEnvironmentName}/import',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                IdentityPoolId: {
                  locationName: 'identityPoolId'
                },
                NativeClientId: {
                  locationName: 'nativeClientId'
                },
                UserPoolId: {
                  locationName: 'userPoolId'
                },
                WebClientId: {
                  locationName: 'webClientId'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'UserPoolId', 'NativeClientId', 'WebClientId']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          ImportBackendStorage: {
            http: {
              requestUri: '/backend/{appId}/storage/{backendEnvironmentName}/import',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                BucketName: {
                  locationName: 'bucketName'
                },
                ServiceName: {
                  locationName: 'serviceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ServiceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          ListBackendJobs: {
            http: {
              requestUri: '/backend/{appId}/job/{backendEnvironmentName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                JobId: {
                  locationName: 'jobId'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              },
              required: ['AppId', 'BackendEnvironmentName']
            },
            output: {
              type: 'structure',
              members: {
                Jobs: {
                  locationName: 'jobs',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppId: {
                        locationName: 'appId'
                      },
                      BackendEnvironmentName: {
                        locationName: 'backendEnvironmentName'
                      },
                      CreateTime: {
                        locationName: 'createTime'
                      },
                      Error: {
                        locationName: 'error'
                      },
                      JobId: {
                        locationName: 'jobId'
                      },
                      Operation: {
                        locationName: 'operation'
                      },
                      Status: {
                        locationName: 'status'
                      },
                      UpdateTime: {
                        locationName: 'updateTime'
                      }
                    },
                    required: ['AppId', 'BackendEnvironmentName']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListS3Buckets: {
            http: {
              requestUri: '/s3Buckets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Buckets: {
                  locationName: 'buckets',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreationDate: {
                        locationName: 'creationDate'
                      },
                      Name: {
                        locationName: 'name'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          RemoveAllBackends: {
            http: {
              requestUri: '/backend/{appId}/remove',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                CleanAmplifyApp: {
                  locationName: 'cleanAmplifyApp',
                  type: 'boolean'
                }
              },
              required: ['AppId']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          RemoveBackendConfig: {
            http: {
              requestUri: '/backend/{appId}/config/remove',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                }
              },
              required: ['AppId']
            },
            output: {
              type: 'structure',
              members: {
                Error: {
                  locationName: 'error'
                }
              }
            }
          },
          UpdateBackendAPI: {
            http: {
              requestUri: '/backend/{appId}/api/{backendEnvironmentName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  shape: 'S8',
                  locationName: 'resourceConfig'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          UpdateBackendAuth: {
            http: {
              requestUri: '/backend/{appId}/auth/{backendEnvironmentName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  locationName: 'resourceConfig',
                  type: 'structure',
                  members: {
                    AuthResources: {
                      locationName: 'authResources'
                    },
                    IdentityPoolConfigs: {
                      locationName: 'identityPoolConfigs',
                      type: 'structure',
                      members: {
                        UnauthenticatedLogin: {
                          locationName: 'unauthenticatedLogin',
                          type: 'boolean'
                        }
                      }
                    },
                    Service: {
                      locationName: 'service'
                    },
                    UserPoolConfigs: {
                      locationName: 'userPoolConfigs',
                      type: 'structure',
                      members: {
                        ForgotPassword: {
                          locationName: 'forgotPassword',
                          type: 'structure',
                          members: {
                            DeliveryMethod: {
                              locationName: 'deliveryMethod'
                            },
                            EmailSettings: {
                              shape: 'Sq',
                              locationName: 'emailSettings'
                            },
                            SmsSettings: {
                              shape: 'Sr',
                              locationName: 'smsSettings'
                            }
                          }
                        },
                        Mfa: {
                          locationName: 'mfa',
                          type: 'structure',
                          members: {
                            MFAMode: {},
                            Settings: {
                              shape: 'Su',
                              locationName: 'settings'
                            }
                          }
                        },
                        OAuth: {
                          locationName: 'oAuth',
                          type: 'structure',
                          members: {
                            DomainPrefix: {
                              locationName: 'domainPrefix'
                            },
                            OAuthGrantType: {
                              locationName: 'oAuthGrantType'
                            },
                            OAuthScopes: {
                              shape: 'Sz',
                              locationName: 'oAuthScopes'
                            },
                            RedirectSignInURIs: {
                              shape: 'S11',
                              locationName: 'redirectSignInURIs'
                            },
                            RedirectSignOutURIs: {
                              shape: 'S11',
                              locationName: 'redirectSignOutURIs'
                            },
                            SocialProviderSettings: {
                              shape: 'S12',
                              locationName: 'socialProviderSettings'
                            }
                          }
                        },
                        PasswordPolicy: {
                          locationName: 'passwordPolicy',
                          type: 'structure',
                          members: {
                            AdditionalConstraints: {
                              shape: 'S16',
                              locationName: 'additionalConstraints'
                            },
                            MinimumLength: {
                              locationName: 'minimumLength',
                              type: 'double'
                            }
                          }
                        },
                        VerificationMessage: {
                          locationName: 'verificationMessage',
                          type: 'structure',
                          members: {
                            DeliveryMethod: {
                              locationName: 'deliveryMethod'
                            },
                            EmailSettings: {
                              shape: 'Sq',
                              locationName: 'emailSettings'
                            },
                            SmsSettings: {
                              shape: 'Sr',
                              locationName: 'smsSettings'
                            }
                          },
                          required: ['DeliveryMethod']
                        }
                      }
                    }
                  },
                  required: ['AuthResources', 'UserPoolConfigs', 'Service']
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName', 'ResourceConfig']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          UpdateBackendConfig: {
            http: {
              requestUri: '/backend/{appId}/config/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                LoginAuthConfig: {
                  shape: 'S3c',
                  locationName: 'loginAuthConfig'
                }
              },
              required: ['AppId']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendManagerAppId: {
                  locationName: 'backendManagerAppId'
                },
                Error: {
                  locationName: 'error'
                },
                LoginAuthConfig: {
                  shape: 'S3c',
                  locationName: 'loginAuthConfig'
                }
              }
            }
          },
          UpdateBackendJob: {
            http: {
              requestUri: '/backend/{appId}/job/{backendEnvironmentName}/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'JobId']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                CreateTime: {
                  locationName: 'createTime'
                },
                Error: {
                  locationName: 'error'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Operation: {
                  locationName: 'operation'
                },
                Status: {
                  locationName: 'status'
                },
                UpdateTime: {
                  locationName: 'updateTime'
                }
              }
            }
          },
          UpdateBackendStorage: {
            http: {
              requestUri: '/backend/{appId}/storage/{backendEnvironmentName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AppId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  location: 'uri',
                  locationName: 'backendEnvironmentName'
                },
                ResourceConfig: {
                  locationName: 'resourceConfig',
                  type: 'structure',
                  members: {
                    Permissions: {
                      shape: 'S1h',
                      locationName: 'permissions'
                    },
                    ServiceName: {
                      locationName: 'serviceName'
                    }
                  },
                  required: ['ServiceName', 'Permissions']
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['AppId', 'BackendEnvironmentName', 'ResourceName', 'ResourceConfig']
            },
            output: {
              type: 'structure',
              members: {
                AppId: {
                  locationName: 'appId'
                },
                BackendEnvironmentName: {
                  locationName: 'backendEnvironmentName'
                },
                JobId: {
                  locationName: 'jobId'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          }
        },
        shapes: {
          S8: {
            type: 'structure',
            members: {
              AdditionalAuthTypes: {
                locationName: 'additionalAuthTypes',
                type: 'list',
                member: {
                  shape: 'Sa'
                }
              },
              ApiName: {
                locationName: 'apiName'
              },
              ConflictResolution: {
                locationName: 'conflictResolution',
                type: 'structure',
                members: {
                  ResolutionStrategy: {
                    locationName: 'resolutionStrategy'
                  }
                }
              },
              DefaultAuthType: {
                shape: 'Sa',
                locationName: 'defaultAuthType'
              },
              Service: {
                locationName: 'service'
              },
              TransformSchema: {
                locationName: 'transformSchema'
              }
            }
          },
          Sa: {
            type: 'structure',
            members: {
              Mode: {
                locationName: 'mode'
              },
              Settings: {
                locationName: 'settings',
                type: 'structure',
                members: {
                  CognitoUserPoolId: {
                    locationName: 'cognitoUserPoolId'
                  },
                  Description: {
                    locationName: 'description'
                  },
                  ExpirationTime: {
                    locationName: 'expirationTime',
                    type: 'double'
                  },
                  OpenIDAuthTTL: {
                    locationName: 'openIDAuthTTL'
                  },
                  OpenIDClientId: {
                    locationName: 'openIDClientId'
                  },
                  OpenIDIatTTL: {
                    locationName: 'openIDIatTTL'
                  },
                  OpenIDIssueURL: {
                    locationName: 'openIDIssueURL'
                  },
                  OpenIDProviderName: {
                    locationName: 'openIDProviderName'
                  }
                }
              }
            }
          },
          Si: {
            type: 'structure',
            members: {
              AuthResources: {
                locationName: 'authResources'
              },
              IdentityPoolConfigs: {
                locationName: 'identityPoolConfigs',
                type: 'structure',
                members: {
                  IdentityPoolName: {
                    locationName: 'identityPoolName'
                  },
                  UnauthenticatedLogin: {
                    locationName: 'unauthenticatedLogin',
                    type: 'boolean'
                  }
                },
                required: ['UnauthenticatedLogin', 'IdentityPoolName']
              },
              Service: {
                locationName: 'service'
              },
              UserPoolConfigs: {
                locationName: 'userPoolConfigs',
                type: 'structure',
                members: {
                  ForgotPassword: {
                    locationName: 'forgotPassword',
                    type: 'structure',
                    members: {
                      DeliveryMethod: {
                        locationName: 'deliveryMethod'
                      },
                      EmailSettings: {
                        shape: 'Sq',
                        locationName: 'emailSettings'
                      },
                      SmsSettings: {
                        shape: 'Sr',
                        locationName: 'smsSettings'
                      }
                    },
                    required: ['DeliveryMethod']
                  },
                  Mfa: {
                    locationName: 'mfa',
                    type: 'structure',
                    members: {
                      MFAMode: {},
                      Settings: {
                        shape: 'Su',
                        locationName: 'settings'
                      }
                    },
                    required: ['MFAMode']
                  },
                  OAuth: {
                    locationName: 'oAuth',
                    type: 'structure',
                    members: {
                      DomainPrefix: {
                        locationName: 'domainPrefix'
                      },
                      OAuthGrantType: {
                        locationName: 'oAuthGrantType'
                      },
                      OAuthScopes: {
                        shape: 'Sz',
                        locationName: 'oAuthScopes'
                      },
                      RedirectSignInURIs: {
                        shape: 'S11',
                        locationName: 'redirectSignInURIs'
                      },
                      RedirectSignOutURIs: {
                        shape: 'S11',
                        locationName: 'redirectSignOutURIs'
                      },
                      SocialProviderSettings: {
                        shape: 'S12',
                        locationName: 'socialProviderSettings'
                      }
                    },
                    required: ['RedirectSignOutURIs', 'RedirectSignInURIs', 'OAuthGrantType', 'OAuthScopes']
                  },
                  PasswordPolicy: {
                    locationName: 'passwordPolicy',
                    type: 'structure',
                    members: {
                      AdditionalConstraints: {
                        shape: 'S16',
                        locationName: 'additionalConstraints'
                      },
                      MinimumLength: {
                        locationName: 'minimumLength',
                        type: 'double'
                      }
                    },
                    required: ['MinimumLength']
                  },
                  RequiredSignUpAttributes: {
                    locationName: 'requiredSignUpAttributes',
                    type: 'list',
                    member: {}
                  },
                  SignInMethod: {
                    locationName: 'signInMethod'
                  },
                  UserPoolName: {
                    locationName: 'userPoolName'
                  },
                  VerificationMessage: {
                    locationName: 'verificationMessage',
                    type: 'structure',
                    members: {
                      DeliveryMethod: {
                        locationName: 'deliveryMethod'
                      },
                      EmailSettings: {
                        shape: 'Sq',
                        locationName: 'emailSettings'
                      },
                      SmsSettings: {
                        shape: 'Sr',
                        locationName: 'smsSettings'
                      }
                    },
                    required: ['DeliveryMethod']
                  }
                },
                required: ['RequiredSignUpAttributes', 'SignInMethod', 'UserPoolName']
              }
            },
            required: ['AuthResources', 'UserPoolConfigs', 'Service']
          },
          Sq: {
            type: 'structure',
            sensitive: true,
            members: {
              EmailMessage: {
                locationName: 'emailMessage'
              },
              EmailSubject: {
                locationName: 'emailSubject'
              }
            }
          },
          Sr: {
            type: 'structure',
            sensitive: true,
            members: {
              SmsMessage: {
                locationName: 'smsMessage'
              }
            }
          },
          Su: {
            type: 'structure',
            members: {
              MfaTypes: {
                locationName: 'mfaTypes',
                type: 'list',
                member: {}
              },
              SmsMessage: {
                locationName: 'smsMessage'
              }
            }
          },
          Sz: {
            type: 'list',
            member: {}
          },
          S11: {
            type: 'list',
            member: {}
          },
          S12: {
            type: 'structure',
            members: {
              Facebook: {
                shape: 'S13'
              },
              Google: {
                shape: 'S13'
              },
              LoginWithAmazon: {
                shape: 'S13'
              },
              SignInWithApple: {
                type: 'structure',
                sensitive: true,
                members: {
                  ClientId: {
                    locationName: 'client_id'
                  },
                  KeyId: {
                    locationName: 'key_id'
                  },
                  PrivateKey: {
                    locationName: 'private_key'
                  },
                  TeamId: {
                    locationName: 'team_id'
                  }
                }
              }
            }
          },
          S13: {
            type: 'structure',
            sensitive: true,
            members: {
              ClientId: {
                locationName: 'client_id'
              },
              ClientSecret: {
                locationName: 'client_secret'
              }
            }
          },
          S16: {
            type: 'list',
            member: {}
          },
          S1h: {
            type: 'structure',
            members: {
              Authenticated: {
                locationName: 'authenticated',
                type: 'list',
                member: {}
              },
              UnAuthenticated: {
                locationName: 'unAuthenticated',
                type: 'list',
                member: {}
              }
            },
            required: ['Authenticated']
          },
          S3c: {
            type: 'structure',
            members: {
              AwsCognitoIdentityPoolId: {
                locationName: 'aws_cognito_identity_pool_id'
              },
              AwsCognitoRegion: {
                locationName: 'aws_cognito_region'
              },
              AwsUserPoolsId: {
                locationName: 'aws_user_pools_id'
              },
              AwsUserPoolsWebClientId: {
                locationName: 'aws_user_pools_web_client_id'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=62c262ab5ff9ccc22ab8fa2cff806f1e92242dc6.js.map