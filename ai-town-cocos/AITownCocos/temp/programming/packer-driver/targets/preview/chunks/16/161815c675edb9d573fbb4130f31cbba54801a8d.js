System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-03-31',
          endpointPrefix: 'sms-voice',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'Amazon Pinpoint SMS Voice V2',
          serviceId: 'Pinpoint SMS Voice V2',
          signatureVersion: 'v4',
          signingName: 'sms-voice',
          targetPrefix: 'PinpointSMSVoiceV2',
          uid: 'pinpoint-sms-voice-v2-2022-03-31'
        },
        operations: {
          AssociateOriginationIdentity: {
            input: {
              type: 'structure',
              required: ['PoolId', 'OriginationIdentity', 'IsoCountryCode'],
              members: {
                PoolId: {},
                OriginationIdentity: {},
                IsoCountryCode: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PoolArn: {},
                PoolId: {},
                OriginationIdentityArn: {},
                OriginationIdentity: {},
                IsoCountryCode: {}
              }
            }
          },
          AssociateProtectConfiguration: {
            input: {
              type: 'structure',
              required: ['ProtectConfigurationId', 'ConfigurationSetName'],
              members: {
                ProtectConfigurationId: {},
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConfigurationSetArn', 'ConfigurationSetName', 'ProtectConfigurationArn', 'ProtectConfigurationId'],
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                ProtectConfigurationArn: {},
                ProtectConfigurationId: {}
              }
            }
          },
          CreateConfigurationSet: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {},
                Tags: {
                  shape: 'Sg'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                Tags: {
                  shape: 'Sg'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateEventDestination: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestinationName', 'MatchingEventTypes'],
              members: {
                ConfigurationSetName: {},
                EventDestinationName: {},
                MatchingEventTypes: {
                  shape: 'So'
                },
                CloudWatchLogsDestination: {
                  shape: 'Sq'
                },
                KinesisFirehoseDestination: {
                  shape: 'St'
                },
                SnsDestination: {
                  shape: 'Sv'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                EventDestination: {
                  shape: 'Sy'
                }
              }
            }
          },
          CreateOptOutList: {
            input: {
              type: 'structure',
              required: ['OptOutListName'],
              members: {
                OptOutListName: {},
                Tags: {
                  shape: 'Sg'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OptOutListArn: {},
                OptOutListName: {},
                Tags: {
                  shape: 'Sg'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreatePool: {
            input: {
              type: 'structure',
              required: ['OriginationIdentity', 'IsoCountryCode', 'MessageType'],
              members: {
                OriginationIdentity: {},
                IsoCountryCode: {},
                MessageType: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sg'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PoolArn: {},
                PoolId: {},
                Status: {},
                MessageType: {},
                TwoWayEnabled: {
                  type: 'boolean'
                },
                TwoWayChannelArn: {},
                TwoWayChannelRole: {},
                SelfManagedOptOutsEnabled: {
                  type: 'boolean'
                },
                OptOutListName: {},
                SharedRoutesEnabled: {
                  type: 'boolean'
                },
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sg'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateProtectConfiguration: {
            input: {
              type: 'structure',
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProtectConfigurationArn', 'ProtectConfigurationId', 'CreatedTimestamp', 'AccountDefault', 'DeletionProtectionEnabled'],
              members: {
                ProtectConfigurationArn: {},
                ProtectConfigurationId: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                AccountDefault: {
                  type: 'boolean'
                },
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sg'
                }
              }
            }
          },
          CreateRegistration: {
            input: {
              type: 'structure',
              required: ['RegistrationType'],
              members: {
                RegistrationType: {},
                Tags: {
                  shape: 'Sg'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'RegistrationType', 'RegistrationStatus', 'CurrentVersionNumber', 'CreatedTimestamp'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                RegistrationType: {},
                RegistrationStatus: {},
                CurrentVersionNumber: {
                  type: 'long'
                },
                AdditionalAttributes: {
                  shape: 'S1g'
                },
                Tags: {
                  shape: 'Sg'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateRegistrationAssociation: {
            input: {
              type: 'structure',
              required: ['RegistrationId', 'ResourceId'],
              members: {
                RegistrationId: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'RegistrationType', 'ResourceArn', 'ResourceId', 'ResourceType'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                RegistrationType: {},
                ResourceArn: {},
                ResourceId: {},
                ResourceType: {},
                IsoCountryCode: {},
                PhoneNumber: {}
              }
            }
          },
          CreateRegistrationAttachment: {
            input: {
              type: 'structure',
              members: {
                AttachmentBody: {
                  type: 'blob'
                },
                AttachmentUrl: {},
                Tags: {
                  shape: 'Sg'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationAttachmentArn', 'RegistrationAttachmentId', 'AttachmentStatus', 'CreatedTimestamp'],
              members: {
                RegistrationAttachmentArn: {},
                RegistrationAttachmentId: {},
                AttachmentStatus: {},
                Tags: {
                  shape: 'Sg'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateRegistrationVersion: {
            input: {
              type: 'structure',
              required: ['RegistrationId'],
              members: {
                RegistrationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'VersionNumber', 'RegistrationVersionStatus', 'RegistrationVersionStatusHistory'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                VersionNumber: {
                  type: 'long'
                },
                RegistrationVersionStatus: {},
                RegistrationVersionStatusHistory: {
                  shape: 'S1u'
                }
              }
            }
          },
          CreateVerifiedDestinationNumber: {
            input: {
              type: 'structure',
              required: ['DestinationPhoneNumber'],
              members: {
                DestinationPhoneNumber: {},
                Tags: {
                  shape: 'Sg'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VerifiedDestinationNumberArn', 'VerifiedDestinationNumberId', 'DestinationPhoneNumber', 'Status', 'CreatedTimestamp'],
              members: {
                VerifiedDestinationNumberArn: {},
                VerifiedDestinationNumberId: {},
                DestinationPhoneNumber: {},
                Status: {},
                Tags: {
                  shape: 'Sg'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteAccountDefaultProtectConfiguration: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['DefaultProtectConfigurationArn', 'DefaultProtectConfigurationId'],
              members: {
                DefaultProtectConfigurationArn: {},
                DefaultProtectConfigurationId: {}
              }
            }
          },
          DeleteConfigurationSet: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                EventDestinations: {
                  shape: 'S22'
                },
                DefaultMessageType: {},
                DefaultSenderId: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteDefaultMessageType: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                MessageType: {}
              }
            }
          },
          DeleteDefaultSenderId: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                SenderId: {}
              }
            }
          },
          DeleteEventDestination: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestinationName'],
              members: {
                ConfigurationSetName: {},
                EventDestinationName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                EventDestination: {
                  shape: 'Sy'
                }
              }
            }
          },
          DeleteKeyword: {
            input: {
              type: 'structure',
              required: ['OriginationIdentity', 'Keyword'],
              members: {
                OriginationIdentity: {},
                Keyword: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OriginationIdentityArn: {},
                OriginationIdentity: {},
                Keyword: {},
                KeywordMessage: {},
                KeywordAction: {}
              }
            }
          },
          DeleteMediaMessageSpendLimitOverride: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            }
          },
          DeleteOptOutList: {
            input: {
              type: 'structure',
              required: ['OptOutListName'],
              members: {
                OptOutListName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OptOutListArn: {},
                OptOutListName: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteOptedOutNumber: {
            input: {
              type: 'structure',
              required: ['OptOutListName', 'OptedOutNumber'],
              members: {
                OptOutListName: {},
                OptedOutNumber: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OptOutListArn: {},
                OptOutListName: {},
                OptedOutNumber: {},
                OptedOutTimestamp: {
                  type: 'timestamp'
                },
                EndUserOptedOut: {
                  type: 'boolean'
                }
              }
            }
          },
          DeletePool: {
            input: {
              type: 'structure',
              required: ['PoolId'],
              members: {
                PoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PoolArn: {},
                PoolId: {},
                Status: {},
                MessageType: {},
                TwoWayEnabled: {
                  type: 'boolean'
                },
                TwoWayChannelArn: {},
                TwoWayChannelRole: {},
                SelfManagedOptOutsEnabled: {
                  type: 'boolean'
                },
                OptOutListName: {},
                SharedRoutesEnabled: {
                  type: 'boolean'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteProtectConfiguration: {
            input: {
              type: 'structure',
              required: ['ProtectConfigurationId'],
              members: {
                ProtectConfigurationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ProtectConfigurationArn', 'ProtectConfigurationId', 'CreatedTimestamp', 'AccountDefault', 'DeletionProtectionEnabled'],
              members: {
                ProtectConfigurationArn: {},
                ProtectConfigurationId: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                AccountDefault: {
                  type: 'boolean'
                },
                DeletionProtectionEnabled: {
                  type: 'boolean'
                }
              }
            }
          },
          DeleteRegistration: {
            input: {
              type: 'structure',
              required: ['RegistrationId'],
              members: {
                RegistrationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'RegistrationType', 'RegistrationStatus', 'CurrentVersionNumber', 'CreatedTimestamp'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                RegistrationType: {},
                RegistrationStatus: {},
                CurrentVersionNumber: {
                  type: 'long'
                },
                ApprovedVersionNumber: {
                  type: 'long'
                },
                LatestDeniedVersionNumber: {
                  type: 'long'
                },
                AdditionalAttributes: {
                  shape: 'S1g'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteRegistrationAttachment: {
            input: {
              type: 'structure',
              required: ['RegistrationAttachmentId'],
              members: {
                RegistrationAttachmentId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationAttachmentArn', 'RegistrationAttachmentId', 'AttachmentStatus', 'CreatedTimestamp'],
              members: {
                RegistrationAttachmentArn: {},
                RegistrationAttachmentId: {},
                AttachmentStatus: {},
                AttachmentUploadErrorReason: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteRegistrationFieldValue: {
            input: {
              type: 'structure',
              required: ['RegistrationId', 'FieldPath'],
              members: {
                RegistrationId: {},
                FieldPath: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'VersionNumber', 'FieldPath'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                VersionNumber: {
                  type: 'long'
                },
                FieldPath: {},
                SelectChoices: {
                  shape: 'S31'
                },
                TextValue: {},
                RegistrationAttachmentId: {}
              }
            }
          },
          DeleteTextMessageSpendLimitOverride: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            }
          },
          DeleteVerifiedDestinationNumber: {
            input: {
              type: 'structure',
              required: ['VerifiedDestinationNumberId'],
              members: {
                VerifiedDestinationNumberId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VerifiedDestinationNumberArn', 'VerifiedDestinationNumberId', 'DestinationPhoneNumber', 'CreatedTimestamp'],
              members: {
                VerifiedDestinationNumberArn: {},
                VerifiedDestinationNumberId: {},
                DestinationPhoneNumber: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteVoiceMessageSpendLimitOverride: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            }
          },
          DescribeAccountAttributes: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAttributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Value'],
                    members: {
                      Name: {},
                      Value: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAccountLimits: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountLimits: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Used', 'Max'],
                    members: {
                      Name: {},
                      Used: {
                        type: 'long'
                      },
                      Max: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConfigurationSets: {
            input: {
              type: 'structure',
              members: {
                ConfigurationSetNames: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
                ConfigurationSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ConfigurationSetArn', 'ConfigurationSetName', 'EventDestinations', 'CreatedTimestamp'],
                    members: {
                      ConfigurationSetArn: {},
                      ConfigurationSetName: {},
                      EventDestinations: {
                        shape: 'S22'
                      },
                      DefaultMessageType: {},
                      DefaultSenderId: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      },
                      ProtectConfigurationId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeKeywords: {
            input: {
              type: 'structure',
              required: ['OriginationIdentity'],
              members: {
                OriginationIdentity: {},
                Keywords: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
                OriginationIdentityArn: {},
                OriginationIdentity: {},
                Keywords: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Keyword', 'KeywordMessage', 'KeywordAction'],
                    members: {
                      Keyword: {},
                      KeywordMessage: {},
                      KeywordAction: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeOptOutLists: {
            input: {
              type: 'structure',
              members: {
                OptOutListNames: {
                  type: 'list',
                  member: {}
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
                OptOutLists: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['OptOutListArn', 'OptOutListName', 'CreatedTimestamp'],
                    members: {
                      OptOutListArn: {},
                      OptOutListName: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeOptedOutNumbers: {
            input: {
              type: 'structure',
              required: ['OptOutListName'],
              members: {
                OptOutListName: {},
                OptedOutNumbers: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
                OptOutListArn: {},
                OptOutListName: {},
                OptedOutNumbers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['OptedOutNumber', 'OptedOutTimestamp', 'EndUserOptedOut'],
                    members: {
                      OptedOutNumber: {},
                      OptedOutTimestamp: {
                        type: 'timestamp'
                      },
                      EndUserOptedOut: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePhoneNumbers: {
            input: {
              type: 'structure',
              members: {
                PhoneNumberIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
                PhoneNumbers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['PhoneNumberArn', 'PhoneNumber', 'Status', 'IsoCountryCode', 'MessageType', 'NumberCapabilities', 'NumberType', 'MonthlyLeasingPrice', 'TwoWayEnabled', 'SelfManagedOptOutsEnabled', 'OptOutListName', 'DeletionProtectionEnabled', 'CreatedTimestamp'],
                    members: {
                      PhoneNumberArn: {},
                      PhoneNumberId: {},
                      PhoneNumber: {},
                      Status: {},
                      IsoCountryCode: {},
                      MessageType: {},
                      NumberCapabilities: {
                        shape: 'S4t'
                      },
                      NumberType: {},
                      MonthlyLeasingPrice: {},
                      TwoWayEnabled: {
                        type: 'boolean'
                      },
                      TwoWayChannelArn: {},
                      TwoWayChannelRole: {},
                      SelfManagedOptOutsEnabled: {
                        type: 'boolean'
                      },
                      OptOutListName: {},
                      DeletionProtectionEnabled: {
                        type: 'boolean'
                      },
                      PoolId: {},
                      RegistrationId: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePools: {
            input: {
              type: 'structure',
              members: {
                PoolIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
                Pools: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['PoolArn', 'PoolId', 'Status', 'MessageType', 'TwoWayEnabled', 'SelfManagedOptOutsEnabled', 'OptOutListName', 'SharedRoutesEnabled', 'DeletionProtectionEnabled', 'CreatedTimestamp'],
                    members: {
                      PoolArn: {},
                      PoolId: {},
                      Status: {},
                      MessageType: {},
                      TwoWayEnabled: {
                        type: 'boolean'
                      },
                      TwoWayChannelArn: {},
                      TwoWayChannelRole: {},
                      SelfManagedOptOutsEnabled: {
                        type: 'boolean'
                      },
                      OptOutListName: {},
                      SharedRoutesEnabled: {
                        type: 'boolean'
                      },
                      DeletionProtectionEnabled: {
                        type: 'boolean'
                      },
                      CreatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeProtectConfigurations: {
            input: {
              type: 'structure',
              members: {
                ProtectConfigurationIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
                ProtectConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ProtectConfigurationArn', 'ProtectConfigurationId', 'CreatedTimestamp', 'AccountDefault', 'DeletionProtectionEnabled'],
                    members: {
                      ProtectConfigurationArn: {},
                      ProtectConfigurationId: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      },
                      AccountDefault: {
                        type: 'boolean'
                      },
                      DeletionProtectionEnabled: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRegistrationAttachments: {
            input: {
              type: 'structure',
              members: {
                RegistrationAttachmentIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
              required: ['RegistrationAttachments'],
              members: {
                RegistrationAttachments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RegistrationAttachmentArn', 'RegistrationAttachmentId', 'AttachmentStatus', 'CreatedTimestamp'],
                    members: {
                      RegistrationAttachmentArn: {},
                      RegistrationAttachmentId: {},
                      AttachmentStatus: {},
                      AttachmentUploadErrorReason: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRegistrationFieldDefinitions: {
            input: {
              type: 'structure',
              required: ['RegistrationType'],
              members: {
                RegistrationType: {},
                SectionPath: {},
                FieldPaths: {
                  shape: 'S5m'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationType', 'RegistrationFieldDefinitions'],
              members: {
                RegistrationType: {},
                RegistrationFieldDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SectionPath', 'FieldPath', 'FieldType', 'FieldRequirement', 'DisplayHints'],
                    members: {
                      SectionPath: {},
                      FieldPath: {},
                      FieldType: {},
                      FieldRequirement: {},
                      SelectValidation: {
                        type: 'structure',
                        required: ['MinChoices', 'MaxChoices', 'Options'],
                        members: {
                          MinChoices: {
                            type: 'integer'
                          },
                          MaxChoices: {
                            type: 'integer'
                          },
                          Options: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      TextValidation: {
                        type: 'structure',
                        required: ['MinLength', 'MaxLength', 'Pattern'],
                        members: {
                          MinLength: {
                            type: 'integer'
                          },
                          MaxLength: {
                            type: 'integer'
                          },
                          Pattern: {}
                        }
                      },
                      DisplayHints: {
                        type: 'structure',
                        required: ['Title', 'ShortDescription'],
                        members: {
                          Title: {},
                          ShortDescription: {},
                          LongDescription: {},
                          DocumentationTitle: {},
                          DocumentationLink: {},
                          SelectOptionDescriptions: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['Option'],
                              members: {
                                Option: {},
                                Title: {},
                                Description: {}
                              }
                            }
                          },
                          TextValidationDescription: {},
                          ExampleTextValue: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRegistrationFieldValues: {
            input: {
              type: 'structure',
              required: ['RegistrationId'],
              members: {
                RegistrationId: {},
                VersionNumber: {
                  type: 'long'
                },
                SectionPath: {},
                FieldPaths: {
                  shape: 'S5m'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'VersionNumber', 'RegistrationFieldValues'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                VersionNumber: {
                  type: 'long'
                },
                RegistrationFieldValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FieldPath'],
                    members: {
                      FieldPath: {},
                      SelectChoices: {
                        shape: 'S31'
                      },
                      TextValue: {},
                      RegistrationAttachmentId: {},
                      DeniedReason: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRegistrationSectionDefinitions: {
            input: {
              type: 'structure',
              required: ['RegistrationType'],
              members: {
                RegistrationType: {},
                SectionPaths: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationType', 'RegistrationSectionDefinitions'],
              members: {
                RegistrationType: {},
                RegistrationSectionDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SectionPath', 'DisplayHints'],
                    members: {
                      SectionPath: {},
                      DisplayHints: {
                        type: 'structure',
                        required: ['Title', 'ShortDescription'],
                        members: {
                          Title: {},
                          ShortDescription: {},
                          LongDescription: {},
                          DocumentationTitle: {},
                          DocumentationLink: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRegistrationTypeDefinitions: {
            input: {
              type: 'structure',
              members: {
                RegistrationTypes: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
              required: ['RegistrationTypeDefinitions'],
              members: {
                RegistrationTypeDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RegistrationType', 'DisplayHints'],
                    members: {
                      RegistrationType: {},
                      SupportedAssociations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['ResourceType', 'AssociationBehavior', 'DisassociationBehavior'],
                          members: {
                            ResourceType: {},
                            IsoCountryCode: {},
                            AssociationBehavior: {},
                            DisassociationBehavior: {}
                          }
                        }
                      },
                      DisplayHints: {
                        type: 'structure',
                        required: ['Title'],
                        members: {
                          Title: {},
                          ShortDescription: {},
                          LongDescription: {},
                          DocumentationTitle: {},
                          DocumentationLink: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRegistrationVersions: {
            input: {
              type: 'structure',
              required: ['RegistrationId'],
              members: {
                RegistrationId: {},
                VersionNumbers: {
                  type: 'list',
                  member: {
                    type: 'long'
                  }
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
              required: ['RegistrationArn', 'RegistrationId', 'RegistrationVersions'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                RegistrationVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['VersionNumber', 'RegistrationVersionStatus', 'RegistrationVersionStatusHistory'],
                    members: {
                      VersionNumber: {
                        type: 'long'
                      },
                      RegistrationVersionStatus: {},
                      RegistrationVersionStatusHistory: {
                        shape: 'S1u'
                      },
                      DeniedReasons: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Reason', 'ShortDescription'],
                          members: {
                            Reason: {},
                            ShortDescription: {},
                            LongDescription: {},
                            DocumentationTitle: {},
                            DocumentationLink: {}
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
          DescribeRegistrations: {
            input: {
              type: 'structure',
              members: {
                RegistrationIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
              required: ['Registrations'],
              members: {
                Registrations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RegistrationArn', 'RegistrationId', 'RegistrationType', 'RegistrationStatus', 'CurrentVersionNumber', 'CreatedTimestamp'],
                    members: {
                      RegistrationArn: {},
                      RegistrationId: {},
                      RegistrationType: {},
                      RegistrationStatus: {},
                      CurrentVersionNumber: {
                        type: 'long'
                      },
                      ApprovedVersionNumber: {
                        type: 'long'
                      },
                      LatestDeniedVersionNumber: {
                        type: 'long'
                      },
                      AdditionalAttributes: {
                        shape: 'S1g'
                      },
                      CreatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSenderIds: {
            input: {
              type: 'structure',
              members: {
                SenderIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SenderId', 'IsoCountryCode'],
                    members: {
                      SenderId: {},
                      IsoCountryCode: {}
                    }
                  }
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
                SenderIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SenderIdArn', 'SenderId', 'IsoCountryCode', 'MessageTypes', 'MonthlyLeasingPrice', 'DeletionProtectionEnabled', 'Registered'],
                    members: {
                      SenderIdArn: {},
                      SenderId: {},
                      IsoCountryCode: {},
                      MessageTypes: {
                        shape: 'S7e'
                      },
                      MonthlyLeasingPrice: {},
                      DeletionProtectionEnabled: {
                        type: 'boolean'
                      },
                      Registered: {
                        type: 'boolean'
                      },
                      RegistrationId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSpendLimits: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SpendLimits: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'EnforcedLimit', 'MaxLimit', 'Overridden'],
                    members: {
                      Name: {},
                      EnforcedLimit: {
                        type: 'long'
                      },
                      MaxLimit: {
                        type: 'long'
                      },
                      Overridden: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeVerifiedDestinationNumbers: {
            input: {
              type: 'structure',
              members: {
                VerifiedDestinationNumberIds: {
                  type: 'list',
                  member: {}
                },
                DestinationPhoneNumbers: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
              required: ['VerifiedDestinationNumbers'],
              members: {
                VerifiedDestinationNumbers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['VerifiedDestinationNumberArn', 'VerifiedDestinationNumberId', 'DestinationPhoneNumber', 'Status', 'CreatedTimestamp'],
                    members: {
                      VerifiedDestinationNumberArn: {},
                      VerifiedDestinationNumberId: {},
                      DestinationPhoneNumber: {},
                      Status: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DisassociateOriginationIdentity: {
            input: {
              type: 'structure',
              required: ['PoolId', 'OriginationIdentity', 'IsoCountryCode'],
              members: {
                PoolId: {},
                OriginationIdentity: {},
                IsoCountryCode: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PoolArn: {},
                PoolId: {},
                OriginationIdentityArn: {},
                OriginationIdentity: {},
                IsoCountryCode: {}
              }
            }
          },
          DisassociateProtectConfiguration: {
            input: {
              type: 'structure',
              required: ['ProtectConfigurationId', 'ConfigurationSetName'],
              members: {
                ProtectConfigurationId: {},
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConfigurationSetArn', 'ConfigurationSetName', 'ProtectConfigurationArn', 'ProtectConfigurationId'],
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                ProtectConfigurationArn: {},
                ProtectConfigurationId: {}
              }
            }
          },
          DiscardRegistrationVersion: {
            input: {
              type: 'structure',
              required: ['RegistrationId'],
              members: {
                RegistrationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'VersionNumber', 'RegistrationVersionStatus', 'RegistrationVersionStatusHistory'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                VersionNumber: {
                  type: 'long'
                },
                RegistrationVersionStatus: {},
                RegistrationVersionStatusHistory: {
                  shape: 'S1u'
                }
              }
            }
          },
          GetProtectConfigurationCountryRuleSet: {
            input: {
              type: 'structure',
              required: ['ProtectConfigurationId', 'NumberCapability'],
              members: {
                ProtectConfigurationId: {},
                NumberCapability: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ProtectConfigurationArn', 'ProtectConfigurationId', 'NumberCapability', 'CountryRuleSet'],
              members: {
                ProtectConfigurationArn: {},
                ProtectConfigurationId: {},
                NumberCapability: {},
                CountryRuleSet: {
                  shape: 'S81'
                }
              }
            }
          },
          ListPoolOriginationIdentities: {
            input: {
              type: 'structure',
              required: ['PoolId'],
              members: {
                PoolId: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
                PoolArn: {},
                PoolId: {},
                OriginationIdentities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['OriginationIdentityArn', 'OriginationIdentity', 'IsoCountryCode', 'NumberCapabilities'],
                    members: {
                      OriginationIdentityArn: {},
                      OriginationIdentity: {},
                      IsoCountryCode: {},
                      NumberCapabilities: {
                        shape: 'S4t'
                      },
                      PhoneNumber: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRegistrationAssociations: {
            input: {
              type: 'structure',
              required: ['RegistrationId'],
              members: {
                RegistrationId: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3t'
                      }
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
              required: ['RegistrationArn', 'RegistrationId', 'RegistrationType', 'RegistrationAssociations'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                RegistrationType: {},
                RegistrationAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ResourceArn', 'ResourceId', 'ResourceType'],
                    members: {
                      ResourceArn: {},
                      ResourceId: {},
                      ResourceType: {},
                      IsoCountryCode: {},
                      PhoneNumber: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sg'
                }
              }
            }
          },
          PutKeyword: {
            input: {
              type: 'structure',
              required: ['OriginationIdentity', 'Keyword', 'KeywordMessage'],
              members: {
                OriginationIdentity: {},
                Keyword: {},
                KeywordMessage: {},
                KeywordAction: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OriginationIdentityArn: {},
                OriginationIdentity: {},
                Keyword: {},
                KeywordMessage: {},
                KeywordAction: {}
              }
            }
          },
          PutOptedOutNumber: {
            input: {
              type: 'structure',
              required: ['OptOutListName', 'OptedOutNumber'],
              members: {
                OptOutListName: {},
                OptedOutNumber: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OptOutListArn: {},
                OptOutListName: {},
                OptedOutNumber: {},
                OptedOutTimestamp: {
                  type: 'timestamp'
                },
                EndUserOptedOut: {
                  type: 'boolean'
                }
              }
            }
          },
          PutRegistrationFieldValue: {
            input: {
              type: 'structure',
              required: ['RegistrationId', 'FieldPath'],
              members: {
                RegistrationId: {},
                FieldPath: {},
                SelectChoices: {
                  shape: 'S31'
                },
                TextValue: {},
                RegistrationAttachmentId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'VersionNumber', 'FieldPath'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                VersionNumber: {
                  type: 'long'
                },
                FieldPath: {},
                SelectChoices: {
                  shape: 'S31'
                },
                TextValue: {},
                RegistrationAttachmentId: {}
              }
            }
          },
          ReleasePhoneNumber: {
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberArn: {},
                PhoneNumberId: {},
                PhoneNumber: {},
                Status: {},
                IsoCountryCode: {},
                MessageType: {},
                NumberCapabilities: {
                  shape: 'S4t'
                },
                NumberType: {},
                MonthlyLeasingPrice: {},
                TwoWayEnabled: {
                  type: 'boolean'
                },
                TwoWayChannelArn: {},
                TwoWayChannelRole: {},
                SelfManagedOptOutsEnabled: {
                  type: 'boolean'
                },
                OptOutListName: {},
                RegistrationId: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          ReleaseSenderId: {
            input: {
              type: 'structure',
              required: ['SenderId', 'IsoCountryCode'],
              members: {
                SenderId: {},
                IsoCountryCode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SenderIdArn', 'SenderId', 'IsoCountryCode', 'MessageTypes', 'MonthlyLeasingPrice', 'Registered'],
              members: {
                SenderIdArn: {},
                SenderId: {},
                IsoCountryCode: {},
                MessageTypes: {
                  shape: 'S7e'
                },
                MonthlyLeasingPrice: {},
                Registered: {
                  type: 'boolean'
                },
                RegistrationId: {}
              }
            }
          },
          RequestPhoneNumber: {
            input: {
              type: 'structure',
              required: ['IsoCountryCode', 'MessageType', 'NumberCapabilities', 'NumberType'],
              members: {
                IsoCountryCode: {},
                MessageType: {},
                NumberCapabilities: {
                  shape: 'S4t'
                },
                NumberType: {},
                OptOutListName: {},
                PoolId: {},
                RegistrationId: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sg'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberArn: {},
                PhoneNumberId: {},
                PhoneNumber: {},
                Status: {},
                IsoCountryCode: {},
                MessageType: {},
                NumberCapabilities: {
                  shape: 'S4t'
                },
                NumberType: {},
                MonthlyLeasingPrice: {},
                TwoWayEnabled: {
                  type: 'boolean'
                },
                TwoWayChannelArn: {},
                TwoWayChannelRole: {},
                SelfManagedOptOutsEnabled: {
                  type: 'boolean'
                },
                OptOutListName: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                PoolId: {},
                RegistrationId: {},
                Tags: {
                  shape: 'Sg'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          RequestSenderId: {
            input: {
              type: 'structure',
              required: ['SenderId', 'IsoCountryCode'],
              members: {
                SenderId: {},
                IsoCountryCode: {},
                MessageTypes: {
                  shape: 'S7e'
                },
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sg'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SenderIdArn', 'SenderId', 'IsoCountryCode', 'MessageTypes', 'MonthlyLeasingPrice', 'DeletionProtectionEnabled', 'Registered'],
              members: {
                SenderIdArn: {},
                SenderId: {},
                IsoCountryCode: {},
                MessageTypes: {
                  shape: 'S7e'
                },
                MonthlyLeasingPrice: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                Registered: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sg'
                }
              }
            }
          },
          SendDestinationNumberVerificationCode: {
            input: {
              type: 'structure',
              required: ['VerifiedDestinationNumberId', 'VerificationChannel'],
              members: {
                VerifiedDestinationNumberId: {},
                VerificationChannel: {},
                LanguageCode: {},
                OriginationIdentity: {},
                ConfigurationSetName: {},
                Context: {
                  shape: 'S94'
                },
                DestinationCountryParameters: {
                  shape: 'S97'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MessageId'],
              members: {
                MessageId: {}
              }
            }
          },
          SendMediaMessage: {
            input: {
              type: 'structure',
              required: ['DestinationPhoneNumber', 'OriginationIdentity'],
              members: {
                DestinationPhoneNumber: {},
                OriginationIdentity: {},
                MessageBody: {},
                MediaUrls: {
                  type: 'list',
                  member: {}
                },
                ConfigurationSetName: {},
                MaxPrice: {},
                TimeToLive: {
                  type: 'integer'
                },
                Context: {
                  shape: 'S94'
                },
                DryRun: {
                  type: 'boolean'
                },
                ProtectConfigurationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          SendTextMessage: {
            input: {
              type: 'structure',
              required: ['DestinationPhoneNumber'],
              members: {
                DestinationPhoneNumber: {},
                OriginationIdentity: {},
                MessageBody: {},
                MessageType: {},
                Keyword: {},
                ConfigurationSetName: {},
                MaxPrice: {},
                TimeToLive: {
                  type: 'integer'
                },
                Context: {
                  shape: 'S94'
                },
                DestinationCountryParameters: {
                  shape: 'S97'
                },
                DryRun: {
                  type: 'boolean'
                },
                ProtectConfigurationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          SendVoiceMessage: {
            input: {
              type: 'structure',
              required: ['DestinationPhoneNumber', 'OriginationIdentity'],
              members: {
                DestinationPhoneNumber: {},
                OriginationIdentity: {},
                MessageBody: {},
                MessageBodyTextType: {},
                VoiceId: {},
                ConfigurationSetName: {},
                MaxPricePerMinute: {},
                TimeToLive: {
                  type: 'integer'
                },
                Context: {
                  shape: 'S94'
                },
                DryRun: {
                  type: 'boolean'
                },
                ProtectConfigurationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          SetAccountDefaultProtectConfiguration: {
            input: {
              type: 'structure',
              required: ['ProtectConfigurationId'],
              members: {
                ProtectConfigurationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DefaultProtectConfigurationArn', 'DefaultProtectConfigurationId'],
              members: {
                DefaultProtectConfigurationArn: {},
                DefaultProtectConfigurationId: {}
              }
            }
          },
          SetDefaultMessageType: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'MessageType'],
              members: {
                ConfigurationSetName: {},
                MessageType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                MessageType: {}
              }
            }
          },
          SetDefaultSenderId: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'SenderId'],
              members: {
                ConfigurationSetName: {},
                SenderId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                SenderId: {}
              }
            }
          },
          SetMediaMessageSpendLimitOverride: {
            input: {
              type: 'structure',
              required: ['MonthlyLimit'],
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            }
          },
          SetTextMessageSpendLimitOverride: {
            input: {
              type: 'structure',
              required: ['MonthlyLimit'],
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            }
          },
          SetVoiceMessageSpendLimitOverride: {
            input: {
              type: 'structure',
              required: ['MonthlyLimit'],
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MonthlyLimit: {
                  type: 'long'
                }
              }
            }
          },
          SubmitRegistrationVersion: {
            input: {
              type: 'structure',
              required: ['RegistrationId'],
              members: {
                RegistrationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RegistrationArn', 'RegistrationId', 'VersionNumber', 'RegistrationVersionStatus', 'RegistrationVersionStatusHistory'],
              members: {
                RegistrationArn: {},
                RegistrationId: {},
                VersionNumber: {
                  type: 'long'
                },
                RegistrationVersionStatus: {},
                RegistrationVersionStatusHistory: {
                  shape: 'S1u'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  type: 'list',
                  member: {
                    shape: 'Sh'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
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
          UpdateEventDestination: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestinationName'],
              members: {
                ConfigurationSetName: {},
                EventDestinationName: {},
                Enabled: {
                  type: 'boolean'
                },
                MatchingEventTypes: {
                  shape: 'So'
                },
                CloudWatchLogsDestination: {
                  shape: 'Sq'
                },
                KinesisFirehoseDestination: {
                  shape: 'St'
                },
                SnsDestination: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetArn: {},
                ConfigurationSetName: {},
                EventDestination: {
                  shape: 'Sy'
                }
              }
            }
          },
          UpdatePhoneNumber: {
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {},
                TwoWayEnabled: {
                  type: 'boolean'
                },
                TwoWayChannelArn: {},
                TwoWayChannelRole: {},
                SelfManagedOptOutsEnabled: {
                  type: 'boolean'
                },
                OptOutListName: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberArn: {},
                PhoneNumberId: {},
                PhoneNumber: {},
                Status: {},
                IsoCountryCode: {},
                MessageType: {},
                NumberCapabilities: {
                  shape: 'S4t'
                },
                NumberType: {},
                MonthlyLeasingPrice: {},
                TwoWayEnabled: {
                  type: 'boolean'
                },
                TwoWayChannelArn: {},
                TwoWayChannelRole: {},
                SelfManagedOptOutsEnabled: {
                  type: 'boolean'
                },
                OptOutListName: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                RegistrationId: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdatePool: {
            input: {
              type: 'structure',
              required: ['PoolId'],
              members: {
                PoolId: {},
                TwoWayEnabled: {
                  type: 'boolean'
                },
                TwoWayChannelArn: {},
                TwoWayChannelRole: {},
                SelfManagedOptOutsEnabled: {
                  type: 'boolean'
                },
                OptOutListName: {},
                SharedRoutesEnabled: {
                  type: 'boolean'
                },
                DeletionProtectionEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PoolArn: {},
                PoolId: {},
                Status: {},
                MessageType: {},
                TwoWayEnabled: {
                  type: 'boolean'
                },
                TwoWayChannelArn: {},
                TwoWayChannelRole: {},
                SelfManagedOptOutsEnabled: {
                  type: 'boolean'
                },
                OptOutListName: {},
                SharedRoutesEnabled: {
                  type: 'boolean'
                },
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdateProtectConfiguration: {
            input: {
              type: 'structure',
              required: ['ProtectConfigurationId'],
              members: {
                ProtectConfigurationId: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProtectConfigurationArn', 'ProtectConfigurationId', 'CreatedTimestamp', 'AccountDefault', 'DeletionProtectionEnabled'],
              members: {
                ProtectConfigurationArn: {},
                ProtectConfigurationId: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                AccountDefault: {
                  type: 'boolean'
                },
                DeletionProtectionEnabled: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateProtectConfigurationCountryRuleSet: {
            input: {
              type: 'structure',
              required: ['ProtectConfigurationId', 'NumberCapability', 'CountryRuleSetUpdates'],
              members: {
                ProtectConfigurationId: {},
                NumberCapability: {},
                CountryRuleSetUpdates: {
                  shape: 'S81'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProtectConfigurationArn', 'ProtectConfigurationId', 'NumberCapability', 'CountryRuleSet'],
              members: {
                ProtectConfigurationArn: {},
                ProtectConfigurationId: {},
                NumberCapability: {},
                CountryRuleSet: {
                  shape: 'S81'
                }
              }
            }
          },
          UpdateSenderId: {
            input: {
              type: 'structure',
              required: ['SenderId', 'IsoCountryCode'],
              members: {
                SenderId: {},
                IsoCountryCode: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SenderIdArn', 'SenderId', 'IsoCountryCode', 'MessageTypes', 'MonthlyLeasingPrice', 'DeletionProtectionEnabled', 'Registered'],
              members: {
                SenderIdArn: {},
                SenderId: {},
                IsoCountryCode: {},
                MessageTypes: {
                  shape: 'S7e'
                },
                MonthlyLeasingPrice: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                Registered: {
                  type: 'boolean'
                },
                RegistrationId: {}
              }
            }
          },
          VerifyDestinationNumber: {
            input: {
              type: 'structure',
              required: ['VerifiedDestinationNumberId', 'VerificationCode'],
              members: {
                VerifiedDestinationNumberId: {},
                VerificationCode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VerifiedDestinationNumberArn', 'VerifiedDestinationNumberId', 'DestinationPhoneNumber', 'Status', 'CreatedTimestamp'],
              members: {
                VerifiedDestinationNumberArn: {},
                VerifiedDestinationNumberId: {},
                DestinationPhoneNumber: {},
                Status: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          }
        },
        shapes: {
          Sg: {
            type: 'list',
            member: {
              shape: 'Sh'
            }
          },
          Sh: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {},
              Value: {}
            }
          },
          So: {
            type: 'list',
            member: {}
          },
          Sq: {
            type: 'structure',
            required: ['IamRoleArn', 'LogGroupArn'],
            members: {
              IamRoleArn: {},
              LogGroupArn: {}
            }
          },
          St: {
            type: 'structure',
            required: ['IamRoleArn', 'DeliveryStreamArn'],
            members: {
              IamRoleArn: {},
              DeliveryStreamArn: {}
            }
          },
          Sv: {
            type: 'structure',
            required: ['TopicArn'],
            members: {
              TopicArn: {}
            }
          },
          Sy: {
            type: 'structure',
            required: ['EventDestinationName', 'Enabled', 'MatchingEventTypes'],
            members: {
              EventDestinationName: {},
              Enabled: {
                type: 'boolean'
              },
              MatchingEventTypes: {
                shape: 'So'
              },
              CloudWatchLogsDestination: {
                shape: 'Sq'
              },
              KinesisFirehoseDestination: {
                shape: 'St'
              },
              SnsDestination: {
                shape: 'Sv'
              }
            }
          },
          S1g: {
            type: 'map',
            key: {},
            value: {}
          },
          S1u: {
            type: 'structure',
            required: ['DraftTimestamp'],
            members: {
              DraftTimestamp: {
                type: 'timestamp'
              },
              SubmittedTimestamp: {
                type: 'timestamp'
              },
              ReviewingTimestamp: {
                type: 'timestamp'
              },
              ApprovedTimestamp: {
                type: 'timestamp'
              },
              DiscardedTimestamp: {
                type: 'timestamp'
              },
              DeniedTimestamp: {
                type: 'timestamp'
              },
              RevokedTimestamp: {
                type: 'timestamp'
              },
              ArchivedTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S22: {
            type: 'list',
            member: {
              shape: 'Sy'
            }
          },
          S31: {
            type: 'list',
            member: {}
          },
          S3t: {
            type: 'list',
            member: {}
          },
          S4t: {
            type: 'list',
            member: {}
          },
          S5m: {
            type: 'list',
            member: {}
          },
          S7e: {
            type: 'list',
            member: {}
          },
          S81: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['ProtectStatus'],
              members: {
                ProtectStatus: {}
              }
            }
          },
          S94: {
            type: 'map',
            key: {},
            value: {}
          },
          S97: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=161815c675edb9d573fbb4130f31cbba54801a8d.js.map