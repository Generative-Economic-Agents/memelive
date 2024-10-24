System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-03-31',
          endpointPrefix: 'lambda',
          protocol: 'rest-json',
          serviceFullName: 'AWS Lambda',
          serviceId: 'Lambda',
          signatureVersion: 'v4',
          uid: 'lambda-2015-03-31'
        },
        operations: {
          AddLayerVersionPermission: {
            http: {
              requestUri: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['LayerName', 'VersionNumber', 'StatementId', 'Action', 'Principal'],
              members: {
                LayerName: {
                  location: 'uri',
                  locationName: 'LayerName'
                },
                VersionNumber: {
                  location: 'uri',
                  locationName: 'VersionNumber',
                  type: 'long'
                },
                StatementId: {},
                Action: {},
                Principal: {},
                OrganizationId: {},
                RevisionId: {
                  location: 'querystring',
                  locationName: 'RevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Statement: {},
                RevisionId: {}
              }
            }
          },
          AddPermission: {
            http: {
              requestUri: '/2015-03-31/functions/{FunctionName}/policy',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'StatementId', 'Action', 'Principal'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                StatementId: {},
                Action: {},
                Principal: {},
                SourceArn: {},
                SourceAccount: {},
                EventSourceToken: {},
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                RevisionId: {},
                PrincipalOrgID: {},
                FunctionUrlAuthType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Statement: {}
              }
            }
          },
          CreateAlias: {
            http: {
              requestUri: '/2015-03-31/functions/{FunctionName}/aliases',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'Name', 'FunctionVersion'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Name: {},
                FunctionVersion: {},
                Description: {},
                RoutingConfig: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              shape: 'St'
            }
          },
          CreateCodeSigningConfig: {
            http: {
              requestUri: '/2020-04-22/code-signing-configs/',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AllowedPublishers'],
              members: {
                Description: {},
                AllowedPublishers: {
                  shape: 'Sw'
                },
                CodeSigningPolicies: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CodeSigningConfig'],
              members: {
                CodeSigningConfig: {
                  shape: 'S11'
                }
              }
            }
          },
          CreateEventSourceMapping: {
            http: {
              requestUri: '/2015-03-31/event-source-mappings/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                EventSourceArn: {},
                FunctionName: {},
                Enabled: {
                  type: 'boolean'
                },
                BatchSize: {
                  type: 'integer'
                },
                FilterCriteria: {
                  shape: 'S18'
                },
                MaximumBatchingWindowInSeconds: {
                  type: 'integer'
                },
                ParallelizationFactor: {
                  type: 'integer'
                },
                StartingPosition: {},
                StartingPositionTimestamp: {
                  type: 'timestamp'
                },
                DestinationConfig: {
                  shape: 'S1g'
                },
                MaximumRecordAgeInSeconds: {
                  type: 'integer'
                },
                BisectBatchOnFunctionError: {
                  type: 'boolean'
                },
                MaximumRetryAttempts: {
                  type: 'integer'
                },
                TumblingWindowInSeconds: {
                  type: 'integer'
                },
                Topics: {
                  shape: 'S1o'
                },
                Queues: {
                  shape: 'S1q'
                },
                SourceAccessConfigurations: {
                  shape: 'S1s'
                },
                SelfManagedEventSource: {
                  shape: 'S1w'
                },
                FunctionResponseTypes: {
                  shape: 'S21'
                },
                AmazonManagedKafkaEventSourceConfig: {
                  shape: 'S23'
                },
                SelfManagedKafkaEventSourceConfig: {
                  shape: 'S24'
                },
                ScalingConfig: {
                  shape: 'S25'
                },
                DocumentDBEventSourceConfig: {
                  shape: 'S27'
                }
              }
            },
            output: {
              shape: 'S2b'
            }
          },
          CreateFunction: {
            http: {
              requestUri: '/2015-03-31/functions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'Role', 'Code'],
              members: {
                FunctionName: {},
                Runtime: {},
                Role: {},
                Handler: {},
                Code: {
                  type: 'structure',
                  members: {
                    ZipFile: {
                      shape: 'S2h'
                    },
                    S3Bucket: {},
                    S3Key: {},
                    S3ObjectVersion: {},
                    ImageUri: {}
                  }
                },
                Description: {},
                Timeout: {
                  type: 'integer'
                },
                MemorySize: {
                  type: 'integer'
                },
                Publish: {
                  type: 'boolean'
                },
                VpcConfig: {
                  shape: 'S2o'
                },
                PackageType: {},
                DeadLetterConfig: {
                  shape: 'S2v'
                },
                Environment: {
                  shape: 'S2x'
                },
                KMSKeyArn: {},
                TracingConfig: {
                  shape: 'S32'
                },
                Tags: {
                  shape: 'S34'
                },
                Layers: {
                  shape: 'S37'
                },
                FileSystemConfigs: {
                  shape: 'S39'
                },
                ImageConfig: {
                  shape: 'S3d'
                },
                CodeSigningConfigArn: {},
                Architectures: {
                  shape: 'S3g'
                },
                EphemeralStorage: {
                  shape: 'S3i'
                },
                SnapStart: {
                  shape: 'S3k'
                },
                LoggingConfig: {
                  shape: 'S3m'
                }
              }
            },
            output: {
              shape: 'S3r'
            }
          },
          CreateFunctionUrlConfig: {
            http: {
              requestUri: '/2021-10-31/functions/{FunctionName}/url',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'AuthType'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                AuthType: {},
                Cors: {
                  shape: 'S4i'
                },
                InvokeMode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['FunctionUrl', 'FunctionArn', 'AuthType', 'CreationTime'],
              members: {
                FunctionUrl: {},
                FunctionArn: {},
                AuthType: {},
                Cors: {
                  shape: 'S4i'
                },
                CreationTime: {},
                InvokeMode: {}
              }
            }
          },
          DeleteAlias: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'Name'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            }
          },
          DeleteCodeSigningConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['CodeSigningConfigArn'],
              members: {
                CodeSigningConfigArn: {
                  location: 'uri',
                  locationName: 'CodeSigningConfigArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEventSourceMapping: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-03-31/event-source-mappings/{UUID}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['UUID'],
              members: {
                UUID: {
                  location: 'uri',
                  locationName: 'UUID'
                }
              }
            },
            output: {
              shape: 'S2b'
            }
          },
          DeleteFunction: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-03-31/functions/{FunctionName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            }
          },
          DeleteFunctionCodeSigningConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-06-30/functions/{FunctionName}/code-signing-config',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                }
              }
            }
          },
          DeleteFunctionConcurrency: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-10-31/functions/{FunctionName}/concurrency',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                }
              }
            }
          },
          DeleteFunctionEventInvokeConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/2019-09-25/functions/{FunctionName}/event-invoke-config',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            }
          },
          DeleteFunctionUrlConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/2021-10-31/functions/{FunctionName}/url',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            }
          },
          DeleteLayerVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['LayerName', 'VersionNumber'],
              members: {
                LayerName: {
                  location: 'uri',
                  locationName: 'LayerName'
                },
                VersionNumber: {
                  location: 'uri',
                  locationName: 'VersionNumber',
                  type: 'long'
                }
              }
            }
          },
          DeleteProvisionedConcurrencyConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/2019-09-30/functions/{FunctionName}/provisioned-concurrency',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'Qualifier'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            }
          },
          GetAccountSettings: {
            http: {
              method: 'GET',
              requestUri: '/2016-08-19/account-settings/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AccountLimit: {
                  type: 'structure',
                  members: {
                    TotalCodeSize: {
                      type: 'long'
                    },
                    CodeSizeUnzipped: {
                      type: 'long'
                    },
                    CodeSizeZipped: {
                      type: 'long'
                    },
                    ConcurrentExecutions: {
                      type: 'integer'
                    },
                    UnreservedConcurrentExecutions: {
                      type: 'integer'
                    }
                  }
                },
                AccountUsage: {
                  type: 'structure',
                  members: {
                    TotalCodeSize: {
                      type: 'long'
                    },
                    FunctionCount: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          GetAlias: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'Name'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              shape: 'St'
            }
          },
          GetCodeSigningConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CodeSigningConfigArn'],
              members: {
                CodeSigningConfigArn: {
                  location: 'uri',
                  locationName: 'CodeSigningConfigArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CodeSigningConfig'],
              members: {
                CodeSigningConfig: {
                  shape: 'S11'
                }
              }
            }
          },
          GetEventSourceMapping: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/event-source-mappings/{UUID}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['UUID'],
              members: {
                UUID: {
                  location: 'uri',
                  locationName: 'UUID'
                }
              }
            },
            output: {
              shape: 'S2b'
            }
          },
          GetFunction: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/functions/{FunctionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Configuration: {
                  shape: 'S3r'
                },
                Code: {
                  type: 'structure',
                  members: {
                    RepositoryType: {},
                    Location: {},
                    ImageUri: {},
                    ResolvedImageUri: {}
                  }
                },
                Tags: {
                  shape: 'S34'
                },
                Concurrency: {
                  shape: 'S5i'
                }
              }
            }
          },
          GetFunctionCodeSigningConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-06-30/functions/{FunctionName}/code-signing-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CodeSigningConfigArn', 'FunctionName'],
              members: {
                CodeSigningConfigArn: {},
                FunctionName: {}
              }
            }
          },
          GetFunctionConcurrency: {
            http: {
              method: 'GET',
              requestUri: '/2019-09-30/functions/{FunctionName}/concurrency',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReservedConcurrentExecutions: {
                  type: 'integer'
                }
              }
            }
          },
          GetFunctionConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/functions/{FunctionName}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            },
            output: {
              shape: 'S3r'
            }
          },
          GetFunctionEventInvokeConfig: {
            http: {
              method: 'GET',
              requestUri: '/2019-09-25/functions/{FunctionName}/event-invoke-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            },
            output: {
              shape: 'S5q'
            }
          },
          GetFunctionUrlConfig: {
            http: {
              method: 'GET',
              requestUri: '/2021-10-31/functions/{FunctionName}/url',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FunctionUrl', 'FunctionArn', 'AuthType', 'CreationTime', 'LastModifiedTime'],
              members: {
                FunctionUrl: {},
                FunctionArn: {},
                AuthType: {},
                Cors: {
                  shape: 'S4i'
                },
                CreationTime: {},
                LastModifiedTime: {},
                InvokeMode: {}
              }
            }
          },
          GetLayerVersion: {
            http: {
              method: 'GET',
              requestUri: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['LayerName', 'VersionNumber'],
              members: {
                LayerName: {
                  location: 'uri',
                  locationName: 'LayerName'
                },
                VersionNumber: {
                  location: 'uri',
                  locationName: 'VersionNumber',
                  type: 'long'
                }
              }
            },
            output: {
              shape: 'S5w'
            }
          },
          GetLayerVersionByArn: {
            http: {
              method: 'GET',
              requestUri: '/2018-10-31/layers?find=LayerVersion',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'querystring',
                  locationName: 'Arn'
                }
              }
            },
            output: {
              shape: 'S5w'
            }
          },
          GetLayerVersionPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['LayerName', 'VersionNumber'],
              members: {
                LayerName: {
                  location: 'uri',
                  locationName: 'LayerName'
                },
                VersionNumber: {
                  location: 'uri',
                  locationName: 'VersionNumber',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {},
                RevisionId: {}
              }
            }
          },
          GetPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/functions/{FunctionName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {},
                RevisionId: {}
              }
            }
          },
          GetProvisionedConcurrencyConfig: {
            http: {
              method: 'GET',
              requestUri: '/2019-09-30/functions/{FunctionName}/provisioned-concurrency',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'Qualifier'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestedProvisionedConcurrentExecutions: {
                  type: 'integer'
                },
                AvailableProvisionedConcurrentExecutions: {
                  type: 'integer'
                },
                AllocatedProvisionedConcurrentExecutions: {
                  type: 'integer'
                },
                Status: {},
                StatusReason: {},
                LastModified: {}
              }
            }
          },
          GetRuntimeManagementConfig: {
            http: {
              method: 'GET',
              requestUri: '/2021-07-20/functions/{FunctionName}/runtime-management-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpdateRuntimeOn: {},
                RuntimeVersionArn: {},
                FunctionArn: {}
              }
            }
          },
          Invoke: {
            http: {
              requestUri: '/2015-03-31/functions/{FunctionName}/invocations'
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                InvocationType: {
                  location: 'header',
                  locationName: 'X-Amz-Invocation-Type'
                },
                LogType: {
                  location: 'header',
                  locationName: 'X-Amz-Log-Type'
                },
                ClientContext: {
                  location: 'header',
                  locationName: 'X-Amz-Client-Context'
                },
                Payload: {
                  shape: 'S2h'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                }
              },
              payload: 'Payload'
            },
            output: {
              type: 'structure',
              members: {
                StatusCode: {
                  location: 'statusCode',
                  type: 'integer'
                },
                FunctionError: {
                  location: 'header',
                  locationName: 'X-Amz-Function-Error'
                },
                LogResult: {
                  location: 'header',
                  locationName: 'X-Amz-Log-Result'
                },
                Payload: {
                  shape: 'S2h'
                },
                ExecutedVersion: {
                  location: 'header',
                  locationName: 'X-Amz-Executed-Version'
                }
              },
              payload: 'Payload'
            }
          },
          InvokeAsync: {
            http: {
              requestUri: '/2014-11-13/functions/{FunctionName}/invoke-async/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'InvokeArgs'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                InvokeArgs: {
                  type: 'blob',
                  streaming: true
                }
              },
              deprecated: true,
              payload: 'InvokeArgs'
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              },
              deprecated: true
            },
            deprecated: true
          },
          InvokeWithResponseStream: {
            http: {
              requestUri: '/2021-11-15/functions/{FunctionName}/response-streaming-invocations'
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                InvocationType: {
                  location: 'header',
                  locationName: 'X-Amz-Invocation-Type'
                },
                LogType: {
                  location: 'header',
                  locationName: 'X-Amz-Log-Type'
                },
                ClientContext: {
                  location: 'header',
                  locationName: 'X-Amz-Client-Context'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                Payload: {
                  shape: 'S2h'
                }
              },
              payload: 'Payload'
            },
            output: {
              type: 'structure',
              members: {
                StatusCode: {
                  location: 'statusCode',
                  type: 'integer'
                },
                ExecutedVersion: {
                  location: 'header',
                  locationName: 'X-Amz-Executed-Version'
                },
                EventStream: {
                  type: 'structure',
                  members: {
                    PayloadChunk: {
                      type: 'structure',
                      members: {
                        Payload: {
                          shape: 'S2h',
                          eventpayload: true
                        }
                      },
                      event: true
                    },
                    InvokeComplete: {
                      type: 'structure',
                      members: {
                        ErrorCode: {},
                        ErrorDetails: {},
                        LogResult: {}
                      },
                      event: true
                    }
                  },
                  eventstream: true
                },
                ResponseStreamContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                }
              },
              payload: 'EventStream'
            }
          },
          ListAliases: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/functions/{FunctionName}/aliases',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                FunctionVersion: {
                  location: 'querystring',
                  locationName: 'FunctionVersion'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                Aliases: {
                  type: 'list',
                  member: {
                    shape: 'St'
                  }
                }
              }
            }
          },
          ListCodeSigningConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2020-04-22/code-signing-configs/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                CodeSigningConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S11'
                  }
                }
              }
            }
          },
          ListEventSourceMappings: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/event-source-mappings/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                EventSourceArn: {
                  location: 'querystring',
                  locationName: 'EventSourceArn'
                },
                FunctionName: {
                  location: 'querystring',
                  locationName: 'FunctionName'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                EventSourceMappings: {
                  type: 'list',
                  member: {
                    shape: 'S2b'
                  }
                }
              }
            }
          },
          ListFunctionEventInvokeConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2019-09-25/functions/{FunctionName}/event-invoke-config/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FunctionEventInvokeConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S5q'
                  }
                },
                NextMarker: {}
              }
            }
          },
          ListFunctionUrlConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2021-10-31/functions/{FunctionName}/urls',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FunctionUrlConfigs'],
              members: {
                FunctionUrlConfigs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FunctionUrl', 'FunctionArn', 'CreationTime', 'LastModifiedTime', 'AuthType'],
                    members: {
                      FunctionUrl: {},
                      FunctionArn: {},
                      CreationTime: {},
                      LastModifiedTime: {},
                      Cors: {
                        shape: 'S4i'
                      },
                      AuthType: {},
                      InvokeMode: {}
                    }
                  }
                },
                NextMarker: {}
              }
            }
          },
          ListFunctions: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/functions/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MasterRegion: {
                  location: 'querystring',
                  locationName: 'MasterRegion'
                },
                FunctionVersion: {
                  location: 'querystring',
                  locationName: 'FunctionVersion'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                Functions: {
                  shape: 'S7g'
                }
              }
            }
          },
          ListFunctionsByCodeSigningConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CodeSigningConfigArn'],
              members: {
                CodeSigningConfigArn: {
                  location: 'uri',
                  locationName: 'CodeSigningConfigArn'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                FunctionArns: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListLayerVersions: {
            http: {
              method: 'GET',
              requestUri: '/2018-10-31/layers/{LayerName}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['LayerName'],
              members: {
                CompatibleRuntime: {
                  location: 'querystring',
                  locationName: 'CompatibleRuntime'
                },
                LayerName: {
                  location: 'uri',
                  locationName: 'LayerName'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                },
                CompatibleArchitecture: {
                  location: 'querystring',
                  locationName: 'CompatibleArchitecture'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                LayerVersions: {
                  type: 'list',
                  member: {
                    shape: 'S7o'
                  }
                }
              }
            }
          },
          ListLayers: {
            http: {
              method: 'GET',
              requestUri: '/2018-10-31/layers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CompatibleRuntime: {
                  location: 'querystring',
                  locationName: 'CompatibleRuntime'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                },
                CompatibleArchitecture: {
                  location: 'querystring',
                  locationName: 'CompatibleArchitecture'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                Layers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LayerName: {},
                      LayerArn: {},
                      LatestMatchingVersion: {
                        shape: 'S7o'
                      }
                    }
                  }
                }
              }
            }
          },
          ListProvisionedConcurrencyConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2019-09-30/functions/{FunctionName}/provisioned-concurrency?List=ALL',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisionedConcurrencyConfigs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FunctionArn: {},
                      RequestedProvisionedConcurrentExecutions: {
                        type: 'integer'
                      },
                      AvailableProvisionedConcurrentExecutions: {
                        type: 'integer'
                      },
                      AllocatedProvisionedConcurrentExecutions: {
                        type: 'integer'
                      },
                      Status: {},
                      StatusReason: {},
                      LastModified: {}
                    }
                  }
                },
                NextMarker: {}
              }
            }
          },
          ListTags: {
            http: {
              method: 'GET',
              requestUri: '/2017-03-31/tags/{ARN}'
            },
            input: {
              type: 'structure',
              required: ['Resource'],
              members: {
                Resource: {
                  location: 'uri',
                  locationName: 'ARN'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S34'
                }
              }
            }
          },
          ListVersionsByFunction: {
            http: {
              method: 'GET',
              requestUri: '/2015-03-31/functions/{FunctionName}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                Versions: {
                  shape: 'S7g'
                }
              }
            }
          },
          PublishLayerVersion: {
            http: {
              requestUri: '/2018-10-31/layers/{LayerName}/versions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['LayerName', 'Content'],
              members: {
                LayerName: {
                  location: 'uri',
                  locationName: 'LayerName'
                },
                Description: {},
                Content: {
                  type: 'structure',
                  members: {
                    S3Bucket: {},
                    S3Key: {},
                    S3ObjectVersion: {},
                    ZipFile: {
                      shape: 'S2h'
                    }
                  }
                },
                CompatibleRuntimes: {
                  shape: 'S5z'
                },
                LicenseInfo: {},
                CompatibleArchitectures: {
                  shape: 'S61'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Content: {
                  shape: 'S5x'
                },
                LayerArn: {},
                LayerVersionArn: {},
                Description: {},
                CreatedDate: {},
                Version: {
                  type: 'long'
                },
                CompatibleRuntimes: {
                  shape: 'S5z'
                },
                LicenseInfo: {},
                CompatibleArchitectures: {
                  shape: 'S61'
                }
              }
            }
          },
          PublishVersion: {
            http: {
              requestUri: '/2015-03-31/functions/{FunctionName}/versions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                CodeSha256: {},
                Description: {},
                RevisionId: {}
              }
            },
            output: {
              shape: 'S3r'
            }
          },
          PutFunctionCodeSigningConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2020-06-30/functions/{FunctionName}/code-signing-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CodeSigningConfigArn', 'FunctionName'],
              members: {
                CodeSigningConfigArn: {},
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CodeSigningConfigArn', 'FunctionName'],
              members: {
                CodeSigningConfigArn: {},
                FunctionName: {}
              }
            }
          },
          PutFunctionConcurrency: {
            http: {
              method: 'PUT',
              requestUri: '/2017-10-31/functions/{FunctionName}/concurrency',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'ReservedConcurrentExecutions'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                ReservedConcurrentExecutions: {
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S5i'
            }
          },
          PutFunctionEventInvokeConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2019-09-25/functions/{FunctionName}/event-invoke-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                MaximumRetryAttempts: {
                  type: 'integer'
                },
                MaximumEventAgeInSeconds: {
                  type: 'integer'
                },
                DestinationConfig: {
                  shape: 'S1g'
                }
              }
            },
            output: {
              shape: 'S5q'
            }
          },
          PutProvisionedConcurrencyConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2019-09-30/functions/{FunctionName}/provisioned-concurrency',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'Qualifier', 'ProvisionedConcurrentExecutions'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                ProvisionedConcurrentExecutions: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestedProvisionedConcurrentExecutions: {
                  type: 'integer'
                },
                AvailableProvisionedConcurrentExecutions: {
                  type: 'integer'
                },
                AllocatedProvisionedConcurrentExecutions: {
                  type: 'integer'
                },
                Status: {},
                StatusReason: {},
                LastModified: {}
              }
            }
          },
          PutRuntimeManagementConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2021-07-20/functions/{FunctionName}/runtime-management-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'UpdateRuntimeOn'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                UpdateRuntimeOn: {},
                RuntimeVersionArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateRuntimeOn', 'FunctionArn'],
              members: {
                UpdateRuntimeOn: {},
                FunctionArn: {},
                RuntimeVersionArn: {}
              }
            }
          },
          RemoveLayerVersionPermission: {
            http: {
              method: 'DELETE',
              requestUri: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['LayerName', 'VersionNumber', 'StatementId'],
              members: {
                LayerName: {
                  location: 'uri',
                  locationName: 'LayerName'
                },
                VersionNumber: {
                  location: 'uri',
                  locationName: 'VersionNumber',
                  type: 'long'
                },
                StatementId: {
                  location: 'uri',
                  locationName: 'StatementId'
                },
                RevisionId: {
                  location: 'querystring',
                  locationName: 'RevisionId'
                }
              }
            }
          },
          RemovePermission: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-03-31/functions/{FunctionName}/policy/{StatementId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'StatementId'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                StatementId: {
                  location: 'uri',
                  locationName: 'StatementId'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                RevisionId: {
                  location: 'querystring',
                  locationName: 'RevisionId'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/2017-03-31/tags/{ARN}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Resource', 'Tags'],
              members: {
                Resource: {
                  location: 'uri',
                  locationName: 'ARN'
                },
                Tags: {
                  shape: 'S34'
                }
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-03-31/tags/{ARN}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Resource', 'TagKeys'],
              members: {
                Resource: {
                  location: 'uri',
                  locationName: 'ARN'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateAlias: {
            http: {
              method: 'PUT',
              requestUri: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'Name'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                FunctionVersion: {},
                Description: {},
                RoutingConfig: {
                  shape: 'Sp'
                },
                RevisionId: {}
              }
            },
            output: {
              shape: 'St'
            }
          },
          UpdateCodeSigningConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CodeSigningConfigArn'],
              members: {
                CodeSigningConfigArn: {
                  location: 'uri',
                  locationName: 'CodeSigningConfigArn'
                },
                Description: {},
                AllowedPublishers: {
                  shape: 'Sw'
                },
                CodeSigningPolicies: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CodeSigningConfig'],
              members: {
                CodeSigningConfig: {
                  shape: 'S11'
                }
              }
            }
          },
          UpdateEventSourceMapping: {
            http: {
              method: 'PUT',
              requestUri: '/2015-03-31/event-source-mappings/{UUID}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['UUID'],
              members: {
                UUID: {
                  location: 'uri',
                  locationName: 'UUID'
                },
                FunctionName: {},
                Enabled: {
                  type: 'boolean'
                },
                BatchSize: {
                  type: 'integer'
                },
                FilterCriteria: {
                  shape: 'S18'
                },
                MaximumBatchingWindowInSeconds: {
                  type: 'integer'
                },
                DestinationConfig: {
                  shape: 'S1g'
                },
                MaximumRecordAgeInSeconds: {
                  type: 'integer'
                },
                BisectBatchOnFunctionError: {
                  type: 'boolean'
                },
                MaximumRetryAttempts: {
                  type: 'integer'
                },
                ParallelizationFactor: {
                  type: 'integer'
                },
                SourceAccessConfigurations: {
                  shape: 'S1s'
                },
                TumblingWindowInSeconds: {
                  type: 'integer'
                },
                FunctionResponseTypes: {
                  shape: 'S21'
                },
                ScalingConfig: {
                  shape: 'S25'
                },
                DocumentDBEventSourceConfig: {
                  shape: 'S27'
                }
              }
            },
            output: {
              shape: 'S2b'
            }
          },
          UpdateFunctionCode: {
            http: {
              method: 'PUT',
              requestUri: '/2015-03-31/functions/{FunctionName}/code',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                ZipFile: {
                  shape: 'S2h'
                },
                S3Bucket: {},
                S3Key: {},
                S3ObjectVersion: {},
                ImageUri: {},
                Publish: {
                  type: 'boolean'
                },
                DryRun: {
                  type: 'boolean'
                },
                RevisionId: {},
                Architectures: {
                  shape: 'S3g'
                }
              }
            },
            output: {
              shape: 'S3r'
            }
          },
          UpdateFunctionConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/2015-03-31/functions/{FunctionName}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Role: {},
                Handler: {},
                Description: {},
                Timeout: {
                  type: 'integer'
                },
                MemorySize: {
                  type: 'integer'
                },
                VpcConfig: {
                  shape: 'S2o'
                },
                Environment: {
                  shape: 'S2x'
                },
                Runtime: {},
                DeadLetterConfig: {
                  shape: 'S2v'
                },
                KMSKeyArn: {},
                TracingConfig: {
                  shape: 'S32'
                },
                RevisionId: {},
                Layers: {
                  shape: 'S37'
                },
                FileSystemConfigs: {
                  shape: 'S39'
                },
                ImageConfig: {
                  shape: 'S3d'
                },
                EphemeralStorage: {
                  shape: 'S3i'
                },
                SnapStart: {
                  shape: 'S3k'
                },
                LoggingConfig: {
                  shape: 'S3m'
                }
              }
            },
            output: {
              shape: 'S3r'
            }
          },
          UpdateFunctionEventInvokeConfig: {
            http: {
              requestUri: '/2019-09-25/functions/{FunctionName}/event-invoke-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                MaximumRetryAttempts: {
                  type: 'integer'
                },
                MaximumEventAgeInSeconds: {
                  type: 'integer'
                },
                DestinationConfig: {
                  shape: 'S1g'
                }
              }
            },
            output: {
              shape: 'S5q'
            }
          },
          UpdateFunctionUrlConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2021-10-31/functions/{FunctionName}/url',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Qualifier: {
                  location: 'querystring',
                  locationName: 'Qualifier'
                },
                AuthType: {},
                Cors: {
                  shape: 'S4i'
                },
                InvokeMode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['FunctionUrl', 'FunctionArn', 'AuthType', 'CreationTime', 'LastModifiedTime'],
              members: {
                FunctionUrl: {},
                FunctionArn: {},
                AuthType: {},
                Cors: {
                  shape: 'S4i'
                },
                CreationTime: {},
                LastModifiedTime: {},
                InvokeMode: {}
              }
            }
          }
        },
        shapes: {
          Sp: {
            type: 'structure',
            members: {
              AdditionalVersionWeights: {
                type: 'map',
                key: {},
                value: {
                  type: 'double'
                }
              }
            }
          },
          St: {
            type: 'structure',
            members: {
              AliasArn: {},
              Name: {},
              FunctionVersion: {},
              Description: {},
              RoutingConfig: {
                shape: 'Sp'
              },
              RevisionId: {}
            }
          },
          Sw: {
            type: 'structure',
            required: ['SigningProfileVersionArns'],
            members: {
              SigningProfileVersionArns: {
                type: 'list',
                member: {}
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              UntrustedArtifactOnDeployment: {}
            }
          },
          S11: {
            type: 'structure',
            required: ['CodeSigningConfigId', 'CodeSigningConfigArn', 'AllowedPublishers', 'CodeSigningPolicies', 'LastModified'],
            members: {
              CodeSigningConfigId: {},
              CodeSigningConfigArn: {},
              Description: {},
              AllowedPublishers: {
                shape: 'Sw'
              },
              CodeSigningPolicies: {
                shape: 'Sy'
              },
              LastModified: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              Filters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Pattern: {}
                  }
                }
              }
            }
          },
          S1g: {
            type: 'structure',
            members: {
              OnSuccess: {
                type: 'structure',
                members: {
                  Destination: {}
                }
              },
              OnFailure: {
                type: 'structure',
                members: {
                  Destination: {}
                }
              }
            }
          },
          S1o: {
            type: 'list',
            member: {}
          },
          S1q: {
            type: 'list',
            member: {}
          },
          S1s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                URI: {}
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              Endpoints: {
                type: 'map',
                key: {},
                value: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S21: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'structure',
            members: {
              ConsumerGroupId: {}
            }
          },
          S24: {
            type: 'structure',
            members: {
              ConsumerGroupId: {}
            }
          },
          S25: {
            type: 'structure',
            members: {
              MaximumConcurrency: {
                type: 'integer'
              }
            }
          },
          S27: {
            type: 'structure',
            members: {
              DatabaseName: {},
              CollectionName: {},
              FullDocument: {}
            }
          },
          S2b: {
            type: 'structure',
            members: {
              UUID: {},
              StartingPosition: {},
              StartingPositionTimestamp: {
                type: 'timestamp'
              },
              BatchSize: {
                type: 'integer'
              },
              MaximumBatchingWindowInSeconds: {
                type: 'integer'
              },
              ParallelizationFactor: {
                type: 'integer'
              },
              EventSourceArn: {},
              FilterCriteria: {
                shape: 'S18'
              },
              FunctionArn: {},
              LastModified: {
                type: 'timestamp'
              },
              LastProcessingResult: {},
              State: {},
              StateTransitionReason: {},
              DestinationConfig: {
                shape: 'S1g'
              },
              Topics: {
                shape: 'S1o'
              },
              Queues: {
                shape: 'S1q'
              },
              SourceAccessConfigurations: {
                shape: 'S1s'
              },
              SelfManagedEventSource: {
                shape: 'S1w'
              },
              MaximumRecordAgeInSeconds: {
                type: 'integer'
              },
              BisectBatchOnFunctionError: {
                type: 'boolean'
              },
              MaximumRetryAttempts: {
                type: 'integer'
              },
              TumblingWindowInSeconds: {
                type: 'integer'
              },
              FunctionResponseTypes: {
                shape: 'S21'
              },
              AmazonManagedKafkaEventSourceConfig: {
                shape: 'S23'
              },
              SelfManagedKafkaEventSourceConfig: {
                shape: 'S24'
              },
              ScalingConfig: {
                shape: 'S25'
              },
              DocumentDBEventSourceConfig: {
                shape: 'S27'
              }
            }
          },
          S2h: {
            type: 'blob',
            sensitive: true
          },
          S2o: {
            type: 'structure',
            members: {
              SubnetIds: {
                shape: 'S2p'
              },
              SecurityGroupIds: {
                shape: 'S2r'
              },
              Ipv6AllowedForDualStack: {
                type: 'boolean'
              }
            }
          },
          S2p: {
            type: 'list',
            member: {}
          },
          S2r: {
            type: 'list',
            member: {}
          },
          S2v: {
            type: 'structure',
            members: {
              TargetArn: {}
            }
          },
          S2x: {
            type: 'structure',
            members: {
              Variables: {
                shape: 'S2y'
              }
            }
          },
          S2y: {
            type: 'map',
            key: {
              type: 'string',
              sensitive: true
            },
            value: {
              type: 'string',
              sensitive: true
            },
            sensitive: true
          },
          S32: {
            type: 'structure',
            members: {
              Mode: {}
            }
          },
          S34: {
            type: 'map',
            key: {},
            value: {}
          },
          S37: {
            type: 'list',
            member: {}
          },
          S39: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Arn', 'LocalMountPath'],
              members: {
                Arn: {},
                LocalMountPath: {}
              }
            }
          },
          S3d: {
            type: 'structure',
            members: {
              EntryPoint: {
                shape: 'S3e'
              },
              Command: {
                shape: 'S3e'
              },
              WorkingDirectory: {}
            }
          },
          S3e: {
            type: 'list',
            member: {}
          },
          S3g: {
            type: 'list',
            member: {}
          },
          S3i: {
            type: 'structure',
            required: ['Size'],
            members: {
              Size: {
                type: 'integer'
              }
            }
          },
          S3k: {
            type: 'structure',
            members: {
              ApplyOn: {}
            }
          },
          S3m: {
            type: 'structure',
            members: {
              LogFormat: {},
              ApplicationLogLevel: {},
              SystemLogLevel: {},
              LogGroup: {}
            }
          },
          S3r: {
            type: 'structure',
            members: {
              FunctionName: {},
              FunctionArn: {},
              Runtime: {},
              Role: {},
              Handler: {},
              CodeSize: {
                type: 'long'
              },
              Description: {},
              Timeout: {
                type: 'integer'
              },
              MemorySize: {
                type: 'integer'
              },
              LastModified: {},
              CodeSha256: {},
              Version: {},
              VpcConfig: {
                type: 'structure',
                members: {
                  SubnetIds: {
                    shape: 'S2p'
                  },
                  SecurityGroupIds: {
                    shape: 'S2r'
                  },
                  VpcId: {},
                  Ipv6AllowedForDualStack: {
                    type: 'boolean'
                  }
                }
              },
              DeadLetterConfig: {
                shape: 'S2v'
              },
              Environment: {
                type: 'structure',
                members: {
                  Variables: {
                    shape: 'S2y'
                  },
                  Error: {
                    type: 'structure',
                    members: {
                      ErrorCode: {},
                      Message: {
                        shape: 'S3z'
                      }
                    }
                  }
                }
              },
              KMSKeyArn: {},
              TracingConfig: {
                type: 'structure',
                members: {
                  Mode: {}
                }
              },
              MasterArn: {},
              RevisionId: {},
              Layers: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    CodeSize: {
                      type: 'long'
                    },
                    SigningProfileVersionArn: {},
                    SigningJobArn: {}
                  }
                }
              },
              State: {},
              StateReason: {},
              StateReasonCode: {},
              LastUpdateStatus: {},
              LastUpdateStatusReason: {},
              LastUpdateStatusReasonCode: {},
              FileSystemConfigs: {
                shape: 'S39'
              },
              PackageType: {},
              ImageConfigResponse: {
                type: 'structure',
                members: {
                  ImageConfig: {
                    shape: 'S3d'
                  },
                  Error: {
                    type: 'structure',
                    members: {
                      ErrorCode: {},
                      Message: {
                        shape: 'S3z'
                      }
                    }
                  }
                }
              },
              SigningProfileVersionArn: {},
              SigningJobArn: {},
              Architectures: {
                shape: 'S3g'
              },
              EphemeralStorage: {
                shape: 'S3i'
              },
              SnapStart: {
                type: 'structure',
                members: {
                  ApplyOn: {},
                  OptimizationStatus: {}
                }
              },
              RuntimeVersionConfig: {
                type: 'structure',
                members: {
                  RuntimeVersionArn: {},
                  Error: {
                    type: 'structure',
                    members: {
                      ErrorCode: {},
                      Message: {
                        shape: 'S3z'
                      }
                    }
                  }
                }
              },
              LoggingConfig: {
                shape: 'S3m'
              }
            }
          },
          S3z: {
            type: 'string',
            sensitive: true
          },
          S4i: {
            type: 'structure',
            members: {
              AllowCredentials: {
                type: 'boolean'
              },
              AllowHeaders: {
                shape: 'S4k'
              },
              AllowMethods: {
                type: 'list',
                member: {}
              },
              AllowOrigins: {
                type: 'list',
                member: {}
              },
              ExposeHeaders: {
                shape: 'S4k'
              },
              MaxAge: {
                type: 'integer'
              }
            }
          },
          S4k: {
            type: 'list',
            member: {}
          },
          S5i: {
            type: 'structure',
            members: {
              ReservedConcurrentExecutions: {
                type: 'integer'
              }
            }
          },
          S5q: {
            type: 'structure',
            members: {
              LastModified: {
                type: 'timestamp'
              },
              FunctionArn: {},
              MaximumRetryAttempts: {
                type: 'integer'
              },
              MaximumEventAgeInSeconds: {
                type: 'integer'
              },
              DestinationConfig: {
                shape: 'S1g'
              }
            }
          },
          S5w: {
            type: 'structure',
            members: {
              Content: {
                shape: 'S5x'
              },
              LayerArn: {},
              LayerVersionArn: {},
              Description: {},
              CreatedDate: {},
              Version: {
                type: 'long'
              },
              CompatibleRuntimes: {
                shape: 'S5z'
              },
              LicenseInfo: {},
              CompatibleArchitectures: {
                shape: 'S61'
              }
            }
          },
          S5x: {
            type: 'structure',
            members: {
              Location: {},
              CodeSha256: {},
              CodeSize: {
                type: 'long'
              },
              SigningProfileVersionArn: {},
              SigningJobArn: {}
            }
          },
          S5z: {
            type: 'list',
            member: {}
          },
          S61: {
            type: 'list',
            member: {}
          },
          S7g: {
            type: 'list',
            member: {
              shape: 'S3r'
            }
          },
          S7o: {
            type: 'structure',
            members: {
              LayerVersionArn: {},
              Version: {
                type: 'long'
              },
              Description: {},
              CreatedDate: {},
              CompatibleRuntimes: {
                shape: 'S5z'
              },
              LicenseInfo: {},
              CompatibleArchitectures: {
                shape: 'S61'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=93f39c5877aedaf069b1f004f269ce5223a758a7.js.map