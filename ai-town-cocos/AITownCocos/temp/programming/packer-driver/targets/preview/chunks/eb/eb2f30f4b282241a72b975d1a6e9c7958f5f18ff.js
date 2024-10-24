System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2010-12-01',
          endpointPrefix: 'email',
          protocol: 'query',
          serviceAbbreviation: 'Amazon SES',
          serviceFullName: 'Amazon Simple Email Service',
          serviceId: 'SES',
          signatureVersion: 'v4',
          signingName: 'ses',
          uid: 'email-2010-12-01',
          xmlNamespace: 'http://ses.amazonaws.com/doc/2010-12-01/'
        },
        operations: {
          CloneReceiptRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetName', 'OriginalRuleSetName'],
              members: {
                RuleSetName: {},
                OriginalRuleSetName: {}
              }
            },
            output: {
              resultWrapper: 'CloneReceiptRuleSetResult',
              type: 'structure',
              members: {}
            }
          },
          CreateConfigurationSet: {
            input: {
              type: 'structure',
              required: ['ConfigurationSet'],
              members: {
                ConfigurationSet: {
                  shape: 'S5'
                }
              }
            },
            output: {
              resultWrapper: 'CreateConfigurationSetResult',
              type: 'structure',
              members: {}
            }
          },
          CreateConfigurationSetEventDestination: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestination'],
              members: {
                ConfigurationSetName: {},
                EventDestination: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateConfigurationSetEventDestinationResult',
              type: 'structure',
              members: {}
            }
          },
          CreateConfigurationSetTrackingOptions: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'TrackingOptions'],
              members: {
                ConfigurationSetName: {},
                TrackingOptions: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              resultWrapper: 'CreateConfigurationSetTrackingOptionsResult',
              type: 'structure',
              members: {}
            }
          },
          CreateCustomVerificationEmailTemplate: {
            input: {
              type: 'structure',
              required: ['TemplateName', 'FromEmailAddress', 'TemplateSubject', 'TemplateContent', 'SuccessRedirectionURL', 'FailureRedirectionURL'],
              members: {
                TemplateName: {},
                FromEmailAddress: {},
                TemplateSubject: {},
                TemplateContent: {},
                SuccessRedirectionURL: {},
                FailureRedirectionURL: {}
              }
            }
          },
          CreateReceiptFilter: {
            input: {
              type: 'structure',
              required: ['Filter'],
              members: {
                Filter: {
                  shape: 'S10'
                }
              }
            },
            output: {
              resultWrapper: 'CreateReceiptFilterResult',
              type: 'structure',
              members: {}
            }
          },
          CreateReceiptRule: {
            input: {
              type: 'structure',
              required: ['RuleSetName', 'Rule'],
              members: {
                RuleSetName: {},
                After: {},
                Rule: {
                  shape: 'S18'
                }
              }
            },
            output: {
              resultWrapper: 'CreateReceiptRuleResult',
              type: 'structure',
              members: {}
            }
          },
          CreateReceiptRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetName'],
              members: {
                RuleSetName: {}
              }
            },
            output: {
              resultWrapper: 'CreateReceiptRuleSetResult',
              type: 'structure',
              members: {}
            }
          },
          CreateTemplate: {
            input: {
              type: 'structure',
              required: ['Template'],
              members: {
                Template: {
                  shape: 'S20'
                }
              }
            },
            output: {
              resultWrapper: 'CreateTemplateResult',
              type: 'structure',
              members: {}
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
              resultWrapper: 'DeleteConfigurationSetResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteConfigurationSetEventDestination: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestinationName'],
              members: {
                ConfigurationSetName: {},
                EventDestinationName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteConfigurationSetEventDestinationResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteConfigurationSetTrackingOptions: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteConfigurationSetTrackingOptionsResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteCustomVerificationEmailTemplate: {
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {}
              }
            }
          },
          DeleteIdentity: {
            input: {
              type: 'structure',
              required: ['Identity'],
              members: {
                Identity: {}
              }
            },
            output: {
              resultWrapper: 'DeleteIdentityResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteIdentityPolicy: {
            input: {
              type: 'structure',
              required: ['Identity', 'PolicyName'],
              members: {
                Identity: {},
                PolicyName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteIdentityPolicyResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteReceiptFilter: {
            input: {
              type: 'structure',
              required: ['FilterName'],
              members: {
                FilterName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteReceiptFilterResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteReceiptRule: {
            input: {
              type: 'structure',
              required: ['RuleSetName', 'RuleName'],
              members: {
                RuleSetName: {},
                RuleName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteReceiptRuleResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteReceiptRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetName'],
              members: {
                RuleSetName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteReceiptRuleSetResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteTemplate: {
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteTemplateResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteVerifiedEmailAddress: {
            input: {
              type: 'structure',
              required: ['EmailAddress'],
              members: {
                EmailAddress: {}
              }
            }
          },
          DescribeActiveReceiptRuleSet: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'DescribeActiveReceiptRuleSetResult',
              type: 'structure',
              members: {
                Metadata: {
                  shape: 'S2t'
                },
                Rules: {
                  shape: 'S2v'
                }
              }
            }
          },
          DescribeConfigurationSet: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {},
                ConfigurationSetAttributeNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeConfigurationSetResult',
              type: 'structure',
              members: {
                ConfigurationSet: {
                  shape: 'S5'
                },
                EventDestinations: {
                  type: 'list',
                  member: {
                    shape: 'S9'
                  }
                },
                TrackingOptions: {
                  shape: 'Sp'
                },
                DeliveryOptions: {
                  shape: 'S31'
                },
                ReputationOptions: {
                  type: 'structure',
                  members: {
                    SendingEnabled: {
                      type: 'boolean'
                    },
                    ReputationMetricsEnabled: {
                      type: 'boolean'
                    },
                    LastFreshStart: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          DescribeReceiptRule: {
            input: {
              type: 'structure',
              required: ['RuleSetName', 'RuleName'],
              members: {
                RuleSetName: {},
                RuleName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReceiptRuleResult',
              type: 'structure',
              members: {
                Rule: {
                  shape: 'S18'
                }
              }
            }
          },
          DescribeReceiptRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetName'],
              members: {
                RuleSetName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReceiptRuleSetResult',
              type: 'structure',
              members: {
                Metadata: {
                  shape: 'S2t'
                },
                Rules: {
                  shape: 'S2v'
                }
              }
            }
          },
          GetAccountSendingEnabled: {
            output: {
              resultWrapper: 'GetAccountSendingEnabledResult',
              type: 'structure',
              members: {
                Enabled: {
                  type: 'boolean'
                }
              }
            }
          },
          GetCustomVerificationEmailTemplate: {
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {}
              }
            },
            output: {
              resultWrapper: 'GetCustomVerificationEmailTemplateResult',
              type: 'structure',
              members: {
                TemplateName: {},
                FromEmailAddress: {},
                TemplateSubject: {},
                TemplateContent: {},
                SuccessRedirectionURL: {},
                FailureRedirectionURL: {}
              }
            }
          },
          GetIdentityDkimAttributes: {
            input: {
              type: 'structure',
              required: ['Identities'],
              members: {
                Identities: {
                  shape: 'S3c'
                }
              }
            },
            output: {
              resultWrapper: 'GetIdentityDkimAttributesResult',
              type: 'structure',
              required: ['DkimAttributes'],
              members: {
                DkimAttributes: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['DkimEnabled', 'DkimVerificationStatus'],
                    members: {
                      DkimEnabled: {
                        type: 'boolean'
                      },
                      DkimVerificationStatus: {},
                      DkimTokens: {
                        shape: 'S3h'
                      }
                    }
                  }
                }
              }
            }
          },
          GetIdentityMailFromDomainAttributes: {
            input: {
              type: 'structure',
              required: ['Identities'],
              members: {
                Identities: {
                  shape: 'S3c'
                }
              }
            },
            output: {
              resultWrapper: 'GetIdentityMailFromDomainAttributesResult',
              type: 'structure',
              required: ['MailFromDomainAttributes'],
              members: {
                MailFromDomainAttributes: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['MailFromDomain', 'MailFromDomainStatus', 'BehaviorOnMXFailure'],
                    members: {
                      MailFromDomain: {},
                      MailFromDomainStatus: {},
                      BehaviorOnMXFailure: {}
                    }
                  }
                }
              }
            }
          },
          GetIdentityNotificationAttributes: {
            input: {
              type: 'structure',
              required: ['Identities'],
              members: {
                Identities: {
                  shape: 'S3c'
                }
              }
            },
            output: {
              resultWrapper: 'GetIdentityNotificationAttributesResult',
              type: 'structure',
              required: ['NotificationAttributes'],
              members: {
                NotificationAttributes: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['BounceTopic', 'ComplaintTopic', 'DeliveryTopic', 'ForwardingEnabled'],
                    members: {
                      BounceTopic: {},
                      ComplaintTopic: {},
                      DeliveryTopic: {},
                      ForwardingEnabled: {
                        type: 'boolean'
                      },
                      HeadersInBounceNotificationsEnabled: {
                        type: 'boolean'
                      },
                      HeadersInComplaintNotificationsEnabled: {
                        type: 'boolean'
                      },
                      HeadersInDeliveryNotificationsEnabled: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          GetIdentityPolicies: {
            input: {
              type: 'structure',
              required: ['Identity', 'PolicyNames'],
              members: {
                Identity: {},
                PolicyNames: {
                  shape: 'S3w'
                }
              }
            },
            output: {
              resultWrapper: 'GetIdentityPoliciesResult',
              type: 'structure',
              required: ['Policies'],
              members: {
                Policies: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          GetIdentityVerificationAttributes: {
            input: {
              type: 'structure',
              required: ['Identities'],
              members: {
                Identities: {
                  shape: 'S3c'
                }
              }
            },
            output: {
              resultWrapper: 'GetIdentityVerificationAttributesResult',
              type: 'structure',
              required: ['VerificationAttributes'],
              members: {
                VerificationAttributes: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['VerificationStatus'],
                    members: {
                      VerificationStatus: {},
                      VerificationToken: {}
                    }
                  }
                }
              }
            }
          },
          GetSendQuota: {
            output: {
              resultWrapper: 'GetSendQuotaResult',
              type: 'structure',
              members: {
                Max24HourSend: {
                  type: 'double'
                },
                MaxSendRate: {
                  type: 'double'
                },
                SentLast24Hours: {
                  type: 'double'
                }
              }
            }
          },
          GetSendStatistics: {
            output: {
              resultWrapper: 'GetSendStatisticsResult',
              type: 'structure',
              members: {
                SendDataPoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'timestamp'
                      },
                      DeliveryAttempts: {
                        type: 'long'
                      },
                      Bounces: {
                        type: 'long'
                      },
                      Complaints: {
                        type: 'long'
                      },
                      Rejects: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          GetTemplate: {
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {}
              }
            },
            output: {
              resultWrapper: 'GetTemplateResult',
              type: 'structure',
              members: {
                Template: {
                  shape: 'S20'
                }
              }
            }
          },
          ListConfigurationSets: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListConfigurationSetsResult',
              type: 'structure',
              members: {
                ConfigurationSets: {
                  type: 'list',
                  member: {
                    shape: 'S5'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomVerificationEmailTemplates: {
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
              resultWrapper: 'ListCustomVerificationEmailTemplatesResult',
              type: 'structure',
              members: {
                CustomVerificationEmailTemplates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TemplateName: {},
                      FromEmailAddress: {},
                      TemplateSubject: {},
                      SuccessRedirectionURL: {},
                      FailureRedirectionURL: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIdentities: {
            input: {
              type: 'structure',
              members: {
                IdentityType: {},
                NextToken: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListIdentitiesResult',
              type: 'structure',
              required: ['Identities'],
              members: {
                Identities: {
                  shape: 'S3c'
                },
                NextToken: {}
              }
            }
          },
          ListIdentityPolicies: {
            input: {
              type: 'structure',
              required: ['Identity'],
              members: {
                Identity: {}
              }
            },
            output: {
              resultWrapper: 'ListIdentityPoliciesResult',
              type: 'structure',
              required: ['PolicyNames'],
              members: {
                PolicyNames: {
                  shape: 'S3w'
                }
              }
            }
          },
          ListReceiptFilters: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'ListReceiptFiltersResult',
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    shape: 'S10'
                  }
                }
              }
            }
          },
          ListReceiptRuleSets: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListReceiptRuleSetsResult',
              type: 'structure',
              members: {
                RuleSets: {
                  type: 'list',
                  member: {
                    shape: 'S2t'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTemplates: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListTemplatesResult',
              type: 'structure',
              members: {
                TemplatesMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
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
          ListVerifiedEmailAddresses: {
            output: {
              resultWrapper: 'ListVerifiedEmailAddressesResult',
              type: 'structure',
              members: {
                VerifiedEmailAddresses: {
                  shape: 'S54'
                }
              }
            }
          },
          PutConfigurationSetDeliveryOptions: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {},
                DeliveryOptions: {
                  shape: 'S31'
                }
              }
            },
            output: {
              resultWrapper: 'PutConfigurationSetDeliveryOptionsResult',
              type: 'structure',
              members: {}
            }
          },
          PutIdentityPolicy: {
            input: {
              type: 'structure',
              required: ['Identity', 'PolicyName', 'Policy'],
              members: {
                Identity: {},
                PolicyName: {},
                Policy: {}
              }
            },
            output: {
              resultWrapper: 'PutIdentityPolicyResult',
              type: 'structure',
              members: {}
            }
          },
          ReorderReceiptRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetName', 'RuleNames'],
              members: {
                RuleSetName: {},
                RuleNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'ReorderReceiptRuleSetResult',
              type: 'structure',
              members: {}
            }
          },
          SendBounce: {
            input: {
              type: 'structure',
              required: ['OriginalMessageId', 'BounceSender', 'BouncedRecipientInfoList'],
              members: {
                OriginalMessageId: {},
                BounceSender: {},
                Explanation: {},
                MessageDsn: {
                  type: 'structure',
                  required: ['ReportingMta'],
                  members: {
                    ReportingMta: {},
                    ArrivalDate: {
                      type: 'timestamp'
                    },
                    ExtensionFields: {
                      shape: 'S5i'
                    }
                  }
                },
                BouncedRecipientInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Recipient'],
                    members: {
                      Recipient: {},
                      RecipientArn: {},
                      BounceType: {},
                      RecipientDsnFields: {
                        type: 'structure',
                        required: ['Action', 'Status'],
                        members: {
                          FinalRecipient: {},
                          Action: {},
                          RemoteMta: {},
                          Status: {},
                          DiagnosticCode: {},
                          LastAttemptDate: {
                            type: 'timestamp'
                          },
                          ExtensionFields: {
                            shape: 'S5i'
                          }
                        }
                      }
                    }
                  }
                },
                BounceSenderArn: {}
              }
            },
            output: {
              resultWrapper: 'SendBounceResult',
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          SendBulkTemplatedEmail: {
            input: {
              type: 'structure',
              required: ['Source', 'Template', 'Destinations'],
              members: {
                Source: {},
                SourceArn: {},
                ReplyToAddresses: {
                  shape: 'S54'
                },
                ReturnPath: {},
                ReturnPathArn: {},
                ConfigurationSetName: {},
                DefaultTags: {
                  shape: 'S5x'
                },
                Template: {},
                TemplateArn: {},
                DefaultTemplateData: {},
                Destinations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Destination'],
                    members: {
                      Destination: {
                        shape: 'S64'
                      },
                      ReplacementTags: {
                        shape: 'S5x'
                      },
                      ReplacementTemplateData: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'SendBulkTemplatedEmailResult',
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Status: {},
                      Error: {},
                      MessageId: {}
                    }
                  }
                }
              }
            }
          },
          SendCustomVerificationEmail: {
            input: {
              type: 'structure',
              required: ['EmailAddress', 'TemplateName'],
              members: {
                EmailAddress: {},
                TemplateName: {},
                ConfigurationSetName: {}
              }
            },
            output: {
              resultWrapper: 'SendCustomVerificationEmailResult',
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          SendEmail: {
            input: {
              type: 'structure',
              required: ['Source', 'Destination', 'Message'],
              members: {
                Source: {},
                Destination: {
                  shape: 'S64'
                },
                Message: {
                  type: 'structure',
                  required: ['Subject', 'Body'],
                  members: {
                    Subject: {
                      shape: 'S6e'
                    },
                    Body: {
                      type: 'structure',
                      members: {
                        Text: {
                          shape: 'S6e'
                        },
                        Html: {
                          shape: 'S6e'
                        }
                      }
                    }
                  }
                },
                ReplyToAddresses: {
                  shape: 'S54'
                },
                ReturnPath: {},
                SourceArn: {},
                ReturnPathArn: {},
                Tags: {
                  shape: 'S5x'
                },
                ConfigurationSetName: {}
              }
            },
            output: {
              resultWrapper: 'SendEmailResult',
              type: 'structure',
              required: ['MessageId'],
              members: {
                MessageId: {}
              }
            }
          },
          SendRawEmail: {
            input: {
              type: 'structure',
              required: ['RawMessage'],
              members: {
                Source: {},
                Destinations: {
                  shape: 'S54'
                },
                RawMessage: {
                  type: 'structure',
                  required: ['Data'],
                  members: {
                    Data: {
                      type: 'blob'
                    }
                  }
                },
                FromArn: {},
                SourceArn: {},
                ReturnPathArn: {},
                Tags: {
                  shape: 'S5x'
                },
                ConfigurationSetName: {}
              }
            },
            output: {
              resultWrapper: 'SendRawEmailResult',
              type: 'structure',
              required: ['MessageId'],
              members: {
                MessageId: {}
              }
            }
          },
          SendTemplatedEmail: {
            input: {
              type: 'structure',
              required: ['Source', 'Destination', 'Template', 'TemplateData'],
              members: {
                Source: {},
                Destination: {
                  shape: 'S64'
                },
                ReplyToAddresses: {
                  shape: 'S54'
                },
                ReturnPath: {},
                SourceArn: {},
                ReturnPathArn: {},
                Tags: {
                  shape: 'S5x'
                },
                ConfigurationSetName: {},
                Template: {},
                TemplateArn: {},
                TemplateData: {}
              }
            },
            output: {
              resultWrapper: 'SendTemplatedEmailResult',
              type: 'structure',
              required: ['MessageId'],
              members: {
                MessageId: {}
              }
            }
          },
          SetActiveReceiptRuleSet: {
            input: {
              type: 'structure',
              members: {
                RuleSetName: {}
              }
            },
            output: {
              resultWrapper: 'SetActiveReceiptRuleSetResult',
              type: 'structure',
              members: {}
            }
          },
          SetIdentityDkimEnabled: {
            input: {
              type: 'structure',
              required: ['Identity', 'DkimEnabled'],
              members: {
                Identity: {},
                DkimEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'SetIdentityDkimEnabledResult',
              type: 'structure',
              members: {}
            }
          },
          SetIdentityFeedbackForwardingEnabled: {
            input: {
              type: 'structure',
              required: ['Identity', 'ForwardingEnabled'],
              members: {
                Identity: {},
                ForwardingEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'SetIdentityFeedbackForwardingEnabledResult',
              type: 'structure',
              members: {}
            }
          },
          SetIdentityHeadersInNotificationsEnabled: {
            input: {
              type: 'structure',
              required: ['Identity', 'NotificationType', 'Enabled'],
              members: {
                Identity: {},
                NotificationType: {},
                Enabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'SetIdentityHeadersInNotificationsEnabledResult',
              type: 'structure',
              members: {}
            }
          },
          SetIdentityMailFromDomain: {
            input: {
              type: 'structure',
              required: ['Identity'],
              members: {
                Identity: {},
                MailFromDomain: {},
                BehaviorOnMXFailure: {}
              }
            },
            output: {
              resultWrapper: 'SetIdentityMailFromDomainResult',
              type: 'structure',
              members: {}
            }
          },
          SetIdentityNotificationTopic: {
            input: {
              type: 'structure',
              required: ['Identity', 'NotificationType'],
              members: {
                Identity: {},
                NotificationType: {},
                SnsTopic: {}
              }
            },
            output: {
              resultWrapper: 'SetIdentityNotificationTopicResult',
              type: 'structure',
              members: {}
            }
          },
          SetReceiptRulePosition: {
            input: {
              type: 'structure',
              required: ['RuleSetName', 'RuleName'],
              members: {
                RuleSetName: {},
                RuleName: {},
                After: {}
              }
            },
            output: {
              resultWrapper: 'SetReceiptRulePositionResult',
              type: 'structure',
              members: {}
            }
          },
          TestRenderTemplate: {
            input: {
              type: 'structure',
              required: ['TemplateName', 'TemplateData'],
              members: {
                TemplateName: {},
                TemplateData: {}
              }
            },
            output: {
              resultWrapper: 'TestRenderTemplateResult',
              type: 'structure',
              members: {
                RenderedTemplate: {}
              }
            }
          },
          UpdateAccountSendingEnabled: {
            input: {
              type: 'structure',
              members: {
                Enabled: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateConfigurationSetEventDestination: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestination'],
              members: {
                ConfigurationSetName: {},
                EventDestination: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateConfigurationSetEventDestinationResult',
              type: 'structure',
              members: {}
            }
          },
          UpdateConfigurationSetReputationMetricsEnabled: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'Enabled'],
              members: {
                ConfigurationSetName: {},
                Enabled: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateConfigurationSetSendingEnabled: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'Enabled'],
              members: {
                ConfigurationSetName: {},
                Enabled: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateConfigurationSetTrackingOptions: {
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'TrackingOptions'],
              members: {
                ConfigurationSetName: {},
                TrackingOptions: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateConfigurationSetTrackingOptionsResult',
              type: 'structure',
              members: {}
            }
          },
          UpdateCustomVerificationEmailTemplate: {
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {},
                FromEmailAddress: {},
                TemplateSubject: {},
                TemplateContent: {},
                SuccessRedirectionURL: {},
                FailureRedirectionURL: {}
              }
            }
          },
          UpdateReceiptRule: {
            input: {
              type: 'structure',
              required: ['RuleSetName', 'Rule'],
              members: {
                RuleSetName: {},
                Rule: {
                  shape: 'S18'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateReceiptRuleResult',
              type: 'structure',
              members: {}
            }
          },
          UpdateTemplate: {
            input: {
              type: 'structure',
              required: ['Template'],
              members: {
                Template: {
                  shape: 'S20'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateTemplateResult',
              type: 'structure',
              members: {}
            }
          },
          VerifyDomainDkim: {
            input: {
              type: 'structure',
              required: ['Domain'],
              members: {
                Domain: {}
              }
            },
            output: {
              resultWrapper: 'VerifyDomainDkimResult',
              type: 'structure',
              required: ['DkimTokens'],
              members: {
                DkimTokens: {
                  shape: 'S3h'
                }
              }
            }
          },
          VerifyDomainIdentity: {
            input: {
              type: 'structure',
              required: ['Domain'],
              members: {
                Domain: {}
              }
            },
            output: {
              resultWrapper: 'VerifyDomainIdentityResult',
              type: 'structure',
              required: ['VerificationToken'],
              members: {
                VerificationToken: {}
              }
            }
          },
          VerifyEmailAddress: {
            input: {
              type: 'structure',
              required: ['EmailAddress'],
              members: {
                EmailAddress: {}
              }
            }
          },
          VerifyEmailIdentity: {
            input: {
              type: 'structure',
              required: ['EmailAddress'],
              members: {
                EmailAddress: {}
              }
            },
            output: {
              resultWrapper: 'VerifyEmailIdentityResult',
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {}
            }
          },
          S9: {
            type: 'structure',
            required: ['Name', 'MatchingEventTypes'],
            members: {
              Name: {},
              Enabled: {
                type: 'boolean'
              },
              MatchingEventTypes: {
                type: 'list',
                member: {}
              },
              KinesisFirehoseDestination: {
                type: 'structure',
                required: ['IAMRoleARN', 'DeliveryStreamARN'],
                members: {
                  IAMRoleARN: {},
                  DeliveryStreamARN: {}
                }
              },
              CloudWatchDestination: {
                type: 'structure',
                required: ['DimensionConfigurations'],
                members: {
                  DimensionConfigurations: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['DimensionName', 'DimensionValueSource', 'DefaultDimensionValue'],
                      members: {
                        DimensionName: {},
                        DimensionValueSource: {},
                        DefaultDimensionValue: {}
                      }
                    }
                  }
                }
              },
              SNSDestination: {
                type: 'structure',
                required: ['TopicARN'],
                members: {
                  TopicARN: {}
                }
              }
            }
          },
          Sp: {
            type: 'structure',
            members: {
              CustomRedirectDomain: {}
            }
          },
          S10: {
            type: 'structure',
            required: ['Name', 'IpFilter'],
            members: {
              Name: {},
              IpFilter: {
                type: 'structure',
                required: ['Policy', 'Cidr'],
                members: {
                  Policy: {},
                  Cidr: {}
                }
              }
            }
          },
          S18: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Enabled: {
                type: 'boolean'
              },
              TlsPolicy: {},
              Recipients: {
                type: 'list',
                member: {}
              },
              Actions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    S3Action: {
                      type: 'structure',
                      required: ['BucketName'],
                      members: {
                        TopicArn: {},
                        BucketName: {},
                        ObjectKeyPrefix: {},
                        KmsKeyArn: {}
                      }
                    },
                    BounceAction: {
                      type: 'structure',
                      required: ['SmtpReplyCode', 'Message', 'Sender'],
                      members: {
                        TopicArn: {},
                        SmtpReplyCode: {},
                        StatusCode: {},
                        Message: {},
                        Sender: {}
                      }
                    },
                    WorkmailAction: {
                      type: 'structure',
                      required: ['OrganizationArn'],
                      members: {
                        TopicArn: {},
                        OrganizationArn: {}
                      }
                    },
                    LambdaAction: {
                      type: 'structure',
                      required: ['FunctionArn'],
                      members: {
                        TopicArn: {},
                        FunctionArn: {},
                        InvocationType: {}
                      }
                    },
                    StopAction: {
                      type: 'structure',
                      required: ['Scope'],
                      members: {
                        Scope: {},
                        TopicArn: {}
                      }
                    },
                    AddHeaderAction: {
                      type: 'structure',
                      required: ['HeaderName', 'HeaderValue'],
                      members: {
                        HeaderName: {},
                        HeaderValue: {}
                      }
                    },
                    SNSAction: {
                      type: 'structure',
                      required: ['TopicArn'],
                      members: {
                        TopicArn: {},
                        Encoding: {}
                      }
                    }
                  }
                }
              },
              ScanEnabled: {
                type: 'boolean'
              }
            }
          },
          S20: {
            type: 'structure',
            required: ['TemplateName'],
            members: {
              TemplateName: {},
              SubjectPart: {},
              TextPart: {},
              HtmlPart: {}
            }
          },
          S2t: {
            type: 'structure',
            members: {
              Name: {},
              CreatedTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S2v: {
            type: 'list',
            member: {
              shape: 'S18'
            }
          },
          S31: {
            type: 'structure',
            members: {
              TlsPolicy: {}
            }
          },
          S3c: {
            type: 'list',
            member: {}
          },
          S3h: {
            type: 'list',
            member: {}
          },
          S3w: {
            type: 'list',
            member: {}
          },
          S54: {
            type: 'list',
            member: {}
          },
          S5i: {
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
          S5x: {
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
          S64: {
            type: 'structure',
            members: {
              ToAddresses: {
                shape: 'S54'
              },
              CcAddresses: {
                shape: 'S54'
              },
              BccAddresses: {
                shape: 'S54'
              }
            }
          },
          S6e: {
            type: 'structure',
            required: ['Data'],
            members: {
              Data: {},
              Charset: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=eb2f30f4b282241a72b975d1a6e9c7958f5f18ff.js.map