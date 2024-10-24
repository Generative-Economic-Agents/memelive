System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-10-17',
          endpointPrefix: 'mail-manager',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'MailManager',
          serviceId: 'MailManager',
          signatureVersion: 'v4',
          signingName: 'ses',
          targetPrefix: 'MailManagerSvc',
          uid: 'mailmanager-2023-10-17'
        },
        operations: {
          CreateAddonInstance: {
            input: {
              type: 'structure',
              required: ['AddonSubscriptionId'],
              members: {
                AddonSubscriptionId: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AddonInstanceId'],
              members: {
                AddonInstanceId: {}
              }
            },
            idempotent: true
          },
          CreateAddonSubscription: {
            input: {
              type: 'structure',
              required: ['AddonName'],
              members: {
                AddonName: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AddonSubscriptionId'],
              members: {
                AddonSubscriptionId: {}
              }
            },
            idempotent: true
          },
          CreateArchive: {
            input: {
              type: 'structure',
              required: ['ArchiveName'],
              members: {
                ArchiveName: {},
                ClientToken: {
                  idempotencyToken: true
                },
                KmsKeyArn: {},
                Retention: {
                  shape: 'Sg'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ArchiveId'],
              members: {
                ArchiveId: {}
              }
            },
            idempotent: true
          },
          CreateIngressPoint: {
            input: {
              type: 'structure',
              required: ['IngressPointName', 'RuleSetId', 'TrafficPolicyId', 'Type'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                IngressPointConfiguration: {
                  shape: 'Sl'
                },
                IngressPointName: {},
                RuleSetId: {},
                Tags: {
                  shape: 'S4'
                },
                TrafficPolicyId: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['IngressPointId'],
              members: {
                IngressPointId: {}
              }
            },
            idempotent: true
          },
          CreateRelay: {
            input: {
              type: 'structure',
              required: ['Authentication', 'RelayName', 'ServerName', 'ServerPort'],
              members: {
                Authentication: {
                  shape: 'Sv'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                RelayName: {},
                ServerName: {},
                ServerPort: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RelayId'],
              members: {
                RelayId: {}
              }
            },
            idempotent: true
          },
          CreateRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetName', 'Rules'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                RuleSetName: {},
                Rules: {
                  shape: 'S14'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RuleSetId'],
              members: {
                RuleSetId: {}
              }
            },
            idempotent: true
          },
          CreateTrafficPolicy: {
            input: {
              type: 'structure',
              required: ['DefaultAction', 'PolicyStatements', 'TrafficPolicyName'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                DefaultAction: {},
                MaxMessageSizeBytes: {
                  type: 'integer'
                },
                PolicyStatements: {
                  shape: 'S2x'
                },
                Tags: {
                  shape: 'S4'
                },
                TrafficPolicyName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyId'],
              members: {
                TrafficPolicyId: {}
              }
            },
            idempotent: true
          },
          DeleteAddonInstance: {
            input: {
              type: 'structure',
              required: ['AddonInstanceId'],
              members: {
                AddonInstanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteAddonSubscription: {
            input: {
              type: 'structure',
              required: ['AddonSubscriptionId'],
              members: {
                AddonSubscriptionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteArchive: {
            input: {
              type: 'structure',
              required: ['ArchiveId'],
              members: {
                ArchiveId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteIngressPoint: {
            input: {
              type: 'structure',
              required: ['IngressPointId'],
              members: {
                IngressPointId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteRelay: {
            input: {
              type: 'structure',
              required: ['RelayId'],
              members: {
                RelayId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetId'],
              members: {
                RuleSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteTrafficPolicy: {
            input: {
              type: 'structure',
              required: ['TrafficPolicyId'],
              members: {
                TrafficPolicyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetAddonInstance: {
            input: {
              type: 'structure',
              required: ['AddonInstanceId'],
              members: {
                AddonInstanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AddonInstanceArn: {},
                AddonName: {},
                AddonSubscriptionId: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetAddonSubscription: {
            input: {
              type: 'structure',
              required: ['AddonSubscriptionId'],
              members: {
                AddonSubscriptionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AddonName: {},
                AddonSubscriptionArn: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetArchive: {
            input: {
              type: 'structure',
              required: ['ArchiveId'],
              members: {
                ArchiveId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ArchiveArn', 'ArchiveId', 'ArchiveName', 'ArchiveState', 'Retention'],
              members: {
                ArchiveArn: {},
                ArchiveId: {},
                ArchiveName: {},
                ArchiveState: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                KmsKeyArn: {},
                LastUpdatedTimestamp: {
                  type: 'timestamp'
                },
                Retention: {
                  shape: 'Sg'
                }
              }
            }
          },
          GetArchiveExport: {
            input: {
              type: 'structure',
              required: ['ExportId'],
              members: {
                ExportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ArchiveId: {},
                ExportDestinationConfiguration: {
                  shape: 'S4h'
                },
                Filters: {
                  shape: 'S4k'
                },
                FromTimestamp: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                Status: {
                  shape: 'S4x'
                },
                ToTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetArchiveMessage: {
            input: {
              type: 'structure',
              required: ['ArchivedMessageId'],
              members: {
                ArchivedMessageId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageDownloadLink: {}
              }
            }
          },
          GetArchiveMessageContent: {
            input: {
              type: 'structure',
              required: ['ArchivedMessageId'],
              members: {
                ArchivedMessageId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Body: {
                  type: 'structure',
                  members: {
                    Html: {},
                    MessageMalformed: {
                      type: 'boolean'
                    },
                    Text: {}
                  }
                }
              }
            }
          },
          GetArchiveSearch: {
            input: {
              type: 'structure',
              required: ['SearchId'],
              members: {
                SearchId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ArchiveId: {},
                Filters: {
                  shape: 'S4k'
                },
                FromTimestamp: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                Status: {
                  shape: 'S5c'
                },
                ToTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetArchiveSearchResults: {
            input: {
              type: 'structure',
              required: ['SearchId'],
              members: {
                SearchId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Rows: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ArchivedMessageId: {},
                      Cc: {},
                      Date: {},
                      From: {},
                      HasAttachments: {
                        type: 'boolean'
                      },
                      InReplyTo: {},
                      MessageId: {},
                      ReceivedHeaders: {
                        type: 'list',
                        member: {}
                      },
                      ReceivedTimestamp: {
                        type: 'timestamp'
                      },
                      Subject: {},
                      To: {},
                      XMailer: {},
                      XOriginalMailer: {},
                      XPriority: {}
                    }
                  }
                }
              }
            }
          },
          GetIngressPoint: {
            input: {
              type: 'structure',
              required: ['IngressPointId'],
              members: {
                IngressPointId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['IngressPointId', 'IngressPointName'],
              members: {
                ARecord: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                IngressPointArn: {},
                IngressPointAuthConfiguration: {
                  type: 'structure',
                  members: {
                    IngressPointPasswordConfiguration: {
                      type: 'structure',
                      members: {
                        PreviousSmtpPasswordExpiryTimestamp: {
                          type: 'timestamp'
                        },
                        PreviousSmtpPasswordVersion: {},
                        SmtpPasswordVersion: {}
                      }
                    },
                    SecretArn: {}
                  }
                },
                IngressPointId: {},
                IngressPointName: {},
                LastUpdatedTimestamp: {
                  type: 'timestamp'
                },
                RuleSetId: {},
                Status: {},
                TrafficPolicyId: {},
                Type: {}
              }
            }
          },
          GetRelay: {
            input: {
              type: 'structure',
              required: ['RelayId'],
              members: {
                RelayId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RelayId'],
              members: {
                Authentication: {
                  shape: 'Sv'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                LastModifiedTimestamp: {
                  type: 'timestamp'
                },
                RelayArn: {},
                RelayId: {},
                RelayName: {},
                ServerName: {},
                ServerPort: {
                  type: 'integer'
                }
              }
            }
          },
          GetRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetId'],
              members: {
                RuleSetId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CreatedDate', 'LastModificationDate', 'RuleSetArn', 'RuleSetId', 'RuleSetName', 'Rules'],
              members: {
                CreatedDate: {
                  type: 'timestamp'
                },
                LastModificationDate: {
                  type: 'timestamp'
                },
                RuleSetArn: {},
                RuleSetId: {},
                RuleSetName: {},
                Rules: {
                  shape: 'S14'
                }
              }
            }
          },
          GetTrafficPolicy: {
            input: {
              type: 'structure',
              required: ['TrafficPolicyId'],
              members: {
                TrafficPolicyId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyId', 'TrafficPolicyName'],
              members: {
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                DefaultAction: {},
                LastUpdatedTimestamp: {
                  type: 'timestamp'
                },
                MaxMessageSizeBytes: {
                  type: 'integer'
                },
                PolicyStatements: {
                  shape: 'S2x'
                },
                TrafficPolicyArn: {},
                TrafficPolicyId: {},
                TrafficPolicyName: {}
              }
            }
          },
          ListAddonInstances: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AddonInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AddonInstanceArn: {},
                      AddonInstanceId: {},
                      AddonName: {},
                      AddonSubscriptionId: {},
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
          ListAddonSubscriptions: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AddonSubscriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AddonName: {},
                      AddonSubscriptionArn: {},
                      AddonSubscriptionId: {},
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
          ListArchiveExports: {
            input: {
              type: 'structure',
              required: ['ArchiveId'],
              members: {
                ArchiveId: {},
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Exports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ExportId: {},
                      Status: {
                        shape: 'S4x'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListArchiveSearches: {
            input: {
              type: 'structure',
              required: ['ArchiveId'],
              members: {
                ArchiveId: {},
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Searches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SearchId: {},
                      Status: {
                        shape: 'S5c'
                      }
                    }
                  }
                }
              }
            }
          },
          ListArchives: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Archives'],
              members: {
                Archives: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ArchiveId'],
                    members: {
                      ArchiveId: {},
                      ArchiveName: {},
                      ArchiveState: {},
                      LastUpdatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIngressPoints: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IngressPoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IngressPointId', 'IngressPointName', 'Status', 'Type'],
                    members: {
                      ARecord: {},
                      IngressPointId: {},
                      IngressPointName: {},
                      Status: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRelays: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Relays'],
              members: {
                NextToken: {},
                Relays: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LastModifiedTimestamp: {
                        type: 'timestamp'
                      },
                      RelayId: {},
                      RelayName: {}
                    }
                  }
                }
              }
            }
          },
          ListRuleSets: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RuleSets'],
              members: {
                NextToken: {},
                RuleSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LastModificationDate: {
                        type: 'timestamp'
                      },
                      RuleSetId: {},
                      RuleSetName: {}
                    }
                  }
                }
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
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'S4'
                }
              }
            }
          },
          ListTrafficPolicies: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TrafficPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DefaultAction', 'TrafficPolicyId', 'TrafficPolicyName'],
                    members: {
                      DefaultAction: {},
                      TrafficPolicyId: {},
                      TrafficPolicyName: {}
                    }
                  }
                }
              }
            }
          },
          StartArchiveExport: {
            input: {
              type: 'structure',
              required: ['ArchiveId', 'ExportDestinationConfiguration', 'FromTimestamp', 'ToTimestamp'],
              members: {
                ArchiveId: {},
                ExportDestinationConfiguration: {
                  shape: 'S4h'
                },
                Filters: {
                  shape: 'S4k'
                },
                FromTimestamp: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                ToTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ExportId: {}
              }
            }
          },
          StartArchiveSearch: {
            input: {
              type: 'structure',
              required: ['ArchiveId', 'FromTimestamp', 'MaxResults', 'ToTimestamp'],
              members: {
                ArchiveId: {},
                Filters: {
                  shape: 'S4k'
                },
                FromTimestamp: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                ToTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SearchId: {}
              }
            }
          },
          StopArchiveExport: {
            input: {
              type: 'structure',
              required: ['ExportId'],
              members: {
                ExportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopArchiveSearch: {
            input: {
              type: 'structure',
              required: ['SearchId'],
              members: {
                SearchId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S4'
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
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
                  type: 'list',
                  member: {
                    shape: 'S6'
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
          UpdateArchive: {
            input: {
              type: 'structure',
              required: ['ArchiveId'],
              members: {
                ArchiveId: {},
                ArchiveName: {},
                Retention: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateIngressPoint: {
            input: {
              type: 'structure',
              required: ['IngressPointId'],
              members: {
                IngressPointConfiguration: {
                  shape: 'Sl'
                },
                IngressPointId: {},
                IngressPointName: {},
                RuleSetId: {},
                StatusToUpdate: {},
                TrafficPolicyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateRelay: {
            input: {
              type: 'structure',
              required: ['RelayId'],
              members: {
                Authentication: {
                  shape: 'Sv'
                },
                RelayId: {},
                RelayName: {},
                ServerName: {},
                ServerPort: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateRuleSet: {
            input: {
              type: 'structure',
              required: ['RuleSetId'],
              members: {
                RuleSetId: {},
                RuleSetName: {},
                Rules: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateTrafficPolicy: {
            input: {
              type: 'structure',
              required: ['TrafficPolicyId'],
              members: {
                DefaultAction: {},
                MaxMessageSizeBytes: {
                  type: 'integer'
                },
                PolicyStatements: {
                  shape: 'S2x'
                },
                TrafficPolicyId: {},
                TrafficPolicyName: {}
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
          S4: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'S6'
                },
                Value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S6: {
            type: 'string',
            sensitive: true
          },
          Sg: {
            type: 'structure',
            members: {
              RetentionPeriod: {}
            },
            union: true
          },
          Sl: {
            type: 'structure',
            members: {
              SecretArn: {},
              SmtpPassword: {
                type: 'string',
                sensitive: true
              }
            },
            union: true
          },
          Sv: {
            type: 'structure',
            members: {
              NoAuthentication: {
                type: 'structure',
                members: {}
              },
              SecretArn: {}
            },
            union: true
          },
          S14: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Actions'],
              members: {
                Actions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AddHeader: {
                        type: 'structure',
                        required: ['HeaderName', 'HeaderValue'],
                        members: {
                          HeaderName: {},
                          HeaderValue: {}
                        }
                      },
                      Archive: {
                        type: 'structure',
                        required: ['TargetArchive'],
                        members: {
                          ActionFailurePolicy: {},
                          TargetArchive: {}
                        }
                      },
                      DeliverToMailbox: {
                        type: 'structure',
                        required: ['MailboxArn', 'RoleArn'],
                        members: {
                          ActionFailurePolicy: {},
                          MailboxArn: {},
                          RoleArn: {}
                        }
                      },
                      Drop: {
                        type: 'structure',
                        members: {}
                      },
                      Relay: {
                        type: 'structure',
                        required: ['Relay'],
                        members: {
                          ActionFailurePolicy: {},
                          MailFrom: {},
                          Relay: {}
                        }
                      },
                      ReplaceRecipient: {
                        type: 'structure',
                        members: {
                          ReplaceWith: {
                            type: 'list',
                            member: {
                              type: 'string',
                              sensitive: true
                            }
                          }
                        }
                      },
                      Send: {
                        type: 'structure',
                        required: ['RoleArn'],
                        members: {
                          ActionFailurePolicy: {},
                          RoleArn: {}
                        }
                      },
                      WriteToS3: {
                        type: 'structure',
                        required: ['RoleArn', 'S3Bucket'],
                        members: {
                          ActionFailurePolicy: {},
                          RoleArn: {},
                          S3Bucket: {},
                          S3Prefix: {},
                          S3SseKmsKeyId: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                Conditions: {
                  shape: 'S1s'
                },
                Name: {},
                Unless: {
                  shape: 'S1s'
                }
              }
            }
          },
          S1s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                BooleanExpression: {
                  type: 'structure',
                  required: ['Evaluate', 'Operator'],
                  members: {
                    Evaluate: {
                      type: 'structure',
                      members: {
                        Attribute: {}
                      },
                      union: true
                    },
                    Operator: {}
                  }
                },
                DmarcExpression: {
                  type: 'structure',
                  required: ['Operator', 'Values'],
                  members: {
                    Operator: {},
                    Values: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                IpExpression: {
                  type: 'structure',
                  required: ['Evaluate', 'Operator', 'Values'],
                  members: {
                    Evaluate: {
                      type: 'structure',
                      members: {
                        Attribute: {}
                      },
                      union: true
                    },
                    Operator: {},
                    Values: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                NumberExpression: {
                  type: 'structure',
                  required: ['Evaluate', 'Operator', 'Value'],
                  members: {
                    Evaluate: {
                      type: 'structure',
                      members: {
                        Attribute: {}
                      },
                      union: true
                    },
                    Operator: {},
                    Value: {
                      type: 'double'
                    }
                  }
                },
                StringExpression: {
                  type: 'structure',
                  required: ['Evaluate', 'Operator', 'Values'],
                  members: {
                    Evaluate: {
                      type: 'structure',
                      members: {
                        Attribute: {}
                      },
                      union: true
                    },
                    Operator: {},
                    Values: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                VerdictExpression: {
                  type: 'structure',
                  required: ['Evaluate', 'Operator', 'Values'],
                  members: {
                    Evaluate: {
                      type: 'structure',
                      members: {
                        Analysis: {
                          type: 'structure',
                          required: ['Analyzer', 'ResultField'],
                          members: {
                            Analyzer: {},
                            ResultField: {}
                          }
                        },
                        Attribute: {}
                      },
                      union: true
                    },
                    Operator: {},
                    Values: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              union: true
            }
          },
          S2x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Action', 'Conditions'],
              members: {
                Action: {},
                Conditions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BooleanExpression: {
                        type: 'structure',
                        required: ['Evaluate', 'Operator'],
                        members: {
                          Evaluate: {
                            type: 'structure',
                            members: {
                              Analysis: {
                                type: 'structure',
                                required: ['Analyzer', 'ResultField'],
                                members: {
                                  Analyzer: {},
                                  ResultField: {}
                                }
                              }
                            },
                            union: true
                          },
                          Operator: {}
                        }
                      },
                      IpExpression: {
                        type: 'structure',
                        required: ['Evaluate', 'Operator', 'Values'],
                        members: {
                          Evaluate: {
                            type: 'structure',
                            members: {
                              Attribute: {}
                            },
                            union: true
                          },
                          Operator: {},
                          Values: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      StringExpression: {
                        type: 'structure',
                        required: ['Evaluate', 'Operator', 'Values'],
                        members: {
                          Evaluate: {
                            type: 'structure',
                            members: {
                              Attribute: {}
                            },
                            union: true
                          },
                          Operator: {},
                          Values: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      TlsExpression: {
                        type: 'structure',
                        required: ['Evaluate', 'Operator', 'Value'],
                        members: {
                          Evaluate: {
                            type: 'structure',
                            members: {
                              Attribute: {}
                            },
                            union: true
                          },
                          Operator: {},
                          Value: {}
                        }
                      }
                    },
                    union: true
                  }
                }
              }
            }
          },
          S4h: {
            type: 'structure',
            members: {
              S3: {
                type: 'structure',
                members: {
                  S3Location: {}
                }
              }
            },
            union: true
          },
          S4k: {
            type: 'structure',
            members: {
              Include: {
                shape: 'S4l'
              },
              Unless: {
                shape: 'S4l'
              }
            }
          },
          S4l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                BooleanExpression: {
                  type: 'structure',
                  required: ['Evaluate', 'Operator'],
                  members: {
                    Evaluate: {
                      type: 'structure',
                      members: {
                        Attribute: {}
                      },
                      union: true
                    },
                    Operator: {}
                  }
                },
                StringExpression: {
                  type: 'structure',
                  required: ['Evaluate', 'Operator', 'Values'],
                  members: {
                    Evaluate: {
                      type: 'structure',
                      members: {
                        Attribute: {}
                      },
                      union: true
                    },
                    Operator: {},
                    Values: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              union: true
            }
          },
          S4x: {
            type: 'structure',
            members: {
              CompletionTimestamp: {
                type: 'timestamp'
              },
              ErrorMessage: {},
              State: {},
              SubmissionTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S5c: {
            type: 'structure',
            members: {
              CompletionTimestamp: {
                type: 'timestamp'
              },
              ErrorMessage: {},
              State: {},
              SubmissionTimestamp: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=02b015dafcc25639d71bc3ccdad44a0a782e7847.js.map