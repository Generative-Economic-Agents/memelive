System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-11-27',
          endpointPrefix: 'qbusiness',
          protocol: 'rest-json',
          protocolSettings: {
            h2: 'eventstream'
          },
          protocols: ['rest-json'],
          serviceFullName: 'QBusiness',
          serviceId: 'QBusiness',
          signatureVersion: 'v4',
          signingName: 'qbusiness',
          uid: 'qbusiness-2023-11-27'
        },
        operations: {
          BatchDeleteDocument: {
            http: {
              requestUri: '/applications/{applicationId}/indices/{indexId}/documents/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'documents'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                documents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['documentId'],
                    members: {
                      documentId: {}
                    }
                  }
                },
                dataSourceSyncId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                failedDocuments: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchPutDocument: {
            http: {
              requestUri: '/applications/{applicationId}/indices/{indexId}/documents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'documents'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                documents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id'],
                    members: {
                      id: {},
                      attributes: {
                        type: 'list',
                        member: {
                          shape: 'Sj'
                        }
                      },
                      content: {
                        type: 'structure',
                        members: {
                          blob: {
                            type: 'blob'
                          },
                          s3: {
                            shape: 'St'
                          }
                        },
                        union: true
                      },
                      contentType: {},
                      title: {},
                      accessConfiguration: {
                        type: 'structure',
                        required: ['accessControls'],
                        members: {
                          accessControls: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['principals'],
                              members: {
                                principals: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      user: {
                                        type: 'structure',
                                        required: ['access'],
                                        members: {
                                          id: {},
                                          access: {},
                                          membershipType: {}
                                        }
                                      },
                                      group: {
                                        type: 'structure',
                                        required: ['access'],
                                        members: {
                                          name: {},
                                          access: {},
                                          membershipType: {}
                                        }
                                      }
                                    },
                                    union: true
                                  }
                                },
                                memberRelation: {}
                              }
                            }
                          },
                          memberRelation: {}
                        }
                      },
                      documentEnrichmentConfiguration: {
                        shape: 'S1a'
                      }
                    }
                  }
                },
                roleArn: {},
                dataSourceSyncId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                failedDocuments: {
                  shape: 'S9'
                }
              }
            }
          },
          ChatSync: {
            http: {
              requestUri: '/applications/{applicationId}/conversations?sync',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {
                  location: 'querystring',
                  locationName: 'userId'
                },
                userGroups: {
                  shape: 'S1n',
                  location: 'querystring',
                  locationName: 'userGroups'
                },
                userMessage: {},
                attachments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'data'],
                    members: {
                      name: {},
                      data: {
                        type: 'blob'
                      }
                    }
                  }
                },
                actionExecution: {
                  shape: 'S1s'
                },
                authChallengeResponse: {
                  type: 'structure',
                  required: ['responseMap'],
                  members: {
                    responseMap: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                },
                conversationId: {},
                parentMessageId: {},
                attributeFilter: {
                  shape: 'S25'
                },
                chatMode: {},
                chatModeConfiguration: {
                  type: 'structure',
                  members: {
                    pluginConfiguration: {
                      type: 'structure',
                      required: ['pluginId'],
                      members: {
                        pluginId: {}
                      }
                    }
                  },
                  union: true
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                conversationId: {},
                systemMessage: {},
                systemMessageId: {},
                userMessageId: {},
                actionReview: {
                  shape: 'S2c'
                },
                authChallengeRequest: {
                  type: 'structure',
                  required: ['authorizationUrl'],
                  members: {
                    authorizationUrl: {}
                  }
                },
                sourceAttributions: {
                  shape: 'S2n'
                },
                failedAttachments: {
                  shape: 'S2t'
                }
              }
            }
          },
          CreateApplication: {
            http: {
              requestUri: '/applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['displayName'],
              members: {
                displayName: {},
                roleArn: {},
                identityCenterInstanceArn: {},
                description: {},
                encryptionConfiguration: {
                  shape: 'S30'
                },
                tags: {
                  shape: 'S32'
                },
                clientToken: {
                  idempotencyToken: true
                },
                attachmentsConfiguration: {
                  shape: 'S36'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationId: {},
                applicationArn: {}
              }
            },
            idempotent: true
          },
          CreateDataSource: {
            http: {
              requestUri: '/applications/{applicationId}/indices/{indexId}/datasources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'displayName', 'configuration'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                displayName: {},
                configuration: {
                  shape: 'S3c'
                },
                vpcConfiguration: {
                  shape: 'S3d'
                },
                description: {},
                tags: {
                  shape: 'S32'
                },
                syncSchedule: {},
                roleArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                documentEnrichmentConfiguration: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataSourceId: {},
                dataSourceArn: {}
              }
            },
            idempotent: true
          },
          CreateIndex: {
            http: {
              requestUri: '/applications/{applicationId}/indices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'displayName'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                displayName: {},
                type: {},
                description: {},
                tags: {
                  shape: 'S32'
                },
                capacityConfiguration: {
                  shape: 'S3o'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                indexId: {},
                indexArn: {}
              }
            }
          },
          CreatePlugin: {
            http: {
              requestUri: '/applications/{applicationId}/plugins',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'displayName', 'type', 'authConfiguration'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                displayName: {},
                type: {},
                authConfiguration: {
                  shape: 'S3u'
                },
                serverUrl: {},
                customPluginConfiguration: {
                  shape: 'S3z'
                },
                tags: {
                  shape: 'S32'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pluginId: {},
                pluginArn: {},
                buildStatus: {}
              }
            },
            idempotent: true
          },
          CreateRetriever: {
            http: {
              requestUri: '/applications/{applicationId}/retrievers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'type', 'displayName', 'configuration'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                type: {},
                displayName: {},
                configuration: {
                  shape: 'S4a'
                },
                roleArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S32'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                retrieverId: {},
                retrieverArn: {}
              }
            }
          },
          CreateUser: {
            http: {
              requestUri: '/applications/{applicationId}/users',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'userId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {},
                userAliases: {
                  type: 'list',
                  member: {
                    shape: 'S4u'
                  }
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          CreateWebExperience: {
            http: {
              requestUri: '/applications/{applicationId}/experiences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                title: {},
                subtitle: {},
                welcomeMessage: {},
                samplePromptsControlMode: {},
                roleArn: {},
                tags: {
                  shape: 'S32'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                webExperienceId: {},
                webExperienceArn: {}
              }
            }
          },
          DeleteApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteChatControlsConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/chatcontrols',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteConversation: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/conversations/{conversationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['conversationId', 'applicationId'],
              members: {
                conversationId: {
                  location: 'uri',
                  locationName: 'conversationId'
                },
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {
                  location: 'querystring',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteDataSource: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'dataSourceId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/indices/{indexId}/groups/{groupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'groupName'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                groupName: {
                  location: 'uri',
                  locationName: 'groupName'
                },
                dataSourceId: {
                  location: 'querystring',
                  locationName: 'dataSourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteIndex: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/indices/{indexId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeletePlugin: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/plugins/{pluginId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'pluginId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                pluginId: {
                  location: 'uri',
                  locationName: 'pluginId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteRetriever: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/retrievers/{retrieverId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'retrieverId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                retrieverId: {
                  location: 'uri',
                  locationName: 'retrieverId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteUser: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/users/{userId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'userId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteWebExperience: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/experiences/{webExperienceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'webExperienceId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                webExperienceId: {
                  location: 'uri',
                  locationName: 'webExperienceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetApplication: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                displayName: {},
                applicationId: {},
                applicationArn: {},
                identityCenterApplicationArn: {},
                roleArn: {},
                status: {},
                description: {},
                encryptionConfiguration: {
                  shape: 'S30'
                },
                createdAt: {
                  type: 'timestamp'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                error: {
                  shape: 'Sb'
                },
                attachmentsConfiguration: {
                  type: 'structure',
                  members: {
                    attachmentsControlMode: {}
                  }
                }
              }
            }
          },
          GetChatControlsConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/chatcontrols',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
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
                responseScope: {},
                blockedPhrases: {
                  type: 'structure',
                  members: {
                    blockedPhrases: {
                      shape: 'S5z'
                    },
                    systemMessageOverride: {}
                  }
                },
                topicConfigurations: {
                  shape: 'S62'
                },
                creatorModeConfiguration: {
                  type: 'structure',
                  required: ['creatorModeControl'],
                  members: {
                    creatorModeControl: {}
                  }
                },
                nextToken: {}
              }
            }
          },
          GetDataSource: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'dataSourceId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationId: {},
                indexId: {},
                dataSourceId: {},
                dataSourceArn: {},
                displayName: {},
                type: {},
                configuration: {
                  shape: 'S3c'
                },
                vpcConfiguration: {
                  shape: 'S3d'
                },
                createdAt: {
                  type: 'timestamp'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                description: {},
                status: {},
                syncSchedule: {},
                roleArn: {},
                error: {
                  shape: 'Sb'
                },
                documentEnrichmentConfiguration: {
                  shape: 'S1a'
                }
              }
            }
          },
          GetGroup: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/indices/{indexId}/groups/{groupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'groupName'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                groupName: {
                  location: 'uri',
                  locationName: 'groupName'
                },
                dataSourceId: {
                  location: 'querystring',
                  locationName: 'dataSourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {
                  shape: 'S6p'
                },
                statusHistory: {
                  type: 'list',
                  member: {
                    shape: 'S6p'
                  }
                }
              }
            }
          },
          GetIndex: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/indices/{indexId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationId: {},
                indexId: {},
                displayName: {},
                type: {},
                indexArn: {},
                status: {},
                description: {},
                createdAt: {
                  type: 'timestamp'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                capacityConfiguration: {
                  shape: 'S3o'
                },
                documentAttributeConfigurations: {
                  shape: 'S6v'
                },
                error: {
                  shape: 'Sb'
                },
                indexStatistics: {
                  type: 'structure',
                  members: {
                    textDocumentStatistics: {
                      type: 'structure',
                      members: {
                        indexedTextBytes: {
                          type: 'long'
                        },
                        indexedTextDocumentCount: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetPlugin: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/plugins/{pluginId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'pluginId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                pluginId: {
                  location: 'uri',
                  locationName: 'pluginId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationId: {},
                pluginId: {},
                displayName: {},
                type: {},
                serverUrl: {},
                authConfiguration: {
                  shape: 'S3u'
                },
                customPluginConfiguration: {
                  shape: 'S3z'
                },
                buildStatus: {},
                pluginArn: {},
                state: {},
                createdAt: {
                  type: 'timestamp'
                },
                updatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetRetriever: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/retrievers/{retrieverId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'retrieverId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                retrieverId: {
                  location: 'uri',
                  locationName: 'retrieverId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationId: {},
                retrieverId: {},
                retrieverArn: {},
                type: {},
                status: {},
                displayName: {},
                configuration: {
                  shape: 'S4a'
                },
                roleArn: {},
                createdAt: {
                  type: 'timestamp'
                },
                updatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetUser: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/users/{userId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'userId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userAliases: {
                  shape: 'S7c'
                }
              }
            }
          },
          GetWebExperience: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/experiences/{webExperienceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'webExperienceId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                webExperienceId: {
                  location: 'uri',
                  locationName: 'webExperienceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationId: {},
                webExperienceId: {},
                webExperienceArn: {},
                defaultEndpoint: {},
                status: {},
                createdAt: {
                  type: 'timestamp'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                title: {},
                subtitle: {},
                welcomeMessage: {},
                samplePromptsControlMode: {},
                roleArn: {},
                authenticationConfiguration: {
                  shape: 'S7g',
                  deprecated: true,
                  deprecatedMessage: 'Property associated with legacy SAML IdP flow. Deprecated in favor of using AWS IAM Identity Center for user management.'
                },
                error: {
                  shape: 'Sb'
                }
              }
            }
          },
          ListApplications: {
            http: {
              method: 'GET',
              requestUri: '/applications',
              responseCode: 200
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
                nextToken: {},
                applications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      displayName: {},
                      applicationId: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                }
              }
            }
          },
          ListConversations: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/conversations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {
                  location: 'querystring',
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
                nextToken: {},
                conversations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      conversationId: {},
                      title: {},
                      startTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListDataSourceSyncJobs: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/syncjobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceId', 'applicationId', 'indexId'],
              members: {
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
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
                startTime: {
                  location: 'querystring',
                  locationName: 'startTime',
                  type: 'timestamp'
                },
                endTime: {
                  location: 'querystring',
                  locationName: 'endTime',
                  type: 'timestamp'
                },
                statusFilter: {
                  location: 'querystring',
                  locationName: 'syncStatus'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                history: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      executionId: {},
                      startTime: {
                        type: 'timestamp'
                      },
                      endTime: {
                        type: 'timestamp'
                      },
                      status: {},
                      error: {
                        shape: 'Sb'
                      },
                      dataSourceErrorCode: {},
                      metrics: {
                        type: 'structure',
                        members: {
                          documentsAdded: {},
                          documentsModified: {},
                          documentsDeleted: {},
                          documentsFailed: {},
                          documentsScanned: {}
                        }
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
              method: 'GET',
              requestUri: '/applications/{applicationId}/indices/{indexId}/datasources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
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
                dataSources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      displayName: {},
                      dataSourceId: {},
                      type: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDocuments: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/index/{indexId}/documents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                dataSourceIds: {
                  location: 'querystring',
                  locationName: 'dataSourceIds',
                  type: 'list',
                  member: {}
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
                documentDetailList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      documentId: {},
                      status: {},
                      error: {
                        shape: 'Sb'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
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
          ListGroups: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/indices/{indexId}/groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'updatedEarlierThan'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                updatedEarlierThan: {
                  location: 'querystring',
                  locationName: 'updatedEarlierThan',
                  type: 'timestamp'
                },
                dataSourceId: {
                  location: 'querystring',
                  locationName: 'dataSourceId'
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
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      groupName: {}
                    }
                  }
                }
              }
            }
          },
          ListIndices: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/indices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
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
                indices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      displayName: {},
                      indexId: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                }
              }
            }
          },
          ListMessages: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/conversations/{conversationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['conversationId', 'applicationId'],
              members: {
                conversationId: {
                  location: 'uri',
                  locationName: 'conversationId'
                },
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {
                  location: 'querystring',
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
                messages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      messageId: {},
                      body: {},
                      time: {
                        type: 'timestamp'
                      },
                      type: {},
                      attachments: {
                        shape: 'S2t'
                      },
                      sourceAttribution: {
                        shape: 'S2n'
                      },
                      actionReview: {
                        shape: 'S2c'
                      },
                      actionExecution: {
                        shape: 'S1s'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPlugins: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/plugins',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
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
                plugins: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      pluginId: {},
                      displayName: {},
                      type: {},
                      serverUrl: {},
                      state: {},
                      buildStatus: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListRetrievers: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/retrievers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
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
                retrievers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      applicationId: {},
                      retrieverId: {},
                      type: {},
                      status: {},
                      displayName: {}
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
              requestUri: '/v1/tags/{resourceARN}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceARN'],
              members: {
                resourceARN: {
                  location: 'uri',
                  locationName: 'resourceARN'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S32'
                }
              }
            }
          },
          ListWebExperiences: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/experiences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
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
                webExperiences: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      webExperienceId: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      defaultEndpoint: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          PutFeedback: {
            http: {
              requestUri: '/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/feedback',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'conversationId', 'messageId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {
                  location: 'querystring',
                  locationName: 'userId'
                },
                conversationId: {
                  location: 'uri',
                  locationName: 'conversationId'
                },
                messageId: {
                  location: 'uri',
                  locationName: 'messageId'
                },
                messageCopiedAt: {
                  type: 'timestamp'
                },
                messageUsefulness: {
                  type: 'structure',
                  required: ['usefulness', 'submittedAt'],
                  members: {
                    usefulness: {},
                    reason: {},
                    comment: {},
                    submittedAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          PutGroup: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/indices/{indexId}/groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'groupName', 'type', 'groupMembers'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                groupName: {},
                dataSourceId: {},
                type: {},
                groupMembers: {
                  type: 'structure',
                  members: {
                    memberGroups: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['groupName'],
                        members: {
                          groupName: {},
                          type: {}
                        }
                      }
                    },
                    memberUsers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['userId'],
                        members: {
                          userId: {},
                          type: {}
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          StartDataSourceSyncJob: {
            http: {
              requestUri: '/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/startsync',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceId', 'applicationId', 'indexId'],
              members: {
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                executionId: {}
              }
            }
          },
          StopDataSourceSyncJob: {
            http: {
              requestUri: '/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/stopsync',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceId', 'applicationId', 'indexId'],
              members: {
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            http: {
              requestUri: '/v1/tags/{resourceARN}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceARN', 'tags'],
              members: {
                resourceARN: {
                  location: 'uri',
                  locationName: 'resourceARN'
                },
                tags: {
                  shape: 'S32'
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
              requestUri: '/v1/tags/{resourceARN}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceARN', 'tagKeys'],
              members: {
                resourceARN: {
                  location: 'uri',
                  locationName: 'resourceARN'
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
          UpdateApplication: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                identityCenterInstanceArn: {},
                displayName: {},
                description: {},
                roleArn: {},
                attachmentsConfiguration: {
                  shape: 'S36'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateChatControlsConfiguration: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{applicationId}/chatcontrols',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                clientToken: {
                  idempotencyToken: true
                },
                responseScope: {},
                blockedPhrasesConfigurationUpdate: {
                  type: 'structure',
                  members: {
                    blockedPhrasesToCreateOrUpdate: {
                      shape: 'S5z'
                    },
                    blockedPhrasesToDelete: {
                      shape: 'S5z'
                    },
                    systemMessageOverride: {}
                  }
                },
                topicConfigurationsToCreateOrUpdate: {
                  shape: 'S62'
                },
                topicConfigurationsToDelete: {
                  shape: 'S62'
                },
                creatorModeConfiguration: {
                  type: 'structure',
                  required: ['creatorModeControl'],
                  members: {
                    creatorModeControl: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateDataSource: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId', 'dataSourceId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                dataSourceId: {
                  location: 'uri',
                  locationName: 'dataSourceId'
                },
                displayName: {},
                configuration: {
                  shape: 'S3c'
                },
                vpcConfiguration: {
                  shape: 'S3d'
                },
                description: {},
                syncSchedule: {},
                roleArn: {},
                documentEnrichmentConfiguration: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateIndex: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/indices/{indexId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'indexId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                indexId: {
                  location: 'uri',
                  locationName: 'indexId'
                },
                displayName: {},
                description: {},
                capacityConfiguration: {
                  shape: 'S3o'
                },
                documentAttributeConfigurations: {
                  shape: 'S6v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdatePlugin: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/plugins/{pluginId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'pluginId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                pluginId: {
                  location: 'uri',
                  locationName: 'pluginId'
                },
                displayName: {},
                state: {},
                serverUrl: {},
                customPluginConfiguration: {
                  shape: 'S3z'
                },
                authConfiguration: {
                  shape: 'S3u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateRetriever: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/retrievers/{retrieverId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'retrieverId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                retrieverId: {
                  location: 'uri',
                  locationName: 'retrieverId'
                },
                configuration: {
                  shape: 'S4a'
                },
                displayName: {},
                roleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateUser: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/users/{userId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'userId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                userAliasesToUpdate: {
                  shape: 'S7c'
                },
                userAliasesToDelete: {
                  shape: 'S7c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userAliasesAdded: {
                  shape: 'S7c'
                },
                userAliasesUpdated: {
                  shape: 'S7c'
                },
                userAliasesDeleted: {
                  shape: 'S7c'
                }
              }
            },
            idempotent: true
          },
          UpdateWebExperience: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/experiences/{webExperienceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'webExperienceId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                webExperienceId: {
                  location: 'uri',
                  locationName: 'webExperienceId'
                },
                roleArn: {},
                authenticationConfiguration: {
                  shape: 'S7g',
                  deprecated: true,
                  deprecatedMessage: 'Property associated with legacy SAML IdP flow. Deprecated in favor of using AWS IAM Identity Center for user management.'
                },
                title: {},
                subtitle: {},
                welcomeMessage: {},
                samplePromptsControlMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          }
        },
        shapes: {
          S9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                error: {
                  shape: 'Sb'
                },
                dataSourceId: {}
              }
            }
          },
          Sb: {
            type: 'structure',
            members: {
              errorMessage: {},
              errorCode: {}
            }
          },
          Sj: {
            type: 'structure',
            required: ['name', 'value'],
            members: {
              name: {},
              value: {
                shape: 'Sl'
              }
            }
          },
          Sl: {
            type: 'structure',
            members: {
              stringValue: {},
              stringListValue: {
                type: 'list',
                member: {}
              },
              longValue: {
                type: 'long'
              },
              dateValue: {
                type: 'timestamp'
              }
            },
            union: true
          },
          St: {
            type: 'structure',
            required: ['bucket', 'key'],
            members: {
              bucket: {},
              key: {}
            }
          },
          S1a: {
            type: 'structure',
            members: {
              inlineConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    condition: {
                      shape: 'S1d'
                    },
                    target: {
                      type: 'structure',
                      required: ['key'],
                      members: {
                        key: {},
                        value: {
                          shape: 'Sl'
                        },
                        attributeValueOperator: {}
                      }
                    },
                    documentContentOperator: {}
                  }
                }
              },
              preExtractionHookConfiguration: {
                shape: 'S1i'
              },
              postExtractionHookConfiguration: {
                shape: 'S1i'
              }
            }
          },
          S1d: {
            type: 'structure',
            required: ['key', 'operator'],
            members: {
              key: {},
              operator: {},
              value: {
                shape: 'Sl'
              }
            }
          },
          S1i: {
            type: 'structure',
            members: {
              invocationCondition: {
                shape: 'S1d'
              },
              lambdaArn: {},
              s3BucketName: {},
              roleArn: {}
            }
          },
          S1n: {
            type: 'list',
            member: {}
          },
          S1s: {
            type: 'structure',
            required: ['pluginId', 'payload', 'payloadFieldNameSeparator'],
            members: {
              pluginId: {},
              payload: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['value'],
                  members: {
                    value: {
                      shape: 'S1x'
                    }
                  }
                }
              },
              payloadFieldNameSeparator: {}
            }
          },
          S1x: {
            type: 'structure',
            members: {},
            document: true
          },
          S25: {
            type: 'structure',
            members: {
              andAllFilters: {
                shape: 'S26'
              },
              orAllFilters: {
                shape: 'S26'
              },
              notFilter: {
                shape: 'S25'
              },
              equalsTo: {
                shape: 'Sj'
              },
              containsAll: {
                shape: 'Sj'
              },
              containsAny: {
                shape: 'Sj'
              },
              greaterThan: {
                shape: 'Sj'
              },
              greaterThanOrEquals: {
                shape: 'Sj'
              },
              lessThan: {
                shape: 'Sj'
              },
              lessThanOrEquals: {
                shape: 'Sj'
              }
            }
          },
          S26: {
            type: 'list',
            member: {
              shape: 'S25'
            }
          },
          S2c: {
            type: 'structure',
            members: {
              pluginId: {},
              pluginType: {},
              payload: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    displayName: {},
                    displayOrder: {
                      type: 'integer'
                    },
                    displayDescription: {},
                    type: {},
                    value: {
                      shape: 'S1x'
                    },
                    allowedValues: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          value: {
                            shape: 'S1x'
                          },
                          displayValue: {
                            shape: 'S1x'
                          }
                        }
                      }
                    },
                    allowedFormat: {},
                    required: {
                      type: 'boolean'
                    }
                  }
                }
              },
              payloadFieldNameSeparator: {}
            }
          },
          S2n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                title: {},
                snippet: {},
                url: {},
                citationNumber: {
                  type: 'integer'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                textMessageSegments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      beginOffset: {
                        type: 'integer'
                      },
                      endOffset: {
                        type: 'integer'
                      },
                      snippetExcerpt: {
                        type: 'structure',
                        members: {
                          text: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2t: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                status: {},
                error: {
                  shape: 'Sb'
                }
              }
            }
          },
          S30: {
            type: 'structure',
            members: {
              kmsKeyId: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S32: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          S36: {
            type: 'structure',
            required: ['attachmentsControlMode'],
            members: {
              attachmentsControlMode: {}
            }
          },
          S3c: {
            type: 'structure',
            members: {},
            document: true
          },
          S3d: {
            type: 'structure',
            required: ['subnetIds', 'securityGroupIds'],
            members: {
              subnetIds: {
                type: 'list',
                member: {}
              },
              securityGroupIds: {
                type: 'list',
                member: {}
              }
            }
          },
          S3o: {
            type: 'structure',
            members: {
              units: {
                type: 'integer'
              }
            }
          },
          S3u: {
            type: 'structure',
            members: {
              basicAuthConfiguration: {
                type: 'structure',
                required: ['secretArn', 'roleArn'],
                members: {
                  secretArn: {},
                  roleArn: {}
                }
              },
              oAuth2ClientCredentialConfiguration: {
                type: 'structure',
                required: ['secretArn', 'roleArn'],
                members: {
                  secretArn: {},
                  roleArn: {}
                }
              },
              noAuthConfiguration: {
                type: 'structure',
                members: {}
              }
            },
            union: true
          },
          S3z: {
            type: 'structure',
            required: ['description', 'apiSchemaType', 'apiSchema'],
            members: {
              description: {},
              apiSchemaType: {},
              apiSchema: {
                type: 'structure',
                members: {
                  payload: {
                    type: 'string',
                    sensitive: true
                  },
                  s3: {
                    shape: 'St'
                  }
                },
                union: true
              }
            }
          },
          S4a: {
            type: 'structure',
            members: {
              nativeIndexConfiguration: {
                type: 'structure',
                required: ['indexId'],
                members: {
                  indexId: {},
                  boostingOverride: {
                    type: 'map',
                    key: {},
                    value: {
                      type: 'structure',
                      members: {
                        numberConfiguration: {
                          type: 'structure',
                          required: ['boostingLevel'],
                          members: {
                            boostingLevel: {},
                            boostingType: {}
                          }
                        },
                        stringConfiguration: {
                          type: 'structure',
                          required: ['boostingLevel'],
                          members: {
                            boostingLevel: {},
                            attributeValueBoosting: {
                              type: 'map',
                              key: {},
                              value: {}
                            }
                          }
                        },
                        dateConfiguration: {
                          type: 'structure',
                          required: ['boostingLevel'],
                          members: {
                            boostingLevel: {},
                            boostingDurationInSeconds: {
                              type: 'long'
                            }
                          }
                        },
                        stringListConfiguration: {
                          type: 'structure',
                          required: ['boostingLevel'],
                          members: {
                            boostingLevel: {}
                          }
                        }
                      },
                      union: true
                    }
                  }
                }
              },
              kendraIndexConfiguration: {
                type: 'structure',
                required: ['indexId'],
                members: {
                  indexId: {}
                }
              }
            },
            union: true
          },
          S4u: {
            type: 'structure',
            required: ['userId'],
            members: {
              indexId: {},
              dataSourceId: {},
              userId: {}
            }
          },
          S5z: {
            type: 'list',
            member: {}
          },
          S62: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'rules'],
              members: {
                name: {},
                description: {},
                exampleChatMessages: {
                  type: 'list',
                  member: {}
                },
                rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ruleType'],
                    members: {
                      includedUsersAndGroups: {
                        shape: 'S6a'
                      },
                      excludedUsersAndGroups: {
                        shape: 'S6a'
                      },
                      ruleType: {},
                      ruleConfiguration: {
                        type: 'structure',
                        members: {
                          contentBlockerRule: {
                            type: 'structure',
                            members: {
                              systemMessageOverride: {}
                            }
                          },
                          contentRetrievalRule: {
                            type: 'structure',
                            members: {
                              eligibleDataSources: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    indexId: {},
                                    dataSourceId: {}
                                  }
                                }
                              }
                            }
                          }
                        },
                        union: true
                      }
                    }
                  }
                }
              }
            }
          },
          S6a: {
            type: 'structure',
            members: {
              userIds: {
                type: 'list',
                member: {}
              },
              userGroups: {
                shape: 'S1n'
              }
            }
          },
          S6p: {
            type: 'structure',
            members: {
              status: {},
              lastUpdatedAt: {
                type: 'timestamp'
              },
              errorDetail: {
                shape: 'Sb'
              }
            }
          },
          S6v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                type: {},
                search: {}
              }
            }
          },
          S7c: {
            type: 'list',
            member: {
              shape: 'S4u'
            }
          },
          S7g: {
            type: 'structure',
            members: {
              samlConfiguration: {
                type: 'structure',
                required: ['metadataXML', 'roleArn', 'userIdAttribute'],
                members: {
                  metadataXML: {},
                  roleArn: {},
                  userIdAttribute: {},
                  userGroupAttribute: {}
                }
              }
            },
            union: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4dc2a151dc89d9c232232fc96ebad1ea99c83d61.js.map