System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-04-19',
          endpointPrefix: 'models.lex',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Lex Model Building Service',
          serviceId: 'Lex Model Building Service',
          signatureVersion: 'v4',
          signingName: 'lex',
          uid: 'lex-models-2017-04-19'
        },
        operations: {
          CreateBotVersion: {
            http: {
              requestUri: '/bots/{name}/versions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                checksum: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                intents: {
                  shape: 'S6'
                },
                clarificationPrompt: {
                  shape: 'Sa'
                },
                abortStatement: {
                  shape: 'Si'
                },
                status: {},
                failureReason: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                voiceId: {},
                checksum: {},
                version: {},
                locale: {},
                childDirected: {
                  type: 'boolean'
                },
                enableModelImprovements: {
                  type: 'boolean'
                },
                detectSentiment: {
                  type: 'boolean'
                }
              }
            }
          },
          CreateIntentVersion: {
            http: {
              requestUri: '/intents/{name}/versions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                checksum: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                slots: {
                  shape: 'Sq'
                },
                sampleUtterances: {
                  shape: 'S13'
                },
                confirmationPrompt: {
                  shape: 'Sa'
                },
                rejectionStatement: {
                  shape: 'Si'
                },
                followUpPrompt: {
                  shape: 'S14'
                },
                conclusionStatement: {
                  shape: 'Si'
                },
                dialogCodeHook: {
                  shape: 'S15'
                },
                fulfillmentActivity: {
                  shape: 'S18'
                },
                parentIntentSignature: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {},
                checksum: {},
                kendraConfiguration: {
                  shape: 'S1b'
                },
                inputContexts: {
                  shape: 'S1f'
                },
                outputContexts: {
                  shape: 'S1i'
                }
              }
            }
          },
          CreateSlotTypeVersion: {
            http: {
              requestUri: '/slottypes/{name}/versions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                checksum: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                enumerationValues: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {},
                checksum: {},
                valueSelectionStrategy: {},
                parentSlotTypeSignature: {},
                slotTypeConfigurations: {
                  shape: 'S1v'
                }
              }
            }
          },
          DeleteBot: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{name}',
              responseCode: 204
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
            }
          },
          DeleteBotAlias: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botName}/aliases/{name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['name', 'botName'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                }
              }
            }
          },
          DeleteBotChannelAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botName}/aliases/{aliasName}/channels/{name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['name', 'botName', 'botAlias'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                botAlias: {
                  location: 'uri',
                  locationName: 'aliasName'
                }
              }
            }
          },
          DeleteBotVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{name}/versions/{version}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['name', 'version'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                version: {
                  location: 'uri',
                  locationName: 'version'
                }
              }
            }
          },
          DeleteIntent: {
            http: {
              method: 'DELETE',
              requestUri: '/intents/{name}',
              responseCode: 204
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
            }
          },
          DeleteIntentVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/intents/{name}/versions/{version}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['name', 'version'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                version: {
                  location: 'uri',
                  locationName: 'version'
                }
              }
            }
          },
          DeleteSlotType: {
            http: {
              method: 'DELETE',
              requestUri: '/slottypes/{name}',
              responseCode: 204
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
            }
          },
          DeleteSlotTypeVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/slottypes/{name}/version/{version}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['name', 'version'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                version: {
                  location: 'uri',
                  locationName: 'version'
                }
              }
            }
          },
          DeleteUtterances: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botName}/utterances/{userId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['botName', 'userId'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                userId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            }
          },
          GetBot: {
            http: {
              method: 'GET',
              requestUri: '/bots/{name}/versions/{versionoralias}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'versionOrAlias'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                versionOrAlias: {
                  location: 'uri',
                  locationName: 'versionoralias'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                intents: {
                  shape: 'S6'
                },
                enableModelImprovements: {
                  type: 'boolean'
                },
                nluIntentConfidenceThreshold: {
                  type: 'double'
                },
                clarificationPrompt: {
                  shape: 'Sa'
                },
                abortStatement: {
                  shape: 'Si'
                },
                status: {},
                failureReason: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                voiceId: {},
                checksum: {},
                version: {},
                locale: {},
                childDirected: {
                  type: 'boolean'
                },
                detectSentiment: {
                  type: 'boolean'
                }
              }
            }
          },
          GetBotAlias: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botName}/aliases/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'botName'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                botVersion: {},
                botName: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                checksum: {},
                conversationLogs: {
                  shape: 'S2h'
                }
              }
            }
          },
          GetBotAliases: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botName}/aliases/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botName'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botName'
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
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BotAliases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      description: {},
                      botVersion: {},
                      botName: {},
                      lastUpdatedDate: {
                        type: 'timestamp'
                      },
                      createdDate: {
                        type: 'timestamp'
                      },
                      checksum: {},
                      conversationLogs: {
                        shape: 'S2h'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetBotChannelAssociation: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botName}/aliases/{aliasName}/channels/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'botName', 'botAlias'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                botAlias: {
                  location: 'uri',
                  locationName: 'aliasName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                botAlias: {},
                botName: {},
                createdDate: {
                  type: 'timestamp'
                },
                type: {},
                botConfiguration: {
                  shape: 'S2z'
                },
                status: {},
                failureReason: {}
              }
            }
          },
          GetBotChannelAssociations: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botName}/aliases/{aliasName}/channels/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botName', 'botAlias'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                botAlias: {
                  location: 'uri',
                  locationName: 'aliasName'
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
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botChannelAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      description: {},
                      botAlias: {},
                      botName: {},
                      createdDate: {
                        type: 'timestamp'
                      },
                      type: {},
                      botConfiguration: {
                        shape: 'S2z'
                      },
                      status: {},
                      failureReason: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetBotVersions: {
            http: {
              method: 'GET',
              requestUri: '/bots/{name}/versions/',
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
                bots: {
                  shape: 'S38'
                },
                nextToken: {}
              }
            }
          },
          GetBots: {
            http: {
              method: 'GET',
              requestUri: '/bots/',
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
                },
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                bots: {
                  shape: 'S38'
                },
                nextToken: {}
              }
            }
          },
          GetBuiltinIntent: {
            http: {
              method: 'GET',
              requestUri: '/builtins/intents/{signature}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['signature'],
              members: {
                signature: {
                  location: 'uri',
                  locationName: 'signature'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                signature: {},
                supportedLocales: {
                  shape: 'S3e'
                },
                slots: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {}
                    }
                  }
                }
              }
            }
          },
          GetBuiltinIntents: {
            http: {
              method: 'GET',
              requestUri: '/builtins/intents/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                locale: {
                  location: 'querystring',
                  locationName: 'locale'
                },
                signatureContains: {
                  location: 'querystring',
                  locationName: 'signatureContains'
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
                intents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      signature: {},
                      supportedLocales: {
                        shape: 'S3e'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetBuiltinSlotTypes: {
            http: {
              method: 'GET',
              requestUri: '/builtins/slottypes/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                locale: {
                  location: 'querystring',
                  locationName: 'locale'
                },
                signatureContains: {
                  location: 'querystring',
                  locationName: 'signatureContains'
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
                slotTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      signature: {},
                      supportedLocales: {
                        shape: 'S3e'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetExport: {
            http: {
              method: 'GET',
              requestUri: '/exports/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'version', 'resourceType', 'exportType'],
              members: {
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                version: {
                  location: 'querystring',
                  locationName: 'version'
                },
                resourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                exportType: {
                  location: 'querystring',
                  locationName: 'exportType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                version: {},
                resourceType: {},
                exportType: {},
                exportStatus: {},
                failureReason: {},
                url: {}
              }
            }
          },
          GetImport: {
            http: {
              method: 'GET',
              requestUri: '/imports/{importId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['importId'],
              members: {
                importId: {
                  location: 'uri',
                  locationName: 'importId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                resourceType: {},
                mergeStrategy: {},
                importId: {},
                importStatus: {},
                failureReason: {
                  type: 'list',
                  member: {}
                },
                createdDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetIntent: {
            http: {
              method: 'GET',
              requestUri: '/intents/{name}/versions/{version}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'version'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                version: {
                  location: 'uri',
                  locationName: 'version'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                slots: {
                  shape: 'Sq'
                },
                sampleUtterances: {
                  shape: 'S13'
                },
                confirmationPrompt: {
                  shape: 'Sa'
                },
                rejectionStatement: {
                  shape: 'Si'
                },
                followUpPrompt: {
                  shape: 'S14'
                },
                conclusionStatement: {
                  shape: 'Si'
                },
                dialogCodeHook: {
                  shape: 'S15'
                },
                fulfillmentActivity: {
                  shape: 'S18'
                },
                parentIntentSignature: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {},
                checksum: {},
                kendraConfiguration: {
                  shape: 'S1b'
                },
                inputContexts: {
                  shape: 'S1f'
                },
                outputContexts: {
                  shape: 'S1i'
                }
              }
            }
          },
          GetIntentVersions: {
            http: {
              method: 'GET',
              requestUri: '/intents/{name}/versions/',
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
                intents: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          GetIntents: {
            http: {
              method: 'GET',
              requestUri: '/intents/',
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
                },
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                intents: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          GetMigration: {
            http: {
              method: 'GET',
              requestUri: '/migrations/{migrationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['migrationId'],
              members: {
                migrationId: {
                  location: 'uri',
                  locationName: 'migrationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                migrationId: {},
                v1BotName: {},
                v1BotVersion: {},
                v1BotLocale: {},
                v2BotId: {},
                v2BotRole: {},
                migrationStatus: {},
                migrationStrategy: {},
                migrationTimestamp: {
                  type: 'timestamp'
                },
                alerts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      type: {},
                      message: {},
                      details: {
                        type: 'list',
                        member: {}
                      },
                      referenceURLs: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          GetMigrations: {
            http: {
              method: 'GET',
              requestUri: '/migrations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                sortByAttribute: {
                  location: 'querystring',
                  locationName: 'sortByAttribute'
                },
                sortByOrder: {
                  location: 'querystring',
                  locationName: 'sortByOrder'
                },
                v1BotNameContains: {
                  location: 'querystring',
                  locationName: 'v1BotNameContains'
                },
                migrationStatusEquals: {
                  location: 'querystring',
                  locationName: 'migrationStatusEquals'
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
                migrationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      migrationId: {},
                      v1BotName: {},
                      v1BotVersion: {},
                      v1BotLocale: {},
                      v2BotId: {},
                      v2BotRole: {},
                      migrationStatus: {},
                      migrationStrategy: {},
                      migrationTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetSlotType: {
            http: {
              method: 'GET',
              requestUri: '/slottypes/{name}/versions/{version}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'version'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                version: {
                  location: 'uri',
                  locationName: 'version'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                enumerationValues: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {},
                checksum: {},
                valueSelectionStrategy: {},
                parentSlotTypeSignature: {},
                slotTypeConfigurations: {
                  shape: 'S1v'
                }
              }
            }
          },
          GetSlotTypeVersions: {
            http: {
              method: 'GET',
              requestUri: '/slottypes/{name}/versions/',
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
                slotTypes: {
                  shape: 'S4x'
                },
                nextToken: {}
              }
            }
          },
          GetSlotTypes: {
            http: {
              method: 'GET',
              requestUri: '/slottypes/',
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
                },
                nameContains: {
                  location: 'querystring',
                  locationName: 'nameContains'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                slotTypes: {
                  shape: 'S4x'
                },
                nextToken: {}
              }
            }
          },
          GetUtterancesView: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botname}/utterances?view=aggregation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botName', 'botVersions', 'statusType'],
              members: {
                botName: {
                  location: 'uri',
                  locationName: 'botname'
                },
                botVersions: {
                  location: 'querystring',
                  locationName: 'bot_versions',
                  type: 'list',
                  member: {}
                },
                statusType: {
                  location: 'querystring',
                  locationName: 'status_type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botName: {},
                utterances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botVersion: {},
                      utterances: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            utteranceString: {},
                            count: {
                              type: 'integer'
                            },
                            distinctUsers: {
                              type: 'integer'
                            },
                            firstUtteredDate: {
                              type: 'timestamp'
                            },
                            lastUtteredDate: {
                              type: 'timestamp'
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
                  shape: 'S5e'
                }
              }
            }
          },
          PutBot: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{name}/versions/$LATEST',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'locale', 'childDirected'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                description: {},
                intents: {
                  shape: 'S6'
                },
                enableModelImprovements: {
                  type: 'boolean'
                },
                nluIntentConfidenceThreshold: {
                  type: 'double'
                },
                clarificationPrompt: {
                  shape: 'Sa'
                },
                abortStatement: {
                  shape: 'Si'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                voiceId: {},
                checksum: {},
                processBehavior: {},
                locale: {},
                childDirected: {
                  type: 'boolean'
                },
                detectSentiment: {
                  type: 'boolean'
                },
                createVersion: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'S5e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                intents: {
                  shape: 'S6'
                },
                enableModelImprovements: {
                  type: 'boolean'
                },
                nluIntentConfidenceThreshold: {
                  type: 'double'
                },
                clarificationPrompt: {
                  shape: 'Sa'
                },
                abortStatement: {
                  shape: 'Si'
                },
                status: {},
                failureReason: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                voiceId: {},
                checksum: {},
                version: {},
                locale: {},
                childDirected: {
                  type: 'boolean'
                },
                createVersion: {
                  type: 'boolean'
                },
                detectSentiment: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'S5e'
                }
              }
            }
          },
          PutBotAlias: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botName}/aliases/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'botVersion', 'botName'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                description: {},
                botVersion: {},
                botName: {
                  location: 'uri',
                  locationName: 'botName'
                },
                checksum: {},
                conversationLogs: {
                  type: 'structure',
                  required: ['logSettings', 'iamRoleArn'],
                  members: {
                    logSettings: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['logType', 'destination', 'resourceArn'],
                        members: {
                          logType: {},
                          destination: {},
                          kmsKeyArn: {},
                          resourceArn: {}
                        }
                      }
                    },
                    iamRoleArn: {}
                  }
                },
                tags: {
                  shape: 'S5e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                botVersion: {},
                botName: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                checksum: {},
                conversationLogs: {
                  shape: 'S2h'
                },
                tags: {
                  shape: 'S5e'
                }
              }
            }
          },
          PutIntent: {
            http: {
              method: 'PUT',
              requestUri: '/intents/{name}/versions/$LATEST',
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
                description: {},
                slots: {
                  shape: 'Sq'
                },
                sampleUtterances: {
                  shape: 'S13'
                },
                confirmationPrompt: {
                  shape: 'Sa'
                },
                rejectionStatement: {
                  shape: 'Si'
                },
                followUpPrompt: {
                  shape: 'S14'
                },
                conclusionStatement: {
                  shape: 'Si'
                },
                dialogCodeHook: {
                  shape: 'S15'
                },
                fulfillmentActivity: {
                  shape: 'S18'
                },
                parentIntentSignature: {},
                checksum: {},
                createVersion: {
                  type: 'boolean'
                },
                kendraConfiguration: {
                  shape: 'S1b'
                },
                inputContexts: {
                  shape: 'S1f'
                },
                outputContexts: {
                  shape: 'S1i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                slots: {
                  shape: 'Sq'
                },
                sampleUtterances: {
                  shape: 'S13'
                },
                confirmationPrompt: {
                  shape: 'Sa'
                },
                rejectionStatement: {
                  shape: 'Si'
                },
                followUpPrompt: {
                  shape: 'S14'
                },
                conclusionStatement: {
                  shape: 'Si'
                },
                dialogCodeHook: {
                  shape: 'S15'
                },
                fulfillmentActivity: {
                  shape: 'S18'
                },
                parentIntentSignature: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {},
                checksum: {},
                createVersion: {
                  type: 'boolean'
                },
                kendraConfiguration: {
                  shape: 'S1b'
                },
                inputContexts: {
                  shape: 'S1f'
                },
                outputContexts: {
                  shape: 'S1i'
                }
              }
            }
          },
          PutSlotType: {
            http: {
              method: 'PUT',
              requestUri: '/slottypes/{name}/versions/$LATEST',
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
                description: {},
                enumerationValues: {
                  shape: 'S1q'
                },
                checksum: {},
                valueSelectionStrategy: {},
                createVersion: {
                  type: 'boolean'
                },
                parentSlotTypeSignature: {},
                slotTypeConfigurations: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                enumerationValues: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {},
                checksum: {},
                valueSelectionStrategy: {},
                createVersion: {
                  type: 'boolean'
                },
                parentSlotTypeSignature: {},
                slotTypeConfigurations: {
                  shape: 'S1v'
                }
              }
            }
          },
          StartImport: {
            http: {
              requestUri: '/imports/',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['payload', 'resourceType', 'mergeStrategy'],
              members: {
                payload: {
                  type: 'blob'
                },
                resourceType: {},
                mergeStrategy: {},
                tags: {
                  shape: 'S5e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                resourceType: {},
                mergeStrategy: {},
                importId: {},
                importStatus: {},
                tags: {
                  shape: 'S5e'
                },
                createdDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          StartMigration: {
            http: {
              requestUri: '/migrations',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['v1BotName', 'v1BotVersion', 'v2BotName', 'v2BotRole', 'migrationStrategy'],
              members: {
                v1BotName: {},
                v1BotVersion: {},
                v2BotName: {},
                v2BotRole: {},
                migrationStrategy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                v1BotName: {},
                v1BotVersion: {},
                v1BotLocale: {},
                v2BotId: {},
                v2BotRole: {},
                migrationId: {},
                migrationStrategy: {},
                migrationTimestamp: {
                  type: 'timestamp'
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
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S5e'
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
              responseCode: 204
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
            }
          }
        },
        shapes: {
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['intentName', 'intentVersion'],
              members: {
                intentName: {},
                intentVersion: {}
              }
            }
          },
          Sa: {
            type: 'structure',
            required: ['messages', 'maxAttempts'],
            members: {
              messages: {
                shape: 'Sb'
              },
              maxAttempts: {
                type: 'integer'
              },
              responseCard: {}
            }
          },
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['contentType', 'content'],
              members: {
                contentType: {},
                content: {},
                groupNumber: {
                  type: 'integer'
                }
              }
            }
          },
          Si: {
            type: 'structure',
            required: ['messages'],
            members: {
              messages: {
                shape: 'Sb'
              },
              responseCard: {}
            }
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'slotConstraint'],
              members: {
                name: {},
                description: {},
                slotConstraint: {},
                slotType: {},
                slotTypeVersion: {},
                valueElicitationPrompt: {
                  shape: 'Sa'
                },
                priority: {
                  type: 'integer'
                },
                sampleUtterances: {
                  type: 'list',
                  member: {}
                },
                responseCard: {},
                obfuscationSetting: {},
                defaultValueSpec: {
                  type: 'structure',
                  required: ['defaultValueList'],
                  members: {
                    defaultValueList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['defaultValue'],
                        members: {
                          defaultValue: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S13: {
            type: 'list',
            member: {}
          },
          S14: {
            type: 'structure',
            required: ['prompt', 'rejectionStatement'],
            members: {
              prompt: {
                shape: 'Sa'
              },
              rejectionStatement: {
                shape: 'Si'
              }
            }
          },
          S15: {
            type: 'structure',
            required: ['uri', 'messageVersion'],
            members: {
              uri: {},
              messageVersion: {}
            }
          },
          S18: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              codeHook: {
                shape: 'S15'
              }
            }
          },
          S1b: {
            type: 'structure',
            required: ['kendraIndex', 'role'],
            members: {
              kendraIndex: {},
              queryFilterString: {},
              role: {}
            }
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          S1i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'timeToLiveInSeconds', 'turnsToLive'],
              members: {
                name: {},
                timeToLiveInSeconds: {
                  type: 'integer'
                },
                turnsToLive: {
                  type: 'integer'
                }
              }
            }
          },
          S1q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['value'],
              members: {
                value: {},
                synonyms: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                regexConfiguration: {
                  type: 'structure',
                  required: ['pattern'],
                  members: {
                    pattern: {}
                  }
                }
              }
            }
          },
          S2h: {
            type: 'structure',
            members: {
              logSettings: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    logType: {},
                    destination: {},
                    kmsKeyArn: {},
                    resourceArn: {},
                    resourcePrefix: {}
                  }
                }
              },
              iamRoleArn: {}
            }
          },
          S2z: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S38: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                status: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {}
              }
            }
          },
          S3e: {
            type: 'list',
            member: {}
          },
          S45: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {}
              }
            }
          },
          S4x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                lastUpdatedDate: {
                  type: 'timestamp'
                },
                createdDate: {
                  type: 'timestamp'
                },
                version: {}
              }
            }
          },
          S5e: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3aea260d312d8158c35324fd938c78667d85ad12.js.map