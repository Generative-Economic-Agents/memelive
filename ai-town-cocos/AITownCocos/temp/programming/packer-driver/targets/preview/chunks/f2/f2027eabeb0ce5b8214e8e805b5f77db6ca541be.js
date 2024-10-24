System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-06-05',
          endpointPrefix: 'bedrock-agent',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Agents for Amazon Bedrock',
          serviceId: 'Bedrock Agent',
          signatureVersion: 'v4',
          signingName: 'bedrock',
          uid: 'bedrock-agent-2023-06-05'
        },
        operations: {
          AssociateAgentKnowledgeBase: {
            http: {
              method: 'PUT',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentVersion', 'description', 'knowledgeBaseId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                description: {},
                knowledgeBaseId: {},
                knowledgeBaseState: {}
              }
            },
            output: {
              type: 'structure',
              required: ['agentKnowledgeBase'],
              members: {
                agentKnowledgeBase: {
                  shape: 'S7'
                }
              }
            },
            idempotent: true
          },
          CreateAgent: {
            http: {
              method: 'PUT',
              requestUri: '/agents/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['agentName'],
              members: {
                agentName: {},
                agentResourceRoleArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                customerEncryptionKeyArn: {},
                description: {},
                foundationModel: {},
                guardrailConfiguration: {
                  shape: 'Sg'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                instruction: {
                  shape: 'Sk'
                },
                promptOverrideConfiguration: {
                  shape: 'Sl'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agent'],
              members: {
                agent: {
                  shape: 'S14'
                }
              }
            },
            idempotent: true
          },
          CreateAgentActionGroup: {
            http: {
              method: 'PUT',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/actiongroups/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actionGroupName', 'agentId', 'agentVersion'],
              members: {
                actionGroupExecutor: {
                  shape: 'S1c'
                },
                actionGroupName: {},
                actionGroupState: {},
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                apiSchema: {
                  shape: 'S1f'
                },
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                functionSchema: {
                  shape: 'S1k'
                },
                parentActionGroupSignature: {}
              }
            },
            output: {
              type: 'structure',
              required: ['agentActionGroup'],
              members: {
                agentActionGroup: {
                  shape: 'S1v'
                }
              }
            },
            idempotent: true
          },
          CreateAgentAlias: {
            http: {
              method: 'PUT',
              requestUri: '/agents/{agentId}/agentaliases/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['agentAliasName', 'agentId'],
              members: {
                agentAliasName: {},
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                routingConfiguration: {
                  shape: 'S1x'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentAlias'],
              members: {
                agentAlias: {
                  shape: 'S21'
                }
              }
            },
            idempotent: true
          },
          CreateDataSource: {
            http: {
              method: 'PUT',
              requestUri: '/knowledgebases/{knowledgeBaseId}/datasources/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceConfiguration', 'knowledgeBaseId', 'name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                dataDeletionPolicy: {},
                dataSourceConfiguration: {
                  shape: 'S29'
                },
                description: {},
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                name: {},
                serverSideEncryptionConfiguration: {
                  shape: 'S2g'
                },
                vectorIngestionConfiguration: {
                  shape: 'S2h'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dataSource'],
              members: {
                dataSource: {
                  shape: 'S2o'
                }
              }
            },
            idempotent: true
          },
          CreateKnowledgeBase: {
            http: {
              method: 'PUT',
              requestUri: '/knowledgebases/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseConfiguration', 'name', 'roleArn', 'storageConfiguration'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                knowledgeBaseConfiguration: {
                  shape: 'S2r'
                },
                name: {},
                roleArn: {},
                storageConfiguration: {
                  shape: 'S2z'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['knowledgeBase'],
              members: {
                knowledgeBase: {
                  shape: 'S3t'
                }
              }
            },
            idempotent: true
          },
          DeleteAgent: {
            http: {
              method: 'DELETE',
              requestUri: '/agents/{agentId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['agentId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                skipResourceInUseCheck: {
                  location: 'querystring',
                  locationName: 'skipResourceInUseCheck',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentId', 'agentStatus'],
              members: {
                agentId: {},
                agentStatus: {}
              }
            },
            idempotent: true
          },
          DeleteAgentActionGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['actionGroupId', 'agentId', 'agentVersion'],
              members: {
                actionGroupId: {
                  location: 'uri',
                  locationName: 'actionGroupId'
                },
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                skipResourceInUseCheck: {
                  location: 'querystring',
                  locationName: 'skipResourceInUseCheck',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteAgentAlias: {
            http: {
              method: 'DELETE',
              requestUri: '/agents/{agentId}/agentaliases/{agentAliasId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['agentAliasId', 'agentId'],
              members: {
                agentAliasId: {
                  location: 'uri',
                  locationName: 'agentAliasId'
                },
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentAliasId', 'agentAliasStatus', 'agentId'],
              members: {
                agentAliasId: {},
                agentAliasStatus: {},
                agentId: {}
              }
            },
            idempotent: true
          },
          DeleteAgentVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentVersion'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                skipResourceInUseCheck: {
                  location: 'querystring',
                  locationName: 'skipResourceInUseCheck',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentId', 'agentStatus', 'agentVersion'],
              members: {
                agentId: {},
                agentStatus: {},
                agentVersion: {}
              }
            },
            idempotent: true
          },
          DeleteDataSource: {
            http: {
              method: 'DELETE',
              requestUri: '/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['dataSourceId', 'knowledgeBaseId'],
              members: {
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dataSourceId', 'knowledgeBaseId', 'status'],
              members: {
                dataSourceId: {},
                knowledgeBaseId: {},
                status: {}
              }
            },
            idempotent: true
          },
          DeleteKnowledgeBase: {
            http: {
              method: 'DELETE',
              requestUri: '/knowledgebases/{knowledgeBaseId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId'],
              members: {
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['knowledgeBaseId', 'status'],
              members: {
                knowledgeBaseId: {},
                status: {}
              }
            },
            idempotent: true
          },
          DisassociateAgentKnowledgeBase: {
            http: {
              method: 'DELETE',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentVersion', 'knowledgeBaseId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetAgent: {
            http: {
              method: 'GET',
              requestUri: '/agents/{agentId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agent'],
              members: {
                agent: {
                  shape: 'S14'
                }
              }
            }
          },
          GetAgentActionGroup: {
            http: {
              method: 'GET',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actionGroupId', 'agentId', 'agentVersion'],
              members: {
                actionGroupId: {
                  location: 'uri',
                  locationName: 'actionGroupId'
                },
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentActionGroup'],
              members: {
                agentActionGroup: {
                  shape: 'S1v'
                }
              }
            }
          },
          GetAgentAlias: {
            http: {
              method: 'GET',
              requestUri: '/agents/{agentId}/agentaliases/{agentAliasId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentAliasId', 'agentId'],
              members: {
                agentAliasId: {
                  location: 'uri',
                  locationName: 'agentAliasId'
                },
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentAlias'],
              members: {
                agentAlias: {
                  shape: 'S21'
                }
              }
            }
          },
          GetAgentKnowledgeBase: {
            http: {
              method: 'GET',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentVersion', 'knowledgeBaseId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentKnowledgeBase'],
              members: {
                agentKnowledgeBase: {
                  shape: 'S7'
                }
              }
            }
          },
          GetAgentVersion: {
            http: {
              method: 'GET',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentVersion'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentVersion'],
              members: {
                agentVersion: {
                  type: 'structure',
                  required: ['agentArn', 'agentId', 'agentName', 'agentResourceRoleArn', 'agentStatus', 'createdAt', 'idleSessionTTLInSeconds', 'updatedAt', 'version'],
                  members: {
                    agentArn: {},
                    agentId: {},
                    agentName: {},
                    agentResourceRoleArn: {},
                    agentStatus: {},
                    createdAt: {
                      shape: 'S9'
                    },
                    customerEncryptionKeyArn: {},
                    description: {},
                    failureReasons: {
                      shape: 'S17'
                    },
                    foundationModel: {},
                    guardrailConfiguration: {
                      shape: 'Sg'
                    },
                    idleSessionTTLInSeconds: {
                      type: 'integer'
                    },
                    instruction: {
                      shape: 'Sk'
                    },
                    promptOverrideConfiguration: {
                      shape: 'Sl'
                    },
                    recommendedActions: {
                      shape: 'S19'
                    },
                    updatedAt: {
                      shape: 'S9'
                    },
                    version: {}
                  }
                }
              }
            }
          },
          GetDataSource: {
            http: {
              method: 'GET',
              requestUri: '/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceId', 'knowledgeBaseId'],
              members: {
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dataSource'],
              members: {
                dataSource: {
                  shape: 'S2o'
                }
              }
            }
          },
          GetIngestionJob: {
            http: {
              method: 'GET',
              requestUri: '/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceId', 'ingestionJobId', 'knowledgeBaseId'],
              members: {
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                ingestionJobId: {
                  location: 'uri',
                  locationName: 'ingestionJobId'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ingestionJob'],
              members: {
                ingestionJob: {
                  shape: 'S4q'
                }
              }
            }
          },
          GetKnowledgeBase: {
            http: {
              method: 'GET',
              requestUri: '/knowledgebases/{knowledgeBaseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId'],
              members: {
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['knowledgeBase'],
              members: {
                knowledgeBase: {
                  shape: 'S3t'
                }
              }
            }
          },
          ListAgentActionGroups: {
            http: {
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/actiongroups/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentVersion'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['actionGroupSummaries'],
              members: {
                actionGroupSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['actionGroupId', 'actionGroupName', 'actionGroupState', 'updatedAt'],
                    members: {
                      actionGroupId: {},
                      actionGroupName: {},
                      actionGroupState: {},
                      description: {},
                      updatedAt: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAgentAliases: {
            http: {
              requestUri: '/agents/{agentId}/agentaliases/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['agentAliasSummaries'],
              members: {
                agentAliasSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['agentAliasId', 'agentAliasName', 'agentAliasStatus', 'createdAt', 'updatedAt'],
                    members: {
                      agentAliasId: {},
                      agentAliasName: {},
                      agentAliasStatus: {},
                      createdAt: {
                        shape: 'S9'
                      },
                      description: {},
                      routingConfiguration: {
                        shape: 'S1x'
                      },
                      updatedAt: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAgentKnowledgeBases: {
            http: {
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentVersion'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['agentKnowledgeBaseSummaries'],
              members: {
                agentKnowledgeBaseSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['knowledgeBaseId', 'knowledgeBaseState', 'updatedAt'],
                    members: {
                      description: {},
                      knowledgeBaseId: {},
                      knowledgeBaseState: {},
                      updatedAt: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAgentVersions: {
            http: {
              requestUri: '/agents/{agentId}/agentversions/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['agentVersionSummaries'],
              members: {
                agentVersionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['agentName', 'agentStatus', 'agentVersion', 'createdAt', 'updatedAt'],
                    members: {
                      agentName: {},
                      agentStatus: {},
                      agentVersion: {},
                      createdAt: {
                        shape: 'S9'
                      },
                      description: {},
                      guardrailConfiguration: {
                        shape: 'Sg'
                      },
                      updatedAt: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAgents: {
            http: {
              requestUri: '/agents/',
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
              required: ['agentSummaries'],
              members: {
                agentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['agentId', 'agentName', 'agentStatus', 'updatedAt'],
                    members: {
                      agentId: {},
                      agentName: {},
                      agentStatus: {},
                      description: {},
                      guardrailConfiguration: {
                        shape: 'Sg'
                      },
                      latestAgentVersion: {},
                      updatedAt: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDataSources: {
            http: {
              requestUri: '/knowledgebases/{knowledgeBaseId}/datasources/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId'],
              members: {
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['dataSourceSummaries'],
              members: {
                dataSourceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['dataSourceId', 'knowledgeBaseId', 'name', 'status', 'updatedAt'],
                    members: {
                      dataSourceId: {},
                      description: {},
                      knowledgeBaseId: {},
                      name: {},
                      status: {},
                      updatedAt: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListIngestionJobs: {
            http: {
              requestUri: '/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceId', 'knowledgeBaseId'],
              members: {
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['attribute', 'operator', 'values'],
                    members: {
                      attribute: {},
                      operator: {},
                      values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ingestionJobSummaries'],
              members: {
                ingestionJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['dataSourceId', 'ingestionJobId', 'knowledgeBaseId', 'startedAt', 'status', 'updatedAt'],
                    members: {
                      dataSourceId: {},
                      description: {},
                      ingestionJobId: {},
                      knowledgeBaseId: {},
                      startedAt: {
                        shape: 'S9'
                      },
                      statistics: {
                        shape: 'S4r'
                      },
                      status: {},
                      updatedAt: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKnowledgeBases: {
            http: {
              requestUri: '/knowledgebases/',
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
              required: ['knowledgeBaseSummaries'],
              members: {
                knowledgeBaseSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['knowledgeBaseId', 'name', 'status', 'updatedAt'],
                    members: {
                      description: {},
                      knowledgeBaseId: {},
                      name: {},
                      status: {},
                      updatedAt: {
                        shape: 'S9'
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
              members: {
                tags: {
                  shape: 'S10'
                }
              }
            }
          },
          PrepareAgent: {
            http: {
              requestUri: '/agents/{agentId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['agentId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentId', 'agentStatus', 'agentVersion', 'preparedAt'],
              members: {
                agentId: {},
                agentStatus: {},
                agentVersion: {},
                preparedAt: {
                  shape: 'S9'
                }
              }
            }
          },
          StartIngestionJob: {
            http: {
              method: 'PUT',
              requestUri: '/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['dataSourceId', 'knowledgeBaseId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                description: {},
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ingestionJob'],
              members: {
                ingestionJob: {
                  shape: 'S4q'
                }
              }
            },
            idempotent: true
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
                  shape: 'S10'
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
          UpdateAgent: {
            http: {
              method: 'PUT',
              requestUri: '/agents/{agentId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentName', 'agentResourceRoleArn', 'foundationModel'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentName: {},
                agentResourceRoleArn: {},
                customerEncryptionKeyArn: {},
                description: {},
                foundationModel: {},
                guardrailConfiguration: {
                  shape: 'Sg'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                instruction: {
                  shape: 'Sk'
                },
                promptOverrideConfiguration: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agent'],
              members: {
                agent: {
                  shape: 'S14'
                }
              }
            },
            idempotent: true
          },
          UpdateAgentActionGroup: {
            http: {
              method: 'PUT',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actionGroupId', 'actionGroupName', 'agentId', 'agentVersion'],
              members: {
                actionGroupExecutor: {
                  shape: 'S1c'
                },
                actionGroupId: {
                  location: 'uri',
                  locationName: 'actionGroupId'
                },
                actionGroupName: {},
                actionGroupState: {},
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                apiSchema: {
                  shape: 'S1f'
                },
                description: {},
                functionSchema: {
                  shape: 'S1k'
                },
                parentActionGroupSignature: {}
              }
            },
            output: {
              type: 'structure',
              required: ['agentActionGroup'],
              members: {
                agentActionGroup: {
                  shape: 'S1v'
                }
              }
            },
            idempotent: true
          },
          UpdateAgentAlias: {
            http: {
              method: 'PUT',
              requestUri: '/agents/{agentId}/agentaliases/{agentAliasId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['agentAliasId', 'agentAliasName', 'agentId'],
              members: {
                agentAliasId: {
                  location: 'uri',
                  locationName: 'agentAliasId'
                },
                agentAliasName: {},
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                description: {},
                routingConfiguration: {
                  shape: 'S1x'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentAlias'],
              members: {
                agentAlias: {
                  shape: 'S21'
                }
              }
            },
            idempotent: true
          },
          UpdateAgentKnowledgeBase: {
            http: {
              method: 'PUT',
              requestUri: '/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId', 'agentVersion', 'knowledgeBaseId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                agentVersion: {
                  location: 'uri',
                  locationName: 'agentVersion'
                },
                description: {},
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                knowledgeBaseState: {}
              }
            },
            output: {
              type: 'structure',
              required: ['agentKnowledgeBase'],
              members: {
                agentKnowledgeBase: {
                  shape: 'S7'
                }
              }
            },
            idempotent: true
          },
          UpdateDataSource: {
            http: {
              method: 'PUT',
              requestUri: '/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceConfiguration', 'dataSourceId', 'knowledgeBaseId', 'name'],
              members: {
                dataDeletionPolicy: {},
                dataSourceConfiguration: {
                  shape: 'S29'
                },
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                description: {},
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                name: {},
                serverSideEncryptionConfiguration: {
                  shape: 'S2g'
                },
                vectorIngestionConfiguration: {
                  shape: 'S2h'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dataSource'],
              members: {
                dataSource: {
                  shape: 'S2o'
                }
              }
            },
            idempotent: true
          },
          UpdateKnowledgeBase: {
            http: {
              method: 'PUT',
              requestUri: '/knowledgebases/{knowledgeBaseId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseConfiguration', 'knowledgeBaseId', 'name', 'roleArn', 'storageConfiguration'],
              members: {
                description: {},
                knowledgeBaseConfiguration: {
                  shape: 'S2r'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                name: {},
                roleArn: {},
                storageConfiguration: {
                  shape: 'S2z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['knowledgeBase'],
              members: {
                knowledgeBase: {
                  shape: 'S3t'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            required: ['agentId', 'agentVersion', 'createdAt', 'description', 'knowledgeBaseId', 'knowledgeBaseState', 'updatedAt'],
            members: {
              agentId: {},
              agentVersion: {},
              createdAt: {
                shape: 'S9'
              },
              description: {},
              knowledgeBaseId: {},
              knowledgeBaseState: {},
              updatedAt: {
                shape: 'S9'
              }
            }
          },
          S9: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sg: {
            type: 'structure',
            members: {
              guardrailIdentifier: {},
              guardrailVersion: {}
            }
          },
          Sk: {
            type: 'string',
            sensitive: true
          },
          Sl: {
            type: 'structure',
            required: ['promptConfigurations'],
            members: {
              overrideLambda: {},
              promptConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    basePromptTemplate: {},
                    inferenceConfiguration: {
                      type: 'structure',
                      members: {
                        maximumLength: {
                          type: 'integer'
                        },
                        stopSequences: {
                          type: 'list',
                          member: {}
                        },
                        temperature: {
                          type: 'float'
                        },
                        topK: {
                          type: 'integer'
                        },
                        topP: {
                          type: 'float'
                        }
                      }
                    },
                    parserMode: {},
                    promptCreationMode: {},
                    promptState: {},
                    promptType: {}
                  }
                }
              }
            },
            sensitive: true
          },
          S10: {
            type: 'map',
            key: {},
            value: {}
          },
          S14: {
            type: 'structure',
            required: ['agentArn', 'agentId', 'agentName', 'agentResourceRoleArn', 'agentStatus', 'agentVersion', 'createdAt', 'idleSessionTTLInSeconds', 'updatedAt'],
            members: {
              agentArn: {},
              agentId: {},
              agentName: {},
              agentResourceRoleArn: {},
              agentStatus: {},
              agentVersion: {},
              clientToken: {},
              createdAt: {
                shape: 'S9'
              },
              customerEncryptionKeyArn: {},
              description: {},
              failureReasons: {
                shape: 'S17'
              },
              foundationModel: {},
              guardrailConfiguration: {
                shape: 'Sg'
              },
              idleSessionTTLInSeconds: {
                type: 'integer'
              },
              instruction: {
                shape: 'Sk'
              },
              preparedAt: {
                shape: 'S9'
              },
              promptOverrideConfiguration: {
                shape: 'Sl'
              },
              recommendedActions: {
                shape: 'S19'
              },
              updatedAt: {
                shape: 'S9'
              }
            }
          },
          S17: {
            type: 'list',
            member: {}
          },
          S19: {
            type: 'list',
            member: {}
          },
          S1c: {
            type: 'structure',
            members: {
              customControl: {},
              lambda: {}
            },
            union: true
          },
          S1f: {
            type: 'structure',
            members: {
              payload: {
                type: 'string',
                sensitive: true
              },
              s3: {
                type: 'structure',
                members: {
                  s3BucketName: {},
                  s3ObjectKey: {}
                }
              }
            },
            union: true
          },
          S1k: {
            type: 'structure',
            members: {
              functions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name'],
                  members: {
                    description: {},
                    name: {},
                    parameters: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        required: ['type'],
                        members: {
                          description: {},
                          required: {
                            type: 'boolean'
                          },
                          type: {}
                        }
                      }
                    }
                  }
                }
              }
            },
            union: true
          },
          S1v: {
            type: 'structure',
            required: ['actionGroupId', 'actionGroupName', 'actionGroupState', 'agentId', 'agentVersion', 'createdAt', 'updatedAt'],
            members: {
              actionGroupExecutor: {
                shape: 'S1c'
              },
              actionGroupId: {},
              actionGroupName: {},
              actionGroupState: {},
              agentId: {},
              agentVersion: {},
              apiSchema: {
                shape: 'S1f'
              },
              clientToken: {},
              createdAt: {
                shape: 'S9'
              },
              description: {},
              functionSchema: {
                shape: 'S1k'
              },
              parentActionSignature: {},
              updatedAt: {
                shape: 'S9'
              }
            }
          },
          S1x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                agentVersion: {},
                provisionedThroughput: {}
              }
            }
          },
          S21: {
            type: 'structure',
            required: ['agentAliasArn', 'agentAliasId', 'agentAliasName', 'agentAliasStatus', 'agentId', 'createdAt', 'routingConfiguration', 'updatedAt'],
            members: {
              agentAliasArn: {},
              agentAliasHistoryEvents: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    endDate: {
                      shape: 'S9'
                    },
                    routingConfiguration: {
                      shape: 'S1x'
                    },
                    startDate: {
                      shape: 'S9'
                    }
                  }
                }
              },
              agentAliasId: {},
              agentAliasName: {},
              agentAliasStatus: {},
              agentId: {},
              clientToken: {},
              createdAt: {
                shape: 'S9'
              },
              description: {},
              failureReasons: {
                shape: 'S17'
              },
              routingConfiguration: {
                shape: 'S1x'
              },
              updatedAt: {
                shape: 'S9'
              }
            }
          },
          S29: {
            type: 'structure',
            required: ['type'],
            members: {
              s3Configuration: {
                type: 'structure',
                required: ['bucketArn'],
                members: {
                  bucketArn: {},
                  bucketOwnerAccountId: {},
                  inclusionPrefixes: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              type: {}
            }
          },
          S2g: {
            type: 'structure',
            members: {
              kmsKeyArn: {}
            }
          },
          S2h: {
            type: 'structure',
            members: {
              chunkingConfiguration: {
                type: 'structure',
                required: ['chunkingStrategy'],
                members: {
                  chunkingStrategy: {},
                  fixedSizeChunkingConfiguration: {
                    type: 'structure',
                    required: ['maxTokens', 'overlapPercentage'],
                    members: {
                      maxTokens: {
                        type: 'integer'
                      },
                      overlapPercentage: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          S2o: {
            type: 'structure',
            required: ['createdAt', 'dataSourceConfiguration', 'dataSourceId', 'knowledgeBaseId', 'name', 'status', 'updatedAt'],
            members: {
              createdAt: {
                shape: 'S9'
              },
              dataDeletionPolicy: {},
              dataSourceConfiguration: {
                shape: 'S29'
              },
              dataSourceId: {},
              description: {},
              failureReasons: {
                shape: 'S17'
              },
              knowledgeBaseId: {},
              name: {},
              serverSideEncryptionConfiguration: {
                shape: 'S2g'
              },
              status: {},
              updatedAt: {
                shape: 'S9'
              },
              vectorIngestionConfiguration: {
                shape: 'S2h'
              }
            }
          },
          S2r: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              vectorKnowledgeBaseConfiguration: {
                type: 'structure',
                required: ['embeddingModelArn'],
                members: {
                  embeddingModelArn: {},
                  embeddingModelConfiguration: {
                    type: 'structure',
                    members: {
                      bedrockEmbeddingModelConfiguration: {
                        type: 'structure',
                        members: {
                          dimensions: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2z: {
            type: 'structure',
            required: ['type'],
            members: {
              mongoDbAtlasConfiguration: {
                type: 'structure',
                required: ['collectionName', 'credentialsSecretArn', 'databaseName', 'endpoint', 'fieldMapping', 'vectorIndexName'],
                members: {
                  collectionName: {},
                  credentialsSecretArn: {},
                  databaseName: {},
                  endpoint: {},
                  endpointServiceName: {},
                  fieldMapping: {
                    type: 'structure',
                    required: ['metadataField', 'textField', 'vectorField'],
                    members: {
                      metadataField: {},
                      textField: {},
                      vectorField: {}
                    }
                  },
                  vectorIndexName: {}
                }
              },
              opensearchServerlessConfiguration: {
                type: 'structure',
                required: ['collectionArn', 'fieldMapping', 'vectorIndexName'],
                members: {
                  collectionArn: {},
                  fieldMapping: {
                    type: 'structure',
                    required: ['metadataField', 'textField', 'vectorField'],
                    members: {
                      metadataField: {},
                      textField: {},
                      vectorField: {}
                    }
                  },
                  vectorIndexName: {}
                }
              },
              pineconeConfiguration: {
                type: 'structure',
                required: ['connectionString', 'credentialsSecretArn', 'fieldMapping'],
                members: {
                  connectionString: {},
                  credentialsSecretArn: {},
                  fieldMapping: {
                    type: 'structure',
                    required: ['metadataField', 'textField'],
                    members: {
                      metadataField: {},
                      textField: {}
                    }
                  },
                  namespace: {}
                }
              },
              rdsConfiguration: {
                type: 'structure',
                required: ['credentialsSecretArn', 'databaseName', 'fieldMapping', 'resourceArn', 'tableName'],
                members: {
                  credentialsSecretArn: {},
                  databaseName: {},
                  fieldMapping: {
                    type: 'structure',
                    required: ['metadataField', 'primaryKeyField', 'textField', 'vectorField'],
                    members: {
                      metadataField: {},
                      primaryKeyField: {},
                      textField: {},
                      vectorField: {}
                    }
                  },
                  resourceArn: {},
                  tableName: {}
                }
              },
              redisEnterpriseCloudConfiguration: {
                type: 'structure',
                required: ['credentialsSecretArn', 'endpoint', 'fieldMapping', 'vectorIndexName'],
                members: {
                  credentialsSecretArn: {},
                  endpoint: {},
                  fieldMapping: {
                    type: 'structure',
                    required: ['metadataField', 'textField', 'vectorField'],
                    members: {
                      metadataField: {},
                      textField: {},
                      vectorField: {}
                    }
                  },
                  vectorIndexName: {}
                }
              },
              type: {}
            }
          },
          S3t: {
            type: 'structure',
            required: ['createdAt', 'knowledgeBaseArn', 'knowledgeBaseConfiguration', 'knowledgeBaseId', 'name', 'roleArn', 'status', 'storageConfiguration', 'updatedAt'],
            members: {
              createdAt: {
                shape: 'S9'
              },
              description: {},
              failureReasons: {
                shape: 'S17'
              },
              knowledgeBaseArn: {},
              knowledgeBaseConfiguration: {
                shape: 'S2r'
              },
              knowledgeBaseId: {},
              name: {},
              roleArn: {},
              status: {},
              storageConfiguration: {
                shape: 'S2z'
              },
              updatedAt: {
                shape: 'S9'
              }
            }
          },
          S4q: {
            type: 'structure',
            required: ['dataSourceId', 'ingestionJobId', 'knowledgeBaseId', 'startedAt', 'status', 'updatedAt'],
            members: {
              dataSourceId: {},
              description: {},
              failureReasons: {
                shape: 'S17'
              },
              ingestionJobId: {},
              knowledgeBaseId: {},
              startedAt: {
                shape: 'S9'
              },
              statistics: {
                shape: 'S4r'
              },
              status: {},
              updatedAt: {
                shape: 'S9'
              }
            }
          },
          S4r: {
            type: 'structure',
            members: {
              numberOfDocumentsDeleted: {
                type: 'long'
              },
              numberOfDocumentsFailed: {
                type: 'long'
              },
              numberOfDocumentsScanned: {
                type: 'long'
              },
              numberOfMetadataDocumentsModified: {
                type: 'long'
              },
              numberOfMetadataDocumentsScanned: {
                type: 'long'
              },
              numberOfModifiedDocumentsIndexed: {
                type: 'long'
              },
              numberOfNewDocumentsIndexed: {
                type: 'long'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f2027eabeb0ce5b8214e8e805b5f77db6ca541be.js.map