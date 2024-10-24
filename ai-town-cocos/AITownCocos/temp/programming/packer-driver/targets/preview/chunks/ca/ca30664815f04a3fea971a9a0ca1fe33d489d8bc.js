System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-08-15',
          endpointPrefix: 'profile',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Customer Profiles',
          serviceFullName: 'Amazon Connect Customer Profiles',
          serviceId: 'Customer Profiles',
          signatureVersion: 'v4',
          signingName: 'profile',
          uid: 'customer-profiles-2020-08-15'
        },
        operations: {
          AddProfileKey: {
            http: {
              requestUri: '/domains/{DomainName}/profiles/keys'
            },
            input: {
              type: 'structure',
              required: ['ProfileId', 'KeyName', 'Values', 'DomainName'],
              members: {
                ProfileId: {},
                KeyName: {},
                Values: {
                  shape: 'S4'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyName: {},
                Values: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateCalculatedAttributeDefinition: {
            http: {
              requestUri: '/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'CalculatedAttributeName', 'AttributeDetails', 'Statistic'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                CalculatedAttributeName: {
                  location: 'uri',
                  locationName: 'CalculatedAttributeName'
                },
                DisplayName: {},
                Description: {
                  shape: 'Sa'
                },
                AttributeDetails: {
                  shape: 'Sb'
                },
                Conditions: {
                  shape: 'Sf'
                },
                Statistic: {
                  shape: 'Sm'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CalculatedAttributeName: {},
                DisplayName: {},
                Description: {
                  shape: 'Sa'
                },
                AttributeDetails: {
                  shape: 'Sb'
                },
                Conditions: {
                  shape: 'Sf'
                },
                Statistic: {
                  shape: 'Sm'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateDomain: {
            http: {
              requestUri: '/domains/{DomainName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'DefaultExpirationDays'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                DefaultExpirationDays: {
                  type: 'integer'
                },
                DefaultEncryptionKey: {},
                DeadLetterQueueUrl: {},
                Matching: {
                  shape: 'Sw'
                },
                RuleBasedMatching: {
                  shape: 'S1c'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainName', 'DefaultExpirationDays', 'CreatedAt', 'LastUpdatedAt'],
              members: {
                DomainName: {},
                DefaultExpirationDays: {
                  type: 'integer'
                },
                DefaultEncryptionKey: {},
                DeadLetterQueueUrl: {},
                Matching: {
                  shape: 'S1o'
                },
                RuleBasedMatching: {
                  shape: 'S1p'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateEventStream: {
            http: {
              requestUri: '/domains/{DomainName}/event-streams/{EventStreamName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Uri', 'EventStreamName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Uri: {},
                EventStreamName: {
                  location: 'uri',
                  locationName: 'EventStreamName'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EventStreamArn'],
              members: {
                EventStreamArn: {},
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateIntegrationWorkflow: {
            http: {
              requestUri: '/domains/{DomainName}/workflows/integrations'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'WorkflowType', 'IntegrationConfig', 'ObjectTypeName', 'RoleArn'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                WorkflowType: {},
                IntegrationConfig: {
                  type: 'structure',
                  members: {
                    AppflowIntegration: {
                      type: 'structure',
                      required: ['FlowDefinition'],
                      members: {
                        FlowDefinition: {
                          shape: 'S1x'
                        },
                        Batches: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['StartTime', 'EndTime'],
                            members: {
                              StartTime: {
                                type: 'timestamp'
                              },
                              EndTime: {
                                type: 'timestamp'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                ObjectTypeName: {},
                RoleArn: {},
                Tags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['WorkflowId', 'Message'],
              members: {
                WorkflowId: {},
                Message: {}
              }
            }
          },
          CreateProfile: {
            http: {
              requestUri: '/domains/{DomainName}/profiles'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                AccountNumber: {
                  shape: 'S39'
                },
                AdditionalInformation: {
                  shape: 'S3a'
                },
                PartyType: {
                  shape: 'S3b'
                },
                BusinessName: {
                  shape: 'S39'
                },
                FirstName: {
                  shape: 'S39'
                },
                MiddleName: {
                  shape: 'S39'
                },
                LastName: {
                  shape: 'S39'
                },
                BirthDate: {
                  shape: 'S39'
                },
                Gender: {
                  shape: 'S3c'
                },
                PhoneNumber: {
                  shape: 'S39'
                },
                MobilePhoneNumber: {
                  shape: 'S39'
                },
                HomePhoneNumber: {
                  shape: 'S39'
                },
                BusinessPhoneNumber: {
                  shape: 'S39'
                },
                EmailAddress: {
                  shape: 'S39'
                },
                PersonalEmailAddress: {
                  shape: 'S39'
                },
                BusinessEmailAddress: {
                  shape: 'S39'
                },
                Address: {
                  shape: 'S3d'
                },
                ShippingAddress: {
                  shape: 'S3d'
                },
                MailingAddress: {
                  shape: 'S3d'
                },
                BillingAddress: {
                  shape: 'S3d'
                },
                Attributes: {
                  shape: 'S3e'
                },
                PartyTypeString: {
                  shape: 'S39'
                },
                GenderString: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {}
              }
            }
          },
          DeleteCalculatedAttributeDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'CalculatedAttributeName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                CalculatedAttributeName: {
                  location: 'uri',
                  locationName: 'CalculatedAttributeName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDomain: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{DomainName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Message'],
              members: {
                Message: {}
              }
            }
          },
          DeleteEventStream: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{DomainName}/event-streams/{EventStreamName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'EventStreamName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                EventStreamName: {
                  location: 'uri',
                  locationName: 'EventStreamName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteIntegration: {
            http: {
              requestUri: '/domains/{DomainName}/integrations/delete'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Uri'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Uri: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Message'],
              members: {
                Message: {}
              }
            }
          },
          DeleteProfile: {
            http: {
              requestUri: '/domains/{DomainName}/profiles/delete'
            },
            input: {
              type: 'structure',
              required: ['ProfileId', 'DomainName'],
              members: {
                ProfileId: {},
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {}
              }
            }
          },
          DeleteProfileKey: {
            http: {
              requestUri: '/domains/{DomainName}/profiles/keys/delete'
            },
            input: {
              type: 'structure',
              required: ['ProfileId', 'KeyName', 'Values', 'DomainName'],
              members: {
                ProfileId: {},
                KeyName: {},
                Values: {
                  shape: 'S4'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {}
              }
            }
          },
          DeleteProfileObject: {
            http: {
              requestUri: '/domains/{DomainName}/profiles/objects/delete'
            },
            input: {
              type: 'structure',
              required: ['ProfileId', 'ProfileObjectUniqueKey', 'ObjectTypeName', 'DomainName'],
              members: {
                ProfileId: {},
                ProfileObjectUniqueKey: {},
                ObjectTypeName: {},
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {}
              }
            }
          },
          DeleteProfileObjectType: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{DomainName}/object-types/{ObjectTypeName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'ObjectTypeName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ObjectTypeName: {
                  location: 'uri',
                  locationName: 'ObjectTypeName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Message'],
              members: {
                Message: {}
              }
            }
          },
          DeleteWorkflow: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{DomainName}/workflows/{WorkflowId}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'WorkflowId'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                WorkflowId: {
                  location: 'uri',
                  locationName: 'WorkflowId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DetectProfileObjectType: {
            http: {
              requestUri: '/domains/{DomainName}/detect/object-types'
            },
            input: {
              type: 'structure',
              required: ['Objects', 'DomainName'],
              members: {
                Objects: {
                  type: 'list',
                  member: {
                    shape: 'S41'
                  },
                  sensitive: true
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DetectedProfileObjectTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceLastUpdatedTimestampFormat: {},
                      Fields: {
                        shape: 'S45'
                      },
                      Keys: {
                        shape: 'S49'
                      }
                    }
                  }
                }
              }
            }
          },
          GetAutoMergingPreview: {
            http: {
              requestUri: '/domains/{DomainName}/identity-resolution-jobs/auto-merging-preview'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Consolidation', 'ConflictResolution'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Consolidation: {
                  shape: 'S12'
                },
                ConflictResolution: {
                  shape: 'S15'
                },
                MinAllowedConfidenceScoreForMerging: {
                  type: 'double'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                NumberOfMatchesInSample: {
                  type: 'long'
                },
                NumberOfProfilesInSample: {
                  type: 'long'
                },
                NumberOfProfilesWillBeMerged: {
                  type: 'long'
                }
              }
            }
          },
          GetCalculatedAttributeDefinition: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'CalculatedAttributeName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                CalculatedAttributeName: {
                  location: 'uri',
                  locationName: 'CalculatedAttributeName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CalculatedAttributeName: {},
                DisplayName: {},
                Description: {
                  shape: 'Sa'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Statistic: {
                  shape: 'Sm'
                },
                Conditions: {
                  shape: 'Sf'
                },
                AttributeDetails: {
                  shape: 'Sb'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          GetCalculatedAttributeForProfile: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/profile/{ProfileId}/calculated-attributes/{CalculatedAttributeName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'ProfileId', 'CalculatedAttributeName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ProfileId: {
                  location: 'uri',
                  locationName: 'ProfileId'
                },
                CalculatedAttributeName: {
                  location: 'uri',
                  locationName: 'CalculatedAttributeName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CalculatedAttributeName: {},
                DisplayName: {},
                IsDataPartial: {},
                Value: {}
              }
            }
          },
          GetDomain: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainName', 'CreatedAt', 'LastUpdatedAt'],
              members: {
                DomainName: {},
                DefaultExpirationDays: {
                  type: 'integer'
                },
                DefaultEncryptionKey: {},
                DeadLetterQueueUrl: {},
                Stats: {
                  type: 'structure',
                  members: {
                    ProfileCount: {
                      type: 'long'
                    },
                    MeteringProfileCount: {
                      type: 'long'
                    },
                    ObjectCount: {
                      type: 'long'
                    },
                    TotalSize: {
                      type: 'long'
                    }
                  }
                },
                Matching: {
                  shape: 'S1o'
                },
                RuleBasedMatching: {
                  shape: 'S1p'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          GetEventStream: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/event-streams/{EventStreamName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'EventStreamName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                EventStreamName: {
                  location: 'uri',
                  locationName: 'EventStreamName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainName', 'EventStreamArn', 'CreatedAt', 'State', 'DestinationDetails'],
              members: {
                DomainName: {},
                EventStreamArn: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                State: {},
                StoppedSince: {
                  type: 'timestamp'
                },
                DestinationDetails: {
                  type: 'structure',
                  required: ['Uri', 'Status'],
                  members: {
                    Uri: {},
                    Status: {},
                    UnhealthySince: {
                      type: 'timestamp'
                    },
                    Message: {}
                  }
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          GetIdentityResolutionJob: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/identity-resolution-jobs/{JobId}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'JobId'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainName: {},
                JobId: {},
                Status: {},
                Message: {},
                JobStartTime: {
                  type: 'timestamp'
                },
                JobEndTime: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                JobExpirationTime: {
                  type: 'timestamp'
                },
                AutoMerging: {
                  shape: 'S11'
                },
                ExportingLocation: {
                  shape: 'S4y'
                },
                JobStats: {
                  shape: 'S51'
                }
              }
            }
          },
          GetIntegration: {
            http: {
              requestUri: '/domains/{DomainName}/integrations'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Uri'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Uri: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DomainName', 'Uri', 'CreatedAt', 'LastUpdatedAt'],
              members: {
                DomainName: {},
                Uri: {},
                ObjectTypeName: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                },
                ObjectTypeNames: {
                  shape: 'S54'
                },
                WorkflowId: {},
                IsUnstructured: {
                  type: 'boolean'
                }
              }
            }
          },
          GetMatches: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/matches'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MatchGenerationDate: {
                  type: 'timestamp'
                },
                PotentialMatches: {
                  type: 'integer'
                },
                Matches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MatchId: {},
                      ProfileIds: {
                        shape: 'S5c'
                      },
                      ConfidenceScore: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          GetProfileObjectType: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/object-types/{ObjectTypeName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'ObjectTypeName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ObjectTypeName: {
                  location: 'uri',
                  locationName: 'ObjectTypeName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ObjectTypeName', 'Description'],
              members: {
                ObjectTypeName: {},
                Description: {
                  shape: 'Sa'
                },
                TemplateId: {},
                ExpirationDays: {
                  type: 'integer'
                },
                EncryptionKey: {},
                AllowProfileCreation: {
                  type: 'boolean'
                },
                SourceLastUpdatedTimestampFormat: {},
                Fields: {
                  shape: 'S45'
                },
                Keys: {
                  shape: 'S49'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          GetProfileObjectTypeTemplate: {
            http: {
              method: 'GET',
              requestUri: '/templates/{TemplateId}'
            },
            input: {
              type: 'structure',
              required: ['TemplateId'],
              members: {
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateId: {},
                SourceName: {},
                SourceObject: {},
                AllowProfileCreation: {
                  type: 'boolean'
                },
                SourceLastUpdatedTimestampFormat: {},
                Fields: {
                  shape: 'S45'
                },
                Keys: {
                  shape: 'S49'
                }
              }
            }
          },
          GetSimilarProfiles: {
            http: {
              requestUri: '/domains/{DomainName}/matches'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'MatchType', 'SearchKey', 'SearchValue'],
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                MatchType: {},
                SearchKey: {},
                SearchValue: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileIds: {
                  shape: 'S5c'
                },
                MatchId: {},
                MatchType: {},
                RuleLevel: {
                  type: 'integer'
                },
                ConfidenceScore: {
                  type: 'double'
                },
                NextToken: {}
              }
            }
          },
          GetWorkflow: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/workflows/{WorkflowId}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'WorkflowId'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                WorkflowId: {
                  location: 'uri',
                  locationName: 'WorkflowId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkflowId: {},
                WorkflowType: {},
                Status: {},
                ErrorDescription: {},
                StartDate: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Attributes: {
                  type: 'structure',
                  members: {
                    AppflowIntegration: {
                      type: 'structure',
                      required: ['SourceConnectorType', 'ConnectorProfileName'],
                      members: {
                        SourceConnectorType: {},
                        ConnectorProfileName: {},
                        RoleArn: {}
                      }
                    }
                  }
                },
                Metrics: {
                  type: 'structure',
                  members: {
                    AppflowIntegration: {
                      type: 'structure',
                      required: ['RecordsProcessed', 'StepsCompleted', 'TotalSteps'],
                      members: {
                        RecordsProcessed: {
                          type: 'long'
                        },
                        StepsCompleted: {
                          type: 'long'
                        },
                        TotalSteps: {
                          type: 'long'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetWorkflowSteps: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/workflows/{WorkflowId}/steps'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'WorkflowId'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                WorkflowId: {
                  location: 'uri',
                  locationName: 'WorkflowId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkflowId: {},
                WorkflowType: {},
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppflowIntegration: {
                        type: 'structure',
                        required: ['FlowName', 'Status', 'ExecutionMessage', 'RecordsProcessed', 'BatchRecordsStartTime', 'BatchRecordsEndTime', 'CreatedAt', 'LastUpdatedAt'],
                        members: {
                          FlowName: {},
                          Status: {},
                          ExecutionMessage: {},
                          RecordsProcessed: {
                            type: 'long'
                          },
                          BatchRecordsStartTime: {},
                          BatchRecordsEndTime: {},
                          CreatedAt: {
                            type: 'timestamp'
                          },
                          LastUpdatedAt: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAccountIntegrations: {
            http: {
              requestUri: '/integrations'
            },
            input: {
              type: 'structure',
              required: ['Uri'],
              members: {
                Uri: {},
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                IncludeHidden: {
                  location: 'querystring',
                  locationName: 'include-hidden',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  shape: 'S60'
                },
                NextToken: {}
              }
            }
          },
          ListCalculatedAttributeDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/calculated-attributes'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CalculatedAttributeName: {},
                      DisplayName: {},
                      Description: {
                        shape: 'Sa'
                      },
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      Tags: {
                        shape: 'Sn'
                      }
                    }
                  },
                  sensitive: true
                },
                NextToken: {}
              }
            }
          },
          ListCalculatedAttributesForProfile: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/profile/{ProfileId}/calculated-attributes'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'ProfileId'],
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ProfileId: {
                  location: 'uri',
                  locationName: 'ProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CalculatedAttributeName: {},
                      DisplayName: {},
                      IsDataPartial: {},
                      Value: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDomains: {
            http: {
              method: 'GET',
              requestUri: '/domains'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DomainName', 'CreatedAt', 'LastUpdatedAt'],
                    members: {
                      DomainName: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      Tags: {
                        shape: 'Sn'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEventStreams: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/event-streams'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DomainName', 'EventStreamName', 'EventStreamArn', 'State'],
                    members: {
                      DomainName: {},
                      EventStreamName: {},
                      EventStreamArn: {},
                      State: {},
                      StoppedSince: {
                        type: 'timestamp'
                      },
                      DestinationSummary: {
                        type: 'structure',
                        required: ['Uri', 'Status'],
                        members: {
                          Uri: {},
                          Status: {},
                          UnhealthySince: {
                            type: 'timestamp'
                          }
                        }
                      },
                      Tags: {
                        shape: 'Sn'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIdentityResolutionJobs: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/identity-resolution-jobs'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityResolutionJobsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainName: {},
                      JobId: {},
                      Status: {},
                      JobStartTime: {
                        type: 'timestamp'
                      },
                      JobEndTime: {
                        type: 'timestamp'
                      },
                      JobStats: {
                        shape: 'S51'
                      },
                      ExportingLocation: {
                        shape: 'S4y'
                      },
                      Message: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIntegrations: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/integrations'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                IncludeHidden: {
                  location: 'querystring',
                  locationName: 'include-hidden',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  shape: 'S60'
                },
                NextToken: {}
              }
            }
          },
          ListProfileObjectTypeTemplates: {
            http: {
              method: 'GET',
              requestUri: '/templates'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TemplateId: {},
                      SourceName: {},
                      SourceObject: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProfileObjectTypes: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/object-types'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ObjectTypeName', 'Description'],
                    members: {
                      ObjectTypeName: {},
                      Description: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      Tags: {
                        shape: 'Sn'
                      }
                    }
                  },
                  sensitive: true
                },
                NextToken: {}
              }
            }
          },
          ListProfileObjects: {
            http: {
              requestUri: '/domains/{DomainName}/profiles/objects'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'ObjectTypeName', 'ProfileId'],
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ObjectTypeName: {},
                ProfileId: {},
                ObjectFilter: {
                  type: 'structure',
                  required: ['KeyName', 'Values'],
                  members: {
                    KeyName: {},
                    Values: {
                      shape: 'S4'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ObjectTypeName: {},
                      ProfileObjectUniqueKey: {},
                      Object: {
                        shape: 'S41'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRuleBasedMatches: {
            http: {
              method: 'GET',
              requestUri: '/domains/{DomainName}/profiles/ruleBasedMatches'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MatchIds: {
                  type: 'list',
                  member: {}
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
                  shape: 'Sn'
                }
              }
            }
          },
          ListWorkflows: {
            http: {
              requestUri: '/domains/{DomainName}/workflows'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                WorkflowType: {},
                Status: {},
                QueryStartDate: {
                  type: 'timestamp'
                },
                QueryEndDate: {
                  type: 'timestamp'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['WorkflowType', 'WorkflowId', 'Status', 'StatusDescription', 'CreatedAt', 'LastUpdatedAt'],
                    members: {
                      WorkflowType: {},
                      WorkflowId: {},
                      Status: {},
                      StatusDescription: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          MergeProfiles: {
            http: {
              requestUri: '/domains/{DomainName}/profiles/objects/merge'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'MainProfileId', 'ProfileIdsToBeMerged'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                MainProfileId: {},
                ProfileIdsToBeMerged: {
                  type: 'list',
                  member: {}
                },
                FieldSourceProfileIds: {
                  type: 'structure',
                  members: {
                    AccountNumber: {},
                    AdditionalInformation: {},
                    PartyType: {},
                    BusinessName: {},
                    FirstName: {},
                    MiddleName: {},
                    LastName: {},
                    BirthDate: {},
                    Gender: {},
                    PhoneNumber: {},
                    MobilePhoneNumber: {},
                    HomePhoneNumber: {},
                    BusinessPhoneNumber: {},
                    EmailAddress: {},
                    PersonalEmailAddress: {},
                    BusinessEmailAddress: {},
                    Address: {},
                    ShippingAddress: {},
                    MailingAddress: {},
                    BillingAddress: {},
                    Attributes: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {}
              }
            }
          },
          PutIntegration: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{DomainName}/integrations'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Uri: {},
                ObjectTypeName: {},
                Tags: {
                  shape: 'Sn'
                },
                FlowDefinition: {
                  shape: 'S1x'
                },
                ObjectTypeNames: {
                  shape: 'S54'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainName', 'Uri', 'CreatedAt', 'LastUpdatedAt'],
              members: {
                DomainName: {},
                Uri: {},
                ObjectTypeName: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                },
                ObjectTypeNames: {
                  shape: 'S54'
                },
                WorkflowId: {},
                IsUnstructured: {
                  type: 'boolean'
                }
              }
            }
          },
          PutProfileObject: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{DomainName}/profiles/objects'
            },
            input: {
              type: 'structure',
              required: ['ObjectTypeName', 'Object', 'DomainName'],
              members: {
                ObjectTypeName: {},
                Object: {
                  shape: 'S41'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileObjectUniqueKey: {}
              }
            }
          },
          PutProfileObjectType: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{DomainName}/object-types/{ObjectTypeName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'ObjectTypeName', 'Description'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ObjectTypeName: {
                  location: 'uri',
                  locationName: 'ObjectTypeName'
                },
                Description: {
                  shape: 'Sa'
                },
                TemplateId: {},
                ExpirationDays: {
                  type: 'integer'
                },
                EncryptionKey: {},
                AllowProfileCreation: {
                  type: 'boolean'
                },
                SourceLastUpdatedTimestampFormat: {},
                Fields: {
                  shape: 'S45'
                },
                Keys: {
                  shape: 'S49'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ObjectTypeName', 'Description'],
              members: {
                ObjectTypeName: {},
                Description: {
                  shape: 'Sa'
                },
                TemplateId: {},
                ExpirationDays: {
                  type: 'integer'
                },
                EncryptionKey: {},
                AllowProfileCreation: {
                  type: 'boolean'
                },
                SourceLastUpdatedTimestampFormat: {},
                Fields: {
                  shape: 'S45'
                },
                Keys: {
                  shape: 'S49'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          SearchProfiles: {
            http: {
              requestUri: '/domains/{DomainName}/profiles/search'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'KeyName', 'Values'],
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                KeyName: {},
                Values: {
                  shape: 'S4'
                },
                AdditionalSearchKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['KeyName', 'Values'],
                    members: {
                      KeyName: {},
                      Values: {
                        shape: 'S4'
                      }
                    }
                  }
                },
                LogicalOperator: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProfileId: {},
                      AccountNumber: {
                        shape: 'S39'
                      },
                      AdditionalInformation: {
                        shape: 'S3a'
                      },
                      PartyType: {
                        shape: 'S3b'
                      },
                      BusinessName: {
                        shape: 'S39'
                      },
                      FirstName: {
                        shape: 'S39'
                      },
                      MiddleName: {
                        shape: 'S39'
                      },
                      LastName: {
                        shape: 'S39'
                      },
                      BirthDate: {
                        shape: 'S39'
                      },
                      Gender: {
                        shape: 'S3c'
                      },
                      PhoneNumber: {
                        shape: 'S39'
                      },
                      MobilePhoneNumber: {
                        shape: 'S39'
                      },
                      HomePhoneNumber: {
                        shape: 'S39'
                      },
                      BusinessPhoneNumber: {
                        shape: 'S39'
                      },
                      EmailAddress: {
                        shape: 'S39'
                      },
                      PersonalEmailAddress: {
                        shape: 'S39'
                      },
                      BusinessEmailAddress: {
                        shape: 'S39'
                      },
                      Address: {
                        shape: 'S3d'
                      },
                      ShippingAddress: {
                        shape: 'S3d'
                      },
                      MailingAddress: {
                        shape: 'S3d'
                      },
                      BillingAddress: {
                        shape: 'S3d'
                      },
                      Attributes: {
                        shape: 'S3e'
                      },
                      FoundByItems: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            KeyName: {},
                            Values: {
                              shape: 'S4'
                            }
                          }
                        }
                      },
                      PartyTypeString: {
                        shape: 'S39'
                      },
                      GenderString: {
                        shape: 'S39'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
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
                  shape: 'Sn'
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
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateCalculatedAttributeDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'CalculatedAttributeName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                CalculatedAttributeName: {
                  location: 'uri',
                  locationName: 'CalculatedAttributeName'
                },
                DisplayName: {},
                Description: {
                  shape: 'Sa'
                },
                Conditions: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CalculatedAttributeName: {},
                DisplayName: {},
                Description: {
                  shape: 'Sa'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Statistic: {
                  shape: 'Sm'
                },
                Conditions: {
                  shape: 'Sf'
                },
                AttributeDetails: {
                  shape: 'Sb'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          UpdateDomain: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{DomainName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                DefaultExpirationDays: {
                  type: 'integer'
                },
                DefaultEncryptionKey: {},
                DeadLetterQueueUrl: {},
                Matching: {
                  shape: 'Sw'
                },
                RuleBasedMatching: {
                  shape: 'S1c'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainName', 'CreatedAt', 'LastUpdatedAt'],
              members: {
                DomainName: {},
                DefaultExpirationDays: {
                  type: 'integer'
                },
                DefaultEncryptionKey: {},
                DeadLetterQueueUrl: {},
                Matching: {
                  shape: 'S1o'
                },
                RuleBasedMatching: {
                  shape: 'S1p'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                }
              }
            }
          },
          UpdateProfile: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{DomainName}/profiles'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'ProfileId'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ProfileId: {},
                AdditionalInformation: {
                  type: 'string',
                  sensitive: true
                },
                AccountNumber: {
                  shape: 'S87'
                },
                PartyType: {
                  shape: 'S3b'
                },
                BusinessName: {
                  shape: 'S87'
                },
                FirstName: {
                  shape: 'S87'
                },
                MiddleName: {
                  shape: 'S87'
                },
                LastName: {
                  shape: 'S87'
                },
                BirthDate: {
                  shape: 'S87'
                },
                Gender: {
                  shape: 'S3c'
                },
                PhoneNumber: {
                  shape: 'S87'
                },
                MobilePhoneNumber: {
                  shape: 'S87'
                },
                HomePhoneNumber: {
                  shape: 'S87'
                },
                BusinessPhoneNumber: {
                  shape: 'S87'
                },
                EmailAddress: {
                  shape: 'S87'
                },
                PersonalEmailAddress: {
                  shape: 'S87'
                },
                BusinessEmailAddress: {
                  shape: 'S87'
                },
                Address: {
                  shape: 'S88'
                },
                ShippingAddress: {
                  shape: 'S88'
                },
                MailingAddress: {
                  shape: 'S88'
                },
                BillingAddress: {
                  shape: 'S88'
                },
                Attributes: {
                  type: 'map',
                  key: {},
                  value: {},
                  sensitive: true
                },
                PartyTypeString: {
                  shape: 'S87'
                },
                GenderString: {
                  shape: 'S87'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {}
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {}
          },
          Sa: {
            type: 'string',
            sensitive: true
          },
          Sb: {
            type: 'structure',
            required: ['Attributes', 'Expression'],
            members: {
              Attributes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {}
                  }
                }
              },
              Expression: {}
            },
            sensitive: true
          },
          Sf: {
            type: 'structure',
            members: {
              Range: {
                type: 'structure',
                required: ['Value', 'Unit'],
                members: {
                  Value: {
                    type: 'integer'
                  },
                  Unit: {}
                }
              },
              ObjectCount: {
                type: 'integer'
              },
              Threshold: {
                type: 'structure',
                required: ['Value', 'Operator'],
                members: {
                  Value: {},
                  Operator: {}
                }
              }
            },
            sensitive: true
          },
          Sm: {
            type: 'string',
            sensitive: true
          },
          Sn: {
            type: 'map',
            key: {},
            value: {}
          },
          Sw: {
            type: 'structure',
            required: ['Enabled'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              JobSchedule: {
                shape: 'Sy'
              },
              AutoMerging: {
                shape: 'S11'
              },
              ExportingConfig: {
                shape: 'S18'
              }
            }
          },
          Sy: {
            type: 'structure',
            required: ['DayOfTheWeek', 'Time'],
            members: {
              DayOfTheWeek: {},
              Time: {}
            }
          },
          S11: {
            type: 'structure',
            required: ['Enabled'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              Consolidation: {
                shape: 'S12'
              },
              ConflictResolution: {
                shape: 'S15'
              },
              MinAllowedConfidenceScoreForMerging: {
                type: 'double'
              }
            }
          },
          S12: {
            type: 'structure',
            required: ['MatchingAttributesList'],
            members: {
              MatchingAttributesList: {
                type: 'list',
                member: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S15: {
            type: 'structure',
            required: ['ConflictResolvingModel'],
            members: {
              ConflictResolvingModel: {},
              SourceName: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              S3Exporting: {
                type: 'structure',
                required: ['S3BucketName'],
                members: {
                  S3BucketName: {},
                  S3KeyName: {}
                }
              }
            }
          },
          S1c: {
            type: 'structure',
            required: ['Enabled'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              MatchingRules: {
                shape: 'S1d'
              },
              MaxAllowedRuleLevelForMerging: {
                type: 'integer'
              },
              MaxAllowedRuleLevelForMatching: {
                type: 'integer'
              },
              AttributeTypesSelector: {
                shape: 'S1i'
              },
              ConflictResolution: {
                shape: 'S15'
              },
              ExportingConfig: {
                shape: 'S18'
              }
            }
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Rule'],
              members: {
                Rule: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1i: {
            type: 'structure',
            required: ['AttributeMatchingModel'],
            members: {
              AttributeMatchingModel: {},
              Address: {
                type: 'list',
                member: {}
              },
              PhoneNumber: {
                type: 'list',
                member: {}
              },
              EmailAddress: {
                type: 'list',
                member: {}
              }
            }
          },
          S1o: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              JobSchedule: {
                shape: 'Sy'
              },
              AutoMerging: {
                shape: 'S11'
              },
              ExportingConfig: {
                shape: 'S18'
              }
            }
          },
          S1p: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              MatchingRules: {
                shape: 'S1d'
              },
              Status: {},
              MaxAllowedRuleLevelForMerging: {
                type: 'integer'
              },
              MaxAllowedRuleLevelForMatching: {
                type: 'integer'
              },
              AttributeTypesSelector: {
                shape: 'S1i'
              },
              ConflictResolution: {
                shape: 'S15'
              },
              ExportingConfig: {
                shape: 'S18'
              }
            }
          },
          S1x: {
            type: 'structure',
            required: ['FlowName', 'KmsArn', 'SourceFlowConfig', 'Tasks', 'TriggerConfig'],
            members: {
              Description: {},
              FlowName: {},
              KmsArn: {},
              SourceFlowConfig: {
                type: 'structure',
                required: ['ConnectorType', 'SourceConnectorProperties'],
                members: {
                  ConnectorProfileName: {},
                  ConnectorType: {},
                  IncrementalPullConfig: {
                    type: 'structure',
                    members: {
                      DatetimeTypeFieldName: {}
                    }
                  },
                  SourceConnectorProperties: {
                    type: 'structure',
                    members: {
                      Marketo: {
                        type: 'structure',
                        required: ['Object'],
                        members: {
                          Object: {}
                        }
                      },
                      S3: {
                        type: 'structure',
                        required: ['BucketName'],
                        members: {
                          BucketName: {},
                          BucketPrefix: {}
                        }
                      },
                      Salesforce: {
                        type: 'structure',
                        required: ['Object'],
                        members: {
                          Object: {},
                          EnableDynamicFieldUpdate: {
                            type: 'boolean'
                          },
                          IncludeDeletedRecords: {
                            type: 'boolean'
                          }
                        }
                      },
                      ServiceNow: {
                        type: 'structure',
                        required: ['Object'],
                        members: {
                          Object: {}
                        }
                      },
                      Zendesk: {
                        type: 'structure',
                        required: ['Object'],
                        members: {
                          Object: {}
                        }
                      }
                    }
                  }
                }
              },
              Tasks: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['SourceFields', 'TaskType'],
                  members: {
                    ConnectorOperator: {
                      type: 'structure',
                      members: {
                        Marketo: {},
                        S3: {},
                        Salesforce: {},
                        ServiceNow: {},
                        Zendesk: {}
                      }
                    },
                    DestinationField: {},
                    SourceFields: {
                      type: 'list',
                      member: {}
                    },
                    TaskProperties: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    TaskType: {}
                  }
                }
              },
              TriggerConfig: {
                type: 'structure',
                required: ['TriggerType'],
                members: {
                  TriggerType: {},
                  TriggerProperties: {
                    type: 'structure',
                    members: {
                      Scheduled: {
                        type: 'structure',
                        required: ['ScheduleExpression'],
                        members: {
                          ScheduleExpression: {},
                          DataPullMode: {},
                          ScheduleStartTime: {
                            type: 'timestamp'
                          },
                          ScheduleEndTime: {
                            type: 'timestamp'
                          },
                          Timezone: {},
                          ScheduleOffset: {
                            type: 'long'
                          },
                          FirstExecutionFrom: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            sensitive: true
          },
          S39: {
            type: 'string',
            sensitive: true
          },
          S3a: {
            type: 'string',
            sensitive: true
          },
          S3b: {
            type: 'string',
            deprecated: true,
            sensitive: true
          },
          S3c: {
            type: 'string',
            deprecated: true,
            sensitive: true
          },
          S3d: {
            type: 'structure',
            members: {
              Address1: {},
              Address2: {},
              Address3: {},
              Address4: {},
              City: {},
              County: {},
              State: {},
              Province: {},
              Country: {},
              PostalCode: {}
            },
            sensitive: true
          },
          S3e: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S41: {
            type: 'string',
            sensitive: true
          },
          S45: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Source: {},
                Target: {},
                ContentType: {}
              }
            },
            sensitive: true
          },
          S49: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {
                type: 'structure',
                members: {
                  StandardIdentifiers: {
                    type: 'list',
                    member: {}
                  },
                  FieldNames: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            },
            sensitive: true
          },
          S4y: {
            type: 'structure',
            members: {
              S3Exporting: {
                type: 'structure',
                members: {
                  S3BucketName: {},
                  S3KeyName: {}
                }
              }
            }
          },
          S51: {
            type: 'structure',
            members: {
              NumberOfProfilesReviewed: {
                type: 'long'
              },
              NumberOfMatchesFound: {
                type: 'long'
              },
              NumberOfMergesDone: {
                type: 'long'
              }
            }
          },
          S54: {
            type: 'map',
            key: {},
            value: {}
          },
          S5c: {
            type: 'list',
            member: {}
          },
          S60: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DomainName', 'Uri', 'CreatedAt', 'LastUpdatedAt'],
              members: {
                DomainName: {},
                Uri: {},
                ObjectTypeName: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                LastUpdatedAt: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sn'
                },
                ObjectTypeNames: {
                  shape: 'S54'
                },
                WorkflowId: {},
                IsUnstructured: {
                  type: 'boolean'
                }
              }
            }
          },
          S87: {
            type: 'string',
            sensitive: true
          },
          S88: {
            type: 'structure',
            members: {
              Address1: {},
              Address2: {},
              Address3: {},
              Address4: {},
              City: {},
              County: {},
              State: {},
              Province: {},
              Country: {},
              PostalCode: {}
            },
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ca30664815f04a3fea971a9a0ca1fe33d489d8bc.js.map