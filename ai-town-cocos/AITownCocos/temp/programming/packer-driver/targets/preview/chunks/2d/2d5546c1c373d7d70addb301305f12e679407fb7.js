System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2011-06-15',
          endpointPrefix: 'sts',
          globalEndpoint: 'sts.amazonaws.com',
          protocol: 'query',
          serviceAbbreviation: 'AWS STS',
          serviceFullName: 'AWS Security Token Service',
          serviceId: 'STS',
          signatureVersion: 'v4',
          uid: 'sts-2011-06-15',
          xmlNamespace: 'https://sts.amazonaws.com/doc/2011-06-15/'
        },
        operations: {
          AssumeRole: {
            input: {
              type: 'structure',
              required: ['RoleArn', 'RoleSessionName'],
              members: {
                RoleArn: {},
                RoleSessionName: {},
                PolicyArns: {
                  shape: 'S4'
                },
                Policy: {},
                DurationSeconds: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'S8'
                },
                TransitiveTagKeys: {
                  type: 'list',
                  member: {}
                },
                ExternalId: {},
                SerialNumber: {},
                TokenCode: {},
                SourceIdentity: {},
                ProvidedContexts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProviderArn: {},
                      ContextAssertion: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'AssumeRoleResult',
              type: 'structure',
              members: {
                Credentials: {
                  shape: 'Sl'
                },
                AssumedRoleUser: {
                  shape: 'Sq'
                },
                PackedPolicySize: {
                  type: 'integer'
                },
                SourceIdentity: {}
              }
            }
          },
          AssumeRoleWithSAML: {
            input: {
              type: 'structure',
              required: ['RoleArn', 'PrincipalArn', 'SAMLAssertion'],
              members: {
                RoleArn: {},
                PrincipalArn: {},
                SAMLAssertion: {
                  type: 'string',
                  sensitive: true
                },
                PolicyArns: {
                  shape: 'S4'
                },
                Policy: {},
                DurationSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'AssumeRoleWithSAMLResult',
              type: 'structure',
              members: {
                Credentials: {
                  shape: 'Sl'
                },
                AssumedRoleUser: {
                  shape: 'Sq'
                },
                PackedPolicySize: {
                  type: 'integer'
                },
                Subject: {},
                SubjectType: {},
                Issuer: {},
                Audience: {},
                NameQualifier: {},
                SourceIdentity: {}
              }
            }
          },
          AssumeRoleWithWebIdentity: {
            input: {
              type: 'structure',
              required: ['RoleArn', 'RoleSessionName', 'WebIdentityToken'],
              members: {
                RoleArn: {},
                RoleSessionName: {},
                WebIdentityToken: {
                  type: 'string',
                  sensitive: true
                },
                ProviderId: {},
                PolicyArns: {
                  shape: 'S4'
                },
                Policy: {},
                DurationSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'AssumeRoleWithWebIdentityResult',
              type: 'structure',
              members: {
                Credentials: {
                  shape: 'Sl'
                },
                SubjectFromWebIdentityToken: {},
                AssumedRoleUser: {
                  shape: 'Sq'
                },
                PackedPolicySize: {
                  type: 'integer'
                },
                Provider: {},
                Audience: {},
                SourceIdentity: {}
              }
            }
          },
          DecodeAuthorizationMessage: {
            input: {
              type: 'structure',
              required: ['EncodedMessage'],
              members: {
                EncodedMessage: {}
              }
            },
            output: {
              resultWrapper: 'DecodeAuthorizationMessageResult',
              type: 'structure',
              members: {
                DecodedMessage: {}
              }
            }
          },
          GetAccessKeyInfo: {
            input: {
              type: 'structure',
              required: ['AccessKeyId'],
              members: {
                AccessKeyId: {}
              }
            },
            output: {
              resultWrapper: 'GetAccessKeyInfoResult',
              type: 'structure',
              members: {
                Account: {}
              }
            }
          },
          GetCallerIdentity: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'GetCallerIdentityResult',
              type: 'structure',
              members: {
                UserId: {},
                Account: {},
                Arn: {}
              }
            }
          },
          GetFederationToken: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Policy: {},
                PolicyArns: {
                  shape: 'S4'
                },
                DurationSeconds: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'S8'
                }
              }
            },
            output: {
              resultWrapper: 'GetFederationTokenResult',
              type: 'structure',
              members: {
                Credentials: {
                  shape: 'Sl'
                },
                FederatedUser: {
                  type: 'structure',
                  required: ['FederatedUserId', 'Arn'],
                  members: {
                    FederatedUserId: {},
                    Arn: {}
                  }
                },
                PackedPolicySize: {
                  type: 'integer'
                }
              }
            }
          },
          GetSessionToken: {
            input: {
              type: 'structure',
              members: {
                DurationSeconds: {
                  type: 'integer'
                },
                SerialNumber: {},
                TokenCode: {}
              }
            },
            output: {
              resultWrapper: 'GetSessionTokenResult',
              type: 'structure',
              members: {
                Credentials: {
                  shape: 'Sl'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                arn: {}
              }
            }
          },
          S8: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sl: {
            type: 'structure',
            required: ['AccessKeyId', 'SecretAccessKey', 'SessionToken', 'Expiration'],
            members: {
              AccessKeyId: {},
              SecretAccessKey: {
                type: 'string',
                sensitive: true
              },
              SessionToken: {},
              Expiration: {
                type: 'timestamp'
              }
            }
          },
          Sq: {
            type: 'structure',
            required: ['AssumedRoleId', 'Arn'],
            members: {
              AssumedRoleId: {},
              Arn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2d5546c1c373d7d70addb301305f12e679407fb7.js.map