System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-08-08',
          endpointPrefix: 'connect',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'Amazon Connect',
          serviceFullName: 'Amazon Connect Service',
          serviceId: 'Connect',
          signatureVersion: 'v4',
          signingName: 'connect',
          uid: 'connect-2017-08-08'
        },
        operations: {
          ActivateEvaluationForm: {
            http: {
              requestUri: '/evaluation-forms/{InstanceId}/{EvaluationFormId}/activate'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationFormId', 'EvaluationFormVersion'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationFormId: {
                  location: 'uri',
                  locationName: 'EvaluationFormId'
                },
                EvaluationFormVersion: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationFormId', 'EvaluationFormArn', 'EvaluationFormVersion'],
              members: {
                EvaluationFormId: {},
                EvaluationFormArn: {},
                EvaluationFormVersion: {
                  type: 'integer'
                }
              }
            }
          },
          AssociateAnalyticsDataSet: {
            http: {
              method: 'PUT',
              requestUri: '/analytics-data/instance/{InstanceId}/association'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'DataSetId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                DataSetId: {},
                TargetAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSetId: {},
                TargetAccountId: {},
                ResourceShareId: {},
                ResourceShareArn: {}
              }
            }
          },
          AssociateApprovedOrigin: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/approved-origin'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Origin'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Origin: {}
              }
            }
          },
          AssociateBot: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/bot'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                LexBot: {
                  shape: 'Sf'
                },
                LexV2Bot: {
                  shape: 'Si'
                }
              }
            }
          },
          AssociateDefaultVocabulary: {
            http: {
              method: 'PUT',
              requestUri: '/default-vocabulary/{InstanceId}/{LanguageCode}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'LanguageCode'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                LanguageCode: {
                  location: 'uri',
                  locationName: 'LanguageCode'
                },
                VocabularyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateFlow: {
            http: {
              method: 'PUT',
              requestUri: '/flow-associations/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ResourceId', 'FlowId', 'ResourceType'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ResourceId: {},
                FlowId: {},
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateInstanceStorageConfig: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/storage-config'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ResourceType', 'StorageConfig'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ResourceType: {},
                StorageConfig: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationId: {}
              }
            }
          },
          AssociateLambdaFunction: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/lambda-function'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'FunctionArn'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                FunctionArn: {}
              }
            }
          },
          AssociateLexBot: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/lex-bot'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'LexBot'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                LexBot: {
                  shape: 'Sf'
                }
              }
            }
          },
          AssociatePhoneNumberContactFlow: {
            http: {
              method: 'PUT',
              requestUri: '/phone-number/{PhoneNumberId}/contact-flow'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId', 'InstanceId', 'ContactFlowId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'PhoneNumberId'
                },
                InstanceId: {},
                ContactFlowId: {}
              }
            }
          },
          AssociateQueueQuickConnects: {
            http: {
              requestUri: '/queues/{InstanceId}/{QueueId}/associate-quick-connects'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId', 'QuickConnectIds'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                },
                QuickConnectIds: {
                  shape: 'S1f'
                }
              }
            }
          },
          AssociateRoutingProfileQueues: {
            http: {
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId', 'QueueConfigs'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                },
                QueueConfigs: {
                  shape: 'S1j'
                }
              }
            }
          },
          AssociateSecurityKey: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/security-key'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Key'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Key: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationId: {}
              }
            }
          },
          AssociateTrafficDistributionGroupUser: {
            http: {
              method: 'PUT',
              requestUri: '/traffic-distribution-group/{TrafficDistributionGroupId}/user'
            },
            input: {
              type: 'structure',
              required: ['TrafficDistributionGroupId', 'UserId', 'InstanceId'],
              members: {
                TrafficDistributionGroupId: {
                  location: 'uri',
                  locationName: 'TrafficDistributionGroupId'
                },
                UserId: {},
                InstanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          AssociateUserProficiencies: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/associate-proficiencies'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'UserId', 'UserProficiencies'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                UserProficiencies: {
                  shape: 'S1x'
                }
              }
            }
          },
          BatchAssociateAnalyticsDataSet: {
            http: {
              method: 'PUT',
              requestUri: '/analytics-data/instance/{InstanceId}/associations'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'DataSetIds'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                DataSetIds: {
                  shape: 'S23'
                },
                TargetAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Created: {
                  shape: 'S25'
                },
                Errors: {
                  shape: 'S27'
                }
              }
            }
          },
          BatchDisassociateAnalyticsDataSet: {
            http: {
              requestUri: '/analytics-data/instance/{InstanceId}/associations'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'DataSetIds'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                DataSetIds: {
                  shape: 'S23'
                },
                TargetAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Deleted: {
                  shape: 'S23'
                },
                Errors: {
                  shape: 'S27'
                }
              }
            }
          },
          BatchGetAttachedFileMetadata: {
            http: {
              requestUri: '/attached-files/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['FileIds', 'InstanceId', 'AssociatedResourceArn'],
              members: {
                FileIds: {
                  type: 'list',
                  member: {}
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AssociatedResourceArn: {
                  location: 'querystring',
                  locationName: 'associatedResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Files: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CreationTime', 'FileArn', 'FileId', 'FileName', 'FileSizeInBytes', 'FileStatus'],
                    members: {
                      CreationTime: {},
                      FileArn: {},
                      FileId: {},
                      FileName: {},
                      FileSizeInBytes: {
                        type: 'long'
                      },
                      FileStatus: {},
                      CreatedBy: {
                        shape: 'S2l'
                      },
                      FileUseCaseType: {},
                      AssociatedResourceArn: {},
                      Tags: {
                        shape: 'S2n'
                      }
                    }
                  }
                },
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ErrorCode: {},
                      ErrorMessage: {},
                      FileId: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetFlowAssociation: {
            http: {
              requestUri: '/flow-associations-batch/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ResourceIds'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ResourceIds: {
                  type: 'list',
                  member: {}
                },
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FlowAssociationSummaryList: {
                  shape: 'S2y'
                }
              }
            }
          },
          BatchPutContact: {
            http: {
              method: 'PUT',
              requestUri: '/contact/batch/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactDataRequestList'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactDataRequestList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SystemEndpoint: {
                        shape: 'S34'
                      },
                      CustomerEndpoint: {
                        shape: 'S34'
                      },
                      RequestIdentifier: {},
                      QueueId: {},
                      Attributes: {
                        shape: 'S38'
                      },
                      Campaign: {
                        shape: 'S3b'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SuccessfulRequestList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RequestIdentifier: {},
                      ContactId: {}
                    }
                  }
                },
                FailedRequestList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RequestIdentifier: {},
                      FailureReasonCode: {},
                      FailureReasonMessage: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ClaimPhoneNumber: {
            http: {
              requestUri: '/phone-number/claim'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumber'],
              members: {
                TargetArn: {},
                InstanceId: {},
                PhoneNumber: {},
                PhoneNumberDescription: {},
                Tags: {
                  shape: 'S2n'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberId: {},
                PhoneNumberArn: {}
              }
            }
          },
          CompleteAttachedFileUpload: {
            http: {
              requestUri: '/attached-files/{InstanceId}/{FileId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'FileId', 'AssociatedResourceArn'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                FileId: {
                  location: 'uri',
                  locationName: 'FileId'
                },
                AssociatedResourceArn: {
                  location: 'querystring',
                  locationName: 'associatedResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateAgentStatus: {
            http: {
              method: 'PUT',
              requestUri: '/agent-status/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'State'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                State: {},
                DisplayOrder: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AgentStatusARN: {},
                AgentStatusId: {}
              }
            }
          },
          CreateContactFlow: {
            http: {
              method: 'PUT',
              requestUri: '/contact-flows/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'Type', 'Content'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Type: {},
                Description: {},
                Content: {},
                Status: {},
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactFlowId: {},
                ContactFlowArn: {}
              }
            }
          },
          CreateContactFlowModule: {
            http: {
              method: 'PUT',
              requestUri: '/contact-flow-modules/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'Content'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                Content: {},
                Tags: {
                  shape: 'S2n'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          CreateEvaluationForm: {
            http: {
              method: 'PUT',
              requestUri: '/evaluation-forms/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Title', 'Items'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Title: {},
                Description: {},
                Items: {
                  shape: 'S4d'
                },
                ScoringStrategy: {
                  shape: 'S58'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationFormId', 'EvaluationFormArn'],
              members: {
                EvaluationFormId: {},
                EvaluationFormArn: {}
              }
            },
            idempotent: true
          },
          CreateHoursOfOperation: {
            http: {
              method: 'PUT',
              requestUri: '/hours-of-operations/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'TimeZone', 'Config'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                TimeZone: {},
                Config: {
                  shape: 'S5g'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HoursOfOperationId: {},
                HoursOfOperationArn: {}
              }
            }
          },
          CreateInstance: {
            http: {
              method: 'PUT',
              requestUri: '/instance'
            },
            input: {
              type: 'structure',
              required: ['IdentityManagementType', 'InboundCallsEnabled', 'OutboundCallsEnabled'],
              members: {
                ClientToken: {},
                IdentityManagementType: {},
                InstanceAlias: {
                  shape: 'S5q'
                },
                DirectoryId: {},
                InboundCallsEnabled: {
                  type: 'boolean'
                },
                OutboundCallsEnabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          CreateIntegrationAssociation: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/integration-associations'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'IntegrationType', 'IntegrationArn'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                IntegrationType: {},
                IntegrationArn: {},
                SourceApplicationUrl: {},
                SourceApplicationName: {},
                SourceType: {},
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IntegrationAssociationId: {},
                IntegrationAssociationArn: {}
              }
            }
          },
          CreateParticipant: {
            http: {
              requestUri: '/contact/create-participant'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'ParticipantDetails'],
              members: {
                InstanceId: {},
                ContactId: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ParticipantDetails: {
                  type: 'structure',
                  members: {
                    ParticipantRole: {},
                    DisplayName: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ParticipantCredentials: {
                  type: 'structure',
                  members: {
                    ParticipantToken: {},
                    Expiry: {}
                  }
                },
                ParticipantId: {}
              }
            }
          },
          CreatePersistentContactAssociation: {
            http: {
              requestUri: '/contact/persistent-contact-association/{InstanceId}/{InitialContactId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'InitialContactId', 'RehydrationType', 'SourceContactId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                InitialContactId: {
                  location: 'uri',
                  locationName: 'InitialContactId'
                },
                RehydrationType: {},
                SourceContactId: {},
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContinuedFromContactId: {}
              }
            }
          },
          CreatePredefinedAttribute: {
            http: {
              method: 'PUT',
              requestUri: '/predefined-attributes/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'Values'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Values: {
                  shape: 'S6e'
                }
              }
            }
          },
          CreatePrompt: {
            http: {
              method: 'PUT',
              requestUri: '/prompts/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'S3Uri'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                S3Uri: {},
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PromptARN: {},
                PromptId: {}
              }
            }
          },
          CreateQueue: {
            http: {
              method: 'PUT',
              requestUri: '/queues/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'HoursOfOperationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                OutboundCallerConfig: {
                  shape: 'S6n'
                },
                HoursOfOperationId: {},
                MaxContacts: {
                  type: 'integer'
                },
                QuickConnectIds: {
                  shape: 'S1f'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueueArn: {},
                QueueId: {}
              }
            }
          },
          CreateQuickConnect: {
            http: {
              method: 'PUT',
              requestUri: '/quick-connects/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'QuickConnectConfig'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                QuickConnectConfig: {
                  shape: 'S6u'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QuickConnectARN: {},
                QuickConnectId: {}
              }
            }
          },
          CreateRoutingProfile: {
            http: {
              method: 'PUT',
              requestUri: '/routing-profiles/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'Description', 'DefaultOutboundQueueId', 'MediaConcurrencies'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                DefaultOutboundQueueId: {},
                QueueConfigs: {
                  shape: 'S1j'
                },
                MediaConcurrencies: {
                  shape: 'S73'
                },
                Tags: {
                  shape: 'S2n'
                },
                AgentAvailabilityTimer: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RoutingProfileArn: {},
                RoutingProfileId: {}
              }
            }
          },
          CreateRule: {
            http: {
              requestUri: '/rules/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'TriggerEventSource', 'Function', 'Actions', 'PublishStatus'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                TriggerEventSource: {
                  shape: 'S7c'
                },
                Function: {},
                Actions: {
                  shape: 'S7f'
                },
                PublishStatus: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RuleArn', 'RuleId'],
              members: {
                RuleArn: {},
                RuleId: {}
              }
            }
          },
          CreateSecurityProfile: {
            http: {
              method: 'PUT',
              requestUri: '/security-profiles/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['SecurityProfileName', 'InstanceId'],
              members: {
                SecurityProfileName: {},
                Description: {},
                Permissions: {
                  shape: 'S8k'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Tags: {
                  shape: 'S2n'
                },
                AllowedAccessControlTags: {
                  shape: 'S8m'
                },
                TagRestrictedResources: {
                  shape: 'S8p'
                },
                Applications: {
                  shape: 'S8r'
                },
                HierarchyRestrictedResources: {
                  shape: 'S8w'
                },
                AllowedAccessControlHierarchyGroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SecurityProfileId: {},
                SecurityProfileArn: {}
              }
            }
          },
          CreateTaskTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/task/template'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name', 'Fields'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                ContactFlowId: {},
                Constraints: {
                  shape: 'S94'
                },
                Defaults: {
                  shape: 'S9d'
                },
                Status: {},
                Fields: {
                  shape: 'S9i'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Id', 'Arn'],
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          CreateTrafficDistributionGroup: {
            http: {
              method: 'PUT',
              requestUri: '/traffic-distribution-group'
            },
            input: {
              type: 'structure',
              required: ['Name', 'InstanceId'],
              members: {
                Name: {},
                Description: {},
                InstanceId: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          CreateUseCase: {
            http: {
              method: 'PUT',
              requestUri: '/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'IntegrationAssociationId', 'UseCaseType'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                IntegrationAssociationId: {
                  location: 'uri',
                  locationName: 'IntegrationAssociationId'
                },
                UseCaseType: {},
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UseCaseId: {},
                UseCaseArn: {}
              }
            }
          },
          CreateUser: {
            http: {
              method: 'PUT',
              requestUri: '/users/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['Username', 'PhoneConfig', 'SecurityProfileIds', 'RoutingProfileId', 'InstanceId'],
              members: {
                Username: {},
                Password: {
                  type: 'string',
                  sensitive: true
                },
                IdentityInfo: {
                  shape: 'Sa5'
                },
                PhoneConfig: {
                  shape: 'Sa9'
                },
                DirectoryUserId: {},
                SecurityProfileIds: {
                  shape: 'Sae'
                },
                RoutingProfileId: {},
                HierarchyGroupId: {},
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserId: {},
                UserArn: {}
              }
            }
          },
          CreateUserHierarchyGroup: {
            http: {
              method: 'PUT',
              requestUri: '/user-hierarchy-groups/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'InstanceId'],
              members: {
                Name: {},
                ParentGroupId: {},
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HierarchyGroupId: {},
                HierarchyGroupArn: {}
              }
            }
          },
          CreateView: {
            http: {
              method: 'PUT',
              requestUri: '/views/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Status', 'Content', 'Name'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ClientToken: {},
                Status: {},
                Content: {
                  shape: 'San'
                },
                Description: {},
                Name: {
                  shape: 'Sas'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                View: {
                  shape: 'Sau'
                }
              }
            },
            idempotent: true
          },
          CreateViewVersion: {
            http: {
              method: 'PUT',
              requestUri: '/views/{InstanceId}/{ViewId}/versions'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ViewId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ViewId: {
                  location: 'uri',
                  locationName: 'ViewId'
                },
                VersionDescription: {},
                ViewContentSha256: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                View: {
                  shape: 'Sau'
                }
              }
            },
            idempotent: true
          },
          CreateVocabulary: {
            http: {
              requestUri: '/vocabulary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'VocabularyName', 'LanguageCode', 'Content'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                VocabularyName: {},
                LanguageCode: {},
                Content: {},
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VocabularyArn', 'VocabularyId', 'State'],
              members: {
                VocabularyArn: {},
                VocabularyId: {},
                State: {}
              }
            }
          },
          DeactivateEvaluationForm: {
            http: {
              requestUri: '/evaluation-forms/{InstanceId}/{EvaluationFormId}/deactivate'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationFormId', 'EvaluationFormVersion'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationFormId: {
                  location: 'uri',
                  locationName: 'EvaluationFormId'
                },
                EvaluationFormVersion: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationFormId', 'EvaluationFormArn', 'EvaluationFormVersion'],
              members: {
                EvaluationFormId: {},
                EvaluationFormArn: {},
                EvaluationFormVersion: {
                  type: 'integer'
                }
              }
            }
          },
          DeleteAttachedFile: {
            http: {
              method: 'DELETE',
              requestUri: '/attached-files/{InstanceId}/{FileId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'FileId', 'AssociatedResourceArn'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                FileId: {
                  location: 'uri',
                  locationName: 'FileId'
                },
                AssociatedResourceArn: {
                  location: 'querystring',
                  locationName: 'associatedResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteContactEvaluation: {
            http: {
              method: 'DELETE',
              requestUri: '/contact-evaluations/{InstanceId}/{EvaluationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationId: {
                  location: 'uri',
                  locationName: 'EvaluationId'
                }
              }
            },
            idempotent: true
          },
          DeleteContactFlow: {
            http: {
              method: 'DELETE',
              requestUri: '/contact-flows/{InstanceId}/{ContactFlowId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowId: {
                  location: 'uri',
                  locationName: 'ContactFlowId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteContactFlowModule: {
            http: {
              method: 'DELETE',
              requestUri: '/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowModuleId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowModuleId: {
                  location: 'uri',
                  locationName: 'ContactFlowModuleId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEvaluationForm: {
            http: {
              method: 'DELETE',
              requestUri: '/evaluation-forms/{InstanceId}/{EvaluationFormId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationFormId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationFormId: {
                  location: 'uri',
                  locationName: 'EvaluationFormId'
                },
                EvaluationFormVersion: {
                  location: 'querystring',
                  locationName: 'version',
                  type: 'integer'
                }
              }
            },
            idempotent: true
          },
          DeleteHoursOfOperation: {
            http: {
              method: 'DELETE',
              requestUri: '/hours-of-operations/{InstanceId}/{HoursOfOperationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'HoursOfOperationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                HoursOfOperationId: {
                  location: 'uri',
                  locationName: 'HoursOfOperationId'
                }
              }
            }
          },
          DeleteInstance: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          DeleteIntegrationAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'IntegrationAssociationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                IntegrationAssociationId: {
                  location: 'uri',
                  locationName: 'IntegrationAssociationId'
                }
              }
            }
          },
          DeletePredefinedAttribute: {
            http: {
              method: 'DELETE',
              requestUri: '/predefined-attributes/{InstanceId}/{Name}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            idempotent: true
          },
          DeletePrompt: {
            http: {
              method: 'DELETE',
              requestUri: '/prompts/{InstanceId}/{PromptId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'PromptId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                PromptId: {
                  location: 'uri',
                  locationName: 'PromptId'
                }
              }
            }
          },
          DeleteQueue: {
            http: {
              method: 'DELETE',
              requestUri: '/queues/{InstanceId}/{QueueId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                }
              }
            }
          },
          DeleteQuickConnect: {
            http: {
              method: 'DELETE',
              requestUri: '/quick-connects/{InstanceId}/{QuickConnectId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QuickConnectId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QuickConnectId: {
                  location: 'uri',
                  locationName: 'QuickConnectId'
                }
              }
            }
          },
          DeleteRoutingProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                }
              }
            }
          },
          DeleteRule: {
            http: {
              method: 'DELETE',
              requestUri: '/rules/{InstanceId}/{RuleId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RuleId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RuleId: {
                  location: 'uri',
                  locationName: 'RuleId'
                }
              }
            }
          },
          DeleteSecurityProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/security-profiles/{InstanceId}/{SecurityProfileId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'SecurityProfileId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                SecurityProfileId: {
                  location: 'uri',
                  locationName: 'SecurityProfileId'
                }
              }
            }
          },
          DeleteTaskTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}/task/template/{TaskTemplateId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'TaskTemplateId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                TaskTemplateId: {
                  location: 'uri',
                  locationName: 'TaskTemplateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTrafficDistributionGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/traffic-distribution-group/{TrafficDistributionGroupId}'
            },
            input: {
              type: 'structure',
              required: ['TrafficDistributionGroupId'],
              members: {
                TrafficDistributionGroupId: {
                  location: 'uri',
                  locationName: 'TrafficDistributionGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteUseCase: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'IntegrationAssociationId', 'UseCaseId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                IntegrationAssociationId: {
                  location: 'uri',
                  locationName: 'IntegrationAssociationId'
                },
                UseCaseId: {
                  location: 'uri',
                  locationName: 'UseCaseId'
                }
              }
            }
          },
          DeleteUser: {
            http: {
              method: 'DELETE',
              requestUri: '/users/{InstanceId}/{UserId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'UserId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                }
              }
            }
          },
          DeleteUserHierarchyGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}'
            },
            input: {
              type: 'structure',
              required: ['HierarchyGroupId', 'InstanceId'],
              members: {
                HierarchyGroupId: {
                  location: 'uri',
                  locationName: 'HierarchyGroupId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          DeleteView: {
            http: {
              method: 'DELETE',
              requestUri: '/views/{InstanceId}/{ViewId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ViewId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ViewId: {
                  location: 'uri',
                  locationName: 'ViewId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteViewVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/views/{InstanceId}/{ViewId}/versions/{ViewVersion}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ViewId', 'ViewVersion'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ViewId: {
                  location: 'uri',
                  locationName: 'ViewId'
                },
                ViewVersion: {
                  location: 'uri',
                  locationName: 'ViewVersion',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteVocabulary: {
            http: {
              requestUri: '/vocabulary-remove/{InstanceId}/{VocabularyId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'VocabularyId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                VocabularyId: {
                  location: 'uri',
                  locationName: 'VocabularyId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VocabularyArn', 'VocabularyId', 'State'],
              members: {
                VocabularyArn: {},
                VocabularyId: {},
                State: {}
              }
            }
          },
          DescribeAgentStatus: {
            http: {
              method: 'GET',
              requestUri: '/agent-status/{InstanceId}/{AgentStatusId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'AgentStatusId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AgentStatusId: {
                  location: 'uri',
                  locationName: 'AgentStatusId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AgentStatus: {
                  type: 'structure',
                  members: {
                    AgentStatusARN: {},
                    AgentStatusId: {},
                    Name: {},
                    Description: {},
                    Type: {},
                    DisplayOrder: {
                      type: 'integer'
                    },
                    State: {},
                    Tags: {
                      shape: 'S2n'
                    },
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    LastModifiedRegion: {}
                  }
                }
              }
            }
          },
          DescribeContact: {
            http: {
              method: 'GET',
              requestUri: '/contacts/{InstanceId}/{ContactId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {
                  location: 'uri',
                  locationName: 'ContactId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Contact: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    Id: {},
                    InitialContactId: {},
                    PreviousContactId: {},
                    InitiationMethod: {},
                    Name: {
                      shape: 'Scf'
                    },
                    Description: {
                      shape: 'Scg'
                    },
                    Channel: {},
                    QueueInfo: {
                      type: 'structure',
                      members: {
                        Id: {},
                        EnqueueTimestamp: {
                          type: 'timestamp'
                        }
                      }
                    },
                    AgentInfo: {
                      type: 'structure',
                      members: {
                        Id: {},
                        ConnectedToAgentTimestamp: {
                          type: 'timestamp'
                        },
                        AgentPauseDurationInSeconds: {
                          type: 'integer'
                        },
                        HierarchyGroups: {
                          type: 'structure',
                          members: {
                            Level1: {
                              shape: 'Scn'
                            },
                            Level2: {
                              shape: 'Scn'
                            },
                            Level3: {
                              shape: 'Scn'
                            },
                            Level4: {
                              shape: 'Scn'
                            },
                            Level5: {
                              shape: 'Scn'
                            }
                          }
                        },
                        DeviceInfo: {
                          shape: 'Sco'
                        },
                        Capabilities: {
                          shape: 'Scs'
                        }
                      }
                    },
                    InitiationTimestamp: {
                      type: 'timestamp'
                    },
                    DisconnectTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdateTimestamp: {
                      type: 'timestamp'
                    },
                    LastPausedTimestamp: {
                      type: 'timestamp'
                    },
                    LastResumedTimestamp: {
                      type: 'timestamp'
                    },
                    TotalPauseCount: {
                      type: 'integer'
                    },
                    TotalPauseDurationInSeconds: {
                      type: 'integer'
                    },
                    ScheduledTimestamp: {
                      type: 'timestamp'
                    },
                    RelatedContactId: {},
                    WisdomInfo: {
                      type: 'structure',
                      members: {
                        SessionArn: {}
                      }
                    },
                    QueueTimeAdjustmentSeconds: {
                      type: 'integer'
                    },
                    QueuePriority: {
                      type: 'long'
                    },
                    Tags: {
                      shape: 'Scz'
                    },
                    ConnectedToSystemTimestamp: {
                      type: 'timestamp'
                    },
                    RoutingCriteria: {
                      type: 'structure',
                      members: {
                        Steps: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              Expiry: {
                                type: 'structure',
                                members: {
                                  DurationInSeconds: {
                                    type: 'integer'
                                  },
                                  ExpiryTimestamp: {
                                    type: 'timestamp'
                                  }
                                }
                              },
                              Expression: {
                                shape: 'Sd7'
                              },
                              Status: {}
                            }
                          }
                        },
                        ActivationTimestamp: {
                          type: 'timestamp'
                        },
                        Index: {
                          type: 'integer'
                        }
                      }
                    },
                    Customer: {
                      type: 'structure',
                      members: {
                        DeviceInfo: {
                          shape: 'Sco'
                        },
                        Capabilities: {
                          shape: 'Scs'
                        }
                      }
                    },
                    Campaign: {
                      shape: 'S3b'
                    },
                    AnsweringMachineDetectionStatus: {},
                    CustomerVoiceActivity: {
                      type: 'structure',
                      members: {
                        GreetingStartTimestamp: {
                          type: 'timestamp'
                        },
                        GreetingEndTimestamp: {
                          type: 'timestamp'
                        }
                      }
                    },
                    QualityMetrics: {
                      type: 'structure',
                      members: {
                        Agent: {
                          type: 'structure',
                          members: {
                            Audio: {
                              shape: 'Sdj'
                            }
                          }
                        },
                        Customer: {
                          type: 'structure',
                          members: {
                            Audio: {
                              shape: 'Sdj'
                            }
                          }
                        }
                      }
                    },
                    DisconnectDetails: {
                      type: 'structure',
                      members: {
                        PotentialDisconnectIssue: {}
                      }
                    },
                    SegmentAttributes: {
                      shape: 'Sdq'
                    }
                  }
                }
              }
            }
          },
          DescribeContactEvaluation: {
            http: {
              method: 'GET',
              requestUri: '/contact-evaluations/{InstanceId}/{EvaluationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationId: {
                  location: 'uri',
                  locationName: 'EvaluationId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Evaluation', 'EvaluationForm'],
              members: {
                Evaluation: {
                  type: 'structure',
                  required: ['EvaluationId', 'EvaluationArn', 'Metadata', 'Answers', 'Notes', 'Status', 'CreatedTime', 'LastModifiedTime'],
                  members: {
                    EvaluationId: {},
                    EvaluationArn: {},
                    Metadata: {
                      type: 'structure',
                      required: ['ContactId', 'EvaluatorArn'],
                      members: {
                        ContactId: {},
                        EvaluatorArn: {},
                        ContactAgentId: {},
                        Score: {
                          shape: 'Sdy'
                        }
                      }
                    },
                    Answers: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          Value: {
                            shape: 'Se2'
                          },
                          SystemSuggestedValue: {
                            shape: 'Se2'
                          }
                        }
                      }
                    },
                    Notes: {
                      shape: 'Se5'
                    },
                    Status: {},
                    Scores: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'Sdy'
                      }
                    },
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    Tags: {
                      shape: 'S2n'
                    }
                  }
                },
                EvaluationForm: {
                  type: 'structure',
                  required: ['EvaluationFormVersion', 'EvaluationFormId', 'EvaluationFormArn', 'Title', 'Items'],
                  members: {
                    EvaluationFormVersion: {
                      type: 'integer'
                    },
                    EvaluationFormId: {},
                    EvaluationFormArn: {},
                    Title: {},
                    Description: {},
                    Items: {
                      shape: 'S4d'
                    },
                    ScoringStrategy: {
                      shape: 'S58'
                    }
                  }
                }
              }
            }
          },
          DescribeContactFlow: {
            http: {
              method: 'GET',
              requestUri: '/contact-flows/{InstanceId}/{ContactFlowId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowId: {
                  location: 'uri',
                  locationName: 'ContactFlowId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactFlow: {
                  shape: 'Sed'
                }
              }
            }
          },
          DescribeContactFlowModule: {
            http: {
              method: 'GET',
              requestUri: '/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowModuleId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowModuleId: {
                  location: 'uri',
                  locationName: 'ContactFlowModuleId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactFlowModule: {
                  shape: 'Seh'
                }
              }
            }
          },
          DescribeEvaluationForm: {
            http: {
              method: 'GET',
              requestUri: '/evaluation-forms/{InstanceId}/{EvaluationFormId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationFormId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationFormId: {
                  location: 'uri',
                  locationName: 'EvaluationFormId'
                },
                EvaluationFormVersion: {
                  location: 'querystring',
                  locationName: 'version',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationForm'],
              members: {
                EvaluationForm: {
                  type: 'structure',
                  required: ['EvaluationFormId', 'EvaluationFormVersion', 'Locked', 'EvaluationFormArn', 'Title', 'Status', 'Items', 'CreatedTime', 'CreatedBy', 'LastModifiedTime', 'LastModifiedBy'],
                  members: {
                    EvaluationFormId: {},
                    EvaluationFormVersion: {
                      type: 'integer'
                    },
                    Locked: {
                      type: 'boolean'
                    },
                    EvaluationFormArn: {},
                    Title: {},
                    Description: {},
                    Status: {},
                    Items: {
                      shape: 'S4d'
                    },
                    ScoringStrategy: {
                      shape: 'S58'
                    },
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    CreatedBy: {},
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    LastModifiedBy: {},
                    Tags: {
                      shape: 'S2n'
                    }
                  }
                }
              }
            }
          },
          DescribeHoursOfOperation: {
            http: {
              method: 'GET',
              requestUri: '/hours-of-operations/{InstanceId}/{HoursOfOperationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'HoursOfOperationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                HoursOfOperationId: {
                  location: 'uri',
                  locationName: 'HoursOfOperationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HoursOfOperation: {
                  shape: 'Ser'
                }
              }
            }
          },
          DescribeInstance: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Instance: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Arn: {},
                    IdentityManagementType: {},
                    InstanceAlias: {
                      shape: 'S5q'
                    },
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    ServiceRole: {},
                    InstanceStatus: {},
                    StatusReason: {
                      type: 'structure',
                      members: {
                        Message: {}
                      }
                    },
                    InboundCallsEnabled: {
                      type: 'boolean'
                    },
                    OutboundCallsEnabled: {
                      type: 'boolean'
                    },
                    InstanceAccessUrl: {},
                    Tags: {
                      shape: 'S2n'
                    }
                  }
                }
              }
            }
          },
          DescribeInstanceAttribute: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/attribute/{AttributeType}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'AttributeType'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AttributeType: {
                  location: 'uri',
                  locationName: 'AttributeType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attribute: {
                  shape: 'Sf1'
                }
              }
            }
          },
          DescribeInstanceStorageConfig: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/storage-config/{AssociationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'AssociationId', 'ResourceType'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AssociationId: {
                  location: 'uri',
                  locationName: 'AssociationId'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageConfig: {
                  shape: 'St'
                }
              }
            }
          },
          DescribePhoneNumber: {
            http: {
              method: 'GET',
              requestUri: '/phone-number/{PhoneNumberId}'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'PhoneNumberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ClaimedPhoneNumberSummary: {
                  type: 'structure',
                  members: {
                    PhoneNumberId: {},
                    PhoneNumberArn: {},
                    PhoneNumber: {},
                    PhoneNumberCountryCode: {},
                    PhoneNumberType: {},
                    PhoneNumberDescription: {},
                    TargetArn: {},
                    InstanceId: {},
                    Tags: {
                      shape: 'S2n'
                    },
                    PhoneNumberStatus: {
                      type: 'structure',
                      members: {
                        Status: {},
                        Message: {}
                      }
                    },
                    SourcePhoneNumberArn: {}
                  }
                }
              }
            }
          },
          DescribePredefinedAttribute: {
            http: {
              method: 'GET',
              requestUri: '/predefined-attributes/{InstanceId}/{Name}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PredefinedAttribute: {
                  shape: 'Sff'
                }
              }
            }
          },
          DescribePrompt: {
            http: {
              method: 'GET',
              requestUri: '/prompts/{InstanceId}/{PromptId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'PromptId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                PromptId: {
                  location: 'uri',
                  locationName: 'PromptId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Prompt: {
                  shape: 'Sfi'
                }
              }
            }
          },
          DescribeQueue: {
            http: {
              method: 'GET',
              requestUri: '/queues/{InstanceId}/{QueueId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Queue: {
                  shape: 'Sfl'
                }
              }
            }
          },
          DescribeQuickConnect: {
            http: {
              method: 'GET',
              requestUri: '/quick-connects/{InstanceId}/{QuickConnectId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QuickConnectId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QuickConnectId: {
                  location: 'uri',
                  locationName: 'QuickConnectId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QuickConnect: {
                  shape: 'Sfp'
                }
              }
            }
          },
          DescribeRoutingProfile: {
            http: {
              method: 'GET',
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RoutingProfile: {
                  shape: 'Sfs'
                }
              }
            }
          },
          DescribeRule: {
            http: {
              method: 'GET',
              requestUri: '/rules/{InstanceId}/{RuleId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RuleId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RuleId: {
                  location: 'uri',
                  locationName: 'RuleId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Rule'],
              members: {
                Rule: {
                  type: 'structure',
                  required: ['Name', 'RuleId', 'RuleArn', 'TriggerEventSource', 'Function', 'Actions', 'PublishStatus', 'CreatedTime', 'LastUpdatedTime', 'LastUpdatedBy'],
                  members: {
                    Name: {},
                    RuleId: {},
                    RuleArn: {},
                    TriggerEventSource: {
                      shape: 'S7c'
                    },
                    Function: {},
                    Actions: {
                      shape: 'S7f'
                    },
                    PublishStatus: {},
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedBy: {},
                    Tags: {
                      shape: 'S2n'
                    }
                  }
                }
              }
            }
          },
          DescribeSecurityProfile: {
            http: {
              method: 'GET',
              requestUri: '/security-profiles/{InstanceId}/{SecurityProfileId}'
            },
            input: {
              type: 'structure',
              required: ['SecurityProfileId', 'InstanceId'],
              members: {
                SecurityProfileId: {
                  location: 'uri',
                  locationName: 'SecurityProfileId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SecurityProfile: {
                  type: 'structure',
                  members: {
                    Id: {},
                    OrganizationResourceId: {},
                    Arn: {},
                    SecurityProfileName: {},
                    Description: {},
                    Tags: {
                      shape: 'S2n'
                    },
                    AllowedAccessControlTags: {
                      shape: 'S8m'
                    },
                    TagRestrictedResources: {
                      shape: 'S8p'
                    },
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    LastModifiedRegion: {},
                    HierarchyRestrictedResources: {
                      shape: 'S8w'
                    },
                    AllowedAccessControlHierarchyGroupId: {}
                  }
                }
              }
            }
          },
          DescribeTrafficDistributionGroup: {
            http: {
              method: 'GET',
              requestUri: '/traffic-distribution-group/{TrafficDistributionGroupId}'
            },
            input: {
              type: 'structure',
              required: ['TrafficDistributionGroupId'],
              members: {
                TrafficDistributionGroupId: {
                  location: 'uri',
                  locationName: 'TrafficDistributionGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TrafficDistributionGroup: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Arn: {},
                    Name: {},
                    Description: {},
                    InstanceArn: {},
                    Status: {},
                    Tags: {
                      shape: 'S2n'
                    },
                    IsDefault: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          DescribeUser: {
            http: {
              method: 'GET',
              requestUri: '/users/{InstanceId}/{UserId}'
            },
            input: {
              type: 'structure',
              required: ['UserId', 'InstanceId'],
              members: {
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Arn: {},
                    Username: {},
                    IdentityInfo: {
                      shape: 'Sa5'
                    },
                    PhoneConfig: {
                      shape: 'Sa9'
                    },
                    DirectoryUserId: {},
                    SecurityProfileIds: {
                      shape: 'Sae'
                    },
                    RoutingProfileId: {},
                    HierarchyGroupId: {},
                    Tags: {
                      shape: 'S2n'
                    },
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    LastModifiedRegion: {}
                  }
                }
              }
            }
          },
          DescribeUserHierarchyGroup: {
            http: {
              method: 'GET',
              requestUri: '/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}'
            },
            input: {
              type: 'structure',
              required: ['HierarchyGroupId', 'InstanceId'],
              members: {
                HierarchyGroupId: {
                  location: 'uri',
                  locationName: 'HierarchyGroupId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HierarchyGroup: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Arn: {},
                    Name: {},
                    LevelId: {},
                    HierarchyPath: {
                      type: 'structure',
                      members: {
                        LevelOne: {
                          shape: 'Sgf'
                        },
                        LevelTwo: {
                          shape: 'Sgf'
                        },
                        LevelThree: {
                          shape: 'Sgf'
                        },
                        LevelFour: {
                          shape: 'Sgf'
                        },
                        LevelFive: {
                          shape: 'Sgf'
                        }
                      }
                    },
                    Tags: {
                      shape: 'S2n'
                    },
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    LastModifiedRegion: {}
                  }
                }
              }
            }
          },
          DescribeUserHierarchyStructure: {
            http: {
              method: 'GET',
              requestUri: '/user-hierarchy-structure/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HierarchyStructure: {
                  type: 'structure',
                  members: {
                    LevelOne: {
                      shape: 'Sgj'
                    },
                    LevelTwo: {
                      shape: 'Sgj'
                    },
                    LevelThree: {
                      shape: 'Sgj'
                    },
                    LevelFour: {
                      shape: 'Sgj'
                    },
                    LevelFive: {
                      shape: 'Sgj'
                    }
                  }
                }
              }
            }
          },
          DescribeView: {
            http: {
              method: 'GET',
              requestUri: '/views/{InstanceId}/{ViewId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ViewId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ViewId: {
                  location: 'uri',
                  locationName: 'ViewId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                View: {
                  shape: 'Sau'
                }
              }
            }
          },
          DescribeVocabulary: {
            http: {
              method: 'GET',
              requestUri: '/vocabulary/{InstanceId}/{VocabularyId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'VocabularyId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                VocabularyId: {
                  location: 'uri',
                  locationName: 'VocabularyId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Vocabulary'],
              members: {
                Vocabulary: {
                  type: 'structure',
                  required: ['Name', 'Id', 'Arn', 'LanguageCode', 'State', 'LastModifiedTime'],
                  members: {
                    Name: {},
                    Id: {},
                    Arn: {},
                    LanguageCode: {},
                    State: {},
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    FailureReason: {},
                    Content: {},
                    Tags: {
                      shape: 'S2n'
                    }
                  }
                }
              }
            }
          },
          DisassociateAnalyticsDataSet: {
            http: {
              requestUri: '/analytics-data/instance/{InstanceId}/association'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'DataSetId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                DataSetId: {},
                TargetAccountId: {}
              }
            }
          },
          DisassociateApprovedOrigin: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}/approved-origin'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Origin'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Origin: {
                  location: 'querystring',
                  locationName: 'origin'
                }
              }
            }
          },
          DisassociateBot: {
            http: {
              requestUri: '/instance/{InstanceId}/bot'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                LexBot: {
                  shape: 'Sf'
                },
                LexV2Bot: {
                  shape: 'Si'
                }
              }
            }
          },
          DisassociateFlow: {
            http: {
              method: 'DELETE',
              requestUri: '/flow-associations/{InstanceId}/{ResourceId}/{ResourceType}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ResourceId', 'ResourceType'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                ResourceType: {
                  location: 'uri',
                  locationName: 'ResourceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateInstanceStorageConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}/storage-config/{AssociationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'AssociationId', 'ResourceType'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AssociationId: {
                  location: 'uri',
                  locationName: 'AssociationId'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                }
              }
            }
          },
          DisassociateLambdaFunction: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}/lambda-function'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'FunctionArn'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                FunctionArn: {
                  location: 'querystring',
                  locationName: 'functionArn'
                }
              }
            }
          },
          DisassociateLexBot: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}/lex-bot'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'BotName', 'LexRegion'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                BotName: {
                  location: 'querystring',
                  locationName: 'botName'
                },
                LexRegion: {
                  location: 'querystring',
                  locationName: 'lexRegion'
                }
              }
            }
          },
          DisassociatePhoneNumberContactFlow: {
            http: {
              method: 'DELETE',
              requestUri: '/phone-number/{PhoneNumberId}/contact-flow'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId', 'InstanceId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'PhoneNumberId'
                },
                InstanceId: {
                  location: 'querystring',
                  locationName: 'instanceId'
                }
              }
            }
          },
          DisassociateQueueQuickConnects: {
            http: {
              requestUri: '/queues/{InstanceId}/{QueueId}/disassociate-quick-connects'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId', 'QuickConnectIds'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                },
                QuickConnectIds: {
                  shape: 'S1f'
                }
              }
            }
          },
          DisassociateRoutingProfileQueues: {
            http: {
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId', 'QueueReferences'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                },
                QueueReferences: {
                  type: 'list',
                  member: {
                    shape: 'S1l'
                  }
                }
              }
            }
          },
          DisassociateSecurityKey: {
            http: {
              method: 'DELETE',
              requestUri: '/instance/{InstanceId}/security-key/{AssociationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'AssociationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AssociationId: {
                  location: 'uri',
                  locationName: 'AssociationId'
                }
              }
            }
          },
          DisassociateTrafficDistributionGroupUser: {
            http: {
              method: 'DELETE',
              requestUri: '/traffic-distribution-group/{TrafficDistributionGroupId}/user'
            },
            input: {
              type: 'structure',
              required: ['TrafficDistributionGroupId', 'UserId', 'InstanceId'],
              members: {
                TrafficDistributionGroupId: {
                  location: 'uri',
                  locationName: 'TrafficDistributionGroupId'
                },
                UserId: {
                  location: 'querystring',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'querystring',
                  locationName: 'InstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateUserProficiencies: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/disassociate-proficiencies'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'UserId', 'UserProficiencies'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                UserProficiencies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AttributeName', 'AttributeValue'],
                    members: {
                      AttributeName: {},
                      AttributeValue: {}
                    }
                  }
                }
              }
            }
          },
          DismissUserContact: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/contact'
            },
            input: {
              type: 'structure',
              required: ['UserId', 'InstanceId', 'ContactId'],
              members: {
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAttachedFile: {
            http: {
              method: 'GET',
              requestUri: '/attached-files/{InstanceId}/{FileId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'FileId', 'AssociatedResourceArn'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                FileId: {
                  location: 'uri',
                  locationName: 'FileId'
                },
                UrlExpiryInSeconds: {
                  location: 'querystring',
                  locationName: 'urlExpiryInSeconds',
                  type: 'integer'
                },
                AssociatedResourceArn: {
                  location: 'querystring',
                  locationName: 'associatedResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FileSizeInBytes'],
              members: {
                FileArn: {},
                FileId: {},
                CreationTime: {},
                FileStatus: {},
                FileName: {},
                FileSizeInBytes: {
                  type: 'long'
                },
                AssociatedResourceArn: {},
                FileUseCaseType: {},
                CreatedBy: {
                  shape: 'S2l'
                },
                DownloadUrlMetadata: {
                  type: 'structure',
                  members: {
                    Url: {},
                    UrlExpiry: {}
                  }
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            }
          },
          GetContactAttributes: {
            http: {
              method: 'GET',
              requestUri: '/contact/attributes/{InstanceId}/{InitialContactId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'InitialContactId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                InitialContactId: {
                  location: 'uri',
                  locationName: 'InitialContactId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S38'
                }
              }
            }
          },
          GetCurrentMetricData: {
            http: {
              requestUri: '/metrics/current/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Filters', 'CurrentMetrics'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Filters: {
                  shape: 'Shk'
                },
                Groupings: {
                  shape: 'Shq'
                },
                CurrentMetrics: {
                  type: 'list',
                  member: {
                    shape: 'Sht'
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortCriteria: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SortByMetric: {},
                      SortOrder: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MetricResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Dimensions: {
                        shape: 'Si4'
                      },
                      Collections: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Metric: {
                              shape: 'Sht'
                            },
                            Value: {
                              type: 'double'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                DataSnapshotTime: {
                  type: 'timestamp'
                },
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          GetCurrentUserData: {
            http: {
              requestUri: '/metrics/userdata/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Filters'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    Queues: {
                      shape: 'Shl'
                    },
                    ContactFilter: {
                      type: 'structure',
                      members: {
                        ContactStates: {
                          type: 'list',
                          member: {}
                        }
                      }
                    },
                    RoutingProfiles: {
                      shape: 'Shn'
                    },
                    Agents: {
                      type: 'list',
                      member: {}
                    },
                    UserHierarchyGroups: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                UserDataList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      User: {
                        type: 'structure',
                        members: {
                          Id: {},
                          Arn: {}
                        }
                      },
                      RoutingProfile: {
                        shape: 'Si6'
                      },
                      HierarchyPath: {
                        type: 'structure',
                        members: {
                          LevelOne: {
                            shape: 'Sin'
                          },
                          LevelTwo: {
                            shape: 'Sin'
                          },
                          LevelThree: {
                            shape: 'Sin'
                          },
                          LevelFour: {
                            shape: 'Sin'
                          },
                          LevelFive: {
                            shape: 'Sin'
                          }
                        }
                      },
                      Status: {
                        type: 'structure',
                        members: {
                          StatusStartTimestamp: {
                            type: 'timestamp'
                          },
                          StatusArn: {},
                          StatusName: {}
                        }
                      },
                      AvailableSlotsByChannel: {
                        shape: 'Sip'
                      },
                      MaxSlotsByChannel: {
                        shape: 'Sip'
                      },
                      ActiveSlotsByChannel: {
                        shape: 'Sip'
                      },
                      Contacts: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ContactId: {},
                            Channel: {},
                            InitiationMethod: {},
                            AgentContactState: {},
                            StateStartTimestamp: {
                              type: 'timestamp'
                            },
                            ConnectedToAgentTimestamp: {
                              type: 'timestamp'
                            },
                            Queue: {
                              shape: 'Si5'
                            }
                          }
                        }
                      },
                      NextStatus: {}
                    }
                  }
                },
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          GetFederationToken: {
            http: {
              method: 'GET',
              requestUri: '/user/federate/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Credentials: {
                  type: 'structure',
                  members: {
                    AccessToken: {
                      shape: 'Siw'
                    },
                    AccessTokenExpiration: {
                      type: 'timestamp'
                    },
                    RefreshToken: {
                      shape: 'Siw'
                    },
                    RefreshTokenExpiration: {
                      type: 'timestamp'
                    }
                  },
                  sensitive: true
                },
                SignInUrl: {},
                UserArn: {},
                UserId: {}
              }
            }
          },
          GetFlowAssociation: {
            http: {
              method: 'GET',
              requestUri: '/flow-associations/{InstanceId}/{ResourceId}/{ResourceType}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ResourceId', 'ResourceType'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                ResourceType: {
                  location: 'uri',
                  locationName: 'ResourceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceId: {},
                FlowId: {},
                ResourceType: {}
              }
            }
          },
          GetMetricData: {
            http: {
              requestUri: '/metrics/historical/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'StartTime', 'EndTime', 'Filters', 'HistoricalMetrics'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Filters: {
                  shape: 'Shk'
                },
                Groupings: {
                  shape: 'Shq'
                },
                HistoricalMetrics: {
                  type: 'list',
                  member: {
                    shape: 'Sj1'
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MetricResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Dimensions: {
                        shape: 'Si4'
                      },
                      Collections: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Metric: {
                              shape: 'Sj1'
                            },
                            Value: {
                              type: 'double'
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
          GetMetricDataV2: {
            http: {
              requestUri: '/metrics/data'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'StartTime', 'EndTime', 'Filters', 'Metrics'],
              members: {
                ResourceArn: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Interval: {
                  type: 'structure',
                  members: {
                    TimeZone: {},
                    IntervalPeriod: {}
                  }
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FilterKey: {},
                      FilterValues: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                Groupings: {
                  type: 'list',
                  member: {}
                },
                Metrics: {
                  type: 'list',
                  member: {
                    shape: 'Sjm'
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MetricResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Dimensions: {
                        type: 'map',
                        key: {},
                        value: {}
                      },
                      MetricInterval: {
                        type: 'structure',
                        members: {
                          Interval: {},
                          StartTime: {
                            type: 'timestamp'
                          },
                          EndTime: {
                            type: 'timestamp'
                          }
                        }
                      },
                      Collections: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Metric: {
                              shape: 'Sjm'
                            },
                            Value: {
                              type: 'double'
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
          GetPromptFile: {
            http: {
              method: 'GET',
              requestUri: '/prompts/{InstanceId}/{PromptId}/file'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'PromptId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                PromptId: {
                  location: 'uri',
                  locationName: 'PromptId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PromptPresignedUrl: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedRegion: {}
              }
            }
          },
          GetTaskTemplate: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/task/template/{TaskTemplateId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'TaskTemplateId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                TaskTemplateId: {
                  location: 'uri',
                  locationName: 'TaskTemplateId'
                },
                SnapshotVersion: {
                  location: 'querystring',
                  locationName: 'snapshotVersion'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Id', 'Arn', 'Name'],
              members: {
                InstanceId: {},
                Id: {},
                Arn: {},
                Name: {},
                Description: {},
                ContactFlowId: {},
                Constraints: {
                  shape: 'S94'
                },
                Defaults: {
                  shape: 'S9d'
                },
                Fields: {
                  shape: 'S9i'
                },
                Status: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                CreatedTime: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            }
          },
          GetTrafficDistribution: {
            http: {
              method: 'GET',
              requestUri: '/traffic-distribution/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TelephonyConfig: {
                  shape: 'Skb'
                },
                Id: {},
                Arn: {},
                SignInConfig: {
                  shape: 'Skg'
                },
                AgentConfig: {
                  shape: 'Skj'
                }
              }
            }
          },
          ImportPhoneNumber: {
            http: {
              requestUri: '/phone-number/import'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'SourcePhoneNumberArn'],
              members: {
                InstanceId: {},
                SourcePhoneNumberArn: {},
                PhoneNumberDescription: {},
                Tags: {
                  shape: 'S2n'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberId: {},
                PhoneNumberArn: {}
              }
            }
          },
          ListAgentStatuses: {
            http: {
              method: 'GET',
              requestUri: '/agent-status/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                AgentStatusTypes: {
                  location: 'querystring',
                  locationName: 'AgentStatusTypes',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                AgentStatusSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      Type: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedRegion: {}
                    }
                  }
                }
              }
            }
          },
          ListAnalyticsDataAssociations: {
            http: {
              method: 'GET',
              requestUri: '/analytics-data/instance/{InstanceId}/association'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                DataSetId: {
                  location: 'querystring',
                  locationName: 'DataSetId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  shape: 'S25'
                },
                NextToken: {}
              }
            }
          },
          ListApprovedOrigins: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/approved-origins'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Origins: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListBots: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/bots'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'LexVersion'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                LexVersion: {
                  location: 'querystring',
                  locationName: 'lexVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LexBots: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LexBot: {
                        shape: 'Sf'
                      },
                      LexV2Bot: {
                        shape: 'Si'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListContactEvaluations: {
            http: {
              method: 'GET',
              requestUri: '/contact-evaluations/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {
                  location: 'querystring',
                  locationName: 'contactId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationSummaryList'],
              members: {
                EvaluationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EvaluationId', 'EvaluationArn', 'EvaluationFormTitle', 'EvaluationFormId', 'Status', 'EvaluatorArn', 'CreatedTime', 'LastModifiedTime'],
                    members: {
                      EvaluationId: {},
                      EvaluationArn: {},
                      EvaluationFormTitle: {},
                      EvaluationFormId: {},
                      Status: {},
                      EvaluatorArn: {},
                      Score: {
                        shape: 'Sdy'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListContactFlowModules: {
            http: {
              method: 'GET',
              requestUri: '/contact-flow-modules-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                ContactFlowModuleState: {
                  location: 'querystring',
                  locationName: 'state'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactFlowModulesSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      State: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListContactFlows: {
            http: {
              method: 'GET',
              requestUri: '/contact-flows-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowTypes: {
                  location: 'querystring',
                  locationName: 'contactFlowTypes',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactFlowSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      ContactFlowType: {},
                      ContactFlowState: {},
                      ContactFlowStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListContactReferences: {
            http: {
              method: 'GET',
              requestUri: '/contact/references/{InstanceId}/{ContactId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'ReferenceTypes'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {
                  location: 'uri',
                  locationName: 'ContactId'
                },
                ReferenceTypes: {
                  location: 'querystring',
                  locationName: 'referenceTypes',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReferenceSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Url: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Value: {}
                        }
                      },
                      Attachment: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Value: {},
                          Status: {}
                        }
                      },
                      String: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Value: {}
                        }
                      },
                      Number: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Value: {}
                        }
                      },
                      Date: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Value: {}
                        }
                      },
                      Email: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Value: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDefaultVocabularies: {
            http: {
              requestUri: '/default-vocabulary-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                LanguageCode: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DefaultVocabularyList'],
              members: {
                DefaultVocabularyList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['InstanceId', 'LanguageCode', 'VocabularyId', 'VocabularyName'],
                    members: {
                      InstanceId: {},
                      LanguageCode: {},
                      VocabularyId: {},
                      VocabularyName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEvaluationFormVersions: {
            http: {
              method: 'GET',
              requestUri: '/evaluation-forms/{InstanceId}/{EvaluationFormId}/versions'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationFormId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationFormId: {
                  location: 'uri',
                  locationName: 'EvaluationFormId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationFormVersionSummaryList'],
              members: {
                EvaluationFormVersionSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EvaluationFormArn', 'EvaluationFormId', 'EvaluationFormVersion', 'Locked', 'Status', 'CreatedTime', 'CreatedBy', 'LastModifiedTime', 'LastModifiedBy'],
                    members: {
                      EvaluationFormArn: {},
                      EvaluationFormId: {},
                      EvaluationFormVersion: {
                        type: 'integer'
                      },
                      Locked: {
                        type: 'boolean'
                      },
                      Status: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      CreatedBy: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedBy: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEvaluationForms: {
            http: {
              method: 'GET',
              requestUri: '/evaluation-forms/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationFormSummaryList'],
              members: {
                EvaluationFormSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EvaluationFormId', 'EvaluationFormArn', 'Title', 'CreatedTime', 'CreatedBy', 'LastModifiedTime', 'LastModifiedBy', 'LatestVersion'],
                    members: {
                      EvaluationFormId: {},
                      EvaluationFormArn: {},
                      Title: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      CreatedBy: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedBy: {},
                      LastActivatedTime: {
                        type: 'timestamp'
                      },
                      LastActivatedBy: {},
                      LatestVersion: {
                        type: 'integer'
                      },
                      ActiveVersion: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFlowAssociations: {
            http: {
              method: 'GET',
              requestUri: '/flow-associations-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'ResourceType'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FlowAssociationSummaryList: {
                  shape: 'S2y'
                },
                NextToken: {}
              }
            }
          },
          ListHoursOfOperations: {
            http: {
              method: 'GET',
              requestUri: '/hours-of-operations-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HoursOfOperationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInstanceAttributes: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/attributes'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  type: 'list',
                  member: {
                    shape: 'Sf1'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInstanceStorageConfigs: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/storage-configs'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ResourceType'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageConfigs: {
                  type: 'list',
                  member: {
                    shape: 'St'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInstances: {
            http: {
              method: 'GET',
              requestUri: '/instance'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      IdentityManagementType: {},
                      InstanceAlias: {
                        shape: 'S5q'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      ServiceRole: {},
                      InstanceStatus: {},
                      InboundCallsEnabled: {
                        type: 'boolean'
                      },
                      OutboundCallsEnabled: {
                        type: 'boolean'
                      },
                      InstanceAccessUrl: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIntegrationAssociations: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/integration-associations'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                IntegrationType: {
                  location: 'querystring',
                  locationName: 'integrationType'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                IntegrationArn: {
                  location: 'querystring',
                  locationName: 'integrationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IntegrationAssociationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IntegrationAssociationId: {},
                      IntegrationAssociationArn: {},
                      InstanceId: {},
                      IntegrationType: {},
                      IntegrationArn: {},
                      SourceApplicationUrl: {},
                      SourceApplicationName: {},
                      SourceType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLambdaFunctions: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/lambda-functions'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LambdaFunctions: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListLexBots: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/lex-bots'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LexBots: {
                  type: 'list',
                  member: {
                    shape: 'Sf'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPhoneNumbers: {
            http: {
              method: 'GET',
              requestUri: '/phone-numbers-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                PhoneNumberTypes: {
                  shape: 'Smz',
                  location: 'querystring',
                  locationName: 'phoneNumberTypes'
                },
                PhoneNumberCountryCodes: {
                  shape: 'Sn0',
                  location: 'querystring',
                  locationName: 'phoneNumberCountryCodes'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      PhoneNumber: {},
                      PhoneNumberType: {},
                      PhoneNumberCountryCode: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPhoneNumbersV2: {
            http: {
              requestUri: '/phone-number/list'
            },
            input: {
              type: 'structure',
              members: {
                TargetArn: {},
                InstanceId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PhoneNumberCountryCodes: {
                  shape: 'Sn0'
                },
                PhoneNumberTypes: {
                  shape: 'Smz'
                },
                PhoneNumberPrefix: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ListPhoneNumbersSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PhoneNumberId: {},
                      PhoneNumberArn: {},
                      PhoneNumber: {},
                      PhoneNumberCountryCode: {},
                      PhoneNumberType: {},
                      TargetArn: {},
                      InstanceId: {},
                      PhoneNumberDescription: {},
                      SourcePhoneNumberArn: {}
                    }
                  }
                }
              }
            }
          },
          ListPredefinedAttributes: {
            http: {
              method: 'GET',
              requestUri: '/predefined-attributes/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                PredefinedAttributeSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedRegion: {}
                    }
                  }
                }
              }
            }
          },
          ListPrompts: {
            http: {
              method: 'GET',
              requestUri: '/prompts-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PromptSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListQueueQuickConnects: {
            http: {
              method: 'GET',
              requestUri: '/queues/{InstanceId}/{QueueId}/quick-connects'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                QuickConnectSummaryList: {
                  shape: 'Snl'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedRegion: {}
              }
            }
          },
          ListQueues: {
            http: {
              method: 'GET',
              requestUri: '/queues-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueTypes: {
                  location: 'querystring',
                  locationName: 'queueTypes',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueueSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      QueueType: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListQuickConnects: {
            http: {
              method: 'GET',
              requestUri: '/quick-connects/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                QuickConnectTypes: {
                  location: 'querystring',
                  locationName: 'QuickConnectTypes',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QuickConnectSummaryList: {
                  shape: 'Snl'
                },
                NextToken: {}
              }
            }
          },
          ListRealtimeContactAnalysisSegmentsV2: {
            http: {
              requestUri: '/contact/list-real-time-analysis-segments-v2/{InstanceId}/{ContactId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'OutputType', 'SegmentTypes'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {
                  location: 'uri',
                  locationName: 'ContactId'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                OutputType: {},
                SegmentTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Channel', 'Status', 'Segments'],
              members: {
                Channel: {},
                Status: {},
                Segments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Transcript: {
                        type: 'structure',
                        required: ['Id', 'ParticipantId', 'ParticipantRole', 'Content', 'Time'],
                        members: {
                          Id: {},
                          ParticipantId: {},
                          ParticipantRole: {},
                          DisplayName: {},
                          Content: {},
                          ContentType: {},
                          Time: {
                            shape: 'Soa'
                          },
                          Redaction: {
                            type: 'structure',
                            members: {
                              CharacterOffsets: {
                                type: 'list',
                                member: {
                                  shape: 'Soe'
                                }
                              }
                            }
                          },
                          Sentiment: {}
                        }
                      },
                      Categories: {
                        type: 'structure',
                        required: ['MatchedDetails'],
                        members: {
                          MatchedDetails: {
                            type: 'map',
                            key: {},
                            value: {
                              type: 'structure',
                              required: ['PointsOfInterest'],
                              members: {
                                PointsOfInterest: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      TranscriptItems: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          required: ['Id'],
                                          members: {
                                            Id: {},
                                            CharacterOffsets: {
                                              shape: 'Soe'
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
                      Issues: {
                        type: 'structure',
                        required: ['IssuesDetected'],
                        members: {
                          IssuesDetected: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['TranscriptItems'],
                              members: {
                                TranscriptItems: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    required: ['Id'],
                                    members: {
                                      Content: {},
                                      Id: {},
                                      CharacterOffsets: {
                                        shape: 'Soe'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      Event: {
                        type: 'structure',
                        required: ['Id', 'EventType', 'Time'],
                        members: {
                          Id: {},
                          ParticipantId: {},
                          ParticipantRole: {},
                          DisplayName: {},
                          EventType: {},
                          Time: {
                            shape: 'Soa'
                          }
                        }
                      },
                      Attachments: {
                        type: 'structure',
                        required: ['Id', 'ParticipantId', 'ParticipantRole', 'Attachments', 'Time'],
                        members: {
                          Id: {},
                          ParticipantId: {},
                          ParticipantRole: {},
                          DisplayName: {},
                          Attachments: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['AttachmentName', 'AttachmentId'],
                              members: {
                                AttachmentName: {},
                                ContentType: {},
                                AttachmentId: {},
                                Status: {}
                              }
                            }
                          },
                          Time: {
                            shape: 'Soa'
                          }
                        }
                      }
                    },
                    union: true
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRoutingProfileQueues: {
            http: {
              method: 'GET',
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}/queues'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                RoutingProfileQueueConfigSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['QueueId', 'QueueArn', 'QueueName', 'Priority', 'Delay', 'Channel'],
                    members: {
                      QueueId: {},
                      QueueArn: {},
                      QueueName: {},
                      Priority: {
                        type: 'integer'
                      },
                      Delay: {
                        type: 'integer'
                      },
                      Channel: {}
                    }
                  }
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedRegion: {}
              }
            }
          },
          ListRoutingProfiles: {
            http: {
              method: 'GET',
              requestUri: '/routing-profiles-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RoutingProfileSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRules: {
            http: {
              method: 'GET',
              requestUri: '/rules/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                PublishStatus: {
                  location: 'querystring',
                  locationName: 'publishStatus'
                },
                EventSourceName: {
                  location: 'querystring',
                  locationName: 'eventSourceName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RuleSummaryList'],
              members: {
                RuleSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'RuleId', 'RuleArn', 'EventSourceName', 'PublishStatus', 'ActionSummaries', 'CreatedTime', 'LastUpdatedTime'],
                    members: {
                      Name: {},
                      RuleId: {},
                      RuleArn: {},
                      EventSourceName: {},
                      PublishStatus: {},
                      ActionSummaries: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['ActionType'],
                          members: {
                            ActionType: {}
                          }
                        }
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSecurityKeys: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/security-keys'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SecurityKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssociationId: {},
                      Key: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSecurityProfileApplications: {
            http: {
              method: 'GET',
              requestUri: '/security-profiles-applications/{InstanceId}/{SecurityProfileId}'
            },
            input: {
              type: 'structure',
              required: ['SecurityProfileId', 'InstanceId'],
              members: {
                SecurityProfileId: {
                  location: 'uri',
                  locationName: 'SecurityProfileId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Applications: {
                  shape: 'S8r'
                },
                NextToken: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedRegion: {}
              }
            }
          },
          ListSecurityProfilePermissions: {
            http: {
              method: 'GET',
              requestUri: '/security-profiles-permissions/{InstanceId}/{SecurityProfileId}'
            },
            input: {
              type: 'structure',
              required: ['SecurityProfileId', 'InstanceId'],
              members: {
                SecurityProfileId: {
                  location: 'uri',
                  locationName: 'SecurityProfileId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Permissions: {
                  shape: 'S8k'
                },
                NextToken: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedRegion: {}
              }
            }
          },
          ListSecurityProfiles: {
            http: {
              method: 'GET',
              requestUri: '/security-profiles-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SecurityProfileSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'S2n'
                }
              }
            }
          },
          ListTaskTemplates: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/task/template'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                Name: {
                  location: 'querystring',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskTemplates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      Description: {},
                      Status: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTrafficDistributionGroupUsers: {
            http: {
              method: 'GET',
              requestUri: '/traffic-distribution-group/{TrafficDistributionGroupId}/user'
            },
            input: {
              type: 'structure',
              required: ['TrafficDistributionGroupId'],
              members: {
                TrafficDistributionGroupId: {
                  location: 'uri',
                  locationName: 'TrafficDistributionGroupId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TrafficDistributionGroupUserSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UserId: {}
                    }
                  }
                }
              }
            }
          },
          ListTrafficDistributionGroups: {
            http: {
              method: 'GET',
              requestUri: '/traffic-distribution-groups'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                InstanceId: {
                  location: 'querystring',
                  locationName: 'instanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TrafficDistributionGroupSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      InstanceArn: {},
                      Status: {},
                      IsDefault: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          ListUseCases: {
            http: {
              method: 'GET',
              requestUri: '/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'IntegrationAssociationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                IntegrationAssociationId: {
                  location: 'uri',
                  locationName: 'IntegrationAssociationId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UseCaseSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UseCaseId: {},
                      UseCaseArn: {},
                      UseCaseType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListUserHierarchyGroups: {
            http: {
              method: 'GET',
              requestUri: '/user-hierarchy-groups-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserHierarchyGroupSummaryList: {
                  type: 'list',
                  member: {
                    shape: 'Sgf'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListUserProficiencies: {
            http: {
              method: 'GET',
              requestUri: '/users/{InstanceId}/{UserId}/proficiencies'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'UserId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                UserProficiencyList: {
                  shape: 'S1x'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedRegion: {}
              }
            }
          },
          ListUsers: {
            http: {
              method: 'GET',
              requestUri: '/users-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Username: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListViewVersions: {
            http: {
              method: 'GET',
              requestUri: '/views/{InstanceId}/{ViewId}/versions'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ViewId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ViewId: {
                  location: 'uri',
                  locationName: 'ViewId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ViewVersionSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Description: {},
                      Name: {
                        shape: 'Sas'
                      },
                      Type: {},
                      Version: {
                        type: 'integer'
                      },
                      VersionDescription: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListViews: {
            http: {
              method: 'GET',
              requestUri: '/views/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ViewsSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {
                        shape: 'Sas'
                      },
                      Type: {},
                      Status: {},
                      Description: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          MonitorContact: {
            http: {
              requestUri: '/contact/monitor'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'UserId'],
              members: {
                InstanceId: {},
                ContactId: {},
                UserId: {},
                AllowedMonitorCapabilities: {
                  type: 'list',
                  member: {}
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactId: {},
                ContactArn: {}
              }
            }
          },
          PauseContact: {
            http: {
              requestUri: '/contact/pause'
            },
            input: {
              type: 'structure',
              required: ['ContactId', 'InstanceId'],
              members: {
                ContactId: {},
                InstanceId: {},
                ContactFlowId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutUserStatus: {
            http: {
              method: 'PUT',
              requestUri: '/users/{InstanceId}/{UserId}/status'
            },
            input: {
              type: 'structure',
              required: ['UserId', 'InstanceId', 'AgentStatusId'],
              members: {
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AgentStatusId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ReleasePhoneNumber: {
            http: {
              method: 'DELETE',
              requestUri: '/phone-number/{PhoneNumberId}'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'PhoneNumberId'
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            }
          },
          ReplicateInstance: {
            http: {
              requestUri: '/instance/{InstanceId}/replicate'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ReplicaRegion', 'ReplicaAlias'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ReplicaRegion: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ReplicaAlias: {
                  shape: 'S5q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          ResumeContact: {
            http: {
              requestUri: '/contact/resume'
            },
            input: {
              type: 'structure',
              required: ['ContactId', 'InstanceId'],
              members: {
                ContactId: {},
                InstanceId: {},
                ContactFlowId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ResumeContactRecording: {
            http: {
              requestUri: '/contact/resume-recording'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'InitialContactId'],
              members: {
                InstanceId: {},
                ContactId: {},
                InitialContactId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SearchAvailablePhoneNumbers: {
            http: {
              requestUri: '/phone-number/search-available'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberCountryCode', 'PhoneNumberType'],
              members: {
                TargetArn: {},
                InstanceId: {},
                PhoneNumberCountryCode: {},
                PhoneNumberType: {},
                PhoneNumberPrefix: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                AvailableNumbersList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PhoneNumber: {},
                      PhoneNumberCountryCode: {},
                      PhoneNumberType: {}
                    }
                  }
                }
              }
            }
          },
          SearchContactFlowModules: {
            http: {
              requestUri: '/search-contact-flow-modules'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    }
                  }
                },
                SearchCriteria: {
                  shape: 'Srl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactFlowModules: {
                  type: 'list',
                  member: {
                    shape: 'Seh'
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchContactFlows: {
            http: {
              requestUri: '/search-contact-flows'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    }
                  }
                },
                SearchCriteria: {
                  shape: 'Srt'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactFlows: {
                  type: 'list',
                  member: {
                    shape: 'Sed'
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchContacts: {
            http: {
              requestUri: '/search-contacts'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'TimeRange'],
              members: {
                InstanceId: {},
                TimeRange: {
                  type: 'structure',
                  required: ['Type', 'StartTime', 'EndTime'],
                  members: {
                    Type: {},
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    }
                  }
                },
                SearchCriteria: {
                  type: 'structure',
                  members: {
                    AgentIds: {
                      type: 'list',
                      member: {}
                    },
                    AgentHierarchyGroups: {
                      type: 'structure',
                      members: {
                        L1Ids: {
                          shape: 'Ss3'
                        },
                        L2Ids: {
                          shape: 'Ss3'
                        },
                        L3Ids: {
                          shape: 'Ss3'
                        },
                        L4Ids: {
                          shape: 'Ss3'
                        },
                        L5Ids: {
                          shape: 'Ss3'
                        }
                      }
                    },
                    Channels: {
                      type: 'list',
                      member: {}
                    },
                    ContactAnalysis: {
                      type: 'structure',
                      members: {
                        Transcript: {
                          type: 'structure',
                          required: ['Criteria'],
                          members: {
                            Criteria: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                required: ['ParticipantRole', 'SearchText', 'MatchType'],
                                members: {
                                  ParticipantRole: {},
                                  SearchText: {
                                    type: 'list',
                                    member: {
                                      type: 'string',
                                      sensitive: true
                                    }
                                  },
                                  MatchType: {}
                                }
                              }
                            },
                            MatchType: {}
                          }
                        }
                      }
                    },
                    InitiationMethods: {
                      type: 'list',
                      member: {}
                    },
                    QueueIds: {
                      type: 'list',
                      member: {}
                    },
                    SearchableContactAttributes: {
                      type: 'structure',
                      required: ['Criteria'],
                      members: {
                        Criteria: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['Key', 'Values'],
                            members: {
                              Key: {
                                type: 'string',
                                sensitive: true
                              },
                              Values: {
                                type: 'list',
                                member: {
                                  type: 'string',
                                  sensitive: true
                                }
                              }
                            }
                          }
                        },
                        MatchType: {}
                      }
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Sort: {
                  type: 'structure',
                  required: ['FieldName', 'Order'],
                  members: {
                    FieldName: {},
                    Order: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Contacts'],
              members: {
                Contacts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      InitialContactId: {},
                      PreviousContactId: {},
                      InitiationMethod: {},
                      Channel: {},
                      QueueInfo: {
                        type: 'structure',
                        members: {
                          Id: {},
                          EnqueueTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      },
                      AgentInfo: {
                        type: 'structure',
                        members: {
                          Id: {},
                          ConnectedToAgentTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      },
                      InitiationTimestamp: {
                        type: 'timestamp'
                      },
                      DisconnectTimestamp: {
                        type: 'timestamp'
                      },
                      ScheduledTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {},
                TotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchHoursOfOperations: {
            http: {
              requestUri: '/search-hours-of-operations'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    }
                  }
                },
                SearchCriteria: {
                  shape: 'Ssu'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HoursOfOperations: {
                  type: 'list',
                  member: {
                    shape: 'Ser'
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchPredefinedAttributes: {
            http: {
              requestUri: '/search-predefined-attributes'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchCriteria: {
                  shape: 'Ssz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PredefinedAttributes: {
                  type: 'list',
                  member: {
                    shape: 'Sff'
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchPrompts: {
            http: {
              requestUri: '/search-prompts'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    }
                  }
                },
                SearchCriteria: {
                  shape: 'St5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Prompts: {
                  type: 'list',
                  member: {
                    shape: 'Sfi'
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchQueues: {
            http: {
              requestUri: '/search-queues'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    }
                  }
                },
                SearchCriteria: {
                  shape: 'Stc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Queues: {
                  type: 'list',
                  member: {
                    shape: 'Sfl'
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchQuickConnects: {
            http: {
              requestUri: '/search-quick-connects'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    }
                  }
                },
                SearchCriteria: {
                  shape: 'Stj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QuickConnects: {
                  type: 'list',
                  member: {
                    shape: 'Sfp'
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchResourceTags: {
            http: {
              requestUri: '/search-resource-tags'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                ResourceTypes: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchCriteria: {
                  type: 'structure',
                  members: {
                    TagSearchCondition: {
                      type: 'structure',
                      members: {
                        tagKey: {},
                        tagValue: {},
                        tagKeyComparisonType: {},
                        tagValueComparisonType: {}
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      key: {},
                      value: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          SearchRoutingProfiles: {
            http: {
              requestUri: '/search-routing-profiles'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    }
                  }
                },
                SearchCriteria: {
                  shape: 'Sty'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RoutingProfiles: {
                  type: 'list',
                  member: {
                    shape: 'Sfs'
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchSecurityProfiles: {
            http: {
              requestUri: '/search-security-profiles'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchCriteria: {
                  shape: 'Su3'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SecurityProfiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      OrganizationResourceId: {},
                      Arn: {},
                      SecurityProfileName: {},
                      Description: {},
                      Tags: {
                        shape: 'S2n'
                      }
                    }
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchUsers: {
            http: {
              requestUri: '/search-users'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    TagFilter: {
                      shape: 'Srh'
                    },
                    UserAttributeFilter: {
                      type: 'structure',
                      members: {
                        OrConditions: {
                          type: 'list',
                          member: {
                            shape: 'Sud'
                          }
                        },
                        AndCondition: {
                          shape: 'Sud'
                        },
                        TagCondition: {
                          shape: 'Srk'
                        },
                        HierarchyGroupCondition: {
                          shape: 'Sue'
                        }
                      }
                    }
                  }
                },
                SearchCriteria: {
                  shape: 'Sug'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      DirectoryUserId: {},
                      HierarchyGroupId: {},
                      Id: {},
                      IdentityInfo: {
                        type: 'structure',
                        members: {
                          FirstName: {
                            shape: 'Sa6'
                          },
                          LastName: {
                            shape: 'Sa7'
                          }
                        }
                      },
                      PhoneConfig: {
                        shape: 'Sa9'
                      },
                      RoutingProfileId: {},
                      SecurityProfileIds: {
                        shape: 'Sae'
                      },
                      Tags: {
                        shape: 'S2n'
                      },
                      Username: {}
                    }
                  }
                },
                NextToken: {},
                ApproximateTotalCount: {
                  type: 'long'
                }
              }
            }
          },
          SearchVocabularies: {
            http: {
              requestUri: '/vocabulary-summary/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                State: {},
                NameStartsWith: {},
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VocabularySummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Id', 'Arn', 'LanguageCode', 'State', 'LastModifiedTime'],
                    members: {
                      Name: {},
                      Id: {},
                      Arn: {},
                      LanguageCode: {},
                      State: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      FailureReason: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          SendChatIntegrationEvent: {
            http: {
              requestUri: '/chat-integration-event'
            },
            input: {
              type: 'structure',
              required: ['SourceId', 'DestinationId', 'Event'],
              members: {
                SourceId: {},
                DestinationId: {},
                Subtype: {},
                Event: {
                  type: 'structure',
                  required: ['Type'],
                  members: {
                    Type: {},
                    ContentType: {},
                    Content: {}
                  }
                },
                NewSessionDetails: {
                  type: 'structure',
                  members: {
                    SupportedMessagingContentTypes: {
                      shape: 'Suz'
                    },
                    ParticipantDetails: {
                      shape: 'Sv1'
                    },
                    Attributes: {
                      shape: 'S38'
                    },
                    StreamingConfiguration: {
                      shape: 'Sv2'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InitialContactId: {},
                NewChatCreated: {
                  type: 'boolean'
                }
              }
            }
          },
          StartAttachedFileUpload: {
            http: {
              method: 'PUT',
              requestUri: '/attached-files/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'FileName', 'FileSizeInBytes', 'FileUseCaseType', 'AssociatedResourceArn'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                FileName: {},
                FileSizeInBytes: {
                  type: 'long'
                },
                UrlExpiryInSeconds: {
                  type: 'integer'
                },
                FileUseCaseType: {},
                AssociatedResourceArn: {
                  location: 'querystring',
                  locationName: 'associatedResourceArn'
                },
                CreatedBy: {
                  shape: 'S2l'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileArn: {},
                FileId: {},
                CreationTime: {},
                FileStatus: {},
                CreatedBy: {
                  shape: 'S2l'
                },
                UploadUrlMetadata: {
                  type: 'structure',
                  members: {
                    Url: {},
                    UrlExpiry: {},
                    HeadersToInclude: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            }
          },
          StartChatContact: {
            http: {
              method: 'PUT',
              requestUri: '/contact/chat'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowId', 'ParticipantDetails'],
              members: {
                InstanceId: {},
                ContactFlowId: {},
                Attributes: {
                  shape: 'S38'
                },
                ParticipantDetails: {
                  shape: 'Sv1'
                },
                InitialMessage: {
                  type: 'structure',
                  required: ['ContentType', 'Content'],
                  members: {
                    ContentType: {},
                    Content: {}
                  }
                },
                ClientToken: {
                  idempotencyToken: true
                },
                ChatDurationInMinutes: {
                  type: 'integer'
                },
                SupportedMessagingContentTypes: {
                  shape: 'Suz'
                },
                PersistentChat: {
                  type: 'structure',
                  members: {
                    RehydrationType: {},
                    SourceContactId: {}
                  }
                },
                RelatedContactId: {},
                SegmentAttributes: {
                  shape: 'Sdq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactId: {},
                ParticipantId: {},
                ParticipantToken: {},
                ContinuedFromContactId: {}
              }
            }
          },
          StartContactEvaluation: {
            http: {
              method: 'PUT',
              requestUri: '/contact-evaluations/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'EvaluationFormId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {},
                EvaluationFormId: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationId', 'EvaluationArn'],
              members: {
                EvaluationId: {},
                EvaluationArn: {}
              }
            },
            idempotent: true
          },
          StartContactRecording: {
            http: {
              requestUri: '/contact/start-recording'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'InitialContactId', 'VoiceRecordingConfiguration'],
              members: {
                InstanceId: {},
                ContactId: {},
                InitialContactId: {},
                VoiceRecordingConfiguration: {
                  type: 'structure',
                  members: {
                    VoiceRecordingTrack: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartContactStreaming: {
            http: {
              requestUri: '/contact/start-streaming'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'ChatStreamingConfiguration', 'ClientToken'],
              members: {
                InstanceId: {},
                ContactId: {},
                ChatStreamingConfiguration: {
                  shape: 'Sv2'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StreamingId'],
              members: {
                StreamingId: {}
              }
            }
          },
          StartOutboundVoiceContact: {
            http: {
              method: 'PUT',
              requestUri: '/contact/outbound-voice'
            },
            input: {
              type: 'structure',
              required: ['DestinationPhoneNumber', 'ContactFlowId', 'InstanceId'],
              members: {
                Name: {
                  shape: 'Scf'
                },
                Description: {
                  shape: 'Scg'
                },
                References: {
                  shape: 'S7l'
                },
                RelatedContactId: {},
                DestinationPhoneNumber: {},
                ContactFlowId: {},
                InstanceId: {},
                ClientToken: {
                  idempotencyToken: true
                },
                SourcePhoneNumber: {},
                QueueId: {},
                Attributes: {
                  shape: 'S38'
                },
                AnswerMachineDetectionConfig: {
                  type: 'structure',
                  members: {
                    EnableAnswerMachineDetection: {
                      type: 'boolean'
                    },
                    AwaitAnswerMachinePrompt: {
                      type: 'boolean'
                    }
                  }
                },
                CampaignId: {},
                TrafficType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactId: {}
              }
            }
          },
          StartTaskContact: {
            http: {
              method: 'PUT',
              requestUri: '/contact/task'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name'],
              members: {
                InstanceId: {},
                PreviousContactId: {},
                ContactFlowId: {},
                Attributes: {
                  shape: 'S38'
                },
                Name: {
                  shape: 'Scf'
                },
                References: {
                  shape: 'S7l'
                },
                Description: {
                  shape: 'Scg'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                ScheduledTime: {
                  type: 'timestamp'
                },
                TaskTemplateId: {},
                QuickConnectId: {},
                RelatedContactId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactId: {}
              }
            }
          },
          StartWebRTCContact: {
            http: {
              method: 'PUT',
              requestUri: '/contact/webrtc'
            },
            input: {
              type: 'structure',
              required: ['ContactFlowId', 'InstanceId', 'ParticipantDetails'],
              members: {
                Attributes: {
                  shape: 'S38'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                ContactFlowId: {},
                InstanceId: {},
                AllowedCapabilities: {
                  type: 'structure',
                  members: {
                    Customer: {
                      shape: 'Scs'
                    },
                    Agent: {
                      shape: 'Scs'
                    }
                  }
                },
                ParticipantDetails: {
                  shape: 'Sv1'
                },
                RelatedContactId: {},
                References: {
                  shape: 'S7l'
                },
                Description: {
                  shape: 'Scg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionData: {
                  type: 'structure',
                  members: {
                    Attendee: {
                      type: 'structure',
                      members: {
                        AttendeeId: {},
                        JoinToken: {
                          type: 'string',
                          sensitive: true
                        }
                      }
                    },
                    Meeting: {
                      type: 'structure',
                      members: {
                        MediaRegion: {},
                        MediaPlacement: {
                          type: 'structure',
                          members: {
                            AudioHostUrl: {},
                            AudioFallbackUrl: {},
                            SignalingUrl: {},
                            TurnControlUrl: {},
                            EventIngestionUrl: {}
                          }
                        },
                        MeetingFeatures: {
                          type: 'structure',
                          members: {
                            Audio: {
                              type: 'structure',
                              members: {
                                EchoReduction: {}
                              }
                            }
                          }
                        },
                        MeetingId: {}
                      }
                    }
                  }
                },
                ContactId: {},
                ParticipantId: {},
                ParticipantToken: {}
              }
            }
          },
          StopContact: {
            http: {
              requestUri: '/contact/stop'
            },
            input: {
              type: 'structure',
              required: ['ContactId', 'InstanceId'],
              members: {
                ContactId: {},
                InstanceId: {},
                DisconnectReason: {
                  type: 'structure',
                  members: {
                    Code: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopContactRecording: {
            http: {
              requestUri: '/contact/stop-recording'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'InitialContactId'],
              members: {
                InstanceId: {},
                ContactId: {},
                InitialContactId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopContactStreaming: {
            http: {
              requestUri: '/contact/stop-streaming'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'StreamingId'],
              members: {
                InstanceId: {},
                ContactId: {},
                StreamingId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SubmitContactEvaluation: {
            http: {
              requestUri: '/contact-evaluations/{InstanceId}/{EvaluationId}/submit'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationId: {
                  location: 'uri',
                  locationName: 'EvaluationId'
                },
                Answers: {
                  shape: 'Swj'
                },
                Notes: {
                  shape: 'Se5'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationId', 'EvaluationArn'],
              members: {
                EvaluationId: {},
                EvaluationArn: {}
              }
            }
          },
          SuspendContactRecording: {
            http: {
              requestUri: '/contact/suspend-recording'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'InitialContactId'],
              members: {
                InstanceId: {},
                ContactId: {},
                InitialContactId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagContact: {
            http: {
              requestUri: '/contact/tags'
            },
            input: {
              type: 'structure',
              required: ['ContactId', 'InstanceId', 'Tags'],
              members: {
                ContactId: {},
                InstanceId: {},
                Tags: {
                  shape: 'Scz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'S2n'
                }
              }
            }
          },
          TransferContact: {
            http: {
              requestUri: '/contact/transfer'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'ContactFlowId'],
              members: {
                InstanceId: {},
                ContactId: {},
                QueueId: {},
                UserId: {},
                ContactFlowId: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactId: {},
                ContactArn: {}
              }
            }
          },
          UntagContact: {
            http: {
              method: 'DELETE',
              requestUri: '/contact/tags/{InstanceId}/{ContactId}'
            },
            input: {
              type: 'structure',
              required: ['ContactId', 'InstanceId', 'TagKeys'],
              members: {
                ContactId: {
                  location: 'uri',
                  locationName: 'ContactId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'TagKeys',
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
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}'
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
            }
          },
          UpdateAgentStatus: {
            http: {
              requestUri: '/agent-status/{InstanceId}/{AgentStatusId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'AgentStatusId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AgentStatusId: {
                  location: 'uri',
                  locationName: 'AgentStatusId'
                },
                Name: {},
                Description: {},
                State: {},
                DisplayOrder: {
                  type: 'integer'
                },
                ResetOrderNumber: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateContact: {
            http: {
              requestUri: '/contacts/{InstanceId}/{ContactId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {
                  location: 'uri',
                  locationName: 'ContactId'
                },
                Name: {
                  shape: 'Scf'
                },
                Description: {
                  shape: 'Scg'
                },
                References: {
                  shape: 'S7l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactAttributes: {
            http: {
              requestUri: '/contact/attributes'
            },
            input: {
              type: 'structure',
              required: ['InitialContactId', 'InstanceId', 'Attributes'],
              members: {
                InitialContactId: {},
                InstanceId: {},
                Attributes: {
                  shape: 'S38'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactEvaluation: {
            http: {
              requestUri: '/contact-evaluations/{InstanceId}/{EvaluationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationId: {
                  location: 'uri',
                  locationName: 'EvaluationId'
                },
                Answers: {
                  shape: 'Swj'
                },
                Notes: {
                  shape: 'Se5'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationId', 'EvaluationArn'],
              members: {
                EvaluationId: {},
                EvaluationArn: {}
              }
            }
          },
          UpdateContactFlowContent: {
            http: {
              requestUri: '/contact-flows/{InstanceId}/{ContactFlowId}/content'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowId', 'Content'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowId: {
                  location: 'uri',
                  locationName: 'ContactFlowId'
                },
                Content: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactFlowMetadata: {
            http: {
              requestUri: '/contact-flows/{InstanceId}/{ContactFlowId}/metadata'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowId: {
                  location: 'uri',
                  locationName: 'ContactFlowId'
                },
                Name: {},
                Description: {},
                ContactFlowState: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactFlowModuleContent: {
            http: {
              requestUri: '/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowModuleId', 'Content'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowModuleId: {
                  location: 'uri',
                  locationName: 'ContactFlowModuleId'
                },
                Content: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactFlowModuleMetadata: {
            http: {
              requestUri: '/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowModuleId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowModuleId: {
                  location: 'uri',
                  locationName: 'ContactFlowModuleId'
                },
                Name: {},
                Description: {},
                State: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactFlowName: {
            http: {
              requestUri: '/contact-flows/{InstanceId}/{ContactFlowId}/name'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactFlowId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactFlowId: {
                  location: 'uri',
                  locationName: 'ContactFlowId'
                },
                Name: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactRoutingData: {
            http: {
              requestUri: '/contacts/{InstanceId}/{ContactId}/routing-data'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {
                  location: 'uri',
                  locationName: 'ContactId'
                },
                QueueTimeAdjustmentSeconds: {
                  type: 'integer'
                },
                QueuePriority: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactSchedule: {
            http: {
              requestUri: '/contact/schedule'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'ScheduledTime'],
              members: {
                InstanceId: {},
                ContactId: {},
                ScheduledTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEvaluationForm: {
            http: {
              method: 'PUT',
              requestUri: '/evaluation-forms/{InstanceId}/{EvaluationFormId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'EvaluationFormId', 'EvaluationFormVersion', 'Title', 'Items'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                EvaluationFormId: {
                  location: 'uri',
                  locationName: 'EvaluationFormId'
                },
                EvaluationFormVersion: {
                  type: 'integer'
                },
                CreateNewVersion: {
                  type: 'boolean'
                },
                Title: {},
                Description: {},
                Items: {
                  shape: 'S4d'
                },
                ScoringStrategy: {
                  shape: 'S58'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EvaluationFormId', 'EvaluationFormArn', 'EvaluationFormVersion'],
              members: {
                EvaluationFormId: {},
                EvaluationFormArn: {},
                EvaluationFormVersion: {
                  type: 'integer'
                }
              }
            },
            idempotent: true
          },
          UpdateHoursOfOperation: {
            http: {
              requestUri: '/hours-of-operations/{InstanceId}/{HoursOfOperationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'HoursOfOperationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                HoursOfOperationId: {
                  location: 'uri',
                  locationName: 'HoursOfOperationId'
                },
                Name: {},
                Description: {},
                TimeZone: {},
                Config: {
                  shape: 'S5g'
                }
              }
            }
          },
          UpdateInstanceAttribute: {
            http: {
              requestUri: '/instance/{InstanceId}/attribute/{AttributeType}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'AttributeType', 'Value'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AttributeType: {
                  location: 'uri',
                  locationName: 'AttributeType'
                },
                Value: {}
              }
            }
          },
          UpdateInstanceStorageConfig: {
            http: {
              requestUri: '/instance/{InstanceId}/storage-config/{AssociationId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'AssociationId', 'ResourceType', 'StorageConfig'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AssociationId: {
                  location: 'uri',
                  locationName: 'AssociationId'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                StorageConfig: {
                  shape: 'St'
                }
              }
            }
          },
          UpdateParticipantRoleConfig: {
            http: {
              method: 'PUT',
              requestUri: '/contact/participant-role-config/{InstanceId}/{ContactId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ContactId', 'ChannelConfiguration'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ContactId: {
                  location: 'uri',
                  locationName: 'ContactId'
                },
                ChannelConfiguration: {
                  type: 'structure',
                  members: {
                    Chat: {
                      type: 'structure',
                      required: ['ParticipantTimerConfigList'],
                      members: {
                        ParticipantTimerConfigList: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['ParticipantRole', 'TimerType', 'TimerValue'],
                            members: {
                              ParticipantRole: {},
                              TimerType: {},
                              TimerValue: {
                                type: 'structure',
                                members: {
                                  ParticipantTimerAction: {},
                                  ParticipantTimerDurationInMinutes: {
                                    type: 'integer'
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
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdatePhoneNumber: {
            http: {
              method: 'PUT',
              requestUri: '/phone-number/{PhoneNumberId}'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'PhoneNumberId'
                },
                TargetArn: {},
                InstanceId: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberId: {},
                PhoneNumberArn: {}
              }
            }
          },
          UpdatePhoneNumberMetadata: {
            http: {
              method: 'PUT',
              requestUri: '/phone-number/{PhoneNumberId}/metadata'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'PhoneNumberId'
                },
                PhoneNumberDescription: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            }
          },
          UpdatePredefinedAttribute: {
            http: {
              requestUri: '/predefined-attributes/{InstanceId}/{Name}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'Name'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                Values: {
                  shape: 'S6e'
                }
              }
            }
          },
          UpdatePrompt: {
            http: {
              requestUri: '/prompts/{InstanceId}/{PromptId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'PromptId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                PromptId: {
                  location: 'uri',
                  locationName: 'PromptId'
                },
                Name: {},
                Description: {},
                S3Uri: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PromptARN: {},
                PromptId: {}
              }
            }
          },
          UpdateQueueHoursOfOperation: {
            http: {
              requestUri: '/queues/{InstanceId}/{QueueId}/hours-of-operation'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId', 'HoursOfOperationId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                },
                HoursOfOperationId: {}
              }
            }
          },
          UpdateQueueMaxContacts: {
            http: {
              requestUri: '/queues/{InstanceId}/{QueueId}/max-contacts'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                },
                MaxContacts: {
                  type: 'integer'
                }
              }
            }
          },
          UpdateQueueName: {
            http: {
              requestUri: '/queues/{InstanceId}/{QueueId}/name'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                },
                Name: {},
                Description: {}
              }
            }
          },
          UpdateQueueOutboundCallerConfig: {
            http: {
              requestUri: '/queues/{InstanceId}/{QueueId}/outbound-caller-config'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId', 'OutboundCallerConfig'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                },
                OutboundCallerConfig: {
                  shape: 'S6n'
                }
              }
            }
          },
          UpdateQueueStatus: {
            http: {
              requestUri: '/queues/{InstanceId}/{QueueId}/status'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QueueId', 'Status'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QueueId: {
                  location: 'uri',
                  locationName: 'QueueId'
                },
                Status: {}
              }
            }
          },
          UpdateQuickConnectConfig: {
            http: {
              requestUri: '/quick-connects/{InstanceId}/{QuickConnectId}/config'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QuickConnectId', 'QuickConnectConfig'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QuickConnectId: {
                  location: 'uri',
                  locationName: 'QuickConnectId'
                },
                QuickConnectConfig: {
                  shape: 'S6u'
                }
              }
            }
          },
          UpdateQuickConnectName: {
            http: {
              requestUri: '/quick-connects/{InstanceId}/{QuickConnectId}/name'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'QuickConnectId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                QuickConnectId: {
                  location: 'uri',
                  locationName: 'QuickConnectId'
                },
                Name: {},
                Description: {}
              }
            }
          },
          UpdateRoutingProfileAgentAvailabilityTimer: {
            http: {
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}/agent-availability-timer'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId', 'AgentAvailabilityTimer'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                },
                AgentAvailabilityTimer: {}
              }
            }
          },
          UpdateRoutingProfileConcurrency: {
            http: {
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId', 'MediaConcurrencies'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                },
                MediaConcurrencies: {
                  shape: 'S73'
                }
              }
            }
          },
          UpdateRoutingProfileDefaultOutboundQueue: {
            http: {
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId', 'DefaultOutboundQueueId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                },
                DefaultOutboundQueueId: {}
              }
            }
          },
          UpdateRoutingProfileName: {
            http: {
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}/name'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                },
                Name: {},
                Description: {}
              }
            }
          },
          UpdateRoutingProfileQueues: {
            http: {
              requestUri: '/routing-profiles/{InstanceId}/{RoutingProfileId}/queues'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'RoutingProfileId', 'QueueConfigs'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                RoutingProfileId: {
                  location: 'uri',
                  locationName: 'RoutingProfileId'
                },
                QueueConfigs: {
                  shape: 'S1j'
                }
              }
            }
          },
          UpdateRule: {
            http: {
              method: 'PUT',
              requestUri: '/rules/{InstanceId}/{RuleId}'
            },
            input: {
              type: 'structure',
              required: ['RuleId', 'InstanceId', 'Name', 'Function', 'Actions', 'PublishStatus'],
              members: {
                RuleId: {
                  location: 'uri',
                  locationName: 'RuleId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Function: {},
                Actions: {
                  shape: 'S7f'
                },
                PublishStatus: {}
              }
            }
          },
          UpdateSecurityProfile: {
            http: {
              requestUri: '/security-profiles/{InstanceId}/{SecurityProfileId}'
            },
            input: {
              type: 'structure',
              required: ['SecurityProfileId', 'InstanceId'],
              members: {
                Description: {},
                Permissions: {
                  shape: 'S8k'
                },
                SecurityProfileId: {
                  location: 'uri',
                  locationName: 'SecurityProfileId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                AllowedAccessControlTags: {
                  shape: 'S8m'
                },
                TagRestrictedResources: {
                  shape: 'S8p'
                },
                Applications: {
                  shape: 'S8r'
                },
                HierarchyRestrictedResources: {
                  shape: 'S8w'
                },
                AllowedAccessControlHierarchyGroupId: {}
              }
            }
          },
          UpdateTaskTemplate: {
            http: {
              requestUri: '/instance/{InstanceId}/task/template/{TaskTemplateId}'
            },
            input: {
              type: 'structure',
              required: ['TaskTemplateId', 'InstanceId'],
              members: {
                TaskTemplateId: {
                  location: 'uri',
                  locationName: 'TaskTemplateId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                Name: {},
                Description: {},
                ContactFlowId: {},
                Constraints: {
                  shape: 'S94'
                },
                Defaults: {
                  shape: 'S9d'
                },
                Status: {},
                Fields: {
                  shape: 'S9i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceId: {},
                Id: {},
                Arn: {},
                Name: {},
                Description: {},
                ContactFlowId: {},
                Constraints: {
                  shape: 'S94'
                },
                Defaults: {
                  shape: 'S9d'
                },
                Fields: {
                  shape: 'S9i'
                },
                Status: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                CreatedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdateTrafficDistribution: {
            http: {
              method: 'PUT',
              requestUri: '/traffic-distribution/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                TelephonyConfig: {
                  shape: 'Skb'
                },
                SignInConfig: {
                  shape: 'Skg'
                },
                AgentConfig: {
                  shape: 'Skj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateUserHierarchy: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/hierarchy'
            },
            input: {
              type: 'structure',
              required: ['UserId', 'InstanceId'],
              members: {
                HierarchyGroupId: {},
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          UpdateUserHierarchyGroupName: {
            http: {
              requestUri: '/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name'
            },
            input: {
              type: 'structure',
              required: ['Name', 'HierarchyGroupId', 'InstanceId'],
              members: {
                Name: {},
                HierarchyGroupId: {
                  location: 'uri',
                  locationName: 'HierarchyGroupId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          UpdateUserHierarchyStructure: {
            http: {
              requestUri: '/user-hierarchy-structure/{InstanceId}'
            },
            input: {
              type: 'structure',
              required: ['HierarchyStructure', 'InstanceId'],
              members: {
                HierarchyStructure: {
                  type: 'structure',
                  members: {
                    LevelOne: {
                      shape: 'Syv'
                    },
                    LevelTwo: {
                      shape: 'Syv'
                    },
                    LevelThree: {
                      shape: 'Syv'
                    },
                    LevelFour: {
                      shape: 'Syv'
                    },
                    LevelFive: {
                      shape: 'Syv'
                    }
                  }
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          UpdateUserIdentityInfo: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/identity-info'
            },
            input: {
              type: 'structure',
              required: ['IdentityInfo', 'UserId', 'InstanceId'],
              members: {
                IdentityInfo: {
                  shape: 'Sa5'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          UpdateUserPhoneConfig: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/phone-config'
            },
            input: {
              type: 'structure',
              required: ['PhoneConfig', 'UserId', 'InstanceId'],
              members: {
                PhoneConfig: {
                  shape: 'Sa9'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          UpdateUserProficiencies: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/proficiencies'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'UserId', 'UserProficiencies'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                UserProficiencies: {
                  shape: 'S1x'
                }
              }
            }
          },
          UpdateUserRoutingProfile: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/routing-profile'
            },
            input: {
              type: 'structure',
              required: ['RoutingProfileId', 'UserId', 'InstanceId'],
              members: {
                RoutingProfileId: {},
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          UpdateUserSecurityProfiles: {
            http: {
              requestUri: '/users/{InstanceId}/{UserId}/security-profiles'
            },
            input: {
              type: 'structure',
              required: ['SecurityProfileIds', 'UserId', 'InstanceId'],
              members: {
                SecurityProfileIds: {
                  shape: 'Sae'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                }
              }
            }
          },
          UpdateViewContent: {
            http: {
              requestUri: '/views/{InstanceId}/{ViewId}'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ViewId', 'Status', 'Content'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ViewId: {
                  location: 'uri',
                  locationName: 'ViewId'
                },
                Status: {},
                Content: {
                  shape: 'San'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                View: {
                  shape: 'Sau'
                }
              }
            }
          },
          UpdateViewMetadata: {
            http: {
              requestUri: '/views/{InstanceId}/{ViewId}/metadata'
            },
            input: {
              type: 'structure',
              required: ['InstanceId', 'ViewId'],
              members: {
                InstanceId: {
                  location: 'uri',
                  locationName: 'InstanceId'
                },
                ViewId: {
                  location: 'uri',
                  locationName: 'ViewId'
                },
                Name: {
                  shape: 'Sas'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          Sf: {
            type: 'structure',
            required: ['Name', 'LexRegion'],
            members: {
              Name: {},
              LexRegion: {}
            }
          },
          Si: {
            type: 'structure',
            members: {
              AliasArn: {}
            }
          },
          St: {
            type: 'structure',
            required: ['StorageType'],
            members: {
              AssociationId: {},
              StorageType: {},
              S3Config: {
                type: 'structure',
                required: ['BucketName', 'BucketPrefix'],
                members: {
                  BucketName: {},
                  BucketPrefix: {},
                  EncryptionConfig: {
                    shape: 'Sz'
                  }
                }
              },
              KinesisVideoStreamConfig: {
                type: 'structure',
                required: ['Prefix', 'RetentionPeriodHours', 'EncryptionConfig'],
                members: {
                  Prefix: {},
                  RetentionPeriodHours: {
                    type: 'integer'
                  },
                  EncryptionConfig: {
                    shape: 'Sz'
                  }
                }
              },
              KinesisStreamConfig: {
                type: 'structure',
                required: ['StreamArn'],
                members: {
                  StreamArn: {}
                }
              },
              KinesisFirehoseConfig: {
                type: 'structure',
                required: ['FirehoseArn'],
                members: {
                  FirehoseArn: {}
                }
              }
            }
          },
          Sz: {
            type: 'structure',
            required: ['EncryptionType', 'KeyId'],
            members: {
              EncryptionType: {},
              KeyId: {}
            }
          },
          S1f: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['QueueReference', 'Priority', 'Delay'],
              members: {
                QueueReference: {
                  shape: 'S1l'
                },
                Priority: {
                  type: 'integer'
                },
                Delay: {
                  type: 'integer'
                }
              }
            }
          },
          S1l: {
            type: 'structure',
            required: ['QueueId', 'Channel'],
            members: {
              QueueId: {},
              Channel: {}
            }
          },
          S1x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AttributeName', 'AttributeValue', 'Level'],
              members: {
                AttributeName: {},
                AttributeValue: {},
                Level: {
                  type: 'float'
                }
              }
            }
          },
          S23: {
            type: 'list',
            member: {}
          },
          S25: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DataSetId: {},
                TargetAccountId: {},
                ResourceShareId: {},
                ResourceShareArn: {}
              }
            }
          },
          S27: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          S2l: {
            type: 'structure',
            members: {
              ConnectUserArn: {},
              AWSIdentityArn: {}
            },
            union: true
          },
          S2n: {
            type: 'map',
            key: {},
            value: {}
          },
          S2y: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceId: {},
                FlowId: {},
                ResourceType: {}
              }
            }
          },
          S34: {
            type: 'structure',
            members: {
              Type: {},
              Address: {}
            }
          },
          S38: {
            type: 'map',
            key: {},
            value: {}
          },
          S3b: {
            type: 'structure',
            members: {
              CampaignId: {}
            }
          },
          S4d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Section: {
                  type: 'structure',
                  required: ['Title', 'RefId', 'Items'],
                  members: {
                    Title: {},
                    RefId: {},
                    Instructions: {},
                    Items: {
                      shape: 'S4d'
                    },
                    Weight: {
                      type: 'double'
                    }
                  }
                },
                Question: {
                  type: 'structure',
                  required: ['Title', 'RefId', 'QuestionType'],
                  members: {
                    Title: {},
                    Instructions: {},
                    RefId: {},
                    NotApplicableEnabled: {
                      type: 'boolean'
                    },
                    QuestionType: {},
                    QuestionTypeProperties: {
                      type: 'structure',
                      members: {
                        Numeric: {
                          type: 'structure',
                          required: ['MinValue', 'MaxValue'],
                          members: {
                            MinValue: {
                              type: 'integer'
                            },
                            MaxValue: {
                              type: 'integer'
                            },
                            Options: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                required: ['MinValue', 'MaxValue'],
                                members: {
                                  MinValue: {
                                    type: 'integer'
                                  },
                                  MaxValue: {
                                    type: 'integer'
                                  },
                                  Score: {
                                    type: 'integer'
                                  },
                                  AutomaticFail: {
                                    type: 'boolean'
                                  }
                                }
                              }
                            },
                            Automation: {
                              type: 'structure',
                              members: {
                                PropertyValue: {
                                  type: 'structure',
                                  required: ['Label'],
                                  members: {
                                    Label: {}
                                  }
                                }
                              },
                              union: true
                            }
                          }
                        },
                        SingleSelect: {
                          type: 'structure',
                          required: ['Options'],
                          members: {
                            Options: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                required: ['RefId', 'Text'],
                                members: {
                                  RefId: {},
                                  Text: {},
                                  Score: {
                                    type: 'integer'
                                  },
                                  AutomaticFail: {
                                    type: 'boolean'
                                  }
                                }
                              }
                            },
                            DisplayAs: {},
                            Automation: {
                              type: 'structure',
                              required: ['Options'],
                              members: {
                                Options: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      RuleCategory: {
                                        type: 'structure',
                                        required: ['Category', 'Condition', 'OptionRefId'],
                                        members: {
                                          Category: {},
                                          Condition: {},
                                          OptionRefId: {}
                                        }
                                      }
                                    },
                                    union: true
                                  }
                                },
                                DefaultOptionRefId: {}
                              }
                            }
                          }
                        }
                      },
                      union: true
                    },
                    Weight: {
                      type: 'double'
                    }
                  }
                }
              },
              union: true
            }
          },
          S58: {
            type: 'structure',
            required: ['Mode', 'Status'],
            members: {
              Mode: {},
              Status: {}
            }
          },
          S5g: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Day', 'StartTime', 'EndTime'],
              members: {
                Day: {},
                StartTime: {
                  shape: 'S5j'
                },
                EndTime: {
                  shape: 'S5j'
                }
              }
            }
          },
          S5j: {
            type: 'structure',
            required: ['Hours', 'Minutes'],
            members: {
              Hours: {
                type: 'integer'
              },
              Minutes: {
                type: 'integer'
              }
            }
          },
          S5q: {
            type: 'string',
            sensitive: true
          },
          S6e: {
            type: 'structure',
            members: {
              StringList: {
                type: 'list',
                member: {}
              }
            },
            union: true
          },
          S6n: {
            type: 'structure',
            members: {
              OutboundCallerIdName: {},
              OutboundCallerIdNumberId: {},
              OutboundFlowId: {}
            }
          },
          S6u: {
            type: 'structure',
            required: ['QuickConnectType'],
            members: {
              QuickConnectType: {},
              UserConfig: {
                type: 'structure',
                required: ['UserId', 'ContactFlowId'],
                members: {
                  UserId: {},
                  ContactFlowId: {}
                }
              },
              QueueConfig: {
                type: 'structure',
                required: ['QueueId', 'ContactFlowId'],
                members: {
                  QueueId: {},
                  ContactFlowId: {}
                }
              },
              PhoneConfig: {
                type: 'structure',
                required: ['PhoneNumber'],
                members: {
                  PhoneNumber: {}
                }
              }
            }
          },
          S73: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Channel', 'Concurrency'],
              members: {
                Channel: {},
                Concurrency: {
                  type: 'integer'
                },
                CrossChannelBehavior: {
                  type: 'structure',
                  required: ['BehaviorType'],
                  members: {
                    BehaviorType: {}
                  }
                }
              }
            }
          },
          S7c: {
            type: 'structure',
            required: ['EventSourceName'],
            members: {
              EventSourceName: {},
              IntegrationAssociationId: {}
            }
          },
          S7f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ActionType'],
              members: {
                ActionType: {},
                TaskAction: {
                  type: 'structure',
                  required: ['Name', 'ContactFlowId'],
                  members: {
                    Name: {},
                    Description: {},
                    ContactFlowId: {},
                    References: {
                      shape: 'S7l'
                    }
                  }
                },
                EventBridgeAction: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {}
                  }
                },
                AssignContactCategoryAction: {
                  type: 'structure',
                  members: {}
                },
                SendNotificationAction: {
                  type: 'structure',
                  required: ['DeliveryMethod', 'Content', 'ContentType', 'Recipient'],
                  members: {
                    DeliveryMethod: {},
                    Subject: {},
                    Content: {},
                    ContentType: {},
                    Recipient: {
                      type: 'structure',
                      members: {
                        UserTags: {
                          type: 'map',
                          key: {},
                          value: {}
                        },
                        UserIds: {
                          type: 'list',
                          member: {}
                        }
                      }
                    }
                  }
                },
                CreateCaseAction: {
                  type: 'structure',
                  required: ['Fields', 'TemplateId'],
                  members: {
                    Fields: {
                      shape: 'S82'
                    },
                    TemplateId: {}
                  }
                },
                UpdateCaseAction: {
                  type: 'structure',
                  required: ['Fields'],
                  members: {
                    Fields: {
                      shape: 'S82'
                    }
                  }
                },
                EndAssociatedTasksAction: {
                  type: 'structure',
                  members: {}
                },
                SubmitAutoEvaluationAction: {
                  type: 'structure',
                  required: ['EvaluationFormId'],
                  members: {
                    EvaluationFormId: {}
                  }
                }
              }
            }
          },
          S7l: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['Value', 'Type'],
              members: {
                Value: {},
                Type: {}
              }
            }
          },
          S82: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Id', 'Value'],
              members: {
                Id: {},
                Value: {
                  type: 'structure',
                  members: {
                    BooleanValue: {
                      type: 'boolean'
                    },
                    DoubleValue: {
                      type: 'double'
                    },
                    EmptyValue: {
                      type: 'structure',
                      members: {}
                    },
                    StringValue: {}
                  }
                }
              }
            }
          },
          S8k: {
            type: 'list',
            member: {}
          },
          S8m: {
            type: 'map',
            key: {},
            value: {}
          },
          S8p: {
            type: 'list',
            member: {}
          },
          S8r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Namespace: {},
                ApplicationPermissions: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S8w: {
            type: 'list',
            member: {}
          },
          S94: {
            type: 'structure',
            members: {
              RequiredFields: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id: {
                      shape: 'S97'
                    }
                  }
                }
              },
              ReadOnlyFields: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id: {
                      shape: 'S97'
                    }
                  }
                }
              },
              InvisibleFields: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id: {
                      shape: 'S97'
                    }
                  }
                }
              }
            }
          },
          S97: {
            type: 'structure',
            members: {
              Name: {}
            }
          },
          S9d: {
            type: 'structure',
            members: {
              DefaultFieldValues: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id: {
                      shape: 'S97'
                    },
                    DefaultValue: {}
                  }
                }
              }
            }
          },
          S9i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  shape: 'S97'
                },
                Description: {},
                Type: {},
                SingleSelectOptions: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Sa5: {
            type: 'structure',
            members: {
              FirstName: {
                shape: 'Sa6'
              },
              LastName: {
                shape: 'Sa7'
              },
              Email: {
                shape: 'Sa8'
              },
              SecondaryEmail: {
                shape: 'Sa8'
              },
              Mobile: {}
            }
          },
          Sa6: {
            type: 'string',
            sensitive: true
          },
          Sa7: {
            type: 'string',
            sensitive: true
          },
          Sa8: {
            type: 'string',
            sensitive: true
          },
          Sa9: {
            type: 'structure',
            required: ['PhoneType'],
            members: {
              PhoneType: {},
              AutoAccept: {
                type: 'boolean'
              },
              AfterContactWorkTimeLimit: {
                type: 'integer'
              },
              DeskPhoneNumber: {}
            }
          },
          Sae: {
            type: 'list',
            member: {}
          },
          San: {
            type: 'structure',
            members: {
              Template: {},
              Actions: {
                shape: 'Sap'
              }
            }
          },
          Sap: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            }
          },
          Sas: {
            type: 'string',
            sensitive: true
          },
          Sau: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {
                shape: 'Sas'
              },
              Status: {},
              Type: {},
              Description: {},
              Version: {
                type: 'integer'
              },
              VersionDescription: {},
              Content: {
                type: 'structure',
                members: {
                  InputSchema: {
                    type: 'string',
                    sensitive: true
                  },
                  Template: {},
                  Actions: {
                    shape: 'Sap'
                  }
                }
              },
              Tags: {
                shape: 'S2n'
              },
              CreatedTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              ViewContentSha256: {}
            }
          },
          Scf: {
            type: 'string',
            sensitive: true
          },
          Scg: {
            type: 'string',
            sensitive: true
          },
          Scn: {
            type: 'structure',
            members: {
              Arn: {}
            }
          },
          Sco: {
            type: 'structure',
            members: {
              PlatformName: {},
              PlatformVersion: {},
              OperatingSystem: {}
            }
          },
          Scs: {
            type: 'structure',
            members: {
              Video: {}
            }
          },
          Scz: {
            type: 'map',
            key: {},
            value: {}
          },
          Sd7: {
            type: 'structure',
            members: {
              AttributeCondition: {
                type: 'structure',
                members: {
                  Name: {},
                  Value: {},
                  ProficiencyLevel: {
                    type: 'float'
                  },
                  ComparisonOperator: {}
                }
              },
              AndExpression: {
                shape: 'Sdb'
              },
              OrExpression: {
                shape: 'Sdb'
              }
            }
          },
          Sdb: {
            type: 'list',
            member: {
              shape: 'Sd7'
            }
          },
          Sdj: {
            type: 'structure',
            members: {
              QualityScore: {
                type: 'float'
              },
              PotentialQualityIssues: {
                type: 'list',
                member: {}
              }
            }
          },
          Sdq: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                ValueString: {}
              }
            }
          },
          Sdy: {
            type: 'structure',
            members: {
              Percentage: {
                type: 'double'
              },
              NotApplicable: {
                type: 'boolean'
              },
              AutomaticFail: {
                type: 'boolean'
              }
            }
          },
          Se2: {
            type: 'structure',
            members: {
              StringValue: {},
              NumericValue: {
                type: 'double'
              },
              NotApplicable: {
                type: 'boolean'
              }
            },
            union: true
          },
          Se5: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Value: {}
              }
            }
          },
          Sed: {
            type: 'structure',
            members: {
              Arn: {},
              Id: {},
              Name: {},
              Type: {},
              State: {},
              Status: {},
              Description: {},
              Content: {},
              Tags: {
                shape: 'S2n'
              }
            }
          },
          Seh: {
            type: 'structure',
            members: {
              Arn: {},
              Id: {},
              Name: {},
              Content: {},
              Description: {},
              State: {},
              Status: {},
              Tags: {
                shape: 'S2n'
              }
            }
          },
          Ser: {
            type: 'structure',
            members: {
              HoursOfOperationId: {},
              HoursOfOperationArn: {},
              Name: {},
              Description: {},
              TimeZone: {},
              Config: {
                shape: 'S5g'
              },
              Tags: {
                shape: 'S2n'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              LastModifiedRegion: {}
            }
          },
          Sf1: {
            type: 'structure',
            members: {
              AttributeType: {},
              Value: {}
            }
          },
          Sff: {
            type: 'structure',
            members: {
              Name: {},
              Values: {
                shape: 'S6e'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              LastModifiedRegion: {}
            }
          },
          Sfi: {
            type: 'structure',
            members: {
              PromptARN: {},
              PromptId: {},
              Name: {},
              Description: {},
              Tags: {
                shape: 'S2n'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              LastModifiedRegion: {}
            }
          },
          Sfl: {
            type: 'structure',
            members: {
              Name: {},
              QueueArn: {},
              QueueId: {},
              Description: {},
              OutboundCallerConfig: {
                shape: 'S6n'
              },
              HoursOfOperationId: {},
              MaxContacts: {
                type: 'integer'
              },
              Status: {},
              Tags: {
                shape: 'S2n'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              LastModifiedRegion: {}
            }
          },
          Sfp: {
            type: 'structure',
            members: {
              QuickConnectARN: {},
              QuickConnectId: {},
              Name: {},
              Description: {},
              QuickConnectConfig: {
                shape: 'S6u'
              },
              Tags: {
                shape: 'S2n'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              LastModifiedRegion: {}
            }
          },
          Sfs: {
            type: 'structure',
            members: {
              InstanceId: {},
              Name: {},
              RoutingProfileArn: {},
              RoutingProfileId: {},
              Description: {},
              MediaConcurrencies: {
                shape: 'S73'
              },
              DefaultOutboundQueueId: {},
              Tags: {
                shape: 'S2n'
              },
              NumberOfAssociatedQueues: {
                type: 'long'
              },
              NumberOfAssociatedUsers: {
                type: 'long'
              },
              AgentAvailabilityTimer: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              LastModifiedRegion: {},
              IsDefault: {
                type: 'boolean'
              },
              AssociatedQueueIds: {
                type: 'list',
                member: {}
              }
            }
          },
          Sgf: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              LastModifiedRegion: {}
            }
          },
          Sgj: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              LastModifiedRegion: {}
            }
          },
          Shk: {
            type: 'structure',
            members: {
              Queues: {
                shape: 'Shl'
              },
              Channels: {
                type: 'list',
                member: {}
              },
              RoutingProfiles: {
                shape: 'Shn'
              },
              RoutingStepExpressions: {
                type: 'list',
                member: {}
              }
            }
          },
          Shl: {
            type: 'list',
            member: {}
          },
          Shn: {
            type: 'list',
            member: {}
          },
          Shq: {
            type: 'list',
            member: {}
          },
          Sht: {
            type: 'structure',
            members: {
              Name: {},
              Unit: {}
            }
          },
          Si4: {
            type: 'structure',
            members: {
              Queue: {
                shape: 'Si5'
              },
              Channel: {},
              RoutingProfile: {
                shape: 'Si6'
              },
              RoutingStepExpression: {}
            }
          },
          Si5: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {}
            }
          },
          Si6: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {}
            }
          },
          Sin: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {}
            }
          },
          Sip: {
            type: 'map',
            key: {},
            value: {
              type: 'integer'
            }
          },
          Siw: {
            type: 'string',
            sensitive: true
          },
          Sj1: {
            type: 'structure',
            members: {
              Name: {},
              Threshold: {
                type: 'structure',
                members: {
                  Comparison: {},
                  ThresholdValue: {
                    type: 'double'
                  }
                }
              },
              Statistic: {},
              Unit: {}
            }
          },
          Sjm: {
            type: 'structure',
            members: {
              Name: {},
              Threshold: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Comparison: {},
                    ThresholdValue: {
                      type: 'double'
                    }
                  }
                }
              },
              MetricFilters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    MetricFilterKey: {},
                    MetricFilterValues: {
                      type: 'list',
                      member: {}
                    },
                    Negate: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          Skb: {
            type: 'structure',
            required: ['Distributions'],
            members: {
              Distributions: {
                shape: 'Skc'
              }
            }
          },
          Skc: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Region', 'Percentage'],
              members: {
                Region: {},
                Percentage: {
                  type: 'integer'
                }
              }
            }
          },
          Skg: {
            type: 'structure',
            required: ['Distributions'],
            members: {
              Distributions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Region', 'Enabled'],
                  members: {
                    Region: {},
                    Enabled: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          Skj: {
            type: 'structure',
            required: ['Distributions'],
            members: {
              Distributions: {
                shape: 'Skc'
              }
            }
          },
          Smz: {
            type: 'list',
            member: {}
          },
          Sn0: {
            type: 'list',
            member: {}
          },
          Snl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {},
                Name: {},
                QuickConnectType: {},
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastModifiedRegion: {}
              }
            }
          },
          Soa: {
            type: 'structure',
            members: {
              AbsoluteTime: {
                type: 'timestamp',
                timestampFormat: 'iso8601'
              }
            },
            union: true
          },
          Soe: {
            type: 'structure',
            required: ['BeginOffsetChar', 'EndOffsetChar'],
            members: {
              BeginOffsetChar: {
                type: 'integer'
              },
              EndOffsetChar: {
                type: 'integer'
              }
            }
          },
          Srh: {
            type: 'structure',
            members: {
              OrConditions: {
                type: 'list',
                member: {
                  shape: 'Srj'
                }
              },
              AndConditions: {
                shape: 'Srj'
              },
              TagCondition: {
                shape: 'Srk'
              }
            }
          },
          Srj: {
            type: 'list',
            member: {
              shape: 'Srk'
            }
          },
          Srk: {
            type: 'structure',
            members: {
              TagKey: {},
              TagValue: {}
            }
          },
          Srl: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'Srm'
              },
              AndConditions: {
                shape: 'Srm'
              },
              StringCondition: {
                shape: 'Srn'
              }
            }
          },
          Srm: {
            type: 'list',
            member: {
              shape: 'Srl'
            }
          },
          Srn: {
            type: 'structure',
            members: {
              FieldName: {},
              Value: {},
              ComparisonType: {}
            }
          },
          Srt: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'Sru'
              },
              AndConditions: {
                shape: 'Sru'
              },
              StringCondition: {
                shape: 'Srn'
              },
              TypeCondition: {},
              StateCondition: {},
              StatusCondition: {}
            }
          },
          Sru: {
            type: 'list',
            member: {
              shape: 'Srt'
            }
          },
          Ss3: {
            type: 'list',
            member: {}
          },
          Ssu: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'Ssv'
              },
              AndConditions: {
                shape: 'Ssv'
              },
              StringCondition: {
                shape: 'Srn'
              }
            }
          },
          Ssv: {
            type: 'list',
            member: {
              shape: 'Ssu'
            }
          },
          Ssz: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'St0'
              },
              AndConditions: {
                shape: 'St0'
              },
              StringCondition: {
                shape: 'Srn'
              }
            }
          },
          St0: {
            type: 'list',
            member: {
              shape: 'Ssz'
            }
          },
          St5: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'St6'
              },
              AndConditions: {
                shape: 'St6'
              },
              StringCondition: {
                shape: 'Srn'
              }
            }
          },
          St6: {
            type: 'list',
            member: {
              shape: 'St5'
            }
          },
          Stc: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'Std'
              },
              AndConditions: {
                shape: 'Std'
              },
              StringCondition: {
                shape: 'Srn'
              },
              QueueTypeCondition: {}
            }
          },
          Std: {
            type: 'list',
            member: {
              shape: 'Stc'
            }
          },
          Stj: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'Stk'
              },
              AndConditions: {
                shape: 'Stk'
              },
              StringCondition: {
                shape: 'Srn'
              }
            }
          },
          Stk: {
            type: 'list',
            member: {
              shape: 'Stj'
            }
          },
          Sty: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'Stz'
              },
              AndConditions: {
                shape: 'Stz'
              },
              StringCondition: {
                shape: 'Srn'
              }
            }
          },
          Stz: {
            type: 'list',
            member: {
              shape: 'Sty'
            }
          },
          Su3: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'Su4'
              },
              AndConditions: {
                shape: 'Su4'
              },
              StringCondition: {
                shape: 'Srn'
              }
            }
          },
          Su4: {
            type: 'list',
            member: {
              shape: 'Su3'
            }
          },
          Sud: {
            type: 'structure',
            members: {
              TagConditions: {
                shape: 'Srj'
              },
              HierarchyGroupCondition: {
                shape: 'Sue'
              }
            }
          },
          Sue: {
            type: 'structure',
            members: {
              Value: {},
              HierarchyGroupMatchType: {}
            }
          },
          Sug: {
            type: 'structure',
            members: {
              OrConditions: {
                shape: 'Suh'
              },
              AndConditions: {
                shape: 'Suh'
              },
              StringCondition: {
                shape: 'Srn'
              },
              HierarchyGroupCondition: {
                shape: 'Sue'
              }
            }
          },
          Suh: {
            type: 'list',
            member: {
              shape: 'Sug'
            }
          },
          Suz: {
            type: 'list',
            member: {}
          },
          Sv1: {
            type: 'structure',
            required: ['DisplayName'],
            members: {
              DisplayName: {}
            }
          },
          Sv2: {
            type: 'structure',
            required: ['StreamingEndpointArn'],
            members: {
              StreamingEndpointArn: {}
            }
          },
          Swj: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Value: {
                  shape: 'Se2'
                }
              }
            }
          },
          Syv: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c98de34f622d092c6eded08db389e4af29d43cfe.js.map