System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-06-15',
          endpointPrefix: 'identitystore',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'IdentityStore',
          serviceFullName: 'AWS SSO Identity Store',
          serviceId: 'identitystore',
          signatureVersion: 'v4',
          signingName: 'identitystore',
          targetPrefix: 'AWSIdentityStore',
          uid: 'identitystore-2020-06-15'
        },
        operations: {
          CreateGroup: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId'],
              members: {
                IdentityStoreId: {},
                DisplayName: {
                  shape: 'S3'
                },
                Description: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['GroupId', 'IdentityStoreId'],
              members: {
                GroupId: {},
                IdentityStoreId: {}
              }
            }
          },
          CreateGroupMembership: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'GroupId', 'MemberId'],
              members: {
                IdentityStoreId: {},
                GroupId: {},
                MemberId: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MembershipId', 'IdentityStoreId'],
              members: {
                MembershipId: {},
                IdentityStoreId: {}
              }
            }
          },
          CreateUser: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId'],
              members: {
                IdentityStoreId: {},
                UserName: {
                  shape: 'Sb'
                },
                Name: {
                  shape: 'Sc'
                },
                DisplayName: {
                  shape: 'S4'
                },
                NickName: {
                  shape: 'S4'
                },
                ProfileUrl: {
                  shape: 'S4'
                },
                Emails: {
                  shape: 'Sd'
                },
                Addresses: {
                  shape: 'Sg'
                },
                PhoneNumbers: {
                  shape: 'Si'
                },
                UserType: {
                  shape: 'S4'
                },
                Title: {
                  shape: 'S4'
                },
                PreferredLanguage: {
                  shape: 'S4'
                },
                Locale: {
                  shape: 'S4'
                },
                Timezone: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UserId', 'IdentityStoreId'],
              members: {
                UserId: {},
                IdentityStoreId: {}
              }
            }
          },
          DeleteGroup: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'GroupId'],
              members: {
                IdentityStoreId: {},
                GroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteGroupMembership: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'MembershipId'],
              members: {
                IdentityStoreId: {},
                MembershipId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteUser: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'UserId'],
              members: {
                IdentityStoreId: {},
                UserId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeGroup: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'GroupId'],
              members: {
                IdentityStoreId: {},
                GroupId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['GroupId', 'IdentityStoreId'],
              members: {
                GroupId: {},
                DisplayName: {
                  shape: 'S3'
                },
                ExternalIds: {
                  shape: 'St'
                },
                Description: {
                  shape: 'S4'
                },
                IdentityStoreId: {}
              }
            }
          },
          DescribeGroupMembership: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'MembershipId'],
              members: {
                IdentityStoreId: {},
                MembershipId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityStoreId', 'MembershipId', 'GroupId', 'MemberId'],
              members: {
                IdentityStoreId: {},
                MembershipId: {},
                GroupId: {},
                MemberId: {
                  shape: 'S8'
                }
              }
            }
          },
          DescribeUser: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'UserId'],
              members: {
                IdentityStoreId: {},
                UserId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['UserId', 'IdentityStoreId'],
              members: {
                UserName: {
                  shape: 'Sb'
                },
                UserId: {},
                ExternalIds: {
                  shape: 'St'
                },
                Name: {
                  shape: 'Sc'
                },
                DisplayName: {
                  shape: 'S4'
                },
                NickName: {
                  shape: 'S4'
                },
                ProfileUrl: {
                  shape: 'S4'
                },
                Emails: {
                  shape: 'Sd'
                },
                Addresses: {
                  shape: 'Sg'
                },
                PhoneNumbers: {
                  shape: 'Si'
                },
                UserType: {
                  shape: 'S4'
                },
                Title: {
                  shape: 'S4'
                },
                PreferredLanguage: {
                  shape: 'S4'
                },
                Locale: {
                  shape: 'S4'
                },
                Timezone: {
                  shape: 'S4'
                },
                IdentityStoreId: {}
              }
            }
          },
          GetGroupId: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'AlternateIdentifier'],
              members: {
                IdentityStoreId: {},
                AlternateIdentifier: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['GroupId', 'IdentityStoreId'],
              members: {
                GroupId: {},
                IdentityStoreId: {}
              }
            }
          },
          GetGroupMembershipId: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'GroupId', 'MemberId'],
              members: {
                IdentityStoreId: {},
                GroupId: {},
                MemberId: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MembershipId', 'IdentityStoreId'],
              members: {
                MembershipId: {},
                IdentityStoreId: {}
              }
            }
          },
          GetUserId: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'AlternateIdentifier'],
              members: {
                IdentityStoreId: {},
                AlternateIdentifier: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UserId', 'IdentityStoreId'],
              members: {
                UserId: {},
                IdentityStoreId: {}
              }
            }
          },
          IsMemberInGroups: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'MemberId', 'GroupIds'],
              members: {
                IdentityStoreId: {},
                MemberId: {
                  shape: 'S8'
                },
                GroupIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Results'],
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupId: {},
                      MemberId: {
                        shape: 'S8'
                      },
                      MembershipExists: {
                        shape: 'Sf'
                      }
                    }
                  }
                }
              }
            }
          },
          ListGroupMemberships: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'GroupId'],
              members: {
                IdentityStoreId: {},
                GroupId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['GroupMemberships'],
              members: {
                GroupMemberships: {
                  shape: 'S1k'
                },
                NextToken: {}
              }
            }
          },
          ListGroupMembershipsForMember: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'MemberId'],
              members: {
                IdentityStoreId: {},
                MemberId: {
                  shape: 'S8'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['GroupMemberships'],
              members: {
                GroupMemberships: {
                  shape: 'S1k'
                },
                NextToken: {}
              }
            }
          },
          ListGroups: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId'],
              members: {
                IdentityStoreId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S1p',
                  deprecated: true,
                  deprecatedMessage: 'Using filters with ListGroups API is deprecated, please use GetGroupId API instead.'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Groups'],
              members: {
                Groups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GroupId', 'IdentityStoreId'],
                    members: {
                      GroupId: {},
                      DisplayName: {
                        shape: 'S3'
                      },
                      ExternalIds: {
                        shape: 'St'
                      },
                      Description: {
                        shape: 'S4'
                      },
                      IdentityStoreId: {}
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
              required: ['IdentityStoreId'],
              members: {
                IdentityStoreId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S1p',
                  deprecated: true,
                  deprecatedMessage: 'Using filters with ListUsers API is deprecated, please use GetGroupId API instead.'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Users'],
              members: {
                Users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['UserId', 'IdentityStoreId'],
                    members: {
                      UserName: {
                        shape: 'Sb'
                      },
                      UserId: {},
                      ExternalIds: {
                        shape: 'St'
                      },
                      Name: {
                        shape: 'Sc'
                      },
                      DisplayName: {
                        shape: 'S4'
                      },
                      NickName: {
                        shape: 'S4'
                      },
                      ProfileUrl: {
                        shape: 'S4'
                      },
                      Emails: {
                        shape: 'Sd'
                      },
                      Addresses: {
                        shape: 'Sg'
                      },
                      PhoneNumbers: {
                        shape: 'Si'
                      },
                      UserType: {
                        shape: 'S4'
                      },
                      Title: {
                        shape: 'S4'
                      },
                      PreferredLanguage: {
                        shape: 'S4'
                      },
                      Locale: {
                        shape: 'S4'
                      },
                      Timezone: {
                        shape: 'S4'
                      },
                      IdentityStoreId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          UpdateGroup: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'GroupId', 'Operations'],
              members: {
                IdentityStoreId: {},
                GroupId: {},
                Operations: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateUser: {
            input: {
              type: 'structure',
              required: ['IdentityStoreId', 'UserId', 'Operations'],
              members: {
                IdentityStoreId: {},
                UserId: {},
                Operations: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S3: {
            type: 'string',
            sensitive: true
          },
          S4: {
            type: 'string',
            sensitive: true
          },
          S8: {
            type: 'structure',
            members: {
              UserId: {}
            },
            union: true
          },
          Sb: {
            type: 'string',
            sensitive: true
          },
          Sc: {
            type: 'structure',
            members: {
              Formatted: {
                shape: 'S4'
              },
              FamilyName: {
                shape: 'S4'
              },
              GivenName: {
                shape: 'S4'
              },
              MiddleName: {
                shape: 'S4'
              },
              HonorificPrefix: {
                shape: 'S4'
              },
              HonorificSuffix: {
                shape: 'S4'
              }
            }
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Value: {
                  shape: 'S4'
                },
                Type: {
                  shape: 'S4'
                },
                Primary: {
                  shape: 'Sf'
                }
              }
            }
          },
          Sf: {
            type: 'boolean',
            sensitive: true
          },
          Sg: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StreetAddress: {
                  shape: 'S4'
                },
                Locality: {
                  shape: 'S4'
                },
                Region: {
                  shape: 'S4'
                },
                PostalCode: {
                  shape: 'S4'
                },
                Country: {
                  shape: 'S4'
                },
                Formatted: {
                  shape: 'S4'
                },
                Type: {
                  shape: 'S4'
                },
                Primary: {
                  shape: 'Sf'
                }
              }
            }
          },
          Si: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Value: {
                  shape: 'S4'
                },
                Type: {
                  shape: 'S4'
                },
                Primary: {
                  shape: 'Sf'
                }
              }
            }
          },
          St: {
            type: 'list',
            member: {
              shape: 'Su'
            }
          },
          Su: {
            type: 'structure',
            required: ['Issuer', 'Id'],
            members: {
              Issuer: {
                type: 'string',
                sensitive: true
              },
              Id: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              ExternalId: {
                shape: 'Su'
              },
              UniqueAttribute: {
                type: 'structure',
                required: ['AttributePath', 'AttributeValue'],
                members: {
                  AttributePath: {},
                  AttributeValue: {
                    shape: 'S15'
                  }
                }
              }
            },
            union: true
          },
          S15: {
            type: 'structure',
            members: {},
            document: true
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['IdentityStoreId'],
              members: {
                IdentityStoreId: {},
                MembershipId: {},
                GroupId: {},
                MemberId: {
                  shape: 'S8'
                }
              }
            }
          },
          S1p: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AttributePath', 'AttributeValue'],
              members: {
                AttributePath: {},
                AttributeValue: {
                  shape: 'S4'
                }
              }
            }
          },
          S1z: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AttributePath'],
              members: {
                AttributePath: {},
                AttributeValue: {
                  shape: 'S15'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d948d42b04691bdff81d0a296e7a5cc16a471525.js.map