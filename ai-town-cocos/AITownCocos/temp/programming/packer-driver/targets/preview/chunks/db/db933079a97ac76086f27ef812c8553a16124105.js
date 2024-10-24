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
          serviceFullName: 'Amazon Q Connect',
          serviceId: 'QConnect',
          signatureVersion: 'v4',
          signingName: 'wisdom',
          uid: 'qconnect-2020-10-19'
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
                  shape: 'Sp'
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
                  shape: 'St'
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
                  shape: 'Sy'
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
                  shape: 'S15'
                },
                serverSideEncryptionConfiguration: {
                  shape: 'S5'
                },
                sourceConfiguration: {
                  shape: 'S16'
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
                  shape: 'S1a'
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
                  shape: 'S1d'
                },
                clientToken: {
                  idempotencyToken: true
                },
                content: {
                  shape: 'S1f'
                },
                contentType: {},
                description: {},
                groupingConfiguration: {
                  shape: 'S1j'
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
                  shape: 'S1s'
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
                tagFilter: {
                  shape: 'S1x'
                },
                tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S23'
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
                  shape: 'Sp'
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
                  shape: 'Sy'
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
                  shape: 'S2p'
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
                  shape: 'S2s'
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
                  shape: 'S1a'
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
                  shape: 'S1s'
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
                    required: ['recommendationId'],
                    members: {
                      data: {
                        shape: 'S39'
                      },
                      document: {
                        shape: 'S3t'
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
                                shape: 'S40'
                              }
                            }
                          }
                        },
                        union: true
                      },
                      id: {},
                      recommendationIds: {
                        shape: 'S41'
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
                  shape: 'S23'
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
                        shape: 'Sq'
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
                      capabilityConfiguration: {
                        shape: 'Sf'
                      },
                      description: {},
                      integrationConfiguration: {
                        shape: 'Sh'
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
                  shape: 'S4h'
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
                        shape: 'S12'
                      },
                      externalSourceConfiguration: {
                        shape: 'S2t'
                      },
                      importJobId: {},
                      importJobType: {},
                      knowledgeBaseArn: {},
                      knowledgeBaseId: {},
                      lastModifiedTime: {
                        shape: 'S12'
                      },
                      metadata: {
                        shape: 'St'
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
                        shape: 'S15'
                      },
                      serverSideEncryptionConfiguration: {
                        shape: 'S5'
                      },
                      sourceConfiguration: {
                        shape: 'S16'
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
                        shape: 'S1d'
                      },
                      contentType: {},
                      createdTime: {
                        shape: 'S12'
                      },
                      description: {},
                      isActive: {
                        type: 'boolean'
                      },
                      knowledgeBaseArn: {},
                      knowledgeBaseId: {},
                      lastModifiedBy: {},
                      lastModifiedTime: {
                        shape: 'S12'
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
                  shape: 'S41'
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
                  shape: 'S41'
                }
              }
            },
            idempotent: true
          },
          PutFeedback: {
            http: {
              method: 'PUT',
              requestUri: '/assistants/{assistantId}/feedback',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assistantId', 'contentFeedback', 'targetId', 'targetType'],
              members: {
                assistantId: {
                  location: 'uri',
                  locationName: 'assistantId'
                },
                contentFeedback: {
                  shape: 'S52'
                },
                targetId: {},
                targetType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['assistantArn', 'assistantId', 'contentFeedback', 'targetId', 'targetType'],
              members: {
                assistantArn: {},
                assistantId: {},
                contentFeedback: {
                  shape: 'S52'
                },
                targetId: {},
                targetType: {}
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
                queryCondition: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      single: {
                        type: 'structure',
                        required: ['comparator', 'field', 'value'],
                        members: {
                          comparator: {},
                          field: {},
                          value: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                queryText: {
                  shape: 'S40'
                },
                sessionId: {}
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
                    required: ['resultId'],
                    members: {
                      data: {
                        shape: 'S39'
                      },
                      document: {
                        shape: 'S3t'
                      },
                      relevanceScore: {
                        type: 'double'
                      },
                      resultId: {},
                      type: {}
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
                  shape: 'S5k'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['contentSummaries'],
              members: {
                contentSummaries: {
                  shape: 'S4h'
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
                        shape: 'S6b'
                      },
                      attributesNotInterpolated: {
                        shape: 'S6b'
                      },
                      channels: {
                        shape: 'S1d'
                      },
                      contentType: {},
                      contents: {
                        shape: 'S1t'
                      },
                      createdTime: {
                        shape: 'S12'
                      },
                      description: {},
                      groupingConfiguration: {
                        shape: 'S1j'
                      },
                      isActive: {
                        type: 'boolean'
                      },
                      knowledgeBaseArn: {},
                      knowledgeBaseId: {},
                      language: {},
                      lastModifiedBy: {},
                      lastModifiedTime: {
                        shape: 'S12'
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
                  shape: 'S5k'
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
                  shape: 'S11'
                },
                urlExpiry: {
                  shape: 'S12'
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
                  shape: 'S2t'
                },
                importJobType: {},
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                metadata: {
                  shape: 'St'
                },
                uploadId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                importJob: {
                  shape: 'S2s'
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
                  shape: 'St'
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
                  shape: 'Sy'
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
                  shape: 'S1a'
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
                  shape: 'S1d'
                },
                content: {
                  shape: 'S1f'
                },
                contentType: {},
                description: {},
                groupingConfiguration: {
                  shape: 'S1j'
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
                  shape: 'S1s'
                }
              }
            }
          },
          UpdateSession: {
            http: {
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
                description: {},
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                tagFilter: {
                  shape: 'S1x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S23'
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
              capabilityConfiguration: {
                shape: 'Sf'
              },
              description: {},
              integrationConfiguration: {
                shape: 'Sh'
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
              type: {}
            }
          },
          Sh: {
            type: 'structure',
            members: {
              topicIntegrationArn: {}
            }
          },
          Sp: {
            type: 'structure',
            required: ['assistantArn', 'assistantAssociationArn', 'assistantAssociationId', 'assistantId', 'associationData', 'associationType'],
            members: {
              assistantArn: {},
              assistantAssociationArn: {},
              assistantAssociationId: {},
              assistantId: {},
              associationData: {
                shape: 'Sq'
              },
              associationType: {},
              tags: {
                shape: 'S7'
              }
            }
          },
          Sq: {
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
          St: {
            type: 'map',
            key: {},
            value: {}
          },
          Sy: {
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
                shape: 'St'
              },
              name: {},
              revisionId: {},
              status: {},
              tags: {
                shape: 'S7'
              },
              title: {},
              url: {
                shape: 'S11'
              },
              urlExpiry: {
                shape: 'S12'
              }
            }
          },
          S11: {
            type: 'string',
            sensitive: true
          },
          S12: {
            type: 'timestamp',
            timestampFormat: 'unixTimestamp'
          },
          S15: {
            type: 'structure',
            members: {
              templateUri: {}
            }
          },
          S16: {
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
          S1a: {
            type: 'structure',
            required: ['knowledgeBaseArn', 'knowledgeBaseId', 'knowledgeBaseType', 'name', 'status'],
            members: {
              description: {},
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              knowledgeBaseType: {},
              lastContentModificationTime: {
                shape: 'S12'
              },
              name: {},
              renderingConfiguration: {
                shape: 'S15'
              },
              serverSideEncryptionConfiguration: {
                shape: 'S5'
              },
              sourceConfiguration: {
                shape: 'S16'
              },
              status: {},
              tags: {
                shape: 'S7'
              }
            }
          },
          S1d: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            }
          },
          S1f: {
            type: 'structure',
            members: {
              content: {
                shape: 'S1g'
              }
            },
            union: true
          },
          S1g: {
            type: 'string',
            sensitive: true
          },
          S1j: {
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
          S1s: {
            type: 'structure',
            required: ['contentType', 'createdTime', 'knowledgeBaseArn', 'knowledgeBaseId', 'lastModifiedTime', 'name', 'quickResponseArn', 'quickResponseId', 'status'],
            members: {
              channels: {
                shape: 'S1d'
              },
              contentType: {},
              contents: {
                shape: 'S1t'
              },
              createdTime: {
                shape: 'S12'
              },
              description: {},
              groupingConfiguration: {
                shape: 'S1j'
              },
              isActive: {
                type: 'boolean'
              },
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              language: {},
              lastModifiedBy: {},
              lastModifiedTime: {
                shape: 'S12'
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
          S1t: {
            type: 'structure',
            members: {
              markdown: {
                shape: 'S1u'
              },
              plainText: {
                shape: 'S1u'
              }
            }
          },
          S1u: {
            type: 'structure',
            members: {
              content: {
                shape: 'S1g'
              }
            },
            union: true
          },
          S1x: {
            type: 'structure',
            members: {
              andConditions: {
                shape: 'S1y'
              },
              orConditions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    andConditions: {
                      shape: 'S1y'
                    },
                    tagCondition: {
                      shape: 'S1z'
                    }
                  },
                  union: true
                }
              },
              tagCondition: {
                shape: 'S1z'
              }
            },
            union: true
          },
          S1y: {
            type: 'list',
            member: {
              shape: 'S1z'
            }
          },
          S1z: {
            type: 'structure',
            required: ['key'],
            members: {
              key: {},
              value: {}
            }
          },
          S23: {
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
              tagFilter: {
                shape: 'S1x'
              },
              tags: {
                shape: 'S7'
              }
            }
          },
          S2p: {
            type: 'structure',
            required: ['contentArn', 'contentId', 'contentType', 'knowledgeBaseArn', 'knowledgeBaseId', 'metadata', 'name', 'revisionId', 'status', 'title'],
            members: {
              contentArn: {},
              contentId: {},
              contentType: {},
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              metadata: {
                shape: 'St'
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
          S2s: {
            type: 'structure',
            required: ['createdTime', 'importJobId', 'importJobType', 'knowledgeBaseArn', 'knowledgeBaseId', 'lastModifiedTime', 'status', 'uploadId', 'url', 'urlExpiry'],
            members: {
              createdTime: {
                shape: 'S12'
              },
              externalSourceConfiguration: {
                shape: 'S2t'
              },
              failedRecordReport: {
                shape: 'S11'
              },
              importJobId: {},
              importJobType: {},
              knowledgeBaseArn: {},
              knowledgeBaseId: {},
              lastModifiedTime: {
                shape: 'S12'
              },
              metadata: {
                shape: 'St'
              },
              status: {},
              uploadId: {},
              url: {
                shape: 'S11'
              },
              urlExpiry: {
                shape: 'S12'
              }
            }
          },
          S2t: {
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
          S39: {
            type: 'structure',
            required: ['details', 'reference'],
            members: {
              details: {
                type: 'structure',
                members: {
                  contentData: {
                    type: 'structure',
                    required: ['rankingData', 'textData'],
                    members: {
                      rankingData: {
                        shape: 'S3c'
                      },
                      textData: {
                        shape: 'S3f'
                      }
                    }
                  },
                  generativeData: {
                    type: 'structure',
                    required: ['completion', 'rankingData', 'references'],
                    members: {
                      completion: {
                        shape: 'S3k'
                      },
                      rankingData: {
                        shape: 'S3c'
                      },
                      references: {
                        type: 'list',
                        member: {
                          shape: 'S39'
                        }
                      }
                    }
                  },
                  sourceContentData: {
                    type: 'structure',
                    required: ['id', 'rankingData', 'textData', 'type'],
                    members: {
                      id: {},
                      rankingData: {
                        shape: 'S3c'
                      },
                      textData: {
                        shape: 'S3f'
                      },
                      type: {}
                    }
                  }
                },
                union: true
              },
              reference: {
                type: 'structure',
                members: {
                  contentReference: {
                    shape: 'S3q'
                  },
                  generativeReference: {
                    type: 'structure',
                    members: {
                      generationId: {},
                      modelId: {}
                    }
                  }
                },
                union: true
              }
            }
          },
          S3c: {
            type: 'structure',
            members: {
              relevanceLevel: {},
              relevanceScore: {
                type: 'double'
              }
            }
          },
          S3f: {
            type: 'structure',
            members: {
              excerpt: {
                shape: 'S3g'
              },
              title: {
                shape: 'S3g'
              }
            }
          },
          S3g: {
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
                shape: 'S3k'
              }
            }
          },
          S3k: {
            type: 'string',
            sensitive: true
          },
          S3q: {
            type: 'structure',
            members: {
              contentArn: {},
              contentId: {},
              knowledgeBaseArn: {},
              knowledgeBaseId: {}
            }
          },
          S3t: {
            type: 'structure',
            required: ['contentReference'],
            members: {
              contentReference: {
                shape: 'S3q'
              },
              excerpt: {
                shape: 'S3g'
              },
              title: {
                shape: 'S3g'
              }
            }
          },
          S40: {
            type: 'string',
            sensitive: true
          },
          S41: {
            type: 'list',
            member: {}
          },
          S4h: {
            type: 'list',
            member: {
              shape: 'S2p'
            }
          },
          S52: {
            type: 'structure',
            members: {
              generativeContentFeedbackData: {
                type: 'structure',
                required: ['relevance'],
                members: {
                  relevance: {}
                }
              }
            },
            union: true
          },
          S5k: {
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
          S6b: {
            type: 'list',
            member: {},
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=db933079a97ac76086f27ef812c8553a16124105.js.map