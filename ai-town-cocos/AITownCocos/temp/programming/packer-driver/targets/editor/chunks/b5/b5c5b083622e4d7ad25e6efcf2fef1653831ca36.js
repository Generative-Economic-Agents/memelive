System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-05-15',
          endpointPrefix: 'messaging-chime',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Chime SDK Messaging',
          serviceId: 'Chime SDK Messaging',
          signatureVersion: 'v4',
          signingName: 'chime',
          uid: 'chime-sdk-messaging-2021-05-15'
        },
        operations: {
          AssociateChannelFlow: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{channelArn}/channel-flow',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChannelFlowArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChannelFlowArn: {},
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            }
          },
          BatchCreateChannelMembership: {
            http: {
              requestUri: '/channels/{channelArn}/memberships?operation=batch-create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArns', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                Type: {},
                MemberArns: {
                  type: 'list',
                  member: {}
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BatchChannelMemberships: {
                  type: 'structure',
                  members: {
                    InvitedBy: {
                      shape: 'S9'
                    },
                    Type: {},
                    Members: {
                      type: 'list',
                      member: {
                        shape: 'S9'
                      }
                    },
                    ChannelArn: {},
                    SubChannelId: {}
                  }
                },
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MemberArn: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          ChannelFlowCallback: {
            http: {
              requestUri: '/channels/{channelArn}?operation=channel-flow-callback',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CallbackId', 'ChannelArn', 'ChannelMessage'],
              members: {
                CallbackId: {
                  idempotencyToken: true
                },
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                DeleteResource: {
                  type: 'boolean'
                },
                ChannelMessage: {
                  type: 'structure',
                  required: ['MessageId'],
                  members: {
                    MessageId: {},
                    Content: {
                      shape: 'Sl'
                    },
                    Metadata: {
                      shape: 'Sm'
                    },
                    PushNotification: {
                      shape: 'Sn'
                    },
                    MessageAttributes: {
                      shape: 'Sr'
                    },
                    SubChannelId: {},
                    ContentType: {
                      shape: 'Sw'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                CallbackId: {}
              }
            }
          },
          CreateChannel: {
            http: {
              requestUri: '/channels',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'Name', 'ClientRequestToken', 'ChimeBearer'],
              members: {
                AppInstanceArn: {},
                Name: {
                  shape: 'Sz'
                },
                Mode: {},
                Privacy: {},
                Metadata: {
                  shape: 'Sm'
                },
                ClientRequestToken: {
                  shape: 'S12',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S13'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                ChannelId: {
                  type: 'string',
                  sensitive: true
                },
                MemberArns: {
                  type: 'list',
                  member: {}
                },
                ModeratorArns: {
                  type: 'list',
                  member: {}
                },
                ElasticChannelConfiguration: {
                  shape: 'S1a'
                },
                ExpirationSettings: {
                  shape: 'S1e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {}
              }
            }
          },
          CreateChannelBan: {
            http: {
              requestUri: '/channels/{channelArn}/bans',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MemberArn: {},
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                Member: {
                  shape: 'S9'
                }
              }
            }
          },
          CreateChannelFlow: {
            http: {
              requestUri: '/channel-flows',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'Processors', 'Name', 'ClientRequestToken'],
              members: {
                AppInstanceArn: {},
                Processors: {
                  shape: 'S1l'
                },
                Name: {
                  shape: 'Sz'
                },
                Tags: {
                  shape: 'S13'
                },
                ClientRequestToken: {
                  shape: 'S12',
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelFlowArn: {}
              }
            }
          },
          CreateChannelMembership: {
            http: {
              requestUri: '/channels/{channelArn}/memberships',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'Type', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MemberArn: {},
                Type: {},
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                Member: {
                  shape: 'S9'
                },
                SubChannelId: {}
              }
            }
          },
          CreateChannelModerator: {
            http: {
              requestUri: '/channels/{channelArn}/moderators',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChannelModeratorArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChannelModeratorArn: {},
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                ChannelModerator: {
                  shape: 'S9'
                }
              }
            }
          },
          DeleteChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{channelArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            }
          },
          DeleteChannelBan: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{channelArn}/bans/{memberArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MemberArn: {
                  location: 'uri',
                  locationName: 'memberArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            }
          },
          DeleteChannelFlow: {
            http: {
              method: 'DELETE',
              requestUri: '/channel-flows/{channelFlowArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChannelFlowArn'],
              members: {
                ChannelFlowArn: {
                  location: 'uri',
                  locationName: 'channelFlowArn'
                }
              }
            }
          },
          DeleteChannelMembership: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{channelArn}/memberships/{memberArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MemberArn: {
                  location: 'uri',
                  locationName: 'memberArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {
                  location: 'querystring',
                  locationName: 'sub-channel-id'
                }
              }
            }
          },
          DeleteChannelMessage: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{channelArn}/messages/{messageId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MessageId', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MessageId: {
                  location: 'uri',
                  locationName: 'messageId'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {
                  location: 'querystring',
                  locationName: 'sub-channel-id'
                }
              }
            }
          },
          DeleteChannelModerator: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{channelArn}/moderators/{channelModeratorArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChannelModeratorArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChannelModeratorArn: {
                  location: 'uri',
                  locationName: 'channelModeratorArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            }
          },
          DeleteMessagingStreamingConfigurations: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instances/{appInstanceArn}/streaming-configurations',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            }
          },
          DescribeChannel: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Channel: {
                  type: 'structure',
                  members: {
                    Name: {
                      shape: 'Sz'
                    },
                    ChannelArn: {},
                    Mode: {},
                    Privacy: {},
                    Metadata: {
                      shape: 'Sm'
                    },
                    CreatedBy: {
                      shape: 'S9'
                    },
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastMessageTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    ChannelFlowArn: {},
                    ElasticChannelConfiguration: {
                      shape: 'S1a'
                    },
                    ExpirationSettings: {
                      shape: 'S1e'
                    }
                  }
                }
              }
            }
          },
          DescribeChannelBan: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/bans/{memberArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MemberArn: {
                  location: 'uri',
                  locationName: 'memberArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelBan: {
                  type: 'structure',
                  members: {
                    Member: {
                      shape: 'S9'
                    },
                    ChannelArn: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    CreatedBy: {
                      shape: 'S9'
                    }
                  }
                }
              }
            }
          },
          DescribeChannelFlow: {
            http: {
              method: 'GET',
              requestUri: '/channel-flows/{channelFlowArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelFlowArn'],
              members: {
                ChannelFlowArn: {
                  location: 'uri',
                  locationName: 'channelFlowArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelFlow: {
                  type: 'structure',
                  members: {
                    ChannelFlowArn: {},
                    Processors: {
                      shape: 'S1l'
                    },
                    Name: {
                      shape: 'Sz'
                    },
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          DescribeChannelMembership: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/memberships/{memberArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MemberArn: {
                  location: 'uri',
                  locationName: 'memberArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {
                  location: 'querystring',
                  locationName: 'sub-channel-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelMembership: {
                  type: 'structure',
                  members: {
                    InvitedBy: {
                      shape: 'S9'
                    },
                    Type: {},
                    Member: {
                      shape: 'S9'
                    },
                    ChannelArn: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    SubChannelId: {}
                  }
                }
              }
            }
          },
          DescribeChannelMembershipForAppInstanceUser: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}?scope=app-instance-user-membership',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'AppInstanceUserArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                AppInstanceUserArn: {
                  location: 'querystring',
                  locationName: 'app-instance-user-arn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelMembership: {
                  shape: 'S2k'
                }
              }
            }
          },
          DescribeChannelModeratedByAppInstanceUser: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}?scope=app-instance-user-moderated-channel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'AppInstanceUserArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                AppInstanceUserArn: {
                  location: 'querystring',
                  locationName: 'app-instance-user-arn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Channel: {
                  shape: 'S2p'
                }
              }
            }
          },
          DescribeChannelModerator: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/moderators/{channelModeratorArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChannelModeratorArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChannelModeratorArn: {
                  location: 'uri',
                  locationName: 'channelModeratorArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelModerator: {
                  type: 'structure',
                  members: {
                    Moderator: {
                      shape: 'S9'
                    },
                    ChannelArn: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    CreatedBy: {
                      shape: 'S9'
                    }
                  }
                }
              }
            }
          },
          DisassociateChannelFlow: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{channelArn}/channel-flow/{channelFlowArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChannelFlowArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChannelFlowArn: {
                  location: 'uri',
                  locationName: 'channelFlowArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            }
          },
          GetChannelMembershipPreferences: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/memberships/{memberArn}/preferences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MemberArn: {
                  location: 'uri',
                  locationName: 'memberArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                Member: {
                  shape: 'S9'
                },
                Preferences: {
                  shape: 'S2w'
                }
              }
            }
          },
          GetChannelMessage: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/messages/{messageId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MessageId', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MessageId: {
                  location: 'uri',
                  locationName: 'messageId'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {
                  location: 'querystring',
                  locationName: 'sub-channel-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelMessage: {
                  type: 'structure',
                  members: {
                    ChannelArn: {},
                    MessageId: {},
                    Content: {
                      shape: 'S33'
                    },
                    Metadata: {
                      shape: 'Sm'
                    },
                    Type: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastEditedTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    Sender: {
                      shape: 'S9'
                    },
                    Redacted: {
                      type: 'boolean'
                    },
                    Persistence: {},
                    Status: {
                      shape: 'S36'
                    },
                    MessageAttributes: {
                      shape: 'Sr'
                    },
                    SubChannelId: {},
                    ContentType: {
                      shape: 'Sw'
                    },
                    Target: {
                      shape: 'S39'
                    }
                  }
                }
              }
            }
          },
          GetChannelMessageStatus: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/messages/{messageId}?scope=message-status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MessageId', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MessageId: {
                  location: 'uri',
                  locationName: 'messageId'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {
                  location: 'querystring',
                  locationName: 'sub-channel-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  shape: 'S36'
                }
              }
            }
          },
          GetMessagingSessionEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/endpoints/messaging-session',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Endpoint: {
                  type: 'structure',
                  members: {
                    Url: {}
                  }
                }
              }
            }
          },
          GetMessagingStreamingConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}/streaming-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingConfigurations: {
                  shape: 'S3j'
                }
              }
            }
          },
          ListChannelBans: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/bans',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                NextToken: {
                  shape: 'S3o'
                },
                ChannelBans: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Member: {
                        shape: 'S9'
                      }
                    }
                  }
                }
              }
            }
          },
          ListChannelFlows: {
            http: {
              method: 'GET',
              requestUri: '/channel-flows',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'querystring',
                  locationName: 'app-instance-arn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelFlows: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ChannelFlowArn: {},
                      Name: {
                        shape: 'Sz'
                      },
                      Processors: {
                        shape: 'S1l'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S3o'
                }
              }
            }
          },
          ListChannelMemberships: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/memberships',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                Type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {
                  location: 'querystring',
                  locationName: 'sub-channel-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                ChannelMemberships: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Member: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S3o'
                }
              }
            }
          },
          ListChannelMembershipsForAppInstanceUser: {
            http: {
              method: 'GET',
              requestUri: '/channels?scope=app-instance-user-memberships',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChimeBearer'],
              members: {
                AppInstanceUserArn: {
                  location: 'querystring',
                  locationName: 'app-instance-user-arn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelMemberships: {
                  type: 'list',
                  member: {
                    shape: 'S2k'
                  }
                },
                NextToken: {
                  shape: 'S3o'
                }
              }
            }
          },
          ListChannelMessages: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/messages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                SortOrder: {
                  location: 'querystring',
                  locationName: 'sort-order'
                },
                NotBefore: {
                  location: 'querystring',
                  locationName: 'not-before',
                  type: 'timestamp'
                },
                NotAfter: {
                  location: 'querystring',
                  locationName: 'not-after',
                  type: 'timestamp'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {
                  location: 'querystring',
                  locationName: 'sub-channel-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                NextToken: {
                  shape: 'S3o'
                },
                ChannelMessages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MessageId: {},
                      Content: {
                        shape: 'S33'
                      },
                      Metadata: {
                        shape: 'Sm'
                      },
                      Type: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      },
                      LastUpdatedTimestamp: {
                        type: 'timestamp'
                      },
                      LastEditedTimestamp: {
                        type: 'timestamp'
                      },
                      Sender: {
                        shape: 'S9'
                      },
                      Redacted: {
                        type: 'boolean'
                      },
                      Status: {
                        shape: 'S36'
                      },
                      MessageAttributes: {
                        shape: 'Sr'
                      },
                      ContentType: {
                        shape: 'Sw'
                      },
                      Target: {
                        shape: 'S39'
                      }
                    }
                  }
                },
                SubChannelId: {}
              }
            }
          },
          ListChannelModerators: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/moderators',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                NextToken: {
                  shape: 'S3o'
                },
                ChannelModerators: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Moderator: {
                        shape: 'S9'
                      }
                    }
                  }
                }
              }
            }
          },
          ListChannels: {
            http: {
              method: 'GET',
              requestUri: '/channels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'ChimeBearer'],
              members: {
                AppInstanceArn: {
                  location: 'querystring',
                  locationName: 'app-instance-arn'
                },
                Privacy: {
                  location: 'querystring',
                  locationName: 'privacy'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Channels: {
                  shape: 'S4e'
                },
                NextToken: {
                  shape: 'S3o'
                }
              }
            }
          },
          ListChannelsAssociatedWithChannelFlow: {
            http: {
              method: 'GET',
              requestUri: '/channels?scope=channel-flow-associations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelFlowArn'],
              members: {
                ChannelFlowArn: {
                  location: 'querystring',
                  locationName: 'channel-flow-arn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Channels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        shape: 'Sz'
                      },
                      ChannelArn: {},
                      Mode: {},
                      Privacy: {},
                      Metadata: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S3o'
                }
              }
            }
          },
          ListChannelsModeratedByAppInstanceUser: {
            http: {
              method: 'GET',
              requestUri: '/channels?scope=app-instance-user-moderated-channels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChimeBearer'],
              members: {
                AppInstanceUserArn: {
                  location: 'querystring',
                  locationName: 'app-instance-user-arn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Channels: {
                  type: 'list',
                  member: {
                    shape: 'S2p'
                  }
                },
                NextToken: {
                  shape: 'S3o'
                }
              }
            }
          },
          ListSubChannels: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelArn}/subchannels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                SubChannels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SubChannelId: {},
                      MembershipCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S3o'
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S13'
                }
              }
            }
          },
          PutChannelExpirationSettings: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{channelArn}/expiration-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                ExpirationSettings: {
                  shape: 'S1e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                ExpirationSettings: {
                  shape: 'S1e'
                }
              }
            }
          },
          PutChannelMembershipPreferences: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{channelArn}/memberships/{memberArn}/preferences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'ChimeBearer', 'Preferences'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MemberArn: {
                  location: 'uri',
                  locationName: 'memberArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                Preferences: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                Member: {
                  shape: 'S9'
                },
                Preferences: {
                  shape: 'S2w'
                }
              }
            }
          },
          PutMessagingStreamingConfigurations: {
            http: {
              method: 'PUT',
              requestUri: '/app-instances/{appInstanceArn}/streaming-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'StreamingConfigurations'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                },
                StreamingConfigurations: {
                  shape: 'S3j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingConfigurations: {
                  shape: 'S3j'
                }
              }
            }
          },
          RedactChannelMessage: {
            http: {
              requestUri: '/channels/{channelArn}/messages/{messageId}?operation=redact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MessageId', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MessageId: {
                  location: 'uri',
                  locationName: 'messageId'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                MessageId: {},
                SubChannelId: {}
              }
            }
          },
          SearchChannels: {
            http: {
              requestUri: '/channels?operation=search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Fields'],
              members: {
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                Fields: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values', 'Operator'],
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      },
                      Operator: {}
                    }
                  }
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S3o',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Channels: {
                  shape: 'S4e'
                },
                NextToken: {
                  shape: 'S3o'
                }
              }
            }
          },
          SendChannelMessage: {
            http: {
              requestUri: '/channels/{channelArn}/messages',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'Content', 'Type', 'Persistence', 'ClientRequestToken', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                Content: {
                  shape: 'Sl'
                },
                Type: {},
                Persistence: {},
                Metadata: {
                  shape: 'Sm'
                },
                ClientRequestToken: {
                  shape: 'S12',
                  idempotencyToken: true
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                PushNotification: {
                  shape: 'Sn'
                },
                MessageAttributes: {
                  shape: 'Sr'
                },
                SubChannelId: {},
                ContentType: {
                  shape: 'Sw'
                },
                Target: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                MessageId: {},
                Status: {
                  shape: 'S36'
                },
                SubChannelId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags?operation=tag-resource',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S13'
                }
              }
            }
          },
          UntagResource: {
            http: {
              requestUri: '/tags?operation=untag-resource',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
                  type: 'list',
                  member: {
                    shape: 'S15'
                  }
                }
              }
            }
          },
          UpdateChannel: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{channelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                Name: {
                  shape: 'Sz'
                },
                Mode: {},
                Metadata: {
                  shape: 'Sm'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {}
              }
            }
          },
          UpdateChannelFlow: {
            http: {
              method: 'PUT',
              requestUri: '/channel-flows/{channelFlowArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelFlowArn', 'Processors', 'Name'],
              members: {
                ChannelFlowArn: {
                  location: 'uri',
                  locationName: 'channelFlowArn'
                },
                Processors: {
                  shape: 'S1l'
                },
                Name: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelFlowArn: {}
              }
            }
          },
          UpdateChannelMessage: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{channelArn}/messages/{messageId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MessageId', 'Content', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                MessageId: {
                  location: 'uri',
                  locationName: 'messageId'
                },
                Content: {
                  shape: 'Sl'
                },
                Metadata: {
                  shape: 'Sm'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                },
                SubChannelId: {},
                ContentType: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                MessageId: {},
                Status: {
                  shape: 'S36'
                },
                SubChannelId: {}
              }
            }
          },
          UpdateChannelReadMarker: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{channelArn}/readMarker',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChimeBearer'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                ChimeBearer: {
                  location: 'header',
                  locationName: 'x-amz-chime-bearer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {}
              }
            }
          }
        },
        shapes: {
          S9: {
            type: 'structure',
            members: {
              Arn: {},
              Name: {
                type: 'string',
                sensitive: true
              }
            }
          },
          Sl: {
            type: 'string',
            sensitive: true
          },
          Sm: {
            type: 'string',
            sensitive: true
          },
          Sn: {
            type: 'structure',
            members: {
              Title: {
                type: 'string',
                sensitive: true
              },
              Body: {
                type: 'string',
                sensitive: true
              },
              Type: {}
            }
          },
          Sr: {
            type: 'map',
            key: {
              type: 'string',
              sensitive: true
            },
            value: {
              type: 'structure',
              members: {
                StringValues: {
                  type: 'list',
                  member: {
                    type: 'string',
                    sensitive: true
                  }
                }
              }
            }
          },
          Sw: {
            type: 'string',
            sensitive: true
          },
          Sz: {
            type: 'string',
            sensitive: true
          },
          S12: {
            type: 'string',
            sensitive: true
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'S15'
                },
                Value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S15: {
            type: 'string',
            sensitive: true
          },
          S1a: {
            type: 'structure',
            required: ['MaximumSubChannels', 'TargetMembershipsPerSubChannel', 'MinimumMembershipPercentage'],
            members: {
              MaximumSubChannels: {
                type: 'integer'
              },
              TargetMembershipsPerSubChannel: {
                type: 'integer'
              },
              MinimumMembershipPercentage: {
                type: 'integer'
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['ExpirationDays', 'ExpirationCriterion'],
            members: {
              ExpirationDays: {
                type: 'integer'
              },
              ExpirationCriterion: {}
            }
          },
          S1l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Configuration', 'ExecutionOrder', 'FallbackAction'],
              members: {
                Name: {
                  shape: 'Sz'
                },
                Configuration: {
                  type: 'structure',
                  required: ['Lambda'],
                  members: {
                    Lambda: {
                      type: 'structure',
                      required: ['ResourceArn', 'InvocationType'],
                      members: {
                        ResourceArn: {},
                        InvocationType: {}
                      }
                    }
                  }
                },
                ExecutionOrder: {
                  type: 'integer'
                },
                FallbackAction: {}
              }
            }
          },
          S2k: {
            type: 'structure',
            members: {
              ChannelSummary: {
                shape: 'S2l'
              },
              AppInstanceUserMembershipSummary: {
                type: 'structure',
                members: {
                  Type: {},
                  ReadMarkerTimestamp: {
                    type: 'timestamp'
                  },
                  SubChannelId: {}
                }
              }
            }
          },
          S2l: {
            type: 'structure',
            members: {
              Name: {
                shape: 'Sz'
              },
              ChannelArn: {},
              Mode: {},
              Privacy: {},
              Metadata: {
                shape: 'Sm'
              },
              LastMessageTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S2p: {
            type: 'structure',
            members: {
              ChannelSummary: {
                shape: 'S2l'
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              PushNotifications: {
                type: 'structure',
                required: ['AllowNotifications'],
                members: {
                  AllowNotifications: {},
                  FilterRule: {
                    type: 'string',
                    sensitive: true
                  }
                }
              }
            }
          },
          S33: {
            type: 'string',
            sensitive: true
          },
          S36: {
            type: 'structure',
            members: {
              Value: {},
              Detail: {}
            }
          },
          S39: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                MemberArn: {}
              }
            }
          },
          S3j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DataType', 'ResourceArn'],
              members: {
                DataType: {},
                ResourceArn: {}
              }
            }
          },
          S3o: {
            type: 'string',
            sensitive: true
          },
          S4e: {
            type: 'list',
            member: {
              shape: 'S2l'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b5c5b083622e4d7ad25e6efcf2fef1653831ca36.js.map