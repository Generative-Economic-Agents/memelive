System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-06-30',
          endpointPrefix: 'cognito-identity',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Cognito Identity',
          serviceId: 'Cognito Identity',
          signatureVersion: 'v4',
          targetPrefix: 'AWSCognitoIdentityService',
          uid: 'cognito-identity-2014-06-30'
        },
        operations: {
          CreateIdentityPool: {
            input: {
              type: 'structure',
              required: ['IdentityPoolName', 'AllowUnauthenticatedIdentities'],
              members: {
                IdentityPoolName: {},
                AllowUnauthenticatedIdentities: {
                  type: 'boolean'
                },
                AllowClassicFlow: {
                  type: 'boolean'
                },
                SupportedLoginProviders: {
                  shape: 'S5'
                },
                DeveloperProviderName: {},
                OpenIdConnectProviderARNs: {
                  shape: 'S9'
                },
                CognitoIdentityProviders: {
                  shape: 'Sb'
                },
                SamlProviderARNs: {
                  shape: 'Sg'
                },
                IdentityPoolTags: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              shape: 'Sk'
            }
          },
          DeleteIdentities: {
            input: {
              type: 'structure',
              required: ['IdentityIdsToDelete'],
              members: {
                IdentityIdsToDelete: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedIdentityIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IdentityId: {},
                      ErrorCode: {}
                    }
                  }
                }
              }
            }
          },
          DeleteIdentityPool: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {}
              }
            }
          },
          DescribeIdentity: {
            input: {
              type: 'structure',
              required: ['IdentityId'],
              members: {
                IdentityId: {}
              }
            },
            output: {
              shape: 'Sv'
            }
          },
          DescribeIdentityPool: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {}
              }
            },
            output: {
              shape: 'Sk'
            }
          },
          GetCredentialsForIdentity: {
            input: {
              type: 'structure',
              required: ['IdentityId'],
              members: {
                IdentityId: {},
                Logins: {
                  shape: 'S10'
                },
                CustomRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityId: {},
                Credentials: {
                  type: 'structure',
                  members: {
                    AccessKeyId: {},
                    SecretKey: {},
                    SessionToken: {},
                    Expiration: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            authtype: 'none'
          },
          GetId: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                AccountId: {},
                IdentityPoolId: {},
                Logins: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityId: {}
              }
            },
            authtype: 'none'
          },
          GetIdentityPoolRoles: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolId: {},
                Roles: {
                  shape: 'S1c'
                },
                RoleMappings: {
                  shape: 'S1e'
                }
              }
            }
          },
          GetOpenIdToken: {
            input: {
              type: 'structure',
              required: ['IdentityId'],
              members: {
                IdentityId: {},
                Logins: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityId: {},
                Token: {}
              }
            },
            authtype: 'none'
          },
          GetOpenIdTokenForDeveloperIdentity: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'Logins'],
              members: {
                IdentityPoolId: {},
                IdentityId: {},
                Logins: {
                  shape: 'S10'
                },
                PrincipalTags: {
                  shape: 'S1s'
                },
                TokenDuration: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityId: {},
                Token: {}
              }
            }
          },
          GetPrincipalTagAttributeMap: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityProviderName'],
              members: {
                IdentityPoolId: {},
                IdentityProviderName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolId: {},
                IdentityProviderName: {},
                UseDefaults: {
                  type: 'boolean'
                },
                PrincipalTags: {
                  shape: 'S1s'
                }
              }
            }
          },
          ListIdentities: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'MaxResults'],
              members: {
                IdentityPoolId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                HideDisabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolId: {},
                Identities: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIdentityPools: {
            input: {
              type: 'structure',
              required: ['MaxResults'],
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
                IdentityPools: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IdentityPoolId: {},
                      IdentityPoolName: {}
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
                Tags: {
                  shape: 'Sh'
                }
              }
            }
          },
          LookupDeveloperIdentity: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {},
                IdentityId: {},
                DeveloperUserIdentifier: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityId: {},
                DeveloperUserIdentifierList: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          MergeDeveloperIdentities: {
            input: {
              type: 'structure',
              required: ['SourceUserIdentifier', 'DestinationUserIdentifier', 'DeveloperProviderName', 'IdentityPoolId'],
              members: {
                SourceUserIdentifier: {},
                DestinationUserIdentifier: {},
                DeveloperProviderName: {},
                IdentityPoolId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityId: {}
              }
            }
          },
          SetIdentityPoolRoles: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'Roles'],
              members: {
                IdentityPoolId: {},
                Roles: {
                  shape: 'S1c'
                },
                RoleMappings: {
                  shape: 'S1e'
                }
              }
            }
          },
          SetPrincipalTagAttributeMap: {
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityProviderName'],
              members: {
                IdentityPoolId: {},
                IdentityProviderName: {},
                UseDefaults: {
                  type: 'boolean'
                },
                PrincipalTags: {
                  shape: 'S1s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolId: {},
                IdentityProviderName: {},
                UseDefaults: {
                  type: 'boolean'
                },
                PrincipalTags: {
                  shape: 'S1s'
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
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UnlinkDeveloperIdentity: {
            input: {
              type: 'structure',
              required: ['IdentityId', 'IdentityPoolId', 'DeveloperProviderName', 'DeveloperUserIdentifier'],
              members: {
                IdentityId: {},
                IdentityPoolId: {},
                DeveloperProviderName: {},
                DeveloperUserIdentifier: {}
              }
            }
          },
          UnlinkIdentity: {
            input: {
              type: 'structure',
              required: ['IdentityId', 'Logins', 'LoginsToRemove'],
              members: {
                IdentityId: {},
                Logins: {
                  shape: 'S10'
                },
                LoginsToRemove: {
                  shape: 'Sw'
                }
              }
            },
            authtype: 'none'
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
          UpdateIdentityPool: {
            input: {
              shape: 'Sk'
            },
            output: {
              shape: 'Sk'
            }
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {}
          },
          S9: {
            type: 'list',
            member: {}
          },
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ProviderName: {},
                ClientId: {},
                ServerSideTokenCheck: {
                  type: 'boolean'
                }
              }
            }
          },
          Sg: {
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'map',
            key: {},
            value: {}
          },
          Sk: {
            type: 'structure',
            required: ['IdentityPoolId', 'IdentityPoolName', 'AllowUnauthenticatedIdentities'],
            members: {
              IdentityPoolId: {},
              IdentityPoolName: {},
              AllowUnauthenticatedIdentities: {
                type: 'boolean'
              },
              AllowClassicFlow: {
                type: 'boolean'
              },
              SupportedLoginProviders: {
                shape: 'S5'
              },
              DeveloperProviderName: {},
              OpenIdConnectProviderARNs: {
                shape: 'S9'
              },
              CognitoIdentityProviders: {
                shape: 'Sb'
              },
              SamlProviderARNs: {
                shape: 'Sg'
              },
              IdentityPoolTags: {
                shape: 'Sh'
              }
            }
          },
          Sv: {
            type: 'structure',
            members: {
              IdentityId: {},
              Logins: {
                shape: 'Sw'
              },
              CreationDate: {
                type: 'timestamp'
              },
              LastModifiedDate: {
                type: 'timestamp'
              }
            }
          },
          Sw: {
            type: 'list',
            member: {}
          },
          S10: {
            type: 'map',
            key: {},
            value: {}
          },
          S1c: {
            type: 'map',
            key: {},
            value: {}
          },
          S1e: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['Type'],
              members: {
                Type: {},
                AmbiguousRoleResolution: {},
                RulesConfiguration: {
                  type: 'structure',
                  required: ['Rules'],
                  members: {
                    Rules: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Claim', 'MatchType', 'Value', 'RoleARN'],
                        members: {
                          Claim: {},
                          MatchType: {},
                          Value: {},
                          RoleARN: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S1s: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=55aad79c1388531ad50cd12ddbe5159d041a81e9.js.map