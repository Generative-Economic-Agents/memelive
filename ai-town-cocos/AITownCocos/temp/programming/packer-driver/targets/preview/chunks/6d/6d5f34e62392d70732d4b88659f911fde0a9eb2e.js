System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-08-20',
          endpointPrefix: 'supportapp',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'SupportApp',
          serviceFullName: 'AWS Support App',
          serviceId: 'Support App',
          signatureVersion: 'v4',
          signingName: 'supportapp',
          uid: 'support-app-2021-08-20'
        },
        operations: {
          CreateSlackChannelConfiguration: {
            http: {
              requestUri: '/control/create-slack-channel-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelId', 'channelRoleArn', 'notifyOnCaseSeverity', 'teamId'],
              members: {
                channelId: {},
                channelName: {},
                channelRoleArn: {},
                notifyOnAddCorrespondenceToCase: {
                  type: 'boolean'
                },
                notifyOnCaseSeverity: {},
                notifyOnCreateOrReopenCase: {
                  type: 'boolean'
                },
                notifyOnResolveCase: {
                  type: 'boolean'
                },
                teamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAccountAlias: {
            http: {
              requestUri: '/control/delete-account-alias',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSlackChannelConfiguration: {
            http: {
              requestUri: '/control/delete-slack-channel-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelId', 'teamId'],
              members: {
                channelId: {},
                teamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSlackWorkspaceConfiguration: {
            http: {
              requestUri: '/control/delete-slack-workspace-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['teamId'],
              members: {
                teamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAccountAlias: {
            http: {
              requestUri: '/control/get-account-alias',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                accountAlias: {}
              }
            }
          },
          ListSlackChannelConfigurations: {
            http: {
              requestUri: '/control/list-slack-channel-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['slackChannelConfigurations'],
              members: {
                nextToken: {},
                slackChannelConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['channelId', 'teamId'],
                    members: {
                      channelId: {},
                      channelName: {},
                      channelRoleArn: {},
                      notifyOnAddCorrespondenceToCase: {
                        type: 'boolean'
                      },
                      notifyOnCaseSeverity: {},
                      notifyOnCreateOrReopenCase: {
                        type: 'boolean'
                      },
                      notifyOnResolveCase: {
                        type: 'boolean'
                      },
                      teamId: {}
                    }
                  }
                }
              }
            }
          },
          ListSlackWorkspaceConfigurations: {
            http: {
              requestUri: '/control/list-slack-workspace-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                slackWorkspaceConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['teamId'],
                    members: {
                      allowOrganizationMemberAccount: {
                        type: 'boolean'
                      },
                      teamId: {},
                      teamName: {}
                    }
                  }
                }
              }
            }
          },
          PutAccountAlias: {
            http: {
              requestUri: '/control/put-account-alias',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountAlias'],
              members: {
                accountAlias: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RegisterSlackWorkspaceForOrganization: {
            http: {
              requestUri: '/control/register-slack-workspace-for-organization',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['teamId'],
              members: {
                teamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accountType: {},
                teamId: {},
                teamName: {}
              }
            }
          },
          UpdateSlackChannelConfiguration: {
            http: {
              requestUri: '/control/update-slack-channel-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelId', 'teamId'],
              members: {
                channelId: {},
                channelName: {},
                channelRoleArn: {},
                notifyOnAddCorrespondenceToCase: {
                  type: 'boolean'
                },
                notifyOnCaseSeverity: {},
                notifyOnCreateOrReopenCase: {
                  type: 'boolean'
                },
                notifyOnResolveCase: {
                  type: 'boolean'
                },
                teamId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                channelId: {},
                channelName: {},
                channelRoleArn: {},
                notifyOnAddCorrespondenceToCase: {
                  type: 'boolean'
                },
                notifyOnCaseSeverity: {},
                notifyOnCreateOrReopenCase: {
                  type: 'boolean'
                },
                notifyOnResolveCase: {
                  type: 'boolean'
                },
                teamId: {}
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=6d5f34e62392d70732d4b88659f911fde0a9eb2e.js.map