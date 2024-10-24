System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-08-07',
          endpointPrefix: 'models-v2-lex',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Lex Models V2',
          serviceFullName: 'Amazon Lex Model Building V2',
          serviceId: 'Lex Models V2',
          signatureVersion: 'v4',
          signingName: 'lex',
          uid: 'models.lex.v2-2020-08-07'
        },
        operations: {
          BatchCreateCustomVocabularyItem: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'customVocabularyItemList'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                customVocabularyItemList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['phrase'],
                    members: {
                      phrase: {},
                      weight: {
                        type: 'integer'
                      },
                      displayAs: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                errors: {
                  shape: 'Sa'
                },
                resources: {
                  shape: 'Sf'
                }
              }
            }
          },
          BatchDeleteCustomVocabularyItem: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'customVocabularyItemList'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                customVocabularyItemList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['itemId'],
                    members: {
                      itemId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                errors: {
                  shape: 'Sa'
                },
                resources: {
                  shape: 'Sf'
                }
              }
            }
          },
          BatchUpdateCustomVocabularyItem: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'customVocabularyItemList'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                customVocabularyItemList: {
                  type: 'list',
                  member: {
                    shape: 'Sg'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                errors: {
                  shape: 'Sa'
                },
                resources: {
                  shape: 'Sf'
                }
              }
            }
          },
          BuildBotLocale: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                botLocaleStatus: {},
                lastBuildSubmittedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateBot: {
            http: {
              method: 'PUT',
              requestUri: '/bots/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botName', 'roleArn', 'dataPrivacy', 'idleSessionTTLInSeconds'],
              members: {
                botName: {},
                description: {},
                roleArn: {},
                dataPrivacy: {
                  shape: 'Sx'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                botTags: {
                  shape: 'S10'
                },
                testBotAliasTags: {
                  shape: 'S10'
                },
                botType: {},
                botMembers: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botName: {},
                description: {},
                roleArn: {},
                dataPrivacy: {
                  shape: 'Sx'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                botStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                botTags: {
                  shape: 'S10'
                },
                testBotAliasTags: {
                  shape: 'S10'
                },
                botType: {},
                botMembers: {
                  shape: 'S14'
                }
              }
            }
          },
          CreateBotAlias: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botaliases/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botAliasName', 'botId'],
              members: {
                botAliasName: {},
                description: {},
                botVersion: {},
                botAliasLocaleSettings: {
                  shape: 'S1c'
                },
                conversationLogSettings: {
                  shape: 'S1j'
                },
                sentimentAnalysisSettings: {
                  shape: 'S1x'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botAliasId: {},
                botAliasName: {},
                description: {},
                botVersion: {},
                botAliasLocaleSettings: {
                  shape: 'S1c'
                },
                conversationLogSettings: {
                  shape: 'S1j'
                },
                sentimentAnalysisSettings: {
                  shape: 'S1x'
                },
                botAliasStatus: {},
                botId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S10'
                }
              }
            }
          },
          CreateBotLocale: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'nluIntentConfidenceThreshold'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {},
                description: {},
                nluIntentConfidenceThreshold: {
                  type: 'double'
                },
                voiceSettings: {
                  shape: 'S22'
                },
                generativeAISettings: {
                  shape: 'S25'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeName: {},
                localeId: {},
                description: {},
                nluIntentConfidenceThreshold: {
                  type: 'double'
                },
                voiceSettings: {
                  shape: 'S22'
                },
                botLocaleStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                generativeAISettings: {
                  shape: 'S25'
                }
              }
            }
          },
          CreateBotReplica: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/replicas/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'replicaRegion'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                replicaRegion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                replicaRegion: {},
                sourceRegion: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                botReplicaStatus: {}
              }
            }
          },
          CreateBotVersion: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersionLocaleSpecification'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                description: {},
                botVersionLocaleSpecification: {
                  shape: 'S2l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                description: {},
                botVersion: {},
                botVersionLocaleSpecification: {
                  shape: 'S2l'
                },
                botStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateExport: {
            http: {
              method: 'PUT',
              requestUri: '/exports/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['resourceSpecification', 'fileFormat'],
              members: {
                resourceSpecification: {
                  shape: 'S2p'
                },
                fileFormat: {},
                filePassword: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                exportId: {},
                resourceSpecification: {
                  shape: 'S2p'
                },
                fileFormat: {},
                exportStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateIntent: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['intentName', 'botId', 'botVersion', 'localeId'],
              members: {
                intentName: {},
                description: {},
                parentIntentSignature: {},
                sampleUtterances: {
                  shape: 'S30'
                },
                dialogCodeHook: {
                  shape: 'S33'
                },
                fulfillmentCodeHook: {
                  shape: 'S34'
                },
                intentConfirmationSetting: {
                  shape: 'S4c'
                },
                intentClosingSetting: {
                  shape: 'S4u'
                },
                inputContexts: {
                  shape: 'S4v'
                },
                outputContexts: {
                  shape: 'S4x'
                },
                kendraConfiguration: {
                  shape: 'S51'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                initialResponseSetting: {
                  shape: 'S54'
                },
                qnAIntentConfiguration: {
                  shape: 'S55'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                intentId: {},
                intentName: {},
                description: {},
                parentIntentSignature: {},
                sampleUtterances: {
                  shape: 'S30'
                },
                dialogCodeHook: {
                  shape: 'S33'
                },
                fulfillmentCodeHook: {
                  shape: 'S34'
                },
                intentConfirmationSetting: {
                  shape: 'S4c'
                },
                intentClosingSetting: {
                  shape: 'S4u'
                },
                inputContexts: {
                  shape: 'S4v'
                },
                outputContexts: {
                  shape: 'S4x'
                },
                kendraConfiguration: {
                  shape: 'S51'
                },
                botId: {},
                botVersion: {},
                localeId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                initialResponseSetting: {
                  shape: 'S54'
                },
                qnAIntentConfiguration: {
                  shape: 'S55'
                }
              }
            }
          },
          CreateResourcePolicy: {
            http: {
              requestUri: '/policy/{resourceArn}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'policy'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceArn: {},
                revisionId: {}
              }
            }
          },
          CreateResourcePolicyStatement: {
            http: {
              requestUri: '/policy/{resourceArn}/statements/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'statementId', 'effect', 'principal', 'action'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                statementId: {},
                effect: {},
                principal: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      service: {},
                      arn: {}
                    }
                  }
                },
                action: {
                  type: 'list',
                  member: {}
                },
                condition: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                },
                expectedRevisionId: {
                  location: 'querystring',
                  locationName: 'expectedRevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceArn: {},
                revisionId: {}
              }
            }
          },
          CreateSlot: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['slotName', 'valueElicitationSetting', 'botId', 'botVersion', 'localeId', 'intentId'],
              members: {
                slotName: {},
                description: {},
                slotTypeId: {},
                valueElicitationSetting: {
                  shape: 'S64'
                },
                obfuscationSetting: {
                  shape: 'S6h'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                intentId: {
                  location: 'uri',
                  locationName: 'intentId'
                },
                multipleValuesSetting: {
                  shape: 'S6j'
                },
                subSlotSetting: {
                  shape: 'S6k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                slotId: {},
                slotName: {},
                description: {},
                slotTypeId: {},
                valueElicitationSetting: {
                  shape: 'S64'
                },
                obfuscationSetting: {
                  shape: 'S6h'
                },
                botId: {},
                botVersion: {},
                localeId: {},
                intentId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                multipleValuesSetting: {
                  shape: 'S6j'
                },
                subSlotSetting: {
                  shape: 'S6k'
                }
              }
            }
          },
          CreateSlotType: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['slotTypeName', 'botId', 'botVersion', 'localeId'],
              members: {
                slotTypeName: {},
                description: {},
                slotTypeValues: {
                  shape: 'S6r'
                },
                valueSelectionSetting: {
                  shape: 'S6w'
                },
                parentSlotTypeSignature: {},
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                externalSourceSetting: {
                  shape: 'S73'
                },
                compositeSlotTypeSetting: {
                  shape: 'S78'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                slotTypeId: {},
                slotTypeName: {},
                description: {},
                slotTypeValues: {
                  shape: 'S6r'
                },
                valueSelectionSetting: {
                  shape: 'S6w'
                },
                parentSlotTypeSignature: {},
                botId: {},
                botVersion: {},
                localeId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                externalSourceSetting: {
                  shape: 'S73'
                },
                compositeSlotTypeSetting: {
                  shape: 'S78'
                }
              }
            }
          },
          CreateTestSetDiscrepancyReport: {
            http: {
              requestUri: '/testsets/{testSetId}/testsetdiscrepancy',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['testSetId', 'target'],
              members: {
                testSetId: {
                  location: 'uri',
                  locationName: 'testSetId'
                },
                target: {
                  shape: 'S7d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testSetDiscrepancyReportId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                testSetId: {},
                target: {
                  shape: 'S7d'
                }
              }
            }
          },
          CreateUploadUrl: {
            http: {
              requestUri: '/createuploadurl/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                importId: {},
                uploadUrl: {}
              }
            }
          },
          DeleteBot: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
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
              members: {
                botId: {},
                botStatus: {}
              }
            }
          },
          DeleteBotAlias: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/botaliases/{botAliasId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botAliasId', 'botId'],
              members: {
                botAliasId: {
                  location: 'uri',
                  locationName: 'botAliasId'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
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
              members: {
                botAliasId: {},
                botId: {},
                botAliasStatus: {}
              }
            }
          },
          DeleteBotLocale: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                botLocaleStatus: {}
              }
            }
          },
          DeleteBotReplica: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/replicas/{replicaRegion}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'replicaRegion'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                replicaRegion: {
                  location: 'uri',
                  locationName: 'replicaRegion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                replicaRegion: {},
                botReplicaStatus: {}
              }
            }
          },
          DeleteBotVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/botversions/{botVersion}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
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
              members: {
                botId: {},
                botVersion: {},
                botStatus: {}
              }
            }
          },
          DeleteCustomVocabulary: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                customVocabularyStatus: {}
              }
            }
          },
          DeleteExport: {
            http: {
              method: 'DELETE',
              requestUri: '/exports/{exportId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['exportId'],
              members: {
                exportId: {
                  location: 'uri',
                  locationName: 'exportId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                exportId: {},
                exportStatus: {}
              }
            }
          },
          DeleteImport: {
            http: {
              method: 'DELETE',
              requestUri: '/imports/{importId}/',
              responseCode: 202
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
                importId: {},
                importStatus: {}
              }
            }
          },
          DeleteIntent: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['intentId', 'botId', 'botVersion', 'localeId'],
              members: {
                intentId: {
                  location: 'uri',
                  locationName: 'intentId'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            }
          },
          DeleteResourcePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/policy/{resourceArn}/',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                expectedRevisionId: {
                  location: 'querystring',
                  locationName: 'expectedRevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceArn: {},
                revisionId: {}
              }
            }
          },
          DeleteResourcePolicyStatement: {
            http: {
              method: 'DELETE',
              requestUri: '/policy/{resourceArn}/statements/{statementId}/',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'statementId'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                statementId: {
                  location: 'uri',
                  locationName: 'statementId'
                },
                expectedRevisionId: {
                  location: 'querystring',
                  locationName: 'expectedRevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceArn: {},
                revisionId: {}
              }
            }
          },
          DeleteSlot: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['slotId', 'botId', 'botVersion', 'localeId', 'intentId'],
              members: {
                slotId: {
                  location: 'uri',
                  locationName: 'slotId'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                intentId: {
                  location: 'uri',
                  locationName: 'intentId'
                }
              }
            }
          },
          DeleteSlotType: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['slotTypeId', 'botId', 'botVersion', 'localeId'],
              members: {
                slotTypeId: {
                  location: 'uri',
                  locationName: 'slotTypeId'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                skipResourceInUseCheck: {
                  location: 'querystring',
                  locationName: 'skipResourceInUseCheck',
                  type: 'boolean'
                }
              }
            }
          },
          DeleteTestSet: {
            http: {
              method: 'DELETE',
              requestUri: '/testsets/{testSetId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['testSetId'],
              members: {
                testSetId: {
                  location: 'uri',
                  locationName: 'testSetId'
                }
              }
            },
            idempotent: true
          },
          DeleteUtterances: {
            http: {
              method: 'DELETE',
              requestUri: '/bots/{botId}/utterances/',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['botId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                localeId: {
                  location: 'querystring',
                  locationName: 'localeId'
                },
                sessionId: {
                  location: 'querystring',
                  locationName: 'sessionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeBot: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botName: {},
                description: {},
                roleArn: {},
                dataPrivacy: {
                  shape: 'Sx'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                botStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                botType: {},
                botMembers: {
                  shape: 'S14'
                },
                failureReasons: {
                  shape: 'S8f'
                }
              }
            }
          },
          DescribeBotAlias: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botaliases/{botAliasId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botAliasId', 'botId'],
              members: {
                botAliasId: {
                  location: 'uri',
                  locationName: 'botAliasId'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botAliasId: {},
                botAliasName: {},
                description: {},
                botVersion: {},
                botAliasLocaleSettings: {
                  shape: 'S1c'
                },
                conversationLogSettings: {
                  shape: 'S1j'
                },
                sentimentAnalysisSettings: {
                  shape: 'S1x'
                },
                botAliasHistoryEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botVersion: {},
                      startDate: {
                        type: 'timestamp'
                      },
                      endDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                botAliasStatus: {},
                botId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                parentBotNetworks: {
                  shape: 'S8l'
                }
              }
            }
          },
          DescribeBotLocale: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                localeName: {},
                description: {},
                nluIntentConfidenceThreshold: {
                  type: 'double'
                },
                voiceSettings: {
                  shape: 'S22'
                },
                intentsCount: {
                  type: 'integer'
                },
                slotTypesCount: {
                  type: 'integer'
                },
                botLocaleStatus: {},
                failureReasons: {
                  shape: 'S8f'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                lastBuildSubmittedDateTime: {
                  type: 'timestamp'
                },
                botLocaleHistoryEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['event', 'eventDate'],
                    members: {
                      event: {},
                      eventDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                recommendedActions: {
                  shape: 'S8t'
                },
                generativeAISettings: {
                  shape: 'S25'
                }
              }
            }
          },
          DescribeBotRecommendation: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'botRecommendationId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                botRecommendationId: {
                  location: 'uri',
                  locationName: 'botRecommendationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                botRecommendationStatus: {},
                botRecommendationId: {},
                failureReasons: {
                  shape: 'S8f'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                transcriptSourceSetting: {
                  shape: 'S8y'
                },
                encryptionSetting: {
                  shape: 'S97'
                },
                botRecommendationResults: {
                  type: 'structure',
                  members: {
                    botLocaleExportUrl: {},
                    associatedTranscriptsUrl: {},
                    statistics: {
                      type: 'structure',
                      members: {
                        intents: {
                          type: 'structure',
                          members: {
                            discoveredIntentCount: {
                              type: 'integer'
                            }
                          }
                        },
                        slotTypes: {
                          type: 'structure',
                          members: {
                            discoveredSlotTypeCount: {
                              type: 'integer'
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
          DescribeBotReplica: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/replicas/{replicaRegion}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'replicaRegion'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                replicaRegion: {
                  location: 'uri',
                  locationName: 'replicaRegion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                replicaRegion: {},
                sourceRegion: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                botReplicaStatus: {},
                failureReasons: {
                  shape: 'S8f'
                }
              }
            }
          },
          DescribeBotResourceGeneration: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'generationId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                generationId: {
                  location: 'uri',
                  locationName: 'generationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                generationId: {},
                failureReasons: {
                  shape: 'S8f'
                },
                generationStatus: {},
                generationInputPrompt: {},
                generatedBotLocaleUrl: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                modelArn: {},
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeBotVersion: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botversions/{botVersion}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botName: {},
                botVersion: {},
                description: {},
                roleArn: {},
                dataPrivacy: {
                  shape: 'Sx'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                botStatus: {},
                failureReasons: {
                  shape: 'S8f'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                parentBotNetworks: {
                  shape: 'S8l'
                },
                botType: {},
                botMembers: {
                  shape: 'S14'
                }
              }
            }
          },
          DescribeCustomVocabularyMetadata: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                customVocabularyStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeExport: {
            http: {
              method: 'GET',
              requestUri: '/exports/{exportId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['exportId'],
              members: {
                exportId: {
                  location: 'uri',
                  locationName: 'exportId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                exportId: {},
                resourceSpecification: {
                  shape: 'S2p'
                },
                fileFormat: {},
                exportStatus: {},
                failureReasons: {
                  shape: 'S8f'
                },
                downloadUrl: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeImport: {
            http: {
              method: 'GET',
              requestUri: '/imports/{importId}/',
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
                importId: {},
                resourceSpecification: {
                  shape: 'S9s'
                },
                importedResourceId: {},
                importedResourceName: {},
                mergeStrategy: {},
                importStatus: {},
                failureReasons: {
                  shape: 'S8f'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeIntent: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['intentId', 'botId', 'botVersion', 'localeId'],
              members: {
                intentId: {
                  location: 'uri',
                  locationName: 'intentId'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                intentId: {},
                intentName: {},
                description: {},
                parentIntentSignature: {},
                sampleUtterances: {
                  shape: 'S30'
                },
                dialogCodeHook: {
                  shape: 'S33'
                },
                fulfillmentCodeHook: {
                  shape: 'S34'
                },
                slotPriorities: {
                  shape: 'Sa4'
                },
                intentConfirmationSetting: {
                  shape: 'S4c'
                },
                intentClosingSetting: {
                  shape: 'S4u'
                },
                inputContexts: {
                  shape: 'S4v'
                },
                outputContexts: {
                  shape: 'S4x'
                },
                kendraConfiguration: {
                  shape: 'S51'
                },
                botId: {},
                botVersion: {},
                localeId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                initialResponseSetting: {
                  shape: 'S54'
                },
                qnAIntentConfiguration: {
                  shape: 'S55'
                }
              }
            }
          },
          DescribeResourcePolicy: {
            http: {
              method: 'GET',
              requestUri: '/policy/{resourceArn}/',
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
                resourceArn: {},
                policy: {},
                revisionId: {}
              }
            }
          },
          DescribeSlot: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['slotId', 'botId', 'botVersion', 'localeId', 'intentId'],
              members: {
                slotId: {
                  location: 'uri',
                  locationName: 'slotId'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                intentId: {
                  location: 'uri',
                  locationName: 'intentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                slotId: {},
                slotName: {},
                description: {},
                slotTypeId: {},
                valueElicitationSetting: {
                  shape: 'S64'
                },
                obfuscationSetting: {
                  shape: 'S6h'
                },
                botId: {},
                botVersion: {},
                localeId: {},
                intentId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                multipleValuesSetting: {
                  shape: 'S6j'
                },
                subSlotSetting: {
                  shape: 'S6k'
                }
              }
            }
          },
          DescribeSlotType: {
            http: {
              method: 'GET',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['slotTypeId', 'botId', 'botVersion', 'localeId'],
              members: {
                slotTypeId: {
                  location: 'uri',
                  locationName: 'slotTypeId'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                slotTypeId: {},
                slotTypeName: {},
                description: {},
                slotTypeValues: {
                  shape: 'S6r'
                },
                valueSelectionSetting: {
                  shape: 'S6w'
                },
                parentSlotTypeSignature: {},
                botId: {},
                botVersion: {},
                localeId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                externalSourceSetting: {
                  shape: 'S73'
                },
                compositeSlotTypeSetting: {
                  shape: 'S78'
                }
              }
            }
          },
          DescribeTestExecution: {
            http: {
              method: 'GET',
              requestUri: '/testexecutions/{testExecutionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['testExecutionId'],
              members: {
                testExecutionId: {
                  location: 'uri',
                  locationName: 'testExecutionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testExecutionId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                testExecutionStatus: {},
                testSetId: {},
                testSetName: {},
                target: {
                  shape: 'Sag'
                },
                apiMode: {},
                testExecutionModality: {},
                failureReasons: {
                  shape: 'S8f'
                }
              }
            }
          },
          DescribeTestSet: {
            http: {
              method: 'GET',
              requestUri: '/testsets/{testSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['testSetId'],
              members: {
                testSetId: {
                  location: 'uri',
                  locationName: 'testSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testSetId: {},
                testSetName: {},
                description: {},
                modality: {},
                status: {},
                roleArn: {},
                numTurns: {
                  type: 'integer'
                },
                storageLocation: {
                  shape: 'S9x'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeTestSetDiscrepancyReport: {
            http: {
              method: 'GET',
              requestUri: '/testsetdiscrepancy/{testSetDiscrepancyReportId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['testSetDiscrepancyReportId'],
              members: {
                testSetDiscrepancyReportId: {
                  location: 'uri',
                  locationName: 'testSetDiscrepancyReportId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testSetDiscrepancyReportId: {},
                testSetId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                target: {
                  shape: 'S7d'
                },
                testSetDiscrepancyReportStatus: {},
                lastUpdatedDataTime: {
                  type: 'timestamp'
                },
                testSetDiscrepancyTopErrors: {
                  type: 'structure',
                  required: ['intentDiscrepancies', 'slotDiscrepancies'],
                  members: {
                    intentDiscrepancies: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['intentName', 'errorMessage'],
                        members: {
                          intentName: {},
                          errorMessage: {}
                        }
                      }
                    },
                    slotDiscrepancies: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['intentName', 'slotName', 'errorMessage'],
                        members: {
                          intentName: {},
                          slotName: {},
                          errorMessage: {}
                        }
                      }
                    }
                  }
                },
                testSetDiscrepancyRawOutputUrl: {},
                failureReasons: {
                  shape: 'S8f'
                }
              }
            }
          },
          DescribeTestSetGeneration: {
            http: {
              method: 'GET',
              requestUri: '/testsetgenerations/{testSetGenerationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['testSetGenerationId'],
              members: {
                testSetGenerationId: {
                  location: 'uri',
                  locationName: 'testSetGenerationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testSetGenerationId: {},
                testSetGenerationStatus: {},
                failureReasons: {
                  shape: 'S8f'
                },
                testSetId: {},
                testSetName: {},
                description: {},
                storageLocation: {
                  shape: 'S9x'
                },
                generationDataSource: {
                  shape: 'Say'
                },
                roleArn: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GenerateBotElement: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['intentId', 'botId', 'botVersion', 'localeId'],
              members: {
                intentId: {},
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                intentId: {},
                sampleUtterances: {
                  shape: 'S30'
                }
              }
            }
          },
          GetTestExecutionArtifactsUrl: {
            http: {
              method: 'GET',
              requestUri: '/testexecutions/{testExecutionId}/artifacturl',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['testExecutionId'],
              members: {
                testExecutionId: {
                  location: 'uri',
                  locationName: 'testExecutionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testExecutionId: {},
                downloadArtifactsUrl: {}
              }
            }
          },
          ListAggregatedUtterances: {
            http: {
              requestUri: '/bots/{botId}/aggregatedutterances/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'localeId', 'aggregationDuration'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botAliasId: {},
                botVersion: {},
                localeId: {},
                aggregationDuration: {
                  shape: 'Sb7'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values', 'operator'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      },
                      operator: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botAliasId: {},
                botVersion: {},
                localeId: {},
                aggregationDuration: {
                  shape: 'Sb7'
                },
                aggregationWindowStartTime: {
                  type: 'timestamp'
                },
                aggregationWindowEndTime: {
                  type: 'timestamp'
                },
                aggregationLastRefreshedDateTime: {
                  type: 'timestamp'
                },
                aggregatedUtterancesSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      utterance: {},
                      hitCount: {
                        type: 'integer'
                      },
                      missedCount: {
                        type: 'integer'
                      },
                      utteranceFirstRecordedInAggregationDuration: {
                        type: 'timestamp'
                      },
                      utteranceLastRecordedInAggregationDuration: {
                        type: 'timestamp'
                      },
                      containsDataFromDeletedResources: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBotAliasReplicas: {
            http: {
              requestUri: '/bots/{botId}/replicas/{replicaRegion}/botaliases/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'replicaRegion'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                replicaRegion: {
                  location: 'uri',
                  locationName: 'replicaRegion'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                sourceRegion: {},
                replicaRegion: {},
                botAliasReplicaSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botAliasId: {},
                      botAliasReplicationStatus: {},
                      botVersion: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      failureReasons: {
                        shape: 'S8f'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBotAliases: {
            http: {
              requestUri: '/bots/{botId}/botaliases/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botAliasSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botAliasId: {},
                      botAliasName: {},
                      description: {},
                      botVersion: {},
                      botAliasStatus: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {},
                botId: {}
              }
            }
          },
          ListBotLocales: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values', 'operator'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      },
                      operator: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                nextToken: {},
                botLocaleSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      localeId: {},
                      localeName: {},
                      description: {},
                      botLocaleStatus: {},
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      lastBuildSubmittedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListBotRecommendations: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                botRecommendationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['botRecommendationStatus', 'botRecommendationId'],
                    members: {
                      botRecommendationStatus: {},
                      botRecommendationId: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBotReplicas: {
            http: {
              requestUri: '/bots/{botId}/replicas/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                sourceRegion: {},
                botReplicaSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      replicaRegion: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      botReplicaStatus: {},
                      failureReasons: {
                        shape: 'S8f'
                      }
                    }
                  }
                }
              }
            }
          },
          ListBotResourceGenerations: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                generationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      generationId: {},
                      generationStatus: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBotVersionReplicas: {
            http: {
              requestUri: '/bots/{botId}/replicas/{replicaRegion}/botversions/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'replicaRegion'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                replicaRegion: {
                  location: 'uri',
                  locationName: 'replicaRegion'
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
              members: {
                botId: {},
                sourceRegion: {},
                replicaRegion: {},
                botVersionReplicaSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botVersion: {},
                      botVersionReplicationStatus: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      failureReasons: {
                        shape: 'S8f'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBotVersions: {
            http: {
              requestUri: '/bots/{botId}/botversions/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botName: {},
                      botVersion: {},
                      description: {},
                      botStatus: {},
                      creationDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBots: {
            http: {
              requestUri: '/bots/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values', 'operator'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      },
                      operator: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botId: {},
                      botName: {},
                      description: {},
                      botStatus: {},
                      latestBotVersion: {},
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      botType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBuiltInIntents: {
            http: {
              requestUri: '/builtins/locales/{localeId}/intents/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['localeId'],
              members: {
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                builtInIntentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      intentSignature: {},
                      description: {}
                    }
                  }
                },
                nextToken: {},
                localeId: {}
              }
            }
          },
          ListBuiltInSlotTypes: {
            http: {
              requestUri: '/builtins/locales/{localeId}/slottypes/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['localeId'],
              members: {
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                builtInSlotTypeSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      slotTypeSignature: {},
                      description: {}
                    }
                  }
                },
                nextToken: {},
                localeId: {}
              }
            }
          },
          ListCustomVocabularyItems: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                customVocabularyItems: {
                  shape: 'Sf'
                },
                nextToken: {}
              }
            }
          },
          ListExports: {
            http: {
              requestUri: '/exports/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values', 'operator'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      },
                      operator: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                localeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                exportSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      exportId: {},
                      resourceSpecification: {
                        shape: 'S2p'
                      },
                      fileFormat: {},
                      exportStatus: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {},
                localeId: {}
              }
            }
          },
          ListImports: {
            http: {
              requestUri: '/imports/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values', 'operator'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      },
                      operator: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                localeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                importSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      importId: {},
                      importedResourceId: {},
                      importedResourceName: {},
                      importStatus: {},
                      mergeStrategy: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      importedResourceType: {}
                    }
                  }
                },
                nextToken: {},
                localeId: {}
              }
            }
          },
          ListIntentMetrics: {
            http: {
              requestUri: '/bots/{botId}/analytics/intentmetrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'startDateTime', 'endDateTime', 'metrics'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                startDateTime: {
                  type: 'timestamp'
                },
                endDateTime: {
                  type: 'timestamp'
                },
                metrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'statistic'],
                    members: {
                      name: {},
                      statistic: {},
                      order: {}
                    }
                  }
                },
                binBy: {
                  shape: 'Seh'
                },
                groupBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {}
                    }
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'operator', 'values'],
                    members: {
                      name: {},
                      operator: {},
                      values: {
                        shape: 'Ses'
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      binKeys: {
                        shape: 'Sex'
                      },
                      groupByKeys: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            value: {}
                          }
                        }
                      },
                      metricsResults: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            statistic: {},
                            value: {
                              type: 'double'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListIntentPaths: {
            http: {
              requestUri: '/bots/{botId}/analytics/intentpaths',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'startDateTime', 'endDateTime', 'intentPath'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                startDateTime: {
                  type: 'timestamp'
                },
                endDateTime: {
                  type: 'timestamp'
                },
                intentPath: {},
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'operator', 'values'],
                    members: {
                      name: {},
                      operator: {},
                      values: {
                        shape: 'Ses'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nodeSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      intentName: {},
                      intentPath: {},
                      intentCount: {
                        type: 'integer'
                      },
                      intentLevel: {
                        type: 'integer'
                      },
                      nodeType: {}
                    }
                  }
                }
              }
            }
          },
          ListIntentStageMetrics: {
            http: {
              requestUri: '/bots/{botId}/analytics/intentstagemetrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'startDateTime', 'endDateTime', 'metrics'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                startDateTime: {
                  type: 'timestamp'
                },
                endDateTime: {
                  type: 'timestamp'
                },
                metrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'statistic'],
                    members: {
                      name: {},
                      statistic: {},
                      order: {}
                    }
                  }
                },
                binBy: {
                  shape: 'Seh'
                },
                groupBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {}
                    }
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'operator', 'values'],
                    members: {
                      name: {},
                      operator: {},
                      values: {
                        shape: 'Ses'
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      binKeys: {
                        shape: 'Sex'
                      },
                      groupByKeys: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            value: {}
                          }
                        }
                      },
                      metricsResults: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            statistic: {},
                            value: {
                              type: 'double'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListIntents: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values', 'operator'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      },
                      operator: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                intentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      intentId: {},
                      intentName: {},
                      description: {},
                      parentIntentSignature: {},
                      inputContexts: {
                        shape: 'S4v'
                      },
                      outputContexts: {
                        shape: 'S4x'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRecommendedIntents: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'botRecommendationId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                botRecommendationId: {
                  location: 'uri',
                  locationName: 'botRecommendationId'
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
                botId: {},
                botVersion: {},
                localeId: {},
                botRecommendationId: {},
                summaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      intentId: {},
                      intentName: {},
                      sampleUtterancesCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSessionAnalyticsData: {
            http: {
              requestUri: '/bots/{botId}/analytics/sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'startDateTime', 'endDateTime'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                startDateTime: {
                  type: 'timestamp'
                },
                endDateTime: {
                  type: 'timestamp'
                },
                sortBy: {
                  type: 'structure',
                  required: ['name', 'order'],
                  members: {
                    name: {},
                    order: {}
                  }
                },
                filters: {
                  shape: 'Sgg'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                nextToken: {},
                sessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botAliasId: {},
                      botVersion: {},
                      localeId: {},
                      channel: {},
                      sessionId: {},
                      conversationStartTime: {
                        type: 'timestamp'
                      },
                      conversationEndTime: {
                        type: 'timestamp'
                      },
                      conversationDurationSeconds: {
                        type: 'long'
                      },
                      conversationEndState: {},
                      mode: {},
                      numberOfTurns: {
                        type: 'long'
                      },
                      invokedIntentSamples: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            intentName: {}
                          }
                        }
                      },
                      originatingRequestId: {}
                    }
                  }
                }
              }
            }
          },
          ListSessionMetrics: {
            http: {
              requestUri: '/bots/{botId}/analytics/sessionmetrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'startDateTime', 'endDateTime', 'metrics'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                startDateTime: {
                  type: 'timestamp'
                },
                endDateTime: {
                  type: 'timestamp'
                },
                metrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'statistic'],
                    members: {
                      name: {},
                      statistic: {},
                      order: {}
                    }
                  }
                },
                binBy: {
                  shape: 'Seh'
                },
                groupBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {}
                    }
                  }
                },
                filters: {
                  shape: 'Sgg'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      binKeys: {
                        shape: 'Sex'
                      },
                      groupByKeys: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            value: {}
                          }
                        }
                      },
                      metricsResults: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            statistic: {},
                            value: {
                              type: 'double'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSlotTypes: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values', 'operator'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      },
                      operator: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                slotTypeSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      slotTypeId: {},
                      slotTypeName: {},
                      description: {},
                      parentSlotTypeSignature: {},
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      slotTypeCategory: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSlots: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'intentId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                intentId: {
                  location: 'uri',
                  locationName: 'intentId'
                },
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values', 'operator'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      },
                      operator: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                intentId: {},
                slotSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      slotId: {},
                      slotName: {},
                      description: {},
                      slotConstraint: {},
                      slotTypeId: {},
                      valueElicitationPromptSpecification: {
                        shape: 'S4d'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
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
              requestUri: '/tags/{resourceARN}',
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
                  shape: 'S10'
                }
              }
            }
          },
          ListTestExecutionResultItems: {
            http: {
              requestUri: '/testexecutions/{testExecutionId}/results',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['testExecutionId', 'resultFilterBy'],
              members: {
                testExecutionId: {
                  location: 'uri',
                  locationName: 'testExecutionId'
                },
                resultFilterBy: {
                  type: 'structure',
                  required: ['resultTypeFilter'],
                  members: {
                    resultTypeFilter: {},
                    conversationLevelTestResultsFilterBy: {
                      type: 'structure',
                      members: {
                        endToEndResult: {}
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testExecutionResults: {
                  type: 'structure',
                  members: {
                    overallTestResults: {
                      type: 'structure',
                      required: ['items'],
                      members: {
                        items: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['multiTurnConversation', 'totalResultCount', 'endToEndResultCounts'],
                            members: {
                              multiTurnConversation: {
                                type: 'boolean'
                              },
                              totalResultCount: {
                                type: 'integer'
                              },
                              speechTranscriptionResultCounts: {
                                shape: 'Si5'
                              },
                              endToEndResultCounts: {
                                shape: 'Si5'
                              }
                            }
                          }
                        }
                      }
                    },
                    conversationLevelTestResults: {
                      type: 'structure',
                      required: ['items'],
                      members: {
                        items: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['conversationId', 'endToEndResult', 'intentClassificationResults', 'slotResolutionResults'],
                            members: {
                              conversationId: {},
                              endToEndResult: {},
                              speechTranscriptionResult: {},
                              intentClassificationResults: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['intentName', 'matchResult'],
                                  members: {
                                    intentName: {},
                                    matchResult: {}
                                  }
                                }
                              },
                              slotResolutionResults: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['intentName', 'slotName', 'matchResult'],
                                  members: {
                                    intentName: {},
                                    slotName: {},
                                    matchResult: {}
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    intentClassificationTestResults: {
                      type: 'structure',
                      required: ['items'],
                      members: {
                        items: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['intentName', 'multiTurnConversation', 'resultCounts'],
                            members: {
                              intentName: {},
                              multiTurnConversation: {
                                type: 'boolean'
                              },
                              resultCounts: {
                                type: 'structure',
                                required: ['totalResultCount', 'intentMatchResultCounts'],
                                members: {
                                  totalResultCount: {
                                    type: 'integer'
                                  },
                                  speechTranscriptionResultCounts: {
                                    shape: 'Si5'
                                  },
                                  intentMatchResultCounts: {
                                    shape: 'Si5'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    intentLevelSlotResolutionTestResults: {
                      type: 'structure',
                      required: ['items'],
                      members: {
                        items: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['intentName', 'multiTurnConversation', 'slotResolutionResults'],
                            members: {
                              intentName: {},
                              multiTurnConversation: {
                                type: 'boolean'
                              },
                              slotResolutionResults: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['slotName', 'resultCounts'],
                                  members: {
                                    slotName: {},
                                    resultCounts: {
                                      type: 'structure',
                                      required: ['totalResultCount', 'slotMatchResultCounts'],
                                      members: {
                                        totalResultCount: {
                                          type: 'integer'
                                        },
                                        speechTranscriptionResultCounts: {
                                          shape: 'Si5'
                                        },
                                        slotMatchResultCounts: {
                                          shape: 'Si5'
                                        }
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
                    utteranceLevelTestResults: {
                      type: 'structure',
                      required: ['items'],
                      members: {
                        items: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['recordNumber', 'turnResult'],
                            members: {
                              recordNumber: {
                                type: 'long'
                              },
                              conversationId: {},
                              turnResult: {
                                type: 'structure',
                                members: {
                                  agent: {
                                    type: 'structure',
                                    required: ['expectedAgentPrompt'],
                                    members: {
                                      expectedAgentPrompt: {},
                                      actualAgentPrompt: {},
                                      errorDetails: {
                                        shape: 'Siw'
                                      },
                                      actualElicitedSlot: {},
                                      actualIntent: {}
                                    }
                                  },
                                  user: {
                                    type: 'structure',
                                    required: ['input', 'expectedOutput'],
                                    members: {
                                      input: {
                                        shape: 'Siy'
                                      },
                                      expectedOutput: {
                                        shape: 'Sje'
                                      },
                                      actualOutput: {
                                        shape: 'Sje'
                                      },
                                      errorDetails: {
                                        shape: 'Siw'
                                      },
                                      endToEndResult: {},
                                      intentMatchResult: {},
                                      slotMatchResult: {},
                                      speechTranscriptionResult: {},
                                      conversationLevelResult: {
                                        type: 'structure',
                                        required: ['endToEndResult'],
                                        members: {
                                          endToEndResult: {},
                                          speechTranscriptionResult: {}
                                        }
                                      }
                                    }
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
                nextToken: {}
              }
            }
          },
          ListTestExecutions: {
            http: {
              requestUri: '/testexecutions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      testExecutionId: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      testExecutionStatus: {},
                      testSetId: {},
                      testSetName: {},
                      target: {
                        shape: 'Sag'
                      },
                      apiMode: {},
                      testExecutionModality: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTestSetRecords: {
            http: {
              requestUri: '/testsets/{testSetId}/records',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['testSetId'],
              members: {
                testSetId: {
                  location: 'uri',
                  locationName: 'testSetId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testSetRecords: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['recordNumber', 'turnSpecification'],
                    members: {
                      recordNumber: {
                        type: 'long'
                      },
                      conversationId: {},
                      turnNumber: {
                        type: 'integer'
                      },
                      turnSpecification: {
                        type: 'structure',
                        members: {
                          agentTurn: {
                            type: 'structure',
                            required: ['agentPrompt'],
                            members: {
                              agentPrompt: {}
                            }
                          },
                          userTurn: {
                            type: 'structure',
                            required: ['input', 'expected'],
                            members: {
                              input: {
                                shape: 'Siy'
                              },
                              expected: {
                                shape: 'Sje'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTestSets: {
            http: {
              requestUri: '/testsets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                sortBy: {
                  type: 'structure',
                  required: ['attribute', 'order'],
                  members: {
                    attribute: {},
                    order: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      testSetId: {},
                      testSetName: {},
                      description: {},
                      modality: {},
                      status: {},
                      roleArn: {},
                      numTurns: {
                        type: 'integer'
                      },
                      storageLocation: {
                        shape: 'S9x'
                      },
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListUtteranceAnalyticsData: {
            http: {
              requestUri: '/bots/{botId}/analytics/utterances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'startDateTime', 'endDateTime'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                startDateTime: {
                  type: 'timestamp'
                },
                endDateTime: {
                  type: 'timestamp'
                },
                sortBy: {
                  type: 'structure',
                  required: ['name', 'order'],
                  members: {
                    name: {},
                    order: {}
                  }
                },
                filters: {
                  shape: 'Sk7'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                nextToken: {},
                utterances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      botAliasId: {},
                      botVersion: {},
                      localeId: {},
                      sessionId: {},
                      channel: {},
                      mode: {},
                      conversationStartTime: {
                        type: 'timestamp'
                      },
                      conversationEndTime: {
                        type: 'timestamp'
                      },
                      utterance: {},
                      utteranceTimestamp: {
                        type: 'timestamp'
                      },
                      audioVoiceDurationMillis: {
                        type: 'long'
                      },
                      utteranceUnderstood: {
                        type: 'boolean'
                      },
                      inputType: {},
                      outputType: {},
                      associatedIntentName: {},
                      associatedSlotName: {},
                      intentState: {},
                      dialogActionType: {},
                      botResponseAudioVoiceId: {},
                      slotsFilledInSession: {},
                      utteranceRequestId: {},
                      botResponses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            content: {},
                            contentType: {},
                            imageResponseCard: {
                              shape: 'S3g'
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
          ListUtteranceMetrics: {
            http: {
              requestUri: '/bots/{botId}/analytics/utterancemetrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'startDateTime', 'endDateTime', 'metrics'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                startDateTime: {
                  type: 'timestamp'
                },
                endDateTime: {
                  type: 'timestamp'
                },
                metrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'statistic'],
                    members: {
                      name: {},
                      statistic: {},
                      order: {}
                    }
                  }
                },
                binBy: {
                  shape: 'Seh'
                },
                groupBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {}
                    }
                  }
                },
                attributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {}
                    }
                  }
                },
                filters: {
                  shape: 'Sk7'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      binKeys: {
                        shape: 'Sex'
                      },
                      groupByKeys: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            value: {}
                          }
                        }
                      },
                      metricsResults: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            statistic: {},
                            value: {
                              type: 'double'
                            }
                          }
                        }
                      },
                      attributeResults: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            lastUsedIntent: {}
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          SearchAssociatedTranscripts: {
            http: {
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'botRecommendationId', 'filters'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                botRecommendationId: {
                  location: 'uri',
                  locationName: 'botRecommendationId'
                },
                searchOrder: {},
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values'],
                    members: {
                      name: {},
                      values: {
                        shape: 'Sbh'
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextIndex: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                botRecommendationId: {},
                nextIndex: {
                  type: 'integer'
                },
                associatedTranscripts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      transcript: {}
                    }
                  }
                },
                totalResults: {
                  type: 'integer'
                }
              }
            }
          },
          StartBotRecommendation: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'transcriptSourceSetting'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                transcriptSourceSetting: {
                  shape: 'S8y'
                },
                encryptionSetting: {
                  shape: 'S97'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                botRecommendationStatus: {},
                botRecommendationId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                transcriptSourceSetting: {
                  shape: 'S8y'
                },
                encryptionSetting: {
                  shape: 'S97'
                }
              }
            }
          },
          StartBotResourceGeneration: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['generationInputPrompt', 'botId', 'botVersion', 'localeId'],
              members: {
                generationInputPrompt: {},
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                generationInputPrompt: {},
                generationId: {},
                botId: {},
                botVersion: {},
                localeId: {},
                generationStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          StartImport: {
            http: {
              method: 'PUT',
              requestUri: '/imports/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['importId', 'resourceSpecification', 'mergeStrategy'],
              members: {
                importId: {},
                resourceSpecification: {
                  shape: 'S9s'
                },
                mergeStrategy: {},
                filePassword: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                importId: {},
                resourceSpecification: {
                  shape: 'S9s'
                },
                mergeStrategy: {},
                importStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          StartTestExecution: {
            http: {
              requestUri: '/testsets/{testSetId}/testexecutions',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['testSetId', 'target', 'apiMode'],
              members: {
                testSetId: {
                  location: 'uri',
                  locationName: 'testSetId'
                },
                target: {
                  shape: 'Sag'
                },
                apiMode: {},
                testExecutionModality: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testExecutionId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                testSetId: {},
                target: {
                  shape: 'Sag'
                },
                apiMode: {},
                testExecutionModality: {}
              }
            }
          },
          StartTestSetGeneration: {
            http: {
              method: 'PUT',
              requestUri: '/testsetgenerations',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['testSetName', 'storageLocation', 'generationDataSource', 'roleArn'],
              members: {
                testSetName: {},
                description: {},
                storageLocation: {
                  shape: 'S9x'
                },
                generationDataSource: {
                  shape: 'Say'
                },
                roleArn: {},
                testSetTags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testSetGenerationId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                testSetGenerationStatus: {},
                testSetName: {},
                description: {},
                storageLocation: {
                  shape: 'S9x'
                },
                generationDataSource: {
                  shape: 'Say'
                },
                roleArn: {},
                testSetTags: {
                  shape: 'S10'
                }
              }
            },
            idempotent: true
          },
          StopBotRecommendation: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'botRecommendationId'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                botRecommendationId: {
                  location: 'uri',
                  locationName: 'botRecommendationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                botRecommendationStatus: {},
                botRecommendationId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceARN}',
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
              requestUri: '/tags/{resourceARN}',
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
            }
          },
          UpdateBot: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botName', 'roleArn', 'dataPrivacy', 'idleSessionTTLInSeconds'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botName: {},
                description: {},
                roleArn: {},
                dataPrivacy: {
                  shape: 'Sx'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                botType: {},
                botMembers: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botName: {},
                description: {},
                roleArn: {},
                dataPrivacy: {
                  shape: 'Sx'
                },
                idleSessionTTLInSeconds: {
                  type: 'integer'
                },
                botStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                botType: {},
                botMembers: {
                  shape: 'S14'
                }
              }
            }
          },
          UpdateBotAlias: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botaliases/{botAliasId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botAliasId', 'botAliasName', 'botId'],
              members: {
                botAliasId: {
                  location: 'uri',
                  locationName: 'botAliasId'
                },
                botAliasName: {},
                description: {},
                botVersion: {},
                botAliasLocaleSettings: {
                  shape: 'S1c'
                },
                conversationLogSettings: {
                  shape: 'S1j'
                },
                sentimentAnalysisSettings: {
                  shape: 'S1x'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botAliasId: {},
                botAliasName: {},
                description: {},
                botVersion: {},
                botAliasLocaleSettings: {
                  shape: 'S1c'
                },
                conversationLogSettings: {
                  shape: 'S1j'
                },
                sentimentAnalysisSettings: {
                  shape: 'S1x'
                },
                botAliasStatus: {},
                botId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdateBotLocale: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'nluIntentConfidenceThreshold'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                description: {},
                nluIntentConfidenceThreshold: {
                  type: 'double'
                },
                voiceSettings: {
                  shape: 'S22'
                },
                generativeAISettings: {
                  shape: 'S25'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                localeName: {},
                description: {},
                nluIntentConfidenceThreshold: {
                  type: 'double'
                },
                voiceSettings: {
                  shape: 'S22'
                },
                botLocaleStatus: {},
                failureReasons: {
                  shape: 'S8f'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                recommendedActions: {
                  shape: 'S8t'
                },
                generativeAISettings: {
                  shape: 'S25'
                }
              }
            }
          },
          UpdateBotRecommendation: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['botId', 'botVersion', 'localeId', 'botRecommendationId', 'encryptionSetting'],
              members: {
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                botRecommendationId: {
                  location: 'uri',
                  locationName: 'botRecommendationId'
                },
                encryptionSetting: {
                  shape: 'S97'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                botId: {},
                botVersion: {},
                localeId: {},
                botRecommendationStatus: {},
                botRecommendationId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                transcriptSourceSetting: {
                  shape: 'S8y'
                },
                encryptionSetting: {
                  shape: 'S97'
                }
              }
            }
          },
          UpdateExport: {
            http: {
              method: 'PUT',
              requestUri: '/exports/{exportId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['exportId'],
              members: {
                exportId: {
                  location: 'uri',
                  locationName: 'exportId'
                },
                filePassword: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                exportId: {},
                resourceSpecification: {
                  shape: 'S2p'
                },
                fileFormat: {},
                exportStatus: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdateIntent: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['intentId', 'intentName', 'botId', 'botVersion', 'localeId'],
              members: {
                intentId: {
                  location: 'uri',
                  locationName: 'intentId'
                },
                intentName: {},
                description: {},
                parentIntentSignature: {},
                sampleUtterances: {
                  shape: 'S30'
                },
                dialogCodeHook: {
                  shape: 'S33'
                },
                fulfillmentCodeHook: {
                  shape: 'S34'
                },
                slotPriorities: {
                  shape: 'Sa4'
                },
                intentConfirmationSetting: {
                  shape: 'S4c'
                },
                intentClosingSetting: {
                  shape: 'S4u'
                },
                inputContexts: {
                  shape: 'S4v'
                },
                outputContexts: {
                  shape: 'S4x'
                },
                kendraConfiguration: {
                  shape: 'S51'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                initialResponseSetting: {
                  shape: 'S54'
                },
                qnAIntentConfiguration: {
                  shape: 'S55'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                intentId: {},
                intentName: {},
                description: {},
                parentIntentSignature: {},
                sampleUtterances: {
                  shape: 'S30'
                },
                dialogCodeHook: {
                  shape: 'S33'
                },
                fulfillmentCodeHook: {
                  shape: 'S34'
                },
                slotPriorities: {
                  shape: 'Sa4'
                },
                intentConfirmationSetting: {
                  shape: 'S4c'
                },
                intentClosingSetting: {
                  shape: 'S4u'
                },
                inputContexts: {
                  shape: 'S4v'
                },
                outputContexts: {
                  shape: 'S4x'
                },
                kendraConfiguration: {
                  shape: 'S51'
                },
                botId: {},
                botVersion: {},
                localeId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                initialResponseSetting: {
                  shape: 'S54'
                },
                qnAIntentConfiguration: {
                  shape: 'S55'
                }
              }
            }
          },
          UpdateResourcePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/policy/{resourceArn}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'policy'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                policy: {},
                expectedRevisionId: {
                  location: 'querystring',
                  locationName: 'expectedRevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceArn: {},
                revisionId: {}
              }
            }
          },
          UpdateSlot: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['slotId', 'slotName', 'valueElicitationSetting', 'botId', 'botVersion', 'localeId', 'intentId'],
              members: {
                slotId: {
                  location: 'uri',
                  locationName: 'slotId'
                },
                slotName: {},
                description: {},
                slotTypeId: {},
                valueElicitationSetting: {
                  shape: 'S64'
                },
                obfuscationSetting: {
                  shape: 'S6h'
                },
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                intentId: {
                  location: 'uri',
                  locationName: 'intentId'
                },
                multipleValuesSetting: {
                  shape: 'S6j'
                },
                subSlotSetting: {
                  shape: 'S6k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                slotId: {},
                slotName: {},
                description: {},
                slotTypeId: {},
                valueElicitationSetting: {
                  shape: 'S64'
                },
                obfuscationSetting: {
                  shape: 'S6h'
                },
                botId: {},
                botVersion: {},
                localeId: {},
                intentId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                multipleValuesSetting: {
                  shape: 'S6j'
                },
                subSlotSetting: {
                  shape: 'S6k'
                }
              }
            }
          },
          UpdateSlotType: {
            http: {
              method: 'PUT',
              requestUri: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['slotTypeId', 'slotTypeName', 'botId', 'botVersion', 'localeId'],
              members: {
                slotTypeId: {
                  location: 'uri',
                  locationName: 'slotTypeId'
                },
                slotTypeName: {},
                description: {},
                slotTypeValues: {
                  shape: 'S6r'
                },
                valueSelectionSetting: {
                  shape: 'S6w'
                },
                parentSlotTypeSignature: {},
                botId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                botVersion: {
                  location: 'uri',
                  locationName: 'botVersion'
                },
                localeId: {
                  location: 'uri',
                  locationName: 'localeId'
                },
                externalSourceSetting: {
                  shape: 'S73'
                },
                compositeSlotTypeSetting: {
                  shape: 'S78'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                slotTypeId: {},
                slotTypeName: {},
                description: {},
                slotTypeValues: {
                  shape: 'S6r'
                },
                valueSelectionSetting: {
                  shape: 'S6w'
                },
                parentSlotTypeSignature: {},
                botId: {},
                botVersion: {},
                localeId: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                },
                externalSourceSetting: {
                  shape: 'S73'
                },
                compositeSlotTypeSetting: {
                  shape: 'S78'
                }
              }
            }
          },
          UpdateTestSet: {
            http: {
              method: 'PUT',
              requestUri: '/testsets/{testSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['testSetId', 'testSetName'],
              members: {
                testSetId: {
                  location: 'uri',
                  locationName: 'testSetId'
                },
                testSetName: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testSetId: {},
                testSetName: {},
                description: {},
                modality: {},
                status: {},
                roleArn: {},
                numTurns: {
                  type: 'integer'
                },
                storageLocation: {
                  shape: 'S9x'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                lastUpdatedDateTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                itemId: {},
                errorMessage: {},
                errorCode: {}
              }
            }
          },
          Sf: {
            type: 'list',
            member: {
              shape: 'Sg'
            }
          },
          Sg: {
            type: 'structure',
            required: ['itemId', 'phrase'],
            members: {
              itemId: {},
              phrase: {},
              weight: {
                type: 'integer'
              },
              displayAs: {}
            }
          },
          Sx: {
            type: 'structure',
            required: ['childDirected'],
            members: {
              childDirected: {
                type: 'boolean'
              }
            }
          },
          S10: {
            type: 'map',
            key: {},
            value: {}
          },
          S14: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['botMemberId', 'botMemberName', 'botMemberAliasId', 'botMemberAliasName', 'botMemberVersion'],
              members: {
                botMemberId: {},
                botMemberName: {},
                botMemberAliasId: {},
                botMemberAliasName: {},
                botMemberVersion: {}
              }
            }
          },
          S1c: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['enabled'],
              members: {
                enabled: {
                  type: 'boolean'
                },
                codeHookSpecification: {
                  type: 'structure',
                  required: ['lambdaCodeHook'],
                  members: {
                    lambdaCodeHook: {
                      type: 'structure',
                      required: ['lambdaARN', 'codeHookInterfaceVersion'],
                      members: {
                        lambdaARN: {},
                        codeHookInterfaceVersion: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              textLogSettings: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['enabled', 'destination'],
                  members: {
                    enabled: {
                      type: 'boolean'
                    },
                    destination: {
                      type: 'structure',
                      required: ['cloudWatch'],
                      members: {
                        cloudWatch: {
                          type: 'structure',
                          required: ['cloudWatchLogGroupArn', 'logPrefix'],
                          members: {
                            cloudWatchLogGroupArn: {},
                            logPrefix: {}
                          }
                        }
                      }
                    },
                    selectiveLoggingEnabled: {
                      type: 'boolean'
                    }
                  }
                }
              },
              audioLogSettings: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['enabled', 'destination'],
                  members: {
                    enabled: {
                      type: 'boolean'
                    },
                    destination: {
                      type: 'structure',
                      required: ['s3Bucket'],
                      members: {
                        s3Bucket: {
                          type: 'structure',
                          required: ['s3BucketArn', 'logPrefix'],
                          members: {
                            kmsKeyArn: {},
                            s3BucketArn: {},
                            logPrefix: {}
                          }
                        }
                      }
                    },
                    selectiveLoggingEnabled: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S1x: {
            type: 'structure',
            required: ['detectSentiment'],
            members: {
              detectSentiment: {
                type: 'boolean'
              }
            }
          },
          S22: {
            type: 'structure',
            required: ['voiceId'],
            members: {
              voiceId: {},
              engine: {}
            }
          },
          S25: {
            type: 'structure',
            members: {
              runtimeSettings: {
                type: 'structure',
                members: {
                  slotResolutionImprovement: {
                    type: 'structure',
                    required: ['enabled'],
                    members: {
                      enabled: {
                        type: 'boolean'
                      },
                      bedrockModelSpecification: {
                        shape: 'S29'
                      }
                    }
                  }
                }
              },
              buildtimeSettings: {
                type: 'structure',
                members: {
                  descriptiveBotBuilder: {
                    type: 'structure',
                    required: ['enabled'],
                    members: {
                      enabled: {
                        type: 'boolean'
                      },
                      bedrockModelSpecification: {
                        shape: 'S29'
                      }
                    }
                  },
                  sampleUtteranceGeneration: {
                    type: 'structure',
                    required: ['enabled'],
                    members: {
                      enabled: {
                        type: 'boolean'
                      },
                      bedrockModelSpecification: {
                        shape: 'S29'
                      }
                    }
                  }
                }
              }
            }
          },
          S29: {
            type: 'structure',
            required: ['modelArn'],
            members: {
              modelArn: {}
            }
          },
          S2l: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['sourceBotVersion'],
              members: {
                sourceBotVersion: {}
              }
            }
          },
          S2p: {
            type: 'structure',
            members: {
              botExportSpecification: {
                type: 'structure',
                required: ['botId', 'botVersion'],
                members: {
                  botId: {},
                  botVersion: {}
                }
              },
              botLocaleExportSpecification: {
                type: 'structure',
                required: ['botId', 'botVersion', 'localeId'],
                members: {
                  botId: {},
                  botVersion: {},
                  localeId: {}
                }
              },
              customVocabularyExportSpecification: {
                type: 'structure',
                required: ['botId', 'botVersion', 'localeId'],
                members: {
                  botId: {},
                  botVersion: {},
                  localeId: {}
                }
              },
              testSetExportSpecification: {
                type: 'structure',
                required: ['testSetId'],
                members: {
                  testSetId: {}
                }
              }
            }
          },
          S2v: {
            type: 'string',
            sensitive: true
          },
          S30: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['utterance'],
              members: {
                utterance: {}
              }
            }
          },
          S33: {
            type: 'structure',
            required: ['enabled'],
            members: {
              enabled: {
                type: 'boolean'
              }
            }
          },
          S34: {
            type: 'structure',
            required: ['enabled'],
            members: {
              enabled: {
                type: 'boolean'
              },
              postFulfillmentStatusSpecification: {
                type: 'structure',
                members: {
                  successResponse: {
                    shape: 'S36'
                  },
                  failureResponse: {
                    shape: 'S36'
                  },
                  timeoutResponse: {
                    shape: 'S36'
                  },
                  successNextStep: {
                    shape: 'S3o'
                  },
                  successConditional: {
                    shape: 'S40'
                  },
                  failureNextStep: {
                    shape: 'S3o'
                  },
                  failureConditional: {
                    shape: 'S40'
                  },
                  timeoutNextStep: {
                    shape: 'S3o'
                  },
                  timeoutConditional: {
                    shape: 'S40'
                  }
                }
              },
              fulfillmentUpdatesSpecification: {
                type: 'structure',
                required: ['active'],
                members: {
                  active: {
                    type: 'boolean'
                  },
                  startResponse: {
                    type: 'structure',
                    required: ['delayInSeconds', 'messageGroups'],
                    members: {
                      delayInSeconds: {
                        type: 'integer'
                      },
                      messageGroups: {
                        shape: 'S37'
                      },
                      allowInterrupt: {
                        type: 'boolean'
                      }
                    }
                  },
                  updateResponse: {
                    type: 'structure',
                    required: ['frequencyInSeconds', 'messageGroups'],
                    members: {
                      frequencyInSeconds: {
                        type: 'integer'
                      },
                      messageGroups: {
                        shape: 'S37'
                      },
                      allowInterrupt: {
                        type: 'boolean'
                      }
                    }
                  },
                  timeoutInSeconds: {
                    type: 'integer'
                  }
                }
              },
              active: {
                type: 'boolean'
              }
            }
          },
          S36: {
            type: 'structure',
            required: ['messageGroups'],
            members: {
              messageGroups: {
                shape: 'S37'
              },
              allowInterrupt: {
                type: 'boolean'
              }
            }
          },
          S37: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['message'],
              members: {
                message: {
                  shape: 'S39'
                },
                variations: {
                  type: 'list',
                  member: {
                    shape: 'S39'
                  }
                }
              }
            }
          },
          S39: {
            type: 'structure',
            members: {
              plainTextMessage: {
                type: 'structure',
                required: ['value'],
                members: {
                  value: {}
                }
              },
              customPayload: {
                type: 'structure',
                required: ['value'],
                members: {
                  value: {}
                }
              },
              ssmlMessage: {
                type: 'structure',
                required: ['value'],
                members: {
                  value: {}
                }
              },
              imageResponseCard: {
                shape: 'S3g'
              }
            }
          },
          S3g: {
            type: 'structure',
            required: ['title'],
            members: {
              title: {},
              subtitle: {},
              imageUrl: {},
              buttons: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['text', 'value'],
                  members: {
                    text: {},
                    value: {}
                  }
                }
              }
            }
          },
          S3o: {
            type: 'structure',
            members: {
              dialogAction: {
                type: 'structure',
                required: ['type'],
                members: {
                  type: {},
                  slotToElicit: {},
                  suppressNextMessage: {
                    type: 'boolean'
                  }
                }
              },
              intent: {
                type: 'structure',
                members: {
                  name: {},
                  slots: {
                    type: 'map',
                    key: {},
                    value: {
                      shape: 'S3t'
                    }
                  }
                }
              },
              sessionAttributes: {
                shape: 'S3y'
              }
            }
          },
          S3t: {
            type: 'structure',
            members: {
              shape: {},
              value: {
                type: 'structure',
                members: {
                  interpretedValue: {}
                }
              },
              values: {
                type: 'list',
                member: {
                  shape: 'S3t'
                }
              }
            }
          },
          S3y: {
            type: 'map',
            key: {},
            value: {}
          },
          S40: {
            type: 'structure',
            required: ['active', 'conditionalBranches', 'defaultBranch'],
            members: {
              active: {
                type: 'boolean'
              },
              conditionalBranches: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'condition', 'nextStep'],
                  members: {
                    name: {},
                    condition: {
                      type: 'structure',
                      required: ['expressionString'],
                      members: {
                        expressionString: {}
                      }
                    },
                    nextStep: {
                      shape: 'S3o'
                    },
                    response: {
                      shape: 'S36'
                    }
                  }
                }
              },
              defaultBranch: {
                type: 'structure',
                members: {
                  nextStep: {
                    shape: 'S3o'
                  },
                  response: {
                    shape: 'S36'
                  }
                }
              }
            }
          },
          S4c: {
            type: 'structure',
            required: ['promptSpecification'],
            members: {
              promptSpecification: {
                shape: 'S4d'
              },
              declinationResponse: {
                shape: 'S36'
              },
              active: {
                type: 'boolean'
              },
              confirmationResponse: {
                shape: 'S36'
              },
              confirmationNextStep: {
                shape: 'S3o'
              },
              confirmationConditional: {
                shape: 'S40'
              },
              declinationNextStep: {
                shape: 'S3o'
              },
              declinationConditional: {
                shape: 'S40'
              },
              failureResponse: {
                shape: 'S36'
              },
              failureNextStep: {
                shape: 'S3o'
              },
              failureConditional: {
                shape: 'S40'
              },
              codeHook: {
                shape: 'S4r'
              },
              elicitationCodeHook: {
                shape: 'S4t'
              }
            }
          },
          S4d: {
            type: 'structure',
            required: ['messageGroups', 'maxRetries'],
            members: {
              messageGroups: {
                shape: 'S37'
              },
              maxRetries: {
                type: 'integer'
              },
              allowInterrupt: {
                type: 'boolean'
              },
              messageSelectionStrategy: {},
              promptAttemptsSpecification: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['allowedInputTypes'],
                  members: {
                    allowInterrupt: {
                      type: 'boolean'
                    },
                    allowedInputTypes: {
                      type: 'structure',
                      required: ['allowAudioInput', 'allowDTMFInput'],
                      members: {
                        allowAudioInput: {
                          type: 'boolean'
                        },
                        allowDTMFInput: {
                          type: 'boolean'
                        }
                      }
                    },
                    audioAndDTMFInputSpecification: {
                      type: 'structure',
                      required: ['startTimeoutMs'],
                      members: {
                        startTimeoutMs: {
                          type: 'integer'
                        },
                        audioSpecification: {
                          type: 'structure',
                          required: ['maxLengthMs', 'endTimeoutMs'],
                          members: {
                            maxLengthMs: {
                              type: 'integer'
                            },
                            endTimeoutMs: {
                              type: 'integer'
                            }
                          }
                        },
                        dtmfSpecification: {
                          type: 'structure',
                          required: ['maxLength', 'endTimeoutMs', 'deletionCharacter', 'endCharacter'],
                          members: {
                            maxLength: {
                              type: 'integer'
                            },
                            endTimeoutMs: {
                              type: 'integer'
                            },
                            deletionCharacter: {},
                            endCharacter: {}
                          }
                        }
                      }
                    },
                    textInputSpecification: {
                      type: 'structure',
                      required: ['startTimeoutMs'],
                      members: {
                        startTimeoutMs: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S4r: {
            type: 'structure',
            required: ['enableCodeHookInvocation', 'active', 'postCodeHookSpecification'],
            members: {
              enableCodeHookInvocation: {
                type: 'boolean'
              },
              active: {
                type: 'boolean'
              },
              invocationLabel: {},
              postCodeHookSpecification: {
                type: 'structure',
                members: {
                  successResponse: {
                    shape: 'S36'
                  },
                  successNextStep: {
                    shape: 'S3o'
                  },
                  successConditional: {
                    shape: 'S40'
                  },
                  failureResponse: {
                    shape: 'S36'
                  },
                  failureNextStep: {
                    shape: 'S3o'
                  },
                  failureConditional: {
                    shape: 'S40'
                  },
                  timeoutResponse: {
                    shape: 'S36'
                  },
                  timeoutNextStep: {
                    shape: 'S3o'
                  },
                  timeoutConditional: {
                    shape: 'S40'
                  }
                }
              }
            }
          },
          S4t: {
            type: 'structure',
            required: ['enableCodeHookInvocation'],
            members: {
              enableCodeHookInvocation: {
                type: 'boolean'
              },
              invocationLabel: {}
            }
          },
          S4u: {
            type: 'structure',
            members: {
              closingResponse: {
                shape: 'S36'
              },
              active: {
                type: 'boolean'
              },
              nextStep: {
                shape: 'S3o'
              },
              conditional: {
                shape: 'S40'
              }
            }
          },
          S4v: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          S4x: {
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
          S51: {
            type: 'structure',
            required: ['kendraIndex'],
            members: {
              kendraIndex: {},
              queryFilterStringEnabled: {
                type: 'boolean'
              },
              queryFilterString: {}
            }
          },
          S54: {
            type: 'structure',
            members: {
              initialResponse: {
                shape: 'S36'
              },
              nextStep: {
                shape: 'S3o'
              },
              conditional: {
                shape: 'S40'
              },
              codeHook: {
                shape: 'S4r'
              }
            }
          },
          S55: {
            type: 'structure',
            members: {
              dataSourceConfiguration: {
                type: 'structure',
                members: {
                  opensearchConfiguration: {
                    type: 'structure',
                    required: ['domainEndpoint', 'indexName'],
                    members: {
                      domainEndpoint: {},
                      indexName: {},
                      exactResponse: {
                        type: 'boolean'
                      },
                      exactResponseFields: {
                        type: 'structure',
                        required: ['questionField', 'answerField'],
                        members: {
                          questionField: {},
                          answerField: {}
                        }
                      },
                      includeFields: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  kendraConfiguration: {
                    type: 'structure',
                    required: ['kendraIndex'],
                    members: {
                      kendraIndex: {},
                      queryFilterStringEnabled: {
                        type: 'boolean'
                      },
                      queryFilterString: {},
                      exactResponse: {
                        type: 'boolean'
                      }
                    }
                  },
                  bedrockKnowledgeStoreConfiguration: {
                    type: 'structure',
                    required: ['bedrockKnowledgeBaseArn'],
                    members: {
                      bedrockKnowledgeBaseArn: {}
                    }
                  }
                }
              },
              bedrockModelConfiguration: {
                shape: 'S29'
              }
            }
          },
          S64: {
            type: 'structure',
            required: ['slotConstraint'],
            members: {
              defaultValueSpecification: {
                shape: 'S65'
              },
              slotConstraint: {},
              promptSpecification: {
                shape: 'S4d'
              },
              sampleUtterances: {
                shape: 'S30'
              },
              waitAndContinueSpecification: {
                shape: 'S6a'
              },
              slotCaptureSetting: {
                type: 'structure',
                members: {
                  captureResponse: {
                    shape: 'S36'
                  },
                  captureNextStep: {
                    shape: 'S3o'
                  },
                  captureConditional: {
                    shape: 'S40'
                  },
                  failureResponse: {
                    shape: 'S36'
                  },
                  failureNextStep: {
                    shape: 'S3o'
                  },
                  failureConditional: {
                    shape: 'S40'
                  },
                  codeHook: {
                    shape: 'S4r'
                  },
                  elicitationCodeHook: {
                    shape: 'S4t'
                  }
                }
              },
              slotResolutionSetting: {
                type: 'structure',
                required: ['slotResolutionStrategy'],
                members: {
                  slotResolutionStrategy: {}
                }
              }
            }
          },
          S65: {
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
          },
          S6a: {
            type: 'structure',
            required: ['waitingResponse', 'continueResponse'],
            members: {
              waitingResponse: {
                shape: 'S36'
              },
              continueResponse: {
                shape: 'S36'
              },
              stillWaitingResponse: {
                type: 'structure',
                required: ['messageGroups', 'frequencyInSeconds', 'timeoutInSeconds'],
                members: {
                  messageGroups: {
                    shape: 'S37'
                  },
                  frequencyInSeconds: {
                    type: 'integer'
                  },
                  timeoutInSeconds: {
                    type: 'integer'
                  },
                  allowInterrupt: {
                    type: 'boolean'
                  }
                }
              },
              active: {
                type: 'boolean'
              }
            }
          },
          S6h: {
            type: 'structure',
            required: ['obfuscationSettingType'],
            members: {
              obfuscationSettingType: {}
            }
          },
          S6j: {
            type: 'structure',
            members: {
              allowMultipleValues: {
                type: 'boolean'
              }
            }
          },
          S6k: {
            type: 'structure',
            members: {
              expression: {},
              slotSpecifications: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['slotTypeId', 'valueElicitationSetting'],
                  members: {
                    slotTypeId: {},
                    valueElicitationSetting: {
                      type: 'structure',
                      required: ['promptSpecification'],
                      members: {
                        defaultValueSpecification: {
                          shape: 'S65'
                        },
                        promptSpecification: {
                          shape: 'S4d'
                        },
                        sampleUtterances: {
                          shape: 'S30'
                        },
                        waitAndContinueSpecification: {
                          shape: 'S6a'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S6r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                sampleValue: {
                  shape: 'S6t'
                },
                synonyms: {
                  type: 'list',
                  member: {
                    shape: 'S6t'
                  }
                }
              }
            }
          },
          S6t: {
            type: 'structure',
            required: ['value'],
            members: {
              value: {}
            }
          },
          S6w: {
            type: 'structure',
            required: ['resolutionStrategy'],
            members: {
              resolutionStrategy: {},
              regexFilter: {
                type: 'structure',
                required: ['pattern'],
                members: {
                  pattern: {}
                }
              },
              advancedRecognitionSetting: {
                type: 'structure',
                members: {
                  audioRecognitionStrategy: {}
                }
              }
            }
          },
          S73: {
            type: 'structure',
            members: {
              grammarSlotTypeSetting: {
                type: 'structure',
                members: {
                  source: {
                    type: 'structure',
                    required: ['s3BucketName', 's3ObjectKey'],
                    members: {
                      s3BucketName: {},
                      s3ObjectKey: {},
                      kmsKeyArn: {}
                    }
                  }
                }
              }
            }
          },
          S78: {
            type: 'structure',
            members: {
              subSlots: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'slotTypeId'],
                  members: {
                    name: {},
                    slotTypeId: {}
                  }
                }
              }
            }
          },
          S7d: {
            type: 'structure',
            members: {
              botAliasTarget: {
                type: 'structure',
                required: ['botId', 'botAliasId', 'localeId'],
                members: {
                  botId: {},
                  botAliasId: {},
                  localeId: {}
                }
              }
            }
          },
          S8f: {
            type: 'list',
            member: {}
          },
          S8l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['botId', 'botVersion'],
              members: {
                botId: {},
                botVersion: {}
              }
            }
          },
          S8t: {
            type: 'list',
            member: {}
          },
          S8y: {
            type: 'structure',
            members: {
              s3BucketTranscriptSource: {
                type: 'structure',
                required: ['s3BucketName', 'transcriptFormat'],
                members: {
                  s3BucketName: {},
                  pathFormat: {
                    type: 'structure',
                    members: {
                      objectPrefixes: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  transcriptFormat: {},
                  transcriptFilter: {
                    type: 'structure',
                    members: {
                      lexTranscriptFilter: {
                        type: 'structure',
                        members: {
                          dateRangeFilter: {
                            type: 'structure',
                            required: ['startDateTime', 'endDateTime'],
                            members: {
                              startDateTime: {
                                type: 'timestamp'
                              },
                              endDateTime: {
                                type: 'timestamp'
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  kmsKeyArn: {}
                }
              }
            }
          },
          S97: {
            type: 'structure',
            members: {
              kmsKeyArn: {},
              botLocaleExportPassword: {
                shape: 'S98'
              },
              associatedTranscriptsPassword: {
                shape: 'S98'
              }
            }
          },
          S98: {
            type: 'string',
            sensitive: true
          },
          S9s: {
            type: 'structure',
            members: {
              botImportSpecification: {
                type: 'structure',
                required: ['botName', 'roleArn', 'dataPrivacy'],
                members: {
                  botName: {},
                  roleArn: {},
                  dataPrivacy: {
                    shape: 'Sx'
                  },
                  idleSessionTTLInSeconds: {
                    type: 'integer'
                  },
                  botTags: {
                    shape: 'S10'
                  },
                  testBotAliasTags: {
                    shape: 'S10'
                  }
                }
              },
              botLocaleImportSpecification: {
                type: 'structure',
                required: ['botId', 'botVersion', 'localeId'],
                members: {
                  botId: {},
                  botVersion: {},
                  localeId: {},
                  nluIntentConfidenceThreshold: {
                    type: 'double'
                  },
                  voiceSettings: {
                    shape: 'S22'
                  }
                }
              },
              customVocabularyImportSpecification: {
                type: 'structure',
                required: ['botId', 'botVersion', 'localeId'],
                members: {
                  botId: {},
                  botVersion: {},
                  localeId: {}
                }
              },
              testSetImportResourceSpecification: {
                type: 'structure',
                required: ['testSetName', 'roleArn', 'storageLocation', 'importInputLocation', 'modality'],
                members: {
                  testSetName: {},
                  description: {},
                  roleArn: {},
                  storageLocation: {
                    shape: 'S9x'
                  },
                  importInputLocation: {
                    type: 'structure',
                    required: ['s3BucketName', 's3Path'],
                    members: {
                      s3BucketName: {},
                      s3Path: {}
                    }
                  },
                  modality: {},
                  testSetTags: {
                    shape: 'S10'
                  }
                }
              }
            }
          },
          S9x: {
            type: 'structure',
            required: ['s3BucketName', 's3Path'],
            members: {
              s3BucketName: {},
              s3Path: {},
              kmsKeyArn: {}
            }
          },
          Sa4: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['priority', 'slotId'],
              members: {
                priority: {
                  type: 'integer'
                },
                slotId: {}
              }
            }
          },
          Sag: {
            type: 'structure',
            members: {
              botAliasTarget: {
                type: 'structure',
                required: ['botId', 'botAliasId', 'localeId'],
                members: {
                  botId: {},
                  botAliasId: {},
                  localeId: {}
                }
              }
            }
          },
          Say: {
            type: 'structure',
            members: {
              conversationLogsDataSource: {
                type: 'structure',
                required: ['botId', 'botAliasId', 'localeId', 'filter'],
                members: {
                  botId: {},
                  botAliasId: {},
                  localeId: {},
                  filter: {
                    type: 'structure',
                    required: ['startTime', 'endTime', 'inputMode'],
                    members: {
                      startTime: {
                        type: 'timestamp'
                      },
                      endTime: {
                        type: 'timestamp'
                      },
                      inputMode: {}
                    }
                  }
                }
              }
            }
          },
          Sb7: {
            type: 'structure',
            required: ['relativeAggregationDuration'],
            members: {
              relativeAggregationDuration: {
                type: 'structure',
                required: ['timeDimension', 'timeValue'],
                members: {
                  timeDimension: {},
                  timeValue: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          Sbh: {
            type: 'list',
            member: {}
          },
          Seh: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'interval'],
              members: {
                name: {},
                interval: {},
                order: {}
              }
            }
          },
          Ses: {
            type: 'list',
            member: {}
          },
          Sex: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                value: {
                  type: 'long'
                }
              }
            }
          },
          Sgg: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'operator', 'values'],
              members: {
                name: {},
                operator: {},
                values: {
                  shape: 'Ses'
                }
              }
            }
          },
          Si5: {
            type: 'map',
            key: {},
            value: {
              type: 'integer'
            }
          },
          Siw: {
            type: 'structure',
            required: ['errorCode', 'errorMessage'],
            members: {
              errorCode: {},
              errorMessage: {}
            }
          },
          Siy: {
            type: 'structure',
            required: ['utteranceInput'],
            members: {
              utteranceInput: {
                type: 'structure',
                members: {
                  textInput: {},
                  audioInput: {
                    type: 'structure',
                    required: ['audioFileS3Location'],
                    members: {
                      audioFileS3Location: {}
                    }
                  }
                }
              },
              requestAttributes: {
                shape: 'S3y'
              },
              sessionState: {
                type: 'structure',
                members: {
                  sessionAttributes: {
                    shape: 'S3y'
                  },
                  activeContexts: {
                    shape: 'Sj4'
                  },
                  runtimeHints: {
                    type: 'structure',
                    members: {
                      slotHints: {
                        type: 'map',
                        key: {},
                        value: {
                          shape: 'Sj9'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sj4: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          Sj9: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                runtimeHintValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['phrase'],
                    members: {
                      phrase: {}
                    }
                  }
                },
                subSlotHints: {
                  shape: 'Sj9'
                }
              }
            }
          },
          Sje: {
            type: 'structure',
            required: ['intent'],
            members: {
              intent: {
                type: 'structure',
                required: ['name'],
                members: {
                  name: {},
                  slots: {
                    shape: 'Sjg'
                  }
                }
              },
              activeContexts: {
                shape: 'Sj4'
              },
              transcript: {}
            }
          },
          Sjg: {
            type: 'map',
            key: {},
            value: {
              shape: 'Sjh'
            }
          },
          Sjh: {
            type: 'structure',
            members: {
              value: {},
              values: {
                type: 'list',
                member: {
                  shape: 'Sjh'
                }
              },
              subSlots: {
                shape: 'Sjg'
              }
            }
          },
          Sk7: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'operator', 'values'],
              members: {
                name: {},
                operator: {},
                values: {
                  shape: 'Ses'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f5b4e2aa9db36ccae6c30871ce8003c169b7ede3.js.map