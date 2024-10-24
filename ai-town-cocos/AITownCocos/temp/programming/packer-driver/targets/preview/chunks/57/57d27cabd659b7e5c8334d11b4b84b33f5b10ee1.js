System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-10-11',
          endpointPrefix: 'chatbot',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS Chatbot',
          serviceId: 'chatbot',
          signatureVersion: 'v4',
          uid: 'chatbot-2017-10-11'
        },
        operations: {
          CreateChimeWebhookConfiguration: {
            http: {
              requestUri: '/create-chime-webhook-configuration',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['WebhookDescription', 'WebhookUrl', 'SnsTopicArns', 'IamRoleArn', 'ConfigurationName'],
              members: {
                WebhookDescription: {},
                WebhookUrl: {},
                SnsTopicArns: {
                  shape: 'S4'
                },
                IamRoleArn: {},
                ConfigurationName: {},
                LoggingLevel: {},
                Tags: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WebhookConfiguration: {
                  shape: 'Sd'
                }
              }
            }
          },
          CreateMicrosoftTeamsChannelConfiguration: {
            http: {
              requestUri: '/create-ms-teams-channel-configuration',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ChannelId', 'TeamId', 'TenantId', 'IamRoleArn', 'ConfigurationName'],
              members: {
                ChannelId: {},
                ChannelName: {},
                TeamId: {},
                TeamName: {},
                TenantId: {},
                SnsTopicArns: {
                  shape: 'S4'
                },
                IamRoleArn: {},
                ConfigurationName: {},
                LoggingLevel: {},
                GuardrailPolicyArns: {
                  shape: 'Sk'
                },
                UserAuthorizationRequired: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelConfiguration: {
                  shape: 'So'
                }
              }
            }
          },
          CreateSlackChannelConfiguration: {
            http: {
              requestUri: '/create-slack-channel-configuration',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['SlackTeamId', 'SlackChannelId', 'IamRoleArn', 'ConfigurationName'],
              members: {
                SlackTeamId: {},
                SlackChannelId: {},
                SlackChannelName: {},
                SnsTopicArns: {
                  shape: 'S4'
                },
                IamRoleArn: {},
                ConfigurationName: {},
                LoggingLevel: {},
                GuardrailPolicyArns: {
                  shape: 'Sk'
                },
                UserAuthorizationRequired: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelConfiguration: {
                  shape: 'Sv'
                }
              }
            }
          },
          DeleteChimeWebhookConfiguration: {
            http: {
              requestUri: '/delete-chime-webhook-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn'],
              members: {
                ChatConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMicrosoftTeamsChannelConfiguration: {
            http: {
              requestUri: '/delete-ms-teams-channel-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn'],
              members: {
                ChatConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMicrosoftTeamsConfiguredTeam: {
            http: {
              requestUri: '/delete-ms-teams-configured-teams',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['TeamId'],
              members: {
                TeamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMicrosoftTeamsUserIdentity: {
            http: {
              requestUri: '/delete-ms-teams-user-identity',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn', 'UserId'],
              members: {
                ChatConfigurationArn: {},
                UserId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSlackChannelConfiguration: {
            http: {
              requestUri: '/delete-slack-channel-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn'],
              members: {
                ChatConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSlackUserIdentity: {
            http: {
              requestUri: '/delete-slack-user-identity',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn', 'SlackTeamId', 'SlackUserId'],
              members: {
                ChatConfigurationArn: {},
                SlackTeamId: {},
                SlackUserId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSlackWorkspaceAuthorization: {
            http: {
              requestUri: '/delete-slack-workspace-authorization',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['SlackTeamId'],
              members: {
                SlackTeamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeChimeWebhookConfigurations: {
            http: {
              requestUri: '/describe-chime-webhook-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ChatConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                WebhookConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'Sd'
                  }
                }
              }
            }
          },
          DescribeSlackChannelConfigurations: {
            http: {
              requestUri: '/describe-slack-channel-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ChatConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                SlackChannelConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                }
              }
            }
          },
          DescribeSlackUserIdentities: {
            http: {
              requestUri: '/describe-slack-user-identities',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChatConfigurationArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SlackUserIdentities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IamRoleArn', 'ChatConfigurationArn', 'SlackTeamId', 'SlackUserId'],
                    members: {
                      IamRoleArn: {},
                      ChatConfigurationArn: {},
                      SlackTeamId: {},
                      SlackUserId: {},
                      AwsUserIdentity: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSlackWorkspaces: {
            http: {
              requestUri: '/describe-slack-workspaces',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SlackWorkspaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SlackTeamId', 'SlackTeamName'],
                    members: {
                      SlackTeamId: {},
                      SlackTeamName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetAccountPreferences: {
            http: {
              requestUri: '/get-account-preferences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AccountPreferences: {
                  shape: 'S1v'
                }
              }
            }
          },
          GetMicrosoftTeamsChannelConfiguration: {
            http: {
              requestUri: '/get-ms-teams-channel-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn'],
              members: {
                ChatConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelConfiguration: {
                  shape: 'So'
                }
              }
            }
          },
          ListMicrosoftTeamsChannelConfigurations: {
            http: {
              requestUri: '/list-ms-teams-channel-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                TeamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TeamChannelConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'So'
                  }
                }
              }
            }
          },
          ListMicrosoftTeamsConfiguredTeams: {
            http: {
              requestUri: '/list-ms-teams-configured-teams',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfiguredTeams: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TenantId', 'TeamId'],
                    members: {
                      TenantId: {},
                      TeamId: {},
                      TeamName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMicrosoftTeamsUserIdentities: {
            http: {
              requestUri: '/list-ms-teams-user-identities',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChatConfigurationArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TeamsUserIdentities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IamRoleArn', 'ChatConfigurationArn', 'TeamId'],
                    members: {
                      IamRoleArn: {},
                      ChatConfigurationArn: {},
                      TeamId: {},
                      UserId: {},
                      AwsUserIdentity: {},
                      TeamsChannelId: {},
                      TeamsTenantId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/list-tags-for-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S2c'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tag-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S2c'
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
              requestUri: '/untag-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
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
          UpdateAccountPreferences: {
            http: {
              requestUri: '/update-account-preferences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                UserAuthorizationRequired: {
                  type: 'boolean'
                },
                TrainingDataCollectionEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountPreferences: {
                  shape: 'S1v'
                }
              }
            }
          },
          UpdateChimeWebhookConfiguration: {
            http: {
              requestUri: '/update-chime-webhook-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn'],
              members: {
                ChatConfigurationArn: {},
                WebhookDescription: {},
                WebhookUrl: {},
                SnsTopicArns: {
                  shape: 'S4'
                },
                IamRoleArn: {},
                LoggingLevel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WebhookConfiguration: {
                  shape: 'Sd'
                }
              }
            }
          },
          UpdateMicrosoftTeamsChannelConfiguration: {
            http: {
              requestUri: '/update-ms-teams-channel-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn', 'ChannelId'],
              members: {
                ChatConfigurationArn: {},
                ChannelId: {},
                ChannelName: {},
                SnsTopicArns: {
                  shape: 'S4'
                },
                IamRoleArn: {},
                LoggingLevel: {},
                GuardrailPolicyArns: {
                  shape: 'Sk'
                },
                UserAuthorizationRequired: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelConfiguration: {
                  shape: 'So'
                }
              }
            }
          },
          UpdateSlackChannelConfiguration: {
            http: {
              requestUri: '/update-slack-channel-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChatConfigurationArn', 'SlackChannelId'],
              members: {
                ChatConfigurationArn: {},
                SlackChannelId: {},
                SlackChannelName: {},
                SnsTopicArns: {
                  shape: 'S4'
                },
                IamRoleArn: {},
                LoggingLevel: {},
                GuardrailPolicyArns: {
                  shape: 'Sk'
                },
                UserAuthorizationRequired: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelConfiguration: {
                  shape: 'Sv'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {}
          },
          S8: {
            type: 'list',
            member: {
              shape: 'S9'
            }
          },
          S9: {
            type: 'structure',
            required: ['TagKey', 'TagValue'],
            members: {
              TagKey: {},
              TagValue: {}
            }
          },
          Sd: {
            type: 'structure',
            required: ['WebhookDescription', 'ChatConfigurationArn', 'IamRoleArn', 'SnsTopicArns'],
            members: {
              WebhookDescription: {},
              ChatConfigurationArn: {},
              IamRoleArn: {},
              SnsTopicArns: {
                shape: 'S4'
              },
              ConfigurationName: {},
              LoggingLevel: {},
              Tags: {
                shape: 'S8'
              }
            }
          },
          Sk: {
            type: 'list',
            member: {}
          },
          So: {
            type: 'structure',
            required: ['ChannelId', 'TeamId', 'TenantId', 'ChatConfigurationArn', 'IamRoleArn', 'SnsTopicArns'],
            members: {
              ChannelId: {},
              ChannelName: {},
              TeamId: {},
              TeamName: {},
              TenantId: {},
              ChatConfigurationArn: {},
              IamRoleArn: {},
              SnsTopicArns: {
                shape: 'S4'
              },
              ConfigurationName: {},
              LoggingLevel: {},
              GuardrailPolicyArns: {
                shape: 'Sk'
              },
              UserAuthorizationRequired: {
                type: 'boolean'
              },
              Tags: {
                shape: 'S8'
              }
            }
          },
          Sv: {
            type: 'structure',
            required: ['SlackTeamName', 'SlackTeamId', 'SlackChannelId', 'SlackChannelName', 'ChatConfigurationArn', 'IamRoleArn', 'SnsTopicArns'],
            members: {
              SlackTeamName: {},
              SlackTeamId: {},
              SlackChannelId: {},
              SlackChannelName: {},
              ChatConfigurationArn: {},
              IamRoleArn: {},
              SnsTopicArns: {
                shape: 'S4'
              },
              ConfigurationName: {},
              LoggingLevel: {},
              GuardrailPolicyArns: {
                shape: 'Sk'
              },
              UserAuthorizationRequired: {
                type: 'boolean'
              },
              Tags: {
                shape: 'S8'
              }
            }
          },
          S1v: {
            type: 'structure',
            members: {
              UserAuthorizationRequired: {
                type: 'boolean'
              },
              TrainingDataCollectionEnabled: {
                type: 'boolean'
              }
            }
          },
          S2c: {
            type: 'list',
            member: {
              shape: 'S9'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=57d27cabd659b7e5c8334d11b4b84b33f5b10ee1.js.map