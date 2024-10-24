System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-10-19',
          endpointPrefix: 'wisdom',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Connect Wisdom Service',
          serviceId: 'Wisdom',
          signatureVersion: 'v4',
          signingName: 'wisdom',
          uid: 'wisdom-2020-10-19'
        },
        operations: {
          CreateAssistant: {
            http: {
              requestUri: '/assistants',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                serverSideEncryptionConfiguration: {
                  shape: 'S5'
                },
                tags: {
                  shape: 'S7'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                assistant: {
                  shape: 'Sc'
                }
              }
            },
            idempotent: true
          },
          CreateAssistantAssociation: {
            http: {
              requestUri: '/assistants/{assistantId}/associations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId', 'association', 'associationType'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                },
                association: {
                  type: 'structure',
                  members: {
                    knowledgeBaseId: {}
                  },
                  union: true
                },
                associationType: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                assistantAssociation: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          CreateContent: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/contents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId', 'name', 'uploadId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                metadata: {
                  shape: 'Sr'
                },
                name: {},
                overrideLinkOutUri: {},
                tags: {
                  shape: 'S7'
                },
                title: {},
                uploadId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                content: {
                  shape: 'Sw'
                }
              }
            },
            idempotent: true
          },
          CreateKnowledgeBase: {
            http: {
              requestUri: '/knowledgeBases',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseType', 'name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                knowledgeBaseType: {},
                name: {},
                renderingConfiguration: {
                  shape: 'S13'
                },
                serverSideEncryptionConfiguration: {
                  shape: 'S5'
                },
                sourceConfiguration: {
                  shape: 'S14'
                },
                tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                knowledgeBase: {
                  shape: 'S18'
                }
              }
            },
            idempotent: true
          },
          CreateQuickResponse: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/quickResponses',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['content', 'knowledgeBaseId', 'name'],
              members: {
                channels: {
                  shape: 'S1b'
                },
                clientToken: {
                  idempotencyToken: true
                },
                content: {
                  shape: 'S1d'
                },
                contentType: {},
                description: {},
                groupingConfiguration: {
                  shape: 'S1h'
                },
                isActive: {
                  type: 'boolean'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                language: {},
                name: {},
                shortcutKey: {},
                tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                quickResponse: {
                  shape: 'S1q'
                }
              }
            },
            idempotent: true
          },
          CreateSession: {
            http: {
              requestUri: '/assistants/{assistantId}/sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId', 'name'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                },
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S1w'
                }
              }
            },
            idempotent: true
          },
          DeleteAssistant: {
            http: {
              method: 'DELETE',
              requestUri: '/assistants/{assistantId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['assistantId'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteAssistantAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/assistants/{assistantId}/associations/{assistantAssociationId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['assistantAssociationId', 'assistantId'],
              members: {
                assistantAssociationId: {
                  location: 'uri',
                  locationName: 'assistantAssociationId'
                },
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteContent: {
            http: {
              method: 'DELETE',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/contents/{contentId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['contentId', 'knowledgeBaseId'],
              members: {
                contentId: {
                  location: 'uri',
                  locationName: 'contentId'
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
          DeleteImportJob: {
            http: {
              method: 'DELETE',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['importJobId', 'knowledgeBaseId'],
              members: {
                importJobId: {
                  location: 'uri',
                  locationName: 'importJobId'
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
          DeleteKnowledgeBase: {
            http: {
              method: 'DELETE',
              requestUri: '/knowledgeBases/{knowledgeBaseId}',
              responseCode: 204
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
              members: {}
            },
            idempotent: true
          },
          DeleteQuickResponse: {
            http: {
              method: 'DELETE',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId', 'quickResponseId'],
              members: {
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                quickResponseId: {
                  location: 'uri',
                  locationName: 'quickResponseId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetAssistant: {
            http: {
              method: 'GET',
              requestUri: '/assistants/{assistantId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                assistant: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetAssistantAssociation: {
            http: {
              method: 'GET',
              requestUri: '/assistants/{assistantId}/associations/{assistantAssociationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantAssociationId', 'assistantId'],
              members: {
                assistantAssociationId: {
                  location: 'uri',
                  locationName: 'assistantAssociationId'
                },
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                assistantAssociation: {
                  shape: 'Sn'
                }
              }
            }
          },
          GetContent: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/contents/{contentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contentId', 'knowledgeBaseId'],
              members: {
                contentId: {
                  location: 'uri',
                  locationName: 'contentId'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                content: {
                  shape: 'Sw'
                }
              }
            }
          },
          GetContentSummary: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contentId', 'knowledgeBaseId'],
              members: {
                contentId: {
                  location: 'uri',
                  locationName: 'contentId'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contentSummary: {
                  shape: 'S2i'
                }
              }
            }
          },
          GetImportJob: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['importJobId', 'knowledgeBaseId'],
              members: {
                importJobId: {
                  location: 'uri',
                  locationName: 'importJobId'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                importJob: {
                  shape: 'S2l'
                }
              }
            }
          },
          GetKnowledgeBase: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases/{knowledgeBaseId}',
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
              members: {
                knowledgeBase: {
                  shape: 'S18'
                }
              }
            }
          },
          GetQuickResponse: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId', 'quickResponseId'],
              members: {
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                quickResponseId: {
                  location: 'uri',
                  locationName: 'quickResponseId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                quickResponse: {
                  shape: 'S1q'
                }
              }
            }
          },
          GetRecommendations: {
            http: {
              method: 'GET',
              requestUri: '/assistants/{assistantId}/sessions/{sessionId}/recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId', 'sessionId'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                waitTimeSeconds: {
                  location: 'querystring',
                  locationName: 'waitTimeSeconds',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['recommendations'],
              members: {
                recommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['document', 'recommendationId'],
                    members: {
                      document: {
                        shape: 'S32'
                      },
                      recommendationId: {},
                      relevanceLevel: {},
                      relevanceScore: {
                        type: 'double'
                      },
                      type: {}
                    }
                  }
                },
                triggers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['data', 'id', 'recommendationIds', 'source', 'type'],
                    members: {
                      data: {
                        type: 'structure',
                        members: {
                          query: {
                            type: 'structure',
                            members: {
                              text: {
                                shape: 'S3h'
                              }
                            }
                          }
                        },
                        union: true
                      },
                      id: {},
                      recommendationIds: {
                        shape: 'S3i'
                      },
                      source: {},
                      type: {}
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'GetRecommendations API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024 you will need to create a new Assistant in the Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.'
          },
          GetSession: {
            http: {
              method: 'GET',
              requestUri: '/assistants/{assistantId}/sessions/{sessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId', 'sessionId'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S1w'
                }
              }
            }
          },
          ListAssistantAssociations: {
            http: {
              method: 'GET',
              requestUri: '/assistants/{assistantId}/associations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
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
              required: ['assistantAssociationSummaries'],
              members: {
                assistantAssociationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['assistantArn', 'assistantAssociationArn', 'assistantAssociationId', 'assistantId', 'associationData', 'associationType'],
                    members: {
                      assistantArn: {},
                      assistantAssociationArn: {},
                      assistantAssociationId: {},
                      assistantId: {},
                      associationData: {
                        shape: 'So'
                      },
                      associationType: {},
                      tags: {
                        shape: 'S7'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAssistants: {
            http: {
              method: 'GET',
              requestUri: '/assistants',
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
              required: ['assistantSummaries'],
              members: {
                assistantSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['assistantArn', 'assistantId', 'name', 'status', 'type'],
                    members: {
                      assistantArn: {},
                      assistantId: {},
                      description: {},
                      integrationConfiguration: {
                        shape: 'Sf'
                      },
                      name: {},
                      serverSideEncryptionConfiguration: {
                        shape: 'S5'
                      },
                      status: {},
                      tags: {
                        shape: 'S7'
                      },
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListContents: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/contents',
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
              required: ['contentSummaries'],
              members: {
                contentSummaries: {
                  shape: 'S3y'
                },
                nextToken: {}
              }
            }
          },
          ListImportJobs: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/importJobs',
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
              required: ['importJobSummaries'],
              members: {
                importJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdTime', 'importJobId', 'importJobType', 'knowledgeBaseArn', 'knowledgeBaseId', 'lastModifiedTime', 'status', 'uploadId'],
                    members: {
                      createdTime: {
                        shape: 'S10'
                      },
                      externalSourceConfiguration: {
                        shape: 'S2m'
                      },
                      importJobId: {},
                      importJobType: {},
                      knowledgeBaseArn: {},
                      knowledgeBaseId: {},
                      lastModifiedTime: {
                        shape: 'S10'
                      },
                      metadata: {
                        shape: 'Sr'
                      },
                      status: {},
                      uploadId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKnowledgeBases: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases',
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
              required: ['knowledgeBaseSummaries'],
              members: {
                knowledgeBaseSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['knowledgeBaseArn', 'knowledgeBaseId', 'knowledgeBaseType', 'name', 'status'],
                    members: {
                      description: {},
                      knowledgeBaseArn: {},
                      knowledgeBaseId: {},
                      knowledgeBaseType: {},
                      name: {},
                      renderingConfiguration: {
                        shape: 'S13'
                      },
                      serverSideEncryptionConfiguration: {
                        shape: 'S5'
                      },
                      sourceConfiguration: {
                        shape: 'S14'
                      },
                      status: {},
                      tags: {
                        shape: 'S7'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListQuickResponses: {
            http: {
              method: 'GET',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/quickResponses',
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
              required: ['quickResponseSummaries'],
              members: {
                nextToken: {},
                quickResponseSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['contentType', 'createdTime', 'knowledgeBaseArn', 'knowledgeBaseId', 'lastModifiedTime', 'name', 'quickResponseArn', 'quickResponseId', 'status'],
                    members: {
                      channels: {
                        shape: 'S1b'
                      },
                      contentType: {},
                      createdTime: {
                        shape: 'S10'
                      },
                      description: {},
                      isActive: {
                        type: 'boolean'
                      },
                      knowledgeBaseArn: {},
                      knowledgeBaseId: {},
                      lastModifiedBy: {},
                      lastModifiedTime: {
                        shape: 'S10'
                      },
                      name: {},
                      quickResponseArn: {},
                      quickResponseId: {},
                      status: {},
                      tags: {
                        shape: 'S7'
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
              members: {
                tags: {
                  shape: 'S7'
                }
              }
            }
          },
          NotifyRecommendationsReceived: {
            http: {
              requestUri: '/assistants/{assistantId}/sessions/{sessionId}/recommendations/notify',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId', 'recommendationIds', 'sessionId'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                },
                recommendationIds: {
                  shape: 'S3i'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      message: {},
                      recommendationId: {}
                    }
                  }
                },
                recommendationIds: {
                  shape: 'S3i'
                }
              }
            },
            idempotent: true
          },
          QueryAssistant: {
            http: {
              requestUri: '/assistants/{assistantId}/query',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId', 'queryText'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                queryText: {
                  shape: 'S3h'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['results'],
              members: {
                nextToken: {},
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['document', 'resultId'],
                    members: {
                      document: {
                        shape: 'S32'
                      },
                      relevanceScore: {
                        type: 'double'
                      },
                      resultId: {}
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'QueryAssistant API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024 you will need to create a new Assistant in the Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.'
          },
          RemoveKnowledgeBaseTemplateUri: {
            http: {
              method: 'DELETE',
              requestUri: '/knowledgeBases/{knowledgeBaseId}/templateUri',
              responseCode: 204
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
              members: {}
            }
          },
          SearchContent: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId', 'searchExpression'],
              members: {
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
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
                searchExpression: {
                  shape: 'S4p'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['contentSummaries'],
              members: {
                contentSummaries: {
                  shape: 'S3y'
                },
                nextToken: {}
              }
            }
          },
          SearchQuickResponses: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/search/quickResponses',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId', 'searchExpression'],
              members: {
                attributes: {
                  type: 'map',
                  key: {},
                  value: {},
                  sensitive: true
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
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
                searchExpression: {
                  type: 'structure',
                  members: {
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'operator'],
                        members: {
                          includeNoExistence: {
                            type: 'boolean'
                          },
                          name: {},
                          operator: {},
                          values: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    },
                    orderOnField: {
                      type: 'structure',
                      required: ['name'],
                      members: {
                        name: {},
                        order: {}
                      }
                    },
                    queries: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'operator', 'values'],
                        members: {
                          allowFuzziness: {
                            type: 'boolean'
                          },
                          name: {},
                          operator: {},
                          priority: {},
                          values: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['results'],
              members: {
                nextToken: {},
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['contentType', 'contents', 'createdTime', 'isActive', 'knowledgeBaseArn', 'knowledgeBaseId', 'lastModifiedTime', 'name', 'quickResponseArn', 'quickResponseId', 'status'],
                    members: {
                      attributesInterpolated: {
                        shape: 'S5g'
                      },
                      attributesNotInterpolated: {
                        shape: 'S5g'
                      },
                      channels: {
                        shape: 'S1b'
                      },
                      contentType: {},
                      contents: {
                        shape: 'S1r'
                      },
                      createdTime: {
                        shape: 'S10'
                      },
                      description: {},
                      groupingConfiguration: {
                        shape: 'S1h'
                      },
                      isActive: {
                        type: 'boolean'
                      },
                      knowledgeBaseArn: {},
                      knowledgeBaseId: {},
                      language: {},
                      lastModifiedBy: {},
                      lastModifiedTime: {
                        shape: 'S10'
                      },
                      name: {},
                      quickResponseArn: {},
                      quickResponseId: {},
                      shortcutKey: {},
                      status: {},
                      tags: {
                        shape: 'S7'
                      }
                    }
                  }
                }
              }
            }
          },
          SearchSessions: {
            http: {
              requestUri: '/assistants/{assistantId}/searchSessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId', 'searchExpression'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
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
                searchExpression: {
                  shape: 'S4p'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sessionSummaries'],
              members: {
                nextToken: {},
                sessionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['assistantArn', 'assistantId', 'sessionArn', 'sessionId'],
                    members: {
                      assistantArn: {},
                      assistantId: {},
                      sessionArn: {},
                      sessionId: {}
                    }
                  }
                }
              }
            }
          },
          StartContentUpload: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/upload',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contentType', 'knowledgeBaseId'],
              members: {
                contentType: {},
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                presignedUrlTimeToLive: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['headersToInclude', 'uploadId', 'url', 'urlExpiry'],
              members: {
                headersToInclude: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                uploadId: {},
                url: {
                  shape: 'Sz'
                },
                urlExpiry: {
                  shape: 'S10'
                }
              }
            }
          },
          StartImportJob: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/importJobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['importJobType', 'knowledgeBaseId', 'uploadId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                externalSourceConfiguration: {
                  shape: 'S2m'
                },
                importJobType: {},
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                metadata: {
                  shape: 'Sr'
                },
                uploadId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                importJob: {
                  shape: 'S2l'
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
                  shape: 'S7'
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
          UpdateContent: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/contents/{contentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contentId', 'knowledgeBaseId'],
              members: {
                contentId: {
                  location: 'uri',
                  locationName: 'contentId'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                metadata: {
                  shape: 'Sr'
                },
                overrideLinkOutUri: {},
                removeOverrideLinkOutUri: {
                  type: 'boolean'
                },
                revisionId: {},
                title: {},
                uploadId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                content: {
                  shape: 'Sw'
                }
              }
            }
          },
          UpdateKnowledgeBaseTemplateUri: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/templateUri',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId', 'templateUri'],
              members: {
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                templateUri: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                knowledgeBase: {
                  shape: 'S18'
                }
              }
            }
          },
          UpdateQuickResponse: {
            http: {
              requestUri: '/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId', 'quickResponseId'],
              members: {
                channels: {
                  shape: 'S1b'
                },
                content: {
                  shape: 'S1d'
                },
                contentType: {},
                description: {},
                groupingConfiguration: {
                  shape: 'S1h'
                },
                isActive: {
                  type: 'boolean'
                },
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                language: {},
                name: {},
                quickResponseId: {
                  location: 'uri',
                  locationName: 'quickResponseId'
                },
                removeDescription: {
                  type: 'boolean'
                },
                removeGroupingConfiguration: {
                  type: 'boolean'
                },
                removeShortcutKey: {
                  type: 'boolean'
                },
                shortcutKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                quickResponse: {
                  shape: 'S1q'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              kmsKeyId: {}
            }
          },
          S7: {
            type: 'map',
            key: {},
            value: {}
          },
          Sc: {
            type: 'structure',
            required: ['assistantArn', 'assistantId', 'name', 'status', 'type'],
            members: {
              assistantArn: {},
              assistantId: {},
              description: {},
              integrationConfiguration: {
                shape: 'Sf'
              },
              name: {},
              serverSideEncryptionConfiguration: {
                shape: 'S5'
              },
              status: {},
              tags: {
                shape: 'S7'
              },
              type: {}
            }
          },
          Sf: {
            type: 'structure',
            members: {
              topicIntegrationArn: {}
            }
          },
          Sn: {
            type: 'structure',
            required: ['assistantArn', 'assistantAssociationArn', 'assistantAssociationId', 'assistantId', 'associationData', 'associationType'],
            members: {
              assistantArn: {},
              assistantAssociationArn: {},
              assistantAssociationId: {},
              assistantId: {},
              associationData: {
                shape: 'So'
              },
              associationType: {},
              tags: {
                shape: 'S7'
              }
            }
          },
          So: {
            type: 'structure',
            members: {
              knowledgeBaseAssociation: {
                type: 'structure',
                members: {
                  knowledgeBaseArn: {},
                  knowledgeBaseId: {}
                }
              }
            },
            union: true
          },
          Sr: {
            type: 'map',
            key: {},
            value: {}
          },
          Sw: {
            type: 'structure',
            required: ['contentArn', 'contentId', 'contentType', 'knowledgeBaseArn', 'knowledgeBaseId', 'metadata', 'name', 'revisionId', 'status', 'title', 'url', 'urlExpiry'],
            members: {
              contentArn: {},
              contentId: {},
              contentType: {},
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              linkOutUri: {},
              metadata: {
                shape: 'Sr'
              },
              name: {},
              revisionId: {},
              status: {},
              tags: {
                shape: 'S7'
              },
              title: {},
              url: {
                shape: 'Sz'
              },
              urlExpiry: {
                shape: 'S10'
              }
            }
          },
          Sz: {
            type: 'string',
            sensitive: true
          },
          S10: {
            type: 'timestamp',
            timestampFormat: 'unixTimestamp'
          },
          S13: {
            type: 'structure',
            members: {
              templateUri: {}
            }
          },
          S14: {
            type: 'structure',
            members: {
              appIntegrations: {
                type: 'structure',
                required: ['appIntegrationArn'],
                members: {
                  appIntegrationArn: {},
                  objectFields: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            },
            union: true
          },
          S18: {
            type: 'structure',
            required: ['knowledgeBaseArn', 'knowledgeBaseId', 'knowledgeBaseType', 'name', 'status'],
            members: {
              description: {},
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              knowledgeBaseType: {},
              lastContentModificationTime: {
                shape: 'S10'
              },
              name: {},
              renderingConfiguration: {
                shape: 'S13'
              },
              serverSideEncryptionConfiguration: {
                shape: 'S5'
              },
              sourceConfiguration: {
                shape: 'S14'
              },
              status: {},
              tags: {
                shape: 'S7'
              }
            }
          },
          S1b: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            }
          },
          S1d: {
            type: 'structure',
            members: {
              content: {
                shape: 'S1e'
              }
            },
            union: true
          },
          S1e: {
            type: 'string',
            sensitive: true
          },
          S1h: {
            type: 'structure',
            members: {
              criteria: {
                type: 'string',
                sensitive: true
              },
              values: {
                type: 'list',
                member: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S1q: {
            type: 'structure',
            required: ['contentType', 'createdTime', 'knowledgeBaseArn', 'knowledgeBaseId', 'lastModifiedTime', 'name', 'quickResponseArn', 'quickResponseId', 'status'],
            members: {
              channels: {
                shape: 'S1b'
              },
              contentType: {},
              contents: {
                shape: 'S1r'
              },
              createdTime: {
                shape: 'S10'
              },
              description: {},
              groupingConfiguration: {
                shape: 'S1h'
              },
              isActive: {
                type: 'boolean'
              },
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              language: {},
              lastModifiedBy: {},
              lastModifiedTime: {
                shape: 'S10'
              },
              name: {},
              quickResponseArn: {},
              quickResponseId: {},
              shortcutKey: {},
              status: {},
              tags: {
                shape: 'S7'
              }
            }
          },
          S1r: {
            type: 'structure',
            members: {
              markdown: {
                shape: 'S1s'
              },
              plainText: {
                shape: 'S1s'
              }
            }
          },
          S1s: {
            type: 'structure',
            members: {
              content: {
                shape: 'S1e'
              }
            },
            union: true
          },
          S1w: {
            type: 'structure',
            required: ['name', 'sessionArn', 'sessionId'],
            members: {
              description: {},
              integrationConfiguration: {
                type: 'structure',
                members: {
                  topicIntegrationArn: {}
                }
              },
              name: {},
              sessionArn: {},
              sessionId: {},
              tags: {
                shape: 'S7'
              }
            }
          },
          S2i: {
            type: 'structure',
            required: ['contentArn', 'contentId', 'contentType', 'knowledgeBaseArn', 'knowledgeBaseId', 'metadata', 'name', 'revisionId', 'status', 'title'],
            members: {
              contentArn: {},
              contentId: {},
              contentType: {},
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              metadata: {
                shape: 'Sr'
              },
              name: {},
              revisionId: {},
              status: {},
              tags: {
                shape: 'S7'
              },
              title: {}
            }
          },
          S2l: {
            type: 'structure',
            required: ['createdTime', 'importJobId', 'importJobType', 'knowledgeBaseArn', 'knowledgeBaseId', 'lastModifiedTime', 'status', 'uploadId', 'url', 'urlExpiry'],
            members: {
              createdTime: {
                shape: 'S10'
              },
              externalSourceConfiguration: {
                shape: 'S2m'
              },
              failedRecordReport: {
                shape: 'Sz'
              },
              importJobId: {},
              importJobType: {},
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              lastModifiedTime: {
                shape: 'S10'
              },
              metadata: {
                shape: 'Sr'
              },
              status: {},
              uploadId: {},
              url: {
                shape: 'Sz'
              },
              urlExpiry: {
                shape: 'S10'
              }
            }
          },
          S2m: {
            type: 'structure',
            required: ['configuration', 'source'],
            members: {
              configuration: {
                type: 'structure',
                members: {
                  connectConfiguration: {
                    type: 'structure',
                    members: {
                      instanceId: {}
                    }
                  }
                },
                union: true
              },
              source: {}
            }
          },
          S32: {
            type: 'structure',
            required: ['contentReference'],
            members: {
              contentReference: {
                type: 'structure',
                members: {
                  contentArn: {},
                  contentId: {},
                  knowledgeBaseArn: {},
                  knowledgeBaseId: {}
                }
              },
              excerpt: {
                shape: 'S34'
              },
              title: {
                shape: 'S34'
              }
            }
          },
          S34: {
            type: 'structure',
            members: {
              highlights: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    beginOffsetInclusive: {
                      type: 'integer'
                    },
                    endOffsetExclusive: {
                      type: 'integer'
                    }
                  }
                }
              },
              text: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S3h: {
            type: 'string',
            sensitive: true
          },
          S3i: {
            type: 'list',
            member: {}
          },
          S3y: {
            type: 'list',
            member: {
              shape: 'S2i'
            }
          },
          S4p: {
            type: 'structure',
            required: ['filters'],
            members: {
              filters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['field', 'operator', 'value'],
                  members: {
                    field: {},
                    operator: {},
                    value: {}
                  }
                }
              }
            }
          },
          S5g: {
            type: 'list',
            member: {},
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f235e75ecde2b3f9b05bf069f7177c8e72731917.js.map