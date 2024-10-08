System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-04-18',
          endpointPrefix: 'cognito-idp',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'Amazon Cognito Identity Provider',
          serviceId: 'Cognito Identity Provider',
          signatureVersion: 'v4',
          targetPrefix: 'AWSCognitoIdentityProviderService',
          uid: 'cognito-idp-2016-04-18'
        },
        operations: {
          AddCustomAttributes: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'CustomAttributes'],
              members: {
                UserPoolId: {},
                CustomAttributes: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminAddUserToGroup: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'GroupName'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                GroupName: {}
              }
            }
          },
          AdminConfirmSignUp: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminCreateUser: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                UserAttributes: {
                  shape: 'Sj'
                },
                ValidationData: {
                  shape: 'Sj'
                },
                TemporaryPassword: {
                  shape: 'Sn'
                },
                ForceAliasCreation: {
                  type: 'boolean'
                },
                MessageAction: {},
                DesiredDeliveryMediums: {
                  type: 'list',
                  member: {}
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'St'
                }
              }
            }
          },
          AdminDeleteUser: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                }
              }
            }
          },
          AdminDeleteUserAttributes: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'UserAttributeNames'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                UserAttributeNames: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminDisableProviderForUser: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'User'],
              members: {
                UserPoolId: {},
                User: {
                  shape: 'S13'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminDisableUser: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminEnableUser: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminForgetDevice: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'DeviceKey'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                DeviceKey: {}
              }
            }
          },
          AdminGetDevice: {
            input: {
              type: 'structure',
              required: ['DeviceKey', 'UserPoolId', 'Username'],
              members: {
                DeviceKey: {},
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Device'],
              members: {
                Device: {
                  shape: 'S1e'
                }
              }
            }
          },
          AdminGetUser: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Username'],
              members: {
                Username: {
                  shape: 'Sd'
                },
                UserAttributes: {
                  shape: 'Sj'
                },
                UserCreateDate: {
                  type: 'timestamp'
                },
                UserLastModifiedDate: {
                  type: 'timestamp'
                },
                Enabled: {
                  type: 'boolean'
                },
                UserStatus: {},
                MFAOptions: {
                  shape: 'Sw'
                },
                PreferredMfaSetting: {},
                UserMFASettingList: {
                  shape: 'S1h'
                }
              }
            }
          },
          AdminInitiateAuth: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ClientId', 'AuthFlow'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                },
                AuthFlow: {},
                AuthParameters: {
                  shape: 'S1l'
                },
                ClientMetadata: {
                  shape: 'Sg'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                ContextData: {
                  shape: 'S1n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChallengeName: {},
                Session: {
                  shape: 'S1s'
                },
                ChallengeParameters: {
                  shape: 'S1t'
                },
                AuthenticationResult: {
                  shape: 'S1u'
                }
              }
            }
          },
          AdminLinkProviderForUser: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'DestinationUser', 'SourceUser'],
              members: {
                UserPoolId: {},
                DestinationUser: {
                  shape: 'S13'
                },
                SourceUser: {
                  shape: 'S13'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminListDevices: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                Limit: {
                  type: 'integer'
                },
                PaginationToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Devices: {
                  shape: 'S24'
                },
                PaginationToken: {}
              }
            }
          },
          AdminListGroupsForUser: {
            input: {
              type: 'structure',
              required: ['Username', 'UserPoolId'],
              members: {
                Username: {
                  shape: 'Sd'
                },
                UserPoolId: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Groups: {
                  shape: 'S28'
                },
                NextToken: {}
              }
            }
          },
          AdminListUserAuthEvents: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventId: {},
                      EventType: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      EventResponse: {},
                      EventRisk: {
                        type: 'structure',
                        members: {
                          RiskDecision: {},
                          RiskLevel: {},
                          CompromisedCredentialsDetected: {
                            type: 'boolean'
                          }
                        }
                      },
                      ChallengeResponses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ChallengeName: {},
                            ChallengeResponse: {}
                          }
                        }
                      },
                      EventContextData: {
                        type: 'structure',
                        members: {
                          IpAddress: {},
                          DeviceName: {},
                          Timezone: {},
                          City: {},
                          Country: {}
                        }
                      },
                      EventFeedback: {
                        type: 'structure',
                        required: ['FeedbackValue', 'Provider'],
                        members: {
                          FeedbackValue: {},
                          Provider: {},
                          FeedbackDate: {
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
          AdminRemoveUserFromGroup: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'GroupName'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                GroupName: {}
              }
            }
          },
          AdminResetUserPassword: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminRespondToAuthChallenge: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ClientId', 'ChallengeName'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                },
                ChallengeName: {},
                ChallengeResponses: {
                  shape: 'S2y'
                },
                Session: {
                  shape: 'S1s'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                ContextData: {
                  shape: 'S1n'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChallengeName: {},
                Session: {
                  shape: 'S1s'
                },
                ChallengeParameters: {
                  shape: 'S1t'
                },
                AuthenticationResult: {
                  shape: 'S1u'
                }
              }
            }
          },
          AdminSetUserMFAPreference: {
            input: {
              type: 'structure',
              required: ['Username', 'UserPoolId'],
              members: {
                SMSMfaSettings: {
                  shape: 'S31'
                },
                SoftwareTokenMfaSettings: {
                  shape: 'S32'
                },
                Username: {
                  shape: 'Sd'
                },
                UserPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminSetUserPassword: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'Password'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                Password: {
                  shape: 'Sn'
                },
                Permanent: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminSetUserSettings: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'MFAOptions'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                MFAOptions: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminUpdateAuthEventFeedback: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'EventId', 'FeedbackValue'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                EventId: {},
                FeedbackValue: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminUpdateDeviceStatus: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'DeviceKey'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                DeviceKey: {},
                DeviceRememberedStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminUpdateUserAttributes: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'UserAttributes'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                UserAttributes: {
                  shape: 'Sj'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AdminUserGlobalSignOut: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateSoftwareToken: {
            input: {
              type: 'structure',
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                Session: {
                  shape: 'S1s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SecretCode: {
                  type: 'string',
                  sensitive: true
                },
                Session: {
                  shape: 'S1s'
                }
              }
            },
            authtype: 'none'
          },
          ChangePassword: {
            input: {
              type: 'structure',
              required: ['PreviousPassword', 'ProposedPassword', 'AccessToken'],
              members: {
                PreviousPassword: {
                  shape: 'Sn'
                },
                ProposedPassword: {
                  shape: 'Sn'
                },
                AccessToken: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          ConfirmDevice: {
            input: {
              type: 'structure',
              required: ['AccessToken', 'DeviceKey'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                DeviceKey: {},
                DeviceSecretVerifierConfig: {
                  type: 'structure',
                  members: {
                    PasswordVerifier: {},
                    Salt: {}
                  }
                },
                DeviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserConfirmationNecessary: {
                  type: 'boolean'
                }
              }
            },
            authtype: 'none'
          },
          ConfirmForgotPassword: {
            input: {
              type: 'structure',
              required: ['ClientId', 'Username', 'ConfirmationCode', 'Password'],
              members: {
                ClientId: {
                  shape: 'S1j'
                },
                SecretHash: {
                  shape: 'S3s'
                },
                Username: {
                  shape: 'Sd'
                },
                ConfirmationCode: {},
                Password: {
                  shape: 'Sn'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                UserContextData: {
                  shape: 'S3u'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          ConfirmSignUp: {
            input: {
              type: 'structure',
              required: ['ClientId', 'Username', 'ConfirmationCode'],
              members: {
                ClientId: {
                  shape: 'S1j'
                },
                SecretHash: {
                  shape: 'S3s'
                },
                Username: {
                  shape: 'Sd'
                },
                ConfirmationCode: {},
                ForceAliasCreation: {
                  type: 'boolean'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                UserContextData: {
                  shape: 'S3u'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          CreateGroup: {
            input: {
              type: 'structure',
              required: ['GroupName', 'UserPoolId'],
              members: {
                GroupName: {},
                UserPoolId: {},
                Description: {},
                RoleArn: {},
                Precedence: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'S29'
                }
              }
            }
          },
          CreateIdentityProvider: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ProviderName', 'ProviderType', 'ProviderDetails'],
              members: {
                UserPoolId: {},
                ProviderName: {},
                ProviderType: {},
                ProviderDetails: {
                  shape: 'S43'
                },
                AttributeMapping: {
                  shape: 'S44'
                },
                IdpIdentifiers: {
                  shape: 'S46'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityProvider'],
              members: {
                IdentityProvider: {
                  shape: 'S49'
                }
              }
            }
          },
          CreateResourceServer: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Identifier', 'Name'],
              members: {
                UserPoolId: {},
                Identifier: {},
                Name: {},
                Scopes: {
                  shape: 'S4d'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceServer'],
              members: {
                ResourceServer: {
                  shape: 'S4i'
                }
              }
            }
          },
          CreateUserImportJob: {
            input: {
              type: 'structure',
              required: ['JobName', 'UserPoolId', 'CloudWatchLogsRoleArn'],
              members: {
                JobName: {},
                UserPoolId: {},
                CloudWatchLogsRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserImportJob: {
                  shape: 'S4m'
                }
              }
            }
          },
          CreateUserPool: {
            input: {
              type: 'structure',
              required: ['PoolName'],
              members: {
                PoolName: {},
                Policies: {
                  shape: 'S4u'
                },
                DeletionProtection: {},
                LambdaConfig: {
                  shape: 'S4z'
                },
                AutoVerifiedAttributes: {
                  shape: 'S56'
                },
                AliasAttributes: {
                  shape: 'S58'
                },
                UsernameAttributes: {
                  shape: 'S5a'
                },
                SmsVerificationMessage: {},
                EmailVerificationMessage: {},
                EmailVerificationSubject: {},
                VerificationMessageTemplate: {
                  shape: 'S5f'
                },
                SmsAuthenticationMessage: {},
                MfaConfiguration: {},
                UserAttributeUpdateSettings: {
                  shape: 'S5k'
                },
                DeviceConfiguration: {
                  shape: 'S5m'
                },
                EmailConfiguration: {
                  shape: 'S5n'
                },
                SmsConfiguration: {
                  shape: 'S5r'
                },
                UserPoolTags: {
                  shape: 'S5t'
                },
                AdminCreateUserConfig: {
                  shape: 'S5w'
                },
                Schema: {
                  shape: 'S5z'
                },
                UserPoolAddOns: {
                  shape: 'S60'
                },
                UsernameConfiguration: {
                  shape: 'S62'
                },
                AccountRecoverySetting: {
                  shape: 'S63'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserPool: {
                  shape: 'S69'
                }
              }
            }
          },
          CreateUserPoolClient: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ClientName'],
              members: {
                UserPoolId: {},
                ClientName: {},
                GenerateSecret: {
                  type: 'boolean'
                },
                RefreshTokenValidity: {
                  type: 'integer'
                },
                AccessTokenValidity: {
                  type: 'integer'
                },
                IdTokenValidity: {
                  type: 'integer'
                },
                TokenValidityUnits: {
                  shape: 'S6i'
                },
                ReadAttributes: {
                  shape: 'S6k'
                },
                WriteAttributes: {
                  shape: 'S6k'
                },
                ExplicitAuthFlows: {
                  shape: 'S6m'
                },
                SupportedIdentityProviders: {
                  shape: 'S6o'
                },
                CallbackURLs: {
                  shape: 'S6p'
                },
                LogoutURLs: {
                  shape: 'S6r'
                },
                DefaultRedirectURI: {},
                AllowedOAuthFlows: {
                  shape: 'S6s'
                },
                AllowedOAuthScopes: {
                  shape: 'S6u'
                },
                AllowedOAuthFlowsUserPoolClient: {
                  type: 'boolean'
                },
                AnalyticsConfiguration: {
                  shape: 'S6w'
                },
                PreventUserExistenceErrors: {},
                EnableTokenRevocation: {
                  type: 'boolean'
                },
                EnablePropagateAdditionalUserContextData: {
                  type: 'boolean'
                },
                AuthSessionValidity: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserPoolClient: {
                  shape: 'S71'
                }
              }
            }
          },
          CreateUserPoolDomain: {
            input: {
              type: 'structure',
              required: ['Domain', 'UserPoolId'],
              members: {
                Domain: {},
                UserPoolId: {},
                CustomDomainConfig: {
                  shape: 'S74'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CloudFrontDomain: {}
              }
            }
          },
          DeleteGroup: {
            input: {
              type: 'structure',
              required: ['GroupName', 'UserPoolId'],
              members: {
                GroupName: {},
                UserPoolId: {}
              }
            }
          },
          DeleteIdentityProvider: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ProviderName'],
              members: {
                UserPoolId: {},
                ProviderName: {}
              }
            }
          },
          DeleteResourceServer: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Identifier'],
              members: {
                UserPoolId: {},
                Identifier: {}
              }
            }
          },
          DeleteUser: {
            input: {
              type: 'structure',
              required: ['AccessToken'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                }
              }
            },
            authtype: 'none'
          },
          DeleteUserAttributes: {
            input: {
              type: 'structure',
              required: ['UserAttributeNames', 'AccessToken'],
              members: {
                UserAttributeNames: {
                  shape: 'S10'
                },
                AccessToken: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          DeleteUserPool: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {}
              }
            }
          },
          DeleteUserPoolClient: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ClientId'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                }
              }
            }
          },
          DeleteUserPoolDomain: {
            input: {
              type: 'structure',
              required: ['Domain', 'UserPoolId'],
              members: {
                Domain: {},
                UserPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeIdentityProvider: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ProviderName'],
              members: {
                UserPoolId: {},
                ProviderName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityProvider'],
              members: {
                IdentityProvider: {
                  shape: 'S49'
                }
              }
            }
          },
          DescribeResourceServer: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Identifier'],
              members: {
                UserPoolId: {},
                Identifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceServer'],
              members: {
                ResourceServer: {
                  shape: 'S4i'
                }
              }
            }
          },
          DescribeRiskConfiguration: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RiskConfiguration'],
              members: {
                RiskConfiguration: {
                  shape: 'S7m'
                }
              }
            }
          },
          DescribeUserImportJob: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'JobId'],
              members: {
                UserPoolId: {},
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserImportJob: {
                  shape: 'S4m'
                }
              }
            }
          },
          DescribeUserPool: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserPool: {
                  shape: 'S69'
                }
              }
            }
          },
          DescribeUserPoolClient: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ClientId'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserPoolClient: {
                  shape: 'S71'
                }
              }
            }
          },
          DescribeUserPoolDomain: {
            input: {
              type: 'structure',
              required: ['Domain'],
              members: {
                Domain: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainDescription: {
                  type: 'structure',
                  members: {
                    UserPoolId: {},
                    AWSAccountId: {},
                    Domain: {},
                    S3Bucket: {},
                    CloudFrontDistribution: {},
                    Version: {},
                    Status: {},
                    CustomDomainConfig: {
                      shape: 'S74'
                    }
                  }
                }
              }
            }
          },
          ForgetDevice: {
            input: {
              type: 'structure',
              required: ['DeviceKey'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                DeviceKey: {}
              }
            },
            authtype: 'none'
          },
          ForgotPassword: {
            input: {
              type: 'structure',
              required: ['ClientId', 'Username'],
              members: {
                ClientId: {
                  shape: 'S1j'
                },
                SecretHash: {
                  shape: 'S3s'
                },
                UserContextData: {
                  shape: 'S3u'
                },
                Username: {
                  shape: 'Sd'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CodeDeliveryDetails: {
                  shape: 'S8k'
                }
              }
            },
            authtype: 'none'
          },
          GetCSVHeader: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserPoolId: {},
                CSVHeader: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          GetDevice: {
            input: {
              type: 'structure',
              required: ['DeviceKey'],
              members: {
                DeviceKey: {},
                AccessToken: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Device'],
              members: {
                Device: {
                  shape: 'S1e'
                }
              }
            },
            authtype: 'none'
          },
          GetGroup: {
            input: {
              type: 'structure',
              required: ['GroupName', 'UserPoolId'],
              members: {
                GroupName: {},
                UserPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'S29'
                }
              }
            }
          },
          GetIdentityProviderByIdentifier: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'IdpIdentifier'],
              members: {
                UserPoolId: {},
                IdpIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityProvider'],
              members: {
                IdentityProvider: {
                  shape: 'S49'
                }
              }
            }
          },
          GetLogDeliveryConfiguration: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LogDeliveryConfiguration: {
                  shape: 'S8w'
                }
              }
            }
          },
          GetSigningCertificate: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Certificate: {}
              }
            }
          },
          GetUICustomization: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UICustomization'],
              members: {
                UICustomization: {
                  shape: 'S96'
                }
              }
            }
          },
          GetUser: {
            input: {
              type: 'structure',
              required: ['AccessToken'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Username', 'UserAttributes'],
              members: {
                Username: {
                  shape: 'Sd'
                },
                UserAttributes: {
                  shape: 'Sj'
                },
                MFAOptions: {
                  shape: 'Sw'
                },
                PreferredMfaSetting: {},
                UserMFASettingList: {
                  shape: 'S1h'
                }
              }
            },
            authtype: 'none'
          },
          GetUserAttributeVerificationCode: {
            input: {
              type: 'structure',
              required: ['AccessToken', 'AttributeName'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                AttributeName: {},
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CodeDeliveryDetails: {
                  shape: 'S8k'
                }
              }
            },
            authtype: 'none'
          },
          GetUserPoolMfaConfig: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SmsMfaConfiguration: {
                  shape: 'S9g'
                },
                SoftwareTokenMfaConfiguration: {
                  shape: 'S9h'
                },
                MfaConfiguration: {}
              }
            }
          },
          GlobalSignOut: {
            input: {
              type: 'structure',
              required: ['AccessToken'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          InitiateAuth: {
            input: {
              type: 'structure',
              required: ['AuthFlow', 'ClientId'],
              members: {
                AuthFlow: {},
                AuthParameters: {
                  shape: 'S1l'
                },
                ClientMetadata: {
                  shape: 'Sg'
                },
                ClientId: {
                  shape: 'S1j'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                UserContextData: {
                  shape: 'S3u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChallengeName: {},
                Session: {
                  shape: 'S1s'
                },
                ChallengeParameters: {
                  shape: 'S1t'
                },
                AuthenticationResult: {
                  shape: 'S1u'
                }
              }
            },
            authtype: 'none'
          },
          ListDevices: {
            input: {
              type: 'structure',
              required: ['AccessToken'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                Limit: {
                  type: 'integer'
                },
                PaginationToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Devices: {
                  shape: 'S24'
                },
                PaginationToken: {}
              }
            },
            authtype: 'none'
          },
          ListGroups: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Groups: {
                  shape: 'S28'
                },
                NextToken: {}
              }
            }
          },
          ListIdentityProviders: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Providers'],
              members: {
                Providers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProviderName: {},
                      ProviderType: {},
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      CreationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceServers: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceServers'],
              members: {
                ResourceServers: {
                  type: 'list',
                  member: {
                    shape: 'S4i'
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
                Tags: {
                  shape: 'S5t'
                }
              }
            }
          },
          ListUserImportJobs: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'MaxResults'],
              members: {
                UserPoolId: {},
                MaxResults: {
                  type: 'integer'
                },
                PaginationToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserImportJobs: {
                  type: 'list',
                  member: {
                    shape: 'S4m'
                  }
                },
                PaginationToken: {}
              }
            }
          },
          ListUserPoolClients: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserPoolClients: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ClientId: {
                        shape: 'S1j'
                      },
                      UserPoolId: {},
                      ClientName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListUserPools: {
            input: {
              type: 'structure',
              required: ['MaxResults'],
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
                UserPools: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      LambdaConfig: {
                        shape: 'S4z'
                      },
                      Status: {
                        deprecated: true,
                        deprecatedMessage: 'This property is no longer available.'
                      },
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      CreationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListUsers: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                AttributesToGet: {
                  type: 'list',
                  member: {}
                },
                Limit: {
                  type: 'integer'
                },
                PaginationToken: {},
                Filter: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Users: {
                  shape: 'Saj'
                },
                PaginationToken: {}
              }
            }
          },
          ListUsersInGroup: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'GroupName'],
              members: {
                UserPoolId: {},
                GroupName: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Users: {
                  shape: 'Saj'
                },
                NextToken: {}
              }
            }
          },
          ResendConfirmationCode: {
            input: {
              type: 'structure',
              required: ['ClientId', 'Username'],
              members: {
                ClientId: {
                  shape: 'S1j'
                },
                SecretHash: {
                  shape: 'S3s'
                },
                UserContextData: {
                  shape: 'S3u'
                },
                Username: {
                  shape: 'Sd'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CodeDeliveryDetails: {
                  shape: 'S8k'
                }
              }
            },
            authtype: 'none'
          },
          RespondToAuthChallenge: {
            input: {
              type: 'structure',
              required: ['ClientId', 'ChallengeName'],
              members: {
                ClientId: {
                  shape: 'S1j'
                },
                ChallengeName: {},
                Session: {
                  shape: 'S1s'
                },
                ChallengeResponses: {
                  shape: 'S2y'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                UserContextData: {
                  shape: 'S3u'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChallengeName: {},
                Session: {
                  shape: 'S1s'
                },
                ChallengeParameters: {
                  shape: 'S1t'
                },
                AuthenticationResult: {
                  shape: 'S1u'
                }
              }
            },
            authtype: 'none'
          },
          RevokeToken: {
            input: {
              type: 'structure',
              required: ['Token', 'ClientId'],
              members: {
                Token: {
                  shape: 'S1v'
                },
                ClientId: {
                  shape: 'S1j'
                },
                ClientSecret: {
                  shape: 'S72'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          SetLogDeliveryConfiguration: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'LogConfigurations'],
              members: {
                UserPoolId: {},
                LogConfigurations: {
                  shape: 'S8x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LogDeliveryConfiguration: {
                  shape: 'S8w'
                }
              }
            }
          },
          SetRiskConfiguration: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                },
                CompromisedCredentialsRiskConfiguration: {
                  shape: 'S7n'
                },
                AccountTakeoverRiskConfiguration: {
                  shape: 'S7s'
                },
                RiskExceptionConfiguration: {
                  shape: 'S81'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RiskConfiguration'],
              members: {
                RiskConfiguration: {
                  shape: 'S7m'
                }
              }
            }
          },
          SetUICustomization: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                },
                CSS: {},
                ImageFile: {
                  type: 'blob'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UICustomization'],
              members: {
                UICustomization: {
                  shape: 'S96'
                }
              }
            }
          },
          SetUserMFAPreference: {
            input: {
              type: 'structure',
              required: ['AccessToken'],
              members: {
                SMSMfaSettings: {
                  shape: 'S31'
                },
                SoftwareTokenMfaSettings: {
                  shape: 'S32'
                },
                AccessToken: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          SetUserPoolMfaConfig: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                SmsMfaConfiguration: {
                  shape: 'S9g'
                },
                SoftwareTokenMfaConfiguration: {
                  shape: 'S9h'
                },
                MfaConfiguration: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SmsMfaConfiguration: {
                  shape: 'S9g'
                },
                SoftwareTokenMfaConfiguration: {
                  shape: 'S9h'
                },
                MfaConfiguration: {}
              }
            }
          },
          SetUserSettings: {
            input: {
              type: 'structure',
              required: ['AccessToken', 'MFAOptions'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                MFAOptions: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          SignUp: {
            input: {
              type: 'structure',
              required: ['ClientId', 'Username', 'Password'],
              members: {
                ClientId: {
                  shape: 'S1j'
                },
                SecretHash: {
                  shape: 'S3s'
                },
                Username: {
                  shape: 'Sd'
                },
                Password: {
                  shape: 'Sn'
                },
                UserAttributes: {
                  shape: 'Sj'
                },
                ValidationData: {
                  shape: 'Sj'
                },
                AnalyticsMetadata: {
                  shape: 'S1m'
                },
                UserContextData: {
                  shape: 'S3u'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UserConfirmed', 'UserSub'],
              members: {
                UserConfirmed: {
                  type: 'boolean'
                },
                CodeDeliveryDetails: {
                  shape: 'S8k'
                },
                UserSub: {}
              }
            },
            authtype: 'none'
          },
          StartUserImportJob: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'JobId'],
              members: {
                UserPoolId: {},
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserImportJob: {
                  shape: 'S4m'
                }
              }
            }
          },
          StopUserImportJob: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'JobId'],
              members: {
                UserPoolId: {},
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserImportJob: {
                  shape: 'S4m'
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
                  shape: 'S5t'
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
          UpdateAuthEventFeedback: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Username', 'EventId', 'FeedbackToken', 'FeedbackValue'],
              members: {
                UserPoolId: {},
                Username: {
                  shape: 'Sd'
                },
                EventId: {},
                FeedbackToken: {
                  shape: 'S1v'
                },
                FeedbackValue: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          UpdateDeviceStatus: {
            input: {
              type: 'structure',
              required: ['AccessToken', 'DeviceKey'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                DeviceKey: {},
                DeviceRememberedStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          },
          UpdateGroup: {
            input: {
              type: 'structure',
              required: ['GroupName', 'UserPoolId'],
              members: {
                GroupName: {},
                UserPoolId: {},
                Description: {},
                RoleArn: {},
                Precedence: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'S29'
                }
              }
            }
          },
          UpdateIdentityProvider: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ProviderName'],
              members: {
                UserPoolId: {},
                ProviderName: {},
                ProviderDetails: {
                  shape: 'S43'
                },
                AttributeMapping: {
                  shape: 'S44'
                },
                IdpIdentifiers: {
                  shape: 'S46'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityProvider'],
              members: {
                IdentityProvider: {
                  shape: 'S49'
                }
              }
            }
          },
          UpdateResourceServer: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'Identifier', 'Name'],
              members: {
                UserPoolId: {},
                Identifier: {},
                Name: {},
                Scopes: {
                  shape: 'S4d'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceServer'],
              members: {
                ResourceServer: {
                  shape: 'S4i'
                }
              }
            }
          },
          UpdateUserAttributes: {
            input: {
              type: 'structure',
              required: ['UserAttributes', 'AccessToken'],
              members: {
                UserAttributes: {
                  shape: 'Sj'
                },
                AccessToken: {
                  shape: 'S1v'
                },
                ClientMetadata: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CodeDeliveryDetailsList: {
                  type: 'list',
                  member: {
                    shape: 'S8k'
                  }
                }
              }
            },
            authtype: 'none'
          },
          UpdateUserPool: {
            input: {
              type: 'structure',
              required: ['UserPoolId'],
              members: {
                UserPoolId: {},
                Policies: {
                  shape: 'S4u'
                },
                DeletionProtection: {},
                LambdaConfig: {
                  shape: 'S4z'
                },
                AutoVerifiedAttributes: {
                  shape: 'S56'
                },
                SmsVerificationMessage: {},
                EmailVerificationMessage: {},
                EmailVerificationSubject: {},
                VerificationMessageTemplate: {
                  shape: 'S5f'
                },
                SmsAuthenticationMessage: {},
                UserAttributeUpdateSettings: {
                  shape: 'S5k'
                },
                MfaConfiguration: {},
                DeviceConfiguration: {
                  shape: 'S5m'
                },
                EmailConfiguration: {
                  shape: 'S5n'
                },
                SmsConfiguration: {
                  shape: 'S5r'
                },
                UserPoolTags: {
                  shape: 'S5t'
                },
                AdminCreateUserConfig: {
                  shape: 'S5w'
                },
                UserPoolAddOns: {
                  shape: 'S60'
                },
                AccountRecoverySetting: {
                  shape: 'S63'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateUserPoolClient: {
            input: {
              type: 'structure',
              required: ['UserPoolId', 'ClientId'],
              members: {
                UserPoolId: {},
                ClientId: {
                  shape: 'S1j'
                },
                ClientName: {},
                RefreshTokenValidity: {
                  type: 'integer'
                },
                AccessTokenValidity: {
                  type: 'integer'
                },
                IdTokenValidity: {
                  type: 'integer'
                },
                TokenValidityUnits: {
                  shape: 'S6i'
                },
                ReadAttributes: {
                  shape: 'S6k'
                },
                WriteAttributes: {
                  shape: 'S6k'
                },
                ExplicitAuthFlows: {
                  shape: 'S6m'
                },
                SupportedIdentityProviders: {
                  shape: 'S6o'
                },
                CallbackURLs: {
                  shape: 'S6p'
                },
                LogoutURLs: {
                  shape: 'S6r'
                },
                DefaultRedirectURI: {},
                AllowedOAuthFlows: {
                  shape: 'S6s'
                },
                AllowedOAuthScopes: {
                  shape: 'S6u'
                },
                AllowedOAuthFlowsUserPoolClient: {
                  type: 'boolean'
                },
                AnalyticsConfiguration: {
                  shape: 'S6w'
                },
                PreventUserExistenceErrors: {},
                EnableTokenRevocation: {
                  type: 'boolean'
                },
                EnablePropagateAdditionalUserContextData: {
                  type: 'boolean'
                },
                AuthSessionValidity: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserPoolClient: {
                  shape: 'S71'
                }
              }
            }
          },
          UpdateUserPoolDomain: {
            input: {
              type: 'structure',
              required: ['Domain', 'UserPoolId', 'CustomDomainConfig'],
              members: {
                Domain: {},
                UserPoolId: {},
                CustomDomainConfig: {
                  shape: 'S74'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CloudFrontDomain: {}
              }
            }
          },
          VerifySoftwareToken: {
            input: {
              type: 'structure',
              required: ['UserCode'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                Session: {
                  shape: 'S1s'
                },
                UserCode: {
                  type: 'string',
                  sensitive: true
                },
                FriendlyDeviceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                Session: {
                  shape: 'S1s'
                }
              }
            },
            authtype: 'none'
          },
          VerifyUserAttribute: {
            input: {
              type: 'structure',
              required: ['AccessToken', 'AttributeName', 'Code'],
              members: {
                AccessToken: {
                  shape: 'S1v'
                },
                AttributeName: {},
                Code: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            authtype: 'none'
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              Name: {},
              AttributeDataType: {},
              DeveloperOnlyAttribute: {
                type: 'boolean'
              },
              Mutable: {
                type: 'boolean'
              },
              Required: {
                type: 'boolean'
              },
              NumberAttributeConstraints: {
                type: 'structure',
                members: {
                  MinValue: {},
                  MaxValue: {}
                }
              },
              StringAttributeConstraints: {
                type: 'structure',
                members: {
                  MinLength: {},
                  MaxLength: {}
                }
              }
            }
          },
          Sd: {
            type: 'string',
            sensitive: true
          },
          Sg: {
            type: 'map',
            key: {},
            value: {}
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          Sn: {
            type: 'string',
            sensitive: true
          },
          St: {
            type: 'structure',
            members: {
              Username: {
                shape: 'Sd'
              },
              Attributes: {
                shape: 'Sj'
              },
              UserCreateDate: {
                type: 'timestamp'
              },
              UserLastModifiedDate: {
                type: 'timestamp'
              },
              Enabled: {
                type: 'boolean'
              },
              UserStatus: {},
              MFAOptions: {
                shape: 'Sw'
              }
            }
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DeliveryMedium: {},
                AttributeName: {}
              }
            }
          },
          S10: {
            type: 'list',
            member: {}
          },
          S13: {
            type: 'structure',
            members: {
              ProviderName: {},
              ProviderAttributeName: {},
              ProviderAttributeValue: {}
            }
          },
          S1e: {
            type: 'structure',
            members: {
              DeviceKey: {},
              DeviceAttributes: {
                shape: 'Sj'
              },
              DeviceCreateDate: {
                type: 'timestamp'
              },
              DeviceLastModifiedDate: {
                type: 'timestamp'
              },
              DeviceLastAuthenticatedDate: {
                type: 'timestamp'
              }
            }
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'string',
            sensitive: true
          },
          S1l: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S1m: {
            type: 'structure',
            members: {
              AnalyticsEndpointId: {}
            }
          },
          S1n: {
            type: 'structure',
            required: ['IpAddress', 'ServerName', 'ServerPath', 'HttpHeaders'],
            members: {
              IpAddress: {},
              ServerName: {},
              ServerPath: {},
              HttpHeaders: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    headerName: {},
                    headerValue: {}
                  }
                }
              },
              EncodedData: {}
            }
          },
          S1s: {
            type: 'string',
            sensitive: true
          },
          S1t: {
            type: 'map',
            key: {},
            value: {}
          },
          S1u: {
            type: 'structure',
            members: {
              AccessToken: {
                shape: 'S1v'
              },
              ExpiresIn: {
                type: 'integer'
              },
              TokenType: {},
              RefreshToken: {
                shape: 'S1v'
              },
              IdToken: {
                shape: 'S1v'
              },
              NewDeviceMetadata: {
                type: 'structure',
                members: {
                  DeviceKey: {},
                  DeviceGroupKey: {}
                }
              }
            }
          },
          S1v: {
            type: 'string',
            sensitive: true
          },
          S24: {
            type: 'list',
            member: {
              shape: 'S1e'
            }
          },
          S28: {
            type: 'list',
            member: {
              shape: 'S29'
            }
          },
          S29: {
            type: 'structure',
            members: {
              GroupName: {},
              UserPoolId: {},
              Description: {},
              RoleArn: {},
              Precedence: {
                type: 'integer'
              },
              LastModifiedDate: {
                type: 'timestamp'
              },
              CreationDate: {
                type: 'timestamp'
              }
            }
          },
          S2y: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S31: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              PreferredMfa: {
                type: 'boolean'
              }
            }
          },
          S32: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              PreferredMfa: {
                type: 'boolean'
              }
            }
          },
          S3s: {
            type: 'string',
            sensitive: true
          },
          S3u: {
            type: 'structure',
            members: {
              IpAddress: {},
              EncodedData: {}
            },
            sensitive: true
          },
          S43: {
            type: 'map',
            key: {},
            value: {}
          },
          S44: {
            type: 'map',
            key: {},
            value: {}
          },
          S46: {
            type: 'list',
            member: {}
          },
          S49: {
            type: 'structure',
            members: {
              UserPoolId: {},
              ProviderName: {},
              ProviderType: {},
              ProviderDetails: {
                shape: 'S43'
              },
              AttributeMapping: {
                shape: 'S44'
              },
              IdpIdentifiers: {
                shape: 'S46'
              },
              LastModifiedDate: {
                type: 'timestamp'
              },
              CreationDate: {
                type: 'timestamp'
              }
            }
          },
          S4d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ScopeName', 'ScopeDescription'],
              members: {
                ScopeName: {},
                ScopeDescription: {}
              }
            }
          },
          S4i: {
            type: 'structure',
            members: {
              UserPoolId: {},
              Identifier: {},
              Name: {},
              Scopes: {
                shape: 'S4d'
              }
            }
          },
          S4m: {
            type: 'structure',
            members: {
              JobName: {},
              JobId: {},
              UserPoolId: {},
              PreSignedUrl: {},
              CreationDate: {
                type: 'timestamp'
              },
              StartDate: {
                type: 'timestamp'
              },
              CompletionDate: {
                type: 'timestamp'
              },
              Status: {},
              CloudWatchLogsRoleArn: {},
              ImportedUsers: {
                type: 'long'
              },
              SkippedUsers: {
                type: 'long'
              },
              FailedUsers: {
                type: 'long'
              },
              CompletionMessage: {}
            }
          },
          S4u: {
            type: 'structure',
            members: {
              PasswordPolicy: {
                type: 'structure',
                members: {
                  MinimumLength: {
                    type: 'integer'
                  },
                  RequireUppercase: {
                    type: 'boolean'
                  },
                  RequireLowercase: {
                    type: 'boolean'
                  },
                  RequireNumbers: {
                    type: 'boolean'
                  },
                  RequireSymbols: {
                    type: 'boolean'
                  },
                  TemporaryPasswordValidityDays: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S4z: {
            type: 'structure',
            members: {
              PreSignUp: {},
              CustomMessage: {},
              PostConfirmation: {},
              PreAuthentication: {},
              PostAuthentication: {},
              DefineAuthChallenge: {},
              CreateAuthChallenge: {},
              VerifyAuthChallengeResponse: {},
              PreTokenGeneration: {},
              UserMigration: {},
              PreTokenGenerationConfig: {
                type: 'structure',
                required: ['LambdaVersion', 'LambdaArn'],
                members: {
                  LambdaVersion: {},
                  LambdaArn: {}
                }
              },
              CustomSMSSender: {
                type: 'structure',
                required: ['LambdaVersion', 'LambdaArn'],
                members: {
                  LambdaVersion: {},
                  LambdaArn: {}
                }
              },
              CustomEmailSender: {
                type: 'structure',
                required: ['LambdaVersion', 'LambdaArn'],
                members: {
                  LambdaVersion: {},
                  LambdaArn: {}
                }
              },
              KMSKeyID: {}
            }
          },
          S56: {
            type: 'list',
            member: {}
          },
          S58: {
            type: 'list',
            member: {}
          },
          S5a: {
            type: 'list',
            member: {}
          },
          S5f: {
            type: 'structure',
            members: {
              SmsMessage: {},
              EmailMessage: {},
              EmailSubject: {},
              EmailMessageByLink: {},
              EmailSubjectByLink: {},
              DefaultEmailOption: {}
            }
          },
          S5k: {
            type: 'structure',
            members: {
              AttributesRequireVerificationBeforeUpdate: {
                type: 'list',
                member: {}
              }
            }
          },
          S5m: {
            type: 'structure',
            members: {
              ChallengeRequiredOnNewDevice: {
                type: 'boolean'
              },
              DeviceOnlyRememberedOnUserPrompt: {
                type: 'boolean'
              }
            }
          },
          S5n: {
            type: 'structure',
            members: {
              SourceArn: {},
              ReplyToEmailAddress: {},
              EmailSendingAccount: {},
              From: {},
              ConfigurationSet: {}
            }
          },
          S5r: {
            type: 'structure',
            required: ['SnsCallerArn'],
            members: {
              SnsCallerArn: {},
              ExternalId: {},
              SnsRegion: {}
            }
          },
          S5t: {
            type: 'map',
            key: {},
            value: {}
          },
          S5w: {
            type: 'structure',
            members: {
              AllowAdminCreateUserOnly: {
                type: 'boolean'
              },
              UnusedAccountValidityDays: {
                type: 'integer'
              },
              InviteMessageTemplate: {
                type: 'structure',
                members: {
                  SMSMessage: {},
                  EmailMessage: {},
                  EmailSubject: {}
                }
              }
            }
          },
          S5z: {
            type: 'list',
            member: {
              shape: 'S4'
            }
          },
          S60: {
            type: 'structure',
            required: ['AdvancedSecurityMode'],
            members: {
              AdvancedSecurityMode: {}
            }
          },
          S62: {
            type: 'structure',
            required: ['CaseSensitive'],
            members: {
              CaseSensitive: {
                type: 'boolean'
              }
            }
          },
          S63: {
            type: 'structure',
            members: {
              RecoveryMechanisms: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Priority', 'Name'],
                  members: {
                    Priority: {
                      type: 'integer'
                    },
                    Name: {}
                  }
                }
              }
            }
          },
          S69: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Policies: {
                shape: 'S4u'
              },
              DeletionProtection: {},
              LambdaConfig: {
                shape: 'S4z'
              },
              Status: {
                deprecated: true,
                deprecatedMessage: 'This property is no longer available.'
              },
              LastModifiedDate: {
                type: 'timestamp'
              },
              CreationDate: {
                type: 'timestamp'
              },
              SchemaAttributes: {
                shape: 'S5z'
              },
              AutoVerifiedAttributes: {
                shape: 'S56'
              },
              AliasAttributes: {
                shape: 'S58'
              },
              UsernameAttributes: {
                shape: 'S5a'
              },
              SmsVerificationMessage: {},
              EmailVerificationMessage: {},
              EmailVerificationSubject: {},
              VerificationMessageTemplate: {
                shape: 'S5f'
              },
              SmsAuthenticationMessage: {},
              UserAttributeUpdateSettings: {
                shape: 'S5k'
              },
              MfaConfiguration: {},
              DeviceConfiguration: {
                shape: 'S5m'
              },
              EstimatedNumberOfUsers: {
                type: 'integer'
              },
              EmailConfiguration: {
                shape: 'S5n'
              },
              SmsConfiguration: {
                shape: 'S5r'
              },
              UserPoolTags: {
                shape: 'S5t'
              },
              SmsConfigurationFailure: {},
              EmailConfigurationFailure: {},
              Domain: {},
              CustomDomain: {},
              AdminCreateUserConfig: {
                shape: 'S5w'
              },
              UserPoolAddOns: {
                shape: 'S60'
              },
              UsernameConfiguration: {
                shape: 'S62'
              },
              Arn: {},
              AccountRecoverySetting: {
                shape: 'S63'
              }
            }
          },
          S6i: {
            type: 'structure',
            members: {
              AccessToken: {},
              IdToken: {},
              RefreshToken: {}
            }
          },
          S6k: {
            type: 'list',
            member: {}
          },
          S6m: {
            type: 'list',
            member: {}
          },
          S6o: {
            type: 'list',
            member: {}
          },
          S6p: {
            type: 'list',
            member: {}
          },
          S6r: {
            type: 'list',
            member: {}
          },
          S6s: {
            type: 'list',
            member: {}
          },
          S6u: {
            type: 'list',
            member: {}
          },
          S6w: {
            type: 'structure',
            members: {
              ApplicationId: {},
              ApplicationArn: {},
              RoleArn: {},
              ExternalId: {},
              UserDataShared: {
                type: 'boolean'
              }
            }
          },
          S71: {
            type: 'structure',
            members: {
              UserPoolId: {},
              ClientName: {},
              ClientId: {
                shape: 'S1j'
              },
              ClientSecret: {
                shape: 'S72'
              },
              LastModifiedDate: {
                type: 'timestamp'
              },
              CreationDate: {
                type: 'timestamp'
              },
              RefreshTokenValidity: {
                type: 'integer'
              },
              AccessTokenValidity: {
                type: 'integer'
              },
              IdTokenValidity: {
                type: 'integer'
              },
              TokenValidityUnits: {
                shape: 'S6i'
              },
              ReadAttributes: {
                shape: 'S6k'
              },
              WriteAttributes: {
                shape: 'S6k'
              },
              ExplicitAuthFlows: {
                shape: 'S6m'
              },
              SupportedIdentityProviders: {
                shape: 'S6o'
              },
              CallbackURLs: {
                shape: 'S6p'
              },
              LogoutURLs: {
                shape: 'S6r'
              },
              DefaultRedirectURI: {},
              AllowedOAuthFlows: {
                shape: 'S6s'
              },
              AllowedOAuthScopes: {
                shape: 'S6u'
              },
              AllowedOAuthFlowsUserPoolClient: {
                type: 'boolean'
              },
              AnalyticsConfiguration: {
                shape: 'S6w'
              },
              PreventUserExistenceErrors: {},
              EnableTokenRevocation: {
                type: 'boolean'
              },
              EnablePropagateAdditionalUserContextData: {
                type: 'boolean'
              },
              AuthSessionValidity: {
                type: 'integer'
              }
            }
          },
          S72: {
            type: 'string',
            sensitive: true
          },
          S74: {
            type: 'structure',
            required: ['CertificateArn'],
            members: {
              CertificateArn: {}
            }
          },
          S7m: {
            type: 'structure',
            members: {
              UserPoolId: {},
              ClientId: {
                shape: 'S1j'
              },
              CompromisedCredentialsRiskConfiguration: {
                shape: 'S7n'
              },
              AccountTakeoverRiskConfiguration: {
                shape: 'S7s'
              },
              RiskExceptionConfiguration: {
                shape: 'S81'
              },
              LastModifiedDate: {
                type: 'timestamp'
              }
            }
          },
          S7n: {
            type: 'structure',
            required: ['Actions'],
            members: {
              EventFilter: {
                type: 'list',
                member: {}
              },
              Actions: {
                type: 'structure',
                required: ['EventAction'],
                members: {
                  EventAction: {}
                }
              }
            }
          },
          S7s: {
            type: 'structure',
            required: ['Actions'],
            members: {
              NotifyConfiguration: {
                type: 'structure',
                required: ['SourceArn'],
                members: {
                  From: {},
                  ReplyTo: {},
                  SourceArn: {},
                  BlockEmail: {
                    shape: 'S7u'
                  },
                  NoActionEmail: {
                    shape: 'S7u'
                  },
                  MfaEmail: {
                    shape: 'S7u'
                  }
                }
              },
              Actions: {
                type: 'structure',
                members: {
                  LowAction: {
                    shape: 'S7y'
                  },
                  MediumAction: {
                    shape: 'S7y'
                  },
                  HighAction: {
                    shape: 'S7y'
                  }
                }
              }
            }
          },
          S7u: {
            type: 'structure',
            required: ['Subject'],
            members: {
              Subject: {},
              HtmlBody: {},
              TextBody: {}
            }
          },
          S7y: {
            type: 'structure',
            required: ['Notify', 'EventAction'],
            members: {
              Notify: {
                type: 'boolean'
              },
              EventAction: {}
            }
          },
          S81: {
            type: 'structure',
            members: {
              BlockedIPRangeList: {
                type: 'list',
                member: {}
              },
              SkippedIPRangeList: {
                type: 'list',
                member: {}
              }
            }
          },
          S8k: {
            type: 'structure',
            members: {
              Destination: {},
              DeliveryMedium: {},
              AttributeName: {}
            }
          },
          S8w: {
            type: 'structure',
            required: ['UserPoolId', 'LogConfigurations'],
            members: {
              UserPoolId: {},
              LogConfigurations: {
                shape: 'S8x'
              }
            }
          },
          S8x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['LogLevel', 'EventSource'],
              members: {
                LogLevel: {},
                EventSource: {},
                CloudWatchLogsConfiguration: {
                  type: 'structure',
                  members: {
                    LogGroupArn: {}
                  }
                }
              }
            }
          },
          S96: {
            type: 'structure',
            members: {
              UserPoolId: {},
              ClientId: {
                shape: 'S1j'
              },
              ImageUrl: {},
              CSS: {},
              CSSVersion: {},
              LastModifiedDate: {
                type: 'timestamp'
              },
              CreationDate: {
                type: 'timestamp'
              }
            }
          },
          S9g: {
            type: 'structure',
            members: {
              SmsAuthenticationMessage: {},
              SmsConfiguration: {
                shape: 'S5r'
              }
            }
          },
          S9h: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              }
            }
          },
          Saj: {
            type: 'list',
            member: {
              shape: 'St'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b029216c986097f6fdef74ef37d6da336eb4c8c3.js.map