System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'entityresolution',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'AWSEntityResolution',
          serviceFullName: 'AWS EntityResolution',
          serviceId: 'EntityResolution',
          signatureVersion: 'v4',
          signingName: 'entityresolution',
          uid: 'entityresolution-2018-05-10'
        },
        operations: {
          AddPolicyStatement: {
            http: {
              requestUri: '/policies/{arn}/{statementId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['action', 'arn', 'effect', 'principal', 'statementId'],
              members: {
                action: {
                  type: 'list',
                  member: {}
                },
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                condition: {},
                effect: {},
                principal: {
                  type: 'list',
                  member: {}
                },
                statementId: {
                  location: 'uri',
                  locationName: 'statementId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'token'],
              members: {
                arn: {},
                policy: {},
                token: {}
              }
            },
            idempotent: true
          },
          BatchDeleteUniqueId: {
            http: {
              method: 'DELETE',
              requestUri: '/matchingworkflows/{workflowName}/uniqueids',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['uniqueIds', 'workflowName'],
              members: {
                inputSource: {
                  location: 'header',
                  locationName: 'inputSource'
                },
                uniqueIds: {
                  location: 'header',
                  locationName: 'uniqueIds',
                  type: 'list',
                  member: {}
                },
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['deleted', 'disconnectedUniqueIds', 'errors', 'status'],
              members: {
                deleted: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['uniqueId'],
                    members: {
                      uniqueId: {}
                    }
                  }
                },
                disconnectedUniqueIds: {
                  type: 'list',
                  member: {}
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorType', 'uniqueId'],
                    members: {
                      errorType: {},
                      uniqueId: {}
                    }
                  }
                },
                status: {}
              }
            }
          },
          CreateIdMappingWorkflow: {
            http: {
              requestUri: '/idmappingworkflows',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['idMappingTechniques', 'inputSourceConfig', 'roleArn', 'workflowName'],
              members: {
                description: {},
                idMappingTechniques: {
                  shape: 'Ss'
                },
                inputSourceConfig: {
                  shape: 'Sz'
                },
                outputSourceConfig: {
                  shape: 'S13'
                },
                roleArn: {},
                tags: {
                  shape: 'S17'
                },
                workflowName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['idMappingTechniques', 'inputSourceConfig', 'roleArn', 'workflowArn', 'workflowName'],
              members: {
                description: {},
                idMappingTechniques: {
                  shape: 'Ss'
                },
                inputSourceConfig: {
                  shape: 'Sz'
                },
                outputSourceConfig: {
                  shape: 'S13'
                },
                roleArn: {},
                workflowArn: {},
                workflowName: {}
              }
            }
          },
          CreateIdNamespace: {
            http: {
              requestUri: '/idnamespaces',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['idNamespaceName', 'type'],
              members: {
                description: {},
                idMappingWorkflowProperties: {
                  shape: 'S1d'
                },
                idNamespaceName: {},
                inputSourceConfig: {
                  shape: 'S1g'
                },
                roleArn: {},
                tags: {
                  shape: 'S17'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'idNamespaceArn', 'idNamespaceName', 'type', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                idMappingWorkflowProperties: {
                  shape: 'S1d'
                },
                idNamespaceArn: {},
                idNamespaceName: {},
                inputSourceConfig: {
                  shape: 'S1g'
                },
                roleArn: {},
                tags: {
                  shape: 'S17'
                },
                type: {},
                updatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateMatchingWorkflow: {
            http: {
              requestUri: '/matchingworkflows',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['inputSourceConfig', 'outputSourceConfig', 'resolutionTechniques', 'roleArn', 'workflowName'],
              members: {
                description: {},
                incrementalRunConfig: {
                  shape: 'S1n'
                },
                inputSourceConfig: {
                  shape: 'S1p'
                },
                outputSourceConfig: {
                  shape: 'S1t'
                },
                resolutionTechniques: {
                  shape: 'S1y'
                },
                roleArn: {},
                tags: {
                  shape: 'S17'
                },
                workflowName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['inputSourceConfig', 'outputSourceConfig', 'resolutionTechniques', 'roleArn', 'workflowArn', 'workflowName'],
              members: {
                description: {},
                incrementalRunConfig: {
                  shape: 'S1n'
                },
                inputSourceConfig: {
                  shape: 'S1p'
                },
                outputSourceConfig: {
                  shape: 'S1t'
                },
                resolutionTechniques: {
                  shape: 'S1y'
                },
                roleArn: {},
                workflowArn: {},
                workflowName: {}
              }
            }
          },
          CreateSchemaMapping: {
            http: {
              requestUri: '/schemas',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['mappedInputFields', 'schemaName'],
              members: {
                description: {},
                mappedInputFields: {
                  shape: 'S2a'
                },
                schemaName: {},
                tags: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['description', 'mappedInputFields', 'schemaArn', 'schemaName'],
              members: {
                description: {},
                mappedInputFields: {
                  shape: 'S2a'
                },
                schemaArn: {},
                schemaName: {}
              }
            }
          },
          DeleteIdMappingWorkflow: {
            http: {
              method: 'DELETE',
              requestUri: '/idmappingworkflows/{workflowName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowName'],
              members: {
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['message'],
              members: {
                message: {}
              }
            },
            idempotent: true
          },
          DeleteIdNamespace: {
            http: {
              method: 'DELETE',
              requestUri: '/idnamespaces/{idNamespaceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['idNamespaceName'],
              members: {
                idNamespaceName: {
                  location: 'uri',
                  locationName: 'idNamespaceName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['message'],
              members: {
                message: {}
              }
            },
            idempotent: true
          },
          DeleteMatchingWorkflow: {
            http: {
              method: 'DELETE',
              requestUri: '/matchingworkflows/{workflowName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowName'],
              members: {
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['message'],
              members: {
                message: {}
              }
            },
            idempotent: true
          },
          DeletePolicyStatement: {
            http: {
              method: 'DELETE',
              requestUri: '/policies/{arn}/{statementId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn', 'statementId'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                statementId: {
                  location: 'uri',
                  locationName: 'statementId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'token'],
              members: {
                arn: {},
                policy: {},
                token: {}
              }
            },
            idempotent: true
          },
          DeleteSchemaMapping: {
            http: {
              method: 'DELETE',
              requestUri: '/schemas/{schemaName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['schemaName'],
              members: {
                schemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['message'],
              members: {
                message: {}
              }
            },
            idempotent: true
          },
          GetIdMappingJob: {
            http: {
              method: 'GET',
              requestUri: '/idmappingworkflows/{workflowName}/jobs/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobId', 'workflowName'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId', 'startTime', 'status'],
              members: {
                endTime: {
                  type: 'timestamp'
                },
                errorDetails: {
                  shape: 'S2t'
                },
                jobId: {},
                metrics: {
                  type: 'structure',
                  members: {
                    inputRecords: {
                      type: 'integer'
                    },
                    recordsNotProcessed: {
                      type: 'integer'
                    },
                    totalRecordsProcessed: {
                      type: 'integer'
                    }
                  }
                },
                outputSourceConfig: {
                  shape: 'S2x'
                },
                startTime: {
                  type: 'timestamp'
                },
                status: {}
              }
            }
          },
          GetIdMappingWorkflow: {
            http: {
              method: 'GET',
              requestUri: '/idmappingworkflows/{workflowName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowName'],
              members: {
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'idMappingTechniques', 'inputSourceConfig', 'roleArn', 'updatedAt', 'workflowArn', 'workflowName'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                idMappingTechniques: {
                  shape: 'Ss'
                },
                inputSourceConfig: {
                  shape: 'Sz'
                },
                outputSourceConfig: {
                  shape: 'S13'
                },
                roleArn: {},
                tags: {
                  shape: 'S17'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                workflowArn: {},
                workflowName: {}
              }
            }
          },
          GetIdNamespace: {
            http: {
              method: 'GET',
              requestUri: '/idnamespaces/{idNamespaceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['idNamespaceName'],
              members: {
                idNamespaceName: {
                  location: 'uri',
                  locationName: 'idNamespaceName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'idNamespaceArn', 'idNamespaceName', 'type', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                idMappingWorkflowProperties: {
                  shape: 'S1d'
                },
                idNamespaceArn: {},
                idNamespaceName: {},
                inputSourceConfig: {
                  shape: 'S1g'
                },
                roleArn: {},
                tags: {
                  shape: 'S17'
                },
                type: {},
                updatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetMatchId: {
            http: {
              requestUri: '/matchingworkflows/{workflowName}/matches',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['record', 'workflowName'],
              members: {
                applyNormalization: {
                  type: 'boolean'
                },
                record: {
                  type: 'map',
                  key: {},
                  value: {},
                  sensitive: true
                },
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                matchId: {},
                matchRule: {}
              }
            }
          },
          GetMatchingJob: {
            http: {
              method: 'GET',
              requestUri: '/matchingworkflows/{workflowName}/jobs/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobId', 'workflowName'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId', 'startTime', 'status'],
              members: {
                endTime: {
                  type: 'timestamp'
                },
                errorDetails: {
                  shape: 'S2t'
                },
                jobId: {},
                metrics: {
                  type: 'structure',
                  members: {
                    inputRecords: {
                      type: 'integer'
                    },
                    matchIDs: {
                      type: 'integer'
                    },
                    recordsNotProcessed: {
                      type: 'integer'
                    },
                    totalRecordsProcessed: {
                      type: 'integer'
                    }
                  }
                },
                outputSourceConfig: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['outputS3Path', 'roleArn'],
                    members: {
                      KMSArn: {},
                      outputS3Path: {},
                      roleArn: {}
                    }
                  }
                },
                startTime: {
                  type: 'timestamp'
                },
                status: {}
              }
            }
          },
          GetMatchingWorkflow: {
            http: {
              method: 'GET',
              requestUri: '/matchingworkflows/{workflowName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowName'],
              members: {
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'inputSourceConfig', 'outputSourceConfig', 'resolutionTechniques', 'roleArn', 'updatedAt', 'workflowArn', 'workflowName'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                incrementalRunConfig: {
                  shape: 'S1n'
                },
                inputSourceConfig: {
                  shape: 'S1p'
                },
                outputSourceConfig: {
                  shape: 'S1t'
                },
                resolutionTechniques: {
                  shape: 'S1y'
                },
                roleArn: {},
                tags: {
                  shape: 'S17'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                workflowArn: {},
                workflowName: {}
              }
            }
          },
          GetPolicy: {
            http: {
              method: 'GET',
              requestUri: '/policies/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'token'],
              members: {
                arn: {},
                policy: {},
                token: {}
              }
            }
          },
          GetProviderService: {
            http: {
              method: 'GET',
              requestUri: '/providerservices/{providerName}/{providerServiceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['providerName', 'providerServiceName'],
              members: {
                providerName: {
                  location: 'uri',
                  locationName: 'providerName'
                },
                providerServiceName: {
                  location: 'uri',
                  locationName: 'providerServiceName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['anonymizedOutput', 'providerEndpointConfiguration', 'providerEntityOutputDefinition', 'providerName', 'providerServiceArn', 'providerServiceDisplayName', 'providerServiceName', 'providerServiceType'],
              members: {
                anonymizedOutput: {
                  type: 'boolean'
                },
                providerComponentSchema: {
                  type: 'structure',
                  members: {
                    providerSchemaAttributes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['fieldName', 'type'],
                        members: {
                          fieldName: {},
                          hashing: {
                            type: 'boolean'
                          },
                          subType: {},
                          type: {}
                        }
                      }
                    },
                    schemas: {
                      type: 'list',
                      member: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                providerConfigurationDefinition: {
                  shape: 'Sx'
                },
                providerEndpointConfiguration: {
                  type: 'structure',
                  members: {
                    marketplaceConfiguration: {
                      type: 'structure',
                      required: ['assetId', 'dataSetId', 'listingId', 'revisionId'],
                      members: {
                        assetId: {},
                        dataSetId: {},
                        listingId: {},
                        revisionId: {}
                      }
                    }
                  },
                  union: true
                },
                providerEntityOutputDefinition: {
                  shape: 'Sx'
                },
                providerIdNameSpaceConfiguration: {
                  type: 'structure',
                  members: {
                    description: {},
                    providerSourceConfigurationDefinition: {
                      shape: 'Sx'
                    },
                    providerTargetConfigurationDefinition: {
                      shape: 'Sx'
                    }
                  }
                },
                providerIntermediateDataAccessConfiguration: {
                  type: 'structure',
                  members: {
                    awsAccountIds: {
                      type: 'list',
                      member: {}
                    },
                    requiredBucketActions: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                providerJobConfiguration: {
                  shape: 'Sx'
                },
                providerName: {},
                providerServiceArn: {},
                providerServiceDisplayName: {},
                providerServiceName: {},
                providerServiceType: {}
              }
            }
          },
          GetSchemaMapping: {
            http: {
              method: 'GET',
              requestUri: '/schemas/{schemaName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['schemaName'],
              members: {
                schemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'hasWorkflows', 'mappedInputFields', 'schemaArn', 'schemaName', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                hasWorkflows: {
                  type: 'boolean'
                },
                mappedInputFields: {
                  shape: 'S2a'
                },
                schemaArn: {},
                schemaName: {},
                tags: {
                  shape: 'S17'
                },
                updatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          ListIdMappingJobs: {
            http: {
              method: 'GET',
              requestUri: '/idmappingworkflows/{workflowName}/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowName'],
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
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobs: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          ListIdMappingWorkflows: {
            http: {
              method: 'GET',
              requestUri: '/idmappingworkflows',
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
                nextToken: {},
                workflowSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'updatedAt', 'workflowArn', 'workflowName'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      workflowArn: {},
                      workflowName: {}
                    }
                  }
                }
              }
            }
          },
          ListIdNamespaces: {
            http: {
              method: 'GET',
              requestUri: '/idnamespaces',
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
                idNamespaceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'idNamespaceArn', 'idNamespaceName', 'type', 'updatedAt'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      description: {},
                      idNamespaceArn: {},
                      idNamespaceName: {},
                      type: {},
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListMatchingJobs: {
            http: {
              method: 'GET',
              requestUri: '/matchingworkflows/{workflowName}/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowName'],
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
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobs: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          ListMatchingWorkflows: {
            http: {
              method: 'GET',
              requestUri: '/matchingworkflows',
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
                nextToken: {},
                workflowSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'resolutionType', 'updatedAt', 'workflowArn', 'workflowName'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      resolutionType: {},
                      updatedAt: {
                        type: 'timestamp'
                      },
                      workflowArn: {},
                      workflowName: {}
                    }
                  }
                }
              }
            }
          },
          ListProviderServices: {
            http: {
              method: 'GET',
              requestUri: '/providerservices',
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
                providerName: {
                  location: 'querystring',
                  locationName: 'providerName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                providerServiceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['providerName', 'providerServiceArn', 'providerServiceDisplayName', 'providerServiceName', 'providerServiceType'],
                    members: {
                      providerName: {},
                      providerServiceArn: {},
                      providerServiceDisplayName: {},
                      providerServiceName: {},
                      providerServiceType: {}
                    }
                  }
                }
              }
            }
          },
          ListSchemaMappings: {
            http: {
              method: 'GET',
              requestUri: '/schemas',
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
                nextToken: {},
                schemaList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'hasWorkflows', 'schemaArn', 'schemaName', 'updatedAt'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      hasWorkflows: {
                        type: 'boolean'
                      },
                      schemaArn: {},
                      schemaName: {},
                      updatedAt: {
                        type: 'timestamp'
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
              required: ['tags'],
              members: {
                tags: {
                  shape: 'S17'
                }
              }
            }
          },
          PutPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/policies/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn', 'policy'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                policy: {},
                token: {}
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'token'],
              members: {
                arn: {},
                policy: {},
                token: {}
              }
            },
            idempotent: true
          },
          StartIdMappingJob: {
            http: {
              requestUri: '/idmappingworkflows/{workflowName}/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowName'],
              members: {
                outputSourceConfig: {
                  shape: 'S2x'
                },
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {},
                outputSourceConfig: {
                  shape: 'S2x'
                }
              }
            }
          },
          StartMatchingJob: {
            http: {
              requestUri: '/matchingworkflows/{workflowName}/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowName'],
              members: {
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S17'
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
            idempotent: true
          },
          UpdateIdMappingWorkflow: {
            http: {
              method: 'PUT',
              requestUri: '/idmappingworkflows/{workflowName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['idMappingTechniques', 'inputSourceConfig', 'roleArn', 'workflowName'],
              members: {
                description: {},
                idMappingTechniques: {
                  shape: 'Ss'
                },
                inputSourceConfig: {
                  shape: 'Sz'
                },
                outputSourceConfig: {
                  shape: 'S13'
                },
                roleArn: {},
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['idMappingTechniques', 'inputSourceConfig', 'roleArn', 'workflowArn', 'workflowName'],
              members: {
                description: {},
                idMappingTechniques: {
                  shape: 'Ss'
                },
                inputSourceConfig: {
                  shape: 'Sz'
                },
                outputSourceConfig: {
                  shape: 'S13'
                },
                roleArn: {},
                workflowArn: {},
                workflowName: {}
              }
            },
            idempotent: true
          },
          UpdateIdNamespace: {
            http: {
              method: 'PUT',
              requestUri: '/idnamespaces/{idNamespaceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['idNamespaceName'],
              members: {
                description: {},
                idMappingWorkflowProperties: {
                  shape: 'S1d'
                },
                idNamespaceName: {
                  location: 'uri',
                  locationName: 'idNamespaceName'
                },
                inputSourceConfig: {
                  shape: 'S1g'
                },
                roleArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'idNamespaceArn', 'idNamespaceName', 'type', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                idMappingWorkflowProperties: {
                  shape: 'S1d'
                },
                idNamespaceArn: {},
                idNamespaceName: {},
                inputSourceConfig: {
                  shape: 'S1g'
                },
                roleArn: {},
                type: {},
                updatedAt: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          UpdateMatchingWorkflow: {
            http: {
              method: 'PUT',
              requestUri: '/matchingworkflows/{workflowName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['inputSourceConfig', 'outputSourceConfig', 'resolutionTechniques', 'roleArn', 'workflowName'],
              members: {
                description: {},
                incrementalRunConfig: {
                  shape: 'S1n'
                },
                inputSourceConfig: {
                  shape: 'S1p'
                },
                outputSourceConfig: {
                  shape: 'S1t'
                },
                resolutionTechniques: {
                  shape: 'S1y'
                },
                roleArn: {},
                workflowName: {
                  location: 'uri',
                  locationName: 'workflowName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['inputSourceConfig', 'outputSourceConfig', 'resolutionTechniques', 'roleArn', 'workflowName'],
              members: {
                description: {},
                incrementalRunConfig: {
                  shape: 'S1n'
                },
                inputSourceConfig: {
                  shape: 'S1p'
                },
                outputSourceConfig: {
                  shape: 'S1t'
                },
                resolutionTechniques: {
                  shape: 'S1y'
                },
                roleArn: {},
                workflowName: {}
              }
            },
            idempotent: true
          },
          UpdateSchemaMapping: {
            http: {
              method: 'PUT',
              requestUri: '/schemas/{schemaName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['mappedInputFields', 'schemaName'],
              members: {
                description: {},
                mappedInputFields: {
                  shape: 'S2a'
                },
                schemaName: {
                  location: 'uri',
                  locationName: 'schemaName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['mappedInputFields', 'schemaArn', 'schemaName'],
              members: {
                description: {},
                mappedInputFields: {
                  shape: 'S2a'
                },
                schemaArn: {},
                schemaName: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          Ss: {
            type: 'structure',
            required: ['idMappingType'],
            members: {
              idMappingType: {},
              providerProperties: {
                shape: 'Su'
              }
            }
          },
          Su: {
            type: 'structure',
            required: ['providerServiceArn'],
            members: {
              intermediateSourceConfiguration: {
                type: 'structure',
                required: ['intermediateS3Path'],
                members: {
                  intermediateS3Path: {}
                }
              },
              providerConfiguration: {
                shape: 'Sx'
              },
              providerServiceArn: {}
            }
          },
          Sx: {
            type: 'structure',
            members: {},
            document: true
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['inputSourceARN'],
              members: {
                inputSourceARN: {},
                schemaName: {},
                type: {}
              }
            }
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['outputS3Path'],
              members: {
                KMSArn: {},
                outputS3Path: {}
              }
            }
          },
          S17: {
            type: 'map',
            key: {},
            value: {}
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['idMappingType'],
              members: {
                idMappingType: {},
                providerProperties: {
                  type: 'structure',
                  required: ['providerServiceArn'],
                  members: {
                    providerConfiguration: {
                      shape: 'Sx'
                    },
                    providerServiceArn: {}
                  }
                }
              }
            }
          },
          S1g: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['inputSourceARN'],
              members: {
                inputSourceARN: {},
                schemaName: {}
              }
            }
          },
          S1n: {
            type: 'structure',
            members: {
              incrementalRunType: {}
            }
          },
          S1p: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['inputSourceARN', 'schemaName'],
              members: {
                applyNormalization: {
                  type: 'boolean'
                },
                inputSourceARN: {},
                schemaName: {}
              }
            }
          },
          S1t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['output', 'outputS3Path'],
              members: {
                KMSArn: {},
                applyNormalization: {
                  type: 'boolean'
                },
                output: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      hashed: {
                        type: 'boolean'
                      },
                      name: {}
                    }
                  }
                },
                outputS3Path: {}
              }
            }
          },
          S1y: {
            type: 'structure',
            required: ['resolutionType'],
            members: {
              providerProperties: {
                shape: 'Su'
              },
              resolutionType: {},
              ruleBasedProperties: {
                type: 'structure',
                required: ['attributeMatchingModel', 'rules'],
                members: {
                  attributeMatchingModel: {},
                  rules: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['matchingKeys', 'ruleName'],
                      members: {
                        matchingKeys: {
                          type: 'list',
                          member: {}
                        },
                        ruleName: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S2a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['fieldName', 'type'],
              members: {
                fieldName: {},
                groupName: {},
                matchKey: {},
                subType: {},
                type: {}
              }
            }
          },
          S2t: {
            type: 'structure',
            members: {
              errorMessage: {}
            }
          },
          S2x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['outputS3Path', 'roleArn'],
              members: {
                KMSArn: {},
                outputS3Path: {},
                roleArn: {}
              }
            }
          },
          S45: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['jobId', 'startTime', 'status'],
              members: {
                endTime: {
                  type: 'timestamp'
                },
                jobId: {},
                startTime: {
                  type: 'timestamp'
                },
                status: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=eb581babb152b8b7a427179db4140753468f54b7.js.map