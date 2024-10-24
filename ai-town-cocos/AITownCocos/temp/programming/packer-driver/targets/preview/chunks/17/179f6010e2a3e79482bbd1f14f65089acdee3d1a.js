System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-01',
          endpointPrefix: 'chime',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Chime',
          serviceId: 'Chime',
          signatureVersion: 'v4',
          uid: 'chime-2018-05-01'
        },
        operations: {
          AssociatePhoneNumberWithUser: {
            http: {
              requestUri: '/accounts/{accountId}/users/{userId}?operation=associate-phone-number',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserId', 'E164PhoneNumber'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                E164PhoneNumber: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociatePhoneNumbersWithVoiceConnector: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}?operation=associate-phone-numbers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'E164PhoneNumbers'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                E164PhoneNumbers: {
                  shape: 'S7'
                },
                ForceAssociate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'Sa'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by AssociatePhoneNumbersWithVoiceConnector in the Amazon Chime SDK Voice Namespace'
          },
          AssociatePhoneNumbersWithVoiceConnectorGroup: {
            http: {
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}?operation=associate-phone-numbers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId', 'E164PhoneNumbers'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                },
                E164PhoneNumbers: {
                  shape: 'S7'
                },
                ForceAssociate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'Sa'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by AssociatePhoneNumbersWithVoiceConnectorGroup in the Amazon Chime SDK Voice Namespace'
          },
          AssociateSigninDelegateGroupsWithAccount: {
            http: {
              requestUri: '/accounts/{accountId}?operation=associate-signin-delegate-groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'SigninDelegateGroups'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                SigninDelegateGroups: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BatchCreateAttendee: {
            http: {
              requestUri: '/meetings/{meetingId}/attendees?operation=batch-create',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'Attendees'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                Attendees: {
                  type: 'list',
                  member: {
                    shape: 'Sm'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attendees: {
                  shape: 'St'
                },
                Errors: {
                  shape: 'Sw'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by BatchCreateAttendee in the Amazon Chime SDK Meetings Namespace'
          },
          BatchCreateChannelMembership: {
            http: {
              requestUri: '/channels/{channelArn}/memberships?operation=batch-create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArns'],
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BatchChannelMemberships: {
                  type: 'structure',
                  members: {
                    InvitedBy: {
                      shape: 'S14'
                    },
                    Type: {},
                    Members: {
                      type: 'list',
                      member: {
                        shape: 'S14'
                      }
                    },
                    ChannelArn: {}
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
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by BatchCreateChannelMembership in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          BatchCreateRoomMembership: {
            http: {
              requestUri: '/accounts/{accountId}/rooms/{roomId}/memberships?operation=batch-create',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId', 'MembershipItemList'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                },
                MembershipItemList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MemberId: {},
                      Role: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MemberId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchDeletePhoneNumber: {
            http: {
              requestUri: '/phone-numbers?operation=batch-delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberIds'],
              members: {
                PhoneNumberIds: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'Sa'
                }
              }
            }
          },
          BatchSuspendUser: {
            http: {
              requestUri: '/accounts/{accountId}/users?operation=suspend',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserIdList'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserIdList: {
                  shape: 'S1k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserErrors: {
                  shape: 'S1m'
                }
              }
            }
          },
          BatchUnsuspendUser: {
            http: {
              requestUri: '/accounts/{accountId}/users?operation=unsuspend',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserIdList'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserIdList: {
                  shape: 'S1k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserErrors: {
                  shape: 'S1m'
                }
              }
            }
          },
          BatchUpdatePhoneNumber: {
            http: {
              requestUri: '/phone-numbers?operation=batch-update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['UpdatePhoneNumberRequestItems'],
              members: {
                UpdatePhoneNumberRequestItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['PhoneNumberId'],
                    members: {
                      PhoneNumberId: {},
                      ProductType: {},
                      CallingName: {
                        shape: 'S1u'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'Sa'
                }
              }
            }
          },
          BatchUpdateUser: {
            http: {
              requestUri: '/accounts/{accountId}/users',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UpdateUserRequestItems'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UpdateUserRequestItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['UserId'],
                    members: {
                      UserId: {},
                      LicenseType: {},
                      UserType: {},
                      AlexaForBusinessMetadata: {
                        shape: 'S21'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserErrors: {
                  shape: 'S1m'
                }
              }
            }
          },
          CreateAccount: {
            http: {
              requestUri: '/accounts',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Account: {
                  shape: 'S28'
                }
              }
            }
          },
          CreateAppInstance: {
            http: {
              requestUri: '/app-instances',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'ClientRequestToken'],
              members: {
                Name: {
                  shape: 'S2e'
                },
                Metadata: {
                  shape: 'S2f'
                },
                ClientRequestToken: {
                  shape: 'S2g',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S2h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateAppInstance in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          CreateAppInstanceAdmin: {
            http: {
              requestUri: '/app-instances/{appInstanceArn}/admins',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AppInstanceAdminArn', 'AppInstanceArn'],
              members: {
                AppInstanceAdminArn: {},
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceAdmin: {
                  shape: 'S14'
                },
                AppInstanceArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateAppInstanceAdmin in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          CreateAppInstanceUser: {
            http: {
              requestUri: '/app-instance-users',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'AppInstanceUserId', 'Name', 'ClientRequestToken'],
              members: {
                AppInstanceArn: {},
                AppInstanceUserId: {
                  type: 'string',
                  sensitive: true
                },
                Name: {
                  shape: 'S2n'
                },
                Metadata: {
                  shape: 'S2f'
                },
                ClientRequestToken: {
                  shape: 'S2g',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S2h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateAppInstanceUser in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          CreateAttendee: {
            http: {
              requestUri: '/meetings/{meetingId}/attendees',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'ExternalUserId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                ExternalUserId: {
                  shape: 'Sn'
                },
                Tags: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attendee: {
                  shape: 'Su'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateAttendee in the Amazon Chime SDK Meetings Namespace'
          },
          CreateBot: {
            http: {
              requestUri: '/accounts/{accountId}/bots',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DisplayName', 'AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                DisplayName: {
                  shape: 'S23'
                },
                Domain: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Bot: {
                  shape: 'S2t'
                }
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
              required: ['AppInstanceArn', 'Name', 'ClientRequestToken'],
              members: {
                AppInstanceArn: {},
                Name: {
                  shape: 'S2e'
                },
                Mode: {},
                Privacy: {},
                Metadata: {
                  shape: 'S2f'
                },
                ClientRequestToken: {
                  shape: 'S2g',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S2h'
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
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateChannel in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          CreateChannelBan: {
            http: {
              requestUri: '/channels/{channelArn}/bans',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn'],
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
                  shape: 'S14'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateChannelBan in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          CreateChannelMembership: {
            http: {
              requestUri: '/channels/{channelArn}/memberships',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MemberArn', 'Type'],
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                Member: {
                  shape: 'S14'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateChannelMembership in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          CreateChannelModerator: {
            http: {
              requestUri: '/channels/{channelArn}/moderators',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'ChannelModeratorArn'],
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
                  shape: 'S14'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateChannelModerator in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          CreateMediaCapturePipeline: {
            http: {
              requestUri: '/media-capture-pipelines',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['SourceType', 'SourceArn', 'SinkType', 'SinkArn'],
              members: {
                SourceType: {},
                SourceArn: {
                  shape: 'S37'
                },
                SinkType: {},
                SinkArn: {
                  shape: 'S37'
                },
                ClientRequestToken: {
                  shape: 'S2g',
                  idempotencyToken: true
                },
                ChimeSdkMeetingConfiguration: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaCapturePipeline: {
                  shape: 'S3n'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateMediaCapturePipeline in the Amazon Chime SDK Media Pipelines Namespace'
          },
          CreateMeeting: {
            http: {
              requestUri: '/meetings',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken'],
              members: {
                ClientRequestToken: {
                  shape: 'S2g',
                  idempotencyToken: true
                },
                ExternalMeetingId: {
                  shape: 'S3q'
                },
                MeetingHostId: {
                  shape: 'Sn'
                },
                MediaRegion: {},
                Tags: {
                  shape: 'S3r'
                },
                NotificationsConfiguration: {
                  shape: 'S3s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Meeting: {
                  shape: 'S3u'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateMeeting in the Amazon Chime SDK Meetings Namespace'
          },
          CreateMeetingDialOut: {
            http: {
              requestUri: '/meetings/{meetingId}/dial-outs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'FromPhoneNumber', 'ToPhoneNumber', 'JoinToken'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                FromPhoneNumber: {
                  shape: 'S3'
                },
                ToPhoneNumber: {
                  shape: 'S3'
                },
                JoinToken: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransactionId: {}
              }
            }
          },
          CreateMeetingWithAttendees: {
            http: {
              requestUri: '/meetings?operation=create-attendees',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken'],
              members: {
                ClientRequestToken: {
                  shape: 'S2g',
                  idempotencyToken: true
                },
                ExternalMeetingId: {
                  shape: 'S3q'
                },
                MeetingHostId: {
                  shape: 'Sn'
                },
                MediaRegion: {},
                Tags: {
                  shape: 'S3r'
                },
                NotificationsConfiguration: {
                  shape: 'S3s'
                },
                Attendees: {
                  type: 'list',
                  member: {
                    shape: 'Sm'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Meeting: {
                  shape: 'S3u'
                },
                Attendees: {
                  shape: 'St'
                },
                Errors: {
                  shape: 'Sw'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateMeetingWithAttendees in the Amazon Chime SDK Meetings Namespace'
          },
          CreatePhoneNumberOrder: {
            http: {
              requestUri: '/phone-number-orders',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ProductType', 'E164PhoneNumbers'],
              members: {
                ProductType: {},
                E164PhoneNumbers: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberOrder: {
                  shape: 'S44'
                }
              }
            }
          },
          CreateProxySession: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ParticipantPhoneNumbers', 'Capabilities', 'VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                ParticipantPhoneNumbers: {
                  type: 'list',
                  member: {
                    shape: 'S3'
                  }
                },
                Name: {
                  type: 'string',
                  sensitive: true
                },
                ExpiryMinutes: {
                  type: 'integer'
                },
                Capabilities: {
                  shape: 'S4e'
                },
                NumberSelectionBehavior: {},
                GeoMatchLevel: {},
                GeoMatchParams: {
                  shape: 'S4i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProxySession: {
                  shape: 'S4m'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateProxySession in the Amazon Chime SDK Voice Namespace'
          },
          CreateRoom: {
            http: {
              requestUri: '/accounts/{accountId}/rooms',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                Name: {
                  shape: 'S23'
                },
                ClientRequestToken: {
                  shape: 'S2g',
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Room: {
                  shape: 'S4t'
                }
              }
            }
          },
          CreateRoomMembership: {
            http: {
              requestUri: '/accounts/{accountId}/rooms/{roomId}/memberships',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId', 'MemberId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                },
                MemberId: {},
                Role: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RoomMembership: {
                  shape: 'S4w'
                }
              }
            }
          },
          CreateSipMediaApplication: {
            http: {
              requestUri: '/sip-media-applications',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AwsRegion', 'Name', 'Endpoints'],
              members: {
                AwsRegion: {},
                Name: {},
                Endpoints: {
                  shape: 'S51'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplication: {
                  shape: 'S55'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateSipMediaApplication in the Amazon Chime SDK Voice Namespace'
          },
          CreateSipMediaApplicationCall: {
            http: {
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/calls',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FromPhoneNumber', 'ToPhoneNumber', 'SipMediaApplicationId'],
              members: {
                FromPhoneNumber: {
                  shape: 'S3'
                },
                ToPhoneNumber: {
                  shape: 'S3'
                },
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                SipHeaders: {
                  type: 'map',
                  key: {
                    shape: 'S23'
                  },
                  value: {
                    shape: 'S23'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationCall: {
                  shape: 'S59'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateSipMediaApplicationCall in the Amazon Chime SDK Voice Namespace'
          },
          CreateSipRule: {
            http: {
              requestUri: '/sip-rules',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'TriggerType', 'TriggerValue', 'TargetApplications'],
              members: {
                Name: {},
                TriggerType: {},
                TriggerValue: {},
                Disabled: {
                  type: 'boolean'
                },
                TargetApplications: {
                  shape: 'S5d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipRule: {
                  shape: 'S5h'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateSipRule in the Amazon Chime SDK Voice Namespace'
          },
          CreateUser: {
            http: {
              requestUri: '/accounts/{accountId}/users?operation=create',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                Username: {},
                Email: {
                  shape: 'S5j'
                },
                UserType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S5l'
                }
              }
            }
          },
          CreateVoiceConnector: {
            http: {
              requestUri: '/voice-connectors',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'RequireEncryption'],
              members: {
                Name: {},
                AwsRegion: {},
                RequireEncryption: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnector: {
                  shape: 'S5s'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateVoiceConnector in the Amazon Chime SDK Voice Namespace'
          },
          CreateVoiceConnectorGroup: {
            http: {
              requestUri: '/voice-connector-groups',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                VoiceConnectorItems: {
                  shape: 'S5v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectorGroup: {
                  shape: 'S5z'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by CreateVoiceConnectorGroup in the Amazon Chime SDK Voice Namespace'
          },
          DeleteAccount: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{accountId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAppInstance: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instances/{appInstanceArn}',
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
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteAppInstance in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          DeleteAppInstanceAdmin: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AppInstanceAdminArn', 'AppInstanceArn'],
              members: {
                AppInstanceAdminArn: {
                  location: 'uri',
                  locationName: 'appInstanceAdminArn'
                },
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteAppInstanceAdmin in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          DeleteAppInstanceStreamingConfigurations: {
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
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteAppInstanceStreamingConfigurations in the Amazon Chime SDK Messaging Namespace'
          },
          DeleteAppInstanceUser: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instance-users/{appInstanceUserArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteAppInstanceUser in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          DeleteAttendee: {
            http: {
              method: 'DELETE',
              requestUri: '/meetings/{meetingId}/attendees/{attendeeId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'AttendeeId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                AttendeeId: {
                  location: 'uri',
                  locationName: 'attendeeId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteAttendee in the Amazon Chime SDK Meetings Namespace'
          },
          DeleteChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{channelArn}',
              responseCode: 204
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
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteChannel in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'MemberArn'],
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
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteChannelBan in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'MemberArn'],
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
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteChannelMembership in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'MessageId'],
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
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteChannelMessage in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'ChannelModeratorArn'],
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
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteChannelModerator in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          DeleteEventsConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{accountId}/bots/{botId}/events-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'BotId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                BotId: {
                  location: 'uri',
                  locationName: 'botId'
                }
              }
            }
          },
          DeleteMediaCapturePipeline: {
            http: {
              method: 'DELETE',
              requestUri: '/media-capture-pipelines/{mediaPipelineId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MediaPipelineId'],
              members: {
                MediaPipelineId: {
                  location: 'uri',
                  locationName: 'mediaPipelineId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteMediaCapturePipeline in the Amazon Chime SDK Media Pipelines Namespace'
          },
          DeleteMeeting: {
            http: {
              method: 'DELETE',
              requestUri: '/meetings/{meetingId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteMeeting in the Amazon Chime SDK Meetings Namespace'
          },
          DeletePhoneNumber: {
            http: {
              method: 'DELETE',
              requestUri: '/phone-numbers/{phoneNumberId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'phoneNumberId'
                }
              }
            }
          },
          DeleteProxySession: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'ProxySessionId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                ProxySessionId: {
                  location: 'uri',
                  locationName: 'proxySessionId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteProxySession in the Amazon Chime SDK Voice Namespace'
          },
          DeleteRoom: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{accountId}/rooms/{roomId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                }
              }
            }
          },
          DeleteRoomMembership: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{accountId}/rooms/{roomId}/memberships/{memberId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId', 'MemberId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                },
                MemberId: {
                  location: 'uri',
                  locationName: 'memberId'
                }
              }
            }
          },
          DeleteSipMediaApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteSipMediaApplication in the Amazon Chime SDK Voice Namespace'
          },
          DeleteSipRule: {
            http: {
              method: 'DELETE',
              requestUri: '/sip-rules/{sipRuleId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['SipRuleId'],
              members: {
                SipRuleId: {
                  location: 'uri',
                  locationName: 'sipRuleId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteSipRule in the Amazon Chime SDK Voice Namespace'
          },
          DeleteVoiceConnector: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteVoiceConnector in the Amazon Chime SDK Voice Namespace'
          },
          DeleteVoiceConnectorEmergencyCallingConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteVoiceConnectorEmergencyCallingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          DeleteVoiceConnectorGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteVoiceConnectorGroup in the Amazon Chime SDK Voice Namespace'
          },
          DeleteVoiceConnectorOrigination: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/origination',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteVoiceConnectorOrigination in the Amazon Chime SDK Voice Namespace'
          },
          DeleteVoiceConnectorProxy: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteVoiceConnectorProxy in the Amazon Chime SDK Voice Namespace'
          },
          DeleteVoiceConnectorStreamingConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteVoiceConnectorStreamingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          DeleteVoiceConnectorTermination: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteVoiceConnectorTermination in the Amazon Chime SDK Voice Namespace'
          },
          DeleteVoiceConnectorTerminationCredentials: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}/termination/credentials?operation=delete',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Usernames', 'VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Usernames: {
                  shape: 'S6u'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DeleteVoiceConnectorTerminationCredentials in the Amazon Chime SDK Voice Namespace'
          },
          DescribeAppInstance: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}',
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
                AppInstance: {
                  type: 'structure',
                  members: {
                    AppInstanceArn: {},
                    Name: {
                      shape: 'S2e'
                    },
                    Metadata: {
                      shape: 'S2f'
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
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeAppInstance in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          DescribeAppInstanceAdmin: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceAdminArn', 'AppInstanceArn'],
              members: {
                AppInstanceAdminArn: {
                  location: 'uri',
                  locationName: 'appInstanceAdminArn'
                },
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceAdmin: {
                  type: 'structure',
                  members: {
                    Admin: {
                      shape: 'S14'
                    },
                    AppInstanceArn: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeAppInstanceAdmin in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          DescribeAppInstanceUser: {
            http: {
              method: 'GET',
              requestUri: '/app-instance-users/{appInstanceUserArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUser: {
                  type: 'structure',
                  members: {
                    AppInstanceUserArn: {},
                    Name: {
                      shape: 'S2n'
                    },
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    Metadata: {
                      shape: 'S2f'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeAppInstanceUser in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
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
              required: ['ChannelArn'],
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
                      shape: 'S2e'
                    },
                    ChannelArn: {},
                    Mode: {},
                    Privacy: {},
                    Metadata: {
                      shape: 'S2f'
                    },
                    CreatedBy: {
                      shape: 'S14'
                    },
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastMessageTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeChannel in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'MemberArn'],
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
                      shape: 'S14'
                    },
                    ChannelArn: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    CreatedBy: {
                      shape: 'S14'
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeChannelBan in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'MemberArn'],
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
                ChannelMembership: {
                  type: 'structure',
                  members: {
                    InvitedBy: {
                      shape: 'S14'
                    },
                    Type: {},
                    Member: {
                      shape: 'S14'
                    },
                    ChannelArn: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeChannelMembership in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'AppInstanceUserArn'],
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
                  shape: 'S7g'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeChannelMembershipForAppInstanceUser in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'AppInstanceUserArn'],
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
                  shape: 'S7l'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeChannelModeratedByAppInstanceUser in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'ChannelModeratorArn'],
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
                      shape: 'S14'
                    },
                    ChannelArn: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    CreatedBy: {
                      shape: 'S14'
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DescribeChannelModerator in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          DisassociatePhoneNumberFromUser: {
            http: {
              requestUri: '/accounts/{accountId}/users/{userId}?operation=disassociate-phone-number',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociatePhoneNumbersFromVoiceConnector: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}?operation=disassociate-phone-numbers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'E164PhoneNumbers'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                E164PhoneNumbers: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'Sa'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DisassociatePhoneNumbersFromVoiceConnector in the Amazon Chime SDK Voice Namespace'
          },
          DisassociatePhoneNumbersFromVoiceConnectorGroup: {
            http: {
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}?operation=disassociate-phone-numbers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId', 'E164PhoneNumbers'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                },
                E164PhoneNumbers: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'Sa'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by DisassociatePhoneNumbersFromVoiceConnectorGroup in the Amazon Chime SDK Voice Namespace'
          },
          DisassociateSigninDelegateGroupsFromAccount: {
            http: {
              requestUri: '/accounts/{accountId}?operation=disassociate-signin-delegate-groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'GroupNames'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                GroupNames: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAccount: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Account: {
                  shape: 'S28'
                }
              }
            }
          },
          GetAccountSettings: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/settings'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountSettings: {
                  shape: 'S81'
                }
              }
            }
          },
          GetAppInstanceRetentionSettings: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}/retention-settings',
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
                AppInstanceRetentionSettings: {
                  shape: 'S84'
                },
                InitiateDeletionTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetAppInstanceRetentionSettings in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          GetAppInstanceStreamingConfigurations: {
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
                AppInstanceStreamingConfigurations: {
                  shape: 'S89'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetAppInstanceStreamingConfigurations in the Amazon Chime SDK Messaging Namespace'
          },
          GetAttendee: {
            http: {
              method: 'GET',
              requestUri: '/meetings/{meetingId}/attendees/{attendeeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'AttendeeId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                AttendeeId: {
                  location: 'uri',
                  locationName: 'attendeeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attendee: {
                  shape: 'Su'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetAttendee in the Amazon Chime SDK Meetings Namespace'
          },
          GetBot: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/bots/{botId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'BotId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                BotId: {
                  location: 'uri',
                  locationName: 'botId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Bot: {
                  shape: 'S2t'
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
              required: ['ChannelArn', 'MessageId'],
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
                      shape: 'S8j'
                    },
                    Metadata: {
                      shape: 'S2f'
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
                      shape: 'S14'
                    },
                    Redacted: {
                      type: 'boolean'
                    },
                    Persistence: {}
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetChannelMessage in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          GetEventsConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/bots/{botId}/events-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'BotId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                BotId: {
                  location: 'uri',
                  locationName: 'botId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventsConfiguration: {
                  shape: 'S8p'
                }
              }
            }
          },
          GetGlobalSettings: {
            http: {
              method: 'GET',
              requestUri: '/settings',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                BusinessCalling: {
                  shape: 'S8r'
                },
                VoiceConnector: {
                  shape: 'S8s'
                }
              }
            }
          },
          GetMediaCapturePipeline: {
            http: {
              method: 'GET',
              requestUri: '/media-capture-pipelines/{mediaPipelineId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MediaPipelineId'],
              members: {
                MediaPipelineId: {
                  location: 'uri',
                  locationName: 'mediaPipelineId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MediaCapturePipeline: {
                  shape: 'S3n'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetMediaCapturePipeline in the Amazon Chime SDK Media Pipelines Namespace'
          },
          GetMeeting: {
            http: {
              method: 'GET',
              requestUri: '/meetings/{meetingId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Meeting: {
                  shape: 'S3u'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetMeeting in the Amazon Chime SDK Meetings Namespace'
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
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetMessagingSessionEndpoint in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          GetPhoneNumber: {
            http: {
              method: 'GET',
              requestUri: '/phone-numbers/{phoneNumberId}'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'phoneNumberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumber: {
                  shape: 'S93'
                }
              }
            }
          },
          GetPhoneNumberOrder: {
            http: {
              method: 'GET',
              requestUri: '/phone-number-orders/{phoneNumberOrderId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberOrderId'],
              members: {
                PhoneNumberOrderId: {
                  location: 'uri',
                  locationName: 'phoneNumberOrderId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberOrder: {
                  shape: 'S44'
                }
              }
            }
          },
          GetPhoneNumberSettings: {
            http: {
              method: 'GET',
              requestUri: '/settings/phone-number',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                CallingName: {
                  shape: 'S1u'
                },
                CallingNameUpdatedTimestamp: {
                  shape: 'S2a'
                }
              }
            }
          },
          GetProxySession: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'ProxySessionId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                ProxySessionId: {
                  location: 'uri',
                  locationName: 'proxySessionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProxySession: {
                  shape: 'S4m'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetProxySession in the Amazon Chime SDK Voice Namespace'
          },
          GetRetentionSettings: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/retention-settings'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RetentionSettings: {
                  shape: 'S9j'
                },
                InitiateDeletionTimestamp: {
                  shape: 'S2a'
                }
              }
            }
          },
          GetRoom: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/rooms/{roomId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Room: {
                  shape: 'S4t'
                }
              }
            }
          },
          GetSipMediaApplication: {
            http: {
              method: 'GET',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplication: {
                  shape: 'S55'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetSipMediaApplication in the Amazon Chime SDK Voice Namespace'
          },
          GetSipMediaApplicationLoggingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/logging-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationLoggingConfiguration: {
                  shape: 'S9s'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetSipMediaApplicationLoggingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          GetSipRule: {
            http: {
              method: 'GET',
              requestUri: '/sip-rules/{sipRuleId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipRuleId'],
              members: {
                SipRuleId: {
                  location: 'uri',
                  locationName: 'sipRuleId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipRule: {
                  shape: 'S5h'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetSipRule in the Amazon Chime SDK Voice Namespace'
          },
          GetUser: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/users/{userId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S5l'
                }
              }
            }
          },
          GetUserSettings: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/users/{userId}/settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserSettings: {
                  shape: 'S9z'
                }
              }
            }
          },
          GetVoiceConnector: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnector: {
                  shape: 'S5s'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnector in the Amazon Chime SDK Voice Namespace'
          },
          GetVoiceConnectorEmergencyCallingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EmergencyCallingConfiguration: {
                  shape: 'Sa5'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnectorEmergencyCallingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          GetVoiceConnectorGroup: {
            http: {
              method: 'GET',
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectorGroup: {
                  shape: 'S5z'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnectorGroup in the Amazon Chime SDK Voice Namespace'
          },
          GetVoiceConnectorLoggingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/logging-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfiguration: {
                  shape: 'Sac'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnectorLoggingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          GetVoiceConnectorOrigination: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/origination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Origination: {
                  shape: 'Saf'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnectorOrigination in the Amazon Chime SDK Voice Namespace'
          },
          GetVoiceConnectorProxy: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Proxy: {
                  shape: 'Sao'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnectorProxy in the Amazon Chime SDK Voice Namespace'
          },
          GetVoiceConnectorStreamingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingConfiguration: {
                  shape: 'Sat'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnectorStreamingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          GetVoiceConnectorTermination: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Termination: {
                  shape: 'Sb0'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnectorTermination in the Amazon Chime SDK Voice Namespace'
          },
          GetVoiceConnectorTerminationHealth: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination/health',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TerminationHealth: {
                  type: 'structure',
                  members: {
                    Timestamp: {
                      shape: 'S2a'
                    },
                    Source: {}
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by GetVoiceConnectorTerminationHealth in the Amazon Chime SDK Voice Namespace'
          },
          InviteUsers: {
            http: {
              requestUri: '/accounts/{accountId}/users?operation=add',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserEmailList'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserEmailList: {
                  type: 'list',
                  member: {
                    shape: 'S5j'
                  }
                },
                UserType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Invites: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InviteId: {},
                      Status: {},
                      EmailAddress: {
                        shape: 'S5j'
                      },
                      EmailStatus: {}
                    }
                  }
                }
              }
            }
          },
          ListAccounts: {
            http: {
              method: 'GET',
              requestUri: '/accounts'
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                UserEmail: {
                  shape: 'S5j',
                  location: 'querystring',
                  locationName: 'user-email'
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
                Accounts: {
                  type: 'list',
                  member: {
                    shape: 'S28'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAppInstanceAdmins: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}/admins',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'Sbj',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {},
                AppInstanceAdmins: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Admin: {
                        shape: 'S14'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'Sbj'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListAppInstanceAdmins in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          ListAppInstanceUsers: {
            http: {
              method: 'GET',
              requestUri: '/app-instance-users',
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
                  shape: 'Sbj',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {},
                AppInstanceUsers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppInstanceUserArn: {},
                      Name: {
                        shape: 'S2n'
                      },
                      Metadata: {
                        shape: 'S2f'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'Sbj'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListAppInstanceUsers in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          ListAppInstances: {
            http: {
              method: 'GET',
              requestUri: '/app-instances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'Sbj',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppInstanceArn: {},
                      Name: {
                        shape: 'S2e'
                      },
                      Metadata: {
                        shape: 'S2f'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'Sbj'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListAppInstances in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          ListAttendeeTags: {
            http: {
              method: 'GET',
              requestUri: '/meetings/{meetingId}/attendees/{attendeeId}/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'AttendeeId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                AttendeeId: {
                  location: 'uri',
                  locationName: 'attendeeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S2h'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Attendee Tags are not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.'
          },
          ListAttendees: {
            http: {
              method: 'GET',
              requestUri: '/meetings/{meetingId}/attendees',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
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
                Attendees: {
                  shape: 'St'
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListAttendees in the Amazon Chime SDK Meetings Namespace'
          },
          ListBots: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/bots',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Bots: {
                  type: 'list',
                  member: {
                    shape: 'S2t'
                  }
                },
                NextToken: {}
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
              required: ['ChannelArn'],
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
                  shape: 'Sbj',
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
                  shape: 'Sbj'
                },
                ChannelBans: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Member: {
                        shape: 'S14'
                      }
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListChannelBans in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn'],
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
                  shape: 'Sbj',
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
                ChannelMemberships: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Member: {
                        shape: 'S14'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'Sbj'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListChannelMemberships in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
                  shape: 'Sbj',
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
                    shape: 'S7g'
                  }
                },
                NextToken: {
                  shape: 'Sbj'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListChannelMembershipsForAppInstanceUser in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn'],
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
                  shape: 'Sbj',
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
                  shape: 'Sbj'
                },
                ChannelMessages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MessageId: {},
                      Content: {
                        shape: 'S8j'
                      },
                      Metadata: {
                        shape: 'S2f'
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
                        shape: 'S14'
                      },
                      Redacted: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListChannelMessages in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn'],
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
                  shape: 'Sbj',
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
                  shape: 'Sbj'
                },
                ChannelModerators: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Moderator: {
                        shape: 'S14'
                      }
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListChannelModerators in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['AppInstanceArn'],
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
                  shape: 'Sbj',
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
                    shape: 'S7h'
                  }
                },
                NextToken: {
                  shape: 'Sbj'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListChannels in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
                  shape: 'Sbj',
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
                    shape: 'S7l'
                  }
                },
                NextToken: {
                  shape: 'Sbj'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListChannelsModeratedByAppInstanceUser in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          ListMediaCapturePipelines: {
            http: {
              method: 'GET',
              requestUri: '/media-capture-pipelines',
              responseCode: 200
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
                MediaCapturePipelines: {
                  type: 'list',
                  member: {
                    shape: 'S3n'
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListMediaCapturePipelines in the Amazon Chime SDK Media Pipelines Namespace'
          },
          ListMeetingTags: {
            http: {
              method: 'GET',
              requestUri: '/meetings/{meetingId}/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S2h'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Use ListTagsForResource in the Amazon Chime SDK Meetings Namespace.'
          },
          ListMeetings: {
            http: {
              method: 'GET',
              requestUri: '/meetings',
              responseCode: 200
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
                Meetings: {
                  type: 'list',
                  member: {
                    shape: 'S3u'
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'ListMeetings is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.'
          },
          ListPhoneNumberOrders: {
            http: {
              method: 'GET',
              requestUri: '/phone-number-orders',
              responseCode: 200
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
                PhoneNumberOrders: {
                  type: 'list',
                  member: {
                    shape: 'S44'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPhoneNumbers: {
            http: {
              method: 'GET',
              requestUri: '/phone-numbers'
            },
            input: {
              type: 'structure',
              members: {
                Status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                ProductType: {
                  location: 'querystring',
                  locationName: 'product-type'
                },
                FilterName: {
                  location: 'querystring',
                  locationName: 'filter-name'
                },
                FilterValue: {
                  location: 'querystring',
                  locationName: 'filter-value'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumbers: {
                  type: 'list',
                  member: {
                    shape: 'S93'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProxySessions: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'status'
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
                ProxySessions: {
                  type: 'list',
                  member: {
                    shape: 'S4m'
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListProxySessions in the Amazon Chime SDK Voice Namespace'
          },
          ListRoomMemberships: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/rooms/{roomId}/memberships',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RoomMemberships: {
                  type: 'list',
                  member: {
                    shape: 'S4w'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRooms: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/rooms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                MemberId: {
                  location: 'querystring',
                  locationName: 'member-id'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rooms: {
                  type: 'list',
                  member: {
                    shape: 'S4t'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSipMediaApplications: {
            http: {
              method: 'GET',
              requestUri: '/sip-media-applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplications: {
                  type: 'list',
                  member: {
                    shape: 'S55'
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListSipMediaApplications in the Amazon Chime SDK Voice Namespace'
          },
          ListSipRules: {
            http: {
              method: 'GET',
              requestUri: '/sip-rules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                SipMediaApplicationId: {
                  location: 'querystring',
                  locationName: 'sip-media-application'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipRules: {
                  type: 'list',
                  member: {
                    shape: 'S5h'
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListSipRules in the Amazon Chime SDK Voice Namespace'
          },
          ListSupportedPhoneNumberCountries: {
            http: {
              method: 'GET',
              requestUri: '/phone-number-countries',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProductType'],
              members: {
                ProductType: {
                  location: 'querystring',
                  locationName: 'product-type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberCountries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CountryCode: {},
                      SupportedPhoneNumberTypes: {
                        type: 'list',
                        member: {}
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
              requestUri: '/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {
                  shape: 'S37',
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S2h'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListTagsForResource in the Amazon Chime SDK Voice, Amazon Chime SDK Meetings, Amazon Chime SDK Identity, Amazon Chime SDK Messaging, and Amazon Chime SDK Media Pipelines Namespaces'
          },
          ListUsers: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{accountId}/users',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserEmail: {
                  shape: 'S5j',
                  location: 'querystring',
                  locationName: 'user-email'
                },
                UserType: {
                  location: 'querystring',
                  locationName: 'user-type'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Users: {
                  type: 'list',
                  member: {
                    shape: 'S5l'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListVoiceConnectorGroups: {
            http: {
              method: 'GET',
              requestUri: '/voice-connector-groups',
              responseCode: 200
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
                VoiceConnectorGroups: {
                  type: 'list',
                  member: {
                    shape: 'S5z'
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListVoiceConnectorGroups in the Amazon Chime SDK Voice Namespace'
          },
          ListVoiceConnectorTerminationCredentials: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination/credentials',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Usernames: {
                  shape: 'S6u'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListVoiceConnectorTerminationCredentials in the Amazon Chime SDK Voice Namespace'
          },
          ListVoiceConnectors: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors',
              responseCode: 200
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
                VoiceConnectors: {
                  type: 'list',
                  member: {
                    shape: 'S5s'
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ListVoiceConnectors in the Amazon Chime SDK Voice Namespace'
          },
          LogoutUser: {
            http: {
              requestUri: '/accounts/{accountId}/users/{userId}?operation=logout',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutAppInstanceRetentionSettings: {
            http: {
              method: 'PUT',
              requestUri: '/app-instances/{appInstanceArn}/retention-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'AppInstanceRetentionSettings'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                },
                AppInstanceRetentionSettings: {
                  shape: 'S84'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceRetentionSettings: {
                  shape: 'S84'
                },
                InitiateDeletionTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutAppInstanceRetentionSettings in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          PutAppInstanceStreamingConfigurations: {
            http: {
              method: 'PUT',
              requestUri: '/app-instances/{appInstanceArn}/streaming-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'AppInstanceStreamingConfigurations'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                },
                AppInstanceStreamingConfigurations: {
                  shape: 'S89'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceStreamingConfigurations: {
                  shape: 'S89'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutAppInstanceStreamingConfigurations in the Amazon Chime SDK Messaging Namespace'
          },
          PutEventsConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{accountId}/bots/{botId}/events-configuration',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'BotId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                BotId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                OutboundEventsHTTPSEndpoint: {
                  shape: 'S23'
                },
                LambdaFunctionArn: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventsConfiguration: {
                  shape: 'S8p'
                }
              }
            }
          },
          PutRetentionSettings: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{accountId}/retention-settings',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RetentionSettings'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RetentionSettings: {
                  shape: 'S9j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RetentionSettings: {
                  shape: 'S9j'
                },
                InitiateDeletionTimestamp: {
                  shape: 'S2a'
                }
              }
            }
          },
          PutSipMediaApplicationLoggingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/logging-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                SipMediaApplicationLoggingConfiguration: {
                  shape: 'S9s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationLoggingConfiguration: {
                  shape: 'S9s'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutSipMediaApplicationLoggingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          PutVoiceConnectorEmergencyCallingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'EmergencyCallingConfiguration'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                EmergencyCallingConfiguration: {
                  shape: 'Sa5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EmergencyCallingConfiguration: {
                  shape: 'Sa5'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutVoiceConnectorEmergencyCallingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          PutVoiceConnectorLoggingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/logging-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'LoggingConfiguration'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                LoggingConfiguration: {
                  shape: 'Sac'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfiguration: {
                  shape: 'Sac'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutVoiceConnectorLoggingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          PutVoiceConnectorOrigination: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/origination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'Origination'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Origination: {
                  shape: 'Saf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Origination: {
                  shape: 'Saf'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutVoiceConnectorOrigination in the Amazon Chime SDK Voice Namespace'
          },
          PutVoiceConnectorProxy: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy'
            },
            input: {
              type: 'structure',
              required: ['DefaultSessionExpiryMinutes', 'PhoneNumberPoolCountries', 'VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                DefaultSessionExpiryMinutes: {
                  type: 'integer'
                },
                PhoneNumberPoolCountries: {
                  type: 'list',
                  member: {}
                },
                FallBackPhoneNumber: {
                  shape: 'S3'
                },
                Disabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Proxy: {
                  shape: 'Sao'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutVoiceConnectorProxy in the Amazon Chime SDK Voice Namespace'
          },
          PutVoiceConnectorStreamingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'StreamingConfiguration'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                StreamingConfiguration: {
                  shape: 'Sat'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingConfiguration: {
                  shape: 'Sat'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutVoiceConnectorStreamingConfiguration in the Amazon Chime SDK Voice Namespace'
          },
          PutVoiceConnectorTermination: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'Termination'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Termination: {
                  shape: 'Sb0'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Termination: {
                  shape: 'Sb0'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutVoiceConnectorTermination in the Amazon Chime SDK Voice Namespace'
          },
          PutVoiceConnectorTerminationCredentials: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}/termination/credentials?operation=put',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Credentials: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Username: {
                        shape: 'S23'
                      },
                      Password: {
                        shape: 'S23'
                      }
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by PutVoiceConnectorTerminationCredentials in the Amazon Chime SDK Voice Namespace'
          },
          RedactChannelMessage: {
            http: {
              requestUri: '/channels/{channelArn}/messages/{messageId}?operation=redact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelArn', 'MessageId'],
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                MessageId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by RedactChannelMessage in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          RedactConversationMessage: {
            http: {
              requestUri: '/accounts/{accountId}/conversations/{conversationId}/messages/{messageId}?operation=redact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'ConversationId', 'MessageId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                ConversationId: {
                  location: 'uri',
                  locationName: 'conversationId'
                },
                MessageId: {
                  location: 'uri',
                  locationName: 'messageId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RedactRoomMessage: {
            http: {
              requestUri: '/accounts/{accountId}/rooms/{roomId}/messages/{messageId}?operation=redact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId', 'MessageId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                },
                MessageId: {
                  location: 'uri',
                  locationName: 'messageId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RegenerateSecurityToken: {
            http: {
              requestUri: '/accounts/{accountId}/bots/{botId}?operation=regenerate-security-token',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'BotId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                BotId: {
                  location: 'uri',
                  locationName: 'botId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Bot: {
                  shape: 'S2t'
                }
              }
            }
          },
          ResetPersonalPIN: {
            http: {
              requestUri: '/accounts/{accountId}/users/{userId}?operation=reset-personal-pin',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'userId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S5l'
                }
              }
            }
          },
          RestorePhoneNumber: {
            http: {
              requestUri: '/phone-numbers/{phoneNumberId}?operation=restore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'phoneNumberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumber: {
                  shape: 'S93'
                }
              }
            }
          },
          SearchAvailablePhoneNumbers: {
            http: {
              method: 'GET',
              requestUri: '/search?type=phone-numbers'
            },
            input: {
              type: 'structure',
              members: {
                AreaCode: {
                  location: 'querystring',
                  locationName: 'area-code'
                },
                City: {
                  location: 'querystring',
                  locationName: 'city'
                },
                Country: {
                  location: 'querystring',
                  locationName: 'country'
                },
                State: {
                  location: 'querystring',
                  locationName: 'state'
                },
                TollFreePrefix: {
                  location: 'querystring',
                  locationName: 'toll-free-prefix'
                },
                PhoneNumberType: {
                  location: 'querystring',
                  locationName: 'phone-number-type'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                E164PhoneNumbers: {
                  shape: 'S7'
                },
                NextToken: {}
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
              required: ['ChannelArn', 'Content', 'Type', 'Persistence', 'ClientRequestToken'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                Content: {
                  type: 'string',
                  sensitive: true
                },
                Type: {},
                Persistence: {},
                Metadata: {
                  shape: 'S2f'
                },
                ClientRequestToken: {
                  shape: 'S2g',
                  idempotencyToken: true
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
                MessageId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by SendChannelMessage in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          StartMeetingTranscription: {
            http: {
              requestUri: '/meetings/{meetingId}/transcription?operation=start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'TranscriptionConfiguration'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                TranscriptionConfiguration: {
                  type: 'structure',
                  members: {
                    EngineTranscribeSettings: {
                      type: 'structure',
                      members: {
                        LanguageCode: {},
                        VocabularyFilterMethod: {},
                        VocabularyFilterName: {},
                        VocabularyName: {},
                        Region: {},
                        EnablePartialResultsStabilization: {
                          type: 'boolean'
                        },
                        PartialResultsStability: {},
                        ContentIdentificationType: {},
                        ContentRedactionType: {},
                        PiiEntityTypes: {},
                        LanguageModelName: {},
                        IdentifyLanguage: {
                          type: 'boolean'
                        },
                        LanguageOptions: {},
                        PreferredLanguage: {},
                        VocabularyNames: {},
                        VocabularyFilterNames: {}
                      }
                    },
                    EngineTranscribeMedicalSettings: {
                      type: 'structure',
                      required: ['LanguageCode', 'Specialty', 'Type'],
                      members: {
                        LanguageCode: {},
                        Specialty: {},
                        Type: {},
                        VocabularyName: {},
                        Region: {},
                        ContentIdentificationType: {}
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by StartMeetingTranscription in the Amazon Chime SDK Meetings Namespace'
          },
          StopMeetingTranscription: {
            http: {
              requestUri: '/meetings/{meetingId}/transcription?operation=stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MeetingId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by StopMeetingTranscription in the Amazon Chime SDK Meetings Namespace'
          },
          TagAttendee: {
            http: {
              requestUri: '/meetings/{meetingId}/attendees/{attendeeId}/tags?operation=add',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'AttendeeId', 'Tags'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                AttendeeId: {
                  location: 'uri',
                  locationName: 'attendeeId'
                },
                Tags: {
                  shape: 'So'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Attendee Tags are not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.'
          },
          TagMeeting: {
            http: {
              requestUri: '/meetings/{meetingId}/tags?operation=add',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'Tags'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                Tags: {
                  shape: 'S3r'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Use TagResource in the Amazon Chime SDK Meetings Namespace.'
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
                ResourceARN: {
                  shape: 'S37'
                },
                Tags: {
                  shape: 'S2h'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by TagResource in the Amazon Chime SDK Voice, Amazon Chime SDK Meetings, Amazon Chime SDK Identity, Amazon Chime SDK Messaging, and Amazon Chime SDK Media Pipelines Namespaces'
          },
          UntagAttendee: {
            http: {
              requestUri: '/meetings/{meetingId}/attendees/{attendeeId}/tags?operation=delete',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'TagKeys', 'AttendeeId'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                AttendeeId: {
                  location: 'uri',
                  locationName: 'attendeeId'
                },
                TagKeys: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Attendee Tags are not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.'
          },
          UntagMeeting: {
            http: {
              requestUri: '/meetings/{meetingId}/tags?operation=delete',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MeetingId', 'TagKeys'],
              members: {
                MeetingId: {
                  location: 'uri',
                  locationName: 'meetingId'
                },
                TagKeys: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Use UntagResource in the Amazon Chime SDK Meetings Namespace.'
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
                ResourceARN: {
                  shape: 'S37'
                },
                TagKeys: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UntagResource in the Amazon Chime SDK Voice, Amazon Chime SDK Meetings, Amazon Chime SDK Identity, Amazon Chime SDK Messaging, and Amazon Chime SDK Media Pipelines Namespaces'
          },
          UpdateAccount: {
            http: {
              requestUri: '/accounts/{accountId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                Name: {},
                DefaultLicense: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Account: {
                  shape: 'S28'
                }
              }
            }
          },
          UpdateAccountSettings: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{accountId}/settings',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'AccountSettings'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                AccountSettings: {
                  shape: 'S81'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateAppInstance: {
            http: {
              method: 'PUT',
              requestUri: '/app-instances/{appInstanceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'Name'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                },
                Name: {
                  shape: 'S2e'
                },
                Metadata: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateAppInstance in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          UpdateAppInstanceUser: {
            http: {
              method: 'PUT',
              requestUri: '/app-instance-users/{appInstanceUserArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn', 'Name'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                },
                Name: {
                  shape: 'S2n'
                },
                Metadata: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateAppInstanceUser in the Amazon Chime SDK Identity Namespace',
            endpoint: {
              hostPrefix: 'identity-'
            }
          },
          UpdateBot: {
            http: {
              requestUri: '/accounts/{accountId}/bots/{botId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'BotId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                BotId: {
                  location: 'uri',
                  locationName: 'botId'
                },
                Disabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Bot: {
                  shape: 'S2t'
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
              required: ['ChannelArn', 'Name', 'Mode'],
              members: {
                ChannelArn: {
                  location: 'uri',
                  locationName: 'channelArn'
                },
                Name: {
                  shape: 'S2e'
                },
                Mode: {},
                Metadata: {
                  shape: 'S2f'
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
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateChannel in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn', 'MessageId'],
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
                  shape: 'S8j'
                },
                Metadata: {
                  shape: 'S2f'
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
                MessageId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateChannelMessage in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
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
              required: ['ChannelArn'],
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
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateChannelReadMarker in the Amazon Chime SDK Messaging Namespace',
            endpoint: {
              hostPrefix: 'messaging-'
            }
          },
          UpdateGlobalSettings: {
            http: {
              method: 'PUT',
              requestUri: '/settings',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                BusinessCalling: {
                  shape: 'S8r'
                },
                VoiceConnector: {
                  shape: 'S8s'
                }
              }
            }
          },
          UpdatePhoneNumber: {
            http: {
              requestUri: '/phone-numbers/{phoneNumberId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  location: 'uri',
                  locationName: 'phoneNumberId'
                },
                ProductType: {},
                CallingName: {
                  shape: 'S1u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumber: {
                  shape: 'S93'
                }
              }
            }
          },
          UpdatePhoneNumberSettings: {
            http: {
              method: 'PUT',
              requestUri: '/settings/phone-number',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['CallingName'],
              members: {
                CallingName: {
                  shape: 'S1u'
                }
              }
            }
          },
          UpdateProxySession: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Capabilities', 'VoiceConnectorId', 'ProxySessionId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                ProxySessionId: {
                  location: 'uri',
                  locationName: 'proxySessionId'
                },
                Capabilities: {
                  shape: 'S4e'
                },
                ExpiryMinutes: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProxySession: {
                  shape: 'S4m'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateProxySession in the Amazon Chime SDK Voice Namespace'
          },
          UpdateRoom: {
            http: {
              requestUri: '/accounts/{accountId}/rooms/{roomId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                },
                Name: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Room: {
                  shape: 'S4t'
                }
              }
            }
          },
          UpdateRoomMembership: {
            http: {
              requestUri: '/accounts/{accountId}/rooms/{roomId}/memberships/{memberId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RoomId', 'MemberId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                RoomId: {
                  location: 'uri',
                  locationName: 'roomId'
                },
                MemberId: {
                  location: 'uri',
                  locationName: 'memberId'
                },
                Role: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RoomMembership: {
                  shape: 'S4w'
                }
              }
            }
          },
          UpdateSipMediaApplication: {
            http: {
              method: 'PUT',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                Name: {},
                Endpoints: {
                  shape: 'S51'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplication: {
                  shape: 'S55'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateSipMediaApplication in the Amazon Chime SDK Voice Namespace'
          },
          UpdateSipMediaApplicationCall: {
            http: {
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/calls/{transactionId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId', 'TransactionId', 'Arguments'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                TransactionId: {
                  location: 'uri',
                  locationName: 'transactionId'
                },
                Arguments: {
                  type: 'map',
                  key: {
                    shape: 'S23'
                  },
                  value: {
                    shape: 'S23'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationCall: {
                  shape: 'S59'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateSipMediaApplicationCall in the Amazon Chime SDK Voice Namespace'
          },
          UpdateSipRule: {
            http: {
              method: 'PUT',
              requestUri: '/sip-rules/{sipRuleId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['SipRuleId', 'Name'],
              members: {
                SipRuleId: {
                  location: 'uri',
                  locationName: 'sipRuleId'
                },
                Name: {},
                Disabled: {
                  type: 'boolean'
                },
                TargetApplications: {
                  shape: 'S5d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipRule: {
                  shape: 'S5h'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateSipRule in the Amazon Chime SDK Voice Namespace'
          },
          UpdateUser: {
            http: {
              requestUri: '/accounts/{accountId}/users/{userId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserId'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                LicenseType: {},
                UserType: {},
                AlexaForBusinessMetadata: {
                  shape: 'S21'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S5l'
                }
              }
            }
          },
          UpdateUserSettings: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{accountId}/users/{userId}/settings',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'UserId', 'UserSettings'],
              members: {
                AccountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'userId'
                },
                UserSettings: {
                  shape: 'S9z'
                }
              }
            }
          },
          UpdateVoiceConnector: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'Name', 'RequireEncryption'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Name: {},
                RequireEncryption: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnector: {
                  shape: 'S5s'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateVoiceConnector in the Amazon Chime SDK Voice Namespace'
          },
          UpdateVoiceConnectorGroup: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId', 'Name', 'VoiceConnectorItems'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                },
                Name: {},
                VoiceConnectorItems: {
                  shape: 'S5v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectorGroup: {
                  shape: 'S5z'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by UpdateVoiceConnectorGroup in the Amazon Chime SDK Voice Namespace'
          },
          ValidateE911Address: {
            http: {
              requestUri: '/emergency-calling/address',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'StreetNumber', 'StreetInfo', 'City', 'State', 'Country', 'PostalCode'],
              members: {
                AwsAccountId: {},
                StreetNumber: {
                  shape: 'Shg'
                },
                StreetInfo: {
                  shape: 'Shg'
                },
                City: {
                  shape: 'Shg'
                },
                State: {
                  shape: 'Shg'
                },
                Country: {
                  shape: 'Shg'
                },
                PostalCode: {
                  shape: 'Shg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ValidationResult: {
                  type: 'integer'
                },
                AddressExternalId: {},
                Address: {
                  type: 'structure',
                  members: {
                    streetName: {
                      shape: 'Shg'
                    },
                    streetSuffix: {
                      shape: 'Shg'
                    },
                    postDirectional: {
                      shape: 'Shg'
                    },
                    preDirectional: {
                      shape: 'Shg'
                    },
                    streetNumber: {
                      shape: 'Shg'
                    },
                    city: {
                      shape: 'Shg'
                    },
                    state: {
                      shape: 'Shg'
                    },
                    postalCode: {
                      shape: 'Shg'
                    },
                    postalCodePlus4: {
                      shape: 'Shg'
                    },
                    country: {
                      shape: 'Shg'
                    }
                  }
                },
                CandidateAddressList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      streetInfo: {
                        shape: 'Shg'
                      },
                      streetNumber: {
                        shape: 'Shg'
                      },
                      city: {
                        shape: 'Shg'
                      },
                      state: {
                        shape: 'Shg'
                      },
                      postalCode: {
                        shape: 'Shg'
                      },
                      postalCodePlus4: {
                        shape: 'Shg'
                      },
                      country: {
                        shape: 'Shg'
                      }
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Replaced by ValidateE911Address in the Amazon Chime SDK Voice Namespace'
          }
        },
        shapes: {
          S3: {
            type: 'string',
            sensitive: true
          },
          S7: {
            type: 'list',
            member: {
              shape: 'S3'
            }
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PhoneNumberId: {},
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          Sg: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                GroupName: {}
              }
            }
          },
          Sm: {
            type: 'structure',
            required: ['ExternalUserId'],
            members: {
              ExternalUserId: {
                shape: 'Sn'
              },
              Tags: {
                shape: 'So'
              }
            }
          },
          Sn: {
            type: 'string',
            sensitive: true
          },
          So: {
            type: 'list',
            member: {
              shape: 'Sp'
            }
          },
          Sp: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {
                shape: 'Sq'
              },
              Value: {
                type: 'string',
                sensitive: true
              }
            }
          },
          Sq: {
            type: 'string',
            sensitive: true
          },
          St: {
            type: 'list',
            member: {
              shape: 'Su'
            }
          },
          Su: {
            type: 'structure',
            members: {
              ExternalUserId: {
                shape: 'Sn'
              },
              AttendeeId: {},
              JoinToken: {
                shape: 'Sv'
              }
            }
          },
          Sv: {
            type: 'string',
            sensitive: true
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ExternalUserId: {
                  shape: 'Sn'
                },
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              Arn: {},
              Name: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1k: {
            type: 'list',
            member: {}
          },
          S1m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                UserId: {},
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          S1u: {
            type: 'string',
            sensitive: true
          },
          S21: {
            type: 'structure',
            members: {
              IsAlexaForBusinessEnabled: {
                type: 'boolean'
              },
              AlexaForBusinessRoomArn: {
                shape: 'S23'
              }
            }
          },
          S23: {
            type: 'string',
            sensitive: true
          },
          S28: {
            type: 'structure',
            required: ['AwsAccountId', 'AccountId', 'Name'],
            members: {
              AwsAccountId: {},
              AccountId: {},
              Name: {},
              AccountType: {},
              CreatedTimestamp: {
                shape: 'S2a'
              },
              DefaultLicense: {},
              SupportedLicenses: {
                type: 'list',
                member: {}
              },
              AccountStatus: {},
              SigninDelegateGroups: {
                shape: 'Sg'
              }
            }
          },
          S2a: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S2e: {
            type: 'string',
            sensitive: true
          },
          S2f: {
            type: 'string',
            sensitive: true
          },
          S2g: {
            type: 'string',
            sensitive: true
          },
          S2h: {
            type: 'list',
            member: {
              shape: 'Sp'
            }
          },
          S2n: {
            type: 'string',
            sensitive: true
          },
          S2t: {
            type: 'structure',
            members: {
              BotId: {},
              UserId: {},
              DisplayName: {
                shape: 'S23'
              },
              BotType: {},
              Disabled: {
                type: 'boolean'
              },
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              },
              BotEmail: {
                shape: 'S23'
              },
              SecurityToken: {
                shape: 'S23'
              }
            }
          },
          S37: {
            type: 'string',
            sensitive: true
          },
          S39: {
            type: 'structure',
            members: {
              SourceConfiguration: {
                type: 'structure',
                members: {
                  SelectedVideoStreams: {
                    type: 'structure',
                    members: {
                      AttendeeIds: {
                        type: 'list',
                        member: {}
                      },
                      ExternalUserIds: {
                        type: 'list',
                        member: {
                          shape: 'Sn'
                        }
                      }
                    }
                  }
                }
              },
              ArtifactsConfiguration: {
                type: 'structure',
                required: ['Audio', 'Video', 'Content'],
                members: {
                  Audio: {
                    type: 'structure',
                    required: ['MuxType'],
                    members: {
                      MuxType: {}
                    }
                  },
                  Video: {
                    type: 'structure',
                    required: ['State'],
                    members: {
                      State: {},
                      MuxType: {}
                    }
                  },
                  Content: {
                    type: 'structure',
                    required: ['State'],
                    members: {
                      State: {},
                      MuxType: {}
                    }
                  }
                }
              }
            }
          },
          S3n: {
            type: 'structure',
            members: {
              MediaPipelineId: {},
              SourceType: {},
              SourceArn: {
                shape: 'S37'
              },
              Status: {},
              SinkType: {},
              SinkArn: {
                shape: 'S37'
              },
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              },
              ChimeSdkMeetingConfiguration: {
                shape: 'S39'
              }
            }
          },
          S3q: {
            type: 'string',
            sensitive: true
          },
          S3r: {
            type: 'list',
            member: {
              shape: 'Sp'
            }
          },
          S3s: {
            type: 'structure',
            members: {
              SnsTopicArn: {
                shape: 'S37'
              },
              SqsQueueArn: {
                shape: 'S37'
              }
            }
          },
          S3u: {
            type: 'structure',
            members: {
              MeetingId: {},
              ExternalMeetingId: {
                shape: 'S3q'
              },
              MediaPlacement: {
                type: 'structure',
                members: {
                  AudioHostUrl: {},
                  AudioFallbackUrl: {},
                  ScreenDataUrl: {},
                  ScreenSharingUrl: {},
                  ScreenViewingUrl: {},
                  SignalingUrl: {},
                  TurnControlUrl: {},
                  EventIngestionUrl: {}
                }
              },
              MediaRegion: {}
            }
          },
          S44: {
            type: 'structure',
            members: {
              PhoneNumberOrderId: {},
              ProductType: {},
              Status: {},
              OrderedPhoneNumbers: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    E164PhoneNumber: {
                      shape: 'S3'
                    },
                    Status: {}
                  }
                }
              },
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              }
            }
          },
          S4e: {
            type: 'list',
            member: {}
          },
          S4i: {
            type: 'structure',
            required: ['Country', 'AreaCode'],
            members: {
              Country: {},
              AreaCode: {}
            }
          },
          S4m: {
            type: 'structure',
            members: {
              VoiceConnectorId: {},
              ProxySessionId: {},
              Name: {},
              Status: {},
              ExpiryMinutes: {
                type: 'integer'
              },
              Capabilities: {
                shape: 'S4e'
              },
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              },
              EndedTimestamp: {
                shape: 'S2a'
              },
              Participants: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PhoneNumber: {
                      shape: 'S3'
                    },
                    ProxyPhoneNumber: {
                      shape: 'S3'
                    }
                  }
                }
              },
              NumberSelectionBehavior: {},
              GeoMatchLevel: {},
              GeoMatchParams: {
                shape: 'S4i'
              }
            }
          },
          S4t: {
            type: 'structure',
            members: {
              RoomId: {},
              Name: {
                shape: 'S23'
              },
              AccountId: {},
              CreatedBy: {},
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              }
            }
          },
          S4w: {
            type: 'structure',
            members: {
              RoomId: {},
              Member: {
                type: 'structure',
                members: {
                  MemberId: {},
                  MemberType: {},
                  Email: {
                    shape: 'S23'
                  },
                  FullName: {
                    shape: 'S23'
                  },
                  AccountId: {}
                }
              },
              Role: {},
              InvitedBy: {},
              UpdatedTimestamp: {
                shape: 'S2a'
              }
            }
          },
          S51: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LambdaArn: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S55: {
            type: 'structure',
            members: {
              SipMediaApplicationId: {},
              AwsRegion: {},
              Name: {},
              Endpoints: {
                shape: 'S51'
              },
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              }
            }
          },
          S59: {
            type: 'structure',
            members: {
              TransactionId: {}
            }
          },
          S5d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SipMediaApplicationId: {},
                Priority: {
                  type: 'integer'
                },
                AwsRegion: {}
              }
            }
          },
          S5h: {
            type: 'structure',
            members: {
              SipRuleId: {},
              Name: {},
              Disabled: {
                type: 'boolean'
              },
              TriggerType: {},
              TriggerValue: {},
              TargetApplications: {
                shape: 'S5d'
              },
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              }
            }
          },
          S5j: {
            type: 'string',
            sensitive: true
          },
          S5l: {
            type: 'structure',
            required: ['UserId'],
            members: {
              UserId: {},
              AccountId: {},
              PrimaryEmail: {
                shape: 'S5j'
              },
              PrimaryProvisionedNumber: {
                shape: 'S23'
              },
              DisplayName: {
                shape: 'S23'
              },
              LicenseType: {},
              UserType: {},
              UserRegistrationStatus: {},
              UserInvitationStatus: {},
              RegisteredOn: {
                shape: 'S2a'
              },
              InvitedOn: {
                shape: 'S2a'
              },
              AlexaForBusinessMetadata: {
                shape: 'S21'
              },
              PersonalPIN: {}
            }
          },
          S5s: {
            type: 'structure',
            members: {
              VoiceConnectorId: {},
              AwsRegion: {},
              Name: {},
              OutboundHostName: {},
              RequireEncryption: {
                type: 'boolean'
              },
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              },
              VoiceConnectorArn: {}
            }
          },
          S5v: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['VoiceConnectorId', 'Priority'],
              members: {
                VoiceConnectorId: {},
                Priority: {
                  type: 'integer'
                }
              }
            }
          },
          S5z: {
            type: 'structure',
            members: {
              VoiceConnectorGroupId: {},
              Name: {},
              VoiceConnectorItems: {
                shape: 'S5v'
              },
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              },
              VoiceConnectorGroupArn: {}
            }
          },
          S6u: {
            type: 'list',
            member: {
              shape: 'S23'
            }
          },
          S7g: {
            type: 'structure',
            members: {
              ChannelSummary: {
                shape: 'S7h'
              },
              AppInstanceUserMembershipSummary: {
                type: 'structure',
                members: {
                  Type: {},
                  ReadMarkerTimestamp: {
                    type: 'timestamp'
                  }
                }
              }
            }
          },
          S7h: {
            type: 'structure',
            members: {
              Name: {
                shape: 'S2e'
              },
              ChannelArn: {},
              Mode: {},
              Privacy: {},
              Metadata: {
                shape: 'S2f'
              },
              LastMessageTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S7l: {
            type: 'structure',
            members: {
              ChannelSummary: {
                shape: 'S7h'
              }
            }
          },
          S81: {
            type: 'structure',
            members: {
              DisableRemoteControl: {
                type: 'boolean'
              },
              EnableDialOut: {
                type: 'boolean'
              }
            }
          },
          S84: {
            type: 'structure',
            members: {
              ChannelRetentionSettings: {
                type: 'structure',
                members: {
                  RetentionDays: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S89: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AppInstanceDataType', 'ResourceArn'],
              members: {
                AppInstanceDataType: {},
                ResourceArn: {
                  shape: 'S37'
                }
              }
            }
          },
          S8j: {
            type: 'string',
            sensitive: true
          },
          S8p: {
            type: 'structure',
            members: {
              BotId: {},
              OutboundEventsHTTPSEndpoint: {
                shape: 'S23'
              },
              LambdaFunctionArn: {
                shape: 'S23'
              }
            }
          },
          S8r: {
            type: 'structure',
            members: {
              CdrBucket: {}
            }
          },
          S8s: {
            type: 'structure',
            members: {
              CdrBucket: {}
            }
          },
          S93: {
            type: 'structure',
            members: {
              PhoneNumberId: {},
              E164PhoneNumber: {
                shape: 'S3'
              },
              Country: {},
              Type: {},
              ProductType: {},
              Status: {},
              Capabilities: {
                type: 'structure',
                members: {
                  InboundCall: {
                    type: 'boolean'
                  },
                  OutboundCall: {
                    type: 'boolean'
                  },
                  InboundSMS: {
                    type: 'boolean'
                  },
                  OutboundSMS: {
                    type: 'boolean'
                  },
                  InboundMMS: {
                    type: 'boolean'
                  },
                  OutboundMMS: {
                    type: 'boolean'
                  }
                }
              },
              Associations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Value: {},
                    Name: {},
                    AssociatedTimestamp: {
                      shape: 'S2a'
                    }
                  }
                }
              },
              CallingName: {
                shape: 'S1u'
              },
              CallingNameStatus: {},
              CreatedTimestamp: {
                shape: 'S2a'
              },
              UpdatedTimestamp: {
                shape: 'S2a'
              },
              DeletionTimestamp: {
                shape: 'S2a'
              }
            }
          },
          S9j: {
            type: 'structure',
            members: {
              RoomRetentionSettings: {
                type: 'structure',
                members: {
                  RetentionDays: {
                    type: 'integer'
                  }
                }
              },
              ConversationRetentionSettings: {
                type: 'structure',
                members: {
                  RetentionDays: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S9s: {
            type: 'structure',
            members: {
              EnableSipMediaApplicationMessageLogs: {
                type: 'boolean'
              }
            }
          },
          S9z: {
            type: 'structure',
            required: ['Telephony'],
            members: {
              Telephony: {
                type: 'structure',
                required: ['InboundCalling', 'OutboundCalling', 'SMS'],
                members: {
                  InboundCalling: {
                    type: 'boolean'
                  },
                  OutboundCalling: {
                    type: 'boolean'
                  },
                  SMS: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          Sa5: {
            type: 'structure',
            members: {
              DNIS: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['EmergencyPhoneNumber', 'CallingCountry'],
                  members: {
                    EmergencyPhoneNumber: {
                      shape: 'S3'
                    },
                    TestPhoneNumber: {
                      shape: 'S3'
                    },
                    CallingCountry: {}
                  }
                }
              }
            }
          },
          Sac: {
            type: 'structure',
            members: {
              EnableSIPLogs: {
                type: 'boolean'
              },
              EnableMediaMetricLogs: {
                type: 'boolean'
              }
            }
          },
          Saf: {
            type: 'structure',
            members: {
              Routes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Host: {},
                    Port: {
                      type: 'integer'
                    },
                    Protocol: {},
                    Priority: {
                      type: 'integer'
                    },
                    Weight: {
                      type: 'integer'
                    }
                  }
                }
              },
              Disabled: {
                type: 'boolean'
              }
            }
          },
          Sao: {
            type: 'structure',
            members: {
              DefaultSessionExpiryMinutes: {
                type: 'integer'
              },
              Disabled: {
                type: 'boolean'
              },
              FallBackPhoneNumber: {
                shape: 'S3'
              },
              PhoneNumberCountries: {
                shape: 'Saq'
              }
            }
          },
          Saq: {
            type: 'list',
            member: {}
          },
          Sat: {
            type: 'structure',
            required: ['DataRetentionInHours'],
            members: {
              DataRetentionInHours: {
                type: 'integer'
              },
              Disabled: {
                type: 'boolean'
              },
              StreamingNotificationTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['NotificationTarget'],
                  members: {
                    NotificationTarget: {}
                  }
                }
              }
            }
          },
          Sb0: {
            type: 'structure',
            members: {
              CpsLimit: {
                type: 'integer'
              },
              DefaultPhoneNumber: {
                shape: 'S3'
              },
              CallingRegions: {
                type: 'list',
                member: {}
              },
              CidrAllowedList: {
                shape: 'Saq'
              },
              Disabled: {
                type: 'boolean'
              }
            }
          },
          Sbj: {
            type: 'string',
            sensitive: true
          },
          Shg: {
            type: 'string',
            sensitive: true
          }
        },
        deprecated: true,
        deprecatedMessage: 'This namespace has been deprecated'
      });
    }
  };
});
//# sourceMappingURL=179f6010e2a3e79482bbd1f14f65089acdee3d1a.js.map